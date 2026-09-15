import { cleanup, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { afterEach, describe, expect, it } from "vitest"
import { allRoutes } from "../scripts/allRoutes"
import { AppRoutes } from "@/App"
import { ui } from "@/content/ui"
import { seoForRoute } from "@/lib/seoForRoute"
import { terminPath } from "@/lib/routes"
import { medicalClinicJsonLd } from "@/lib/structuredData"

/**
 * The whole-site sweep for unfilled sentinels.
 *
 * Sentinel guards existed per surface — Footer, Kontakt, ContactForm,
 * legal — and nothing covered Home, Über uns, Standorte or the JSON-LD. All
 * three unguarded formatAddress() calls found during this slice were on
 * surfaces no sentinel test rendered; each was caught by a human reading a
 * diff, which is not a mechanism.
 *
 * The route list comes from scripts/allRoutes(), the same function
 * prerender.ts and generate-sitemap.ts build from, rather than being
 * hand-listed here: a route added to the site is swept from the moment it
 * exists, and one that is removed stops being swept without a stale test.
 */
const SENTINEL = /TODO_/

afterEach(cleanup)

describe("no unfilled sentinel reaches a rendered page", () => {
  it.each(allRoutes())("%s", (route) => {
    const { container } = render(
      <MemoryRouter initialEntries={[route]}>
        <AppRoutes />
      </MemoryRouter>,
    )

    // innerHTML, not textContent: a sentinel in an href, a src, an alt or a
    // title attribute never appears in the text and is just as shipped.
    expect(container.innerHTML, `${route} renders a TODO_ sentinel`).not.toMatch(SENTINEL)

    // useSeo() writes the title, description, canonical and og: tags into
    // the real document head, which is outside `container` entirely.
    expect(document.title, `${route} has a TODO_ sentinel in its title`).not.toMatch(SENTINEL)
    expect(document.head.innerHTML, `${route} has a TODO_ sentinel in <head>`).not.toMatch(SENTINEL)
  })
})

/**
 * Die Kaufstrecke hat keinen Ausgang — und das ist eine Eigenschaft der
 * SEITE, nicht der Seitenkomponente.
 *
 * Die Knöpfe mit der Aufschrift "Termin buchen" kommen aus drei
 * verschiedenen Bäumen: Hero (in der Seite), Navbar und StickyMobileCta
 * (beide in <Layout>). Ein Test, der <Termin /> bare in einen MemoryRouter
 * hängt, sieht die letzten beiden strukturell nicht und kann die Eigenschaft
 * deshalb nicht prüfen, egal wie er heißt — genau so blieben die Navbar und
 * die fixierte Leiste stehen, während der Hero-Knopf längst weg war. Hier
 * läuft dieselbe <AppRoutes /> wie im Browser, samt Layout.
 *
 * Der Schaden ist auf /termin/erfolg am größten: dort steht der Satz, dass
 * ein bestätigter Termin erst mit unserer Rückmeldung vorliegt, und direkt
 * darunter läge ein Knopf "Termin buchen" — für jemanden, der gerade bezahlt
 * hat, eine Aufforderung, es noch einmal zu tun.
 */
describe("the checkout has no exit", () => {
  const routes = [terminPath("index"), terminPath("erfolg"), terminPath("abbruch")]

  const renderRoute = (route: string) =>
    render(
      <MemoryRouter initialEntries={[route]}>
        <AppRoutes />
      </MemoryRouter>,
    )

  it.each(routes)("%s offers no way out of the checkout", (route) => {
    renderRoute(route)

    // Kein Link, der "Termin buchen" heißt — auf /kontakt zeigend oder, sobald
    // center.locations[0].bookingUrl gesetzt ist, auf ein fremdes Buchungs-
    // portal. Der Footer-Link "Kontakt" bleibt erlaubt: er trägt nicht das
    // Verb, das diese Strecke gerade ausführt.
    expect(
      screen.queryAllByRole("link", { name: new RegExp(ui.bookAppointment.de) }),
      `${route} trägt einen Link "${ui.bookAppointment.de}"`,
    ).toEqual([])

    // Und keine leere fixierte Leiste, wo der Knopf war: StickyMobileCta muss
    // selbst verschwinden, sonst liegt auf dem Handy ein weißer Balken über
    // dem Kaufbutton.
    expect(screen.queryByTestId("sticky-mobile-cta"), `${route} zeigt die Sticky-CTA`).toBeNull()
  })

  it.each(routes)("%s claims no confirmed appointment anywhere on the page", (route) => {
    // Die Zusage, die diese Strecke nie machen darf, gilt für die ganze
    // Seite und nicht nur für den Hauptinhalt: Navbar, Footer und die
    // Sticky-CTA rendern eigene Texte, die keine Seitenkomponente sieht.
    renderRoute(route)
    const text = document.body.textContent ?? ""
    expect(text, route).not.toMatch(/Termin (ist )?gebucht/i)
    expect(text, route).not.toMatch(/Termin bestätigt/i)
    expect(text, route).not.toMatch(/Ihr Termin steht/i)
  })
})

describe("no unfilled sentinel reaches machine-readable output", () => {
  it.each(allRoutes())("seoForRoute(%s)", (route) => {
    // The prerenderer does not mount React: it writes each page's <head>
    // from seoForRoute() directly. A sentinel here ships to 87 static files
    // and to every crawler, without any component ever rendering it.
    expect(JSON.stringify(seoForRoute(route)), `${route} SEO metadata`).not.toMatch(SENTINEL)
  })

  it("medicalClinicJsonLd()", () => {
    // Injected by main.tsx into document.head at startup, so it belongs to
    // no route and the sweep above cannot see it. A placeholder address or
    // phone number here is published to search engines as structured data.
    expect(medicalClinicJsonLd()).not.toMatch(SENTINEL)
  })
})
