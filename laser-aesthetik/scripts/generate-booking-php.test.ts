import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"
import { buildSkuTable, renderPhp } from "./generate-booking-php"
import { treatments, treatmentsByPillar } from "../src/content/treatments"
import { packageTiers, skuFor } from "../src/content/pricing"

const skus = buildSkuTable()

describe("SKU-Tabelle", () => {
  it("legt vier Stufen für jede Festpreis-Behandlung an", () => {
    const fixed = treatments("de").filter((t) => t.pricing.kind === "fixed")
    expect(fixed.length).toBe(16)
    for (const t of fixed) {
      for (const suffix of ["single", "3er", "5er", "10er"]) {
        expect(skus[`${t.slug}-${suffix}`], `${t.slug}-${suffix} fehlt`).toBeDefined()
      }
    }
    expect(Object.keys(skus).length).toBe(64)
  })

  it("kennt jede SKU, die der Flow überhaupt posten kann", () => {
    // Die Bindung zwischen den beiden Hälften des Drahtformats. Der Generator
    // legt die Schlüssel an, src/pages/Termin.tsx baut den geposteten Wert;
    // seit beide skuFor() benutzen, ist die Endung eine Funktion statt zweier
    // Zeichenketten — dieser Test prüft, dass auch die AUSWAHL beider Hälften
    // deckungsgleich ist.
    //
    // Der Flow läuft über treatmentsByPillar("laser", "de"), der Generator
    // über treatments("de"); die beiden stimmen heute nur überein, weil alle
    // 16 Festpreis-Behandlungen LASER sind. Ohne diesen Test wäre die erste
    // Festpreis-Behandlung in einer anderen Säule ein vollständiger
    // Buchungsausfall: unknown_sku am Bezahlknopf, für jede Buchung, ohne
    // eine Zeile, die die Ursache nennt.
    const table = buildSkuTable()
    const bookable = treatmentsByPillar("laser", "de").filter((t) => t.pricing.kind === "fixed")
    expect(bookable.length).toBe(16)
    for (const t of bookable) {
      if (t.pricing.kind !== "fixed") continue
      for (const n of [1, ...packageTiers(t.pricing).map((x) => x.sessions)]) {
        expect(table, `${skuFor(t.slug, n)} fehlt in der Tabelle`).toHaveProperty(skuFor(t.slug, n))
      }
    }
  })

  it("nimmt keine onRequest-Behandlung auf", () => {
    // Diese haben keinen Preis. Eine SKU dafür hieße, der Endpunkt könnte
    // gebeten werden, etwas zu verkaufen, das die Seite als "auf Anfrage"
    // ausweist.
    const onRequest = treatments("de").filter((t) => t.pricing.kind === "onRequest")
    expect(onRequest.length).toBe(17)
    for (const t of onRequest) {
      for (const sku of Object.keys(skus)) {
        expect(sku.startsWith(`${t.slug}-`), `${sku} preist eine onRequest-Behandlung`).toBe(false)
      }
    }
  })

  it("führt jeden Betrag als positive ganze Zahl in Cent", () => {
    // Stripe lehnt Floats ab. Ein Rundungsfehler hier ist eine Belastung,
    // die entweder an der API scheitert oder — schlimmer — mit dem falschen
    // Betrag durchgeht.
    for (const [sku, e] of Object.entries(skus)) {
      expect(Number.isInteger(e.amount), `${sku} ist keine ganze Zahl`).toBe(true)
      expect(e.amount, `${sku} ist nicht positiv`).toBeGreaterThan(0)
      expect(e.currency).toBe("eur")
      expect(e.name.length, `${sku} hat keinen Namen`).toBeGreaterThan(0)
      expect([1, 3, 5, 10]).toContain(e.sessions)
    }
  })

  it("trifft die Beträge, die die Preisseite zeigt", () => {
    // Der einzige Grund, diese Tabelle zu generieren statt zu pflegen:
    // Seite und Server müssen denselben Betrag nennen.
    const achseln = treatments("de").find((t) => t.slug === "achseln")!
    if (achseln.pricing.kind !== "fixed") throw new Error("Fixture geändert")
    expect(skus["achseln-single"].amount).toBe(achseln.pricing.single * 100)
    expect(skus["achseln-single"].sessions).toBe(1)
  })
})

describe("PHP-Ausgabe", () => {
  it("gibt ein Array zurück und tut sonst nichts", () => {
    const php = renderPhp(skus)
    expect(php.startsWith("<?php")).toBe(true)
    expect(php).toContain("return [")
    // Kein echo, keine Seiteneffekte: die Datei wird `require`d, und alles
    // was sie ausgibt, zerstört die JSON-Antwort.
    expect(php).not.toContain("echo")
  })

  it("maskiert einfache Anführungszeichen in Namen", () => {
    // Nichts im aktuellen Bestand hat einen Apostroph — genau deshalb fällt
    // es niemandem auf, wenn es kaputtgeht.
    const php = renderPhp({
      "x-single": { amount: 100, currency: "eur", name: "Anna's Zone", sessions: 1 },
    })
    expect(php).toContain("\\'")
  })

  it("bleibt mit der committeten Datei im Gleichklang", () => {
    // Die committete Datei ist das, woraus der Server tatsächlich abrechnet.
    // Eine Preisänderung, die den Generator überspringt, muss hier scheitern
    // statt eine Abweichung auszuliefern.
    const committed = readFileSync(resolve(__dirname, "../public/booking.generated.php"), "utf8")
    expect(committed).toBe(renderPhp(buildSkuTable()))
  })
})
