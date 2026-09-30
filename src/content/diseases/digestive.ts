import type { Disease } from "@/content/treatments"

/**
 * Conditions for "Stomach, Intestines, Liver & Abdomen". Migrated from the
 * practice's own drdosthealth.com pages into bilingual, block-structured form
 * (definition + treatment modalities) with the real inline images. Wording is
 * written freshly; every page is reviewed by Dr. Dost before use.
 *
 * Note: the source GERD (K21.9) page currently shows mis-templated bronchitis
 * content and images, so its text was written correctly for GERD here and its
 * (mismatched) source images are omitted in favour of the illustration.
 */
export const digestiveDiseases: Disease[] = [
  {
    slug: "acute-gastritis",
    icd10: "K29.7",
    illustration: "generic",
    title: { de: "Akute Gastritis", en: "Acute Gastritis" },
    summary: {
      de: "Plötzliche Entzündung der Magenschleimhaut mit Oberbauchbeschwerden.",
      en: "A sudden inflammation of the stomach lining with upper-abdominal discomfort.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die akute Gastritis ist eine plötzliche Entzündung oder Schädigung der Magenschleimhaut – etwa durch NSAR, Alkohol, akuten Stress, Infektionen oder andere Reizstoffe. Typisch sind Oberbauchschmerzen oder Brennen, Übelkeit, Erbrechen, Völlegefühl und Appetitverlust; selten kommt es zu Magen-Darm-Blutungen.",
          en: "Acute gastritis is a sudden inflammation or injury of the stomach lining – e.g. from NSAIDs, alcohol, acute stress, infections or other irritants. Typical signs are upper-abdominal pain or burning, nausea, vomiting, bloating and loss of appetite; gastrointestinal bleeding is rare." } },
      ],
      medical: [
        { t: "sub", text: { de: "Ursache erkennen & Säurehemmung", en: "Identify the cause & suppress acid" } },
        { t: "p", text: {
          de: "Zuerst wird der Auslöser gesucht und – wenn möglich – beseitigt: unnötige NSAR, Alkohol und Rauchen meiden. Protonenpumpenhemmer (z. B. Omeprazol, Pantoprazol) senken die Magensäure und fördern die Heilung; H2-Blocker sind eine Alternative.",
          en: "Management starts by finding and, where possible, removing the trigger: avoid unnecessary NSAIDs, alcohol and smoking. Proton-pump inhibitors (e.g. omeprazole, pantoprazole) reduce gastric acid and promote healing; H2 blockers are an alternative." } },
        { t: "img", src: "diseases/acute-gastritis/medical.jpg", alt: { de: "Magenbehandlung", en: "Gastric treatment" } },
        { t: "sub", text: { de: "H. pylori & Warnzeichen", en: "H. pylori & warning signs" } },
        { t: "p", text: {
          de: "Bei nachgewiesenem Helicobacter pylori erfolgt eine leitliniengerechte Eradikation. Magen-Darm-Blutung, anhaltendes Erbrechen, starke Schmerzen oder Kreislaufbeschwerden erfordern eine rasche Abklärung, ggf. mit Magenspiegelung.",
          en: "If Helicobacter pylori is confirmed, guideline-based eradication is given. Gastrointestinal bleeding, persistent vomiting, severe pain or faintness require prompt assessment, possibly with endoscopy." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Phytotherapie", en: "Phytotherapy" } },
        { t: "ul", items: {
          de: ["Kamille bei leichten Magen-Darm-Beschwerden.","Eibischwurzel als reizlindernder Schleimstoff für die gereizte Schleimhaut.","Süßholz, insbesondere als DGL, mit Vorsicht und ärztlicher Prüfung."],
          en: ["Chamomile for mild gastrointestinal discomfort.","Marshmallow root as a soothing demulcent for the irritated mucosa.","Licorice, particularly as DGL, with caution and medical review."] } },
        { t: "sub", text: { de: "Lebensstil", en: "Lifestyle" } },
        { t: "p", text: {
          de: "Kleine, gut verträgliche Mahlzeiten und ausreichend Flüssigkeit; individuell auslösende Speisen sowie Rauchen und übermäßiger Alkohol werden gemieden. Ergänzende Maßnahmen ersetzen nicht die Behandlung einer festgestellten Ursache.",
          en: "Small, well-tolerated meals and adequate fluids; avoid individually identified trigger foods, smoking and excess alcohol. Complementary measures do not replace treatment of an identified cause." } },
      ],
      tcm: [
        { t: "sub", text: { de: "Magen-Hitze", en: "Stomach Heat" } },
        { t: "p", text: { de: "Brennen im Oberbauch, Durst und saures Aufstoßen: Magen-Hitze klären und den Magen harmonisieren.", en: "Burning epigastric discomfort, thirst and acid regurgitation: clear Stomach Heat and harmonize the Stomach." } },
        { t: "sub", text: { de: "Kälte im Magen", en: "Cold in the Stomach" } },
        { t: "p", text: { de: "Plötzlicher Schmerz, der sich mit Wärme bessert: den Magen wärmen und Kälte zerstreuen.", en: "Sudden pain that eases with warmth: warm the Stomach and disperse Cold." } },
        { t: "sub", text: { de: "Nahrungsstagnation", en: "Food stagnation" } },
        { t: "p", text: { de: "Völle und Aufstoßen nach schwerem Essen: die Stagnation abbauen und die Verdauung unterstützen.", en: "Fullness and belching after heavy meals: reduce stagnation and support digestion." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Pathogenese & Ansätze", en: "Pathogenesis & approaches" } },
        { t: "p", text: {
          de: "Brennende Magenbeschwerden werden traditionell vor allem einer Pitta- und Agni-Störung zugeschrieben. Im Vordergrund stehen eine Ernährungsanpassung (sehr scharfe, fettige oder saure Speisen reduzieren) und individuell ausgewählte Kräuter, die ärztlich auf Wechselwirkungen geprüft werden.",
          en: "Burning gastric symptoms are traditionally attributed mainly to a Pitta and Agni disturbance. The focus is dietary adjustment (reducing very spicy, greasy or acidic foods) and individually selected herbs, medically reviewed for interactions." } },
        { t: "sub", text: { de: "Ernährung", en: "Nutrition" } },
        { t: "p", text: { de: "Kleine, leichte, gut verdauliche Mahlzeiten und ausreichend Flüssigkeit während der Erholung.", en: "Small, light, easily digestible meals and adequate fluids during recovery." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Bei akuten Beschwerden stehen Ruhe und sanfte Bewegung nach Verträglichkeit im Vordergrund. Nach Besserung unterstützen moderate Bewegung, Zwerchfellatmung und Entspannung das Wohlbefinden.",
          en: "During acute symptoms, rest and gentle activity as tolerated come first. After improvement, moderate activity, diaphragmatic breathing and relaxation support wellbeing." } },
        { t: "img", src: "diseases/acute-gastritis/physio.jpg", alt: { de: "Sanfte Bewegung", en: "Gentle movement" } },
        { t: "p", text: { de: "Anstrengende Bewegung direkt nach dem Essen ist zu vermeiden.", en: "Avoid strenuous exercise right after meals." } },
      ],
    },
  },

  {
    slug: "chronic-gastritis",
    icd10: "K29.50",
    illustration: "generic",
    title: { de: "Chronische Gastritis", en: "Chronic Gastritis" },
    summary: {
      de: "Länger bestehende Entzündung der Magenschleimhaut, oft durch H. pylori.",
      en: "A long-standing inflammation of the stomach lining, often due to H. pylori.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die chronische Gastritis ist eine langanhaltende Entzündung oder Veränderung der Magenschleimhaut. Wichtige Ursachen sind eine H.-pylori-Infektion, autoimmune Formen und dauerhafte Reizstoffe. Manche Betroffene haben kaum Beschwerden; möglich sind Oberbauchbeschwerden, Übelkeit, frühe Sättigung und Appetitverlust. Atrophische Formen können mit Vitamin-B12- oder Eisenmangel einhergehen.",
          en: "Chronic gastritis is a long-lasting inflammation or change of the stomach lining. Key causes are H. pylori infection, autoimmune forms and prolonged irritants. Some people have few symptoms; possible signs are upper-abdominal discomfort, nausea, early satiety and loss of appetite. Atrophic forms can be linked to vitamin B12 or iron deficiency." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung & Säurehemmung", en: "Assessment & acid suppression" } },
        { t: "p", text: {
          de: "Die Behandlung richtet sich nach Art und Ursache: H.-pylori-Test, Überprüfung von Medikamenten und Reizstoffen sowie bei Bedarf eine Magenspiegelung mit Gewebeprobe. Bei säurebedingten Beschwerden werden Protonenpumpenhemmer eingesetzt.",
          en: "Treatment depends on the type and cause: H. pylori testing, review of medications and irritants, and endoscopy with biopsy when indicated. Proton-pump inhibitors are used for acid-related symptoms." } },
        { t: "img", src: "diseases/chronic-gastritis/medical.jpg", alt: { de: "Gesunder Magen", en: "Healthy stomach" } },
        { t: "sub", text: { de: "H. pylori & Mangelzustände", en: "H. pylori & deficiencies" } },
        { t: "p", text: {
          de: "Nachgewiesenes H. pylori wird leitliniengerecht eradiziert. Bei autoimmuner oder atrophischer Gastritis ist auf Vitamin-B12- und Eisenmangel zu achten; Reizstoffe wie NSAR, Rauchen und viel Alkohol werden gemieden.",
          en: "Confirmed H. pylori is eradicated per guidelines. In autoimmune or atrophic gastritis, watch for vitamin B12 and iron deficiency; avoid irritants such as NSAIDs, smoking and heavy alcohol." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Phytotherapie & Lebensstil", en: "Phytotherapy & lifestyle" } },
        { t: "p", text: {
          de: "Kamille und Eibischwurzel wirken beruhigend; Süßholz nur mit Vorsicht (Blutdruck, Kalium). Regelmäßige Mahlzeiten, ausreichend Schlaf, Stressmanagement und moderate Bewegung unterstützen die Verdauung; individuell auslösende Speisen werden begrenzt.",
          en: "Chamomile and marshmallow root are soothing; licorice only with caution (blood pressure, potassium). Regular meals, adequate sleep, stress management and moderate activity support digestion; individually triggering foods are limited." } },
      ],
      tcm: [
        { t: "sub", text: { de: "Milz-/Magen-Qi-Mangel", en: "Spleen/Stomach Qi deficiency" } },
        { t: "p", text: { de: "Appetitlosigkeit, Völle und Müdigkeit: das Milz-Qi stärken und den Magen harmonisieren.", en: "Poor appetite, fullness and fatigue: strengthen Spleen Qi and harmonize the Stomach." } },
        { t: "sub", text: { de: "Leber-Qi greift den Magen an", en: "Liver Qi invading the Stomach" } },
        { t: "p", text: { de: "Druck und Aufstoßen, verstärkt durch Stress: das Leber-Qi regulieren.", en: "Pressure and belching, worsened by stress: regulate Liver Qi." } },
        { t: "sub", text: { de: "Magen-Yin-Mangel", en: "Stomach Yin deficiency" } },
        { t: "p", text: { de: "Trockener Mund und innere Hitze: das Magen-Yin nähren.", en: "Dry mouth and internal heat: nourish Stomach Yin." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Ansätze & Ernährung", en: "Approaches & nutrition" } },
        { t: "p", text: {
          de: "Traditionell als Agni- und Dosha-Störung mit aggraviertem Pitta verstanden. Im Vordergrund stehen Ernährungs- und Lebensstilanpassung, regelmäßige Routinen und Stressreduktion; Kräuter werden individuell ausgewählt und ärztlich geprüft.",
          en: "Traditionally understood as an Agni and dosha disturbance with aggravated Pitta. The focus is diet and lifestyle adjustment, regular routines and stress reduction; herbs are individually selected and medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Regelmäßige moderate Bewegung unterstützt Verdauung, Gewicht und Stressabbau; sanfte Zwerchfellatmung und Entspannung tun gut. Intensive Belastung direkt nach großen Mahlzeiten wird vermieden.",
          en: "Regular moderate activity supports digestion, weight and stress relief; gentle diaphragmatic breathing and relaxation help. Avoid intense exertion right after large meals." } },
        { t: "img", src: "diseases/chronic-gastritis/physio.jpg", alt: { de: "Sanfte Bewegung", en: "Gentle movement" } },
      ],
    },
  },

  {
    slug: "duodenal-ulcer",
    icd10: "K26.9",
    illustration: "generic",
    title: { de: "Zwölffingerdarmgeschwür", en: "Duodenal Ulcer" },
    summary: {
      de: "Geschwür im Zwölffingerdarm, meist durch H. pylori oder NSAR.",
      en: "An ulcer in the duodenum, usually caused by H. pylori or NSAIDs.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Ein Zwölffingerdarmgeschwür ist ein Schleimhautdefekt im Duodenum, dem ersten Dünndarmabschnitt hinter dem Magen. Hauptursachen sind H. pylori und die Einnahme von NSAR. Möglich sind brennende oder nagende Oberbauchschmerzen, Übelkeit und mahlzeitenabhängige Beschwerden; manche Geschwüre verursachen kaum Symptome.",
          en: "A duodenal ulcer is a mucosal defect in the duodenum, the first part of the small intestine beyond the stomach. The main causes are H. pylori and NSAID use. It may cause burning or gnawing upper-abdominal pain, nausea and meal-related discomfort; some ulcers cause few symptoms." } },
        { t: "img", src: "diseases/duodenal-ulcer/definition.jpg", alt: { de: "Verdauungstrakt", en: "Digestive tract" } },
      ],
      medical: [
        { t: "sub", text: { de: "Ursache & Säurehemmung", en: "Cause & acid suppression" } },
        { t: "p", text: {
          de: "Untersucht wird auf H. pylori und NSAR; bei Alarmzeichen oder unklarem Befund erfolgt eine Magenspiegelung. Bei nachgewiesenem H. pylori wird leitliniengerecht eradiziert; Protonenpumpenhemmer fördern die Abheilung.",
          en: "Patients are assessed for H. pylori and NSAIDs; endoscopy is done for alarm features or unclear findings. Confirmed H. pylori is eradicated per guidelines; proton-pump inhibitors promote healing." } },
        { t: "sub", text: { de: "NSAR & Komplikationen", en: "NSAIDs & complications" } },
        { t: "p", text: {
          de: "NSAR werden möglichst abgesetzt oder mit Magenschutz kombiniert. Blutung, Perforation oder starke, plötzliche Schmerzen sind Notfälle und erfordern eine dringende Behandlung.",
          en: "NSAIDs are stopped where possible or combined with gastroprotection. Bleeding, perforation or sudden severe pain are emergencies requiring urgent care." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Phytotherapie & Lebensstil", en: "Phytotherapy & lifestyle" } },
        { t: "p", text: {
          de: "Schleimstoffhaltige Eibischwurzel beruhigt die Schleimhaut, Kamille wirkt mild krampflösend. Regelmäßige Mahlzeiten, Stressmanagement und Schlaf helfen; Rauchen und Alkohol werden gemieden. Ergänzende Verfahren ersetzen nicht die Eradikation und Säurehemmung.",
          en: "Mucilage-rich marshmallow root soothes the mucosa, chamomile is a mild antispasmodic. Regular meals, stress management and sleep help; smoking and alcohol are avoided. Complementary methods do not replace eradication and acid suppression." } },
        { t: "img", src: "diseases/duodenal-ulcer/naturopathic.jpg", alt: { de: "Naturheilkundliche Unterstützung", en: "Naturopathic support" } },
      ],
      tcm: [
        { t: "sub", text: { de: "Leber-Qi greift den Magen an", en: "Liver Qi invading the Stomach" } },
        { t: "p", text: { de: "Druck, Aufstoßen und Reflux, verstärkt durch Stress: das Leber-Qi regulieren und den Schmerz lindern.", en: "Pressure, belching and reflux worsened by stress: regulate Liver Qi and relieve pain." } },
        { t: "sub", text: { de: "Magen-Hitze", en: "Stomach Heat" } },
        { t: "p", text: { de: "Brennen und saures Aufstoßen mit Durst: die Magen-Hitze klären.", en: "Burning and acid regurgitation with thirst: clear Stomach Heat." } },
        { t: "sub", text: { de: "Milz-/Magen-Schwäche", en: "Spleen/Stomach weakness" } },
        { t: "p", text: { de: "Dumpfer Schmerz mit Müdigkeit: die Milz stärken und den Magen harmonisieren.", en: "Dull pain with fatigue: strengthen the Spleen and harmonize the Stomach." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Ansätze & Ernährung", en: "Approaches & nutrition" } },
        { t: "p", text: {
          de: "Traditionell vor allem als aggraviertes Pitta mit Hitze und Säure verstanden. Eine beruhigende Ernährung, regelmäßige Mahlzeiten und Stressreduktion stehen im Vordergrund; Kräuter werden individuell und ärztlich geprüft eingesetzt – ergänzend, nicht als Ersatz.",
          en: "Traditionally understood mainly as aggravated Pitta with heat and acidity. A soothing diet, regular meals and stress reduction come first; herbs are used individually and medically reviewed – complementary, not a replacement." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Moderate Bewegung fördert Stressabbau und Allgemeinbefinden; sanftes Gehen, Zwerchfellatmung und Entspannung je nach Zustand. Bei starkem Schmerz, Blutung oder Perforationsverdacht ist keine Belastung angezeigt – zuerst ärztliche Abklärung.",
          en: "Moderate activity aids stress relief and general wellbeing; gentle walking, diaphragmatic breathing and relaxation per condition. With severe pain, bleeding or suspected perforation, no exertion – medical review first." } },
        { t: "img", src: "diseases/duodenal-ulcer/physio.jpg", alt: { de: "Sanfte Bewegung", en: "Gentle movement" } },
      ],
    },
  },

  {
    slug: "duodenitis",
    icd10: "K29.8",
    illustration: "generic",
    title: { de: "Duodenitis", en: "Duodenitis" },
    summary: {
      de: "Entzündung der Zwölffingerdarmschleimhaut, oft säure- oder H.-pylori-bedingt.",
      en: "Inflammation of the duodenal lining, often acid- or H. pylori-related.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Duodenitis ist eine Entzündung der Schleimhaut des Zwölffingerdarms. Sie kann akut oder chronisch sein und ist häufig mit H. pylori, vermehrter Säure, NSAR, Alkohol oder Rauchen verbunden. Typisch sind Oberbauchschmerz oder Brennen, Übelkeit, Blähungen und Verdauungsstörungen; gelegentlich Blutungen.",
          en: "Duodenitis is an inflammation of the duodenal mucosa. It may be acute or chronic and is often linked to H. pylori, excess acid, NSAIDs, alcohol or smoking. Typical signs are upper-abdominal pain or burning, nausea, bloating and indigestion; occasionally bleeding." } },
        { t: "img", src: "diseases/duodenitis/definition.jpg", alt: { de: "Verdauungstrakt", en: "Digestive tract" } },
      ],
      medical: [
        { t: "sub", text: { de: "Ursache & Säurehemmung", en: "Cause & acid suppression" } },
        { t: "p", text: {
          de: "Die Behandlung richtet sich nach der Ursache (H. pylori, NSAR, begleitende Gastritis oder Ulkus). Bei säurebedingter Entzündung werden Protonenpumpenhemmer eingesetzt; H2-Blocker sind eine Alternative. Nachgewiesenes H. pylori wird eradiziert.",
          en: "Treatment depends on the cause (H. pylori, NSAIDs, associated gastritis or ulcer). PPIs are used for acid-related inflammation; H2 blockers are an alternative. Confirmed H. pylori is eradicated." } },
        { t: "sub", text: { de: "Reizstoffe & Warnzeichen", en: "Irritants & warning signs" } },
        { t: "p", text: {
          de: "Reizstoffe werden gemieden. Anhaltende oder starke Schmerzen, Blutung, schwarzer Stuhl, Blutarmut oder Gewichtsverlust erfordern eine Abklärung, ggf. mit Magenspiegelung.",
          en: "Irritants are avoided. Persistent or severe pain, bleeding, black stools, anemia or weight loss require assessment, possibly with endoscopy." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Phytotherapie & Lebensstil", en: "Phytotherapy & lifestyle" } },
        { t: "p", text: {
          de: "Eibischwurzel und Kamille beruhigen die Schleimhaut. Regelmäßige Mahlzeiten, ausreichend Flüssigkeit, Stressmanagement und Schlaf tun gut; große Mahlzeiten und individuelle Auslöser werden gemieden.",
          en: "Marshmallow root and chamomile soothe the mucosa. Regular meals, adequate fluids, stress management and sleep help; large meals and individual triggers are avoided." } },
        { t: "img", src: "diseases/duodenitis/naturopathic.jpg", alt: { de: "Verdauungsgesundheit", en: "Digestive health" } },
      ],
      tcm: [
        { t: "sub", text: { de: "Magen-Hitze", en: "Stomach Heat" } },
        { t: "p", text: { de: "Brennen und saures Aufstoßen: die Magen-Hitze klären und den Magen harmonisieren.", en: "Burning and acid regurgitation: clear Stomach Heat and harmonize the Stomach." } },
        { t: "sub", text: { de: "Leber-Qi greift den Magen an", en: "Liver Qi invading the Stomach" } },
        { t: "p", text: { de: "Druck, Reflux und stressabhängige Beschwerden: das Leber-Qi regulieren.", en: "Pressure, reflux and stress-related symptoms: regulate Liver Qi." } },
        { t: "sub", text: { de: "Milz-/Magen-Qi-Mangel", en: "Spleen/Stomach Qi deficiency" } },
        { t: "p", text: { de: "Mildes, wiederkehrendes Unwohlsein: das Milz-Qi stärken.", en: "Mild, recurrent discomfort: strengthen Spleen Qi." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Ansätze & Ernährung", en: "Approaches & nutrition" } },
        { t: "p", text: {
          de: "Traditionell als gestörtes Agni mit aggraviertem Pitta verstanden. Ernährungs- und Lebensstilanpassung, regelmäßige Mahlzeiten und Stressreduktion stehen im Vordergrund; Alkohol und Reizstoffe werden gemieden, Kräuter ärztlich geprüft.",
          en: "Traditionally understood as disturbed Agni with aggravated Pitta. Diet and lifestyle adjustment, regular meals and stress reduction come first; alcohol and irritants are avoided, herbs medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Moderate Bewegung unterstützt Verdauung, Gewicht und Stressabbau; sanftes Gehen, Zwerchfellatmung und Entspannung je nach Zustand. Intensive Belastung direkt nach großen Mahlzeiten wird vermieden.",
          en: "Moderate activity supports digestion, weight and stress relief; gentle walking, diaphragmatic breathing and relaxation per condition. Avoid intense exertion right after large meals." } },
        { t: "img", src: "diseases/duodenitis/physio.jpg", alt: { de: "Sanfte Bewegung", en: "Gentle movement" } },
      ],
    },
  },

  {
    slug: "functional-dyspepsia-indigestion",
    icd10: "K30",
    illustration: "generic",
    title: { de: "Funktionelle Dyspepsie (Reizmagen)", en: "Functional Dyspepsia (Indigestion)" },
    summary: {
      de: "Wiederkehrende Oberbauchbeschwerden ohne fassbare organische Ursache.",
      en: "Recurrent upper-abdominal symptoms without an identifiable organic cause.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die funktionelle Dyspepsie ist eine chronische oder wiederkehrende Störung mit Beschwerden wie Völlegefühl nach dem Essen, früher Sättigung, Oberbauchschmerz oder -brennen – ohne strukturelle Erkrankung, die dies ausreichend erklärt. Die Diagnose erfolgt nach klinischer Abklärung und Ausschluss relevanter organischer Ursachen.",
          en: "Functional dyspepsia is a chronic or recurrent disorder with symptoms such as post-meal fullness, early satiety and epigastric pain or burning – without a structural disease that adequately explains them. Diagnosis follows clinical assessment and exclusion of relevant organic causes." } },
        { t: "img", src: "diseases/functional-dyspepsia-indigestion/definition.jpg", alt: { de: "Verdauungsbeschwerden", en: "Indigestion" } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung & Therapie", en: "Assessment & therapy" } },
        { t: "p", text: {
          de: "Berücksichtigt werden Symptommuster, Medikamente, Ernährung und H. pylori; bei Alarmzeichen erfolgt eine Endoskopie. Bei Oberbauchbrennen kann ein Versuch mit einem Protonenpumpenhemmer sinnvoll sein, bei Nachweis von H. pylori dessen Eradikation. Reichen diese nicht aus, kommen Prokinetika oder Neuromodulatoren infrage.",
          en: "Symptom pattern, medications, diet and H. pylori are considered; endoscopy is done for alarm features. A PPI trial can help epigastric burning, and H. pylori is eradicated if present. If these are insufficient, prokinetics or neuromodulators may be used." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Phytotherapie & Lebensstil", en: "Phytotherapy & lifestyle" } },
        { t: "p", text: {
          de: "Standardisierte Kombinationen aus Pfefferminz- und Kümmelöl können Beschwerden lindern; Kamille wirkt beruhigend. Regelmäßige Mahlzeiten, Stressmanagement, Entspannung und Zwerchfellatmung sind hilfreich, besonders wenn Stress die Beschwerden verstärkt.",
          en: "Standardized peppermint- and caraway-oil combinations can ease symptoms; chamomile is soothing. Regular meals, stress management, relaxation and diaphragmatic breathing help, especially when stress worsens symptoms." } },
      ],
      tcm: [
        { t: "sub", text: { de: "Leber-Qi greift den Magen an", en: "Liver Qi invading the Stomach" } },
        { t: "p", text: { de: "Druck und Aufstoßen mit Bezug zu Stress: das Leber-Qi regulieren und das Magen-Qi absenken.", en: "Pressure and belching related to stress: regulate Liver Qi and direct Stomach Qi downward." } },
        { t: "sub", text: { de: "Milz-Qi-Mangel", en: "Spleen Qi deficiency" } },
        { t: "p", text: { de: "Völle nach dem Essen mit Müdigkeit: das Milz-Qi stärken.", en: "Post-meal fullness with fatigue: strengthen Spleen Qi." } },
        { t: "img", src: "diseases/functional-dyspepsia-indigestion/tcm.jpg", alt: { de: "TCM für die Verdauung", en: "TCM for digestion" } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Ansätze & Ernährung", en: "Approaches & nutrition" } },
        { t: "p", text: {
          de: "Traditionell als Störung des Agni verstanden, teils mit Vata-, Pitta- oder Kapha-Beteiligung. Empfohlen werden individuelle Ernährung, regelmäßige Essenszeiten und achtsames Essen; ausgewählte Kräuter zur Verdauungsunterstützung werden ärztlich geprüft.",
          en: "Traditionally understood as an Agni disturbance, sometimes with Vata, Pitta or Kapha involvement. Individual diet, regular meal timing and mindful eating are advised; selected digestive herbs are medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Moderate Bewegung, sanftes Gehen, Zwerchfellatmung und Entspannung unterstützen Verdauung und Wohlbefinden, besonders bei stressbedingten Beschwerden. Belastung direkt nach großen Mahlzeiten wird vermieden.",
          en: "Moderate activity, gentle walking, diaphragmatic breathing and relaxation support digestion and wellbeing, especially for stress-related symptoms. Avoid exertion right after large meals." } },
        { t: "img", src: "diseases/functional-dyspepsia-indigestion/physio.jpg", alt: { de: "Bewegung für die Verdauung", en: "Movement for digestion" } },
      ],
    },
  },

  {
    slug: "gastric-ulcer",
    icd10: "K25.9",
    illustration: "generic",
    title: { de: "Magengeschwür", en: "Gastric Ulcer" },
    summary: {
      de: "Offenes Geschwür der Magenschleimhaut, meist durch H. pylori oder NSAR.",
      en: "An open ulcer of the stomach lining, usually from H. pylori or NSAIDs.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Ein Magengeschwür ist ein offener Defekt der Magenschleimhaut, wenn die Schutzmechanismen gegen Magensäure und Verdauungsenzyme gestört sind. Häufige Ursachen sind H. pylori und NSAR. Möglich sind brennende oder dumpfe Oberbauchschmerzen, Übelkeit, frühe Sättigung und Appetitverlust. Komplikationen sind Blutung, Perforation oder Magenausgangsverengung.",
          en: "A gastric ulcer is an open defect of the stomach lining when the protective mechanisms against acid and enzymes are disrupted. Common causes are H. pylori and NSAIDs. It may cause burning or aching upper-abdominal pain, nausea, early satiety and loss of appetite. Complications include bleeding, perforation or gastric outlet obstruction." } },
        { t: "img", src: "diseases/gastric-ulcer/definition.jpg", alt: { de: "Magengesundheit", en: "Stomach health" } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnostik & Säurehemmung", en: "Diagnosis & acid suppression" } },
        { t: "p", text: {
          de: "Zur Abklärung gehören H.-pylori-Test und meist eine Magenspiegelung mit Gewebeprobe, auch um Bösartigkeit auszuschließen. Bei H. pylori wird eradiziert; Protonenpumpenhemmer fördern die Abheilung, und eine Kontroll-Endoskopie kann sinnvoll sein.",
          en: "Assessment includes H. pylori testing and usually endoscopy with biopsy, also to exclude malignancy. H. pylori is eradicated; PPIs promote healing, and follow-up endoscopy can be appropriate." } },
        { t: "sub", text: { de: "NSAR & Warnzeichen", en: "NSAIDs & warning signs" } },
        { t: "p", text: {
          de: "NSAR werden möglichst abgesetzt oder mit Magenschutz kombiniert. Bluterbrechen, schwarzer Stuhl, plötzlich starke Schmerzen oder Kreislaufbeschwerden sind Notfälle.",
          en: "NSAIDs are stopped where possible or combined with gastroprotection. Vomiting blood, black stools, sudden severe pain or faintness are emergencies." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Phytotherapie & Lebensstil", en: "Phytotherapy & lifestyle" } },
        { t: "p", text: {
          de: "Eibischwurzel beruhigt die Schleimhaut, Kamille wirkt mild krampflösend. Regelmäßige Mahlzeiten, Schlaf und Stressmanagement helfen; Rauchen und Alkohol werden gemieden. Ergänzende Verfahren ersetzen nicht die ursächliche Therapie.",
          en: "Marshmallow root soothes the mucosa, chamomile is a mild antispasmodic. Regular meals, sleep and stress management help; smoking and alcohol are avoided. Complementary methods do not replace causal therapy." } },
        { t: "img", src: "diseases/gastric-ulcer/naturopathic.jpg", alt: { de: "Natürliche Unterstützung", en: "Natural support" } },
      ],
      tcm: [
        { t: "sub", text: { de: "Leber-Qi greift den Magen an", en: "Liver Qi invading the Stomach" } },
        { t: "p", text: { de: "Schmerz, Reflux und Aufstoßen, verstärkt durch Stress: das Leber-Qi regulieren und den Schmerz lindern.", en: "Pain, reflux and belching worsened by stress: regulate Liver Qi and relieve pain." } },
        { t: "sub", text: { de: "Magen-Hitze", en: "Stomach Heat" } },
        { t: "p", text: { de: "Brennen und saures Aufstoßen mit Durst: die Magen-Hitze klären.", en: "Burning and acid regurgitation with thirst: clear Stomach Heat." } },
        { t: "sub", text: { de: "Milz-/Magen-Schwäche", en: "Spleen/Stomach weakness" } },
        { t: "p", text: { de: "Dumpfer, wiederkehrender Schmerz mit Müdigkeit: die Milz stärken und den Magen harmonisieren.", en: "Dull, recurrent pain with fatigue: strengthen the Spleen and harmonize the Stomach." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Ansätze & Ernährung", en: "Approaches & nutrition" } },
        { t: "p", text: {
          de: "Traditionell als gestörtes Agni mit aggraviertem Pitta bei Säure und Brennen verstanden. Individuelle Ernährung und Lebensstil, ausreichend Ruhe und Stressmanagement stehen im Vordergrund; Kräuter werden ärztlich geprüft.",
          en: "Traditionally understood as disturbed Agni with aggravated Pitta when acidity and burning predominate. Individual diet and lifestyle, adequate rest and stress management come first; herbs are medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Moderate Bewegung fördert Stressabbau und Allgemeinbefinden; sanftes Gehen, Zwerchfellatmung und Entspannung je nach Zustand. Bei starkem Schmerz oder Blutung ist keine Belastung angezeigt – zuerst ärztliche Abklärung.",
          en: "Moderate activity aids stress relief and general wellbeing; gentle walking, diaphragmatic breathing and relaxation per condition. With severe pain or bleeding, no exertion – medical review first." } },
        { t: "img", src: "diseases/gastric-ulcer/physio.jpg", alt: { de: "Sanfte Bewegung", en: "Gentle movement" } },
      ],
    },
  },

  {
    slug: "gastritis-unspecified",
    icd10: "K29.70",
    illustration: "generic",
    title: { de: "Gastritis, nicht näher bezeichnet", en: "Gastritis, Unspecified" },
    summary: {
      de: "Entzündung der Magenschleimhaut ohne genauere Einordnung.",
      en: "Inflammation of the stomach lining without further classification.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Gastritis ist eine Entzündung oder Reizung der Magenschleimhaut. „Nicht näher bezeichnet“ wird verwendet, wenn Art oder Ursache nicht weiter festgelegt sind. Möglich sind Oberbauchschmerz oder Brennen, Übelkeit, Erbrechen, Völlegefühl und Appetitverlust; manche Betroffene haben kaum Beschwerden.",
          en: "Gastritis is an inflammation or irritation of the stomach lining. \"Unspecified\" is used when the type or cause has not been further defined. It may cause upper-abdominal pain or burning, nausea, vomiting, bloating and loss of appetite; some people have few symptoms." } },
      ],
      medical: [
        { t: "sub", text: { de: "Ursache & Säurehemmung", en: "Cause & acid suppression" } },
        { t: "p", text: {
          de: "Die Behandlung richtet sich nach der Ursache: Überprüfung von NSAR, Alkohol und Reizstoffen sowie H.-pylori-Test bei Bedarf. Protonenpumpenhemmer senken die Säure und lassen die Schleimhaut abheilen; bei H. pylori erfolgt eine Eradikation.",
          en: "Treatment depends on the cause: reviewing NSAIDs, alcohol and irritants, and testing for H. pylori when appropriate. PPIs reduce acid and let the mucosa heal; H. pylori is eradicated." } },
        { t: "img", src: "diseases/gastritis-unspecified/medical.jpg", alt: { de: "Gesunder Magen", en: "Healthy stomach" } },
        { t: "sub", text: { de: "Warnzeichen", en: "Warning signs" } },
        { t: "p", text: {
          de: "Anhaltende Beschwerden, Blutung, Blutarmut, wiederholtes Erbrechen oder Gewichtsverlust erfordern eine Abklärung, ggf. mit Magenspiegelung.",
          en: "Persistent symptoms, bleeding, anemia, recurrent vomiting or weight loss require assessment, possibly with endoscopy." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Phytotherapie & Lebensstil", en: "Phytotherapy & lifestyle" } },
        { t: "p", text: {
          de: "Kamille und Eibischwurzel beruhigen; Süßholz mit Vorsicht; Ingwer kann Übelkeit lindern, kann aber Beschwerden auch verstärken. Kleine, regelmäßige Mahlzeiten, ausreichend Flüssigkeit, Stressmanagement und Schlaf tun gut; individuelle Auslöser werden begrenzt.",
          en: "Chamomile and marshmallow root soothe; licorice with caution; ginger may ease nausea but can also aggravate symptoms. Small, regular meals, adequate fluids, stress management and sleep help; individual triggers are limited." } },
      ],
      tcm: [
        { t: "sub", text: { de: "Leber-Qi greift den Magen an", en: "Liver Qi invading the Stomach" } },
        { t: "p", text: { de: "Druck und Aufstoßen mit Bezug zu Stress: das Leber-Qi regulieren.", en: "Pressure and belching related to stress: regulate Liver Qi." } },
        { t: "sub", text: { de: "Magen-Hitze", en: "Stomach Heat" } },
        { t: "p", text: { de: "Brennen, Durst und saures Aufstoßen: die Magen-Hitze klären.", en: "Burning, thirst and acid regurgitation: clear Stomach Heat." } },
        { t: "sub", text: { de: "Milz-/Magen-Qi-Mangel", en: "Spleen/Stomach Qi deficiency" } },
        { t: "p", text: { de: "Chronisches Unwohlsein mit Müdigkeit und Völle: das Milz-/Magen-Qi stärken.", en: "Chronic discomfort with fatigue and fullness: strengthen Spleen/Stomach Qi." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Ansätze & Ernährung", en: "Approaches & nutrition" } },
        { t: "p", text: {
          de: "Traditionell als Agni- und Dosha-Störung mit aggraviertem Pitta verstanden. Ernährungs- und Lebensstilanpassung, regelmäßige Essenszeiten und kein Überessen stehen im Vordergrund; Kräuter werden individuell und ärztlich geprüft.",
          en: "Traditionally understood as an Agni and dosha disturbance with aggravated Pitta. Diet and lifestyle adjustment, regular meal timing and not overeating come first; herbs are individual and medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Regelmäßige moderate Bewegung unterstützt Verdauung, Gewicht und Stressabbau; sanfte Zwerchfellatmung und Entspannung tun gut. Intensive Belastung direkt nach großen Mahlzeiten wird vermieden.",
          en: "Regular moderate activity supports digestion, weight and stress relief; gentle diaphragmatic breathing and relaxation help. Avoid intense exertion right after large meals." } },
        { t: "img", src: "diseases/gastritis-unspecified/physio.jpg", alt: { de: "Sanfte Bewegung", en: "Gentle movement" } },
      ],
    },
  },

  {
    slug: "gastroesophageal-reflux-disease-gerd",
    icd10: "K21.9",
    illustration: "generic",
    title: { de: "Refluxkrankheit (GERD)", en: "Gastroesophageal Reflux Disease (GERD)" },
    summary: {
      de: "Wiederkehrender Rückfluss von Mageninhalt in die Speiseröhre mit Sodbrennen.",
      en: "Recurrent backflow of stomach contents into the esophagus with heartburn.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Refluxkrankheit (GERD) ist eine chronische Erkrankung, bei der Mageninhalt wiederholt in die Speiseröhre zurückfließt und Beschwerden wie Sodbrennen und saures Aufstoßen verursacht. Die Beschwerden verstärken sich oft nach Mahlzeiten, im Liegen oder durch bestimmte Speisen und Lebensgewohnheiten.",
          en: "GERD is a chronic condition in which stomach contents repeatedly flow back into the esophagus, causing symptoms such as heartburn and acid regurgitation. Symptoms often worsen after meals, when lying down, or with certain foods and lifestyle factors." } },
      ],
      medical: [
        { t: "sub", text: { de: "Lebensstil", en: "Lifestyle" } },
        { t: "p", text: {
          de: "Bei Übergewicht hilft eine Gewichtsabnahme; große und späte Mahlzeiten werden vermieden, nach dem Essen bleibt man aufrecht, und das Kopfteil des Bettes kann erhöht werden. Individuelle Auslöser werden identifiziert.",
          en: "Weight loss helps if overweight; large and late meals are avoided, patients stay upright after eating, and the head of the bed can be raised. Individual triggers are identified." } },
        { t: "sub", text: { de: "Medikamentöse Behandlung", en: "Medication" } },
        { t: "p", text: {
          de: "Protonenpumpenhemmer (z. B. Omeprazol, Pantoprazol, Esomeprazol) kontrollieren die Beschwerden; ergänzend können Antazida oder Alginate eingesetzt werden. Anhaltende oder atypische Beschwerden gehören ärztlich abgeklärt, ggf. mit Endoskopie.",
          en: "Proton-pump inhibitors (e.g. omeprazole, pantoprazole, esomeprazole) control symptoms; antacids or alginates can be added. Persistent or atypical symptoms need medical assessment, possibly with endoscopy." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Phytotherapie & Lebensstil", en: "Phytotherapy & lifestyle" } },
        { t: "p", text: {
          de: "Eibischwurzel und Kamille beruhigen; Pfefferminz kann Reflux verstärken und ist dann ungeeignet. Kleinere Mahlzeiten, nach dem Essen nicht hinlegen, das Kopfteil erhöhen sowie gesundes Gewicht und Rauchverzicht senken die Beschwerden.",
          en: "Marshmallow root and chamomile soothe; peppermint can worsen reflux and is then unsuitable. Smaller meals, not lying down after eating, raising the head of the bed, plus a healthy weight and not smoking reduce symptoms." } },
      ],
      tcm: [
        { t: "sub", text: { de: "Leber-Qi greift den Magen an", en: "Liver Qi invading the Stomach" } },
        { t: "p", text: { de: "Aufstoßen und Druck, verstärkt durch Stress: das Leber-Qi regulieren und das Magen-Qi absenken.", en: "Belching and pressure worsened by stress: regulate Liver Qi and direct Stomach Qi downward." } },
        { t: "sub", text: { de: "Magen-Hitze", en: "Stomach Heat" } },
        { t: "p", text: { de: "Brennen und saures Aufstoßen mit Durst: die Magen-Hitze klären.", en: "Burning and acid regurgitation with thirst: clear Stomach Heat." } },
        { t: "sub", text: { de: "Milz-Qi-Mangel mit Magen-Disharmonie", en: "Spleen Qi deficiency with Stomach disharmony" } },
        { t: "p", text: { de: "Reflux mit Völle und Müdigkeit: das Milz-Qi stärken.", en: "Reflux with fullness and fatigue: strengthen Spleen Qi." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Ansätze & Ernährung", en: "Approaches & nutrition" } },
        { t: "p", text: {
          de: "Reflux wird traditionell als „Amlapitta“ mit überschüssiger Säure und aggraviertem Pitta beschrieben. Empfohlen werden eine angepasste Ernährung (fettige, scharfe, saure oder große Mahlzeiten reduzieren) und das Meiden späten Essens; Kräuter werden individuell und ärztlich geprüft.",
          en: "Reflux is traditionally described as \"Amlapitta\" with excess acidity and aggravated Pitta. An adjusted diet (reducing fatty, spicy, acidic or large meals) and avoiding late eating are advised; herbs are individual and medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Moderate Bewegung fördert ein gesundes Gewicht und das Allgemeinbefinden; sanfte Zwerchfellatmung kann unterstützen. Belastung direkt nach großen Mahlzeiten und stark bauchpressende Übungen werden vermieden.",
          en: "Moderate activity supports a healthy weight and general wellbeing; gentle diaphragmatic breathing can help. Exertion right after large meals and strongly abdomen-compressing exercises are avoided." } },
      ],
    },
  },

  {
    slug: "gerd-with-esophagitis",
    icd10: "K21.0",
    illustration: "generic",
    title: { de: "Refluxkrankheit mit Ösophagitis", en: "GERD with Esophagitis" },
    summary: {
      de: "Reflux mit Entzündung und Schädigung der Speiseröhrenschleimhaut.",
      en: "Reflux with inflammation and injury of the esophageal lining.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei GERD mit Ösophagitis führt der wiederholte Rückfluss von Mageninhalt zu einer Entzündung und Schädigung der Speiseröhrenschleimhaut. Typisch sind Sodbrennen, saures Aufstoßen, Beschwerden hinter dem Brustbein und manchmal schmerzhaftes oder erschwertes Schlucken. Anhaltende Entzündung kann Erosionen, Blutungen oder Engstellen verursachen.",
          en: "In GERD with esophagitis, repeated reflux of stomach contents causes inflammation and injury of the esophageal lining. Typical signs are heartburn, acid regurgitation, retrosternal discomfort and sometimes painful or difficult swallowing. Persistent inflammation can cause erosions, bleeding or strictures." } },
      ],
      medical: [
        { t: "sub", text: { de: "Lebensstil & Säurehemmung", en: "Lifestyle & acid suppression" } },
        { t: "p", text: {
          de: "Lebensstilmaßnahmen wie bei GERD (Gewicht, Mahlzeiten, aufrecht bleiben, Kopfteil erhöhen). Protonenpumpenhemmer heilen die Ösophagitis ab und kontrollieren die Beschwerden; Dosis und Dauer richten sich nach dem Schweregrad.",
          en: "Lifestyle measures as for GERD (weight, meals, staying upright, raising the head of the bed). Proton-pump inhibitors heal the esophagitis and control symptoms; dose and duration depend on severity." } },
        { t: "sub", text: { de: "Abklärung & Eingriffe", en: "Assessment & procedures" } },
        { t: "p", text: {
          de: "Bei Schluckstörung, Blutung, Gewichtsverlust oder Therapieversagen ist eine Endoskopie angezeigt; in ausgewählten Fällen kommt ein Antireflux-Eingriff infrage.",
          en: "For dysphagia, bleeding, weight loss or treatment failure, endoscopy is indicated; in selected cases an antireflux procedure may be considered." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Phytotherapie & Lebensstil", en: "Phytotherapy & lifestyle" } },
        { t: "p", text: {
          de: "Eibischwurzel und Kamille beruhigen; Pfefferminz meiden, wenn es Reflux auslöst. Kleinere Mahlzeiten, nicht direkt nach dem Essen hinlegen und das Kopfteil erhöhen. Ergänzend – kein Ersatz für die säurehemmende Behandlung der Ösophagitis.",
          en: "Marshmallow root and chamomile soothe; avoid peppermint if it triggers reflux. Smaller meals, not lying down right after eating, and raising the head of the bed. Complementary – not a substitute for acid-suppressive treatment of the esophagitis." } },
      ],
      tcm: [
        { t: "sub", text: { de: "Leber-Qi greift den Magen an", en: "Liver Qi invading the Stomach" } },
        { t: "p", text: { de: "Aufstoßen und Brust-/Oberbauchdruck: das Leber-Qi regulieren und das Magen-Qi absenken.", en: "Belching and chest/upper-abdominal pressure: regulate Liver Qi and direct Stomach Qi downward." } },
        { t: "sub", text: { de: "Magen-Hitze", en: "Stomach Heat" } },
        { t: "p", text: { de: "Retrosternales Brennen und saures Aufstoßen: die Magen-Hitze klären.", en: "Retrosternal burning and acid regurgitation: clear Stomach Heat." } },
        { t: "img", src: "diseases/gerd-with-esophagitis/tcm.jpg", alt: { de: "TCM bei Reflux", en: "TCM for reflux" } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Ansätze & Ernährung", en: "Approaches & nutrition" } },
        { t: "p", text: {
          de: "Traditionell als „Amlapitta“ mit aggraviertem Pitta und gestörter Verdauung beschrieben. Empfohlen werden eine angepasste Ernährung (fettige, scharfe, saure oder große Mahlzeiten reduzieren) und das Meiden späten Essens; sanfte, individuell ausgewählte Kräuter werden ärztlich geprüft.",
          en: "Traditionally described as \"Amlapitta\" with aggravated Pitta and disturbed digestion. An adjusted diet (reducing fatty, spicy, acidic or large meals) and avoiding late eating are advised; gentle, individually selected herbs are medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Moderate Bewegung unterstützt ein gesundes Gewicht und das Allgemeinbefinden; sanfte Zwerchfellatmung kann helfen. Belastung direkt nach großen Mahlzeiten und refluxauslösende Positionen werden vermieden.",
          en: "Moderate activity supports a healthy weight and general wellbeing; gentle diaphragmatic breathing can help. Exertion right after large meals and reflux-provoking positions are avoided." } },
        { t: "img", src: "diseases/gerd-with-esophagitis/physio.jpg", alt: { de: "Achtsame Bewegung", en: "Mindful movement" } },
      ],
    },
  },

  {
    slug: "irritable-bowel-syndrome-ibs",
    icd10: "K58.9",
    illustration: "generic",
    title: { de: "Reizdarmsyndrom (RDS)", en: "Irritable Bowel Syndrome (IBS)" },
    summary: {
      de: "Chronische funktionelle Darmstörung mit Bauchschmerz und verändertem Stuhlgang.",
      en: "A chronic functional bowel disorder with abdominal pain and altered bowel habits.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Das Reizdarmsyndrom ist eine chronische funktionelle Darmstörung mit wiederkehrenden Bauchschmerzen und verändertem Stuhlverhalten – Durchfall, Verstopfung oder ein Wechsel von beidem, oft mit Blähungen und Krämpfen. Es gilt als Störung der Darm-Hirn-Interaktion und verursacht in der Regel keine strukturellen Schäden. Ausprägung und Auslöser (Ernährung, Stress, Empfindlichkeit) sind sehr individuell.",
          en: "IBS is a chronic functional bowel disorder with recurrent abdominal pain and altered bowel habits – diarrhea, constipation or alternating both, often with bloating and cramps. It is a disorder of gut–brain interaction and usually causes no structural damage. Severity and triggers (diet, stress, sensitivity) vary greatly between individuals." } },
        { t: "img", src: "diseases/irritable-bowel-syndrome-ibs/definition.jpg", alt: { de: "Darmgesundheit", en: "Gut health" } },
      ],
      medical: [
        { t: "sub", text: { de: "Ernährung & Lebensstil", en: "Diet & lifestyle" } },
        { t: "p", text: {
          de: "Die Behandlung ist individuell und richtet sich nach dem vorherrschenden Stuhlmuster: regelmäßige Mahlzeiten, ausreichend Flüssigkeit, Bewegung und das Erkennen individueller Auslöser. Eine vorübergehende Low-FODMAP-Diät unter fachlicher Anleitung kann helfen.",
          en: "Treatment is individual and follows the predominant bowel pattern: regular meals, adequate fluids, activity and identifying individual triggers. A temporary low-FODMAP diet under professional guidance can help." } },
        { t: "sub", text: { de: "Gezielte Medikamente & Psyche", en: "Targeted medication & psyche" } },
        { t: "p", text: {
          de: "Bei Verstopfung helfen lösliche Ballaststoffe (Flohsamen), ggf. osmotische Laxanzien; bei Durchfall z. B. Loperamid; krampflösende Mittel bei Bauchschmerz. Psychologische Verfahren wie Verhaltenstherapie oder darmgerichtete Hypnose sind sinnvoll, wenn Stress die Beschwerden verstärkt.",
          en: "For constipation, soluble fiber (psyllium) and, if needed, osmotic laxatives help; for diarrhea, e.g. loperamide; antispasmodics for abdominal pain. Psychological approaches such as CBT or gut-directed hypnotherapy help when stress worsens symptoms." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Phytotherapie & Maßnahmen", en: "Phytotherapy & measures" } },
        { t: "p", text: {
          de: "Magensaftresistentes Pfefferminzöl kann Bauchschmerz, Blähungen und Krämpfe lindern; Flohsamen unterstützen einen regelmäßigeren Stuhlgang; Wärme (Wärmflasche) hilft bei Krämpfen. Regelmäßige Bewegung, Entspannung, Atemübungen und Yoga sind bei stressbedingten Beschwerden hilfreich.",
          en: "Enteric-coated peppermint oil can ease abdominal pain, bloating and cramps; psyllium supports more regular bowel movements; heat (a warm compress) helps cramps. Regular activity, relaxation, breathing exercises and yoga help stress-related symptoms." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird individuell nach Muster behandelt. Akupunktur kann begleitend bei Bauchbeschwerden, Stuhlunregelmäßigkeit und Stress eingesetzt werden (Evidenz uneinheitlich). Chinesische Kräuterrezepturen werden nach Diagnose ausgewählt; wegen möglicher Neben- und Wechselwirkungen ist eine fachliche Begleitung wichtig.",
          en: "In TCM, treatment is individualized by pattern. Acupuncture may be used as a complement for abdominal discomfort, bowel irregularity and stress (evidence mixed). Chinese herbal formulas are chosen per diagnosis; given possible side effects and interactions, professional guidance is important." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Ernährung, Routine & Kräuter", en: "Diet, routine & herbs" } },
        { t: "p", text: {
          de: "Im Vordergrund stehen individuelle Ernährung, geregelte Essgewohnheiten, eine feste Tagesroutine und Stressreduktion. Gut verträgliche Speisen werden bevorzugt, wiederholt auslösende Nahrungsmittel angepasst. Ausgewählte Kräuter werden mit fachlicher Begleitung eingesetzt; Yoga, Atmung, Schlaf und Bewegung ergänzen die Behandlung.",
          en: "The focus is individual nutrition, regular eating habits, a steady daily routine and stress reduction. Well-tolerated foods are preferred and repeatedly triggering foods adjusted. Selected herbs are used with professional guidance; yoga, breathing, sleep and activity complement treatment." } },
        { t: "img", src: "diseases/irritable-bowel-syndrome-ibs/ayurvedic.jpg", alt: { de: "Ayurvedische Verdauungsunterstützung", en: "Ayurvedic digestive support" } },
      ],
      // Physiotherapy is folded into the naturopathic/lifestyle advice for IBS; no separate section.
    },
  },
]
