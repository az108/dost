# Deployment

Static site. Build locally, upload `dist/` to the host's web root.

## Build

    npm ci
    npm run sitemap
    npm run build

`dist/` now contains `index.html`, hashed `assets/`, `.htaccess`,
`robots.txt` and `sitemap.xml`.

## Automatic deployment (preferred)

`.github/workflows/deploy-laser-aesthetik.yml` builds and uploads to
ALL-INKL over FTPS on every push to `main` that touches `laser-aesthetik/`,
and on manual dispatch. Set these under Settings → Secrets and variables →
Actions. Move one between the two tabs and you must change it in **both**
the credential check and the Deploy step, or the check passes and the
upload fails with an empty input.

| Name | Tab | Value |
|---|---|---|
| `ALLINKL_FTP_SERVER` | Variables | `w0112dd4.kasserver.com` (KAS account `w0112dd4`, "Silvatel") |
| `ALLINKL_FTP_USERNAME` | Variables | a **dedicated** FTP user, see below |
| `ALLINKL_FTP_PASSWORD` | Secrets | that user's password |

**Create a dedicated FTP user, do not reuse the main one.** This webspace
hosts ~61 domains; KAS shows this site's document root as
`/laserhaarentfernung-landshut.de/`. In KAS → FTP, add a user whose home
directory is exactly that path. The FTP user is then locked to this site, so
a mistake in the workflow cannot reach any of the other sites on the account
— and `ALLINKL_SERVER_DIR` can stay at its `/` default.

If instead you reuse an FTP user whose home is the webspace root, you must
set the `ALLINKL_SERVER_DIR` repository variable to
`/laserhaarentfernung-landshut.de/`, or the build lands in the wrong place.

The other optional **variable** is `ALLINKL_FTP_PROTOCOL` (default `ftps`;
set to `ftp` only if the FTPS handshake fails).

The workflow fails before uploading if `.htaccess`, `index.html`,
`sitemap.xml`, `contact.php`, `checkout.php` or `booking.generated.php` is
missing from `dist/`. The last two are the booking flow: without
`checkout.php` the pay button 404s, and without `booking.generated.php`
`checkout.php` has no prices to look up and every purchase returns
`stripe_not_configured`-style failure instead of a Stripe page.

**The deploy is gated on tests.** The workflow runs `npm run test:ci` before
the build, so a real regression stops the upload. It runs `test:ci` and not
`npm test` because the go-live guards below fail by design — `test:ci`
excludes every test named `FAILS UNTIL …` by negative lookahead and nothing
else. Once the guards are resolved and deleted, the two commands are the
same and the step can be switched to `npm test`.

## Manual upload

**Namecheap (cPanel):** File Manager → `public_html` → upload the *contents*
of `dist/`, not the folder itself. Ensure hidden files are visible so
`.htaccess` is uploaded — it is what makes deep links work.

**ALL-INKL.COM (KAS):** same, into `/www/htdocs/<account>/`.

By FTP, mirror `dist/` into the web root and confirm `.htaccess` arrived —
most FTP clients skip dotfiles by default.

## Stripe

`public/checkout.php` braucht einen Secret Key, der nie ins Repository darf —
alles unter `public/` wird ins Web-Root geladen und ist weltweit lesbar.

`/stripe-config.php` **eine Ebene oberhalb** des Document-Roots anlegen,
also neben `laserhaarentfernung-landshut.de/`, nicht darin:

    <?php return ["secret_key" => "sk_live_..."];

`chmod 600`. Das FTP-Deployment fasst die Datei nie an, sie überlebt also
jeden Upload.

PayPal im Stripe-Dashboard unter Einstellungen → Zahlungsmethoden aktivieren.
Das braucht keinen Code: Stripe Checkout bietet an, was das Konto für EUR
freigeschaltet hat.

### Den Live-Endpunkt testen

`mail()` und ausgehendes cURL verhalten sich auf dem Host anders als lokal,
das lässt sich also vor dem Deployment nicht prüfen. Nach dem ersten Upload,
mit einem **Testmodus**-Key in `stripe-config.php`:

1. `/termin` öffnen und eine Buchung starten.
2. Mit `4242 4242 4242 4242` zahlen, beliebiges künftiges Ablaufdatum,
   beliebige CVC.
3. Prüfen, dass der Browser auf `/termin/erfolg` landet.
4. Im Stripe-Dashboard prüfen, dass **Wunschdatum und Tageszeit** in den
   Metadaten stehen — das ist der einzige Weg, auf dem der Termin euch
   erreicht.
5. Live-Key einsetzen.

Gibt Schritt 1 `stripe_not_configured` zurück, liegt die Config-Datei falsch
oder ist nicht lesbar. Kommt `stripe_unreachable`, ist ausgehendes HTTPS
gesperrt und der ALL-INKL-Support muss es öffnen.

## After the first upload

1. Force HTTPS and a single canonical host (with or without `www`) in the
   host's control panel. Pick one and redirect the other.
2. Visit `https://<domain>/behandlungen/achseln` and **refresh**. A 404
   means `.htaccess` is missing or `mod_rewrite` is off.
3. Request a deep page **without** a trailing slash, e.g.
   `https://<domain>/behandlungen/achseln`, and confirm it returns **200
   directly, not a 301**. If it redirects to the trailing-slash URL,
   `DirectorySlash Off` is not taking effect — some shared hosts disallow
   overriding `DirectorySlash` from `.htaccess`. This cannot be verified
   before go-live; if it happens, the fallback is to switch the canonical
   URLs to trailing-slash form instead.
4. Check `https://<domain>/sitemap.xml` loads.
5. Submit the sitemap in Google Search Console.

## Subdirectory hosting

If the site is ever served from a subdirectory, change **both**:

- `vite.config.ts` → `base: "/subdir/"`
- `public/.htaccess` → `RewriteBase /subdir/` and `RewriteRule . /subdir/index.html [L]`

Changing one without the other produces a site with broken assets.

## Before go-live

Run `npm test`. Every failing test is a go-live blocker by design. There are
**ten**, and `npm run test:golive` runs exactly those ten and nothing else:

- **`center.test.ts` go-live guards** — the real brand name, the Landshut
  address, a phone number, an own-domain email address and the center's own
  booking profile. Five tests, one per missing fact.
- **`PRÜFEN:` markers in `src/content/legal.ts`** — all **four** legal
  documents are scaffolds, not two. Impressum and Datenschutz are legally
  consequential under §5 TMG and DSGVO Art. 13. **AGB and
  Widerrufsbelehrung block the payment feature specifically**: selling
  treatments online is a distance contract, and until a lawyer has written
  both, `/termin` stays out of the navigation *and* out of the sitemap (see
  the next item). One guard covers all four.
- **`§ 356 Abs. 4 BGB` — a code obligation, not only a text.** The flow
  takes full prepayment and allows a date as early as today. For a distance
  service contract the 14-day withdrawal right survives full performance
  unless the trader obtained *both* the consumer's express request to begin
  before the period ends *and* her acknowledgement that full performance
  ends the right. Without that, someone can be treated and then withdraw for
  a full refund. Capturing it will almost certainly need **a second checkbox
  in step 4 of `src/pages/Termin.tsx`** whose state is posted and recorded
  in the Stripe metadata beside `wunschdatum` — the consent has to be
  provable, and the Stripe dashboard is the only record there is. The
  wording is the lawyer's; the checkbox and the metadata field are ours and
  **are not built**. Do not sign this off as "the lawyer finished the
  texts". See the comment above `widerruf` in `src/content/legal.ts`.
- **Releasing `/termin` — no test of its own, it rides on the legal guard
  above.** Two places hold the booking flow back while that guard is red,
  and both must be undone together when it goes green, or the site
  contradicts itself:

  1. `src/components/layout/Navbar.tsx` — **add** the nav link.
  2. `src/lib/seoForRoute.ts` — **remove** `withheldFromSitemap` from the
     `/termin` entry, then run `npm run sitemap`. The count goes 84 → 85 and
     `src/deploy.test.ts` has to be updated to match (it pins both the count
     and the absence of the three `/termin` `<loc>`s).

  Withholding only the nav link is not withholding: a URL submitted in the
  sitemap is the way in that actually matters. The route stays in
  `allRoutes()` throughout — it is built and prerendered either way (87
  routes), and it has to be, because Stripe redirects a paying customer
  straight to `/termin/erfolg`.

  Deliberately *not* `noindex` — `/termin` is meant to be indexed once it is
  released; `noindex` would be a permanent statement about the page and
  would also emit a robots meta tag into the shipped HTML. The two return
  pages *are* `noindex`, and stay that way.
- **`deploy.test.ts` VAT guard** — the site asserts "Alle Preise inkl.
  MwSt." on `/preise`, on all 33 treatment pages and (since this slice) in
  the booking summary: 69 pages counting both languages. Whether that is
  true is unsettled — if these services turn out to be exempt under § 4 Nr.
  14 UStG, the line is wrong on **all** of them, not just on the booking
  page, and it is also wrong on every Stripe receipt. Clarify the tax status,
  confirm or correct the two strings in `src/content/ui.ts`, remove the
  `TODO_UMSATZSTEUER` marker there, then delete the guard.
- **`deploy.test.ts` contact form recipient guard** — `public/contact.php`
  has both `RECIPIENT` and `SENDER_DOMAIN` set to placeholders until the
  practice supplies real values. `RECIPIENT` must be a real mailbox.
  `SENDER_DOMAIN` must match the domain the site is actually served from —
  it is used to build the `From` header, and a mismatched domain fails the
  recipient's SPF/DKIM checks and gets the mail spam-filtered even though it
  still arrives at the right address. Test mail delivery on the live host
  after upload: `mail()` behaves differently per host — ALL-INKL works out
  of the box, Namecheap sometimes needs SMTP credentials instead. If
  delivery ever fails, the visitor sees a visible error plus a `mailto:`
  fallback rather than the message being silently lost.
- **Physio and Ästhetik prices** — every treatment in those two pillars
  carries `pricing: { kind: "onRequest" }`; only Laser has fixed prices.
  The client must supply real prices (or confirm "on request" is
  intentional) before go-live.
- **The center's own photography** — outstanding, and it is not a
  formality. **Every image on this site is a stock photograph**, including
  the three page heroes and the three pillar cards; `src/assets/praxis/` was
  deleted in slice 1 along with the practice's own pictures, which the center
  had no right to show. No alt text and no caption claims that any of these
  rooms or people belong to the center, and that wording is the only thing
  keeping the pictures honest — so it must not be "improved" into a claim.
  Once the center exists in Landshut, its own rooms and its own team belong
  in those slots. `CREDITS.md` lists every file, its source and its licence,
  and its "Noch offen" section lists two images that still carry a legible
  third-party brand mark and are known-open.

The site sets no cookies and loads no third-party resources, which is why it
ships without a consent banner. Adding analytics, embedded maps or hosted
fonts changes that and requires a consent solution.

## Handover status

Built and verified: routing, content, pricing, accessibility, build, Apache
config, and the pre-payment booking flow (`/termin` → Stripe Checkout →
`/termin/erfolg`). Outstanding before go-live, in priority order:

0. **`stripe-config.php` on the server** — the one manual step no deploy can
   perform and no test can catch, because the file deliberately lives
   **outside** the repository and outside the web root. Without it every
   single purchase fails with `stripe_not_configured`, and it fails the same
   way whether the key is missing, wrong or unreadable. The FTP deploy never
   touches the file, so it survives uploads — and so does its absence.
   Create it as described under **Stripe** above, `chmod 600`, and run the
   test-mode purchase in *Den Live-Endpunkt testen* before switching to the
   live key. The Stripe dashboard is also the **only** record of a booking:
   the Wunschtermin travels in the session metadata, and nothing else on the
   server stores it.
1. **Phone number** — not published anywhere; `center.test.ts` fails until
   supplied. Note this is the center's own number for the site; the
   *customer's* number is collected by Stripe Checkout
   (`phone_number_collection`), which is how the center reaches someone to
   confirm the appointment they prepaid.
2. **Real domain** — done. `laserhaarentfernung-landshut.de`, **without**
   `www`, is set in `src/content/seo.ts`, `public/robots.txt`, the
   `og:image` URL, the generated sitemap and the two Stripe return URLs in
   `public/checkout.php`. A source assertion in `deploy.test.ts` pins those
   last two against `SITE_URL`, so a future domain change fails loudly in
   one place instead of sending paying customers to a host that no longer
   answers. The apex was chosen because it
   is the vhost KAS actually has configured, with the document root and the
   SSL certificate on it.

   `www` resolves to the same server, so it would otherwise serve a second
   copy of all 87 pages. The `www` → apex and http → https redirects are
   handled in `public/.htaccess`, not in the hosting panel, so they are
   version-controlled and deploy with the site. Nothing to configure in KAS.

   (The similarly-named `laser-haarentfernung-landshut.de`, with the extra
   hyphen, has no DNS A record at all — its KAS entry is an orphaned config
   that no request can reach. Nothing to do there either.)
3. **Legal review** — **four** documents, not two. Impressum and
   Datenschutz are scaffolds carrying `PRÜFEN:` markers for the responsible
   medical chamber and the hosting provider; §5 TMG and DSGVO Art. 13 make
   this content legally consequential. AGB and Widerrufsbelehrung are
   scaffolds too, and they gate the payment feature: `/termin` is withheld
   from both the navigation and the sitemap until they are done, and the
   Widerrufsbelehrung additionally carries a **code** obligation under
   § 356 Abs. 4 BGB (a second checkbox in step 4, its state in the Stripe
   metadata) that is not built. See **Before go-live** above for the full
   statement — it is the item most likely to be closed prematurely.
4. **Physio and Ästhetik prices** — currently "Preis auf Anfrage", the
   pricing field is wired, so supplying numbers is a data edit. Note this
   also covers three Laser treatments that carry the same
   `{ kind: "onRequest" }` pricing — Gefäßbehandlung, Pigmentflecken and
   Aknenarben — not only the Physio and Ästhetik pillars.
5. **Stock photography** — *all* of it, not just the treatment images: the
   heroes, the pillar cards, the location cards and the 29 treatment images
   are licensed stock (Unsplash, Pexels, one CC0 file from Wikimedia
   Commons). Nothing on the site is a photograph of the center. Per-image
   sources and licences are in `CREDITS.md`, together with the two images
   whose third-party brand marks are still open.
6. **Contact form recipient and sender domain** — `public/contact.php` has
   `RECIPIENT` and `SENDER_DOMAIN` set to placeholders; `deploy.test.ts`
   fails until both are supplied. `SENDER_DOMAIN` must match the live
   domain or the `From` header fails SPF/DKIM and the mail is
   spam-filtered. Also test an actual submission on the live host after
   upload, since `mail()` behaves differently per host.

### Claims flagged for legal review

Three pieces of copy were inherited verbatim from the practice's own
existing website and should be checked by a lawyer before go-live:

- `farblichttherapie` says light therapy is used "um verschiedene
  Erkrankungen ... zu heilen", and elsewhere that it "kann heilsam sein" —
  explicit healing claims.
- `akupunktur-tcm` claims "vielfach wissenschaftlich nachgewiesener
  Wirksamkeit" — an efficacy claim for acupuncture/TCM.
- Two laser headlines read "dauerhaft glatt". German law treats laser hair
  removal as *dauerhafte Haarreduktion*, not removal. The claim is
  qualified in the pillar excerpt and the pillar intro (`pillars.ts`), and
  in the Oberlippe treatment body (`treatments.ts`) with the explicit
  phrase "spricht man deshalb von dauerhafter Haarreduktion". The Achseln
  treatment body softens the claim ("für die meisten Patientinnen und
  Patienten") but does not repeat that explicit phrase — a lawyer should
  confirm the qualification is sufficient as written, including this
  asymmetry between the two treatment bodies.

### Constraint to preserve

The site sets no cookies and loads no third-party resources, which is why
it ships without a consent banner. Adding analytics, an embedded map or
hosted fonts changes that and requires a consent solution.
