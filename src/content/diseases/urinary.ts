import type { Disease } from "@/content/treatments"

/**
 * Conditions for "Urinary Tract & Kidneys". This area is empty on
 * drdosthealth.com, so the content here is generated: original bilingual prose
 * (definition + the five treatment modalities) based on common ICD-10
 * conditions in urology and nephrology for a general/private practice. Every
 * page is reviewed by Dr. Dost before use; images are added later via the
 * Gemini web workflow and will carry the "KI-generiert" caption.
 */
export const urinaryDiseases: Disease[] = [
  {
    slug: "acute-cystitis",
    icd10: "N30.0",
    illustration: "generic",
    title: { de: "Akute Blasenentzündung (Zystitis)", en: "Acute Cystitis" },
    summary: {
      de: "Bakterielle Entzündung der Harnblase mit Brennen beim Wasserlassen und häufigem Harndrang.",
      en: "Bacterial inflammation of the bladder with burning on urination and frequent urgency.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die akute Zystitis ist eine meist bakterielle Entzündung der Harnblase, überwiegend durch Darmbakterien (häufig E. coli) ausgelöst. Typisch sind Brennen und Schmerzen beim Wasserlassen, häufiger Harndrang mit kleinen Mengen und ein Druckgefühl über dem Schambein. Frauen sind aufgrund der kürzeren Harnröhre deutlich häufiger betroffen.",
          en: "Acute cystitis is a usually bacterial inflammation of the bladder, mostly caused by gut bacteria (often E. coli). Typical features are burning and pain on urination, frequent urgency with small volumes and a pressure sensation above the pubic bone. Women are affected far more often because of the shorter urethra." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Bei typischen Beschwerden einer unkomplizierten Blasenentzündung genügt oft die klinische Beurteilung, ergänzt durch einen Urin-Teststreifen. Bei unklarem Befund, Schwangerschaft, wiederholten Infekten oder Männern wird eine Urinkultur veranlasst, um Erreger und Empfindlichkeit zu bestimmen.",
          en: "For typical symptoms of an uncomplicated bladder infection, clinical assessment plus a urine dipstick is often sufficient. For unclear findings, pregnancy, recurrent infections or in men, a urine culture is arranged to identify the organism and its sensitivity." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Leichte, unkomplizierte Verläufe können zunächst rein symptomatisch mit reichlich Trinken und Schmerzmitteln behandelt werden. Sind Antibiotika nötig, werden kurze, gezielte Regime nach aktuellen Leitlinien gewählt, um Wirksamkeit zu sichern und Resistenzen zu vermeiden – Reserveantibiotika bleiben schwereren Fällen vorbehalten.",
          en: "Mild, uncomplicated cases may first be managed purely symptomatically with generous fluids and pain relief. When antibiotics are needed, short, targeted regimens are chosen according to current guidelines to ensure efficacy and avoid resistance – reserve antibiotics are kept for more serious cases." } },
        { t: "p", text: {
          de: "Wichtig: Fieber, Flankenschmerz, Übelkeit oder ein deutliches Krankheitsgefühl können auf eine aufsteigende Nierenbeckenentzündung hindeuten und erfordern eine rasche ärztliche Abklärung.",
          en: "Important: fever, flank pain, nausea or feeling markedly unwell can indicate an ascending kidney infection and require prompt medical assessment." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Unterstützende Maßnahmen", en: "Supportive measures" } },
        { t: "ul", items: {
          de: ["Reichliches Trinken spült die Blase und kann die Genesung unterstützen.","Wärme (Wärmflasche, warme Sitzbäder) lindert krampfartige Beschwerden.","Blasen- und Nierentees sowie Präparate mit Bärentraubenblättern werden traditionell genutzt; Eignung und Dauer ärztlich klären.","Zur Vorbeugung können Blase nach dem Geschlechtsverkehr entleeren und Unterkühlung meiden helfen."],
          en: ["Generous fluid intake flushes the bladder and can aid recovery.","Warmth (a hot-water bottle, warm sitz baths) eases cramping discomfort.","Bladder and kidney teas and bearberry-leaf preparations are traditionally used; suitability and duration should be medically clarified.","For prevention, emptying the bladder after intercourse and avoiding chilling can help."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird die akute Blasenentzündung häufig dem Muster feuchter Hitze im unteren Erwärmer zugeordnet. Akupunktur und kühlend-ausleitende Kräuter können begleitend eingesetzt werden, ersetzen jedoch bei ausgeprägten oder fieberhaften Verläufen die medizinische Behandlung nicht.",
          en: "In TCM, acute cystitis is often assigned to the pattern of damp heat in the lower burner. Acupuncture and cooling, draining herbs may be used as complementary care but do not replace medical treatment in pronounced or feverish cases." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch wird die Blasenentzündung meist einer Pitta-Störung zugeordnet; empfohlen werden kühlende, reichlich flüssige Kost, Meiden scharfer und saurer Speisen sowie ausreichende Flüssigkeitszufuhr. Kräuterpräparate sind ärztlich auf Eignung und Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, cystitis is usually attributed to a Pitta disturbance; cooling, fluid-rich food, avoidance of spicy and sour dishes and adequate hydration are recommended. Herbal preparations should be medically checked for suitability and interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie spielt beim akuten Infekt eine untergeordnete Rolle. Wärmeanwendungen und Entspannung können Beschwerden lindern; bei wiederkehrenden Infekten mit Beckenbodenverspannung kann eine gezielte Beckenboden- und Entspannungstherapie sinnvoll sein.",
          en: "Physiotherapy plays a minor role in the acute infection. Heat applications and relaxation can ease symptoms; for recurrent infections with pelvic-floor tension, targeted pelvic-floor and relaxation therapy can be useful." } },
      ],
    },
  },

  {
    slug: "recurrent-urinary-tract-infection",
    icd10: "N39.0",
    illustration: "generic",
    title: { de: "Wiederkehrende Harnwegsinfektion", en: "Recurrent Urinary Tract Infection" },
    summary: {
      de: "Mehrfach im Jahr auftretende Harnwegsinfekte, die Abklärung und Vorbeugung erfordern.",
      en: "Urinary tract infections occurring several times a year, needing assessment and prevention.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Von wiederkehrenden Harnwegsinfektionen spricht man bei mehreren Infekten innerhalb eines Jahres. Sie sind belastend und erfordern eine sorgfältige Ursachensuche – etwa hormonelle Veränderungen nach den Wechseljahren, Blasenentleerungsstörungen, Steine oder anatomische Besonderheiten.",
          en: "Recurrent urinary tract infections are defined by several infections within a year. They are burdensome and call for a careful search for causes – such as hormonal changes after menopause, bladder-emptying problems, stones or anatomical variants." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Zur Abklärung gehören wiederholte Urinkulturen, Ultraschall von Blase und Nieren sowie die Bestimmung der Restharnmenge; bei Männern und in unklaren Fällen erfolgt eine weiterführende urologische Untersuchung. Begleitende Risikofaktoren wie Diabetes werden mitbeurteilt.",
          en: "Assessment includes repeated urine cultures, ultrasound of the bladder and kidneys and measurement of residual urine; in men and in unclear cases, further urological investigation is carried out. Contributing risk factors such as diabetes are also assessed." } },
        { t: "sub", text: { de: "Vorbeugung & Behandlung", en: "Prevention & treatment" } },
        { t: "p", text: {
          de: "Neben der gezielten Behandlung akuter Infekte stehen vorbeugende Strategien im Vordergrund: reichliches Trinken, Verhaltensmaßnahmen, bei Frauen nach den Wechseljahren lokale Östrogene sowie gegebenenfalls nicht-antibiotische Prophylaxen. Eine dauerhafte antibiotische Vorbeugung wird nur zurückhaltend und individuell abgewogen eingesetzt.",
          en: "Alongside targeted treatment of acute infections, preventive strategies are central: generous fluids, behavioural measures, local oestrogen in postmenopausal women and, where appropriate, non-antibiotic prophylaxis. Continuous antibiotic prophylaxis is used only sparingly and after individual consideration." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Vorbeugende Ansätze", en: "Preventive approaches" } },
        { t: "ul", items: {
          de: ["Ausreichende, über den Tag verteilte Flüssigkeitszufuhr.","Präparate mit D-Mannose oder Cranberry werden zur Vorbeugung genutzt; die Datenlage ist unterschiedlich, eine Besprechung ist sinnvoll.","Meiden von Unterkühlung und rasche Blasenentleerung nach dem Geschlechtsverkehr.","Aufbau einer gesunden Scheiden- und Darmflora, z. B. durch ausgewogene Ernährung."],
          en: ["Adequate fluid intake spread across the day.","D-mannose or cranberry preparations are used for prevention; evidence varies, so a discussion is worthwhile.","Avoiding chilling and emptying the bladder promptly after intercourse.","Supporting a healthy vaginal and gut flora, e.g. through a balanced diet."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden wiederkehrende Infekte oft einer Schwäche der Nieren- und Milz-Energie mit Restfeuchtigkeit zugeordnet. Akupunktur und stärkende Kräuterkonzepte können begleitend zur Stabilisierung eingesetzt werden.",
          en: "Traditionally, recurrent infections are often assigned to a weakness of Kidney and Spleen energy with residual dampness. Acupuncture and tonifying herbal concepts may be used as complementary support for stabilisation." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine kühlende, leicht verdauliche Ernährung, ausreichend Flüssigkeit und eine geregelte Tagesroutine zur Stärkung der Abwehr. Kräuterpräparate sind ärztlich auf Eignung und Wechselwirkungen zu prüfen.",
          en: "Ayurvedic support emphasises a cooling, easily digestible diet, adequate fluids and a regular daily routine to strengthen resilience. Herbal preparations should be medically checked for suitability and interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Eine gezielte Beckenbodentherapie kann helfen, wenn eine gestörte Blasenentleerung oder eine Beckenbodenfehlfunktion zu den Infekten beiträgt. Vermittelt werden entspannte, vollständige Blasenentleerung und ein ausgewogenes Trink- und Toilettenverhalten.",
          en: "Targeted pelvic-floor therapy can help when impaired bladder emptying or pelvic-floor dysfunction contributes to the infections. It teaches relaxed, complete bladder emptying and balanced drinking and toileting habits." } },
      ],
    },
  },

  {
    slug: "interstitial-cystitis",
    icd10: "N30.1",
    illustration: "generic",
    title: { de: "Interstitielle Zystitis (Reizblase)", en: "Interstitial Cystitis" },
    summary: {
      de: "Chronische, nicht-infektiöse Blasenschmerzerkrankung mit Druck und häufigem Harndrang.",
      en: "A chronic, non-infectious bladder pain condition with pressure and frequent urgency.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die interstitielle Zystitis (Blasenschmerzsyndrom) ist eine chronische, nicht durch Bakterien verursachte Erkrankung mit Blasenschmerzen, Druckgefühl und häufigem Harndrang bei Tag und Nacht. Die Beschwerden bessern sich oft nach dem Wasserlassen und verlaufen in Schüben. Die Ursache ist nicht vollständig geklärt.",
          en: "Interstitial cystitis (bladder pain syndrome) is a chronic condition not caused by bacteria, with bladder pain, a pressure sensation and frequent urination day and night. Symptoms often ease after urinating and follow a relapsing course. The cause is not fully understood." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose ist eine Ausschlussdiagnose: Infekte, Steine und andere Ursachen werden per Urinuntersuchung, Ultraschall und bei Bedarf Blasenspiegelung ausgeschlossen. Ein Miktionsprotokoll und Fragebögen helfen, Schweregrad und Verlauf einzuschätzen.",
          en: "Diagnosis is one of exclusion: infections, stones and other causes are ruled out with urine tests, ultrasound and, if needed, cystoscopy. A voiding diary and questionnaires help gauge severity and course." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die Behandlung ist mehrstufig und individuell: Schulung und Ernährungsanpassung, Blasentraining, Schmerz- und Stressbewältigung, Medikamente (oral oder als Blaseninstillation) bis hin zu speziellen Verfahren in urologischen Zentren. Ziel ist eine dauerhafte Symptomkontrolle.",
          en: "Treatment is stepwise and individual: education and dietary adjustment, bladder training, pain and stress management, medicines (oral or as bladder instillations) up to specialised procedures in urology centres. The goal is durable symptom control." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Alltag & Ernährung", en: "Daily life & nutrition" } },
        { t: "ul", items: {
          de: ["Identifizieren und Meiden individueller Reizstoffe (häufig Koffein, Alkohol, scharfe und stark säurehaltige Speisen).","Stressreduktion und ausreichend Schlaf, da Stress Schübe begünstigen kann.","Wärmeanwendungen zur Linderung krampfartiger Beschwerden.","Ein Ernährungs- und Beschwerdetagebuch hilft, Auslöser zu erkennen."],
          en: ["Identifying and avoiding individual irritants (often caffeine, alcohol, spicy and highly acidic foods).","Stress reduction and adequate sleep, as stress can promote flares.","Heat applications to relieve cramping discomfort.","A food and symptom diary helps identify triggers."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden chronische Blasenbeschwerden häufig Mustern aus Leber-Qi-Stagnation, Restfeuchtigkeit und einer Schwäche zugeordnet. Akupunktur und individuelle Kräuter können begleitend zur Schmerz- und Stresslinderung beitragen.",
          en: "In TCM, chronic bladder complaints are often assigned to patterns of Liver Qi stagnation, residual dampness and deficiency. Acupuncture and individual herbs may contribute as complementary care to relieve pain and stress." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen eine kühlende, reizarme Ernährung, Stressausgleich durch Yoga und Meditation sowie beruhigende Routinen im Vordergrund. Kräuterpräparate sind ärztlich auf Eignung und Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, a cooling, low-irritant diet, stress balance through yoga and meditation and calming routines are emphasised. Herbal preparations should be medically checked for suitability and interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Die Physiotherapie ist ein wichtiger Baustein: Eine spezialisierte Beckenbodentherapie zur Entspannung verspannter Muskulatur, sanftes Blasentraining und Techniken zur Schmerzbewältigung können Beschwerden und Harndrang deutlich lindern.",
          en: "Physiotherapy is an important building block: specialised pelvic-floor therapy to release tense muscles, gentle bladder training and pain-management techniques can markedly ease symptoms and urgency." } },
      ],
    },
  },

  {
    slug: "pyelonephritis",
    icd10: "N10",
    illustration: "generic",
    title: { de: "Nierenbeckenentzündung (Pyelonephritis)", en: "Pyelonephritis" },
    summary: {
      de: "Bakterielle Entzündung von Nierenbecken und Niere mit Fieber und Flankenschmerz.",
      en: "Bacterial infection of the renal pelvis and kidney with fever and flank pain.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die akute Pyelonephritis ist eine bakterielle Entzündung von Nierenbecken und Nierengewebe, meist durch aufsteigende Harnwegskeime. Typisch sind hohes Fieber, Schüttelfrost, Flankenschmerz (Klopfschmerz über der Nierengegend), Krankheitsgefühl und häufig Beschwerden beim Wasserlassen.",
          en: "Acute pyelonephritis is a bacterial infection of the renal pelvis and kidney tissue, usually from ascending urinary organisms. Typical features are high fever, chills, flank pain (tenderness over the kidney area), feeling unwell and often urinary symptoms." } },
        { t: "p", text: {
          de: "Wichtig: Hohes Fieber mit Schüttelfrost, starke Schmerzen, Kreislaufschwäche oder Verwirrtheit können auf eine Blutvergiftung (Urosepsis) hindeuten und erfordern eine sofortige ärztliche Abklärung, im Notfall den Notruf 112.",
          en: "Important: high fever with chills, severe pain, circulatory weakness or confusion can indicate blood poisoning (urosepsis) and require immediate medical assessment, and an emergency call (112) in an emergency." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Abklärung umfasst Urinuntersuchung und Urinkultur, Bluttests (Entzündungswerte, Nierenwerte) und einen Ultraschall, um einen Harnstau oder Steine als Abflusshindernis auszuschließen.",
          en: "Assessment includes urine tests and culture, blood tests (inflammatory markers, kidney values) and an ultrasound to exclude obstruction from urinary stasis or stones." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die Pyelonephritis wird zügig mit einem geeigneten Antibiotikum behandelt, anfangs oft kalkuliert und nach Kulturergebnis angepasst. Schwere Verläufe, Schwangerschaft oder ein Abflusshindernis erfordern eine stationäre Behandlung und gegebenenfalls eine Entlastung des Harnstaus.",
          en: "Pyelonephritis is treated promptly with a suitable antibiotic, initially empirical and adjusted once culture results are available. Severe cases, pregnancy or an obstruction require inpatient treatment and, if necessary, relief of the urinary stasis." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Naturheilkundliche Maßnahmen sind hier nur begleitend zur ärztlichen Behandlung sinnvoll: reichliches Trinken, Wärme und Schonung. Eine Verzögerung der Antibiotikatherapie ist wegen der Gefahr einer Urosepsis nicht vertretbar.",
          en: "Naturopathic measures are appropriate here only alongside medical treatment: generous fluids, warmth and rest. Delaying antibiotic therapy is not justifiable because of the risk of urosepsis." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Die TCM ordnet die Nierenbeckenentzündung ausgeprägter feuchter Hitze zu. In der Akutphase hat die medizinische Behandlung Vorrang; TCM-Verfahren kommen allenfalls in der Erholungsphase begleitend und unter qualifizierter Aufsicht infrage.",
          en: "TCM assigns pyelonephritis to pronounced damp heat. In the acute phase, medical treatment takes priority; TCM approaches may at most be used during recovery as complementary care under qualified supervision." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung beschränkt sich in der Akutphase auf unterstützende Maßnahmen wie kühlende, leicht verdauliche Kost und Flüssigkeitszufuhr. Kräuterpräparate sind wegen möglicher Nierenbelastung und Wechselwirkungen ärztlich zu prüfen.",
          en: "Ayurvedic support in the acute phase is limited to supportive measures such as cooling, easily digestible food and hydration. Herbal preparations should be medically reviewed because of possible kidney burden and interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "In der akuten Entzündung steht Schonung im Vordergrund; Physiotherapie spielt kaum eine Rolle. In der Erholungsphase unterstützen schrittweise gesteigerte, moderate Bewegung und allgemeine Aktivierung die Genesung.",
          en: "In the acute infection, rest is paramount; physiotherapy plays little role. During recovery, gradually increased, moderate activity and general reconditioning support recuperation." } },
      ],
    },
  },

  {
    slug: "urethritis",
    icd10: "N34.2",
    illustration: "generic",
    title: { de: "Harnröhrenentzündung (Urethritis)", en: "Urethritis" },
    summary: {
      de: "Entzündung der Harnröhre mit Brennen und Ausfluss, oft durch sexuell übertragbare Erreger.",
      en: "Inflammation of the urethra with burning and discharge, often from sexually transmitted organisms.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Urethritis ist eine Entzündung der Harnröhre. Typisch sind Brennen beim Wasserlassen, Juckreiz und ein Ausfluss aus der Harnröhre. Häufige Ursachen sind sexuell übertragbare Erreger wie Chlamydien oder Gonokokken; auch nicht-infektiöse Reizungen kommen vor.",
          en: "Urethritis is inflammation of the urethra. Typical features are burning on urination, itching and a urethral discharge. Common causes are sexually transmitted organisms such as chlamydia or gonococci; non-infectious irritation also occurs." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Abklärung umfasst Urinuntersuchung und einen gezielten Erregernachweis (z. B. Abstrich oder Erststrahlurin auf Chlamydien und Gonokokken). Bei nachgewiesener sexuell übertragbarer Infektion ist die Mitbehandlung der Partnerinnen und Partner wichtig.",
          en: "Assessment includes urine tests and targeted organism detection (e.g. a swab or first-void urine for chlamydia and gonococci). When a sexually transmitted infection is confirmed, treating partners is important." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die Behandlung richtet sich nach dem Erreger und erfolgt mit gezielten Antibiotika nach aktuellen Leitlinien. Bis zum Abschluss der Behandlung und Abklingen der Beschwerden wird ungeschützter Geschlechtsverkehr vermieden; eine Testung auf weitere Infektionen wird angeboten.",
          en: "Treatment depends on the organism and uses targeted antibiotics according to current guidelines. Unprotected intercourse is avoided until treatment is complete and symptoms have resolved; testing for further infections is offered." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend können reichliches Trinken und Schonung Beschwerden lindern. Eine ursächliche naturheilkundliche Behandlung ersetzt bei nachgewiesener Infektion die erforderliche Antibiotikatherapie nicht. Safer-Sex-Praktiken beugen einer erneuten Ansteckung vor.",
          en: "As support, generous fluids and rest can ease symptoms. For a confirmed infection, naturopathic treatment does not replace the required antibiotic therapy. Safer-sex practices help prevent reinfection." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird die Harnröhrenentzündung feuchter Hitze im unteren Erwärmer zugeordnet. Begleitende Akupunktur und kühlende Kräuter können Beschwerden mildern, ersetzen aber nicht die gezielte antimikrobielle Behandlung.",
          en: "In TCM, urethritis is assigned to damp heat in the lower burner. Complementary acupuncture and cooling herbs may soften symptoms but do not replace targeted antimicrobial treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch werden eine kühlende, reizarme Ernährung und ausreichende Flüssigkeit empfohlen. Kräuterpräparate sind ärztlich zu prüfen und ersetzen bei Infektion die Antibiotikatherapie nicht.",
          en: "Ayurveda recommends a cooling, low-irritant diet and adequate fluids. Herbal preparations should be medically reviewed and do not replace antibiotic therapy when an infection is present." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie hat bei der akuten Harnröhrenentzündung keine wesentliche Rolle. Bei anhaltenden Reizbeschwerden ohne Erregernachweis kann eine Beckenboden-Entspannungstherapie hilfreich sein.",
          en: "Physiotherapy has no substantial role in acute urethritis. For persistent irritative symptoms without a detectable organism, pelvic-floor relaxation therapy can be helpful." } },
      ],
    },
  },

  {
    slug: "urolithiasis-kidney-stones",
    icd10: "N20.0",
    illustration: "generic",
    title: { de: "Nierensteine (Urolithiasis)", en: "Kidney Stones (Urolithiasis)" },
    summary: {
      de: "Kristallablagerungen in der Niere, die still bleiben oder heftige Koliken auslösen können.",
      en: "Crystalline deposits in the kidney that may stay silent or cause severe colic.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Nierensteine entstehen, wenn im Urin gelöste Substanzen auskristallisieren und sich zu Steinen verbinden. Kleine Steine in der Niere bleiben oft unbemerkt; wandern sie in den Harnleiter, können heftige, wellenartige Schmerzen (Nierenkolik), Übelkeit und Blut im Urin auftreten.",
          en: "Kidney stones form when substances dissolved in the urine crystallise and combine into stones. Small stones in the kidney often go unnoticed; if they move into the ureter, severe, wave-like pain (renal colic), nausea and blood in the urine can occur." } },
        { t: "p", text: {
          de: "Wichtig: Eine Nierenkolik zusammen mit Fieber ist ein Warnzeichen für eine gefährliche Infektion des gestauten Harns (Urosepsis-Gefahr) und erfordert eine sofortige ärztliche Abklärung.",
          en: "Important: renal colic together with fever is a warning sign of a dangerous infection of obstructed urine (risk of urosepsis) and requires immediate medical assessment." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Abklärung umfasst Urinuntersuchung, Bluttests und Bildgebung (Ultraschall, bei Bedarf eine strahlenarme Computertomografie), um Lage und Größe des Steins zu bestimmen. Nach Möglichkeit wird der Stein zur Analyse aufgefangen.",
          en: "Assessment includes urine tests, blood tests and imaging (ultrasound, and low-dose CT when needed) to determine the stone's location and size. Where possible the stone is collected for analysis." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Kleine Steine gehen häufig unter reichlicher Flüssigkeit und Schmerztherapie von selbst ab, teils unterstützt durch abgangsfördernde Medikamente. Größere oder festsitzende Steine werden mit Stoßwellentherapie oder endoskopisch entfernt. Nach einem Steinereignis folgt eine Abklärung zur Vorbeugung.",
          en: "Small stones often pass on their own with generous fluids and pain relief, sometimes aided by medicines that ease passage. Larger or impacted stones are removed by shock-wave therapy or endoscopically. After a stone event, a metabolic work-up for prevention follows." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Vorbeugung", en: "Prevention" } },
        { t: "ul", items: {
          de: ["Reichlich trinken (meist etwa 2,5 bis 3 Liter täglich, sofern ärztlich nicht anders empfohlen), um den Urin zu verdünnen.","Eine ausgewogene, salzarme Ernährung mit ausreichend Gemüse und maßvollem tierischem Eiweiß.","Die Ernährungsempfehlung richtet sich nach der Steinart (z. B. Kalziumoxalat, Harnsäure) und wird individuell festgelegt.","Übergewicht reduzieren und ausreichende Kalziumzufuhr über die Nahrung beibehalten."],
          en: ["Drink generously (usually around 2.5 to 3 litres a day unless advised otherwise) to dilute the urine.","A balanced, low-salt diet with plenty of vegetables and moderate animal protein.","Dietary advice depends on the stone type (e.g. calcium oxalate, uric acid) and is set individually.","Reduce excess weight and maintain adequate dietary calcium intake."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden Steinleiden oft feuchter Hitze mit Stagnation zugeordnet. Akupunktur kann begleitend zur Schmerzlinderung beitragen; eine akute Kolik mit Fieber gehört jedoch umgehend in ärztliche Behandlung.",
          en: "In TCM, stone disease is often assigned to damp heat with stagnation. Acupuncture may help as complementary pain relief; however, acute colic with fever belongs promptly in medical care." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen reichliche Flüssigkeit, wärmende Anwendungen und eine an die Steinart angepasste Ernährung im Vordergrund. Kräuterpräparate sind ärztlich zu prüfen, insbesondere bei eingeschränkter Nierenfunktion.",
          en: "In Ayurveda, generous fluids, warming applications and a diet adapted to the stone type are emphasised. Herbal preparations should be medically reviewed, especially with reduced kidney function." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Regelmäßige körperliche Bewegung und Aktivität können das Abgehen kleiner Steine begünstigen und beugen über ein gesundes Körpergewicht neuen Steinen vor. Bei akuten Koliken steht jedoch die Schmerzbehandlung im Vordergrund.",
          en: "Regular physical activity and movement can favour the passage of small stones and, by supporting a healthy body weight, help prevent new stones. During acute colic, however, pain control is the priority." } },
      ],
    },
  },

  {
    slug: "ureteral-stones",
    icd10: "N20.1",
    illustration: "generic",
    title: { de: "Harnleitersteine", en: "Ureteral Stones" },
    summary: {
      de: "In den Harnleiter gewanderte Steine mit typischer Nierenkolik und möglichem Harnstau.",
      en: "Stones that have moved into the ureter, with typical renal colic and possible obstruction.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Harnleitersteine sind Steine, die aus der Niere in den Harnleiter gewandert sind. Sie verursachen oft eine klassische Nierenkolik – plötzliche, sehr starke, wellenartige Schmerzen in Flanke und Unterbauch, die in die Leiste ausstrahlen können –, häufig begleitet von Übelkeit, Erbrechen und Blut im Urin.",
          en: "Ureteral stones are stones that have moved from the kidney into the ureter. They often cause classic renal colic – sudden, very severe, wave-like pain in the flank and lower abdomen that can radiate to the groin – frequently with nausea, vomiting and blood in the urine." } },
        { t: "p", text: {
          de: "Wichtig: Kommen Fieber, Schüttelfrost oder ein deutlich reduzierter Allgemeinzustand hinzu, besteht die Gefahr einer Infektion des gestauten Harns mit Urosepsis – dann ist eine sofortige ärztliche Behandlung erforderlich.",
          en: "Important: if fever, chills or a markedly reduced general condition develop, there is a risk of infection of obstructed urine with urosepsis – immediate medical treatment is then required." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose stützt sich auf die typischen Beschwerden, Urin- und Bluttests sowie Bildgebung (Ultraschall und meist eine strahlenarme Computertomografie), die Lage, Größe und einen begleitenden Harnstau zeigt.",
          en: "Diagnosis rests on the typical symptoms, urine and blood tests and imaging (ultrasound and usually a low-dose CT), which shows location, size and any accompanying obstruction." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Bei akuter Kolik stehen wirksame Schmerzmittel im Vordergrund. Kleinere Steine gehen oft spontan ab, unterstützt durch reichliches Trinken und gegebenenfalls abgangsfördernde Medikamente. Größere, festsitzende Steine oder ein infizierter Harnstau werden endoskopisch entfernt oder der Harnabfluss wird umgehend entlastet.",
          en: "In acute colic, effective pain relief is the priority. Smaller stones often pass spontaneously, aided by generous fluids and, where appropriate, medicines that ease passage. Larger, impacted stones or an infected obstruction are removed endoscopically or the urinary drainage is relieved without delay." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend fördern reichliches Trinken und Wärme das Wohlbefinden. Zur Vorbeugung gelten dieselben Grundsätze wie bei Nierensteinen: ausreichende Flüssigkeit und eine an die Steinart angepasste, salzarme Ernährung. Pflanzliche Mittel sind ärztlich zu prüfen.",
          en: "As support, generous fluids and warmth aid comfort. For prevention the same principles apply as for kidney stones: adequate fluids and a low-salt diet tailored to the stone type. Herbal products should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Die TCM ordnet Steinbeschwerden Mustern aus feuchter Hitze und Stagnation zu. Akupunktur kann begleitend zur Schmerzlinderung dienen; die akute Kolik und ein Harnstau gehören jedoch in ärztliche Behandlung.",
          en: "TCM assigns stone complaints to patterns of damp heat and stagnation. Acupuncture may serve as complementary pain relief; acute colic and obstruction, however, belong in medical care." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch werden reichliche Flüssigkeit, wärmende Anwendungen und eine angepasste Ernährung empfohlen. Kräuterpräparate sind ärztlich zu prüfen, besonders bei Harnstau oder eingeschränkter Nierenfunktion.",
          en: "Ayurveda recommends generous fluids, warming applications and an adapted diet. Herbal preparations should be medically reviewed, particularly with obstruction or reduced kidney function." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Außerhalb der akuten Kolik können Bewegung und körperliche Aktivität das Abgehen kleiner Steine unterstützen. Im akuten Schmerzanfall steht die medizinische Behandlung im Vordergrund.",
          en: "Outside acute colic, movement and physical activity can support the passage of small stones. During an acute pain attack, medical treatment is the priority." } },
      ],
    },
  },

  {
    slug: "bladder-stones",
    icd10: "N21.0",
    illustration: "generic",
    title: { de: "Blasensteine", en: "Bladder Stones" },
    summary: {
      de: "Steine in der Harnblase, oft Folge einer gestörten Blasenentleerung.",
      en: "Stones in the bladder, often a consequence of impaired bladder emptying.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Blasensteine bilden sich in der Harnblase, häufig wenn sich die Blase nicht vollständig entleert – etwa bei vergrößerter Prostata, neurologischen Blasenstörungen oder Dauerkathetern. Beschwerden sind unterbrochener Harnstrahl, Schmerzen, häufiger Harndrang und Blut im Urin; manche Steine bleiben symptomlos.",
          en: "Bladder stones form in the bladder, often when it does not empty completely – for example with an enlarged prostate, neurological bladder disorders or indwelling catheters. Symptoms include an interrupted stream, pain, frequent urgency and blood in the urine; some stones remain symptom-free." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Abklärung umfasst Urinuntersuchung, Ultraschall und meist eine Blasenspiegelung. Wichtig ist das Erkennen der zugrunde liegenden Ursache, insbesondere einer gestörten Blasenentleerung.",
          en: "Assessment includes urine tests, ultrasound and usually cystoscopy. Identifying the underlying cause, especially impaired bladder emptying, is important." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Blasensteine werden in der Regel endoskopisch zertrümmert und entfernt. Entscheidend ist die Behandlung der Ursache – etwa der vergrößerten Prostata oder der Entleerungsstörung –, um erneute Steinbildung zu verhindern.",
          en: "Bladder stones are usually fragmented and removed endoscopically. Treating the cause – such as an enlarged prostate or an emptying disorder – is crucial to prevent recurrence." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend sind reichliches Trinken und eine vollständige, regelmäßige Blasenentleerung sinnvoll. Naturheilkundliche Maßnahmen ersetzen die Behandlung der zugrunde liegenden Entleerungsstörung nicht.",
          en: "As support, generous fluids and complete, regular bladder emptying are helpful. Naturopathic measures do not replace treatment of the underlying emptying disorder." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden Blasensteine feuchter Hitze und einer Schwäche der Blasen-Qi-Funktion zugeordnet. Akupunktur kann begleitend eingesetzt werden, ersetzt aber die Steinentfernung und Ursachenbehandlung nicht.",
          en: "In TCM, bladder stones are assigned to damp heat and a weakness of the bladder's Qi function. Acupuncture may be used as complementary care but does not replace stone removal and treatment of the cause." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch werden reichliche Flüssigkeit und eine ausgewogene Ernährung empfohlen. Kräuterpräparate sind ärztlich zu prüfen; die Ursache der gestörten Blasenentleerung muss medizinisch behandelt werden.",
          en: "Ayurveda recommends generous fluids and a balanced diet. Herbal preparations should be medically reviewed; the cause of impaired bladder emptying must be treated medically." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Wenn eine Entleerungsstörung beteiligt ist, kann eine Beckenboden- und Blasentherapie helfen, die Entleerung zu verbessern. Vermittelt werden entspannte Miktion und Techniken zur möglichst vollständigen Blasenentleerung.",
          en: "When an emptying disorder is involved, pelvic-floor and bladder therapy can help improve emptying. It teaches relaxed voiding and techniques to empty the bladder as completely as possible." } },
      ],
    },
  },

  {
    slug: "hydronephrosis",
    icd10: "N13.3",
    illustration: "generic",
    title: { de: "Harnstau (Hydronephrose)", en: "Hydronephrosis" },
    summary: {
      de: "Erweiterung des Nierenbeckens durch gestörten Harnabfluss – mit Risiko für die Nierenfunktion.",
      en: "Dilation of the renal pelvis from impaired urine drainage – with risk to kidney function.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der Hydronephrose staut sich der Harn zurück und weitet das Nierenbecken, weil der Abfluss behindert ist – etwa durch einen Stein, eine Engstelle, eine vergrößerte Prostata oder einen Tumor. Je nach Ursache treten Flankenschmerzen, Harnwegsinfekte oder gar keine Beschwerden auf. Ein anhaltender Stau kann die Nierenfunktion schädigen.",
          en: "In hydronephrosis, urine backs up and dilates the renal pelvis because drainage is obstructed – for example by a stone, a narrowing, an enlarged prostate or a tumour. Depending on the cause, flank pain, urinary infections or no symptoms occur. Prolonged obstruction can damage kidney function." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Der Ultraschall zeigt den Stau zuverlässig; ergänzend kommen Bluttests (Nierenwerte), Urinuntersuchung und weitere Bildgebung (z. B. Computertomografie) zum Einsatz, um die Ursache und den Grad der Abflussstörung zu klären.",
          en: "Ultrasound reliably shows the obstruction; blood tests (kidney values), urine analysis and further imaging (e.g. CT) are added to clarify the cause and degree of the drainage problem." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Im Vordergrund steht die Beseitigung des Abflusshindernisses. Bei drohendem Nierenschaden oder infiziertem Stau muss der Harn rasch entlastet werden – etwa durch eine Harnleiterschiene oder eine Ableitung über die Haut –, gefolgt von der ursächlichen Behandlung.",
          en: "The priority is removing the obstruction. When kidney damage is threatened or the obstruction is infected, the urine must be relieved quickly – for example with a ureteral stent or a drain through the skin – followed by treatment of the cause." } },
        { t: "p", text: {
          de: "Wichtig: Ein Harnstau mit Fieber ist ein Notfall (Gefahr einer Urosepsis) und erfordert eine sofortige ärztliche Behandlung.",
          en: "Important: an obstruction with fever is an emergency (risk of urosepsis) and requires immediate medical treatment." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Naturheilkundliche Maßnahmen können den Harnstau nicht beheben und sind allenfalls begleitend nach Beseitigung der Ursache sinnvoll (z. B. ausreichende Flüssigkeit, allgemeine Stärkung). Die ärztliche Behandlung des Abflusshindernisses hat Vorrang.",
          en: "Naturopathic measures cannot relieve the obstruction and are at most helpful as support once the cause is addressed (e.g. adequate fluids, general strengthening). Medical treatment of the obstruction takes priority." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Die TCM deutet einen Harnstau als Stagnation im Wasserhaushalt. Begleitende Verfahren können allenfalls das Allgemeinbefinden unterstützen; die Entlastung des Staus ist ärztlich sicherzustellen.",
          en: "TCM interprets an obstruction as stagnation in fluid metabolism. Complementary approaches may at most support general wellbeing; relieving the obstruction must be ensured medically." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch wird eine leichte, ausgewogene Ernährung mit ausreichender Flüssigkeit empfohlen. Kräuterpräparate sind wegen möglicher Nierenbelastung besonders sorgfältig ärztlich zu prüfen.",
          en: "Ayurveda recommends a light, balanced diet with adequate fluids. Herbal preparations need particularly careful medical review because of possible kidney burden." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie spielt beim Harnstau selbst keine ursächliche Rolle. In der Erholung nach der Behandlung unterstützen allgemeine Aktivierung und moderate Bewegung die Genesung.",
          en: "Physiotherapy plays no causal role in the obstruction itself. In recovery after treatment, general reconditioning and moderate activity support recuperation." } },
      ],
    },
  },

  {
    slug: "chronic-kidney-disease",
    icd10: "N18.9",
    illustration: "generic",
    title: { de: "Chronische Nierenerkrankung", en: "Chronic Kidney Disease" },
    summary: {
      de: "Dauerhaft eingeschränkte Nierenfunktion, die langsam fortschreiten und lange stumm bleiben kann.",
      en: "Persistently reduced kidney function that can slowly progress and stay silent for long.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die chronische Nierenerkrankung bezeichnet eine über mindestens drei Monate bestehende Einschränkung der Nierenfunktion oder Schädigung der Nieren. Häufige Ursachen sind Diabetes und Bluthochdruck. Sie verläuft lange ohne Beschwerden; im Verlauf können Wassereinlagerungen, Müdigkeit, Blutarmut und Knochenveränderungen auftreten.",
          en: "Chronic kidney disease refers to reduced kidney function or kidney damage present for at least three months. Common causes are diabetes and high blood pressure. It progresses without symptoms for a long time; over the course, fluid retention, fatigue, anaemia and bone changes can occur." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose & Stadien", en: "Diagnosis & stages" } },
        { t: "p", text: {
          de: "Die Einteilung erfolgt anhand der geschätzten Filtrationsleistung (eGFR) und der Eiweißausscheidung im Urin (Albuminurie). Regelmäßige Kontrollen von Blut- und Urinwerten sowie Blutdruck erfassen den Verlauf und mögliche Folgen.",
          en: "Staging is based on the estimated filtration rate (eGFR) and urinary protein excretion (albuminuria). Regular checks of blood and urine values and blood pressure track the course and possible complications." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Ziel ist, das Fortschreiten zu verlangsamen und Folgen zu behandeln: konsequente Blutdruck- und Blutzuckereinstellung, nierenschützende Medikamente (z. B. ACE-Hemmer/AT1-Blocker, SGLT2-Hemmer), Anpassung der Ernährung sowie Vorsicht mit nierenschädigenden Substanzen. In fortgeschrittenen Stadien werden Nierenersatzverfahren rechtzeitig geplant.",
          en: "The aim is to slow progression and treat complications: consistent blood-pressure and glucose control, kidney-protective medicines (e.g. ACE inhibitors/ARBs, SGLT2 inhibitors), dietary adjustment and caution with kidney-harming substances. In advanced stages, renal replacement therapy is planned in good time." } },
        { t: "p", text: {
          de: "Wichtig: Schmerzmittel aus der Gruppe der nichtsteroidalen Antirheumatika und bestimmte andere Medikamente sollten nur nach ärztlicher Rücksprache eingenommen werden, da sie die Nieren belasten können.",
          en: "Important: painkillers of the non-steroidal anti-inflammatory group and certain other medicines should be taken only after medical consultation, as they can burden the kidneys." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Ernährung & Alltag", en: "Nutrition & daily life" } },
        { t: "ul", items: {
          de: ["Salzbewusste, ausgewogene Ernährung; Eiweiß-, Kalium- und Phosphatzufuhr werden je nach Stadium ärztlich abgestimmt.","Blutdruck, Blutzucker und Gewicht im Zielbereich halten.","Rauchverzicht und ausreichende, aber nicht übermäßige Flüssigkeitszufuhr nach ärztlicher Vorgabe.","Vorsicht mit pflanzlichen Präparaten: Manche enthalten viel Kalium oder sind nierenbelastend und müssen ärztlich geprüft werden."],
          en: ["A salt-aware, balanced diet; protein, potassium and phosphate intake are set medically according to stage.","Keep blood pressure, glucose and weight within target.","Stopping smoking and adequate but not excessive fluid intake as medically advised.","Caution with herbal products: some are high in potassium or burden the kidneys and must be medically reviewed."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Die TCM ordnet die chronische Nierenschwäche häufig einem Mangel an Nieren-Qi und -Yang zu. Begleitende Verfahren können das Wohlbefinden unterstützen; Kräuter sind wegen der Gefahr von Kalium- und Nierenbelastung besonders sorgfältig ärztlich abzustimmen.",
          en: "TCM often assigns chronic kidney weakness to a deficiency of Kidney Qi and Yang. Complementary approaches may support wellbeing; herbs must be coordinated with particular medical care because of the risk of potassium and kidney burden." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen eine leichte, ausgewogene Ernährung und geregelte Routinen im Vordergrund. Kräuterpräparate sind mit besonderer Vorsicht und nur nach ärztlicher Prüfung anzuwenden, da einige die Nieren belasten oder mit Medikamenten wechselwirken können.",
          en: "In Ayurveda, a light, balanced diet and regular routines are emphasised. Herbal preparations should be used with particular caution and only after medical review, as some can burden the kidneys or interact with medicines." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Regelmäßige, an die Belastbarkeit angepasste Bewegung (Ausdauer- und leichtes Krafttraining) unterstützt Blutdruck, Stoffwechsel und Lebensqualität und wirkt Muskelabbau entgegen. Intensität und Umfang werden individuell festgelegt.",
          en: "Regular activity matched to capacity (aerobic and light resistance training) supports blood pressure, metabolism and quality of life and counters muscle loss. Intensity and volume are set individually." } },
      ],
    },
  },

  {
    slug: "acute-kidney-injury",
    icd10: "N17.9",
    illustration: "generic",
    title: { de: "Akutes Nierenversagen", en: "Acute Kidney Injury" },
    summary: {
      de: "Rasch einsetzende Verschlechterung der Nierenfunktion – ein medizinischer Notfall.",
      en: "A rapid deterioration of kidney function – a medical emergency.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Beim akuten Nierenversagen verschlechtert sich die Nierenfunktion innerhalb von Stunden bis Tagen. Ursachen sind unter anderem Flüssigkeitsmangel, Kreislaufprobleme, Infektionen, nierenschädigende Medikamente oder ein Harnstau. Anzeichen können verminderte Urinmenge, Wassereinlagerungen, Übelkeit und zunehmende Schwäche sein.",
          en: "In acute kidney injury, kidney function deteriorates within hours to days. Causes include fluid deficit, circulatory problems, infections, kidney-harming medicines or an obstruction. Signs may include reduced urine output, fluid retention, nausea and increasing weakness." } },
        { t: "p", text: {
          de: "Wichtig: Das akute Nierenversagen ist ein Notfall. Stark verminderte Urinausscheidung, ausgeprägte Schwäche, Luftnot oder Verwirrtheit erfordern eine sofortige ärztliche Behandlung, im Notfall den Notruf 112.",
          en: "Important: acute kidney injury is an emergency. Markedly reduced urine output, pronounced weakness, breathlessness or confusion require immediate medical treatment, and an emergency call (112) in an emergency." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Abklärung erfasst rasch die Nierenwerte und Elektrolyte im Blut, die Urinmenge und -zusammensetzung sowie die Ursache (z. B. Ultraschall zum Ausschluss eines Harnstaus, Überprüfung der Medikamente und des Flüssigkeitshaushalts).",
          en: "Assessment rapidly determines kidney values and electrolytes in the blood, urine output and composition and the cause (e.g. ultrasound to exclude obstruction, review of medications and fluid balance)." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Im Zentrum steht die Behandlung der Ursache: Ausgleich des Flüssigkeits- und Kreislaufhaushalts, Absetzen nierenschädigender Substanzen, Behandlung von Infektionen oder Entlastung eines Harnstaus. In schweren Fällen kann vorübergehend eine Dialyse nötig sein.",
          en: "The focus is treating the cause: restoring fluid and circulatory balance, stopping kidney-harming substances, treating infections or relieving an obstruction. In severe cases, temporary dialysis may be needed." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Beim akuten Nierenversagen haben naturheilkundliche Verfahren keinen Platz in der Akutbehandlung. In der Erholungsphase unterstützen eine ärztlich abgestimmte Ernährung und Flüssigkeitszufuhr die Regeneration; pflanzliche Mittel sind wegen möglicher Nierenbelastung strikt ärztlich zu prüfen.",
          en: "In acute kidney injury, naturopathic approaches have no place in acute treatment. During recovery, a medically coordinated diet and fluid intake support regeneration; herbal products must be strictly medically reviewed because of possible kidney burden." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Die TCM hat in der akuten Notfallsituation keinen Stellenwert. Erst in der Erholungsphase können begleitende, stärkende Verfahren unter ärztlicher Abstimmung erwogen werden.",
          en: "TCM has no role in the acute emergency. Only during recovery may complementary, tonifying approaches be considered under medical coordination." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "In der Akutphase stehen ausschließlich medizinische Maßnahmen im Vordergrund. Ayurvedische Begleitung beschränkt sich auf die Erholungsphase mit leichter, ausgewogener Kost; Kräuterpräparate sind streng ärztlich zu prüfen.",
          en: "In the acute phase, only medical measures are paramount. Ayurvedic support is limited to the recovery phase with a light, balanced diet; herbal preparations must be strictly medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "In der Akutphase steht die intensivmedizinische bzw. stationäre Behandlung im Vordergrund. In der Erholung helfen frühzeitige Mobilisation und schrittweise gesteigerte Bewegung, Kraft und Ausdauer wiederaufzubauen.",
          en: "In the acute phase, intensive or inpatient treatment is paramount. In recovery, early mobilisation and gradually increased activity help rebuild strength and endurance." } },
      ],
    },
  },

  {
    slug: "glomerulonephritis",
    icd10: "N05.9",
    illustration: "generic",
    title: { de: "Glomerulonephritis", en: "Glomerulonephritis" },
    summary: {
      de: "Entzündung der Nierenkörperchen mit Blut und Eiweiß im Urin und möglichem Funktionsverlust.",
      en: "Inflammation of the kidney's filtering units with blood and protein in urine and possible function loss.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Glomerulonephritis ist eine meist immunologisch bedingte Entzündung der Nierenkörperchen (Glomeruli), der Filtereinheiten der Niere. Typische Zeichen sind Blut und Eiweiß im Urin, Bluthochdruck und Wassereinlagerungen. Der Verlauf reicht von leicht bis rasch fortschreitend mit Gefahr für die Nierenfunktion.",
          en: "Glomerulonephritis is a usually immune-mediated inflammation of the glomeruli, the kidney's filtering units. Typical signs are blood and protein in the urine, high blood pressure and fluid retention. The course ranges from mild to rapidly progressive with a threat to kidney function." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Abklärung umfasst Urin- und Bluttests, Blutdruckmessung, spezielle Immun- und Antikörperuntersuchungen sowie häufig eine Nierenbiopsie, um die genaue Form zu bestimmen und die Behandlung zu steuern.",
          en: "Assessment includes urine and blood tests, blood-pressure measurement, specialised immune and antibody tests and often a kidney biopsy to determine the exact form and guide treatment." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die Behandlung richtet sich nach Form und Schweregrad: Blutdrucksenkung und nierenschützende Medikamente, bei entzündlich-aktiven Formen entzündungshemmende oder das Immunsystem dämpfende Medikamente. Die Betreuung erfolgt meist gemeinsam mit einer nephrologischen Fachpraxis.",
          en: "Treatment depends on form and severity: blood-pressure reduction and kidney-protective medicines, and for inflammatory-active forms anti-inflammatory or immune-suppressing medicines. Care is usually shared with a nephrology specialist." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Naturheilkundliche Maßnahmen wirken hier nur begleitend: salzbewusste Ernährung, Blutdruck- und Gewichtskontrolle sowie Rauchverzicht. Pflanzliche Mittel sind wegen möglicher Nierenbelastung und Wechselwirkungen streng ärztlich zu prüfen; die immunmodulierende Therapie darf nicht ersetzt werden.",
          en: "Naturopathic measures act here only as support: a salt-aware diet, blood-pressure and weight control and stopping smoking. Herbal products must be strictly medically reviewed because of possible kidney burden and interactions; immune-modulating therapy must not be replaced." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Die TCM ordnet Nierenentzündungen Mustern aus Hitze, Feuchtigkeit und einer Grundschwäche zu. Begleitende Verfahren können das Wohlbefinden unterstützen; Kräuter sind wegen der Nierenbelastung besonders sorgfältig ärztlich abzustimmen.",
          en: "TCM assigns kidney inflammation to patterns of heat, dampness and underlying deficiency. Complementary approaches may support wellbeing; herbs must be coordinated with particular medical care because of kidney burden." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch werden eine leichte, salzbewusste Ernährung und geregelte Routinen empfohlen. Kräuterpräparate sind mit großer Vorsicht und nur nach ärztlicher Prüfung anzuwenden.",
          en: "Ayurveda recommends a light, salt-aware diet and regular routines. Herbal preparations should be used with great caution and only after medical review." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Moderate, an die Belastbarkeit angepasste Bewegung unterstützt Blutdruck und Allgemeinbefinden. Umfang und Intensität werden mit dem Behandlungsteam abgestimmt, besonders bei eingeschränkter Nierenfunktion.",
          en: "Moderate activity matched to capacity supports blood pressure and general wellbeing. Volume and intensity are coordinated with the treatment team, especially with reduced kidney function." } },
      ],
    },
  },

  {
    slug: "nephrotic-syndrome",
    icd10: "N04.9",
    illustration: "generic",
    title: { de: "Nephrotisches Syndrom", en: "Nephrotic Syndrome" },
    summary: {
      de: "Starker Eiweißverlust über die Nieren mit Ödemen und erhöhtem Thromboserisiko.",
      en: "Heavy protein loss through the kidneys with oedema and an increased clotting risk.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Das nephrotische Syndrom entsteht, wenn die Nierenkörperchen große Mengen Eiweiß in den Urin durchlassen. Folgen sind ausgeprägte Wassereinlagerungen (Ödeme, z. B. an Beinen und Augenlidern), niedriges Bluteiweiß, erhöhte Blutfette und eine gesteigerte Neigung zu Blutgerinnseln und Infektionen.",
          en: "Nephrotic syndrome arises when the glomeruli leak large amounts of protein into the urine. Consequences are marked fluid retention (oedema, e.g. in the legs and eyelids), low blood protein, raised blood lipids and an increased tendency to clots and infections." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Abklärung umfasst die Messung der Eiweißausscheidung im Urin, Bluttests (Eiweiß, Blutfette, Nierenwerte) und die Suche nach der Ursache; häufig ist eine Nierenbiopsie erforderlich. Begleiterkrankungen wie Diabetes werden mitbeurteilt.",
          en: "Assessment includes measuring urinary protein excretion, blood tests (protein, lipids, kidney values) and a search for the cause; a kidney biopsy is often required. Comorbidities such as diabetes are also assessed." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Behandelt werden die Ursache sowie die Folgen: Entwässerung gegen Ödeme, nierenschützende Medikamente zur Senkung der Eiweißausscheidung, Blutdruck- und Blutfettkontrolle und je nach Risiko eine Vorbeugung von Blutgerinnseln. Die Betreuung erfolgt meist nephrologisch.",
          en: "Both the cause and consequences are treated: diuresis for oedema, kidney-protective medicines to reduce protein loss, blood-pressure and lipid control and, depending on risk, prevention of blood clots. Care is usually nephrological." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend sind salzbewusste Ernährung und ärztlich abgestimmte Flüssigkeitszufuhr wichtig. Pflanzliche Mittel sind wegen Nierenbelastung und Wechselwirkungen streng ärztlich zu prüfen und ersetzen die medizinische Behandlung nicht.",
          en: "As support, a salt-aware diet and medically coordinated fluid intake are important. Herbal products must be strictly medically reviewed because of kidney burden and interactions and do not replace medical treatment." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Die TCM ordnet ausgeprägte Ödeme Mustern aus Milz- und Nieren-Schwäche mit Feuchtigkeit zu. Begleitende Verfahren können das Wohlbefinden unterstützen; Kräuter sind besonders sorgfältig ärztlich abzustimmen.",
          en: "TCM assigns pronounced oedema to patterns of Spleen and Kidney deficiency with dampness. Complementary approaches may support wellbeing; herbs must be coordinated with particular medical care." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch werden eine leichte, salzbewusste Ernährung und geregelte Routinen empfohlen. Kräuterpräparate sind mit großer Vorsicht und nur nach ärztlicher Prüfung anzuwenden.",
          en: "Ayurveda recommends a light, salt-aware diet and regular routines. Herbal preparations should be used with great caution and only after medical review." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Moderate, angepasste Bewegung und das Aktivieren der Muskelpumpe können Wassereinlagerungen entgegenwirken und die Kondition erhalten. Wegen des erhöhten Thromboserisikos ist ausreichende Bewegung wichtig; das Programm wird mit dem Behandlungsteam abgestimmt.",
          en: "Moderate, adapted activity and activating the muscle pump can counter fluid retention and maintain fitness. Because of the raised clotting risk, adequate movement is important; the programme is coordinated with the treatment team." } },
      ],
    },
  },

  {
    slug: "kidney-cyst",
    icd10: "N28.1",
    illustration: "generic",
    title: { de: "Nierenzyste", en: "Kidney Cyst" },
    summary: {
      de: "Flüssigkeitsgefüllter Hohlraum der Niere, meist gutartig und häufig zufällig entdeckt.",
      en: "A fluid-filled cavity in the kidney, usually benign and often found incidentally.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Eine Nierenzyste ist ein flüssigkeitsgefüllter Hohlraum in oder an der Niere. Einfache Zysten sind sehr häufig, meist gutartig und verursachen keine Beschwerden; sie werden oft zufällig im Ultraschall entdeckt. Große Zysten können gelegentlich Druck oder Flankenschmerzen verursachen.",
          en: "A kidney cyst is a fluid-filled cavity in or on the kidney. Simple cysts are very common, usually benign and cause no symptoms; they are often found incidentally on ultrasound. Large cysts can occasionally cause pressure or flank pain." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose & Beobachtung", en: "Diagnosis & monitoring" } },
        { t: "p", text: {
          de: "Einfache Zysten werden per Ultraschall gut beurteilt und benötigen meist keine Behandlung. Komplexe oder auffällige Zysten werden nach standardisierten Kriterien eingeordnet und gegebenenfalls mit weiterer Bildgebung (z. B. Computertomografie oder MRT) kontrolliert.",
          en: "Simple cysts are well assessed on ultrasound and usually need no treatment. Complex or suspicious cysts are classified by standardised criteria and, if needed, monitored with further imaging (e.g. CT or MRI)." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Eine Behandlung ist nur bei Beschwerden oder auffälligen Befunden nötig – etwa Punktion und Verödung einer großen, symptomatischen Zyste oder eine weiterführende Abklärung bei Verdacht auf einen bösartigen Prozess.",
          en: "Treatment is needed only for symptoms or suspicious findings – such as aspiration and sclerotherapy of a large, symptomatic cyst or further evaluation when malignancy is suspected." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Bei gutartigen, symptomlosen Zysten sind keine besonderen Maßnahmen nötig. Eine allgemein gesunde, salzbewusste Ernährung und ausreichende Flüssigkeit unterstützen die Nierengesundheit. Pflanzliche Mittel sind ärztlich zu prüfen.",
          en: "For benign, symptom-free cysts, no special measures are needed. A generally healthy, salt-aware diet and adequate fluids support kidney health. Herbal products should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Die TCM betrachtet Zysten im Rahmen von Feuchtigkeits- und Stagnationsmustern. Begleitende Verfahren zielen auf das Allgemeinbefinden; bei symptomlosen Zysten besteht meist kein Behandlungsbedarf.",
          en: "TCM views cysts within patterns of dampness and stagnation. Complementary approaches aim at general wellbeing; symptom-free cysts usually need no treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen eine ausgewogene Ernährung und geregelte Routinen im Vordergrund. Kräuterpräparate sind ärztlich zu prüfen, besonders bei eingeschränkter Nierenfunktion.",
          en: "In Ayurveda, a balanced diet and regular routines are emphasised. Herbal preparations should be medically reviewed, especially with reduced kidney function." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Bei einer einfachen Nierenzyste ist keine spezielle Physiotherapie erforderlich. Allgemeine körperliche Aktivität unterstützt Gesundheit und Wohlbefinden.",
          en: "For a simple kidney cyst, no specific physiotherapy is required. General physical activity supports health and wellbeing." } },
      ],
    },
  },

  {
    slug: "polycystic-kidney-disease",
    icd10: "Q61.3",
    illustration: "generic",
    title: { de: "Polyzystische Nierenerkrankung (Zystennieren)", en: "Polycystic Kidney Disease" },
    summary: {
      de: "Erbliche Erkrankung mit zahlreichen Nierenzysten, die die Nierenfunktion beeinträchtigen kann.",
      en: "An inherited disease with numerous kidney cysts that can impair kidney function.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die polyzystische Nierenerkrankung ist eine erbliche Erkrankung, bei der sich zahlreiche Zysten in beiden Nieren bilden, die mit der Zeit größer werden. Sie kann Flankenschmerzen, Bluthochdruck, Blut im Urin und wiederkehrende Infekte verursachen und im Verlauf die Nierenfunktion einschränken. Auch andere Organe, etwa die Leber, können betroffen sein.",
          en: "Polycystic kidney disease is an inherited condition in which numerous cysts form in both kidneys and enlarge over time. It can cause flank pain, high blood pressure, blood in the urine and recurrent infections and, over the course, impair kidney function. Other organs, such as the liver, can also be affected." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose stützt sich auf Bildgebung (Ultraschall, MRT), die Familiengeschichte und bei Bedarf genetische Untersuchungen. Regelmäßig kontrolliert werden Blutdruck, Nierenwerte und Urin.",
          en: "Diagnosis rests on imaging (ultrasound, MRI), family history and, if needed, genetic testing. Blood pressure, kidney values and urine are monitored regularly." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Im Vordergrund stehen eine konsequente Blutdruckeinstellung, ausreichende Flüssigkeitszufuhr, die Behandlung von Infekten und Schmerzen sowie die Verlangsamung des Fortschreitens; in geeigneten Fällen kommen spezielle Medikamente infrage. Die Betreuung erfolgt nephrologisch, mit Beratung zur Vererbung.",
          en: "The focus is on consistent blood-pressure control, adequate fluids, treating infections and pain and slowing progression; in suitable cases specific medicines are an option. Care is nephrological, with counselling on inheritance." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend sind salzbewusste Ernährung, ausreichende Flüssigkeit, Blutdruck- und Gewichtskontrolle sowie Rauchverzicht sinnvoll. Pflanzliche Mittel sind wegen Nierenbelastung und Wechselwirkungen streng ärztlich zu prüfen; Koffein und bestimmte Präparate werden gegebenenfalls eingeschränkt.",
          en: "As support, a salt-aware diet, adequate fluids, blood-pressure and weight control and stopping smoking are sensible. Herbal products must be strictly medically reviewed because of kidney burden and interactions; caffeine and certain preparations may be limited." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Die TCM betrachtet Zystennieren im Rahmen einer angeborenen Schwäche der Nieren-Essenz. Begleitende Verfahren zielen auf Wohlbefinden und Blutdruck; Kräuter sind besonders sorgfältig ärztlich abzustimmen.",
          en: "TCM views polycystic kidneys within a congenital weakness of Kidney essence. Complementary approaches aim at wellbeing and blood pressure; herbs must be coordinated with particular medical care." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch werden eine leichte, salzbewusste Ernährung, ausreichend Flüssigkeit und geregelte Routinen empfohlen. Kräuterpräparate sind mit großer Vorsicht und nur nach ärztlicher Prüfung anzuwenden.",
          en: "Ayurveda recommends a light, salt-aware diet, adequate fluids and regular routines. Herbal preparations should be used with great caution and only after medical review." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Moderate, an die Nierenfunktion angepasste Bewegung unterstützt Blutdruck und Kondition. Sehr starke Stoß- und Kontaktbelastungen des Bauchraums werden bei großen Zysten besser gemieden; das Programm wird individuell abgestimmt.",
          en: "Moderate activity matched to kidney function supports blood pressure and fitness. Very high-impact and contact loading of the abdomen is better avoided when cysts are large; the programme is individualised." } },
      ],
    },
  },

  {
    slug: "benign-prostatic-hyperplasia",
    icd10: "N40",
    illustration: "generic",
    title: { de: "Gutartige Prostatavergrößerung", en: "Benign Prostatic Hyperplasia" },
    summary: {
      de: "Gutartige Vergrößerung der Prostata mit abgeschwächtem Harnstrahl und häufigem Harndrang.",
      en: "Benign enlargement of the prostate with a weak stream and frequent urgency.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der gutartigen Prostatavergrößerung wächst die Prostata im Alter und engt die Harnröhre ein. Typische Beschwerden sind abgeschwächter Harnstrahl, verzögerter Beginn, Nachträufeln, häufiger und nächtlicher Harndrang sowie das Gefühl der unvollständigen Entleerung. Die Beschwerden sind meist gutartig, können die Lebensqualität aber deutlich mindern.",
          en: "In benign prostatic hyperplasia, the prostate grows with age and narrows the urethra. Typical symptoms are a weak stream, delayed start, dribbling, frequent and night-time urgency and a sense of incomplete emptying. Symptoms are usually benign but can markedly reduce quality of life." } },
        { t: "p", text: {
          de: "Wichtig: Ein plötzlich unmöglicher Harnabgang mit schmerzhaft praller Blase (akuter Harnverhalt) ist ein Notfall und erfordert eine sofortige ärztliche Behandlung.",
          en: "Important: a sudden inability to pass urine with a painfully full bladder (acute urinary retention) is an emergency and requires immediate medical treatment." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Die Abklärung umfasst Beschwerde-Fragebögen, Tastuntersuchung, Urinuntersuchung, Ultraschall mit Restharnbestimmung und je nach Situation den PSA-Wert. Ziel ist auch, andere Ursachen der Beschwerden auszuschließen.",
          en: "Assessment includes symptom questionnaires, digital examination, urine analysis, ultrasound with residual-urine measurement and, depending on the situation, the PSA value. A further aim is to exclude other causes of the symptoms." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Leichte Beschwerden können beobachtet und durch Verhaltensmaßnahmen gebessert werden. Medikamente entspannen die Prostata- und Blasenhalsmuskulatur oder verkleinern die Prostata. Bei starken Beschwerden, wiederholtem Harnverhalt oder Komplikationen kommen operative Verfahren infrage.",
          en: "Mild symptoms can be monitored and improved by behavioural measures. Medicines relax the prostate and bladder-neck muscles or shrink the prostate. For severe symptoms, repeated retention or complications, surgical procedures are options." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Unterstützende Maßnahmen", en: "Supportive measures" } },
        { t: "ul", items: {
          de: ["Trinkmenge sinnvoll verteilen und abends reduzieren, um den nächtlichen Harndrang zu mindern.","Blase regelmäßig und in Ruhe möglichst vollständig entleeren.","Pflanzliche Präparate (z. B. aus Sägepalme oder Brennnesselwurzel) werden häufig genutzt; die Datenlage ist uneinheitlich, eine Besprechung ist sinnvoll.","Alkohol und koffeinhaltige Getränke, die den Harndrang verstärken, maßvoll konsumieren."],
          en: ["Distribute fluid intake sensibly and reduce it in the evening to lessen night-time urgency.","Empty the bladder regularly and as completely as possible, without rushing.","Herbal preparations (e.g. saw palmetto or nettle root) are widely used; evidence is mixed, so a discussion is worthwhile.","Consume alcohol and caffeinated drinks, which increase urgency, in moderation."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden Blasenentleerungsstörungen im Alter häufig einer Schwäche des Nieren-Qi mit Stagnation zugeordnet. Akupunktur und individuelle Kräuter können begleitend zur Linderung beitragen.",
          en: "In TCM, bladder-emptying problems in later life are often assigned to a weakness of Kidney Qi with stagnation. Acupuncture and individual herbs may contribute as complementary relief." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen eine ausgewogene Ernährung, ausreichend Bewegung und geregelte Routinen im Vordergrund. Kräuterpräparate sind ärztlich auf Eignung und Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, a balanced diet, adequate activity and regular routines are emphasised. Herbal preparations should be medically checked for suitability and interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Ein gezieltes Beckenbodentraining kann Nachträufeln und Harndrang verbessern; Blasentraining hilft, die Abstände zwischen den Toilettengängen zu verlängern. Nach einer Prostataoperation unterstützt Beckenbodentherapie die Kontinenz.",
          en: "Targeted pelvic-floor training can improve dribbling and urgency; bladder training helps lengthen the intervals between toilet visits. After prostate surgery, pelvic-floor therapy supports continence." } },
      ],
    },
  },

  {
    slug: "prostatitis",
    icd10: "N41.9",
    illustration: "generic",
    title: { de: "Prostataentzündung (Prostatitis)", en: "Prostatitis" },
    summary: {
      de: "Entzündung oder Reizung der Prostata mit Schmerzen im Beckenbereich und Beschwerden beim Wasserlassen.",
      en: "Inflammation or irritation of the prostate with pelvic pain and urinary symptoms.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Prostatitis umfasst akute und chronische Formen. Die akute bakterielle Prostatitis verursacht Fieber, starkes Krankheitsgefühl und schmerzhaftes Wasserlassen. Häufiger ist das chronische Beckenschmerzsyndrom mit Schmerzen im Damm-, Unterbauch- oder Genitalbereich und Beschwerden beim Wasserlassen, oft ohne nachweisbare Bakterien.",
          en: "Prostatitis includes acute and chronic forms. Acute bacterial prostatitis causes fever, feeling markedly unwell and painful urination. More common is chronic pelvic pain syndrome with pain in the perineal, lower abdominal or genital area and urinary symptoms, often without detectable bacteria." } },
        { t: "p", text: {
          de: "Wichtig: Hohes Fieber, starke Schmerzen und ein deutlich reduzierter Allgemeinzustand können auf eine akute bakterielle Prostatitis mit Komplikationsgefahr hindeuten und erfordern eine rasche ärztliche Abklärung.",
          en: "Important: high fever, severe pain and a markedly reduced general condition can indicate acute bacterial prostatitis with a risk of complications and require prompt medical assessment." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Die Abklärung umfasst Anamnese, Tastuntersuchung, Urinuntersuchung und -kultur; bei der chronischen Form werden andere Ursachen ausgeschlossen. Fragebögen helfen, Schmerz- und Harnbeschwerden einzuordnen.",
          en: "Assessment includes history, digital examination, urine analysis and culture; in the chronic form, other causes are excluded. Questionnaires help characterise pain and urinary symptoms." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die akute bakterielle Prostatitis wird gezielt und ausreichend lange mit Antibiotika behandelt. Das chronische Beckenschmerzsyndrom erfordert ein mehrstufiges Konzept aus Schmerztherapie, Entspannungs- und Physiotechniken, gegebenenfalls Medikamenten sowie Stressbewältigung.",
          en: "Acute bacterial prostatitis is treated with targeted antibiotics for an adequate duration. Chronic pelvic pain syndrome needs a multimodal concept of pain therapy, relaxation and physiotherapy techniques, medicines where appropriate and stress management." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend können Wärme (warme Sitzbäder), Entspannung, reichliches Trinken und Stressabbau Beschwerden lindern. Pflanzliche Präparate sind ärztlich zu prüfen. Bei bakterieller Entzündung ist die Antibiotikatherapie nicht ersetzbar.",
          en: "As support, warmth (warm sitz baths), relaxation, generous fluids and stress reduction can ease symptoms. Herbal preparations should be medically reviewed. For a bacterial infection, antibiotic therapy cannot be replaced." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird die Prostatitis je nach Form feuchter Hitze oder einer Stagnation im unteren Erwärmer zugeordnet. Akupunktur kann bei chronischen Beckenschmerzen begleitend zur Linderung beitragen.",
          en: "In TCM, prostatitis is assigned, depending on form, to damp heat or stagnation in the lower burner. Acupuncture may contribute as complementary relief in chronic pelvic pain." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch werden eine kühlende, reizarme Ernährung, Stressausgleich und geregelte Routinen empfohlen. Kräuterpräparate sind ärztlich auf Eignung und Wechselwirkungen zu prüfen.",
          en: "Ayurveda recommends a cooling, low-irritant diet, stress balance and regular routines. Herbal preparations should be medically checked for suitability and interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Beim chronischen Beckenschmerzsyndrom ist die Physiotherapie ein zentraler Baustein: Entspannung und Lösen des verspannten Beckenbodens, manuelle Techniken, Biofeedback sowie Haltungs- und Atemübungen können Schmerzen und Harnbeschwerden deutlich lindern.",
          en: "In chronic pelvic pain syndrome, physiotherapy is a central building block: relaxing and releasing the tense pelvic floor, manual techniques, biofeedback and posture and breathing exercises can markedly ease pain and urinary symptoms." } },
      ],
    },
  },

  {
    slug: "epididymitis-orchitis",
    icd10: "N45.9",
    illustration: "generic",
    title: { de: "Nebenhoden- und Hodenentzündung", en: "Epididymitis and Orchitis" },
    summary: {
      de: "Schmerzhafte Entzündung von Nebenhoden oder Hoden mit Schwellung und Überwärmung.",
      en: "Painful inflammation of the epididymis or testis with swelling and warmth.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Nebenhoden- und Hodenentzündung ist eine meist infektiöse, schmerzhafte Schwellung im Hodensack, häufig durch aufsteigende Harnwegs- oder sexuell übertragbare Erreger, seltener durch Viren (z. B. Mumps). Typisch sind zunehmende Schmerzen, Schwellung, Rötung und Überwärmung, oft mit Fieber.",
          en: "Epididymitis and orchitis are usually infectious, painful swellings in the scrotum, often from ascending urinary or sexually transmitted organisms and less often from viruses (e.g. mumps). Typical features are increasing pain, swelling, redness and warmth, often with fever." } },
        { t: "p", text: {
          de: "Wichtig: Plötzliche, sehr starke Hodenschmerzen – besonders bei jüngeren Männern – können auf eine Hodenverdrehung (Hodentorsion) hindeuten. Das ist ein Notfall, der innerhalb weniger Stunden behandelt werden muss – sofort ärztliche Hilfe suchen, im Zweifel den Notruf 112.",
          en: "Important: sudden, very severe testicular pain – especially in younger men – can indicate testicular torsion. This is an emergency that must be treated within a few hours – seek medical help immediately, and call 112 if in doubt." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Die Abklärung umfasst Untersuchung, Urinuntersuchung und -kultur, bei entsprechendem Verdacht Tests auf sexuell übertragbare Erreger sowie einen Ultraschall, der auch hilft, eine Hodentorsion abzugrenzen.",
          en: "Assessment includes examination, urine analysis and culture, tests for sexually transmitted organisms when suspected and an ultrasound, which also helps distinguish testicular torsion." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Behandelt wird mit gezielten Antibiotika nach wahrscheinlichem Erreger, ergänzt durch Schmerz- und Entzündungshemmung, Schonung, Hochlagerung und Kühlung des Hodensacks. Bei sexuell übertragbarer Ursache ist die Partnerbehandlung wichtig.",
          en: "Treatment uses targeted antibiotics according to the likely organism, plus pain and anti-inflammatory relief, rest, elevation and cooling of the scrotum. For a sexually transmitted cause, partner treatment is important." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend lindern Schonung, Hochlagerung und Kühlung die Beschwerden. Naturheilkundliche Maßnahmen ersetzen bei bakterieller Entzündung die Antibiotikatherapie nicht; eine plötzliche, starke Schmerzsymptomatik ist immer ärztlich abzuklären.",
          en: "As support, rest, elevation and cooling ease symptoms. For a bacterial infection, naturopathic measures do not replace antibiotic therapy; sudden, severe pain always requires medical assessment." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Die TCM ordnet die Entzündung feuchter Hitze im unteren Erwärmer zu. Begleitende Verfahren kommen erst nach ärztlicher Abklärung und in der Erholungsphase infrage und ersetzen die antimikrobielle Behandlung nicht.",
          en: "TCM assigns the inflammation to damp heat in the lower burner. Complementary approaches are considered only after medical assessment and during recovery and do not replace antimicrobial treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch werden kühlende, entzündungsberuhigende Maßnahmen und Schonung empfohlen. Kräuterpräparate sind ärztlich zu prüfen und ersetzen bei Infektion die medizinische Behandlung nicht.",
          en: "Ayurveda recommends cooling, inflammation-soothing measures and rest. Herbal preparations should be medically reviewed and do not replace medical treatment when an infection is present." } },
      ],
      physio: [
        { t: "p", text: {
          de: "In der akuten Phase steht Schonung im Vordergrund; Physiotherapie hat kaum eine Rolle. In der Erholung unterstützen schrittweise gesteigerte Aktivität und allgemeine Bewegung die Rückkehr zur Belastbarkeit.",
          en: "In the acute phase, rest is paramount; physiotherapy plays little role. In recovery, gradually increased activity and general movement support the return to full capacity." } },
      ],
    },
  },

  {
    slug: "varicocele",
    icd10: "I86.1",
    illustration: "generic",
    title: { de: "Krampfader am Hoden (Varikozele)", en: "Varicocele" },
    summary: {
      de: "Erweiterte Venen im Hodensack, meist links, oft symptomlos, gelegentlich mit Fruchtbarkeitsbezug.",
      en: "Enlarged veins in the scrotum, usually on the left, often symptom-free, sometimes affecting fertility.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Eine Varikozele ist eine Erweiterung der Venen im Hodensack, ähnlich Krampfadern, meist auf der linken Seite. Sie ist häufig symptomlos, kann aber ein Schwere- oder Ziehgefühl verursachen, das im Stehen zunimmt. In manchen Fällen besteht ein Zusammenhang mit eingeschränkter Fruchtbarkeit.",
          en: "A varicocele is an enlargement of the veins in the scrotum, similar to varicose veins, usually on the left side. It is often symptom-free but can cause a heaviness or dragging sensation that increases on standing. In some cases it is associated with reduced fertility." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Die Diagnose erfolgt durch Untersuchung im Stehen, oft mit Pressversuch, und einen Ultraschall. Bei unerfülltem Kinderwunsch kann eine Untersuchung des Samens sinnvoll sein.",
          en: "Diagnosis is by examination while standing, often with a bearing-down manoeuvre, and an ultrasound. When there is an unfulfilled wish for children, semen analysis can be useful." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Eine symptomlose Varikozele muss oft nicht behandelt werden. Bei störenden Beschwerden, deutlicher Ausprägung oder Fruchtbarkeitsproblemen kommen ein Verschluss der betroffenen Vene (Embolisation) oder eine Operation infrage.",
          en: "A symptom-free varicocele often needs no treatment. For troublesome symptoms, marked severity or fertility problems, closure of the affected vein (embolisation) or surgery are options." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Naturheilkundliche Maßnahmen können die Venenerweiterung nicht beheben. Ein stützender Hodensack-Suspensorium, Bewegung und das Vermeiden langen Stehens können ein Schweregefühl lindern. Pflanzliche Venenmittel sind ärztlich zu prüfen.",
          en: "Naturopathic measures cannot correct the vein enlargement. A supportive scrotal garment, activity and avoiding prolonged standing can ease a heaviness sensation. Herbal venous remedies should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Die TCM ordnet die Venenerweiterung Mustern aus Qi-Mangel und Blut-Stase zu. Akupunktur kann begleitend das Wohlbefinden unterstützen, behebt die Varikozele jedoch nicht.",
          en: "TCM assigns the vein enlargement to patterns of Qi deficiency and blood stasis. Acupuncture may support wellbeing as complementary care but does not correct the varicocele." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch werden Bewegung, eine gefäßfreundliche Ernährung und geregelte Routinen empfohlen. Kräuterpräparate sind ärztlich zu prüfen; eine behandlungsbedürftige Varikozele wird medizinisch versorgt.",
          en: "Ayurveda recommends activity, a vessel-friendly diet and regular routines. Herbal preparations should be medically reviewed; a varicocele needing treatment is managed medically." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Regelmäßige Bewegung und das Vermeiden langen Stehens können ein Schweregefühl mildern; eine gezielte physiotherapeutische Behandlung ist in der Regel nicht erforderlich.",
          en: "Regular activity and avoiding prolonged standing can soften a heaviness sensation; targeted physiotherapy is usually not required." } },
      ],
    },
  },

  {
    slug: "hydrocele",
    icd10: "N43.3",
    illustration: "generic",
    title: { de: "Wasserbruch (Hydrozele)", en: "Hydrocele" },
    summary: {
      de: "Flüssigkeitsansammlung um den Hoden mit schmerzloser Schwellung des Hodensacks.",
      en: "A fluid collection around the testis with painless swelling of the scrotum.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Eine Hydrozele ist eine Ansammlung von Flüssigkeit in der Hülle um den Hoden. Sie zeigt sich als meist schmerzlose, weiche Schwellung des Hodensacks, die langsam größer werden kann. Bei Säuglingen ist sie häufig und bildet sich oft von selbst zurück; bei Erwachsenen kann sie nach Entzündung oder Verletzung entstehen.",
          en: "A hydrocele is a collection of fluid in the membrane around the testis. It appears as a usually painless, soft swelling of the scrotum that can slowly enlarge. In infants it is common and often resolves on its own; in adults it can develop after inflammation or injury." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Die Diagnose erfolgt durch Untersuchung, oft mit Durchleuchtung (die Flüssigkeit lässt Licht durchscheinen), und Ultraschall, um den Hoden zu beurteilen und andere Ursachen auszuschließen.",
          en: "Diagnosis is by examination, often with transillumination (fluid lets light shine through), and ultrasound to assess the testis and exclude other causes." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Eine kleine, beschwerdefreie Hydrozele muss oft nur beobachtet werden. Bei störender Größe oder Beschwerden kommt eine Operation infrage; eine Punktion allein führt häufig zum Wiederauftreten.",
          en: "A small, symptom-free hydrocele often only needs monitoring. For troublesome size or symptoms, surgery is an option; aspiration alone often leads to recurrence." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Naturheilkundliche Maßnahmen können eine Hydrozele nicht beheben. Ein stützendes Suspensorium kann bei größerer Schwellung entlasten. Jede neue oder rasch zunehmende Hodenschwellung sollte ärztlich abgeklärt werden.",
          en: "Naturopathic measures cannot resolve a hydrocele. A supportive garment can relieve a larger swelling. Any new or rapidly increasing scrotal swelling should be medically assessed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Die TCM ordnet eine Flüssigkeitsansammlung Mustern aus Feuchtigkeit und Qi-Schwäche zu. Begleitende Verfahren zielen auf das Allgemeinbefinden; die Flüssigkeit selbst wird bei Behandlungsbedarf medizinisch versorgt.",
          en: "TCM assigns a fluid collection to patterns of dampness and Qi weakness. Complementary approaches aim at general wellbeing; the fluid itself is managed medically when treatment is needed." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch werden eine ausgewogene Ernährung und geregelte Routinen empfohlen. Kräuterpräparate sind ärztlich zu prüfen; eine behandlungsbedürftige Hydrozele wird medizinisch versorgt.",
          en: "Ayurveda recommends a balanced diet and regular routines. Herbal preparations should be medically reviewed; a hydrocele needing treatment is managed medically." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Eine spezielle Physiotherapie ist bei der Hydrozele nicht erforderlich. Allgemeine körperliche Aktivität unterstützt das Wohlbefinden; nach einer Operation begleitet ein schrittweiser Belastungsaufbau die Erholung.",
          en: "No specific physiotherapy is required for a hydrocele. General physical activity supports wellbeing; after surgery, a gradual increase in loading accompanies recovery." } },
      ],
    },
  },

  {
    slug: "phimosis",
    icd10: "N47",
    illustration: "generic",
    title: { de: "Vorhautverengung (Phimose)", en: "Phimosis" },
    summary: {
      de: "Verengte Vorhaut, die sich nicht oder nur schwer über die Eichel zurückziehen lässt.",
      en: "A tight foreskin that cannot be retracted over the glans, or only with difficulty.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der Phimose lässt sich die Vorhaut nicht oder nur schwer über die Eichel zurückstreifen. Bei kleinen Jungen ist eine nicht zurückziehbare Vorhaut häufig normal und löst sich meist mit den Jahren. Eine erworbene Verengung bei älteren Kindern und Erwachsenen kann zu Beschwerden beim Wasserlassen, Entzündungen oder Schmerzen führen.",
          en: "In phimosis, the foreskin cannot be retracted over the glans, or only with difficulty. In young boys, a non-retractable foreskin is often normal and usually resolves over the years. Acquired narrowing in older children and adults can cause difficulty urinating, inflammation or pain." } },
        { t: "p", text: {
          de: "Wichtig: Bleibt eine zurückgezogene Vorhaut hinter der Eichel eingeklemmt und schwillt an (Paraphimose), ist dies ein Notfall, der eine sofortige ärztliche Behandlung erfordert.",
          en: "Important: if a retracted foreskin becomes trapped behind the glans and swells (paraphimosis), this is an emergency requiring immediate medical treatment." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Die Beurteilung erfolgt klinisch. Wichtig ist, altersentsprechend Normales von einer behandlungsbedürftigen Verengung und von Hautveränderungen (z. B. narbige Verengung) zu unterscheiden.",
          en: "Assessment is clinical. It is important to distinguish age-appropriate normality from a narrowing needing treatment and from skin changes (e.g. scarred narrowing)." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Bei Kindern wird oft zunächst eine kortisonhaltige Salbe mit vorsichtigen Dehnübungen versucht. Bleibt dies erfolglos oder bestehen wiederholte Entzündungen oder eine narbige Verengung, kommt eine Beschneidung oder ein vorhauterhaltender Eingriff infrage.",
          en: "In children, a corticosteroid cream with gentle stretching is often tried first. If this is unsuccessful or there are repeated infections or a scarred narrowing, circumcision or a foreskin-preserving procedure is an option." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Eine sanfte, schmerzfreie Dehnung nach ärztlicher Anleitung und sorgfältige, aber nicht übertriebene Hygiene können unterstützen. Gewaltsames Zurückziehen ist zu vermeiden, da es Einrisse und Vernarbungen verursachen kann.",
          en: "Gentle, pain-free stretching as medically instructed and careful but not excessive hygiene can help. Forceful retraction should be avoided, as it can cause tears and scarring." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Die TCM kennt für die Vorhautverengung keine ursächliche Behandlung; begleitende Verfahren zielen allenfalls auf das Allgemeinbefinden. Die Behandlung erfolgt schulmedizinisch.",
          en: "TCM has no causal treatment for phimosis; complementary approaches aim at most at general wellbeing. Treatment is conventional medical." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen allgemeine Hygiene- und Pflegeempfehlungen im Vordergrund. Eine ursächliche Behandlung der Verengung erfolgt medizinisch.",
          en: "In Ayurveda, general hygiene and care recommendations are emphasised. Causal treatment of the narrowing is medical." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie hat bei der Phimose keine Rolle. Angeleitete, sanfte Dehnübungen werden ärztlich erklärt und zu Hause durchgeführt.",
          en: "Physiotherapy has no role in phimosis. Guided, gentle stretching exercises are explained medically and carried out at home." } },
      ],
    },
  },

  {
    slug: "erectile-dysfunction",
    icd10: "N52.9",
    illustration: "generic",
    title: { de: "Erektile Dysfunktion", en: "Erectile Dysfunction" },
    summary: {
      de: "Anhaltende Schwierigkeit, eine für den Geschlechtsverkehr ausreichende Erektion zu erreichen.",
      en: "A persistent difficulty achieving an erection sufficient for intercourse.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die erektile Dysfunktion bezeichnet die anhaltende Schwierigkeit, eine für den Geschlechtsverkehr ausreichende Erektion zu erreichen oder zu halten. Ursachen sind häufig gefäßbedingt (Arteriosklerose, Bluthochdruck, Diabetes), hormonell, medikamentös oder seelisch. Sie kann ein frühes Warnzeichen für Herz-Kreislauf-Erkrankungen sein.",
          en: "Erectile dysfunction is the persistent difficulty in achieving or maintaining an erection sufficient for intercourse. Causes are often vascular (atherosclerosis, high blood pressure, diabetes), hormonal, medication-related or psychological. It can be an early warning sign of cardiovascular disease." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Die Abklärung umfasst Anamnese (einschließlich Medikamente und seelischer Faktoren), körperliche Untersuchung und Blutuntersuchungen (u. a. Blutzucker, Blutfette, Hormone). Weil ein Zusammenhang mit Herz-Kreislauf-Risiken besteht, werden Blutdruck und weitere Risikofaktoren beurteilt.",
          en: "Assessment includes history (including medications and psychological factors), physical examination and blood tests (including glucose, lipids, hormones). Because of the link with cardiovascular risk, blood pressure and further risk factors are assessed." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Grundlage sind Lebensstiländerung und die Behandlung zugrunde liegender Erkrankungen. Wirksame Medikamente (PDE-5-Hemmer) sind häufig hilfreich; daneben gibt es weitere Verfahren. Wichtig ist auch die Beachtung seelischer und partnerschaftlicher Aspekte, gegebenenfalls mit Paar- oder Sexualberatung.",
          en: "The basis is lifestyle change and treating underlying conditions. Effective medicines (PDE-5 inhibitors) are often helpful; further approaches are also available. Attention to psychological and relationship aspects is important too, with couple or sexual counselling where appropriate." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Lebensstil", en: "Lifestyle" } },
        { t: "ul", items: {
          de: ["Regelmäßige Bewegung, gesundes Gewicht und Rauchverzicht verbessern die Gefäßfunktion.","Maßvoller Alkoholkonsum und ausreichender Schlaf wirken günstig.","Stressbewältigung und offene Kommunikation in der Partnerschaft sind hilfreich.","Von rezeptfreien oder im Internet bezogenen Potenzmitteln ist wegen Qualitäts- und Sicherheitsrisiken abzuraten; alles ärztlich besprechen."],
          en: ["Regular activity, a healthy weight and stopping smoking improve vascular function.","Moderate alcohol and adequate sleep are beneficial.","Stress management and open communication in the relationship are helpful.","Over-the-counter or internet-sourced potency products are inadvisable because of quality and safety risks; discuss everything medically."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird die Erektionsstörung häufig einer Schwäche des Nieren-Yang oder einer Qi- und Blut-Stagnation zugeordnet. Akupunktur und individuelle Kräuter können begleitend eingesetzt werden; zugrunde liegende Gefäßrisiken sind medizinisch abzuklären.",
          en: "In TCM, erectile dysfunction is often assigned to a weakness of Kidney Yang or to Qi and blood stagnation. Acupuncture and individual herbs may be used as complementary care; underlying vascular risks require medical assessment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen eine stärkende, ausgewogene Ernährung, Stressausgleich und geregelte Routinen im Vordergrund. Kräuterpräparate sind ärztlich auf Eignung und Wechselwirkungen (u. a. mit Blutdruckmedikamenten) zu prüfen.",
          en: "In Ayurveda, a strengthening, balanced diet, stress balance and regular routines are emphasised. Herbal preparations should be medically checked for suitability and interactions (including with blood-pressure medicines)." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Ein gezieltes Beckenbodentraining kann die Erektionsfunktion unterstützen, besonders wenn eine Beckenbodenschwäche mitspielt. Ergänzend verbessert regelmäßiges Ausdauertraining die Gefäß- und Herz-Kreislauf-Gesundheit.",
          en: "Targeted pelvic-floor training can support erectile function, especially when pelvic-floor weakness contributes. In addition, regular aerobic training improves vascular and cardiovascular health." } },
      ],
    },
  },

  {
    slug: "overactive-bladder",
    icd10: "N32.81",
    illustration: "generic",
    title: { de: "Überaktive Blase (Reizblase)", en: "Overactive Bladder" },
    summary: {
      de: "Plötzlicher, starker Harndrang mit häufigem Wasserlassen, oft auch nachts.",
      en: "Sudden, strong urinary urgency with frequent urination, often at night too.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die überaktive Blase ist gekennzeichnet durch plötzlichen, starken Harndrang, der schwer aufzuschieben ist, meist mit häufigem Wasserlassen bei Tag und Nacht, teils mit ungewolltem Urinverlust (Dranginkontinenz). Häufig liegt keine fassbare einzelne Ursache vor.",
          en: "Overactive bladder is characterised by sudden, strong urgency that is hard to defer, usually with frequent urination day and night, sometimes with involuntary urine loss (urge incontinence). Often there is no single identifiable cause." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Die Abklärung umfasst Anamnese, ein Miktionsprotokoll, Urinuntersuchung (zum Ausschluss eines Infekts), Ultraschall mit Restharnbestimmung; andere Ursachen (z. B. Steine, bei Männern die Prostata) werden ausgeschlossen.",
          en: "Assessment includes history, a voiding diary, urine analysis (to exclude infection) and ultrasound with residual-urine measurement; other causes (e.g. stones, and the prostate in men) are excluded." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "An erster Stelle stehen Verhaltens- und Blasentraining sowie Beckenbodentherapie und angepasstes Trinkverhalten. Reichen diese nicht aus, kommen Medikamente infrage; bei therapieresistenten Fällen gibt es weitere Verfahren in urologischer Betreuung.",
          en: "First-line measures are behavioural and bladder training, pelvic-floor therapy and adapted drinking habits. If these are insufficient, medicines are an option; for treatment-resistant cases, further procedures are available under urological care." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Alltag", en: "Daily life" } },
        { t: "ul", items: {
          de: ["Blasenreizende Getränke wie Koffein und Alkohol reduzieren.","Trinkmenge sinnvoll über den Tag verteilen, abends etwas reduzieren.","Gewichtsreduktion bei Übergewicht kann Beschwerden lindern.","Ein Blasentagebuch hilft, Auslöser und Fortschritte zu erkennen."],
          en: ["Reduce bladder-irritating drinks such as caffeine and alcohol.","Distribute fluid intake sensibly across the day, with a slight reduction in the evening.","Weight reduction in overweight can ease symptoms.","A bladder diary helps identify triggers and progress."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird die überaktive Blase häufig einer Schwäche des Nieren- und Blasen-Qi zugeordnet. Akupunktur kann begleitend zur Beruhigung der Blase und zur Linderung des Harndrangs beitragen.",
          en: "In TCM, overactive bladder is often assigned to a weakness of Kidney and Bladder Qi. Acupuncture may contribute as complementary care to calm the bladder and ease urgency." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen eine ausgewogene, reizarme Ernährung, Stressausgleich und geregelte Routinen im Vordergrund. Kräuterpräparate sind ärztlich auf Eignung und Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, a balanced, low-irritant diet, stress balance and regular routines are emphasised. Herbal preparations should be medically checked for suitability and interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Die Physiotherapie ist zentral: Blasentraining zur schrittweisen Verlängerung der Abstände, Beckenbodentraining mit gezielten Techniken gegen den plötzlichen Drang (Drangunterdrückung) und gegebenenfalls Biofeedback oder Elektrostimulation können die Beschwerden deutlich bessern.",
          en: "Physiotherapy is central: bladder training to gradually lengthen intervals, pelvic-floor training with targeted urge-suppression techniques and, where appropriate, biofeedback or electrical stimulation can markedly improve symptoms." } },
      ],
    },
  },

  {
    slug: "stress-urinary-incontinence",
    icd10: "N39.3",
    illustration: "generic",
    title: { de: "Belastungsinkontinenz", en: "Stress Urinary Incontinence" },
    summary: {
      de: "Ungewollter Urinverlust bei körperlicher Belastung wie Husten, Niesen oder Heben.",
      en: "Involuntary urine loss with physical effort such as coughing, sneezing or lifting.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der Belastungsinkontinenz geht Urin ungewollt ab, wenn der Druck im Bauchraum steigt – etwa beim Husten, Niesen, Lachen, Heben oder Sport. Ursache ist ein geschwächter Beckenboden oder Verschlussmechanismus, häufig nach Schwangerschaften und Geburten, nach Prostataoperationen oder mit zunehmendem Alter.",
          en: "In stress urinary incontinence, urine escapes involuntarily when pressure in the abdomen rises – for example when coughing, sneezing, laughing, lifting or during sport. The cause is a weakened pelvic floor or closure mechanism, often after pregnancies and births, after prostate surgery or with increasing age." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Die Abklärung umfasst Anamnese, ein Miktionsprotokoll, Urinuntersuchung, körperliche Untersuchung und Ultraschall; in ausgewählten Fällen kommen spezielle Blasendruckmessungen zum Einsatz.",
          en: "Assessment includes history, a voiding diary, urine analysis, physical examination and ultrasound; in selected cases specialised bladder-pressure measurements are used." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Erste Wahl ist ein konsequentes Beckenbodentraining, ergänzt durch Gewichtsreduktion und Verhaltensanpassung. Reicht dies nicht aus, kommen bei Frauen Hilfsmittel (z. B. Pessare), lokale Östrogene oder operative Verfahren (z. B. ein spannungsfreies Band) infrage; bei Männern gibt es spezielle Operationen.",
          en: "First choice is consistent pelvic-floor training, plus weight reduction and behavioural adjustment. If this is insufficient, options in women include devices (e.g. pessaries), local oestrogen or surgical procedures (e.g. a tension-free tape); in men there are specific operations." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Unterstützend wirken Gewichtsreduktion, das Behandeln von chronischem Husten und Verstopfung sowie das Vermeiden schweren Hebens. Diese Maßnahmen entlasten den Beckenboden und verbessern die Wirkung des Trainings.",
          en: "Supportive measures include weight reduction, treating chronic cough and constipation and avoiding heavy lifting. These reduce the load on the pelvic floor and improve the effect of training." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird die Belastungsinkontinenz häufig einer Schwäche des Nieren- und Milz-Qi zugeordnet, die die Haltefunktion betrifft. Akupunktur kann das Beckenbodentraining begleitend unterstützen.",
          en: "In TCM, stress incontinence is often assigned to a weakness of Kidney and Spleen Qi affecting the holding function. Acupuncture may support pelvic-floor training as complementary care." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen eine stärkende, ausgewogene Ernährung, Bewegung und geregelte Routinen im Vordergrund. Kräuterpräparate sind ärztlich auf Eignung und Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, a strengthening, balanced diet, activity and regular routines are emphasised. Herbal preparations should be medically checked for suitability and interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Die Physiotherapie ist die wichtigste Behandlung: ein angeleitetes, regelmäßiges Beckenbodentraining, oft mit Biofeedback, das gezielte Anspannen vor Belastung (z. B. vor dem Husten) und ein alltagstaugliches Übungsprogramm verbessern die Kontinenz nachhaltig.",
          en: "Physiotherapy is the most important treatment: guided, regular pelvic-floor training, often with biofeedback, targeted tightening before effort (e.g. before coughing) and an everyday exercise programme durably improve continence." } },
      ],
    },
  },

  {
    slug: "urge-incontinence",
    icd10: "N39.41",
    illustration: "generic",
    title: { de: "Dranginkontinenz", en: "Urge Incontinence" },
    summary: {
      de: "Ungewollter Urinverlust bei plötzlichem, kaum aufschiebbarem Harndrang.",
      en: "Involuntary urine loss with sudden, barely deferrable urgency.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der Dranginkontinenz kommt es zu ungewolltem Urinverlust, sobald ein plötzlicher, starker Harndrang auftritt, der sich kaum unterdrücken lässt. Sie ist meist Folge einer überaktiven Blase; manchmal liegen neurologische Erkrankungen, Infekte oder andere Ursachen zugrunde.",
          en: "In urge incontinence, involuntary urine loss occurs as soon as a sudden, strong urgency arises that can barely be suppressed. It usually results from an overactive bladder; sometimes neurological conditions, infections or other causes underlie it." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Die Abklärung umfasst Anamnese, Miktionsprotokoll, Urinuntersuchung und Ultraschall mit Restharnbestimmung. Andere Ursachen wie Infekte, Steine oder neurologische Erkrankungen werden bedacht.",
          en: "Assessment includes history, a voiding diary, urine analysis and ultrasound with residual-urine measurement. Other causes such as infections, stones or neurological conditions are considered." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Grundlage sind Blasen- und Verhaltenstraining sowie Beckenbodentherapie. Reicht dies nicht aus, kommen Medikamente zur Beruhigung der Blase zum Einsatz; bei hartnäckigen Fällen stehen weitere Verfahren (z. B. Nervenstimulation, Injektionen in die Blasenwand) zur Verfügung.",
          en: "The basis is bladder and behavioural training and pelvic-floor therapy. If this is insufficient, medicines to calm the bladder are used; for stubborn cases, further options (e.g. nerve stimulation, injections into the bladder wall) are available." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Unterstützend sind das Reduzieren blasenreizender Getränke (Koffein, Alkohol), sinnvolle Trinkmengenverteilung, Gewichtsreduktion und ein Blasentagebuch. Pflanzliche Mittel sind ärztlich zu prüfen.",
          en: "Supportive measures include reducing bladder-irritating drinks (caffeine, alcohol), sensible distribution of fluid intake, weight reduction and a bladder diary. Herbal products should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Die TCM ordnet die Dranginkontinenz häufig einer Schwäche des Nieren- und Blasen-Qi zu. Akupunktur kann begleitend zur Beruhigung der Blase und Linderung des Drangs beitragen.",
          en: "TCM often assigns urge incontinence to a weakness of Kidney and Bladder Qi. Acupuncture may contribute as complementary care to calm the bladder and ease urgency." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen eine ausgewogene, reizarme Ernährung, Stressausgleich und geregelte Routinen im Vordergrund. Kräuterpräparate sind ärztlich auf Eignung und Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, a balanced, low-irritant diet, stress balance and regular routines are emphasised. Herbal preparations should be medically checked for suitability and interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Die Physiotherapie ist zentral: Blasentraining zur Verlängerung der Abstände und Beckenbodentraining mit Techniken zur Drangunterdrückung (gezieltes Anspannen, Ablenkung, ruhige Atmung), oft ergänzt durch Biofeedback, verbessern die Kontrolle über die Blase.",
          en: "Physiotherapy is central: bladder training to lengthen intervals and pelvic-floor training with urge-suppression techniques (targeted tightening, distraction, calm breathing), often with biofeedback, improve control over the bladder." } },
      ],
    },
  },

  {
    slug: "urinary-incontinence-unspecified",
    icd10: "R32",
    illustration: "generic",
    title: { de: "Harninkontinenz", en: "Urinary Incontinence" },
    summary: {
      de: "Ungewollter Urinverlust unterschiedlicher Ursache, der Abklärung und gezielte Behandlung verdient.",
      en: "Involuntary urine loss of varying cause that deserves assessment and targeted treatment.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Harninkontinenz ist der ungewollte Verlust von Urin. Es gibt verschiedene Formen – etwa Belastungs-, Drang- und Mischinkontinenz sowie die Überlaufinkontinenz bei gestörter Entleerung. Inkontinenz ist häufig, gut behandelbar und kein unvermeidbarer Teil des Älterwerdens.",
          en: "Urinary incontinence is the involuntary loss of urine. There are various forms – such as stress, urge and mixed incontinence and overflow incontinence with impaired emptying. Incontinence is common, treatable and not an unavoidable part of ageing." } },
        { t: "p", text: {
          de: "Wichtig: Eine unmögliche Blasenentleerung mit praller, schmerzhafter Blase (Harnverhalt) oder eine neu aufgetretene Inkontinenz mit Gefühls- oder Bewegungsstörungen an den Beinen erfordern eine rasche ärztliche Abklärung.",
          en: "Important: an inability to empty the bladder with a full, painful bladder (retention) or new-onset incontinence with sensory or movement problems in the legs requires prompt medical assessment." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Wichtig ist die Bestimmung der Form, da sich danach die Behandlung richtet: Anamnese, Miktionsprotokoll, Urinuntersuchung, körperliche Untersuchung und Ultraschall mit Restharn; bei Bedarf weiterführende urologische Diagnostik.",
          en: "Determining the form is important, as treatment depends on it: history, voiding diary, urine analysis, physical examination and ultrasound with residual urine; further urological diagnostics if needed." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die Behandlung wird an die Form angepasst und beginnt meist mit Beckenboden- und Blasentraining, Gewichts- und Verhaltensanpassung. Ergänzend kommen Medikamente, Hilfsmittel oder – je nach Form – operative Verfahren infrage. Oft lässt sich die Lebensqualität deutlich verbessern.",
          en: "Treatment is tailored to the form and usually begins with pelvic-floor and bladder training, weight and behavioural adjustment. Medicines, aids or – depending on the form – surgical procedures may be added. Quality of life can often be markedly improved." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Unterstützend wirken Gewichtsreduktion, sinnvolle Trinkmengenverteilung, das Reduzieren blasenreizender Getränke sowie die Behandlung von Verstopfung und chronischem Husten. Ein Blasentagebuch hilft, Muster zu erkennen.",
          en: "Supportive measures include weight reduction, sensible distribution of fluid intake, reducing bladder-irritating drinks and treating constipation and chronic cough. A bladder diary helps identify patterns." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Die TCM ordnet die Inkontinenz häufig einer Schwäche des Nieren- und Milz-Qi zu, die die Halte- und Regulationsfunktion betrifft. Akupunktur kann das Training begleitend unterstützen.",
          en: "TCM often assigns incontinence to a weakness of Kidney and Spleen Qi affecting the holding and regulating function. Acupuncture may support training as complementary care." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen eine stärkende, ausgewogene Ernährung, Bewegung und geregelte Routinen im Vordergrund. Kräuterpräparate sind ärztlich auf Eignung und Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, a strengthening, balanced diet, activity and regular routines are emphasised. Herbal preparations should be medically checked for suitability and interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Die Physiotherapie ist unabhängig von der Form ein Grundpfeiler: angeleitetes Beckenbodentraining, Blasentraining und Verhaltensberatung, oft mit Biofeedback. Das Programm wird an die jeweilige Inkontinenzform angepasst und verbessert die Kontrolle nachhaltig.",
          en: "Regardless of the form, physiotherapy is a cornerstone: guided pelvic-floor training, bladder training and behavioural advice, often with biofeedback. The programme is tailored to the particular form of incontinence and durably improves control." } },
      ],
    },
  },

  {
    slug: "nocturia",
    icd10: "R35.1",
    illustration: "generic",
    title: { de: "Nächtlicher Harndrang (Nokturie)", en: "Nocturia" },
    summary: {
      de: "Nächtliches Aufwachen zum Wasserlassen, das den Schlaf stört und viele Ursachen haben kann.",
      en: "Waking at night to urinate, disrupting sleep and with many possible causes.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Nokturie bezeichnet das wiederholte nächtliche Aufwachen, um Wasser zu lassen. Sie stört den Schlaf und mindert die Lebensqualität. Ursachen sind vielfältig: nächtlich vermehrte Urinbildung, eine kleine oder überaktive Blasenkapazität, eine vergrößerte Prostata, Herz- oder Nierenerkrankungen, Diabetes, Schlafstörungen oder abendliches Trinkverhalten.",
          en: "Nocturia is repeated waking at night to urinate. It disrupts sleep and reduces quality of life. Causes are varied: increased night-time urine production, a small or overactive bladder capacity, an enlarged prostate, heart or kidney disease, diabetes, sleep disorders or evening drinking habits." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Ein Miktions- und Trinkprotokoll ist besonders aufschlussreich. Ergänzend kommen Urin- und Blutuntersuchungen, Blutdruckmessung und je nach Verdacht weitere Diagnostik (z. B. Prostata, Herz, Schlaf) zum Einsatz, um die Ursache gezielt zu behandeln.",
          en: "A voiding and drinking diary is especially informative. Urine and blood tests, blood-pressure measurement and, depending on suspicion, further diagnostics (e.g. prostate, heart, sleep) are added to treat the cause specifically." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Im Vordergrund steht die Behandlung der Ursache. Allgemeine Maßnahmen sind eine angepasste abendliche Trinkmenge, das Meiden von Koffein und Alkohol am Abend sowie das Hochlagern der Beine bei Wassereinlagerungen; je nach Ursache kommen gezielte Medikamente hinzu.",
          en: "The priority is treating the cause. General measures are an adapted evening fluid intake, avoiding caffeine and alcohol in the evening and elevating the legs when there is fluid retention; depending on the cause, targeted medicines are added." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Alltag", en: "Daily life" } },
        { t: "ul", items: {
          de: ["Trinkmenge auf den Tag verlagern, abends reduzieren.","Koffein und Alkohol am Abend meiden.","Bei geschwollenen Beinen tagsüber zeitweise hochlagern, um nächtliche Urinbildung zu verringern.","Gute Schlafhygiene und die Behandlung von Schlafstörungen unterstützen die Nachtruhe."],
          en: ["Shift fluid intake to the daytime and reduce it in the evening.","Avoid caffeine and alcohol in the evening.","With swollen legs, elevate them for a time during the day to reduce night-time urine production.","Good sleep hygiene and treating sleep disorders support night-time rest."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird die Nokturie häufig einer Schwäche des Nieren-Yang zugeordnet, das die nächtliche Wasserregulation betrifft. Akupunktur und wärmende Verfahren können begleitend eingesetzt werden.",
          en: "In TCM, nocturia is often assigned to a weakness of Kidney Yang, which affects night-time fluid regulation. Acupuncture and warming approaches may be used as complementary care." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen eine wärmende, ausgewogene Ernährung, eine beruhigende Abendroutine und geregelte Schlafzeiten im Vordergrund. Kräuterpräparate sind ärztlich auf Eignung und Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, a warming, balanced diet, a calming evening routine and regular sleep times are emphasised. Herbal preparations should be medically checked for suitability and interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Bei überaktiver Blase als Ursache helfen Blasen- und Beckenbodentraining, die nächtliche Blasenkapazität und -kontrolle zu verbessern. Regelmäßige Bewegung am Tag und das Aktivieren der Beinmuskelpumpe können Wassereinlagerungen und damit die nächtliche Urinbildung verringern.",
          en: "When an overactive bladder is the cause, bladder and pelvic-floor training help improve night-time bladder capacity and control. Regular daytime activity and activating the leg-muscle pump can reduce fluid retention and thus night-time urine production." } },
      ],
    },
  },

  {
    slug: "dysuria",
    icd10: "R30.0",
    illustration: "generic",
    title: { de: "Schmerzen beim Wasserlassen (Dysurie)", en: "Dysuria" },
    summary: {
      de: "Brennen oder Schmerzen beim Wasserlassen – ein Symptom mit mehreren möglichen Ursachen.",
      en: "Burning or pain on urination – a symptom with several possible causes.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Dysurie bezeichnet Schmerzen oder Brennen beim Wasserlassen. Es ist ein Symptom, kein eigenständiges Krankheitsbild. Häufigste Ursache ist eine Harnwegsinfektion; auch Harnröhrenentzündungen, sexuell übertragbare Infektionen, Reizungen, Steine oder bei Männern die Prostata können dahinterstecken.",
          en: "Dysuria refers to pain or burning on urination. It is a symptom, not a disease in itself. The most common cause is a urinary tract infection; urethritis, sexually transmitted infections, irritation, stones or the prostate in men can also be responsible." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Die Abklärung beginnt mit Anamnese und Urinuntersuchung; je nach Verdacht folgen Urinkultur, Tests auf sexuell übertragbare Erreger, Ultraschall oder weitere Diagnostik. Ziel ist, die zugrunde liegende Ursache zu finden und gezielt zu behandeln.",
          en: "Assessment begins with history and urine analysis; depending on suspicion, urine culture, tests for sexually transmitted organisms, ultrasound or further diagnostics follow. The aim is to find and specifically treat the underlying cause." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die Behandlung richtet sich nach der Ursache. Bei einer Harnwegsinfektion werden Antibiotika verantwortungsvoll und leitliniengerecht eingesetzt; nicht-infektiöse Reizungen werden symptomatisch behandelt. Reichliches Trinken und Wärme können begleitend lindern.",
          en: "Treatment depends on the cause. For a urinary tract infection, antibiotics are used responsibly and in line with guidelines; non-infectious irritation is treated symptomatically. Generous fluids and warmth can ease symptoms as support." } },
        { t: "p", text: {
          de: "Wichtig: Kommen Fieber, Flankenschmerz, Blut im Urin oder ein deutliches Krankheitsgefühl hinzu, ist eine zeitnahe ärztliche Abklärung ratsam.",
          en: "Important: if fever, flank pain, blood in the urine or feeling markedly unwell are present, prompt medical assessment is advisable." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend können reichliches Trinken, Wärme und Schonung Beschwerden lindern. Traditionelle Blasentees sind ärztlich zu prüfen. Anhaltende oder wiederkehrende Beschwerden sollten ärztlich abgeklärt werden.",
          en: "As support, generous fluids, warmth and rest can ease symptoms. Traditional bladder teas should be medically reviewed. Persistent or recurrent symptoms should be medically assessed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird das Brennen beim Wasserlassen meist feuchter Hitze im unteren Erwärmer zugeordnet. Akupunktur und kühlende Kräuter können begleitend eingesetzt werden; die Ursache ist medizinisch abzuklären.",
          en: "In TCM, burning on urination is usually assigned to damp heat in the lower burner. Acupuncture and cooling herbs may be used as complementary care; the cause requires medical assessment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch werden eine kühlende, reizarme Ernährung und ausreichende Flüssigkeit empfohlen. Kräuterpräparate sind ärztlich zu prüfen und ersetzen bei Infektion die medizinische Behandlung nicht.",
          en: "Ayurveda recommends a cooling, low-irritant diet and adequate fluids. Herbal preparations should be medically reviewed and do not replace medical treatment when an infection is present." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie spielt beim akuten Symptom eine untergeordnete Rolle. Bei anhaltenden Reizbeschwerden ohne Infekt oder bei begleitender Beckenbodenverspannung kann eine Beckenboden-Entspannungstherapie hilfreich sein.",
          en: "Physiotherapy plays a minor role in the acute symptom. For persistent irritative symptoms without infection or with accompanying pelvic-floor tension, pelvic-floor relaxation therapy can be helpful." } },
      ],
    },
  },

  {
    slug: "hematuria",
    icd10: "R31.9",
    illustration: "generic",
    title: { de: "Blut im Urin (Hämaturie)", en: "Blood in the Urine (Haematuria)" },
    summary: {
      de: "Sichtbares oder mikroskopisches Blut im Urin – immer abklärungsbedürftig.",
      en: "Visible or microscopic blood in the urine – always warranting assessment.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Von Hämaturie spricht man, wenn sich Blut im Urin befindet – entweder sichtbar (roter oder bräunlicher Urin) oder nur unter dem Mikroskop nachweisbar. Ursachen reichen von harmlos (z. B. Harnwegsinfekt, Steine) bis behandlungsbedürftig (z. B. Nierenerkrankungen, Tumoren der Harnwege). Jede sichtbare Blutbeimengung ist abklärungsbedürftig.",
          en: "Haematuria is the presence of blood in the urine – either visible (red or brownish urine) or detectable only under the microscope. Causes range from harmless (e.g. urinary infection, stones) to needing treatment (e.g. kidney disease, urinary tract tumours). Any visible blood warrants assessment." } },
        { t: "p", text: {
          de: "Wichtig: Sichtbares Blut im Urin sollte immer ärztlich abgeklärt werden – auch wenn es nur einmal auftritt und schmerzlos ist –, um ernste Ursachen nicht zu übersehen.",
          en: "Important: visible blood in the urine should always be medically assessed – even if it occurs only once and is painless – so that serious causes are not missed." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Die Abklärung umfasst Urinuntersuchung und -kultur, Bluttests, Blutdruck sowie Bildgebung der Harnwege (Ultraschall, bei Bedarf Computertomografie) und häufig eine Blasenspiegelung. Das Vorgehen richtet sich nach Alter, Risikofaktoren (z. B. Rauchen) und Begleitsymptomen.",
          en: "Assessment includes urine analysis and culture, blood tests, blood pressure and imaging of the urinary tract (ultrasound, and CT if needed) and often cystoscopy. The approach depends on age, risk factors (e.g. smoking) and accompanying symptoms." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die Behandlung richtet sich nach der gefundenen Ursache – etwa Antibiotika bei Infekt, Steinbehandlung, nephrologische Therapie bei Nierenerkrankung oder urologische Behandlung bei einem Tumor. Bis zur Klärung sollte die Abklärung nicht aufgeschoben werden.",
          en: "Treatment depends on the cause found – for example antibiotics for infection, stone treatment, nephrological therapy for kidney disease or urological treatment for a tumour. The work-up should not be postponed until the cause is clarified." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Bei Blut im Urin steht die ärztliche Abklärung an erster Stelle; naturheilkundliche Maßnahmen sind kein Ersatz. Je nach festgestellter Ursache können unterstützende Maßnahmen (z. B. reichliches Trinken) sinnvoll sein.",
          en: "With blood in the urine, medical assessment comes first; naturopathic measures are no substitute. Depending on the cause found, supportive measures (e.g. generous fluids) may be sensible." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Die TCM ordnet Blut im Urin häufig Mustern aus Hitze im Blut oder einer Schwäche zu. Begleitende Verfahren dürfen die notwendige Ursachenabklärung nicht verzögern.",
          en: "TCM often assigns blood in the urine to patterns of heat in the blood or a deficiency. Complementary approaches must not delay the necessary work-up for the cause." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch werden eine kühlende, ausgewogene Ernährung und ausreichende Flüssigkeit empfohlen. Kräuterpräparate sind ärztlich zu prüfen; die Abklärung der Ursache hat Vorrang.",
          en: "Ayurveda recommends a cooling, balanced diet and adequate fluids. Herbal preparations should be medically reviewed; investigating the cause takes priority." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Die Physiotherapie hat bei der Hämaturie selbst keine Rolle. Sie kann erst dann sinnvoll sein, wenn die Ursache geklärt ist und ein entsprechendes Krankheitsbild (z. B. mit Blasen- oder Beckenbodenbezug) behandelt wird.",
          en: "Physiotherapy has no role in haematuria itself. It can become useful only once the cause is clarified and a corresponding condition (e.g. involving the bladder or pelvic floor) is treated." } },
      ],
    },
  },

  {
    slug: "proteinuria",
    icd10: "R80.9",
    illustration: "generic",
    title: { de: "Eiweiß im Urin (Proteinurie)", en: "Proteinuria" },
    summary: {
      de: "Vermehrte Eiweißausscheidung im Urin – ein wichtiger Hinweis auf Nierenerkrankungen.",
      en: "Increased protein excretion in the urine – an important pointer to kidney disease.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Proteinurie bezeichnet eine über das Normale hinausgehende Ausscheidung von Eiweiß im Urin, oft an schäumendem Urin erkennbar. Sie ist meist ein Zeichen einer Nierenschädigung (z. B. bei Diabetes, Bluthochdruck oder Nierenentzündung), kann aber auch vorübergehend (z. B. bei Fieber, Anstrengung) auftreten.",
          en: "Proteinuria is the excretion of protein in the urine above the normal level, often recognisable by foamy urine. It is usually a sign of kidney damage (e.g. in diabetes, high blood pressure or kidney inflammation) but can also occur transiently (e.g. with fever, exertion)." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Zur Abklärung werden die Eiweißausscheidung genauer bestimmt (z. B. Albumin-Kreatinin-Quotient), Nierenwerte, Blutzucker und Blutdruck gemessen und ein wiederholter Nachweis geprüft. Je nach Befund erfolgt eine weiterführende nephrologische Diagnostik, gegebenenfalls eine Nierenbiopsie.",
          en: "Assessment more precisely quantifies protein excretion (e.g. the albumin-to-creatinine ratio), measures kidney values, glucose and blood pressure and confirms it on repeat testing. Depending on findings, further nephrological diagnostics, possibly a kidney biopsy, follow." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Im Vordergrund steht die Behandlung der Ursache sowie der Nierenschutz: konsequente Blutdruck- und Blutzuckereinstellung und nierenschützende Medikamente (z. B. ACE-Hemmer/AT1-Blocker, SGLT2-Hemmer), die auch die Eiweißausscheidung senken. Regelmäßige Verlaufskontrollen sind wichtig.",
          en: "The priority is treating the cause and protecting the kidneys: consistent blood-pressure and glucose control and kidney-protective medicines (e.g. ACE inhibitors/ARBs, SGLT2 inhibitors), which also reduce protein excretion. Regular follow-up is important." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend sind salzbewusste Ernährung, Blutdruck- und Gewichtskontrolle sowie Rauchverzicht sinnvoll. Pflanzliche Mittel sind wegen möglicher Nierenbelastung und Wechselwirkungen streng ärztlich zu prüfen und ersetzen den Nierenschutz nicht.",
          en: "As support, a salt-aware diet, blood-pressure and weight control and stopping smoking are sensible. Herbal products must be strictly medically reviewed because of possible kidney burden and interactions and do not replace kidney protection." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Die TCM ordnet einen Eiweißverlust häufig einer Schwäche des Milz- und Nieren-Qi zu. Begleitende Verfahren können das Wohlbefinden unterstützen; Kräuter sind wegen der Nierenbelastung besonders sorgfältig ärztlich abzustimmen.",
          en: "TCM often assigns protein loss to a weakness of Spleen and Kidney Qi. Complementary approaches may support wellbeing; herbs must be coordinated with particular medical care because of kidney burden." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch werden eine leichte, salzbewusste Ernährung und geregelte Routinen empfohlen. Kräuterpräparate sind mit großer Vorsicht und nur nach ärztlicher Prüfung anzuwenden.",
          en: "Ayurveda recommends a light, salt-aware diet and regular routines. Herbal preparations should be used with great caution and only after medical review." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Regelmäßige, moderate Bewegung unterstützt Blutdruck, Blutzucker und Gewicht und damit den Nierenschutz. Umfang und Intensität werden bei eingeschränkter Nierenfunktion mit dem Behandlungsteam abgestimmt.",
          en: "Regular, moderate activity supports blood pressure, glucose and weight and thereby kidney protection. Volume and intensity are coordinated with the treatment team when kidney function is reduced." } },
      ],
    },
  },
]
