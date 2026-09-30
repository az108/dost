import type { Disease } from "@/content/treatments"

/**
 * Conditions for "Psychiatric & Neurological Conditions". Migrated from the
 * practice's own drdosthealth.com pages into bilingual, block-structured form
 * (definition + treatment modalities) with the real inline images. Wording is
 * written freshly; every page is reviewed by Dr. Dost before use.
 *
 * Notes for review:
 * - The source "Generalized Anxiety Disorder" page is currently an empty
 *   placeholder (lorem-ipsum only), so its content here is written from scratch
 *   (ICD F41.1) and it uses the illustration rather than a source image.
 * - Several source images are labelled "AI Generated" (the physiotherapy and
 *   some naturopathic/Ayurvedic wellness illustrations); those image blocks are
 *   marked `ai: true` so they carry the "KI-generiert" caption. The definition
 *   photos are real stock images and are left unmarked.
 * - Panic disorder's section 2 on the source is "Lifestyle & Self-Management";
 *   it is placed in the naturopathic slot with a clear sub-heading.
 */
export const psychiatricDiseases: Disease[] = [
  {
    slug: "generalized-anxiety-disorder",
    icd10: "F41.1",
    illustration: "generic",
    title: { de: "Generalisierte Angststörung", en: "Generalized Anxiety Disorder" },
    summary: {
      de: "Anhaltende, schwer kontrollierbare Angst und Sorge über viele Alltagsbereiche.",
      en: "Persistent, hard-to-control anxiety and worry across many areas of daily life.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die generalisierte Angststörung ist durch eine anhaltende, übermäßige Angst und Sorge über viele alltägliche Bereiche gekennzeichnet, die schwer zu kontrollieren ist und über Monate anhält. Typische Begleitsymptome sind innere Unruhe, rasche Ermüdbarkeit, Konzentrationsschwierigkeiten, Reizbarkeit, Muskelverspannung und Schlafstörungen.",
          en: "Generalized anxiety disorder is marked by persistent, excessive anxiety and worry about many everyday areas, which is hard to control and lasts for months. Typical accompanying symptoms are restlessness, fatigue, difficulty concentrating, irritability, muscle tension and sleep problems." } },
        { t: "p", text: {
          de: "Die Sorgen stehen oft in keinem Verhältnis zur tatsächlichen Situation und beeinträchtigen Alltag, Beruf und Beziehungen. Zur Diagnose gehört eine sorgfältige Abklärung, um körperliche Ursachen (etwa eine Schilddrüsenüberfunktion), Medikamenten- oder Substanzwirkungen sowie andere psychische Erkrankungen zu berücksichtigen.",
          en: "The worry is often out of proportion to the actual situation and affects daily life, work and relationships. Diagnosis includes a careful assessment to consider physical causes (such as an overactive thyroid), medication or substance effects and other mental health conditions." } },
      ],
      medical: [
        { t: "sub", text: { de: "Klinische Abklärung", en: "Clinical assessment" } },
        { t: "p", text: {
          de: "Erfasst werden Dauer und Ausmaß der Sorgen, Auswirkungen auf den Alltag, Begleiterkrankungen, Medikamente und Substanzen sowie mögliche körperliche Ursachen. Suizidgedanken und Sicherheit werden stets mitbeurteilt.",
          en: "Assessment covers the duration and extent of worry, the impact on daily life, comorbidities, medication and substances, and possible physical causes. Suicidal thoughts and safety are always assessed as well." } },
        { t: "sub", text: { de: "Psychotherapie", en: "Psychological treatment" } },
        { t: "p", text: {
          de: "Die kognitive Verhaltenstherapie (KVT) ist gut belegt. Sie umfasst unter anderem Psychoedukation, den Umgang mit Sorgengedanken, Entspannungs- und Expositionsverfahren sowie den Abbau von Vermeidungsverhalten.",
          en: "Cognitive behavioural therapy (CBT) is well established. It includes psychoeducation, working with worry thoughts, relaxation and exposure techniques and reducing avoidance behaviour." } },
        { t: "sub", text: { de: "Medikamente", en: "Medication" } },
        { t: "p", text: {
          de: "Bei Bedarf werden Antidepressiva, insbesondere SSRI oder SNRI, eingesetzt; Auswahl und Überwachung erfolgen individuell durch Fachpersonal. Benzodiazepine sind wegen des Abhängigkeitsrisikos nur kurzfristig und sehr zurückhaltend zu verwenden.",
          en: "When needed, antidepressants – particularly SSRIs or SNRIs – are used; selection and monitoring are individualised by professionals. Benzodiazepines, because of the risk of dependence, should be used only short-term and very sparingly." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Lebensstil & Phytotherapie", en: "Lifestyle & phytotherapy" } },
        { t: "p", text: {
          de: "Regelmäßige Bewegung, ausreichender und geregelter Schlaf, eine ausgewogene Ernährung sowie die Reduktion von Koffein, Nikotin und Alkohol können Anspannung und Schlafprobleme verringern. Pflanzliche Mittel wie Lavendel- oder Baldrianpräparate werden mitunter unterstützend genutzt; Wirksamkeit und Wechselwirkungen sind ärztlich zu prüfen.",
          en: "Regular exercise, sufficient and consistent sleep, a balanced diet and reducing caffeine, nicotine and alcohol can lessen tension and sleep problems. Herbal products such as lavender or valerian preparations are sometimes used as support; effectiveness and interactions should be medically reviewed." } },
        { t: "sub", text: { de: "Entspannung", en: "Relaxation" } },
        { t: "p", text: {
          de: "Achtsamkeit, progressive Muskelentspannung und strukturierte Stressbewältigung sind hilfreiche ergänzende Maßnahmen.",
          en: "Mindfulness, progressive muscle relaxation and structured stress management are helpful supportive measures." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Angstsymptome werden in der TCM traditionell nach dem individuellen Muster und nicht nach der biomedizinischen Diagnose gedeutet.",
          en: "Anxiety symptoms are traditionally interpreted in TCM by the individual pattern rather than the biomedical diagnosis." } },
        { t: "sub", text: { de: "Leber-Qi-Stagnation", en: "Liver Qi stagnation" } },
        { t: "p", text: { de: "Anspannung, Reizbarkeit, häufiges Seufzen und stressabhängige Beschwerden: die Leber besänftigen und das Qi regulieren.", en: "Tension, irritability, frequent sighing and stress-related complaints: soothe the Liver and regulate Qi." } },
        { t: "sub", text: { de: "Herz- und Milz-Schwäche", en: "Heart and Spleen deficiency" } },
        { t: "p", text: { de: "Sorgen, Müdigkeit, Grübeln, Herzklopfen und Schlafstörungen: das Herz nähren und das Milz-Qi stärken.", en: "Worry, fatigue, rumination, palpitations and disturbed sleep: nourish the Heart and strengthen Spleen Qi." } },
        { t: "sub", text: { de: "Yin-Mangel mit innerer Unruhe", en: "Yin deficiency with restlessness" } },
        { t: "p", text: {
          de: "Innere Unruhe, nächtliches Schwitzen und Hitzegefühl: das Yin nähren und den Geist beruhigen. Akupunktur und Kräuter werden individuell und begleitend eingesetzt.",
          en: "Inner restlessness, night sweats and sensations of heat: nourish Yin and calm the mind. Acupuncture and herbs are used individually and as complementary care." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Traditionelle Sichtweise", en: "Traditional perspective" } },
        { t: "p", text: {
          de: "Angstsymptome werden traditionell vor allem mit einem Vata-Ungleichgewicht in Verbindung gebracht und im Rahmen von Konstitution, Tagesroutine, Schlaf und Verdauung betrachtet. Diese Begriffe gehören zum ayurvedischen Modell und sind keine biomedizinischen Erklärungen.",
          en: "Anxiety symptoms are traditionally linked mainly with a Vata imbalance and considered within constitution, daily routine, sleep and digestion. These concepts belong to the Ayurvedic model and are not biomedical explanations." } },
        { t: "sub", text: { de: "Ansätze", en: "Approaches" } },
        { t: "p", text: {
          de: "Betont werden geregelte Tagesabläufe, ausreichend Schlaf und Bewegung sowie Yoga, Meditation und Atemübungen (Pranayama). Kräuterpräparate sind ärztlich zu prüfen, besonders in Kombination mit Medikamenten.",
          en: "The emphasis is on regular daily routines, adequate sleep and activity, and yoga, meditation and breathing exercises (pranayama). Herbal preparations should be medically reviewed, especially in combination with medication." } },
      ],
      physio: [
        { t: "sub", text: { de: "Bewegung & Entspannung", en: "Exercise & relaxation" } },
        { t: "p", text: {
          de: "Regelmäßige Bewegung wie Gehen, Radfahren, Schwimmen, Yoga oder Krafttraining kann Stimmung, Schlaf und Stressregulation unterstützen. Atemübungen werden behutsam eingeführt, da eine übermäßige Konzentration auf die Atmung oder bewusstes Überatmen bei manchen Menschen Angstgefühle auslösen kann.",
          en: "Regular activity such as walking, cycling, swimming, yoga or resistance training can support mood, sleep and stress regulation. Breathing exercises are introduced gently, as excessive focus on the breath or deliberate over-breathing can trigger anxiety in some people." } },
        { t: "p", text: {
          de: "Wichtig: Anhaltende schwere Beschwerden, Suizidgedanken, Selbstverletzung oder das Gefühl, sich nicht mehr sicher zu fühlen, erfordern eine dringende professionelle Abklärung. In einem akuten Notfall in Deutschland die 112 wählen.",
          en: "Important: persistent severe symptoms, suicidal thoughts, self-harm or feeling unable to stay safe require urgent professional assessment. In an immediate emergency in Germany, call 112." } },
      ],
    },
  },

  {
    slug: "panic-disorder",
    icd10: "F41.0",
    illustration: "generic",
    title: { de: "Panikstörung", en: "Panic Disorder" },
    summary: {
      de: "Wiederkehrende, unerwartete Panikattacken mit anhaltender Sorge vor weiteren Attacken.",
      en: "Recurrent, unexpected panic attacks with ongoing worry about further attacks.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Panikstörung ist eine Angsterkrankung mit wiederkehrenden, unerwarteten Panikattacken. Eine Panikattacke ist eine plötzliche Episode intensiver Angst oder Unruhe, die sich rasch entwickelt und mit Herzrasen, Brustdruck, Atemnot, Schwindel, Zittern, Schwitzen, Übelkeit, Entfremdungsgefühlen oder der Angst, die Kontrolle zu verlieren, ohnmächtig zu werden oder zu sterben, einhergehen kann.",
          en: "Panic disorder is an anxiety disorder with recurrent, unexpected panic attacks. A panic attack is a sudden episode of intense fear or discomfort that develops rapidly and may involve a racing heart, chest pressure, shortness of breath, dizziness, trembling, sweating, nausea, feelings of unreality, or fear of losing control, fainting or dying." } },
        { t: "p", text: {
          de: "Viele Betroffene entwickeln eine anhaltende Sorge vor weiteren Attacken oder meiden Situationen, die sie damit verbinden. Panikattacken können ohne erkennbaren Auslöser auftreten; eine ärztliche Abklärung ist sinnvoll, um körperliche Ursachen mit ähnlichen Beschwerden auszuschließen.",
          en: "Many people develop persistent worry about further attacks or avoid situations they associate with them. Panic attacks can occur without an obvious trigger; medical assessment is sensible to exclude physical conditions that can cause similar symptoms." } },
        { t: "img", src: "diseases/panic-disorder/definition.jpg", alt: { de: "Panikstörung", en: "Panic disorder" } },
      ],
      medical: [
        { t: "sub", text: { de: "Klinische Abklärung", en: "Clinical assessment" } },
        { t: "p", text: {
          de: "Berücksichtigt werden Häufigkeit und Muster der Panikattacken, mögliche Auslöser, Vermeidungsverhalten, weitere Angst- oder depressive Symptome, Medikamente oder Substanzen sowie relevante körperliche Erkrankungen.",
          en: "Assessment considers the frequency and pattern of panic attacks, possible triggers, avoidance behaviour, other anxiety or depressive symptoms, medications or substances, and relevant physical conditions." } },
        { t: "sub", text: { de: "Psychotherapie", en: "Psychological treatment" } },
        { t: "p", text: {
          de: "Die kognitive Verhaltenstherapie (KVT) ist eine etablierte Behandlung. Sie umfasst Psychoedukation über Paniksymptome, das Erkennen und Verändern ungünstiger Deutungen von Körperempfindungen, expositionsbasierte Verfahren und den Abbau von Vermeidung.",
          en: "Cognitive behavioural therapy (CBT) is an established treatment. It includes education about panic symptoms, identifying and changing unhelpful interpretations of bodily sensations, exposure-based techniques and reducing avoidance." } },
        { t: "sub", text: { de: "Medikamente", en: "Medication" } },
        { t: "p", text: {
          de: "Bei Bedarf werden Antidepressiva, insbesondere SSRI, verordnet. Die Auswahl erfolgt individuell und wird durch qualifiziertes Fachpersonal überwacht.",
          en: "When appropriate, antidepressants – particularly SSRIs – are prescribed. The choice is individualised and monitored by qualified professionals." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Lebensstil & Selbsthilfe", en: "Lifestyle & self-management" } },
        { t: "p", text: {
          de: "Ein geregelter Tagesablauf, ausreichender Schlaf, ausgewogene Ernährung und regelmäßige Bewegung unterstützen das allgemeine Wohlbefinden. Die Reduktion von übermäßigem Koffein, Nikotin, Alkohol und anderen Substanzen, die Herzklopfen, Angst oder Schlafprobleme verstärken können, ist häufig hilfreich.",
          en: "A regular daily routine, sufficient sleep, balanced nutrition and regular activity support overall wellbeing. Reducing excess caffeine, nicotine, alcohol and other substances that can worsen palpitations, anxiety or sleep problems is often helpful." } },
        { t: "p", text: {
          de: "Zu verstehen, dass die körperlichen Empfindungen einer Panikattacke Teil der akuten Angstreaktion des Körpers sind, kann manchen Menschen helfen, die Angst vor den Symptomen selbst zu verringern.",
          en: "Understanding that the physical sensations of a panic attack are part of the body's acute anxiety response can help some people reduce fear of the symptoms themselves." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Verfahren wie Akupunktur, Akupressur, Atemübungen und individuell abgestimmte Kräuterpräparate werden von manchen Menschen begleitend bei angstbezogenen Beschwerden, zur Entspannung oder bei Schlafproblemen genutzt.",
          en: "Approaches such as acupuncture, acupressure, breathing practices and individually tailored herbal preparations are used by some people as a complement for anxiety-related symptoms, relaxation or sleep difficulties." } },
        { t: "p", text: {
          de: "Die Evidenz speziell für die Panikstörung ist geringer als für etablierte psychologische Behandlungen. Kräuter können mit Medikamenten wechselwirken und sollten daher von qualifiziertem Fachpersonal geprüft werden.",
          en: "Evidence specifically for panic disorder is more limited than for established psychological treatments. Herbs can interact with medicines and should therefore be reviewed by qualified professionals." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Traditionelle Ansätze", en: "Traditional approaches" } },
        { t: "p", text: {
          de: "Die ayurvedische Begleitung kann individuelle Tagesroutinen, Yoga, Meditation, Atemübungen, Massage und Kräuterpräparate umfassen, die Entspannung und allgemeines Wohlbefinden fördern sollen.",
          en: "Ayurvedic care may include individualised daily routines, yoga, meditation, breathing practices, massage and herbal preparations intended to promote relaxation and general wellbeing." } },
        { t: "p", text: {
          de: "Diese Ansätze sind als Ergänzung und nicht als Ersatz für eine evidenzbasierte Behandlung der Panikstörung zu verstehen. Ayurvedische Kräuter sollten mit Vorsicht verwendet werden, da Zusammensetzung, Sicherheit und Wechselwirkungen variieren können.",
          en: "These approaches are a complement, not a replacement, for evidence-based treatment of panic disorder. Ayurvedic herbs should be used cautiously, as composition, safety and interactions can vary." } },
      ],
      physio: [
        { t: "sub", text: { de: "Bewegung & Entspannung", en: "Exercise & relaxation" } },
        { t: "p", text: {
          de: "Regelmäßige Bewegung wie Gehen, Radfahren, Schwimmen, Yoga oder Krafttraining kann Stimmung, Schlaf und Stressregulation unterstützen. Atemübungen, progressive Muskelentspannung und Dehnung können Anspannung lösen; Atemübungen sind jedoch behutsam einzuführen, da übermäßiges Atmen Panikempfindungen nachahmen kann.",
          en: "Regular activity such as walking, cycling, swimming, yoga or resistance training can support mood, sleep and stress regulation. Breathing exercises, progressive muscle relaxation and stretching can ease tension; breathing exercises, however, are introduced carefully, as over-breathing can reproduce panic sensations." } },
        { t: "img", src: "diseases/panic-disorder/physio.jpg", alt: { de: "Bewegung & Entspannung", en: "Exercise & relaxation" }, ai: true },
        { t: "p", text: {
          de: "Wichtig: Neue oder unerklärte starke Brustschmerzen, Ohnmacht, deutliche Atemnot oder andere besorgniserregende körperliche Symptome erfordern eine ärztliche Abklärung und dürfen nicht automatisch der Panik zugeschrieben werden. Suizidgedanken, Selbstverletzung oder eine schwere Verschlechterung erfordern eine dringende professionelle Abklärung – im Notfall die 112 wählen.",
          en: "Important: new or unexplained severe chest pain, fainting, significant breathlessness or other concerning physical symptoms require medical assessment and must not be automatically attributed to panic. Suicidal thoughts, self-harm or severe deterioration require urgent professional assessment – in an emergency, call 112." } },
      ],
    },
  },

  {
    slug: "mild-depressive-episode",
    icd10: "F32.0",
    illustration: "generic",
    title: { de: "Leichte depressive Episode", en: "Mild Depressive Episode" },
    summary: {
      de: "Gedrückte Stimmung, Interesse- und Antriebsverlust über mindestens zwei Wochen.",
      en: "Low mood, loss of interest and reduced drive lasting at least two weeks.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Eine leichte depressive Episode ist durch eine anhaltend gedrückte Stimmung, vermindertes Interesse oder Freude und verringerte Energie gekennzeichnet, begleitet von Symptomen wie Schlafstörungen, Konzentrationsschwäche, Appetitveränderungen, geringem Selbstwertgefühl, Schuldgefühlen oder reduzierter Motivation. Die Symptome bestehen meist mindestens zwei Wochen und verursachen spürbares Leid, viele Betroffene können jedoch wesentliche Alltagsaufgaben weiter bewältigen.",
          en: "A mild depressive episode is marked by persistently low mood, reduced interest or pleasure and lower energy, alongside symptoms such as sleep disturbance, poor concentration, appetite changes, low self-esteem, guilt or reduced motivation. Symptoms usually last at least two weeks and cause noticeable distress, though many people can still manage essential daily tasks." } },
        { t: "p", text: {
          de: "Die Diagnose beruht auf einer sorgfältigen klinischen Beurteilung. Andere psychische Erkrankungen, Medikamente, Substanzkonsum und körperliche Störungen, die depressive Symptome verursachen können, werden mitberücksichtigt.",
          en: "Diagnosis rests on a careful clinical assessment. Other mental health conditions, medications, substance use and physical disorders that can cause depressive symptoms are also considered." } },
        { t: "img", src: "diseases/mild-depressive-episode/definition.jpg", alt: { de: "Leichte depressive Episode", en: "Mild depressive episode" } },
      ],
      medical: [
        { t: "sub", text: { de: "Klinische Abklärung", en: "Clinical assessment" } },
        { t: "p", text: {
          de: "Beurteilt werden Dauer und Schwere der Symptome, Auswirkungen auf den Alltag, frühere Episoden, Medikamente, Substanzkonsum, körperliche Erkrankungen und psychosoziale Belastungen. Die Einschätzung von Suizidgedanken, Selbstverletzung und Sicherheit ist ein wesentlicher Bestandteil.",
          en: "Assessment covers the duration and severity of symptoms, the effect on daily life, previous episodes, medications, substance use, physical illnesses and psychosocial stressors. Evaluating suicidal thoughts, self-harm and safety is an essential part." } },
        { t: "sub", text: { de: "Psychotherapie", en: "Psychological treatment" } },
        { t: "p", text: {
          de: "Psychologische Verfahren sind bei leichter Depression wichtige Optionen: kognitive Verhaltenstherapie (KVT), Verhaltensaktivierung, interpersonelle Therapie, problemlösende Ansätze oder angeleitete Selbsthilfe.",
          en: "Psychological approaches are important options for mild depression: cognitive behavioural therapy (CBT), behavioural activation, interpersonal therapy, problem-solving approaches or guided self-help." } },
        { t: "sub", text: { de: "Antidepressiva & Verlaufskontrolle", en: "Antidepressants & follow-up" } },
        { t: "p", text: {
          de: "Antidepressiva sind bei einer leichten Episode nicht automatisch erforderlich; sie können je nach Wunsch, früherem Ansprechen und Verlauf erwogen werden. Ein strukturierter Tagesablauf, Bewegung, ausreichender Schlaf und soziale Kontakte unterstützen die Erholung. Regelmäßige Kontrollen erfassen Verlauf, Funktion und Sicherheit; bei Persistenz oder Verschlechterung wird die Behandlung angepasst.",
          en: "Antidepressants are not automatically required for a mild episode; they may be considered according to preference, previous response and course. A structured routine, activity, adequate sleep and social contact support recovery. Regular reviews track course, function and safety; if symptoms persist or worsen, treatment is adjusted." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Phytotherapie", en: "Phytotherapy" } },
        { t: "ul", items: {
          de: ["Standardisiertes Johanniskraut (Hypericum perforatum) zeigt bei manchen Erwachsenen mit leichter bis mittelgradiger Depression einen Nutzen.","Johanniskraut kann erhebliche Wechselwirkungen verursachen – u. a. mit bestimmten Antidepressiva, Blutverdünnern, Immunsuppressiva, Antiepileptika und hormonellen Verhütungsmitteln.","Die Kombination mit serotonergen Antidepressiva kann gefährlich sein und darf nur unter ärztlicher Aufsicht erfolgen."],
          en: ["Standardised St. John's wort (Hypericum perforatum) shows benefit for some adults with mild-to-moderate depression.","St. John's wort can cause significant interactions – with certain antidepressants, blood thinners, immunosuppressants, antiepileptics and hormonal contraceptives, among others.","Combining it with serotonergic antidepressants can be dangerous and should only be done under medical supervision."] } },
        { t: "img", src: "diseases/mild-depressive-episode/naturopathic.jpg", alt: { de: "Naturheilkundliche Begleitung", en: "Naturopathic support" }, ai: true },
        { t: "sub", text: { de: "Körperliche & Lebensstil-Maßnahmen", en: "Physical & lifestyle measures" } },
        { t: "p", text: {
          de: "Regelmäßige Ausdauer- oder Kraftbewegung, Tageslicht, geregelte Schlaf- und Wachzeiten, ausgewogene Ernährung und soziale Kontakte können die Erholung unterstützen. Entspannungs- und Achtsamkeitsübungen sowie Stressbewältigung sind hilfreiche ergänzende Maßnahmen.",
          en: "Regular aerobic or resistance activity, daylight, consistent sleep and waking times, balanced nutrition and social contact can support recovery. Relaxation and mindfulness practices and stress management are helpful supportive measures." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Depressive Symptome werden in der TCM traditionell nach dem individuellen Muster gedeutet, nicht nach der biomedizinischen Diagnose.",
          en: "Depressive symptoms are traditionally interpreted in TCM by the individual pattern, not the biomedical diagnosis." } },
        { t: "sub", text: { de: "Leber-Qi-Stagnation", en: "Liver Qi stagnation" } },
        { t: "p", text: { de: "Gedrückte Stimmung, Anspannung, Reizbarkeit, Seufzen und stressabhängige Beschwerden: die Leber besänftigen und das Qi regulieren.", en: "Low mood, tension, irritability, sighing and stress-related complaints: soothe the Liver and regulate Qi." } },
        { t: "sub", text: { de: "Herz- und Milz-Schwäche", en: "Heart and Spleen deficiency" } },
        { t: "p", text: { de: "Niedergeschlagenheit mit Müdigkeit, Konzentrationsschwäche, Appetit- und Schlafstörungen oder Herzklopfen: das Herz nähren und das Milz-Qi stärken.", en: "Low mood with fatigue, poor concentration, appetite and sleep disturbance or palpitations: nourish the Heart and strengthen Spleen Qi." } },
        { t: "sub", text: { de: "Schleim- und Qi-Stagnation", en: "Phlegm and Qi stagnation" } },
        { t: "p", text: {
          de: "Emotionale Schwere, Antriebsminderung, Druck auf der Brust oder ein Engegefühl: das Qi regulieren und Schleim umwandeln. Akupunktur und Kräuter werden individuell und begleitend eingesetzt.",
          en: "Emotional heaviness, reduced drive, chest pressure or a sensation of obstruction: regulate Qi and transform phlegm. Acupuncture and herbs are used individually and as complementary care." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Traditionelle Sichtweise", en: "Traditional perspective" } },
        { t: "p", text: {
          de: "Emotionale und psychische Symptome werden traditionell nach Konstitution, Lebensstil, Verdauung und einem wahrgenommenen Ungleichgewicht von Vata, Pitta oder Kapha gedeutet. Diese Begriffe gehören zum ayurvedischen Modell und sind keine biomedizinischen Erklärungen.",
          en: "Emotional and psychological symptoms are traditionally interpreted by constitution, lifestyle, digestion and a perceived imbalance of Vata, Pitta or Kapha. These concepts belong to the Ayurvedic model and are not biomedical explanations." } },
        { t: "sub", text: { de: "Ansätze & Ernährung", en: "Approaches & nutrition" } },
        { t: "p", text: {
          de: "Betont werden geregelte Tagesabläufe, ausreichend Schlaf, Bewegung und ausgewogene Mahlzeiten sowie Yoga, Meditation und Atemübungen. Kräuterpräparate können mit Psychopharmaka wechselwirken und sollten ärztlich geprüft werden.",
          en: "The emphasis is on regular routines, adequate sleep, activity and balanced meals, plus yoga, meditation and breathing exercises. Herbal preparations can interact with psychiatric medicines and should be medically reviewed." } },
      ],
      physio: [
        { t: "sub", text: { de: "Bewegung & Entspannung", en: "Exercise & relaxation" } },
        { t: "p", text: {
          de: "Regelmäßige Bewegung kann Teil eines umfassenden Behandlungsplans sein. Gehen, Radfahren, Schwimmen, Krafttraining oder Yoga können Stimmung, Schlaf, körperliche Gesundheit und soziale Teilhabe fördern. Ein schrittweiser, gut erreichbarer Plan hilft, wenn Antriebsminderung und Müdigkeit die Aktivität erschweren.",
          en: "Regular activity can be part of a comprehensive treatment plan. Walking, cycling, swimming, resistance exercise or yoga can support mood, sleep, physical health and social participation. A gradual, achievable plan helps when low drive and fatigue make activity difficult." } },
        { t: "img", src: "diseases/mild-depressive-episode/physio.jpg", alt: { de: "Bewegung & Entspannung", en: "Exercise & relaxation" }, ai: true },
        { t: "p", text: {
          de: "Wichtig: Suizidgedanken, Selbstverletzung, eine schwere Verschlechterung, psychotische Symptome oder das Gefühl, sich nicht mehr sicher zu fühlen, erfordern eine dringende professionelle Abklärung. In einem akuten Notfall in Deutschland die 112 wählen.",
          en: "Important: suicidal thoughts, self-harm, severe deterioration, psychotic symptoms or feeling unable to stay safe require urgent professional assessment. In an immediate emergency in Germany, call 112." } },
      ],
    },
  },

  {
    slug: "moderate-depressive-episode",
    icd10: "F32.1",
    illustration: "generic",
    title: { de: "Mittelgradige depressive Episode", en: "Moderate Depressive Episode" },
    summary: {
      de: "Depressive Symptome mit deutlicher Beeinträchtigung von Alltag und Beruf.",
      en: "Depressive symptoms with clear impairment of daily life and work.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Eine mittelgradige depressive Episode ist durch eine anhaltend gedrückte Stimmung, Interesse- oder Freudlosigkeit und verminderte Energie gekennzeichnet, begleitet von Symptomen wie beeinträchtigter Konzentration, vermindertem Selbstvertrauen, Schuld- oder Wertlosigkeitsgefühlen, Schlafstörungen, Appetitveränderungen, psychomotorischen Veränderungen oder Gedanken an den Tod. Die Symptome führen zu einer deutlichen Beeinträchtigung im Alltag, im sozialen Leben oder im Beruf.",
          en: "A moderate depressive episode is marked by persistently low mood, loss of interest or pleasure and reduced energy, alongside symptoms such as impaired concentration, reduced self-confidence, guilt or worthlessness, sleep disturbance, appetite changes, psychomotor changes or thoughts of death. Symptoms cause clear impairment in daily, social or occupational functioning." } },
        { t: "img", src: "diseases/moderate-depressive-episode/definition.jpg", alt: { de: "Mittelgradige depressive Episode", en: "Moderate depressive episode" } },
      ],
      medical: [
        { t: "sub", text: { de: "Klinische Abklärung", en: "Clinical assessment" } },
        { t: "p", text: {
          de: "Beurteilt werden Schwere und Dauer der Symptome, Funktionsbeeinträchtigung, frühere Episoden, körperliche Gesundheit, Medikamente, Substanzkonsum, psychosoziale Umstände und ein möglicher Hinweis auf eine bipolare Störung. Die Einschätzung von Suizidgedanken und Sicherheit ist besonders wichtig.",
          en: "Assessment covers the severity and duration of symptoms, functional impairment, previous episodes, physical health, medications, substance use, psychosocial circumstances and possible bipolar disorder. Evaluating suicidal thoughts and safety is particularly important." } },
        { t: "sub", text: { de: "Psychotherapie", en: "Psychological treatment" } },
        { t: "p", text: {
          de: "Evidenzbasierte Psychotherapie ist eine wichtige Option – etwa kognitive Verhaltenstherapie (KVT), Verhaltensaktivierung, interpersonelle Psychotherapie (IPT) oder andere strukturierte Verfahren, individuell nach Schwere, Wunsch und Begleiterkrankungen.",
          en: "Evidence-based psychotherapy is an important option – such as cognitive behavioural therapy (CBT), behavioural activation, interpersonal psychotherapy (IPT) or other structured approaches, individualised by severity, preference and comorbidities." } },
        { t: "sub", text: { de: "Antidepressiva & Kombination", en: "Antidepressants & combination" } },
        { t: "p", text: {
          de: "Antidepressiva – häufig SSRI – können erwogen werden, besonders wenn die Beschwerden den Alltag deutlich beeinträchtigen oder eine Psychotherapie allein nicht ausreicht. Sie brauchen Zeit bis zur vollen Wirkung, werden regelmäßig überprüft und sollten nicht abrupt abgesetzt werden. Bei anhaltenden Beschwerden kann die Kombination aus Psychotherapie und Medikament sinnvoll sein.",
          en: "Antidepressants – often SSRIs – may be considered, especially when symptoms clearly impair daily life or psychotherapy alone is insufficient. They take time to reach full effect, are reviewed regularly and should not be stopped abruptly. For persistent symptoms, combining psychotherapy with medication can be appropriate." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Phytotherapie", en: "Phytotherapy" } },
        { t: "ul", items: {
          de: ["Standardisiertes Johanniskraut (Hypericum perforatum) zeigt bei manchen Erwachsenen mit leichter bis mittelgradiger Depression einen Nutzen.","Es kann klinisch bedeutsame Wechselwirkungen verursachen – u. a. mit Antidepressiva, Blutverdünnern, Immunsuppressiva, Antiepileptika und hormonellen Verhütungsmitteln.","Die Kombination mit serotonergen Antidepressiva kann gefährlich sein und darf nur unter ärztlicher Aufsicht erfolgen."],
          en: ["Standardised St. John's wort (Hypericum perforatum) shows benefit for some adults with mild-to-moderate depression.","It can cause clinically significant interactions – with antidepressants, blood thinners, immunosuppressants, antiepileptics and hormonal contraceptives, among others.","Combining it with serotonergic antidepressants can be dangerous and should only be done under medical supervision."] } },
        { t: "sub", text: { de: "Körperliche & Lebensstil-Maßnahmen", en: "Physical & lifestyle measures" } },
        { t: "p", text: {
          de: "Regelmäßige Bewegung, geregelte Schlaf- und Wachzeiten, Tageslicht, ausgewogene Ernährung, soziale Kontakte und strukturierte Tagesaktivitäten können die Erholung unterstützen. Entspannungs-, Achtsamkeits- und Atemübungen sowie Stressbewältigung sind hilfreiche ergänzende Maßnahmen.",
          en: "Regular activity, consistent sleep and waking times, daylight, balanced nutrition, social contact and structured daily activity can support recovery. Relaxation, mindfulness and breathing practices and stress management are helpful supportive measures." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Depressive Symptome werden in der TCM traditionell nach dem individuellen Muster gedeutet, nicht nach der biomedizinischen Diagnose.",
          en: "Depressive symptoms are traditionally interpreted in TCM by the individual pattern, not the biomedical diagnosis." } },
        { t: "sub", text: { de: "Leber-Qi-Stagnation", en: "Liver Qi stagnation" } },
        { t: "p", text: { de: "Gedrückte Stimmung, Anspannung, Reizbarkeit und stressabhängige Beschwerden: die Leber besänftigen und das Qi regulieren.", en: "Low mood, tension, irritability and stress-related complaints: soothe the Liver and regulate Qi." } },
        { t: "sub", text: { de: "Herz- und Milz-Schwäche", en: "Heart and Spleen deficiency" } },
        { t: "p", text: { de: "Niedergeschlagenheit mit Müdigkeit, Konzentrationsschwäche, Appetitmangel, Schlaflosigkeit oder Grübeln: das Milz-Qi stärken und das Herz nähren.", en: "Low mood with fatigue, poor concentration, reduced appetite, insomnia or worry: strengthen Spleen Qi and nourish the Heart." } },
        { t: "sub", text: { de: "Schleim- und Qi-Stagnation", en: "Phlegm and Qi stagnation" } },
        { t: "p", text: {
          de: "Schwere, Benommenheit, Druck auf der Brust oder ein Kloßgefühl im Hals: das Qi regulieren und Schleim umwandeln. Akupunktur und Kräuter werden von qualifizierten Behandelnden individuell und nur begleitend eingesetzt.",
          en: "Heaviness, mental clouding, chest oppression or a lump-in-the-throat sensation: regulate Qi and transform phlegm. Acupuncture and herbs are used by qualified practitioners, individually and only as complementary care." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Traditionelle Sichtweise", en: "Traditional perspective" } },
        { t: "p", text: {
          de: "Ayurveda deutet depressive Symptome im Zusammenhang mit Konstitution, seelischem Wohlbefinden, Tagesroutine, Schlaf, Verdauung und traditionell beschriebenen Dosha-Ungleichgewichten. Diese Begriffe gehören zum ayurvedischen Modell.",
          en: "Ayurveda interprets depressive symptoms in relation to constitution, mental wellbeing, daily routine, sleep, digestion and traditionally described dosha imbalances. These concepts belong to the Ayurvedic model." } },
        { t: "sub", text: { de: "Lebensstil & Kräuter", en: "Lifestyle & herbs" } },
        { t: "p", text: {
          de: "Ein geregelter Tagesablauf, regelmäßiger Schlaf, Bewegung, Tageslicht, ausgewogene Mahlzeiten und soziale Kontakte können das Wohlbefinden unterstützen; Yoga, Atemübungen und Meditation wirken ergänzend. Ayurvedische Präparate sind – besonders bei gleichzeitiger Einnahme von Antidepressiva – ärztlich zu besprechen.",
          en: "A regular routine, consistent sleep, activity, daylight, balanced meals and social contact can support wellbeing; yoga, breathing exercises and meditation add support. Ayurvedic preparations should be discussed with a professional, especially alongside antidepressants." } },
      ],
      physio: [
        { t: "sub", text: { de: "Bewegung & Entspannung", en: "Exercise & relaxation" } },
        { t: "p", text: {
          de: "Regelmäßige Bewegung kann Teil eines umfassenden Behandlungsplans sein. Bei geringer Motivation, Müdigkeit oder Energielosigkeit ist ein schrittweiser, gut erreichbarer Plan hilfreich – zunächst kurze Aktivitätsphasen, die nach Verträglichkeit gesteigert werden. Atemübungen, progressive Muskelentspannung und Dehnung können Anspannung, Stress und Schlafprobleme lindern.",
          en: "Regular activity can be part of a comprehensive treatment plan. With low motivation, fatigue or low energy, a gradual, achievable plan helps – short periods of activity first, increased as tolerated. Breathing exercises, progressive muscle relaxation and stretching can ease tension, stress and sleep problems." } },
        { t: "img", src: "diseases/moderate-depressive-episode/physio.jpg", alt: { de: "Bewegung & Entspannung", en: "Exercise & relaxation" }, ai: true },
        { t: "p", text: {
          de: "Wichtig: Suizidgedanken, Selbstverletzung, eine schwere Verschlechterung, psychotische Symptome oder die Unfähigkeit, für sich selbst zu sorgen, erfordern eine dringende professionelle Abklärung. In einem akuten Notfall in Deutschland die 112 wählen.",
          en: "Important: suicidal thoughts, self-harm, severe deterioration, psychotic symptoms or an inability to care for oneself require urgent professional assessment. In an immediate emergency in Germany, call 112." } },
      ],
    },
  },

  {
    slug: "severe-depressive-episode",
    icd10: "F32.2",
    illustration: "generic",
    title: { de: "Schwere depressive Episode", en: "Severe Depressive Episode" },
    summary: {
      de: "Ausgeprägte Depression mit starker Beeinträchtigung; rasche Behandlung erforderlich.",
      en: "Marked depression with major impairment; prompt treatment required.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Eine schwere depressive Episode ist eine ernste Erkrankung mit anhaltend gedrückter Stimmung, ausgeprägtem Interesse- und Freudverlust, deutlich verminderter Energie und mehreren zusätzlichen Symptomen wie tiefer Erschöpfung, Konzentrationsstörungen, Wertlosigkeits- oder Schuldgefühlen, Schlaf-, Appetit- oder Gewichtsveränderungen, psychomotorischer Verlangsamung oder Unruhe, Hoffnungslosigkeit und wiederkehrenden Gedanken an den Tod oder Suizid.",
          en: "A severe depressive episode is a serious condition with persistently low mood, marked loss of interest and pleasure, substantially reduced energy and several additional symptoms such as profound fatigue, impaired concentration, worthlessness or guilt, sleep, appetite or weight changes, psychomotor slowing or agitation, hopelessness and recurrent thoughts of death or suicide." } },
        { t: "p", text: {
          de: "Die Beschwerden führen meist zu einer erheblichen Beeinträchtigung; manche Betroffene können die Selbstversorgung kaum aufrechterhalten. Eine schwere Depression kann ohne psychotische Symptome (F32.2) oder mit psychotischen Symptomen wie Wahn oder Halluzinationen (F32.3) auftreten. Eine rasche fachliche Abklärung und aktive Behandlung sind erforderlich.",
          en: "Symptoms usually cause major impairment; some people can barely maintain self-care. Severe depression may occur without psychotic symptoms (F32.2) or with psychotic symptoms such as delusions or hallucinations (F32.3). Prompt specialist assessment and active treatment are required." } },
        { t: "img", src: "diseases/severe-depressive-episode/definition.jpg", alt: { de: "Schwere depressive Episode", en: "Severe depressive episode" } },
      ],
      medical: [
        { t: "sub", text: { de: "Dringliche Abklärung & Sicherheit", en: "Urgent assessment & safety" } },
        { t: "p", text: {
          de: "Eine umfassende psychiatrische und medizinische Beurteilung erfasst Schwere, Dauer, Funktionsbeeinträchtigung, frühere depressive oder manische Episoden, Medikamente, Substanzkonsum, körperliche Erkrankungen und das soziale Umfeld. Besondere Aufmerksamkeit gilt Suizidgedanken, Selbstverletzung, psychotischen Symptomen und der unmittelbaren Sicherheit; teils ist eine stationäre Behandlung erforderlich.",
          en: "A comprehensive psychiatric and medical assessment covers severity, duration, functional impairment, previous depressive or manic episodes, medications, substance use, physical illnesses and the social context. Particular attention goes to suicidal thoughts, self-harm, psychotic symptoms and immediate safety; inpatient care is sometimes required." } },
        { t: "sub", text: { de: "Kombinierte Behandlung", en: "Combined treatment" } },
        { t: "p", text: {
          de: "Bei schwerer Depression wird häufig eine Kombination aus Antidepressiva und Psychotherapie eingesetzt. In der akutesten Phase kann die Fähigkeit zur intensiven Psychotherapie eingeschränkt sein, sodass die Behandlung angepasst wird. Bei psychotischen Symptomen können zusätzlich antipsychotische Medikamente erforderlich sein.",
          en: "Severe depression is often treated with a combination of antidepressants and psychotherapy. In the most acute phase, the ability to take part in intensive psychotherapy may be limited, so treatment is adapted. With psychotic symptoms, antipsychotic medication may additionally be required." } },
        { t: "sub", text: { de: "Fachliche Weiterbehandlung", en: "Specialist care" } },
        { t: "p", text: {
          de: "Bei ausbleibendem Ansprechen oder besonders schwerem Verlauf kommen weitere fachärztliche Verfahren infrage. Eine engmaschige Verlaufskontrolle von Symptomen, Nebenwirkungen, Adhärenz und Sicherheit ist unerlässlich.",
          en: "If there is no response or a particularly severe course, further specialist treatments may be considered. Close monitoring of symptoms, side effects, adherence and safety is essential." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Ergänzende Maßnahmen", en: "Complementary measures" } },
        { t: "p", text: {
          de: "Bei schwerer Depression stehen leitliniengerechte medizinische und psychologische Behandlungen im Vordergrund. Ergänzende Maßnahmen wie Bewegung, geregelter Schlaf, Tageslicht, soziale Unterstützung und Entspannungsverfahren können begleitend hilfreich sein, ersetzen aber nicht die notwendige Behandlung.",
          en: "In severe depression, guideline-based medical and psychological treatments come first. Complementary measures such as activity, consistent sleep, daylight, social support and relaxation techniques may help alongside them, but do not replace the necessary treatment." } },
        { t: "p", text: {
          de: "Johanniskraut wird bei schwerer Depression nicht als alleinige Behandlung empfohlen und kann erhebliche Wechselwirkungen mit Antidepressiva und anderen Medikamenten verursachen; eine Einnahme nur nach ärztlicher Rücksprache.",
          en: "St. John's wort is not recommended as a sole treatment for severe depression and can cause significant interactions with antidepressants and other medicines; use only after medical advice." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden depressive Symptome traditionell nach dem individuellen Muster gedeutet. Bei schwerer Depression sind diese Verfahren ausschließlich als Ergänzung zur unverzichtbaren fachlichen Behandlung zu verstehen.",
          en: "In TCM, depressive symptoms are traditionally interpreted by the individual pattern. In severe depression, these approaches are strictly a complement to the essential specialist treatment." } },
        { t: "sub", text: { de: "Leber-Qi-Stagnation", en: "Liver Qi stagnation" } },
        { t: "p", text: { de: "Gedrückte Stimmung, Anspannung und Reizbarkeit: die Leber besänftigen und das Qi regulieren.", en: "Low mood, tension and irritability: soothe the Liver and regulate Qi." } },
        { t: "sub", text: { de: "Herz- und Milz-Schwäche", en: "Heart and Spleen deficiency" } },
        { t: "p", text: { de: "Tiefe Erschöpfung, Grübeln, Schlaf- und Appetitstörungen: das Herz nähren und das Milz-Qi stärken. Akupunktur und Kräuter werden nur von qualifizierten Behandelnden und begleitend eingesetzt.", en: "Profound fatigue, rumination, sleep and appetite disturbance: nourish the Heart and strengthen Spleen Qi. Acupuncture and herbs are used only by qualified practitioners and as complementary care." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Traditionelle Sichtweise", en: "Traditional perspective" } },
        { t: "p", text: {
          de: "Ayurveda deutet seelische Beschwerden im Zusammenhang mit Konstitution, Schlaf, Verdauung, Tagesroutine und traditionell beschriebenen Dosha-Ungleichgewichten. Bei schwerer Depression sind ayurvedische Maßnahmen nur ergänzend und dürfen die fachliche Behandlung nicht verzögern.",
          en: "Ayurveda interprets mental symptoms in relation to constitution, sleep, digestion, daily routine and traditionally described dosha imbalances. In severe depression, Ayurvedic measures are only complementary and must not delay specialist treatment." } },
        { t: "img", src: "diseases/severe-depressive-episode/ayurvedic.jpg", alt: { de: "Ayurvedische Begleitung", en: "Ayurvedic support" }, ai: true },
        { t: "sub", text: { de: "Kräuter", en: "Herbs" } },
        { t: "p", text: {
          de: "Ayurvedische Präparate können mit Antidepressiva und anderen Medikamenten wechselwirken oder Verunreinigungen enthalten; ihre Anwendung ist ärztlich zu prüfen.",
          en: "Ayurvedic preparations can interact with antidepressants and other medicines or contain contaminants; their use should be medically reviewed." } },
      ],
      physio: [
        { t: "sub", text: { de: "Bewegung & Entspannung", en: "Exercise & relaxation" } },
        { t: "p", text: {
          de: "Bewegung kann Teil eines umfassenden Behandlungsplans sein, sobald der Zustand es zulässt. Anfangs helfen sehr kurze, gut erreichbare Aktivitäten, die schrittweise gesteigert werden. Atemübungen, progressive Muskelentspannung und Dehnung können Anspannung und Schlafprobleme lindern; körperorientierte Verfahren bleiben ergänzend.",
          en: "Activity can be part of a comprehensive treatment plan once the condition allows. At first, very short, achievable activities help, increased gradually. Breathing exercises, progressive muscle relaxation and stretching can ease tension and sleep problems; body-oriented approaches remain complementary." } },
        { t: "p", text: {
          de: "Wichtig: Suizidgedanken, Selbstverletzung, eine schwere Verschlechterung, psychotische Symptome oder die Unfähigkeit, sich selbst zu versorgen oder sicher zu bleiben, erfordern eine sofortige professionelle Abklärung. In einem akuten Notfall in Deutschland die 112 wählen.",
          en: "Important: suicidal thoughts, self-harm, severe deterioration, psychotic symptoms or an inability to care for oneself or remain safe require immediate professional assessment. In an immediate emergency in Germany, call 112." } },
      ],
    },
  },

  {
    slug: "depressive-episode-unspecified",
    icd10: "F32.9",
    illustration: "generic",
    title: { de: "Depressive Episode, nicht näher bezeichnet", en: "Depressive Episode, Unspecified" },
    summary: {
      de: "Depressive Episode, deren Schweregrad noch nicht näher bestimmt ist.",
      en: "A depressive episode whose severity is not yet specified.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Eine nicht näher bezeichnete depressive Episode liegt vor, wenn die typischen Symptome einer Depression – anhaltend gedrückte Stimmung, Interesse- und Freudverlust sowie verminderte Energie mit weiteren Beschwerden – bestehen, der genaue Schweregrad jedoch noch nicht festgelegt ist. Eine klinische Beurteilung dient dazu, den Schweregrad einzuordnen und die Behandlung entsprechend auszurichten.",
          en: "An unspecified depressive episode is present when the typical symptoms of depression – persistently low mood, loss of interest and pleasure and reduced energy with further complaints – are present but the precise severity has not yet been established. A clinical assessment serves to grade the severity and align treatment accordingly." } },
        { t: "img", src: "diseases/depressive-episode-unspecified/definition.jpg", alt: { de: "Depressive Episode", en: "Depressive episode" } },
      ],
      medical: [
        { t: "sub", text: { de: "Klinische Abklärung", en: "Clinical assessment" } },
        { t: "p", text: {
          de: "Beurteilt werden Art, Dauer und Schwere der Symptome, die Funktionsbeeinträchtigung, frühere Episoden, Medikamente, Substanzkonsum, körperliche Erkrankungen und psychosoziale Umstände. Suizidgedanken und Sicherheit werden stets mitbeurteilt.",
          en: "Assessment covers the nature, duration and severity of symptoms, functional impairment, previous episodes, medications, substance use, physical illnesses and psychosocial circumstances. Suicidal thoughts and safety are always assessed." } },
        { t: "sub", text: { de: "Behandlung nach Schweregrad", en: "Treatment by severity" } },
        { t: "p", text: {
          de: "Die Behandlung richtet sich nach dem festgestellten Schweregrad: Bei leichteren Formen stehen Psychotherapie und unterstützende Maßnahmen im Vordergrund, bei ausgeprägteren Formen werden Antidepressiva oder eine Kombination aus Psychotherapie und Medikament erwogen. Regelmäßige Kontrollen begleiten den Verlauf.",
          en: "Treatment follows the identified severity: for milder forms, psychotherapy and supportive measures come first; for more pronounced forms, antidepressants or a combination of psychotherapy and medication are considered. Regular reviews accompany the course." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Phytotherapie & Lebensstil", en: "Phytotherapy & lifestyle" } },
        { t: "p", text: {
          de: "Standardisiertes Johanniskraut (Hypericum perforatum) kann bei leichten bis mittelgradigen depressiven Beschwerden erwogen werden, verursacht aber erhebliche Wechselwirkungen mit vielen Medikamenten und darf nicht ohne ärztliche Rücksprache mit Antidepressiva kombiniert werden. Regelmäßige Bewegung, geregelter Schlaf, Tageslicht, ausgewogene Ernährung und soziale Kontakte unterstützen die Erholung.",
          en: "Standardised St. John's wort (Hypericum perforatum) may be considered for mild-to-moderate depressive symptoms, but it causes significant interactions with many medicines and must not be combined with antidepressants without medical advice. Regular activity, consistent sleep, daylight, balanced nutrition and social contact support recovery." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Depressive Symptome werden in der TCM traditionell nach dem individuellen Muster gedeutet.",
          en: "Depressive symptoms are traditionally interpreted in TCM by the individual pattern." } },
        { t: "sub", text: { de: "Leber-Qi-Stagnation", en: "Liver Qi stagnation" } },
        { t: "p", text: { de: "Gedrückte Stimmung, Anspannung, Reizbarkeit und stressabhängige Beschwerden: die Leber besänftigen und das Qi regulieren.", en: "Low mood, tension, irritability and stress-related complaints: soothe the Liver and regulate Qi." } },
        { t: "sub", text: { de: "Herz- und Milz-Schwäche", en: "Heart and Spleen deficiency" } },
        { t: "p", text: { de: "Niedergeschlagenheit mit Müdigkeit, Konzentrations-, Appetit- und Schlafstörungen: das Herz nähren und das Milz-Qi stärken. Akupunktur und Kräuter werden individuell und begleitend eingesetzt.", en: "Low mood with fatigue, poor concentration, appetite and sleep disturbance: nourish the Heart and strengthen Spleen Qi. Acupuncture and herbs are used individually and as complementary care." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Traditionelle Sichtweise & Ansätze", en: "Traditional perspective & approaches" } },
        { t: "p", text: {
          de: "Ayurveda deutet depressive Symptome im Zusammenhang mit Konstitution, Schlaf, Verdauung und traditionell beschriebenen Dosha-Ungleichgewichten. Betont werden geregelte Tagesabläufe, ausgewogene Ernährung, Bewegung sowie Yoga, Atemübungen und Meditation. Kräuterpräparate sind ärztlich zu prüfen, besonders bei gleichzeitiger Medikamenteneinnahme.",
          en: "Ayurveda interprets depressive symptoms in relation to constitution, sleep, digestion and traditionally described dosha imbalances. The emphasis is on regular routines, balanced nutrition, activity and yoga, breathing exercises and meditation. Herbal preparations should be medically reviewed, especially alongside other medication." } },
        { t: "img", src: "diseases/depressive-episode-unspecified/ayurvedic.jpg", alt: { de: "Ayurvedische Begleitung", en: "Ayurvedic support" }, ai: true },
      ],
      physio: [
        { t: "sub", text: { de: "Bewegung & Entspannung", en: "Exercise & relaxation" } },
        { t: "p", text: {
          de: "Regelmäßige Bewegung wie Gehen, Radfahren, Schwimmen, Krafttraining oder Yoga kann Stimmung, Schlaf und soziale Teilhabe fördern; bei geringer Motivation hilft ein schrittweiser Plan. Atemübungen, progressive Muskelentspannung und Dehnung können Anspannung und Schlafprobleme lindern.",
          en: "Regular activity such as walking, cycling, swimming, resistance training or yoga can support mood, sleep and social participation; with low motivation, a gradual plan helps. Breathing exercises, progressive muscle relaxation and stretching can ease tension and sleep problems." } },
        { t: "p", text: {
          de: "Wichtig: Suizidgedanken, Selbstverletzung, eine schwere Verschlechterung oder das Gefühl, sich nicht mehr sicher zu fühlen, erfordern eine dringende professionelle Abklärung. In einem akuten Notfall in Deutschland die 112 wählen.",
          en: "Important: suicidal thoughts, self-harm, severe deterioration or feeling unable to stay safe require urgent professional assessment. In an immediate emergency in Germany, call 112." } },
      ],
    },
  },

  {
    slug: "recurrent-depressive-disorder",
    icd10: "F33",
    illustration: "generic",
    title: { de: "Rezidivierende depressive Störung", en: "Recurrent Depressive Disorder" },
    summary: {
      de: "Wiederholte depressive Episoden; Rückfallvorbeugung ist zentral.",
      en: "Repeated depressive episodes; relapse prevention is central.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die rezidivierende depressive Störung ist durch wiederholte depressive Episoden ohne eigenständige manische Phasen gekennzeichnet. Zwischen den Episoden erholen sich viele Betroffene weitgehend, doch das Risiko erneuter Episoden bleibt erhöht. Neben der Behandlung der aktuellen Episode kommt daher der Rückfallvorbeugung eine zentrale Bedeutung zu.",
          en: "Recurrent depressive disorder is marked by repeated depressive episodes without independent manic phases. Between episodes many people recover substantially, but the risk of further episodes remains raised. Alongside treating the current episode, relapse prevention is therefore of central importance." } },
        { t: "img", src: "diseases/recurrent-depressive-disorder/definition.jpg", alt: { de: "Rezidivierende depressive Störung", en: "Recurrent depressive disorder" } },
      ],
      medical: [
        { t: "sub", text: { de: "Klinische Abklärung", en: "Clinical assessment" } },
        { t: "p", text: {
          de: "Beurteilt werden die aktuelle Episode, Anzahl und Muster früherer Episoden, Ansprechen auf frühere Behandlungen, Begleiterkrankungen, Medikamente, Substanzkonsum und psychosoziale Umstände. Ein möglicher Hinweis auf eine bipolare Störung sowie Suizidgedanken und Sicherheit werden mitberücksichtigt.",
          en: "Assessment covers the current episode, the number and pattern of previous episodes, response to earlier treatment, comorbidities, medications, substance use and psychosocial circumstances. Possible bipolar disorder as well as suicidal thoughts and safety are considered." } },
        { t: "sub", text: { de: "Akutbehandlung", en: "Acute treatment" } },
        { t: "p", text: {
          de: "Die aktuelle Episode wird je nach Schweregrad mit Psychotherapie, Antidepressiva oder einer Kombination behandelt. Bei früher wirksamen Medikamenten wird deren Einsatz häufig erneut erwogen.",
          en: "The current episode is treated by severity with psychotherapy, antidepressants or a combination. Where a medication has worked before, its use is often reconsidered." } },
        { t: "sub", text: { de: "Erhaltungstherapie & Rückfallvorbeugung", en: "Maintenance & relapse prevention" } },
        { t: "p", text: {
          de: "Nach dem Abklingen einer Episode wird die Behandlung meist über einen längeren Zeitraum fortgesetzt, um Rückfälle zu vermeiden. Bei häufigen Rezidiven kann eine längerfristige Erhaltungstherapie sinnvoll sein. Das frühe Erkennen von Warnzeichen und ein Notfallplan unterstützen die Rückfallvorbeugung.",
          en: "After an episode subsides, treatment is usually continued for a longer period to prevent relapse. With frequent recurrences, longer-term maintenance treatment can be sensible. Recognising early warning signs and having a crisis plan support relapse prevention." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Phytotherapie & Lebensstil", en: "Phytotherapy & lifestyle" } },
        { t: "p", text: {
          de: "Johanniskraut (Hypericum perforatum) kann bei leichteren depressiven Beschwerden erwogen werden, verursacht aber erhebliche Wechselwirkungen und darf nicht ohne ärztliche Rücksprache mit Antidepressiva kombiniert werden. Regelmäßige Bewegung, geregelter Schlaf, Tageslicht, ausgewogene Ernährung, soziale Kontakte und eine feste Tagesstruktur unterstützen Erholung und Stabilität zwischen den Episoden.",
          en: "St. John's wort (Hypericum perforatum) may be considered for milder depressive symptoms, but it causes significant interactions and must not be combined with antidepressants without medical advice. Regular activity, consistent sleep, daylight, balanced nutrition, social contact and a firm daily structure support recovery and stability between episodes." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Depressive Symptome werden in der TCM traditionell nach dem individuellen Muster gedeutet.",
          en: "Depressive symptoms are traditionally interpreted in TCM by the individual pattern." } },
        { t: "sub", text: { de: "Leber-Qi-Stagnation", en: "Liver Qi stagnation" } },
        { t: "p", text: { de: "Gedrückte Stimmung, Anspannung und stressabhängige Beschwerden: die Leber besänftigen und das Qi regulieren.", en: "Low mood, tension and stress-related complaints: soothe the Liver and regulate Qi." } },
        { t: "sub", text: { de: "Herz- und Milz-Schwäche", en: "Heart and Spleen deficiency" } },
        { t: "p", text: { de: "Wiederkehrende Niedergeschlagenheit mit Müdigkeit, Grübeln und Schlafstörungen: das Herz nähren und das Milz-Qi stärken. Akupunktur und Kräuter werden individuell und begleitend eingesetzt.", en: "Recurring low mood with fatigue, rumination and sleep disturbance: nourish the Heart and strengthen Spleen Qi. Acupuncture and herbs are used individually and as complementary care." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Traditionelle Sichtweise & Ansätze", en: "Traditional perspective & approaches" } },
        { t: "p", text: {
          de: "Ayurveda deutet wiederkehrende depressive Symptome im Zusammenhang mit Konstitution, Schlaf, Verdauung, Tagesroutine und traditionell beschriebenen Dosha-Ungleichgewichten. Betont werden Stabilität durch geregelte Abläufe, ausgewogene Ernährung, Bewegung sowie Yoga, Atemübungen und Meditation. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurveda interprets recurring depressive symptoms in relation to constitution, sleep, digestion, daily routine and traditionally described dosha imbalances. The emphasis is on stability through regular routines, balanced nutrition, activity and yoga, breathing exercises and meditation. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "sub", text: { de: "Bewegung & Entspannung", en: "Exercise & relaxation" } },
        { t: "p", text: {
          de: "Regelmäßige Bewegung kann Teil eines umfassenden Behandlungs- und Vorbeugungsplans sein und Stimmung, Schlaf, körperliche Gesundheit und soziale Teilhabe fördern. Ein gleichmäßiges, dauerhaft umsetzbares Aktivitätsniveau unterstützt die Stabilität zwischen den Episoden. Atemübungen, progressive Muskelentspannung und Dehnung können Anspannung und Schlafprobleme lindern.",
          en: "Regular activity can be part of a comprehensive treatment and prevention plan and can support mood, sleep, physical health and social participation. A steady, sustainable level of activity supports stability between episodes. Breathing exercises, progressive muscle relaxation and stretching can ease tension and sleep problems." } },
        { t: "img", src: "diseases/recurrent-depressive-disorder/physio.jpg", alt: { de: "Bewegung & Entspannung", en: "Exercise & relaxation" }, ai: true },
        { t: "p", text: {
          de: "Wichtig: Suizidgedanken, Selbstverletzung, eine schwere Verschlechterung oder das Gefühl, sich nicht mehr sicher zu fühlen, erfordern eine dringende professionelle Abklärung. In einem akuten Notfall in Deutschland die 112 wählen.",
          en: "Important: suicidal thoughts, self-harm, severe deterioration or feeling unable to stay safe require urgent professional assessment. In an immediate emergency in Germany, call 112." } },
      ],
    },
  },

  {
    slug: "recurrent-depressive-disorder-moderate",
    icd10: "F33.1",
    illustration: "generic",
    title: { de: "Rezidivierende depressive Störung, aktuell mittelgradig", en: "Recurrent Depressive Disorder, Current Episode Moderate" },
    summary: {
      de: "Wiederkehrende Depression mit aktuell mittelgradiger Episode.",
      en: "Recurrent depression with a currently moderate episode.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der rezidivierenden depressiven Störung mit aktuell mittelgradiger Episode bestehen wiederholte depressive Episoden, wobei die gegenwärtige Episode einen mittleren Schweregrad aufweist. Typisch sind gedrückte Stimmung, Interesse- und Freudverlust und verminderte Energie mit deutlicher Beeinträchtigung des Alltags, während zusätzlich das Risiko weiterer Episoden berücksichtigt wird.",
          en: "In recurrent depressive disorder with a currently moderate episode, there are repeated depressive episodes, with the present episode of moderate severity. Typical features are low mood, loss of interest and pleasure and reduced energy with clear impairment of daily life, while the risk of further episodes is also taken into account." } },
      ],
      medical: [
        { t: "sub", text: { de: "Klinische Abklärung", en: "Clinical assessment" } },
        { t: "p", text: {
          de: "Beurteilt werden die aktuelle Episode, Anzahl und Muster früherer Episoden, das Ansprechen auf frühere Behandlungen, Begleiterkrankungen, Medikamente und psychosoziale Umstände. Ein möglicher Hinweis auf eine bipolare Störung sowie Suizidgedanken und Sicherheit werden mitberücksichtigt.",
          en: "Assessment covers the current episode, the number and pattern of previous episodes, response to earlier treatment, comorbidities, medications and psychosocial circumstances. Possible bipolar disorder as well as suicidal thoughts and safety are considered." } },
        { t: "sub", text: { de: "Akutbehandlung", en: "Acute treatment" } },
        { t: "p", text: {
          de: "Die mittelgradige Episode wird mit evidenzbasierter Psychotherapie, Antidepressiva oder einer Kombination behandelt. Medikamente, die in früheren Episoden gewirkt haben, werden häufig erneut erwogen; die Wirkung tritt verzögert ein und wird regelmäßig überprüft.",
          en: "The moderate episode is treated with evidence-based psychotherapy, antidepressants or a combination. Medications that worked in earlier episodes are often reconsidered; the effect is delayed and is reviewed regularly." } },
        { t: "sub", text: { de: "Erhaltungstherapie & Rückfallvorbeugung", en: "Maintenance & relapse prevention" } },
        { t: "p", text: {
          de: "Nach dem Abklingen der Episode wird die Behandlung meist fortgesetzt, um Rückfälle zu vermeiden. Bei häufigen Rezidiven kann eine längerfristige Erhaltungstherapie sinnvoll sein; das Erkennen früher Warnzeichen unterstützt die Vorbeugung.",
          en: "After the episode subsides, treatment is usually continued to prevent relapse. With frequent recurrences, longer-term maintenance treatment can be sensible; recognising early warning signs supports prevention." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Phytotherapie & Lebensstil", en: "Phytotherapy & lifestyle" } },
        { t: "p", text: {
          de: "Johanniskraut (Hypericum perforatum) kann bei leichteren Beschwerden erwogen werden, verursacht aber erhebliche Wechselwirkungen und darf nicht ohne ärztliche Rücksprache mit Antidepressiva kombiniert werden. Regelmäßige Bewegung, geregelter Schlaf, Tageslicht, ausgewogene Ernährung, soziale Kontakte und eine feste Tagesstruktur unterstützen Erholung und Stabilität.",
          en: "St. John's wort (Hypericum perforatum) may be considered for milder symptoms, but it causes significant interactions and must not be combined with antidepressants without medical advice. Regular activity, consistent sleep, daylight, balanced nutrition, social contact and a firm daily structure support recovery and stability." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Depressive Symptome werden in der TCM traditionell nach dem individuellen Muster gedeutet.",
          en: "Depressive symptoms are traditionally interpreted in TCM by the individual pattern." } },
        { t: "sub", text: { de: "Leber-Qi-Stagnation", en: "Liver Qi stagnation" } },
        { t: "p", text: { de: "Gedrückte Stimmung, Anspannung und stressabhängige Beschwerden: die Leber besänftigen und das Qi regulieren.", en: "Low mood, tension and stress-related complaints: soothe the Liver and regulate Qi." } },
        { t: "sub", text: { de: "Herz- und Milz-Schwäche", en: "Heart and Spleen deficiency" } },
        { t: "p", text: { de: "Niedergeschlagenheit mit Müdigkeit, Grübeln, Appetit- und Schlafstörungen: das Herz nähren und das Milz-Qi stärken. Akupunktur und Kräuter werden individuell und begleitend eingesetzt.", en: "Low mood with fatigue, rumination, appetite and sleep disturbance: nourish the Heart and strengthen Spleen Qi. Acupuncture and herbs are used individually and as complementary care." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Traditionelle Sichtweise & Ansätze", en: "Traditional perspective & approaches" } },
        { t: "p", text: {
          de: "Ayurveda deutet wiederkehrende depressive Symptome im Zusammenhang mit Konstitution, Schlaf, Verdauung und traditionell beschriebenen Dosha-Ungleichgewichten. Betont werden Stabilität durch geregelte Abläufe, ausgewogene Ernährung, Bewegung sowie Yoga, Atemübungen und Meditation. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurveda interprets recurring depressive symptoms in relation to constitution, sleep, digestion and traditionally described dosha imbalances. The emphasis is on stability through regular routines, balanced nutrition, activity and yoga, breathing exercises and meditation. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "sub", text: { de: "Bewegung & Entspannung", en: "Exercise & relaxation" } },
        { t: "p", text: {
          de: "Regelmäßige Bewegung kann Teil des Behandlungs- und Vorbeugungsplans sein und Stimmung, Schlaf und soziale Teilhabe fördern. Bei geringer Motivation hilft ein schrittweiser, gut erreichbarer Plan; ein gleichmäßiges Aktivitätsniveau unterstützt die Stabilität zwischen den Episoden. Atemübungen, progressive Muskelentspannung und Dehnung können Anspannung und Schlafprobleme lindern.",
          en: "Regular activity can be part of the treatment and prevention plan and can support mood, sleep and social participation. With low motivation, a gradual, achievable plan helps; a steady level of activity supports stability between episodes. Breathing exercises, progressive muscle relaxation and stretching can ease tension and sleep problems." } },
        { t: "p", text: {
          de: "Wichtig: Suizidgedanken, Selbstverletzung, eine schwere Verschlechterung oder das Gefühl, sich nicht mehr sicher zu fühlen, erfordern eine dringende professionelle Abklärung. In einem akuten Notfall in Deutschland die 112 wählen.",
          en: "Important: suicidal thoughts, self-harm, severe deterioration or feeling unable to stay safe require urgent professional assessment. In an immediate emergency in Germany, call 112." } },
      ],
    },
  },

  {
    slug: "dysthymia",
    icd10: "F34.1",
    illustration: "generic",
    title: { de: "Dysthymie (anhaltende depressive Störung)", en: "Dysthymia (Persistent Depressive Disorder)" },
    summary: {
      de: "Chronisch niedergedrückte Stimmung über mindestens zwei Jahre, meist weniger schwer.",
      en: "Chronically low mood for at least two years, usually less severe.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Dysthymie ist eine chronische depressive Störung mit anhaltend niedergedrückter Stimmung, begleitet von Symptomen wie verminderter Energie, Müdigkeit, geringem Selbstwertgefühl, Schlafstörungen, Konzentrationsschwäche, Pessimismus und reduzierter Lebensfreude. Die Beschwerden sind meist weniger schwer als bei einer typischen depressiven Episode, bestehen jedoch über einen langen Zeitraum – klassisch mindestens zwei Jahre bei Erwachsenen.",
          en: "Dysthymia is a chronic depressive disorder with persistently low mood, accompanied by symptoms such as reduced energy, fatigue, low self-esteem, sleep disturbance, poor concentration, pessimism and reduced enjoyment of life. Symptoms are usually less severe than in a typical depressive episode but persist for a long time – classically at least two years in adults." } },
        { t: "img", src: "diseases/dysthymia/definition.jpg", alt: { de: "Dysthymie", en: "Dysthymia" } },
      ],
      medical: [
        { t: "sub", text: { de: "Klinische Abklärung", en: "Clinical assessment" } },
        { t: "p", text: {
          de: "Beurteilt werden Dauer und Schwere der Symptome, Funktionsbeeinträchtigung, frühere Episoden, körperliche und psychische Begleiterkrankungen, Medikamente, psychosoziale Umstände und das Suizidrisiko. Andere Erkrankungen, die zu anhaltenden depressiven Beschwerden beitragen können, werden mitberücksichtigt.",
          en: "Assessment covers the duration and severity of symptoms, functional impairment, previous episodes, physical and psychiatric comorbidities, medications, psychosocial circumstances and suicide risk. Other conditions that can contribute to persistent depressive symptoms are also considered." } },
        { t: "sub", text: { de: "Psychotherapie & Medikamente", en: "Psychotherapy & medication" } },
        { t: "p", text: {
          de: "Eine strukturierte Psychotherapie – etwa kognitive Verhaltenstherapie (KVT), interpersonelle Ansätze, Verhaltensaktivierung oder speziell auf chronische Depression zugeschnittene Verfahren – ist ein wichtiger Bestandteil. Antidepressiva sind eine etablierte Option und werden individuell ausgewählt; Psychotherapie und Medikament können kombiniert werden, besonders bei anhaltenden oder stark beeinträchtigenden Beschwerden.",
          en: "Structured psychotherapy – such as cognitive behavioural therapy (CBT), interpersonal approaches, behavioural activation or approaches tailored to chronic depression – is an important part. Antidepressants are an established option and are individualised; psychotherapy and medication can be combined, especially for persistent or substantially impairing symptoms." } },
        { t: "sub", text: { de: "Langfristige Betreuung", en: "Long-term management" } },
        { t: "p", text: {
          de: "Da die Dysthymie chronisch verläuft, ist eine regelmäßige Verlaufskontrolle wichtig. Überwacht werden Symptome, Alltagsfunktion, Therapietreue, Nebenwirkungen, das mögliche Auftreten einer schweren depressiven Episode und das Suizidrisiko.",
          en: "Because dysthymia is chronic, regular follow-up is important. Monitoring includes symptoms, daily functioning, adherence, side effects, the possible emergence of a major depressive episode and suicide risk." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Phytotherapie & Lebensstil", en: "Phytotherapy & lifestyle" } },
        { t: "p", text: {
          de: "Johanniskraut (Hypericum perforatum) hat für einige depressive Störungen Evidenz, die Eignung ist jedoch individuell zu prüfen; erhebliche Wechselwirkungen sind möglich, und eine Kombination mit Antidepressiva darf nur nach fachlicher Beratung erfolgen. Regelmäßige Bewegung, geregelte Schlaf- und Wachzeiten, Tageslicht, ausgewogene Ernährung, soziale Kontakte und eine feste Tagesstruktur unterstützen das Wohlbefinden.",
          en: "St. John's wort (Hypericum perforatum) has evidence for some depressive disorders, but suitability should be assessed individually; significant interactions are possible, and combining it with antidepressants should only follow professional advice. Regular activity, consistent sleep and waking times, daylight, balanced nutrition, social contact and a firm daily structure support wellbeing." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Anhaltende depressive Symptome werden in der TCM traditionell nach dem individuellen Muster gedeutet.",
          en: "Persistent depressive symptoms are traditionally interpreted in TCM by the individual pattern." } },
        { t: "sub", text: { de: "Leber-Qi-Stagnation", en: "Liver Qi stagnation" } },
        { t: "p", text: { de: "Anhaltend gedrückte Stimmung, Anspannung, Reizbarkeit und stressabhängige Beschwerden: die Leber besänftigen und das Qi regulieren.", en: "Persistently low mood, tension, irritability and stress-related complaints: soothe the Liver and regulate Qi." } },
        { t: "sub", text: { de: "Milz-Qi-Mangel", en: "Spleen Qi deficiency" } },
        { t: "p", text: { de: "Niedergeschlagenheit mit Müdigkeit, Konzentrationsschwäche, Appetitmangel und Schwäche: das Milz-Qi stärken und die Vitalität unterstützen.", en: "Low mood with fatigue, poor concentration, reduced appetite and weakness: strengthen Spleen Qi and support vitality." } },
        { t: "sub", text: { de: "Herz- und Milz-Schwäche", en: "Heart and Spleen deficiency" } },
        { t: "p", text: { de: "Anhaltende Traurigkeit, Schlafstörungen, Herzklopfen und Grübeln: das Herz nähren und das Milz-Qi stützen.", en: "Persistent sadness, sleep disturbance, palpitations and rumination: nourish the Heart and support Spleen Qi." } },
        { t: "sub", text: { de: "Nieren-Schwäche", en: "Kidney deficiency" } },
        { t: "p", text: { de: "Lang bestehende gedrückte Stimmung mit ausgeprägter Erschöpfung und Antriebsminderung: die Nierenfunktion nach dem individuellen Muster stützen. Akupunktur und Kräuter werden individuell und begleitend eingesetzt.", en: "Long-standing low mood with pronounced exhaustion and low drive: support Kidney function according to the individual pattern. Acupuncture and herbs are used individually and as complementary care." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Traditionelle Sichtweise & Lebensstil", en: "Traditional perspective & lifestyle" } },
        { t: "p", text: {
          de: "Ayurveda deutet anhaltende depressive Symptome im Zusammenhang mit seelischem Wohlbefinden, Schlaf, Verdauung, Tagesroutine, Konstitution und traditionell beschriebenen Dosha-Ungleichgewichten. Ein geregelter Tagesablauf, ausgewogene Ernährung, Tageslicht, Bewegung und unterstützende soziale Kontakte können das Wohlbefinden fördern; sanftes Yoga, Atemübungen und Meditation wirken ergänzend.",
          en: "Ayurveda interprets persistent depressive symptoms in relation to mental wellbeing, sleep, digestion, daily routine, constitution and traditionally described dosha imbalances. A regular routine, balanced nutrition, daylight, activity and supportive social contact can promote wellbeing; gentle yoga, breathing exercises and meditation add support." } },
        { t: "sub", text: { de: "Kräuter", en: "Herbs" } },
        { t: "p", text: {
          de: "Manche ayurvedischen Präparate werden traditionell bei Stress, Schlaf oder seelischem Wohlbefinden genutzt; Evidenz und Qualität variieren jedoch, und Wechselwirkungen mit Antidepressiva sind möglich. Die Anwendung ist mit qualifiziertem Fachpersonal zu besprechen.",
          en: "Some Ayurvedic preparations are traditionally used for stress, sleep or emotional wellbeing; evidence and quality vary, however, and interactions with antidepressants are possible. Use should be discussed with qualified professionals." } },
      ],
      physio: [
        { t: "sub", text: { de: "Bewegung & Entspannung", en: "Exercise & relaxation" } },
        { t: "p", text: {
          de: "Regelmäßige Bewegung kann Teil eines umfassenden Managementplans bei anhaltender Depression sein und Stimmung, Schlaf, Energie und soziale Teilhabe fördern. Bei geringer Energie hilft ein schrittweiser, gut erreichbarer Plan – zunächst kurze Aktivitätsphasen, die nach Verträglichkeit gesteigert werden. Atemübungen, progressive Muskelentspannung und Dehnung können Anspannung, Stress und Schlafprobleme lindern.",
          en: "Regular activity can be part of a comprehensive management plan for persistent depression and can support mood, sleep, energy and social participation. With low energy, a gradual, achievable plan helps – short periods of activity first, increased as tolerated. Breathing exercises, progressive muscle relaxation and stretching can ease tension, stress and sleep problems." } },
        { t: "img", src: "diseases/dysthymia/physio.jpg", alt: { de: "Bewegung & Entspannung", en: "Exercise & relaxation" }, ai: true },
        { t: "p", text: {
          de: "Wichtig: Suizidgedanken, Selbstverletzung, eine schwere Verschlechterung, psychotische Symptome oder das Gefühl, sich nicht mehr sicher zu fühlen, erfordern eine dringende professionelle Abklärung. In einem akuten Notfall in Deutschland die 112 wählen.",
          en: "Important: suicidal thoughts, self-harm, severe deterioration, psychotic symptoms or feeling unable to stay safe require urgent professional assessment. In an immediate emergency in Germany, call 112." } },
      ],
    },
  },
]
