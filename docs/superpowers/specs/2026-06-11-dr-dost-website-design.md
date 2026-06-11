# Design: Website "Dr. Dost" — moderne Arztpraxis-Website

**Date:** 2026-06-11
**Status:** Approved by user

## Goal

A modern, German-language website for Dr. med. univ. Dost Mohammad (Landshut), replacing his former Silvamed practice site. Client-side only (no backend). Content for the Behandlungen, Fachbereiche, and Arzt sections is copied verbatim from https://www.silvamed.de/standorte/hausarztpraxis-landshut/ and its subpages, with all "Silvamed" branding replaced by the new brand **"Dr. Dost"**.

## Tech stack

- Vite + React + TypeScript (SPA, static build)
- Tailwind CSS v4 + shadcn/ui
- Motion (framer-motion) for scroll animations
- React Router for detail pages
- Content stored as structured TypeScript data files in `src/content/` so text can be edited without touching components

## Pages & structure

### Landing page (long scroll, in order)
1. **Hero** — large editorial headline, doctor intro line, "Termin buchen" CTA, layered doctor photo with floating badge cards
2. **Behandlungen** — card grid, each card links to its detail page
3. **Fachbereiche** — section with cards linking to detail pages
4. **Arzt** — photo from `figures/img.png` + bio (vernetztes Denken, Schulmedizin & Naturheilverfahren, TCM/Homöopathie/Akupunktur, ästhetische Medizin: Botox, Hyaluron, PRP, Fädentechnologie)
5. **Kontakt / Standort** — Am Alten Viehmarkt 5, 84028 Landshut; Tel. 0871 . 430 747 – 0; Handy 0176 / 747 322 89; Fax 0871 . 430 747 – 20; E-Mail dr.dost@silvamed.de; Sprechzeiten: Nach Vereinbarung
6. **Footer** — copyright, links to Impressum & Datenschutz

### Detail pages
- `/behandlungen/<slug>` and `/fachbereiche/<slug>` — full verbatim German text per topic, hero image, "Termin buchen" CTA linking back to the contact section
- Impressum & Datenschutz as placeholder pages

### CTA behavior
"Termin buchen" scrolls to the contact section (no form, no external booking for v1).

## Look & feel

Chosen direction: **Clean Editorial (A) base + Soft Organic gradients from (B)**.

- Predominantly white background for a professional, trustworthy feel
- Brand colors as accents only: **#FFB266** (orange) and **#99FF99** (green)
- Elegant serif display font for headlines, clean sans-serif for body text
- Soft orange/green radial gradient blobs drifting slowly behind sections (subtle)
- Layered/overlapping elements: doctor photo with floating stat/badge cards, treatment cards lifting on hover, scroll-reveal animations per section
- Sticky navigation bar with glass blur
- Professional, not garish: motion and layering provide the "modern" feel, not loud color

## Imagery

- Doctor photo: `figures/img.png` (provided in repo)
- Treatments/specialties: curated free stock photos (Unsplash), warm tones matching the palette

## Content source

- Scrape Behandlungen, Fachbereiche, and Arzt subpages from silvamed.de verbatim (German, no paraphrasing)
- Fallback if a page is unreachable: the user-provided description of Dr. Mohammad and section list
- Replace all "Silvamed"/"MVZ Vilsbiburg Silvamed GmbH" branding with "Dr. Dost"

## Out of scope (v1)

- Backend, forms that actually send, online booking integration
- Aktuelles/News section
- Multi-language support (German only)
- Real Impressum/Datenschutz legal text (placeholders)

## Testing

- Component/data integrity: each content entry renders a card and a resolvable detail route
- Manual verification in browser: golden path (landing scroll, nav, detail pages, CTA scroll), responsive check (mobile/desktop)
