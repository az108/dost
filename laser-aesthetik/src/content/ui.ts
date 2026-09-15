import { useLocale } from "@/lib/locale"
import type { Localized } from "./types"

/**
 * Interface chrome only — buttons, labels, section headings, form labels,
 * status messages. Treatment content (pillars.ts, treatments.ts) lives
 * elsewhere and is deliberately not duplicated here.
 *
 * The brand strapline used to be hardcoded German in Navbar.tsx and Home.tsx
 * on the grounds that PillarInfo.label was a plain string with no English
 * half to agree with. It is `Localized` now, so the exception has expired:
 * `brandStrapline` below names the three pillars in each language using
 * exactly their own labels.
 */
export const ui = {
  // ── Booking ──────────────────────────────────────────────────────────
  bookAppointment: { de: "Termin buchen", en: "Book an appointment" },
  bookConsultation: { de: "Beratungstermin buchen", en: "Book a consultation" },

  // ── Pricing ──────────────────────────────────────────────────────────
  priceOnRequest: { de: "Preis auf Anfrage", en: "Price on request" },
  onRequestShort: { de: "Auf Anfrage", en: "On request" },
  fromPricePrefix: { de: "ab", en: "from" },
  perSession: { de: "/Sitzung", en: "/session" },
  perSessionInTenPack: {
    de: "/Sitzung im 10er-Paket",
    en: "/session in the 10-session package",
  },
  totalLabel: { de: "gesamt", en: "total" },
  packageColumnSuffix: { de: "er", en: "-pack" },
  packageTierSuffix: { de: "er-Paket", en: "-session package" },
  singleSession: { de: "Einzelsitzung", en: "Single session" },
  pricesIncludeVatNote: {
    de: "Alle Preise inkl. MwSt. Paketpreise gelten bei Vorauszahlung des Gesamtpakets.",
    en: "All prices include VAT. Package prices apply when the full package is paid upfront.",
  },
  packagePricesLead: {
    de: "Paketpreise gelten bei Vorauszahlung des Gesamtpakets. Alle Preise inkl. MwSt.",
    en: "Package prices apply when the full package is paid upfront. All prices include VAT.",
  },
  priceDependsOnAssessment: {
    de: "Der Preis hängt vom Befund und vom Behandlungsumfang ab. Wir besprechen ihn im Erstgespräch und legen ihn dort verbindlich fest, bevor eine Behandlung beginnt.",
    en: "The price depends on the assessment and scope of treatment. We'll discuss it in the initial consultation and agree a binding price there, before any treatment begins.",
  },
  onRequestLead: {
    de: "Bei diesen Behandlungen hängt der Preis vom Befund ab. Wir nennen ihn verbindlich im Erstgespräch, bevor eine Behandlung beginnt.",
    en: "For these treatments, the price depends on the individual assessment. We confirm it in the initial consultation, before any treatment begins.",
  },

  // ── Treatments ───────────────────────────────────────────────────────
  otherTreatments: { de: "Weitere Behandlungen", en: "Other treatments" },
  treatmentsLabel: { de: "Behandlungen", en: "Treatments" },
  pricesForCaption: { de: "Preise für", en: "Prices for" },
  detailsLink: { de: "Details", en: "View details" },
  detailsAndBook: { de: "Details & buchen", en: "Details & booking" },
  learnMore: { de: "Mehr erfahren", en: "Learn more" },
  minutesSuffix: { de: "Min.", en: "min" },
  zone: { de: "Zone", en: "Area" },
  duration: { de: "Dauer", en: "Duration" },
  sessions: { de: "Sitzungen", en: "Sessions" },
  price: { de: "Preis", en: "Price" },
  single: { de: "Einzeln", en: "Single" },

  // ── Section headings (eyebrow / title / accent / lead) ──────────────
  faqEyebrow: { de: "Häufige Fragen", en: "Frequently asked questions" },
  goodToKnowTitle: { de: "Gut zu", en: "Good to" },
  goodToKnowAccent: { de: "wissen", en: "know" },
  allInThisTitle: { de: "Alles in diesem", en: "Everything in this" },
  allInThisAccent: { de: "Bereich", en: "area" },
  categoryTreatmentsCountSuffix: {
    de: "Behandlungen, jede mit ärztlicher Beratung vorab.",
    en: "treatments, each preceded by a medical consultation.",
  },

  // ── Navigation & footer ──────────────────────────────────────────────
  skipToContent: { de: "Zum Inhalt springen", en: "Skip to content" },
  homeAriaLabel: { de: "Zur Startseite", en: "Go to homepage" },
  menuOpen: { de: "Menü öffnen", en: "Open menu" },
  menuClose: { de: "Menü schließen", en: "Close menu" },
  footerTagline: {
    de: "Laser, Kosmetik & Ästhetik und Physiotherapie unter einem Dach.",
    en: "Laser, beauty & aesthetics and physiotherapy under one roof.",
  },
  /*
   * The strapline under the wordmark in the navbar, and the home hero's
   * eyebrow. Names the three pillars with their own `label` values, so it
   * cannot drift from the nav beside it the way the previous hardcoded
   * "Laser · Physio · Ästhetik" did — that one omitted Kosmetik entirely
   * and contradicted both `footerTagline` and the aesthetik pillar's label.
   */
  brandStrapline: {
    de: "Laser · Kosmetik & Ästhetik · Physio",
    en: "Laser · Beauty & Aesthetics · Physio",
  },
  prices: { de: "Preise", en: "Prices" },
  practice: { de: "Über uns", en: "About us" },
  contact: { de: "Kontakt", en: "Contact" },
  openingHours: { de: "Öffnungszeiten", en: "Opening hours" },
  legalNavLabel: { de: "Rechtliches", en: "Legal" },
  legalImprint: { de: "Impressum", en: "Imprint" },
  legalPrivacy: { de: "Datenschutz", en: "Privacy policy" },
  legalTerms: { de: "AGB", en: "Terms and conditions" },
  legalWithdrawal: { de: "Widerruf", en: "Right of withdrawal" },
  // The legal pages stay German-only (E4) — these footer labels tell English
  // readers honestly what they're about to click into, instead of quietly
  // landing them on a German page they didn't expect.
  legalImprintGermanOnly: { de: "Impressum", en: "Imprint (auf Deutsch)" },
  legalPrivacyGermanOnly: { de: "Datenschutz", en: "Privacy policy (auf Deutsch)" },
  legalTermsGermanOnly: { de: "AGB", en: "Terms and conditions (auf Deutsch)" },
  legalWithdrawalGermanOnly: { de: "Widerruf", en: "Right of withdrawal (auf Deutsch)" },
  allRightsReserved: { de: "Alle Rechte vorbehalten.", en: "All rights reserved." },

  // ── Home page ────────────────────────────────────────────────────────
  homeHeroLead: { de: "Medizin, die", en: "Medicine that" },
  homeHeroAccent: { de: "sichtbar wirkt", en: "delivers visible results" },
  homeHeroDescription: {
    de: "Dauerhafte Laserhaarentfernung, Kosmetik und ästhetische Medizin sowie Physiotherapie. Ärztlich geführt, in Landshut.",
    en: "Permanent laser hair reduction, beauty and aesthetic medicine, and physiotherapy. Physician-led, in Landshut.",
  },
  homeMetaDescription: {
    de: "Center für Laserbehandlungen, Kosmetik und ästhetische Medizin sowie Physiotherapie in Landshut. Ärztlich geführt, mit transparenten Preisen.",
    en: "Center for laser treatments, beauty and aesthetic medicine, and physiotherapy in Landshut. Physician-led, with transparent pricing.",
  },
  viewPrices: { de: "Preise ansehen", en: "View prices" },
  threeAreas: { de: "Drei Bereiche", en: "Three areas" },
  homePillarsTitle: { de: "Wobei können wir", en: "How can we" },
  homePillarsAccent: { de: "helfen?", en: "help?" },
  popularEyebrow: { de: "Beliebt", en: "Popular" },
  popularTreatmentsTitle: { de: "Häufig gebuchte", en: "Frequently booked" },
  popularTreatmentsAccent: { de: "Behandlungen", en: "treatments" },
  popularTreatmentsLead: {
    de: "Ein Auszug. Alle Behandlungen und Preise finden Sie in der vollständigen Preisliste.",
    en: "A selection. You'll find every treatment and price in our full price list.",
  },
  viewFullPriceList: { de: "Zur vollständigen Preisliste", en: "View the full price list" },
  /*
   * Alt text for the home hero. Describes what is in the frame and nothing
   * else — no treatment, no result, and no claim that this is the center,
   * which it is not: the center does not exist to photograph yet and every
   * picture on the site is a stock photograph (see CREDITS.md).
   */
  homeHeroImageAlt: {
    de: "Frau mit geschlossenen Augen im warmen Tageslicht",
    en: "Woman with her eyes closed in warm daylight",
  },

  // ── Contact page ─────────────────────────────────────────────────────
  contactHeroLead: { de: "So erreichen", en: "Here's how to" },
  contactHeroAccent: { de: "Sie uns", en: "reach us" },
  contactHeroDescription: {
    de: "Termine und alles andere laufen über das Formular unten. Wir melden uns zügig zurück.",
    en: "Appointments and everything else run through the form below. We'll get back to you promptly.",
  },
  /*
   * The frame this replaced was a domestic living room — a white sofa, a
   * laptop on a black X-frame console, a magazine, a table lamp — and it sat
   * over a stop brighter and visibly cooler than the other two heroes
   * (L 0.65 against 0.40 and 0.49; R/B 1.13 against 1.32 and 1.30). The alt
   * text called it a "Beratungsplatz", asserting a function the picture did
   * not show, which is the one thing CREDITS.md says alt text must never do.
   * Both halves below name only what is in the frame — and, as with every
   * other image here, claim nothing about the center's own rooms.
   */
  contactHeroImageAlt: {
    de: "Sitzecke mit Sofa, Olivenbäumen und rundem Tisch an einer raumhohen Fensterfront",
    en: "A seating corner with a sofa, olive trees and a round table at a floor-to-ceiling window",
  },
  /*
   * Its own key rather than `practice`, which this call site used to borrow
   * while that key still read "Praxis". Task 7 retitled `practice` to
   * "Über uns" for the navbar and /kontakt started rendering
   * "Über uns / Adresse & Anfahrt". A nav label and a section eyebrow are
   * different surfaces; either may be reworded without the other.
   */
  addressEyebrow: { de: "Standort", en: "Location" },
  addressTitle: { de: "Adresse &", en: "Address &" },
  addressAccent: { de: "Anfahrt", en: "directions" },
  viewOnMap: { de: "Auf der Karte ansehen", en: "View on the map" },
  whenWereThereTitle: { de: "Wann wir", en: "When we're" },
  whenWereThereAccent: { de: "da sind", en: "here" },
  messageEyebrow: { de: "Nachricht", en: "Message" },
  writeToUsTitle: { de: "Schreiben Sie", en: "Send us" },
  writeToUsAccent: { de: "uns", en: "a message" },
  /*
   * This form is the center's only booking channel while
   * center.locations[0].bookingUrl is still the BOOKING_TODO sentinel. The
   * lead used to point at a "Terminbuchung oben" that no longer exists and
   * cast the form as the leftover for everything else — precisely backwards.
   */
  contactFormLead: {
    de: "Über dieses Formular läuft alles: Terminanfragen, Rückrufwünsche und allgemeine Fragen. Wählen Sie Ihr Anliegen aus, und wir melden uns mit einem konkreten Terminvorschlag oder einer Antwort zurück.",
    en: "Everything runs through this form: appointment requests, callbacks and general questions. Choose your topic and we'll come back to you with a concrete appointment slot or an answer.",
  },
  contactMetaDescriptionSuffix: {
    de: "Terminanfragen über das Kontaktformular.",
    en: "Request appointments through the contact form.",
  },

  // ── Contact form ─────────────────────────────────────────────────────
  nameLabel: { de: "Name", en: "Full name" },
  emailLabel: { de: "E-Mail", en: "Email" },
  phoneLabel: { de: "Telefon (optional)", en: "Phone (optional)" },
  topicLabel: { de: "Anliegen", en: "Topic" },
  messageLabel: { de: "Nachricht", en: "Message" },
  pleaseSelect: { de: "Bitte wählen", en: "Please select" },
  topicAppointmentRequest: { de: "Terminanfrage", en: "Appointment request" },
  topicCallbackRequested: { de: "Rückruf erbeten", en: "Callback requested" },
  topicGeneralQuestion: { de: "Allgemeine Frage", en: "General question" },
  messageHelper: {
    de: "Bitte senden Sie uns keine Angaben zu Beschwerden oder Diagnosen. Für alles Medizinische vereinbaren Sie bitte einen Termin.",
    en: "Please don't include details about symptoms or diagnoses here. For anything medical, please book an appointment instead.",
  },
  consentPrefix: {
    de: "Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage gespeichert werden. Weitere Informationen finden Sie in der",
    en: "I agree that my details will be stored to process my enquiry. For more information, see our",
  },
  consentLinkText: { de: "Datenschutzerklärung", en: "privacy policy" },
  honeypotLabel: { de: "Webseite", en: "Website" },
  nameRequired: { de: "Bitte geben Sie Ihren Namen an.", en: "Please enter your name." },
  emailRequired: {
    de: "Bitte geben Sie Ihre E-Mail-Adresse an.",
    en: "Please enter your email address.",
  },
  emailInvalid: {
    de: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
    en: "Please enter a valid email address.",
  },
  messageRequired: { de: "Bitte geben Sie eine Nachricht ein.", en: "Please enter a message." },
  consentRequired: {
    de: "Bitte stimmen Sie der Datenverarbeitung zu.",
    en: "Please agree to the data processing.",
  },
  sending: { de: "Wird gesendet…", en: "Sending…" },
  sendMessage: { de: "Nachricht senden", en: "Send message" },
  submitSuccess: {
    de: "Vielen Dank für Ihre Nachricht. Wir melden uns so bald wie möglich bei Ihnen.",
    en: "Thank you for your message. We'll get back to you as soon as possible.",
  },
  submitError: {
    de: "Ihre Nachricht konnte leider nicht gesendet werden.",
    en: "Unfortunately, your message could not be sent.",
  },
  submitErrorFallbackPrefix: {
    de: "Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an",
    en: "Please try again or email us directly at",
  },
  // Shown instead of the line above while center.email is still the
  // EMAIL_TODO sentinel. The prefix ends mid-sentence on purpose — it only
  // reads correctly with an address after it — so the no-address branch
  // needs a sentence of its own rather than the prefix with the link cut off.
  submitErrorRetry: {
    de: "Bitte versuchen Sie es erneut.",
    en: "Please try again.",
  },

  // ── Practice page ────────────────────────────────────────────────────
  // Same words as the nav label `practice`, deliberately its own key: the
  // eyebrow over the page's own hero and the label in the navbar are
  // different surfaces and either may be reworded without the other.
  aboutUsEyebrow: { de: "Über uns", en: "About us" },
  praxisHeroLead: { de: "Medizin mit", en: "Medicine that" },
  praxisHeroAccent: { de: "Zeit für Sie", en: "takes its time" },
  praxisHeroDescription: {
    de: "Ein Center, in dem ein Termin ein Termin ist und kein Fünf-Minuten-Fenster zwischen zwei anderen.",
    en: "A center where an appointment is an appointment, not a five-minute slot squeezed between two others.",
  },
  praxisIntro1: {
    de: "Bei uns planen wir bewusst längere Termine. Das gibt uns Raum für eine gründliche Untersuchung und ein Gespräch, in dem auch Ihre Fragen Platz haben.",
    en: "We deliberately schedule longer appointments. That gives us room for a thorough examination and a conversation that leaves space for your questions too.",
  },
  // The gallery section's header and lead are gone with the photographs
  // themselves: each one was a real picture of the Kröning practice — and a
  // separate Landshut center cannot show them. The alt texts that went with
  // them are not coming back either; the keys below describe stock
  // photographs and say so by describing only what is in the frame.
  praxisHeroImageAlt: {
    de: "Hölzerner Empfangstresen neben einem Olivenbäumchen im Tageslicht",
    en: "Wooden reception counter beside a small olive tree in daylight",
  },
  praxisMetaDescription: {
    de: "Center in Landshut mit ärztlich geführten Laser-, Physio-, Kosmetik- und Ästhetikbehandlungen.",
    en: "Center in Landshut offering physician-led laser, physiotherapy, beauty and aesthetic treatments.",
  },

  // ── Standorte ────────────────────────────────────────────────────────
  standorteEyebrow: { de: "Standorte", en: "Locations" },
  standorteTitle: { de: "Wo Sie uns", en: "Where to" },
  standorteAccent: { de: "finden", en: "find us" },
  standorteLead: {
    de: "Wir starten in Landshut. München und Stuttgart folgen.",
    en: "We are opening in Landshut. München and Stuttgart will follow.",
  },
  standortPlanned: { de: "in Planung", en: "planned" },
  /*
   * One alt text per city card. Each names the city, because that is the
   * one thing the picture is there to say and a screen reader reaching the
   * card has already heard the heading — "Dächer und ein Kirchturm" alone
   * would be three cards that all sound the same.
   *
   * Deliberately descriptive rather than promotional: these are stock
   * photographs of three German cities, not photographs of the center,
   * which has no premises to show in any of them yet.
   *
   * The Landshut photograph was replaced once already. The first one was a
   * street-level crop that carried a rival café's gold wordmark across the
   * bottom-left, a motorsport sponsor banner at the right edge and a lit
   * red traffic light — on the one card whose whole job is to say "this is
   * our city". It also showed no Landshut landmark and no sky. Its
   * replacement is CC0, not Unsplash (see CREDITS.md), and is cropped to
   * exclude a billboard at the left and a charity's name lettered across a
   * facade at the bottom. A cityscape always contains signage somewhere:
   * whoever swaps this next should open the candidate at full size and read
   * the shopfronts before judging the light.
   */
  standortLandshutImageAlt: {
    de: "Blick von oben über die Ziegeldächer der Landshuter Altstadt zum Backsteinturm von St. Martin",
    en: "A view from above across the tiled roofs of Landshut's old town to the brick tower of St. Martin's",
  },
  standortMuenchenImageAlt: {
    de: "Der Münchner Marienplatz im Gegenlicht des frühen Morgens",
    en: "Munich's Marienplatz backlit by the early morning sun",
  },
  standortStuttgartImageAlt: {
    de: "Stuttgarter Dächer im Morgendunst",
    en: "Stuttgart rooftops in the morning haze",
  },

  // ── Prices page ──────────────────────────────────────────────────────
  pricesHeroLead: { de: "Preise, die", en: "Prices that" },
  pricesHeroAccent: { de: "niemanden überraschen", en: "surprise no one" },
  pricesHeroDescription: {
    de: "Alle Laserzonen mit festen Preisen. Paketrabatte: 20 % im 3er, 40 % im 5er, 45 % im 10er.",
    en: "All laser zones have fixed prices. Package discounts: 20% on 3 sessions, 40% on 5, 45% on 10.",
  },
  allZonesTitle: { de: "Alle Zonen im", en: "All zones at a" },
  allZonesAccent: { de: "Überblick", en: "glance" },
  individualEyebrow: { de: "Individuell", en: "Individual" },
  treatmentsOnRequestTitle: { de: "Behandlungen auf", en: "Treatments on" },
  treatmentsOnRequestAccent: { de: "Anfrage", en: "request" },
  pricesMetaDescription: {
    de: "Alle Laserbehandlungszonen mit festen Preisen und Paketrabatten von bis zu 45 %.",
    en: "Every laser treatment zone at a fixed price, with package discounts of up to 45%.",
  },

  // ── 404 page ─────────────────────────────────────────────────────────
  notFoundTitle: { de: "Seite nicht gefunden", en: "Page not found" },
  notFoundBody: {
    de: "Diese Seite gibt es nicht oder nicht mehr. Vielleicht finden Sie über die Startseite, was Sie suchen.",
    en: "This page doesn't exist, or it isn't here anymore. You might find what you're looking for on the homepage.",
  },
  notFoundHomeLink: { de: "Zur Startseite", en: "Go to the homepage" },

  // ── Treatment detail page ───────────────────────────────────────────
  breadcrumbHome: { de: "Start", en: "Home" },
  howItWorksEyebrow: { de: "So funktioniert's", en: "How it works" },
  yourTreatmentTitle: { de: "Ihre Behandlung", en: "Your treatment" },
  inDetailAccent: { de: "im Detail", en: "in detail" },
  yourBenefits: { de: "Ihre Vorteile", en: "Your benefits" },
  whatItCostsTitle: { de: "Was diese Behandlung", en: "What this treatment" },
  costsAccent: { de: "kostet", en: "costs" },

  // ── Process steps ────────────────────────────────────────────────────
  processEyebrow: { de: "Ablauf", en: "Process" },
  processTitle: { de: "So läuft Ihre", en: "How your" },
  processAccent: { de: "Behandlung ab", en: "treatment works" },
  /*
   * The photograph pinned beside the four steps. Its predecessor showed the
   * doctor at work in his own practice and its alt text named him; both are
   * gone. This one shows hands and no face, which is the point — the steps
   * describe what happens to you, not who is famous for doing it.
   */
  processImageAlt: {
    de: "Hände einer Therapeutin auf dem Rücken einer liegenden Person",
    en: "A therapist's hands resting on the back of someone lying down",
  },
  stepBookAppointmentBody: {
    de: "Über unser Kontaktformular, in unter einer Minute. Sie nennen uns Behandlung und Wunschzeitraum, wir bestätigen den Termin.",
    en: "Through our contact form, in under a minute. You tell us the treatment and when suits you, and we confirm the appointment.",
  },
  initialConsultation: { de: "Erstgespräch", en: "Initial consultation" },
  initialConsultationBody: {
    de: "Wir bestimmen Ihren Hauttyp, prüfen Kontraindikationen und legen gemeinsam fest, was sinnvoll ist.",
    en: "We assess your skin type, check for contraindications, and decide together what makes sense.",
  },
  treatmentStep: { de: "Behandlung", en: "Treatment" },
  treatmentStepBody: {
    de: "Die eigentliche Sitzung dauert je nach Zone zwischen fünf und sechzig Minuten.",
    en: "The session itself takes between five and sixty minutes, depending on the area.",
  },
  aftercare: { de: "Nachsorge", en: "Aftercare" },
  aftercareBody: {
    de: "Sie erhalten konkrete Pflegehinweise für die Tage danach und, wenn sinnvoll, einen Folgetermin.",
    en: "You'll get concrete aftercare instructions for the days that follow, plus a follow-up appointment if it makes sense.",
  },

  // ── Approach ─────────────────────────────────────────────────────────
  approachEyebrow: { de: "Unser Ansatz", en: "Our approach" },
  approachTitle: { de: "Drei Bereiche,", en: "Three areas," },
  approachAccent: { de: "ein Konzept", en: "one concept" },
  approachBody: {
    de: "Unsere drei Bereiche greifen ineinander: Wer wegen chronischer Schmerzen kommt, profitiert oft von einer Kombination aus manueller Therapie und Akupunktur. Wer eine ästhetische Behandlung wünscht, bekommt zuerst eine ehrliche Einschätzung, ob sie medizinisch sinnvoll ist.",
    en: "Our three areas work together: patients who come to us for chronic pain often benefit from a combination of manual therapy and acupuncture. Patients who want an aesthetic treatment first receive an honest assessment of whether it makes medical sense.",
  },
  approachPoint1: {
    de: "Ärztlich geführte Beratung vor jeder Behandlung",
    en: "A medically led consultation before every treatment",
  },
  approachPoint2: {
    de: "Transparente Preise, keine Paketbindung im Erstgespräch",
    en: "Transparent prices, no package commitment at the first consultation",
  },
  approachPoint3: {
    de: "Behandlungspläne nach Untersuchung, nicht nach Schema",
    en: "Treatment plans based on examination, not on a template",
  },

  // ── Trust row ────────────────────────────────────────────────────────
  /*
   * Names the three trust points as one group. Never shown: the panel is
   * read visually as three items under the hero and a visible heading would
   * only repeat what the items already say. It exists because the three
   * point titles are h3s, and an h3 with no h2 above it leaves anyone
   * navigating by heading unable to tell where this group begins.
   */
  trustGroupTitle: {
    de: "Wofür dieses Center steht",
    en: "What this center stands for",
  },
  physicianLed: { de: "Ärztlich geführt", en: "Physician-led" },
  /*
   * One string, not a prefix and a suffix around an interpolated name. The
   * two halves existed to wrap `practice.doctor`, and the sentence they
   * built — "Jede Behandlung führt Dr. med. univ. Dost Mohammad persönlich
   * durch." — was the most prominent claim on the site that this is his
   * practice. It renders on the home page and on /praxis. The agent is now
   * the one pillars.ts already uses; the second sentence is untouched.
   */
  physicianLedBody: {
    de: "Jede Behandlung führen ärztlich geprüfte Fachkräfte des Centers durch. Keine kosmetische Anwendung ohne ärztliche Aufsicht.",
    en: "Every treatment is carried out by the center's medically qualified practitioners. No cosmetic procedure takes place without medical supervision.",
  },
  consultBeforeTreatment: { de: "Beratung vor Behandlung", en: "Consultation before treatment" },
  consultBeforeTreatmentBody: {
    de: "Vor jedem Eingriff klären wir Hauttyp, Kontraindikationen und realistische Erwartungen. Auch wenn das heißt, von einer Behandlung abzuraten.",
    en: "Before every procedure we assess skin type, check for contraindications, and set realistic expectations. Even if that means advising against a treatment.",
  },
  transparentPricing: { de: "Transparente Preise", en: "Transparent pricing" },
  transparentPricingBody: {
    de: "Alle Laserzonen mit festen Preisen und Paketrabatten. Keine versteckten Kosten, keine Überraschung am Empfang.",
    en: "All laser zones have fixed prices with package discounts. No hidden costs, no surprises at the front desk.",
  },

  // ── CTA banner ───────────────────────────────────────────────────────
  ctaTitle: { de: "Bereit für Ihren", en: "Ready for your" },
  ctaAccent: { de: "Termin?", en: "appointment?" },
  ctaLead: {
    de: "Schreiben Sie uns Ihren Terminwunsch über das Kontaktformular. Wir melden uns mit einem konkreten Vorschlag zurück.",
    en: "Send us your preferred appointment time through the contact form. We'll come back to you with a concrete slot.",
  },
} as const satisfies Record<string, Localized>

export type UiKey = keyof typeof ui

export function useT() {
  const locale = useLocale()
  return function t<K extends UiKey>(key: K): string {
    return ui[key][locale]
  }
}

export type T = ReturnType<typeof useT>
