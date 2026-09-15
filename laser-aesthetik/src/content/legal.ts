import { center, hasEmail } from "./center"

export interface LegalDocument {
  title: string
  intro: string
  sections: { heading: string; paragraphs: string[] }[]
}

/**
 * The legally responsible entity behind the center.
 *
 * This is the ONLY place in src/ where the doctor's name appears, and it is
 * deliberately NOT exported — the center is a separate business from
 * Privatpraxis Dr. Dost, and §5 TMG is the single reason his name is on the
 * site at all. content.test.ts greps the rest of src/ to enforce this; an
 * export here would let a component quietly undo the whole slice.
 */
const operator = {
  name: "Dr. med. univ. Dost Mohammad",
  street: "Weiher 3",
  postalCode: "84178",
  city: "Kröning",
  professionalTitle: "Arzt (verliehen in Österreich)",
}

const operatorAddress = `${operator.street}, ${operator.postalCode} ${operator.city}`

// The email line is omitted entirely while no address is supplied. A
// placeholder in an Impressum is worse than a missing line: one is
// incomplete, the other is wrong.
const contactLines = [
  operator.name,
  operatorAddress,
  ...(hasEmail() ? [`E-Mail: ${center.email}`] : []),
]

export const impressum: LegalDocument = {
  title: "Impressum",
  intro: "Angaben gemäß § 5 TMG.",
  sections: [
    { heading: "Diensteanbieter", paragraphs: contactLines },
    {
      heading: "Verantwortlich für den Inhalt",
      paragraphs: [`${operator.name}, ${operatorAddress}`],
    },
    {
      heading: "Berufsbezeichnung und berufsrechtliche Regelungen",
      paragraphs: [
        `Berufsbezeichnung: ${operator.professionalTitle}.`,
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
      heading: "Kontaktformular",
      paragraphs: [
        "Wenn Sie uns über das Kontaktformular schreiben, verarbeiten wir die von Ihnen angegebenen Daten (Name, E-Mail-Adresse, optional Ihre Telefonnummer sowie Ihre Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO, die Sie jederzeit für die Zukunft widerrufen können.",
        "Das Formular wird auf unserem eigenen Webspace verarbeitet; es werden keine Daten an Dritte übermittelt. Wir bitten Sie ausdrücklich, über das Formular keine Gesundheitsdaten zu übermitteln. Für medizinische Anliegen vereinbaren Sie bitte einen Termin.",
        "PRÜFEN: Die Speicherdauer der über das Formular eingegangenen Nachrichten sowie das Löschkonzept müssen vor Veröffentlichung ergänzt werden.",
      ],
    },
    // The Terminbuchung section is deliberately absent. It described a data
    // flow to Doctolib, which belonged to Privatpraxis Dr. Dost. Restore it
    // — with the new provider's name — when center.locations[0].bookingUrl
    // is filled in. See Task 4 in the slice-1 plan.
    {
      heading: "Zahlungsabwicklung",
      paragraphs: [
        "Für Zahlungen per Karte oder PayPal nutzen wir Stripe Payments Europe, Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland. Wenn Sie eine Buchung abschließen, werden Sie auf eine von Stripe betriebene Zahlungsseite weitergeleitet. Ihre Zahlungsdaten geben Sie dort ein; wir erhalten sie nicht.",
        "An Stripe übermittelt werden die Bezeichnung und der Betrag der gebuchten Leistung sowie Ihr Wunschtermin und die gewünschte Tageszeit. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, die Erfüllung des Vertrags.",
        "PRÜFEN: Die Speicherdauer der Zahlungsbelege und ein etwaiger Auftragsverarbeitungsvertrag mit Stripe müssen vor der Freischaltung ergänzt werden.",
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

export const agb: LegalDocument = {
  title: "Allgemeine Geschäftsbedingungen",
  intro: "Bedingungen für die Buchung und Vorauszahlung von Behandlungen über diese Website.",
  sections: [
    {
      heading: "Geltungsbereich und Vertragsschluss",
      paragraphs: [
        "PRÜFEN: Der vollständige AGB-Text muss von einer Rechtsanwältin oder einem Rechtsanwalt erstellt werden. Die Buchung von Behandlungen über diese Website ist ein Fernabsatzvertrag; Vertragsschluss, Leistungsumfang, Gültigkeitsdauer von Paketen und Zahlungsbedingungen müssen vor der Freischaltung geregelt sein.",
      ],
    },
    {
      heading: "Wunschtermin und Terminbestätigung",
      paragraphs: [
        "PRÜFEN: Über diese Website wird eine Behandlung vorausbezahlt und ein Wunschtermin angegeben. Der Termin gilt erst als vereinbart, wenn das Center ihn bestätigt. Wie zu verfahren ist, wenn kein Termin zustande kommt — Erstattung, Gutschrift, Frist — muss geregelt sein, bevor die erste Zahlung entgegengenommen wird.",
      ],
    },
    {
      heading: "Preise und Umsatzsteuer",
      paragraphs: [
        "PRÜFEN: Ob und in welchem Umfang die angebotenen Leistungen nach § 4 Nr. 14 UStG umsatzsteuerfrei sind, muss steuerlich geklärt werden. Kosmetische Leistungen ohne medizinische Indikation sind es in der Regel nicht. Die Preisangabenverordnung verlangt die Angabe von Endpreisen.",
      ],
    },
  ],
}

export const widerruf: LegalDocument = {
  title: "Widerrufsbelehrung",
  intro: "Informationen zum Widerrufsrecht bei Fernabsatzverträgen.",
  sections: [
    {
      heading: "Widerrufsrecht",
      paragraphs: [
        "PRÜFEN: Die Widerrufsbelehrung samt Muster-Widerrufsformular muss rechtlich erstellt werden. Insbesondere die Behandlung vorausbezahlter Behandlungspakete und die Frage, ab wann die Vierzehn-Tage-Frist läuft, dürfen nicht geschätzt werden.",
      ],
    },
  ],
}
