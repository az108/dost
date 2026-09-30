import type { Disease } from "@/content/treatments"

/**
 * Conditions for "Musculoskeletal System, Orthopedics & Pain Medicine". This
 * area is empty on drdosthealth.com, so the content here is generated: original
 * bilingual prose (definition + the five treatment modalities) based on common
 * ICD-10 conditions for a general/private practice. Physiotherapy is central to
 * most musculoskeletal conditions and is therefore developed in depth. Every
 * page is reviewed by Dr. Dost before use; images are added later via the
 * Gemini web workflow and will carry the "KI-generiert" caption.
 */
export const musculoskeletalDiseases: Disease[] = [
  {
    slug: "low-back-pain",
    icd10: "M54.5",
    illustration: "generic",
    title: { de: "Kreuzschmerzen (unterer Rückenschmerz)", en: "Low Back Pain" },
    summary: {
      de: "Schmerzen im unteren Rücken, meist ohne ernste Ursache und mit guter Aussicht auf Besserung.",
      en: "Pain in the lower back, usually without a serious cause and with a good chance of recovery.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Kreuzschmerzen sind Schmerzen im unteren Rückenbereich, oft verbunden mit Verspannung und Bewegungseinschränkung. In den allermeisten Fällen liegt keine gefährliche Ursache vor (nicht-spezifischer Kreuzschmerz); Muskeln, Bänder, Gelenke und Bandscheiben spielen zusammen. Die meisten Episoden bessern sich innerhalb weniger Wochen.",
          en: "Low back pain is pain in the lower back, often with muscle tension and restricted movement. In the large majority of cases there is no dangerous cause (non-specific low back pain); muscles, ligaments, joints and discs act together. Most episodes improve within a few weeks." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Im Mittelpunkt stehen Gespräch und körperliche Untersuchung. Bildgebung (Röntgen, MRT) ist bei einfachem Kreuzschmerz zunächst nicht nötig und erfolgt erst bei Warnzeichen oder anhaltenden Beschwerden. Wichtig ist das Erkennen von Warnzeichen (sogenannte Red Flags).",
          en: "History and physical examination are central. Imaging (X-ray, MRI) is not needed initially in simple low back pain and is reserved for warning signs or persistent symptoms. Recognising warning signs (so-called red flags) is important." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Empfohlen werden das Aufrechterhalten von Aktivität und Vermeiden längerer Bettruhe, Aufklärung und bei Bedarf zeitlich begrenzte Schmerzmittel (z. B. entzündungshemmende Mittel). Aktive Bewegung und Physiotherapie sind die tragenden Säulen; bei anhaltenden Beschwerden wird ein multimodaler Ansatz gewählt.",
          en: "Recommended measures are staying active and avoiding prolonged bed rest, reassurance and, if needed, time-limited pain relief (e.g. anti-inflammatory medicines). Active movement and physiotherapy are the mainstays; for persistent symptoms a multimodal approach is chosen." } },
        { t: "p", text: {
          de: "Wichtig: Taubheit im Reithosenbereich, Blasen- oder Mastdarmstörungen, zunehmende Beinschwäche, Fieber oder starke nächtliche Schmerzen können auf eine ernste Ursache hindeuten und erfordern eine sofortige ärztliche Abklärung, im Notfall den Notruf 112.",
          en: "Important: numbness in the saddle region, bladder or bowel dysfunction, increasing leg weakness, fever or severe night pain can indicate a serious cause and require immediate medical assessment, and an emergency call (112) in an emergency." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Wärme & Lebensstil", en: "Heat & lifestyle" } },
        { t: "ul", items: {
          de: ["Lokale Wärme (Wärmepflaster, warmes Bad) kann verspannte Muskulatur lösen.","Regelmäßige Bewegung, Gewichtsmanagement und ergonomisches Heben beugen Rückfällen vor.","Stressabbau und ausreichender Schlaf unterstützen die Schmerzverarbeitung.","Pflanzliche entzündungshemmende Mittel (z. B. Teufelskralle) sind ärztlich auf Eignung und Wechselwirkungen zu prüfen."],
          en: ["Local heat (heat patches, warm bath) can relax tense muscles.","Regular activity, weight management and ergonomic lifting help prevent recurrences.","Stress reduction and adequate sleep support pain processing.","Herbal anti-inflammatory products (e.g. devil's claw) should be medically reviewed for suitability and interactions."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden Kreuzschmerzen traditionell Mustern wie Nieren-Schwäche, Kälte-Feuchtigkeit oder Qi- und Blut-Stagnation zugeordnet. Akupunktur, Schröpfen und Wärmeanwendungen (Moxibustion) können begleitend Schmerzen lindern und die Beweglichkeit fördern, ersetzen aber die aktive Bewegungstherapie nicht.",
          en: "In TCM, low back pain is traditionally assigned to patterns such as Kidney deficiency, cold-damp or Qi and blood stagnation. Acupuncture, cupping and heat applications (moxibustion) may complementarily ease pain and support mobility, but do not replace active exercise therapy." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch werden Rückenschmerzen häufig einem Vata-Ungleichgewicht zugeordnet. Begleitend betont werden warme Öl-Anwendungen, eine regelmäßige Tagesroutine, sanftes Yoga und eine leicht verdauliche, wärmende Ernährung. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, back pain is often assigned to a Vata imbalance. Complementary emphasis is placed on warm oil applications, a regular daily routine, gentle yoga and an easily digestible, warming diet. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Bewegung & Übungstherapie", en: "Movement & exercise therapy" } },
        { t: "p", text: {
          de: "Die Physiotherapie ist zentral. Frühzeitige Aktivierung, Übungen zur Kräftigung von Rumpf- und Rückenmuskulatur, Mobilisation und Dehnung sowie Anleitung zu rückengerechtem Verhalten verbessern Schmerz und Funktion nachhaltig. Manuelle Therapie kann kurzfristig ergänzen.",
          en: "Physiotherapy is central. Early activation, exercises to strengthen the trunk and back muscles, mobilisation and stretching, and guidance on back-friendly behaviour improve pain and function durably. Manual therapy can add short-term support." } },
        { t: "p", text: {
          de: "Wichtig ist der schrittweise Aufbau von Belastung und Alltagsbewegung. Ein individuell erlerntes Heimprogramm hilft, Rückfällen vorzubeugen und Vertrauen in die Belastbarkeit des Rückens zurückzugewinnen.",
          en: "A gradual build-up of load and everyday movement is important. An individually learned home programme helps prevent recurrences and rebuild confidence in the back's resilience." } },
      ],
    },
  },

  {
    slug: "neck-pain-cervical-syndrome",
    icd10: "M54.2",
    illustration: "generic",
    title: { de: "Nackenschmerzen (Zervikalsyndrom)", en: "Neck Pain (Cervical Syndrome)" },
    summary: {
      de: "Schmerzen und Verspannung im Nacken, oft haltungs- und stressbedingt, meist gut behandelbar.",
      en: "Pain and tension in the neck, often posture- and stress-related, usually well treatable.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Das Zervikalsyndrom umfasst Schmerzen und Verspannungen im Nacken, häufig mit Ausstrahlung in Kopf, Schultern oder Arme und eingeschränkter Beweglichkeit. Ursachen sind meist muskuläre Verspannungen, Fehlhaltung, langes Sitzen am Bildschirm, Stress sowie altersbedingte Verschleißveränderungen der Halswirbelsäule.",
          en: "Cervical syndrome covers pain and tension in the neck, often radiating to the head, shoulders or arms with restricted movement. Causes are usually muscular tension, poor posture, prolonged screen work, stress and age-related wear changes of the cervical spine." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Gespräch und körperliche Untersuchung stehen im Vordergrund. Bildgebung ist bei unkomplizierten Beschwerden meist nicht nötig und wird bei Warnzeichen oder neurologischen Ausfällen erwogen.",
          en: "History and examination are central. Imaging is usually unnecessary for uncomplicated symptoms and is considered for warning signs or neurological deficits." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Im Vordergrund stehen Aktivität, Aufklärung und Bewegungsübungen; kurzfristig können schmerz- und entzündungshemmende Mittel eingesetzt werden. Eine dauerhafte Ruhigstellung mit Halskrause wird vermieden.",
          en: "Activity, reassurance and movement exercises are central; pain and anti-inflammatory medicines may be used short-term. Prolonged immobilisation with a neck collar is avoided." } },
        { t: "p", text: {
          de: "Wichtig: Ausstrahlende Armschwäche, Taubheit, Gangunsicherheit, Fieber oder Beschwerden nach einem Unfall erfordern eine zeitnahe ärztliche Abklärung.",
          en: "Important: radiating arm weakness, numbness, unsteady gait, fever or symptoms after an accident require prompt medical assessment." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Lokale Wärme, Entspannungsverfahren und ein ergonomischer Arbeitsplatz lindern Verspannungen. Ausreichend Bewegungspausen und Stressabbau sind wichtig. Pflanzliche Mittel und ätherische Öle sind ärztlich auf Eignung zu prüfen.",
          en: "Local heat, relaxation techniques and an ergonomic workstation ease tension. Adequate movement breaks and stress reduction are important. Herbal products and essential oils should be medically reviewed for suitability." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden Nackenbeschwerden mit Kälte-Wind, Qi- und Blut-Stagnation im Bereich des Meridianverlaufs in Verbindung gebracht. Akupunktur, Schröpfen und Wärmeanwendungen können begleitend Verspannungen und Schmerzen lindern.",
          en: "Traditionally, neck problems are associated with cold-wind and Qi and blood stagnation along the channels. Acupuncture, cupping and heat applications may complementarily ease tension and pain." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen warme Öl-Anwendungen im Nacken-Schulter-Bereich, sanftes Yoga sowie eine beruhigende Tagesroutine im Vordergrund. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, warm oil applications over the neck and shoulders, gentle yoga and a calming daily routine are emphasised. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Übung & manuelle Therapie", en: "Exercise & manual therapy" } },
        { t: "p", text: {
          de: "Die Physiotherapie ist tragend: Kräftigung der tiefen Hals- und Schultergürtelmuskulatur, Mobilisation der Halswirbelsäule, Dehnung verspannter Muskeln und Haltungsschulung verbessern Beweglichkeit und Schmerz. Manuelle Therapie kann kurzfristig ergänzen.",
          en: "Physiotherapy is a mainstay: strengthening the deep neck and shoulder-girdle muscles, mobilising the cervical spine, stretching tense muscles and posture training improve mobility and pain. Manual therapy can add short-term support." } },
        { t: "p", text: {
          de: "Wichtig sind Ergonomie am Arbeitsplatz, regelmäßige Bewegungspausen und ein Heimübungsprogramm, um Verspannungen vorzubeugen.",
          en: "Workplace ergonomics, regular movement breaks and a home exercise programme are important to prevent tension." } },
      ],
    },
  },

  {
    slug: "sciatica",
    icd10: "M54.3",
    illustration: "generic",
    title: { de: "Ischialgie", en: "Sciatica" },
    summary: {
      de: "In das Bein ausstrahlender Schmerz entlang des Ischiasnervs, meist durch Reizung einer Nervenwurzel.",
      en: "Pain radiating into the leg along the sciatic nerve, usually from irritation of a nerve root.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Ischialgie ist ein Schmerz, der vom unteren Rücken über das Gesäß in das Bein ausstrahlt, dem Verlauf des Ischiasnervs folgend. Ursache ist meist eine Reizung oder Einengung einer Nervenwurzel, häufig durch einen Bandscheibenvorfall oder Verschleißveränderungen. Begleitend können Taubheit, Kribbeln oder Schwäche im Bein auftreten.",
          en: "Sciatica is pain radiating from the lower back over the buttock into the leg, following the course of the sciatic nerve. The cause is usually irritation or compression of a nerve root, often from a disc herniation or wear changes. Numbness, tingling or leg weakness can accompany it." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Gespräch und neurologische Untersuchung (Kraft, Gefühl, Reflexe) stehen im Vordergrund. Bildgebung (MRT) erfolgt bei anhaltenden oder zunehmenden Ausfällen oder vor einem Eingriff.",
          en: "History and neurological examination (strength, sensation, reflexes) are central. Imaging (MRI) is used for persistent or increasing deficits or before an intervention." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die meisten Beschwerden bessern sich konservativ: Aktivität im schmerzarmen Rahmen, Schmerzmittel, Physiotherapie und Aufklärung. Bei starken oder anhaltenden Nervenausfällen können gezielte Injektionen oder eine operative Entlastung erwogen werden.",
          en: "Most symptoms improve with conservative care: activity within a low-pain range, pain relief, physiotherapy and reassurance. For severe or persistent nerve deficits, targeted injections or surgical decompression may be considered." } },
        { t: "p", text: {
          de: "Wichtig: Taubheit im Reithosenbereich, Blasen- oder Mastdarmstörungen oder eine rasch zunehmende Beinschwäche können Zeichen eines Cauda-equina-Syndroms sein und erfordern den sofortigen Notruf 112.",
          en: "Important: numbness in the saddle region, bladder or bowel dysfunction or rapidly increasing leg weakness can be signs of cauda equina syndrome and require an immediate emergency call (112)." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Wärmeanwendungen, sanfte Bewegung und Entspannungsverfahren können Beschwerden lindern. Pflanzliche entzündungshemmende und schmerzlindernde Mittel sind ärztlich auf Eignung und Wechselwirkungen zu prüfen; Bettruhe wird vermieden.",
          en: "Heat applications, gentle movement and relaxation techniques can ease symptoms. Herbal anti-inflammatory and pain-relieving products should be medically reviewed for suitability and interactions; bed rest is avoided." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird die Ischialgie Mustern wie Qi- und Blut-Stagnation oder Kälte-Feuchtigkeit im Bereich der Beinmeridiane zugeordnet. Akupunktur kann begleitend zur Schmerzlinderung eingesetzt werden, ersetzt aber die Abklärung neurologischer Ausfälle nicht.",
          en: "Traditionally, sciatica is assigned to patterns such as Qi and blood stagnation or cold-damp along the leg channels. Acupuncture may be used as complementary pain relief, but does not replace assessment of neurological deficits." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch wird die Ischialgie (Gridhrasi) meist einem Vata-Ungleichgewicht zugeordnet. Begleitend betont werden warme Öl-Anwendungen, sanftes Yoga und eine wärmende Ernährung. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, sciatica (Gridhrasi) is usually assigned to a Vata imbalance. Complementary emphasis is placed on warm oil applications, gentle yoga and a warming diet. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Nervenmobilisation & Kräftigung", en: "Nerve mobilisation & strengthening" } },
        { t: "p", text: {
          de: "Die Physiotherapie ist zentral: schmerzadaptierte Bewegung, gezielte Nervengleitübungen, Kräftigung von Rumpf- und Rückenmuskulatur sowie Mobilisation verbessern Schmerz und Funktion. Die Belastung wird schrittweise gesteigert.",
          en: "Physiotherapy is central: pain-adapted movement, targeted nerve-gliding exercises, strengthening of the trunk and back muscles and mobilisation improve pain and function. Load is increased step by step." } },
        { t: "p", text: {
          de: "Wichtig ist das aktive Bleiben im schmerzarmen Rahmen. Ein individuelles Heimprogramm und rückengerechtes Verhalten helfen, Rückfällen vorzubeugen.",
          en: "Staying active within a low-pain range is important. An individual home programme and back-friendly behaviour help prevent recurrences." } },
      ],
    },
  },

  {
    slug: "lumbar-disc-herniation",
    icd10: "M51.1",
    illustration: "generic",
    title: { de: "Bandscheibenvorfall (Lendenwirbelsäule)", en: "Lumbar Disc Herniation" },
    summary: {
      de: "Austretendes Bandscheibengewebe an der Lendenwirbelsäule, das eine Nervenwurzel reizen kann.",
      en: "Displaced disc tissue in the lumbar spine that can irritate a nerve root.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Beim Bandscheibenvorfall der Lendenwirbelsäule tritt Gewebe des inneren Bandscheibenkerns durch den äußeren Faserring und kann auf eine benachbarte Nervenwurzel drücken. Folgen sind Rückenschmerzen und häufig ins Bein ausstrahlende Schmerzen, mitunter mit Taubheit, Kribbeln oder Schwäche. Viele Vorfälle bilden sich mit der Zeit von selbst zurück.",
          en: "In a lumbar disc herniation, tissue of the inner disc core protrudes through the outer fibrous ring and can press on an adjacent nerve root. Consequences are back pain and often leg-radiating pain, sometimes with numbness, tingling or weakness. Many herniations resolve on their own over time." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Neben Gespräch und neurologischer Untersuchung kann eine MRT das Ausmaß darstellen. Bildbefund und Beschwerden stimmen nicht immer überein, sodass der klinische Befund führend bleibt.",
          en: "Alongside history and neurological examination, MRI can show the extent. Imaging findings and symptoms do not always match, so the clinical picture remains decisive." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die Behandlung ist überwiegend konservativ: Aktivität, Schmerzmittel, Physiotherapie und Aufklärung. Bei anhaltenden starken Schmerzen können Injektionen helfen. Eine Operation wird bei zunehmenden oder schweren Nervenausfällen oder therapieresistenten Schmerzen erwogen.",
          en: "Treatment is predominantly conservative: activity, pain relief, physiotherapy and reassurance. For persistent severe pain, injections can help. Surgery is considered for increasing or severe nerve deficits or treatment-resistant pain." } },
        { t: "p", text: {
          de: "Wichtig: Taubheit im Reithosenbereich, Blasen- oder Mastdarmstörungen oder eine rasch zunehmende Beinschwäche sind ein Notfall (Cauda-equina-Syndrom) und erfordern sofort den Notruf 112.",
          en: "Important: numbness in the saddle region, bladder or bowel dysfunction or rapidly increasing leg weakness are an emergency (cauda equina syndrome) and require an immediate emergency call (112)." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Wärme, Entspannungsverfahren und angepasste Bewegung unterstützen die Erholung. Pflanzliche schmerzlindernde Mittel sind ärztlich auf Eignung und Wechselwirkungen zu prüfen. Lange Schonung wird vermieden.",
          en: "Heat, relaxation techniques and adapted movement support recovery. Herbal pain-relieving products should be medically reviewed for suitability and interactions. Prolonged rest is avoided." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden die Beschwerden Mustern wie Nieren-Schwäche sowie Qi- und Blut-Stagnation zugeordnet. Akupunktur kann begleitend zur Schmerzlinderung dienen und ersetzt die Beobachtung neurologischer Ausfälle nicht.",
          en: "Traditionally, symptoms are assigned to patterns such as Kidney deficiency and Qi and blood stagnation. Acupuncture may serve as complementary pain relief and does not replace monitoring of neurological deficits." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen Vata-beruhigende Maßnahmen im Vordergrund: warme Öl-Anwendungen, sanftes Yoga und eine regelmäßige, wärmende Ernährung. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, Vata-calming measures are emphasised: warm oil applications, gentle yoga and a regular, warming diet. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Aktive Rehabilitation", en: "Active rehabilitation" } },
        { t: "p", text: {
          de: "Die Physiotherapie trägt die Behandlung: frühzeitige Aktivierung, schmerzadaptierte Übungen, Nervengleitübungen, Kräftigung der Rumpfmuskulatur und Mobilisation verbessern Schmerz, Beweglichkeit und Kraft. Belastung wird schrittweise aufgebaut.",
          en: "Physiotherapy carries the treatment: early activation, pain-adapted exercises, nerve-gliding exercises, trunk-muscle strengthening and mobilisation improve pain, mobility and strength. Load is built up gradually." } },
        { t: "p", text: {
          de: "Ein individuell erlerntes Heimprogramm, Haltungsschulung und rückengerechtes Heben helfen, die Erholung zu sichern und Rückfällen vorzubeugen.",
          en: "An individually learned home programme, posture training and back-friendly lifting help secure recovery and prevent recurrences." } },
      ],
    },
  },

  {
    slug: "cervical-disc-herniation",
    icd10: "M50.1",
    illustration: "generic",
    title: { de: "Bandscheibenvorfall der Halswirbelsäule", en: "Cervical Disc Herniation" },
    summary: {
      de: "Austretendes Bandscheibengewebe an der Halswirbelsäule mit möglicher Ausstrahlung in den Arm.",
      en: "Displaced disc tissue in the cervical spine with possible radiation into the arm.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Beim Bandscheibenvorfall der Halswirbelsäule kann austretendes Gewebe eine Nervenwurzel oder selten das Rückenmark bedrängen. Typisch sind Nackenschmerzen mit Ausstrahlung in Schulter und Arm, teils mit Taubheit, Kribbeln oder Schwäche in Arm oder Hand. Viele Beschwerden bessern sich konservativ.",
          en: "In a cervical disc herniation, displaced tissue can press on a nerve root or, rarely, the spinal cord. Typical features are neck pain radiating to the shoulder and arm, sometimes with numbness, tingling or weakness in the arm or hand. Many symptoms improve with conservative care." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Gespräch und neurologische Untersuchung führen die Abklärung; eine MRT stellt bei anhaltenden oder zunehmenden Ausfällen den Befund dar. Die Beschwerden stehen im Vordergrund der Beurteilung.",
          en: "History and neurological examination lead the assessment; MRI shows the findings for persistent or increasing deficits. Symptoms remain central to the evaluation." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Meist konservativ: Aktivität, Schmerzmittel, Physiotherapie und Aufklärung; eine dauerhafte Ruhigstellung wird vermieden. Bei anhaltenden oder zunehmenden Nervenausfällen können Injektionen oder eine Operation erwogen werden.",
          en: "Usually conservative: activity, pain relief, physiotherapy and reassurance; prolonged immobilisation is avoided. For persistent or increasing nerve deficits, injections or surgery may be considered." } },
        { t: "p", text: {
          de: "Wichtig: Gangunsicherheit, Feinmotorikstörungen der Hände, zunehmende Schwäche oder Blasenstörungen können auf eine Rückenmarksbeteiligung (Myelopathie) hinweisen und erfordern eine rasche ärztliche Abklärung.",
          en: "Important: unsteady gait, loss of fine hand motor skills, increasing weakness or bladder dysfunction can indicate spinal-cord involvement (myelopathy) and require prompt medical assessment." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Wärme, Entspannungsverfahren und ergonomische Anpassungen lindern begleitende Verspannungen. Pflanzliche schmerzlindernde Mittel sind ärztlich auf Eignung und Wechselwirkungen zu prüfen.",
          en: "Heat, relaxation techniques and ergonomic adjustments ease accompanying tension. Herbal pain-relieving products should be medically reviewed for suitability and interactions." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden Nacken- und Armbeschwerden Mustern wie Qi- und Blut-Stagnation entlang der Meridiane zugeordnet. Akupunktur kann begleitend zur Schmerzlinderung eingesetzt werden und ersetzt die neurologische Abklärung nicht.",
          en: "Traditionally, neck and arm symptoms are assigned to patterns such as Qi and blood stagnation along the channels. Acupuncture may be used as complementary pain relief and does not replace neurological assessment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen warme Öl-Anwendungen im Nacken-Schulter-Bereich, sanftes Yoga und Vata-beruhigende Routinen im Vordergrund. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, warm oil applications over the neck and shoulders, gentle yoga and Vata-calming routines are emphasised. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Mobilisation & Kräftigung", en: "Mobilisation & strengthening" } },
        { t: "p", text: {
          de: "Die Physiotherapie ist zentral: schmerzadaptierte Mobilisation der Halswirbelsäule, Nervengleitübungen, Kräftigung der tiefen Hals- und Schultergürtelmuskulatur sowie Haltungsschulung verbessern Schmerz und Funktion.",
          en: "Physiotherapy is central: pain-adapted mobilisation of the cervical spine, nerve-gliding exercises, strengthening of the deep neck and shoulder-girdle muscles and posture training improve pain and function." } },
        { t: "p", text: {
          de: "Ergonomie am Arbeitsplatz, Bewegungspausen und ein individuelles Heimprogramm unterstützen die Erholung und beugen Rückfällen vor.",
          en: "Workplace ergonomics, movement breaks and an individual home programme support recovery and prevent recurrences." } },
      ],
    },
  },

  {
    slug: "osteoarthritis-knee",
    icd10: "M17.9",
    illustration: "generic",
    title: { de: "Kniearthrose (Gonarthrose)", en: "Osteoarthritis of the Knee" },
    summary: {
      de: "Verschleiß des Kniegelenkknorpels mit Schmerzen, Steifigkeit und zunehmender Bewegungseinschränkung.",
      en: "Wear of the knee joint cartilage with pain, stiffness and increasing restriction of movement.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Gonarthrose ist ein fortschreitender Verschleiß des Gelenkknorpels im Knie, häufig mit Veränderungen an Knochen und umgebenden Strukturen. Typisch sind Anlauf- und Belastungsschmerzen, Morgensteifigkeit, gelegentliche Schwellung und eine nachlassende Beweglichkeit. Alter, Überlastung, frühere Verletzungen und Übergewicht begünstigen sie.",
          en: "Knee osteoarthritis is a progressive wear of the joint cartilage in the knee, often with changes to bone and surrounding structures. Typical features are start-up and load-related pain, morning stiffness, occasional swelling and declining mobility. Age, overload, previous injuries and excess weight promote it." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose stützt sich auf Beschwerden und körperliche Untersuchung, ergänzt durch Röntgenbilder. Der Röntgenbefund und die Beschwerden stimmen nicht immer überein.",
          en: "Diagnosis rests on symptoms and physical examination, supplemented by X-rays. Imaging findings and symptoms do not always match." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Grundlage sind Bewegung, Muskelkräftigung, Gewichtsmanagement und Aufklärung. Schmerzmittel (bevorzugt entzündungshemmende Mittel, auch als Gel) werden bedarfsgerecht eingesetzt; Injektionen können in ausgewählten Fällen helfen. Bei fortgeschrittenem Verschleiß und hohem Leidensdruck kommt ein künstliches Kniegelenk infrage.",
          en: "The foundation is movement, muscle strengthening, weight management and reassurance. Pain relief (preferably anti-inflammatory medicines, including gels) is used as needed; injections can help in selected cases. For advanced wear with high burden, a knee replacement is an option." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Ernährung & Lebensstil", en: "Nutrition & lifestyle" } },
        { t: "ul", items: {
          de: ["Gewichtsreduktion entlastet das Kniegelenk spürbar.","Eine entzündungsarme, ausgewogene Ernährung wird empfohlen.","Wärme oder Kälte können je nach Beschwerdebild lindern.","Nahrungsergänzungen sind in ihrer Wirkung begrenzt belegt und ärztlich zu prüfen."],
          en: ["Weight reduction noticeably relieves the knee joint.","An anti-inflammatory, balanced diet is recommended.","Heat or cold can ease symptoms depending on the picture.","Dietary supplements have limited evidence and should be medically reviewed."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird die Arthrose Mustern wie Kälte-Feuchtigkeit (Bi-Syndrom) und Nieren-Schwäche zugeordnet. Akupunktur kann begleitend Schmerzen lindern und die Funktion unterstützen, ersetzt aber Bewegungstherapie und Gewichtsmanagement nicht.",
          en: "Traditionally, osteoarthritis is assigned to patterns such as cold-damp (Bi syndrome) and Kidney deficiency. Acupuncture may complementarily ease pain and support function, but does not replace exercise therapy and weight management." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch wird Gelenkverschleiß meist einem Vata-Ungleichgewicht zugeordnet. Begleitend betont werden warme Öl-Anwendungen, sanfte Bewegung und eine wärmende, leicht verdauliche Ernährung. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, joint wear is usually assigned to a Vata imbalance. Complementary emphasis is placed on warm oil applications, gentle movement and a warming, easily digestible diet. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Kräftigung & Beweglichkeit", en: "Strengthening & mobility" } },
        { t: "p", text: {
          de: "Die Physiotherapie ist eine der wirksamsten Maßnahmen: gezielte Kräftigung der Oberschenkelmuskulatur, Beweglichkeits- und Balanceübungen sowie gelenkschonendes Ausdauertraining (Radfahren, Schwimmen, Gehen) verbessern Schmerz, Kraft und Alltagsfunktion.",
          en: "Physiotherapy is one of the most effective measures: targeted strengthening of the thigh muscles, mobility and balance exercises and joint-friendly aerobic training (cycling, swimming, walking) improve pain, strength and everyday function." } },
        { t: "p", text: {
          de: "Wichtig ist regelmäßige, dosierte Bewegung statt Schonung. Ganganalyse, Schuhberatung und ein Heimprogramm unterstützen den langfristigen Erfolg.",
          en: "Regular, dosed movement rather than rest is important. Gait analysis, footwear advice and a home programme support long-term success." } },
      ],
    },
  },

  {
    slug: "osteoarthritis-hip",
    icd10: "M16.9",
    illustration: "generic",
    title: { de: "Hüftarthrose (Coxarthrose)", en: "Osteoarthritis of the Hip" },
    summary: {
      de: "Verschleiß des Hüftgelenkknorpels mit Leisten- und Belastungsschmerzen und nachlassender Beweglichkeit.",
      en: "Wear of the hip joint cartilage with groin and load-related pain and declining mobility.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Coxarthrose ist ein fortschreitender Verschleiß des Knorpels im Hüftgelenk. Typisch sind Schmerzen in der Leiste, am Oberschenkel oder Gesäß, Anlaufschmerz, Steifigkeit und eine zunehmende Einschränkung beim Gehen, Anziehen von Schuhen und Strümpfen. Alter, Fehlstellungen, Überlastung und Veranlagung spielen eine Rolle.",
          en: "Hip osteoarthritis is a progressive wear of the cartilage in the hip joint. Typical features are pain in the groin, thigh or buttock, start-up pain, stiffness and increasing limitation in walking and putting on shoes and socks. Age, malalignment, overload and predisposition play a role." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose stützt sich auf Beschwerden, Beweglichkeitsprüfung und Röntgenbilder. Andere Ursachen von Leisten- oder Hüftschmerz werden abgegrenzt.",
          en: "Diagnosis rests on symptoms, a mobility check and X-rays. Other causes of groin or hip pain are distinguished." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Konservativ stehen Bewegung, Muskelkräftigung, Gewichtsmanagement, Gehhilfen bei Bedarf und bedarfsgerechte Schmerzmittel im Vordergrund. Bei fortgeschrittenem Verschleiß mit hohem Leidensdruck ist der Hüftgelenkersatz eine zuverlässige Behandlung.",
          en: "Conservatively, movement, muscle strengthening, weight management, walking aids when needed and as-needed pain relief are central. For advanced wear with high burden, hip replacement is a reliable treatment." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Gewichtsreduktion, eine entzündungsarme Ernährung und Wärmeanwendungen können Beschwerden lindern. Nahrungsergänzungen sind begrenzt belegt und ärztlich zu prüfen. Regelmäßige, gelenkschonende Bewegung bleibt zentral.",
          en: "Weight reduction, an anti-inflammatory diet and heat applications can ease symptoms. Dietary supplements have limited evidence and should be medically reviewed. Regular, joint-friendly movement remains central." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird die Hüftarthrose Mustern wie Kälte-Feuchtigkeit (Bi-Syndrom) und Nieren-Schwäche zugeordnet. Akupunktur kann begleitend Schmerzen lindern, ersetzt aber Bewegungstherapie und Gewichtsmanagement nicht.",
          en: "Traditionally, hip osteoarthritis is assigned to patterns such as cold-damp (Bi syndrome) and Kidney deficiency. Acupuncture may complementarily ease pain, but does not replace exercise therapy and weight management." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen Vata-beruhigende Maßnahmen im Vordergrund: warme Öl-Anwendungen, sanfte Bewegung und eine wärmende Ernährung. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, Vata-calming measures are emphasised: warm oil applications, gentle movement and a warming diet. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Kräftigung & Gangschulung", en: "Strengthening & gait training" } },
        { t: "p", text: {
          de: "Die Physiotherapie ist eine tragende Säule: Kräftigung der Hüft- und Gesäßmuskulatur, Beweglichkeits- und Dehnübungen, Gangschulung und gelenkschonendes Ausdauertraining (Radfahren, Wassergymnastik) verbessern Schmerz, Kraft und Gehfähigkeit.",
          en: "Physiotherapy is a mainstay: strengthening the hip and gluteal muscles, mobility and stretching exercises, gait training and joint-friendly aerobic training (cycling, aquatic exercise) improve pain, strength and walking ability." } },
        { t: "p", text: {
          de: "Ein individuelles Heimprogramm, Beratung zu Gehhilfen und rückengerechtem Verhalten sowie regelmäßige Bewegung sichern den langfristigen Erfolg.",
          en: "An individual home programme, advice on walking aids and back-friendly behaviour, and regular movement secure long-term success." } },
      ],
    },
  },

  {
    slug: "thumb-base-osteoarthritis",
    icd10: "M18.9",
    illustration: "generic",
    title: { de: "Daumensattelgelenksarthrose (Rhizarthrose)", en: "Thumb-Base Osteoarthritis" },
    summary: {
      de: "Verschleiß des Daumensattelgelenks mit Schmerzen und Kraftverlust beim Greifen.",
      en: "Wear of the thumb base joint with pain and loss of grip strength.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Rhizarthrose ist ein Verschleiß des Sattelgelenks an der Daumenbasis. Typisch sind Schmerzen beim kraftvollen Greifen, Drehen und Zugreifen (z. B. Öffnen von Gläsern), Kraftverlust und mit der Zeit eine Verformung des Gelenks. Frauen sind häufiger betroffen, besonders nach den Wechseljahren.",
          en: "Thumb-base osteoarthritis is a wear of the saddle joint at the base of the thumb. Typical features are pain on forceful gripping, turning and pinching (e.g. opening jars), loss of strength and, over time, deformity of the joint. Women are affected more often, especially after menopause." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose ergibt sich aus Beschwerden, der klinischen Untersuchung (z. B. Schmerz beim Bewegen und Belasten des Gelenks) und Röntgenbildern.",
          en: "Diagnosis follows from symptoms, clinical examination (e.g. pain on moving and loading the joint) and X-rays." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Konservativ stehen eine stützende Daumenorthese, Handtherapie, Gelenkschutz im Alltag und bedarfsgerechte Schmerzmittel im Vordergrund; Injektionen können helfen. Bei ausgeprägtem Verschleiß und anhaltenden Beschwerden kommen operative Verfahren infrage.",
          en: "Conservatively, a supportive thumb splint, hand therapy, joint protection in daily life and as-needed pain relief are central; injections can help. For marked wear and persistent symptoms, surgical procedures are options." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Wärme- oder Kälteanwendungen und eine entzündungsarme Ernährung können Beschwerden lindern. Gelenkschonende Hilfsmittel im Alltag entlasten das Gelenk. Pflanzliche Mittel sind ärztlich zu prüfen.",
          en: "Heat or cold applications and an anti-inflammatory diet can ease symptoms. Joint-friendly everyday aids relieve the joint. Herbal products should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden Handgelenksbeschwerden Mustern wie Kälte-Feuchtigkeit und Blut-Stagnation zugeordnet. Akupunktur kann begleitend Schmerzen lindern und ersetzt Handtherapie und Gelenkschutz nicht.",
          en: "Traditionally, hand joint problems are assigned to patterns such as cold-damp and blood stagnation. Acupuncture may complementarily ease pain and does not replace hand therapy and joint protection." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen warme Öl-Anwendungen der Hand und Vata-beruhigende Routinen im Vordergrund. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, warm oil applications of the hand and Vata-calming routines are emphasised. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Handtherapie & Gelenkschutz", en: "Hand therapy & joint protection" } },
        { t: "p", text: {
          de: "Die Physio- und Ergotherapie ist zentral: gezielte Kräftigung der daumenstabilisierenden Muskulatur, Beweglichkeitsübungen, Anpassung einer Orthese und das Erlernen gelenkschonender Greif- und Alltagstechniken verbessern Schmerz und Handfunktion.",
          en: "Physio- and occupational therapy is central: targeted strengthening of the thumb-stabilising muscles, mobility exercises, fitting of a splint and learning joint-friendly gripping and everyday techniques improve pain and hand function." } },
        { t: "p", text: {
          de: "Ein individuelles Heimübungsprogramm und die Beratung zu Alltagshilfen unterstützen die langfristige Funktion und beugen Überlastung vor.",
          en: "An individual home exercise programme and advice on everyday aids support long-term function and prevent overload." } },
      ],
    },
  },

  {
    slug: "spondylosis",
    icd10: "M47.9",
    illustration: "generic",
    title: { de: "Wirbelsäulenarthrose (Spondylose)", en: "Spondylosis" },
    summary: {
      de: "Altersbedingte Verschleißveränderungen der Wirbelsäule mit Schmerzen und Steifigkeit.",
      en: "Age-related wear changes of the spine with pain and stiffness.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Spondylose bezeichnet altersbedingte Verschleißveränderungen der Wirbelsäule: Höhenminderung der Bandscheiben, knöcherne Anbauten (Spondylophyten) und Verschleiß der kleinen Wirbelgelenke. Häufig verursacht sie Rücken- oder Nackenschmerzen und Steifigkeit; viele Veränderungen bleiben aber beschwerdefrei.",
          en: "Spondylosis refers to age-related wear changes of the spine: loss of disc height, bony spurs (spondylophytes) and wear of the small facet joints. It often causes back or neck pain and stiffness; many changes, however, remain symptom-free." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Gespräch und körperliche Untersuchung stehen im Vordergrund. Röntgen- oder Schnittbilder zeigen Verschleißveränderungen, die jedoch nicht immer mit den Beschwerden übereinstimmen.",
          en: "History and physical examination are central. X-rays or cross-sectional images show wear changes, which, however, do not always correspond to symptoms." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Im Vordergrund stehen Bewegung, Physiotherapie, Kräftigung und bedarfsgerechte Schmerzmittel. Injektionen können in ausgewählten Fällen helfen. Eine Operation wird nur bei relevanter Nerven- oder Rückenmarksbeengung erwogen.",
          en: "Movement, physiotherapy, strengthening and as-needed pain relief are central. Injections can help in selected cases. Surgery is considered only for relevant nerve or spinal-cord compression." } },
        { t: "p", text: {
          de: "Wichtig: Zunehmende neurologische Ausfälle, Gangunsicherheit oder Blasen- und Mastdarmstörungen erfordern eine rasche ärztliche Abklärung.",
          en: "Important: increasing neurological deficits, unsteady gait or bladder and bowel dysfunction require prompt medical assessment." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Wärmeanwendungen, Bewegung, Gewichtsmanagement und eine entzündungsarme Ernährung unterstützen die Behandlung. Pflanzliche schmerzlindernde Mittel sind ärztlich auf Eignung und Wechselwirkungen zu prüfen.",
          en: "Heat applications, movement, weight management and an anti-inflammatory diet support treatment. Herbal pain-relieving products should be medically reviewed for suitability and interactions." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden Verschleißbeschwerden Mustern wie Nieren-Schwäche und Kälte-Feuchtigkeit zugeordnet. Akupunktur und Wärmeanwendungen können begleitend Schmerzen lindern und die Beweglichkeit fördern.",
          en: "Traditionally, wear-related symptoms are assigned to patterns such as Kidney deficiency and cold-damp. Acupuncture and heat applications may complementarily ease pain and support mobility." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen Vata-beruhigende Maßnahmen im Vordergrund: warme Öl-Anwendungen, sanftes Yoga und eine regelmäßige, wärmende Ernährung. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, Vata-calming measures are emphasised: warm oil applications, gentle yoga and a regular, warming diet. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Beweglichkeit & Kräftigung", en: "Mobility & strengthening" } },
        { t: "p", text: {
          de: "Die Physiotherapie ist tragend: Mobilisation der Wirbelsäule, Kräftigung der Rumpf- und Rückenmuskulatur, Dehnung und Haltungsschulung verbessern Schmerz, Beweglichkeit und Alltagsfunktion. Regelmäßige Bewegung wirkt der Steifigkeit entgegen.",
          en: "Physiotherapy is a mainstay: spinal mobilisation, strengthening of the trunk and back muscles, stretching and posture training improve pain, mobility and everyday function. Regular movement counteracts stiffness." } },
        { t: "p", text: {
          de: "Ein individuelles Heimprogramm und ergonomische Beratung helfen, die Belastbarkeit zu erhalten und Beschwerdeschübe zu vermeiden.",
          en: "An individual home programme and ergonomic advice help maintain resilience and avoid symptom flares." } },
      ],
    },
  },

  {
    slug: "lumbar-spinal-stenosis",
    icd10: "M48.06",
    illustration: "generic",
    title: { de: "Spinalkanalstenose (Lendenwirbelsäule)", en: "Lumbar Spinal Stenosis" },
    summary: {
      de: "Verengung des Wirbelkanals mit belastungsabhängigen Bein- und Rückenschmerzen.",
      en: "Narrowing of the spinal canal with load-dependent leg and back pain.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der lumbalen Spinalkanalstenose ist der Wirbelkanal durch Verschleißveränderungen verengt, sodass Nervenstrukturen bedrängt werden. Typisch sind Rücken- und Beinschmerzen sowie Schwäche oder Taubheit, die sich beim Gehen und Stehen verstärken und beim Vorbeugen oder Sitzen bessern (Claudicatio spinalis).",
          en: "In lumbar spinal stenosis, the spinal canal is narrowed by wear changes, compressing nerve structures. Typical features are back and leg pain plus weakness or numbness that worsen on walking and standing and ease on bending forward or sitting (neurogenic claudication)." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Abklärung umfasst Gespräch, neurologische Untersuchung und Schnittbildgebung (MRT), die die Verengung darstellt. Gefäßbedingte Durchblutungsstörungen werden abgegrenzt.",
          en: "Assessment includes history, neurological examination and cross-sectional imaging (MRI) that shows the narrowing. Vascular circulatory problems are distinguished." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Zunächst konservativ: Physiotherapie, Kräftigung, Bewegung (z. B. Radfahren in leicht gebeugter Haltung), Schmerzmittel und ggf. Injektionen. Bei anhaltenden, stark einschränkenden Beschwerden oder zunehmenden Ausfällen kann eine operative Erweiterung des Kanals erwogen werden.",
          en: "Initially conservative: physiotherapy, strengthening, activity (e.g. cycling in a slightly bent posture), pain relief and injections if needed. For persistent, severely limiting symptoms or increasing deficits, surgical widening of the canal may be considered." } },
        { t: "p", text: {
          de: "Wichtig: Blasen- oder Mastdarmstörungen, Taubheit im Reithosenbereich oder rasch zunehmende Beinschwäche erfordern sofort den Notruf 112.",
          en: "Important: bladder or bowel dysfunction, numbness in the saddle region or rapidly increasing leg weakness require an immediate emergency call (112)." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Bewegung im schmerzarmen Rahmen, Gewichtsmanagement und Wärmeanwendungen unterstützen die Behandlung. Pflanzliche schmerzlindernde Mittel sind ärztlich auf Eignung und Wechselwirkungen zu prüfen.",
          en: "Movement within a low-pain range, weight management and heat applications support treatment. Herbal pain-relieving products should be medically reviewed for suitability and interactions." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden die Beschwerden Mustern wie Nieren-Schwäche sowie Qi- und Blut-Stagnation zugeordnet. Akupunktur kann begleitend Schmerzen lindern und ersetzt die Beobachtung neurologischer Ausfälle nicht.",
          en: "Traditionally, the symptoms are assigned to patterns such as Kidney deficiency and Qi and blood stagnation. Acupuncture may complementarily ease pain and does not replace monitoring of neurological deficits." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen Vata-beruhigende Maßnahmen im Vordergrund: warme Öl-Anwendungen, sanftes Yoga und eine wärmende Ernährung. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, Vata-calming measures are emphasised: warm oil applications, gentle yoga and a warming diet. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Beugeorientiertes Training", en: "Flexion-based training" } },
        { t: "p", text: {
          de: "Die Physiotherapie ist zentral: beugeorientierte Übungen, Kräftigung der Rumpf- und Rückenmuskulatur, Gehtraining und Verbesserung der Ausdauer (z. B. auf dem Fahrradergometer) erhöhen die schmerzfreie Gehstrecke und die Belastbarkeit.",
          en: "Physiotherapy is central: flexion-based exercises, strengthening of the trunk and back muscles, walking training and improving endurance (e.g. on a cycle ergometer) increase the pain-free walking distance and resilience." } },
        { t: "p", text: {
          de: "Ein individuelles Heimprogramm und Beratung zur Alltagsgestaltung helfen, die Mobilität zu erhalten und Beschwerden zu steuern.",
          en: "An individual home programme and advice on everyday planning help maintain mobility and manage symptoms." } },
      ],
    },
  },

  {
    slug: "scoliosis",
    icd10: "M41.9",
    illustration: "generic",
    title: { de: "Skoliose", en: "Scoliosis" },
    summary: {
      de: "Seitliche Verkrümmung und Verdrehung der Wirbelsäule, oft im Wachstumsalter erkannt.",
      en: "Sideways curvature and rotation of the spine, often detected during growth.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Skoliose ist eine seitliche Verkrümmung der Wirbelsäule mit begleitender Verdrehung der Wirbelkörper. Sie wird häufig im Wachstumsalter bemerkt, oft ohne erkennbare Ursache (idiopathisch). Leichte Formen verursachen meist keine Beschwerden; ausgeprägte Krümmungen können zu Fehlhaltung, Rückenschmerzen und selten zu Einschränkungen der Atmung führen.",
          en: "Scoliosis is a sideways curvature of the spine with accompanying rotation of the vertebrae. It is often noticed during growth, frequently without an identifiable cause (idiopathic). Mild forms usually cause no symptoms; pronounced curves can lead to postural changes, back pain and, rarely, breathing restrictions." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose stützt sich auf die körperliche Untersuchung (z. B. Vorbeugetest) und Röntgenbilder zur Messung des Krümmungswinkels. Bei Kindern und Jugendlichen wird das Wachstum und die Entwicklung der Krümmung beobachtet.",
          en: "Diagnosis rests on physical examination (e.g. forward-bending test) and X-rays to measure the curve angle. In children and adolescents, growth and the progression of the curve are monitored." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die Behandlung richtet sich nach Alter, Krümmungsgrad und Fortschreiten: von regelmäßiger Beobachtung über spezialisierte Physiotherapie und Korsettbehandlung im Wachstum bis zur Operation bei sehr ausgeprägten oder fortschreitenden Krümmungen.",
          en: "Treatment depends on age, curve degree and progression: from regular monitoring to specialised physiotherapy and bracing during growth, up to surgery for very pronounced or progressive curves." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Ergänzend sind eine aktive, bewegungsreiche Lebensweise, Gewichtsmanagement und Haltungsbewusstsein hilfreich. Naturheilkundliche Maßnahmen können Begleitbeschwerden wie Verspannungen lindern, beeinflussen die Krümmung selbst aber nicht.",
          en: "Complementary measures such as an active, movement-rich lifestyle, weight management and postural awareness are helpful. Naturopathic measures may ease accompanying tension but do not influence the curve itself." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "TCM-Verfahren wie Akupunktur können begleitend muskuläre Verspannungen und Rückenbeschwerden lindern. Sie beeinflussen die Wirbelsäulenkrümmung nicht und ersetzen die orthopädische Betreuung nicht.",
          en: "TCM approaches such as acupuncture may complementarily ease muscular tension and back symptoms. They do not influence the spinal curve and do not replace orthopaedic care." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen sanftes Yoga, Haltungsübungen und Vata-beruhigende Öl-Anwendungen zur Linderung von Verspannungen im Vordergrund. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, gentle yoga, postural exercises and Vata-calming oil applications to ease tension are emphasised. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Spezifische Skoliosetherapie", en: "Specific scoliosis therapy" } },
        { t: "p", text: {
          de: "Die Physiotherapie ist zentral: spezifische, an das Krümmungsmuster angepasste Übungen (z. B. nach Schroth), Kräftigung der Rumpfmuskulatur, Atem- und Haltungsschulung verbessern Körperwahrnehmung, Stabilität und Alltagsfunktion und können Beschwerden lindern.",
          en: "Physiotherapy is central: specific exercises adapted to the curve pattern (e.g. Schroth), trunk-muscle strengthening and breathing and posture training improve body awareness, stability and everyday function and can ease symptoms." } },
        { t: "p", text: {
          de: "Ein konsequentes, individuell angeleitetes Heimübungsprogramm und regelmäßige Bewegung sind für den langfristigen Erfolg entscheidend, insbesondere während des Wachstums und begleitend zur Korsetttherapie.",
          en: "A consistent, individually guided home exercise programme and regular movement are decisive for long-term success, especially during growth and alongside bracing." } },
      ],
    },
  },

  {
    slug: "shoulder-impingement-syndrome",
    icd10: "M75.4",
    illustration: "generic",
    title: { de: "Schulter-Impingement-Syndrom", en: "Shoulder Impingement Syndrome" },
    summary: {
      de: "Einklemmen von Sehnen unter dem Schulterdach mit Schmerzen beim Armheben.",
      en: "Pinching of tendons under the shoulder roof with pain on raising the arm.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Beim Impingement-Syndrom werden Sehnen und Schleimbeutel im Raum unter dem Schulterdach eingeengt und gereizt. Typisch sind Schmerzen beim seitlichen Armheben (schmerzhafter Bogen), beim Liegen auf der Schulter und bei Überkopfarbeiten. Ursachen sind Überlastung, Haltung, Verschleiß und selten knöcherne Engstellen.",
          en: "In impingement syndrome, tendons and the bursa in the space under the shoulder roof are narrowed and irritated. Typical features are pain on raising the arm sideways (painful arc), when lying on the shoulder and during overhead work. Causes are overload, posture, wear and rarely bony narrowing." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose stützt sich auf Beschwerden und gezielte Funktionstests. Ultraschall oder MRT können Sehnen und Schleimbeutel darstellen, sind aber nicht immer nötig.",
          en: "Diagnosis rests on symptoms and targeted functional tests. Ultrasound or MRI can show tendons and the bursa but are not always necessary." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die Behandlung ist überwiegend konservativ: Physiotherapie, Vermeidung auslösender Belastungen, entzündungshemmende Schmerzmittel und bei Bedarf gezielte Injektionen. Eine Operation wird nur in ausgewählten, therapieresistenten Fällen erwogen.",
          en: "Treatment is predominantly conservative: physiotherapy, avoiding provoking loads, anti-inflammatory pain relief and targeted injections if needed. Surgery is considered only in selected, treatment-resistant cases." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Kälte in der akuten Phase und Wärme bei Verspannung können lindern. Entlastung, ergonomische Anpassungen und eine entzündungsarme Ernährung unterstützen die Erholung. Pflanzliche Mittel sind ärztlich zu prüfen.",
          en: "Cold in the acute phase and heat for tension can ease symptoms. Relief of load, ergonomic adjustments and an anti-inflammatory diet support recovery. Herbal products should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden Schulterbeschwerden Mustern wie Qi- und Blut-Stagnation entlang der Meridiane zugeordnet. Akupunktur kann begleitend Schmerzen lindern und die Beweglichkeit fördern.",
          en: "Traditionally, shoulder symptoms are assigned to patterns such as Qi and blood stagnation along the channels. Acupuncture may complementarily ease pain and support mobility." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen warme Öl-Anwendungen im Schulterbereich, sanfte Bewegung und Vata-beruhigende Routinen im Vordergrund. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, warm oil applications over the shoulder, gentle movement and Vata-calming routines are emphasised. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Gezieltes Schultertraining", en: "Targeted shoulder training" } },
        { t: "p", text: {
          de: "Die Physiotherapie ist die tragende Behandlung: Kräftigung der Rotatorenmanschette und der schulterblattstabilisierenden Muskulatur, Verbesserung der Schulterblattkontrolle, Dehnung und Haltungsschulung entlasten den Raum unter dem Schulterdach und verbessern Schmerz und Funktion.",
          en: "Physiotherapy is the mainstay: strengthening the rotator cuff and the scapula-stabilising muscles, improving scapular control, stretching and posture training relieve the space under the shoulder roof and improve pain and function." } },
        { t: "p", text: {
          de: "Ein individuelles Heimübungsprogramm und die schrittweise Rückkehr zu Überkopfaktivitäten sichern den Erfolg und beugen Rückfällen vor.",
          en: "An individual home exercise programme and a gradual return to overhead activities secure success and prevent recurrences." } },
      ],
    },
  },

  {
    slug: "rotator-cuff-syndrome",
    icd10: "M75.1",
    illustration: "generic",
    title: { de: "Rotatorenmanschetten-Syndrom", en: "Rotator Cuff Syndrome" },
    summary: {
      de: "Reizung, Verschleiß oder Riss der Schultersehnen mit Schmerzen und Kraftverlust.",
      en: "Irritation, wear or tear of the shoulder tendons with pain and loss of strength.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Rotatorenmanschette ist eine Gruppe von Sehnen, die die Schulter führen und stabilisieren. Reizung, Verschleiß oder ein Riss verursachen Schmerzen (oft nachts und beim Armheben) sowie Kraftverlust. Ursachen sind Überlastung, altersbedingter Verschleiß und Verletzungen.",
          en: "The rotator cuff is a group of tendons that guide and stabilise the shoulder. Irritation, wear or a tear cause pain (often at night and on raising the arm) and loss of strength. Causes are overload, age-related wear and injuries." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Abklärung umfasst Beschwerden, gezielte Kraft- und Funktionstests und bei Bedarf Ultraschall oder MRT, um Ausmaß und Art der Sehnenschädigung zu beurteilen.",
          en: "Assessment includes symptoms, targeted strength and functional tests and, if needed, ultrasound or MRI to judge the extent and type of tendon damage." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Viele Beschwerden, auch kleinere Risse, bessern sich konservativ: Physiotherapie, Schmerzmittel und angepasste Belastung. Bei größeren oder unfallbedingten Rissen, jüngeren Betroffenen oder anhaltender Funktionseinschränkung kann eine operative Sehnennaht erwogen werden.",
          en: "Many symptoms, including smaller tears, improve with conservative care: physiotherapy, pain relief and adapted load. For larger or injury-related tears, younger patients or persistent functional loss, surgical tendon repair may be considered." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Kälte in der akuten Phase, Wärme bei Verspannung, Entlastung und eine entzündungsarme Ernährung unterstützen die Erholung. Pflanzliche Mittel sind ärztlich zu prüfen.",
          en: "Cold in the acute phase, heat for tension, relief of load and an anti-inflammatory diet support recovery. Herbal products should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden Schulterbeschwerden Mustern wie Qi- und Blut-Stagnation zugeordnet. Akupunktur kann begleitend Schmerzen lindern und ersetzt die gezielte Übungstherapie nicht.",
          en: "Traditionally, shoulder symptoms are assigned to patterns such as Qi and blood stagnation. Acupuncture may complementarily ease pain and does not replace targeted exercise therapy." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen warme Öl-Anwendungen, sanfte Bewegung und Vata-beruhigende Routinen im Vordergrund. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, warm oil applications, gentle movement and Vata-calming routines are emphasised. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Sehnenbelastbarkeit aufbauen", en: "Building tendon capacity" } },
        { t: "p", text: {
          de: "Die Physiotherapie ist zentral: schrittweise, angepasste Kräftigung der Rotatorenmanschette und der schulterblattstabilisierenden Muskulatur, Beweglichkeitsübungen und Verbesserung der Bewegungskontrolle verbessern Schmerz, Kraft und Funktion.",
          en: "Physiotherapy is central: gradual, adapted strengthening of the rotator cuff and the scapula-stabilising muscles, mobility exercises and improved movement control improve pain, strength and function." } },
        { t: "p", text: {
          de: "Ein individuell dosiertes Heimprogramm und die geduldige Steigerung der Belastung sind wichtig, da Sehnen langsam auf Trainingsreize reagieren.",
          en: "An individually dosed home programme and patient progression of load are important, as tendons respond slowly to training stimuli." } },
      ],
    },
  },

  {
    slug: "frozen-shoulder",
    icd10: "M75.0",
    illustration: "generic",
    title: { de: "Schultersteife (Frozen Shoulder)", en: "Frozen Shoulder" },
    summary: {
      de: "Schmerzhafte, zunehmende Versteifung der Schulter, die meist über viele Monate von selbst ausheilt.",
      en: "Painful, progressive stiffening of the shoulder that usually resolves on its own over many months.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der Schultersteife (adhäsive Kapsulitis) entzündet sich und schrumpft die Gelenkkapsel der Schulter. Typisch ist ein Verlauf in Phasen: zunehmender Schmerz, dann eine deutliche Einsteifung und schließlich eine langsame Besserung. Die Erkrankung kann von selbst auftreten oder nach Verletzungen; ein Diabetes begünstigt sie.",
          en: "In frozen shoulder (adhesive capsulitis), the joint capsule of the shoulder becomes inflamed and shrinks. A phased course is typical: increasing pain, then marked stiffening and finally slow improvement. It can arise on its own or after injuries; diabetes promotes it." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose ergibt sich vor allem aus dem typischen Verlauf und der Untersuchung (eingeschränkte aktive und passive Beweglichkeit). Bildgebung dient dem Ausschluss anderer Ursachen.",
          en: "Diagnosis follows mainly from the typical course and examination (restricted active and passive mobility). Imaging serves to exclude other causes." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Im Vordergrund stehen Schmerzlinderung, Erhalt der Beweglichkeit durch Physiotherapie und Geduld, da die Erkrankung meist von selbst ausheilt. Entzündungshemmende Mittel und gezielte Injektionen können in der schmerzhaften Phase helfen; selten sind weitere Verfahren nötig.",
          en: "Pain relief, maintaining mobility through physiotherapy and patience are central, as the condition usually resolves on its own. Anti-inflammatory medicines and targeted injections can help in the painful phase; rarely, further procedures are needed." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Wärmeanwendungen und sanfte Bewegung im schmerzarmen Rahmen können lindern. Eine entzündungsarme Ernährung und gute Blutzuckereinstellung bei Diabetes unterstützen die Erholung. Pflanzliche Mittel sind ärztlich zu prüfen.",
          en: "Heat applications and gentle movement within a low-pain range can ease symptoms. An anti-inflammatory diet and good blood-sugar control in diabetes support recovery. Herbal products should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird die Schultersteife Mustern wie Kälte-Feuchtigkeit und Qi- und Blut-Stagnation zugeordnet. Akupunktur und Wärmeanwendungen können begleitend Schmerzen lindern und die Beweglichkeit unterstützen.",
          en: "Traditionally, frozen shoulder is assigned to patterns such as cold-damp and Qi and blood stagnation. Acupuncture and heat applications may complementarily ease pain and support mobility." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen warme Öl-Anwendungen im Schulterbereich und sanfte, Vata-beruhigende Bewegungsübungen im Vordergrund. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, warm oil applications over the shoulder and gentle, Vata-calming movement exercises are emphasised. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Beweglichkeit erhalten", en: "Maintaining mobility" } },
        { t: "p", text: {
          de: "Die Physiotherapie ist zentral und wird der Phase angepasst: In der schmerzhaften Phase steht schonende, schmerzarme Mobilisation im Vordergrund, später folgen zunehmende Dehnung, Beweglichkeits- und Kräftigungsübungen. Aggressive Dehnung in der akuten Phase wird vermieden.",
          en: "Physiotherapy is central and adapted to the phase: in the painful phase, gentle, low-pain mobilisation is central; later, increasing stretching, mobility and strengthening exercises follow. Aggressive stretching in the acute phase is avoided." } },
        { t: "p", text: {
          de: "Ein regelmäßiges, geduldiges Heimübungsprogramm hilft, die Beweglichkeit zu erhalten und die Funktion über den oft langen Verlauf schrittweise wiederzugewinnen.",
          en: "A regular, patient home exercise programme helps maintain mobility and gradually regain function over the often long course." } },
      ],
    },
  },

  {
    slug: "lateral-epicondylitis-tennis-elbow",
    icd10: "M77.1",
    illustration: "generic",
    title: { de: "Tennisellenbogen (Epicondylitis lateralis)", en: "Tennis Elbow (Lateral Epicondylitis)" },
    summary: {
      de: "Schmerzhafte Sehnenreizung an der Außenseite des Ellenbogens durch Überlastung.",
      en: "Painful tendon irritation on the outer side of the elbow from overload.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Der Tennisellenbogen ist eine überlastungsbedingte Reizung der Sehnenansätze der Handstreckmuskeln an der Außenseite des Ellenbogens. Typisch sind Schmerzen an der Außenseite, die bei Greifen, Heben und Drehbewegungen des Unterarms zunehmen. Er tritt oft bei wiederholten Belastungen in Beruf, Haushalt oder Sport auf.",
          en: "Tennis elbow is an overload-related irritation of the wrist-extensor tendon attachments on the outer side of the elbow. Typical features are pain on the outer side that increases with gripping, lifting and rotating the forearm. It often arises from repeated loads at work, home or in sport." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose ergibt sich aus Beschwerden und gezielten Tests (Druckschmerz, schmerzhafte Handgelenkstreckung gegen Widerstand). Bildgebung ist meist nicht nötig.",
          en: "Diagnosis follows from symptoms and targeted tests (pressure pain, painful resisted wrist extension). Imaging is usually unnecessary." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die Beschwerden bessern sich meist konservativ und oft von selbst: relative Entlastung, Physiotherapie mit gezieltem Krafttraining, bei Bedarf entzündungshemmende Mittel und eine Epicondylitis-Spange. Injektionen werden zurückhaltend eingesetzt; eine Operation ist nur selten nötig.",
          en: "Symptoms usually improve conservatively and often on their own: relative relief, physiotherapy with targeted strength training, anti-inflammatory medicines if needed and a forearm brace. Injections are used sparingly; surgery is only rarely needed." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Kälteanwendungen bei akuter Reizung, Entlastung und eine entzündungsarme Ernährung können unterstützen. Pflanzliche entzündungshemmende Mittel sind ärztlich auf Eignung zu prüfen.",
          en: "Cold applications for acute irritation, relief of load and an anti-inflammatory diet can help. Herbal anti-inflammatory products should be medically reviewed for suitability." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird der Tennisellenbogen Mustern wie Qi- und Blut-Stagnation entlang der Arm-Meridiane zugeordnet. Akupunktur kann begleitend Schmerzen lindern und ersetzt die Übungstherapie nicht.",
          en: "Traditionally, tennis elbow is assigned to patterns such as Qi and blood stagnation along the arm channels. Acupuncture may complementarily ease pain and does not replace exercise therapy." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen warme Öl-Anwendungen am Unterarm und Vata-beruhigende Routinen im Vordergrund. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, warm oil applications on the forearm and Vata-calming routines are emphasised. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Belastungsdosiertes Krafttraining", en: "Load-dosed strength training" } },
        { t: "p", text: {
          de: "Die Physiotherapie ist zentral: gezieltes, langsam gesteigertes Krafttraining der Unterarmmuskulatur (insbesondere exzentrisch), Dehnung und die Anpassung auslösender Bewegungsabläufe verbessern Schmerz und Belastbarkeit der Sehne nachhaltig.",
          en: "Physiotherapy is central: targeted, slowly progressed strength training of the forearm muscles (especially eccentric), stretching and adjusting provoking movement patterns durably improve pain and tendon capacity." } },
        { t: "p", text: {
          de: "Geduld ist wichtig, da Sehnen langsam reagieren. Ergonomische Anpassungen am Arbeitsplatz und ein Heimübungsprogramm beugen Rückfällen vor.",
          en: "Patience is important, as tendons respond slowly. Ergonomic adjustments at work and a home exercise programme prevent recurrences." } },
      ],
    },
  },

  {
    slug: "medial-epicondylitis-golfers-elbow",
    icd10: "M77.0",
    illustration: "generic",
    title: { de: "Golferellenbogen (Epicondylitis medialis)", en: "Golfer's Elbow (Medial Epicondylitis)" },
    summary: {
      de: "Schmerzhafte Sehnenreizung an der Innenseite des Ellenbogens durch Überlastung.",
      en: "Painful tendon irritation on the inner side of the elbow from overload.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Der Golferellenbogen ist eine überlastungsbedingte Reizung der Sehnenansätze der Handbeuger an der Innenseite des Ellenbogens. Typisch sind Schmerzen an der Innenseite, die bei Greifen, Beugen des Handgelenks und Drehbewegungen zunehmen. Ursache sind meist wiederholte Belastungen in Beruf, Sport oder Alltag.",
          en: "Golfer's elbow is an overload-related irritation of the wrist-flexor tendon attachments on the inner side of the elbow. Typical features are pain on the inner side that increases with gripping, bending the wrist and rotating. The cause is usually repeated loads at work, in sport or daily life." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose ergibt sich aus Beschwerden und gezielten Tests (Druckschmerz, schmerzhafte Handgelenkbeugung gegen Widerstand). Bildgebung ist meist nicht nötig.",
          en: "Diagnosis follows from symptoms and targeted tests (pressure pain, painful resisted wrist flexion). Imaging is usually unnecessary." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die Behandlung entspricht weitgehend dem Tennisellenbogen: relative Entlastung, Physiotherapie mit gezieltem Krafttraining, bei Bedarf entzündungshemmende Mittel und eine Spange. Injektionen werden zurückhaltend eingesetzt; eine Operation ist selten nötig.",
          en: "Treatment largely mirrors tennis elbow: relative relief, physiotherapy with targeted strength training, anti-inflammatory medicines if needed and a brace. Injections are used sparingly; surgery is rarely needed." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Kälteanwendungen bei akuter Reizung, Entlastung und eine entzündungsarme Ernährung können unterstützen. Pflanzliche entzündungshemmende Mittel sind ärztlich auf Eignung zu prüfen.",
          en: "Cold applications for acute irritation, relief of load and an anti-inflammatory diet can help. Herbal anti-inflammatory products should be medically reviewed for suitability." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird der Golferellenbogen Mustern wie Qi- und Blut-Stagnation entlang der Arm-Meridiane zugeordnet. Akupunktur kann begleitend Schmerzen lindern und ersetzt die Übungstherapie nicht.",
          en: "Traditionally, golfer's elbow is assigned to patterns such as Qi and blood stagnation along the arm channels. Acupuncture may complementarily ease pain and does not replace exercise therapy." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen warme Öl-Anwendungen am Unterarm und Vata-beruhigende Routinen im Vordergrund. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, warm oil applications on the forearm and Vata-calming routines are emphasised. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Belastungsdosiertes Krafttraining", en: "Load-dosed strength training" } },
        { t: "p", text: {
          de: "Die Physiotherapie ist zentral: gezieltes, langsam gesteigertes Krafttraining der Handbeuger (insbesondere exzentrisch), Dehnung und die Anpassung auslösender Bewegungen verbessern Schmerz und Belastbarkeit der Sehne.",
          en: "Physiotherapy is central: targeted, slowly progressed strength training of the wrist flexors (especially eccentric), stretching and adjusting provoking movements improve pain and tendon capacity." } },
        { t: "p", text: {
          de: "Wie beim Tennisellenbogen ist Geduld wichtig. Ergonomische Anpassungen und ein Heimübungsprogramm beugen Rückfällen vor.",
          en: "As with tennis elbow, patience is important. Ergonomic adjustments and a home exercise programme prevent recurrences." } },
      ],
    },
  },

  {
    slug: "carpal-tunnel-syndrome",
    icd10: "G56.0",
    illustration: "generic",
    title: { de: "Karpaltunnelsyndrom", en: "Carpal Tunnel Syndrome" },
    summary: {
      de: "Einengung des Mittelnervs am Handgelenk mit Kribbeln und Taubheit der Hand.",
      en: "Compression of the median nerve at the wrist with tingling and numbness of the hand.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Beim Karpaltunnelsyndrom wird der Mittelnerv (Nervus medianus) im engen Kanal am Handgelenk eingeengt. Typisch sind nächtliches Kribbeln, Taubheit und Schmerzen in Daumen, Zeige- und Mittelfinger, oft mit Besserung durch Ausschütteln der Hand; im Verlauf können Kraftverlust und Muskelschwund des Daumenballens auftreten.",
          en: "In carpal tunnel syndrome, the median nerve is compressed in the narrow canal at the wrist. Typical features are night-time tingling, numbness and pain in the thumb, index and middle fingers, often relieved by shaking the hand; over time, loss of strength and wasting of the thumb muscles can occur." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose stützt sich auf typische Beschwerden und Untersuchung; eine Messung der Nervenleitung (Elektroneurografie) sichert sie und beurteilt den Schweregrad.",
          en: "Diagnosis rests on typical symptoms and examination; a nerve conduction study (electroneurography) confirms it and grades severity." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Bei leichten Beschwerden helfen eine nächtliche Handgelenkschiene, Anpassung belastender Tätigkeiten und bei Bedarf eine Injektion. Bei ausgeprägten oder anhaltenden Beschwerden, Kraftverlust oder Muskelschwund ist eine operative Entlastung des Nervs wirksam und entlastet dauerhaft.",
          en: "For mild symptoms, a night-time wrist splint, adjusting straining activities and an injection if needed help. For marked or persistent symptoms, loss of strength or muscle wasting, surgical decompression of the nerve is effective and provides lasting relief." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Entlastung wiederholter Handgelenksbelastungen, ergonomische Anpassungen und eine nächtliche Schiene können Beschwerden lindern. Pflanzliche Mittel sind ärztlich zu prüfen und ersetzen die Abklärung nicht.",
          en: "Relieving repetitive wrist loads, ergonomic adjustments and a night splint can ease symptoms. Herbal products should be medically reviewed and do not replace assessment." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden die Beschwerden Mustern wie Qi- und Blut-Stagnation entlang der Handmeridiane zugeordnet. Akupunktur kann begleitend Beschwerden lindern und ersetzt bei fortgeschrittenem Befund die Entlastung des Nervs nicht.",
          en: "Traditionally, the symptoms are assigned to patterns such as Qi and blood stagnation along the hand channels. Acupuncture may complementarily ease symptoms and does not replace nerve decompression in advanced cases." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen warme Öl-Anwendungen an Hand und Unterarm sowie Vata-beruhigende Routinen im Vordergrund. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, warm oil applications on the hand and forearm and Vata-calming routines are emphasised. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Nervengleiten & Ergonomie", en: "Nerve gliding & ergonomics" } },
        { t: "p", text: {
          de: "Die Physio- und Ergotherapie kann bei leichten bis mittleren Beschwerden helfen: Nervengleitübungen, Sehnengleitübungen, Dehnung, Anpassung von Handgelenksbelastungen und ergonomische Beratung lindern Beschwerden und unterstützen die Funktion.",
          en: "Physio- and occupational therapy can help in mild to moderate cases: nerve-gliding exercises, tendon-gliding exercises, stretching, adjusting wrist loads and ergonomic advice ease symptoms and support function." } },
        { t: "p", text: {
          de: "Nach einer Operation unterstützt die Handtherapie die Wiederherstellung von Beweglichkeit und Kraft. Ein Heimübungsprogramm sichert den Erfolg.",
          en: "After surgery, hand therapy supports the recovery of mobility and strength. A home exercise programme secures success." } },
      ],
    },
  },

  {
    slug: "de-quervain-tenosynovitis",
    icd10: "M65.4",
    illustration: "generic",
    title: { de: "Sehnenscheidenentzündung (De-Quervain)", en: "De Quervain's Tenosynovitis" },
    summary: {
      de: "Schmerzhafte Reizung der Daumensehnen am Handgelenk, oft durch wiederholte Belastung.",
      en: "Painful irritation of the thumb tendons at the wrist, often from repetitive load.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die De-Quervain-Tendovaginitis ist eine schmerzhafte Reizung des Sehnenfachs der Daumensehnen an der Daumenseite des Handgelenks. Typisch sind Schmerzen beim Greifen, Abspreizen des Daumens und bei Drehbewegungen, oft mit Schwellung. Sie tritt häufig bei wiederholten Belastungen auf, etwa beim Tragen von Kleinkindern.",
          en: "De Quervain's tenosynovitis is a painful irritation of the tendon compartment of the thumb tendons on the thumb side of the wrist. Typical features are pain on gripping, spreading the thumb and rotating, often with swelling. It often arises from repeated loads, such as carrying small children." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose ergibt sich aus Beschwerden und einem gezielten Test (Finkelstein-Test). Bildgebung ist meist nicht nötig; Ultraschall kann die Sehnenscheide darstellen.",
          en: "Diagnosis follows from symptoms and a targeted test (Finkelstein test). Imaging is usually unnecessary; ultrasound can show the tendon sheath." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Konservativ stehen relative Entlastung, eine Daumen-Handgelenk-Schiene, Physiotherapie und entzündungshemmende Mittel im Vordergrund; eine gezielte Injektion ist oft wirksam. Bei anhaltenden Beschwerden kommt ein kleiner operativer Eingriff infrage.",
          en: "Conservatively, relative relief, a thumb-wrist splint, physiotherapy and anti-inflammatory medicines are central; a targeted injection is often effective. For persistent symptoms, a minor surgical procedure is an option." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Kälteanwendungen bei akuter Reizung, Entlastung und eine entzündungsarme Ernährung können unterstützen. Pflanzliche entzündungshemmende Mittel sind ärztlich zu prüfen.",
          en: "Cold applications for acute irritation, relief of load and an anti-inflammatory diet can help. Herbal anti-inflammatory products should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird die Sehnenreizung Mustern wie Qi- und Blut-Stagnation zugeordnet. Akupunktur kann begleitend Schmerzen lindern und ersetzt Entlastung und Schienung nicht.",
          en: "Traditionally, tendon irritation is assigned to patterns such as Qi and blood stagnation. Acupuncture may complementarily ease pain and does not replace relief and splinting." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen warme Öl-Anwendungen an Hand und Handgelenk sowie Vata-beruhigende Routinen im Vordergrund. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, warm oil applications on the hand and wrist and Vata-calming routines are emphasised. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Entlastung & Aufbau", en: "Relief & rebuilding" } },
        { t: "p", text: {
          de: "Die Physio- und Ergotherapie ist zentral: anfangs relative Entlastung und Schienung, dann schrittweise Dehnung und gezielte, dosierte Kräftigung der Daumen- und Handgelenksmuskulatur sowie das Anpassen belastender Bewegungsabläufe im Alltag.",
          en: "Physio- and occupational therapy is central: initially relative relief and splinting, then gradual stretching and targeted, dosed strengthening of the thumb and wrist muscles, plus adjusting straining everyday movement patterns." } },
        { t: "p", text: {
          de: "Ergonomische Beratung (z. B. zu Trage- und Greiftechniken) und ein Heimübungsprogramm unterstützen die Erholung und beugen Rückfällen vor.",
          en: "Ergonomic advice (e.g. on carrying and gripping techniques) and a home exercise programme support recovery and prevent recurrences." } },
      ],
    },
  },

  {
    slug: "trigger-finger",
    icd10: "M65.3",
    illustration: "generic",
    title: { de: "Schnellender Finger", en: "Trigger Finger" },
    summary: {
      de: "Verdickte Beugesehne, die den Finger blockiert und ruckartig schnappen lässt.",
      en: "A thickened flexor tendon that blocks the finger and makes it snap.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Beim schnellenden Finger gleitet eine verdickte Beugesehne nur schwer durch ihr Ringband. Typisch sind ein Schnappen oder Blockieren des Fingers beim Beugen und Strecken, ein tastbarer Knoten in der Handfläche und morgendliche Steifigkeit. Er kann einzelne oder mehrere Finger betreffen und ist bei Diabetes häufiger.",
          en: "In trigger finger, a thickened flexor tendon slides only with difficulty through its pulley. Typical features are snapping or locking of the finger on bending and straightening, a palpable nodule in the palm and morning stiffness. It can affect one or several fingers and is more common in diabetes." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose ergibt sich aus den typischen Beschwerden und der Untersuchung. Bildgebung ist in der Regel nicht nötig.",
          en: "Diagnosis follows from the typical symptoms and examination. Imaging is generally unnecessary." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Konservativ stehen eine Schiene, Entlastung, Dehn- und Gleitübungen sowie entzündungshemmende Mittel im Vordergrund; eine gezielte Injektion ist oft wirksam. Bei anhaltender Blockade hilft ein kleiner operativer Eingriff (Spaltung des Ringbands) zuverlässig.",
          en: "Conservatively, a splint, relief, stretching and gliding exercises and anti-inflammatory medicines are central; a targeted injection is often effective. For persistent locking, a minor surgical procedure (release of the pulley) reliably helps." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Wärme, sanfte Bewegung und eine entzündungsarme Ernährung können Beschwerden lindern; eine gute Blutzuckereinstellung bei Diabetes ist hilfreich. Pflanzliche Mittel sind ärztlich zu prüfen.",
          en: "Heat, gentle movement and an anti-inflammatory diet can ease symptoms; good blood-sugar control in diabetes is helpful. Herbal products should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird die Sehnenreizung Mustern wie Qi- und Blut-Stagnation zugeordnet. Akupunktur kann begleitend Beschwerden lindern und ersetzt die gezielte Behandlung nicht.",
          en: "Traditionally, tendon irritation is assigned to patterns such as Qi and blood stagnation. Acupuncture may complementarily ease symptoms and does not replace targeted treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen warme Öl-Anwendungen an Hand und Fingern sowie Vata-beruhigende Routinen im Vordergrund. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, warm oil applications on the hand and fingers and Vata-calming routines are emphasised. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Gleit- & Dehnübungen", en: "Gliding & stretching exercises" } },
        { t: "p", text: {
          de: "Die Physio- und Ergotherapie kann bei leichteren Formen helfen: Sehnengleitübungen, sanfte Dehnung, Beweglichkeitsübungen und das Anpassen belastender Greiftätigkeiten lindern das Schnappen und verbessern die Fingerfunktion.",
          en: "Physio- and occupational therapy can help in milder forms: tendon-gliding exercises, gentle stretching, mobility exercises and adjusting straining gripping activities ease the snapping and improve finger function." } },
        { t: "p", text: {
          de: "Nach einer Operation unterstützt die Handtherapie die zügige Wiederherstellung der Beweglichkeit. Ein Heimübungsprogramm sichert das Ergebnis.",
          en: "After surgery, hand therapy supports a prompt recovery of mobility. A home exercise programme secures the result." } },
      ],
    },
  },

  {
    slug: "ganglion-cyst",
    icd10: "M67.4",
    illustration: "generic",
    title: { de: "Überbein (Ganglion)", en: "Ganglion Cyst" },
    summary: {
      de: "Gutartige, flüssigkeitsgefüllte Zyste an Gelenk oder Sehnenscheide, meist am Handgelenk.",
      en: "A benign, fluid-filled cyst at a joint or tendon sheath, usually at the wrist.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Ein Ganglion (Überbein) ist eine gutartige, mit gallertartiger Flüssigkeit gefüllte Zyste, die von einer Gelenkkapsel oder Sehnenscheide ausgeht – am häufigsten am Handgelenk. Es zeigt sich als prall-elastische Schwellung, die in der Größe schwanken kann; oft ist es beschwerdefrei, manchmal verursacht es Druckgefühl oder Schmerzen.",
          en: "A ganglion cyst is a benign, gel-filled cyst arising from a joint capsule or tendon sheath – most commonly at the wrist. It appears as a firm-elastic swelling that can fluctuate in size; often it is symptom-free, sometimes it causes a feeling of pressure or pain." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose ergibt sich meist aus der Untersuchung; Ultraschall bestätigt die flüssigkeitsgefüllte Zyste und grenzt andere Ursachen ab.",
          en: "Diagnosis usually follows from examination; ultrasound confirms the fluid-filled cyst and distinguishes other causes." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Beschwerdefreie Ganglien bedürfen oft keiner Behandlung und können sich von selbst zurückbilden. Bei Beschwerden kommen Beobachtung, Punktion (mit Rückfallneigung) oder eine operative Entfernung infrage. Das eigenständige Zerdrücken wird nicht empfohlen.",
          en: "Symptom-free ganglia often need no treatment and may resolve on their own. For symptoms, observation, aspiration (with a tendency to recur) or surgical removal are options. Self-crushing is not recommended." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Bei beschwerdefreien Ganglien genügt oft abwartendes Beobachten. Entlastung wiederholter Belastungen kann Druckbeschwerden lindern. Naturheilkundliche Mittel beeinflussen die Zyste selbst nicht.",
          en: "For symptom-free ganglia, watchful waiting is often sufficient. Relieving repetitive loads can ease pressure symptoms. Naturopathic products do not influence the cyst itself." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden Schwellungen mit Feuchtigkeit und Qi-Stagnation in Verbindung gebracht. Akupunktur kann allenfalls begleitend bei Druckbeschwerden eingesetzt werden und ersetzt die ärztliche Beurteilung nicht.",
          en: "Traditionally, swellings are associated with dampness and Qi stagnation. Acupuncture may at most be used complementarily for pressure symptoms and does not replace medical evaluation." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch können sanfte, warme Öl-Anwendungen als Wohlfühlmaßnahme dienen. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen und beeinflussen die Zyste nicht.",
          en: "In Ayurveda, gentle, warm oil applications may serve as a comfort measure. Herbal preparations should be medically reviewed for interactions and do not influence the cyst." } },
      ],
      physio: [
        { t: "sub", text: { de: "Funktion & Entlastung", en: "Function & relief" } },
        { t: "p", text: {
          de: "Die Physio- und Ergotherapie zielt bei Beschwerden auf Erhalt von Beweglichkeit und Kraft sowie auf das Anpassen belastender Bewegungen. Bei eingeschränkter Handgelenksfunktion können gezielte Mobilisations- und Kräftigungsübungen helfen.",
          en: "When symptomatic, physio- and occupational therapy aims to maintain mobility and strength and to adjust straining movements. For restricted wrist function, targeted mobilisation and strengthening exercises can help." } },
        { t: "p", text: {
          de: "Nach einer operativen Entfernung unterstützt die Handtherapie die Wiederherstellung von Beweglichkeit und Belastbarkeit.",
          en: "After surgical removal, hand therapy supports the recovery of mobility and load capacity." } },
      ],
    },
  },

  {
    slug: "knee-meniscus-lesion",
    icd10: "M23.2",
    illustration: "generic",
    title: { de: "Meniskusschaden", en: "Meniscus Lesion" },
    summary: {
      de: "Riss oder Verschleiß des Meniskus im Knie mit Schmerzen, Blockaden oder Schwellung.",
      en: "A tear or wear of the meniscus in the knee with pain, locking or swelling.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Der Meniskus ist eine halbmondförmige Knorpelscheibe, die als Puffer im Kniegelenk dient. Ein Schaden entsteht durch Verletzung (z. B. Verdrehung) oder altersbedingten Verschleiß. Typisch sind Schmerzen am Gelenkspalt, Schwellung, Einklemmungsgefühl und manchmal eine Blockade des Knies.",
          en: "The meniscus is a crescent-shaped cartilage disc that acts as a cushion in the knee joint. Damage arises from injury (e.g. twisting) or age-related wear. Typical features are pain at the joint line, swelling, a catching sensation and sometimes locking of the knee." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Abklärung umfasst Beschwerden, gezielte Untersuchungstests und bei Bedarf eine MRT. Bildbefund und Beschwerden stimmen, besonders bei Verschleiß, nicht immer überein.",
          en: "Assessment includes symptoms, targeted examination tests and, if needed, MRI. Imaging findings and symptoms, especially with wear, do not always match." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Bei verschleißbedingten Rissen ist die konservative Behandlung (Physiotherapie, Kräftigung, angepasste Belastung, Schmerzmittel) oft ebenso wirksam wie eine Operation. Bei echten Blockaden, größeren verletzungsbedingten Rissen oder jungen Aktiven wird eine gelenkspiegelnde Operation (Arthroskopie) erwogen.",
          en: "For wear-related tears, conservative care (physiotherapy, strengthening, adapted load, pain relief) is often as effective as surgery. For true locking, larger injury-related tears or young active people, an arthroscopic operation is considered." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Kälte in der akuten Phase, Entlastung, Gewichtsmanagement und eine entzündungsarme Ernährung unterstützen die Erholung. Pflanzliche Mittel sind ärztlich zu prüfen.",
          en: "Cold in the acute phase, relief of load, weight management and an anti-inflammatory diet support recovery. Herbal products should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden Kniebeschwerden Mustern wie Qi- und Blut-Stagnation sowie Kälte-Feuchtigkeit zugeordnet. Akupunktur kann begleitend Schmerzen lindern und ersetzt die aktive Übungstherapie nicht.",
          en: "Traditionally, knee symptoms are assigned to patterns such as Qi and blood stagnation and cold-damp. Acupuncture may complementarily ease pain and does not replace active exercise therapy." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen warme Öl-Anwendungen am Knie, sanfte Bewegung und Vata-beruhigende Routinen im Vordergrund. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, warm oil applications on the knee, gentle movement and Vata-calming routines are emphasised. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Kräftigung & Stabilität", en: "Strengthening & stability" } },
        { t: "p", text: {
          de: "Die Physiotherapie ist eine tragende, oft erste Behandlung: Kräftigung der Oberschenkel- und Hüftmuskulatur, Verbesserung von Balance und Bewegungskontrolle sowie schrittweise gesteigerte Belastung verbessern Schmerz und Funktion, häufig ohne Operation.",
          en: "Physiotherapy is a mainstay and often first-line treatment: strengthening the thigh and hip muscles, improving balance and movement control, and gradually increased load improve pain and function, frequently without surgery." } },
        { t: "p", text: {
          de: "Nach einer Operation begleitet die Physiotherapie den stufenweisen Wiederaufbau von Beweglichkeit, Kraft und Belastbarkeit. Ein Heimprogramm sichert den Erfolg.",
          en: "After surgery, physiotherapy guides the staged rebuilding of mobility, strength and load capacity. A home programme secures success." } },
      ],
    },
  },

  {
    slug: "bursitis",
    icd10: "M71.9",
    illustration: "generic",
    title: { de: "Schleimbeutelentzündung (Bursitis)", en: "Bursitis" },
    summary: {
      de: "Entzündung eines Schleimbeutels mit Schwellung, Schmerz und Überwärmung über einem Gelenk.",
      en: "Inflammation of a bursa with swelling, pain and warmth over a joint.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Schleimbeutel sind kleine, flüssigkeitsgefüllte Polster, die Reibung zwischen Knochen, Sehnen und Haut verringern. Eine Bursitis ist ihre Entzündung, häufig an Ellenbogen, Knie, Schulter oder Hüfte. Typisch sind Schwellung, Druckschmerz und Überwärmung. Ursachen sind Druck- oder Überlastung, Verletzung, seltener eine Infektion oder rheumatische Erkrankung.",
          en: "Bursae are small, fluid-filled cushions that reduce friction between bone, tendons and skin. Bursitis is their inflammation, commonly at the elbow, knee, shoulder or hip. Typical features are swelling, pressure pain and warmth. Causes are pressure or overload, injury, and less often infection or rheumatic disease." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose ergibt sich meist aus der Untersuchung; Ultraschall kann helfen. Bei Verdacht auf eine bakterielle Entzündung (starke Rötung, Überwärmung, Fieber) ist eine rasche Abklärung nötig.",
          en: "Diagnosis usually follows from examination; ultrasound can help. If bacterial infection is suspected (marked redness, warmth, fever), prompt assessment is needed." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Konservativ stehen Entlastung, Kühlung, entzündungshemmende Mittel und das Meiden von Druck im Vordergrund; bei Bedarf werden Punktion oder Injektion eingesetzt. Eine bakterielle Bursitis erfordert Antibiotika und ggf. eine Entlastung; selten ist eine Operation nötig.",
          en: "Conservatively, relief of load, cooling, anti-inflammatory medicines and avoiding pressure are central; aspiration or injection are used if needed. Bacterial bursitis requires antibiotics and, if needed, drainage; surgery is rarely necessary." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Kühlung, Entlastung und schützende Polsterung lindern Beschwerden. Eine entzündungsarme Ernährung kann unterstützen. Pflanzliche entzündungshemmende Mittel sind ärztlich zu prüfen.",
          en: "Cooling, relief of load and protective padding ease symptoms. An anti-inflammatory diet can help. Herbal anti-inflammatory products should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden Schwellung und Entzündung mit Feuchtigkeit-Hitze und Qi-Stagnation in Verbindung gebracht. Akupunktur kann begleitend Beschwerden lindern und ersetzt bei Infektverdacht die medizinische Behandlung nicht.",
          en: "Traditionally, swelling and inflammation are associated with damp-heat and Qi stagnation. Acupuncture may complementarily ease symptoms and does not replace medical treatment when infection is suspected." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen kühlende bzw. beruhigende Anwendungen je nach Beschwerdebild und eine ausgewogene Ernährung im Vordergrund. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, cooling or calming applications depending on the picture and a balanced diet are emphasised. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Entlastung & Wiederaufbau", en: "Relief & rebuilding" } },
        { t: "p", text: {
          de: "Die Physiotherapie unterstützt die Erholung: nach Abklingen der akuten Entzündung Beweglichkeits- und gezielte Kräftigungsübungen, Verbesserung der Bewegungsabläufe und Anpassung auslösender Belastungen, um Rückfälle zu vermeiden.",
          en: "Physiotherapy supports recovery: after the acute inflammation subsides, mobility and targeted strengthening exercises, improving movement patterns and adjusting provoking loads to avoid recurrences." } },
        { t: "p", text: {
          de: "Beratung zu Polsterung, Ergonomie und Belastungsdosierung sowie ein Heimübungsprogramm sichern den langfristigen Erfolg.",
          en: "Advice on padding, ergonomics and load dosing and a home exercise programme secure long-term success." } },
      ],
    },
  },

  {
    slug: "plantar-fasciitis",
    icd10: "M72.2",
    illustration: "generic",
    title: { de: "Plantarfasziitis (Fersenschmerz)", en: "Plantar Fasciitis" },
    summary: {
      de: "Reizung der Fußsohlensehnenplatte mit typischem Fersenschmerz bei den ersten Schritten.",
      en: "Irritation of the sole's tendon plate with typical heel pain on the first steps.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Plantarfasziitis ist eine überlastungsbedingte Reizung der Sehnenplatte an der Fußsohle (Plantarfaszie) am Ansatz der Ferse. Typisch ist ein stechender Fersenschmerz bei den ersten Schritten am Morgen oder nach Ruhe, der sich bei Bewegung zunächst bessert und bei längerer Belastung wieder zunimmt.",
          en: "Plantar fasciitis is an overload-related irritation of the tendon plate on the sole of the foot (plantar fascia) at its heel attachment. Typical is a sharp heel pain on the first steps in the morning or after rest, which initially eases with movement and increases again with prolonged load." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose ergibt sich aus den typischen Beschwerden und der Untersuchung. Bildgebung ist meist nicht nötig; ein Fersensporn im Röntgenbild ist ein häufiger, oft harmloser Nebenbefund.",
          en: "Diagnosis follows from the typical symptoms and examination. Imaging is usually unnecessary; a heel spur on X-ray is a common, often harmless incidental finding." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die Behandlung ist konservativ und meist erfolgreich: Dehnübungen, Kräftigung, angepasstes Schuhwerk und Einlagen, Belastungssteuerung, bei Bedarf entzündungshemmende Mittel. Bei hartnäckigen Beschwerden können Stoßwellentherapie oder in Einzelfällen Injektionen erwogen werden.",
          en: "Treatment is conservative and usually successful: stretching exercises, strengthening, adapted footwear and insoles, load management and anti-inflammatory medicines if needed. For stubborn symptoms, shockwave therapy or, in individual cases, injections may be considered." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Kühlung (z. B. Rollen des Fußes über eine kalte Flasche), Entlastung, Gewichtsmanagement und geeignetes Schuhwerk lindern Beschwerden. Pflanzliche entzündungshemmende Mittel sind ärztlich zu prüfen.",
          en: "Cooling (e.g. rolling the foot over a cold bottle), relief of load, weight management and suitable footwear ease symptoms. Herbal anti-inflammatory products should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird der Fersenschmerz Mustern wie Nieren-Schwäche sowie Qi- und Blut-Stagnation zugeordnet. Akupunktur kann begleitend Schmerzen lindern und ersetzt die Dehn- und Übungstherapie nicht.",
          en: "Traditionally, heel pain is assigned to patterns such as Kidney deficiency and Qi and blood stagnation. Acupuncture may complementarily ease pain and does not replace stretching and exercise therapy." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen warme Öl-Anwendungen am Fuß und Vata-beruhigende Routinen im Vordergrund. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, warm oil applications on the foot and Vata-calming routines are emphasised. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Dehnung & Kräftigung", en: "Stretching & strengthening" } },
        { t: "p", text: {
          de: "Die Physiotherapie ist zentral: gezielte Dehnung von Plantarfaszie und Wadenmuskulatur, kräftigende Übungen für Fuß und Wade (z. B. Fersenheben mit dosierter Steigerung) sowie Belastungssteuerung verbessern Schmerz und Belastbarkeit nachhaltig.",
          en: "Physiotherapy is central: targeted stretching of the plantar fascia and calf muscles, strengthening exercises for the foot and calf (e.g. heel raises with dosed progression) and load management durably improve pain and capacity." } },
        { t: "p", text: {
          de: "Geduld und Konsequenz sind wichtig, da die Erholung Wochen bis Monate dauern kann. Ein Heimübungsprogramm und Schuhberatung sichern den Erfolg.",
          en: "Patience and consistency are important, as recovery can take weeks to months. A home exercise programme and footwear advice secure success." } },
      ],
    },
  },

  {
    slug: "achilles-tendinopathy",
    icd10: "M76.6",
    illustration: "generic",
    title: { de: "Achillessehnen-Tendinopathie", en: "Achilles Tendinopathy" },
    summary: {
      de: "Schmerzhafter Verschleiß der Achillessehne durch Überlastung, oft bei Läufern.",
      en: "Painful wear of the Achilles tendon from overload, often in runners.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Achillessehnen-Tendinopathie ist eine überlastungsbedingte, schmerzhafte Veränderung der Achillessehne. Typisch sind Schmerzen und Steifigkeit oberhalb der Ferse, anfangs zu Beginn der Belastung, später auch dauerhaft, oft mit Verdickung und Druckempfindlichkeit der Sehne. Läufer und Menschen mit rascher Belastungssteigerung sind häufig betroffen.",
          en: "Achilles tendinopathy is an overload-related, painful change of the Achilles tendon. Typical features are pain and stiffness above the heel, at first at the start of activity, later persistent, often with thickening and tenderness of the tendon. Runners and people with rapid load increases are commonly affected." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose ergibt sich aus Beschwerden und Untersuchung; Ultraschall kann die Sehne beurteilen. Eine akute, plötzliche Verletzung mit Kraftverlust (Verdacht auf Sehnenriss) muss abgegrenzt werden.",
          en: "Diagnosis follows from symptoms and examination; ultrasound can assess the tendon. An acute, sudden injury with loss of strength (suspected tendon rupture) must be distinguished." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die Behandlung ist konservativ und langfristig angelegt: dosiertes Krafttraining (insbesondere exzentrisch), Belastungssteuerung, angepasstes Schuhwerk und Geduld. Bei hartnäckigen Beschwerden können Stoßwellentherapie oder weitere Verfahren erwogen werden; Injektionen in die Sehne werden zurückhaltend eingesetzt.",
          en: "Treatment is conservative and long-term: dosed strength training (especially eccentric), load management, adapted footwear and patience. For stubborn symptoms, shockwave therapy or further procedures may be considered; injections into the tendon are used sparingly." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Belastungssteuerung, geeignetes Schuhwerk und eine entzündungsarme Ernährung unterstützen die Erholung. Kälte kann nach Belastung lindern. Pflanzliche Mittel sind ärztlich zu prüfen.",
          en: "Load management, suitable footwear and an anti-inflammatory diet support recovery. Cold can ease symptoms after activity. Herbal products should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird die Sehnenreizung Mustern wie Qi- und Blut-Stagnation sowie Nieren-Schwäche zugeordnet. Akupunktur kann begleitend Schmerzen lindern und ersetzt das dosierte Krafttraining nicht.",
          en: "Traditionally, tendon irritation is assigned to patterns such as Qi and blood stagnation and Kidney deficiency. Acupuncture may complementarily ease pain and does not replace dosed strength training." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen warme Öl-Anwendungen an Wade und Sehne sowie Vata-beruhigende Routinen im Vordergrund. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, warm oil applications on the calf and tendon and Vata-calming routines are emphasised. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Dosiertes Sehnentraining", en: "Dosed tendon loading" } },
        { t: "p", text: {
          de: "Die Physiotherapie ist die tragende Behandlung: ein strukturiertes, langsam gesteigertes Krafttraining der Wadenmuskulatur (exzentrisch und schwer-langsam), Dehnung, Ganganalyse und Belastungssteuerung verbessern Schmerz und Belastbarkeit der Sehne nachhaltig.",
          en: "Physiotherapy is the mainstay: a structured, slowly progressed calf-muscle strength programme (eccentric and heavy-slow), stretching, gait analysis and load management durably improve pain and tendon capacity." } },
        { t: "p", text: {
          de: "Geduld und Konsequenz über mehrere Monate sind entscheidend. Ein individuell dosiertes Heimübungsprogramm und die schrittweise Rückkehr zum Sport sichern den Erfolg.",
          en: "Patience and consistency over several months are decisive. An individually dosed home exercise programme and a gradual return to sport secure success." } },
      ],
    },
  },

  {
    slug: "hallux-valgus",
    icd10: "M20.1",
    illustration: "generic",
    title: { de: "Hallux valgus (Ballenzeh)", en: "Hallux Valgus" },
    summary: {
      de: "Schiefstellung der Großzehe mit Ballenbildung, oft druckschmerzhaft im Schuh.",
      en: "Deviation of the big toe with a bunion, often painful under pressure in the shoe.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Beim Hallux valgus weicht die Großzehe zur Fußaußenseite ab, während sich am Grundgelenk innen ein vorspringender Ballen bildet. Ursachen sind Veranlagung, Bindegewebsschwäche, Spreizfuß und enges Schuhwerk. Typisch sind ein sichtbarer Ballen, Druckschmerz im Schuh und mit der Zeit Reizungen oder Zehenfehlstellungen.",
          en: "In hallux valgus, the big toe deviates towards the outer side of the foot while a protruding bunion forms on the inner side of the base joint. Causes are predisposition, connective-tissue weakness, splayfoot and tight footwear. Typical features are a visible bunion, pressure pain in the shoe and, over time, irritation or toe deformities." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose ergibt sich aus der sichtbaren Fehlstellung und der Untersuchung; Röntgenbilder erfassen Ausmaß und Begleitveränderungen, besonders vor einer Operation.",
          en: "Diagnosis follows from the visible deformity and examination; X-rays capture the extent and accompanying changes, especially before surgery." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Konservativ stehen weites, druckfreies Schuhwerk, Einlagen, Polster, Fußgymnastik und bedarfsgerechte Schmerzmittel im Vordergrund; sie lindern Beschwerden, korrigieren die Fehlstellung aber nicht. Bei anhaltenden Beschwerden oder ausgeprägter Fehlstellung kann eine Operation die Stellung korrigieren.",
          en: "Conservatively, wide, pressure-free footwear, insoles, padding, foot exercises and as-needed pain relief are central; they ease symptoms but do not correct the deformity. For persistent symptoms or marked deformity, surgery can correct the alignment." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Geeignetes Schuhwerk, Barfußgehen auf sicherem Untergrund und Fußgymnastik können Beschwerden lindern. Kühlung hilft bei akuter Reizung. Pflanzliche Mittel sind ärztlich zu prüfen.",
          en: "Suitable footwear, barefoot walking on safe ground and foot exercises can ease symptoms. Cooling helps with acute irritation. Herbal products should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden Fußbeschwerden Mustern wie Qi- und Blut-Stagnation zugeordnet. Akupunktur kann allenfalls begleitend Schmerzen lindern und beeinflusst die Fehlstellung nicht.",
          en: "Traditionally, foot symptoms are assigned to patterns such as Qi and blood stagnation. Acupuncture may at most complementarily ease pain and does not influence the deformity." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch können warme Öl-Anwendungen am Fuß als Wohlfühlmaßnahme dienen; sanfte Fußübungen unterstützen die Beweglichkeit. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, warm oil applications on the foot may serve as a comfort measure; gentle foot exercises support mobility. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Fußmuskeltraining", en: "Foot-muscle training" } },
        { t: "p", text: {
          de: "Die Physiotherapie unterstützt die konservative Behandlung: gezieltes Training der Fußmuskulatur (z. B. Greif- und Spreizübungen), Mobilisation der Großzehe, Dehnung und Gangschulung verbessern Beschwerden und Fußfunktion und können das Fortschreiten verlangsamen.",
          en: "Physiotherapy supports conservative treatment: targeted training of the foot muscles (e.g. gripping and spreading exercises), mobilising the big toe, stretching and gait training improve symptoms and foot function and can slow progression." } },
        { t: "p", text: {
          de: "Nach einer Operation begleitet die Physiotherapie den Wiederaufbau von Beweglichkeit, Kraft und Gang. Ein Heimübungsprogramm und Schuhberatung sichern den Erfolg.",
          en: "After surgery, physiotherapy guides the rebuilding of mobility, strength and gait. A home exercise programme and footwear advice secure success." } },
      ],
    },
  },

  {
    slug: "rheumatoid-arthritis",
    icd10: "M06.9",
    illustration: "generic",
    title: { de: "Rheumatoide Arthritis", en: "Rheumatoid Arthritis" },
    summary: {
      de: "Chronisch-entzündliche Gelenkerkrankung mit Schwellung, Steifigkeit und Gefahr von Gelenkschäden.",
      en: "A chronic inflammatory joint disease with swelling, stiffness and a risk of joint damage.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die rheumatoide Arthritis ist eine chronisch-entzündliche Autoimmunerkrankung, bei der sich vor allem die Gelenkinnenhaut entzündet. Typisch sind symmetrische Schwellung und Schmerzen kleiner Gelenke (Hände, Füße), ausgeprägte Morgensteifigkeit und Abgeschlagenheit. Ohne Behandlung drohen Gelenkzerstörung und Fehlstellungen.",
          en: "Rheumatoid arthritis is a chronic inflammatory autoimmune disease in which the joint lining in particular becomes inflamed. Typical features are symmetrical swelling and pain of small joints (hands, feet), marked morning stiffness and fatigue. Without treatment, joint destruction and deformities can develop." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Abklärung kombiniert Beschwerden, Untersuchung, Labor (u. a. Entzündungswerte, Rheumafaktor, CCP-Antikörper) und Bildgebung. Eine frühe Diagnose ist wichtig, da eine rasche Behandlung Gelenkschäden verhindern kann.",
          en: "Assessment combines symptoms, examination, laboratory tests (including inflammatory markers, rheumatoid factor, CCP antibodies) and imaging. Early diagnosis is important, as prompt treatment can prevent joint damage." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die Behandlung erfolgt fachärztlich (Rheumatologie) mit krankheitsmodifizierenden Medikamenten (z. B. Methotrexat, bei Bedarf Biologika oder zielgerichtete Präparate), ergänzt durch entzündungshemmende Mittel und zeitweise Kortison. Ziel ist eine möglichst geringe Krankheitsaktivität (Remission).",
          en: "Treatment is specialist-led (rheumatology) with disease-modifying medicines (e.g. methotrexate, and biologics or targeted agents if needed), plus anti-inflammatory medicines and temporary cortisone. The goal is the lowest possible disease activity (remission)." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Eine entzündungsarme, an die mediterrane Kost angelehnte Ernährung, Rauchverzicht, Gewichtsmanagement und Bewegung unterstützen die Behandlung. Pflanzliche Mittel sind wegen möglicher Wechselwirkungen mit Rheumamedikamenten sorgfältig ärztlich zu prüfen.",
          en: "An anti-inflammatory, Mediterranean-style diet, stopping smoking, weight management and activity support treatment. Herbal products need careful medical review because of possible interactions with rheumatic medicines." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird die Erkrankung dem Bi-Syndrom (Wind, Kälte, Feuchtigkeit, Hitze) zugeordnet. Akupunktur kann begleitend Schmerzen lindern; Kräuter sind wegen Wechselwirkungen mit immunmodulierenden Medikamenten nur unter qualifizierter Aufsicht einzusetzen und ersetzen die Basistherapie nicht.",
          en: "Traditionally, the disease is assigned to the Bi syndrome (wind, cold, damp, heat). Acupuncture may complementarily ease pain; herbs should be used only under qualified supervision because of interactions with immunomodulating medicines and do not replace disease-modifying therapy." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch wird die entzündliche Gelenkerkrankung häufig einem Ama- und Vata-Ungleichgewicht zugeordnet. Begleitend betont werden eine leicht verdauliche Ernährung, sanfte Bewegung und beruhigende Routinen. Kräuterpräparate sind wegen Wechselwirkungen ärztlich zu prüfen.",
          en: "In Ayurveda, inflammatory joint disease is often assigned to an Ama and Vata imbalance. Complementary emphasis is placed on an easily digestible diet, gentle movement and calming routines. Herbal preparations should be medically reviewed because of interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Beweglichkeit & Gelenkschutz", en: "Mobility & joint protection" } },
        { t: "p", text: {
          de: "Die Physio- und Ergotherapie ist ein wichtiger Baustein: schonende Beweglichkeits- und Kräftigungsübungen, Erhalt der Handfunktion, Gelenkschutztechniken, Hilfsmittelberatung und angepasstes Ausdauertraining verbessern Funktion und Lebensqualität, auch in ruhigeren Phasen.",
          en: "Physio- and occupational therapy is an important component: gentle mobility and strengthening exercises, maintaining hand function, joint-protection techniques, aid advice and adapted aerobic training improve function and quality of life, including in calmer phases." } },
        { t: "p", text: {
          de: "Die Übungen werden an die Krankheitsaktivität angepasst: in akuten Schüben schonend, in ruhigen Phasen aufbauend. Ein individuelles Heimprogramm hält die Gelenke beweglich.",
          en: "Exercises are adapted to disease activity: gentle in acute flares, building up in calm phases. An individual home programme keeps the joints mobile." } },
      ],
    },
  },

  {
    slug: "psoriatic-arthritis",
    icd10: "L40.5",
    illustration: "generic",
    title: { de: "Psoriasis-Arthritis", en: "Psoriatic Arthritis" },
    summary: {
      de: "Entzündliche Gelenkerkrankung im Zusammenhang mit der Schuppenflechte (Psoriasis).",
      en: "An inflammatory joint disease associated with psoriasis (a skin condition).",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Psoriasis-Arthritis ist eine chronisch-entzündliche Gelenkerkrankung, die bei Menschen mit Schuppenflechte auftreten kann – manchmal auch, bevor Hautveränderungen sichtbar sind. Typisch sind Gelenkschmerzen und -schwellungen, Entzündung von Sehnenansätzen, Wurstfinger oder -zehen sowie Nagelveränderungen.",
          en: "Psoriatic arthritis is a chronic inflammatory joint disease that can occur in people with psoriasis – sometimes even before skin changes are visible. Typical features are joint pain and swelling, inflammation of tendon attachments, sausage-like fingers or toes and nail changes." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Abklärung kombiniert Beschwerden, Haut- und Nagelbefund, Untersuchung, Labor und Bildgebung. Da die Erkrankung sehr unterschiedlich verläuft, ist die fachärztliche Beurteilung (Rheumatologie) wichtig.",
          en: "Assessment combines symptoms, skin and nail findings, examination, laboratory tests and imaging. As the disease runs a very variable course, specialist evaluation (rheumatology) is important." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die Behandlung erfolgt fachärztlich mit entzündungshemmenden Mitteln und, je nach Aktivität, krankheitsmodifizierenden oder zielgerichteten Medikamenten bzw. Biologika. Haut und Gelenke werden gemeinsam betrachtet, oft in Zusammenarbeit mit der Dermatologie.",
          en: "Treatment is specialist-led with anti-inflammatory medicines and, depending on activity, disease-modifying or targeted medicines or biologics. Skin and joints are considered together, often in cooperation with dermatology." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Eine entzündungsarme Ernährung, Gewichtsmanagement, Rauchverzicht und Stressabbau unterstützen die Behandlung. Pflanzliche Mittel sind wegen möglicher Wechselwirkungen mit den Medikamenten ärztlich zu prüfen.",
          en: "An anti-inflammatory diet, weight management, stopping smoking and stress reduction support treatment. Herbal products should be medically reviewed because of possible interactions with the medicines." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden Haut- und Gelenkbeschwerden Mustern wie Feuchtigkeit-Hitze und Blut-Hitze zugeordnet. Akupunktur kann begleitend Beschwerden lindern; Kräuter sind wegen Wechselwirkungen nur unter qualifizierter Aufsicht einzusetzen.",
          en: "Traditionally, skin and joint symptoms are assigned to patterns such as damp-heat and blood-heat. Acupuncture may complementarily ease symptoms; herbs should be used only under qualified supervision because of interactions." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch werden entzündliche Haut- und Gelenkbeschwerden häufig einem Ama- und Pitta-Ungleichgewicht zugeordnet. Begleitend betont werden eine ausgewogene Ernährung, Hautpflege und beruhigende Routinen. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, inflammatory skin and joint symptoms are often assigned to an Ama and Pitta imbalance. Complementary emphasis is placed on a balanced diet, skin care and calming routines. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Beweglichkeit & Kraft", en: "Mobility & strength" } },
        { t: "p", text: {
          de: "Die Physiotherapie unterstützt die Behandlung: Beweglichkeits- und Kräftigungsübungen, Dehnung, Erhalt der Funktion von Händen und Füßen, Gelenkschutztechniken und angepasstes Ausdauertraining verbessern Beschwerden und Alltagsfunktion.",
          en: "Physiotherapy supports treatment: mobility and strengthening exercises, stretching, maintaining hand and foot function, joint-protection techniques and adapted aerobic training improve symptoms and everyday function." } },
        { t: "p", text: {
          de: "Die Übungen werden an die Krankheitsaktivität angepasst. Regelmäßige Bewegung und ein Heimprogramm wirken Steifigkeit und Funktionsverlust entgegen.",
          en: "Exercises are adapted to disease activity. Regular movement and a home programme counteract stiffness and loss of function." } },
      ],
    },
  },

  {
    slug: "ankylosing-spondylitis",
    icd10: "M45.9",
    illustration: "generic",
    title: { de: "Morbus Bechterew (ankylosierende Spondylitis)", en: "Ankylosing Spondylitis" },
    summary: {
      de: "Chronisch-entzündliche Wirbelsäulenerkrankung mit tiefem Rückenschmerz und zunehmender Versteifung.",
      en: "A chronic inflammatory spinal disease with deep back pain and progressive stiffening.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Der Morbus Bechterew ist eine chronisch-entzündliche Erkrankung vor allem der Wirbelsäule und der Kreuz-Darmbein-Gelenke. Typisch ist ein tiefsitzender, entzündlicher Rückenschmerz mit nächtlicher Verstärkung und morgendlicher Steifigkeit, der sich durch Bewegung bessert. Unbehandelt kann die Wirbelsäule zunehmend versteifen.",
          en: "Ankylosing spondylitis is a chronic inflammatory disease affecting mainly the spine and sacroiliac joints. Typical is a deep-seated, inflammatory back pain that worsens at night and causes morning stiffness and eases with movement. Untreated, the spine can progressively stiffen." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Abklärung kombiniert den typischen entzündlichen Rückenschmerz, Untersuchung, Labor (u. a. Entzündungswerte, HLA-B27) und Bildgebung (MRT, Röntgen). Die fachärztliche Beurteilung (Rheumatologie) ist wichtig.",
          en: "Assessment combines the typical inflammatory back pain, examination, laboratory tests (including inflammatory markers, HLA-B27) and imaging (MRI, X-ray). Specialist evaluation (rheumatology) is important." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die tägliche Bewegungstherapie ist ein zentraler Baustein. Medikamentös kommen entzündungshemmende Mittel und, bei anhaltender Aktivität, zielgerichtete Medikamente bzw. Biologika zum Einsatz. Ziel sind Schmerzkontrolle und der Erhalt von Beweglichkeit und Funktion.",
          en: "Daily exercise therapy is a central component. Medically, anti-inflammatory medicines and, for persistent activity, targeted medicines or biologics are used. The goals are pain control and maintaining mobility and function." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Rauchverzicht ist besonders wichtig. Eine entzündungsarme Ernährung, Gewichtsmanagement und regelmäßige Bewegung unterstützen die Behandlung. Pflanzliche Mittel sind wegen möglicher Wechselwirkungen ärztlich zu prüfen.",
          en: "Stopping smoking is particularly important. An anti-inflammatory diet, weight management and regular movement support treatment. Herbal products should be medically reviewed because of possible interactions." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden die Beschwerden Mustern wie Nieren-Schwäche und Kälte-Feuchtigkeit (Bi-Syndrom) zugeordnet. Akupunktur und Wärmeanwendungen können begleitend Schmerzen lindern und ersetzen die tägliche Bewegungstherapie nicht.",
          en: "Traditionally, the symptoms are assigned to patterns such as Kidney deficiency and cold-damp (Bi syndrome). Acupuncture and heat applications may complementarily ease pain and do not replace daily exercise therapy." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch werden die Beschwerden häufig einem Vata- und Ama-Ungleichgewicht zugeordnet. Begleitend betont werden warme Öl-Anwendungen, regelmäßiges, sanftes Yoga und eine leicht verdauliche Ernährung. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, the symptoms are often assigned to a Vata and Ama imbalance. Complementary emphasis is placed on warm oil applications, regular gentle yoga and an easily digestible diet. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Tägliche Bewegungstherapie", en: "Daily exercise therapy" } },
        { t: "p", text: {
          de: "Die Physiotherapie ist eine der wichtigsten Maßnahmen: tägliche Beweglichkeits-, Dehn- und Kräftigungsübungen für Wirbelsäule und Brustkorb, Atemübungen und Haltungsschulung erhalten die Beweglichkeit und wirken der Versteifung entgegen.",
          en: "Physiotherapy is one of the most important measures: daily mobility, stretching and strengthening exercises for the spine and chest, breathing exercises and posture training maintain mobility and counteract stiffening." } },
        { t: "p", text: {
          de: "Konsequenz ist entscheidend. Ein individuell angeleitetes Heimprogramm und regelmäßiger, gelenkfreundlicher Sport (z. B. Schwimmen) sichern den langfristigen Erfolg.",
          en: "Consistency is decisive. An individually guided home programme and regular, joint-friendly sport (e.g. swimming) secure long-term success." } },
      ],
    },
  },

  {
    slug: "polymyalgia-rheumatica",
    icd10: "M35.3",
    illustration: "generic",
    title: { de: "Polymyalgia rheumatica", en: "Polymyalgia Rheumatica" },
    summary: {
      de: "Entzündliche Erkrankung mit Schmerzen und Steifigkeit in Schulter- und Beckengürtel, meist im höheren Alter.",
      en: "An inflammatory condition with pain and stiffness in the shoulder and pelvic girdle, usually in older age.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Polymyalgia rheumatica ist eine entzündliche Erkrankung, die vor allem Menschen über 50 Jahre betrifft. Typisch sind ausgeprägte Schmerzen und Steifigkeit im Schulter- und Beckengürtel, besonders morgens, oft mit Abgeschlagenheit. Sie spricht meist rasch auf Kortison an.",
          en: "Polymyalgia rheumatica is an inflammatory condition affecting mainly people over 50. Typical features are marked pain and stiffness in the shoulder and pelvic girdle, especially in the morning, often with fatigue. It usually responds quickly to cortisone." } },
        { t: "p", text: {
          de: "Wichtig: Neu auftretende, starke Kopfschmerzen (besonders an der Schläfe), Schmerzen beim Kauen, Berührungsempfindlichkeit der Kopfhaut oder Sehstörungen können auf eine begleitende Riesenzellarteriitis hindeuten – ein Notfall wegen drohenden Sehverlusts, der eine sofortige ärztliche Abklärung erfordert.",
          en: "Important: new, severe headache (especially at the temple), pain on chewing, tenderness of the scalp or visual disturbance can indicate an accompanying giant cell arteritis – an emergency because of the risk of vision loss, requiring immediate medical assessment." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Abklärung kombiniert das typische Beschwerdebild, die Untersuchung und erhöhte Entzündungswerte im Blut. Andere Ursachen werden abgegrenzt; auf Zeichen einer Riesenzellarteriitis wird besonders geachtet.",
          en: "Assessment combines the typical symptom pattern, examination and raised inflammatory markers in the blood. Other causes are distinguished; signs of giant cell arteritis are specifically sought." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die Behandlung erfolgt mit Kortison in ausschleichender Dosierung über Monate, häufig fachärztlich begleitet. Begleitend werden Knochenschutz (gegen Osteoporose) und regelmäßige Verlaufskontrollen empfohlen.",
          en: "Treatment uses cortisone in a tapering dose over months, often with specialist support. Bone protection (against osteoporosis) and regular follow-up are recommended alongside." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Eine ausgewogene, knochenfreundliche Ernährung (ausreichend Kalzium und Vitamin D), Bewegung und Sturzprävention unterstützen die Behandlung, besonders unter Kortison. Pflanzliche Mittel sind ärztlich zu prüfen und ersetzen die Therapie nicht.",
          en: "A balanced, bone-friendly diet (adequate calcium and vitamin D), activity and fall prevention support treatment, especially while on cortisone. Herbal products should be medically reviewed and do not replace therapy." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden die Beschwerden Mustern wie Qi- und Blut-Mangel sowie Kälte-Feuchtigkeit zugeordnet. Akupunktur kann begleitend Beschwerden lindern, ersetzt aber die entzündungshemmende Behandlung nicht.",
          en: "Traditionally, the symptoms are assigned to patterns such as Qi and blood deficiency and cold-damp. Acupuncture may complementarily ease symptoms but does not replace anti-inflammatory treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch stehen warme Öl-Anwendungen, sanfte Bewegung und eine leicht verdauliche, ausgewogene Ernährung im Vordergrund. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, warm oil applications, gentle movement and an easily digestible, balanced diet are emphasised. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Beweglichkeit & Kraft erhalten", en: "Maintaining mobility & strength" } },
        { t: "p", text: {
          de: "Die Physiotherapie unterstützt die Behandlung: sanfte Beweglichkeits- und Dehnübungen für Schulter- und Beckengürtel sowie – angepasst an die Kortisonbehandlung – gezielte Kräftigung wirken Steifigkeit, Muskelabbau und Funktionsverlust entgegen.",
          en: "Physiotherapy supports treatment: gentle mobility and stretching exercises for the shoulder and pelvic girdle and – adapted to cortisone treatment – targeted strengthening counteract stiffness, muscle loss and loss of function." } },
        { t: "p", text: {
          de: "Da Kortison Muskeln und Knochen schwächen kann, sind regelmäßiges, angepasstes Training und Sturzprävention besonders wichtig. Ein Heimprogramm hält beweglich.",
          en: "As cortisone can weaken muscles and bones, regular, adapted training and fall prevention are particularly important. A home programme keeps you mobile." } },
      ],
    },
  },

  {
    slug: "gout",
    icd10: "M10.9",
    illustration: "generic",
    title: { de: "Gicht", en: "Gout" },
    summary: {
      de: "Schmerzhafte Gelenkentzündung durch Harnsäurekristalle, oft am Großzehengrundgelenk.",
      en: "A painful joint inflammation from uric acid crystals, often at the big toe joint.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Gicht ist eine Stoffwechselerkrankung, bei der ein erhöhter Harnsäurespiegel zur Ablagerung von Kristallen in Gelenken führt. Ein akuter Anfall zeigt sich als plötzliche, sehr schmerzhafte Schwellung, Rötung und Überwärmung eines Gelenks – klassisch am Großzehengrundgelenk. Unbehandelt kann die Gicht chronisch werden und Gelenke schädigen.",
          en: "Gout is a metabolic disease in which a raised uric acid level leads to crystal deposits in joints. An acute attack presents as sudden, very painful swelling, redness and warmth of a joint – classically at the big toe joint. Untreated, gout can become chronic and damage joints." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose stützt sich auf das typische Bild, den Harnsäurewert und ggf. den Nachweis von Kristallen in der Gelenkflüssigkeit. Ein bakterieller Gelenkinfekt muss abgegrenzt werden, da er einen Notfall darstellt.",
          en: "Diagnosis rests on the typical picture, the uric acid level and, if needed, detection of crystals in the joint fluid. A bacterial joint infection must be distinguished, as it is an emergency." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Der akute Anfall wird mit entzündungshemmenden Mitteln behandelt. Bei wiederholten Anfällen oder Ablagerungen senken Medikamente dauerhaft den Harnsäurespiegel. Ernährung, Gewichtsmanagement und der Verzicht auf Alkohol und zuckerhaltige Getränke sind wichtig.",
          en: "The acute attack is treated with anti-inflammatory medicines. For repeated attacks or deposits, medicines lower the uric acid level permanently. Diet, weight management and avoiding alcohol and sugary drinks are important." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Ernährung & Lebensstil", en: "Nutrition & lifestyle" } },
        { t: "ul", items: {
          de: ["Ausreichend trinken (vorzugsweise Wasser) unterstützt die Harnsäureausscheidung.","Alkohol, insbesondere Bier, und zuckerhaltige Getränke werden gemieden.","Gewichtsreduktion senkt den Harnsäurespiegel.","Purinreiche Speisen (viel Fleisch, Innereien) werden reduziert."],
          en: ["Drinking enough (preferably water) supports uric acid excretion.","Alcohol, especially beer, and sugary drinks are avoided.","Weight reduction lowers the uric acid level.","Purine-rich foods (large amounts of meat, offal) are reduced."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird die Gicht Mustern wie Feuchtigkeit-Hitze zugeordnet. Akupunktur kann begleitend die Schmerzen eines Anfalls lindern und ersetzt die harnsäuresenkende Behandlung und Ernährungsumstellung nicht.",
          en: "Traditionally, gout is assigned to patterns such as damp-heat. Acupuncture may complementarily ease the pain of an attack and does not replace uric-acid-lowering treatment and dietary change." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch wird die Gicht häufig einem Pitta- und Ama-Ungleichgewicht zugeordnet. Begleitend betont werden eine leichte, kühlende Ernährung, ausreichend Flüssigkeit und ausgewogene Routinen. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, gout is often assigned to a Pitta and Ama imbalance. Complementary emphasis is placed on a light, cooling diet, adequate fluids and balanced routines. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Akutschutz & Bewegung", en: "Acute protection & movement" } },
        { t: "p", text: {
          de: "Im akuten Anfall stehen Ruhigstellung, Hochlagern und Kühlung des betroffenen Gelenks im Vordergrund. Nach Abklingen unterstützt die Physiotherapie den Erhalt von Beweglichkeit und Kraft sowie ein gelenkschonendes, regelmäßiges Bewegungsprogramm.",
          en: "In an acute attack, rest, elevation and cooling of the affected joint are central. After it subsides, physiotherapy supports the maintenance of mobility and strength and a joint-friendly, regular exercise programme." } },
        { t: "p", text: {
          de: "Regelmäßige Bewegung und Gewichtsmanagement, unterstützt durch Physiotherapie, tragen zur langfristigen Kontrolle bei und entlasten die Gelenke.",
          en: "Regular movement and weight management, supported by physiotherapy, contribute to long-term control and relieve the joints." } },
      ],
    },
  },

  {
    slug: "osteoporosis",
    icd10: "M81.0",
    illustration: "generic",
    title: { de: "Osteoporose", en: "Osteoporosis" },
    summary: {
      de: "Verminderte Knochendichte mit erhöhtem Bruchrisiko, oft lange ohne Beschwerden.",
      en: "Reduced bone density with an increased fracture risk, often symptom-free for a long time.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der Osteoporose nehmen Knochendichte und Knochenqualität ab, sodass die Knochen brüchiger werden. Lange verursacht sie keine Beschwerden und wird oft erst durch einen Knochenbruch bemerkt – typisch an Wirbelkörpern, Hüfte oder Handgelenk. Alter, Hormonmangel, Bewegungsmangel, bestimmte Erkrankungen und Medikamente (z. B. Kortison) begünstigen sie.",
          en: "In osteoporosis, bone density and bone quality decline, making bones more fragile. It causes no symptoms for a long time and is often noticed only through a fracture – typically of the vertebrae, hip or wrist. Age, hormone deficiency, inactivity, certain diseases and medicines (e.g. cortisone) promote it." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Abklärung umfasst die Erfassung von Risikofaktoren, eine Knochendichtemessung (DXA) und Laboruntersuchungen, um andere Ursachen auszuschließen. Das individuelle Bruchrisiko wird abgeschätzt.",
          en: "Assessment includes recording risk factors, a bone-density scan (DXA) and laboratory tests to exclude other causes. The individual fracture risk is estimated." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Grundlage sind ausreichend Kalzium und Vitamin D, körperliche Aktivität und Sturzprävention. Bei erhöhtem Bruchrisiko werden knochenwirksame Medikamente eingesetzt. Bereits eingetretene Brüche werden entsprechend versorgt.",
          en: "The foundation is adequate calcium and vitamin D, physical activity and fall prevention. For increased fracture risk, bone-active medicines are used. Fractures that have already occurred are treated accordingly." } },
        { t: "p", text: {
          de: "Wichtig: Plötzliche starke Rückenschmerzen, ein akuter Schmerz nach einem Sturz oder eine sichtbare Fehlstellung können auf einen Knochenbruch hindeuten und erfordern eine rasche ärztliche Abklärung.",
          en: "Important: sudden severe back pain, acute pain after a fall or a visible deformity can indicate a fracture and require prompt medical assessment." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Ernährung & Lebensstil", en: "Nutrition & lifestyle" } },
        { t: "ul", items: {
          de: ["Kalziumreiche Ernährung und ausreichend Vitamin D (Sonnenlicht, ggf. Präparate) stärken die Knochen.","Rauchverzicht und maßvoller Alkoholkonsum wirken sich günstig aus.","Regelmäßige, belastende Bewegung fördert den Knochenaufbau.","Nahrungsergänzungen sind auf den individuellen Bedarf abzustimmen und ärztlich zu prüfen."],
          en: ["A calcium-rich diet and adequate vitamin D (sunlight, supplements if needed) strengthen the bones.","Stopping smoking and moderate alcohol are beneficial.","Regular weight-bearing activity promotes bone formation.","Supplements should be tailored to individual needs and medically reviewed."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird die Knochenschwäche dem Muster der Nieren-Schwäche zugeordnet. TCM-Verfahren wie Akupunktur können begleitend Wohlbefinden und Begleitbeschwerden unterstützen, ersetzen aber Knochenschutz und ggf. Medikamente nicht.",
          en: "Traditionally, bone weakness is assigned to the pattern of Kidney deficiency. TCM approaches such as acupuncture may complementarily support wellbeing and accompanying symptoms, but do not replace bone protection and, if needed, medicines." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch wird die Knochengesundheit häufig einem Vata-Ungleichgewicht zugeordnet. Begleitend betont werden eine nährstoffreiche Ernährung, warme Öl-Anwendungen und regelmäßige Bewegung. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, bone health is often assigned to a Vata imbalance. Complementary emphasis is placed on a nutrient-rich diet, warm oil applications and regular movement. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Kraft, Gleichgewicht & Sturzprävention", en: "Strength, balance & fall prevention" } },
        { t: "p", text: {
          de: "Die Physiotherapie ist ein zentraler Baustein: gezieltes Kraft- und belastendes Training regen den Knochenaufbau an, während Gleichgewichts- und Koordinationsübungen sowie Gangschulung das Sturzrisiko senken – die wichtigste Maßnahme zur Vermeidung von Brüchen.",
          en: "Physiotherapy is a central component: targeted strength and weight-bearing training stimulate bone formation, while balance and coordination exercises and gait training reduce the fall risk – the most important measure to prevent fractures." } },
        { t: "p", text: {
          de: "Rückengerechtes Verhalten, Haltungsschulung und ein regelmäßiges, an die Belastbarkeit angepasstes Heimprogramm erhalten Knochen, Muskeln und Sicherheit im Alltag.",
          en: "Back-friendly behaviour, posture training and a regular home programme adapted to capacity maintain bones, muscles and everyday safety." } },
      ],
    },
  },

  {
    slug: "fibromyalgia",
    icd10: "M79.7",
    illustration: "generic",
    title: { de: "Fibromyalgie", en: "Fibromyalgia" },
    summary: {
      de: "Chronische Schmerzen in mehreren Körperregionen mit Erschöpfung und Schlafstörungen.",
      en: "Chronic pain in several body regions with fatigue and sleep disturbance.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Fibromyalgie ist ein chronisches Schmerzsyndrom mit weit verbreiteten Schmerzen in Muskeln und am Bewegungsapparat, oft begleitet von Erschöpfung, Schlafstörungen, Konzentrations- und Gedächtnisproblemen. Die Ursachen sind komplex und betreffen die veränderte Schmerzverarbeitung; die Organe und Gelenke sind dabei nicht geschädigt.",
          en: "Fibromyalgia is a chronic pain syndrome with widespread pain in the muscles and musculoskeletal system, often accompanied by fatigue, sleep disturbance and problems with concentration and memory. The causes are complex and involve altered pain processing; the organs and joints are not damaged." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose stützt sich auf das typische Beschwerdebild und den Ausschluss anderer Erkrankungen durch Gespräch, Untersuchung und gezielte Laboruntersuchungen. Eine klare Diagnose hilft, unnötige Untersuchungen zu vermeiden.",
          en: "Diagnosis rests on the typical symptom pattern and the exclusion of other diseases through history, examination and targeted laboratory tests. A clear diagnosis helps avoid unnecessary investigations." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Im Zentrum steht ein multimodaler Ansatz: regelmäßige, angepasste Bewegung, Aufklärung, Stressbewältigung und psychologische Verfahren (z. B. kognitive Verhaltenstherapie). Medikamente spielen eine unterstützende, begrenzte Rolle. Ziel ist die Verbesserung von Funktion und Lebensqualität.",
          en: "A multimodal approach is central: regular, adapted movement, education, stress management and psychological methods (e.g. cognitive behavioural therapy). Medicines play a supportive, limited role. The goal is to improve function and quality of life." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Ausgewogene Ernährung, ausreichender Schlaf, Stressabbau und Entspannungsverfahren unterstützen die Behandlung. Wärmeanwendungen können Beschwerden lindern. Pflanzliche Mittel sind ärztlich auf Eignung zu prüfen.",
          en: "A balanced diet, adequate sleep, stress reduction and relaxation techniques support treatment. Heat applications can ease symptoms. Herbal products should be medically reviewed for suitability." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden die Beschwerden Mustern wie Qi- und Blut-Stagnation sowie Leber-Qi-Stagnation zugeordnet. Akupunktur kann begleitend Schmerzen und Anspannung lindern und ersetzt den multimodalen Ansatz nicht.",
          en: "Traditionally, the symptoms are assigned to patterns such as Qi and blood stagnation and Liver Qi stagnation. Acupuncture may complementarily ease pain and tension and does not replace the multimodal approach." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch werden die Beschwerden häufig einem Vata-Ungleichgewicht zugeordnet. Begleitend betont werden warme Öl-Anwendungen, eine regelmäßige Tagesroutine, sanftes Yoga und Meditation. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, the symptoms are often assigned to a Vata imbalance. Complementary emphasis is placed on warm oil applications, a regular daily routine, gentle yoga and meditation. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Bewegung & Aktivitätsdosierung", en: "Movement & activity pacing" } },
        { t: "p", text: {
          de: "Die Physiotherapie ist ein tragender Baustein: regelmäßiges, sanft und schrittweise gesteigertes Ausdauer- und leichtes Krafttraining, Beweglichkeitsübungen sowie Wärme- und Entspannungsverfahren verbessern Schmerz, Schlaf und Belastbarkeit. Eine kluge Aktivitätsdosierung (Pacing) beugt Überlastung vor.",
          en: "Physiotherapy is a mainstay: regular, gently and gradually progressed aerobic and light strength training, mobility exercises and heat and relaxation techniques improve pain, sleep and capacity. Sensible activity pacing prevents overload." } },
        { t: "p", text: {
          de: "Wichtig ist ein langfristiger, geduldiger Aufbau. Ein individuell angeleitetes Heimprogramm mit wohldosierter Bewegung unterstützt Selbstwirksamkeit und Lebensqualität.",
          en: "A long-term, patient build-up is important. An individually guided home programme with well-dosed movement supports self-efficacy and quality of life." } },
      ],
    },
  },

  {
    slug: "tension-type-headache",
    icd10: "G44.2",
    illustration: "generic",
    title: { de: "Spannungskopfschmerz", en: "Tension-Type Headache" },
    summary: {
      de: "Häufiger, dumpf-drückender Kopfschmerz beidseits, oft wie ein enges Band um den Kopf.",
      en: "A common, dull, pressing headache on both sides, often like a tight band around the head.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Der Spannungskopfschmerz ist die häufigste Kopfschmerzform. Typisch ist ein dumpf-drückender, beidseitiger Schmerz von leichter bis mittlerer Stärke, oft wie ein enges Band um den Kopf, ohne Übelkeit und ohne Verstärkung durch normale körperliche Aktivität. Verspannung, Stress, Schlafmangel und Haltung spielen eine Rolle.",
          en: "Tension-type headache is the most common form of headache. Typical is a dull, pressing, bilateral pain of mild to moderate intensity, often like a tight band around the head, without nausea and without worsening from normal physical activity. Tension, stress, lack of sleep and posture play a role." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose stützt sich auf das typische Beschwerdebild und die Untersuchung; Bildgebung ist bei typischem Verlauf nicht nötig. Ein Kopfschmerztagebuch hilft, Auslöser und Häufigkeit zu erkennen.",
          en: "Diagnosis rests on the typical symptom pattern and examination; imaging is not needed in a typical course. A headache diary helps identify triggers and frequency." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Im Akutfall helfen gelegentlich einfache Schmerzmittel; ein zu häufiger Gebrauch ist jedoch zu vermeiden (Gefahr von Kopfschmerz durch Medikamentenübergebrauch). Vorbeugend wirken Stressbewältigung, regelmäßiger Schlaf, Bewegung und Entspannungsverfahren.",
          en: "For acute attacks, occasional simple pain relievers help; too-frequent use should be avoided, however (risk of medication-overuse headache). Preventively, stress management, regular sleep, activity and relaxation techniques help." } },
        { t: "p", text: {
          de: "Wichtig: Ein plötzlich einschießender, ungewohnt starker Kopfschmerz, Kopfschmerz mit Fieber und Nackensteife, neurologischen Ausfällen oder nach einer Kopfverletzung erfordert eine rasche ärztliche Abklärung, im Notfall den Notruf 112.",
          en: "Important: a sudden, unusually severe headache, headache with fever and neck stiffness, neurological deficits or after a head injury requires prompt medical assessment, and an emergency call (112) in an emergency." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Ausreichend Schlaf und Flüssigkeit, regelmäßige Mahlzeiten, Bewegungspausen und Entspannungsverfahren beugen Beschwerden vor. Pfefferminzöl auf Stirn und Schläfen kann lindern; die Anwendung ist ärztlich abzustimmen.",
          en: "Adequate sleep and fluids, regular meals, movement breaks and relaxation techniques help prevent symptoms. Peppermint oil on the forehead and temples can ease pain; its use should be medically discussed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird der Spannungskopfschmerz Mustern wie Leber-Qi-Stagnation und Qi- und Blut-Stagnation im Nacken-Kopf-Bereich zugeordnet. Akupunktur kann begleitend zur Vorbeugung und Linderung eingesetzt werden.",
          en: "Traditionally, tension-type headache is assigned to patterns such as Liver Qi stagnation and Qi and blood stagnation in the neck and head region. Acupuncture may be used complementarily for prevention and relief." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch werden Kopfschmerzen häufig einem Vata- oder Pitta-Ungleichgewicht zugeordnet. Begleitend betont werden eine geregelte Tagesroutine, Stressreduktion durch Yoga und Meditation sowie sanfte Öl-Anwendungen an Kopf und Nacken. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "In Ayurveda, headaches are often assigned to a Vata or Pitta imbalance. Complementary emphasis is placed on a regular daily routine, stress reduction through yoga and meditation, and gentle oil applications to the head and neck. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "sub", text: { de: "Nacken & Haltung", en: "Neck & posture" } },
        { t: "p", text: {
          de: "Die Physiotherapie unterstützt vor allem den häufigen Spannungskopfschmerz: Kräftigung und Dehnung der Nacken- und Schultergürtelmuskulatur, Haltungsschulung, Mobilisation der Halswirbelsäule und Entspannungstechniken können Häufigkeit und Stärke der Kopfschmerzen verringern.",
          en: "Physiotherapy especially supports frequent tension-type headache: strengthening and stretching the neck and shoulder-girdle muscles, posture training, mobilising the cervical spine and relaxation techniques can reduce the frequency and intensity of headaches." } },
        { t: "p", text: {
          de: "Ergonomie am Arbeitsplatz, regelmäßige Bewegungspausen und ein Heimübungsprogramm helfen, Verspannungen und damit verbundene Kopfschmerzen vorzubeugen.",
          en: "Workplace ergonomics, regular movement breaks and a home exercise programme help prevent tension and the associated headaches." } },
      ],
    },
  },

  {
    slug: "migraine",
    icd10: "G43.9",
    illustration: "generic",
    title: { de: "Migräne", en: "Migraine" },
    summary: {
      de: "Anfallsartige, oft einseitige Kopfschmerzen mit Übelkeit und Licht- und Lärmempfindlichkeit.",
      en: "Episodic, often one-sided headache with nausea and sensitivity to light and noise.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Migräne ist eine neurologische Erkrankung mit anfallsartigen, häufig einseitigen, pulsierenden Kopfschmerzen von mittlerer bis starker Intensität. Typisch sind Verstärkung durch Bewegung, Übelkeit sowie Licht- und Lärmempfindlichkeit. Manche Betroffene erleben vor dem Anfall eine Aura (z. B. Sehstörungen). Auslöser können Stress, Schlafmangel, Hormonschwankungen oder bestimmte Speisen sein.",
          en: "Migraine is a neurological disorder with episodic, often one-sided, pulsating headaches of moderate to severe intensity. Typical features are worsening with movement, nausea and sensitivity to light and noise. Some people experience an aura before the attack (e.g. visual disturbance). Triggers can be stress, lack of sleep, hormonal changes or certain foods." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose stützt sich auf das typische Beschwerdebild und die Untersuchung; bei eindeutigem Verlauf ist keine Bildgebung nötig. Ein Kopfschmerztagebuch hilft, Auslöser, Häufigkeit und Wirkung der Behandlung zu erfassen.",
          en: "Diagnosis rests on the typical symptom pattern and examination; with a clear course, no imaging is needed. A headache diary helps record triggers, frequency and the effect of treatment." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Im Anfall helfen Ruhe, Reizabschirmung und gezielte Medikamente (z. B. entzündungshemmende Mittel oder Triptane), möglichst früh eingenommen; ein Übergebrauch ist zu vermeiden. Bei häufigen Anfällen kommen vorbeugende Medikamente und nicht-medikamentöse Verfahren zum Einsatz.",
          en: "During an attack, rest, reducing sensory stimuli and targeted medicines (e.g. anti-inflammatory medicines or triptans) taken as early as possible help; overuse should be avoided. For frequent attacks, preventive medicines and non-drug methods are used." } },
        { t: "p", text: {
          de: "Wichtig: Ein plötzlich einschießender, stärkster Kopfschmerz, neu auftretende neurologische Ausfälle, Kopfschmerz mit Fieber und Nackensteife oder eine ungewohnte, sich stark verändernde Kopfschmerzform erfordern eine sofortige ärztliche Abklärung, im Notfall den Notruf 112.",
          en: "Important: a sudden, most severe headache, new neurological deficits, headache with fever and neck stiffness or an unfamiliar, strongly changing headache pattern require immediate medical assessment, and an emergency call (112) in an emergency." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Auslöser & Lebensstil", en: "Triggers & lifestyle" } },
        { t: "ul", items: {
          de: ["Regelmäßiger Schlaf- und Mahlzeitenrhythmus stabilisiert und beugt Anfällen vor.","Ausreichend Flüssigkeit und moderater Koffeinkonsum können helfen.","Ein Kopfschmerztagebuch hilft, individuelle Auslöser zu erkennen und zu meiden.","Regelmäßige Bewegung und Stressabbau senken die Anfallshäufigkeit."],
          en: ["A regular sleep and meal rhythm stabilises and helps prevent attacks.","Adequate fluids and moderate caffeine can help.","A headache diary helps identify and avoid individual triggers.","Regular activity and stress reduction lower attack frequency."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird die Migräne Mustern wie aufsteigendem Leber-Yang und Leber-Qi-Stagnation zugeordnet. Akupunktur kann begleitend zur Vorbeugung eingesetzt werden und die Anfallshäufigkeit verringern; Kräuter sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "Traditionally, migraine is assigned to patterns such as ascending Liver Yang and Liver Qi stagnation. Acupuncture may be used complementarily for prevention and can reduce attack frequency; herbs should be medically reviewed for interactions." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedisch wird die Migräne häufig einem Pitta- oder Vata-Ungleichgewicht zugeordnet. Begleitend betont werden eine geregelte Tagesroutine, Stressreduktion durch Yoga und Meditation sowie beruhigende Anwendungen. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "In Ayurveda, migraine is often assigned to a Pitta or Vata imbalance. Complementary emphasis is placed on a regular daily routine, stress reduction through yoga and meditation, and calming applications. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Ausdauer & Entspannung", en: "Aerobic activity & relaxation" } },
        { t: "p", text: {
          de: "Die Physiotherapie wirkt vorbeugend: regelmäßiges, moderates Ausdauertraining, Entspannungsverfahren (z. B. progressive Muskelentspannung), Haltungs- und Nackenübungen sowie – bei begleitenden Nackenverspannungen – manuelle Techniken können die Anfallshäufigkeit senken.",
          en: "Physiotherapy works preventively: regular, moderate aerobic training, relaxation techniques (e.g. progressive muscle relaxation), posture and neck exercises and – with accompanying neck tension – manual techniques can reduce attack frequency." } },
        { t: "p", text: {
          de: "Ein regelmäßiger Bewegungsrhythmus, Stressmanagement und ein Heimübungsprogramm ergänzen die medizinische Vorbeugung und stärken die Selbstwirksamkeit.",
          en: "A regular movement rhythm, stress management and a home exercise programme complement medical prevention and strengthen self-efficacy." } },
      ],
    },
  },

]
