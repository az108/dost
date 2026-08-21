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
3. Check `https://<domain>/sitemap.xml` loads.
4. Submit the sitemap in Google Search Console.

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
- **Physio and Ästhetik prices** — every treatment in those two pillars
  carries `pricing: { kind: "onRequest" }`; only Laser has fixed prices.
  The client must supply real prices (or confirm "on request" is
  intentional) before go-live.
- **Doctor portrait** — the bio panel (`src/sections/DoctorIntro.tsx`)
  deliberately shows the practice logo rather than a stock face; a real
  portrait of Dr. med. univ. Dost Mohammad is still needed.

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
4. **A real portrait of the doctor** — the bio panel deliberately shows the
   practice crest and his name as text, because a stock photo captioned
   with a real physician's name would misrepresent him to patients.
5. **Physio and Ästhetik prices** — currently "Preis auf Anfrage", the
   pricing field is wired, so supplying numbers is a data edit. Note this
   also covers three Laser treatments that carry the same
   `{ kind: "onRequest" }` pricing — Gefäßbehandlung, Pigmentflecken and
   Aknenarben — not only the Physio and Ästhetik pillars.
6. **Stock photography** — the 29 treatment images are licensed Unsplash
   stock standing in for photos of the actual practice. Per-image sources
   are in `CREDITS.md`.

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
