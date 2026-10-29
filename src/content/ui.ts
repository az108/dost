import { useLang } from "@/lib/i18n"

/**
 * Site-chrome strings (nav, section headings, buttons, labels) in both
 * languages. Page/medical content lives in its own content files as `Loc`
 * fields; this file is only the UI shell. Access via `useUi()`.
 */
const strings = {
  de: {
    nav: {
      home: "Startseite",
      treatments: "Behandlungen",
      aesthetic: "Ästhetik",
      about: "Über uns",
      gallery: "Galerie",
      contact: "Kontakt",
      book: "Termin buchen",
      langLabel: "Sprache",
    },
    hero: {
      eyebrow: "Ihr Arzt in Landshut",
      headlineLead: "Medizin, die",
      headlineAccent: "zuhört",
      sub: "Schulmedizin und Naturheilverfahren Hand in Hand – Allgemeinmedizin, Notfallmedizin, Naturheilkunde und Akupunktur.",
      book: "Termin buchen",
      explore: "Behandlungen entdecken",
      ratingValue: "5,0",
    },
    steps: {
      eyebrow: "So einfach geht's",
      title: "In drei Schritten zu Ihrer Behandlung",
      items: [
        { title: "Termin vereinbaren", text: "Kontaktieren Sie uns telefonisch oder per Nachricht – wir finden einen passenden Termin für Sie." },
        { title: "Persönliches Gespräch", text: "Im ausführlichen Erstgespräch hören wir zu und verschaffen uns ein genaues Bild Ihrer Beschwerden." },
        { title: "Individuelle Behandlung", text: "Sie erhalten einen auf Sie abgestimmten Behandlungsplan – Schulmedizin und Naturheilkunde Hand in Hand." },
      ],
    },
    testimonials: {
      eyebrow: "Patientenstimmen",
      title: "Das sagen unsere Patienten",
      items: [
        { quote: "Dr. Dost nimmt sich wirklich Zeit und erklärt alles verständlich. Die Kombination aus Schulmedizin und Naturheilkunde hat mir sehr geholfen.", author: "Maria S.", role: "Patientin" },
        { quote: "Endlich ein Arzt, der zuhört und ganzheitlich denkt. Die Akupunktur gegen meine Kopfschmerzen war ein voller Erfolg.", author: "Thomas K.", role: "Patient" },
        { quote: "Kompetent, freundlich und immer erreichbar. Ich fühle mich hier rundum gut aufgehoben.", author: "Andrea L.", role: "Patientin" },
      ],
    },
    search: {
      title: "Fühlen Sie sich unwohl? Sehen Sie sich unsere Behandlungen an.",
      placeholder: "Krankheit oder Beschwerde suchen …",
      noResults: "Keine passende Behandlung gefunden.",
      viewAll: "Alle Behandlungen ansehen",
      resultsIn: "in",
      chatHint: "Oder fragen Sie gerne unseren Praxis-Assistenten.",
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
      eyebrow: "Unser Arzt in Landshut",
    },
    aboutPage: {
      eyebrow: "Über die Praxis",
      title: "Über Dr. Dost",
      intro: "Eine Praxis, in der Schulmedizin und Naturheilverfahren Hand in Hand gehen – persönlich, ganzheitlich und mit Zeit für den Menschen.",
    },
    aesthetic: {
      eyebrow: "Ästhetische Medizin",
      title: "Botox, Laser & ästhetische Behandlungen",
      intro: "Sanfte, natürliche Ergebnisse durch moderne ästhetische Verfahren – persönlich beraten und durchgeführt von Dr. med. univ. Dost Mohammad.",
      cta: "Beratungstermin vereinbaren",
      learnMore: "Mehr erfahren",
      definition: "Definition",
      effect: "Wirkung",
      treatment: "Behandlung",
      faq: "Häufige Fragen",
      detailCtaTitle: "Interesse an einer Behandlung?",
      detailCtaText: "Vereinbaren Sie ein unverbindliches Beratungsgespräch – wir beraten Sie gerne persönlich.",
    },
    contact: {
      title: "Kontakt",
      intro: "Rufen Sie uns an oder schreiben Sie uns – wir nehmen uns Zeit für Ihr Anliegen.",
      address: "Adresse",
      phone: "Telefon",
      mobile: "Handy",
      email: "E-Mail",
      hours: "Sprechzeiten",
      form: {
        title: "Schreiben Sie uns",
        name: "Name",
        email: "E-Mail",
        message: "Ihre Nachricht",
        send: "Nachricht senden",
        note: "Ihre Nachricht öffnet sich in Ihrem E-Mail-Programm und wird an die Praxis gesendet.",
        subject: "Anfrage über die Website",
      },
    },
    chat: {
      open: "Chat öffnen",
      close: "Chat schließen",
      title: "Praxis-Assistent",
      disclaimer: "Allgemeine Informationen – im Notfall wählen Sie 112.",
      aiNotice:
        "Antworten werden von einer KI erstellt und ersetzen keine professionelle ärztliche Behandlung.",
      greeting: "Hallo! Fragen Sie mich zu unseren Behandlungen, Beschwerden oder zur Praxis.",
      placeholder: "Ihre Frage …",
      send: "Senden",
      error: "Es gab ein Problem. Bitte später erneut versuchen oder die Praxis kontaktieren.",
      rateLimited: "Zu viele Anfragen. Bitte einen Moment warten.",
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
      home: "Home",
      treatments: "Treatments",
      aesthetic: "Aesthetics",
      about: "About",
      gallery: "Gallery",
      contact: "Contact",
      book: "Book appointment",
      langLabel: "Language",
    },
    hero: {
      eyebrow: "Your doctor in Landshut",
      headlineLead: "Medicine that",
      headlineAccent: "listens",
      sub: "Conventional medicine and natural healing hand in hand – general medicine, emergency medicine, naturopathy and acupuncture.",
      book: "Book appointment",
      explore: "Explore treatments",
      ratingValue: "5.0",
    },
    steps: {
      eyebrow: "How it works",
      title: "Your treatment in three steps",
      items: [
        { title: "Book an appointment", text: "Reach out by phone or message – we'll find a time that works for you." },
        { title: "Personal consultation", text: "In a thorough first conversation we listen and build a clear picture of your concern." },
        { title: "Individual treatment", text: "You receive a plan tailored to you – conventional medicine and naturopathy hand in hand." },
      ],
    },
    testimonials: {
      eyebrow: "Patient voices",
      title: "What our patients say",
      items: [
        { quote: "Dr. Dost really takes his time and explains everything clearly. The combination of conventional medicine and naturopathy helped me a lot.", author: "Maria S.", role: "Patient" },
        { quote: "Finally a doctor who listens and thinks holistically. The acupuncture for my headaches was a complete success.", author: "Thomas K.", role: "Patient" },
        { quote: "Competent, friendly and always reachable. I feel in truly good hands here.", author: "Andrea L.", role: "Patient" },
      ],
    },
    search: {
      title: "Feeling unwell? Check our treatments.",
      placeholder: "Search a condition or symptom …",
      noResults: "No matching treatment found.",
      viewAll: "View all treatments",
      resultsIn: "in",
      chatHint: "Or feel free to ask our practice assistant.",
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
      eyebrow: "Our doctor in Landshut",
    },
    aboutPage: {
      eyebrow: "About the practice",
      title: "About Dr. Dost",
      intro: "A practice where conventional medicine and natural healing go hand in hand – personal, holistic and with time for the individual.",
    },
    aesthetic: {
      eyebrow: "Aesthetic medicine",
      title: "Botox, laser & aesthetic treatments",
      intro: "Soft, natural results through modern aesthetic procedures – personally advised and performed by Dr. med. univ. Dost Mohammad.",
      cta: "Book a consultation",
      learnMore: "Learn more",
      definition: "Definition",
      effect: "Effect",
      treatment: "Treatment",
      faq: "FAQ",
      detailCtaTitle: "Interested in a treatment?",
      detailCtaText: "Arrange a no-obligation consultation – we'll be glad to advise you personally.",
    },
    contact: {
      title: "Contact",
      intro: "Call us or send a message – we take the time for your concern.",
      address: "Address",
      phone: "Phone",
      mobile: "Mobile",
      email: "Email",
      hours: "Hours",
      form: {
        title: "Write to us",
        name: "Name",
        email: "Email",
        message: "Your message",
        send: "Send message",
        note: "Your message opens in your email program and is sent to the practice.",
        subject: "Enquiry via the website",
      },
    },
    chat: {
      open: "Open chat",
      close: "Close chat",
      title: "Practice assistant",
      disclaimer: "General information – in an emergency, call 112.",
      aiNotice:
        "Replies are AI-generated and are not a substitute for professional medical treatment.",
      greeting: "Hi! Ask me about our treatments, symptoms or the practice.",
      placeholder: "Your question …",
      send: "Send",
      error: "Something went wrong. Please try again later or contact the practice.",
      rateLimited: "Too many requests. Please wait a moment.",
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
