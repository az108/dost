import type { Loc } from "@/lib/i18n"

/**
 * Every five-star review with text from Google and Jameda (collected
 * 2026-11-25). German is the reviewer's original wording, with only light
 * spelling and punctuation fixes; names are shortened to first name + initial.
 * The other languages are our own translations. Reviews about the practice
 * closing or the doctor's health are left out on purpose.
 */
export type ReviewSource = "google" | "jameda"

export interface Review {
  id: string
  author: Loc | string
  source: ReviewSource
  /** Approximate year, from the platform's relative date. */
  year: number
  quote: Loc
  /** Shorter version for the home page cards, if the full quote is long. */
  excerpt?: Loc
  /** One of the three shown on the home page. */
  featured?: boolean
}

export const reviews: Review[] = [
  {
    id: "jameda-2023",
    author: {
      de: "Patientin seit 2022",
      en: "Patient since 2022",
      es: "Paciente desde 2022",
      fr: "Patiente depuis 2022",
      it: "Paziente dal 2022",
      tr: "2022'den beri hasta",
      ru: "Пациентка с 2022 года",
      ar: "مريضة منذ 2022",
    },
    source: "jameda",
    year: 2023,
    featured: true,
    quote: {
      de: "Ich bin seit 2022 Patientin bei Silvamed. Herr Dr. Dost Mohammad ist bekannt für seine hervorragenden Methoden in der Akupunktur sowie im Naturheilverfahren. Ich schätze Herrn Dr. Mohammad sehr für seine Hilfsbereitschaft, seine enorme fachliche Kompetenz, mit interdisziplinärem Denken sowie extrem breit gefächertem Wissen als auch seine freundliche Art. Er hat sich ausreichend Zeit zur Analyse meines Krankheitsbildes genommen und entsprechende Maßnahmen sofort eingeleitet. Ich bin mehr als zufrieden mit seiner Behandlung und meinem bisherigen Ergebnis. Die Praxen sind sauber und modern ausgestattet. Herr Dr. Mohammad hat ein freundliches und zuvorkommendes Team. Eine schnelle telefonische Terminvergabe mit kurzen Wartezeiten ist gegeben.",
      en: "I have been a patient at Silvamed since 2022. Dr. Dost Mohammad is known for his excellent methods in acupuncture and naturopathy. I greatly appreciate Dr. Mohammad for his helpfulness, his enormous professional competence, his interdisciplinary thinking and extremely broad knowledge, as well as his friendly manner. He took enough time to analyse my condition and initiated the right measures straight away. I am more than satisfied with his treatment and my results so far. The practices are clean and modern. Dr. Mohammad has a friendly and attentive team. Appointments are given quickly by phone and waiting times are short.",
      es: "Soy paciente de Silvamed desde 2022. El Dr. Dost Mohammad es conocido por sus excelentes métodos en acupuntura y naturopatía. Aprecio mucho al Dr. Mohammad por su disposición a ayudar, su enorme competencia profesional, su pensamiento interdisciplinar y sus conocimientos extremadamente amplios, así como por su amabilidad. Se tomó el tiempo necesario para analizar mi cuadro clínico e inició de inmediato las medidas adecuadas. Estoy más que satisfecha con su tratamiento y con los resultados hasta ahora. Las consultas están limpias y modernamente equipadas. El Dr. Mohammad tiene un equipo amable y atento. Las citas por teléfono se dan rápido y la espera es corta.",
      fr: "Je suis patiente chez Silvamed depuis 2022. Le Dr Dost Mohammad est connu pour ses excellentes méthodes en acupuncture et en naturopathie. J'apprécie beaucoup le Dr Mohammad pour sa serviabilité, son immense compétence professionnelle, sa pensée interdisciplinaire et ses connaissances extrêmement vastes, ainsi que pour son amabilité. Il a pris suffisamment de temps pour analyser mon état et a immédiatement mis en place les mesures adaptées. Je suis plus que satisfaite de son traitement et de mes résultats jusqu'à présent. Les cabinets sont propres et modernes. Le Dr Mohammad a une équipe aimable et prévenante. Les rendez-vous par téléphone sont rapides et l'attente est courte.",
      it: "Sono paziente di Silvamed dal 2022. Il Dr. Dost Mohammad è noto per i suoi eccellenti metodi di agopuntura e naturopatia. Apprezzo molto il Dr. Mohammad per la sua disponibilità, la sua enorme competenza professionale, il pensiero interdisciplinare e le conoscenze estremamente ampie, oltre che per i suoi modi cordiali. Si è preso il tempo necessario per analizzare il mio quadro clinico e ha subito avviato le misure adeguate. Sono più che soddisfatta della sua cura e dei risultati ottenuti finora. Gli studi sono puliti e moderni. Il Dr. Mohammad ha un team gentile e premuroso. Gli appuntamenti telefonici sono rapidi e l'attesa è breve.",
    },
    excerpt: {
      de: "Ich schätze Herrn Dr. Mohammad sehr für seine Hilfsbereitschaft, seine enorme fachliche Kompetenz, mit interdisziplinärem Denken sowie extrem breit gefächertem Wissen als auch seine freundliche Art. Er hat sich ausreichend Zeit zur Analyse meines Krankheitsbildes genommen und entsprechende Maßnahmen sofort eingeleitet.",
      en: "I greatly appreciate Dr. Mohammad for his helpfulness, his enormous professional competence, his interdisciplinary thinking and extremely broad knowledge, as well as his friendly manner. He took enough time to analyse my condition and initiated the right measures straight away.",
      es: "Aprecio mucho al Dr. Mohammad por su disposición a ayudar, su enorme competencia profesional, su pensamiento interdisciplinar y sus conocimientos extremadamente amplios, así como por su amabilidad. Se tomó el tiempo necesario para analizar mi cuadro clínico e inició de inmediato las medidas adecuadas.",
      fr: "J'apprécie beaucoup le Dr Mohammad pour sa serviabilité, son immense compétence professionnelle, sa pensée interdisciplinaire et ses connaissances extrêmement vastes, ainsi que pour son amabilité. Il a pris suffisamment de temps pour analyser mon état et a immédiatement mis en place les mesures adaptées.",
      it: "Apprezzo molto il Dr. Mohammad per la sua disponibilità, la sua enorme competenza professionale, il pensiero interdisciplinare e le conoscenze estremamente ampie, oltre che per i suoi modi cordiali. Si è preso il tempo necessario per analizzare il mio quadro clinico e ha subito avviato le misure adeguate.",
      tr: "Dr. Mohammad'ı yardımseverliği, muazzam mesleki yetkinliği, disiplinler arası düşünmesi, son derece geniş bilgisi ve güler yüzü için çok takdir ediyorum. Rahatsızlığımı analiz etmek için yeterince zaman ayırdı ve gerekli önlemleri hemen başlattı.",
      ru: "Я очень ценю доктора Мохаммада за отзывчивость, огромную профессиональную компетентность, междисциплинарное мышление и чрезвычайно широкие знания, а также за его доброжелательность. Он уделил достаточно времени анализу моего состояния и сразу же принял нужные меры.",
      ar: "أقدّر الدكتور محمد كثيرًا لاستعداده للمساعدة وكفاءته المهنية الكبيرة وتفكيره متعدد التخصصات ومعرفته الواسعة جدًا، وكذلك لأسلوبه الودود. لقد خصّص وقتًا كافيًا لتحليل حالتي وبدأ الإجراءات المناسبة على الفور.",
    },
  },
  {
    id: "davinder-t",
    author: "Davinder T.",
    source: "google",
    year: 2023,
    featured: true,
    quote: {
      de: "Doktor Mohammad ist ein sehr netter Arzt. Geschärfte Kompetenzen sind bei seinen Verfahren erkennbar und er nimmt sich genügend Zeit für seine Patienten. Ein Arzt, welchen ich mit Sicherheit weiterempfehlen kann.",
      en: "Doctor Mohammad is a very nice doctor. His sharp expertise shows in his procedures and he takes enough time for his patients. A doctor I can recommend with certainty.",
      es: "El doctor Mohammad es un médico muy amable. Su gran competencia se nota en sus procedimientos y dedica suficiente tiempo a sus pacientes. Un médico que sin duda puedo recomendar.",
      fr: "Le docteur Mohammad est un médecin très aimable. Sa grande compétence se voit dans ses méthodes et il prend suffisamment de temps pour ses patients. Un médecin que je recommande sans hésiter.",
      it: "Il dottor Mohammad è un medico molto gentile. La sua grande competenza si vede nei suoi metodi e dedica abbastanza tempo ai suoi pazienti. Un medico che posso raccomandare con certezza.",
      tr: "Doktor Mohammad çok nazik bir doktor. Uzmanlığı uygulamalarında açıkça görülüyor ve hastalarına yeterince zaman ayırıyor. Kesinlikle tavsiye edebileceğim bir doktor.",
      ru: "Доктор Мохаммад — очень приятный врач. Его высокая квалификация видна в его методах, и он уделяет пациентам достаточно времени. Врач, которого я могу уверенно рекомендовать.",
      ar: "الدكتور محمد طبيب لطيف جدًا. تظهر كفاءته العالية في أساليبه، ويمنح مرضاه وقتًا كافيًا. طبيب أستطيع أن أوصي به بكل ثقة.",
    },
  },
  {
    id: "corinna-d",
    author: "Corinna D.",
    source: "google",
    year: 2022,
    featured: true,
    quote: {
      de: "Sehr guter Arzt, bekomme immer schnell einen Termin und hilft mir immer weiter.",
      en: "Very good doctor. I always get an appointment quickly and he always helps me further.",
      es: "Muy buen médico: siempre consigo cita rápido y siempre me ayuda.",
      fr: "Très bon médecin : j'obtiens toujours rapidement un rendez-vous et il m'aide toujours.",
      it: "Ottimo medico: ottengo sempre un appuntamento in fretta e mi aiuta sempre.",
      tr: "Çok iyi bir doktor; her zaman hızlıca randevu alıyorum ve bana her zaman yardımcı oluyor.",
      ru: "Очень хороший врач: я всегда быстро получаю приём, и он всегда мне помогает.",
      ar: "طبيب جيد جدًا، أحصل دائمًا على موعد بسرعة ويساعدني دائمًا.",
    },
  },
  {
    id: "werner",
    author: "Werner",
    source: "google",
    year: 2024,
    quote: {
      de: "War seit über 20 Jahren bei ihm als Patient und wurde noch nie enttäuscht sowie immer hervorragend behandelt. Kann nur Gutes über ihn berichten. Dass es manchmal zu längeren Wartezeiten kommt, nehme ich gerne in Kauf, wegen der hervorragenden Behandlungen. Von mir klare 5 Sterne!",
      en: "I was his patient for over 20 years and was never disappointed, always treated excellently. I can only say good things about him. That there are sometimes longer waits is something I gladly accept because of the excellent treatment. A clear 5 stars from me!",
      es: "Fui su paciente durante más de 20 años y nunca me decepcionó; siempre me trató de forma excelente. Solo puedo hablar bien de él. Que a veces haya que esperar más lo acepto con gusto por sus excelentes tratamientos. ¡Por mi parte, 5 estrellas claras!",
      fr: "J'ai été son patient pendant plus de 20 ans et je n'ai jamais été déçu ; j'ai toujours été parfaitement soigné. Je ne peux dire que du bien de lui. Les attentes parfois plus longues, je les accepte volontiers pour la qualité des soins. Cinq étoiles sans hésiter !",
      it: "Sono stato suo paziente per oltre 20 anni e non sono mai rimasto deluso, sempre curato in modo eccellente. Posso solo parlarne bene. Che a volte si aspetti un po' di più lo accetto volentieri per l'eccellenza delle cure. Da parte mia, 5 stelle piene!",
    },
  },
  {
    id: "jennifer-w",
    author: "Jennifer W.",
    source: "google",
    year: 2023,
    quote: {
      de: "Der Dr. Dost Mohammad ist ein sehr kompetenter und freundlicher Arzt. Er nimmt sich Zeit für seine Patienten und ihre Anliegen. Sehr empfehlenswert!",
      en: "Dr. Dost Mohammad is a very competent and friendly doctor. He takes time for his patients and their concerns. Highly recommended!",
      es: "El Dr. Dost Mohammad es un médico muy competente y amable. Se toma tiempo para sus pacientes y sus preocupaciones. ¡Muy recomendable!",
      fr: "Le Dr Dost Mohammad est un médecin très compétent et aimable. Il prend le temps pour ses patients et leurs préoccupations. Vivement recommandé !",
      it: "Il Dr. Dost Mohammad è un medico molto competente e cordiale. Si prende tempo per i suoi pazienti e le loro preoccupazioni. Consigliatissimo!",
    },
  },
  {
    id: "erika-e",
    author: "Erika E.",
    source: "google",
    year: 2022,
    quote: {
      de: "Sehr netter und kompetenter Arzt, bin schon lange Patientin bei ihm und bekomme auch immer schnell einen Termin, werde auch immer gut untersucht! Kann ihn nur weiterempfehlen! Top",
      en: "A very nice and competent doctor. I've been his patient for a long time, always get an appointment quickly and am always examined thoroughly! I can only recommend him! Top",
      es: "Un médico muy amable y competente. Soy su paciente desde hace mucho, siempre consigo cita rápido y siempre me examina a fondo. ¡Solo puedo recomendarlo! Top",
      fr: "Médecin très aimable et compétent. Je suis sa patiente depuis longtemps, j'obtiens toujours vite un rendez-vous et je suis toujours bien examinée ! Je ne peux que le recommander ! Top",
      it: "Medico molto gentile e competente. Sono sua paziente da tanto tempo, ottengo sempre un appuntamento in fretta e vengo sempre visitata con cura! Non posso che consigliarlo! Top",
    },
  },
  {
    id: "malgorzata-s",
    author: "Małgorzata S.",
    source: "google",
    year: 2023,
    quote: {
      de: "Sehr gute Praxis. Arzt mit Berufung. Beantwortet immer jede Frage. Personal sehr sympathisch.",
      en: "Very good practice. A doctor with a true calling. Always answers every question. Very friendly staff.",
      es: "Muy buena consulta. Un médico con vocación. Siempre responde a todas las preguntas. Personal muy simpático.",
      fr: "Très bon cabinet. Un médecin passionné par son métier. Il répond toujours à chaque question. Personnel très sympathique.",
      it: "Ottimo studio. Un medico per vocazione. Risponde sempre a ogni domanda. Personale molto simpatico.",
    },
  },
  {
    id: "mohammad-kh",
    author: "Mohammad Kh.",
    source: "google",
    year: 2023,
    quote: {
      de: "Herr Dr. Dost ist ein sehr kompetenter Arzt, der stets hilfreich ist und ehrlich seine Meinung sagt. Ich würde ihn gerne weiterempfehlen.",
      en: "Dr. Dost is a very competent doctor who is always helpful and honestly tells you his opinion. I would gladly recommend him.",
      es: "El Dr. Dost es un médico muy competente, siempre servicial y que da su opinión con sinceridad. Lo recomendaría con gusto.",
      fr: "Le Dr Dost est un médecin très compétent, toujours serviable et qui donne honnêtement son avis. Je le recommande volontiers.",
      it: "Il Dr. Dost è un medico molto competente, sempre disponibile e che dice onestamente la sua opinione. Lo consiglierei volentieri.",
    },
  },
  {
    id: "christoph",
    author: "Christoph",
    source: "google",
    year: 2023,
    quote: {
      de: "Schnelle Terminvergabe, obwohl ich kein Patient war. Heute um 8 Uhr angerufen und schon um 9.30 Uhr konnte ich kommen. Kurze Wartezeit.",
      en: "Quick appointment even though I wasn't a patient. I called at 8 am today and could come in at 9:30. Short wait.",
      es: "Cita rápida aunque no era paciente. Llamé hoy a las 8 y a las 9:30 ya pude ir. Poca espera.",
      fr: "Rendez-vous rapide alors que je n'étais pas patient. J'ai appelé aujourd'hui à 8 h et j'ai pu venir dès 9 h 30. Attente courte.",
      it: "Appuntamento rapido anche se non ero paziente. Ho chiamato oggi alle 8 e alle 9:30 potevo già andare. Attesa breve.",
    },
  },
  {
    id: "lisa-e",
    author: "Lisa E.",
    source: "google",
    year: 2023,
    quote: {
      de: "Mein Hausarzt ist der Dr. Dost Mohammad und mit der Praxis bin ich sehr zufrieden. Kann ich weiterempfehlen!",
      en: "Dr. Dost Mohammad is my family doctor and I am very happy with the practice. I can recommend it!",
      es: "El Dr. Dost Mohammad es mi médico de cabecera y estoy muy contenta con la consulta. ¡La recomiendo!",
      fr: "Le Dr Dost Mohammad est mon médecin traitant et je suis très satisfaite du cabinet. Je le recommande !",
      it: "Il Dr. Dost Mohammad è il mio medico di famiglia e sono molto soddisfatta dello studio. Lo consiglio!",
    },
  },
  {
    id: "nasratullah-a",
    author: "Nasratullah A.",
    source: "google",
    year: 2023,
    quote: {
      de: "War wegen eines Verbandwechsels da, sehr hygienisch und schmerzfrei. Der Doktor war sehr freundlich. Bin mit der Behandlung sehr zufrieden.",
      en: "I came in for a dressing change: very hygienic and painless. The doctor was very friendly. I'm very happy with the treatment.",
      es: "Fui para un cambio de vendaje: muy higiénico e indoloro. El doctor fue muy amable. Estoy muy satisfecho con el tratamiento.",
      fr: "J'étais venu pour un changement de pansement : très hygiénique et sans douleur. Le médecin a été très aimable. Je suis très satisfait des soins.",
      it: "Sono andato per un cambio di medicazione: molto igienico e indolore. Il dottore è stato molto gentile. Sono molto soddisfatto del trattamento.",
    },
  },
  {
    id: "kaan",
    author: "Kaan",
    source: "google",
    year: 2022,
    quote: {
      de: "Sehr zuvorkommender Arzt, kurzfristig schnell einen Termin bekommen. Danke an die netten Empfangsdamen. Nur zu empfehlen.",
      en: "A very obliging doctor, I got an appointment quickly at short notice. Thanks to the lovely reception staff. Highly recommended.",
      es: "Un médico muy atento; conseguí cita rápido y con poca antelación. Gracias a las amables recepcionistas. Totalmente recomendable.",
      fr: "Médecin très prévenant, j'ai eu un rendez-vous rapidement et à court terme. Merci aux charmantes dames de l'accueil. À recommander.",
      it: "Medico molto premuroso, ho avuto un appuntamento in fretta e con poco preavviso. Grazie alle gentili signore della reception. Da consigliare.",
    },
  },
  {
    id: "barani-j",
    author: "Barani J.",
    source: "google",
    year: 2024,
    quote: {
      de: "Heute habe ich die Praxis besucht. Er hat meinen Magen untersucht und sich dafür mehr als eine Viertelstunde Zeit genommen.",
      en: "I visited the practice today. He examined my stomach and took more than a quarter of an hour for it.",
      es: "Hoy visité la consulta. Me examinó el estómago y se tomó más de un cuarto de hora para ello.",
      fr: "J'ai consulté aujourd'hui. Il a examiné mon estomac et y a consacré plus d'un quart d'heure.",
      it: "Oggi sono stato nello studio. Mi ha visitato lo stomaco e ci ha dedicato più di un quarto d'ora.",
    },
  },
  {
    id: "antonio-v",
    author: "Antonio V.",
    source: "google",
    year: 2023,
    quote: {
      de: "Sehr guter Doktor. Ich als Herztransplantierter bin hier in sehr guten Händen.",
      en: "A very good doctor. As a heart transplant recipient, I am in very good hands here.",
      es: "Muy buen doctor. Como trasplantado de corazón, aquí estoy en muy buenas manos.",
      fr: "Très bon docteur. En tant que greffé du cœur, je suis ici entre de très bonnes mains.",
      it: "Ottimo dottore. Da trapiantato di cuore, qui sono in ottime mani.",
    },
  },
  {
    id: "adriana-g",
    author: "Adriana G.",
    source: "google",
    year: 2023,
    quote: {
      de: "Habe heute kurzfristig bei Dr. Dost Mohammad einen Termin bekommen, bin sehr zufrieden.",
      en: "I got a short-notice appointment with Dr. Dost Mohammad today and I'm very happy.",
      es: "Hoy conseguí una cita con poca antelación con el Dr. Dost Mohammad y estoy muy contenta.",
      fr: "J'ai obtenu aujourd'hui un rendez-vous de dernière minute chez le Dr Dost Mohammad, je suis très satisfaite.",
      it: "Oggi ho avuto un appuntamento con poco preavviso dal Dr. Dost Mohammad, sono molto soddisfatta.",
    },
  },
  {
    id: "buenyamin-c",
    author: "Bünyamin C.",
    source: "google",
    year: 2023,
    quote: {
      de: "Sehr netter Doktor, immer freundlich und hilfsbereit, nette Mitarbeiter.",
      en: "A very nice doctor, always friendly and helpful, with lovely staff.",
      es: "Un doctor muy amable, siempre simpático y servicial, y un personal encantador.",
      fr: "Un docteur très gentil, toujours aimable et serviable, avec une équipe sympathique.",
      it: "Un dottore molto gentile, sempre cordiale e disponibile, con uno staff simpatico.",
    },
  },
  {
    id: "mohammad-ka",
    author: "Mohammad Ka.",
    source: "google",
    year: 2022,
    quote: {
      de: "Ich kenne Dr. Dost Mohammad. Er ist richtig gut. Nette Mitarbeiter, ich bin mit der Praxis sehr zufrieden.",
      en: "I know Dr. Dost Mohammad. He is really good. Lovely staff, and I'm very happy with the practice.",
      es: "Conozco al Dr. Dost Mohammad. Es realmente bueno. Personal amable; estoy muy contento con la consulta.",
      fr: "Je connais le Dr Dost Mohammad. Il est vraiment bon. Équipe sympathique, je suis très satisfait du cabinet.",
      it: "Conosco il Dr. Dost Mohammad. È davvero bravo. Staff gentile, sono molto soddisfatto dello studio.",
    },
  },
  {
    id: "chaima-g",
    author: "Chaima G.",
    source: "google",
    year: 2023,
    quote: {
      de: "Schnelle Termine, kurze Wartezeit und top Leistung.",
      en: "Quick appointments, short waits and top-quality care.",
      es: "Citas rápidas, poca espera y un servicio de primera.",
      fr: "Rendez-vous rapides, attente courte et soins au top.",
      it: "Appuntamenti rapidi, attese brevi e prestazioni al top.",
    },
  },
  {
    id: "lahme",
    author: "Lahme",
    source: "google",
    year: 2022,
    quote: {
      de: "Ich bin mit der Praxis sehr zufrieden, nettes Team.",
      en: "I'm very happy with the practice, a lovely team.",
      es: "Estoy muy contento con la consulta, un equipo encantador.",
      fr: "Je suis très satisfait du cabinet, une équipe sympathique.",
      it: "Sono molto soddisfatto dello studio, un team simpatico.",
    },
  },
  {
    id: "levent-k",
    author: "Levent K.",
    source: "google",
    year: 2022,
    quote: {
      de: "Tolle Arztpraxis.",
      en: "A great practice.",
      es: "Una consulta estupenda.",
      fr: "Un super cabinet médical.",
      it: "Uno studio medico fantastico.",
    },
  },
  {
    id: "mario-s",
    author: "Mario S.",
    source: "google",
    year: 2023,
    quote: {
      de: "Super Arzt.",
      en: "Great doctor.",
      es: "Un médico estupendo.",
      fr: "Super médecin.",
      it: "Un medico fantastico.",
    },
  },
]

export const featuredReviews = reviews.filter((r) => r.featured)
