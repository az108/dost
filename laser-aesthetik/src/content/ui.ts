import { useLocale } from "@/lib/locale"
import type { Localized } from "./types"

/**
 * Interface chrome only — buttons, labels, section headings, form labels,
 * status messages. Treatment content (pillars.ts, treatments.ts) lives
 * elsewhere and is deliberately not duplicated here.
 *
 * A handful of German pillar-identity words (e.g. the "Laser · Physio ·
 * Ästhetik" tagline, or "Laser" used as a section eyebrow) are left
 * hardcoded on purpose: the pillars themselves have no English label yet
 * (PillarInfo.label is still a plain string, not Localized), so translating
 * a passing reference to them here would drift from the real nav the moment
 * pillar content is localized in a later step.
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
  prices: { de: "Preise", en: "Prices" },
  practice: { de: "Praxis", en: "Practice" },
  contact: { de: "Kontakt", en: "Contact" },
  openingHours: { de: "Öffnungszeiten", en: "Opening hours" },
  legalNavLabel: { de: "Rechtliches", en: "Legal" },
  legalImprint: { de: "Impressum", en: "Imprint" },
  legalPrivacy: { de: "Datenschutz", en: "Privacy policy" },
  // The legal pages stay German-only (E4) — these footer labels tell English
  // readers honestly what they're about to click into, instead of quietly
  // landing them on a German page they didn't expect.
  legalImprintGermanOnly: { de: "Impressum", en: "Imprint (auf Deutsch)" },
  legalPrivacyGermanOnly: { de: "Datenschutz", en: "Privacy policy (auf Deutsch)" },
  allRightsReserved: { de: "Alle Rechte vorbehalten.", en: "All rights reserved." },

  // ── Home page ────────────────────────────────────────────────────────
  homeHeroLead: { de: "Medizin, die", en: "Medicine that" },
  homeHeroAccent: { de: "sichtbar wirkt", en: "delivers visible results" },
  homeHeroDescription: {
    de: "Dauerhafte Laserhaarentfernung, Physiotherapie und ästhetische Medizin. Ärztlich durchgeführt, in Kröning bei Landshut.",
    en: "Permanent laser hair reduction, physiotherapy and aesthetic medicine, all carried out by a physician in Kröning near Landshut.",
  },
  homeMetaDescription: {
    de: "Privatärztliche Praxis für Laserbehandlungen, Physiotherapie und ästhetische Medizin in Kröning. Ärztlich durchgeführt, mit transparenten Preisen.",
    en: "Private medical practice for laser treatments, physiotherapy and aesthetic medicine in Kröning. Physician-led, with transparent pricing.",
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

  // ── Contact page ─────────────────────────────────────────────────────
  contactHeroLead: { de: "So erreichen", en: "Here's how to" },
  contactHeroAccent: { de: "Sie uns", en: "reach us" },
  contactHeroDescription: {
    de: "Termine buchen Sie am schnellsten online. Für alles andere schreiben Sie uns einfach.",
    en: "The fastest way to book is online. For anything else, just drop us a message.",
  },
  addressTitle: { de: "Adresse &", en: "Address &" },
  addressAccent: { de: "Anfahrt", en: "directions" },
  viewOnMap: { de: "Auf der Karte ansehen", en: "View on the map" },
  whenWereThereTitle: { de: "Wann wir", en: "When we're" },
  whenWereThereAccent: { de: "da sind", en: "here" },
  messageEyebrow: { de: "Nachricht", en: "Message" },
  writeToUsTitle: { de: "Schreiben Sie", en: "Send us" },
  writeToUsAccent: { de: "uns", en: "a message" },
  contactFormLead: {
    de: "Termine buchen Sie am schnellsten online über die Terminbuchung oben. Für Rückfragen, einen Rückruf oder ein allgemeines Anliegen nutzen Sie stattdessen dieses Formular.",
    en: "The fastest way to book is online using the booking button above. For questions, a callback, or anything else, use this form instead.",
  },
  contactMetaDescriptionSuffix: {
    de: "Termine online über Doctolib.",
    en: "Book appointments online via Doctolib.",
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

  // ── Practice page ────────────────────────────────────────────────────
  thePracticeEyebrow: { de: "Die Praxis", en: "The practice" },
  praxisHeroLead: { de: "Medizin mit", en: "Medicine that" },
  praxisHeroAccent: { de: "Zeit für Sie", en: "takes its time" },
  praxisHeroDescription: {
    de: "Eine privatärztliche Praxis, in der ein Termin ein Termin ist und kein Fünf-Minuten-Fenster zwischen zwei anderen.",
    en: "A private practice where an appointment is an appointment, not a five-minute slot squeezed between two others.",
  },
  praxisIntro1: {
    de: "Als Privatpraxis planen wir bewusst längere Termine. Das gibt uns Raum für eine gründliche Untersuchung und ein Gespräch, in dem auch Ihre Fragen Platz haben.",
    en: "As a private practice, we deliberately schedule longer appointments. That gives us room for a thorough examination and a conversation that leaves space for your questions too.",
  },
  insightsEyebrow: { de: "Einblicke", en: "Insights" },
  roomsAndTechTitle: { de: "Räume und Technik", en: "Rooms and technology" },
  roomsAndTechAccent: { de: "im Überblick", en: "at a glance" },
  galleryLead: {
    de: "Aufnahmen aus unseren eigenen Räumen in Kröning, einschließlich des Lasers, mit dem wir tatsächlich arbeiten.",
    en: "Photographs of our own rooms in Kröning, including the laser we actually work with.",
  },
  // Every image below is a real photograph of this practice, so these alt
  // texts may describe the actual equipment and name the doctor. Nothing
  // here is a stand-in from a stock library any more.
  doctorAltAtDesk: {
    de: "Dr. med. univ. Dost Mohammad an seinem Schreibtisch im Sprechzimmer",
    en: "Dr. med. univ. Dost Mohammad at his desk in the consulting room",
  },
  doctorAltInConsultingRoom: {
    de: "Dr. med. univ. Dost Mohammad im Sprechzimmer der Praxis",
    en: "Dr. med. univ. Dost Mohammad in the practice's consulting room",
  },
  praxisAltLaserDevice: {
    de: "Lasergerät der Praxis im Behandlungsraum, daneben der Schreibtisch",
    en: "The practice's laser device in the treatment room, beside the desk",
  },
  praxisAltDoctorWithHandpiece: {
    de: "Dr. med. univ. Dost Mohammad mit dem Laserhandstück neben Lasergerät und Ultraschall",
    en: "Dr. med. univ. Dost Mohammad holding the laser handpiece beside the laser and ultrasound units",
  },
  praxisAltConsultingRoom: {
    de: "Sprechzimmer der Praxis mit Schreibtisch, Stethoskop und Blutdruckmessgerät",
    en: "The practice's consulting room with desk, stethoscope and blood pressure monitor",
  },
  praxisMetaDescription: {
    de: "Privatärztliche Praxis in Kröning mit ärztlich geführten Laser-, Physio- und Ästhetikbehandlungen.",
    en: "Private medical practice in Kröning offering physician-led laser, physiotherapy and aesthetic treatments.",
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
  stepBookAppointmentBody: {
    de: "Online über Doctolib, in unter einer Minute. Sie wählen Zeitfenster und Behandlung selbst.",
    en: "Online via Doctolib, in under a minute. You choose the time slot and treatment yourself.",
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

  // ── Trust row ────────────────────────────────────────────────────────
  physicianLed: { de: "Ärztlich durchgeführt", en: "Physician-led" },
  trustDoctorPrefix: { de: "Jede Behandlung führt", en: "Every treatment is carried out by" },
  trustDoctorSuffix: {
    de: "persönlich durch. Keine kosmetische Anwendung ohne ärztliche Aufsicht.",
    en: "personally. No cosmetic procedure takes place without medical supervision.",
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
    de: "Buchen Sie online in unter einer Minute. Sie werden direkt zu Doctolib weitergeleitet.",
    en: "Book online in under a minute. You'll be redirected straight to Doctolib.",
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
