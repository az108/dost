import type { Pillar, Treatment } from "./types"

const laser: Treatment[] = [
  {
    slug: "oberlippe",
    pillar: "laser",
    title: "Oberlippe",
    headline: { lead: "Oberlippe", accent: "dauerhaft glatt" },
    excerpt: "Die schnellste Zone überhaupt — fünf Minuten pro Sitzung, kein Rasieren mehr.",
    body: [
      "Härchen an der Oberlippe reagieren besonders gut auf Laserlicht, weil sie meist dunkel und kräftig sind. Genau dieses Pigment nimmt die Energie auf und leitet sie an die Haarwurzel weiter.",
      "Die Behandlung dauert nur wenige Minuten. Die meisten Patientinnen beschreiben sie als kurzes, warmes Prickeln — eine Betäubung ist nicht nötig.",
      "Wie viele Sitzungen nötig sind, hängt von Haar- und Hauttyp ab. Bei den meisten Patientinnen und Patienten bleibt ein kleiner Teil der Haare erhalten — fachlich spricht man deshalb von dauerhafter Haarreduktion.",
    ],
    benefits: [
      "Nur fünf Minuten pro Sitzung",
      "Kein Rasieren, kein Wachsen, keine gereizte Haut",
      "Ärztliche Voruntersuchung inklusive",
    ],
    durationMin: 5,
    sessions: "6 – 8 Sitzungen",
    pricing: { kind: "fixed", single: 39 },
    group: "Gesicht & Kopf",
  },
  {
    slug: "wangen",
    pillar: "laser",
    title: "Wangen",
    headline: { lead: "Wangen", accent: "sichtbar glatter" },
    excerpt: "Feiner Flaum und kräftige Härchen an den Wangen — in fünf Minuten behandelt.",
    body: [
      "Haarwuchs an den Wangen hat oft hormonelle Ursachen. Wir klären diese im Vorgespräch ab, denn eine Laserbehandlung ergänzt eine mögliche Therapie, ersetzt sie aber nicht.",
      "Weil die Gesichtshaut empfindlicher reagiert, arbeiten wir hier mit angepasster Energie und kühlen währenddessen kontinuierlich.",
    ],
    benefits: [
      "Angepasste Energie für empfindliche Gesichtshaut",
      "Kontinuierliche Kühlung während der Behandlung",
      "Abklärung hormoneller Ursachen im Vorgespräch",
    ],
    durationMin: 5,
    sessions: "6 – 10 Sitzungen",
    pricing: { kind: "fixed", single: 39 },
    group: "Gesicht & Kopf",
  },
  {
    slug: "kinn",
    pillar: "laser",
    title: "Kinn",
    headline: { lead: "Kinn", accent: "endlich ruhig" },
    excerpt: "Einzelne kräftige Härchen am Kinn werden dauerhaft reduziert — statt täglich nachzuzupfen.",
    body: [
      "Am Kinn wachsen Härchen oft besonders kräftig und einzeln. Zupfen reizt die Haut und regt den Follikel zusätzlich an — der Laser unterbricht diesen Kreislauf.",
      "Nach etwa acht bis zehn Sitzungen ist der Haarwuchs in der Regel deutlich reduziert. Wie viele Sitzungen Sie brauchen, hängt von Hauttyp und Hormonlage ab.",
    ],
    benefits: [
      "Schluss mit täglichem Zupfen und Rasieren",
      "Weniger eingewachsene Haare und Hautreizungen",
      "Zehn Minuten pro Sitzung",
    ],
    durationMin: 10,
    sessions: "8 – 10 Sitzungen",
    pricing: { kind: "fixed", single: 49 },
    group: "Gesicht & Kopf",
  },
  {
    slug: "gesicht-und-kopf",
    pillar: "laser",
    title: "Gesicht & Kopf",
    headline: { lead: "Gesicht & Kopf", accent: "komplett" },
    excerpt: "Alle Gesichtszonen in einer Sitzung — Oberlippe, Kinn, Wangen und Kieferlinie.",
    body: [
      "Statt einzelne Zonen nacheinander zu buchen, behandeln wir in dieser Sitzung das gesamte Gesicht in einem Durchgang. Das ist günstiger als die Summe der Einzelzonen und sorgt für ein gleichmäßiges Ergebnis.",
      "Enthalten sind Oberlippe, Kinn, Wangen und Kieferlinie. Die Augenpartie bleibt aus Sicherheitsgründen ausgespart.",
    ],
    benefits: [
      "Alle Gesichtszonen in einem Termin",
      "Gleichmäßiges Ergebnis statt Zonenübergängen",
      "Günstiger als die Einzelzonen zusammen",
    ],
    durationMin: 20,
    sessions: "8 – 10 Sitzungen",
    pricing: { kind: "fixed", single: 109 },
    group: "Gesicht & Kopf",
  },
  {
    slug: "achseln",
    pillar: "laser",
    title: "Achseln",
    headline: { lead: "Achseln", accent: "dauerhaft glatt" },
    excerpt: "Die beliebteste Zone. Zehn Minuten pro Termin — ohne Pickel, Brand und dunkle Schatten.",
    body: [
      "Die Achseln sind der Klassiker der Laser-Haarentfernung: kleine Fläche, kräftige Haare, schnelle Sichtbarkeit des Ergebnisses.",
      "Nach durchschnittlich acht bis zwölf Sitzungen ist das Thema Rasur für die meisten Patientinnen und Patienten erledigt — ohne Rasurbrand, eingewachsene Haare oder den dunklen Schatten unter der Haut.",
    ],
    benefits: [
      "Kein Rasurbrand, keine eingewachsenen Haare",
      "Nur zehn Minuten pro Termin",
      "Auch für empfindliche Haut geeignet",
    ],
    durationMin: 10,
    sessions: "8 – 12 Sitzungen",
    pricing: { kind: "fixed", single: 69 },
    group: "Oberkörper",
  },
  {
    slug: "arme-komplett",
    pillar: "laser",
    title: "Arme komplett",
    headline: { lead: "Arme", accent: "komplett" },
    excerpt: "Ober- und Unterarme in einer Sitzung — 25 Minuten für glatte Haut bis zur Schulter.",
    body: [
      "Diese Zone umfasst Ober- und Unterarme einschließlich der Handrücken. Die Haardichte ist an den Armen meist geringer als an Beinen oder Achseln, das Ergebnis daher oft früher sichtbar.",
      "Nach der Behandlung sollten Sie die Arme etwa zwei Wochen konsequent vor direkter Sonne schützen.",
    ],
    benefits: [
      "Ober- und Unterarme in einem Termin",
      "Ergebnis meist früher sichtbar als an anderen Zonen",
      "Inklusive Handrücken",
    ],
    durationMin: 25,
    sessions: "6 – 10 Sitzungen",
    pricing: { kind: "fixed", single: 209 },
    group: "Oberkörper",
  },
  {
    slug: "ruecken-komplett",
    pillar: "laser",
    title: "Rücken komplett",
    headline: { lead: "Rücken", accent: "komplett" },
    excerpt: "Die größte Einzelzone am Oberkörper — Schultern, Rücken und Lendenbereich.",
    body: [
      "Starker Haarwuchs am Rücken lässt sich allein kaum sinnvoll behandeln — rasieren funktioniert nicht, Wachsen ist schmerzhaft und kurzlebig.",
      "Wir behandeln Schultern, Rücken und Lendenbereich in einem Durchgang. Wegen der Größe der Fläche planen wir dafür eine halbe Stunde ein.",
    ],
    benefits: [
      "Schultern, Rücken und Lendenbereich in einem Termin",
      "Die Lösung für eine Zone, die man selbst nicht erreicht",
      "Dauerhafte Reduktion statt alle paar Wochen erneut",
    ],
    durationMin: 30,
    sessions: "8 – 12 Sitzungen",
    pricing: { kind: "fixed", single: 259 },
    group: "Oberkörper",
  },
  {
    slug: "bikinizone",
    pillar: "laser",
    title: "Bikinizone",
    headline: { lead: "Bikinizone", accent: "schonend" },
    excerpt: "Schonend lasern statt rasieren — weniger Erdbeerhaut, weniger eingewachsene Haare.",
    body: [
      "Die Bikinizone reagiert auf Rasur und Wachs besonders empfindlich: Rötungen, Pickelchen und eingewachsene Haare sind die Regel, nicht die Ausnahme.",
      "Der Laser arbeitet an der Haarwurzel und umgeht dieses Problem vollständig. Behandelt wird der seitlich sichtbare Bereich; für den gesamten Intimbereich gibt es eine eigene Zone.",
    ],
    benefits: [
      "Weniger eingewachsene Haare, weniger Erdbeerhaut",
      "Diskrete, ruhige Behandlungsräume",
      "Ärztlich durchgeführt",
    ],
    durationMin: 15,
    sessions: "8 – 12 Sitzungen",
    pricing: { kind: "fixed", single: 89 },
    group: "Intimbereich",
  },
  {
    slug: "intim-komplett",
    pillar: "laser",
    title: "Intim komplett",
    headline: { lead: "Intim", accent: "komplett" },
    excerpt: "Der gesamte Intimbereich in einer Sitzung — für Damen und Herren.",
    body: [
      "Diese Zone umfasst den gesamten Intimbereich einschließlich Bikinizone, Schambereich und Pofalte. Sie wird für Damen und Herren zum gleichen Preis angeboten.",
      "Diskretion ist hier selbstverständlich: Sie werden ausschließlich von medizinisch geschultem Personal behandelt, in einem geschlossenen Behandlungsraum.",
    ],
    benefits: [
      "Gesamter Intimbereich in einem Termin",
      "Für Damen und Herren zum gleichen Preis",
      "Diskret, ärztlich geführt",
    ],
    durationMin: 20,
    sessions: "8 – 12 Sitzungen",
    pricing: { kind: "fixed", single: 139 },
    group: "Intimbereich",
  },
  {
    slug: "oberschenkel",
    pillar: "laser",
    title: "Oberschenkel",
    headline: { lead: "Oberschenkel", accent: "glatt" },
    excerpt: "Oberschenkel einzeln behandeln — 20 Minuten, wenn die kompletten Beine zu viel sind.",
    body: [
      "Wer nur die Oberschenkel behandeln lassen möchte, bucht diese Zone einzeln. Sie lässt sich später jederzeit mit den Unterschenkeln zur Komplettbehandlung zusammenlegen.",
      "Die Haardichte ist an den Oberschenkeln meist geringer als an den Unterschenkeln, das Ergebnis daher oft nach weniger Sitzungen zufriedenstellend.",
    ],
    benefits: [
      "Einzeln buchbar, jederzeit erweiterbar",
      "20 Minuten pro Sitzung",
      "Oft weniger Sitzungen nötig als an den Unterschenkeln",
    ],
    durationMin: 20,
    sessions: "6 – 10 Sitzungen",
    pricing: { kind: "fixed", single: 169 },
    group: "Unterkörper",
  },
  {
    slug: "unterschenkel",
    pillar: "laser",
    title: "Unterschenkel",
    headline: { lead: "Unterschenkel", accent: "glatt" },
    excerpt: "Die Zone, die man am häufigsten rasiert — dauerhaft reduziert in 20 Minuten pro Sitzung.",
    body: [
      "Unterschenkel sind die Zone, die die meisten Menschen am häufigsten rasieren. Entsprechend deutlich ist der Unterschied im Alltag, sobald die Behandlung greift.",
      "Behandelt werden Unterschenkel und Knie. Die Füße können auf Wunsch einbezogen werden — sprechen Sie uns im Termin darauf an.",
    ],
    benefits: [
      "Die Zone mit dem größten Alltagsunterschied",
      "Inklusive Knie, Füße auf Wunsch",
      "20 Minuten pro Sitzung",
    ],
    durationMin: 20,
    sessions: "8 – 12 Sitzungen",
    pricing: { kind: "fixed", single: 169 },
    group: "Unterkörper",
  },
  {
    slug: "beine-komplett",
    pillar: "laser",
    title: "Beine komplett",
    headline: { lead: "Beine", accent: "komplett" },
    excerpt: "Die Premium-Zone — 35 Minuten, Ober- und Unterschenkel in einer Sitzung.",
    body: [
      "Ober- und Unterschenkel in einem Durchgang, einschließlich Knie. Das ist deutlich günstiger als beide Zonen einzeln und ergibt ein gleichmäßiges Ergebnis ohne Übergänge.",
      "Wegen der großen Fläche planen wir 35 Minuten ein. Bringen Sie bequeme Kleidung mit, die Sie danach nicht auf der Haut scheuert.",
    ],
    benefits: [
      "Ober- und Unterschenkel in einem Termin",
      "Günstiger als beide Zonen einzeln",
      "Gleichmäßiges Ergebnis ohne sichtbare Übergänge",
    ],
    durationMin: 35,
    sessions: "8 – 12 Sitzungen",
    pricing: { kind: "fixed", single: 309 },
    group: "Unterkörper",
  },
  {
    slug: "achseln-intim",
    pillar: "laser",
    title: "Achseln + Intim komplett",
    headline: { lead: "Achseln + Intim", accent: "komplett" },
    excerpt: "Die beiden meistgebuchten Zonen im Paket — 30 Minuten pro Sitzung.",
    body: [
      "Achseln und Intimbereich werden am häufigsten zusammen gebucht. Im Kombi-Paket sparen Sie gegenüber den Einzelzonen und brauchen nur einen Termin.",
      "Die Sitzungsanzahl entspricht der der Einzelzonen — beide Bereiche reagieren ähnlich auf die Behandlung.",
    ],
    benefits: [
      "Zwei Zonen, ein Termin",
      "Günstiger als beide Zonen einzeln",
      "30 Minuten pro Sitzung",
    ],
    durationMin: 30,
    sessions: "8 – 12 Sitzungen",
    pricing: {
      kind: "fixed",
      single: 139,
      overrides: [
        { sessions: 3, perSession: 129 },
        { sessions: 5, perSession: 119 },
        { sessions: 10, perSession: 109 },
      ],
    },
    group: "Kombi-Pakete",
  },
  {
    slug: "achseln-intim-unterschenkel",
    pillar: "laser",
    title: "Achseln + Intim + Unterschenkel",
    headline: { lead: "Drei Zonen", accent: "ein Termin" },
    excerpt: "Achseln, Intimbereich und Unterschenkel im Paket — 40 Minuten pro Sitzung.",
    body: [
      "Dieses Paket deckt die drei Zonen ab, die im Alltag am häufigsten rasiert werden. Alles in einem Termin, zu einem deutlich günstigeren Preis als einzeln gebucht.",
      "Planen Sie 40 Minuten ein. Wir arbeiten die Zonen nacheinander ab, mit kurzen Pausen dazwischen.",
    ],
    benefits: [
      "Drei Zonen in einem Termin",
      "Deutlich günstiger als einzeln gebucht",
      "Die drei meistrasierten Bereiche abgedeckt",
    ],
    durationMin: 40,
    sessions: "8 – 12 Sitzungen",
    pricing: {
      kind: "fixed",
      single: 249,
      overrides: [
        { sessions: 3, perSession: 239 },
        { sessions: 5, perSession: 219 },
        { sessions: 10, perSession: 199 },
      ],
    },
    group: "Kombi-Pakete",
  },
  {
    slug: "achseln-intim-beine",
    pillar: "laser",
    title: "Achseln + Intim + Beine",
    headline: { lead: "Achseln, Intim", accent: "und Beine" },
    excerpt: "Achseln, Intimbereich und komplette Beine — 45 Minuten pro Sitzung.",
    body: [
      "Die Erweiterung des Drei-Zonen-Pakets auf die kompletten Beine, also Ober- und Unterschenkel. Das größte Paket unterhalb der Ganzkörperbehandlung.",
      "Wegen des Umfangs planen wir 45 Minuten ein und legen die Termine so, dass Sie nicht unter Zeitdruck stehen.",
    ],
    benefits: [
      "Achseln, Intimbereich und komplette Beine",
      "Ein Termin statt drei",
      "45 Minuten pro Sitzung",
    ],
    durationMin: 45,
    sessions: "8 – 12 Sitzungen",
    pricing: {
      kind: "fixed",
      single: 289,
      overrides: [
        { sessions: 3, perSession: 269 },
        { sessions: 5, perSession: 249 },
        { sessions: 10, perSession: 229 },
      ],
    },
    group: "Kombi-Pakete",
  },
  {
    slug: "ganzkoerper",
    pillar: "laser",
    title: "Ganzkörper",
    headline: { lead: "Ganzkörper", accent: "in einer Stunde" },
    excerpt:
      "Bikinizone, große Schamlippen, Schambereich, Pofalte und Achseln — fünf Premium-Zonen, 60 Minuten.",
    body: [
      "Das umfassendste Paket: Bikinizone, große Schamlippen, Schambereich, Pofalte und Achseln in einer einzigen Sitzung.",
      "Eine Stunde pro Termin. Für viele Patientinnen ist das die wirtschaftlichste Variante, weil der Preis pro Zone hier am niedrigsten liegt.",
    ],
    benefits: [
      "Fünf Premium-Zonen in einer Sitzung",
      "Niedrigster Preis pro Zone",
      "Ein Termin statt fünf",
    ],
    durationMin: 60,
    sessions: "8 – 12 Sitzungen",
    pricing: {
      kind: "fixed",
      single: 649,
      overrides: [
        { sessions: 3, perSession: 599 },
        { sessions: 5, perSession: 549 },
        { sessions: 10, perSession: 509 },
      ],
    },
    group: "Kombi-Pakete",
  },
  {
    slug: "gefaessbehandlung",
    pillar: "laser",
    title: "Gefäßbehandlung & Couperose",
    headline: { lead: "Rötungen", accent: "gezielt behandelt" },
    excerpt:
      "Erweiterte Äderchen und dauerhafte Rötungen im Gesicht — gezielt verschlossen statt überschminkt.",
    body: [
      "Bei Couperose und Teleangiektasien sind kleine Gefäße dauerhaft erweitert und schimmern durch die Haut. Der Laser erhitzt gezielt das Blut in diesen Gefäßen, sodass sie sich verschließen und vom Körper abgebaut werden.",
      "Wie viele Sitzungen nötig sind, hängt stark vom Befund ab. Wir schätzen das im Erstgespräch realistisch ein — und sagen Ihnen auch, wenn eine Behandlung wenig verspricht.",
    ],
    benefits: [
      "Gezielt gegen erweiterte Äderchen und Rötungen",
      "Ärztliche Befundung vor der ersten Sitzung",
      "Ehrliche Einschätzung, auch gegen eine Behandlung",
    ],
    durationMin: 20,
    sessions: "1 – 3 Sitzungen",
    pricing: { kind: "onRequest" },
  },
  {
    slug: "pigmentflecken",
    pillar: "laser",
    title: "Pigmentflecken",
    headline: { lead: "Pigmentflecken", accent: "aufgehellt" },
    excerpt:
      "Altersflecken und Sonnenschäden gezielt aufhellen — nach ärztlicher Abklärung des Befunds.",
    body: [
      "Der Laser zerlegt das Pigment in kleinste Partikel, die der Körper anschließend selbst abtransportiert. Der Fleck hellt über einige Wochen sichtbar auf.",
      "Vor jeder Behandlung steht die ärztliche Abklärung: Nicht jede dunkle Stelle ist ein harmloser Altersfleck. Auffällige Befunde untersuchen wir zuerst, statt sie zu lasern.",
    ],
    benefits: [
      "Ärztliche Abklärung vor jeder Behandlung",
      "Gezielt gegen Alters- und Sonnenflecken",
      "Ergebnis entwickelt sich über einige Wochen",
    ],
    durationMin: 15,
    sessions: "1 – 3 Sitzungen",
    pricing: { kind: "onRequest" },
  },
  {
    slug: "aknenarben",
    pillar: "laser",
    title: "Aknenarben",
    headline: { lead: "Aknenarben", accent: "geglättet" },
    excerpt:
      "Eingesunkene Narben und unebenes Hautbild — schrittweise geglättet über mehrere Sitzungen.",
    body: [
      "Die Laserbehandlung regt die Haut an, neues Kollagen zu bilden. Eingesunkene Narben füllen sich dadurch von innen auf und das Hautbild wird gleichmäßiger.",
      "Das ist ein Prozess über Monate, kein einmaliger Eingriff. Wir besprechen vorab offen, welche Verbesserung realistisch ist — und welche nicht.",
    ],
    benefits: [
      "Regt die körpereigene Kollagenbildung an",
      "Realistische Einschätzung vor Behandlungsbeginn",
      "Schrittweise Verbesserung über mehrere Sitzungen",
    ],
    durationMin: 30,
    sessions: "3 – 6 Sitzungen",
    pricing: { kind: "onRequest" },
  },
]

const physio: Treatment[] = [
  {
    slug: "schmerztherapie",
    pillar: "physio",
    title: "Schmerztherapie",
    headline: { lead: "Schmerz", accent: "an der Ursache" },
    excerpt:
      "Akute Schmerzen haben eine Warnfunktion und sind deshalb eine wichtige Reaktion für den Körper.",
    body: [
      "Man unterscheidet zwischen akuten Schmerzen und chronischen Schmerzen",
      "Bei länger anhaltenden Schmerzen verlieren sie diese Warnfunktion und es entsteht eine eigene Erkrankung – der chronische Schmerz.",
      "Bitte wenden Sie sich vertrauensvoll an unsere Schmerztherapie – Praxis Dr. med. Dost Mohammad.",
    ],
    benefits: [
      "Ursachensuche statt reiner Symptomdämpfung",
      "Schulmedizin und Naturheilverfahren kombiniert",
      "Individueller Behandlungsplan nach gründlicher Untersuchung",
    ],
    sessions: "Nach Befund",
    pricing: { kind: "onRequest" },
  },
  {
    slug: "manuelle-therapie",
    pillar: "physio",
    title: "Manuelle Therapie",
    headline: { lead: "Blockaden", accent: "gelöst" },
    excerpt:
      "Gezielte Handgriffe an Gelenken, Muskeln und Faszien — für Beweglichkeit ohne Schmerz.",
    body: [
      "In der manuellen Therapie arbeiten wir ausschließlich mit den Händen: Wir ertasten Blockaden in Gelenken, verspannte Muskulatur und verklebte Faszien und lösen sie gezielt.",
      "Der Vorteil gegenüber apparativen Verfahren ist die unmittelbare Rückmeldung — wir spüren, wie das Gewebe reagiert, und passen die Behandlung im selben Moment an.",
      "Nach der Sitzung erhalten Sie Übungen für zu Hause. Ohne diese hält das Ergebnis meist nicht lange an.",
    ],
    benefits: [
      "Unmittelbare Anpassung während der Behandlung",
      "Übungen für zu Hause inklusive",
      "Ohne Medikamente und ohne Geräte",
    ],
    sessions: "Nach Befund",
    pricing: { kind: "onRequest" },
  },
  {
    slug: "sportmedizin",
    pillar: "physio",
    title: "Sportmedizin",
    headline: { lead: "Zurück", accent: "in Bewegung" },
    excerpt:
      "Auch bei Sportverletzungen oder Problemen mit dem Bewegungsapparat stehen wir Ihnen stets zu Seite.",
    body: [
      "Bei der Therapie und Diagnostik von Sportverletzungen arbeitet unser Arzt in Köning mit den umliegenden radiologischen Praxen (Röntgen, Kernspin-Untersuchungen), mit Orthopäden, Sportmediziner und den Krankenhäusern zusammen, um Ihnen den bestmöglichen Service zu bieten.",
      "Unsere Praxis gibt allen Sportlern, vom Freizeitsportler bis hin zum Leistungssportler, die Möglichkeit, sich beraten, untersuchen und behandeln zu lassen.",
      "Die häufigsten Sportverletzungen sind Akutverletzungen und das sogenannte Überlastungssyndrom. Je nach Sportart treten typische Erkrankungen und Verletzungen auf. Klassische Überlastungen sind z.B. der Tennisarm, oder der Golferellenbogen sowie Überlastungsbrüche von Knochen. Bei Sportverletzungen jeglicher Art, wenden Sie sich bitte umgehend an unsere Praxis.",
    ],
    benefits: [
      "Betreuung bei Sportverletzungen und Beschwerden des Bewegungsapparats",
      "Wiederaufbau statt Schonhaltung",
      "Ärztlich begleiteter Wiedereinstieg ins Training",
    ],
    sessions: "Nach Befund",
    pricing: { kind: "onRequest" },
  },
  {
    slug: "akupunktur-tcm",
    pillar: "physio",
    title: "Akupunktur & TCM",
    headline: { lead: "Akupunktur", accent: "und TCM" },
    excerpt:
      "Im Rahmen der privatärztlichen Versorgung der Praxis Dr. med. Dost Mohammad in Köning bieten wir zusätzlich alternative Behandlungsmethoden, wie die TCM und Akupunktur an.",
    body: [
      "Mit den variablen Methoden der Akupunktur und der TCM kommen unsere Patienten in den Genuss fernöstlicher Behandlungsmethoden der TCM mit sehr langer Tradition und vielfach wissenschaftlich nachgewiesener Wirksamkeit.",
      "Viele akute und chronische Beschwerden sprechen gut auf die Akupunktur und Maßnahmen der TCM an. Im Vergleich zur Schulmedizin verfolgen Akupunktur und TCM stets ein ganzheitliches Behandlungsziel. Der Mensch wird bei den Therapieansätzen der TCM in seiner Gesamtheit erfasst – physisch wie psychisch.",
      "Die TCM ergänzt die schulmedizinische Behandlung vieler Beschwerden. Unser Privatarzt in Köning bietet viele Methoden der TCM an wie Schädelakupunktur, Körperakupunktur, Schröpfen, Neuraltherapie, Tui Na Massage und Qigong Gymnastik an.",
    ],
    benefits: [
      "Ärztlich durchgeführte Akupunktur",
      "Ergänzend zur schulmedizinischen Behandlung",
      "Zusatzqualifikation Naturheilverfahren und Akupunktur",
    ],
    sessions: "Nach Befund",
    pricing: { kind: "onRequest" },
  },
  {
    slug: "stosswellentherapie",
    pillar: "physio",
    title: "Stoßwellentherapie",
    headline: { lead: "Stoßwellen", accent: "gegen Verkalkung" },
    excerpt:
      "Bei Fersensporn, Tennisellenbogen und Kalkschulter — energiereiche Druckwellen statt Operation.",
    body: [
      "Energiereiche Druckwellen werden von außen gezielt auf das schmerzende Gewebe gerichtet. Sie regen den Stoffwechsel an und können Verkalkungen lösen.",
      "Typische Anwendungsgebiete sind Fersensporn, Tennis- und Golferellenbogen sowie die Kalkschulter — also Beschwerden, bei denen konservative Behandlung oft lange dauert.",
      "Eine Sitzung dauert wenige Minuten. Meist sind drei bis fünf Sitzungen im Abstand von einer Woche nötig.",
    ],
    benefits: [
      "Ohne Operation und ohne Narkose",
      "Wenige Minuten pro Sitzung",
      "Meist drei bis fünf Sitzungen",
    ],
    sessions: "3 – 5 Sitzungen",
    pricing: { kind: "onRequest" },
  },
]

const aesthetik: Treatment[] = [
  {
    slug: "faltenbehandlung",
    pillar: "aesthetik",
    title: "Faltenbehandlung",
    headline: { lead: "Falten", accent: "zurückhaltend behandelt" },
    excerpt:
      "Zurückhaltend dosiertes Botulinumtoxin gegen Zornes-, Stirn- und Lachfalten — die Mimik bleibt erhalten.",
    body: [
      "Botulinumtoxin entspannt gezielt die Muskeln, die eine Falte erzeugen. Behandelt werden vor allem Zornesfalte, Stirnfalten und die Fältchen um die Augen.",
      "Unser Anspruch ist ein ausgeruhtes, nicht ein behandeltes Gesicht. Wir dosieren deshalb bewusst zurückhaltend — Sie sollen weiterhin lachen und die Stirn runzeln können.",
      "Die Wirkung setzt nach einigen Tagen ein und hält je nach Areal und Stoffwechsel etwa drei bis sechs Monate an. Die Behandlung führt Dr. med. univ. Dost Mohammad persönlich durch.",
    ],
    benefits: [
      "Bewusst zurückhaltende Dosierung",
      "Mimik bleibt erhalten",
      "Persönlich durchgeführt von Dr. med. univ. Dost Mohammad",
    ],
    durationMin: 20,
    sessions: "Wiederholung nach 3 – 6 Monaten",
    pricing: { kind: "onRequest" },
  },
  {
    slug: "hyaluron",
    pillar: "aesthetik",
    title: "Hyaluron & Filler",
    headline: { lead: "Volumen", accent: "wo es fehlt" },
    excerpt:
      "Hyaluronsäure für Lippen, Wangen und Nasolabialfalten — aufbauend statt auffallend.",
    body: [
      "Hyaluronsäure ist ein körpereigener Stoff, der Wasser bindet und dem Gewebe Volumen gibt. Mit den Jahren nimmt sie ab, das Gesicht wirkt eingefallener.",
      "Wir setzen Filler dort ein, wo tatsächlich Volumen fehlt — an Wangen, Nasolabialfalten oder Lippen. Das Ziel ist ein natürliches Ergebnis, das niemandem als Behandlung auffällt.",
      "Vor jeder Behandlung besprechen wir offen, was medizinisch sinnvoll ist und wovon wir abraten. Nicht jeder Wunsch lässt sich verantwortungsvoll umsetzen.",
    ],
    benefits: [
      "Körpereigener Stoff, gut verträglich",
      "Ergebnis unmittelbar sichtbar",
      "Offene Beratung, auch gegen eine Behandlung",
    ],
    durationMin: 30,
    sessions: "Nach Befund",
    pricing: { kind: "onRequest" },
  },
  {
    slug: "kryolipolyse",
    pillar: "aesthetik",
    title: "Kryolipolyse",
    headline: { lead: "Fettpolster", accent: "ohne Operation" },
    excerpt:
      "Die Reduktion unerwünschter Fettpolster gehört mit zu den häufigsten Anliegen der Patienten in den Schönheitskliniken – oft sind es Areale, die selbst durch strenge Diäten und Trainingsübungen nicht abgebaut werden können.",
    body: [
      "Da wundert es nicht, dass es eine ausgesprochene Vielfalt an Techniken und Methoden zur chirurgischen Fettreduktion gibt: Liposuktion in Tumeszenz-Lokalanästhesie, Ultraschall, Radiowellen, Fett-weg-Spritze, … – um nur ein paar zu nennen.",
      "Auch auf diesem Gebiet fokussiert man sich mehr und mehr auf minimal-invasive Methoden mit möglichst geringer Ausfallzeit der Patienten – eine derartige minimal-invasive Methode ist auch die Kryolipolyse.",
      "Die Kryolipolyse (von Altgriechisch κρύος [kryos] „Frost“, „Eis“, λίπα [lipa] „Fett“ und λύσις [lysis] „Lösung“, „Auflösung“) ist eine relativ neue Methode der Fettreduktion. Sie zielt vor allem auf Fettpölsterchen ab, die schwer mit Diäten oder körperlichem Training effektiv reduziert werden können:",
    ],
    benefits: [
      "Minimal-invasiv, ohne Operation",
      "Geringe Ausfallzeit",
      "Gezielt gegen hartnäckige Fettpölsterchen",
    ],
    durationMin: 60,
    sessions: "Nach Befund",
    pricing: { kind: "onRequest" },
  },
  {
    slug: "farblichttherapie",
    pillar: "aesthetik",
    title: "Farblichttherapie",
    headline: { lead: "Licht", accent: "als Therapie" },
    excerpt:
      "Die Farblichttherapie nutzt die Energie farbigen Lichts, das Arzt und Patient gemeinsam auswählen, um den Stoffwechsel und das seelische Gleichgewicht zu fördern.",
    body: [
      "Die Lichttherapie ist ein anerkanntes medizinisches Verfahren, um verschiedene Erkrankungen, die Körper und Seele betreffen, zu heilen. In der Privatarztpraxis Dr. med. Dost Mohammad in Köning bieten wir Ihnen Lichttherapie an.",
      "Auch in Zusammenhang mit Depressionen, die keinem saisonalen Muster folgen, kann eine Farblichttherapie heilsam sein.",
      "In Verbindung mit Depressionen werden auch oft Schlafstörungen beklagt, die wiederum Stress beim Betroffenen auslösen. Auch bei diesen Störungen ist eine Lichttherapie sinnvoll.",
    ],
    benefits: [
      "Farbe wird gemeinsam von Arzt und Patient ausgewählt",
      "Sanftes, nicht-invasives Verfahren",
      "Ergänzend zu anderen Behandlungen einsetzbar",
    ],
    durationMin: 30,
    sessions: "Nach Befund",
    pricing: { kind: "onRequest" },
  },
  {
    slug: "aesthetische-medizin",
    pillar: "aesthetik",
    title: "Ästhetische Medizin",
    headline: { lead: "Ästhetische", accent: "Medizin" },
    excerpt:
      "Die ästhetische Medizin ist ein Teilbereich der Medizin, der sich mit der Veränderung des äußeren Erscheinungsbildes von Menschen beschäftigt.",
    body: [
      "Schönheit ist für die meisten Menschen wichtig, um sich selbstsicher und attraktiv zu fühlen. Wer sich selbst schön findet, hat eine positivere Ausstrahlung.",
      "Mit der Zeit verändert sich jedoch die Haut und somit auch das Aussehen. Falten um Mund, Augen und Nase oder auf der Stirn lassen ein Gesicht älter wirken.",
      "Immer mehr Frauen und Männer entscheiden sich für kleine Schönheitskorrekturen, sie sind heutzutage keine Seltenheit mehr. Worauf Sie achten sollten und was wirklich hilft, erfahren Sie durch die Praxis für Ästhetische Medizin, Dr. med. Dost Mohammad in Köning.",
    ],
    benefits: [
      "Ärztlich durchgeführt, nicht kosmetisch",
      "Ausführliche Beratung vor jeder Behandlung",
      "Zurückhaltender, natürlicher Ansatz",
    ],
    sessions: "Nach Befund",
    pricing: { kind: "onRequest" },
  },
]

export const treatments: Treatment[] = [...laser, ...physio, ...aesthetik]

export function treatmentsByPillar(pillar: Pillar): Treatment[] {
  return treatments.filter((t) => t.pillar === pillar)
}

export function treatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug)
}
