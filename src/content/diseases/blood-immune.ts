import type { Disease } from "@/content/treatments"

/**
 * Conditions for "Blood, Immune System & Oncological Follow-up Care". This area
 * is empty on drdosthealth.com, so the content here is generated: original
 * bilingual prose (definition + the five treatment modalities) based on common
 * ICD-10 conditions from haematology, immunology, allergology and structured
 * cancer surveillance for a general/private practice. Every page is reviewed by
 * Dr. Dost before use; images are added later via the Gemini web workflow and
 * will carry the "KI-generiert" caption.
 */
export const bloodImmuneDiseases: Disease[] = [
  {
    slug: "iron-deficiency-anemia",
    icd10: "D50.9",
    illustration: "generic",
    title: { de: "Eisenmangelanämie", en: "Iron Deficiency Anaemia" },
    summary: {
      de: "Blutarmut durch Eisenmangel mit Müdigkeit, Blässe und verminderter Leistungsfähigkeit.",
      en: "Anaemia from iron deficiency causing fatigue, pallor and reduced capacity.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der Eisenmangelanämie fehlt dem Körper Eisen, um ausreichend roten Blutfarbstoff (Hämoglobin) zu bilden. Folge ist eine Blutarmut mit Müdigkeit, Blässe, Luftnot bei Belastung, Konzentrationsschwäche und manchmal brüchigen Nägeln oder Haarausfall. Häufige Ursachen sind Blutverluste (etwa starke Regelblutungen oder Blutungen im Magen-Darm-Trakt), ein erhöhter Bedarf in Schwangerschaft und Wachstum sowie eine zu geringe Aufnahme.",
          en: "In iron deficiency anaemia the body lacks the iron needed to form enough red blood pigment (haemoglobin). The result is anaemia with fatigue, pallor, breathlessness on exertion, poor concentration and sometimes brittle nails or hair loss. Common causes are blood loss (such as heavy periods or gastrointestinal bleeding), an increased need in pregnancy and growth, and low intake." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose & Ursachensuche", en: "Diagnosis & finding the cause" } },
        { t: "p", text: {
          de: "Die Diagnose stützt sich auf das Blutbild und Eisenwerte, vor allem das Ferritin als Maß der Eisenspeicher. Entscheidend ist die Suche nach der Ursache: Bei Männern und Frauen nach den Wechseljahren muss eine Blutungsquelle im Magen-Darm-Trakt bedacht und gegebenenfalls per Magen- und Darmspiegelung abgeklärt werden.",
          en: "Diagnosis rests on the blood count and iron values, above all ferritin as a measure of iron stores. Finding the cause is decisive: in men and post-menopausal women a source of bleeding in the gastrointestinal tract must be considered and, if needed, clarified by gastroscopy and colonoscopy." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Behandelt wird zweigleisig: die zugrunde liegende Ursache und das Auffüllen der Eisenspeicher. Eisen wird meist als Tablette eingenommen, bei Unverträglichkeit, Aufnahmestörung oder großem Defizit auch als Infusion. Die Speicher werden über mehrere Monate aufgefüllt und der Erfolg per Blutbild kontrolliert.",
          en: "Treatment is twofold: the underlying cause and replenishing iron stores. Iron is usually taken as tablets, or given as an infusion when tablets are not tolerated, absorption is impaired or the deficit is large. Stores are refilled over several months and success is checked by blood count." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Ernährung & Aufnahme", en: "Nutrition & absorption" } },
        { t: "ul", items: {
          de: ["Eisenreiche Lebensmittel bevorzugen: Fleisch, Hülsenfrüchte, Vollkorn, grünes Gemüse, Kürbiskerne.","Vitamin-C-haltige Beilagen (z. B. Paprika, Zitrusfrüchte) verbessern die Aufnahme pflanzlichen Eisens.","Kaffee, schwarzer Tee und Milchprodukte zur eisenreichen Mahlzeit eher meiden, da sie die Aufnahme hemmen.","Pflanzliche Präparate ersetzen keine ärztlich verordnete Eisenersatztherapie und sind auf Wechselwirkungen zu prüfen."],
          en: ["Favour iron-rich foods: meat, pulses, wholegrains, green vegetables, pumpkin seeds.","Vitamin-C-containing sides (e.g. peppers, citrus) improve absorption of plant iron.","Avoid coffee, black tea and dairy with the iron-rich meal, as they inhibit absorption.","Herbal products do not replace medically prescribed iron therapy and should be checked for interactions."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der Traditionellen Chinesischen Medizin wird Blutarmut häufig einem Blut- und Qi-Mangel zugeordnet, oft mit Bezug zu Milz und Magen. Ernährungsempfehlungen, Akupunktur und individuell abgestimmte Kräuter können begleitend das Wohlbefinden unterstützen, ersetzen aber weder die Ursachensuche noch die Eisenersatztherapie.",
          en: "In Traditional Chinese Medicine anaemia is often assigned to a Blood and Qi deficiency, frequently related to Spleen and Stomach. Dietary advice, acupuncture and individually tailored herbs may support wellbeing as complementary care, but replace neither the search for the cause nor iron replacement therapy." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Ansätze betonen eine nährende, gut verdauliche Kost, eine geregelte Tagesroutine und Maßnahmen zur Stärkung der Verdauungskraft. Kräuterpräparate sind wegen möglicher Wechselwirkungen und schwankender Eisengehalte ärztlich zu prüfen und ergänzen die medizinische Behandlung nur.",
          en: "Ayurvedic approaches emphasise nourishing, easily digestible food, a regular daily routine and measures to strengthen digestion. Herbal preparations should be medically reviewed because of possible interactions and variable iron content, and only complement medical treatment." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Bei ausgeprägter Blutarmut stehen zunächst Schonung und ein schrittweiser Wiederaufbau der Belastbarkeit im Vordergrund. Mit steigenden Hämoglobinwerten wird ein moderates, langsam gesteigertes Ausdauertraining aufgebaut, das Kondition und Wohlbefinden fördert. Überforderung und Schwindel werden vermieden.",
          en: "With marked anaemia, the priority is initially rest and a step-by-step rebuilding of capacity. As haemoglobin rises, a moderate, slowly progressed aerobic programme is built up to improve fitness and wellbeing. Overexertion and dizziness are avoided." } },
      ],
    },
  },

  {
    slug: "iron-deficiency-without-anemia",
    icd10: "E61.1",
    illustration: "generic",
    title: { de: "Eisenmangel ohne Anämie", en: "Iron Deficiency Without Anaemia" },
    summary: {
      de: "Leere Eisenspeicher bei noch normalem Blutbild – oft mit Müdigkeit und Erschöpfung.",
      en: "Depleted iron stores with a still-normal blood count – often with fatigue and exhaustion.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Beim Eisenmangel ohne Anämie sind die Eisenspeicher bereits vermindert, das Blutbild ist aber noch normal. Betroffene berichten häufig über Müdigkeit, Erschöpfung, Konzentrationsprobleme, Haarausfall oder unruhige Beine. Da noch keine Blutarmut vorliegt, wird der Mangel leicht übersehen; ohne Behandlung kann sich daraus eine Eisenmangelanämie entwickeln.",
          en: "In iron deficiency without anaemia the iron stores are already reduced while the blood count is still normal. People often report fatigue, exhaustion, concentration problems, hair loss or restless legs. Because there is not yet anaemia, the deficiency is easily missed; without treatment it can progress to iron deficiency anaemia." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Entscheidend ist das Ferritin als Maß der Eisenspeicher, ergänzt um Blutbild und Entzündungswerte, da Entzündungen das Ferritin verfälschen können. Auch hier gilt es, mögliche Ursachen wie Blutverluste oder eine verminderte Aufnahme zu bedenken.",
          en: "Ferritin, as a measure of iron stores, is decisive, supplemented by the blood count and inflammatory markers, since inflammation can distort ferritin. Here too, possible causes such as blood loss or reduced absorption must be considered." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Bei entsprechenden Beschwerden und niedrigem Ferritin werden die Speicher mit Eisen aufgefüllt, meist in Tablettenform, bei Bedarf als Infusion. Parallel wird die Ursache behandelt. Nach dem Auffüllen wird der Verlauf kontrolliert.",
          en: "With corresponding symptoms and low ferritin, stores are replenished with iron, usually as tablets and by infusion when needed. The cause is treated in parallel. After refilling, the course is monitored." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Eine eisenreiche Ernährung mit Fleisch, Hülsenfrüchten, Vollkorn und grünem Gemüse sowie vitamin-C-reichen Beilagen unterstützt die Aufnahme. Kaffee und Tee werden besser zeitlich getrennt von eisenreichen Mahlzeiten genossen. Nahrungsergänzungen sind ärztlich abzustimmen.",
          en: "An iron-rich diet with meat, pulses, wholegrains and green vegetables plus vitamin-C-rich sides supports absorption. Coffee and tea are better taken separately in time from iron-rich meals. Supplements should be medically coordinated." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Erschöpfung und Blässe werden in der TCM oft einem Qi- und Blut-Mangel zugeordnet. Ernährungsberatung und Akupunktur können begleitend das Allgemeinbefinden unterstützen, ersetzen jedoch nicht das gezielte Auffüllen der Eisenspeicher.",
          en: "Exhaustion and pallor are often assigned in TCM to a Qi and Blood deficiency. Dietary advice and acupuncture may support general wellbeing as complementary care but do not replace the targeted replenishment of iron stores." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Empfehlungen betonen eine nährende, leicht verdauliche Kost und geregelte Routinen zur Stärkung der Verdauungskraft. Kräuterpräparate sind wegen möglicher Wechselwirkungen ärztlich zu prüfen und ergänzen die Behandlung nur.",
          en: "Ayurvedic recommendations emphasise nourishing, easily digestible food and regular routines to strengthen digestion. Herbal preparations should be medically reviewed because of possible interactions and only complement treatment." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Regelmäßige, moderate Bewegung fördert Energie, Schlaf und Wohlbefinden. Bei belastender Müdigkeit wird die Aktivität behutsam und in kleinen Schritten gesteigert, um Überforderung zu vermeiden.",
          en: "Regular, moderate activity supports energy, sleep and wellbeing. With burdensome fatigue, activity is increased gently and in small steps to avoid overexertion." } },
      ],
    },
  },

  {
    slug: "vitamin-b12-deficiency-anemia",
    icd10: "D51.9",
    illustration: "generic",
    title: { de: "Vitamin-B12-Mangelanämie", en: "Vitamin B12 Deficiency Anaemia" },
    summary: {
      de: "Blutarmut durch Vitamin-B12-Mangel, oft mit Nervenbeschwerden wie Kribbeln.",
      en: "Anaemia from vitamin B12 deficiency, often with nerve symptoms such as tingling.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Vitamin B12 ist für die Blutbildung und das Nervensystem unverzichtbar. Ein Mangel führt zu einer Blutarmut mit vergrößerten roten Blutkörperchen sowie häufig zu Nervenbeschwerden wie Kribbeln, Taubheitsgefühl, unsicherem Gang und Konzentrationsstörungen. Ursachen sind eine gestörte Aufnahme (etwa bei Magen- oder Darmerkrankungen), bestimmte Medikamente oder eine rein pflanzliche Ernährung ohne Ersatz.",
          en: "Vitamin B12 is essential for blood formation and the nervous system. A deficiency leads to anaemia with enlarged red blood cells and often to nerve symptoms such as tingling, numbness, unsteady gait and concentration problems. Causes are impaired absorption (for instance in stomach or bowel disease), certain medicines or a purely plant-based diet without replacement." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Untersucht werden Blutbild, Vitamin B12 und ergänzend Marker wie Holotranscobalamin oder Methylmalonsäure, um einen funktionellen Mangel zu erfassen. Zur Ursachensuche werden Ernährung, Medikamente und mögliche Aufnahmestörungen berücksichtigt.",
          en: "The blood count, vitamin B12 and additional markers such as holotranscobalamin or methylmalonic acid are examined to detect a functional deficiency. To find the cause, diet, medicines and possible absorption problems are considered." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Vitamin B12 wird ersetzt – bei Aufnahmestörungen anfangs als Spritze, sonst hochdosiert als Tablette. Nervenbeschwerden bilden sich häufig zurück, sollten aber früh behandelt werden, da anhaltende Schäden schwerer rückläufig sind. Die zugrunde liegende Ursache wird mitbehandelt.",
          en: "Vitamin B12 is replaced – initially by injection when absorption is impaired, otherwise as high-dose tablets. Nerve symptoms often regress but should be treated early, as long-standing damage is harder to reverse. The underlying cause is treated alongside." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Eine ausgewogene Ernährung mit tierischen Lebensmitteln deckt den Bedarf meist; bei veganer Ernährung ist ein gezielter Ersatz notwendig. Allgemeine Maßnahmen wie Stressabbau und Schlafhygiene unterstützen die Erholung, ersetzen aber nicht die Substitution.",
          en: "A balanced diet with animal-source foods usually meets requirements; on a vegan diet, targeted replacement is necessary. General measures such as stress reduction and sleep hygiene support recovery but do not replace supplementation." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden Blutarmut und Erschöpfung häufig einem Qi- und Blut-Mangel zugeordnet. Begleitende Verfahren wie Ernährungsberatung und Akupunktur können das Wohlbefinden fördern, ersetzen jedoch nicht den Ausgleich des Vitaminmangels.",
          en: "In TCM anaemia and exhaustion are often assigned to a Qi and Blood deficiency. Complementary approaches such as dietary advice and acupuncture may support wellbeing but do not replace correcting the vitamin deficiency." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine nährende Kost, regelmäßige Mahlzeiten und eine beruhigende Tagesroutine. Kräuterpräparate sind ärztlich zu prüfen und ersetzen die Vitamin-B12-Gabe nicht.",
          en: "Ayurvedic support emphasises nourishing food, regular meals and a calming daily routine. Herbal preparations should be medically reviewed and do not replace vitamin B12 administration." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Bei Nervenbeschwerden und Gangunsicherheit können Gleichgewichts-, Koordinations- und Kraftübungen die Sicherheit im Alltag verbessern und Stürzen vorbeugen. Das Training wird an Beschwerden und Belastbarkeit angepasst und schrittweise gesteigert.",
          en: "With nerve symptoms and gait unsteadiness, balance, coordination and strength exercises can improve everyday safety and prevent falls. Training is adapted to symptoms and capacity and progressed step by step." } },
      ],
    },
  },

  {
    slug: "pernicious-anemia",
    icd10: "D51.0",
    illustration: "generic",
    title: { de: "Perniziöse Anämie", en: "Pernicious Anaemia" },
    summary: {
      de: "Vitamin-B12-Mangel durch fehlenden Intrinsic-Faktor bei autoimmuner Magenschleimhautentzündung.",
      en: "Vitamin B12 deficiency from lack of intrinsic factor in autoimmune gastritis.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die perniziöse Anämie ist eine besondere Form des Vitamin-B12-Mangels. Durch eine autoimmune Entzündung der Magenschleimhaut fehlt der sogenannte Intrinsic-Faktor, der für die Aufnahme von Vitamin B12 im Dünndarm notwendig ist. Folge sind Blutarmut, Nervenbeschwerden und eine Belegzell-Schädigung des Magens; die Erkrankung ist mit anderen Autoimmunleiden verbunden.",
          en: "Pernicious anaemia is a particular form of vitamin B12 deficiency. Autoimmune inflammation of the stomach lining causes a lack of so-called intrinsic factor, which is needed for vitamin B12 to be absorbed in the small intestine. This leads to anaemia, nerve symptoms and damage to the stomach's parietal cells; the condition is linked with other autoimmune diseases." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Neben Blutbild und Vitamin-B12-Werten helfen Autoantikörper (gegen Intrinsic-Faktor und Belegzellen) sowie gegebenenfalls eine Magenspiegelung mit Gewebeproben. Da ein langfristig erhöhtes Risiko für Magenveränderungen besteht, sind Verlaufskontrollen sinnvoll.",
          en: "Besides the blood count and vitamin B12 values, autoantibodies (against intrinsic factor and parietal cells) and, if needed, gastroscopy with tissue samples help. As there is a long-term increased risk of stomach changes, follow-up checks are advisable." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Da die Aufnahme über den Magen gestört ist, wird Vitamin B12 dauerhaft ersetzt – klassisch als Spritze in regelmäßigen Abständen, in geeigneten Fällen hochdosiert als Tablette. Die Behandlung ist in der Regel lebenslang erforderlich.",
          en: "Because absorption via the stomach is impaired, vitamin B12 is replaced permanently – classically by injection at regular intervals, and in suitable cases as high-dose tablets. Treatment is usually needed lifelong." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Eine gezielte Ernährung allein kann den Mangel bei gestörter Aufnahme nicht beheben. Allgemeine Maßnahmen wie ausgewogene Kost, Stressabbau und Bewegung unterstützen das Wohlbefinden, ersetzen aber nicht die dauerhafte Substitution.",
          en: "Targeted nutrition alone cannot correct the deficiency when absorption is impaired. General measures such as a balanced diet, stress reduction and activity support wellbeing but do not replace lifelong supplementation." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden die Beschwerden häufig einem Qi- und Blut-Mangel mit Schwäche von Milz und Magen zugeordnet. Begleitende Akupunktur und Ernährungsberatung können unterstützen, ersetzen jedoch nicht die ärztliche Vitamin-B12-Therapie.",
          en: "In TCM the symptoms are often assigned to a Qi and Blood deficiency with weakness of Spleen and Stomach. Complementary acupuncture and dietary advice may support but do not replace medical vitamin B12 therapy." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitmaßnahmen umfassen eine nährende, verdauungsfreundliche Kost und geregelte Routinen. Kräuterpräparate sind ärztlich zu prüfen und ersetzen die notwendige Substitution nicht.",
          en: "Ayurvedic supportive measures include nourishing, digestion-friendly food and regular routines. Herbal preparations should be medically reviewed and do not replace the necessary supplementation." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Bei begleitenden Nervenbeschwerden verbessern Gleichgewichts-, Koordinations- und Kräftigungsübungen Sicherheit und Beweglichkeit. Ein moderates Ausdauertraining fördert zusätzlich die allgemeine Belastbarkeit.",
          en: "With accompanying nerve symptoms, balance, coordination and strengthening exercises improve safety and mobility. Moderate aerobic training additionally supports general capacity." } },
      ],
    },
  },

  {
    slug: "folate-deficiency-anemia",
    icd10: "D52.9",
    illustration: "generic",
    title: { de: "Folsäuremangelanämie", en: "Folate Deficiency Anaemia" },
    summary: {
      de: "Blutarmut durch Folsäuremangel, oft ernährungsbedingt oder bei erhöhtem Bedarf.",
      en: "Anaemia from folate deficiency, often dietary or in states of increased need.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Folsäure (Vitamin B9) wird für die Blutbildung und die Zellteilung benötigt. Ein Mangel verursacht eine Blutarmut mit vergrößerten roten Blutkörperchen, ähnlich dem Vitamin-B12-Mangel. Ursachen sind eine einseitige Ernährung, erhöhter Bedarf (Schwangerschaft), Alkoholkonsum, Aufnahmestörungen oder bestimmte Medikamente.",
          en: "Folate (vitamin B9) is needed for blood formation and cell division. A deficiency causes anaemia with enlarged red blood cells, similar to vitamin B12 deficiency. Causes include a one-sided diet, increased need (pregnancy), alcohol use, absorption problems or certain medicines." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Neben dem Blutbild werden Folsäure und häufig auch Vitamin B12 bestimmt, da beide Mängel ähnlich aussehen und gemeinsam auftreten können. Wichtig ist, einen Vitamin-B12-Mangel nicht zu übersehen, bevor Folsäure gegeben wird.",
          en: "Besides the blood count, folate and often vitamin B12 are measured, since both deficiencies look similar and can occur together. It is important not to overlook a vitamin B12 deficiency before giving folate." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Folsäure wird als Tablette ersetzt und die Ursache behandelt – etwa durch Ernährungsumstellung, Reduktion von Alkohol oder Anpassung auslösender Medikamente. In Schwangerschaft und bei Kinderwunsch wird Folsäure vorbeugend empfohlen.",
          en: "Folate is replaced as tablets and the cause is treated – for instance by dietary change, reducing alcohol or adjusting triggering medicines. In pregnancy and when planning a pregnancy, folate is recommended preventively." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Folsäurereiche Lebensmittel sind grünes Blattgemüse, Hülsenfrüchte, Vollkorn und Nüsse; schonende Zubereitung erhält das Vitamin. Ein maßvoller Umgang mit Alkohol unterstützt die Erholung. Nahrungsergänzungen sind ärztlich abzustimmen.",
          en: "Folate-rich foods are green leafy vegetables, pulses, wholegrains and nuts; gentle preparation preserves the vitamin. Moderate alcohol use supports recovery. Supplements should be medically coordinated." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden Blutarmut und Erschöpfung häufig einem Blut- und Qi-Mangel zugeordnet. Ernährungsberatung und Akupunktur können begleitend unterstützen, ersetzen jedoch nicht den Ausgleich des Folsäuremangels.",
          en: "In TCM anaemia and exhaustion are often assigned to a Blood and Qi deficiency. Dietary advice and acupuncture may provide complementary support but do not replace correcting the folate deficiency." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Empfehlungen betonen frische, nährende Kost mit viel Gemüse und geregelte Routinen. Kräuterpräparate sind ärztlich zu prüfen und ergänzen die Behandlung nur.",
          en: "Ayurvedic recommendations emphasise fresh, nourishing food with plenty of vegetables and regular routines. Herbal preparations should be medically reviewed and only complement treatment." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Mit steigenden Blutwerten fördert ein moderates, langsam gesteigertes Ausdauer- und Krafttraining die Erholung von Kondition und Kraft. In der Anfangsphase werden Überforderung und Schwindel vermieden.",
          en: "As blood values rise, moderate, slowly progressed aerobic and strength training aids recovery of fitness and strength. In the early phase, overexertion and dizziness are avoided." } },
      ],
    },
  },

  {
    slug: "anemia-of-chronic-disease",
    icd10: "D63.8",
    illustration: "generic",
    title: { de: "Anämie bei chronischer Erkrankung", en: "Anaemia of Chronic Disease" },
    summary: {
      de: "Blutarmut als Begleitfolge chronischer Entzündungen, Infektionen oder Tumorerkrankungen.",
      en: "Anaemia accompanying chronic inflammation, infection or tumour disease.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Anämie bei chronischer Erkrankung entsteht als Begleitfolge anhaltender Entzündungen, Infektionen, Nieren- oder Tumorerkrankungen. Entzündungsbotenstoffe stören die Eisenverwertung und die Blutbildung, sodass trotz vorhandener Eisenspeicher zu wenig rote Blutkörperchen gebildet werden. Die Blutarmut ist meist leicht bis mäßig ausgeprägt.",
          en: "Anaemia of chronic disease arises as an accompanying consequence of ongoing inflammation, infection, kidney or tumour disease. Inflammatory messengers disturb iron utilisation and blood formation, so too few red blood cells are made despite available iron stores. The anaemia is usually mild to moderate." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Das Blutbild zeigt eine oft normozytäre Anämie; Eisenwerte und Entzündungsmarker helfen, sie von einem echten Eisenmangel zu unterscheiden. Im Vordergrund steht die Abklärung der zugrunde liegenden Erkrankung.",
          en: "The blood count often shows a normocytic anaemia; iron values and inflammatory markers help distinguish it from true iron deficiency. The priority is clarifying the underlying disease." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Am wirksamsten ist die Behandlung der Grunderkrankung. Je nach Situation können Eisen (bei zusätzlichem Eisenmangel), bei chronischer Nierenerkrankung erythropoese-stimulierende Mittel oder – selten – Transfusionen sinnvoll sein. Unnötige Eisengaben ohne Mangel werden vermieden.",
          en: "Treating the underlying disease is most effective. Depending on the situation, iron (with additional iron deficiency), erythropoiesis-stimulating agents in chronic kidney disease or – rarely – transfusions can be useful. Unnecessary iron without deficiency is avoided." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Eine ausgewogene, entzündungsarme Ernährung, ausreichend Schlaf und angepasste Bewegung unterstützen das Allgemeinbefinden. Eigenmächtige Eisenpräparate sind ohne nachgewiesenen Mangel nicht sinnvoll und ärztlich abzustimmen.",
          en: "A balanced, anti-inflammatory diet, adequate sleep and adapted activity support general wellbeing. Self-prescribed iron products are not useful without a proven deficiency and should be medically coordinated." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden anhaltende Erschöpfung und Blutarmut häufig einem Qi- und Blut-Mangel zugeordnet. Begleitende Verfahren können das Wohlbefinden fördern, ersetzen aber nicht die Behandlung der Grunderkrankung.",
          en: "In TCM persistent exhaustion and anaemia are often assigned to a Qi and Blood deficiency. Complementary approaches may support wellbeing but do not replace treating the underlying disease." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine nährende, leicht verdauliche Kost, geregelte Routinen und Stressreduktion. Kräuterpräparate sind wegen möglicher Wechselwirkungen ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises nourishing, easily digestible food, regular routines and stress reduction. Herbal preparations should be medically reviewed because of possible interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Angepasste, moderate Bewegung im Rahmen der Belastbarkeit hilft, Kondition und Lebensqualität zu erhalten. Bei ausgeprägter Blutarmut oder aktiver Grunderkrankung wird die Intensität behutsam und in Absprache mit dem Behandlungsteam gewählt.",
          en: "Adapted, moderate activity within capacity helps preserve fitness and quality of life. With marked anaemia or active underlying disease, intensity is chosen carefully and in agreement with the treatment team." } },
      ],
    },
  },

  {
    slug: "hemolytic-anemia",
    icd10: "D59.9",
    illustration: "generic",
    title: { de: "Hämolytische Anämie", en: "Haemolytic Anaemia" },
    summary: {
      de: "Blutarmut durch vorzeitigen Abbau roter Blutkörperchen, oft mit Gelbfärbung.",
      en: "Anaemia from premature breakdown of red blood cells, often with jaundice.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der hämolytischen Anämie werden rote Blutkörperchen schneller abgebaut, als der Körper sie nachbilden kann. Folgen sind Blutarmut, eine Gelbfärbung von Haut und Augen (durch vermehrten Blutfarbstoffabbau) sowie manchmal dunkler Urin und eine vergrößerte Milz. Ursachen können angeboren (z. B. Membran- oder Enzymdefekte) oder erworben sein (etwa autoimmun oder durch Medikamente).",
          en: "In haemolytic anaemia red blood cells are broken down faster than the body can replace them. Consequences are anaemia, a yellowing of the skin and eyes (from increased pigment breakdown) and sometimes dark urine and an enlarged spleen. Causes can be inherited (e.g. membrane or enzyme defects) or acquired (such as autoimmune or drug-induced)." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Typische Laborzeichen sind eine erhöhte Retikulozytenzahl, ein erhöhtes LDH und Bilirubin sowie ein niedriges Haptoglobin. Spezielle Tests (z. B. der Coombs-Test) und die Suche nach Ursachen ordnen die Form ein.",
          en: "Typical laboratory signs are a raised reticulocyte count, elevated LDH and bilirubin and a low haptoglobin. Special tests (e.g. the Coombs test) and a search for causes classify the form." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die Behandlung richtet sich nach der Ursache: bei autoimmunen Formen etwa Kortison oder immunmodulierende Mittel, bei medikamentöser Auslösung das Absetzen des Mittels. Folsäure kann die verstärkte Blutbildung unterstützen; in schweren Fällen sind Transfusionen oder weitere Maßnahmen nötig. Die Betreuung erfolgt oft gemeinsam mit einer hämatologischen Fachstelle.",
          en: "Treatment depends on the cause: for autoimmune forms, for instance cortisone or immunomodulating agents, and for drug-induced forms stopping the medicine. Folate can support the increased blood formation; in severe cases transfusions or further measures are needed. Care is often shared with a haematology specialist." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend sind eine ausgewogene Ernährung und schonender Lebensstil hilfreich. Manche auslösenden Faktoren (z. B. bestimmte Nahrungsmittel oder Substanzen bei Enzymdefekten) müssen gemieden werden. Präparate sind ärztlich abzustimmen, da einige eine Hämolyse verstärken können.",
          en: "A balanced diet and a gentle lifestyle are helpful as complementary support. Some triggers (e.g. certain foods or substances in enzyme defects) must be avoided. Supplements should be medically coordinated, as some can worsen haemolysis." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden Blässe und Erschöpfung häufig einem Blut- und Qi-Mangel zugeordnet. Begleitende Verfahren können das Wohlbefinden unterstützen, ersetzen jedoch nicht die ursachenbezogene medizinische Behandlung.",
          en: "In TCM pallor and exhaustion are often assigned to a Blood and Qi deficiency. Complementary approaches may support wellbeing but do not replace the cause-directed medical treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine nährende, leicht verdauliche Kost und geregelte Routinen. Kräuterpräparate sind besonders sorgfältig ärztlich zu prüfen, da einige die Blutzellen belasten können.",
          en: "Ayurvedic support emphasises nourishing, easily digestible food and regular routines. Herbal preparations need particularly careful medical review, as some can burden the blood cells." } },
      ],
      physio: [
        { t: "p", text: {
          de: "In stabilen Phasen fördert moderate Bewegung Kondition und Wohlbefinden. In akuten Schüben mit ausgeprägter Blutarmut stehen Schonung und ein behutsamer Wiederaufbau im Vordergrund, abgestimmt mit dem Behandlungsteam.",
          en: "In stable phases moderate activity supports fitness and wellbeing. In acute flares with marked anaemia, rest and gentle rebuilding are the priority, coordinated with the treatment team." } },
      ],
    },
  },

  {
    slug: "aplastic-anemia",
    icd10: "D61.9",
    illustration: "generic",
    title: { de: "Aplastische Anämie", en: "Aplastic Anaemia" },
    summary: {
      de: "Versagen des Knochenmarks mit Mangel an roten, weißen Blutkörperchen und Blutplättchen.",
      en: "Bone marrow failure with a shortage of red cells, white cells and platelets.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die aplastische Anämie ist eine seltene, ernste Erkrankung, bei der das Knochenmark zu wenige Blutzellen bildet. Betroffen sind meist alle drei Reihen: rote Blutkörperchen (Blutarmut mit Müdigkeit), weiße Blutkörperchen (Infektanfälligkeit) und Blutplättchen (Blutungsneigung). Ursachen sind häufig autoimmun, teils durch Medikamente, Gifte, Infektionen oder unbekannt.",
          en: "Aplastic anaemia is a rare, serious condition in which the bone marrow produces too few blood cells. Usually all three lines are affected: red cells (anaemia with fatigue), white cells (susceptibility to infection) and platelets (a tendency to bleed). Causes are often autoimmune, sometimes due to medicines, toxins, infections or unknown." } },
        { t: "p", text: {
          de: "Wichtig: Hohes Fieber bei niedrigen weißen Blutkörperchen oder starke, nicht stillbare Blutungen sind Notfälle und erfordern sofort ärztliche Hilfe, im Ernstfall den Notruf 112.",
          en: "Important: high fever with low white cells or severe, uncontrollable bleeding are emergencies and require immediate medical help, and an emergency call (112) in a serious case." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Das Blutbild zeigt einen Mangel mehrerer Zellreihen; die Diagnose wird durch eine Knochenmarkuntersuchung gesichert. Weitere Tests klären mögliche Ursachen und den Schweregrad. Die Betreuung erfolgt in einem hämatologischen Zentrum.",
          en: "The blood count shows a shortage of several cell lines; the diagnosis is confirmed by a bone marrow examination. Further tests clarify possible causes and severity. Care takes place in a haematology centre." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Je nach Schweregrad und Alter kommen eine immunsuppressive Therapie oder eine Stammzelltransplantation infrage, ergänzt durch unterstützende Maßnahmen wie Transfusionen und Infektionsvorbeugung. Eine frühzeitige, spezialisierte Behandlung ist entscheidend.",
          en: "Depending on severity and age, immunosuppressive therapy or a stem cell transplant is considered, plus supportive measures such as transfusions and infection prevention. Early, specialised treatment is decisive." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Naturheilkundliche Verfahren können die Erkrankung nicht behandeln. Sinnvoll sind eine sorgfältige Infektions- und Hygienevorsorge, eine ausgewogene, sichere Ernährung und Schonung. Alle Präparate sind streng ärztlich abzustimmen, da manche Blutbildung oder Gerinnung beeinflussen.",
          en: "Naturopathic approaches cannot treat the disease. Careful infection and hygiene prevention, a balanced, safe diet and rest are sensible. All products must be strictly medically coordinated, as some affect blood formation or clotting." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird das Bild häufig einem tiefgreifenden Mangel von Qi, Blut und Essenz zugeordnet. Begleitende Verfahren dürfen nur unter qualifizierter Aufsicht und in Abstimmung mit dem hämatologischen Team erfolgen und ersetzen die Behandlung keinesfalls.",
          en: "In TCM the picture is often assigned to a profound deficiency of Qi, Blood and Essence. Complementary approaches may only take place under qualified supervision and in coordination with the haematology team and by no means replace treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung kann sich auf Ernährung und Stressreduktion beschränken. Kräuterpräparate sind wegen möglicher Wechselwirkungen mit immunsuppressiver Therapie und Blutungsrisiken streng ärztlich zu prüfen.",
          en: "Ayurvedic support may be limited to nutrition and stress reduction. Herbal preparations must be strictly medically reviewed because of possible interactions with immunosuppressive therapy and bleeding risks." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Sanfte, an die Belastbarkeit angepasste Bewegung kann Kraft und Wohlbefinden erhalten. Bei niedrigen Blutplättchen werden stoß- und verletzungsträchtige Aktivitäten gemieden; bei niedrigen weißen Blutkörperchen ist auf Infektionsschutz zu achten. Das Programm wird eng mit dem Behandlungsteam abgestimmt.",
          en: "Gentle activity adapted to capacity can preserve strength and wellbeing. With low platelets, impact and injury-prone activities are avoided; with low white cells, infection protection is important. The programme is closely coordinated with the treatment team." } },
      ],
    },
  },

  {
    slug: "thalassemia",
    icd10: "D56.9",
    illustration: "generic",
    title: { de: "Thalassämie", en: "Thalassaemia" },
    summary: {
      de: "Angeborene Störung der Hämoglobinbildung mit lebenslanger Blutarmut unterschiedlichen Grades.",
      en: "Inherited disorder of haemoglobin formation with lifelong anaemia of varying degree.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Thalassämie ist eine angeborene Störung der Bildung des roten Blutfarbstoffs (Hämoglobin). Je nach Form reicht das Bild von einem symptomlosen Merkmalträgertum bis zu einer schweren, transfusionsbedürftigen Blutarmut. Die Erkrankung ist in Mittelmeerregionen, dem Nahen Osten und Asien häufiger und wird vererbt.",
          en: "Thalassaemia is an inherited disorder of the formation of the red blood pigment (haemoglobin). Depending on the form, the picture ranges from a symptom-free carrier state to severe, transfusion-dependent anaemia. The condition is more common in Mediterranean regions, the Middle East and Asia and is inherited." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Auffällig ist oft eine Blutarmut mit sehr kleinen roten Blutkörperchen trotz normaler Eisenspeicher. Die Diagnose wird durch eine Hämoglobin-Analyse und gegebenenfalls genetische Tests gesichert; wichtig ist die Abgrenzung vom Eisenmangel, um unnötige Eisengaben zu vermeiden.",
          en: "Anaemia with very small red blood cells despite normal iron stores is often striking. The diagnosis is confirmed by haemoglobin analysis and, if needed, genetic testing; distinguishing it from iron deficiency is important to avoid unnecessary iron." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Leichte Formen benötigen oft keine Behandlung, sondern nur Aufklärung und genetische Beratung. Schwere Formen werden in spezialisierten Zentren betreut, mit regelmäßigen Transfusionen und einer Behandlung der dadurch drohenden Eisenüberladung; in ausgewählten Fällen kommt eine Stammzelltransplantation infrage.",
          en: "Mild forms often need no treatment, only information and genetic counselling. Severe forms are managed in specialised centres with regular transfusions and treatment of the resulting iron overload; in selected cases a stem cell transplant is considered." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Eine ausgewogene Ernährung unterstützt das Wohlbefinden. Wichtig: Eisenpräparate sind ohne nachgewiesenen Mangel zu meiden, da bei Thalassämie eine Eisenüberladung droht. Alle Ergänzungen sind ärztlich abzustimmen.",
          en: "A balanced diet supports wellbeing. Important: iron products should be avoided without a proven deficiency, as iron overload is a risk in thalassaemia. All supplements should be medically coordinated." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird die angeborene Blutarmut häufig einem Mangel von Essenz und Blut zugeordnet. Begleitende Verfahren können das Wohlbefinden fördern, ersetzen jedoch nicht die fachärztliche Betreuung und dürfen nicht zu Eisenüberladung beitragen.",
          en: "In TCM the inherited anaemia is often assigned to a deficiency of Essence and Blood. Complementary approaches may support wellbeing but do not replace specialist care and must not contribute to iron overload." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine nährende Kost und geregelte Routinen. Eisenhaltige oder blutbildungsfördernde Präparate sind wegen der Gefahr einer Eisenüberladung streng ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises nourishing food and regular routines. Iron-containing or blood-forming preparations must be strictly medically reviewed because of the risk of iron overload." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Bei leichten Formen ist regelmäßige, moderate Bewegung uneingeschränkt förderlich. Bei schweren Formen wird die Aktivität an Blutwerte, Herzfunktion und Belastbarkeit angepasst und mit dem Behandlungsteam abgestimmt.",
          en: "In mild forms regular, moderate activity is fully beneficial. In severe forms activity is adapted to blood values, heart function and capacity and coordinated with the treatment team." } },
      ],
    },
  },

  {
    slug: "vitamin-d-deficiency",
    icd10: "E55.9",
    illustration: "generic",
    title: { de: "Vitamin-D-Mangel", en: "Vitamin D Deficiency" },
    summary: {
      de: "Zu niedriger Vitamin-D-Spiegel mit möglichen Folgen für Knochen und Muskulatur.",
      en: "Too-low vitamin D levels with possible effects on bones and muscles.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Vitamin D entsteht überwiegend durch Sonnenlicht in der Haut und ist wichtig für den Knochenstoffwechsel, die Muskelkraft und das Immunsystem. Ein Mangel ist häufig, besonders in den Wintermonaten, bei wenig Sonnenkontakt, dunkler Haut, höherem Alter oder Aufnahmestörungen. Er kann sich durch Muskelschwäche, Knochen- und Gliederschmerzen bemerkbar machen; ausgeprägte Mängel schwächen die Knochen.",
          en: "Vitamin D is formed mainly through sunlight in the skin and is important for bone metabolism, muscle strength and the immune system. A deficiency is common, especially in winter, with little sun exposure, darker skin, older age or absorption problems. It can show as muscle weakness, bone and limb pain; marked deficiencies weaken the bones." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Der Vitamin-D-Status wird über den 25-OH-Vitamin-D-Spiegel im Blut bestimmt. Eine Bestimmung ist vor allem bei Beschwerden oder Risikofaktoren sinnvoll; bei entsprechendem Befund werden auch Kalzium und Knochengesundheit berücksichtigt.",
          en: "Vitamin D status is determined by the 25-OH vitamin D level in the blood. Testing is useful mainly with symptoms or risk factors; with corresponding findings, calcium and bone health are also considered." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Ein Mangel wird mit Vitamin D in individuell angepasster Dosierung ausgeglichen, meist als Tropfen oder Kapseln. Maßvolle Sonnenexposition und eine ausgewogene Ernährung unterstützen. Eine Überdosierung wird vermieden, da sie schaden kann.",
          en: "A deficiency is corrected with vitamin D in an individually adjusted dose, usually as drops or capsules. Moderate sun exposure and a balanced diet help. Overdosing is avoided, as it can be harmful." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Regelmäßiger, maßvoller Aufenthalt im Freien sowie vitamin-D-haltige Lebensmittel wie fetter Seefisch und Eier unterstützen die Versorgung. Hochdosierte Eigenpräparate ohne Kontrolle werden vermieden; die Dosierung ist ärztlich abzustimmen.",
          en: "Regular, moderate time outdoors and vitamin-D-containing foods such as oily sea fish and eggs support supply. High-dose self-medication without monitoring is avoided; dosing should be medically coordinated." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM gibt es kein direktes Gegenstück zum Vitamin-D-Mangel; Beschwerden wie Schwäche und Knochenschmerzen werden oft der Niere zugeordnet. Begleitende Verfahren können das Wohlbefinden fördern, ersetzen jedoch nicht den Ausgleich des Mangels.",
          en: "In TCM there is no direct counterpart to vitamin D deficiency; symptoms such as weakness and bone pain are often assigned to the Kidney. Complementary approaches may support wellbeing but do not replace correcting the deficiency." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Empfehlungen betonen maßvolle Sonneneinwirkung, eine nährende Kost und geregelte Routinen. Kräuterpräparate sind ärztlich zu prüfen und ergänzen die Vitamin-D-Gabe nur.",
          en: "Ayurvedic recommendations emphasise moderate sun exposure, nourishing food and regular routines. Herbal preparations should be medically reviewed and only complement vitamin D administration." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Regelmäßiges Kraft- und Gleichgewichtstraining stärkt Muskulatur und Knochen und beugt Stürzen vor – besonders im höheren Alter. Bewegung an der frischen Luft verbindet körperliche Aktivität mit Sonnenlicht.",
          en: "Regular strength and balance training strengthens muscles and bones and prevents falls – especially in older age. Outdoor activity combines physical activity with sunlight." } },
      ],
    },
  },

  {
    slug: "zinc-deficiency",
    icd10: "E60",
    illustration: "generic",
    title: { de: "Zinkmangel", en: "Zinc Deficiency" },
    summary: {
      de: "Mangel am Spurenelement Zink mit Folgen für Haut, Immunsystem und Wundheilung.",
      en: "Deficiency of the trace element zinc affecting skin, immunity and wound healing.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Zink ist ein Spurenelement, das für das Immunsystem, die Wundheilung, Haut und Schleimhäute sowie den Geschmackssinn wichtig ist. Ein Mangel kann zu Hautveränderungen, verzögerter Wundheilung, erhöhter Infektanfälligkeit, Haarausfall und Geschmacksstörungen führen. Ursachen sind einseitige Ernährung, Aufnahmestörungen, erhöhte Verluste oder gesteigerter Bedarf.",
          en: "Zinc is a trace element important for the immune system, wound healing, skin and mucous membranes and the sense of taste. A deficiency can cause skin changes, delayed wound healing, increased susceptibility to infection, hair loss and taste disturbances. Causes are a one-sided diet, absorption problems, increased losses or heightened need." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose stützt sich auf Beschwerden, Ernährungsgewohnheiten und Risikofaktoren; ein Zinkspiegel im Blut kann ergänzen, ist aber störanfällig. Wichtig ist, mögliche Grunderkrankungen mit Aufnahmestörung zu bedenken.",
          en: "Diagnosis rests on symptoms, dietary habits and risk factors; a blood zinc level can add information but is prone to interference. It is important to consider possible underlying diseases with impaired absorption." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Ein nachgewiesener Mangel wird mit Zinkpräparaten in angemessener Dosierung und über einen begrenzten Zeitraum ausgeglichen; parallel wird die Ursache behandelt. Eine dauerhafte Überdosierung wird vermieden, da sie den Kupferhaushalt stören kann.",
          en: "A proven deficiency is corrected with zinc supplements at an appropriate dose and for a limited period; the cause is treated in parallel. Long-term overdosing is avoided, as it can disturb copper balance." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Zinkreiche Lebensmittel sind Fleisch, Käse, Vollkorn, Nüsse und Hülsenfrüchte. Eine ausgewogene Ernährung deckt den Bedarf meist. Hochdosierte Eigenpräparate über längere Zeit werden vermieden und ärztlich abgestimmt.",
          en: "Zinc-rich foods are meat, cheese, wholegrains, nuts and pulses. A balanced diet usually meets requirements. High-dose self-medication over longer periods is avoided and medically coordinated." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden Haut- und Immunbeschwerden oft Mustern wie einem Qi-Mangel zugeordnet. Ernährungsberatung und begleitende Verfahren können das Wohlbefinden unterstützen, ersetzen jedoch nicht den gezielten Ausgleich eines Mangels.",
          en: "In TCM skin and immune symptoms are often assigned to patterns such as a Qi deficiency. Dietary advice and complementary approaches may support wellbeing but do not replace the targeted correction of a deficiency." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Empfehlungen betonen eine ausgewogene, nährstoffreiche Kost und eine geregelte Verdauung. Kräuterpräparate sind ärztlich zu prüfen und ergänzen die Behandlung nur.",
          en: "Ayurvedic recommendations emphasise a balanced, nutrient-rich diet and regular digestion. Herbal preparations should be medically reviewed and only complement treatment." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Regelmäßige, moderate Bewegung fördert das allgemeine Wohlbefinden und die Immunfunktion. Physiotherapie hat hier vor allem unterstützende Bedeutung für Kondition und Alltagsbelastbarkeit.",
          en: "Regular, moderate activity supports general wellbeing and immune function. Physiotherapy here mainly has a supportive role for fitness and everyday capacity." } },
      ],
    },
  },

  {
    slug: "neutropenia",
    icd10: "D70.9",
    illustration: "generic",
    title: { de: "Neutropenie (Mangel an weißen Blutkörperchen)", en: "Neutropenia" },
    summary: {
      de: "Verminderte neutrophile weiße Blutkörperchen mit erhöhter Infektanfälligkeit.",
      en: "Reduced neutrophil white blood cells with increased susceptibility to infection.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der Neutropenie ist die Zahl der neutrophilen Granulozyten – einer wichtigen Gruppe weißer Blutkörperchen zur Infektabwehr – vermindert. Dadurch steigt die Anfälligkeit für bakterielle Infektionen. Ursachen sind Medikamente (u. a. Chemotherapie), Infektionen, Autoimmunprozesse, Vitaminmängel oder Knochenmarkerkrankungen.",
          en: "In neutropenia the number of neutrophil granulocytes – an important group of white blood cells for fighting infection – is reduced. This increases susceptibility to bacterial infections. Causes are medicines (including chemotherapy), infections, autoimmune processes, vitamin deficiencies or bone marrow diseases." } },
        { t: "p", text: {
          de: "Wichtig: Fieber ab etwa 38,3 °C bei bekannter starker Neutropenie ist ein Notfall (febrile Neutropenie) und erfordert umgehend ärztliche Behandlung – im Zweifel über den Notruf 112 oder die Notaufnahme.",
          en: "Important: fever of about 38.3 °C or more with known severe neutropenia is an emergency (febrile neutropenia) and requires prompt medical treatment – if in doubt via the emergency number (112) or the emergency department." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Das Blutbild zeigt die verminderte Zahl neutrophiler Granulozyten; der Schweregrad bestimmt das Infektionsrisiko. Zur Ursachensuche werden Medikamente, Infektionen und – bei anhaltendem Befund – gegebenenfalls eine Knochenmarkuntersuchung herangezogen.",
          en: "The blood count shows the reduced number of neutrophil granulocytes; the severity determines the infection risk. To find the cause, medicines, infections and – with a persistent finding – possibly a bone marrow examination are used." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Behandelt wird die Ursache, etwa durch Absetzen eines auslösenden Medikaments. Bei hohem Risiko kommen wachstumsfördernde Faktoren, eine konsequente Infektionsvorbeugung und bei Fieber eine rasche antibiotische Therapie zum Einsatz. Die Betreuung erfolgt je nach Schweregrad fachärztlich.",
          en: "The cause is treated, for instance by stopping a triggering medicine. With high risk, growth-stimulating factors, consistent infection prevention and prompt antibiotic therapy for fever are used. Depending on severity, care is provided by a specialist." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Im Vordergrund stehen Infektionsschutz und Hygiene: sorgfältige Handhygiene, Meiden von Menschenansammlungen bei starker Neutropenie und Vorsicht bei rohen Lebensmitteln. Eine ausgewogene Ernährung unterstützt; immunstimulierende Präparate sind ärztlich zu prüfen.",
          en: "Infection protection and hygiene are the priority: careful hand hygiene, avoiding crowds with severe neutropenia and caution with raw foods. A balanced diet helps; immune-stimulating products should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird eine geschwächte Abwehr oft einem Qi-Mangel, insbesondere des Lungen- und Milz-Qi, zugeordnet. Begleitende Verfahren können unter Hygienevorsicht unterstützen, ersetzen aber nicht die medizinische Behandlung und Infektionsvorsorge.",
          en: "In TCM weakened defences are often assigned to a Qi deficiency, particularly of Lung and Spleen Qi. Complementary approaches may support under hygiene precautions but do not replace medical treatment and infection prevention." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine nährende, sichere Kost und eine geregelte Routine zur Stärkung des Wohlbefindens. Kräuterpräparate sind wegen möglicher Wechselwirkungen und Infektionsrisiken ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises nourishing, safe food and a regular routine to strengthen wellbeing. Herbal preparations should be medically reviewed because of possible interactions and infection risks." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Moderate Bewegung kann Kondition und Wohlbefinden erhalten. Bei starker Neutropenie werden öffentliche, stark frequentierte Trainingsumgebungen gemieden und der Infektionsschutz beachtet; Intensität und Ort werden mit dem Behandlungsteam abgestimmt.",
          en: "Moderate activity can preserve fitness and wellbeing. With severe neutropenia, public, busy training environments are avoided and infection protection is observed; intensity and setting are coordinated with the treatment team." } },
      ],
    },
  },

  {
    slug: "polycythemia",
    icd10: "D75.1",
    illustration: "generic",
    title: { de: "Polyglobulie (Erythrozytose)", en: "Polycythaemia (Erythrocytosis)" },
    summary: {
      de: "Vermehrung roter Blutkörperchen mit verdicktem Blut und erhöhtem Thromboserisiko.",
      en: "Increase in red blood cells with thicker blood and a raised risk of clots.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der Polyglobulie ist die Zahl der roten Blutkörperchen erhöht, sodass das Blut zäher wird. Das kann zu Kopfschmerzen, Schwindel, Gesichtsrötung, Ohrgeräuschen und einem erhöhten Risiko für Blutgerinnsel führen. Man unterscheidet eine reaktive Form (etwa durch Sauerstoffmangel, Rauchen oder Flüssigkeitsmangel) von einer Knochenmarkerkrankung (Polycythaemia vera).",
          en: "In polycythaemia the number of red blood cells is increased, making the blood thicker. This can cause headache, dizziness, facial flushing, ringing in the ears and a raised risk of blood clots. A reactive form (e.g. from low oxygen, smoking or dehydration) is distinguished from a bone marrow disease (polycythaemia vera)." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Das Blutbild zeigt erhöhte rote Blutwerte. Zur Unterscheidung dienen die Suche nach Ursachen (z. B. Lungen- oder Herzerkrankung, Schlafapnoe), das Hormon Erythropoetin und – bei Verdacht auf eine Knochenmarkerkrankung – ein Gentest (JAK2) sowie hämatologische Abklärung.",
          en: "The blood count shows raised red cell values. Distinguishing the cause uses a search for causes (e.g. lung or heart disease, sleep apnoea), the hormone erythropoietin and – when a bone marrow disease is suspected – a gene test (JAK2) and haematological assessment." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Bei reaktiven Formen steht die Behandlung der Ursache im Vordergrund (z. B. Rauchstopp, Behandlung einer Schlafapnoe). Bei der Polycythaemia vera werden regelmäßige Aderlässe, Thrombozytenhemmer und je nach Risiko weitere Medikamente eingesetzt, um Thrombosen vorzubeugen.",
          en: "For reactive forms, treating the cause is the priority (e.g. stopping smoking, treating sleep apnoea). In polycythaemia vera, regular bloodletting (phlebotomy), antiplatelet agents and, depending on risk, further medicines are used to prevent clots." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Ausreichende Flüssigkeitszufuhr, Rauchverzicht und ein gesunder Lebensstil unterstützen die Behandlung. Pflanzliche Mittel sind ärztlich zu prüfen, insbesondere bei gleichzeitiger blutverdünnender Behandlung wegen möglicher Wechselwirkungen.",
          en: "Adequate hydration, stopping smoking and a healthy lifestyle support treatment. Herbal products should be medically reviewed, especially alongside blood-thinning treatment because of possible interactions." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM können Beschwerden wie Kopfdruck und Gesichtsrötung Mustern wie Blut-Stase oder innerer Hitze zugeordnet werden. Begleitende Verfahren können das Wohlbefinden fördern, ersetzen aber nicht die ärztliche Behandlung und Thromboseprophylaxe.",
          en: "In TCM symptoms such as head pressure and facial flushing may be assigned to patterns like blood stasis or internal heat. Complementary approaches may support wellbeing but do not replace medical treatment and clot prevention." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont ausreichende Flüssigkeitszufuhr, eine ausgewogene Ernährung und Stressreduktion. Kräuterpräparate sind wegen möglicher Wechselwirkungen (u. a. mit Blutverdünnern) ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises adequate hydration, a balanced diet and stress reduction. Herbal preparations should be medically reviewed because of possible interactions (including with blood thinners)." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Regelmäßige, moderate Bewegung und ausreichende Flüssigkeitszufuhr unterstützen die Durchblutung. Langes Sitzen wird durch Bewegungspausen unterbrochen, um das Thromboserisiko zu senken.",
          en: "Regular, moderate activity and adequate hydration support circulation. Prolonged sitting is broken up with movement breaks to lower the risk of clots." } },
      ],
    },
  },

  {
    slug: "thrombocytopenia",
    icd10: "D69.6",
    illustration: "generic",
    title: { de: "Thrombozytopenie (Blutplättchenmangel)", en: "Thrombocytopenia" },
    summary: {
      de: "Verminderte Blutplättchen mit erhöhter Blutungsneigung, etwa blauen Flecken.",
      en: "Reduced platelets with an increased tendency to bleed, such as bruising.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der Thrombozytopenie ist die Zahl der Blutplättchen vermindert, die für die Blutgerinnung wichtig sind. Folge ist eine erhöhte Blutungsneigung mit blauen Flecken, punktförmigen Hauteinblutungen, Nasen- oder Zahnfleischbluten. Ursachen sind verminderte Bildung (Knochenmark), gesteigerter Abbau (z. B. autoimmun) oder ein erhöhter Verbrauch.",
          en: "In thrombocytopenia the number of platelets, which are important for blood clotting, is reduced. The result is an increased tendency to bleed with bruising, pinpoint skin bleeds, nosebleeds or gum bleeding. Causes are reduced production (bone marrow), increased breakdown (e.g. autoimmune) or increased consumption." } },
        { t: "p", text: {
          de: "Wichtig: Starke oder nicht stillbare Blutungen, Bluterbrechen, schwarzer Stuhl oder plötzliche starke Kopfschmerzen sind Alarmzeichen und erfordern rasche ärztliche Hilfe, im Notfall den Notruf 112.",
          en: "Important: severe or uncontrollable bleeding, vomiting blood, black stools or sudden severe headache are warning signs and require prompt medical help, and an emergency call (112) in an emergency." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Das Blutbild zeigt die verminderte Plättchenzahl; ein Blutausstrich und weitere Tests helfen, eine echte Verminderung von messtechnischen Ursachen zu unterscheiden. Zur Ursachensuche werden Medikamente, Infektionen, Autoimmunprozesse und das Knochenmark berücksichtigt.",
          en: "The blood count shows the reduced platelet number; a blood smear and further tests help distinguish a true reduction from measurement artefacts. To find the cause, medicines, infections, autoimmune processes and the bone marrow are considered." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die Behandlung richtet sich nach Ursache und Blutungsrisiko. Bei autoimmunen Formen kommen etwa Kortison oder weitere Medikamente infrage; auslösende Mittel werden abgesetzt. Bei starker Blutungsneigung oder vor Eingriffen können Plättchengaben nötig sein. Die Betreuung erfolgt oft hämatologisch.",
          en: "Treatment depends on the cause and bleeding risk. For autoimmune forms, cortisone or further medicines may be used; triggering agents are stopped. With a strong tendency to bleed or before procedures, platelet transfusions may be needed. Care is often haematological." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend sind Verletzungsschutz und der Verzicht auf gerinnungshemmende Substanzen wichtig. Wichtig: bestimmte pflanzliche Mittel (z. B. Ginkgo, Knoblauch- oder Fischölpräparate) können die Gerinnung hemmen und sind streng ärztlich abzustimmen.",
          en: "Injury protection and avoiding anticoagulant substances are important as complementary measures. Important: certain herbal products (e.g. ginkgo, garlic or fish-oil preparations) can inhibit clotting and must be strictly medically coordinated." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden Blutungsneigung und punktförmige Einblutungen oft Mustern wie Hitze im Blut oder einem Milz-Qi-Mangel zugeordnet. Begleitende Verfahren dürfen nur unter qualifizierter Aufsicht erfolgen und ersetzen nicht die ärztliche Behandlung.",
          en: "In TCM a tendency to bleed and pinpoint bleeds are often assigned to patterns such as heat in the blood or a Spleen Qi deficiency. Complementary approaches may only take place under qualified supervision and do not replace medical treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine nährende Kost und geregelte Routinen. Kräuterpräparate sind besonders sorgfältig ärztlich zu prüfen, da einige die Blutgerinnung beeinflussen können.",
          en: "Ayurvedic support emphasises nourishing food and regular routines. Herbal preparations need particularly careful medical review, as some can affect blood clotting." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Bei niedrigen Plättchenzahlen werden stoß-, sturz- und verletzungsträchtige Aktivitäten (z. B. Kontaktsport) gemieden. Sanfte Bewegung, Mobilität und Kräftigung im sicheren Bereich erhalten Beweglichkeit und Kondition; die Intensität wird an die Blutwerte angepasst.",
          en: "With low platelet counts, impact-, fall- and injury-prone activities (e.g. contact sport) are avoided. Gentle activity, mobility and strengthening in a safe range preserve mobility and fitness; intensity is adapted to blood values." } },
      ],
    },
  },

  {
    slug: "thrombophilia",
    icd10: "D68.9",
    illustration: "generic",
    title: { de: "Thrombophilie (erhöhte Gerinnungsneigung)", en: "Thrombophilia" },
    summary: {
      de: "Erhöhte Neigung zu Blutgerinnseln, angeboren oder erworben.",
      en: "An increased tendency to form blood clots, inherited or acquired.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Thrombophilie bezeichnet eine erhöhte Neigung des Blutes, Gerinnsel zu bilden. Sie kann angeboren sein (z. B. Faktor-V-Leiden) oder erworben (etwa das Antiphospholipid-Syndrom). Betroffene haben ein erhöhtes Risiko für tiefe Venenthrombosen und Lungenembolien, besonders in Risikosituationen wie langer Immobilität, Operationen, Schwangerschaft oder hormoneller Verhütung.",
          en: "Thrombophilia refers to an increased tendency of the blood to form clots. It can be inherited (e.g. factor V Leiden) or acquired (such as antiphospholipid syndrome). Affected people have a raised risk of deep vein thrombosis and pulmonary embolism, especially in risk situations such as prolonged immobility, surgery, pregnancy or hormonal contraception." } },
        { t: "p", text: {
          de: "Wichtig: Einseitige Beinschwellung mit Schmerz oder plötzliche Luftnot und Brustschmerz können auf eine Thrombose oder Lungenembolie hindeuten und erfordern sofort den Notruf 112.",
          en: "Important: one-sided leg swelling with pain or sudden breathlessness and chest pain can indicate a thrombosis or pulmonary embolism and require an immediate emergency call (112)." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Eine gezielte Thrombophilie-Abklärung erfolgt nur in ausgewählten Situationen, etwa nach ungewöhnlichen oder wiederholten Thrombosen oder bei familiärer Häufung. Sie umfasst spezielle Gerinnungstests, deren Ergebnisse fachkundig eingeordnet werden müssen.",
          en: "A targeted thrombophilia work-up is done only in selected situations, such as after unusual or recurrent clots or with a family clustering. It includes special coagulation tests whose results must be interpreted by an expert." } },
        { t: "sub", text: { de: "Behandlung & Vorbeugung", en: "Treatment & prevention" } },
        { t: "p", text: {
          de: "Im Vordergrund steht die Vorbeugung in Risikosituationen (z. B. vorübergehende Gerinnungshemmung bei Operationen oder Reisen). Nach einer Thrombose richtet sich die Dauer der Gerinnungshemmung nach dem individuellen Risiko. Die hormonelle Verhütung wird gegebenenfalls angepasst.",
          en: "Prevention in risk situations is the priority (e.g. temporary anticoagulation around surgery or travel). After a clot, the duration of anticoagulation depends on individual risk. Hormonal contraception is adjusted if needed." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Allgemeine Maßnahmen wie Bewegung, ausreichende Flüssigkeitszufuhr, Gewichtsmanagement und Rauchverzicht senken das Thromboserisiko. Wichtig: pflanzliche Mittel, die die Gerinnung beeinflussen, sind bei gleichzeitiger Gerinnungshemmung streng ärztlich abzustimmen.",
          en: "General measures such as activity, adequate hydration, weight management and stopping smoking lower the risk of clots. Important: herbal products that affect clotting must be strictly medically coordinated alongside anticoagulation." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird eine Neigung zu Gerinnseln häufig dem Muster der Blut-Stase zugeordnet. Begleitende Verfahren können das Wohlbefinden unterstützen, ersetzen aber nicht die ärztliche Vorbeugung und Behandlung und dürfen die Gerinnungshemmung nicht beeinflussen.",
          en: "In TCM a tendency to clots is often assigned to the pattern of blood stasis. Complementary approaches may support wellbeing but do not replace medical prevention and treatment and must not interfere with anticoagulation." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Bewegung, ausreichende Flüssigkeitszufuhr und geregelte Routinen. Kräuterpräparate sind wegen möglicher Wechselwirkungen mit Blutverdünnern streng ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises activity, adequate hydration and regular routines. Herbal preparations must be strictly medically reviewed because of possible interactions with blood thinners." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Regelmäßige Bewegung und die Aktivierung der Wadenmuskelpumpe (Gehen, Fußgymnastik) fördern den venösen Rückfluss. Bei langem Sitzen, Reisen oder Bettlägerigkeit sind Bewegungspausen und – nach ärztlicher Vorgabe – Kompression sinnvoll.",
          en: "Regular activity and activating the calf-muscle pump (walking, foot exercises) promote venous return. During prolonged sitting, travel or bed rest, movement breaks and – as medically advised – compression are useful." } },
      ],
    },
  },

  {
    slug: "hemochromatosis",
    icd10: "E83.11",
    illustration: "generic",
    title: { de: "Eisenspeicherkrankheit (Hämochromatose)", en: "Haemochromatosis" },
    summary: {
      de: "Übermäßige Eisenaufnahme und -einlagerung mit Schäden an Leber, Herz und Gelenken.",
      en: "Excessive iron uptake and storage, damaging the liver, heart and joints.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der Hämochromatose nimmt der Körper zu viel Eisen aus der Nahrung auf und lagert es in Organen ein. Über Jahre können Leber, Herz, Bauchspeicheldrüse, Gelenke und Hormondrüsen geschädigt werden. Typisch sind Müdigkeit, Gelenkbeschwerden, eine bräunliche Hautfärbung, Diabetes und Leberveränderungen. Die häufigste Form ist erblich.",
          en: "In haemochromatosis the body absorbs too much iron from food and stores it in organs. Over years the liver, heart, pancreas, joints and hormone glands can be damaged. Typical features are fatigue, joint problems, a bronze skin tone, diabetes and liver changes. The most common form is inherited." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Auffällig sind erhöhte Eisenwerte, insbesondere eine hohe Transferrinsättigung und ein erhöhtes Ferritin. Die erbliche Form wird durch einen Gentest gesichert; Organbeteiligungen werden gezielt untersucht (z. B. Leber, Herz, Blutzucker).",
          en: "Raised iron values are striking, in particular a high transferrin saturation and elevated ferritin. The inherited form is confirmed by a gene test; organ involvement is specifically assessed (e.g. liver, heart, blood glucose)." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die wichtigste Behandlung ist der regelmäßige Aderlass, der überschüssiges Eisen abbaut; alternativ können Medikamente zur Eisenbindung eingesetzt werden. Eisen- und stark vitamin-C-reiche Nahrungsergänzungen sowie Alkohol werden gemieden. Früh behandelt, ist die Prognose meist gut.",
          en: "The most important treatment is regular bloodletting (phlebotomy), which removes excess iron; alternatively, iron-binding medicines can be used. Iron and high-dose vitamin C supplements and alcohol are avoided. Treated early, the outlook is usually good." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Wichtig sind der Verzicht auf Eisenpräparate und hochdosiertes Vitamin C, ein zurückhaltender Alkoholkonsum und eine ausgewogene Ernährung. Schwarzer Tee zu den Mahlzeiten kann die Eisenaufnahme etwas senken. Nahrungsergänzungen sind ärztlich abzustimmen.",
          en: "Avoiding iron supplements and high-dose vitamin C, moderating alcohol and a balanced diet are important. Black tea with meals can slightly reduce iron absorption. Supplements should be medically coordinated." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Für die Eisenüberladung gibt es in der TCM kein direktes Gegenstück; begleitende Verfahren können das Wohlbefinden fördern und Beschwerden lindern, ersetzen aber nicht den Aderlass und die ärztliche Behandlung.",
          en: "There is no direct counterpart to iron overload in TCM; complementary approaches may support wellbeing and ease symptoms but do not replace phlebotomy and medical treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine ausgewogene Ernährung, Alkoholkarenz und geregelte Routinen. Eisenhaltige oder blutbildungsfördernde Präparate sind zu meiden und alle Mittel ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises a balanced diet, avoiding alcohol and regular routines. Iron-containing or blood-forming preparations should be avoided and all products medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Regelmäßige, gelenkschonende Bewegung unterstützt das Wohlbefinden. Bei Gelenkbeschwerden helfen gezielte Kräftigungs- und Mobilisationsübungen, Beweglichkeit und Funktion zu erhalten.",
          en: "Regular, joint-friendly activity supports wellbeing. With joint problems, targeted strengthening and mobilisation exercises help preserve mobility and function." } },
      ],
    },
  },

  {
    slug: "monoclonal-gammopathy-mgus",
    icd10: "D47.2",
    illustration: "generic",
    title: { de: "Monoklonale Gammopathie (MGUS)", en: "Monoclonal Gammopathy (MGUS)" },
    summary: {
      de: "Nachweis eines abnormen Eiweißes im Blut ohne Erkrankung – wird überwacht.",
      en: "An abnormal protein in the blood without disease – kept under surveillance.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "MGUS steht für eine monoklonale Gammopathie unbestimmter Bedeutung. Dabei findet sich im Blut ein von einer Zellgruppe gebildetes abnormes Eiweiß (Paraprotein), ohne dass eine behandlungsbedürftige Erkrankung vorliegt. MGUS verursacht meist keine Beschwerden und wird häufig zufällig entdeckt. In einem kleinen Anteil der Fälle kann sich daraus mit der Zeit eine ernstere Erkrankung entwickeln, weshalb Kontrollen wichtig sind.",
          en: "MGUS stands for monoclonal gammopathy of undetermined significance. An abnormal protein (paraprotein) made by a group of cells is found in the blood without a disease needing treatment. MGUS usually causes no symptoms and is often discovered by chance. In a small proportion of cases a more serious disease can develop over time, which is why monitoring is important." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose & Überwachung", en: "Diagnosis & surveillance" } },
        { t: "p", text: {
          de: "Die Diagnose stützt sich auf Bluttests (Eiweiß-Elektrophorese, freie Leichtketten) und den Ausschluss von Organschäden. Da MGUS selbst nicht behandelt wird, sind regelmäßige, risikoangepasste Verlaufskontrollen entscheidend, um einen Übergang in eine behandlungsbedürftige Erkrankung frühzeitig zu erkennen.",
          en: "Diagnosis rests on blood tests (protein electrophoresis, free light chains) and excluding organ damage. As MGUS itself is not treated, regular, risk-adapted follow-up checks are decisive to detect progression to a treatable disease early." } },
        { t: "sub", text: { de: "Warnzeichen", en: "Warning signs" } },
        { t: "p", text: {
          de: "Auf Zeichen wie Knochenschmerzen, ungewollten Gewichtsverlust, Blutarmut, Nierenprobleme oder häufige Infekte ist zu achten; sie sollten ärztlich abgeklärt werden.",
          en: "Signs such as bone pain, unintended weight loss, anaemia, kidney problems or frequent infections should be watched for and medically assessed." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Da keine Behandlung erforderlich ist, stehen ein gesunder Lebensstil, ausgewogene Ernährung und Bewegung im Vordergrund. Nahrungsergänzungen sind ärztlich abzustimmen; die regelmäßigen Kontrollen sollten eingehalten werden.",
          en: "As no treatment is needed, a healthy lifestyle, balanced nutrition and activity are the priority. Supplements should be medically coordinated; the regular checks should be kept." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Da MGUS keine Beschwerden macht, beschränken sich begleitende TCM-Verfahren auf die Förderung des allgemeinen Wohlbefindens. Sie ersetzen nicht die regelmäßige ärztliche Überwachung.",
          en: "As MGUS causes no symptoms, complementary TCM approaches are limited to supporting general wellbeing. They do not replace regular medical surveillance." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine ausgewogene Ernährung, geregelte Routinen und Stressreduktion. Kräuterpräparate sind ärztlich zu prüfen; die empfohlenen Kontrollen bleiben unverzichtbar.",
          en: "Ayurvedic support emphasises a balanced diet, regular routines and stress reduction. Herbal preparations should be medically reviewed; the recommended checks remain essential." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Regelmäßige, moderate Bewegung erhält Kondition, Muskelkraft und Knochengesundheit. Ein individuell angepasstes Training unterstützt das allgemeine Wohlbefinden ohne besondere Einschränkungen.",
          en: "Regular, moderate activity preserves fitness, muscle strength and bone health. An individually adapted programme supports general wellbeing without particular restrictions." } },
      ],
    },
  },

  {
    slug: "splenomegaly",
    icd10: "R16.1",
    illustration: "generic",
    title: { de: "Milzvergrößerung (Splenomegalie)", en: "Splenomegaly" },
    summary: {
      de: "Vergrößerte Milz als Zeichen verschiedener Grunderkrankungen – ein Befund, keine eigene Krankheit.",
      en: "An enlarged spleen signalling various underlying conditions – a finding, not a disease in itself.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Splenomegalie ist eine Vergrößerung der Milz. Sie ist kein eigenständiges Krankheitsbild, sondern ein Hinweis auf eine zugrunde liegende Ursache – etwa Infektionen, Blut- und Lympherkrankungen, Lebererkrankungen mit Pfortaderstau oder Stoffwechselstörungen. Beschwerden können ein Druck- oder Völlegefühl im linken Oberbauch sein; oft bleibt sie zunächst unbemerkt.",
          en: "Splenomegaly is an enlargement of the spleen. It is not a disease in itself but a pointer to an underlying cause – such as infections, blood and lymph diseases, liver disease with portal congestion or metabolic disorders. Symptoms can be a pressure or fullness in the left upper abdomen; often it goes unnoticed at first." } },
      ],
      medical: [
        { t: "sub", text: { de: "Ursachensuche", en: "Finding the cause" } },
        { t: "p", text: {
          de: "Im Mittelpunkt steht die Abklärung der Ursache: körperliche Untersuchung, Blutbild und weitere Laborwerte, Ultraschall des Bauchraums sowie je nach Verdacht gezielte Zusatzuntersuchungen. Die Behandlung richtet sich nach der Grunderkrankung.",
          en: "The focus is on clarifying the cause: physical examination, blood count and further laboratory values, abdominal ultrasound and targeted additional tests depending on the suspicion. Treatment follows the underlying disease." } },
        { t: "sub", text: { de: "Vorsicht bei Verletzungen", en: "Caution with injuries" } },
        { t: "p", text: {
          de: "Eine stark vergrößerte Milz ist verletzlicher. Wichtig: Plötzliche, starke Schmerzen im linken Oberbauch, besonders nach einem Stoß oder Sturz, können auf eine Milzverletzung mit innerer Blutung hindeuten und erfordern sofort den Notruf 112.",
          en: "A markedly enlarged spleen is more vulnerable. Important: sudden, severe pain in the left upper abdomen, especially after a knock or fall, can indicate a spleen injury with internal bleeding and requires an immediate emergency call (112)." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Da die Milzvergrößerung ein Symptom ist, richten sich begleitende Maßnahmen nach der Ursache. Allgemein unterstützen ausgewogene Ernährung, Schonung und der Verzicht auf riskante Stoßbelastungen. Präparate sind ärztlich abzustimmen.",
          en: "As splenomegaly is a symptom, complementary measures follow the cause. In general, a balanced diet, rest and avoiding risky impact stress help. Supplements should be medically coordinated." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM hat die Milz eine eigene, vom westlichen Organ abweichende Bedeutung. Begleitende Verfahren können das Wohlbefinden fördern, ersetzen aber nicht die Abklärung und Behandlung der eigentlichen Ursache.",
          en: "In TCM the Spleen has its own meaning, different from the Western organ. Complementary approaches may support wellbeing but do not replace clarifying and treating the actual cause." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine leicht verdauliche Ernährung und geregelte Routinen. Kräuterpräparate sind ärztlich zu prüfen und ersetzen nicht die Ursachenabklärung.",
          en: "Ayurvedic support emphasises easily digestible nutrition and regular routines. Herbal preparations should be medically reviewed and do not replace clarifying the cause." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Bei deutlich vergrößerter Milz werden Kontaktsportarten und stoßbelastende Aktivitäten gemieden, um Verletzungen vorzubeugen. Sanfte, sichere Bewegung erhält Kondition und Wohlbefinden; die Auswahl erfolgt in Absprache mit dem Behandlungsteam.",
          en: "With a markedly enlarged spleen, contact sports and impact-loading activities are avoided to prevent injury. Gentle, safe activity preserves fitness and wellbeing; the choice is made in agreement with the treatment team." } },
      ],
    },
  },

  {
    slug: "reactive-lymphadenopathy",
    icd10: "R59.9",
    illustration: "generic",
    title: { de: "Reaktive Lymphknotenschwellung", en: "Reactive Lymphadenopathy" },
    summary: {
      de: "Anschwellen der Lymphknoten als Reaktion auf Infekte – meist harmlos und vorübergehend.",
      en: "Swelling of lymph nodes reacting to infection – usually harmless and temporary.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der reaktiven Lymphknotenschwellung vergrößern sich Lymphknoten als normale Reaktion des Immunsystems, meist auf Infektionen wie Erkältungen, Hals- oder Zahninfekte. Typisch sind weiche, verschiebliche, oft druckschmerzhafte Knoten, etwa am Hals. In der Regel bilden sie sich innerhalb einiger Wochen wieder zurück.",
          en: "In reactive lymphadenopathy, lymph nodes enlarge as a normal immune response, usually to infections such as colds, throat or dental infections. Typical are soft, mobile, often tender nodes, for example in the neck. As a rule they subside again within a few weeks." } },
        { t: "p", text: {
          de: "Wichtig: Harte, nicht verschiebliche, schmerzlose oder über mehrere Wochen anhaltende und wachsende Lymphknoten – besonders mit Nachtschweiß, Fieber oder ungewolltem Gewichtsverlust – sollten ärztlich abgeklärt werden.",
          en: "Important: hard, fixed, painless or persistently enlarging nodes lasting several weeks – especially with night sweats, fever or unintended weight loss – should be medically assessed." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Wichtig sind Vorgeschichte und Tastbefund (Größe, Konsistenz, Verschieblichkeit, Dauer). Bei harmlosem Bild wird häufig zunächst beobachtet. Bei auffälligen Merkmalen oder Anhalten kommen Blutuntersuchungen, Ultraschall und – falls nötig – eine Gewebeprobe zum Einsatz.",
          en: "History and palpation findings (size, consistency, mobility, duration) are important. With a harmless picture, a period of observation is often chosen first. With suspicious features or persistence, blood tests, ultrasound and – if needed – a tissue sample are used." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die Behandlung richtet sich nach der Ursache. Bei einer einfachen infektbedingten Schwellung genügt meist die Behandlung des Infekts; die Knoten bilden sich von selbst zurück.",
          en: "Treatment follows the cause. For simple infection-related swelling, treating the infection usually suffices; the nodes regress on their own." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Bei infektbedingter Schwellung unterstützen Ruhe, ausreichend Flüssigkeit und eine ausgewogene Ernährung die Genesung. Feuchtwarme Umschläge können als Wohlfühlmaßnahme dienen. Anhaltende oder verdächtige Schwellungen gehören ärztlich abgeklärt.",
          en: "For infection-related swelling, rest, adequate fluids and a balanced diet support recovery. Warm, moist compresses may serve as a comfort measure. Persistent or suspicious swellings should be medically assessed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden Lymphknotenschwellungen oft mit Schleim-Ansammlung oder einem Eindringen äußerer Faktoren in Verbindung gebracht. Begleitende Verfahren können bei harmlosen Infekten unterstützen, ersetzen aber nicht die Abklärung verdächtiger Befunde.",
          en: "In TCM swollen nodes are often associated with phlegm accumulation or an invasion of external factors. Complementary approaches may support in harmless infections but do not replace assessment of suspicious findings." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine leicht verdauliche Kost, Ruhe und geregelte Routinen zur Unterstützung des Immunsystems. Kräuterpräparate sind ärztlich zu prüfen; verdächtige Schwellungen bedürfen einer Abklärung.",
          en: "Ayurvedic support emphasises easily digestible food, rest and regular routines to support the immune system. Herbal preparations should be medically reviewed; suspicious swellings require assessment." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie spielt bei der reaktiven Lymphknotenschwellung nur eine unterstützende Rolle. Moderate Bewegung im Rahmen des Wohlbefindens fördert die Genesung; bei akutem Infekt mit Fieber ist Schonung sinnvoll.",
          en: "Physiotherapy plays only a supportive role in reactive lymphadenopathy. Moderate activity within comfort supports recovery; during an acute infection with fever, rest is sensible." } },
      ],
    },
  },

  {
    slug: "allergic-rhinitis",
    icd10: "J30.9",
    illustration: "generic",
    title: { de: "Allergischer Schnupfen (Heuschnupfen)", en: "Allergic Rhinitis (Hay Fever)" },
    summary: {
      de: "Allergische Entzündung der Nasenschleimhaut mit Niesen, Fließschnupfen und juckenden Augen.",
      en: "Allergic inflammation of the nasal lining with sneezing, runny nose and itchy eyes.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Der allergische Schnupfen ist eine allergisch bedingte Entzündung der Nasenschleimhaut, ausgelöst durch Allergene wie Pollen, Hausstaubmilben oder Tierhaare. Typisch sind anfallsartiges Niesen, wässriger Fließschnupfen, eine verstopfte, juckende Nase und oft juckende, tränende Augen. Er kann saisonal (Heuschnupfen) oder ganzjährig auftreten und die Lebensqualität sowie den Schlaf beeinträchtigen.",
          en: "Allergic rhinitis is an allergy-driven inflammation of the nasal lining, triggered by allergens such as pollen, house dust mites or animal dander. Typical are bouts of sneezing, a watery runny nose, a blocked, itchy nose and often itchy, watery eyes. It can be seasonal (hay fever) or year-round and can impair quality of life and sleep." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose stützt sich auf die Beschwerden und den zeitlichen Zusammenhang mit Auslösern, ergänzt durch Allergietests (Hauttest oder spezifische Antikörper im Blut). So lassen sich die auslösenden Allergene bestimmen.",
          en: "Diagnosis rests on the symptoms and their timing with triggers, supplemented by allergy tests (skin test or specific antibodies in the blood). This identifies the triggering allergens." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Grundlage ist die Allergenvermeidung, soweit möglich. Medikamentös helfen Antihistaminika (als Tabletten oder Nasenspray) und kortisonhaltige Nasensprays. Bei geeigneten Fällen kann eine Hyposensibilisierung (spezifische Immuntherapie) die Ursache langfristig behandeln.",
          en: "The basis is allergen avoidance as far as possible. Medicines that help are antihistamines (as tablets or nasal spray) and cortisone-containing nasal sprays. In suitable cases, allergen immunotherapy (desensitisation) can treat the cause long-term." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Alltag & Linderung", en: "Everyday life & relief" } },
        { t: "ul", items: {
          de: ["Nasenspülungen mit Salzwasser können Allergene ausspülen und die Nase befeuchten.","Pollenschutz: abends lüften, Haare waschen, Pollengitter, Wäsche nicht draußen trocknen.","Bei Hausstaubmilben helfen milbendichte Bezüge und regelmäßiges Reinigen.","Pflanzliche Mittel sind ärztlich zu prüfen und ersetzen bei starken Beschwerden nicht die medikamentöse Behandlung."],
          en: ["Saline nasal rinses can wash out allergens and moisten the nose.","Pollen protection: ventilate in the evening, wash hair, use pollen screens, do not dry laundry outside.","For house dust mites, mite-proof covers and regular cleaning help.","Herbal products should be medically reviewed and do not replace medication for severe symptoms."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird der allergische Schnupfen oft einem Mangel des Abwehr-Qi mit Beteiligung von Lunge, Milz und Niere zugeordnet. Akupunktur und individuelle Kräuter können begleitend eingesetzt werden, ersetzen aber nicht die Allergenvermeidung und bewährte Behandlung.",
          en: "In TCM allergic rhinitis is often assigned to a deficiency of defensive Qi involving Lung, Spleen and Kidney. Acupuncture and individual herbs may be used as complementary care but do not replace allergen avoidance and established treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitmaßnahmen umfassen Nasenpflege, eine ausgewogene Ernährung und geregelte Routinen zur Stärkung der Abwehr. Kräuterpräparate sind ärztlich zu prüfen und ergänzen die Behandlung nur.",
          en: "Ayurvedic supportive measures include nasal care, a balanced diet and regular routines to strengthen defences. Herbal preparations should be medically reviewed and only complement treatment." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Atemübungen und eine gute Nasenhygiene können das Durchatmen erleichtern. Regelmäßige Bewegung stärkt das allgemeine Wohlbefinden; an Tagen mit hoher Pollenbelastung wird intensives Training im Freien besser gemieden.",
          en: "Breathing exercises and good nasal hygiene can make breathing easier. Regular activity supports general wellbeing; on high-pollen days, intense outdoor training is better avoided." } },
      ],
    },
  },

  {
    slug: "food-allergy",
    icd10: "T78.1",
    illustration: "generic",
    title: { de: "Nahrungsmittelallergie", en: "Food Allergy" },
    summary: {
      de: "Allergische Reaktion auf bestimmte Nahrungsmittel – von Hautjucken bis zum Notfall.",
      en: "Allergic reaction to certain foods – from skin itching to a medical emergency.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der Nahrungsmittelallergie reagiert das Immunsystem überschießend auf eigentlich harmlose Bestandteile bestimmter Lebensmittel (z. B. Erdnüsse, Nüsse, Milch, Ei, Fisch, Schalentiere, Weizen). Reaktionen reichen von Kribbeln im Mund, Hautausschlag und Magen-Darm-Beschwerden bis zu Atemnot und einer lebensbedrohlichen Anaphylaxie.",
          en: "In food allergy the immune system overreacts to actually harmless components of certain foods (e.g. peanuts, tree nuts, milk, egg, fish, shellfish, wheat). Reactions range from tingling in the mouth, skin rash and gastrointestinal symptoms to shortness of breath and a life-threatening anaphylaxis." } },
        { t: "p", text: {
          de: "Wichtig: Atemnot, Schwellung im Hals, Kreislaufschwäche oder ein Engegefühl sind Notfallzeichen – dann sofort den Adrenalin-Autoinjektor (falls verordnet) anwenden und den Notruf 112 rufen.",
          en: "Important: shortness of breath, throat swelling, circulatory weakness or a sense of tightness are emergency signs – then immediately use the adrenaline auto-injector (if prescribed) and call the emergency number (112)." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Abklärung umfasst eine genaue Vorgeschichte, Allergietests (Hauttest, spezifische Antikörper) und – in ausgewählten Fällen unter ärztlicher Aufsicht – eine Provokationstestung. So werden echte Allergien von Unverträglichkeiten abgegrenzt.",
          en: "Assessment includes a careful history, allergy tests (skin test, specific antibodies) and – in selected cases under medical supervision – a challenge test. This distinguishes true allergies from intolerances." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Grundlage ist das konsequente Meiden des auslösenden Lebensmittels, unterstützt durch Beratung zum Lesen von Zutatenlisten. Bei Risiko für schwere Reaktionen wird ein Notfallset mit Adrenalin-Autoinjektor verordnet und die Anwendung geschult. Antihistaminika lindern leichte Reaktionen.",
          en: "The basis is consistent avoidance of the triggering food, supported by advice on reading ingredient lists. For those at risk of severe reactions, an emergency kit with an adrenaline auto-injector is prescribed and its use is trained. Antihistamines ease mild reactions." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Naturheilkundliche Maßnahmen können die Allergie nicht aufheben. Hilfreich sind eine strukturierte, sichere Ernährungsplanung und Aufklärung. Selbsttests und nicht belegte Verfahren zur Allergiediagnostik sind kritisch zu sehen; die Beratung erfolgt ärztlich.",
          en: "Naturopathic measures cannot cure the allergy. A structured, safe eating plan and education are helpful. Self-tests and unproven methods for allergy diagnosis should be viewed critically; advice is given medically." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden allergische Reaktionen häufig mit einer Schwäche des Abwehr-Qi in Verbindung gebracht. Begleitende Verfahren können das Wohlbefinden fördern, ersetzen jedoch nicht die Allergenvermeidung und die Notfallversorgung bei schweren Reaktionen.",
          en: "In TCM allergic reactions are often associated with a weakness of defensive Qi. Complementary approaches may support wellbeing but do not replace allergen avoidance and emergency care for severe reactions." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine bekömmliche Ernährung und geregelte Routinen zur Stärkung der Verdauung. Kräuterpräparate sind ärztlich zu prüfen und ersetzen weder die Vermeidung des Auslösers noch das Notfallset.",
          en: "Ayurvedic support emphasises a digestible diet and regular routines to strengthen digestion. Herbal preparations should be medically reviewed and replace neither avoiding the trigger nor the emergency kit." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie hat hier vor allem unterstützende Bedeutung für das allgemeine Wohlbefinden durch regelmäßige Bewegung. Bei seltenen anstrengungsabhängigen, durch Nahrungsmittel ausgelösten Reaktionen wird das Vorgehen individuell mit dem Behandlungsteam abgestimmt.",
          en: "Physiotherapy here mainly has a supportive role for general wellbeing through regular activity. For rare exercise-dependent, food-triggered reactions, the approach is coordinated individually with the treatment team." } },
      ],
    },
  },

  {
    slug: "drug-allergy",
    icd10: "T88.7",
    illustration: "generic",
    title: { de: "Arzneimittelallergie", en: "Drug Allergy" },
    summary: {
      de: "Allergische Reaktion auf ein Medikament – von Hautausschlag bis zum Notfall.",
      en: "Allergic reaction to a medicine – from skin rash to a medical emergency.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der Arzneimittelallergie reagiert das Immunsystem überempfindlich auf ein Medikament. Häufig sind Hautreaktionen wie Ausschlag, Quaddeln und Juckreiz; möglich sind auch Fieber oder – seltener – schwere Reaktionen bis zur Anaphylaxie oder ausgeprägten Hautreaktionen. Wichtig ist, echte Allergien von häufigeren, nicht allergischen Nebenwirkungen zu unterscheiden.",
          en: "In drug allergy the immune system reacts hypersensitively to a medicine. Skin reactions such as rash, hives and itching are common; fever or – more rarely – severe reactions up to anaphylaxis or marked skin reactions are also possible. It is important to distinguish true allergies from the more common non-allergic side effects." } },
        { t: "p", text: {
          de: "Wichtig: Atemnot, Schwellung im Gesicht oder Hals, Kreislaufschwäche oder eine sich rasch ausbreitende, blasige Hautreaktion sind Notfälle – Medikament stoppen, bei Anaphylaxie den Adrenalin-Autoinjektor anwenden und sofort den Notruf 112 rufen.",
          en: "Important: shortness of breath, swelling of the face or throat, circulatory weakness or a rapidly spreading, blistering skin reaction are emergencies – stop the medicine, use the adrenaline auto-injector in anaphylaxis and call the emergency number (112) immediately." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Wichtig sind eine genaue Medikamenten- und Reaktionsgeschichte; je nach Situation können Haut- oder Bluttests und – unter Aufsicht – Provokationstestungen folgen. Die auslösenden Wirkstoffe werden dokumentiert.",
          en: "A careful medication and reaction history is important; depending on the situation, skin or blood tests and – under supervision – challenge tests may follow. The triggering agents are documented." } },
        { t: "sub", text: { de: "Behandlung & Vorsorge", en: "Treatment & prevention" } },
        { t: "p", text: {
          de: "Zentral ist das künftige Meiden des Auslösers und geeigneter Alternativen. Ein Allergiepass hilft, Verwechslungen zu vermeiden. Akute Reaktionen werden je nach Schwere mit Antihistaminika, Kortison oder – bei Anaphylaxie – Adrenalin behandelt.",
          en: "Central is future avoidance of the trigger and of suitable alternatives. An allergy passport helps prevent mix-ups. Acute reactions are treated according to severity with antihistamines, cortisone or – in anaphylaxis – adrenaline." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Naturheilkundliche Verfahren können eine Arzneimittelallergie nicht beseitigen. Wichtig sind eine gute Dokumentation (Allergiepass) und die Information aller Behandelnden. Pflanzliche Mittel sind ärztlich zu prüfen, da auch sie allergisch wirken oder wechselwirken können.",
          en: "Naturopathic approaches cannot remove a drug allergy. Good documentation (allergy passport) and informing all care providers are important. Herbal products should be medically reviewed, as they too can cause allergy or interact." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Begleitende TCM-Verfahren können das allgemeine Wohlbefinden unterstützen, spielen aber bei der Arzneimittelallergie keine ursächliche Rolle. Sie ersetzen nicht das Meiden des Auslösers und die Notfallversorgung.",
          en: "Complementary TCM approaches may support general wellbeing but play no causal role in drug allergy. They do not replace avoiding the trigger and emergency care." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung kann sich auf allgemeine Maßnahmen wie Ernährung und Routinen beschränken. Kräuterpräparate sind ärztlich zu prüfen, da sie ebenfalls Allergien oder Wechselwirkungen auslösen können.",
          en: "Ayurvedic support may be limited to general measures such as nutrition and routines. Herbal preparations should be medically reviewed, as they can also cause allergies or interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie hat bei der Arzneimittelallergie keine spezifische Rolle. Regelmäßige, moderate Bewegung unterstützt allgemein die Gesundheit und das Wohlbefinden.",
          en: "Physiotherapy has no specific role in drug allergy. Regular, moderate activity generally supports health and wellbeing." } },
      ],
    },
  },

  {
    slug: "insect-venom-allergy",
    icd10: "T78.4",
    illustration: "generic",
    title: { de: "Insektengiftallergie", en: "Insect Venom Allergy" },
    summary: {
      de: "Allergie gegen Bienen- oder Wespengift mit Gefahr schwerer Reaktionen.",
      en: "Allergy to bee or wasp venom with a risk of severe reactions.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der Insektengiftallergie reagiert das Immunsystem überschießend auf das Gift von Bienen oder Wespen. Während ein Stich normalerweise nur eine lokale Schwellung verursacht, kann es bei Allergie zu großflächigen Schwellungen oder zu einer raschen, lebensbedrohlichen Allgemeinreaktion (Anaphylaxie) mit Atemnot und Kreislaufschwäche kommen.",
          en: "In insect venom allergy the immune system overreacts to the venom of bees or wasps. While a sting normally causes only a local swelling, an allergy can lead to large-area swelling or to a rapid, life-threatening whole-body reaction (anaphylaxis) with shortness of breath and circulatory weakness." } },
        { t: "p", text: {
          de: "Wichtig: Atemnot, Schwellung im Hals, Schwindel oder Kreislaufschwäche nach einem Stich sind Notfallzeichen – sofort den Adrenalin-Autoinjektor anwenden (falls verordnet) und den Notruf 112 rufen.",
          en: "Important: shortness of breath, throat swelling, dizziness or circulatory weakness after a sting are emergency signs – immediately use the adrenaline auto-injector (if prescribed) and call the emergency number (112)." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Abklärung umfasst die Reaktionsgeschichte sowie Allergietests (Hauttest, spezifische Antikörper) zur Bestimmung des auslösenden Insekts und des Schweregrads. Sie erfolgt allergologisch.",
          en: "Assessment includes the reaction history and allergy tests (skin test, specific antibodies) to determine the triggering insect and the severity. It is carried out by an allergy specialist." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Bei Risiko für schwere Reaktionen wird ein Notfallset mit Adrenalin-Autoinjektor verordnet und die Anwendung geschult. Die spezifische Immuntherapie (Hyposensibilisierung) gegen das Insektengift ist sehr wirksam und kann vor schweren Reaktionen schützen.",
          en: "For those at risk of severe reactions, an emergency kit with an adrenaline auto-injector is prescribed and its use is trained. Allergen immunotherapy (desensitisation) against the insect venom is highly effective and can protect against severe reactions." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Im Vordergrund stehen Vorbeugung und Verhalten: Barfußlaufen und süße Speisen/Getränke im Freien meiden, keine hektischen Bewegungen bei Insekten, Vorsicht in der Nähe von Nestern. Naturheilkundliche Mittel ersetzen weder die Immuntherapie noch das Notfallset.",
          en: "Prevention and behaviour are the priority: avoid walking barefoot and sweet foods/drinks outdoors, no hectic movements near insects, caution near nests. Naturopathic remedies replace neither immunotherapy nor the emergency kit." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Begleitende TCM-Verfahren können das allgemeine Wohlbefinden unterstützen, haben aber keinen Einfluss auf die Schwere einer Insektengiftreaktion. Sie ersetzen nicht die Notfallversorgung und die spezifische Immuntherapie.",
          en: "Complementary TCM approaches may support general wellbeing but have no effect on the severity of an insect venom reaction. They do not replace emergency care and allergen immunotherapy." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung beschränkt sich auf allgemeine Maßnahmen zum Wohlbefinden. Kräuterpräparate sind ärztlich zu prüfen und ersetzen nicht das verordnete Notfallset und die Immuntherapie.",
          en: "Ayurvedic support is limited to general wellbeing measures. Herbal preparations should be medically reviewed and do not replace the prescribed emergency kit and immunotherapy." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie hat bei der Insektengiftallergie keine spezifische Rolle. Regelmäßige Bewegung fördert das allgemeine Wohlbefinden; im Freien empfiehlt sich in der Insektensaison ein umsichtiges Verhalten.",
          en: "Physiotherapy has no specific role in insect venom allergy. Regular activity supports general wellbeing; outdoors, prudent behaviour is advisable during insect season." } },
      ],
    },
  },

  {
    slug: "anaphylaxis",
    icd10: "T78.2",
    illustration: "generic",
    title: { de: "Anaphylaxie (schwere allergische Reaktion)", en: "Anaphylaxis" },
    summary: {
      de: "Lebensbedrohliche, rasch verlaufende allergische Reaktion – ein medizinischer Notfall.",
      en: "A life-threatening, rapidly progressing allergic reaction – a medical emergency.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Anaphylaxie ist die schwerste Form einer allergischen Reaktion und ein lebensbedrohlicher Notfall. Innerhalb von Minuten können mehrere Organsysteme betroffen sein: Haut (Quaddeln, Rötung), Atemwege (Atemnot, pfeifende Atmung, Schwellung im Hals), Kreislauf (Blutdruckabfall, Schwindel, Bewusstlosigkeit) und Magen-Darm-Trakt. Häufige Auslöser sind Nahrungsmittel, Insektengift und Medikamente.",
          en: "Anaphylaxis is the most severe form of allergic reaction and a life-threatening emergency. Within minutes several organ systems can be affected: skin (hives, redness), airways (shortness of breath, wheezing, throat swelling), circulation (drop in blood pressure, dizziness, loss of consciousness) and the gastrointestinal tract. Common triggers are foods, insect venom and medicines." } },
        { t: "p", text: {
          de: "Notfall: Bei Verdacht auf Anaphylaxie sofort den Adrenalin-Autoinjektor (EpiPen o. Ä.) in den äußeren Oberschenkel geben und umgehend den Notruf 112 rufen. Die betroffene Person flach mit erhöhten Beinen lagern (bei Atemnot sitzend); die Adrenalingabe nach Anweisung wiederholen. Auch nach Besserung ist eine ärztliche Überwachung nötig, da die Reaktion erneut auftreten kann.",
          en: "Emergency: if anaphylaxis is suspected, immediately give the adrenaline auto-injector (EpiPen or similar) into the outer thigh and call the emergency number (112) at once. Lay the person flat with legs raised (sitting if breathless); repeat adrenaline as instructed. Even after improvement, medical observation is needed, as the reaction can recur." } },
      ],
      medical: [
        { t: "sub", text: { de: "Akutbehandlung", en: "Acute treatment" } },
        { t: "p", text: {
          de: "Adrenalin in den Muskel ist das lebensrettende Erstmedikament und darf nicht verzögert werden. Ergänzend kommen Sauerstoff, Flüssigkeit über die Vene sowie Antihistaminika und Kortison zum Einsatz. Die Überwachung erfolgt im Krankenhaus, da eine zweite Reaktionsphase möglich ist.",
          en: "Intramuscular adrenaline is the life-saving first medicine and must not be delayed. Oxygen, intravenous fluids and, additionally, antihistamines and cortisone are used. Observation takes place in hospital, as a second reaction phase is possible." } },
        { t: "sub", text: { de: "Danach: Vorsorge", en: "Afterwards: prevention" } },
        { t: "p", text: {
          de: "Nach einer Anaphylaxie werden der Auslöser abgeklärt (allergologisch), ein Notfallset mit Adrenalin-Autoinjektor verordnet und die Anwendung geschult. Ein Notfallplan und ein Allergiepass sind wichtig; bei bestimmten Auslösern kann eine Immuntherapie schützen.",
          en: "After an anaphylaxis, the trigger is clarified (allergy specialist), an emergency kit with an adrenaline auto-injector is prescribed and its use is trained. An emergency plan and an allergy passport are important; for certain triggers, immunotherapy can protect." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Bei der Anaphylaxie selbst gibt es keinen Platz für naturheilkundliche Mittel – sie ist ein Notfall, der sofort Adrenalin und den Notruf 112 erfordert. Begleitend sinnvoll sind Auslöservermeidung, sorgfältige Vorbereitung (Notfallset stets dabei) und Schulung des Umfelds.",
          en: "In anaphylaxis itself there is no place for naturopathic remedies – it is an emergency that requires immediate adrenaline and the emergency number (112). Trigger avoidance, careful preparation (always carrying the emergency kit) and training those around you are sensible complementary measures." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Die TCM spielt in der akuten Anaphylaxie keine Rolle. Begleitend, außerhalb des Notfalls, kann sie allenfalls das allgemeine Wohlbefinden unterstützen; sie ersetzt niemals Adrenalin, den Notruf 112 und die allergologische Vorsorge.",
          en: "TCM plays no role in acute anaphylaxis. Outside the emergency, it may at most support general wellbeing as complementary care; it never replaces adrenaline, the emergency number (112) and allergy prevention." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Auch ayurvedische Verfahren haben in der akuten Anaphylaxie keinen Platz. Außerhalb des Notfalls kann eine gesunde Lebensweise unterstützen; Kräuterpräparate sind ärztlich zu prüfen und ersetzen niemals das Notfallmanagement.",
          en: "Ayurvedic approaches also have no place in acute anaphylaxis. Outside the emergency, a healthy lifestyle can support; herbal preparations should be medically reviewed and never replace emergency management." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie hat in der akuten Anaphylaxie keine Rolle. Bei seltener anstrengungsausgelöster Anaphylaxie wird das Bewegungsverhalten (z. B. Abstand zu bestimmten Mahlzeiten) individuell mit dem Behandlungsteam festgelegt.",
          en: "Physiotherapy has no role in acute anaphylaxis. For rare exercise-induced anaphylaxis, activity behaviour (e.g. spacing from certain meals) is set individually with the treatment team." } },
      ],
    },
  },

  {
    slug: "hereditary-angioedema",
    icd10: "D84.1",
    illustration: "generic",
    title: { de: "Hereditäres Angioödem", en: "Hereditary Angioedema" },
    summary: {
      de: "Erbliche Erkrankung mit wiederkehrenden Schwellungen – nicht allergisch bedingt.",
      en: "An inherited condition with recurrent swelling – not allergy-driven.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Das hereditäre Angioödem ist eine seltene, erbliche Erkrankung mit wiederkehrenden, anfallsartigen Schwellungen der Haut und Schleimhäute – etwa an Gesicht, Gliedmaßen, im Bauchraum (mit Schmerzen) oder im Hals. Ursache ist meist ein Mangel oder eine Fehlfunktion des C1-Esterase-Inhibitors. Wichtig: Diese Schwellungen sind nicht allergisch bedingt und sprechen nicht auf Antihistaminika oder Kortison an.",
          en: "Hereditary angioedema is a rare, inherited condition with recurrent, episodic swelling of the skin and mucous membranes – for instance in the face, limbs, abdomen (with pain) or throat. The cause is usually a deficiency or dysfunction of C1 esterase inhibitor. Important: this swelling is not allergy-driven and does not respond to antihistamines or cortisone." } },
        { t: "p", text: {
          de: "Notfall: Eine Schwellung im Hals- oder Kehlkopfbereich kann die Atemwege verlegen und ist lebensbedrohlich – sofort den Notruf 112 rufen und das verordnete Akutmedikament anwenden.",
          en: "Emergency: swelling in the throat or larynx can block the airway and is life-threatening – call the emergency number (112) immediately and use the prescribed acute medicine." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose stützt sich auf die Vorgeschichte, die Familienanamnese und spezielle Bluttests (C1-Esterase-Inhibitor und Komplementfaktor C4). Die Betreuung erfolgt in spezialisierten Zentren.",
          en: "Diagnosis rests on the history, family history and special blood tests (C1 esterase inhibitor and complement factor C4). Care takes place in specialised centres." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Es stehen spezifische Medikamente zur Verfügung: zur Behandlung akuter Attacken (z. B. C1-Inhibitor-Konzentrat oder Bradykinin-gerichtete Wirkstoffe) und zur Vorbeugung häufiger Attacken. Auslöser wie bestimmte Medikamente werden gemieden; ein Notfallplan ist wichtig.",
          en: "Specific medicines are available: to treat acute attacks (e.g. C1 inhibitor concentrate or bradykinin-directed agents) and to prevent frequent attacks. Triggers such as certain medicines are avoided; an emergency plan is important." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Naturheilkundliche Verfahren können diese Erkrankung nicht behandeln. Sinnvoll sind das Erkennen und Meiden individueller Auslöser, Stressbewältigung und eine gute Vorbereitung mit Notfallmedikation. Präparate sind ärztlich abzustimmen.",
          en: "Naturopathic approaches cannot treat this condition. Recognising and avoiding individual triggers, stress management and good preparation with emergency medication are sensible. Supplements should be medically coordinated." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Begleitende TCM-Verfahren können bestenfalls das allgemeine Wohlbefinden und die Stressregulation unterstützen. Sie ersetzen nicht die spezifische Akut- und Vorbeugebehandlung und die Notfallversorgung.",
          en: "Complementary TCM approaches may at best support general wellbeing and stress regulation. They do not replace the specific acute and preventive treatment and emergency care." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung kann sich auf Stressreduktion und geregelte Routinen beschränken. Kräuterpräparate sind ärztlich zu prüfen und ersetzen nicht die verordnete Behandlung.",
          en: "Ayurvedic support may be limited to stress reduction and regular routines. Herbal preparations should be medically reviewed and do not replace the prescribed treatment." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie hat keine ursächliche Rolle. Entspannungs- und Atemübungen können bei der Stressbewältigung helfen, da Stress Attacken begünstigen kann. Bewegung wird an das individuelle Befinden angepasst.",
          en: "Physiotherapy has no causal role. Relaxation and breathing exercises can help with stress management, since stress can promote attacks. Activity is adapted to individual wellbeing." } },
      ],
    },
  },

  {
    slug: "immunodeficiency-recurrent-infections",
    icd10: "D84.9",
    illustration: "generic",
    title: { de: "Immunschwäche mit wiederkehrenden Infekten", en: "Immunodeficiency with Recurrent Infections" },
    summary: {
      de: "Geschwächte Abwehr mit häufigen, schweren oder ungewöhnlichen Infektionen.",
      en: "Weakened defences with frequent, severe or unusual infections.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Eine Immunschwäche bezeichnet eine verminderte Abwehrkraft des Immunsystems. Hinweise sind häufige, schwer verlaufende, ungewöhnlich lange oder durch seltene Erreger verursachte Infektionen, oft an mehreren Organen. Die Ursachen reichen von angeborenen Störungen über erworbene Formen (z. B. durch Erkrankungen oder Medikamente) bis zu vorübergehenden Schwächen.",
          en: "An immunodeficiency refers to a reduced defensive capacity of the immune system. Clues are frequent, severe, unusually long or rare-pathogen infections, often at several sites. Causes range from inherited disorders to acquired forms (e.g. from diseases or medicines) and temporary weaknesses." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Abklärung umfasst eine genaue Infekt- und Familiengeschichte, Blutbild, Antikörperspiegel und je nach Verdacht spezielle Immununtersuchungen. Ziel ist, behandelbare und angeborene Ursachen zu erkennen; die Betreuung erfolgt bei Bedarf immunologisch.",
          en: "Assessment includes a careful infection and family history, blood count, antibody levels and, depending on the suspicion, special immune tests. The aim is to detect treatable and inherited causes; care is provided by an immunologist when needed." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die Behandlung richtet sich nach der Ursache: konsequente und frühzeitige Infektbehandlung, aktueller Impfschutz (nach Beratung, manche Lebendimpfstoffe sind zu meiden), bei Antikörpermangel eine Immunglobulin-Ersatztherapie und gegebenenfalls vorbeugende Maßnahmen.",
          en: "Treatment follows the cause: consistent and early infection treatment, up-to-date vaccination (after advice, some live vaccines are avoided), immunoglobulin replacement therapy for antibody deficiency and preventive measures where appropriate." } },
        { t: "p", text: {
          de: "Wichtig: Hohes Fieber, rasch fortschreitende Infektzeichen, Atemnot oder schweres Krankheitsgefühl erfordern eine rasche ärztliche Beurteilung, im Notfall den Notruf 112.",
          en: "Important: high fever, rapidly worsening signs of infection, breathlessness or a severe sense of illness require prompt medical assessment, and an emergency call (112) in an emergency." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Unterstützend sind ein gesunder Lebensstil, ausgewogene Ernährung, ausreichend Schlaf, Bewegung, Nichtrauchen und konsequente Hygiene. Immunstimulierende Präparate sind ärztlich zu prüfen und dürfen die medizinische Behandlung nicht ersetzen.",
          en: "Supportive measures are a healthy lifestyle, balanced nutrition, adequate sleep, activity, not smoking and consistent hygiene. Immune-stimulating products should be medically reviewed and must not replace medical treatment." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird eine schwache Abwehr häufig einem Mangel des Abwehr-Qi (Wei-Qi) mit Bezug zu Lunge, Milz und Niere zugeordnet. Begleitende Verfahren können das Wohlbefinden fördern, ersetzen aber nicht die ärztliche Abklärung und Behandlung.",
          en: "In TCM weak defences are often assigned to a deficiency of defensive Qi (Wei Qi) related to Lung, Spleen and Kidney. Complementary approaches may support wellbeing but do not replace medical assessment and treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine nährende, gut verdauliche Kost, geregelte Routinen und Stressreduktion zur Stärkung der Widerstandskraft. Kräuterpräparate sind wegen möglicher Wechselwirkungen ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises nourishing, easily digestible food, regular routines and stress reduction to strengthen resilience. Herbal preparations should be medically reviewed because of possible interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Regelmäßige, moderate Bewegung stärkt das allgemeine Wohlbefinden und kann die Immunfunktion unterstützen. Übermäßige, erschöpfende Belastungen werden gemieden; bei akuten Infekten ist Schonung sinnvoll.",
          en: "Regular, moderate activity strengthens general wellbeing and can support immune function. Excessive, exhausting exertion is avoided; during acute infections, rest is sensible." } },
      ],
    },
  },

  {
    slug: "sarcoidosis",
    icd10: "D86.9",
    illustration: "generic",
    title: { de: "Sarkoidose", en: "Sarcoidosis" },
    summary: {
      de: "Entzündliche Erkrankung mit Knötchenbildung, am häufigsten in Lunge und Lymphknoten.",
      en: "An inflammatory disease with nodule formation, most often in the lungs and lymph nodes.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Sarkoidose ist eine entzündliche Erkrankung, bei der sich kleine Knötchen (Granulome) im Gewebe bilden. Am häufigsten sind Lunge und Lymphknoten betroffen, grundsätzlich kann jedes Organ beteiligt sein. Beschwerden reichen von Husten, Luftnot und Müdigkeit über Gelenk- und Hautveränderungen bis zu Beteiligungen von Augen, Herz oder Nervensystem. Viele Verläufe sind mild und bilden sich von selbst zurück.",
          en: "Sarcoidosis is an inflammatory disease in which small nodules (granulomas) form in tissue. The lungs and lymph nodes are most often affected, but in principle any organ can be involved. Symptoms range from cough, breathlessness and fatigue to joint and skin changes and involvement of the eyes, heart or nervous system. Many courses are mild and resolve on their own." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Abklärung kombiniert Bildgebung (Röntgen oder CT der Lunge), Lungenfunktion, Blutuntersuchungen und häufig eine Gewebeprobe. Da mehrere Organe betroffen sein können, werden gezielt Augen, Herz und weitere Organe untersucht.",
          en: "Assessment combines imaging (chest X-ray or CT), lung function tests, blood tests and often a tissue sample. As several organs can be affected, the eyes, heart and further organs are specifically examined." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Milde Formen werden oft nur beobachtet. Bei Beschwerden oder Beteiligung wichtiger Organe kommen entzündungshemmende Medikamente zum Einsatz, allen voran Kortison, bei Bedarf weitere immunmodulierende Mittel. Regelmäßige Verlaufskontrollen sind wichtig.",
          en: "Mild forms are often only observed. With symptoms or involvement of important organs, anti-inflammatory medicines are used, above all cortisone, and further immunomodulating agents when needed. Regular follow-up checks are important." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Unterstützend sind ein gesunder Lebensstil, Rauchverzicht, ausgewogene Ernährung und Stressbewältigung. Vorsicht bei hochdosiertem Vitamin D und Kalzium, da der Kalziumhaushalt bei Sarkoidose gestört sein kann – die Einnahme ist ärztlich abzustimmen.",
          en: "A healthy lifestyle, stopping smoking, a balanced diet and stress management are supportive. Caution with high-dose vitamin D and calcium, as calcium balance can be disturbed in sarcoidosis – their use should be medically coordinated." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM können Beschwerden über Muster wie Schleim-Ansammlung, Hitze oder einen Qi-Mangel gedeutet werden. Begleitende Verfahren können das Wohlbefinden fördern, ersetzen aber nicht die entzündungshemmende Behandlung und die Verlaufskontrollen.",
          en: "In TCM symptoms may be interpreted through patterns such as phlegm accumulation, heat or a Qi deficiency. Complementary approaches may support wellbeing but do not replace anti-inflammatory treatment and follow-up monitoring." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine entzündungsarme, ausgewogene Ernährung, Atemübungen und geregelte Routinen. Kräuterpräparate sind wegen möglicher Wechselwirkungen (u. a. mit Kortison) ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises an anti-inflammatory, balanced diet, breathing exercises and regular routines. Herbal preparations should be medically reviewed because of possible interactions (including with cortisone)." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Bei Lungenbeteiligung können Atemtherapie und ein an die Belastbarkeit angepasstes Ausdauertraining Atemfunktion, Kondition und die oft belastende Müdigkeit verbessern. Das Programm wird an Organbeteiligung und Beschwerden angepasst.",
          en: "With lung involvement, breathing therapy and aerobic training adapted to capacity can improve breathing function, fitness and the often burdensome fatigue. The programme is adapted to organ involvement and symptoms." } },
      ],
    },
  },

  {
    slug: "oncological-follow-up-care",
    icd10: "Z08",
    illustration: "generic",
    title: { de: "Onkologische Nachsorge", en: "Oncological Follow-up Care" },
    summary: {
      de: "Strukturierte Betreuung nach abgeschlossener Krebsbehandlung zur Überwachung und Unterstützung.",
      en: "Structured care after completed cancer treatment for surveillance and support.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die onkologische Nachsorge ist die strukturierte Betreuung nach einer abgeschlossenen Krebsbehandlung. Ihre Ziele sind, ein Wiederauftreten (Rezidiv) oder neue Tumoren früh zu erkennen, Folgen und Nebenwirkungen der Behandlung zu erfassen und zu lindern sowie Betroffene körperlich, seelisch und sozial bei der Rückkehr in den Alltag zu unterstützen.",
          en: "Oncological follow-up care is the structured care after a completed cancer treatment. Its goals are to detect recurrence or new tumours early, to identify and ease consequences and side effects of treatment, and to support people physically, emotionally and socially in returning to everyday life." } },
      ],
      medical: [
        { t: "sub", text: { de: "Struktur & Inhalte", en: "Structure & content" } },
        { t: "p", text: {
          de: "Die Nachsorge folgt einem individuellen, an Tumorart und Behandlung angepassten Plan mit regelmäßigen Terminen, deren Abstände mit der Zeit meist größer werden. Sie umfasst Gespräch und körperliche Untersuchung sowie je nach Situation Labor- und Bildgebungsuntersuchungen. Die Koordination erfolgt zwischen Hausarzt und onkologischer Fachstelle.",
          en: "Follow-up care follows an individual plan adapted to tumour type and treatment, with regular appointments whose intervals usually lengthen over time. It includes discussion and physical examination and, depending on the situation, laboratory and imaging tests. Coordination takes place between the family doctor and the oncology specialist." } },
        { t: "sub", text: { de: "Langzeitfolgen & Warnzeichen", en: "Late effects & warning signs" } },
        { t: "p", text: {
          de: "Wichtig sind das Erkennen und Behandeln von Spätfolgen (z. B. Erschöpfung, Nerven-, Herz- oder Hormonveränderungen), die Vorbeugung, Impfungen und gesunde Lebensweise. Neue oder anhaltende Beschwerden wie ungewollter Gewichtsverlust, anhaltende Schmerzen, neue Knoten oder Blutungen sollten zeitnah ärztlich abgeklärt werden.",
          en: "Recognising and treating late effects (e.g. exhaustion, nerve, heart or hormone changes), prevention, vaccinations and a healthy lifestyle are important. New or persistent symptoms such as unintended weight loss, ongoing pain, new lumps or bleeding should be medically assessed promptly." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Ein gesunder Lebensstil mit ausgewogener Ernährung, Bewegung, Nichtrauchen und maßvollem Alkoholkonsum unterstützt die Erholung und kann das Rückfallrisiko günstig beeinflussen. Nahrungsergänzungen und pflanzliche Mittel sind sorgfältig ärztlich zu prüfen, da Wechselwirkungen mit einer fortgeführten Therapie möglich sind.",
          en: "A healthy lifestyle with balanced nutrition, activity, not smoking and moderate alcohol supports recovery and can favourably influence the risk of recurrence. Supplements and herbal products should be carefully medically reviewed, as interactions with ongoing therapy are possible." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der Nachsorge kann die TCM begleitend zur Linderung von Beschwerden wie Erschöpfung, Schlafstörungen oder Übelkeit eingesetzt werden. Kräuter sind wegen möglicher Wechselwirkungen mit onkologischen Therapien streng ärztlich abzustimmen; die TCM ersetzt weder Nachsorgeuntersuchungen noch eine Behandlung.",
          en: "In follow-up care, TCM may be used as complementary support to ease symptoms such as exhaustion, sleep problems or nausea. Herbs must be strictly medically coordinated because of possible interactions with oncological therapies; TCM replaces neither surveillance checks nor treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung kann über Ernährung, geregelte Routinen, Yoga und Entspannung zur Erholung und Lebensqualität beitragen. Kräuterpräparate sind wegen möglicher Wechselwirkungen ärztlich zu prüfen und ersetzen die strukturierte Nachsorge nicht.",
          en: "Ayurvedic support can contribute to recovery and quality of life through nutrition, regular routines, yoga and relaxation. Herbal preparations should be medically reviewed because of possible interactions and do not replace structured follow-up care." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Bewegung und Physiotherapie sind zentrale Bausteine der Rehabilitation: individuell aufgebautes Ausdauer- und Krafttraining verbessert Kondition, Kraft und Lebensqualität und kann die tumorbedingte Erschöpfung (Fatigue) lindern. Ergänzend helfen etwa Lymphdrainage bei Lymphödem, Beckenbodentraining oder gezielte Übungen nach Operationen; das Programm wird an Belastbarkeit und Vorbehandlung angepasst.",
          en: "Activity and physiotherapy are central components of rehabilitation: individually built-up aerobic and strength training improves fitness, strength and quality of life and can ease cancer-related fatigue. Additionally, measures such as lymphatic drainage for lymphoedema, pelvic-floor training or targeted exercises after surgery help; the programme is adapted to capacity and prior treatment." } },
      ],
    },
  },
]
