import type { Disease } from "@/content/treatments"

/**
 * Conditions for "Metabolism, Endocrinology & Nutrition". Migrated from the
 * practice's own drdosthealth.com pages into bilingual, block-structured form
 * (definition + treatment modalities) with the real inline images. Wording is
 * written freshly; every page is reviewed by Dr. Dost before use.
 *
 * Note: the source "Class I Obesity" page currently shows a mis-templated
 * "Acute Bronchitis (J20.9)" definition heading while its body text is
 * correctly about Class I obesity. The correct obesity content is used here
 * and the ICD code is set to E66.9 pending review.
 */
export const metabolismDiseases: Disease[] = [
  {
    slug: "type-1-diabetes-mellitus-without-complications",
    icd10: "E10.90",
    illustration: "generic",
    title: { de: "Typ-1-Diabetes ohne Komplikationen", en: "Type 1 Diabetes Without Complications" },
    summary: {
      de: "Autoimmunbedingter Insulinmangel, der eine lebenslange Insulintherapie erfordert.",
      en: "An autoimmune insulin deficiency that requires lifelong insulin therapy.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Der Typ-1-Diabetes ist eine Autoimmunerkrankung, bei der das körpereigene Abwehrsystem die insulinproduzierenden Betazellen der Bauchspeicheldrüse zerstört. Dadurch entsteht ein ausgeprägter bis vollständiger Insulinmangel, und der Blutzucker kann ohne zugeführtes Insulin nicht mehr geregelt werden. Die Erkrankung beginnt häufig in Kindheit oder Jugend, kann aber in jedem Alter auftreten.",
          en: "Type 1 diabetes is an autoimmune disease in which the body's own immune system destroys the insulin-producing beta cells of the pancreas. This leads to a marked or complete lack of insulin, and blood glucose can no longer be regulated without supplied insulin. It often begins in childhood or adolescence but can occur at any age." } },
        { t: "p", text: {
          de: "Der Zusatz „ohne Komplikationen“ bedeutet, dass derzeit keine diabetesbedingten Organschäden dokumentiert sind. Typische Beschwerden sind starker Durst, häufiges Wasserlassen, Gewichtsverlust, Müdigkeit und Sehstörungen.",
          en: "The phrase “without complications” means that no diabetes-related organ damage is currently documented. Typical signs are intense thirst, frequent urination, weight loss, fatigue and blurred vision." } },
        { t: "img", src: "diseases/type-1-diabetes-mellitus-without-complications/definition.jpg", alt: { de: "Blutzuckermessung", en: "Blood-glucose measurement" } },
      ],
      medical: [
        { t: "sub", text: { de: "Insulintherapie", en: "Insulin therapy" } },
        { t: "p", text: {
          de: "Die lebenslange Insulinbehandlung ist unverzichtbar. Üblich sind mehrere tägliche Injektionen nach dem Basis-Bolus-Prinzip oder eine kontinuierliche Insulinzufuhr über eine Insulinpumpe. Die Dosis wird an Mahlzeiten, Bewegung, Blutzucker und Tagesverlauf angepasst.",
          en: "Lifelong insulin treatment is essential. This usually means several daily injections following the basal-bolus principle, or continuous delivery through an insulin pump. The dose is matched to meals, activity, blood glucose and the course of the day." } },
        { t: "sub", text: { de: "Glukosemonitoring", en: "Glucose monitoring" } },
        { t: "p", text: {
          de: "Die kontinuierliche Glukosemessung (CGM) oder regelmäßige Messungen aus der Fingerbeere helfen, die Insulindosis zu steuern und Unter- wie Überzuckerungen früh zu erkennen.",
          en: "Continuous glucose monitoring (CGM) or regular fingertip measurements help steer the insulin dose and detect both low and high glucose early." } },
        { t: "sub", text: { de: "Ernährung & Kohlenhydrate", en: "Nutrition & carbohydrates" } },
        { t: "p", text: {
          de: "Betroffene lernen, Kohlenhydrate einzuschätzen, die Insulingabe daran anzupassen, Korrekturdosen zu berechnen und den Blutzucker bei Sport, Krankheit oder besonderen Situationen sicher zu steuern.",
          en: "Patients learn to estimate carbohydrates, adjust insulin accordingly, calculate correction doses and safely manage glucose during sport, illness and special situations." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Ergänzende Maßnahmen", en: "Complementary measures" } },
        { t: "p", text: {
          de: "Eine ausgewogene Ernährung, regelmäßige Bewegung, ausreichend Schlaf, Stressbewältigung und angemessene Flüssigkeitszufuhr unterstützen die allgemeine Gesundheit. Keine naturheilkundliche oder pflanzliche Therapie kann das Insulin beim Typ-1-Diabetes ersetzen.",
          en: "A balanced diet, regular exercise, adequate sleep, stress management and appropriate hydration support general health. No naturopathic or herbal therapy can replace insulin in type 1 diabetes." } },
        { t: "img", src: "diseases/type-1-diabetes-mellitus-without-complications/naturopathic.jpg", alt: { de: "Gesunde Ernährung", en: "Healthy nutrition" } },
        { t: "p", text: {
          de: "Pflanzliche Mittel, die den Blutzucker senken sollen, erfordern besondere Vorsicht, da sie zusammen mit Insulin das Risiko einer Unterzuckerung erhöhen können.",
          en: "Herbal products intended to lower blood glucose require particular caution, as in combination with insulin they can increase the risk of hypoglycaemia." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Beschwerden wie Durst, Trockenheit, Müdigkeit und häufiges Wasserlassen werden in der TCM traditionell dem Bild Xiao Ke („auszehrender Durst“) zugeordnet.",
          en: "Symptoms such as thirst, dryness, fatigue and frequent urination are traditionally described in TCM within the picture of Xiao Ke (“wasting-thirst”)." } },
        { t: "sub", text: { de: "Yin-Mangel mit innerer Hitze", en: "Yin deficiency with internal heat" } },
        { t: "p", text: { de: "Durst, trockener Mund und innere Hitze: Ziel ist, das Yin zu nähren und Hitze zu klären.", en: "Thirst, dry mouth and internal heat: the aim is to nourish Yin and clear heat." } },
        { t: "sub", text: { de: "Qi- und Yin-Mangel", en: "Qi and Yin deficiency" } },
        { t: "p", text: { de: "Müdigkeit, Schwäche und häufiges Wasserlassen deuten traditionell auf einen Qi- und Yin-Mangel hin.", en: "Fatigue, weakness and frequent urination traditionally point to a Qi and Yin deficiency." } },
        { t: "p", text: {
          de: "Akupunktur oder Kräuter können nur begleitend und dort, wo medizinisch vertretbar, eingesetzt werden; die TCM ersetzt niemals die Insulintherapie.",
          en: "Acupuncture or herbs may only be used as supportive care where medically appropriate; TCM never replaces insulin therapy." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Prameha & Madhumeha", en: "Prameha & Madhumeha" } },
        { t: "p", text: {
          de: "In der ayurvedischen Tradition werden diabetesähnliche Beschwerden dem Konzept Prameha bzw. Madhumeha zugeordnet. Ernährung, angepasste Bewegung, Stressbewältigung und ausgewählte traditionelle Maßnahmen können begleitend einfließen.",
          en: "In the Ayurvedic tradition, diabetes-like symptoms are assigned to the concept of Prameha or Madhumeha. Nutrition, adapted activity, stress management and selected traditional measures may be incorporated as complementary approaches." } },
        { t: "p", text: {
          de: "Insulin bleibt beim Typ-1-Diabetes unabhängig von jeder ergänzenden Behandlung lebensnotwendig; pflanzliche Präparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "Insulin remains essential in type 1 diabetes regardless of any complementary treatment; herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Bewegung", en: "Exercise" } },
        { t: "p", text: {
          de: "Regelmäßiges Ausdauer- und Krafttraining verbessert Fitness, Muskelkraft und allgemeine Gesundheit. Rund um das Training müssen Insulindosis und Kohlenhydratzufuhr oft angepasst werden, um Unter- oder Überzuckerungen zu vermeiden.",
          en: "Regular aerobic and resistance exercise improves fitness, muscle strength and overall health. Around training, insulin dose and carbohydrate intake often need adjusting to prevent low or high glucose." } },
        { t: "img", src: "diseases/type-1-diabetes-mellitus-without-complications/physio.jpg", alt: { de: "Bewegung und Gesundheit", en: "Exercise and health" } },
        { t: "p", text: {
          de: "Eine diabetische Ketoazidose ist ein Notfall: Erbrechen, Bauchschmerzen, schnelle Atmung, starke Austrocknung oder Verwirrtheit bei hohem Blutzucker erfordern sofortige ärztliche Hilfe.",
          en: "Diabetic ketoacidosis is an emergency: vomiting, abdominal pain, rapid breathing, marked dehydration or confusion with high glucose require immediate medical attention." } },
      ],
    },
  },

  {
    slug: "type-2-diabetes-mellitus-without-complications",
    icd10: "E11.90",
    illustration: "generic",
    title: { de: "Typ-2-Diabetes ohne Komplikationen", en: "Type 2 Diabetes Without Complications" },
    summary: {
      de: "Chronisch erhöhter Blutzucker durch Insulinresistenz, noch ohne Folgeschäden.",
      en: "Chronically raised blood glucose from insulin resistance, without organ damage yet.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Der Typ-2-Diabetes ist eine chronische Stoffwechselerkrankung mit dauerhaft erhöhtem Blutzucker. Ursache ist vor allem eine Insulinresistenz, verbunden mit einer allmählich nachlassenden Insulinausschüttung der Bauchspeicheldrüse. Der Zusatz „ohne Komplikationen“ bedeutet, dass derzeit keine diabetesbedingten Organschäden festgestellt sind.",
          en: "Type 2 diabetes is a chronic metabolic disorder with persistently raised blood glucose. It is caused mainly by insulin resistance together with a gradually declining insulin output from the pancreas. The phrase “without complications” means that no diabetes-related organ damage is currently documented." } },
        { t: "p", text: {
          de: "Anfangs bestehen oft kaum Beschwerden. Möglich sind vermehrter Durst, häufiges Wasserlassen, Müdigkeit, verschwommenes Sehen, wiederkehrende Infekte und eine verzögerte Wundheilung.",
          en: "At first there are often few symptoms. Possible signs are increased thirst, frequent urination, fatigue, blurred vision, recurrent infections and delayed wound healing." } },
        { t: "img", src: "diseases/type-2-diabetes-mellitus-without-complications/definition.jpg", alt: { de: "Blutzuckerkontrolle", en: "Blood-glucose check" } },
      ],
      medical: [
        { t: "sub", text: { de: "Lebensstil & Ernährung", en: "Lifestyle & nutrition" } },
        { t: "p", text: {
          de: "Eine ausgewogene Ernährung, regelmäßige Bewegung, Gewichtsmanagement, Rauchverzicht, ausreichender Schlaf und die Senkung von Herz-Kreislauf-Risiken bilden die Grundlage der Behandlung.",
          en: "A balanced diet, regular activity, weight management, giving up smoking, adequate sleep and reducing cardiovascular risk form the foundation of treatment." } },
        { t: "sub", text: { de: "Blutzuckersenkende Medikamente", en: "Glucose-lowering medication" } },
        { t: "p", text: {
          de: "Metformin wird häufig als Basismedikament eingesetzt. Je nach HbA1c, Körpergewicht, Herz- und Nierenstatus sowie individuellen Zielen kommen SGLT2-Hemmer, GLP-1-Rezeptoragonisten, DPP-4-Hemmer, Sulfonylharnstoffe oder Insulin infrage.",
          en: "Metformin is commonly used as the base medication. Depending on HbA1c, body weight, cardiac and kidney status and individual goals, SGLT2 inhibitors, GLP-1 receptor agonists, DPP-4 inhibitors, sulfonylureas or insulin may be considered." } },
        { t: "sub", text: { de: "Kontrolluntersuchungen", en: "Monitoring" } },
        { t: "p", text: {
          de: "Regelmäßig überprüft werden unter anderem HbA1c, Blutzucker, Blutdruck, Blutfette, Nierenfunktion, Gewicht, die Füße und die Netzhaut.",
          en: "Regular checks include HbA1c, blood glucose, blood pressure, blood lipids, kidney function, weight, the feet and the retina, among others." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Ernährung & Phytotherapie", en: "Nutrition & phytotherapy" } },
        { t: "ul", items: {
          de: ["Viel Gemüse, Hülsenfrüchte, Vollkorn, Nüsse, Samen und Ballaststoffe unterstützen die Blutzuckerregulation.","Lösliche Ballaststoffe dämpfen den Blutzuckeranstieg nach dem Essen.","Raffinierte Kohlenhydrate und zuckerhaltige Getränke werden begrenzt.","Pflanzliche Präparate nur mit Vorsicht, da Wechselwirkungen mit Diabetesmedikamenten möglich sind."],
          en: ["Plenty of vegetables, legumes, whole grains, nuts, seeds and fibre support glucose control.","Soluble fibre moderates the rise in glucose after meals.","Refined carbohydrates and sugary drinks are limited.","Herbal preparations only with caution, as interactions with diabetes medication are possible."] } },
        { t: "sub", text: { de: "Körperliche Maßnahmen", en: "Physical measures" } },
        { t: "p", text: {
          de: "Regelmäßige Ausdauerbewegung verbessert die Insulinempfindlichkeit, Krafttraining unterstützt Muskelmasse und Zuckerverwertung; eine Gewichtsreduktion kann den Stoffwechsel deutlich verbessern.",
          en: "Regular aerobic activity improves insulin sensitivity, resistance training supports muscle mass and glucose utilisation, and weight reduction can substantially improve the metabolism." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden diabetesähnliche Bilder traditionell unter Xiao Ke („auszehrender Durst“) beschrieben – der moderne Typ-2-Diabetes ist damit jedoch nicht gleichzusetzen.",
          en: "In TCM, diabetes-like pictures are traditionally described under Xiao Ke (“wasting-thirst”) – though modern type 2 diabetes is not identical to it." } },
        { t: "sub", text: { de: "Yin-Mangel mit Hitze", en: "Yin deficiency with heat" } },
        { t: "p", text: { de: "Starker Durst, trockener Mund, Hunger und häufiges Wasserlassen: das Yin nähren und Hitze klären.", en: "Strong thirst, dry mouth, hunger and frequent urination: nourish Yin and clear heat." } },
        { t: "sub", text: { de: "Qi- und Yin-Mangel", en: "Qi and Yin deficiency" } },
        { t: "p", text: { de: "Müdigkeit, Schwäche, Durst und trockener Mund: Qi und Yin stützen.", en: "Fatigue, weakness, thirst and dry mouth: support Qi and Yin." } },
        { t: "sub", text: { de: "Milz-Qi-Mangel mit Feuchtigkeit", en: "Spleen Qi deficiency with dampness" } },
        { t: "p", text: {
          de: "Müdigkeit, Schweregefühl, Verdauungsschwäche und Übergewicht: das Milz-Qi stärken und Feuchtigkeit auflösen. Die TCM bleibt begleitend und ersetzt weder Blutzuckerkontrolle noch verordnete Behandlung.",
          en: "Fatigue, heaviness, weak digestion and excess weight: strengthen Spleen Qi and resolve dampness. TCM remains complementary and replaces neither glucose monitoring nor prescribed treatment." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Prameha & Madhumeha", en: "Prameha & Madhumeha" } },
        { t: "p", text: {
          de: "Stoffwechselstörungen wie Diabetes werden traditionell dem Konzept Prameha zugeordnet, wobei Madhumeha eine klassische Ausprägung darstellt. Im Vordergrund stehen Ernährungs- und Lebensstilanpassung sowie regelmäßige Bewegung; ausgewählte Kräuter werden ärztlich auf Wechselwirkungen geprüft.",
          en: "Metabolic disorders such as diabetes are traditionally assigned to the concept of Prameha, with Madhumeha a classical presentation. The focus is diet and lifestyle adjustment and regular activity; selected herbs are medically reviewed for interactions." } },
        { t: "img", src: "diseases/type-2-diabetes-mellitus-without-complications/ayurvedic.jpg", alt: { de: "Ayurvedische Ernährung", en: "Ayurvedic nutrition" } },
        { t: "sub", text: { de: "Ernährung", en: "Nutrition" } },
        { t: "p", text: {
          de: "Betont werden Gemüse, Hülsenfrüchte, ballaststoffreiche und wenig verarbeitete Lebensmittel in angemessenen Portionen, während übermäßige raffinierte Kohlenhydrate, Süßes und stark verarbeitete Speisen begrenzt werden.",
          en: "The emphasis is on vegetables, legumes, fibre-rich and minimally processed foods in appropriate portions, while excessive refined carbohydrates, sweets and highly processed foods are limited." } },
      ],
      physio: [
        { t: "sub", text: { de: "Bewegung", en: "Exercise" } },
        { t: "p", text: {
          de: "Ausdauerbewegung wie Gehen, Radfahren oder Schwimmen verbessert Fitness und Insulinempfindlichkeit; Krafttraining erhöht Muskelmasse und Zuckerverwertung. Mobilitäts- und Gleichgewichtsübungen erhalten die Funktion, besonders bei älteren Menschen. Intensität und Umfang werden individuell angepasst.",
          en: "Aerobic activity such as walking, cycling or swimming improves fitness and insulin sensitivity; resistance training increases muscle mass and glucose utilisation. Mobility and balance work maintains function, especially in older people. Intensity and volume are individualised." } },
      ],
    },
  },

  {
    slug: "type-2-diabetes-mellitus-with-complications",
    icd10: "E11.8",
    illustration: "generic",
    title: { de: "Typ-2-Diabetes mit Komplikationen", en: "Type 2 Diabetes With Complications" },
    summary: {
      de: "Typ-2-Diabetes mit bereits festgestellten Folgeschäden an Organen oder Gefäßen.",
      en: "Type 2 diabetes with documented complications affecting organs or vessels.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Der Typ-2-Diabetes ist eine chronische Stoffwechselerkrankung mit Insulinresistenz und nachlassender Insulinausschüttung, wodurch der Blutzucker dauerhaft erhöht ist. Mit der Zeit kann ein dauerhaft hoher Blutzucker Blutgefäße, Nerven, Nieren, Augen und weitere Organe schädigen.",
          en: "Type 2 diabetes is a chronic metabolic disorder with insulin resistance and declining insulin output, so blood glucose stays persistently raised. Over time, persistently high glucose can damage blood vessels, nerves, kidneys, eyes and other organs." } },
        { t: "p", text: {
          de: "Der Zusatz „mit Komplikationen“ bedeutet, dass bereits eine oder mehrere Folgeerkrankungen festgestellt wurden – etwa eine diabetische Nierenerkrankung, Neuropathie, Retinopathie, Herz-Kreislauf-Erkrankung oder periphere Durchblutungsstörung.",
          en: "The phrase “with complications” means one or more associated conditions have already been identified – for example diabetic kidney disease, neuropathy, retinopathy, cardiovascular disease or peripheral vascular disease." } },
        { t: "img", src: "diseases/type-2-diabetes-mellitus-with-complications/definition.jpg", alt: { de: "Diabetes-Kontrolle", en: "Diabetes review" } },
      ],
      medical: [
        { t: "sub", text: { de: "Blutzuckereinstellung", en: "Glucose management" } },
        { t: "p", text: {
          de: "Die Behandlung richtet sich individuell nach HbA1c, bestehenden Komplikationen, Herz- und Nierenstatus, Gewicht und Alter. Metformin, SGLT2-Hemmer, GLP-1-Rezeptoragonisten, weitere blutzuckersenkende Mittel oder Insulin werden je nach Situation eingesetzt.",
          en: "Treatment is individualised according to HbA1c, existing complications, cardiac and kidney status, weight and age. Metformin, SGLT2 inhibitors, GLP-1 receptor agonists, other glucose-lowering medicines or insulin are used as appropriate." } },
        { t: "sub", text: { de: "Behandlung der Komplikationen", en: "Managing complications" } },
        { t: "p", text: {
          de: "Die Therapie hängt von der jeweiligen Folgeerkrankung ab: nierenschützende Behandlung, kardiovaskuläre Risikosenkung, Behandlung neuropathischer Schmerzen, augenärztliche Therapie, Fuß- und Wundversorgung oder Gefäßeingriffe.",
          en: "Care depends on the specific complication: kidney-protective treatment, cardiovascular risk reduction, management of neuropathic pain, ophthalmological therapy, foot and wound care, or vascular procedures." } },
        { t: "sub", text: { de: "Risikofaktoren", en: "Risk factors" } },
        { t: "p", text: {
          de: "Blutdruck, Cholesterin, Rauchen, Gewicht, Bewegung und Ernährung werden neben der Blutzuckereinstellung konsequent mitbehandelt.",
          en: "Blood pressure, cholesterol, smoking, weight, activity and nutrition are addressed consistently alongside glucose control." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Ergänzende Maßnahmen", en: "Complementary measures" } },
        { t: "ul", items: {
          de: ["Ballaststoffreiche, wenig verarbeitete Kost kann die Blutzuckerregulation unterstützen.","Regelmäßige Bewegung verbessert die Insulinempfindlichkeit, sofern medizinisch vertretbar.","Eine Gewichtsreduktion kann die Stoffwechselwerte bei Übergewicht verbessern.","Pflanzliche Präparate mit der behandelnden Praxis absprechen, da Wechselwirkungen mit blutzuckersenkenden, blutverdünnenden oder blutdrucksenkenden Mitteln möglich sind."],
          en: ["Fibre-rich, minimally processed food can support glucose control.","Regular activity improves insulin sensitivity where medically appropriate.","Weight reduction can improve metabolic values in people with overweight.","Discuss herbal preparations with the treating practice, as interactions with glucose-lowering, blood-thinning or blood-pressure medicines are possible."] } },
        { t: "p", text: {
          de: "Ergänzende Verfahren ersetzen nicht die Behandlung bereits eingetretener diabetischer Komplikationen.",
          en: "Complementary approaches do not replace treatment of established diabetic complications." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Diabetesähnliche Bilder werden traditionell mit Xiao Ke in Verbindung gebracht und je nach Erscheinungsbild weiter unterschieden.",
          en: "Diabetes-like pictures are traditionally associated with Xiao Ke and further differentiated by presentation." } },
        { t: "sub", text: { de: "Qi- und Yin-Mangel", en: "Qi and Yin deficiency" } },
        { t: "p", text: { de: "Müdigkeit, Durst, trockener Mund, Schwäche und häufiges Wasserlassen werden traditionell diesem Muster zugeordnet.", en: "Fatigue, thirst, dry mouth, weakness and frequent urination are traditionally assigned to this pattern." } },
        { t: "sub", text: { de: "Blut-Stase", en: "Blood stasis" } },
        { t: "p", text: { de: "Eine länger bestehende Erkrankung mit Durchblutungssymptomen kann traditionell als Blut-Stase verstanden werden.", en: "A long-standing condition with circulatory symptoms may traditionally be understood as blood stasis." } },
        { t: "img", src: "diseases/type-2-diabetes-mellitus-with-complications/tcm.jpg", alt: { de: "TCM-Kräutertherapie", en: "TCM herbal therapy" } },
        { t: "p", text: {
          de: "Kräutertherapie und Akupunktur werden von qualifizierten Behandelnden individuell abgestimmt und nur begleitend eingesetzt.",
          en: "Herbal therapy and acupuncture are individualised by qualified practitioners and used only as complementary care." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Prameha & Madhumeha", en: "Prameha & Madhumeha" } },
        { t: "p", text: {
          de: "Stoffwechselstörungen werden traditionell im Rahmen von Prameha und Madhumeha besprochen. Betont werden individuelle Ernährung, Bewegung, Gewichtsmanagement und ausgewählte Kräuterpräparate; jede Kräutertherapie ist wegen möglicher Wechselwirkungen mit Diabetesmedikamenten ärztlich zu prüfen.",
          en: "Metabolic disorders are traditionally discussed within Prameha and Madhumeha. The emphasis is on individualised nutrition, activity, weight management and selected herbal preparations; any herbal therapy should be medically reviewed because of possible interactions with diabetes medication." } },
      ],
      physio: [
        { t: "sub", text: { de: "Angepasste Bewegung", en: "Adapted exercise" } },
        { t: "p", text: {
          de: "Das Bewegungsprogramm wird an die Komplikationen und die Belastbarkeit angepasst. Möglich sind Ausdauer, Krafttraining, Gleichgewichts- und Gangschulung sowie Mobilitätsarbeit. Bei Neuropathie, Fußproblemen, Herz-Kreislauf-Erkrankung oder ausgeprägter Retinopathie sind besondere Anpassungen erforderlich.",
          en: "The exercise programme is adapted to the complications and to physical capacity. Options include aerobic work, resistance training, balance and gait training and mobility work. With neuropathy, foot problems, cardiovascular disease or marked retinopathy, specific modifications are needed." } },
        { t: "img", src: "diseases/type-2-diabetes-mellitus-with-complications/physio.jpg", alt: { de: "Angepasste Bewegung", en: "Adapted movement" } },
        { t: "p", text: {
          de: "Neue Wunden, eine Sehverschlechterung, Brustschmerz, schwere Unterzuckerung oder rasch schlechtere Nierenwerte erfordern eine umgehende ärztliche Abklärung.",
          en: "New wounds, deteriorating vision, chest pain, severe hypoglycaemia or rapidly worsening kidney values require prompt medical assessment." } },
      ],
    },
  },

  {
    slug: "unspecified-diabetes-mellitus",
    icd10: "E14.9",
    illustration: "generic",
    title: { de: "Nicht näher bezeichneter Diabetes mellitus", en: "Unspecified Diabetes Mellitus" },
    summary: {
      de: "Erhöhter Blutzucker, dessen genaue Diabetesform noch nicht geklärt ist.",
      en: "Raised blood glucose whose precise diabetes type is not yet established.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Beim nicht näher bezeichneten Diabetes mellitus besteht ein dauerhaft erhöhter Blutzucker, ohne dass die genaue Form bereits ausreichend geklärt ist. Eine weitere Abklärung ist wichtig, da sich die Behandlung zwischen Typ 1, Typ 2, sekundären, medikamentös bedingten, monogenen und anderen Formen deutlich unterscheiden kann.",
          en: "Unspecified diabetes mellitus means blood glucose is persistently raised while the precise form has not yet been adequately established. Further assessment matters, because treatment can differ substantially between type 1, type 2, secondary, medication-induced, monogenic and other forms." } },
        { t: "img", src: "diseases/unspecified-diabetes-mellitus/definition.jpg", alt: { de: "Blutzuckermessung", en: "Blood-glucose measurement" } },
      ],
      medical: [
        { t: "sub", text: { de: "Erste Behandlung & Abklärung", en: "Initial treatment & work-up" } },
        { t: "p", text: {
          de: "Zunächst wird der erhöhte Blutzucker kontrolliert, während die zugrunde liegende Diabetesform bestimmt wird. Je nach Bild kommen Ernährungsumstellung, Bewegung, orale oder injizierbare blutzuckersenkende Medikamente oder Insulin infrage.",
          en: "First, the raised glucose is controlled while the underlying type of diabetes is determined. Depending on the picture, this may involve dietary change, activity, oral or injectable glucose-lowering medicines, or insulin." } },
        { t: "p", text: {
          de: "Laboruntersuchungen und die Krankengeschichte können nötig sein, um eine genauere Diagnose zu stellen.",
          en: "Laboratory tests and the medical history may be needed to reach a more specific diagnosis." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Lebensstil", en: "Lifestyle" } },
        { t: "p", text: {
          de: "Eine ausgewogene Ernährung, regelmäßige Bewegung, ein angemessenes Gewicht, ausreichend Flüssigkeit und guter Schlaf können die Stoffwechselgesundheit unterstützen. Pflanzliche blutzuckersenkende Produkte sollten nicht ohne ärztliche Abklärung begonnen werden, da Diabetesform und Medikationsbedarf noch unklar sein können.",
          en: "A balanced diet, regular activity, an appropriate weight, adequate fluids and good sleep can support metabolic health. Herbal glucose-lowering products should not be started without medical assessment, as the type of diabetes and the medication needed may still be uncertain." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Die TCM-Behandlung richtet sich traditionell nach dem Symptommuster und nicht nach der modernen biomedizinischen Einteilung des Diabetes.",
          en: "TCM treatment is traditionally guided by the symptom pattern rather than the modern biomedical classification of diabetes." } },
        { t: "sub", text: { de: "Muster nach individueller Diagnose", en: "Patterns per individual assessment" } },
        { t: "p", text: {
          de: "Nach individueller Untersuchung können Muster wie Yin-Mangel, Qi-Mangel, Feuchtigkeit, Hitze oder Kombinationen davon betrachtet werden.",
          en: "After individual assessment, patterns such as Yin deficiency, Qi deficiency, dampness, heat or combinations of these may be considered." } },
        { t: "img", src: "diseases/unspecified-diabetes-mellitus/tcm.jpg", alt: { de: "TCM-Kräutertherapie", en: "TCM herbal therapy" } },
        { t: "p", text: {
          de: "Die TCM bleibt eine Ergänzung zur medizinischen Diagnose und zur Blutzuckereinstellung.",
          en: "TCM remains complementary to the medical diagnosis and to glucose management." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Prameha-Rahmen", en: "Prameha framework" } },
        { t: "p", text: {
          de: "Die ayurvedische Beurteilung kann diabetesähnliche Stoffwechselbilder im Rahmen von Prameha betrachten. Ernährungsanpassung, Bewegung und individuelle traditionelle Maßnahmen können die medizinische Einordnung und Behandlung ergänzen – sie dürfen sie jedoch nicht verzögern.",
          en: "Ayurvedic assessment may view diabetes-like metabolic pictures within the Prameha framework. Dietary change, activity and individualised traditional measures may complement the medical classification and treatment – but must not delay them." } },
      ],
      physio: [
        { t: "sub", text: { de: "Bewegung", en: "Exercise" } },
        { t: "p", text: {
          de: "Regelmäßiges Ausdauer- und Krafttraining kann die Stoffwechselgesundheit und die Insulinempfindlichkeit verbessern, wo es medizinisch vertretbar ist. Die Empfehlungen bleiben individuell, bis Diabetesform, Blutzuckerstabilität und Behandlungsschema geklärt sind.",
          en: "Regular aerobic and resistance exercise can improve metabolic health and insulin sensitivity where medically appropriate. Recommendations stay individualised until the type of diabetes, glucose stability and treatment regimen are established." } },
        { t: "p", text: {
          de: "Starke Überzuckerung, Ketose, Austrocknung, eine getrübte Bewusstseinslage oder ein unerklärter Gewichtsverlust erfordern eine sofortige ärztliche Abklärung.",
          en: "Severe hyperglycaemia, ketosis, dehydration, altered consciousness or unexplained weight loss require urgent medical assessment." } },
      ],
    },
  },

  {
    slug: "class-i-obesity",
    icd10: "E66.9",
    illustration: "generic",
    title: { de: "Adipositas Grad I", en: "Class I Obesity" },
    summary: {
      de: "Adipositas mit einem BMI von 30,0–34,9 kg/m², beurteilt im Gesamtbild.",
      en: "Obesity with a BMI of 30.0–34.9 kg/m², assessed in the overall picture.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Adipositas Grad I bezeichnet ein Übergewicht mit einem Body-Mass-Index (BMI) von 30,0–34,9 kg/m² bei Erwachsenen. Der BMI ist ein nützliches Screening-Maß, sollte aber zusammen mit Taillenumfang, Körperzusammensetzung, Stoffwechselgesundheit, Herkunft, Alter und Begleiterkrankungen beurteilt werden.",
          en: "Class I obesity describes excess weight with a body mass index (BMI) of 30.0–34.9 kg/m² in adults. BMI is a useful screening measure but should be interpreted together with waist circumference, body composition, metabolic health, ethnicity, age and associated conditions." } },
      ],
      medical: [
        { t: "sub", text: { de: "Lebensstil & Verhalten", en: "Lifestyle & behaviour" } },
        { t: "p", text: {
          de: "Die Behandlung beginnt meist mit einem individuellen Programm aus kalorienangepasster, nährstoffreicher Ernährung, regelmäßiger Bewegung, ausreichend Schlaf und Verhaltensstrategien. Betont wird eine nachhaltige statt einer raschen Gewichtsabnahme.",
          en: "Treatment usually begins with an individual programme of calorie-appropriate, nutritious eating, regular activity, adequate sleep and behavioural strategies. The emphasis is on sustainable rather than rapid weight loss." } },
        { t: "img", src: "diseases/class-i-obesity/medical.jpg", alt: { de: "Gewichtsmanagement", en: "Weight management" } },
        { t: "sub", text: { de: "Medizinische Abklärung", en: "Medical assessment" } },
        { t: "p", text: {
          de: "Die Untersuchung umfasst unter anderem BMI, Taillenumfang, Blutdruck, Glukose/HbA1c, Blutfette, Leberwerte, die Medikation und die Suche nach adipositasbedingten Begleiterkrankungen.",
          en: "Assessment includes BMI, waist circumference, blood pressure, glucose/HbA1c, blood lipids, liver values, medication and screening for obesity-related conditions, among others." } },
        { t: "sub", text: { de: "Medikamente & Chirurgie", en: "Medication & surgery" } },
        { t: "p", text: {
          de: "Anti-Adipositas-Medikamente können erwogen werden, wenn eine Lebensstiländerung allein nicht ausreicht oder gesundheitliche Risiken bestehen. Eine metabolische bzw. bariatrische Operation ist in der Regel nicht bei unkomplizierter Adipositas Grad I vorgesehen.",
          en: "Anti-obesity medication may be considered when lifestyle change alone is not sufficient or obesity-related risks are present. Metabolic or bariatric surgery is generally not indicated for uncomplicated Class I obesity." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Ernährung & Lebensstil", en: "Nutrition & lifestyle" } },
        { t: "ul", items: {
          de: ["Eine ballaststoffreiche Kost mit Gemüse, Hülsenfrüchten, Vollkorn und wenig verarbeiteten Lebensmitteln unterstützt Sättigung und Stoffwechsel.","Ausreichend Flüssigkeit und regelmäßige Mahlzeiten helfen bei der Appetitregulation.","Guter Schlaf und Stressreduktion fördern ein gesundes Gewichtsverhalten.","Pflanzliche oder diätetische Abnehmprodukte nur mit Vorsicht, da die Wirksamkeit variiert und Wechselwirkungen möglich sind."],
          en: ["A fibre-rich diet with vegetables, legumes, whole grains and minimally processed foods supports satiety and metabolism.","Adequate fluids and regular meals help with appetite regulation.","Good sleep and stress reduction support healthy weight behaviours.","Herbal or dietary weight-loss products only with caution, as effectiveness varies and interactions are possible."] } },
        { t: "img", src: "diseases/class-i-obesity/naturopathic.jpg", alt: { de: "Naturheilkundliche Begleitung", en: "Naturopathic support" } },
        { t: "p", text: {
          de: "Ergänzende Verfahren ersetzen nicht die evidenzbasierte Adipositasbehandlung oder die medizinische Abklärung.",
          en: "Complementary approaches do not replace evidence-based obesity treatment or medical assessment." } },
      ],
      tcm: [
        { t: "sub", text: { de: "Milz-Qi-Mangel mit Feuchtigkeit", en: "Spleen Qi deficiency with dampness" } },
        { t: "p", text: { de: "Müdigkeit, Schweregefühl, Blähungen, weicher Stuhl und Neigung zur Gewichtszunahme werden traditionell diesem Muster zugeordnet.", en: "Fatigue, heaviness, bloating, loose stools and a tendency to gain weight are traditionally assigned to this pattern." } },
        { t: "sub", text: { de: "Schleim-Feuchtigkeit", en: "Phlegm-Dampness" } },
        { t: "p", text: { de: "Ausgeprägtes Schweregefühl, Trägheit und deutliches Übergewicht werden als Zeichen von Schleim-Feuchtigkeit betrachtet.", en: "Marked heaviness, sluggishness and pronounced excess weight are seen as signs of phlegm-dampness." } },
        { t: "sub", text: { de: "Leber-Qi-Stagnation", en: "Liver Qi stagnation" } },
        { t: "p", text: { de: "Stressbedingtes Essen, emotionale Anspannung und Verdauungsbeschwerden können diesem Muster zugeordnet werden. Kräuter und Akupunktur werden individuell und begleitend eingesetzt.", en: "Stress-related eating, emotional tension and digestive complaints may be assigned to this pattern. Herbs and acupuncture are used individually and as complementary care." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Pathogenese", en: "Pathogenesis" } },
        { t: "p", text: {
          de: "Übermäßiges Körpergewicht wird traditionell mit Medoroga/Sthaulya beschrieben und häufig als Kapha-Vorherrschaft mit gestörter Stoffwechselkraft (Agni) und einem gestörten Fettgewebsstoffwechsel (Meda Dhatu) interpretiert.",
          en: "Excess body weight is traditionally described as Medoroga/Sthaulya and often interpreted as a Kapha predominance with impaired metabolic power (Agni) and disturbed fat-tissue metabolism (Meda Dhatu)." } },
        { t: "sub", text: { de: "Ansätze & Ernährung", en: "Approaches & nutrition" } },
        { t: "p", text: {
          de: "Betont werden individuelle Ernährung, regelmäßige Bewegung, geregelte Tagesroutinen und Verhaltensänderung. Gemüse, Hülsenfrüchte und ballaststoffreiche Speisen in angemessenen Portionen stehen im Vordergrund; Süßes, raffinierte Kohlenhydrate und stark verarbeitete, energiedichte Speisen werden begrenzt. Kräuter werden ärztlich auf Wechselwirkungen geprüft.",
          en: "The emphasis is on individualised nutrition, regular activity, orderly daily routines and behaviour change. Vegetables, legumes and fibre-rich foods in appropriate portions come first; sweets, refined carbohydrates and highly processed, energy-dense foods are limited. Herbs are medically reviewed for interactions." } },
      ],
      physio: [
        { t: "sub", text: { de: "Bewegung", en: "Exercise" } },
        { t: "p", text: {
          de: "Regelmäßiges Ausdauertraining in Kombination mit Krafttraining verbessert Fitness, Kraft, Beweglichkeit und Stoffwechselgesundheit und unterstützt das langfristige Gewichtsmanagement. Intensität und Steigerung richten sich nach Fitness, orthopädischen Grenzen und Herz-Kreislauf-Risiko; mehr Alltagsbewegung und weniger Sitzzeit sind ebenso wichtig.",
          en: "Regular aerobic training combined with resistance work improves fitness, strength, mobility and metabolic health and supports long-term weight management. Intensity and progression follow fitness, musculoskeletal limits and cardiovascular risk; more everyday movement and less sitting time matter just as much." } },
        { t: "img", src: "diseases/class-i-obesity/physio.jpg", alt: { de: "Bewegung & Kraft", en: "Movement & strength" } },
      ],
    },
  },

  {
    slug: "obesity-due-to-excess-calories",
    icd10: "E66.0",
    illustration: "generic",
    title: { de: "Adipositas durch übermäßige Kalorienzufuhr", en: "Obesity Due to Excess Calories" },
    summary: {
      de: "Fettansammlung durch ein anhaltendes Ungleichgewicht von Energieaufnahme und -verbrauch.",
      en: "Fat accumulation from a sustained imbalance of energy intake and expenditure.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Adipositas durch übermäßige Kalorienzufuhr ist eine chronische, vielschichtige Erkrankung mit übermäßiger Fettansammlung. Sie entsteht durch ein anhaltendes Ungleichgewicht zwischen Energieaufnahme und -verbrauch und wird durch biologische, umweltbedingte, verhaltensbezogene, soziale und genetische Faktoren beeinflusst.",
          en: "Obesity due to excess calories is a chronic, multifactorial condition with excessive fat accumulation. It arises from a sustained imbalance between energy intake and expenditure and is influenced by biological, environmental, behavioural, social and genetic factors." } },
        { t: "p", text: {
          de: "Adipositas erhöht das Risiko für Typ-2-Diabetes, Bluthochdruck, Herz-Kreislauf-Erkrankungen, Fettleber, Schlafapnoe, Arthrose und weitere Erkrankungen.",
          en: "Obesity increases the risk of type 2 diabetes, high blood pressure, cardiovascular disease, fatty liver, sleep apnoea, osteoarthritis and other conditions." } },
        { t: "img", src: "diseases/obesity-due-to-excess-calories/definition.jpg", alt: { de: "Ausgewogene Ernährung", en: "Balanced nutrition" } },
      ],
      medical: [
        { t: "sub", text: { de: "Ernährung & Verhalten", en: "Nutrition & behaviour" } },
        { t: "p", text: {
          de: "Die Behandlung umfasst meist eine individuelle, kaloriengerechte Ernährungsstrategie, mehr Bewegung, Verhaltensunterstützung, die Optimierung des Schlafs und die Behandlung beitragender medizinischer Faktoren.",
          en: "Treatment usually includes an individual, calorie-appropriate dietary strategy, more activity, behavioural support, sleep optimisation and management of contributing medical factors." } },
        { t: "sub", text: { de: "Medikamente & metabolische Chirurgie", en: "Medication & metabolic surgery" } },
        { t: "p", text: {
          de: "Evidenzbasierte Anti-Adipositas-Medikamente können für geeignete Patientinnen und Patienten nach ärztlicher Abklärung infrage kommen. Bei ausgeprägter Adipositas oder relevanten Folgeerkrankungen kann eine metabolische Operation erwogen werden.",
          en: "Evidence-based anti-obesity medication may be considered for eligible patients after medical assessment. For severe obesity or significant obesity-related disease, metabolic surgery may be considered." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Ernährung & Lebensstil", en: "Nutrition & lifestyle" } },
        { t: "p", text: {
          de: "Vollwertige, wenig verarbeitete Lebensmittel mit ausreichend Eiweiß, Gemüse, Obst, Hülsenfrüchten und Ballaststoffen verbessern Sättigung und Nährstoffqualität. Regelmäßige Bewegung, gleichmäßiger Schlaf, Stressmanagement und strukturierte Mahlzeiten unterstützen ein langfristiges Gewichtsmanagement.",
          en: "Whole, minimally processed foods with enough protein, vegetables, fruit, legumes and fibre improve satiety and nutritional quality. Regular activity, consistent sleep, stress management and structured meals support long-term weight management." } },
        { t: "p", text: {
          de: "Unregulierte Abnehmprodukte sollten gemieden werden, da manche unsichere oder nicht deklarierte Substanzen enthalten können.",
          en: "Unregulated weight-loss products should be avoided, as some may contain unsafe or undeclared substances." } },
      ],
      tcm: [
        { t: "sub", text: { de: "Muster-Differenzierung", en: "Pattern differentiation" } },
        { t: "p", text: {
          de: "Übergewicht wird in der TCM traditionell über Muster wie Milz-Qi-Mangel mit Feuchtigkeit, Schleim-Feuchtigkeit oder Feuchte-Hitze gedeutet.",
          en: "Excess weight is traditionally interpreted in TCM through patterns such as Spleen Qi deficiency with dampness, phlegm-dampness or damp-heat." } },
        { t: "p", text: {
          de: "Akupunktur, Ernährungsmaßnahmen und eine individuell abgestimmte Kräutertherapie können begleitend eingesetzt werden.",
          en: "Acupuncture, dietary measures and individually tailored herbal therapy may be used as complementary approaches." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Kapha & Stoffwechsel", en: "Kapha & metabolism" } },
        { t: "p", text: {
          de: "Ayurveda bringt übermäßiges Körpergewicht traditionell mit Störungen von Kapha und der Stoffwechselfunktion in Verbindung. Betont werden individuelle Ernährung, körperliche Aktivität, geregelte Tagesabläufe und Verhaltensänderung.",
          en: "Ayurveda traditionally links excess body weight with disturbances of Kapha and metabolic function. The emphasis is on individualised nutrition, physical activity, orderly daily routines and behaviour change." } },
        { t: "img", src: "diseases/obesity-due-to-excess-calories/ayurvedic.jpg", alt: { de: "Ayurvedische Ernährung", en: "Ayurvedic nutrition" } },
      ],
      physio: [
        { t: "sub", text: { de: "Bewegung", en: "Exercise" } },
        { t: "p", text: {
          de: "Sinnvoll ist eine Kombination aus Ausdauer, Krafttraining, Mobilitätsarbeit und einer schrittweisen Steigerung der Alltagsbewegung. Bei Gelenkschmerzen oder eingeschränkter Beweglichkeit eignen sich gelenkschonende Formen wie Radfahren, Schwimmen oder Wassergymnastik.",
          en: "A combination of aerobic work, resistance training, mobility work and a gradual increase in everyday movement is useful. With joint pain or limited mobility, low-impact forms such as cycling, swimming or water-based exercise are suitable." } },
      ],
    },
  },

  {
    slug: "pure-hypercholesterolemia",
    icd10: "E78.0",
    illustration: "generic",
    title: { de: "Reine Hypercholesterinämie", en: "Pure Hypercholesterolaemia" },
    summary: {
      de: "Vorwiegend erhöhtes LDL-Cholesterin mit langfristigem Herz-Kreislauf-Risiko.",
      en: "Predominantly raised LDL cholesterol with long-term cardiovascular risk.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die reine Hypercholesterinämie ist vor allem durch ein erhöhtes Blutcholesterin – insbesondere LDL-Cholesterin – gekennzeichnet. Dauerhaft erhöhtes LDL begünstigt arteriosklerotische Plaques und erhöht langfristig das Risiko für koronare Herzkrankheit, Herzinfarkt und Schlaganfall.",
          en: "Pure hypercholesterolaemia is characterised mainly by raised blood cholesterol – in particular LDL cholesterol. Persistently high LDL promotes atherosclerotic plaques and raises the long-term risk of coronary heart disease, heart attack and stroke." } },
        { t: "p", text: {
          de: "Bei manchen Menschen liegt eine erbliche Form wie die familiäre Hypercholesterinämie vor, bei anderen entsteht sie durch ein Zusammenspiel genetischer, ernährungsbedingter, stoffwechselbezogener und lebensstilbedingter Faktoren.",
          en: "Some people have an inherited form such as familial hypercholesterolaemia, while in others it develops through a combination of genetic, dietary, metabolic and lifestyle factors." } },
        { t: "img", src: "diseases/pure-hypercholesterolemia/definition.jpg", alt: { de: "Herzgesundheit", en: "Heart health" } },
      ],
      medical: [
        { t: "sub", text: { de: "Lebensstil", en: "Lifestyle" } },
        { t: "p", text: {
          de: "Grundlage sind eine herzgesunde Ernährung, regelmäßige Bewegung, ein angemessenes Körpergewicht und der Verzicht auf das Rauchen.",
          en: "The foundation is a heart-healthy diet, regular activity, an appropriate body weight and avoiding smoking." } },
        { t: "sub", text: { de: "Lipidsenkende Medikamente", en: "Lipid-lowering medication" } },
        { t: "p", text: {
          de: "Statine sind das am häufigsten eingesetzte Medikament, wenn eine medikamentöse Behandlung angezeigt ist. Je nach Herz-Kreislauf-Risiko und Ansprechen können Ezetimib, PCSK9-gerichtete Therapien oder weitere Lipidsenker ergänzt werden.",
          en: "Statins are the most commonly used medicine when drug treatment is indicated. Depending on cardiovascular risk and response, ezetimibe, PCSK9-targeted therapies or other lipid-lowering treatments may be added." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Ernährung & Lebensstil", en: "Nutrition & lifestyle" } },
        { t: "ul", items: {
          de: ["Lösliche Ballaststoffe aus Hafer, Hülsenfrüchten und Obst können das LDL-Cholesterin senken.","Übermäßige gesättigte Fette durch geeignete ungesättigte Fette ersetzen.","Pflanzensterine und -stanole können das LDL bei geeigneten Personen mäßig senken.","Regelmäßige Bewegung und Gewichtsmanagement senken das Herz-Kreislauf-Risiko insgesamt."],
          en: ["Soluble fibre from oats, legumes and fruit can lower LDL cholesterol.","Replace excess saturated fats with suitable unsaturated fats.","Plant sterols and stanols may modestly lower LDL in suitable individuals.","Regular activity and weight management reduce overall cardiovascular risk."] } },
      ],
      tcm: [
        { t: "sub", text: { de: "Muster-Differenzierung", en: "Pattern differentiation" } },
        { t: "p", text: {
          de: "Stoffwechsel- und lipidbezogene Bilder werden traditionell über Muster wie Schleim-Feuchtigkeit, Milz-Qi-Mangel oder Blut-Stase gedeutet. Ernährungsberatung, Akupunktur oder Kräuter richten sich nach dem diagnostizierten Muster.",
          en: "Metabolic and lipid-related pictures are traditionally interpreted through patterns such as phlegm-dampness, Spleen Qi deficiency or blood stasis. Dietary advice, acupuncture or herbs follow the diagnosed pattern." } },
        { t: "p", text: {
          de: "Diese Ansätze ersetzen keine angezeigte lipidsenkende Medikation.",
          en: "These approaches do not replace indicated lipid-lowering medication." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Ernährung & Stoffwechsel", en: "Nutrition & metabolism" } },
        { t: "p", text: {
          de: "Ayurvedische Ansätze betonen Ernährungsmäßigung, körperliche Aktivität, Gewichtsmanagement und individuelle Maßnahmen zur Unterstützung von Verdauung und Stoffwechsel. Kräuterpräparate müssen sorgfältig geprüft werden, insbesondere in Kombination mit Statinen.",
          en: "Ayurvedic approaches emphasise dietary moderation, physical activity, weight management and individual measures to support digestion and metabolism. Herbal products need careful review, especially in combination with statins." } },
      ],
      physio: [
        { t: "sub", text: { de: "Bewegung", en: "Exercise" } },
        { t: "p", text: {
          de: "Regelmäßiges Ausdauertraining in Kombination mit Krafttraining unterstützt die Herz-Kreislauf-Fitness, das Gewichtsmanagement und die Stoffwechselgesundheit. Die Steigerung richtet sich nach Herz-Kreislauf-Risiko und körperlichem Zustand.",
          en: "Regular aerobic training combined with resistance work supports cardiovascular fitness, weight management and metabolic health. Progression follows cardiovascular risk and physical condition." } },
        { t: "img", src: "diseases/pure-hypercholesterolemia/physio.jpg", alt: { de: "Bewegung & Stoffwechsel", en: "Movement & metabolism" } },
        { t: "p", text: {
          de: "Ein stark erhöhtes LDL – besonders bei früher Herz-Kreislauf-Erkrankung oder ausgeprägter Familienanamnese – sollte an eine familiäre Hypercholesterinämie denken lassen.",
          en: "Markedly raised LDL – especially with premature cardiovascular disease or a strong family history – should prompt consideration of familial hypercholesterolaemia." } },
      ],
    },
  },

  {
    slug: "pure-hyperglyceridemia",
    icd10: "E78.1",
    illustration: "generic",
    title: { de: "Reine Hypertriglyzeridämie", en: "Pure Hypertriglyceridaemia" },
    summary: {
      de: "Vorwiegend erhöhte Triglyzeride; sehr hohe Werte erhöhen das Pankreatitis-Risiko.",
      en: "Predominantly raised triglycerides; very high levels raise pancreatitis risk.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die reine Hyperglyzeridämie – meist als Hypertriglyzeridämie bezeichnet – ist vor allem durch erhöhte Triglyzeride im Blut gekennzeichnet. Erhöhte Triglyzeride sind mit metabolischem und kardiovaskulärem Risiko verbunden; sehr hohe Werte können das Risiko einer akuten Bauchspeicheldrüsenentzündung deutlich steigern.",
          en: "Pure hyperglyceridaemia – usually called hypertriglyceridaemia – is characterised mainly by raised triglycerides in the blood. Elevated triglycerides are linked with metabolic and cardiovascular risk; very high levels can substantially increase the risk of acute pancreatitis." } },
      ],
      medical: [
        { t: "sub", text: { de: "Ursachen & Lebensstil", en: "Causes & lifestyle" } },
        { t: "p", text: {
          de: "Die Behandlung zielt darauf, zugrunde liegende Faktoren zu erkennen und zu behandeln – etwa Diabetes, Übergewicht, übermäßigen Alkoholkonsum, eine Schilddrüsenunterfunktion, Ernährungsfaktoren, Medikamente oder genetische Störungen. Die Lebensstilanpassung ist grundlegend.",
          en: "Treatment aims to identify and manage underlying factors – such as diabetes, overweight, excessive alcohol, an underactive thyroid, dietary factors, medications or genetic disorders. Lifestyle change is fundamental." } },
        { t: "img", src: "diseases/pure-hyperglyceridemia/medical.jpg", alt: { de: "Bluttest", en: "Blood test" } },
        { t: "sub", text: { de: "Medikamente", en: "Medication" } },
        { t: "p", text: {
          de: "Je nach Schwere und Herz-Kreislauf-Risiko können zusätzlich lipidsenkende Medikamente angezeigt sein.",
          en: "Depending on severity and cardiovascular risk, lipid-lowering medication may additionally be indicated." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Ernährung & Bewegung", en: "Nutrition & activity" } },
        { t: "ul", items: {
          de: ["Weniger raffinierte Kohlenhydrate, Zuckerzusatz und unnötige Kalorien können die Triglyzeride deutlich verbessern.","Gewichtsreduktion und regelmäßige Bewegung senken die Triglyzeridwerte zusätzlich.","Omega-3-Fettsäuren aus der Ernährung unterstützen die Herz-Kreislauf-Gesundheit; hochdosierte Präparate gehören unter ärztliche Aufsicht."],
          en: ["Fewer refined carbohydrates, less added sugar and fewer unnecessary calories can markedly improve triglycerides.","Weight reduction and regular activity further lower triglyceride levels.","Dietary omega-3 fatty acids support cardiovascular health; high-dose preparations belong under medical supervision."] } },
      ],
      tcm: [
        { t: "sub", text: { de: "Muster-Differenzierung", en: "Pattern differentiation" } },
        { t: "p", text: {
          de: "Stoffwechselbilder werden traditionell mit Mustern wie Schleim-Feuchtigkeit oder Milz-Qi-Mangel in Verbindung gebracht. Ernährungsmaßnahmen, Akupunktur und Kräuter können unter qualifizierter Aufsicht begleitend eingesetzt werden.",
          en: "Metabolic pictures are traditionally associated with patterns such as phlegm-dampness or Spleen Qi deficiency. Dietary measures, acupuncture and herbs may be used as complementary care under qualified supervision." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Ernährung & Stoffwechsel", en: "Nutrition & metabolism" } },
        { t: "p", text: {
          de: "Die ayurvedische Behandlung betont eine passende Ernährung, regelmäßige Bewegung, Gewichtsmanagement und eine individuelle metabolische Unterstützung. Kräuterpräparate werden auf Wechselwirkungen mit lipidsenkenden und anderen Medikamenten geprüft.",
          en: "Ayurvedic management emphasises appropriate nutrition, regular activity, weight management and individual metabolic support. Herbal preparations are reviewed for interactions with lipid-lowering and other medicines." } },
        { t: "img", src: "diseases/pure-hyperglyceridemia/ayurvedic.jpg", alt: { de: "Ayurvedische Begleitung", en: "Ayurvedic support" } },
      ],
      physio: [
        { t: "sub", text: { de: "Bewegung", en: "Exercise" } },
        { t: "p", text: {
          de: "Ausdauer- und Krafttraining können Triglyzeride, Insulinempfindlichkeit, Fitness und Körperzusammensetzung verbessern. Bei bislang inaktiven Personen wird die Bewegung schrittweise gesteigert.",
          en: "Aerobic and resistance exercise can improve triglycerides, insulin sensitivity, fitness and body composition. In previously inactive people, activity is increased gradually." } },
        { t: "p", text: {
          de: "Sehr hohe Triglyzeridwerte erfordern eine rasche ärztliche Behandlung wegen des Pankreatitis-Risikos.",
          en: "Very high triglyceride levels require prompt medical management because of the risk of pancreatitis." } },
      ],
    },
  },

  {
    slug: "mixed-hyperlipidemia",
    icd10: "E78.2",
    illustration: "generic",
    title: { de: "Kombinierte Hyperlipidämie", en: "Mixed Hyperlipidaemia" },
    summary: {
      de: "Störung mehrerer Blutfettwerte – häufig erhöhtes LDL und erhöhte Triglyzeride.",
      en: "Disturbance of several blood lipids – often raised LDL and triglycerides.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die kombinierte (gemischte) Hyperlipidämie ist durch Störungen mehrerer Blutfettwerte gekennzeichnet – häufig erhöhtes LDL-Cholesterin und erhöhte Triglyzeride, teils begleitet von vermindertem HDL-Cholesterin.",
          en: "Mixed hyperlipidaemia is characterised by disturbances in more than one blood lipid – often raised LDL cholesterol and raised triglycerides, sometimes accompanied by reduced HDL cholesterol." } },
        { t: "p", text: {
          de: "Ursachen sind genetische Veranlagung, Insulinresistenz, Diabetes, Übergewicht, Ernährungsfaktoren, eine Schilddrüsenunterfunktion, bestimmte Medikamente oder Kombinationen davon.",
          en: "Causes include genetic predisposition, insulin resistance, diabetes, overweight, dietary factors, an underactive thyroid, certain medications or combinations of these." } },
      ],
      medical: [
        { t: "sub", text: { de: "Grundlagen", en: "Foundations" } },
        { t: "p", text: {
          de: "Die Behandlung umfasst eine kardiovaskuläre Risikoabschätzung, eine Ernährungsumstellung, regelmäßige Bewegung, Gewichtsmanagement und die Behandlung zugrunde liegender Störungen.",
          en: "Management includes cardiovascular risk assessment, dietary change, regular activity, weight management and treatment of underlying disorders." } },
        { t: "sub", text: { de: "Medikamente", en: "Medication" } },
        { t: "p", text: {
          de: "Statine bilden meist die Grundlage der medikamentösen Behandlung, wenn diese angezeigt ist. Je nach LDL- und Triglyzeridwerten sowie dem Gesamtrisiko können weitere Lipidsenker ergänzt werden.",
          en: "Statins usually form the basis of drug treatment when indicated. Depending on LDL and triglyceride levels and overall risk, further lipid-lowering therapy may be added." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Ernährung & Lebensstil", en: "Nutrition & lifestyle" } },
        { t: "p", text: {
          de: "Eine mediterrane, ballaststoffreiche Ernährung kann die Blutfette und die Herz-Kreislauf-Gesundheit unterstützen. Weniger gesättigte Fette, raffinierte Kohlenhydrate und Zuckerzusatz verbessern das Lipidprofil. Bewegung und eine angemessene Gewichtsreduktion sind besonders bei Insulinresistenz wichtig.",
          en: "A Mediterranean, fibre-rich diet can support blood lipids and cardiovascular health. Less saturated fat, refined carbohydrate and added sugar improves the lipid profile. Activity and appropriate weight reduction are especially important where insulin resistance is present." } },
      ],
      tcm: [
        { t: "sub", text: { de: "Muster-Differenzierung", en: "Pattern differentiation" } },
        { t: "p", text: {
          de: "Traditionelle Deutungen umfassen je nach Erscheinungsbild Schleim-Feuchtigkeit, Milz-Qi-Mangel, Feuchte-Hitze oder Blut-Stase. Akupunktur und eine individuell abgestimmte Kräutertherapie können begleitend eingesetzt werden.",
          en: "Traditional interpretations include phlegm-dampness, Spleen Qi deficiency, damp-heat or blood stasis depending on the presentation. Acupuncture and individually tailored herbal therapy may be used as complementary approaches." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Ernährung & Balance", en: "Nutrition & balance" } },
        { t: "p", text: {
          de: "Die traditionelle ayurvedische Behandlung betont Ernährungsanpassung, regelmäßige Aktivität, Gewichtskontrolle und individuelle Ansätze für eine metabolische Balance. Ergänzende Präparate ersetzen keine medizinisch angezeigte Lipidsenkung.",
          en: "Traditional Ayurvedic management emphasises dietary change, regular activity, weight control and individual approaches to metabolic balance. Complementary preparations do not replace medically indicated lipid-lowering therapy." } },
        { t: "img", src: "diseases/mixed-hyperlipidemia/ayurvedic.jpg", alt: { de: "Ayurvedische Ernährung", en: "Ayurvedic nutrition" } },
      ],
      physio: [
        { t: "sub", text: { de: "Bewegung", en: "Exercise" } },
        { t: "p", text: {
          de: "Eine Kombination aus Ausdauer- und Krafttraining ist für viele Betroffene geeignet und unterstützt Herz-Kreislauf- und Stoffwechselgesundheit. Das Programm richtet sich nach der Ausgangsfitness und dem Herz-Kreislauf-Risiko.",
          en: "A combination of aerobic and resistance training suits many patients and supports cardiovascular and metabolic health. The programme follows baseline fitness and cardiovascular risk." } },
      ],
    },
  },

  {
    slug: "hyperlipidemia-unspecified",
    icd10: "E78.5",
    illustration: "generic",
    title: { de: "Hyperlipidämie, nicht näher bezeichnet", en: "Hyperlipidaemia, Unspecified" },
    summary: {
      de: "Erhöhte Blutfette, deren genaue Fettstoffwechselstörung noch nicht eingeordnet ist.",
      en: "Raised blood lipids whose exact lipid disorder is not yet classified.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die nicht näher bezeichnete Hyperlipidämie beschreibt abnorm erhöhte Blutfette, wenn die genaue Fettstoffwechselstörung noch nicht weiter eingeordnet ist. Betroffen sein können LDL-Cholesterin, Triglyzeride oder mehrere Fettfraktionen; langfristig kann dies das Herz-Kreislauf-Risiko erhöhen.",
          en: "Unspecified hyperlipidaemia describes abnormally raised blood lipids when the exact lipid disorder has not been further classified. It may involve LDL cholesterol, triglycerides or several lipid fractions and can raise long-term cardiovascular risk." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung & Behandlung", en: "Work-up & treatment" } },
        { t: "p", text: {
          de: "Ein vollständiges Lipidprofil dient dazu, die Abweichung einzuordnen und das Herz-Kreislauf-Risiko zu bestimmen. Die Lebensstilanpassung bildet die Grundlage; je nach Werten und Risiko können Statine oder andere Lipidsenker angezeigt sein.",
          en: "A complete lipid profile serves to characterise the abnormality and determine cardiovascular risk. Lifestyle change is the foundation; depending on levels and risk, statins or other lipid-lowering medicines may be indicated." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Ernährung & Lebensstil", en: "Nutrition & lifestyle" } },
        { t: "p", text: {
          de: "Eine ballaststoffreiche Kost mit Gemüse, Vollkorn, Hülsenfrüchten, Nüssen und geeigneten ungesättigten Fetten kann die Herz-Kreislauf-Gesundheit unterstützen. Regelmäßige Bewegung, Gewichtsmanagement, ausreichend Schlaf und Rauchverzicht sind wichtige begleitende Maßnahmen.",
          en: "A fibre-rich diet with vegetables, whole grains, legumes, nuts and suitable unsaturated fats can support cardiovascular health. Regular activity, weight management, adequate sleep and avoiding smoking are important supportive measures." } },
      ],
      tcm: [
        { t: "sub", text: { de: "Muster-Differenzierung", en: "Pattern differentiation" } },
        { t: "p", text: {
          de: "Die TCM-Beurteilung kann Muster wie Schleim-Feuchtigkeit, Qi-Mangel oder Blut-Stase erkennen. Traditionelle Kräuter- oder Akupunkturansätze werden individuell abgestimmt und begleitend zur Behandlung des Herz-Kreislauf-Risikos eingesetzt.",
          en: "TCM assessment may identify patterns such as phlegm-dampness, Qi deficiency or blood stasis. Traditional herbal or acupuncture approaches are individualised and used as a complement to cardiovascular risk management." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Ernährung & Lebensstil", en: "Nutrition & lifestyle" } },
        { t: "p", text: {
          de: "Ayurvedische Ansätze können individuelle Ernährung, körperliche Aktivität und traditionelle Lebensstilmaßnahmen umfassen. Mögliche Wechselwirkungen zwischen Kräutern und Lipidsenkern werden vor der Kombination geprüft.",
          en: "Ayurvedic approaches may include individualised nutrition, physical activity and traditional lifestyle measures. Possible interactions between herbs and lipid-lowering medicines are reviewed before combining them." } },
        { t: "img", src: "diseases/hyperlipidemia-unspecified/ayurvedic.jpg", alt: { de: "Ayurvedische Begleitung", en: "Ayurvedic support" } },
      ],
      physio: [
        { t: "sub", text: { de: "Bewegung", en: "Exercise" } },
        { t: "p", text: {
          de: "Regelmäßiges Ausdauer- und Krafttraining unterstützt die Herz-Kreislauf-Gesundheit und den Stoffwechsel. Regelmäßige Lipidkontrollen helfen zu beurteilen, ob die Behandlungsziele erreicht werden; weitere Risikofaktoren wie Bluthochdruck, Diabetes, Rauchen, Übergewicht, Nierenerkrankung und Familienanamnese werden mitbeurteilt.",
          en: "Regular aerobic and resistance exercise supports cardiovascular health and metabolism. Periodic lipid checks help judge whether treatment goals are being met; further risk factors such as high blood pressure, diabetes, smoking, overweight, kidney disease and family history are assessed as well." } },
      ],
    },
  },
]
