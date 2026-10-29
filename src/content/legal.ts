import type { Loc } from "@/lib/i18n"

// A legal page is a list of sections, each an optional heading plus one or
// more paragraphs. Rendered by src/pages/Legal.tsx.
export type LegalBlock = { heading?: string; body: string[] }

// NOTE: Draft legal texts. The practice-specific details (contact e-mail,
// phone, exact professional-title wording, any VAT ID) must be verified by
// the practice owner before publication. Address/phone reflect the Landshut
// practice of Dr. med. univ. Dost Mohammad; "[bitte ergänzen]" marks a field
// that still needs confirming.
export const legal: { impressum: Loc<LegalBlock[]>; datenschutz: Loc<LegalBlock[]> } = {
  impressum: {
    de: [
      {
        heading: "Angaben gemäß § 5 DDG",
        body: [
          "Dr. med. univ. Dost Mohammad\nPraxis für Allgemeinmedizin und Naturheilverfahren\nAm Alten Viehmarkt 5\n84028 Landshut",
        ],
      },
      {
        heading: "Kontakt",
        body: ["Telefon: 0871 430747-0\nE-Mail: [bitte ergänzen]"],
      },
      {
        heading: "Berufsbezeichnung und berufsrechtliche Regelungen",
        body: [
          "Berufsbezeichnung: Arzt (Praktischer Arzt; Schwerpunkte: Notfallmedizin, Akupunktur und Naturheilverfahren)",
          "Verliehen in: Deutschland",
          "Zuständige Kammer: Bayerische Landesärztekammer (BLÄK), Mühlbaurstraße 16, 81677 München, www.blaek.de",
          "Es gelten die berufsrechtlichen Regelungen der Berufsordnung für die Ärzte Bayerns, einsehbar bei der Bayerischen Landesärztekammer.",
        ],
      },
      {
        heading: "Zuständige Aufsichtsbehörde",
        body: [
          "Kassenärztliche Vereinigung Bayerns (KVB), Elsenheimerstraße 39, 80687 München, www.kvb.de",
        ],
      },
      {
        heading: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
        body: ["Dr. med. univ. Dost Mohammad, Anschrift wie oben."],
      },
      {
        heading: "Haftung für Inhalte",
        body: [
          "Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Die Inhalte dienen der allgemeinen Information und ersetzen keine individuelle ärztliche Beratung, Diagnose oder Behandlung.",
        ],
      },
      {
        heading: "Haftung für Links",
        body: [
          "Unser Angebot enthält gegebenenfalls Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
        ],
      },
      {
        heading: "Urheberrecht",
        body: [
          "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung und Verbreitung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung.",
        ],
      },
    ],
    en: [
      {
        heading: "Information pursuant to § 5 DDG",
        body: [
          "Dr. med. univ. Dost Mohammad\nPractice for General Medicine and Naturopathy\nAm Alten Viehmarkt 5\n84028 Landshut, Germany",
        ],
      },
      {
        heading: "Contact",
        body: ["Phone: +49 871 430747-0\nEmail: [to be added]"],
      },
      {
        heading: "Professional title and regulations",
        body: [
          "Professional title: Physician / General Practitioner (focus areas: emergency medicine, acupuncture and naturopathy)",
          "Granted in: Germany",
          "Competent chamber: Bavarian State Chamber of Physicians (Bayerische Landesärztekammer, BLÄK), Mühlbaurstraße 16, 81677 Munich, www.blaek.de",
          "The professional regulations of the Code of Professional Conduct for Physicians in Bavaria apply, available from the Bavarian State Chamber of Physicians.",
        ],
      },
      {
        heading: "Competent supervisory authority",
        body: [
          "Association of Statutory Health Insurance Physicians of Bavaria (Kassenärztliche Vereinigung Bayerns, KVB), Elsenheimerstraße 39, 80687 Munich, www.kvb.de",
        ],
      },
      {
        heading: "Responsible for content pursuant to § 18 (2) MStV",
        body: ["Dr. med. univ. Dost Mohammad, address as above."],
      },
      {
        heading: "Liability for content",
        body: [
          "The contents of these pages were created with the greatest care. However, we cannot guarantee that the content is accurate, complete or up to date. The content is for general information only and does not replace individual medical advice, diagnosis or treatment.",
        ],
      },
      {
        heading: "Liability for links",
        body: [
          "Our offer may contain links to external third-party websites over whose content we have no influence. The respective provider or operator of the linked pages is always responsible for their content. We will remove such links immediately if we become aware of any legal violations.",
        ],
      },
      {
        heading: "Copyright",
        body: [
          "The content and works created by the site operators on these pages are subject to German copyright law. Reproduction, editing and distribution beyond the limits of copyright require written consent.",
        ],
      },
    ],
  },
  datenschutz: {
    de: [
      {
        heading: "1. Datenschutz auf einen Blick",
        body: [
          "Der Schutz Ihrer persönlichen Daten ist uns wichtig. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der Datenschutz-Grundverordnung (DSGVO) sowie dieser Datenschutzerklärung. Beim Besuch dieser Website werden nur die technisch notwendigen Daten verarbeitet; wir setzen keine Analyse- oder Tracking-Dienste ein.",
        ],
      },
      {
        heading: "2. Verantwortliche Stelle",
        body: [
          "Dr. med. univ. Dost Mohammad\nAm Alten Viehmarkt 5\n84028 Landshut\nTelefon: 0871 430747-0\nE-Mail: [bitte ergänzen]",
        ],
      },
      {
        heading: "3. Ihre Rechte",
        body: [
          "Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck der Verarbeitung, und ein Recht auf Berichtigung, Einschränkung oder Löschung dieser Daten. Beruht die Verarbeitung auf Ihrer Einwilligung, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen. Ihnen stehen zudem ein Recht auf Datenübertragbarkeit und ein Widerspruchsrecht zu.",
          "Darüber hinaus steht Ihnen ein Beschwerderecht bei der zuständigen Datenschutz-Aufsichtsbehörde zu (siehe unten).",
        ],
      },
      {
        heading: "4. Hosting",
        body: [
          "Diese Website wird bei GitHub Pages gehostet, einem Dienst der GitHub, Inc. (88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). Beim Aufruf der Seiten verarbeitet der Anbieter technische Zugriffsdaten (u. a. die IP-Adresse) in Server-Logfiles. Rechtsgrundlage ist unser berechtigtes Interesse an einer sicheren und effizienten Bereitstellung unseres Angebots (Art. 6 Abs. 1 lit. f DSGVO). Eine Übermittlung in die USA erfolgt auf Grundlage geeigneter Garantien.",
        ],
      },
      {
        heading: "5. SSL-/TLS-Verschlüsselung",
        body: [
          "Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie am „https://“ in der Adresszeile Ihres Browsers.",
        ],
      },
      {
        heading: "6. Server-Log-Dateien",
        body: [
          "Der Hosting-Anbieter erhebt und speichert automatisch Informationen in Server-Log-Dateien, die Ihr Browser übermittelt. Dies sind in der Regel Browsertyp und -version, das verwendete Betriebssystem, die Referrer-URL, der Zeitpunkt der Serveranfrage und die IP-Adresse. Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und dienen der technischen Bereitstellung und Sicherheit.",
        ],
      },
      {
        heading: "7. Chat-Assistent (KI)",
        body: [
          "Auf unserer Website können Sie freiwillig einen KI-gestützten Chat-Assistenten nutzen. Ihre Eingaben werden zur Beantwortung an unseren Verarbeitungsdienst (Cloudflare, Inc., USA) und von dort an einen externen KI-Dienst (Google Ireland Ltd./Google LLC, USA) übermittelt, der die Antwort erzeugt. Zur Begrenzung von Missbrauch (Rate-Limiting) wird dabei kurzzeitig Ihre IP-Adresse verarbeitet. Eine Registrierung ist nicht erforderlich; Gesprächsverläufe werden auf unseren Systemen nicht dauerhaft gespeichert.",
          "Bitte geben Sie im Chat keine sensiblen Gesundheitsdaten oder andere besonders schützenswerte Daten ein. Die Antworten werden automatisiert durch eine KI erstellt, können Fehler enthalten und ersetzen keine ärztliche Beratung, Diagnose oder Behandlung. Rechtsgrundlage ist unser berechtigtes Interesse an einem einfachen Informationsangebot (Art. 6 Abs. 1 lit. f DSGVO); eine Übermittlung in die USA erfolgt auf Grundlage geeigneter Garantien.",
        ],
      },
      {
        heading: "8. Cookies und lokale Speicherung",
        body: [
          "Wir setzen keine Cookies zu Werbe- oder Trackingzwecken ein. Ihre gewählte Spracheinstellung wird ausschließlich lokal in Ihrem Browser (localStorage) gespeichert, um Ihren Besuch komfortabler zu gestalten; diese Information wird nicht an uns übertragen.",
        ],
      },
      {
        heading: "9. Keine Analyse- und Tracking-Dienste",
        body: [
          "Diese Website verwendet keine Webanalyse-Tools, keine Werbenetzwerke und keine eingebetteten Dienste wie Google Analytics, Google Maps oder Social-Media-Plug-ins.",
        ],
      },
      {
        heading: "10. Zuständige Aufsichtsbehörde",
        body: [
          "Bayerisches Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach, www.lda.bayern.de",
        ],
      },
    ],
    en: [
      {
        heading: "1. Privacy at a glance",
        body: [
          "The protection of your personal data matters to us. We treat your personal data confidentially and in accordance with the General Data Protection Regulation (GDPR) and this privacy policy. When you visit this website, only the technically necessary data is processed; we do not use any analytics or tracking services.",
        ],
      },
      {
        heading: "2. Controller",
        body: [
          "Dr. med. univ. Dost Mohammad\nAm Alten Viehmarkt 5\n84028 Landshut, Germany\nPhone: +49 871 430747-0\nEmail: [to be added]",
        ],
      },
      {
        heading: "3. Your rights",
        body: [
          "You have the right at any time to obtain free information about your stored personal data, its origin and recipients and the purpose of processing, as well as the right to rectification, restriction or erasure of this data. Where processing is based on your consent, you may withdraw it at any time with effect for the future. You also have a right to data portability and a right to object.",
          "In addition, you have the right to lodge a complaint with the competent data protection supervisory authority (see below).",
        ],
      },
      {
        heading: "4. Hosting",
        body: [
          "This website is hosted on GitHub Pages, a service of GitHub, Inc. (88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). When the pages are accessed, the provider processes technical access data (including the IP address) in server log files. The legal basis is our legitimate interest in providing our service securely and efficiently (Art. 6(1)(f) GDPR). Any transfer to the USA takes place on the basis of appropriate safeguards.",
        ],
      },
      {
        heading: "5. SSL/TLS encryption",
        body: [
          "For security reasons, this site uses SSL/TLS encryption. You can recognise an encrypted connection by the „https://“ in your browser's address bar.",
        ],
      },
      {
        heading: "6. Server log files",
        body: [
          "The hosting provider automatically collects and stores information in server log files which your browser transmits. These are typically browser type and version, the operating system used, the referrer URL, the time of the server request and the IP address. This data is not merged with other data sources and serves technical provision and security.",
        ],
      },
      {
        heading: "7. Chat assistant (AI)",
        body: [
          "On our website you can voluntarily use an AI-powered chat assistant. To generate a reply, your input is transmitted to our processing service (Cloudflare, Inc., USA) and from there to an external AI service (Google Ireland Ltd./Google LLC, USA), which produces the response. To limit abuse (rate limiting), your IP address is processed briefly. No registration is required; conversation histories are not permanently stored on our systems.",
          "Please do not enter sensitive health data or other particularly protected data in the chat. Replies are generated automatically by an AI, may contain errors and do not replace medical advice, diagnosis or treatment. The legal basis is our legitimate interest in providing a simple information service (Art. 6(1)(f) GDPR); any transfer to the USA takes place on the basis of appropriate safeguards.",
        ],
      },
      {
        heading: "8. Cookies and local storage",
        body: [
          "We do not use cookies for advertising or tracking purposes. Your chosen language setting is stored solely locally in your browser (localStorage) to make your visit more convenient; this information is not transmitted to us.",
        ],
      },
      {
        heading: "9. No analytics or tracking services",
        body: [
          "This website does not use any web analytics tools, advertising networks or embedded services such as Google Analytics, Google Maps or social media plug-ins.",
        ],
      },
      {
        heading: "10. Competent supervisory authority",
        body: [
          "Bavarian State Office for Data Protection Supervision (Bayerisches Landesamt für Datenschutzaufsicht, BayLDA), Promenade 18, 91522 Ansbach, Germany, www.lda.bayern.de",
        ],
      },
    ],
  },
}
