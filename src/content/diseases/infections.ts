import type { Disease } from "@/content/treatments"

/**
 * Conditions for "Infections & Parasitic Diseases". This area is empty on
 * drdosthealth.com, so the content here is generated: original bilingual prose
 * (definition + the five treatment modalities) based on common ICD-10
 * conditions for a general/private practice. Every page is reviewed by
 * Dr. Dost before use; images are added later via the Gemini web workflow and
 * will carry the "KI-generiert" caption.
 */
export const infectionsDiseases: Disease[] = [
  {
    slug: "influenza-seasonal",
    icd10: "J11.1",
    illustration: "generic",
    title: { de: "Saisonale Grippe (Influenza)", en: "Seasonal Influenza" },
    summary: {
      de: "Durch Influenzaviren ausgelöste Atemwegserkrankung mit plötzlichem Fieber, Gliederschmerzen und Abgeschlagenheit.",
      en: "An influenza-virus respiratory illness with sudden fever, aching limbs and marked exhaustion.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die saisonale Grippe ist eine durch Influenzaviren verursachte, ansteckende Atemwegserkrankung, die vor allem in den Wintermonaten auftritt. Typisch ist ein plötzlicher Beginn mit hohem Fieber, Schüttelfrost, Kopf-, Muskel- und Gliederschmerzen, trockenem Husten und starker Abgeschlagenheit. Sie unterscheidet sich damit von einer gewöhnlichen Erkältung, die meist milder und schleichender verläuft.",
          en: "Seasonal influenza is a contagious respiratory illness caused by influenza viruses, occurring mainly in the winter months. It typically begins abruptly with high fever, chills, headache, muscle and limb pain, a dry cough and marked exhaustion. This distinguishes it from a common cold, which is usually milder and more gradual." } },
      ],
      medical: [
        { t: "sub", text: { de: "Verlauf & Behandlung", en: "Course & treatment" } },
        { t: "p", text: {
          de: "Bei sonst gesunden Menschen verläuft die Grippe meist selbstlimitierend und heilt innerhalb von ein bis zwei Wochen aus. Im Vordergrund steht die unterstützende Behandlung: körperliche Schonung, ausreichend Flüssigkeit sowie bei Bedarf fiebersenkende und schmerzlindernde Mittel. Antibiotika sind wirkungslos, da es sich um eine Virusinfektion handelt; sie werden nur bei einer zusätzlichen bakteriellen Komplikation eingesetzt.",
          en: "In otherwise healthy people influenza is usually self-limiting and resolves within one to two weeks. Supportive care is the priority: physical rest, adequate fluids and, if needed, fever-reducing and pain-relieving medicines. Antibiotics are ineffective because this is a viral infection; they are used only for an additional bacterial complication." } },
        { t: "sub", text: { de: "Antivirale Mittel & Vorbeugung", en: "Antivirals & prevention" } },
        { t: "p", text: {
          de: "Bei Risikogruppen oder schwerem Verlauf können früh begonnene antivirale Medikamente sinnvoll sein. Die wichtigste Vorbeugung ist die jährliche Grippeimpfung, die insbesondere für ältere Menschen, chronisch Kranke, Schwangere und medizinisches Personal empfohlen wird. Labornachgewiesene Influenza ist in Deutschland meldepflichtig.",
          en: "For risk groups or severe illness, antiviral medicines started early can be worthwhile. The most important prevention is the annual influenza vaccination, recommended especially for older people, those with chronic conditions, pregnant women and healthcare staff. Laboratory-confirmed influenza is notifiable in Germany." } },
        { t: "sub", text: { de: "Warnzeichen", en: "Warning signs" } },
        { t: "p", text: {
          de: "Anhaltend hohes Fieber, zunehmende Luftnot, Brustschmerzen, Verwirrtheit oder eine deutliche Verschlechterung nach anfänglicher Besserung erfordern eine rasche ärztliche Abklärung; bei akuter schwerer Atemnot gilt der Notruf 112.",
          en: "Persistent high fever, increasing breathlessness, chest pain, confusion or a clear deterioration after initial improvement require prompt medical assessment; for acute severe breathing difficulty call the emergency number 112." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Unterstützende Maßnahmen", en: "Supportive measures" } },
        { t: "ul", items: {
          de: ["Ausreichend trinken (Wasser, ungesüßte Tees), um den Flüssigkeitsverlust durch Fieber auszugleichen.","Inhalationen und Nasenspülungen mit Salzlösung können die Atemwege befeuchten und Beschwerden lindern.","Ruhe, Wärme und ausreichend Schlaf unterstützen die körpereigene Abwehr.","Pflanzliche Mittel wie Holunder oder Lindenblüte werden traditionell genutzt; die Anwendung ist mit der Ärztin oder dem Arzt abzustimmen."],
          en: ["Drink enough (water, unsweetened teas) to offset fluid loss from fever.","Steam inhalation and saline nasal rinses can moisten the airways and ease symptoms.","Rest, warmth and adequate sleep support the body's own defences.","Herbal products such as elderberry or lime blossom are traditionally used; their use should be agreed with your doctor."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der Traditionellen Chinesischen Medizin werden grippale Infekte häufig als Eindringen von Wind-Kälte oder Wind-Hitze gedeutet. Ergänzend können Akupunktur, Kräutertees und Ruhe zur Linderung von Beschwerden eingesetzt werden. Diese Verfahren verstehen sich als begleitende Unterstützung und ersetzen weder die Impfung noch eine erforderliche medizinische Behandlung.",
          en: "In Traditional Chinese Medicine, flu-like infections are often interpreted as an invasion of Wind-Cold or Wind-Heat. Acupuncture, herbal teas and rest may be used as complementary measures to ease symptoms. These approaches are supportive only and replace neither vaccination nor any required medical treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitmaßnahmen betonen Wärme, Ruhe und leicht verdauliche, warme Kost sowie Gewürze wie Ingwer und Kurkuma zur Unterstützung des Wohlbefindens. Kräuterpräparate sind wegen möglicher Wechselwirkungen ärztlich zu prüfen; die Impfung und die ärztliche Behandlung werden dadurch nicht ersetzt.",
          en: "Ayurvedic supportive measures emphasise warmth, rest and light, warm meals as well as spices such as ginger and turmeric to support wellbeing. Herbal preparations should be medically reviewed because of possible interactions; they do not replace vaccination or medical care." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Während des Fiebers steht körperliche Schonung im Vordergrund. Nach dem Abklingen der Beschwerden hilft eine schrittweise Rückkehr zu Alltag und Bewegung, um Überlastung und einen Rückfall zu vermeiden. Leichte Atemübungen können den zähen Husten und die Belüftung der Lunge unterstützen.",
          en: "While fever lasts, physical rest is the priority. After symptoms subside, a gradual return to everyday activity and exercise helps avoid overexertion and relapse. Gentle breathing exercises can support a productive cough and lung ventilation." } },
      ],
    },
  },

  {
    slug: "covid-19",
    icd10: "U07.1",
    illustration: "generic",
    title: { de: "COVID-19", en: "COVID-19" },
    summary: {
      de: "Durch das Coronavirus SARS-CoV-2 ausgelöste Infektion mit sehr unterschiedlichem Verlauf – von mild bis schwer.",
      en: "An infection caused by the coronavirus SARS-CoV-2 with a highly variable course – from mild to severe.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "COVID-19 ist eine durch das Coronavirus SARS-CoV-2 verursachte Infektionskrankheit. Der Verlauf reicht von beschwerdefrei über erkältungsähnliche Symptome wie Husten, Halsschmerzen, Fieber und Geschmacks- oder Geruchsverlust bis hin zu schweren Lungenentzündungen. Bei einem Teil der Betroffenen können Beschwerden über Wochen bis Monate anhalten (Long COVID bzw. Post-COVID-Syndrom).",
          en: "COVID-19 is an infectious disease caused by the coronavirus SARS-CoV-2. Its course ranges from symptom-free through cold-like symptoms such as cough, sore throat, fever and loss of taste or smell, up to severe pneumonia. In some people, symptoms can persist for weeks to months (long COVID or post-COVID syndrome)." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose & Behandlung", en: "Diagnosis & treatment" } },
        { t: "p", text: {
          de: "Die Diagnose erfolgt über Antigen- oder PCR-Tests. Die meisten Menschen können sich zu Hause mit unterstützenden Maßnahmen – Schonung, Flüssigkeit, fiebersenkenden Mitteln – auskurieren. Antibiotika wirken nicht gegen das Virus. Für Menschen mit erhöhtem Risiko für einen schweren Verlauf können früh begonnene antivirale Medikamente infrage kommen.",
          en: "Diagnosis is by antigen or PCR testing. Most people can recover at home with supportive measures – rest, fluids and fever-reducing medicines. Antibiotics have no effect against the virus. For people at increased risk of severe disease, antiviral medicines started early may be an option." } },
        { t: "sub", text: { de: "Impfung & Meldepflicht", en: "Vaccination & notification" } },
        { t: "p", text: {
          de: "Die Impfung senkt das Risiko für schwere Verläufe und wird für Risikogruppen als Auffrischung empfohlen. Der Nachweis von SARS-CoV-2 ist in Deutschland meldepflichtig.",
          en: "Vaccination lowers the risk of severe disease and is recommended as a booster for risk groups. Detection of SARS-CoV-2 is notifiable in Germany." } },
        { t: "sub", text: { de: "Warnzeichen", en: "Warning signs" } },
        { t: "p", text: {
          de: "Zunehmende Luftnot, anhaltende Brustschmerzen, ein niedriger Sauerstoffgehalt, Verwirrtheit oder bläuliche Lippen erfordern eine sofortige ärztliche Abklärung; bei akuter schwerer Atemnot gilt der Notruf 112.",
          en: "Increasing breathlessness, persistent chest pain, low oxygen levels, confusion or bluish lips require immediate medical assessment; for acute severe breathing difficulty call the emergency number 112." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Unterstützend wirken ausreichend Ruhe, Flüssigkeitszufuhr, gute Raumluft und – bei Halsbeschwerden – Salzwasserspülungen oder Inhalationen. Pflanzliche Mittel können das Wohlbefinden fördern, sind aber ärztlich zu prüfen und ersetzen weder Impfung noch antivirale Therapie. Bei Risikopatientinnen und -patienten ist frühzeitig ärztlicher Rat einzuholen.",
          en: "Supportive measures include adequate rest, hydration, good room ventilation and – for a sore throat – saltwater gargles or inhalation. Herbal products may aid wellbeing but should be medically reviewed and replace neither vaccination nor antiviral therapy. People at risk should seek medical advice early." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden Atemwegsinfekte über Muster wie Wind-Hitze oder Schleim gedeutet. Akupunktur und Kräuter können in der Erholungsphase begleitend zur Linderung von Erschöpfung und Husten eingesetzt werden, stets ergänzend zur medizinischen Versorgung und unter qualifizierter Aufsicht.",
          en: "In TCM, respiratory infections are interpreted through patterns such as Wind-Heat or phlegm. Acupuncture and herbs may be used during recovery as complementary care to ease fatigue and cough, always alongside medical care and under qualified supervision." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf Ruhe, warme und leicht verdauliche Kost, Atemübungen und Gewürze zur Unterstützung. Kräuterpräparate sind wegen möglicher Wechselwirkungen ärztlich zu prüfen und ersetzen die medizinische Behandlung nicht.",
          en: "Ayurvedic support relies on rest, warm and easily digestible food, breathing exercises and supportive spices. Herbal preparations should be medically reviewed because of possible interactions and do not replace medical care." } },
      ],
      physio: [
        { t: "p", text: {
          de: "In der akuten Phase ist Schonung wichtig. In der Erholung – insbesondere bei anhaltender Erschöpfung – hilft ein sehr behutsamer, schrittweiser Wiederaufbau der Belastung; bei belastungsabhängiger Verschlechterung (post-exertionelle Malaise) wird die Aktivität bewusst zurückgenommen. Atemübungen können die Lungenfunktion und Atemmuskulatur unterstützen.",
          en: "In the acute phase, rest is important. During recovery – especially with persistent exhaustion – a very careful, gradual rebuilding of activity helps; if exertion worsens symptoms (post-exertional malaise), activity is deliberately scaled back. Breathing exercises can support lung function and the respiratory muscles." } },
      ],
    },
  },

  {
    slug: "pneumonia",
    icd10: "J18.9",
    illustration: "generic",
    title: { de: "Lungenentzündung (Pneumonie)", en: "Pneumonia" },
    summary: {
      de: "Entzündung des Lungengewebes, meist durch Bakterien oder Viren, mit Husten, Fieber und Luftnot.",
      en: "Inflammation of the lung tissue, usually from bacteria or viruses, with cough, fever and breathlessness.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Lungenentzündung ist eine Entzündung des Lungengewebes, die am häufigsten durch Bakterien (vor allem Pneumokokken), aber auch durch Viren oder seltener Pilze verursacht wird. Typische Beschwerden sind Husten mit Auswurf, Fieber, Schüttelfrost, Luftnot und ein allgemeines Krankheitsgefühl. Bei älteren Menschen kann sie sich auch untypisch, etwa mit Verwirrtheit, äußern.",
          en: "Pneumonia is an inflammation of the lung tissue, most often caused by bacteria (particularly pneumococci), but also by viruses or, more rarely, fungi. Typical symptoms are a productive cough, fever, chills, breathlessness and a general feeling of illness. In older people it can also present atypically, for example with confusion." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Abklärung umfasst die körperliche Untersuchung (Abhören der Lunge), Sauerstoffmessung, Blutuntersuchungen und häufig ein Röntgenbild des Brustkorbs. Anhand von Schweregrad und Risikofaktoren wird entschieden, ob eine Behandlung zu Hause oder im Krankenhaus erfolgt.",
          en: "Assessment includes physical examination (listening to the lungs), oxygen measurement, blood tests and often a chest X-ray. Severity and risk factors determine whether treatment takes place at home or in hospital." } },
        { t: "sub", text: { de: "Behandlung & Vorbeugung", en: "Treatment & prevention" } },
        { t: "p", text: {
          de: "Die bakterielle Lungenentzündung wird mit Antibiotika behandelt, ergänzt durch Schonung, ausreichend Flüssigkeit und bei Bedarf Sauerstoff. Rein virale Formen werden unterstützend behandelt. Impfungen gegen Pneumokokken und Influenza sowie Rauchverzicht senken das Risiko.",
          en: "Bacterial pneumonia is treated with antibiotics, supported by rest, adequate fluids and, if needed, oxygen. Purely viral forms are treated supportively. Vaccination against pneumococci and influenza and stopping smoking reduce the risk." } },
        { t: "sub", text: { de: "Warnzeichen", en: "Warning signs" } },
        { t: "p", text: {
          de: "Starke Luftnot, bläuliche Lippen, hohes anhaltendes Fieber, Verwirrtheit oder ein rascher Kräfteverfall können auf einen schweren Verlauf oder eine Blutvergiftung (Sepsis) hindeuten und erfordern sofortige ärztliche Hilfe; bei akuter schwerer Atemnot gilt der Notruf 112.",
          en: "Severe breathlessness, bluish lips, high persistent fever, confusion or rapid decline can indicate severe disease or blood poisoning (sepsis) and require immediate medical help; for acute severe breathing difficulty call the emergency number 112." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend zur ärztlichen Behandlung unterstützen Ruhe, ausreichend Flüssigkeit, Inhalationen und eine leichte, nährstoffreiche Kost die Genesung. Pflanzliche Hustenmittel können das Wohlbefinden fördern, sind aber ärztlich zu prüfen und ersetzen bei einer bakteriellen Pneumonie niemals die Antibiotikatherapie.",
          en: "Alongside medical treatment, rest, adequate fluids, inhalation and a light, nutritious diet support recovery. Herbal cough remedies may aid wellbeing but should be medically reviewed and never replace antibiotic therapy in bacterial pneumonia." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden Lungenbeschwerden oft Mustern wie Hitze oder Schleim in der Lunge zugeordnet. Akupunktur und Kräuter kommen ausschließlich begleitend und unter qualifizierter Aufsicht infrage, insbesondere zur Unterstützung in der Erholungsphase, und ersetzen die medizinische Behandlung nicht.",
          en: "In TCM, lung complaints are often assigned to patterns such as heat or phlegm in the lung. Acupuncture and herbs are used strictly as complementary care under qualified supervision, particularly to aid recovery, and do not replace medical treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitmaßnahmen umfassen Wärme, Ruhe, leicht verdauliche warme Kost und Atemübungen. Kräuterpräparate sind wegen möglicher Wechselwirkungen ärztlich zu prüfen und ersetzen die Antibiotikatherapie nicht.",
          en: "Ayurvedic supportive measures include warmth, rest, easily digestible warm food and breathing exercises. Herbal preparations should be medically reviewed because of possible interactions and do not replace antibiotic therapy." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Atemphysiotherapie kann helfen, Sekret zu lösen, die Lunge gut zu belüften und die Atemmuskulatur zu kräftigen. In der Genesungsphase unterstützt ein schrittweiser Wiederaufbau der körperlichen Belastung die Rückkehr zur vollen Leistungsfähigkeit; Überlastung wird vermieden.",
          en: "Respiratory physiotherapy can help loosen secretions, ventilate the lungs well and strengthen the respiratory muscles. During recovery, a gradual rebuilding of physical activity supports the return to full capacity; overexertion is avoided." } },
      ],
    },
  },

  {
    slug: "streptococcal-pharyngitis",
    icd10: "J02.0",
    illustration: "generic",
    title: { de: "Streptokokken-Angina", en: "Streptococcal Pharyngitis" },
    summary: {
      de: "Bakterielle Rachenentzündung durch A-Streptokokken mit starken Halsschmerzen und Fieber.",
      en: "A bacterial throat infection from group A streptococci with severe sore throat and fever.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Streptokokken-Angina ist eine durch A-Streptokokken verursachte bakterielle Entzündung von Rachen und Mandeln. Typisch sind rasch einsetzende, starke Halsschmerzen, Schluckbeschwerden, Fieber, gerötete und belegte Mandeln sowie geschwollene Lymphknoten am Hals. Husten und Schnupfen fehlen meist – anders als beim viralen Infekt.",
          en: "Streptococcal pharyngitis is a bacterial inflammation of the throat and tonsils caused by group A streptococci. Typical features are rapid-onset severe sore throat, difficulty swallowing, fever, reddened tonsils with coating and swollen neck lymph nodes. Cough and runny nose are usually absent – unlike a viral infection." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose & Behandlung", en: "Diagnosis & treatment" } },
        { t: "p", text: {
          de: "Die Diagnose stützt sich auf das Beschwerdebild, bei Bedarf ergänzt durch einen Schnelltest oder eine Kultur. Da es sich um eine bakterielle Infektion handelt, ist ein Antibiotikum (meist Penicillin) angezeigt; es verkürzt die Beschwerden und beugt Komplikationen vor. Ergänzend wirken Schmerz- und Fiebermittel sowie ausreichend Flüssigkeit.",
          en: "Diagnosis rests on the symptom picture, supplemented if needed by a rapid test or culture. As this is a bacterial infection, an antibiotic (usually penicillin) is indicated; it shortens symptoms and prevents complications. Pain and fever medicines and adequate fluids provide additional relief." } },
        { t: "sub", text: { de: "Abgrenzung zum viralen Infekt", en: "Distinction from viral infection" } },
        { t: "p", text: {
          de: "Die meisten Halsentzündungen sind viral bedingt und brauchen kein Antibiotikum. Ein verantwortungsvoller Umgang mit Antibiotika – Einsatz nur bei nachgewiesener oder klar wahrscheinlicher bakterieller Ursache – ist wichtig, um Resistenzen zu vermeiden.",
          en: "Most sore throats are viral and need no antibiotic. Responsible antibiotic use – reserved for a proven or clearly likely bacterial cause – is important to avoid resistance." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend lindern warme oder kühle Getränke, Salzwasserspülungen, Lutschtabletten und Ruhe die Beschwerden. Pflanzliche Halsmittel (z. B. Salbei) sind als Unterstützung möglich, ärztlich abzustimmen und ersetzen bei bakterieller Angina die Antibiotikatherapie nicht.",
          en: "As support, warm or cool drinks, saltwater gargles, lozenges and rest ease symptoms. Herbal throat remedies (e.g. sage) are possible as support, should be agreed with your doctor and do not replace antibiotic therapy in bacterial pharyngitis." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden akute Halsschmerzen häufig als Wind-Hitze gedeutet. Akupunktur und Kräuter kommen nur begleitend und unter qualifizierter Aufsicht infrage und ersetzen bei bakterieller Ursache das Antibiotikum nicht.",
          en: "In TCM, acute sore throat is often interpreted as Wind-Heat. Acupuncture and herbs are used only as complementary care under qualified supervision and, where the cause is bacterial, do not replace the antibiotic." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf warme Flüssigkeiten, Gurgeln, beruhigende Kräuter und Ruhe. Kräuterpräparate sind ärztlich zu prüfen und ersetzen die notwendige antibiotische Behandlung nicht.",
          en: "Ayurvedic support relies on warm fluids, gargling, soothing herbs and rest. Herbal preparations should be medically reviewed and do not replace necessary antibiotic treatment." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt die Infektion nicht. Wichtig sind Schonung während des Fiebers und eine schrittweise Rückkehr zur Alltagsaktivität nach dem Abklingen der Beschwerden, um einer Überlastung vorzubeugen.",
          en: "Physiotherapy does not treat the infection. What matters is rest during fever and a gradual return to everyday activity once symptoms subside, to prevent overexertion." } },
      ],
    },
  },

  {
    slug: "scarlet-fever",
    icd10: "A38.9",
    illustration: "generic",
    title: { de: "Scharlach", en: "Scarlet Fever" },
    summary: {
      de: "Streptokokken-Infektion mit Halsschmerzen, Fieber, feinfleckigem Ausschlag und „Himbeerzunge“.",
      en: "A streptococcal infection with sore throat, fever, a fine rash and a strawberry tongue.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Scharlach ist eine durch bestimmte A-Streptokokken verursachte Infektion, die vor allem Kinder betrifft. Typisch sind Halsschmerzen, Fieber, ein feinfleckiger, sich rau anfühlender Hautausschlag, eine gerötete Zunge („Himbeerzunge“) sowie eine spätere Schuppung der Haut an Händen und Füßen. Es handelt sich im Kern um eine Streptokokken-Angina mit Hautbeteiligung.",
          en: "Scarlet fever is an infection caused by certain group A streptococci, affecting mainly children. Typical features are sore throat, fever, a fine, sandpaper-like skin rash, a reddened tongue (strawberry tongue) and later peeling of the skin on the hands and feet. At its core it is a streptococcal throat infection with skin involvement." } },
      ],
      medical: [
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Da Scharlach bakteriell bedingt ist, wird er mit einem Antibiotikum (meist Penicillin) behandelt. Dies verkürzt die Beschwerden, verringert die Ansteckungsfähigkeit und beugt seltenen Folgeerkrankungen vor. Ergänzend wirken Fieber- und Schmerzmittel sowie ausreichend Flüssigkeit.",
          en: "As scarlet fever is bacterial, it is treated with an antibiotic (usually penicillin). This shortens symptoms, reduces infectiousness and prevents rare complications. Fever and pain medicines and adequate fluids provide additional support." } },
        { t: "sub", text: { de: "Gemeinschaftseinrichtungen", en: "Community settings" } },
        { t: "p", text: {
          de: "Kinder dürfen Gemeinschaftseinrichtungen wie Kita oder Schule in der Regel wieder besuchen, wenn sie unter wirksamer Behandlung fieberfrei und in gutem Allgemeinzustand sind (nach den geltenden Vorgaben des Infektionsschutzgesetzes). Die behandelnde Praxis berät zum genauen Zeitpunkt.",
          en: "Children may usually return to community settings such as daycare or school when, under effective treatment, they are free of fever and in good general condition (per the applicable rules of the German Infection Protection Act). Your practice advises on the precise timing." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend helfen Ruhe, ausreichend Flüssigkeit, weiche Kost bei Halsschmerzen und milde Hautpflege. Pflanzliche Mittel sind ärztlich abzustimmen und ersetzen die Antibiotikatherapie nicht.",
          en: "As support, rest, adequate fluids, soft food for a sore throat and mild skin care help. Herbal products should be agreed with your doctor and do not replace antibiotic therapy." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden fieberhafte Ausschläge häufig als Hitze im Blut gedeutet. Ergänzende Verfahren wie Akupunktur kommen nur unter qualifizierter Aufsicht infrage und ersetzen das notwendige Antibiotikum nicht.",
          en: "In TCM, febrile rashes are often interpreted as heat in the blood. Complementary approaches such as acupuncture are used only under qualified supervision and do not replace the necessary antibiotic." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf Ruhe, kühlende und leicht verdauliche Kost sowie sanfte Hautpflege. Kräuterpräparate sind ärztlich zu prüfen und ersetzen die medizinische Behandlung nicht.",
          en: "Ayurvedic support relies on rest, cooling and easily digestible food and gentle skin care. Herbal preparations should be medically reviewed and do not replace medical treatment." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt die Infektion nicht. Wichtig sind Schonung im akuten Stadium und eine schrittweise Rückkehr zu Spiel, Bewegung und Alltag nach Abklingen des Fiebers.",
          en: "Physiotherapy does not treat the infection. What matters is rest in the acute stage and a gradual return to play, activity and everyday life once the fever subsides." } },
      ],
    },
  },

  {
    slug: "whooping-cough-pertussis",
    icd10: "A37.9",
    illustration: "generic",
    title: { de: "Keuchhusten (Pertussis)", en: "Whooping Cough (Pertussis)" },
    summary: {
      de: "Bakterielle Atemwegsinfektion mit anfallsartigen Hustenstößen, für Säuglinge besonders gefährlich.",
      en: "A bacterial respiratory infection with fits of coughing, particularly dangerous for infants.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Keuchhusten ist eine durch das Bakterium Bordetella pertussis verursachte, hochansteckende Atemwegsinfektion. Nach einem erkältungsähnlichen Beginn folgen über Wochen anfallsartige, stakkatoartige Hustenstöße, oft mit keuchendem Einatmen und Erbrechen. Für junge Säuglinge kann die Erkrankung mit Atemaussetzern lebensbedrohlich verlaufen.",
          en: "Whooping cough is a highly contagious respiratory infection caused by the bacterium Bordetella pertussis. After a cold-like onset, weeks of fits of staccato coughing follow, often with a whooping intake of breath and vomiting. In young infants the illness can be life-threatening, with pauses in breathing." } },
      ],
      medical: [
        { t: "sub", text: { de: "Behandlung & Meldepflicht", en: "Treatment & notification" } },
        { t: "p", text: {
          de: "Früh eingesetzte Antibiotika können den Verlauf mildern und vor allem die Ansteckung anderer verringern; der Husten selbst bessert sich oft erst langsam. Pertussis ist in Deutschland meldepflichtig. Enge Kontaktpersonen, insbesondere im Umfeld von Säuglingen, werden ärztlich beraten.",
          en: "Antibiotics started early can soften the course and, above all, reduce transmission to others; the cough itself often improves only slowly. Pertussis is notifiable in Germany. Close contacts, especially around infants, receive medical advice." } },
        { t: "sub", text: { de: "Impfung", en: "Vaccination" } },
        { t: "p", text: {
          de: "Die Impfung ist die wichtigste Vorbeugung. Empfohlen werden die Grundimmunisierung im Kindesalter, Auffrischungen sowie die Impfung in der Schwangerschaft, um Neugeborene zu schützen (Nestschutz).",
          en: "Vaccination is the most important prevention. Recommended are the primary childhood series, boosters and vaccination during pregnancy to protect newborns (passive immunity)." } },
        { t: "sub", text: { de: "Warnzeichen bei Säuglingen", en: "Warning signs in infants" } },
        { t: "p", text: {
          de: "Bei Säuglingen sind Atemaussetzer, bläuliche Verfärbung, Trinkschwäche oder Erschöpfung Alarmzeichen und erfordern sofortige ärztliche Hilfe; im Notfall gilt der Notruf 112.",
          en: "In infants, pauses in breathing, bluish discolouration, poor feeding or exhaustion are alarm signs and require immediate medical help; in an emergency call 112." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend helfen Ruhe, kleine häufige Mahlzeiten, ausreichend Flüssigkeit, gute feuchte Raumluft und das Vermeiden von Hustenreizen wie Rauch. Pflanzliche Hustenmittel sind ärztlich abzustimmen und ersetzen die medizinische Behandlung und Impfung nicht.",
          en: "As support, rest, small frequent meals, adequate fluids, good humid room air and avoiding cough triggers such as smoke help. Herbal cough remedies should be agreed with your doctor and replace neither medical treatment nor vaccination." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird hartnäckiger Husten über Muster von Lungen-Schwäche oder Schleim gedeutet. Begleitende Verfahren kommen nur unter qualifizierter Aufsicht infrage und ersetzen Antibiotika und Impfung nicht.",
          en: "In TCM, persistent cough is interpreted through patterns of Lung weakness or phlegm. Complementary approaches are used only under qualified supervision and replace neither antibiotics nor vaccination." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf Wärme, beruhigende Kräuter und leicht verdauliche Kost. Kräuterpräparate sind wegen möglicher Wechselwirkungen ärztlich zu prüfen und ersetzen die medizinische Behandlung nicht.",
          en: "Ayurvedic support relies on warmth, soothing herbs and easily digestible food. Herbal preparations should be medically reviewed because of possible interactions and do not replace medical treatment." } },
      ],
      physio: [
        { t: "p", text: {
          de: "In der Erholungsphase können Atemübungen und eine schonende, atemerleichternde Lagerung die Belüftung der Lunge unterstützen und das Abhusten erleichtern. Der Wiederaufbau der Belastbarkeit erfolgt behutsam und schrittweise.",
          en: "During recovery, breathing exercises and gentle, breathing-supportive positioning can aid lung ventilation and make coughing up secretions easier. Rebuilding of capacity is gentle and gradual." } },
      ],
    },
  },

  {
    slug: "infectious-gastroenteritis",
    icd10: "A09",
    illustration: "generic",
    title: { de: "Infektiöse Gastroenteritis (Magen-Darm-Infekt)", en: "Infectious Gastroenteritis" },
    summary: {
      de: "Durch Viren oder Bakterien ausgelöste Magen-Darm-Entzündung mit Durchfall, Übelkeit und Erbrechen.",
      en: "A stomach-and-bowel infection from viruses or bacteria with diarrhoea, nausea and vomiting.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die infektiöse Gastroenteritis ist eine Entzündung von Magen und Darm, die meist durch Viren, seltener durch Bakterien oder deren Gifte verursacht wird. Typisch sind Durchfall, Übelkeit, Erbrechen, Bauchkrämpfe und mitunter Fieber. Sie ist in der Regel selbstlimitierend, kann aber vor allem bei Kindern und älteren Menschen zu einem gefährlichen Flüssigkeitsverlust führen.",
          en: "Infectious gastroenteritis is an inflammation of the stomach and bowel, usually caused by viruses and, less often, by bacteria or their toxins. Typical features are diarrhoea, nausea, vomiting, abdominal cramps and sometimes fever. It is generally self-limiting but can cause dangerous fluid loss, especially in children and older people." } },
      ],
      medical: [
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Im Mittelpunkt steht der Ausgleich von Flüssigkeit und Salzen, am besten mit oralen Rehydratationslösungen. Leichte, gut verträgliche Kost wird nach Bedarf wieder aufgebaut. Antibiotika sind bei den häufigen viralen Formen wirkungslos und auch bei vielen bakteriellen Verläufen nicht nötig; sie werden nur in ausgewählten Fällen gezielt eingesetzt.",
          en: "The focus is on replacing fluids and salts, ideally with oral rehydration solutions. Light, well-tolerated food is reintroduced as tolerated. Antibiotics are ineffective for the common viral forms and are unnecessary in many bacterial cases too; they are used selectively only in particular situations." } },
        { t: "sub", text: { de: "Hygiene & Meldung", en: "Hygiene & notification" } },
        { t: "p", text: {
          de: "Sorgfältige Händehygiene begrenzt die Ausbreitung. Je nach Erreger und Situation (z. B. Tätigkeit im Lebensmittelbereich oder Ausbrüche in Gemeinschaftseinrichtungen) bestehen Meldepflichten nach dem Infektionsschutzgesetz.",
          en: "Careful hand hygiene limits spread. Depending on the pathogen and situation (e.g. work with food or outbreaks in community facilities), notification duties apply under the German Infection Protection Act." } },
        { t: "sub", text: { de: "Warnzeichen", en: "Warning signs" } },
        { t: "p", text: {
          de: "Anhaltendes Erbrechen, blutiger Durchfall, hohes Fieber sowie Zeichen einer Austrocknung (starker Durst, trockener Mund, wenig Urin, Benommenheit, bei Kindern eingesunkene Augen) erfordern eine rasche ärztliche Abklärung.",
          en: "Persistent vomiting, bloody diarrhoea, high fever and signs of dehydration (intense thirst, dry mouth, little urine, drowsiness, sunken eyes in children) require prompt medical assessment." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Unterstützende Maßnahmen", en: "Supportive measures" } },
        { t: "ul", items: {
          de: ["Häufig kleine Mengen trinken (Wasser, verdünnte Tees, orale Rehydratationslösung).","Leichte Kost wie Zwieback, Reis, Banane oder klare Suppe schrittweise wieder einführen.","Ruhe und Wärme unterstützen die Erholung.","Auf gründliche Händehygiene achten, um Angehörige zu schützen."],
          en: ["Drink small amounts frequently (water, diluted teas, oral rehydration solution).","Reintroduce light foods such as rusk, rice, banana or clear soup gradually.","Rest and warmth aid recovery.","Practise thorough hand hygiene to protect household members."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden Durchfallerkrankungen häufig Mustern wie Feuchtigkeit-Hitze oder einer Schwäche von Milz und Magen zugeordnet. Begleitende Verfahren können in der Erholungsphase eingesetzt werden, ersetzen aber nicht den notwendigen Flüssigkeitsersatz.",
          en: "In TCM, diarrhoeal illness is often assigned to patterns such as damp-heat or a weakness of Spleen and Stomach. Complementary approaches may be used during recovery but do not replace the necessary fluid replacement." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf leicht verdauliche, warme Kost, ausreichend Flüssigkeit und verdauungsfördernde Gewürze in der Erholungsphase. Kräuterpräparate sind ärztlich zu prüfen und ersetzen den Flüssigkeits- und Salzausgleich nicht.",
          en: "Ayurvedic support relies on easily digestible, warm food, adequate fluids and digestion-supporting spices during recovery. Herbal preparations should be medically reviewed and do not replace fluid and salt replacement." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt den Infekt nicht. Wichtig sind Schonung während der akuten Phase, ausreichend Flüssigkeit und eine behutsame Mobilisation sowie ein schrittweiser Wiederaufbau der Aktivität nach Abklingen der Beschwerden.",
          en: "Physiotherapy does not treat the infection. What matters is rest during the acute phase, adequate fluids, gentle mobilisation and a gradual rebuilding of activity once symptoms subside." } },
      ],
    },
  },

  {
    slug: "norovirus-infection",
    icd10: "A08.11",
    illustration: "generic",
    title: { de: "Norovirus-Infektion", en: "Norovirus Infection" },
    summary: {
      de: "Hochansteckender Magen-Darm-Infekt mit heftigem Erbrechen und Durchfall, oft in Ausbrüchen.",
      en: "A highly contagious gastrointestinal infection with violent vomiting and diarrhoea, often in outbreaks.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Norovirus-Infektion ist ein hochansteckender Magen-Darm-Infekt, der oft schwallartiges Erbrechen und wässrigen Durchfall auslöst, häufig begleitet von Übelkeit, Bauchkrämpfen und leichtem Fieber. Die Beschwerden beginnen meist plötzlich und klingen nach ein bis drei Tagen wieder ab. Ausbrüche in Kitas, Schulen, Krankenhäusern und Pflegeheimen sind typisch.",
          en: "Norovirus infection is a highly contagious gastrointestinal infection that often causes projectile vomiting and watery diarrhoea, frequently with nausea, abdominal cramps and mild fever. Symptoms usually begin suddenly and settle after one to three days. Outbreaks in daycare centres, schools, hospitals and care homes are typical." } },
      ],
      medical: [
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Eine ursächliche Behandlung gibt es nicht; im Vordergrund steht der Ausgleich von Flüssigkeit und Salzen. Antibiotika sind wirkungslos, da es sich um ein Virus handelt. Meist heilt die Infektion von selbst aus.",
          en: "There is no causal treatment; the focus is on replacing fluids and salts. Antibiotics are ineffective because this is a virus. The infection usually resolves on its own." } },
        { t: "sub", text: { de: "Hygiene & Meldung", en: "Hygiene & notification" } },
        { t: "p", text: {
          de: "Wegen der hohen Ansteckungsfähigkeit sind konsequente Händehygiene, das Reinigen kontaminierter Flächen und – wenn möglich – das Fernbleiben von Gemeinschaftseinrichtungen bis etwa zwei Tage nach dem Abklingen wichtig. Der Nachweis ist in Deutschland meldepflichtig.",
          en: "Because of its high infectiousness, consistent hand hygiene, cleaning of contaminated surfaces and – where possible – staying away from community facilities until about two days after symptoms settle are important. Detection is notifiable in Germany." } },
        { t: "sub", text: { de: "Warnzeichen", en: "Warning signs" } },
        { t: "p", text: {
          de: "Zeichen einer Austrocknung (wenig Urin, trockener Mund, Benommenheit) oder anhaltendes Erbrechen ohne Flüssigkeitsaufnahme erfordern eine ärztliche Abklärung, besonders bei Kindern und älteren Menschen.",
          en: "Signs of dehydration (little urine, dry mouth, drowsiness) or persistent vomiting with no fluid intake require medical assessment, especially in children and older people." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend helfen häufiges Trinken kleiner Mengen, orale Rehydratationslösungen, leichte Kost nach Bedarf und Ruhe. Strikte Händehygiene schützt Angehörige. Pflanzliche Mittel sind allenfalls unterstützend und ärztlich abzustimmen.",
          en: "As support, drinking small amounts frequently, oral rehydration solutions, light food as tolerated and rest help. Strict hand hygiene protects household members. Herbal products are supportive at most and should be agreed with your doctor." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden akute Durchfall- und Brechbeschwerden meist als Feuchtigkeit-Hitze gedeutet. Begleitende Verfahren kommen vor allem in der Erholungsphase infrage und ersetzen den Flüssigkeitsersatz nicht.",
          en: "In TCM, acute diarrhoea and vomiting are usually interpreted as damp-heat. Complementary approaches are considered mainly during recovery and do not replace fluid replacement." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf Schonung, warme, leicht verdauliche Kost und ausreichend Flüssigkeit in der Erholungsphase. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support relies on rest, warm, easily digestible food and adequate fluids during recovery. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt den Infekt nicht. Wichtig sind Schonung und ausreichend Flüssigkeit in der akuten Phase sowie eine schrittweise Rückkehr zur Aktivität nach dem Abklingen der Beschwerden.",
          en: "Physiotherapy does not treat the infection. What matters is rest and adequate fluids in the acute phase and a gradual return to activity once symptoms subside." } },
      ],
    },
  },

  {
    slug: "rotavirus-enteritis",
    icd10: "A08.0",
    illustration: "generic",
    title: { de: "Rotavirus-Infektion", en: "Rotavirus Enteritis" },
    summary: {
      de: "Häufiger Durchfallerreger bei Kleinkindern; eine Schluckimpfung schützt Säuglinge.",
      en: "A common cause of diarrhoea in young children; an oral vaccine protects infants.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Rotavirus-Infektion ist eine der häufigsten Ursachen für Durchfallerkrankungen bei Säuglingen und Kleinkindern. Typisch sind wässriger Durchfall, Erbrechen und Fieber, die rasch zu einem bedeutsamen Flüssigkeitsverlust führen können. Bei Erwachsenen verläuft sie meist milder.",
          en: "Rotavirus infection is one of the most common causes of diarrhoeal illness in infants and young children. Typical features are watery diarrhoea, vomiting and fever, which can quickly lead to significant fluid loss. In adults it is usually milder." } },
      ],
      medical: [
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Im Vordergrund steht der Ausgleich von Flüssigkeit und Salzen, meist mit oralen Rehydratationslösungen. Antibiotika helfen nicht, da es sich um ein Virus handelt. Wichtig ist das genaue Beobachten des Flüssigkeitshaushalts, besonders bei kleinen Kindern.",
          en: "The focus is on replacing fluids and salts, usually with oral rehydration solutions. Antibiotics do not help, as this is a virus. Careful monitoring of hydration is important, especially in small children." } },
        { t: "sub", text: { de: "Impfung & Meldung", en: "Vaccination & notification" } },
        { t: "p", text: {
          de: "Für Säuglinge wird eine gut verträgliche Schluckimpfung empfohlen, die vor schweren Verläufen schützt. Der Nachweis von Rotaviren ist in Deutschland meldepflichtig.",
          en: "For infants, a well-tolerated oral vaccine is recommended that protects against severe disease. Detection of rotavirus is notifiable in Germany." } },
        { t: "sub", text: { de: "Warnzeichen", en: "Warning signs" } },
        { t: "p", text: {
          de: "Zeichen einer Austrocknung – wenige nasse Windeln, trockene Schleimhäute, eingesunkene Augen, Teilnahmslosigkeit – erfordern eine rasche ärztliche Abklärung.",
          en: "Signs of dehydration – few wet nappies, dry mucous membranes, sunken eyes, listlessness – require prompt medical assessment." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend helfen häufiges Anbieten kleiner Flüssigkeitsmengen, Weiterstillen bzw. gewohnte Nahrung nach Bedarf und Ruhe. Strikte Händehygiene begrenzt die Ausbreitung. Pflanzliche Mittel sind ärztlich abzustimmen.",
          en: "As support, offering small amounts of fluid frequently, continued breastfeeding or usual food as tolerated and rest help. Strict hand hygiene limits spread. Herbal products should be agreed with your doctor." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden kindliche Durchfälle über Muster einer Schwäche von Milz und Magen gedeutet. Begleitende Verfahren kommen nur behutsam und unter qualifizierter Aufsicht infrage und ersetzen den Flüssigkeitsersatz nicht.",
          en: "In TCM, childhood diarrhoea is interpreted through patterns of a weakness of Spleen and Stomach. Complementary approaches are used only gently and under qualified supervision and do not replace fluid replacement." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt in der Erholungsphase auf leicht verdauliche, warme Kost und ausreichend Flüssigkeit. Anwendungen bei kleinen Kindern sind besonders zurückhaltend und ärztlich abzustimmen.",
          en: "Ayurvedic support relies during recovery on easily digestible, warm food and adequate fluids. Applications in small children should be especially cautious and agreed with a doctor." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt den Infekt nicht. Im Vordergrund stehen Schonung, ausreichend Flüssigkeit und die schrittweise Rückkehr zu Spiel und Aktivität nach dem Abklingen der Beschwerden.",
          en: "Physiotherapy does not treat the infection. The priorities are rest, adequate fluids and a gradual return to play and activity once symptoms subside." } },
      ],
    },
  },

  {
    slug: "salmonellosis",
    icd10: "A02.9",
    illustration: "generic",
    title: { de: "Salmonellose", en: "Salmonellosis" },
    summary: {
      de: "Durch Salmonellen ausgelöste, lebensmittelbedingte Magen-Darm-Infektion mit Durchfall und Fieber.",
      en: "A food-borne gastrointestinal infection from salmonella bacteria with diarrhoea and fever.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Salmonellose ist eine meist über Lebensmittel (z. B. rohe Eier, unzureichend gegartes Fleisch) übertragene bakterielle Magen-Darm-Infektion. Typisch sind Durchfall, Bauchkrämpfe, Übelkeit, Erbrechen und Fieber, die einige Stunden bis Tage nach der Ansteckung auftreten. Bei gesunden Erwachsenen verläuft sie meist selbstlimitierend.",
          en: "Salmonellosis is a bacterial gastrointestinal infection usually transmitted through food (e.g. raw eggs, undercooked meat). Typical features are diarrhoea, abdominal cramps, nausea, vomiting and fever, appearing hours to days after infection. In healthy adults it is usually self-limiting." } },
      ],
      medical: [
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Im Mittelpunkt steht der Ausgleich von Flüssigkeit und Salzen. Antibiotika werden bei unkompliziertem Verlauf bewusst nicht eingesetzt, da sie den Verlauf nicht verkürzen und die Ausscheidung verlängern können; sie bleiben schweren Verläufen und Risikogruppen (z. B. Säuglinge, ältere oder abwehrgeschwächte Menschen) vorbehalten.",
          en: "The focus is on replacing fluids and salts. In uncomplicated cases antibiotics are deliberately not used, as they do not shorten the illness and can prolong shedding; they are reserved for severe cases and risk groups (e.g. infants, older or immunocompromised people)." } },
        { t: "sub", text: { de: "Hygiene & Meldung", en: "Hygiene & notification" } },
        { t: "p", text: {
          de: "Küchenhygiene, das Durchgaren von Fleisch und Eiern sowie sorgfältige Händehygiene beugen vor. Der Nachweis von Salmonellen ist in Deutschland meldepflichtig; für Tätigkeiten im Lebensmittelbereich gelten besondere Regeln.",
          en: "Kitchen hygiene, thoroughly cooking meat and eggs and careful hand hygiene prevent infection. Detection of salmonella is notifiable in Germany; special rules apply to work with food." } },
        { t: "sub", text: { de: "Warnzeichen", en: "Warning signs" } },
        { t: "p", text: {
          de: "Hohes Fieber, blutiger Durchfall, anhaltendes Erbrechen oder Zeichen einer Austrocknung erfordern eine ärztliche Abklärung.",
          en: "High fever, bloody diarrhoea, persistent vomiting or signs of dehydration require medical assessment." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend helfen ausreichend Flüssigkeit, orale Rehydratationslösungen, leichte Kost nach Bedarf und Ruhe. Strenge Küchen- und Händehygiene schützt Angehörige. Pflanzliche Mittel sind ärztlich abzustimmen.",
          en: "As support, adequate fluids, oral rehydration solutions, light food as tolerated and rest help. Strict kitchen and hand hygiene protects household members. Herbal products should be agreed with your doctor." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird die akute Durchfallerkrankung meist als Feuchtigkeit-Hitze gedeutet. Begleitende Verfahren kommen vor allem in der Erholungsphase infrage und ersetzen den Flüssigkeitsersatz sowie eine gegebenenfalls nötige Behandlung nicht.",
          en: "In TCM, acute diarrhoeal illness is usually interpreted as damp-heat. Complementary approaches are considered mainly during recovery and replace neither fluid replacement nor any treatment that may be needed." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt in der Erholungsphase auf leicht verdauliche, warme Kost, verdauungsfördernde Gewürze und ausreichend Flüssigkeit. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support relies during recovery on easily digestible, warm food, digestion-supporting spices and adequate fluids. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt den Infekt nicht. Wichtig sind Schonung und ausreichend Flüssigkeit in der akuten Phase sowie ein schrittweiser Wiederaufbau der Aktivität nach dem Abklingen.",
          en: "Physiotherapy does not treat the infection. What matters is rest and adequate fluids in the acute phase and a gradual rebuilding of activity once it subsides." } },
      ],
    },
  },

  {
    slug: "campylobacter-enteritis",
    icd10: "A04.5",
    illustration: "generic",
    title: { de: "Campylobacter-Enteritis", en: "Campylobacter Enteritis" },
    summary: {
      de: "Häufige bakterielle Darminfektion, oft aus unzureichend gegartem Geflügel, mit teils blutigem Durchfall.",
      en: "A common bacterial bowel infection, often from undercooked poultry, with sometimes bloody diarrhoea.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Campylobacter-Enteritis ist eine der häufigsten bakteriellen Darminfektionen und wird meist über unzureichend gegartes Geflügel, rohe Milch oder verunreinigtes Wasser übertragen. Typisch sind Bauchkrämpfe, teils blutiger Durchfall, Fieber und Krankheitsgefühl. Die Beschwerden klingen meist innerhalb einer Woche ab.",
          en: "Campylobacter enteritis is one of the most common bacterial bowel infections and is usually transmitted through undercooked poultry, raw milk or contaminated water. Typical features are abdominal cramps, sometimes bloody diarrhoea, fever and malaise. Symptoms usually settle within a week." } },
      ],
      medical: [
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Im Vordergrund steht der Ausgleich von Flüssigkeit und Salzen. Bei unkompliziertem Verlauf sind Antibiotika nicht erforderlich; sie werden nur bei schwerem oder anhaltendem Verlauf sowie bei Risikogruppen gezielt eingesetzt. Ein verantwortungsvoller Antibiotikaeinsatz ist wegen zunehmender Resistenzen wichtig.",
          en: "The focus is on replacing fluids and salts. In uncomplicated cases antibiotics are not required; they are used selectively only for severe or persistent illness and in risk groups. Responsible antibiotic use matters because of increasing resistance." } },
        { t: "sub", text: { de: "Hygiene & Meldung", en: "Hygiene & notification" } },
        { t: "p", text: {
          de: "Küchenhygiene, das gute Durchgaren von Geflügel und das Trennen von rohen und garen Lebensmitteln beugen vor. Der Nachweis ist in Deutschland meldepflichtig.",
          en: "Kitchen hygiene, thoroughly cooking poultry and separating raw from cooked foods prevent infection. Detection is notifiable in Germany." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend helfen ausreichend Flüssigkeit, orale Rehydratationslösungen, leichte Kost und Ruhe. Sorgfältige Händehygiene schützt Angehörige. Pflanzliche Mittel sind allenfalls unterstützend und ärztlich abzustimmen.",
          en: "As support, adequate fluids, oral rehydration solutions, light food and rest help. Careful hand hygiene protects household members. Herbal products are supportive at most and should be agreed with your doctor." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird die akute Darminfektion meist als Feuchtigkeit-Hitze gedeutet. Begleitende Verfahren kommen vor allem in der Erholungsphase infrage und ersetzen den Flüssigkeitsersatz nicht.",
          en: "In TCM, the acute bowel infection is usually interpreted as damp-heat. Complementary approaches are considered mainly during recovery and do not replace fluid replacement." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt in der Erholungsphase auf leicht verdauliche, warme Kost und verdauungsfördernde Gewürze. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support relies during recovery on easily digestible, warm food and digestion-supporting spices. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt den Infekt nicht. Wichtig sind Schonung und Flüssigkeitszufuhr in der akuten Phase sowie eine schrittweise Rückkehr zur Aktivität. Selten treten nach der Infektion Gelenkbeschwerden auf, die physiotherapeutisch begleitet werden können.",
          en: "Physiotherapy does not treat the infection. What matters is rest and fluid intake in the acute phase and a gradual return to activity. Rarely, joint complaints follow the infection and can be supported with physiotherapy." } },
      ],
    },
  },

  {
    slug: "infectious-mononucleosis",
    icd10: "B27.9",
    illustration: "generic",
    title: { de: "Pfeiffersches Drüsenfieber (Mononukleose)", en: "Infectious Mononucleosis" },
    summary: {
      de: "Durch das Epstein-Barr-Virus ausgelöste Infektion mit Halsschmerzen, Fieber und Lymphknotenschwellung.",
      en: "An Epstein-Barr-virus infection with sore throat, fever and swollen lymph nodes.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Das Pfeiffersche Drüsenfieber ist eine meist durch das Epstein-Barr-Virus verursachte Infektion, die häufig Jugendliche und junge Erwachsene betrifft. Typisch sind ausgeprägte Halsschmerzen mit belegten Mandeln, Fieber, geschwollene Lymphknoten und eine oft wochenlang anhaltende Müdigkeit. Die Übertragung erfolgt vor allem über Speichel.",
          en: "Infectious mononucleosis is an infection usually caused by the Epstein-Barr virus, often affecting adolescents and young adults. Typical features are marked sore throat with coated tonsils, fever, swollen lymph nodes and fatigue that often lasts for weeks. It is transmitted mainly through saliva." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose & Behandlung", en: "Diagnosis & treatment" } },
        { t: "p", text: {
          de: "Die Diagnose stützt sich auf das Beschwerdebild und eine Blutuntersuchung. Eine ursächliche Therapie gibt es nicht; behandelt wird unterstützend mit Ruhe, Flüssigkeit sowie Schmerz- und Fiebermitteln. Antibiotika sind wirkungslos und können sogar einen Hautausschlag auslösen; sie sind nur bei einer nachgewiesenen zusätzlichen bakteriellen Infektion sinnvoll.",
          en: "Diagnosis rests on the symptom picture and a blood test. There is no causal therapy; treatment is supportive with rest, fluids and pain and fever medicines. Antibiotics are ineffective and can even trigger a skin rash; they are useful only for a proven additional bacterial infection." } },
        { t: "sub", text: { de: "Wichtiger Hinweis zur Milz", en: "Important note on the spleen" } },
        { t: "p", text: {
          de: "Da die Milz anschwellen kann, sollten Kontaktsportarten und schweres Heben für einige Wochen vermieden werden, um einen seltenen Milzriss zu verhindern. Plötzliche starke Bauchschmerzen links oben erfordern eine sofortige ärztliche Abklärung.",
          en: "As the spleen can enlarge, contact sports and heavy lifting should be avoided for some weeks to prevent a rare splenic rupture. Sudden severe pain in the upper left abdomen requires immediate medical assessment." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend helfen ausreichend Ruhe, Flüssigkeit, weiche Kost bei Halsschmerzen und Geduld, da die Erholung länger dauern kann. Pflanzliche Halsmittel sind ärztlich abzustimmen. Überlastung während der Genesung wird vermieden.",
          en: "As support, adequate rest, fluids, soft food for a sore throat and patience help, as recovery can take longer. Herbal throat remedies should be agreed with your doctor. Overexertion during recovery is avoided." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden anhaltende Erschöpfung und Lymphknotenschwellungen Mustern wie Feuchtigkeit-Hitze oder Qi-Schwäche zugeordnet. Akupunktur und Kräuter kommen begleitend in der Erholungsphase und unter qualifizierter Aufsicht infrage.",
          en: "In TCM, persistent fatigue and swollen lymph nodes are assigned to patterns such as damp-heat or Qi deficiency. Acupuncture and herbs may be used as complementary care during recovery and under qualified supervision." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf Ruhe, leicht verdauliche Kost und einen geregelten Tagesrhythmus zur Unterstützung der Erholung. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support relies on rest, easily digestible food and a regular daily rhythm to aid recovery. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Wegen der möglichen Milzschwellung sind Kontaktsport und intensive Belastung zunächst zu meiden. Der Wiederaufbau der körperlichen Aktivität erfolgt sehr behutsam und schrittweise, angepasst an die oft länger anhaltende Erschöpfung.",
          en: "Because of possible spleen enlargement, contact sport and intense exertion should be avoided at first. Rebuilding physical activity is very gentle and gradual, matched to the often prolonged fatigue." } },
      ],
    },
  },

  {
    slug: "herpes-simplex-infection",
    icd10: "B00.9",
    illustration: "generic",
    title: { de: "Herpes-simplex-Infektion", en: "Herpes Simplex Infection" },
    summary: {
      de: "Durch Herpesviren ausgelöste, wiederkehrende Bläschen an Lippen oder Haut.",
      en: "Recurrent blisters on the lips or skin caused by herpes viruses.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Herpes-simplex-Infektion wird durch Herpes-simplex-Viren verursacht und äußert sich meist als schmerzhafte, gruppierte Bläschen an den Lippen (Lippenherpes) oder an anderen Hautstellen. Nach der ersten Ansteckung verbleibt das Virus lebenslang im Körper und kann bei Auslösern wie Infekten, Stress, Sonnenlicht oder einem geschwächten Immunsystem erneut aufflammen.",
          en: "Herpes simplex infection is caused by herpes simplex viruses and usually appears as painful, grouped blisters on the lips (cold sores) or other areas of skin. After the first infection the virus remains in the body for life and can flare again with triggers such as infections, stress, sunlight or a weakened immune system." } },
      ],
      medical: [
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Leichte Ausbrüche heilen meist von selbst; antivirale Cremes oder Tabletten können, früh angewendet, die Dauer verkürzen. Bei häufigen oder schweren Verläufen kann eine vorbeugende antivirale Behandlung sinnvoll sein. Antibiotika wirken nicht gegen das Virus.",
          en: "Mild outbreaks usually heal on their own; antiviral creams or tablets can shorten their duration when applied early. For frequent or severe episodes, preventive antiviral treatment may be worthwhile. Antibiotics have no effect against the virus." } },
        { t: "sub", text: { de: "Ansteckung & Warnzeichen", en: "Transmission & warning signs" } },
        { t: "p", text: {
          de: "Während eines Ausbruchs ist das Virus ansteckend; Berührung der Bläschen, gemeinsames Geschirr und enger Kontakt – besonders mit Neugeborenen und abwehrgeschwächten Menschen – sollten vermieden werden. Eine Beteiligung des Auges oder ausgedehnte Ausbrüche erfordern eine ärztliche Abklärung.",
          en: "During an outbreak the virus is contagious; touching the blisters, sharing utensils and close contact – especially with newborns and immunocompromised people – should be avoided. Eye involvement or extensive outbreaks require medical assessment." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend können kühlende Auflagen, Lippenpflege und Sonnenschutz die Beschwerden lindern und Auslöser mindern. Ausreichend Schlaf und Stressbewältigung können die Häufigkeit verringern. Pflanzliche Mittel (z. B. Melisse) sind als Unterstützung möglich und ärztlich abzustimmen.",
          en: "As support, cooling compresses, lip care and sun protection can ease symptoms and reduce triggers. Adequate sleep and stress management may lower the frequency. Herbal products (e.g. lemon balm) are possible as support and should be agreed with your doctor." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden wiederkehrende Bläschen häufig als Feuchtigkeit-Hitze gedeutet. Akupunktur und Kräuter kommen begleitend und unter qualifizierter Aufsicht infrage und ersetzen bei Bedarf die antivirale Behandlung nicht.",
          en: "In TCM, recurrent blisters are often interpreted as damp-heat. Acupuncture and herbs may be used as complementary care under qualified supervision and, where needed, do not replace antiviral treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf Stressreduktion, eine ausgewogene Ernährung und kühlende, beruhigende Maßnahmen. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support relies on stress reduction, a balanced diet and cooling, soothing measures. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt die Infektion nicht. Allgemein förderlich sind regelmäßige Bewegung, guter Schlaf und Stressbewältigung, die das Immunsystem unterstützen und Auslöser für neue Ausbrüche verringern können.",
          en: "Physiotherapy does not treat the infection. Generally helpful are regular activity, good sleep and stress management, which support the immune system and can reduce triggers for new outbreaks." } },
      ],
    },
  },

  {
    slug: "chickenpox-varicella",
    icd10: "B01.9",
    illustration: "generic",
    title: { de: "Windpocken (Varizellen)", en: "Chickenpox (Varicella)" },
    summary: {
      de: "Hochansteckende Viruserkrankung mit juckendem Bläschenausschlag; eine Impfung schützt.",
      en: "A highly contagious viral illness with an itchy blistering rash; a vaccine protects.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Windpocken sind eine hochansteckende Erkrankung durch das Varizella-Zoster-Virus. Typisch ist ein juckender Ausschlag mit roten Flecken, Bläschen und Krusten, die in Schüben und gleichzeitig nebeneinander auftreten, begleitet von Fieber und Krankheitsgefühl. Das Virus verbleibt im Körper und kann später als Gürtelrose (Herpes Zoster) wieder auftreten.",
          en: "Chickenpox is a highly contagious illness caused by the varicella-zoster virus. Typical is an itchy rash with red spots, blisters and crusts appearing in waves and side by side, with fever and malaise. The virus remains in the body and can later reappear as shingles (herpes zoster)." } },
      ],
      medical: [
        { t: "sub", text: { de: "Behandlung & Impfung", en: "Treatment & vaccination" } },
        { t: "p", text: {
          de: "Bei gesunden Kindern verläuft die Erkrankung meist mild und wird unterstützend behandelt (juckreizlindernde Maßnahmen, Fiebermittel, kurze Fingernägel gegen Kratzen). Bei Erwachsenen, Schwangeren und abwehrgeschwächten Menschen kann der Verlauf schwerer sein und eine antivirale Behandlung erforderlich machen. Eine Impfung schützt zuverlässig und wird im Kindesalter empfohlen.",
          en: "In healthy children the illness is usually mild and treated supportively (measures to ease itching, fever medicines, short fingernails against scratching). In adults, pregnant women and immunocompromised people the course can be more severe and may require antiviral treatment. A vaccine protects reliably and is recommended in childhood." } },
        { t: "sub", text: { de: "Ansteckung & Meldung", en: "Transmission & notification" } },
        { t: "p", text: {
          de: "Windpocken sind bereits vor dem Ausschlag ansteckend, bis alle Bläschen verkrustet sind. Der Kontakt zu Schwangeren, Neugeborenen und abwehrgeschwächten Menschen ist zu meiden. Der Nachweis ist in Deutschland meldepflichtig.",
          en: "Chickenpox is contagious even before the rash until all blisters have crusted over. Contact with pregnant women, newborns and immunocompromised people should be avoided. Detection is notifiable in Germany." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend lindern kühlende, juckreizstillende Lotionen, lockere Kleidung, lauwarme Bäder und ausreichend Flüssigkeit die Beschwerden. Kratzen sollte vermieden werden, um Narben und zusätzliche Infektionen zu verhindern. Pflanzliche Mittel sind ärztlich abzustimmen.",
          en: "As support, cooling, anti-itch lotions, loose clothing, lukewarm baths and adequate fluids ease symptoms. Scratching should be avoided to prevent scarring and additional infection. Herbal products should be agreed with your doctor." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden juckende Ausschläge häufig als Wind-Hitze oder Feuchtigkeit-Hitze gedeutet. Begleitende Verfahren kommen nur unter qualifizierter Aufsicht infrage und ersetzen die Impfung und eine gegebenenfalls nötige Behandlung nicht.",
          en: "In TCM, itchy rashes are often interpreted as Wind-Heat or damp-heat. Complementary approaches are used only under qualified supervision and replace neither vaccination nor any treatment that may be needed." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf kühlende, beruhigende Hautpflege, leicht verdauliche Kost und Ruhe. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support relies on cooling, soothing skin care, easily digestible food and rest. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt die Infektion nicht. Wichtig sind Schonung während des Fiebers und eine schrittweise Rückkehr zu Spiel und Bewegung nach dem Verkrusten aller Bläschen und dem Abklingen der Beschwerden.",
          en: "Physiotherapy does not treat the infection. What matters is rest during fever and a gradual return to play and activity once all blisters have crusted and symptoms subside." } },
      ],
    },
  },

  {
    slug: "measles",
    icd10: "B05.9",
    illustration: "generic",
    title: { de: "Masern", en: "Measles" },
    summary: {
      de: "Hochansteckende Viruserkrankung mit Fieber und Ausschlag; die Impfung schützt zuverlässig.",
      en: "A highly contagious viral illness with fever and rash; vaccination protects reliably.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Masern sind eine hochansteckende Viruserkrankung. Nach erkältungsähnlichen Beschwerden mit hohem Fieber, Schnupfen, Husten und Bindehautentzündung folgt der typische großfleckige Hautausschlag, der hinter den Ohren beginnt. Masern schwächen das Immunsystem und können zu ernsten Komplikationen wie Lungen- oder Gehirnentzündung führen.",
          en: "Measles is a highly contagious viral illness. After cold-like symptoms with high fever, runny nose, cough and conjunctivitis, the typical blotchy rash follows, beginning behind the ears. Measles weakens the immune system and can lead to serious complications such as pneumonia or encephalitis." } },
      ],
      medical: [
        { t: "sub", text: { de: "Behandlung & Impfpflicht", en: "Treatment & vaccination requirement" } },
        { t: "p", text: {
          de: "Eine ursächliche Therapie gibt es nicht; behandelt wird unterstützend. Antibiotika helfen nur bei einer zusätzlichen bakteriellen Komplikation. Die MMR-Impfung schützt zuverlässig; in Deutschland besteht für Kinder in Gemeinschaftseinrichtungen und für bestimmtes Personal eine Masern-Impfpflicht (Masernschutzgesetz).",
          en: "There is no causal therapy; treatment is supportive. Antibiotics help only for an additional bacterial complication. The MMR vaccine protects reliably; in Germany there is a measles vaccination requirement for children in community facilities and for certain staff (Measles Protection Act)." } },
        { t: "sub", text: { de: "Meldung & Warnzeichen", en: "Notification & warning signs" } },
        { t: "p", text: {
          de: "Masern sind hochansteckend und in Deutschland meldepflichtig; bei Verdacht sollte die Praxis vorab kontaktiert werden, um andere zu schützen. Zunehmende Atemnot, starke Schläfrigkeit, Krampfanfälle oder Verwirrtheit sind Alarmzeichen und erfordern sofortige ärztliche Hilfe.",
          en: "Measles is highly contagious and notifiable in Germany; if suspected, the practice should be contacted in advance to protect others. Increasing breathlessness, marked drowsiness, seizures or confusion are alarm signs and require immediate medical help." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend helfen Ruhe, ausreichend Flüssigkeit, abgedunkelte Räume bei Lichtempfindlichkeit und fiebersenkende Maßnahmen nach ärztlicher Absprache. Pflanzliche Mittel sind ärztlich abzustimmen und ersetzen die Impfung nicht.",
          en: "As support, rest, adequate fluids, dimmed rooms for light sensitivity and fever-reducing measures after medical advice help. Herbal products should be agreed with your doctor and do not replace vaccination." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden fieberhafte Ausschläge über Muster von Hitze gedeutet. Begleitende Verfahren kommen allenfalls unterstützend und unter qualifizierter Aufsicht infrage und ersetzen Impfung und ärztliche Überwachung nicht.",
          en: "In TCM, febrile rashes are interpreted through patterns of heat. Complementary approaches are considered supportive at most and under qualified supervision and replace neither vaccination nor medical monitoring." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf Ruhe, kühlende und leicht verdauliche Kost sowie ausreichend Flüssigkeit. Kräuterpräparate sind ärztlich zu prüfen und ersetzen die medizinische Versorgung nicht.",
          en: "Ayurvedic support relies on rest, cooling and easily digestible food and adequate fluids. Herbal preparations should be medically reviewed and do not replace medical care." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt die Infektion nicht. Im Vordergrund steht die Schonung; nach dem Abklingen unterstützt ein behutsamer, schrittweiser Wiederaufbau der Aktivität die vollständige Erholung.",
          en: "Physiotherapy does not treat the infection. The priority is rest; after it subsides, a gentle, gradual rebuilding of activity supports full recovery." } },
      ],
    },
  },

  {
    slug: "mumps",
    icd10: "B26.9",
    illustration: "generic",
    title: { de: "Mumps", en: "Mumps" },
    summary: {
      de: "Viruserkrankung mit schmerzhafter Schwellung der Ohrspeicheldrüsen; die Impfung schützt.",
      en: "A viral illness with painful swelling of the parotid glands; vaccination protects.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Mumps ist eine Viruserkrankung, die vor allem die Ohrspeicheldrüsen betrifft. Typisch sind eine ein- oder beidseitige schmerzhafte Schwellung der Wangen- und Kieferregion, Fieber und Kauschmerzen. Mögliche Komplikationen sind unter anderem eine Hoden- oder Hirnhautentzündung.",
          en: "Mumps is a viral illness that mainly affects the parotid glands. Typical features are painful swelling of the cheek and jaw region on one or both sides, fever and pain on chewing. Possible complications include inflammation of the testicles or of the meninges." } },
      ],
      medical: [
        { t: "sub", text: { de: "Behandlung & Impfung", en: "Treatment & vaccination" } },
        { t: "p", text: {
          de: "Eine ursächliche Therapie gibt es nicht; behandelt wird unterstützend mit Schmerz- und Fiebermitteln, weicher Kost und ausreichend Flüssigkeit. Antibiotika sind wirkungslos. Die MMR-Impfung schützt zuverlässig und ist die wichtigste Vorbeugung.",
          en: "There is no causal therapy; treatment is supportive with pain and fever medicines, soft food and adequate fluids. Antibiotics are ineffective. The MMR vaccine protects reliably and is the most important prevention." } },
        { t: "sub", text: { de: "Meldung & Warnzeichen", en: "Notification & warning signs" } },
        { t: "p", text: {
          de: "Mumps ist in Deutschland meldepflichtig. Starke Kopfschmerzen mit Nackensteife, Schläfrigkeit, starke Hodenschmerzen oder Hörprobleme erfordern eine rasche ärztliche Abklärung.",
          en: "Mumps is notifiable in Germany. Severe headache with neck stiffness, drowsiness, severe testicular pain or hearing problems require prompt medical assessment." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend helfen kühlende Auflagen auf die geschwollenen Drüsen, weiche Kost, ausreichend Flüssigkeit und das Meiden saurer Speisen, die den Speichelfluss anregen. Pflanzliche Mittel sind ärztlich abzustimmen und ersetzen die Impfung nicht.",
          en: "As support, cooling compresses on the swollen glands, soft food, adequate fluids and avoiding sour foods that stimulate saliva help. Herbal products should be agreed with your doctor and do not replace vaccination." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird die Drüsenschwellung häufig als Wind-Hitze mit Stagnation gedeutet. Begleitende Verfahren kommen nur unter qualifizierter Aufsicht infrage und ersetzen die Impfung und ärztliche Versorgung nicht.",
          en: "In TCM, the glandular swelling is often interpreted as Wind-Heat with stagnation. Complementary approaches are used only under qualified supervision and replace neither vaccination nor medical care." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf Ruhe, kühlende Auflagen, leicht verdauliche Kost und ausreichend Flüssigkeit. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support relies on rest, cooling compresses, easily digestible food and adequate fluids. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt die Infektion nicht. Wichtig sind Schonung im akuten Stadium und eine schrittweise Rückkehr zur Aktivität nach dem Abklingen der Schwellung und des Fiebers.",
          en: "Physiotherapy does not treat the infection. What matters is rest in the acute stage and a gradual return to activity once the swelling and fever subside." } },
      ],
    },
  },

  {
    slug: "rubella",
    icd10: "B06.9",
    illustration: "generic",
    title: { de: "Röteln", en: "Rubella" },
    summary: {
      de: "Meist milde Viruserkrankung mit Ausschlag – in der Schwangerschaft aber gefährlich fürs Kind.",
      en: "A usually mild viral illness with rash – but dangerous for the unborn child in pregnancy.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Röteln sind eine meist milde Viruserkrankung mit einem feinfleckigen Ausschlag, leichtem Fieber und geschwollenen Lymphknoten, besonders im Nacken. Ihre größte Gefahr besteht in der Schwangerschaft: Eine Ansteckung in den ersten Monaten kann beim ungeborenen Kind schwere Fehlbildungen verursachen (Rötelnembryopathie).",
          en: "Rubella is a usually mild viral illness with a fine rash, slight fever and swollen lymph nodes, especially in the neck. Its greatest danger is in pregnancy: infection in the early months can cause severe malformations in the unborn child (congenital rubella syndrome)." } },
      ],
      medical: [
        { t: "sub", text: { de: "Behandlung & Impfung", en: "Treatment & vaccination" } },
        { t: "p", text: {
          de: "Eine ursächliche Behandlung gibt es nicht; die Beschwerden werden unterstützend gelindert. Antibiotika sind wirkungslos. Die MMR-Impfung schützt zuverlässig und ist besonders wichtig, um einen ausreichenden Schutz vor einer Schwangerschaft sicherzustellen.",
          en: "There is no causal treatment; symptoms are eased supportively. Antibiotics are ineffective. The MMR vaccine protects reliably and is especially important to ensure adequate protection before pregnancy." } },
        { t: "sub", text: { de: "Meldung & Schwangerschaft", en: "Notification & pregnancy" } },
        { t: "p", text: {
          de: "Röteln sind in Deutschland meldepflichtig. Schwangere ohne sicheren Schutz sollten den Kontakt zu Erkrankten meiden und bei Verdacht umgehend ärztlichen Rat einholen.",
          en: "Rubella is notifiable in Germany. Pregnant women without confirmed protection should avoid contact with those who are ill and seek medical advice promptly if exposure is suspected." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend helfen Ruhe, ausreichend Flüssigkeit und fiebersenkende Maßnahmen nach ärztlicher Absprache. Pflanzliche Mittel sind ärztlich abzustimmen und ersetzen die Impfung nicht.",
          en: "As support, rest, adequate fluids and fever-reducing measures after medical advice help. Herbal products should be agreed with your doctor and do not replace vaccination." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden milde fieberhafte Ausschläge über Muster von Wind-Hitze gedeutet. Begleitende Verfahren kommen nur unterstützend infrage und ersetzen die Impfung nicht.",
          en: "In TCM, mild febrile rashes are interpreted through patterns of Wind-Heat. Complementary approaches are considered supportive only and do not replace vaccination." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf Ruhe, kühlende und leicht verdauliche Kost sowie ausreichend Flüssigkeit. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support relies on rest, cooling and easily digestible food and adequate fluids. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt die Infektion nicht. Wichtig sind Schonung im akuten Stadium und eine schrittweise Rückkehr zur Aktivität nach dem Abklingen der Beschwerden.",
          en: "Physiotherapy does not treat the infection. What matters is rest in the acute stage and a gradual return to activity once symptoms subside." } },
      ],
    },
  },

  {
    slug: "hand-foot-and-mouth-disease",
    icd10: "B08.4",
    illustration: "generic",
    title: { de: "Hand-Fuß-Mund-Krankheit", en: "Hand, Foot and Mouth Disease" },
    summary: {
      de: "Meist harmlose Viruserkrankung mit Bläschen an Händen, Füßen und im Mund, vor allem bei Kindern.",
      en: "A usually harmless viral illness with blisters on the hands, feet and in the mouth, mainly in children.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Hand-Fuß-Mund-Krankheit ist eine meist harmlose, durch Enteroviren verursachte Infektion, die vor allem Kinder betrifft. Typisch sind schmerzhafte Bläschen im Mund sowie ein Ausschlag mit Bläschen an Händen und Füßen, oft begleitet von leichtem Fieber und Appetitlosigkeit. Sie heilt in der Regel innerhalb weniger Tage von selbst.",
          en: "Hand, foot and mouth disease is a usually harmless infection caused by enteroviruses, affecting mainly children. Typical features are painful blisters in the mouth and a rash with blisters on the hands and feet, often with slight fever and loss of appetite. It usually heals on its own within a few days." } },
      ],
      medical: [
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Eine ursächliche Behandlung ist nicht nötig; im Vordergrund stehen die Linderung der Schmerzen und das Verhindern von Flüssigkeitsmangel. Kühle, weiche Speisen und ausreichend Trinken erleichtern die schmerzhafte Nahrungsaufnahme. Antibiotika sind wirkungslos.",
          en: "No causal treatment is needed; the focus is on easing pain and preventing fluid loss. Cool, soft foods and drinking enough make painful eating easier. Antibiotics are ineffective." } },
        { t: "sub", text: { de: "Hygiene & Warnzeichen", en: "Hygiene & warning signs" } },
        { t: "p", text: {
          de: "Sorgfältige Händehygiene begrenzt die Ausbreitung. Verweigert ein Kind über längere Zeit das Trinken oder zeigt es Zeichen einer Austrocknung, sollte ärztlicher Rat eingeholt werden.",
          en: "Careful hand hygiene limits spread. If a child refuses to drink for a longer period or shows signs of dehydration, medical advice should be sought." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend lindern kühle Getränke, weiche Kost und milde Mundpflege die Beschwerden. Saure oder scharfe Speisen werden gemieden. Pflanzliche Mittel sind ärztlich abzustimmen.",
          en: "As support, cool drinks, soft food and mild mouth care ease symptoms. Sour or spicy foods are avoided. Herbal products should be agreed with your doctor." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden Bläschen im Mund häufig als Feuchtigkeit-Hitze gedeutet. Begleitende Verfahren kommen nur behutsam und unter qualifizierter Aufsicht infrage.",
          en: "In TCM, mouth blisters are often interpreted as damp-heat. Complementary approaches are used only gently and under qualified supervision." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf kühlende, leicht verdauliche Kost, ausreichend Flüssigkeit und Ruhe. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support relies on cooling, easily digestible food, adequate fluids and rest. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt die Infektion nicht. Wichtig sind Schonung und ausreichend Flüssigkeit; nach dem Abklingen der Beschwerden kehren Kinder schrittweise zu Spiel und Alltag zurück.",
          en: "Physiotherapy does not treat the infection. What matters is rest and adequate fluids; once symptoms subside, children return gradually to play and everyday life." } },
      ],
    },
  },

  {
    slug: "lyme-borreliosis",
    icd10: "A69.2",
    illustration: "generic",
    title: { de: "Lyme-Borreliose", en: "Lyme Borreliosis" },
    summary: {
      de: "Durch Zecken übertragene bakterielle Infektion, oft mit Wanderröte; gut mit Antibiotika behandelbar.",
      en: "A tick-borne bacterial infection, often with a spreading rash; well treatable with antibiotics.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Lyme-Borreliose ist eine durch Zecken übertragene bakterielle Infektion. Ein frühes und häufiges Zeichen ist die Wanderröte – eine sich langsam ausbreitende, ringförmige Rötung um die Stichstelle. Unbehandelt kann die Erkrankung später Gelenke, Nervensystem oder Herz betreffen.",
          en: "Lyme borreliosis is a tick-borne bacterial infection. An early and common sign is erythema migrans – a slowly spreading, ring-shaped redness around the bite site. Untreated, the illness can later affect the joints, nervous system or heart." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose & Behandlung", en: "Diagnosis & treatment" } },
        { t: "p", text: {
          de: "Die typische Wanderröte erlaubt oft schon eine klinische Diagnose; in späteren Stadien helfen Bluttests. Da es sich um eine bakterielle Infektion handelt, wird sie mit Antibiotika behandelt, die bei frühem Beginn sehr gut wirken. Ein routinemäßiges Testen ohne Beschwerden oder eine vorsorgliche Antibiotikagabe nach jedem Zeckenstich ist in der Regel nicht sinnvoll.",
          en: "The typical erythema migrans often allows a clinical diagnosis; in later stages blood tests help. As this is a bacterial infection, it is treated with antibiotics, which work very well when started early. Routine testing without symptoms or precautionary antibiotics after every tick bite is generally not sensible." } },
        { t: "sub", text: { de: "Vorbeugung", en: "Prevention" } },
        { t: "p", text: {
          de: "Wichtig sind das Absuchen nach Zeckenstichen, das frühe und vollständige Entfernen von Zecken sowie das Beobachten der Stichstelle. Die Meldepflicht besteht in einigen Bundesländern. Gegen die Lyme-Borreliose gibt es keine Impfung.",
          en: "Important measures are checking for tick bites, removing ticks early and completely and watching the bite site. Notification is required in some federal states. There is no vaccine against Lyme borreliosis." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend unterstützen eine ausgewogene Ernährung, Ruhe und Erholung die Genesung. Pflanzliche Mittel sind ärztlich abzustimmen und ersetzen bei nachgewiesener Borreliose die Antibiotikatherapie nicht. Von unbewiesenen Langzeittherapien ist abzuraten.",
          en: "As support, a balanced diet, rest and recovery aid healing. Herbal products should be agreed with your doctor and, in proven Lyme disease, do not replace antibiotic therapy. Unproven long-term therapies are not advisable." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM können begleitende Beschwerden wie Gelenkschmerzen oder Erschöpfung über Muster von Feuchtigkeit und Qi-Schwäche gedeutet werden. Akupunktur kommt begleitend und unter qualifizierter Aufsicht infrage und ersetzt die Antibiotikatherapie nicht.",
          en: "In TCM, accompanying symptoms such as joint pain or fatigue may be interpreted through patterns of dampness and Qi deficiency. Acupuncture may be used as complementary care under qualified supervision and does not replace antibiotic therapy." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf eine ausgewogene Ernährung, geregelte Routinen und Erholung. Kräuterpräparate sind ärztlich zu prüfen und ersetzen die Antibiotikatherapie nicht.",
          en: "Ayurvedic support relies on a balanced diet, regular routines and recovery. Herbal preparations should be medically reviewed and do not replace antibiotic therapy." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Bei Gelenk- oder Nervenbeschwerden im Verlauf kann Physiotherapie helfen, Beweglichkeit, Kraft und Funktion wiederzuerlangen. Der Wiederaufbau der Belastbarkeit erfolgt schrittweise, ergänzend zur medizinischen Behandlung.",
          en: "For joint or nerve complaints during the course, physiotherapy can help restore mobility, strength and function. Rebuilding of capacity is gradual, complementing medical treatment." } },
      ],
    },
  },

  {
    slug: "tick-borne-encephalitis",
    icd10: "A84.1",
    illustration: "generic",
    title: { de: "Frühsommer-Meningoenzephalitis (FSME)", en: "Tick-Borne Encephalitis" },
    summary: {
      de: "Durch Zecken übertragene virale Hirnhaut- und Hirnentzündung; eine Impfung schützt.",
      en: "A tick-borne viral inflammation of the meninges and brain; a vaccine protects.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Frühsommer-Meningoenzephalitis (FSME) ist eine durch Zecken übertragene Viruserkrankung, die die Hirnhäute und das Gehirn betreffen kann. Nach einem oft grippeähnlichen ersten Abschnitt kann eine zweite Phase mit hohem Fieber, starken Kopfschmerzen, Nackensteife und neurologischen Ausfällen folgen. In Deutschland bestehen bekannte Risikogebiete.",
          en: "Tick-borne encephalitis (TBE) is a tick-borne viral illness that can affect the meninges and brain. After an often flu-like first stage, a second phase with high fever, severe headache, neck stiffness and neurological deficits may follow. Germany has recognised risk areas." } },
      ],
      medical: [
        { t: "sub", text: { de: "Behandlung & Impfung", en: "Treatment & vaccination" } },
        { t: "p", text: {
          de: "Eine ursächliche Therapie gegen das Virus gibt es nicht; behandelt wird unterstützend, bei schweren Verläufen im Krankenhaus. Antibiotika helfen nicht. Die wichtigste Vorbeugung ist die FSME-Impfung, die für Menschen in oder mit Aufenthalt in Risikogebieten empfohlen wird; zusätzlich schützt das Vermeiden und frühe Entfernen von Zecken.",
          en: "There is no causal therapy against the virus; treatment is supportive, in hospital for severe cases. Antibiotics do not help. The most important prevention is TBE vaccination, recommended for people in or visiting risk areas; avoiding and promptly removing ticks also protects." } },
        { t: "sub", text: { de: "Meldung & Warnzeichen", en: "Notification & warning signs" } },
        { t: "p", text: {
          de: "FSME ist in Deutschland meldepflichtig. Hohes Fieber mit starken Kopfschmerzen, Nackensteife, Verwirrtheit, Krampfanfällen oder Lähmungen sind Alarmzeichen und erfordern sofortige ärztliche Hilfe; im Notfall gilt der Notruf 112.",
          en: "TBE is notifiable in Germany. High fever with severe headache, neck stiffness, confusion, seizures or paralysis are alarm signs and require immediate medical help; in an emergency call 112." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend unterstützen Ruhe, ausreichend Flüssigkeit und eine reizarme Umgebung die Erholung. Pflanzliche Mittel sind ärztlich abzustimmen und ersetzen weder Impfung noch die notwendige medizinische Versorgung.",
          en: "As support, rest, adequate fluids and a low-stimulus environment aid recovery. Herbal products should be agreed with your doctor and replace neither vaccination nor necessary medical care." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM können anhaltende Erschöpfung und Kopfschmerzen in der Erholungsphase über entsprechende Muster gedeutet werden. Begleitende Verfahren kommen nur unter qualifizierter Aufsicht infrage und ersetzen die medizinische Behandlung nicht.",
          en: "In TCM, persistent fatigue and headache during recovery may be interpreted through corresponding patterns. Complementary approaches are used only under qualified supervision and do not replace medical treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung in der Erholungsphase setzt auf Ruhe, geregelte Routinen und eine stärkende, leicht verdauliche Kost. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support during recovery relies on rest, regular routines and a strengthening, easily digestible diet. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Nach einem schweren Verlauf mit neurologischen Ausfällen ist Physiotherapie ein wichtiger Bestandteil der Rehabilitation, um Beweglichkeit, Kraft, Gleichgewicht und Alltagsfunktionen wiederzugewinnen. Der Wiederaufbau erfolgt schrittweise und individuell angepasst.",
          en: "After a severe course with neurological deficits, physiotherapy is an important part of rehabilitation to regain mobility, strength, balance and everyday function. Rebuilding is gradual and individually adapted." } },
      ],
    },
  },

  {
    slug: "viral-hepatitis-a",
    icd10: "B15.9",
    illustration: "generic",
    title: { de: "Virushepatitis A", en: "Viral Hepatitis A" },
    summary: {
      de: "Über verunreinigte Lebensmittel übertragene Leberentzündung; sie heilt meist folgenlos aus.",
      en: "A liver inflammation spread through contaminated food; it usually heals without lasting effects.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Hepatitis A ist eine durch das Hepatitis-A-Virus verursachte Leberentzündung, die vor allem über verunreinigte Lebensmittel oder Wasser übertragen wird, häufig auf Reisen. Typisch sind Müdigkeit, Übelkeit, Appetitlosigkeit, Oberbauchbeschwerden und mitunter eine Gelbfärbung von Haut und Augen. Sie wird nicht chronisch und heilt meist vollständig aus.",
          en: "Hepatitis A is a liver inflammation caused by the hepatitis A virus, spread mainly through contaminated food or water, often while travelling. Typical features are fatigue, nausea, loss of appetite, upper-abdominal discomfort and sometimes yellowing of the skin and eyes. It does not become chronic and usually heals completely." } },
      ],
      medical: [
        { t: "sub", text: { de: "Behandlung & Impfung", en: "Treatment & vaccination" } },
        { t: "p", text: {
          de: "Eine spezifische antivirale Therapie gibt es nicht; behandelt wird unterstützend mit Schonung, ausreichend Flüssigkeit und dem Verzicht auf leberbelastende Stoffe wie Alkohol. Eine wirksame Impfung schützt und wird insbesondere vor Reisen in Regionen mit erhöhtem Risiko empfohlen.",
          en: "There is no specific antiviral therapy; treatment is supportive with rest, adequate fluids and avoiding liver-burdening substances such as alcohol. An effective vaccine protects and is recommended especially before travel to higher-risk regions." } },
        { t: "sub", text: { de: "Hygiene & Meldung", en: "Hygiene & notification" } },
        { t: "p", text: {
          de: "Sorgfältige Händehygiene und Lebensmittelhygiene begrenzen die Ausbreitung. Hepatitis A ist in Deutschland meldepflichtig.",
          en: "Careful hand and food hygiene limit spread. Hepatitis A is notifiable in Germany." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend unterstützen Ruhe, ausreichend Flüssigkeit, eine leichte, fettarme Kost und strikter Alkoholverzicht die Erholung der Leber. Pflanzliche Mittel sind wegen möglicher Leberbelastung besonders sorgfältig ärztlich zu prüfen.",
          en: "As support, rest, adequate fluids, a light, low-fat diet and strict avoidance of alcohol aid liver recovery. Herbal products need particularly careful medical review because of possible strain on the liver." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird eine Leberentzündung häufig als Feuchtigkeit-Hitze in Leber und Gallenblase gedeutet. Begleitende Verfahren kommen nur unter qualifizierter Aufsicht infrage; Kräuter sind wegen möglicher Leberbelastung besonders kritisch zu prüfen.",
          en: "In TCM, liver inflammation is often interpreted as damp-heat in the Liver and Gallbladder. Complementary approaches are used only under qualified supervision; herbs require especially critical review because of possible strain on the liver." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf eine leichte, leberschonende Ernährung, ausreichend Flüssigkeit und Ruhe. Kräuterpräparate sind wegen möglicher Leberbelastung besonders sorgfältig ärztlich zu prüfen.",
          en: "Ayurvedic support relies on a light, liver-sparing diet, adequate fluids and rest. Herbal preparations need particularly careful medical review because of possible strain on the liver." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt die Infektion nicht. Im Vordergrund stehen Schonung während der akuten Phase und ein behutsamer, schrittweiser Wiederaufbau der körperlichen Belastung entsprechend der zurückkehrenden Kraft.",
          en: "Physiotherapy does not treat the infection. The priorities are rest during the acute phase and a gentle, gradual rebuilding of physical activity in line with returning strength." } },
      ],
    },
  },

  {
    slug: "viral-hepatitis-b",
    icd10: "B16.9",
    illustration: "generic",
    title: { de: "Virushepatitis B", en: "Viral Hepatitis B" },
    summary: {
      de: "Virusbedingte Leberentzündung, die chronisch werden kann; eine Impfung schützt zuverlässig.",
      en: "A virus-related liver inflammation that can become chronic; a vaccine protects reliably.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Hepatitis B ist eine durch das Hepatitis-B-Virus verursachte Leberentzündung, die über Blut und andere Körperflüssigkeiten sowie beim Geschlechtsverkehr übertragen wird. Sie kann akut verlaufen und ausheilen, bei einem Teil der Betroffenen aber chronisch werden und langfristig zu Leberschäden bis hin zu Leberzirrhose oder Leberkrebs führen.",
          en: "Hepatitis B is a liver inflammation caused by the hepatitis B virus, transmitted through blood and other body fluids and during sexual contact. It can run an acute course and heal, but in some people becomes chronic and, over the long term, can lead to liver damage up to cirrhosis or liver cancer." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose & Behandlung", en: "Diagnosis & treatment" } },
        { t: "p", text: {
          de: "Die Diagnose erfolgt über Blutuntersuchungen. Eine akute Hepatitis B heilt bei Erwachsenen häufig von selbst aus. Bei chronischem Verlauf stehen wirksame antivirale Medikamente zur Verfügung, die das Virus unterdrücken und Folgeschäden vorbeugen; die Behandlung wird ärztlich gesteuert und überwacht.",
          en: "Diagnosis is by blood tests. Acute hepatitis B often heals on its own in adults. For a chronic course, effective antiviral medicines are available that suppress the virus and prevent long-term damage; treatment is medically directed and monitored." } },
        { t: "sub", text: { de: "Impfung, Prävention & Meldung", en: "Vaccination, prevention & notification" } },
        { t: "p", text: {
          de: "Eine sichere Impfung schützt und wird im Kindesalter allgemein empfohlen. Safer Sex und der Schutz vor Blutkontakten verringern das Übertragungsrisiko. Das Testen und Beraten von Partnerinnen und Partnern ist wichtig. Hepatitis B ist in Deutschland meldepflichtig.",
          en: "A safe vaccine protects and is generally recommended in childhood. Safer sex and protection from blood contact reduce the risk of transmission. Testing and advising partners is important. Hepatitis B is notifiable in Germany." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend unterstützen eine ausgewogene, leberschonende Ernährung, strikter Alkoholverzicht und Erholung. Pflanzliche Mittel sind wegen möglicher Leberbelastung und Wechselwirkungen mit antiviralen Medikamenten besonders sorgfältig ärztlich zu prüfen und ersetzen die Behandlung nicht.",
          en: "As support, a balanced, liver-sparing diet, strict avoidance of alcohol and recovery help. Herbal products need particularly careful medical review because of possible liver strain and interactions with antiviral medicines and do not replace treatment." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird eine chronische Leberentzündung häufig über Muster von Feuchtigkeit-Hitze oder Qi-Stagnation gedeutet. Begleitende Verfahren kommen nur unter qualifizierter Aufsicht infrage; Kräuter sind wegen möglicher Leberbelastung besonders kritisch zu prüfen und ersetzen die antivirale Therapie nicht.",
          en: "In TCM, chronic liver inflammation is often interpreted through patterns of damp-heat or Qi stagnation. Complementary approaches are used only under qualified supervision; herbs require especially critical review because of possible liver strain and do not replace antiviral therapy." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf eine leberschonende Ernährung, geregelte Routinen und Alkoholverzicht. Kräuterpräparate sind wegen möglicher Leberbelastung und Wechselwirkungen besonders sorgfältig ärztlich zu prüfen.",
          en: "Ayurvedic support relies on a liver-sparing diet, regular routines and avoiding alcohol. Herbal preparations need particularly careful medical review because of possible liver strain and interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt die Infektion nicht. Regelmäßige, moderate Bewegung entsprechend der Belastbarkeit unterstützt das allgemeine Wohlbefinden; nach einer akuten Phase erfolgt der Wiederaufbau der Aktivität schrittweise.",
          en: "Physiotherapy does not treat the infection. Regular, moderate activity matched to capacity supports general wellbeing; after an acute phase, activity is rebuilt gradually." } },
      ],
    },
  },

  {
    slug: "viral-hepatitis-c",
    icd10: "B18.2",
    illustration: "generic",
    title: { de: "Chronische Virushepatitis C", en: "Chronic Viral Hepatitis C" },
    summary: {
      de: "Chronische, über Blut übertragene Leberentzündung – heute mit Medikamenten meist heilbar.",
      en: "A chronic, blood-borne liver inflammation – today usually curable with medicines.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Hepatitis C ist eine durch das Hepatitis-C-Virus verursachte Leberentzündung, die vor allem über Blutkontakte übertragen wird. Sie verläuft häufig lange ohne deutliche Beschwerden und wird bei vielen Betroffenen chronisch, was langfristig zu Leberschäden führen kann. Umso wichtiger ist es, Risikopersonen gezielt zu testen.",
          en: "Hepatitis C is a liver inflammation caused by the hepatitis C virus, transmitted mainly through blood contact. It often runs for a long time without clear symptoms and becomes chronic in many people, which can lead to liver damage over the long term. This makes targeted testing of at-risk people all the more important." } },
      ],
      medical: [
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die Hepatitis C ist heute mit modernen, gut verträglichen antiviralen Medikamenten in den meisten Fällen innerhalb weniger Wochen heilbar. Die Behandlung wird ärztlich gesteuert; regelmäßige Kontrollen und der Verzicht auf Alkohol schützen die Leber zusätzlich.",
          en: "Hepatitis C is today curable in most cases within a few weeks using modern, well-tolerated antiviral medicines. Treatment is medically directed; regular monitoring and avoiding alcohol additionally protect the liver." } },
        { t: "sub", text: { de: "Prävention & Meldung", en: "Prevention & notification" } },
        { t: "p", text: {
          de: "Der Schutz vor Blutkontakten (z. B. keine gemeinsam genutzten Utensilien beim Drogenkonsum, hygienische Bedingungen bei Tätowierungen) beugt vor. Eine Impfung gibt es nicht. Das Testen und Beraten möglicher Kontaktpersonen ist wichtig. Hepatitis C ist in Deutschland meldepflichtig.",
          en: "Protection from blood contact (e.g. no shared drug-use equipment, hygienic conditions for tattoos) prevents transmission. There is no vaccine. Testing and advising possible contacts is important. Hepatitis C is notifiable in Germany." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend unterstützen eine leberschonende, ausgewogene Ernährung, strikter Alkoholverzicht und Erholung. Pflanzliche Mittel sind wegen möglicher Leberbelastung und Wechselwirkungen mit antiviralen Medikamenten besonders sorgfältig ärztlich zu prüfen und ersetzen die heilende Therapie nicht.",
          en: "As support, a liver-sparing, balanced diet, strict avoidance of alcohol and recovery help. Herbal products need particularly careful medical review because of possible liver strain and interactions with antiviral medicines and do not replace the curative therapy." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird die chronische Leberentzündung über Muster von Feuchtigkeit-Hitze oder Qi-Stagnation gedeutet. Begleitende Verfahren kommen nur unter qualifizierter Aufsicht infrage; Kräuter sind wegen möglicher Leberbelastung kritisch zu prüfen und ersetzen die antivirale Therapie nicht.",
          en: "In TCM, chronic liver inflammation is interpreted through patterns of damp-heat or Qi stagnation. Complementary approaches are used only under qualified supervision; herbs require critical review because of possible liver strain and do not replace antiviral therapy." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf eine leberschonende Ernährung, geregelte Routinen und Alkoholverzicht. Kräuterpräparate sind wegen möglicher Leberbelastung und Wechselwirkungen besonders sorgfältig ärztlich zu prüfen.",
          en: "Ayurvedic support relies on a liver-sparing diet, regular routines and avoiding alcohol. Herbal preparations need particularly careful medical review because of possible liver strain and interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt die Infektion nicht. Regelmäßige, moderate Bewegung entsprechend der Belastbarkeit unterstützt das allgemeine Wohlbefinden und die Lebensqualität während und nach der Behandlung.",
          en: "Physiotherapy does not treat the infection. Regular, moderate activity matched to capacity supports general wellbeing and quality of life during and after treatment." } },
      ],
    },
  },

  {
    slug: "hiv-infection",
    icd10: "B24",
    illustration: "generic",
    title: { de: "HIV-Infektion", en: "HIV Infection" },
    summary: {
      de: "Chronische Virusinfektion des Immunsystems – mit Therapie heute gut behandelbar und nicht übertragbar bei Virusfreiheit.",
      en: "A chronic viral infection of the immune system – today well treatable and non-transmissible when the virus is suppressed.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "HIV ist ein Virus, das das Immunsystem schwächt. Unbehandelt kann es über Jahre zu einer zunehmenden Abwehrschwäche und schließlich zum Krankheitsbild AIDS führen. Übertragen wird HIV vor allem über Blut, beim Geschlechtsverkehr und von der Mutter auf das Kind. Mit moderner Therapie ist HIV heute eine gut behandelbare chronische Erkrankung.",
          en: "HIV is a virus that weakens the immune system. Untreated, it can lead over years to increasing immune weakness and eventually to the disease picture of AIDS. HIV is transmitted mainly through blood, during sexual contact and from mother to child. With modern therapy, HIV is today a well-treatable chronic condition." } },
      ],
      medical: [
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die antiretrovirale Therapie unterdrückt das Virus dauerhaft, erhält das Immunsystem und ermöglicht eine normale Lebenserwartung. Ist das Virus unter Behandlung nicht mehr nachweisbar, wird HIV sexuell nicht übertragen. Die Therapie wird lebenslang eingenommen und ärztlich begleitet.",
          en: "Antiretroviral therapy suppresses the virus lastingly, preserves the immune system and enables a normal life expectancy. When the virus is undetectable under treatment, HIV is not transmitted sexually. The therapy is taken lifelong and medically supervised." } },
        { t: "sub", text: { de: "Prävention, Test & Meldung", en: "Prevention, testing & notification" } },
        { t: "p", text: {
          de: "Safer Sex, die Präexpositionsprophylaxe (PrEP) für Menschen mit erhöhtem Risiko sowie im Bedarfsfall die Postexpositionsprophylaxe schützen vor einer Ansteckung. Ein HIV-Test ermöglicht einen frühen Therapiebeginn; das Testen und Beraten von Partnerinnen und Partnern ist wichtig. In Deutschland besteht eine nicht-namentliche Meldepflicht. Die Beratung erfolgt vertraulich und ohne Wertung.",
          en: "Safer sex, pre-exposure prophylaxis (PrEP) for people at higher risk and, where needed, post-exposure prophylaxis protect against infection. An HIV test allows early treatment; testing and advising partners is important. In Germany there is a non-nominal notification duty. Counselling is confidential and non-judgemental." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend unterstützen eine ausgewogene Ernährung, Bewegung, guter Schlaf und Stressbewältigung das allgemeine Wohlbefinden. Pflanzliche Mittel (z. B. Johanniskraut) können die antiretrovirale Therapie schwächen und sind daher unbedingt ärztlich zu prüfen. Sie ersetzen die Behandlung niemals.",
          en: "As support, a balanced diet, activity, good sleep and stress management aid general wellbeing. Herbal products (e.g. St John's wort) can weaken antiretroviral therapy and must therefore be medically reviewed. They never replace treatment." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM können begleitende Beschwerden über Muster von Qi- und Yin-Schwäche gedeutet werden. Akupunktur kann das Wohlbefinden unterstützen; Kräuter sind wegen möglicher Wechselwirkungen mit der antiretroviralen Therapie kritisch zu prüfen und ersetzen sie nicht.",
          en: "In TCM, accompanying symptoms may be interpreted through patterns of Qi and Yin deficiency. Acupuncture can support wellbeing; herbs require critical review because of possible interactions with antiretroviral therapy and do not replace it." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf eine stärkende, ausgewogene Ernährung, geregelte Routinen und Stressreduktion. Kräuterpräparate sind wegen möglicher Wechselwirkungen mit der Therapie besonders sorgfältig ärztlich zu prüfen.",
          en: "Ayurvedic support relies on a strengthening, balanced diet, regular routines and stress reduction. Herbal preparations need particularly careful medical review because of possible interactions with therapy." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Regelmäßige, moderate Bewegung und Krafttraining unterstützen Fitness, Muskelerhalt, Knochengesundheit und Wohlbefinden. Ein individuell angepasstes Programm ist Teil eines gesunden Lebensstils, ergänzend zur medizinischen Therapie.",
          en: "Regular, moderate activity and resistance training support fitness, muscle maintenance, bone health and wellbeing. An individually adapted programme is part of a healthy lifestyle, complementing medical therapy." } },
      ],
    },
  },

  {
    slug: "genital-herpes",
    icd10: "A60.0",
    illustration: "generic",
    title: { de: "Genitalherpes", en: "Genital Herpes" },
    summary: {
      de: "Sexuell übertragbare, wiederkehrende Herpesinfektion im Genitalbereich; gut mit antiviralen Mitteln behandelbar.",
      en: "A sexually transmitted, recurrent herpes infection of the genital area; well treatable with antivirals.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Genitalherpes ist eine durch Herpes-simplex-Viren verursachte, sexuell übertragbare Infektion. Typisch sind schmerzhafte Bläschen und kleine Wunden im Genital- oder Analbereich, oft begleitet von Brennen und Juckreiz. Nach der ersten Ansteckung verbleibt das Virus im Körper und kann wiederkehren, meist in milderer Form.",
          en: "Genital herpes is a sexually transmitted infection caused by herpes simplex viruses. Typical features are painful blisters and small sores in the genital or anal area, often with burning and itching. After the first infection the virus remains in the body and can recur, usually in a milder form." } },
      ],
      medical: [
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Antivirale Medikamente lindern die Beschwerden, verkürzen Ausbrüche und können bei häufigen Rückfällen vorbeugend eingesetzt werden. Antibiotika wirken nicht. Eine ärztliche Beratung – insbesondere in der Schwangerschaft – ist wichtig, da eine Übertragung auf das Neugeborene vermieden werden muss.",
          en: "Antiviral medicines ease symptoms, shorten outbreaks and can be used preventively for frequent recurrences. Antibiotics have no effect. Medical advice – especially in pregnancy – is important, as transmission to the newborn must be avoided." } },
        { t: "sub", text: { de: "Prävention & Partner", en: "Prevention & partners" } },
        { t: "p", text: {
          de: "Kondome verringern das Übertragungsrisiko, schützen aber nicht vollständig. Während eines Ausbruchs ist die Ansteckungsgefahr am größten. Eine offene, wertfreie Information von Partnerinnen und Partnern und deren Beratung sind sinnvoll.",
          en: "Condoms reduce the risk of transmission but do not protect completely. The risk of infection is greatest during an outbreak. Open, non-judgemental information for partners and their counselling are sensible." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend können kühlende, pflegende Maßnahmen, lockere Kleidung, ausreichend Schlaf und Stressbewältigung Beschwerden lindern und Auslöser mindern. Pflanzliche Mittel sind ärztlich abzustimmen und ersetzen die antivirale Behandlung nicht.",
          en: "As support, cooling, soothing measures, loose clothing, adequate sleep and stress management can ease symptoms and reduce triggers. Herbal products should be agreed with your doctor and do not replace antiviral treatment." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden wiederkehrende genitale Bläschen häufig als Feuchtigkeit-Hitze im unteren Erwärmer gedeutet. Akupunktur und Kräuter kommen begleitend und unter qualifizierter Aufsicht infrage und ersetzen die antivirale Therapie nicht.",
          en: "In TCM, recurrent genital blisters are often interpreted as damp-heat in the lower burner. Acupuncture and herbs may be used as complementary care under qualified supervision and do not replace antiviral therapy." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf Stressreduktion, kühlende Maßnahmen und eine ausgewogene Ernährung. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support relies on stress reduction, cooling measures and a balanced diet. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt die Infektion nicht. Allgemein förderlich sind regelmäßige Bewegung, guter Schlaf und Stressbewältigung, die das Immunsystem unterstützen und Auslöser für neue Ausbrüche verringern können.",
          en: "Physiotherapy does not treat the infection. Generally helpful are regular activity, good sleep and stress management, which support the immune system and can reduce triggers for new outbreaks." } },
      ],
    },
  },

  {
    slug: "chlamydia-infection",
    icd10: "A56.9",
    illustration: "generic",
    title: { de: "Chlamydien-Infektion", en: "Chlamydia Infection" },
    summary: {
      de: "Häufige sexuell übertragbare bakterielle Infektion, oft ohne Beschwerden; gut mit Antibiotika behandelbar.",
      en: "A common sexually transmitted bacterial infection, often symptom-free; well treatable with antibiotics.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Chlamydien-Infektion ist eine der häufigsten sexuell übertragbaren bakteriellen Infektionen. Sie verläuft oft ohne oder mit nur geringen Beschwerden, kann aber Ausfluss, Brennen beim Wasserlassen oder Unterbauchschmerzen verursachen. Unbehandelt kann sie bei Frauen die Eileiter schädigen und zu Unfruchtbarkeit beitragen.",
          en: "Chlamydia is one of the most common sexually transmitted bacterial infections. It often runs without or with only minor symptoms but can cause discharge, burning on urination or lower-abdominal pain. Untreated, it can damage the fallopian tubes in women and contribute to infertility." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose & Behandlung", en: "Diagnosis & treatment" } },
        { t: "p", text: {
          de: "Die Diagnose erfolgt über einen Abstrich oder eine Urinprobe. Da es sich um eine bakterielle Infektion handelt, wird sie mit einem Antibiotikum behandelt, das in der Regel gut und rasch wirkt. Während der Behandlung und bis zum sicheren Ausheilen sollte auf Geschlechtsverkehr verzichtet werden.",
          en: "Diagnosis is by a swab or urine sample. As this is a bacterial infection, it is treated with an antibiotic that usually works well and quickly. Sexual contact should be avoided during treatment and until it has cleared." } },
        { t: "sub", text: { de: "Partner & Prävention", en: "Partners & prevention" } },
        { t: "p", text: {
          de: "Sexualpartnerinnen und -partner sollten mitbehandelt werden, um eine wiederholte gegenseitige Ansteckung zu vermeiden. Kondome senken das Risiko. Ein Screening wird jungen Frauen und in der Schwangerschaft angeboten. Die Beratung erfolgt vertraulich und ohne Wertung.",
          en: "Sexual partners should be treated too, to avoid repeated mutual reinfection. Condoms reduce the risk. Screening is offered to young women and in pregnancy. Counselling is confidential and non-judgemental." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend unterstützen eine ausgewogene Ernährung und allgemeine Gesundheitsförderung das Wohlbefinden. Pflanzliche Mittel sind ärztlich abzustimmen und ersetzen bei einer bakteriellen Infektion die Antibiotikatherapie nicht.",
          en: "As support, a balanced diet and general health promotion aid wellbeing. Herbal products should be agreed with your doctor and, in a bacterial infection, do not replace antibiotic therapy." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden Ausfluss und Unterbauchbeschwerden häufig als Feuchtigkeit-Hitze gedeutet. Begleitende Verfahren kommen nur unter qualifizierter Aufsicht infrage und ersetzen das notwendige Antibiotikum nicht.",
          en: "In TCM, discharge and lower-abdominal complaints are often interpreted as damp-heat. Complementary approaches are used only under qualified supervision and do not replace the necessary antibiotic." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf eine ausgewogene Ernährung und geregelte Routinen. Kräuterpräparate sind ärztlich zu prüfen und ersetzen die Antibiotikatherapie nicht.",
          en: "Ayurvedic support relies on a balanced diet and regular routines. Herbal preparations should be medically reviewed and do not replace antibiotic therapy." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt die Infektion nicht. Bei chronischen Unterbauch- oder Beckenbodenbeschwerden als möglicher Spätfolge kann eine gezielte Beckenboden- und Physiotherapie begleitend hilfreich sein.",
          en: "Physiotherapy does not treat the infection. For chronic lower-abdominal or pelvic-floor complaints as a possible late effect, targeted pelvic-floor and physiotherapy can be helpful as complementary care." } },
      ],
    },
  },

  {
    slug: "gonorrhea",
    icd10: "A54.9",
    illustration: "generic",
    title: { de: "Gonorrhö (Tripper)", en: "Gonorrhoea" },
    summary: {
      de: "Sexuell übertragbare bakterielle Infektion mit Ausfluss und Brennen; zunehmende Antibiotikaresistenzen.",
      en: "A sexually transmitted bacterial infection with discharge and burning; increasing antibiotic resistance.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Gonorrhö (Tripper) ist eine durch das Bakterium Neisseria gonorrhoeae verursachte, sexuell übertragbare Infektion. Typisch sind eitriger Ausfluss und Brennen beim Wasserlassen; sie kann aber auch – besonders bei Frauen – ohne deutliche Beschwerden verlaufen und Rachen oder Enddarm betreffen. Unbehandelt sind Komplikationen bis hin zur Unfruchtbarkeit möglich.",
          en: "Gonorrhoea is a sexually transmitted infection caused by the bacterium Neisseria gonorrhoeae. Typical features are pus-like discharge and burning on urination; it can, however – especially in women – run without clear symptoms and affect the throat or rectum. Untreated, complications up to infertility are possible." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose & Behandlung", en: "Diagnosis & treatment" } },
        { t: "p", text: {
          de: "Die Diagnose erfolgt über Abstrich oder Urinprobe. Behandelt wird mit einem gezielten Antibiotikum. Wegen zunehmender Antibiotikaresistenzen sind die Wahl des Mittels nach aktuellen Empfehlungen und eine Kontrolle des Behandlungserfolgs besonders wichtig.",
          en: "Diagnosis is by swab or urine sample. Treatment is with a targeted antibiotic. Because of increasing antibiotic resistance, choosing the medicine according to current recommendations and checking treatment success are especially important." } },
        { t: "sub", text: { de: "Partner & Prävention", en: "Partners & prevention" } },
        { t: "p", text: {
          de: "Sexualpartnerinnen und -partner sollten getestet und mitbehandelt werden. Bis zum sicheren Ausheilen ist auf Geschlechtsverkehr zu verzichten. Kondome senken das Risiko. Eine Testung auf weitere sexuell übertragbare Infektionen ist sinnvoll. Die Beratung erfolgt vertraulich und ohne Wertung.",
          en: "Sexual partners should be tested and treated too. Sexual contact should be avoided until it has cleared. Condoms reduce the risk. Testing for other sexually transmitted infections is sensible. Counselling is confidential and non-judgemental." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend unterstützen allgemeine Gesundheitsförderung und eine ausgewogene Ernährung das Wohlbefinden. Pflanzliche Mittel sind ärztlich abzustimmen und ersetzen die notwendige Antibiotikatherapie keinesfalls.",
          en: "As support, general health promotion and a balanced diet aid wellbeing. Herbal products should be agreed with your doctor and never replace the necessary antibiotic therapy." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden eitriger Ausfluss und Brennen häufig als Feuchtigkeit-Hitze gedeutet. Begleitende Verfahren kommen nur unter qualifizierter Aufsicht infrage und ersetzen das notwendige Antibiotikum nicht.",
          en: "In TCM, pus-like discharge and burning are often interpreted as damp-heat. Complementary approaches are used only under qualified supervision and do not replace the necessary antibiotic." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf eine ausgewogene Ernährung und geregelte Routinen. Kräuterpräparate sind ärztlich zu prüfen und ersetzen die Antibiotikatherapie nicht.",
          en: "Ayurvedic support relies on a balanced diet and regular routines. Herbal preparations should be medically reviewed and do not replace antibiotic therapy." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt die Infektion nicht. Bei chronischen Unterbauch- oder Beckenbodenbeschwerden als möglicher Spätfolge kann eine gezielte Beckenboden- und Physiotherapie begleitend hilfreich sein.",
          en: "Physiotherapy does not treat the infection. For chronic lower-abdominal or pelvic-floor complaints as a possible late effect, targeted pelvic-floor and physiotherapy can be helpful as complementary care." } },
      ],
    },
  },

  {
    slug: "syphilis",
    icd10: "A53.9",
    illustration: "generic",
    title: { de: "Syphilis", en: "Syphilis" },
    summary: {
      de: "Sexuell übertragbare bakterielle Infektion mit mehreren Stadien; früh erkannt gut mit Penicillin heilbar.",
      en: "A sexually transmitted bacterial infection with several stages; well curable with penicillin when found early.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Syphilis ist eine durch das Bakterium Treponema pallidum verursachte, sexuell übertragbare Infektion. Sie verläuft in Stadien: zunächst ein meist schmerzloses Geschwür an der Eintrittsstelle, später Hautausschläge und Allgemeinbeschwerden; unbehandelt kann sie nach Jahren Organe und das Nervensystem schädigen. Dazwischen liegen oft beschwerdefreie Phasen.",
          en: "Syphilis is a sexually transmitted infection caused by the bacterium Treponema pallidum. It runs in stages: first a usually painless ulcer at the entry site, later skin rashes and general symptoms; untreated, it can damage organs and the nervous system after years. Symptom-free phases often lie in between." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose & Behandlung", en: "Diagnosis & treatment" } },
        { t: "p", text: {
          de: "Die Diagnose erfolgt über Bluttests. Behandelt wird mit Penicillin, das in allen Stadien gut wirkt; die Dosierung richtet sich nach dem Stadium. Nach der Behandlung sind Kontrolluntersuchungen wichtig, um den Erfolg zu sichern.",
          en: "Diagnosis is by blood tests. Treatment is with penicillin, which works well at all stages; the dose depends on the stage. After treatment, follow-up checks are important to confirm success." } },
        { t: "sub", text: { de: "Partner, Prävention & Meldung", en: "Partners, prevention & notification" } },
        { t: "p", text: {
          de: "Sexualpartnerinnen und -partner sollten getestet und bei Bedarf mitbehandelt werden. Kondome senken das Risiko, und eine Testung in der Schwangerschaft schützt das Kind. In Deutschland besteht eine nicht-namentliche Meldepflicht. Die Beratung erfolgt vertraulich und ohne Wertung.",
          en: "Sexual partners should be tested and, if needed, treated too. Condoms reduce the risk, and testing in pregnancy protects the child. In Germany there is a non-nominal notification duty. Counselling is confidential and non-judgemental." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend unterstützen eine ausgewogene Ernährung und allgemeine Gesundheitsförderung das Wohlbefinden. Pflanzliche Mittel sind ärztlich abzustimmen und ersetzen die notwendige Penicillinbehandlung keinesfalls.",
          en: "As support, a balanced diet and general health promotion aid wellbeing. Herbal products should be agreed with your doctor and never replace the necessary penicillin treatment." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM können begleitende Haut- und Allgemeinbeschwerden über Muster von Hitze und Toxinen gedeutet werden. Begleitende Verfahren kommen nur unter qualifizierter Aufsicht infrage und ersetzen die antibiotische Behandlung nicht.",
          en: "In TCM, accompanying skin and general symptoms may be interpreted through patterns of heat and toxins. Complementary approaches are used only under qualified supervision and do not replace antibiotic treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf eine ausgewogene Ernährung und geregelte Routinen. Kräuterpräparate sind ärztlich zu prüfen und ersetzen die Penicillinbehandlung nicht.",
          en: "Ayurvedic support relies on a balanced diet and regular routines. Herbal preparations should be medically reviewed and do not replace penicillin treatment." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt die Infektion nicht. Bei neurologischen Spätfolgen einer unbehandelten Erkrankung kann Physiotherapie in der Rehabilitation unterstützen, ergänzend zur medizinischen Behandlung.",
          en: "Physiotherapy does not treat the infection. For neurological late effects of untreated disease, physiotherapy can support rehabilitation, complementing medical treatment." } },
      ],
    },
  },

  {
    slug: "candidiasis",
    icd10: "B37.9",
    illustration: "generic",
    title: { de: "Candidose (Pilzinfektion)", en: "Candidiasis" },
    summary: {
      de: "Durch Hefepilze (Candida) ausgelöste Infektion von Haut oder Schleimhäuten, oft begünstigt durch andere Faktoren.",
      en: "An infection of skin or mucous membranes from yeast (Candida), often favoured by other factors.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Candidose ist eine Infektion durch Hefepilze der Gattung Candida, die natürlicherweise auf Haut und Schleimhäuten vorkommen. Bei begünstigenden Faktoren wie feuchtem Milieu, Antibiotikaeinnahme, Diabetes oder geschwächtem Immunsystem können sie sich vermehren und etwa im Genitalbereich, in Hautfalten oder an Schleimhäuten Beschwerden mit Juckreiz, Rötung und weißlichem Belag verursachen.",
          en: "Candidiasis is an infection with yeasts of the Candida genus, which naturally live on skin and mucous membranes. With favouring factors such as a moist environment, antibiotic use, diabetes or a weakened immune system, they can multiply and cause symptoms with itching, redness and whitish coating, for example in the genital area, skin folds or on mucous membranes." } },
      ],
      medical: [
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Behandelt wird mit Antimykotika (pilzabtötende Mittel) als Creme, Zäpfchen oder Tabletten, je nach Ort und Ausmaß. Antibiotika sind wirkungslos und können eine Candidose sogar begünstigen. Wichtig ist, begünstigende Faktoren zu erkennen und zu behandeln, etwa einen schlecht eingestellten Diabetes.",
          en: "Treatment is with antifungals as cream, pessary or tablets, depending on site and extent. Antibiotics are ineffective and can even favour candidiasis. It is important to identify and treat favouring factors, such as poorly controlled diabetes." } },
        { t: "sub", text: { de: "Wiederkehrende Verläufe", en: "Recurrent courses" } },
        { t: "p", text: {
          de: "Bei häufigen Rückfällen oder ausgedehntem Befall sollte nach zugrunde liegenden Ursachen gesucht werden. Eine ausgeprägte oder wiederkehrende Candidose kann ein Hinweis auf eine Abwehrschwäche sein.",
          en: "For frequent recurrences or extensive involvement, underlying causes should be sought. Pronounced or recurrent candidiasis can be a sign of immune weakness." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend helfen trockene, luftige Hautverhältnisse, eine sanfte Hautpflege und eine ausgewogene Ernährung. Pflanzliche Mittel sind ärztlich abzustimmen und ersetzen bei behandlungsbedürftigem Befall die antimykotische Therapie nicht.",
          en: "As support, dry, airy skin conditions, gentle skin care and a balanced diet help. Herbal products should be agreed with your doctor and, for involvement that needs treatment, do not replace antifungal therapy." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird eine Pilzinfektion häufig als Feuchtigkeit-Hitze gedeutet. Begleitende Verfahren und Ernährungsempfehlungen kommen unterstützend infrage und ersetzen die antimykotische Behandlung nicht.",
          en: "In TCM, a fungal infection is often interpreted as damp-heat. Complementary approaches and dietary advice may be used as support and do not replace antifungal treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf eine ausgewogene Ernährung, Hygiene und ein trockenes Hautmilieu. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support relies on a balanced diet, hygiene and a dry skin environment. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt die Pilzinfektion nicht. Allgemeine Gesundheitsförderung, Bewegung und ein gut eingestellter Stoffwechsel (z. B. bei Diabetes) unterstützen die Abwehr und können Rückfällen vorbeugen.",
          en: "Physiotherapy does not treat the fungal infection. General health promotion, activity and well-controlled metabolism (e.g. in diabetes) support the body's defences and can help prevent recurrences." } },
      ],
    },
  },

  {
    slug: "oral-thrush",
    icd10: "B37.0",
    illustration: "generic",
    title: { de: "Mundsoor (orale Candidose)", en: "Oral Thrush" },
    summary: {
      de: "Hefepilzinfektion der Mundschleimhaut mit weißlichem Belag; häufig bei Säuglingen und Abwehrschwäche.",
      en: "A yeast infection of the oral mucosa with whitish coating; common in infants and with immune weakness.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Mundsoor ist eine Candida-Infektion der Mundschleimhaut. Typisch sind weißliche, abwischbare Beläge auf Zunge, Wangeninnenseiten und Gaumen, darunter gerötete Schleimhaut, mitunter Brennen und ein verändertes Geschmacksempfinden. Er tritt vermehrt bei Säuglingen, älteren Menschen, nach Antibiotika, bei Cortison-Sprays (Asthma) und bei Abwehrschwäche auf.",
          en: "Oral thrush is a Candida infection of the oral mucosa. Typical are whitish, wipeable coatings on the tongue, inner cheeks and palate, with reddened mucosa beneath, sometimes burning and an altered sense of taste. It occurs more often in infants, older people, after antibiotics, with cortisone sprays (asthma) and with immune weakness." } },
      ],
      medical: [
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Behandelt wird mit lokal wirkenden Antimykotika (z. B. Gel oder Suspension), bei ausgedehntem Befall auch mit Tabletten. Antibiotika wirken nicht und können den Soor begünstigen. Das Ausspülen des Mundes nach der Anwendung von Cortison-Sprays und eine gute Mundhygiene beugen vor.",
          en: "Treatment is with topical antifungals (e.g. gel or suspension), and with tablets for extensive involvement. Antibiotics do not work and can favour thrush. Rinsing the mouth after using cortisone sprays and good oral hygiene help prevent it." } },
        { t: "sub", text: { de: "Ursachen im Blick", en: "Keeping causes in view" } },
        { t: "p", text: {
          de: "Bei wiederholtem oder hartnäckigem Mundsoor sollte nach begünstigenden Ursachen gesucht werden, etwa einem schlecht eingestellten Diabetes oder einer Abwehrschwäche.",
          en: "For repeated or persistent oral thrush, favouring causes should be sought, such as poorly controlled diabetes or immune weakness." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend helfen eine gute, sanfte Mundhygiene, ausreichend Flüssigkeit und die Pflege von Zahnersatz. Pflanzliche oder Hausmittel sind ärztlich abzustimmen und ersetzen die antimykotische Behandlung nicht.",
          en: "As support, good, gentle oral hygiene, adequate fluids and care of dentures help. Herbal or home remedies should be agreed with your doctor and do not replace antifungal treatment." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird Mundsoor häufig als Feuchtigkeit-Hitze oder als Hitze durch eine Schwäche gedeutet. Begleitende Verfahren kommen unterstützend infrage und ersetzen die antimykotische Behandlung nicht.",
          en: "In TCM, oral thrush is often interpreted as damp-heat or as heat arising from a deficiency. Complementary approaches may be used as support and do not replace antifungal treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf Mundpflege, eine ausgewogene Ernährung und geregelte Routinen. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support relies on mouth care, a balanced diet and regular routines. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt die Pilzinfektion nicht. Allgemeine Gesundheitsförderung und die gute Einstellung von Grunderkrankungen unterstützen die Abwehr und können Rückfällen vorbeugen.",
          en: "Physiotherapy does not treat the fungal infection. General health promotion and good control of underlying conditions support the body's defences and can help prevent recurrences." } },
      ],
    },
  },

  {
    slug: "giardiasis",
    icd10: "A07.1",
    illustration: "generic",
    title: { de: "Giardiasis (Lambliasis)", en: "Giardiasis" },
    summary: {
      de: "Durch den Darmparasiten Giardia ausgelöste Infektion mit Durchfall und Blähungen, oft nach Reisen.",
      en: "An infection with the intestinal parasite Giardia causing diarrhoea and bloating, often after travel.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Giardiasis ist eine Infektion des Dünndarms mit dem einzelligen Parasiten Giardia, die vor allem über verunreinigtes Wasser oder Lebensmittel übertragen wird, häufig auf Reisen. Typisch sind anhaltender, oft breiiger Durchfall, Blähungen, Bauchkrämpfe, Übelkeit und mitunter Gewichtsverlust. Manche Menschen scheiden den Parasiten aus, ohne Beschwerden zu haben.",
          en: "Giardiasis is an infection of the small intestine with the single-celled parasite Giardia, transmitted mainly through contaminated water or food, often while travelling. Typical features are persistent, often loose diarrhoea, bloating, abdominal cramps, nausea and sometimes weight loss. Some people shed the parasite without having symptoms." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose & Behandlung", en: "Diagnosis & treatment" } },
        { t: "p", text: {
          de: "Die Diagnose erfolgt über eine Stuhluntersuchung. Behandelt wird mit gezielten Medikamenten gegen den Parasiten; parallel ist der Ausgleich von Flüssigkeit und Salzen wichtig. Antibiotika im klassischen Sinn gegen Bakterien sind nicht wirksam.",
          en: "Diagnosis is by stool examination. Treatment is with targeted medicines against the parasite; replacing fluids and salts is important alongside. Classic antibacterial antibiotics are not effective." } },
        { t: "sub", text: { de: "Hygiene & Meldung", en: "Hygiene & notification" } },
        { t: "p", text: {
          de: "Sorgfältige Hände- und Lebensmittelhygiene sowie sauberes Trinkwasser beugen vor. Der Nachweis ist in Deutschland meldepflichtig. Enge Kontaktpersonen mit Beschwerden sollten ebenfalls untersucht werden.",
          en: "Careful hand and food hygiene and clean drinking water prevent infection. Detection is notifiable in Germany. Close contacts with symptoms should also be examined." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend unterstützen ausreichend Flüssigkeit, leichte Kost und Ruhe die Erholung. Pflanzliche Mittel sind ärztlich abzustimmen und ersetzen die gezielte Behandlung gegen den Parasiten nicht.",
          en: "As support, adequate fluids, light food and rest aid recovery. Herbal products should be agreed with your doctor and do not replace the targeted treatment against the parasite." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden anhaltende Durchfälle und Blähungen häufig über eine Schwäche von Milz und Magen oder Feuchtigkeit gedeutet. Begleitende Verfahren kommen vor allem in der Erholungsphase infrage und ersetzen die gezielte Behandlung nicht.",
          en: "In TCM, persistent diarrhoea and bloating are often interpreted through a weakness of Spleen and Stomach or dampness. Complementary approaches are considered mainly during recovery and do not replace targeted treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt in der Erholungsphase auf leicht verdauliche, warme Kost, verdauungsfördernde Gewürze und ausreichend Flüssigkeit. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support relies during recovery on easily digestible, warm food, digestion-supporting spices and adequate fluids. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt die Infektion nicht. Wichtig sind Schonung und Flüssigkeitszufuhr in der akuten Phase sowie ein schrittweiser Wiederaufbau der Aktivität, bis Kraft und Gewicht zurückkehren.",
          en: "Physiotherapy does not treat the infection. What matters is rest and fluid intake in the acute phase and a gradual rebuilding of activity as strength and weight return." } },
      ],
    },
  },

  {
    slug: "pinworm-enterobiasis",
    icd10: "B80",
    illustration: "generic",
    title: { de: "Madenwürmer (Enterobiasis)", en: "Pinworm (Enterobiasis)" },
    summary: {
      de: "Häufiger, harmloser Wurmbefall des Darms mit nächtlichem Afterjucken, vor allem bei Kindern.",
      en: "A common, harmless intestinal worm infection with nocturnal anal itching, mainly in children.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Enterobiasis ist ein häufiger, meist harmloser Befall des Darms mit Madenwürmern, der vor allem Kinder betrifft. Die weiblichen Würmer legen nachts am After Eier ab, was zu nächtlichem Juckreiz und unruhigem Schlaf führt. Die Ansteckung erfolgt über verschluckte Eier, häufig durch Hand-zu-Mund-Kontakt.",
          en: "Enterobiasis is a common, usually harmless intestinal infection with pinworms, affecting mainly children. The female worms lay eggs around the anus at night, causing nocturnal itching and restless sleep. Infection occurs through swallowed eggs, often by hand-to-mouth contact." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose & Behandlung", en: "Diagnosis & treatment" } },
        { t: "p", text: {
          de: "Die Diagnose gelingt oft durch den Nachweis der Würmer oder Eier (z. B. mit einem morgendlichen Klebestreifentest am After). Behandelt wird mit einem gut wirksamen Wurmmittel, das meist wiederholt eingenommen wird. Häufig werden Familienmitglieder mitbehandelt, um eine erneute Ansteckung zu vermeiden.",
          en: "Diagnosis is often made by detecting the worms or eggs (e.g. with a morning adhesive-tape test at the anus). Treatment is with an effective anti-worm medicine, usually taken in repeated doses. Family members are often treated too, to avoid reinfection." } },
        { t: "sub", text: { de: "Hygiene", en: "Hygiene" } },
        { t: "p", text: {
          de: "Konsequente Händehygiene, kurze Fingernägel, das Wechseln von Unterwäsche und Bettzeug sowie das Waschen bei hohen Temperaturen unterbrechen den Ansteckungskreislauf und beugen Rückfällen vor.",
          en: "Consistent hand hygiene, short fingernails, changing underwear and bedding and washing at high temperatures interrupt the cycle of infection and prevent recurrences." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend sind vor allem Hygienemaßnahmen wirksam. Eine ausgewogene Ernährung unterstützt das allgemeine Wohlbefinden. Hausmittel sind ärztlich abzustimmen und ersetzen das gezielte Wurmmittel nicht.",
          en: "As support, hygiene measures are especially effective. A balanced diet supports general wellbeing. Home remedies should be agreed with your doctor and do not replace the targeted anti-worm medicine." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird ein Wurmbefall traditionell eigenen Mustern zugeordnet und mit Ernährungs- und Stärkungsmaßnahmen begleitet. Diese kommen unterstützend infrage und ersetzen das Wurmmittel und die Hygiene nicht.",
          en: "In TCM, a worm infection is traditionally assigned to its own patterns and supported with dietary and strengthening measures. These may be used as support and replace neither the anti-worm medicine nor hygiene." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf eine verdauungsfördernde Ernährung und geregelte Routinen. Kräuterpräparate, die traditionell gegen Würmer genutzt werden, sind ärztlich zu prüfen und ersetzen die gezielte Behandlung nicht.",
          en: "Ayurvedic support relies on a digestion-supporting diet and regular routines. Herbal preparations traditionally used against worms should be medically reviewed and do not replace targeted treatment." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie hat bei diesem Wurmbefall keine Rolle in der Behandlung. Regelmäßige Bewegung und ausreichend Schlaf unterstützen das allgemeine Wohlbefinden der betroffenen Kinder und Erwachsenen.",
          en: "Physiotherapy has no role in treating this worm infection. Regular activity and adequate sleep support the general wellbeing of the affected children and adults." } },
      ],
    },
  },

  {
    slug: "intestinal-parasitosis",
    icd10: "B82.9",
    illustration: "generic",
    title: { de: "Darmparasitose (Wurmbefall)", en: "Intestinal Parasitosis" },
    summary: {
      de: "Sammelbezeichnung für einen Darmbefall mit Würmern oder anderen Parasiten, oft reise- oder hygienebedingt.",
      en: "An umbrella term for intestinal infection with worms or other parasites, often travel- or hygiene-related.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Darmparasitose ist ein Sammelbegriff für einen Befall des Darms mit Würmern oder anderen Parasiten. Die Beschwerden sind vielfältig und reichen von beschwerdefrei über Bauchschmerzen, Durchfall, Blähungen und Übelkeit bis zu Gewichtsverlust oder Blutarmut. Die Ansteckung erfolgt je nach Erreger über verunreinigte Lebensmittel, Wasser, Boden oder engen Kontakt, häufig im Zusammenhang mit Reisen.",
          en: "Intestinal parasitosis is an umbrella term for an infection of the bowel with worms or other parasites. Symptoms vary widely, from none through abdominal pain, diarrhoea, bloating and nausea to weight loss or anaemia. Depending on the pathogen, infection occurs via contaminated food, water, soil or close contact, often in connection with travel." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose & Behandlung", en: "Diagnosis & treatment" } },
        { t: "p", text: {
          de: "Die Diagnose erfolgt meist über Stuhluntersuchungen, ergänzt durch Blutuntersuchungen und die Reise- und Ernährungsanamnese. Behandelt wird mit gezielten Medikamenten, die auf den jeweiligen Parasiten abgestimmt sind. Eine genaue Bestimmung des Erregers ist wichtig, da nicht jedes Mittel gegen jeden Parasiten wirkt.",
          en: "Diagnosis is usually by stool examinations, supplemented by blood tests and the travel and dietary history. Treatment is with targeted medicines matched to the particular parasite. Precise identification of the pathogen is important, as not every medicine works against every parasite." } },
        { t: "sub", text: { de: "Hygiene, Prävention & Meldung", en: "Hygiene, prevention & notification" } },
        { t: "p", text: {
          de: "Hände- und Lebensmittelhygiene, sauberes Trinkwasser und Vorsicht bei Rohkost auf Reisen beugen vor. Je nach Erreger bestehen Meldepflichten. Bei Beschwerden im Umfeld können weitere Personen untersucht werden.",
          en: "Hand and food hygiene, clean drinking water and caution with raw food while travelling prevent infection. Depending on the pathogen, notification duties apply. If others in the household have symptoms, they can be examined too." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend unterstützen ausreichend Flüssigkeit, eine leichte, ausgewogene Kost und Hygienemaßnahmen die Behandlung. Pflanzliche Mittel, die traditionell gegen Parasiten genutzt werden, sind ärztlich zu prüfen und ersetzen die gezielte Behandlung nicht.",
          en: "As support, adequate fluids, a light, balanced diet and hygiene measures aid treatment. Herbal products traditionally used against parasites should be medically reviewed and do not replace targeted treatment." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden Darmbeschwerden über Muster wie eine Schwäche von Milz und Magen oder Feuchtigkeit gedeutet. Begleitende Verfahren kommen vor allem in der Erholungsphase infrage und ersetzen die gezielte medizinische Behandlung nicht.",
          en: "In TCM, bowel complaints are interpreted through patterns such as a weakness of Spleen and Stomach or dampness. Complementary approaches are considered mainly during recovery and do not replace targeted medical treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf eine verdauungsfördernde, leicht verdauliche Ernährung und geregelte Routinen zur Unterstützung der Erholung. Kräuterpräparate sind ärztlich zu prüfen und ersetzen die gezielte Behandlung nicht.",
          en: "Ayurvedic support relies on a digestion-supporting, easily digestible diet and regular routines to aid recovery. Herbal preparations should be medically reviewed and do not replace targeted treatment." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt den Parasitenbefall nicht. In der Erholungsphase, besonders nach Gewichtsverlust oder längerer Erkrankung, unterstützt ein schrittweiser Wiederaufbau von Bewegung und Kraft die Rückkehr zur vollen Leistungsfähigkeit.",
          en: "Physiotherapy does not treat the parasitic infection. During recovery, especially after weight loss or a longer illness, a gradual rebuilding of activity and strength supports the return to full capacity." } },
      ],
    },
  },
]
