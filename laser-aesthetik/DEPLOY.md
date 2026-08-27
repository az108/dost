# Deployment

Static site. Build locally, upload `dist/` to the host's web root.

## Build

    npm ci
    npm run sitemap
    npm run build

`dist/` now contains `index.html`, hashed `assets/`, `.htaccess`,
`robots.txt` and `sitemap.xml`.

## Upload

**Namecheap (cPanel):** File Manager → `public_html` → upload the *contents*
of `dist/`, not the folder itself. Ensure hidden files are visible so
`.htaccess` is uploaded — it is what makes deep links work.

**ALL-INKL.COM (KAS):** same, into `/www/htdocs/<account>/`.

By FTP, mirror `dist/` into the web root and confirm `.htaccess` arrived —
most FTP clients skip dotfiles by default.

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

Run `npm test`. Every failing test is a go-live blocker by design:

- **`practice.test.ts` phone guard** — supply the real phone number.
- **`deploy.test.ts` SITE_URL guard** — set the real domain in
  `src/content/seo.ts` and `public/robots.txt`.
- **`PRÜFEN:` markers in `src/content/legal.ts`** — Impressum and
  Datenschutz are scaffolds. Both must be reviewed by a lawyer; §5 TMG and
  DSGVO Art. 13 make their content legally consequential.
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
- **Practice imagery** — done. The Praxis gallery, both category and page
  heroes and the bio panel all use real photographs of the practice and of
  Dr. med. univ. Dost Mohammad (`src/assets/praxis/`), so the "Beispielbilder
  aus vergleichbaren Praxen" disclaimer is gone. Unsplash stock now only
  illustrates individual treatments, never the practice itself.

The site sets no cookies and loads no third-party resources, which is why it
ships without a consent banner. Adding analytics, embedded maps or hosted
fonts changes that and requires a consent solution.

## Handover status

Built and verified: routing, content, pricing, accessibility, build, Apache
config. Outstanding before go-live, in priority order:

1. **Phone number** — not published anywhere; `practice.test.ts` fails until
   supplied.
2. **Real domain** — set `SITE_URL` in `src/content/seo.ts` and the
   `Sitemap:` line in `public/robots.txt`; `deploy.test.ts` fails until
   changed.
3. **Legal review** — Impressum and Datenschutz are scaffolds carrying
   `PRÜFEN:` markers for the responsible medical chamber and the hosting
   provider. §5 TMG and DSGVO Art. 13 make this content legally
   consequential; a lawyer must review both.
4. **Physio and Ästhetik prices** — currently "Preis auf Anfrage", the
   pricing field is wired, so supplying numbers is a data edit. Note this
   also covers three Laser treatments that carry the same
   `{ kind: "onRequest" }` pricing — Gefäßbehandlung, Pigmentflecken and
   Aknenarben — not only the Physio and Ästhetik pillars.
5. **Stock photography** — the 29 *treatment* images are licensed Unsplash
   stock. The practice itself and the doctor are shown only with the
   practice's own photographs. Per-image sources are in `CREDITS.md`.
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
