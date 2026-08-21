import { formatAddress, hasPhone, practice } from "./practice"

export interface LegalDocument {
  title: string
  intro: string
  sections: { heading: string; paragraphs: string[] }[]
}

const contactLines = [
  practice.doctor,
  formatAddress(),
  `E-Mail: ${practice.email}`,
  ...(hasPhone() ? [`Telefon: ${practice.phone}`] : []),
]

export const impressum: LegalDocument = {
  title: "Impressum",
  intro: "Angaben gemäß § 5 TMG.",
  sections: [
    { heading: "Diensteanbieter", paragraphs: contactLines },
    {
      heading: "Verantwortlich für den Inhalt",
      paragraphs: [`${practice.doctor}, ${formatAddress()}`],
    },
    {
      heading: "Berufsbezeichnung und berufsrechtliche Regelungen",
      paragraphs: [
        "Berufsbezeichnung: Arzt (verliehen in Österreich).",
        "PRÜFEN: Zuständige Ärztekammer, zuständige Aufsichtsbehörde, Berufsordnung und deren Fundstelle müssen vor Veröffentlichung ergänzt werden.",
      ],
    },
    {
      heading: "Haftung für Inhalte",
      paragraphs: [
        "Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.",
      ],
    },
    {
      heading: "Haftung für Links",
      paragraphs: [
        "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.",
      ],
    },
  ],
}

export const datenschutz: LegalDocument = {
  title: "Datenschutzerklärung",
  intro: "Informationen zur Verarbeitung personenbezogener Daten nach Art. 13 DSGVO.",
  sections: [
    { heading: "Verantwortlicher", paragraphs: contactLines },
    {
      heading: "Hosting",
      paragraphs: [
        "Diese Website wird bei einem Hosting-Anbieter betrieben. Beim Aufruf der Seite verarbeitet der Anbieter technisch notwendige Zugriffsdaten wie IP-Adresse, Datum und Uhrzeit des Zugriffs sowie die abgerufene Datei.",
        "PRÜFEN: Name und Anschrift des Hosting-Anbieters sowie ein etwaiger Auftragsverarbeitungsvertrag müssen vor Veröffentlichung ergänzt werden.",
      ],
    },
    {
      heading: "Cookies und Analyse",
      paragraphs: [
        "Diese Website setzt keine Cookies und bindet keine Analyse- oder Trackingdienste ein. Schriftarten werden lokal ausgeliefert, es werden keine Verbindungen zu Servern Dritter aufgebaut.",
      ],
    },
    {
      heading: "Terminbuchung",
      paragraphs: [
        "Die Terminbuchung erfolgt über den externen Dienst Doctolib. Wenn Sie auf eine Schaltfläche zur Terminbuchung klicken, verlassen Sie diese Website. Für die dortige Datenverarbeitung gilt die Datenschutzerklärung von Doctolib.",
      ],
    },
    {
      heading: "Ihre Rechte",
      paragraphs: [
        "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch. Zudem steht Ihnen ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu.",
      ],
    },
  ],
}
