import { useLang } from "@/lib/i18n"

/**
 * Site-chrome strings (nav, section headings, buttons, labels) in both
 * languages. Page/medical content lives in its own content files as `Loc`
 * fields; this file is only the UI shell. Access via `useUi()`.
 */
const strings = {
  de: {
    nav: {
      treatments: "Behandlungen",
      about: "Über uns",
      gallery: "Galerie",
      contact: "Kontakt",
      book: "Termin buchen",
      langLabel: "Sprache",
    },
    hero: {
      eyebrow: "Ihr Privatarzt in Magersdorf",
      headlineLead: "Medizin, die",
      headlineAccent: "zuhört",
      sub: "Schulmedizin und Naturheilverfahren Hand in Hand – Allgemeinmedizin, Notfallmedizin, Naturheilkunde und Akupunktur.",
      book: "Termin buchen",
      explore: "Behandlungen entdecken",
    },
    search: {
      title: "Fühlen Sie sich unwohl? Sehen Sie sich unsere Behandlungen an.",
      placeholder: "Krankheit oder Beschwerde suchen …",
      noResults: "Keine passende Behandlung gefunden.",
      viewAll: "Alle Behandlungen ansehen",
      resultsIn: "in",
    },
    about: {
      eyebrow: "Über Dr. Dost",
      title: "Willkommen bei Dr. Dost",
      subtitle: "Ihre Gesundheit. Ihr Arzt. Überall.",
      body: "Schulmedizin und Naturheilverfahren gehen bei uns Hand in Hand. Im Mittelpunkt steht immer der Mensch mit seinem individuellen Anliegen – persönlich betreut von Dr. med. univ. Dost Mohammad.",
      points: ["Praktischer Arzt", "Notfallmedizin", "Naturheilkunde", "Akupunktur & TCM"],
      hoursTitle: "Sprechzeiten",
      hoursValue: "Nach Vereinbarung",
      book: "Termin buchen",
      founder: "Gründer",
      more: "Mehr über Dr. Dost Mohammad",
      clinicLabel: "Praxis",
    },
    why: {
      eyebrow: "Warum wir",
      title: "Warum Sie uns wählen sollten",
      cards: [
        {
          title: "Qualifizierter Arzt",
          text: "Langjährige Erfahrung in Schulmedizin und Naturheilkunde – jede Behandlung persönlich durch Dr. Dost Mohammad.",
        },
        {
          title: "Vertrauensvolle Behandlung",
          text: "Schul- und Naturheilkunde Hand in Hand, immer mit dem Patienten und seinem Anliegen im Mittelpunkt.",
        },
        {
          title: "Bequeme Versorgung",
          text: "Termine nach Vereinbarung und eine Behandlung, die sich wirklich Zeit für Sie nimmt.",
        },
      ],
    },
    areas: {
      eyebrow: "Behandlungsgebiete",
      title: "Unsere Behandlungsgebiete",
      intro: "Von den Atemwegen über die Naturheilkunde bis zur ästhetischen Medizin – finden Sie das passende Gebiet.",
      button: "Zu allen Behandlungen",
    },
    treatments: {
      eyebrow: "Behandlungen",
      title: "Behandlungsgebiete",
      intro: "Wählen Sie ein Gebiet, um die zugehörigen Krankheiten und Behandlungen zu sehen.",
      soon: "Inhalte folgen in Kürze",
    },
    area: {
      diseasesTitle: "Krankheiten in diesem Gebiet",
      soon: "Die Inhalte für dieses Gebiet werden derzeit vorbereitet.",
    },
    disease: {
      definition: "Definition",
      treatmentsTitle: "Behandlung",
      sections: {
        medical: "Schulmedizinische Behandlung",
        naturopathic: "Naturheilkundliche Behandlung",
        tcm: "TCM-Kräutertherapie",
        ayurvedic: "Ayurvedische Behandlung",
        physio: "Physiotherapeutische Behandlung",
      },
      icd: "ICD-10",
      aiCaption: "KI-generiert",
      disclaimer:
        "Dieser Inhalt dient der allgemeinen Information und ersetzt keine ärztliche Beratung, Diagnose oder Behandlung.",
    },
    arzt: {
      eyebrow: "Unser Arzt in Magersdorf",
    },
    contact: {
      title: "Kontakt",
      intro: "Rufen Sie uns an oder schreiben Sie uns – wir nehmen uns Zeit für Ihr Anliegen.",
      address: "Adresse",
      phone: "Telefon",
      mobile: "Handy",
      email: "E-Mail",
      hours: "Sprechzeiten",
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
      impressum: "Impressum",
      datenschutz: "Datenschutz",
    },
    notFound: {
      title: "Seite nicht gefunden",
      back: "Zurück zur Startseite",
    },
    legal: {
      impressum: "Impressum",
      datenschutz: "Datenschutz",
    },
    gallery: {
      eyebrow: "Praxis",
      title: "Galerie",
      intro:
        "Ein paar Einblicke in unsere Praxis – Sprechzimmer, Behandlungsräume und moderne medizinische Ausstattung.",
      close: "Schließen",
      prev: "Vorheriges Bild",
      next: "Nächstes Bild",
      dialog: "Bildansicht",
    },
    topic: {
      book: "Termin buchen",
    },
    common: {
      back: "Zurück",
      home: "Start",
      diseases: "Krankheiten",
    },
  },

  en: {
    nav: {
      treatments: "Treatments",
      about: "About",
      gallery: "Gallery",
      contact: "Contact",
      book: "Book appointment",
      langLabel: "Language",
    },
    hero: {
      eyebrow: "Your private physician in Magersdorf",
      headlineLead: "Medicine that",
      headlineAccent: "listens",
      sub: "Conventional medicine and natural healing hand in hand – general medicine, emergency medicine, naturopathy and acupuncture.",
      book: "Book appointment",
      explore: "Explore treatments",
    },
    search: {
      title: "Feeling unwell? Check our treatments.",
      placeholder: "Search a condition or symptom …",
      noResults: "No matching treatment found.",
      viewAll: "View all treatments",
      resultsIn: "in",
    },
    about: {
      eyebrow: "About Dr. Dost",
      title: "Welcome to Dr. Dost",
      subtitle: "Your health. Your doctor. Anywhere.",
      body: "Conventional medicine and natural healing go hand in hand here. The person and their individual concern always comes first – cared for personally by Dr. med. univ. Dost Mohammad.",
      points: ["General Practitioner", "Emergency Medicine", "Naturopathic Medicine", "Acupuncture & TCM"],
      hoursTitle: "Consultation hours",
      hoursValue: "By appointment",
      book: "Book appointment",
      founder: "Founder",
      more: "More about Dr. Dost Mohammad",
      clinicLabel: "Clinic",
    },
    why: {
      eyebrow: "Why us",
      title: "Why choose us",
      cards: [
        {
          title: "Qualified Doctor",
          text: "Years of experience in both conventional medicine and naturopathy – every treatment personally by Dr. Dost Mohammad.",
        },
        {
          title: "Trusted Treatment",
          text: "Conventional and natural medicine hand in hand, always with the patient and their concern at the centre.",
        },
        {
          title: "Convenient Care",
          text: "Appointments by arrangement and care that genuinely takes the time to listen to you.",
        },
      ],
    },
    areas: {
      eyebrow: "Treatment areas",
      title: "Our treatment areas",
      intro: "From the respiratory system to naturopathy and aesthetic medicine – find the area that fits.",
      button: "View all treatments",
    },
    treatments: {
      eyebrow: "Treatments",
      title: "Treatment areas",
      intro: "Choose an area to see the conditions and treatments it covers.",
      soon: "Content coming soon",
    },
    area: {
      diseasesTitle: "Conditions in this area",
      soon: "The content for this area is currently being prepared.",
    },
    disease: {
      definition: "Definition",
      treatmentsTitle: "Treatment",
      sections: {
        medical: "Medical Treatment",
        naturopathic: "Naturopathic Treatment",
        tcm: "TCM Herbal Therapy",
        ayurvedic: "Ayurvedic Treatment",
        physio: "Physiotherapeutic Treatment",
      },
      icd: "ICD-10",
      aiCaption: "AI generated",
      disclaimer:
        "This content is for general information only and does not replace medical advice, diagnosis or treatment.",
    },
    arzt: {
      eyebrow: "Our doctor in Magersdorf",
    },
    contact: {
      title: "Contact",
      intro: "Call us or send a message – we take the time for your concern.",
      address: "Address",
      phone: "Phone",
      mobile: "Mobile",
      email: "Email",
      hours: "Hours",
    },
    footer: {
      rights: "All rights reserved.",
      impressum: "Imprint",
      datenschutz: "Privacy",
    },
    notFound: {
      title: "Page not found",
      back: "Back to home",
    },
    legal: {
      impressum: "Imprint",
      datenschutz: "Privacy Policy",
    },
    gallery: {
      eyebrow: "Practice",
      title: "Gallery",
      intro:
        "A few impressions of our practice – consultation rooms, treatment rooms and modern medical equipment.",
      close: "Close",
      prev: "Previous image",
      next: "Next image",
      dialog: "Image view",
    },
    topic: {
      book: "Book appointment",
    },
    common: {
      back: "Back",
      home: "Home",
      diseases: "conditions",
    },
  },
} as const

export function useUi() {
  const { lang } = useLang()
  return strings[lang]
}

export type Ui = (typeof strings)["de"]
