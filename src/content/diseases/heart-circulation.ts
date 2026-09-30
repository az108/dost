import type { Disease } from "@/content/treatments"

/**
 * Conditions for "Heart, Circulation & Blood Vessels". This area is empty on
 * drdosthealth.com, so the content here is generated: original bilingual prose
 * (definition + the five treatment modalities) based on common ICD-10
 * conditions for a general/private practice. Every page is reviewed by
 * Dr. Dost before use; images are added later via the Gemini web workflow and
 * will carry the "KI-generiert" caption.
 */
export const heartCirculationDiseases: Disease[] = [
  {
    slug: "essential-hypertension",
    icd10: "I10",
    illustration: "generic",
    title: { de: "Essenzielle Hypertonie (Bluthochdruck)", en: "Essential Hypertension" },
    summary: {
      de: "Dauerhaft erhöhter Blutdruck ohne fassbare Einzelursache – ein zentraler Herz-Kreislauf-Risikofaktor.",
      en: "Persistently raised blood pressure without a single identifiable cause – a key cardiovascular risk factor.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die essenzielle (primäre) Hypertonie ist ein dauerhaft erhöhter arterieller Blutdruck ohne einzelne fassbare Ursache. Sie entsteht aus einem Zusammenspiel von Veranlagung, Alter, Ernährung, Bewegungsmangel, Übergewicht, Salz- und Alkoholkonsum sowie Stress. Häufig verursacht sie lange keine Beschwerden, erhöht aber das Risiko für Herzinfarkt, Schlaganfall, Herz- und Nierenschwäche.",
          en: "Essential (primary) hypertension is persistently raised arterial blood pressure without a single identifiable cause. It arises from an interplay of predisposition, age, diet, inactivity, excess weight, salt and alcohol intake and stress. It often causes no symptoms for a long time but raises the risk of heart attack, stroke, and heart and kidney failure." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose & Zielwerte", en: "Diagnosis & targets" } },
        { t: "p", text: {
          de: "Die Diagnose stützt sich auf wiederholte Messungen, oft ergänzt durch eine 24-Stunden-Langzeitmessung und Heimmessungen. Untersucht werden zudem Folgeschäden und weitere Risikofaktoren (Blutfette, Blutzucker, Nierenwerte). Die individuellen Zielwerte richten sich nach Alter und Begleiterkrankungen.",
          en: "Diagnosis rests on repeated measurements, often supplemented by 24-hour ambulatory monitoring and home readings. Organ effects and further risk factors (lipids, glucose, kidney values) are also assessed. Individual targets depend on age and comorbidities." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Grundlage ist die Lebensstiländerung. Reicht sie nicht aus, werden blutdrucksenkende Medikamente eingesetzt – häufig ACE-Hemmer oder AT1-Blocker, Kalziumkanalblocker und Diuretika, oft als niedrig dosierte Kombination. Die Einstellung wird regelmäßig überprüft.",
          en: "Lifestyle change is the foundation. If it is not enough, blood-pressure-lowering medicines are used – commonly ACE inhibitors or ARBs, calcium-channel blockers and diuretics, often as a low-dose combination. Control is reviewed regularly." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Ernährung & Lebensstil", en: "Nutrition & lifestyle" } },
        { t: "ul", items: {
          de: ["Salzarme, gemüse- und obstreiche Kost (DASH-Prinzip) kann den Blutdruck senken.","Gewichtsreduktion, weniger Alkohol und Rauchverzicht wirken sich günstig aus.","Regelmäßige Bewegung und Stressbewältigung unterstützen die Blutdruckregulation.","Pflanzliche Mittel sind ärztlich zu prüfen, da sie mit Blutdruckmedikamenten wechselwirken können."],
          en: ["A low-salt diet rich in vegetables and fruit (DASH principle) can lower blood pressure.","Weight reduction, less alcohol and stopping smoking are beneficial.","Regular activity and stress management support blood-pressure regulation.","Herbal products should be medically reviewed, as they can interact with blood-pressure medicines."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden Beschwerden wie Schwindel, Kopfdruck und Reizbarkeit häufig Mustern wie aufsteigendem Leber-Yang oder einem Yin-Mangel zugeordnet. Akupunktur, Ernährungsberatung und individuelle Kräuter können begleitend eingesetzt werden, ersetzen aber die Blutdruckkontrolle nicht.",
          en: "Symptoms such as dizziness, head pressure and irritability are traditionally assigned to patterns like ascending Liver Yang or a Yin deficiency. Acupuncture, dietary advice and individual herbs may be used as complementary care but do not replace blood-pressure control." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Ansätze betonen eine beruhigende Tagesroutine, ausgewogene Ernährung, Bewegung sowie Yoga und Meditation zur Stressreduktion. Kräuterpräparate sind wegen möglicher Wechselwirkungen mit Blutdruckmedikamenten ärztlich zu prüfen.",
          en: "Ayurvedic approaches emphasise a calming daily routine, balanced nutrition, activity and yoga and meditation for stress reduction. Herbal preparations should be medically reviewed because of possible interactions with blood-pressure medicines." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Regelmäßiges Ausdauertraining (z. B. zügiges Gehen, Radfahren, Schwimmen) und ergänzendes moderates Krafttraining senken den Blutdruck und verbessern die Herz-Kreislauf-Gesundheit. Intensität und Aufbau werden individuell an Belastbarkeit und Begleiterkrankungen angepasst.",
          en: "Regular aerobic training (e.g. brisk walking, cycling, swimming) plus moderate resistance training lowers blood pressure and improves cardiovascular health. Intensity and progression are individualised to capacity and comorbidities." } },
      ],
    },
  },

  {
    slug: "hypertensive-heart-disease",
    icd10: "I11.9",
    illustration: "generic",
    title: { de: "Hypertensive Herzkrankheit", en: "Hypertensive Heart Disease" },
    summary: {
      de: "Herzveränderungen infolge langjährigen Bluthochdrucks, etwa Verdickung der Herzwand.",
      en: "Heart changes from long-standing high blood pressure, such as thickening of the heart wall.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die hypertensive Herzkrankheit umfasst Veränderungen des Herzens infolge eines langjährig erhöhten Blutdrucks – insbesondere eine Verdickung der linken Herzkammer (Hypertrophie) und mit der Zeit eine nachlassende Pump- oder Füllungsfunktion. Sie kann zu Luftnot bei Belastung, Herzrhythmusstörungen und Herzschwäche führen.",
          en: "Hypertensive heart disease covers changes in the heart from long-standing raised blood pressure – in particular thickening of the left ventricle (hypertrophy) and, over time, a decline in pumping or filling function. It can lead to breathlessness on exertion, arrhythmias and heart failure." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Neben der Blutdruckmessung kommen EKG, Herzultraschall (Echokardiografie) und Laboruntersuchungen zum Einsatz, um Herzmuskelveränderungen, Funktion und Folgeschäden zu erfassen.",
          en: "Alongside blood-pressure measurement, ECG, cardiac ultrasound (echocardiography) and laboratory tests are used to assess heart-muscle changes, function and organ effects." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Im Vordergrund steht die konsequente Blutdrucksenkung; je nach Befund werden Medikamente eingesetzt, die das Herz entlasten und schützen (z. B. ACE-Hemmer/AT1-Blocker, bei Bedarf Betablocker oder Diuretika). Weitere Risikofaktoren werden mitbehandelt.",
          en: "The priority is consistent blood-pressure reduction; depending on findings, medicines that relieve and protect the heart are used (e.g. ACE inhibitors/ARBs, and beta-blockers or diuretics when needed). Further risk factors are treated alongside." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Salzarme, herzgesunde Ernährung, Gewichtsmanagement, Rauchverzicht, moderater Alkoholkonsum und Stressbewältigung unterstützen die Behandlung. Ergänzende Mittel sind ärztlich zu prüfen und ersetzen die medizinische Therapie nicht.",
          en: "A low-salt, heart-healthy diet, weight management, stopping smoking, moderate alcohol and stress management support treatment. Complementary products should be medically reviewed and do not replace medical therapy." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell können begleitende Beschwerden über Muster wie Herz- und Nieren-Schwäche oder Schleim-Stagnation gedeutet werden. Akupunktur und Kräuter kommen nur ergänzend und unter qualifizierter Aufsicht infrage.",
          en: "Accompanying symptoms may traditionally be interpreted through patterns such as Heart and Kidney deficiency or phlegm stagnation. Acupuncture and herbs are used only as complementary care and under qualified supervision." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitmaßnahmen umfassen eine ausgewogene, herzfreundliche Ernährung, geregelte Routinen sowie Yoga und Atemübungen. Kräuterpräparate sind wegen möglicher Wechselwirkungen ärztlich zu prüfen.",
          en: "Ayurvedic supportive measures include a balanced, heart-friendly diet, regular routines and yoga and breathing exercises. Herbal preparations should be medically reviewed because of possible interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Ein individuell dosiertes Ausdauer- und leichtes Krafttraining, idealerweise nach ärztlicher Abklärung der Belastbarkeit, unterstützt Herz-Kreislauf-Funktion und Wohlbefinden. Belastungsspitzen und Pressatmung werden vermieden.",
          en: "Individually dosed aerobic and light resistance training, ideally after medical assessment of exercise capacity, supports cardiovascular function and wellbeing. Exertional peaks and breath-holding straining are avoided." } },
      ],
    },
  },

  {
    slug: "coronary-artery-disease",
    icd10: "I25.1",
    illustration: "generic",
    title: { de: "Koronare Herzkrankheit", en: "Coronary Artery Disease" },
    summary: {
      de: "Verengung der Herzkranzgefäße durch Arteriosklerose mit verminderter Durchblutung des Herzmuskels.",
      en: "Narrowing of the coronary arteries from atherosclerosis, reducing blood flow to the heart muscle.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der koronaren Herzkrankheit sind die Herzkranzgefäße durch arteriosklerotische Ablagerungen verengt, sodass der Herzmuskel bei Belastung zu wenig durchblutet wird. Typisch sind Druck oder Enge in der Brust (Angina pectoris), Luftnot und Leistungsminderung; ein vollständiger Gefäßverschluss kann einen Herzinfarkt auslösen.",
          en: "In coronary artery disease the coronary vessels are narrowed by atherosclerotic deposits, so the heart muscle receives too little blood under strain. Typical features are chest pressure or tightness (angina), breathlessness and reduced capacity; a complete blockage can cause a heart attack." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Zur Abklärung dienen EKG, Belastungsuntersuchungen, Herzultraschall und bildgebende Verfahren bis hin zur Herzkatheteruntersuchung. Risikofaktoren wie Blutdruck, Blutfette, Blutzucker und Rauchen werden erfasst.",
          en: "Assessment uses ECG, stress testing, cardiac ultrasound and imaging up to coronary angiography. Risk factors such as blood pressure, lipids, glucose and smoking are assessed." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die Behandlung kombiniert Lebensstiländerung, Medikamente (z. B. Thrombozytenhemmer, Statine, Betablocker, je nach Befund weitere) und – bei relevanten Verengungen – eine Aufdehnung mit Stent oder eine Bypass-Operation.",
          en: "Treatment combines lifestyle change, medicines (e.g. antiplatelet agents, statins, beta-blockers and others as indicated) and – for significant narrowing – balloon dilation with a stent or bypass surgery." } },
        { t: "p", text: {
          de: "Wichtig: Anhaltende, neu aufgetretene oder in Ruhe bestehende Brustschmerzen können auf einen Herzinfarkt hindeuten und erfordern sofort den Notruf 112.",
          en: "Important: persistent, new-onset or resting chest pain can indicate a heart attack and requires an immediate emergency call (112)." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Eine mediterrane, ballaststoffreiche Ernährung, Rauchverzicht, Gewichtsmanagement und regelmäßige Bewegung senken das kardiovaskuläre Risiko. Ergänzende Präparate sind ärztlich zu prüfen und ersetzen die Behandlung nicht.",
          en: "A Mediterranean, fibre-rich diet, stopping smoking, weight management and regular activity reduce cardiovascular risk. Complementary products should be medically reviewed and do not replace treatment." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Brustenge wird traditionell mit Mustern wie Blut-Stase oder Qi-Mangel in Verbindung gebracht. Akupunktur und Kräuter können nur begleitend und unter qualifizierter Aufsicht eingesetzt werden.",
          en: "Chest tightness is traditionally associated with patterns such as blood stasis or Qi deficiency. Acupuncture and herbs may be used only as complementary care and under qualified supervision." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitmaßnahmen umfassen eine herzfreundliche Ernährung, Stressreduktion durch Yoga und Meditation sowie geregelte Routinen. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "Ayurvedic supportive measures include a heart-friendly diet, stress reduction through yoga and meditation, and regular routines. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Ein strukturiertes, ärztlich begleitetes Bewegungsprogramm – idealerweise im Rahmen einer kardiologischen Rehabilitation – verbessert Belastbarkeit, Durchblutung und Lebensqualität. Die Intensität wird an die individuelle Belastungsgrenze angepasst.",
          en: "A structured, medically supervised exercise programme – ideally within cardiac rehabilitation – improves capacity, circulation and quality of life. Intensity is matched to the individual exertion threshold." } },
      ],
    },
  },

  {
    slug: "angina-pectoris",
    icd10: "I20.9",
    illustration: "generic",
    title: { de: "Angina pectoris", en: "Angina Pectoris" },
    summary: {
      de: "Anfallsartige Brustenge durch vorübergehende Minderdurchblutung des Herzmuskels.",
      en: "Episodic chest tightness from temporary reduced blood flow to the heart muscle.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Angina pectoris bezeichnet anfallsartige Schmerzen, Druck oder Enge in der Brust, die durch eine vorübergehende Minderdurchblutung des Herzmuskels entstehen – meist bei körperlicher Anstrengung oder Aufregung und mit Besserung in Ruhe. Sie ist ein Warnzeichen einer koronaren Herzkrankheit.",
          en: "Angina pectoris refers to episodic pain, pressure or tightness in the chest caused by temporary reduced blood flow to the heart muscle – usually on physical exertion or excitement and easing with rest. It is a warning sign of coronary artery disease." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung & stabile Angina", en: "Assessment & stable angina" } },
        { t: "p", text: {
          de: "Die Abklärung entspricht der koronaren Herzkrankheit (EKG, Belastungstests, Bildgebung). Bei stabiler Angina werden Medikamente eingesetzt, die den Herzmuskel entlasten und Anfälle lindern (z. B. Nitrate, Betablocker, Kalziumkanalblocker) sowie das Risiko senken (Thrombozytenhemmer, Statine).",
          en: "Assessment mirrors coronary artery disease (ECG, stress tests, imaging). For stable angina, medicines that relieve the heart muscle and ease attacks (e.g. nitrates, beta-blockers, calcium-channel blockers) and reduce risk (antiplatelet agents, statins) are used." } },
        { t: "p", text: {
          de: "Wichtig: Neu auftretende, zunehmende oder in Ruhe bestehende Beschwerden (instabile Angina) sind ein Notfall und erfordern sofort den Notruf 112.",
          en: "Important: new-onset, increasing or resting symptoms (unstable angina) are an emergency and require an immediate emergency call (112)." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Herzgesunde Ernährung, Rauchverzicht, Gewichtsmanagement, Stressbewältigung und regelmäßige, angepasste Bewegung unterstützen die Behandlung. Ergänzende Präparate sind ärztlich zu prüfen.",
          en: "A heart-healthy diet, stopping smoking, weight management, stress management and regular, adapted activity support treatment. Complementary products should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Brustenge wird traditionell mit Blut-Stase oder Qi-Mangel in Verbindung gebracht; Akupunktur und Kräuter kommen nur ergänzend und unter qualifizierter Aufsicht infrage.",
          en: "Chest tightness is traditionally associated with blood stasis or Qi deficiency; acupuncture and herbs are used only as complementary care and under qualified supervision." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Stressreduktion, herzfreundliche Ernährung und geregelte Routinen. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "Ayurvedic support emphasises stress reduction, a heart-friendly diet and regular routines. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Ein ärztlich begleitetes, an die Beschwerdeschwelle angepasstes Ausdauertraining verbessert die Belastbarkeit. Anstrengungen, die regelmäßig Beschwerden auslösen, werden gemeinsam mit dem Behandlungsteam angepasst.",
          en: "Medically supervised aerobic training adapted to the symptom threshold improves capacity. Exertion that regularly triggers symptoms is adjusted together with the treatment team." } },
      ],
    },
  },

  {
    slug: "chronic-heart-failure",
    icd10: "I50.9",
    illustration: "generic",
    title: { de: "Chronische Herzinsuffizienz", en: "Chronic Heart Failure" },
    summary: {
      de: "Nachlassende Pumpleistung des Herzens mit Luftnot, Müdigkeit und Wassereinlagerungen.",
      en: "Declining pumping capacity of the heart with breathlessness, fatigue and fluid retention.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der chronischen Herzinsuffizienz kann das Herz den Körper nicht mehr ausreichend mit Blut versorgen. Typisch sind Luftnot – zunächst bei Belastung, später auch in Ruhe –, Müdigkeit, verminderte Leistungsfähigkeit und Wassereinlagerungen, etwa in den Beinen. Ursachen sind u. a. koronare Herzkrankheit, Bluthochdruck und Herzklappen- oder Herzmuskelerkrankungen.",
          en: "In chronic heart failure the heart can no longer supply the body with enough blood. Typical features are breathlessness – at first on exertion, later at rest – fatigue, reduced capacity and fluid retention, for example in the legs. Causes include coronary artery disease, high blood pressure and valve or heart-muscle disease." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Abklärung umfasst körperliche Untersuchung, EKG, Herzultraschall, Labor (u. a. natriuretische Peptide) und die Suche nach der zugrunde liegenden Ursache.",
          en: "Assessment includes physical examination, ECG, cardiac ultrasound, laboratory tests (including natriuretic peptides) and a search for the underlying cause." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die medikamentöse Therapie folgt etablierten Bausteinen (z. B. ACE-Hemmer/AT1-Blocker bzw. ARNI, Betablocker, Mineralokortikoid-Antagonisten, SGLT2-Hemmer), ergänzt durch Diuretika gegen Wassereinlagerungen. Wichtig sind Gewichtskontrolle, angepasste Salz- und Trinkmenge sowie die Behandlung der Ursache; in ausgewählten Fällen kommen Geräte- oder weitere Therapien infrage.",
          en: "Drug therapy follows established building blocks (e.g. ACE inhibitors/ARBs or ARNI, beta-blockers, mineralocorticoid antagonists, SGLT2 inhibitors), plus diuretics for fluid retention. Weight monitoring, adapted salt and fluid intake and treating the cause are important; in selected cases device or further therapies are considered." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Angepasste Salz- und Trinkmenge, tägliche Gewichtskontrolle, ausgewogene Ernährung, Rauchverzicht und maßvoller Alkoholkonsum unterstützen die Behandlung. Pflanzliche Mittel sind besonders sorgfältig ärztlich zu prüfen, da Wechselwirkungen (z. B. mit Diuretika) bedeutsam sein können.",
          en: "Adapted salt and fluid intake, daily weight monitoring, balanced nutrition, stopping smoking and moderate alcohol support treatment. Herbal products need particularly careful medical review, as interactions (e.g. with diuretics) can be significant." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden Erschöpfung und Wassereinlagerung Mustern wie Herz- und Nieren-Yang-Mangel zugeordnet. TCM-Verfahren kommen ausschließlich begleitend und unter qualifizierter Aufsicht infrage.",
          en: "Fatigue and fluid retention are traditionally assigned to patterns such as Heart and Kidney Yang deficiency. TCM approaches are used strictly as complementary care and under qualified supervision." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitmaßnahmen umfassen eine leicht verdauliche, salzbewusste Ernährung, geregelte Routinen und sanfte Bewegung. Kräuterpräparate sind wegen möglicher Wechselwirkungen ärztlich zu prüfen.",
          en: "Ayurvedic supportive measures include easily digestible, salt-aware nutrition, regular routines and gentle activity. Herbal preparations should be medically reviewed because of possible interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Ein individuell dosiertes, ärztlich begleitetes Bewegungsprogramm – etwa im Rahmen einer Herzinsuffizienz-Rehabilitation – kann Belastbarkeit und Lebensqualität verbessern. Übungsintensität und -umfang werden sorgfältig an die aktuelle Herzfunktion angepasst.",
          en: "An individually dosed, medically supervised exercise programme – for instance within heart-failure rehabilitation – can improve capacity and quality of life. Exercise intensity and volume are carefully matched to current heart function." } },
      ],
    },
  },

  {
    slug: "atrial-fibrillation",
    icd10: "I48.0",
    illustration: "generic",
    title: { de: "Vorhofflimmern", en: "Atrial Fibrillation" },
    summary: {
      de: "Unregelmäßiger, oft schneller Herzschlag mit erhöhtem Schlaganfallrisiko.",
      en: "An irregular, often fast heartbeat with an increased risk of stroke.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Vorhofflimmern ist die häufigste anhaltende Herzrhythmusstörung. Die Herzvorhöfe schlagen ungeordnet und schnell, wodurch der Puls unregelmäßig wird. Mögliche Beschwerden sind Herzstolpern, Herzrasen, Leistungsminderung, Schwindel oder Luftnot; manche Betroffene bemerken es nicht. Wichtig ist das erhöhte Risiko für Blutgerinnsel und Schlaganfall.",
          en: "Atrial fibrillation is the most common sustained arrhythmia. The atria beat in a disorganised, fast way, making the pulse irregular. Possible symptoms are fluttering, racing heart, reduced capacity, dizziness or breathlessness; some people do not notice it. The raised risk of blood clots and stroke is important." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose & Schlaganfallschutz", en: "Diagnosis & stroke prevention" } },
        { t: "p", text: {
          de: "Die Diagnose erfolgt per EKG, oft ergänzt durch ein Langzeit-EKG. Anhand des individuellen Risikos wird geprüft, ob eine blutverdünnende Behandlung zum Schlaganfallschutz nötig ist.",
          en: "Diagnosis is by ECG, often supplemented by a Holter (long-term) ECG. Based on individual risk, it is assessed whether anticoagulation is needed for stroke prevention." } },
        { t: "sub", text: { de: "Rhythmus- & Frequenzkontrolle", en: "Rhythm & rate control" } },
        { t: "p", text: {
          de: "Je nach Beschwerden und Befund wird der Puls verlangsamt (Frequenzkontrolle, z. B. Betablocker) oder ein regelmäßiger Rhythmus angestrebt (Rhythmuskontrolle, z. B. Medikamente oder eine Katheterablation). Auslöser und Begleiterkrankungen werden mitbehandelt.",
          en: "Depending on symptoms and findings, the pulse is slowed (rate control, e.g. beta-blockers) or a regular rhythm is restored (rhythm control, e.g. medicines or catheter ablation). Triggers and comorbidities are treated alongside." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Maßvoller bis kein Alkohol, ausreichender Schlaf, Stressbewältigung, Gewichtsmanagement und die Behandlung von Bluthochdruck oder Schlafapnoe können Episoden verringern. Pflanzliche und koffeinhaltige Mittel sind ärztlich zu prüfen.",
          en: "Moderate-to-no alcohol, adequate sleep, stress management, weight management and treating high blood pressure or sleep apnoea can reduce episodes. Herbal and caffeine-containing products should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Herzstolpern wird traditionell Mustern wie Herz-Qi- oder Herz-Yin-Mangel zugeordnet. Akupunktur und Kräuter kommen nur ergänzend und unter qualifizierter Aufsicht infrage und ersetzen den Schlaganfallschutz nicht.",
          en: "Palpitations are traditionally assigned to patterns such as Heart Qi or Heart Yin deficiency. Acupuncture and herbs are used only as complementary care under qualified supervision and do not replace stroke prevention." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Stressreduktion durch Yoga und Atemübungen, geregelte Routinen und eine ausgewogene Ernährung. Kräuterpräparate sind wegen möglicher Wechselwirkungen (u. a. mit Blutverdünnern) ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises stress reduction through yoga and breathing exercises, regular routines and a balanced diet. Herbal preparations should be medically reviewed because of possible interactions (including with anticoagulants)." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Regelmäßige, moderate Ausdauerbewegung unterstützt die Herz-Kreislauf-Gesundheit. Sehr intensive Ausdauerbelastungen können bei manchen Menschen Episoden begünstigen; die passende Dosierung wird individuell abgestimmt.",
          en: "Regular, moderate aerobic activity supports cardiovascular health. Very intense endurance exertion can promote episodes in some people; the right dose is set individually." } },
      ],
    },
  },

  {
    slug: "supraventricular-tachycardia",
    icd10: "I47.1",
    illustration: "generic",
    title: { de: "Supraventrikuläre Tachykardie", en: "Supraventricular Tachycardia" },
    summary: {
      de: "Anfallsartiges Herzrasen aus den oberen Herzabschnitten, meist gutartig.",
      en: "Episodic fast heartbeat arising above the ventricles, usually benign.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die supraventrikuläre Tachykardie ist ein anfallsartiges, oft plötzlich beginnendes und endendes Herzrasen, das seinen Ursprung oberhalb der Herzkammern hat. Typisch sind ein regelmäßiger, sehr schneller Puls, Herzklopfen, manchmal Schwindel oder Unruhe. Sie ist meist gutartig, kann aber belastend sein.",
          en: "Supraventricular tachycardia is an episodic, often abruptly starting and stopping fast heartbeat originating above the ventricles. Typical features are a regular, very fast pulse, palpitations and sometimes dizziness or unease. It is usually benign but can be distressing." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung & Akutmaßnahmen", en: "Assessment & acute measures" } },
        { t: "p", text: {
          de: "Ein EKG während der Episode ist besonders aufschlussreich; oft hilft ein Langzeit-EKG. Im Anfall können Vagusmanöver (z. B. Pressen, kaltes Wasser) den Rhythmus normalisieren; bei Bedarf werden Medikamente eingesetzt.",
          en: "An ECG during the episode is especially informative; a Holter ECG often helps. During an attack, vagal manoeuvres (e.g. bearing down, cold water) can restore the rhythm; medicines are used when needed." } },
        { t: "sub", text: { de: "Langfristige Behandlung", en: "Long-term treatment" } },
        { t: "p", text: {
          de: "Je nach Häufigkeit und Belastung kommen vorbeugende Medikamente oder eine Katheterablation infrage, die die zugrunde liegende Bahn gezielt behandelt und häufig zur Heilung führt.",
          en: "Depending on frequency and burden, preventive medicines or catheter ablation are options; ablation targets the underlying pathway and is often curative." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Ausreichender Schlaf, Stressbewältigung sowie die Begrenzung von Koffein, Alkohol und anregenden Substanzen können Episoden verringern. Ergänzende Mittel sind ärztlich zu prüfen.",
          en: "Adequate sleep, stress management and limiting caffeine, alcohol and stimulant substances can reduce episodes. Complementary products should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Herzrasen wird traditionell Mustern wie Herz-Yin-Mangel mit innerer Unruhe zugeordnet. Akupunktur und Kräuter kommen nur ergänzend und unter qualifizierter Aufsicht infrage.",
          en: "A racing heart is traditionally assigned to patterns such as Heart Yin deficiency with restlessness. Acupuncture and herbs are used only as complementary care under qualified supervision." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont beruhigende Routinen, Atemübungen und eine ausgewogene Ernährung. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "Ayurvedic support emphasises calming routines, breathing exercises and a balanced diet. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Regelmäßige, moderate Bewegung unterstützt die allgemeine Herz-Kreislauf-Gesundheit. Das Erlernen von Vagusmanövern und ruhiger Atmung kann im Anfall hilfreich sein.",
          en: "Regular, moderate activity supports overall cardiovascular health. Learning vagal manoeuvres and calm breathing can help during an attack." } },
      ],
    },
  },

  {
    slug: "cardiac-arrhythmia-unspecified",
    icd10: "I49.9",
    illustration: "generic",
    title: { de: "Herzrhythmusstörung", en: "Cardiac Arrhythmia" },
    summary: {
      de: "Unregelmäßiger, zu schneller oder zu langsamer Herzschlag unterschiedlicher Ursache.",
      en: "An irregular, too-fast or too-slow heartbeat of varying cause.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Herzrhythmusstörungen sind Abweichungen des normalen Herzschlags – zu schnell, zu langsam oder unregelmäßig. Sie reichen von harmlosen Extraschlägen bis zu behandlungsbedürftigen Formen. Beschwerden können Herzstolpern, Herzrasen, Schwindel, Leistungsminderung oder – selten – Ohnmacht sein.",
          en: "Cardiac arrhythmias are deviations from the normal heartbeat – too fast, too slow or irregular. They range from harmless extra beats to forms needing treatment. Symptoms can include fluttering, racing heart, dizziness, reduced capacity or – rarely – fainting." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Wichtig sind EKG und Langzeit-EKG, um die Art der Störung zu erfassen, sowie die Suche nach Ursachen (z. B. Schilddrüse, Elektrolyte, Herzerkrankung, Medikamente).",
          en: "ECG and Holter ECG are important to characterise the disturbance, along with a search for causes (e.g. thyroid, electrolytes, heart disease, medications)." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die Behandlung richtet sich nach Art und Ursache: von Beobachtung und Auslöservermeidung über Medikamente bis zu Verfahren wie Katheterablation oder – bei bestimmten langsamen Rhythmen – einem Herzschrittmacher.",
          en: "Treatment depends on the type and cause: from observation and trigger avoidance to medicines and procedures such as catheter ablation or – for certain slow rhythms – a pacemaker." } },
        { t: "p", text: {
          de: "Wichtig: Ohnmacht, anhaltendes Herzrasen mit Luftnot oder Brustschmerz erfordern eine rasche ärztliche Abklärung, im Notfall den Notruf 112.",
          en: "Important: fainting, sustained fast heartbeat with breathlessness or chest pain require prompt medical assessment, and an emergency call (112) in an emergency." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Ausreichender Schlaf, Stressbewältigung, ausgewogene Ernährung sowie die Begrenzung von Koffein und Alkohol unterstützen die Rhythmusstabilität. Ergänzende Mittel sind ärztlich zu prüfen.",
          en: "Adequate sleep, stress management, balanced nutrition and limiting caffeine and alcohol support rhythm stability. Complementary products should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Herzstolpern wird traditionell Mustern wie Herz-Qi- oder Herz-Yin-Mangel zugeordnet. Akupunktur und Kräuter kommen nur ergänzend und unter qualifizierter Aufsicht infrage.",
          en: "Palpitations are traditionally assigned to patterns such as Heart Qi or Heart Yin deficiency. Acupuncture and herbs are used only as complementary care under qualified supervision." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont beruhigende Routinen, Atemübungen und eine ausgewogene Ernährung. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "Ayurvedic support emphasises calming routines, breathing exercises and a balanced diet. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Regelmäßige, moderate Bewegung fördert die Herz-Kreislauf-Gesundheit. Bei belastungsabhängigen Beschwerden wird die Intensität gemeinsam mit dem Behandlungsteam angepasst.",
          en: "Regular, moderate activity promotes cardiovascular health. For exertion-related symptoms, intensity is adjusted together with the treatment team." } },
      ],
    },
  },

  {
    slug: "peripheral-arterial-disease",
    icd10: "I73.9",
    illustration: "generic",
    title: { de: "Periphere arterielle Verschlusskrankheit", en: "Peripheral Arterial Disease" },
    summary: {
      de: "Verengte Beinarterien mit belastungsabhängigen Schmerzen (Schaufensterkrankheit).",
      en: "Narrowed leg arteries with exertion-dependent pain (intermittent claudication).",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der peripheren arteriellen Verschlusskrankheit sind meist die Beinarterien durch Arteriosklerose verengt. Typisch sind belastungsabhängige Schmerzen in Waden oder Oberschenkeln, die zum Stehenbleiben zwingen (Schaufensterkrankheit); in fortgeschrittenen Stadien treten Ruheschmerzen oder schlecht heilende Wunden auf.",
          en: "In peripheral arterial disease the leg arteries are usually narrowed by atherosclerosis. Typical features are exertion-dependent pain in the calves or thighs that forces stopping (intermittent claudication); in advanced stages, rest pain or poorly healing wounds occur." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Zur Abklärung dienen die Messung des Knöchel-Arm-Index, Ultraschall der Gefäße und die Erfassung der Risikofaktoren. Da es sich um eine systemische Arteriosklerose handelt, werden auch Herz und Hirngefäße berücksichtigt.",
          en: "Assessment uses the ankle-brachial index, vascular ultrasound and recording of risk factors. As this is systemic atherosclerosis, the heart and brain vessels are also considered." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Grundpfeiler sind striktes Rauchverzicht, Gehtraining, Thrombozytenhemmer und Statine sowie die Behandlung von Blutdruck und Blutzucker. Bei starker Einschränkung oder kritischer Durchblutung kommen Aufdehnung, Stent oder Bypass infrage.",
          en: "Cornerstones are strict smoking cessation, walking training, antiplatelet agents and statins, plus treatment of blood pressure and glucose. For severe limitation or critical ischaemia, dilation, stenting or bypass are options." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Rauchverzicht ist die wichtigste Einzelmaßnahme. Herzgesunde Ernährung, Gewichtsmanagement und sorgfältige Fußpflege unterstützen die Behandlung. Ergänzende Mittel sind ärztlich zu prüfen.",
          en: "Stopping smoking is the single most important measure. A heart-healthy diet, weight management and careful foot care support treatment. Complementary products should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Durchblutungsstörungen werden traditionell mit Blut-Stase in Verbindung gebracht. Akupunktur und Kräuter kommen nur ergänzend und unter qualifizierter Aufsicht infrage.",
          en: "Circulatory problems are traditionally associated with blood stasis. Acupuncture and herbs are used only as complementary care under qualified supervision." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Bewegung, eine gefäßfreundliche Ernährung und geregelte Routinen. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "Ayurvedic support emphasises activity, a vessel-friendly diet and regular routines. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Strukturiertes Gehtraining ist eine zentrale Behandlung: regelmäßiges Gehen bis nahe an die Schmerzgrenze, mit Pausen, verbessert die Gehstrecke und fördert Umgehungskreisläufe. Fußgymnastik und angepasste Bewegung ergänzen das Programm.",
          en: "Structured walking training is a central treatment: regular walking close to the pain threshold, with breaks, improves walking distance and promotes collateral circulation. Foot exercises and adapted activity complement the programme." } },
      ],
    },
  },

  {
    slug: "varicose-veins-lower-extremities",
    icd10: "I83.9",
    illustration: "generic",
    title: { de: "Krampfadern der Beine", en: "Varicose Veins of the Legs" },
    summary: {
      de: "Erweiterte, geschlängelte oberflächliche Beinvenen mit Schwere- und Spannungsgefühl.",
      en: "Enlarged, tortuous superficial leg veins with heaviness and tension.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Krampfadern (Varizen) sind erweiterte, geschlängelte oberflächliche Venen der Beine, die durch eine Schwäche der Venenklappen und Venenwände entstehen. Typisch sind sichtbare Venen, Schwere-, Spannungs- oder Schweregefühl, abendliche Schwellung und mitunter nächtliche Wadenkrämpfe.",
          en: "Varicose veins are enlarged, tortuous superficial leg veins that arise from weakness of the venous valves and walls. Typical features are visible veins, heaviness, tension, evening swelling and sometimes night-time calf cramps." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Die Untersuchung umfasst die klinische Beurteilung und einen Venen-Ultraschall (Duplexsonografie), der den Blutfluss und die Klappenfunktion darstellt.",
          en: "Assessment includes clinical evaluation and a venous ultrasound (duplex scan) that shows blood flow and valve function." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Basismaßnahmen sind Kompressionsstrümpfe, Bewegung und Hochlagern. Bei Bedarf stehen moderne Verfahren zur Verfügung, etwa Katheter-gestützte Verödung (Laser oder Radiofrequenz), Verödung (Sklerosierung) oder eine Operation.",
          en: "Basic measures are compression stockings, activity and leg elevation. When needed, modern procedures are available, such as catheter-based ablation (laser or radiofrequency), sclerotherapy or surgery." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Regelmäßige Bewegung, Gewichtsmanagement, kühle Beingüsse und Hochlagern lindern Beschwerden. Pflanzliche Venenmittel (z. B. Rosskastanienextrakt) werden gelegentlich genutzt; Eignung und Wechselwirkungen sind ärztlich zu prüfen.",
          en: "Regular activity, weight management, cool leg douches and elevation ease symptoms. Herbal venous remedies (e.g. horse chestnut extract) are sometimes used; suitability and interactions should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Schwere Beine und Stauung werden traditionell mit Qi-Mangel und Blut-Stase in Verbindung gebracht. Akupunktur kann begleitend zur Anwendung kommen.",
          en: "Heavy legs and congestion are traditionally associated with Qi deficiency and blood stasis. Acupuncture may be used as complementary care." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Bewegung, Beinhochlagerung und eine ausgewogene Ernährung; sanfte Beinmassagen können als Wohlfühlmaßnahme dienen. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises activity, leg elevation and a balanced diet; gentle leg massage may serve as a comfort measure. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Aktivierung der Wadenmuskelpumpe durch Gehen, Fuß- und Zehengymnastik sowie Schwimmen fördert den venösen Rückfluss. Langes Stehen und Sitzen werden durch Bewegungspausen unterbrochen.",
          en: "Activating the calf-muscle pump through walking, foot and toe exercises and swimming promotes venous return. Prolonged standing and sitting are broken up with movement breaks." } },
      ],
    },
  },

  {
    slug: "chronic-venous-insufficiency",
    icd10: "I87.2",
    illustration: "generic",
    title: { de: "Chronisch-venöse Insuffizienz", en: "Chronic Venous Insufficiency" },
    summary: {
      de: "Dauerhaft gestörter venöser Rückfluss mit Schwellung, Hautveränderungen, evtl. offenem Bein.",
      en: "Persistently impaired venous return with swelling, skin changes and possible leg ulcers.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die chronisch-venöse Insuffizienz ist eine dauerhafte Störung des venösen Rückflusses aus den Beinen. Folgen sind Schwellungen, Schwere- und Spannungsgefühl, bräunliche Hautverfärbungen und Verhärtungen; in fortgeschrittenen Stadien kann ein offenes Bein (Ulcus cruris) entstehen.",
          en: "Chronic venous insufficiency is a persistent impairment of venous return from the legs. Consequences are swelling, heaviness and tension, brownish skin discolouration and hardening; in advanced stages a leg ulcer (ulcus cruris) can develop." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung & Kompression", en: "Assessment & compression" } },
        { t: "p", text: {
          de: "Die Diagnose stützt sich auf klinische Untersuchung und Venen-Ultraschall. Die Kompressionstherapie (Strümpfe oder Verbände) ist die zentrale Behandlung; sie reduziert Schwellung und Beschwerden und unterstützt die Wundheilung.",
          en: "Diagnosis rests on clinical examination and venous ultrasound. Compression therapy (stockings or bandages) is the central treatment; it reduces swelling and symptoms and supports wound healing." } },
        { t: "sub", text: { de: "Weitere Maßnahmen", en: "Further measures" } },
        { t: "p", text: {
          de: "Bewegung, Hautpflege und die Behandlung zugrunde liegender Krampfadern gehören dazu. Ein offenes Bein wird nach modernen Prinzipien der Wundbehandlung versorgt.",
          en: "Activity, skin care and treating underlying varicose veins are included. A leg ulcer is managed according to modern wound-care principles." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Bewegung, Gewichtsmanagement, sorgfältige Hautpflege und Hochlagern unterstützen die Behandlung. Pflanzliche Venenmittel sind ärztlich zu prüfen und ersetzen die Kompression nicht.",
          en: "Activity, weight management, careful skin care and elevation support treatment. Herbal venous remedies should be medically reviewed and do not replace compression." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Stauung und Schwellung werden traditionell mit Qi-Mangel, Feuchtigkeit und Blut-Stase in Verbindung gebracht. Akupunktur kann begleitend eingesetzt werden.",
          en: "Congestion and swelling are traditionally associated with Qi deficiency, dampness and blood stasis. Acupuncture may be used as complementary care." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Bewegung, Beinhochlagerung, Hautpflege und eine ausgewogene Ernährung. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises activity, leg elevation, skin care and a balanced diet. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Gezielte Aktivierung der Wadenmuskelpumpe, Gehtraining und Bewegungsübungen fördern den venösen Rückfluss und ergänzen die Kompressionstherapie. Langes Stehen und Sitzen werden vermieden.",
          en: "Targeted activation of the calf-muscle pump, walking training and movement exercises promote venous return and complement compression therapy. Prolonged standing and sitting are avoided." } },
      ],
    },
  },

  {
    slug: "deep-vein-thrombosis",
    icd10: "I80.2",
    illustration: "generic",
    title: { de: "Tiefe Beinvenenthrombose", en: "Deep Vein Thrombosis" },
    summary: {
      de: "Blutgerinnsel in einer tiefen Vene, meist im Bein – mit Risiko einer Lungenembolie.",
      en: "A blood clot in a deep vein, usually in the leg – with a risk of pulmonary embolism.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der tiefen Beinvenenthrombose bildet sich ein Blutgerinnsel in einer tiefen Vene, meist im Bein oder Becken. Typisch sind einseitige Schwellung, Schmerz, Wärme und eine bläuliche Verfärbung. Löst sich ein Gerinnsel, kann es zu einer lebensbedrohlichen Lungenembolie kommen.",
          en: "In deep vein thrombosis a blood clot forms in a deep vein, usually in the leg or pelvis. Typical features are one-sided swelling, pain, warmth and bluish discolouration. If a clot breaks off, it can cause a life-threatening pulmonary embolism." } },
        { t: "p", text: {
          de: "Wichtig: Plötzliche Luftnot, Brustschmerz oder Bluthusten können auf eine Lungenembolie hindeuten und erfordern sofort den Notruf 112.",
          en: "Important: sudden breathlessness, chest pain or coughing up blood can indicate a pulmonary embolism and require an immediate emergency call (112)." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Abklärung kombiniert klinische Wahrscheinlichkeit, D-Dimer-Bluttest und Venen-Ultraschall (Kompressionssonografie). Bei Verdacht erfolgt eine rasche Diagnostik.",
          en: "Assessment combines clinical probability, a D-dimer blood test and venous ultrasound (compression sonography). When suspected, evaluation is carried out promptly." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Grundlage ist die Gerinnungshemmung (Antikoagulation) über einen ärztlich festgelegten Zeitraum, ergänzt durch Kompression und Bewegung nach Vorgabe. Ursachen und Risikofaktoren werden abgeklärt.",
          en: "The basis is anticoagulation for a medically defined period, plus compression and activity as advised. Causes and risk factors are investigated." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Ergänzende Maßnahmen betreffen vor allem Vorbeugung und Erholung: ausreichend Bewegung, Flüssigkeitszufuhr und Gewichtsmanagement. Pflanzliche Mittel sind wegen möglicher Wechselwirkungen mit Gerinnungshemmern besonders sorgfältig ärztlich zu prüfen.",
          en: "Complementary measures mainly concern prevention and recovery: adequate activity, hydration and weight management. Herbal products need particularly careful medical review because of possible interactions with anticoagulants." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird eine Thrombose dem Muster der Blut-Stase zugeordnet. TCM-Verfahren kommen allenfalls in der Erholungsphase begleitend und unter qualifizierter Aufsicht infrage und ersetzen die Gerinnungshemmung nicht.",
          en: "Thrombosis is traditionally assigned to the pattern of blood stasis. TCM approaches may at most be used during recovery as complementary care under qualified supervision and do not replace anticoagulation." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung in der Erholungsphase betont Bewegung, ausgewogene Ernährung und geregelte Routinen. Kräuterpräparate sind wegen der Wechselwirkung mit Blutverdünnern ärztlich zu prüfen.",
          en: "Ayurvedic support during recovery emphasises activity, balanced nutrition and regular routines. Herbal preparations should be medically reviewed because of interaction with blood thinners." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Nach ärztlicher Freigabe fördern frühzeitige, dosierte Bewegung und Gehtraining unter Kompression die Erholung und beugen Spätfolgen (postthrombotisches Syndrom) vor. Der Wiederaufbau erfolgt schrittweise.",
          en: "After medical clearance, early, dosed activity and walking training under compression aid recovery and prevent late effects (post-thrombotic syndrome). Rebuilding is gradual." } },
      ],
    },
  },

  {
    slug: "superficial-thrombophlebitis",
    icd10: "I80.0",
    illustration: "generic",
    title: { de: "Oberflächliche Thrombophlebitis", en: "Superficial Thrombophlebitis" },
    summary: {
      de: "Entzündung mit Gerinnsel in einer oberflächlichen Vene – schmerzhafter, geröteter Strang.",
      en: "Inflammation with a clot in a superficial vein – a painful, reddened cord.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die oberflächliche Thrombophlebitis ist eine Entzündung einer oberflächlichen Vene mit begleitendem Blutgerinnsel. Typisch ist ein schmerzhafter, geröteter, überwärmter und verhärteter Venenstrang, oft im Bereich von Krampfadern. Meist gutartig, kann sie sich in seltenen Fällen in die tiefen Venen ausbreiten.",
          en: "Superficial thrombophlebitis is inflammation of a superficial vein with an accompanying blood clot. Typical is a painful, reddened, warm and hardened venous cord, often in the area of varicose veins. Usually benign, it can in rare cases extend into the deep veins." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung & Behandlung", en: "Assessment & treatment" } },
        { t: "p", text: {
          de: "Die Beurteilung erfolgt klinisch, bei ausgedehntem Befund ergänzt durch Ultraschall, um eine Beteiligung der tiefen Venen auszuschließen. Behandelt wird mit Kompression, Bewegung, kühlenden und entzündungshemmenden Maßnahmen; bei ausgedehnter oder gefährdender Lage kann eine Gerinnungshemmung nötig sein.",
          en: "Evaluation is clinical, supplemented by ultrasound for extensive findings to exclude deep-vein involvement. Treatment uses compression, activity, cooling and anti-inflammatory measures; for extensive or threatening findings, anticoagulation may be needed." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Kühlende Umschläge, Bewegung und Hochlagern lindern Beschwerden. Pflanzliche entzündungshemmende Mittel sind ärztlich zu prüfen. Bettruhe wird vermieden, um den venösen Rückfluss zu erhalten.",
          en: "Cooling compresses, activity and elevation ease symptoms. Herbal anti-inflammatory products should be medically reviewed. Bed rest is avoided to maintain venous return." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Entzündliche, gestaute Venen werden traditionell mit Feuchte-Hitze und Blut-Stase in Verbindung gebracht. Begleitende Akupunktur ist möglich.",
          en: "Inflamed, congested veins are traditionally associated with damp-heat and blood stasis. Complementary acupuncture is possible." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Bewegung, kühlende Maßnahmen und eine ausgewogene Ernährung. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises activity, cooling measures and a balanced diet. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Aktivierung der Wadenmuskelpumpe durch Gehen und Bewegungsübungen unter Kompression unterstützt den venösen Rückfluss und die Abheilung. Langes Stehen und Sitzen werden vermieden.",
          en: "Activating the calf-muscle pump through walking and movement exercises under compression supports venous return and healing. Prolonged standing and sitting are avoided." } },
      ],
    },
  },

  {
    slug: "hypotension",
    icd10: "I95.9",
    illustration: "generic",
    title: { de: "Niedriger Blutdruck (Hypotonie)", en: "Low Blood Pressure (Hypotension)" },
    summary: {
      de: "Niedriger Blutdruck mit Müdigkeit, Schwindel oder Benommenheit – meist harmlos.",
      en: "Low blood pressure with fatigue, dizziness or light-headedness – usually harmless.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Von Hypotonie spricht man bei dauerhaft niedrigem Blutdruck. Mögliche Beschwerden sind Müdigkeit, Schwindel, Benommenheit, Konzentrationsschwäche oder kalte Hände und Füße, besonders beim raschen Aufstehen. Meist ist sie harmlos; selten steckt eine behandelbare Ursache dahinter.",
          en: "Hypotension refers to persistently low blood pressure. Possible symptoms are fatigue, dizziness, light-headedness, poor concentration or cold hands and feet, especially on standing up quickly. It is usually harmless; rarely a treatable cause lies behind it." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung & Behandlung", en: "Assessment & treatment" } },
        { t: "p", text: {
          de: "Bei Beschwerden werden mögliche Ursachen (z. B. Flüssigkeitsmangel, Medikamente, Hormon- oder Herzerkrankungen) geprüft. Im Vordergrund stehen einfache Maßnahmen; nur selten sind Medikamente nötig.",
          en: "For symptoms, possible causes (e.g. dehydration, medications, hormonal or heart conditions) are checked. Simple measures come first; medicines are rarely needed." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Alltagsmaßnahmen", en: "Everyday measures" } },
        { t: "ul", items: {
          de: ["Ausreichend trinken und auf angemessene Salzzufuhr achten (sofern ärztlich vertretbar).","Langsam aufstehen und den Kreislauf mit Bewegung ankurbeln.","Wechselduschen und Trockenbürsten können den Kreislauf anregen.","Mehrere kleinere Mahlzeiten statt großer Portionen."],
          en: ["Drink enough and ensure adequate salt intake (where medically appropriate).","Stand up slowly and stimulate circulation with movement.","Alternating showers and dry brushing can stimulate circulation.","Several smaller meals rather than large portions."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Müdigkeit und niedriger Kreislauf werden traditionell einem Qi- oder Yang-Mangel zugeordnet. Akupunktur und wärmende, kräftigende Ernährung können begleitend genutzt werden.",
          en: "Fatigue and low circulation are traditionally assigned to a Qi or Yang deficiency. Acupuncture and warming, strengthening nutrition may be used as complementary care." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont geregelte Routinen, ausreichend Flüssigkeit, nährende Ernährung und maßvolle Bewegung. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises regular routines, adequate fluids, nourishing nutrition and moderate activity. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Regelmäßige, moderate Bewegung sowie Kreislauftraining (z. B. Wechselduschen, Beingymnastik) stabilisieren den Blutdruck. Beim Aufstehen helfen Anspannen der Beinmuskulatur und langsames Aufrichten.",
          en: "Regular, moderate activity and circulation training (e.g. alternating showers, leg exercises) stabilise blood pressure. When standing up, tensing the leg muscles and rising slowly help." } },
      ],
    },
  },

  {
    slug: "orthostatic-hypotension",
    icd10: "I95.1",
    illustration: "generic",
    title: { de: "Orthostatische Hypotonie", en: "Orthostatic Hypotension" },
    summary: {
      de: "Blutdruckabfall beim Aufstehen mit Schwindel oder Schwarzwerden vor den Augen.",
      en: "A drop in blood pressure on standing, with dizziness or visual blackout.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der orthostatischen Hypotonie fällt der Blutdruck kurz nach dem Aufstehen deutlich ab. Typisch sind Schwindel, Benommenheit, Schwarzwerden vor den Augen oder – selten – kurze Ohnmacht. Ursachen sind u. a. Flüssigkeitsmangel, Medikamente, langes Liegen oder Störungen der Kreislaufregulation.",
          en: "In orthostatic hypotension, blood pressure drops markedly shortly after standing up. Typical features are dizziness, light-headedness, visual blackout or – rarely – brief fainting. Causes include dehydration, medications, prolonged bed rest or disturbances of circulatory regulation." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung & Behandlung", en: "Assessment & treatment" } },
        { t: "p", text: {
          de: "Blutdruckmessungen im Liegen und Stehen sichern die Diagnose. Auslösende Medikamente werden überprüft, Ursachen behandelt. Im Vordergrund stehen Verhaltensmaßnahmen; nur selten sind Medikamente nötig.",
          en: "Blood-pressure measurements lying and standing confirm the diagnosis. Triggering medications are reviewed and causes treated. Behavioural measures come first; medicines are rarely needed." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Alltagsmaßnahmen", en: "Everyday measures" } },
        { t: "ul", items: {
          de: ["Ausreichend trinken; angemessene Salzzufuhr, sofern ärztlich vertretbar.","Langsam und stufenweise aufstehen, besonders morgens.","Beine vor dem Aufstehen anspannen; ggf. Kompressionsstrümpfe.","Auslöser wie große Hitze, Alkohol und schwere Mahlzeiten meiden."],
          en: ["Drink enough; appropriate salt intake where medically acceptable.","Stand up slowly and in stages, especially in the morning.","Tense the legs before standing; consider compression stockings.","Avoid triggers such as strong heat, alcohol and heavy meals."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Schwindel beim Aufstehen wird traditionell einem Qi- oder Yang-Mangel zugeordnet. Akupunktur und kräftigende Ernährung können begleitend genutzt werden.",
          en: "Dizziness on standing is traditionally assigned to a Qi or Yang deficiency. Acupuncture and strengthening nutrition may be used as complementary care." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont geregelte Routinen, ausreichend Flüssigkeit und nährende Ernährung. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises regular routines, adequate fluids and nourishing nutrition. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Kreislauftraining, Beingymnastik, das Anspannen der Beinmuskulatur vor dem Aufstehen und – nach ärztlicher Abstimmung – ein schrittweises Stehtraining verbessern die Kreislaufregulation.",
          en: "Circulation training, leg exercises, tensing the leg muscles before standing and – after medical agreement – gradual standing training improve circulatory regulation." } },
      ],
    },
  },

  {
    slug: "palpitations",
    icd10: "R00.2",
    illustration: "generic",
    title: { de: "Herzklopfen (Palpitationen)", en: "Palpitations" },
    summary: {
      de: "Bewusstes, oft unangenehmes Wahrnehmen des Herzschlags – meist harmlos.",
      en: "A conscious, often unpleasant awareness of the heartbeat – usually harmless.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Als Palpitationen bezeichnet man das bewusste, oft als unangenehm empfundene Wahrnehmen des eigenen Herzschlags – etwa als Stolpern, Rasen oder kräftiges Pochen. Ursachen reichen von harmlosen Auslösern (Aufregung, Koffein, Anstrengung) bis zu Herzrhythmusstörungen, Schilddrüsen- oder anderen Erkrankungen.",
          en: "Palpitations are a conscious, often unpleasant awareness of one's own heartbeat – as skipping, racing or forceful pounding. Causes range from harmless triggers (excitement, caffeine, exertion) to arrhythmias, thyroid or other conditions." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Wichtig ist, gefährliche Ursachen auszuschließen: EKG, bei Bedarf Langzeit-EKG, Laboruntersuchungen (u. a. Schilddrüse, Blutbild) und die Erfassung von Begleitsymptomen. Häufig zeigt sich keine bedrohliche Ursache.",
          en: "It is important to exclude dangerous causes: ECG, Holter ECG if needed, laboratory tests (including thyroid, blood count) and assessment of accompanying symptoms. Often no threatening cause is found." } },
        { t: "p", text: {
          de: "Wichtig: Herzklopfen mit Ohnmacht, Brustschmerz oder ausgeprägter Luftnot erfordert eine rasche ärztliche Abklärung, im Notfall den Notruf 112.",
          en: "Important: palpitations with fainting, chest pain or marked breathlessness require prompt medical assessment, and an emergency call (112) in an emergency." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Stressbewältigung, ausreichender Schlaf sowie die Begrenzung von Koffein, Nikotin und Alkohol können harmloses Herzklopfen verringern. Ergänzende Mittel sind ärztlich zu prüfen.",
          en: "Stress management, adequate sleep and limiting caffeine, nicotine and alcohol can reduce harmless palpitations. Complementary products should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Herzklopfen wird traditionell Mustern wie Herz-Qi- oder Herz-Yin-Mangel mit innerer Unruhe zugeordnet. Akupunktur und beruhigende Kräuter können begleitend genutzt werden.",
          en: "Palpitations are traditionally assigned to patterns such as Heart Qi or Heart Yin deficiency with restlessness. Acupuncture and calming herbs may be used as complementary care." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont beruhigende Routinen, Atemübungen und Meditation sowie eine ausgewogene Ernährung. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises calming routines, breathing exercises and meditation, plus a balanced diet. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Atem- und Entspannungsübungen sowie regelmäßige, moderate Bewegung können stressbedingtes Herzklopfen lindern und die Herz-Kreislauf-Gesundheit stärken.",
          en: "Breathing and relaxation exercises and regular, moderate activity can ease stress-related palpitations and strengthen cardiovascular health." } },
      ],
    },
  },
]
