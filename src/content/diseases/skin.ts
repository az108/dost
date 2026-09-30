import type { Disease } from "@/content/treatments"

/**
 * Conditions for "Skin, Hair, Nails & Subcutaneous Tissue". This area is empty
 * on drdosthealth.com, so the content here is generated: original bilingual
 * prose (definition + the five treatment modalities) based on common ICD-10
 * dermatological conditions for a general/private practice. Every page is
 * reviewed by Dr. Dost before use; images are added later via the Gemini web
 * workflow and will carry the „KI-generiert" caption. For most skin diseases
 * physiotherapy is not the primary therapy; the „physio" section therefore
 * covers physical and general supportive measures (skin and sun protection,
 * cool compresses, wound and skin-care routines, gentle activity and
 * relaxation) and never claims that exercise cures the skin disease.
 */
export const skinDiseases: Disease[] = [
  {
    slug: "atopic-dermatitis-eczema",
    icd10: "L20.9",
    illustration: "generic",
    title: { de: "Atopische Dermatitis (Neurodermitis)", en: "Atopic Dermatitis (Eczema)" },
    summary: {
      de: "Chronisch-entzündliche, stark juckende Hauterkrankung mit trockener Haut und Schüben.",
      en: "A chronic, intensely itchy inflammatory skin disease with dry skin and flare-ups.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die atopische Dermatitis (Neurodermitis) ist eine chronisch-entzündliche Hauterkrankung mit gestörter Hautbarriere und starkem Juckreiz. Typisch sind trockene, gerötete und schuppende Hautstellen, die in Schüben verlaufen und je nach Alter bevorzugt an Gesicht, Hals, Ellenbeugen und Kniekehlen auftreten. Sie gehört zum atopischen Formenkreis und geht häufig mit Heuschnupfen oder Asthma einher.",
          en: "Atopic dermatitis (eczema) is a chronic inflammatory skin disease with an impaired skin barrier and intense itching. Typical are dry, reddened and scaling patches that run in flares and, depending on age, favour the face, neck, elbow creases and backs of the knees. It belongs to the atopic spectrum and often occurs alongside hay fever or asthma." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose & Auslöser", en: "Diagnosis & triggers" } },
        { t: "p", text: {
          de: "Die Diagnose wird klinisch anhand des typischen Erscheinungsbilds und Verlaufs gestellt. Wichtig ist das Erkennen individueller Auslöser wie Hautirritantien, Schwitzen, trockene Luft, bestimmte Textilien, Stress oder – seltener – Nahrungsmittel. Eine Allergietestung erfolgt gezielt bei entsprechendem Verdacht.",
          en: "Diagnosis is clinical, based on the typical appearance and course. It is important to identify individual triggers such as skin irritants, sweating, dry air, certain textiles, stress or – less often – foods. Allergy testing is done selectively when there is a specific suspicion." } },
        { t: "sub", text: { de: "Basispflege & Stufentherapie", en: "Basic care & step therapy" } },
        { t: "p", text: {
          de: "Grundlage ist die tägliche rückfettende Basispflege. Im Schub werden entzündungshemmende Cremes eingesetzt, meist Kortikosteroide oder Calcineurin-Hemmer. Bei mittelschweren bis schweren Verläufen kommen UV-Therapie oder moderne systemische Medikamente (z. B. Biologika oder JAK-Hemmer) infrage.",
          en: "The foundation is daily emollient basic care. During flares, anti-inflammatory creams are used, usually corticosteroids or calcineurin inhibitors. For moderate-to-severe disease, UV therapy or modern systemic medicines (e.g. biologics or JAK inhibitors) are options." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Hautpflege & Lebensstil", en: "Skin care & lifestyle" } },
        { t: "ul", items: {
          de: ["Konsequente, duftstofffreie Rückfettung, besonders nach dem Baden, stabilisiert die Hautbarriere.","Lauwarmes, kurzes Duschen und milde, seifenfreie Reinigung schonen die Haut.","Kühlung, weiche Baumwollkleidung und das Kurzhalten der Fingernägel lindern den Juckreiz.","Ergänzende Präparate sind ärztlich zu prüfen; unbelegte Auslassdiäten werden vermieden."],
          en: ["Consistent, fragrance-free emollient use, especially after bathing, stabilises the skin barrier.","Lukewarm, short showers and mild, soap-free cleansing spare the skin.","Cooling, soft cotton clothing and keeping fingernails short ease the itch.","Complementary products should be medically reviewed; unproven elimination diets are avoided."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden juckende, gerötete Ekzeme traditionell Mustern wie Hitze und Feuchtigkeit oder – bei trockener Haut – einem Blut-Mangel zugeordnet. Akupunktur, Ernährungsberatung und individuell abgestimmte Kräuter können begleitend eingesetzt werden, ersetzen aber die Hautbarrierepflege und entzündungshemmende Therapie nicht.",
          en: "In TCM, itchy, reddened eczema is traditionally assigned to patterns such as heat and dampness or – with dry skin – a blood deficiency. Acupuncture, dietary advice and individually tailored herbs may be used as complementary care but do not replace skin-barrier care and anti-inflammatory therapy." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Ansätze ordnen Hautentzündung und Trockenheit oft einem Ungleichgewicht der Doshas zu und betonen kühlende, hautfreundliche Ernährung, ruhige Routinen sowie äußerliche Pflege mit geeigneten Ölen. Innerlich eingenommene Kräuterpräparate sind wegen möglicher Wechselwirkungen und Verunreinigungen ärztlich zu prüfen.",
          en: "Ayurvedic approaches often relate skin inflammation and dryness to a dosha imbalance and emphasise cooling, skin-friendly nutrition, calm routines and external care with suitable oils. Orally taken herbal preparations should be medically reviewed because of possible interactions and contamination." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Unterstützend wirken ein hautfreundliches Raumklima (nicht zu trocken, nicht zu warm), kühle Umschläge bei starkem Juckreiz sowie Entspannungs- und Stressbewältigungsverfahren, da Stress Schübe begünstigen kann. Nach dem Sport wird der Schweiß zügig abgeduscht und die Haut anschließend rückgefettet.",
          en: "Supportive measures include a skin-friendly indoor climate (not too dry, not too warm), cool compresses for intense itching and relaxation and stress-management techniques, since stress can promote flares. After exercise, sweat is rinsed off promptly and the skin is re-moisturised afterwards." } },
      ],
    },
  },

  {
    slug: "contact-dermatitis",
    icd10: "L25.9",
    illustration: "generic",
    title: { de: "Kontaktdermatitis", en: "Contact Dermatitis" },
    summary: {
      de: "Hautentzündung durch Kontakt mit reizenden oder allergieauslösenden Stoffen.",
      en: "Skin inflammation caused by contact with irritant or allergy-triggering substances.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Kontaktdermatitis ist eine Hautentzündung, die durch den Kontakt mit äußeren Stoffen entsteht. Man unterscheidet die irritative Form (durch wiederholte Reizung, z. B. Feuchtarbeit, Reinigungsmittel) und die allergische Form (Spätreaktion auf ein Allergen wie Nickel, Duft- oder Konservierungsstoffe). Typisch sind Rötung, Juckreiz, Bläschen und Schuppung im Kontaktbereich.",
          en: "Contact dermatitis is a skin inflammation caused by contact with external substances. A distinction is made between the irritant form (from repeated irritation, e.g. wet work, cleaning agents) and the allergic form (a delayed reaction to an allergen such as nickel, fragrances or preservatives). Typical are redness, itching, small blisters and scaling in the contact area." } },
      ],
      medical: [
        { t: "sub", text: { de: "Ursachensuche", en: "Identifying the cause" } },
        { t: "p", text: {
          de: "Entscheidend ist das Auffinden und Meiden des auslösenden Stoffes. Bei Verdacht auf eine Kontaktallergie klärt ein Epikutantest (Pflastertest) die verantwortlichen Allergene. Beruflicher Hautkontakt und Pflegeprodukte werden gezielt hinterfragt.",
          en: "The key is to find and avoid the causative substance. When contact allergy is suspected, patch testing identifies the responsible allergens. Occupational skin contact and care products are specifically reviewed." } },
        { t: "sub", text: { de: "Behandlung & Schutz", en: "Treatment & protection" } },
        { t: "p", text: {
          de: "Akut helfen entzündungshemmende Cremes (meist Kortikosteroide) und rückfettende Pflege. Zentral ist der konsequente Hautschutz mit Handschuhen, Schutzcremes und dem Meiden des Auslösers. Bei ausgedehntem oder chronischem Verlauf erfolgt eine hautärztliche Mitbetreuung.",
          en: "Acutely, anti-inflammatory creams (usually corticosteroids) and emollient care help. Central to management is consistent skin protection with gloves, barrier creams and avoidance of the trigger. Extensive or chronic disease is co-managed by a dermatologist." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Hautschutz & Pflege", en: "Skin protection & care" } },
        { t: "ul", items: {
          de: ["Konsequenter Schutz vor dem Auslöser und regelmäßige Rückfettung sind die wichtigsten Maßnahmen.","Milde, duftstofffreie Reinigungsprodukte reduzieren zusätzliche Reizungen.","Kühle Umschläge lindern akuten Juckreiz und Brennen.","Pflanzliche Auflagen sind zurückhaltend und nur nach ärztlicher Rücksprache zu verwenden, da sie selbst sensibilisieren können."],
          en: ["Consistent protection from the trigger and regular emollient use are the most important measures.","Mild, fragrance-free cleansing products reduce additional irritation.","Cool compresses ease acute itching and burning.","Herbal applications should be used cautiously and only after medical advice, as they can themselves cause sensitisation."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden nässende, juckende Hautreaktionen Mustern wie Feuchtigkeit und Hitze zugeordnet. Begleitende Akupunktur oder Ernährungsberatung können das allgemeine Wohlbefinden unterstützen, ersetzen aber das Meiden des Auslösers und die hautärztliche Behandlung nicht.",
          en: "Traditionally, weeping, itchy skin reactions are assigned to patterns such as dampness and heat. Complementary acupuncture or dietary advice may support general wellbeing but do not replace avoiding the trigger and dermatological treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont kühlende, hautfreundliche Ernährung, ruhige Routinen und sanfte äußerliche Pflege. Da manche pflanzlichen Auflagen und Öle selbst Allergien auslösen können, sind Produkte ärztlich zu prüfen und bei bekannter Sensibilisierung zu meiden.",
          en: "Ayurvedic support emphasises cooling, skin-friendly nutrition, calm routines and gentle external care. As some herbal applications and oils can themselves cause allergies, products should be medically reviewed and avoided in known sensitisation." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Im Vordergrund stehen physische Schutzmaßnahmen: geeignete Schutzhandschuhe, Hautschutz- und Pflegepläne im Beruf, das Kurzhalten der Feuchtbelastung sowie kühle Kompressen bei akutem Juckreiz. Diese Maßnahmen schützen die Hautbarriere und beugen Rückfällen vor.",
          en: "The focus is on physical protective measures: suitable protective gloves, occupational skin-protection and care plans, keeping wet exposure short and cool compresses for acute itching. These measures protect the skin barrier and help prevent relapses." } },
      ],
    },
  },

  {
    slug: "seborrheic-dermatitis",
    icd10: "L21.9",
    illustration: "generic",
    title: { de: "Seborrhoisches Ekzem", en: "Seborrhoeic Dermatitis" },
    summary: {
      de: "Schuppende, gerötete Hautentzündung in talgdrüsenreichen Zonen wie Kopfhaut und Gesicht.",
      en: "A scaly, reddened skin inflammation in sebum-rich zones such as the scalp and face.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Das seborrhoische Ekzem ist eine häufige, chronisch verlaufende Hautentzündung in talgdrüsenreichen Regionen – vor allem Kopfhaut, Augenbrauen, Nasenflügel, Ohren und vordere Brust. Typisch sind gelblich-fettige Schuppen auf gerötetem Grund, oft mit leichtem Juckreiz. Eine Rolle spielen hauteigene Hefepilze (Malassezia) und die Talgproduktion.",
          en: "Seborrhoeic dermatitis is a common, chronic skin inflammation in sebum-rich regions – especially the scalp, eyebrows, sides of the nose, ears and central chest. Typical are yellowish, greasy scales on a reddened base, often with mild itching. Skin-resident yeasts (Malassezia) and sebum production play a role." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose ist meist klinisch anhand der typischen Lokalisation und Schuppung. Abzugrenzen sind Schuppenflechte, Pilzinfektionen und andere Ekzeme. Bei Säuglingen tritt die Form als harmloser Kopfgneis auf.",
          en: "Diagnosis is usually clinical, based on the typical location and scaling. Psoriasis, fungal infections and other eczemas need to be distinguished. In infants it appears as harmless cradle cap." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Eingesetzt werden Antischuppen- und Antipilz-Präparate (z. B. Ketoconazol, Ciclopirox, Zink- oder Selen-haltige Shampoos) sowie zeitweise milde entzündungshemmende Cremes. Die Behandlung lindert die Beschwerden gut, das Ekzem neigt aber zu Rückfällen und bedarf einer erhaltenden Pflege.",
          en: "Anti-dandruff and antifungal preparations (e.g. ketoconazole, ciclopirox, zinc- or selenium-containing shampoos) and, at times, mild anti-inflammatory creams are used. Treatment controls symptoms well, but the condition tends to relapse and requires maintenance care." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Pflege & Lebensstil", en: "Care & lifestyle" } },
        { t: "ul", items: {
          de: ["Regelmäßige, milde Reinigung der betroffenen Zonen hält die Schuppung in Schach.","Stressreduktion kann Schübe verringern, da Stress das Ekzem oft verschlechtert.","Rückfettende, nicht komedogene Pflege unterstützt die Haut ohne sie zu überfetten.","Ergänzende Präparate sind ärztlich zu prüfen."],
          en: ["Regular, mild cleansing of affected zones keeps scaling in check.","Stress reduction can lessen flares, as stress often worsens the condition.","Emollient, non-comedogenic care supports the skin without over-greasing it.","Complementary products should be medically reviewed."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden fettige Schuppung und Rötung Mustern wie Feuchtigkeit und Hitze zugeordnet. Akupunktur und Ernährungsberatung können begleitend das Wohlbefinden fördern, ersetzen aber die antientzündliche und antimykotische Lokaltherapie nicht.",
          en: "Traditionally, greasy scaling and redness are assigned to patterns such as dampness and heat. Acupuncture and dietary advice may support wellbeing as complementary care but do not replace anti-inflammatory and antifungal topical treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine leichte, ausgewogene Ernährung, geregelte Routinen und sanfte äußerliche Pflege. Innerlich eingenommene Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "Ayurvedic support emphasises a light, balanced diet, regular routines and gentle external care. Orally taken herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Unterstützend wirken ein ausgewogenes Hautklima, das Vermeiden von übermäßiger Hitze und Schwitzen im Gesicht sowie Entspannungsverfahren zur Stressreduktion. Nach dem Sport wird der Schweiß mild abgewaschen, um die Talg-Pilz-Balance nicht zu stören.",
          en: "Supportive measures include a balanced skin climate, avoiding excessive heat and facial sweating, and relaxation techniques to reduce stress. After exercise, sweat is gently washed off to avoid disturbing the sebum-yeast balance." } },
      ],
    },
  },

  {
    slug: "nummular-eczema",
    icd10: "L30.0",
    illustration: "generic",
    title: { de: "Nummuläres Ekzem", en: "Nummular Eczema" },
    summary: {
      de: "Münzförmige, juckende und oft nässende Ekzemherde, meist an Armen und Beinen.",
      en: "Coin-shaped, itchy and often weeping eczema patches, usually on the arms and legs.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Das nummuläre (münzförmige) Ekzem zeigt scharf begrenzte, runde bis ovale Herde, die jucken, nässen und verkrusten können. Bevorzugt betroffen sind Unterschenkel, Arme und Handrücken. Begünstigt wird es durch trockene Haut, Reizung und die kalte Jahreszeit; der genaue Auslöser bleibt oft unklar.",
          en: "Nummular (coin-shaped) eczema shows sharply demarcated, round-to-oval patches that can itch, weep and crust. The lower legs, arms and backs of the hands are preferentially affected. It is promoted by dry skin, irritation and the cold season; the exact trigger often remains unclear." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose ist klinisch. Wichtig ist die Abgrenzung von einer Pilzinfektion (ringförmige Herde) und von der Schuppenflechte; bei Unsicherheit helfen ein Pilznachweis oder eine Probeentnahme. Trockene Haut und mögliche Kontaktallergien werden mitbedacht.",
          en: "Diagnosis is clinical. It is important to distinguish it from a fungal infection (ring-shaped patches) and from psoriasis; when uncertain, a fungal test or a biopsy helps. Dry skin and possible contact allergies are also considered." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Grundlage ist die intensive Rückfettung. In der akuten Phase werden entzündungshemmende Cremes (meist Kortikosteroide) eingesetzt; bei nässenden Herden helfen austrocknende Umschläge. Hartnäckige Fälle werden hautärztlich mit UV-Therapie oder weiteren Optionen behandelt.",
          en: "The foundation is intensive emollient care. In the acute phase, anti-inflammatory creams (usually corticosteroids) are used; for weeping patches, drying compresses help. Stubborn cases are managed by a dermatologist with UV therapy or further options." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Hautpflege", en: "Skin care" } },
        { t: "ul", items: {
          de: ["Konsequente, reichhaltige Rückfettung, besonders im Winter, ist die wichtigste Basismaßnahme.","Milde, seifenfreie Reinigung und lauwarmes Wasser schonen die Haut.","Kratzen wird durch kühlende Maßnahmen und kurze Nägel reduziert.","Ergänzende Präparate sind ärztlich zu prüfen."],
          en: ["Consistent, rich emollient care, especially in winter, is the most important basic measure.","Mild, soap-free cleansing and lukewarm water spare the skin.","Scratching is reduced by cooling measures and short nails.","Complementary products should be medically reviewed."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden nässende, juckende Herde Mustern wie Feuchtigkeit und Hitze, bei trockener Haut auch einem Blut-Mangel zugeordnet. Akupunktur und Ernährungsberatung können begleitend eingesetzt werden und ersetzen die Hautpflege und antientzündliche Therapie nicht.",
          en: "Traditionally, weeping, itchy patches are assigned to patterns such as dampness and heat, and with dry skin to a blood deficiency. Acupuncture and dietary advice may be used as complementary care and do not replace skin care and anti-inflammatory therapy." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont kühlende, hautfreundliche Ernährung, geregelte Routinen und sanfte äußerliche Ölpflege bei trockener Haut. Innerlich eingenommene Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "Ayurvedic support emphasises cooling, skin-friendly nutrition, regular routines and gentle external oil care for dry skin. Orally taken herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Unterstützend wirken ein hautfreundliches Raumklima mit ausreichender Luftfeuchtigkeit, das Vermeiden von Überwärmung und Wollreiz sowie kühle Umschläge bei starkem Juckreiz. Entspannungsverfahren helfen, den kratzfördernden Stress zu senken.",
          en: "Supportive measures include a skin-friendly indoor climate with adequate humidity, avoiding overheating and wool irritation, and cool compresses for intense itching. Relaxation techniques help reduce the stress that promotes scratching." } },
      ],
    },
  },

  {
    slug: "dyshidrotic-eczema",
    icd10: "L30.1",
    illustration: "generic",
    title: { de: "Dyshidrotisches Ekzem", en: "Dyshidrotic Eczema" },
    summary: {
      de: "Juckende, feste Bläschen an Handflächen, Fingerseiten und Fußsohlen.",
      en: "Itchy, firm blisters on the palms, sides of the fingers and soles of the feet.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Das dyshidrotische Ekzem (Dyshidrosis) äußert sich in kleinen, festen, stark juckenden Bläschen an Handflächen, Fingerseiten und Fußsohlen. Nach dem Abheilen der Bläschen kommt es oft zu Schuppung und schmerzhaften Einrissen. Begünstigend wirken Stress, Schwitzen, Feuchtarbeit und Kontaktallergene.",
          en: "Dyshidrotic eczema (dyshidrosis) presents as small, firm, intensely itchy blisters on the palms, sides of the fingers and soles of the feet. After the blisters heal, scaling and painful fissures often follow. Stress, sweating, wet work and contact allergens are contributing factors." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose & Auslöser", en: "Diagnosis & triggers" } },
        { t: "p", text: {
          de: "Die Diagnose ist klinisch. Abgeklärt werden eine Pilzinfektion sowie mögliche Kontaktallergien (z. B. Nickel) mittels Epikutantest. Feuchtbelastung und Hautreizungen im Alltag und Beruf werden erfasst.",
          en: "Diagnosis is clinical. A fungal infection and possible contact allergies (e.g. nickel) are assessed, the latter by patch testing. Wet exposure and skin irritation at home and work are recorded." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Behandelt wird mit entzündungshemmenden Cremes (meist Kortikosteroide), austrocknenden Umschlägen im Bläschenstadium und intensiver Rückfettung. Konsequenter Hautschutz ist zentral; bei chronischem Verlauf kommen UV-Therapie oder weitere hautärztliche Optionen hinzu.",
          en: "Treatment uses anti-inflammatory creams (usually corticosteroids), drying compresses in the blister stage and intensive emollient care. Consistent skin protection is central; for chronic disease, UV therapy or further dermatological options are added." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Hautschutz & Pflege", en: "Skin protection & care" } },
        { t: "ul", items: {
          de: ["Hände vor Feuchtigkeit und Reizstoffen schützen, Handschuhe bei Nassarbeit tragen.","Häufiges, mildes Eincremen mit rückfettender Pflege unterstützt die Barriere.","Kühlende Maßnahmen lindern den Juckreiz in der Bläschenphase.","Stressbewältigung kann Schübe verringern; ergänzende Präparate sind ärztlich zu prüfen."],
          en: ["Protect the hands from moisture and irritants, and wear gloves for wet work.","Frequent, gentle application of emollient care supports the barrier.","Cooling measures ease the itch in the blister phase.","Stress management can reduce flares; complementary products should be medically reviewed."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden juckende Bläschen an Händen und Füßen Mustern wie Feuchtigkeit und Hitze zugeordnet. Akupunktur und Ernährungsberatung können begleitend eingesetzt werden und ersetzen die Lokaltherapie und den Hautschutz nicht.",
          en: "Traditionally, itchy blisters on the hands and feet are assigned to patterns such as dampness and heat. Acupuncture and dietary advice may be used as complementary care and do not replace topical therapy and skin protection." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine kühlende, ausgewogene Ernährung, Stressreduktion und sanfte äußerliche Pflege. Innerlich eingenommene Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "Ayurvedic support emphasises a cooling, balanced diet, stress reduction and gentle external care. Orally taken herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Unterstützend wirken der Schutz vor Feuchtbelastung, atmungsaktives Schuhwerk und das Vermeiden von übermäßigem Schwitzen an Händen und Füßen. Kühle Umschläge lindern den Juckreiz, Entspannungsverfahren senken stressbedingte Schübe.",
          en: "Supportive measures include protection from wet exposure, breathable footwear and avoiding excessive sweating of the hands and feet. Cool compresses ease itching, and relaxation techniques reduce stress-related flares." } },
      ],
    },
  },

  {
    slug: "psoriasis",
    icd10: "L40.9",
    illustration: "generic",
    title: { de: "Schuppenflechte (Psoriasis)", en: "Psoriasis" },
    summary: {
      de: "Chronisch-entzündliche Hauterkrankung mit scharf begrenzten, silbrig schuppenden Herden.",
      en: "A chronic inflammatory skin disease with sharply demarcated, silvery scaling plaques.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Schuppenflechte (Psoriasis) ist eine chronisch-entzündliche, nicht ansteckende Hauterkrankung mit beschleunigter Erneuerung der Oberhaut. Typisch sind scharf begrenzte, gerötete Herde mit silbrig-weißer Schuppung, bevorzugt an Ellenbogen, Knien, Kopfhaut und Kreuzbein. Es handelt sich um eine Systemerkrankung, die auch Gelenke (Psoriasis-Arthritis), Nägel und das Herz-Kreislauf-Risiko betreffen kann.",
          en: "Psoriasis is a chronic inflammatory, non-contagious skin disease with accelerated renewal of the epidermis. Typical are sharply demarcated, reddened plaques with silvery-white scaling, preferentially on the elbows, knees, scalp and lower back. It is a systemic disease that can also affect the joints (psoriatic arthritis), nails and cardiovascular risk." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose & Begleiterkrankungen", en: "Diagnosis & comorbidities" } },
        { t: "p", text: {
          de: "Die Diagnose ist meist klinisch. Wichtig ist das Erfassen von Begleiterkrankungen wie Gelenkbeschwerden, Übergewicht, Bluthochdruck, Diabetes und Fettstoffwechselstörungen sowie der psychischen Belastung. Bei Gelenkbeschwerden erfolgt eine rheumatologische Mitbeurteilung.",
          en: "Diagnosis is usually clinical. It is important to capture comorbidities such as joint symptoms, excess weight, high blood pressure, diabetes and lipid disorders, as well as the psychological burden. Joint symptoms prompt a rheumatology assessment." } },
        { t: "sub", text: { de: "Stufentherapie", en: "Step therapy" } },
        { t: "p", text: {
          de: "Leichte Formen werden äußerlich behandelt (z. B. Vitamin-D-Analoga, Kortikosteroide, Pflege). Bei mittelschweren bis schweren Verläufen kommen UV-Therapie und systemische Medikamente bis hin zu modernen Biologika und weiteren zielgerichteten Wirkstoffen zum Einsatz. Die Therapie wird individuell angepasst.",
          en: "Mild forms are treated topically (e.g. vitamin D analogues, corticosteroids, skin care). For moderate-to-severe disease, UV therapy and systemic medicines up to modern biologics and other targeted agents are used. Therapy is individualised." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Lebensstil & Pflege", en: "Lifestyle & care" } },
        { t: "ul", items: {
          de: ["Konsequente rückfettende Pflege und milde Schuppenlösung unterstützen die Behandlung.","Rauchverzicht, maßvoller Alkohol und Gewichtsmanagement können Schübe und Begleitrisiken verringern.","Stressbewältigung und ausreichend Schlaf wirken günstig, da Stress Schübe auslösen kann.","Maßvolle Sonnenexposition kann helfen; Sonnenbrand ist zu vermeiden. Ergänzende Präparate sind ärztlich zu prüfen."],
          en: ["Consistent emollient care and gentle descaling support treatment.","Stopping smoking, moderate alcohol and weight management can reduce flares and associated risks.","Stress management and adequate sleep are beneficial, as stress can trigger flares.","Moderate sun exposure can help; sunburn must be avoided. Complementary products should be medically reviewed."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden schuppende, gerötete Herde Mustern wie Hitze im Blut oder Blut-Stase zugeordnet. Akupunktur, Ernährungsberatung und Stressreduktion können begleitend das Wohlbefinden unterstützen, ersetzen aber die leitliniengerechte Therapie nicht.",
          en: "Traditionally, scaling, reddened plaques are assigned to patterns such as heat in the blood or blood stasis. Acupuncture, dietary advice and stress reduction may support wellbeing as complementary care but do not replace guideline-based therapy." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Ansätze ordnen die Schuppenflechte oft einem Dosha-Ungleichgewicht zu und betonen ausgewogene Ernährung, Stressreduktion durch Yoga und Meditation sowie äußerliche Pflege. Innerlich eingenommene Kräuterpräparate sind wegen möglicher Wechselwirkungen ärztlich zu prüfen.",
          en: "Ayurvedic approaches often relate psoriasis to a dosha imbalance and emphasise balanced nutrition, stress reduction through yoga and meditation, and external care. Orally taken herbal preparations should be medically reviewed because of possible interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Regelmäßige, moderate Bewegung unterstützt Gewichtsmanagement und Herz-Kreislauf-Gesundheit und ist bei Psoriasis-Arthritis wichtig, um Gelenke beweglich zu halten. Ergänzend wirken Stressbewältigung, Entspannungsverfahren und eine hautschonende, rückfettende Pflegeroutine.",
          en: "Regular, moderate exercise supports weight management and cardiovascular health and is important in psoriatic arthritis to keep joints mobile. Stress management, relaxation techniques and a skin-friendly, emollient care routine are complementary measures." } },
      ],
    },
  },

  {
    slug: "acne-vulgaris",
    icd10: "L70.0",
    illustration: "generic",
    title: { de: "Akne vulgaris", en: "Acne Vulgaris" },
    summary: {
      de: "Häufige Erkrankung der Talgdrüsen mit Mitessern, Pickeln und entzündeten Knoten.",
      en: "A common sebaceous-gland disorder with blackheads, pimples and inflamed nodules.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Akne vulgaris ist eine häufige Erkrankung der Talgdrüsenfollikel, vor allem in der Pubertät. Durch vermehrte Talgproduktion, Verhornungsstörung und das Bakterium Cutibacterium acnes entstehen Mitesser (Komedonen), entzündete Papeln, Pusteln und – bei schweren Formen – Knoten und Narben. Betroffen sind meist Gesicht, Brust und Rücken.",
          en: "Acne vulgaris is a common disorder of the sebaceous follicles, especially during puberty. Increased sebum production, abnormal keratinisation and the bacterium Cutibacterium acnes lead to blackheads (comedones), inflamed papules, pustules and – in severe forms – nodules and scars. The face, chest and back are usually affected." } },
      ],
      medical: [
        { t: "sub", text: { de: "Schweregrad & Behandlung", en: "Severity & treatment" } },
        { t: "p", text: {
          de: "Die Therapie richtet sich nach dem Schweregrad. Äußerlich werden Retinoide, Benzoylperoxid und Azelainsäure eingesetzt, bei entzündlichen Formen auch antibiotische Cremes in Kombination. Mittelschwere bis schwere Akne wird systemisch behandelt (z. B. Antibiotika über begrenzte Zeit, hormonelle Optionen, bei schwerer Akne Isotretinoin unter fachärztlicher Kontrolle).",
          en: "Therapy depends on severity. Topically, retinoids, benzoyl peroxide and azelaic acid are used, and for inflammatory forms also antibiotic creams in combination. Moderate-to-severe acne is treated systemically (e.g. antibiotics for a limited time, hormonal options, and for severe acne isotretinoin under specialist supervision)." } },
        { t: "sub", text: { de: "Wichtige Hinweise", en: "Important notes" } },
        { t: "p", text: {
          de: "Wichtig ist eine realistische Geduld, da Verbesserungen Wochen brauchen. Das Ausdrücken von Pickeln erhöht das Narbenrisiko. Isotretinoin darf in der Schwangerschaft nicht angewendet werden; hier ist eine sichere Verhütung erforderlich.",
          en: "Realistic patience is important, as improvements take weeks. Squeezing pimples increases the risk of scarring. Isotretinoin must not be used in pregnancy; reliable contraception is required with it." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Hautpflege & Lebensstil", en: "Skin care & lifestyle" } },
        { t: "ul", items: {
          de: ["Milde, nicht komedogene Reinigung ohne aggressives Schrubben schont die Haut.","Nicht komedogene, ölfreie Pflege- und Sonnenschutzprodukte sind zu bevorzugen.","Eine ausgewogene Ernährung und der Verzicht aufs Ausdrücken beugen Narben vor.","Ergänzende Präparate sind ärztlich zu prüfen, da manche mit der Aknetherapie wechselwirken."],
          en: ["Mild, non-comedogenic cleansing without aggressive scrubbing spares the skin.","Non-comedogenic, oil-free care and sun-protection products are preferable.","A balanced diet and not squeezing lesions help prevent scarring.","Complementary products should be medically reviewed, as some interact with acne therapy."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden entzündliche Hautunreinheiten Mustern wie Hitze und Feuchtigkeit zugeordnet. Akupunktur und Ernährungsberatung können begleitend eingesetzt werden, ersetzen aber die dermatologische Behandlung, besonders bei vernarbender Akne, nicht.",
          en: "Traditionally, inflammatory blemishes are assigned to patterns such as heat and dampness. Acupuncture and dietary advice may be used as complementary care but do not replace dermatological treatment, especially for scarring acne." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine kühlende, ausgewogene Ernährung, Stressreduktion und sanfte äußerliche Pflege. Innerlich eingenommene Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen, insbesondere während einer systemischen Aknetherapie.",
          en: "Ayurvedic support emphasises a cooling, balanced diet, stress reduction and gentle external care. Orally taken herbal preparations should be medically reviewed for interactions, particularly during systemic acne therapy." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Unterstützend wirken das zügige Abduschen von Schweiß nach dem Sport, das Vermeiden von reibenden Helmen oder engen Bändern auf betroffenen Stellen sowie Stressbewältigung, da Stress Schübe fördern kann. Sonnenschutz beugt Pigmentflecken nach dem Abheilen vor.",
          en: "Supportive measures include promptly rinsing off sweat after exercise, avoiding rubbing helmets or tight straps on affected areas, and stress management, since stress can promote flares. Sun protection helps prevent pigment marks after healing." } },
      ],
    },
  },

  {
    slug: "rosacea",
    icd10: "L71.9",
    illustration: "generic",
    title: { de: "Rosazea", en: "Rosacea" },
    summary: {
      de: "Chronische Gesichtsrötung mit Flush, sichtbaren Äderchen, Papeln und Pusteln.",
      en: "Chronic facial redness with flushing, visible vessels, papules and pustules.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Rosazea ist eine chronische, in Schüben verlaufende Hauterkrankung der Gesichtsmitte. Typisch sind anhaltende Rötung, anfallsartige Gesichtsröte (Flush), sichtbare Äderchen sowie entzündliche Papeln und Pusteln. Bei manchen entwickelt sich eine Verdickung der Nase (Rhinophym); auch die Augen können mitbeteiligt sein.",
          en: "Rosacea is a chronic, relapsing skin disease of the central face. Typical are persistent redness, episodic facial flushing, visible vessels and inflammatory papules and pustules. Some develop a thickening of the nose (rhinophyma); the eyes can also be involved." } },
      ],
      medical: [
        { t: "sub", text: { de: "Auslöser & Diagnose", en: "Triggers & diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose ist klinisch. Wichtig ist das Erkennen individueller Auslöser wie Hitze, Sonne, scharfe Speisen, Alkohol, Stress und bestimmte Pflegeprodukte. Bei Augenbrennen oder -rötung wird eine Augenbeteiligung (okuläre Rosazea) bedacht.",
          en: "Diagnosis is clinical. It is important to identify individual triggers such as heat, sun, spicy food, alcohol, stress and certain care products. Eye burning or redness prompts consideration of ocular rosacea." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Äußerlich werden Wirkstoffe wie Metronidazol, Azelainsäure oder Ivermectin eingesetzt, gegen die Rötung auch gefäßverengende Cremes. Bei stärkerer Ausprägung kommen systemische Antibiotika in entzündungshemmender Dosierung hinzu; sichtbare Äderchen und ein Rhinophym lassen sich mit Laser oder anderen Verfahren behandeln.",
          en: "Topical agents such as metronidazole, azelaic acid or ivermectin are used, and vasoconstrictor creams against redness. For more pronounced disease, systemic antibiotics in an anti-inflammatory dose are added; visible vessels and a rhinophyma can be treated with laser or other procedures." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Auslösermeidung & Pflege", en: "Trigger avoidance & care" } },
        { t: "ul", items: {
          de: ["Ein Auslöser-Tagebuch hilft, individuelle Trigger zu erkennen und zu meiden.","Milde, reizarme Pflege und konsequenter, mineralischer Sonnenschutz sind zentral.","Kühlung bei Flush und das Meiden von Hitze, Sauna und scharfen Speisen lindern Beschwerden.","Ergänzende Präparate sind ärztlich zu prüfen; aggressive Peelings werden vermieden."],
          en: ["A trigger diary helps identify and avoid individual triggers.","Mild, low-irritation care and consistent mineral sun protection are central.","Cooling during flushing and avoiding heat, sauna and spicy food ease symptoms.","Complementary products should be medically reviewed; aggressive peels are avoided."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird die Gesichtsrötung Mustern wie Hitze, teils mit Blut-Stase, zugeordnet. Akupunktur und Ernährungsberatung können begleitend eingesetzt werden und ersetzen die dermatologische Behandlung nicht.",
          en: "Traditionally, facial redness is assigned to patterns such as heat, sometimes with blood stasis. Acupuncture and dietary advice may be used as complementary care and do not replace dermatological treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine kühlende, reizarme Ernährung, Stressreduktion und sanfte äußerliche Pflege. Innerlich eingenommene Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "Ayurvedic support emphasises a cooling, low-irritation diet, stress reduction and gentle external care. Orally taken herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Unterstützend wirken konsequenter Sonnenschutz, das Vermeiden von Überhitzung und plötzlichen Temperaturwechseln sowie kühle Umschläge bei Flush. Moderate Bewegung in kühler Umgebung und Entspannungsverfahren zur Stressreduktion können Schübe verringern; sehr intensive Hitzebelastung wird gemieden.",
          en: "Supportive measures include consistent sun protection, avoiding overheating and sudden temperature changes, and cool compresses during flushing. Moderate exercise in a cool environment and relaxation techniques for stress reduction can lessen flares; very intense heat exposure is avoided." } },
      ],
    },
  },

  {
    slug: "perioral-dermatitis",
    icd10: "L71.0",
    illustration: "generic",
    title: { de: "Periorale Dermatitis", en: "Perioral Dermatitis" },
    summary: {
      de: "Rötung mit kleinen Papeln um Mund, Nase oder Augen, oft durch Überpflegung.",
      en: "Redness with small papules around the mouth, nose or eyes, often from over-care.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die periorale Dermatitis ist eine gutartige Hautentzündung mit feinen Rötungen, Papeln und Pusteln um den Mund, teils auch um Nase und Augen. Charakteristisch ist ein schmaler, freibleibender Saum direkt an der Lippe. Sie wird häufig durch übermäßige Pflege, kortisonhaltige Cremes im Gesicht und feuchtigkeitsstauende Produkte begünstigt.",
          en: "Perioral dermatitis is a benign skin inflammation with fine redness, papules and pustules around the mouth, sometimes also around the nose and eyes. A characteristic feature is a narrow spared rim directly at the lip border. It is often promoted by excessive care, cortisone-containing facial creams and moisture-trapping products." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose & Nulltherapie", en: "Diagnosis & zero therapy" } },
        { t: "p", text: {
          de: "Die Diagnose ist klinisch. Zentral ist die sogenannte Nulltherapie: das Absetzen aller Cremes und Kosmetika im betroffenen Bereich, insbesondere kortisonhaltiger Präparate. Es ist zu erklären, dass sich die Haut kurzfristig verschlechtern kann, bevor sie abheilt.",
          en: "Diagnosis is clinical. Central is so-called zero therapy: stopping all creams and cosmetics in the affected area, especially cortisone-containing preparations. It should be explained that the skin may briefly worsen before it heals." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Ergänzend werden entzündungshemmende, nicht kortisonhaltige Cremes (z. B. Metronidazol, Azelainsäure) eingesetzt; bei ausgeprägtem Befund kommen systemische Antibiotika in entzündungshemmender Dosierung infrage. Die Prognose ist gut, erfordert aber Geduld.",
          en: "In addition, anti-inflammatory, non-cortisone creams (e.g. metronidazole, azelaic acid) are used; for pronounced disease, systemic antibiotics in an anti-inflammatory dose are an option. The prognosis is good but requires patience." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Pflege reduzieren", en: "Reducing care" } },
        { t: "ul", items: {
          de: ["Weniger ist mehr: Gesichtspflege und Kosmetik auf ein Minimum reduzieren.","Reinigung nur mit lauwarmem Wasser oder sehr milden Produkten.","Kortisonhaltige Cremes im Gesicht meiden, sofern nicht ärztlich anders verordnet.","Kühlung lindert Spannungsgefühl; ergänzende Präparate sind ärztlich zu prüfen."],
          en: ["Less is more: reduce facial care and cosmetics to a minimum.","Cleanse only with lukewarm water or very mild products.","Avoid cortisone-containing facial creams unless prescribed otherwise by a doctor.","Cooling eases tightness; complementary products should be medically reviewed."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden Gesichtsrötungen Mustern wie Hitze und Feuchtigkeit zugeordnet. Begleitende Akupunktur oder Ernährungsberatung können das Wohlbefinden unterstützen, ersetzen aber das Reduzieren der Pflegeprodukte und die ärztliche Behandlung nicht.",
          en: "Traditionally, facial redness is assigned to patterns such as heat and dampness. Complementary acupuncture or dietary advice may support wellbeing but do not replace reducing care products and medical treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine kühlende, ausgewogene Ernährung, Stressreduktion und einen zurückhaltenden Umgang mit äußerlichen Produkten. Innerlich eingenommene Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "Ayurvedic support emphasises a cooling, balanced diet, stress reduction and a restrained approach to external products. Orally taken herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Unterstützend wirken kühle Umschläge bei Spannungsgefühl, das Vermeiden von reizenden Produkten sowie Entspannungsverfahren, da Stress den Verlauf beeinflussen kann. Sonnenschutz erfolgt möglichst über textile Maßnahmen und sehr milde Produkte.",
          en: "Supportive measures include cool compresses for tightness, avoiding irritating products and relaxation techniques, as stress can influence the course. Sun protection is achieved where possible through textile measures and very mild products." } },
      ],
    },
  },

  {
    slug: "urticaria",
    icd10: "L50.9",
    illustration: "generic",
    title: { de: "Nesselsucht (Urtikaria)", en: "Urticaria" },
    summary: {
      de: "Juckende Quaddeln, die rasch entstehen und meist innerhalb von Stunden wieder verschwinden.",
      en: "Itchy weals that appear quickly and usually fade again within hours.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Nesselsucht (Urtikaria) äußert sich in stark juckenden, erhabenen Quaddeln, oft mit umgebender Rötung, die einzeln meist innerhalb von Stunden abheilen. Ursache ist die Freisetzung von Histamin aus Mastzellen. Man unterscheidet akute (bis sechs Wochen) und chronische Formen; teils tritt zusätzlich eine tiefe Schwellung (Angioödem) auf.",
          en: "Urticaria presents as intensely itchy, raised weals, often with surrounding redness, each of which usually resolves within hours. The cause is the release of histamine from mast cells. Acute (up to six weeks) and chronic forms are distinguished; sometimes deep swelling (angioedema) also occurs." } },
        { t: "p", text: {
          de: "Wichtig: Treten Atemnot, Schwellung von Lippen, Zunge oder Rachen, Kreislaufschwäche oder Schluckbeschwerden auf, kann eine schwere allergische Reaktion vorliegen – dann sofort den Notruf 112 wählen.",
          en: "Important: if shortness of breath, swelling of the lips, tongue or throat, circulatory weakness or difficulty swallowing occur, a severe allergic reaction may be present – then call the emergency number (112) immediately." } },
      ],
      medical: [
        { t: "sub", text: { de: "Ursachensuche", en: "Identifying the cause" } },
        { t: "p", text: {
          de: "Bei der akuten Urtikaria sind häufig Infekte, Medikamente oder Nahrungsmittel beteiligt; oft bleibt die Ursache offen. Bei der chronischen Form wird gezielt nach Auslösern und Begleiterkrankungen gesucht, eine umfangreiche Suchdiagnostik ist meist nicht nötig.",
          en: "In acute urticaria, infections, medicines or foods are often involved; frequently the cause remains unclear. In the chronic form, triggers and comorbidities are sought in a targeted way, and extensive search diagnostics are usually unnecessary." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Basis sind nicht sedierende Antihistaminika, bei Bedarf in erhöhter Dosierung. Reicht dies nicht, kommen weitere Optionen wie ein Biologikum gegen die Mastzellaktivierung infrage. Bekannte Auslöser werden gemieden; für schwere allergische Reaktionen kann ein Notfallset verordnet werden.",
          en: "The basis is non-sedating antihistamines, at an increased dose if needed. If this is not enough, further options such as a biologic against mast-cell activation are considered. Known triggers are avoided; for severe allergic reactions an emergency kit may be prescribed." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Auslöser & Linderung", en: "Triggers & relief" } },
        { t: "ul", items: {
          de: ["Ein Symptom- und Auslöser-Tagebuch hilft, mögliche Trigger zu erkennen.","Überwärmung, enge Kleidung, Reibung und – bei einzelnen – Stress oder bestimmte Speisen können Schübe fördern.","Kühlung lindert den Juckreiz; kratzen verschlimmert ihn.","Ergänzende Präparate sind ärztlich zu prüfen, da Wechselwirkungen möglich sind."],
          en: ["A symptom and trigger diary helps identify possible triggers.","Overheating, tight clothing, friction and – in some – stress or certain foods can promote flares.","Cooling eases the itch; scratching worsens it.","Complementary products should be medically reviewed, as interactions are possible."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden flüchtige, juckende Quaddeln Mustern wie Wind und Hitze zugeordnet. Begleitende Akupunktur oder Ernährungsberatung können das Wohlbefinden unterstützen, ersetzen aber die antiallergische Behandlung und – bei Warnzeichen – die Notfallversorgung nicht.",
          en: "Traditionally, fleeting, itchy weals are assigned to patterns such as wind and heat. Complementary acupuncture or dietary advice may support wellbeing but do not replace antiallergic treatment and – with warning signs – emergency care." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine kühlende, ausgewogene Ernährung und Stressreduktion. Innerlich eingenommene Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen und bei Allergieneigung zurückhaltend einzusetzen.",
          en: "Ayurvedic support emphasises a cooling, balanced diet and stress reduction. Orally taken herbal preparations should be medically reviewed for interactions and used cautiously in those prone to allergies." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Unterstützend wirken kühlende Maßnahmen bei Juckreiz, luftige Kleidung und das Vermeiden von Überwärmung. Entspannungsverfahren können bei stressassoziierten Schüben helfen. Bei körperlich ausgelösten Formen wird die auslösende Belastung gemeinsam mit dem Behandlungsteam angepasst.",
          en: "Supportive measures include cooling for itching, airy clothing and avoiding overheating. Relaxation techniques can help with stress-associated flares. For physically induced forms, the triggering exposure is adjusted together with the treatment team." } },
      ],
    },
  },

  {
    slug: "lichen-planus",
    icd10: "L43.9",
    illustration: "generic",
    title: { de: "Knötchenflechte (Lichen ruber planus)", en: "Lichen Planus" },
    summary: {
      de: "Juckende, violette, flache Knötchen an Haut und weiße Streifen an Schleimhäuten.",
      en: "Itchy, purple, flat-topped papules on the skin and white streaks on mucous membranes.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Der Lichen ruber planus (Knötchenflechte) ist eine entzündliche Erkrankung von Haut und Schleimhäuten, bei der das Immunsystem gegen die oberste Hautschicht gerichtet ist. Typisch sind juckende, flache, violett schimmernde Knötchen mit feiner weißer Zeichnung, oft an Handgelenken und Unterschenkeln; an der Mundschleimhaut zeigen sich netzartige weiße Streifen.",
          en: "Lichen planus is an inflammatory disease of the skin and mucous membranes in which the immune system is directed against the uppermost skin layer. Typical are itchy, flat, purplish papules with a fine white pattern, often on the wrists and lower legs; the oral mucosa shows lacy white streaks." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose erfolgt klinisch, bei Unsicherheit durch eine Probeentnahme (Biopsie). Da einige Medikamente und – selten – Infektionen ein ähnliches Bild auslösen können, werden diese berücksichtigt. Schleimhaut- und Nagelbefall werden gezielt untersucht.",
          en: "Diagnosis is clinical, and by biopsy when uncertain. As some medicines and – rarely – infections can cause a similar picture, these are considered. Mucosal and nail involvement are specifically assessed." } },
        { t: "sub", text: { de: "Behandlung & Verlauf", en: "Treatment & course" } },
        { t: "p", text: {
          de: "Behandelt wird meist mit entzündungshemmenden Cremes (Kortikosteroide), bei ausgedehntem Befall mit UV-Therapie oder systemischen Medikamenten. Viele Hautformen heilen innerhalb von Monaten bis Jahren ab; Schleimhautformen sind hartnäckiger und werden regelmäßig kontrolliert, da langjährige Verläufe selten entarten können.",
          en: "Treatment is usually with anti-inflammatory creams (corticosteroids), and for extensive involvement with UV therapy or systemic medicines. Many skin forms clear within months to years; mucosal forms are more stubborn and are monitored regularly, as long-standing cases can rarely undergo malignant change." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Pflege & Schutz", en: "Care & protection" } },
        { t: "ul", items: {
          de: ["Milde Hautpflege und das Vermeiden von Reizung und Kratzen unterstützen die Abheilung.","Bei Mundbefall helfen milde, nicht reizende Mundpflege und der Verzicht auf scharfe, saure oder sehr heiße Speisen.","Stressbewältigung kann den Verlauf günstig beeinflussen.","Ergänzende Präparate sind ärztlich zu prüfen."],
          en: ["Mild skin care and avoiding irritation and scratching support healing.","For oral involvement, gentle, non-irritating mouth care and avoiding spicy, acidic or very hot foods help.","Stress management can favourably influence the course.","Complementary products should be medically reviewed."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden juckende, gerötete Hautveränderungen Mustern wie Hitze im Blut oder Blut-Stase zugeordnet. Akupunktur und Ernährungsberatung können begleitend eingesetzt werden und ersetzen die dermatologische Behandlung und Kontrolle nicht.",
          en: "Traditionally, itchy, reddened skin changes are assigned to patterns such as heat in the blood or blood stasis. Acupuncture and dietary advice may be used as complementary care and do not replace dermatological treatment and monitoring." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine kühlende, ausgewogene Ernährung, Stressreduktion und sanfte äußerliche Pflege. Innerlich eingenommene Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "Ayurvedic support emphasises a cooling, balanced diet, stress reduction and gentle external care. Orally taken herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Unterstützend wirken das Vermeiden von mechanischer Reizung (Reibung, Kratzen), da neue Herde an Reizstellen entstehen können, sowie Entspannungsverfahren zur Stressreduktion. Kühlende Maßnahmen lindern den Juckreiz.",
          en: "Supportive measures include avoiding mechanical irritation (friction, scratching), since new lesions can appear at irritated sites, and relaxation techniques for stress reduction. Cooling measures ease the itch." } },
      ],
    },
  },

  {
    slug: "pityriasis-rosea",
    icd10: "L42",
    illustration: "generic",
    title: { de: "Röschenflechte (Pityriasis rosea)", en: "Pityriasis Rosea" },
    summary: {
      de: "Harmloser, selbstlimitierender Ausschlag mit Primärherd und nachfolgenden Röschen.",
      en: "A harmless, self-limiting rash with a herald patch followed by smaller ovals.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Röschenflechte (Pityriasis rosea) ist ein harmloser, meist selbstlimitierender Hautausschlag, der vermutlich mit einer Virusreaktivierung zusammenhängt. Oft beginnt sie mit einem einzelnen größeren Fleck (Primärmedaillon), gefolgt von zahlreichen kleineren, ovalen, leicht schuppenden Herden am Rumpf, die sich entlang der Hautspaltlinien anordnen. Sie ist nicht gefährlich und heilt meist innerhalb von Wochen ab.",
          en: "Pityriasis rosea is a harmless, usually self-limiting rash thought to be linked to a viral reactivation. It often begins with a single larger patch (herald patch), followed by numerous smaller, oval, slightly scaling lesions on the trunk arranged along the skin cleavage lines. It is not dangerous and usually clears within weeks." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose ist klinisch anhand des typischen Musters. Abgegrenzt werden Pilzinfektionen und, bei entsprechendem Risiko, eine Syphilis, die ein ähnliches Bild machen kann. In der Schwangerschaft wird der Verlauf ärztlich begleitet.",
          en: "Diagnosis is clinical, based on the typical pattern. Fungal infections and, where relevant risk exists, syphilis – which can mimic the picture – are excluded. In pregnancy, the course is medically monitored." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Meist ist keine spezifische Behandlung nötig. Gegen Juckreiz helfen rückfettende Pflege, milde entzündungshemmende Cremes oder Antihistaminika; maßvolles Tageslicht kann günstig wirken. Wichtig ist die beruhigende Aufklärung über den gutartigen Verlauf.",
          en: "Usually no specific treatment is needed. For itching, emollient care, mild anti-inflammatory creams or antihistamines help; moderate daylight can be beneficial. Reassuring explanation about the benign course is important." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Linderung & Pflege", en: "Relief & care" } },
        { t: "ul", items: {
          de: ["Milde, rückfettende Pflege beruhigt die schuppende Haut.","Lauwarmes, kurzes Duschen und der Verzicht auf reizende Produkte sind hilfreich.","Kühlung und lockere Kleidung lindern den Juckreiz.","Ergänzende Präparate sind ärztlich zu prüfen."],
          en: ["Mild, emollient care soothes the scaling skin.","Lukewarm, short showers and avoiding irritating products are helpful.","Cooling and loose clothing ease the itch.","Complementary products should be medically reviewed."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird der schuppende, gerötete Ausschlag Mustern wie Wind und Hitze im Blut zugeordnet. Begleitende Maßnahmen können das Wohlbefinden unterstützen; angesichts des selbstlimitierenden Verlaufs steht meist die Beobachtung im Vordergrund.",
          en: "Traditionally, the scaling, reddened rash is assigned to patterns such as wind and heat in the blood. Complementary measures may support wellbeing; given the self-limiting course, observation is usually the mainstay." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine kühlende, leichte Ernährung, sanfte Hautpflege und geregelte Routinen. Innerlich eingenommene Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "Ayurvedic support emphasises a cooling, light diet, gentle skin care and regular routines. Orally taken herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Unterstützend wirken lockere, atmungsaktive Kleidung, das Vermeiden von starkem Schwitzen und heißem Wasser, das den Juckreiz verstärken kann, sowie kühlende Maßnahmen. Maßvolles Tageslicht im Freien wird ohne Sonnenbrand genutzt.",
          en: "Supportive measures include loose, breathable clothing, avoiding heavy sweating and hot water that can intensify the itch, and cooling measures. Moderate outdoor daylight is used without causing sunburn." } },
      ],
    },
  },

  {
    slug: "fungal-skin-infection",
    icd10: "B35.9",
    illustration: "generic",
    title: { de: "Hautpilz (Dermatophytose)", en: "Fungal Skin Infection" },
    summary: {
      de: "Ansteckende Pilzinfektion der Haut mit ringförmigen, schuppenden und juckenden Herden.",
      en: "A contagious fungal skin infection with ring-shaped, scaly and itchy patches.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Unter Dermatophytose versteht man eine Infektion der Haut mit Fadenpilzen. Typisch sind ringförmige, randbetonte, schuppende und juckende Herde, die sich langsam ausbreiten. Je nach Lokalisation spricht man z. B. von Fußpilz, Leistenpilz oder Pilz am Körper. Die Übertragung erfolgt von Mensch zu Mensch, über Tiere oder über kontaminierte Böden und Gegenstände.",
          en: "Dermatophytosis is an infection of the skin with filamentous fungi. Typical are ring-shaped, edge-accentuated, scaly and itchy patches that spread slowly. Depending on location it is called, for example, athlete's foot, groin fungus or body ringworm. Transmission occurs from person to person, via animals or via contaminated floors and objects." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose stützt sich auf das klinische Bild und, bei Unsicherheit, auf einen Pilznachweis aus Hautschuppen (Mikroskopie, Kultur oder molekulare Verfahren). Wichtig ist, vor einer längeren Behandlung möglichst einen Erregernachweis anzustreben.",
          en: "Diagnosis rests on the clinical picture and, when uncertain, on a fungal test from skin scrapings (microscopy, culture or molecular methods). It is important to aim for pathogen confirmation before longer treatment where possible." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Begrenzte Herde werden mit Antipilz-Cremes über mehrere Wochen behandelt. Bei ausgedehntem Befall, Beteiligung von Haaren oder Nägeln oder Therapieversagen kommen Antipilz-Tabletten hinzu. Ansteckungsquellen und Wiederansteckung (z. B. Schuhe, Handtücher, Haustiere) werden mitbedacht.",
          en: "Limited patches are treated with antifungal creams over several weeks. For extensive involvement, involvement of hair or nails, or treatment failure, antifungal tablets are added. Sources of infection and reinfection (e.g. shoes, towels, pets) are also considered." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Hygiene & Vorbeugung", en: "Hygiene & prevention" } },
        { t: "ul", items: {
          de: ["Betroffene Haut gut trocken halten, besonders in Hautfalten und zwischen den Zehen.","Atmungsaktives Schuhwerk, häufiger Wechsel von Socken und Handtüchern beugt vor.","In öffentlichen Bädern und Duschen Badeschuhe tragen.","Ergänzende pflanzliche Mittel sind ärztlich zu prüfen und ersetzen die Antipilztherapie nicht."],
          en: ["Keep affected skin well dried, especially in skin folds and between the toes.","Breathable footwear and frequent changing of socks and towels help prevent it.","Wear bathing shoes in public pools and showers.","Complementary herbal products should be medically reviewed and do not replace antifungal therapy."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden juckende, schuppende Pilzherde Mustern wie Feuchtigkeit und Hitze zugeordnet. Begleitende Maßnahmen können das Hautmilieu unterstützen, ersetzen aber die gezielte Antipilzbehandlung nicht.",
          en: "Traditionally, itchy, scaling fungal patches are assigned to patterns such as dampness and heat. Complementary measures may support the skin environment but do not replace targeted antifungal treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Trockenhalten der Haut, eine ausgewogene Ernährung und Hygiene. Einige traditionell genutzte Öle können die Haut reizen; äußerliche und innerliche Präparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises keeping the skin dry, a balanced diet and hygiene. Some traditionally used oils can irritate the skin; external and oral preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Unterstützend wirken das gründliche Abtrocknen nach Sport und Schwitzen, atmungsaktive Kleidung und Schuhe sowie Hygienemaßnahmen in Gemeinschaftseinrichtungen. Feuchte Hautfalten werden durch luftige Kleidung und ggf. saugende Einlagen trocken gehalten.",
          en: "Supportive measures include thorough drying after exercise and sweating, breathable clothing and shoes, and hygiene measures in communal facilities. Moist skin folds are kept dry with airy clothing and, if needed, absorbent inlays." } },
      ],
    },
  },

  {
    slug: "pityriasis-versicolor",
    icd10: "B36.0",
    illustration: "generic",
    title: { de: "Kleienpilzflechte (Pityriasis versicolor)", en: "Pityriasis Versicolor" },
    summary: {
      de: "Hefepilzbedingte, fein schuppende hellere oder dunklere Flecken am Rumpf.",
      en: "Yeast-related, finely scaling lighter or darker patches on the trunk.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Kleienpilzflechte (Pityriasis versicolor) entsteht durch eine Vermehrung hauteigener Hefepilze (Malassezia). Sie zeigt sich als scharf begrenzte, fein schuppende Flecken an Brust, Rücken und Schultern, die je nach Hauttyp heller oder dunkler als die Umgebung sind. Sie ist harmlos, nicht im eigentlichen Sinne ansteckend und tritt vor allem bei warmem, feuchtem Klima und starkem Schwitzen auf.",
          en: "Pityriasis versicolor arises from an overgrowth of skin-resident yeasts (Malassezia). It appears as sharply demarcated, finely scaling patches on the chest, back and shoulders that are lighter or darker than the surrounding skin depending on skin type. It is harmless, not contagious in the true sense, and occurs mainly in warm, humid climates and with heavy sweating." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose ist meist klinisch; ein Kratzen der Fläche löst feine Schuppung aus. Bei Bedarf bestätigt eine mikroskopische Untersuchung die Hefepilze.",
          en: "Diagnosis is usually clinical; scratching the surface releases fine scaling. If needed, microscopy confirms the yeasts." } },
        { t: "sub", text: { de: "Behandlung & Hinweise", en: "Treatment & notes" } },
        { t: "p", text: {
          de: "Behandelt wird mit Antipilz-Präparaten als Shampoo, Lösung oder Creme, bei ausgedehntem oder wiederkehrendem Befall auch mit Tabletten. Wichtig ist der Hinweis, dass die Farbunterschiede der Haut nach erfolgreicher Behandlung noch Wochen bestehen bleiben können. Rückfälle sind häufig.",
          en: "Treatment uses antifungal preparations as shampoo, solution or cream, and for extensive or recurrent involvement also tablets. It is important to note that the colour differences of the skin can persist for weeks after successful treatment. Relapses are common." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Vorbeugung", en: "Prevention" } },
        { t: "ul", items: {
          de: ["Haut nach dem Schwitzen zügig abduschen und gut trocknen.","Atmungsaktive Kleidung reduziert das feucht-warme Milieu, das den Hefepilz begünstigt.","Bei Rückfallneigung kann eine vorbeugende Anwendung von Antipilz-Shampoos sinnvoll sein.","Ergänzende Mittel sind ärztlich zu prüfen."],
          en: ["Rinse the skin promptly after sweating and dry it well.","Breathable clothing reduces the warm, moist environment that favours the yeast.","With a tendency to relapse, preventive use of antifungal shampoos can be useful.","Complementary products should be medically reviewed."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird die schuppende, fleckige Veränderung Mustern wie Feuchtigkeit und Hitze zugeordnet. Begleitende Maßnahmen können das Hautmilieu unterstützen, ersetzen aber die Antipilzbehandlung nicht.",
          en: "Traditionally, the scaling, patchy change is assigned to patterns such as dampness and heat. Complementary measures may support the skin environment but do not replace antifungal treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Trockenhalten der Haut, eine ausgewogene Ernährung und geregelte Routinen. Äußerliche und innerliche Präparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises keeping the skin dry, a balanced diet and regular routines. External and oral preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Unterstützend wirken das zügige Abduschen und Abtrocknen nach dem Sport, atmungsaktive Kleidung und die Begrenzung von starkem Schwitzen. Nach dem Abheilen schützt maßvoller Sonnenschutz vor auffälligen Farbunterschieden der Haut.",
          en: "Supportive measures include promptly rinsing and drying after exercise, breathable clothing and limiting heavy sweating. After healing, moderate sun protection guards against conspicuous colour differences of the skin." } },
      ],
    },
  },

  {
    slug: "impetigo",
    icd10: "L01.0",
    illustration: "generic",
    title: { de: "Grindflechte (Impetigo)", en: "Impetigo" },
    summary: {
      de: "Ansteckende bakterielle Hautinfektion mit honiggelben Krusten, vor allem bei Kindern.",
      en: "A contagious bacterial skin infection with honey-coloured crusts, mainly in children.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Grindflechte (Impetigo contagiosa) ist eine oberflächliche, hochansteckende bakterielle Hautinfektion, meist durch Staphylokokken oder Streptokokken. Typisch sind Bläschen und Pusteln, die aufplatzen und charakteristische honiggelbe Krusten bilden, oft im Gesicht und an den Händen. Betroffen sind vor allem Kinder.",
          en: "Impetigo contagiosa is a superficial, highly contagious bacterial skin infection, usually caused by staphylococci or streptococci. Typical are blisters and pustules that rupture and form characteristic honey-coloured crusts, often on the face and hands. Children are mainly affected." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose & Hygiene", en: "Diagnosis & hygiene" } },
        { t: "p", text: {
          de: "Die Diagnose ist klinisch; bei Bedarf wird ein Abstrich entnommen. Wegen der hohen Ansteckungsgefahr sind Hygienemaßnahmen zentral: eigene Handtücher, sorgfältiges Händewaschen und häufig ein zeitweiliges Fernbleiben von Gemeinschaftseinrichtungen bis zur Besserung.",
          en: "Diagnosis is clinical; a swab is taken if needed. Because of the high risk of contagion, hygiene measures are central: separate towels, careful handwashing and often temporary staying away from communal facilities until improvement." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Begrenzte Formen werden mit antibiotischen Cremes und Krustenaufweichung behandelt, ausgedehnte oder schwere Formen mit Antibiotika-Tabletten. Wichtig ist die konsequente Behandlung, um Ausbreitung und – selten – Folgeerkrankungen zu vermeiden.",
          en: "Limited forms are treated with antibiotic creams and softening of crusts, extensive or severe forms with antibiotic tablets. Consistent treatment is important to avoid spread and – rarely – complications." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Hygiene & Pflege", en: "Hygiene & care" } },
        { t: "ul", items: {
          de: ["Sorgfältige Handhygiene und getrennte Handtücher begrenzen die Ansteckung.","Krusten mit milden Auflagen aufweichen, nicht aufkratzen.","Fingernägel kurz halten, um Verschleppung und Kratzen zu vermeiden.","Ergänzende Mittel sind ärztlich zu prüfen und ersetzen die Antibiotikatherapie nicht."],
          en: ["Careful hand hygiene and separate towels limit contagion.","Soften crusts with mild applications rather than scratching them off.","Keep fingernails short to avoid spreading and scratching.","Complementary products should be medically reviewed and do not replace antibiotic therapy."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden nässende, verkrustete Hautinfektionen Mustern wie Feuchtigkeit und Hitze zugeordnet. Begleitende Maßnahmen sind allenfalls unterstützend; die ansteckende bakterielle Infektion erfordert eine gezielte medizinische Behandlung.",
          en: "Traditionally, weeping, crusted skin infections are assigned to patterns such as dampness and heat. Complementary measures are at most supportive; the contagious bacterial infection requires targeted medical treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Hygiene, eine ausgewogene Ernährung und schonende Hautpflege. Äußerliche und innerliche Präparate sind ärztlich zu prüfen und ersetzen die antibiotische Behandlung nicht.",
          en: "Ayurvedic support emphasises hygiene, a balanced diet and gentle skin care. External and oral preparations should be medically reviewed and do not replace antibiotic treatment." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Im Vordergrund stehen Hygiene und Ansteckungsschutz: gründliches Händewaschen, eigene Handtücher und das Abdecken betroffener Stellen. Kontaktsport und enger Hautkontakt werden bis zur Abheilung pausiert, um eine Weitergabe zu vermeiden.",
          en: "The focus is on hygiene and preventing contagion: thorough handwashing, separate towels and covering affected areas. Contact sport and close skin contact are paused until healing to avoid transmission." } },
      ],
    },
  },

  {
    slug: "erysipelas",
    icd10: "A46",
    illustration: "generic",
    title: { de: "Wundrose (Erysipel)", en: "Erysipelas" },
    summary: {
      de: "Akute bakterielle Infektion der Haut mit scharf begrenzter Rötung, Überwärmung und Fieber.",
      en: "An acute bacterial skin infection with sharply demarcated redness, warmth and fever.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Wundrose (Erysipel) ist eine akute bakterielle Infektion der oberen Hautschichten, meist durch Streptokokken. Typisch sind eine scharf begrenzte, flächige Rötung, Überwärmung, Schwellung und Schmerzen, häufig am Unterschenkel oder im Gesicht, oft begleitet von Fieber und Krankheitsgefühl. Eintrittspforten sind kleine Hautverletzungen, Fußpilz oder Ekzeme.",
          en: "Erysipelas is an acute bacterial infection of the upper skin layers, usually caused by streptococci. Typical are a sharply demarcated, area-wide redness, warmth, swelling and pain, often on the lower leg or face, frequently accompanied by fever and malaise. Entry points are small skin injuries, athlete's foot or eczema." } },
        { t: "p", text: {
          de: "Wichtig: Eine rasch fortschreitende Rötung mit hohem Fieber, Schüttelfrost, starken Schmerzen oder deutlicher Verschlechterung des Allgemeinzustands erfordert eine umgehende ärztliche Vorstellung; bei bedrohlichem Zustand den Notruf 112 wählen.",
          en: "Important: rapidly spreading redness with high fever, chills, severe pain or a marked decline in general condition requires prompt medical assessment; call the emergency number (112) in a threatening state." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose ist klinisch anhand des typischen Befunds, ergänzt durch Entzündungswerte im Blut. Gesucht werden Eintrittspforten (z. B. Fußpilz, Wunden) und begünstigende Faktoren wie Lymphödem, Venenschwäche oder Diabetes.",
          en: "Diagnosis is clinical, based on the typical findings, supplemented by inflammatory markers in the blood. Entry points (e.g. athlete's foot, wounds) and predisposing factors such as lymphoedema, venous insufficiency or diabetes are sought." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Behandelt wird mit Antibiotika, je nach Schwere als Tablette oder über die Vene, ergänzt durch Ruhigstellung, Hochlagerung und Kühlung. Wichtig sind die Behandlung der Eintrittspforte und die Vorbeugung von Rückfällen, die zu einem dauerhaften Lymphödem führen können.",
          en: "Treatment is with antibiotics, given as tablets or intravenously depending on severity, plus rest, elevation and cooling. Treating the entry point and preventing relapses, which can lead to persistent lymphoedema, are important." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Ergänzende Maßnahmen betreffen vor allem die Vorbeugung: sorgfältige Hautpflege, konsequente Behandlung von Fußpilz und kleinen Wunden sowie die Versorgung von Venen- und Lymphproblemen. Kühlung und Hochlagerung lindern akute Beschwerden. Die antibiotische Behandlung wird dadurch nicht ersetzt.",
          en: "Complementary measures mainly concern prevention: careful skin care, consistent treatment of athlete's foot and small wounds, and management of venous and lymphatic problems. Cooling and elevation ease acute symptoms. They do not replace antibiotic treatment." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird die akute, gerötete Schwellung Mustern wie Hitze und Feuchtigkeit mit toxischer Komponente zugeordnet. TCM-Verfahren kommen allenfalls in der Erholungs- und Vorbeugephase begleitend infrage und ersetzen die antibiotische Akutbehandlung nicht.",
          en: "Traditionally, the acute, reddened swelling is assigned to patterns such as heat and dampness with a toxic component. TCM approaches may at most be used during recovery and prevention as complementary care and do not replace acute antibiotic treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung in der Erholungsphase betont Hautpflege, eine ausgewogene Ernährung und geregelte Routinen. Äußerliche und innerliche Präparate sind ärztlich zu prüfen; die akute Infektion erfordert eine medizinische Behandlung.",
          en: "Ayurvedic support during recovery emphasises skin care, a balanced diet and regular routines. External and oral preparations should be medically reviewed; the acute infection requires medical treatment." } },
      ],
      physio: [
        { t: "p", text: {
          de: "In der Akutphase stehen Ruhigstellung, Hochlagerung und Kühlung im Vordergrund. Nach Abklingen können bei bleibender Schwellung eine manuelle Lymphdrainage und Kompressionsmaßnahmen helfen, Lymphabfluss und Hautpflege zu unterstützen und Rückfällen vorzubeugen.",
          en: "In the acute phase, rest, elevation and cooling are the priority. Once it subsides, for persistent swelling manual lymphatic drainage and compression measures can help support lymphatic drainage and skin care and prevent relapses." } },
      ],
    },
  },

  {
    slug: "folliculitis",
    icd10: "L73.9",
    illustration: "generic",
    title: { de: "Haarbalgentzündung (Follikulitis)", en: "Folliculitis" },
    summary: {
      de: "Entzündung der Haarfollikel mit kleinen, geröteten Pusteln, oft nach Rasur oder Reibung.",
      en: "Inflammation of the hair follicles with small, reddened pustules, often after shaving or friction.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Follikulitis ist eine Entzündung der Haarfollikel, meist durch Bakterien, seltener durch Pilze oder Reizung. Typisch sind kleine, gerötete, teils juckende oder schmerzhafte Pusteln, oft durchsetzt von einem Haar. Begünstigend wirken Rasur, Reibung, Schwitzen, enge Kleidung und feucht-warme Bedingungen.",
          en: "Folliculitis is an inflammation of the hair follicles, usually caused by bacteria, less often by fungi or irritation. Typical are small, reddened, sometimes itchy or painful pustules, often pierced by a hair. Shaving, friction, sweating, tight clothing and warm, moist conditions are contributing factors." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose ist meist klinisch. Bei hartnäckigem oder wiederkehrendem Verlauf kann ein Abstrich den Erreger klären; auch Auslöser wie ein Whirlpool (Bade-Follikulitis) oder Pilze werden bedacht.",
          en: "Diagnosis is usually clinical. In stubborn or recurrent cases a swab can identify the pathogen; triggers such as a hot tub (hot-tub folliculitis) or fungi are also considered." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Leichte Formen bessern sich oft mit antiseptischer Reinigung und dem Meiden auslösender Reize. Bei Bedarf werden antibiotische oder – bei Pilzbeteiligung – antimykotische Präparate eingesetzt, in ausgeprägten Fällen als Tablette. Wichtig sind Rasurhygiene und das Vermeiden von Reibung.",
          en: "Mild forms often improve with antiseptic cleansing and avoiding triggering irritants. When needed, antibiotic or – with fungal involvement – antifungal preparations are used, and tablets in pronounced cases. Shaving hygiene and avoiding friction are important." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Hautpflege & Vorbeugung", en: "Skin care & prevention" } },
        { t: "ul", items: {
          de: ["Milde, antiseptische Reinigung der betroffenen Stellen unterstützt die Abheilung.","Rasur schonend gestalten: scharfe, saubere Klingen, in Wuchsrichtung, nicht zu eng.","Enge, reibende und schweißstauende Kleidung meiden.","Ergänzende Mittel sind ärztlich zu prüfen."],
          en: ["Mild, antiseptic cleansing of affected areas supports healing.","Shave gently: sharp, clean blades, in the direction of growth, not too close.","Avoid tight, rubbing and sweat-trapping clothing.","Complementary products should be medically reviewed."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden entzündete Follikel Mustern wie Hitze und Feuchtigkeit zugeordnet. Begleitende Maßnahmen können das Hautmilieu unterstützen, ersetzen aber bei ausgeprägtem Befund die medizinische Behandlung nicht.",
          en: "Traditionally, inflamed follicles are assigned to patterns such as heat and dampness. Complementary measures may support the skin environment but do not replace medical treatment in pronounced cases." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Hygiene, eine ausgewogene Ernährung und schonende Hautpflege. Äußerliche und innerliche Präparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises hygiene, a balanced diet and gentle skin care. External and oral preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Unterstützend wirken das zügige Abduschen nach dem Sport, atmungsaktive Kleidung und das Vermeiden von Reibung und Druck auf die betroffenen Stellen. Gemeinschaftliche Whirlpools und Schwimmbäder werden bei entsprechendem Verdacht vorübergehend gemieden.",
          en: "Supportive measures include promptly rinsing off after exercise, breathable clothing and avoiding friction and pressure on affected areas. Shared hot tubs and pools are temporarily avoided when they are suspected as a source." } },
      ],
    },
  },

  {
    slug: "hidradenitis-suppurativa",
    icd10: "L73.2",
    illustration: "generic",
    title: { de: "Akne inversa (Hidradenitis suppurativa)", en: "Hidradenitis Suppurativa" },
    summary: {
      de: "Chronisch-entzündliche Erkrankung mit schmerzhaften Knoten und Abszessen in Hautfalten.",
      en: "A chronic inflammatory disease with painful nodules and abscesses in skin folds.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Akne inversa (Hidradenitis suppurativa) ist eine chronisch-entzündliche Erkrankung der Haarfollikel in Hautfalten – vor allem Achseln, Leisten, Gesäß- und Brustregion. Typisch sind wiederkehrende schmerzhafte Knoten, Abszesse, Fistelgänge und Vernarbungen. Die Erkrankung ist oft belastend und wird nicht selten spät erkannt.",
          en: "Hidradenitis suppurativa is a chronic inflammatory disease of the hair follicles in skin folds – especially the armpits, groin, buttock and breast regions. Typical are recurrent painful nodules, abscesses, sinus tracts and scarring. The disease is often distressing and not infrequently recognised late." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose & Begleitfaktoren", en: "Diagnosis & associated factors" } },
        { t: "p", text: {
          de: "Die Diagnose ist klinisch anhand von typischer Lokalisation, wiederkehrendem Verlauf und den charakteristischen Veränderungen. Wichtig sind das Erfassen von Rauchen und Übergewicht als beeinflussbare Faktoren sowie von Begleiterkrankungen.",
          en: "Diagnosis is clinical, based on typical location, recurrent course and the characteristic changes. Capturing smoking and excess weight as modifiable factors, and associated conditions, is important." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Je nach Schweregrad kommen äußerliche und systemische Antibiotika in entzündungshemmender Wirkung, hormonelle Optionen, moderne Biologika sowie operative Verfahren zum Einsatz. Rauchverzicht und Gewichtsmanagement können den Verlauf günstig beeinflussen; eine frühzeitige fachärztliche Anbindung ist sinnvoll.",
          en: "Depending on severity, topical and systemic antibiotics with an anti-inflammatory effect, hormonal options, modern biologics and surgical procedures are used. Stopping smoking and weight management can favourably influence the course; early specialist involvement is advisable." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Lebensstil & Pflege", en: "Lifestyle & care" } },
        { t: "ul", items: {
          de: ["Rauchverzicht ist eine der wichtigsten beeinflussbaren Maßnahmen.","Gewichtsmanagement und eine ausgewogene Ernährung können Schübe verringern.","Lockere, reibungsarme Kleidung und milde Reinigung schonen die Hautfalten.","Ergänzende Mittel sind ärztlich zu prüfen und ersetzen die Behandlung nicht."],
          en: ["Stopping smoking is one of the most important modifiable measures.","Weight management and a balanced diet can reduce flares.","Loose, low-friction clothing and mild cleansing spare the skin folds.","Complementary products should be medically reviewed and do not replace treatment."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden die entzündlichen Knoten Mustern wie Feuchtigkeit, Hitze und Stagnation zugeordnet. Akupunktur und Ernährungsberatung können begleitend das Wohlbefinden unterstützen und ersetzen die dermatologische Behandlung nicht.",
          en: "Traditionally, the inflammatory nodules are assigned to patterns such as dampness, heat and stagnation. Acupuncture and dietary advice may support wellbeing as complementary care and do not replace dermatological treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine ausgewogene, kühlende Ernährung, Gewichtsmanagement und Stressreduktion. Innerlich eingenommene Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "Ayurvedic support emphasises a balanced, cooling diet, weight management and stress reduction. Orally taken herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Unterstützend wirken lockere, reibungsarme Kleidung, das Vermeiden von Druck und Scheuern in den Hautfalten sowie ein hautfreundliches Schwitzmanagement. Moderate Bewegung unterstützt Gewichtsmanagement und Wohlbefinden; schmerzhafte Regionen werden dabei geschont.",
          en: "Supportive measures include loose, low-friction clothing, avoiding pressure and chafing in the skin folds, and skin-friendly sweat management. Moderate exercise supports weight management and wellbeing; painful regions are spared during it." } },
      ],
    },
  },

  {
    slug: "herpes-zoster-shingles",
    icd10: "B02.9",
    illustration: "generic",
    title: { de: "Gürtelrose (Herpes zoster)", en: "Shingles (Herpes Zoster)" },
    summary: {
      de: "Schmerzhafter, meist einseitiger Bläschenausschlag durch Reaktivierung des Windpockenvirus.",
      en: "A painful, usually one-sided blistering rash from reactivation of the chickenpox virus.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Gürtelrose (Herpes zoster) entsteht durch eine Reaktivierung des Windpockenvirus, das nach durchgemachten Windpocken lebenslang in Nervenknoten verbleibt. Typisch sind brennende oder stechende Schmerzen, gefolgt von einem meist einseitigen, gürtelförmigen Bläschenausschlag in einem Hautnervengebiet. Begünstigt wird sie durch höheres Alter und eine geschwächte Abwehr.",
          en: "Shingles (herpes zoster) arises from a reactivation of the chickenpox virus, which remains lifelong in nerve ganglia after chickenpox. Typical are burning or stabbing pain, followed by a usually one-sided, band-like blistering rash in a single nerve-supply area of skin. It is favoured by older age and weakened immunity." } },
        { t: "p", text: {
          de: "Wichtig: Befällt die Gürtelrose Gesicht, Auge, Ohr oder besteht eine deutliche Abwehrschwäche, ist eine rasche ärztliche Vorstellung nötig, da ernste Komplikationen (z. B. am Auge) drohen können.",
          en: "Important: if shingles affects the face, eye or ear, or there is marked immune weakness, prompt medical assessment is needed, as serious complications (e.g. of the eye) can threaten." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose & frühe Behandlung", en: "Diagnosis & early treatment" } },
        { t: "p", text: {
          de: "Die Diagnose ist meist klinisch. Wichtig ist der frühe Beginn einer antiviralen Behandlung, idealerweise innerhalb von 72 Stunden nach Auftreten des Ausschlags, um Verlauf und Schmerzen zu mildern. Eine begleitende, ausreichende Schmerztherapie ist zentral.",
          en: "Diagnosis is usually clinical. An early start of antiviral treatment, ideally within 72 hours of the rash appearing, is important to reduce the course and pain. Accompanying, adequate pain relief is central." } },
        { t: "sub", text: { de: "Nervenschmerz & Vorbeugung", en: "Nerve pain & prevention" } },
        { t: "p", text: {
          de: "Nach dem Abheilen können anhaltende Nervenschmerzen (Post-Zoster-Neuralgie) zurückbleiben, die eine spezielle Schmerzbehandlung erfordern. Eine Impfung schützt ältere und gefährdete Menschen vor Gürtelrose und ihren Folgen.",
          en: "After healing, persistent nerve pain (post-herpetic neuralgia) can remain and requires specific pain management. Vaccination protects older and at-risk people from shingles and its consequences." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Linderung & Pflege", en: "Relief & care" } },
        { t: "ul", items: {
          de: ["Milde, austrocknende Pflege der Bläschen und lockere Kleidung lindern Beschwerden.","Kühlung kann brennende Schmerzen abmildern.","Ruhe und Stressreduktion unterstützen die Erholung.","Ergänzende Mittel sind ärztlich zu prüfen und ersetzen die frühe antivirale Therapie nicht."],
          en: ["Mild, drying care of the blisters and loose clothing ease symptoms.","Cooling can lessen burning pain.","Rest and stress reduction support recovery.","Complementary products should be medically reviewed and do not replace early antiviral therapy."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird der schmerzhafte Bläschenausschlag Mustern wie Feuchtigkeit, Hitze und Leber-Qi-Stagnation zugeordnet. Akupunktur kann begleitend, besonders bei anhaltenden Nervenschmerzen, zur Anwendung kommen und ersetzt die antivirale Akutbehandlung nicht.",
          en: "Traditionally, the painful blistering rash is assigned to patterns such as dampness, heat and Liver Qi stagnation. Acupuncture may be used as complementary care, especially for persistent nerve pain, and does not replace acute antiviral treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Ruhe, eine kühlende, leicht verdauliche Ernährung und Stressreduktion. Äußerliche und innerliche Präparate sind ärztlich zu prüfen; die akute Erkrankung erfordert die zügige medizinische Behandlung.",
          en: "Ayurvedic support emphasises rest, a cooling, easily digestible diet and stress reduction. External and oral preparations should be medically reviewed; the acute illness requires prompt medical treatment." } },
      ],
      physio: [
        { t: "p", text: {
          de: "In der akuten Phase stehen Schonung, lockere Kleidung und Kühlung im Vordergrund. Bei anhaltenden Nervenschmerzen können sanfte Bewegung, Entspannungsverfahren und – im Rahmen einer Schmerztherapie – physikalische Maßnahmen helfen, den Umgang mit dem Schmerz zu verbessern.",
          en: "In the acute phase, rest, loose clothing and cooling are the priority. For persistent nerve pain, gentle activity, relaxation techniques and – within pain management – physical measures can help improve coping with the pain." } },
      ],
    },
  },

  {
    slug: "warts-verruca",
    icd10: "B07.9",
    illustration: "generic",
    title: { de: "Warzen (Verrucae)", en: "Warts (Verrucae)" },
    summary: {
      de: "Gutartige, durch Viren verursachte Hautwucherungen, oft an Händen und Füßen.",
      en: "Benign, virus-induced skin growths, often on the hands and feet.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Warzen sind gutartige Hautwucherungen, die durch humane Papillomviren (HPV) verursacht werden. Sie treten häufig an Händen und Füßen auf; Dornwarzen an der Fußsohle können beim Gehen schmerzen. Warzen sind ansteckend und werden über direkten Kontakt oder kontaminierte Böden übertragen. Viele heilen mit der Zeit von selbst ab.",
          en: "Warts are benign skin growths caused by human papillomaviruses (HPV). They commonly appear on the hands and feet; plantar warts on the sole can hurt when walking. Warts are contagious and spread via direct contact or contaminated floors. Many clear on their own over time." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose ist klinisch. Bei unklaren, raschem Wachstum oder untypischem Erscheinungsbild wird eine hautärztliche Abklärung empfohlen, um andere Hautveränderungen abzugrenzen.",
          en: "Diagnosis is clinical. For unclear lesions, rapid growth or an atypical appearance, dermatological assessment is recommended to distinguish other skin changes." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Behandlungsoptionen sind Salicylsäure-Präparate, Vereisung (Kältetherapie), spezielle Lösungen sowie bei Bedarf weitere Verfahren. Geduld ist nötig, da mehrere Anwendungen üblich sind. Bei Kindern und harmlosen Warzen ist auch Abwarten vertretbar.",
          en: "Treatment options are salicylic-acid preparations, freezing (cryotherapy), special solutions and, when needed, further procedures. Patience is required, as several applications are usual. In children and for harmless warts, watchful waiting is also reasonable." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Selbsthilfe & Vorbeugung", en: "Self-help & prevention" } },
        { t: "ul", items: {
          de: ["Warzen nicht aufkratzen und eigene Handtücher benutzen, um eine Ausbreitung zu vermeiden.","In Bädern und Duschen Badeschuhe tragen.","Salicylsäure-Pflaster und regelmäßiges Abtragen der aufgeweichten Hornhaut können helfen.","Ergänzende Hausmittel sind ärztlich zu prüfen, besonders bei Diabetes oder Durchblutungsstörungen."],
          en: ["Do not scratch warts and use separate towels to avoid spread.","Wear bathing shoes in pools and showers.","Salicylic-acid plasters and regular removal of the softened callus can help.","Complementary home remedies should be medically reviewed, especially with diabetes or circulatory problems."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden Warzen dem Einfluss äußerer Faktoren und einem geschwächten Abwehr-Qi zugeordnet. Begleitende Maßnahmen zielen auf die allgemeine Stärkung; die Behandlung der Warze selbst erfolgt über die etablierten Verfahren.",
          en: "Traditionally, warts are attributed to the influence of external factors and a weakened defensive Qi. Complementary measures aim at general strengthening; the wart itself is treated with the established methods." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine ausgewogene Ernährung und geregelte Routinen zur Unterstützung der Abwehr. Äußerliche Präparate sind ärztlich zu prüfen, da manche die Haut reizen können.",
          en: "Ayurvedic support emphasises a balanced diet and regular routines to support immunity. External preparations should be medically reviewed, as some can irritate the skin." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Unterstützend wirken Hygienemaßnahmen in Gemeinschaftsbädern, das Trockenhalten der Füße und gut sitzendes Schuhwerk, das Druck auf Dornwarzen verringert. Bei schmerzhaften Fußsohlenwarzen können druckentlastende Einlagen das Gehen erleichtern.",
          en: "Supportive measures include hygiene in communal pools, keeping the feet dry and well-fitting footwear that reduces pressure on plantar warts. For painful sole warts, pressure-relieving insoles can make walking easier." } },
      ],
    },
  },

  {
    slug: "molluscum-contagiosum",
    icd10: "B08.1",
    illustration: "generic",
    title: { de: "Dellwarzen (Mollusken)", en: "Molluscum Contagiosum" },
    summary: {
      de: "Kleine, hautfarbene Knötchen mit zentraler Delle durch ein Virus, häufig bei Kindern.",
      en: "Small, skin-coloured papules with a central dimple caused by a virus, common in children.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Dellwarzen (Mollusca contagiosa) sind harmlose, durch ein Pockenvirus verursachte Hautknötchen. Typisch sind kleine, hautfarbene bis perlmuttartige Papeln mit einer zentralen Delle. Sie sind ansteckend und treten vor allem bei Kindern sowie bei Menschen mit Neurodermitis oder geschwächter Abwehr auf. Meist heilen sie innerhalb von Monaten bis wenigen Jahren von selbst ab.",
          en: "Molluscum contagiosum are harmless skin papules caused by a poxvirus. Typical are small, skin-coloured to pearly papules with a central dimple. They are contagious and occur mainly in children and in people with eczema or weakened immunity. They usually clear on their own within months to a few years." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose ist klinisch anhand des typischen Aussehens. Bei sehr zahlreichen oder untypischen Knötchen, besonders bei Abwehrschwäche, ist eine hautärztliche Beurteilung sinnvoll.",
          en: "Diagnosis is clinical, based on the typical appearance. For very numerous or atypical papules, especially with immune weakness, a dermatological assessment is advisable." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Da viele Dellwarzen von selbst abheilen, ist bei Kindern oft Abwarten vertretbar. Bei Bedarf stehen vorsichtiges Entfernen, Vereisung oder spezielle Lösungen zur Verfügung. Wichtig ist, das Aufkratzen zu vermeiden, um eine Ausbreitung zu verhindern.",
          en: "As many molluscum clear on their own, watchful waiting is often reasonable in children. When needed, careful removal, freezing or special solutions are available. Avoiding scratching is important to prevent spread." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Pflege & Vorbeugung", en: "Care & prevention" } },
        { t: "ul", items: {
          de: ["Nicht aufkratzen, um eine Ausbreitung und Ansteckung anderer zu vermeiden.","Eigene Handtücher benutzen und diese nicht teilen.","Bei begleitender Neurodermitis die Hautpflege konsequent fortführen.","Ergänzende Mittel sind ärztlich zu prüfen."],
          en: ["Do not scratch, to avoid spread and infecting others.","Use separate towels and do not share them.","With accompanying eczema, continue skin care consistently.","Complementary products should be medically reviewed."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden solche Hautknötchen dem Einfluss äußerer Faktoren und einem geschwächten Abwehr-Qi zugeordnet. Begleitende Maßnahmen zielen auf die allgemeine Stärkung; der selbstlimitierende Verlauf steht meist im Vordergrund.",
          en: "Traditionally, such skin papules are attributed to the influence of external factors and a weakened defensive Qi. Complementary measures aim at general strengthening; the self-limiting course is usually the mainstay." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine ausgewogene Ernährung, Hygiene und geregelte Routinen. Äußerliche Präparate sind ärztlich zu prüfen, da manche die Haut reizen können.",
          en: "Ayurvedic support emphasises a balanced diet, hygiene and regular routines. External preparations should be medically reviewed, as some can irritate the skin." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Unterstützend wirken Hygienemaßnahmen und das Abdecken einzelner Knötchen beim Kontaktsport oder Schwimmen, um eine Übertragung zu verringern. Eine konsequente Hautpflege hält die Haut intakt und vermindert kratzbedingte Ausbreitung.",
          en: "Supportive measures include hygiene and covering individual papules during contact sport or swimming to reduce transmission. Consistent skin care keeps the skin intact and lessens scratch-related spread." } },
      ],
    },
  },

  {
    slug: "scabies",
    icd10: "B86",
    illustration: "generic",
    title: { de: "Krätze (Skabies)", en: "Scabies" },
    summary: {
      de: "Durch Milben verursachter, nachts betonter starker Juckreiz mit feinen Gängen in der Haut.",
      en: "Mite-induced intense itching, worse at night, with fine burrows in the skin.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Krätze (Skabies) ist eine ansteckende Hauterkrankung durch die Krätzmilbe, die feine Gänge in die oberste Hautschicht gräbt. Typisch ist ein starker, nachts betonter Juckreiz mit kleinen Papeln und Kratzspuren, bevorzugt an Fingerzwischenräumen, Handgelenken, Achseln und im Genitalbereich. Die Übertragung erfolgt meist durch längeren Hautkontakt.",
          en: "Scabies is a contagious skin disease caused by the scabies mite, which burrows fine tunnels into the uppermost skin layer. Typical is intense itching, worse at night, with small papules and scratch marks, preferentially in the finger webs, wrists, armpits and genital area. Transmission is usually through prolonged skin contact." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose stützt sich auf das typische Beschwerdebild, die Verteilung und den Nachweis von Milbengängen, ggf. mit Dermatoskop oder Mikroskop. Auch enge Kontaktpersonen werden berücksichtigt, da sie oft mitbehandelt werden müssen.",
          en: "Diagnosis rests on the typical symptoms, the distribution and the detection of mite burrows, if needed with a dermatoscope or microscope. Close contacts are also considered, as they often need to be treated too." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Behandelt wird mit milbenabtötenden Präparaten als Creme (z. B. Permethrin) oder als Tablette, oft mit Wiederholung nach einigen Tagen. Wichtig sind die gleichzeitige Behandlung enger Kontaktpersonen sowie das Waschen bzw. Ausräumen von Kleidung und Bettwäsche. Der Juckreiz kann nach erfolgreicher Behandlung noch Wochen anhalten.",
          en: "Treatment uses mite-killing preparations as a cream (e.g. permethrin) or as a tablet, often repeated after a few days. Simultaneous treatment of close contacts and washing or isolating clothing and bedding are important. Itching can persist for weeks after successful treatment." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Begleitmaßnahmen", en: "Accompanying measures" } },
        { t: "ul", items: {
          de: ["Kleidung, Handtücher und Bettwäsche bei mindestens 60 Grad waschen oder nach Anweisung behandeln.","Enge Kontaktpersonen zeitgleich mitbehandeln, um Wiederansteckung zu vermeiden.","Rückfettende Pflege lindert die trockene, gereizte Haut nach der Behandlung.","Ergänzende Mittel sind ärztlich zu prüfen und ersetzen die milbenabtötende Therapie nicht."],
          en: ["Wash clothing, towels and bedding at at least 60 degrees or treat them as instructed.","Treat close contacts at the same time to avoid reinfection.","Emollient care soothes the dry, irritated skin after treatment.","Complementary products should be medically reviewed and do not replace mite-killing therapy."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird der starke Juckreiz Mustern wie Wind, Feuchtigkeit und Hitze zugeordnet. Begleitende Maßnahmen können das Wohlbefinden unterstützen; die ansteckende Milbenerkrankung erfordert jedoch eine gezielte medizinische Behandlung.",
          en: "Traditionally, the intense itching is assigned to patterns such as wind, dampness and heat. Complementary measures may support wellbeing; the contagious mite disease, however, requires targeted medical treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Hygiene, sanfte Hautpflege und geregelte Routinen. Äußerliche und innerliche Präparate sind ärztlich zu prüfen und ersetzen die spezifische Behandlung nicht.",
          en: "Ayurvedic support emphasises hygiene, gentle skin care and regular routines. External and oral preparations should be medically reviewed and do not replace the specific treatment." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Unterstützend wirken Hygienemaßnahmen und der Verzicht auf engen Hautkontakt sowie gemeinsame Handtücher bis zum Abschluss der Behandlung. Kühlende Maßnahmen und rückfettende Pflege lindern den nachwirkenden Juckreiz.",
          en: "Supportive measures include hygiene and avoiding close skin contact and shared towels until treatment is complete. Cooling measures and emollient care ease the lingering itch." } },
      ],
    },
  },

  {
    slug: "actinic-keratosis",
    icd10: "L57.0",
    illustration: "generic",
    title: { de: "Aktinische Keratose", en: "Actinic Keratosis" },
    summary: {
      de: "Durch Sonnenlicht verursachte raue Hautstelle, eine frühe Form einer Hautkrebsvorstufe.",
      en: "A sun-induced rough skin spot, an early form of a skin-cancer precursor.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die aktinische Keratose ist eine durch jahrelange UV-Belastung verursachte Hautveränderung und gilt als Frühform bzw. Vorstufe eines hellen Hautkrebses. Typisch sind raue, schuppende, teils gerötete oder leicht verhornte Stellen an sonnenexponierten Arealen wie Gesicht, Glatze, Ohren, Unterlippe und Handrücken. Unbehandelt kann sich daraus ein Plattenepithelkarzinom entwickeln.",
          en: "Actinic keratosis is a skin change caused by years of UV exposure and is regarded as an early form or precursor of light-skin cancer. Typical are rough, scaling, sometimes reddened or slightly horny spots on sun-exposed areas such as the face, bald scalp, ears, lower lip and backs of the hands. Untreated, a squamous cell carcinoma can develop from it." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose ist meist klinisch, oft mit Dermatoskop. Bei unklaren, verhärteten, wachsenden oder blutenden Stellen wird eine Probeentnahme durchgeführt, um einen Hautkrebs auszuschließen. Die gesamte sonnengeschädigte Haut wird mitbeurteilt.",
          en: "Diagnosis is usually clinical, often with a dermatoscope. For unclear, hardened, growing or bleeding spots, a biopsy is performed to exclude skin cancer. The entire sun-damaged skin is assessed as well." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Einzelne Stellen werden vereist, abgetragen oder mit Wirkstoffcremes behandelt; bei flächigem Befall („Feldkanzerisierung“) kommen Cremes oder die photodynamische Therapie zum Einsatz. Konsequenter Sonnenschutz und regelmäßige Hautkontrollen sind fester Bestandteil der Behandlung.",
          en: "Individual spots are frozen, removed or treated with active creams; for widespread involvement (field cancerisation), creams or photodynamic therapy are used. Consistent sun protection and regular skin checks are an integral part of treatment." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Sonnenschutz & Vorbeugung", en: "Sun protection & prevention" } },
        { t: "ul", items: {
          de: ["Konsequenter Sonnenschutz mit hohem Lichtschutzfaktor, Kleidung und Kopfbedeckung ist die wichtigste Maßnahme.","Mittagssonne meiden, Schatten bevorzugen.","Regelmäßige Selbstkontrolle und hautärztliche Vorsorge helfen, Veränderungen früh zu erkennen.","Ergänzende Mittel ersetzen weder Sonnenschutz noch die Behandlung; eine Rücksprache wird empfohlen."],
          en: ["Consistent sun protection with a high sun-protection factor, clothing and headwear is the most important measure.","Avoid midday sun and prefer shade.","Regular self-checks and dermatological screening help detect changes early.","Complementary products replace neither sun protection nor treatment; medical advice is recommended."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Die TCM kennt für sonnenbedingte Hautkrebsvorstufen keine ursächliche Behandlung. Begleitende Maßnahmen können das allgemeine Wohlbefinden unterstützen, ersetzen jedoch Sonnenschutz, ärztliche Kontrolle und gezielte Therapie nicht.",
          en: "TCM has no causal treatment for sun-induced skin-cancer precursors. Complementary measures may support general wellbeing but do not replace sun protection, medical monitoring and targeted therapy." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine ausgewogene Ernährung und hautfreundliche Routinen. Sie ersetzt bei Hautkrebsvorstufen nicht die dermatologische Behandlung und Kontrolle; Präparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises a balanced diet and skin-friendly routines. For skin-cancer precursors it does not replace dermatological treatment and monitoring; preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Im Vordergrund steht der physische UV-Schutz: schützende Kleidung, Kopfbedeckung, Sonnenschutzmittel und das Meiden intensiver Sonne, auch bei Aktivitäten im Freien. Bewegung im Freien wird in die sonnenärmeren Tageszeiten gelegt und mit Schutzmaßnahmen kombiniert.",
          en: "The focus is on physical UV protection: protective clothing, headwear, sunscreens and avoiding intense sun, including during outdoor activities. Outdoor exercise is scheduled for the lower-sun times of day and combined with protective measures." } },
      ],
    },
  },

  {
    slug: "seborrheic-keratosis",
    icd10: "L82.1",
    illustration: "generic",
    title: { de: "Seborrhoische Keratose (Alterswarze)", en: "Seborrhoeic Keratosis" },
    summary: {
      de: "Gutartige, warzenartige, aufgesetzt wirkende Hautwucherung, häufig im höheren Alter.",
      en: "A benign, wart-like growth that looks stuck on, common in later life.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die seborrhoische Keratose (Alterswarze) ist eine sehr häufige, gutartige Hautwucherung, die mit dem Alter zunimmt. Typisch sind scharf begrenzte, bräunliche bis schwarze, warzenartige Stellen mit einer fettig-rauen Oberfläche, die wie aufgesetzt wirken. Sie sind harmlos und nicht ansteckend.",
          en: "Seborrhoeic keratosis is a very common, benign skin growth that increases with age. Typical are sharply demarcated, brownish to black, wart-like spots with a greasy, rough surface that look stuck on. They are harmless and not contagious." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose ist meist klinisch, oft mit Dermatoskop. Wichtig ist die Abgrenzung von bösartigen Pigmentveränderungen; bei Unsicherheit, raschem Wachstum, Farbwechsel oder Blutung wird eine hautärztliche Abklärung oder Probeentnahme veranlasst.",
          en: "Diagnosis is usually clinical, often with a dermatoscope. Distinguishing it from malignant pigmented changes is important; when uncertain, or with rapid growth, colour change or bleeding, a dermatological assessment or biopsy is arranged." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Eine Behandlung ist medizinisch meist nicht nötig. Stören die Stellen kosmetisch oder durch Reibung, können sie abgetragen, vereist oder mit anderen Verfahren entfernt werden. Bei diagnostischer Unsicherheit steht die Abklärung an erster Stelle.",
          en: "Treatment is usually not medically necessary. If the spots are cosmetically bothersome or irritated by friction, they can be shaved off, frozen or removed with other methods. Where the diagnosis is uncertain, assessment comes first." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Da es sich um gutartige Veränderungen handelt, stehen Beobachtung und eine sanfte Hautpflege im Vordergrund. Reibung durch Kleidung oder Schmuck an betroffenen Stellen wird reduziert. Ergänzende Hausmittel zur Entfernung werden nicht empfohlen; Veränderungen sind ärztlich zu prüfen.",
          en: "As these are benign changes, observation and gentle skin care are the priority. Friction from clothing or jewellery on affected spots is reduced. Complementary home remedies for removal are not recommended; changes should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Die TCM bietet für diese gutartigen Alterswarzen keine ursächliche Behandlung. Begleitende Maßnahmen können das allgemeine Wohlbefinden unterstützen; verdächtige Veränderungen gehören in ärztliche Beurteilung.",
          en: "TCM offers no causal treatment for these benign growths. Complementary measures may support general wellbeing; suspicious changes belong in medical assessment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine ausgewogene Ernährung und hautfreundliche Routinen. Zur Entfernung der Wucherungen trägt sie nicht bei; auffällige Veränderungen sind ärztlich abzuklären.",
          en: "Ayurvedic support emphasises a balanced diet and skin-friendly routines. It does not contribute to removing the growths; conspicuous changes should be medically assessed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Unterstützend wirkt das Vermeiden von mechanischer Reizung an den Stellen, etwa durch reibende Kleidung, Gürtel oder Träger. Eine sanfte, regelmäßige Hautpflege hält die umgebende Haut geschmeidig.",
          en: "A supportive measure is avoiding mechanical irritation of the spots, for example from rubbing clothing, belts or straps. Gentle, regular skin care keeps the surrounding skin supple." } },
      ],
    },
  },

  {
    slug: "melasma",
    icd10: "L81.1",
    illustration: "generic",
    title: { de: "Melasma (Chloasma)", en: "Melasma" },
    summary: {
      de: "Bräunliche, meist symmetrische Pigmentflecken im Gesicht, verstärkt durch Sonne und Hormone.",
      en: "Brownish, usually symmetric pigment patches on the face, intensified by sun and hormones.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Das Melasma (Chloasma) ist eine erworbene Pigmentstörung mit bräunlichen, meist symmetrischen Flecken an Wangen, Stirn, Oberlippe und Kinn. Es entsteht durch eine vermehrte Melaninbildung und wird durch UV-Licht, hormonelle Einflüsse (z. B. Schwangerschaft, hormonelle Verhütung) und genetische Veranlagung begünstigt. Es ist harmlos, aber oft kosmetisch belastend und neigt zu Rückfällen.",
          en: "Melasma is an acquired pigment disorder with brownish, usually symmetric patches on the cheeks, forehead, upper lip and chin. It arises from increased melanin production and is promoted by UV light, hormonal influences (e.g. pregnancy, hormonal contraception) and genetic predisposition. It is harmless but often cosmetically distressing and tends to relapse." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose ist klinisch, oft mit Dermatoskop. Wichtig ist die Abgrenzung von anderen Pigmentveränderungen. Mögliche Auslöser wie hormonelle Präparate und die UV-Belastung werden besprochen.",
          en: "Diagnosis is clinical, often with a dermatoscope. Distinguishing it from other pigment changes is important. Possible triggers such as hormonal preparations and UV exposure are discussed." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Grundlage ist konsequenter, hoher Sonnenschutz. Zusätzlich kommen aufhellende Wirkstoffcremes (z. B. mit Azelainsäure, Vitamin C oder verordnete Kombinationen) und bei Bedarf schonende dermatologische Verfahren zum Einsatz. Geduld ist nötig, und Rückfälle bei erneuter Sonnenexposition sind häufig.",
          en: "The foundation is consistent, high sun protection. In addition, lightening active creams (e.g. with azelaic acid, vitamin C or prescribed combinations) and, when needed, gentle dermatological procedures are used. Patience is required, and relapses with renewed sun exposure are common." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Sonnenschutz & Pflege", en: "Sun protection & care" } },
        { t: "ul", items: {
          de: ["Täglicher, hoher Sonnenschutz – auch im Alltag und an bewölkten Tagen – ist entscheidend.","Mineralische Sonnenschutzmittel und Kopfbedeckungen ergänzen den Schutz.","Aggressive Peelings und reizende Produkte meiden, da sie die Pigmentierung verstärken können.","Ergänzende Mittel sind ärztlich zu prüfen."],
          en: ["Daily, high sun protection – also in everyday life and on cloudy days – is decisive.","Mineral sunscreens and headwear complement the protection.","Avoid aggressive peels and irritating products, as they can intensify the pigmentation.","Complementary products should be medically reviewed."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden Pigmentflecken Mustern wie Leber-Qi-Stagnation oder Blut-Mangel zugeordnet. Begleitende Maßnahmen können das Wohlbefinden unterstützen, ersetzen aber den Sonnenschutz und die dermatologische Behandlung nicht.",
          en: "Traditionally, pigment patches are assigned to patterns such as Liver Qi stagnation or blood deficiency. Complementary measures may support wellbeing but do not replace sun protection and dermatological treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine ausgewogene Ernährung, Stressreduktion und sanfte Hautpflege. Äußerliche Präparate sind ärztlich zu prüfen, da manche die Haut reizen und die Pigmentierung verstärken können.",
          en: "Ayurvedic support emphasises a balanced diet, stress reduction and gentle skin care. External preparations should be medically reviewed, as some can irritate the skin and intensify pigmentation." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Im Vordergrund steht der physische UV-Schutz: breitkrempige Hüte, Sonnenbrille und schützende Kleidung, besonders bei Aktivitäten im Freien. Aktivitäten in der prallen Sonne werden in schattigere Zeiten verlegt, um eine Verstärkung der Flecken zu vermeiden.",
          en: "The focus is on physical UV protection: wide-brimmed hats, sunglasses and protective clothing, especially during outdoor activities. Activities in full sun are moved to shadier times to avoid intensifying the patches." } },
      ],
    },
  },

  {
    slug: "vitiligo",
    icd10: "L80",
    illustration: "generic",
    title: { de: "Vitiligo (Weißfleckenkrankheit)", en: "Vitiligo" },
    summary: {
      de: "Scharf begrenzte, pigmentfreie weiße Hautflecken durch Verlust der Pigmentzellen.",
      en: "Sharply demarcated, pigment-free white skin patches from loss of pigment cells.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Vitiligo (Weißfleckenkrankheit) ist eine Pigmentstörung, bei der pigmentbildende Zellen zerstört werden, sodass scharf begrenzte, milchig-weiße Flecken entstehen. Häufig betroffen sind Hände, Gesicht, Achseln und Körperöffnungen. Es handelt sich um eine wahrscheinlich autoimmun bedingte Erkrankung, die harmlos, aber für viele psychisch belastend ist; gelegentlich bestehen weitere Autoimmunerkrankungen.",
          en: "Vitiligo is a pigment disorder in which pigment-producing cells are destroyed, so that sharply demarcated, milky-white patches develop. Commonly affected are the hands, face, armpits and body openings. It is a probably autoimmune disease that is harmless but psychologically burdensome for many; occasionally other autoimmune conditions are present." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose ist klinisch, oft mit einer speziellen UV-Lampe (Wood-Licht). Je nach Befund werden begleitende Autoimmunerkrankungen, etwa der Schilddrüse, mitbedacht und bei Bedarf untersucht.",
          en: "Diagnosis is clinical, often with a special UV lamp (Wood's light). Depending on findings, associated autoimmune conditions, such as of the thyroid, are considered and investigated when needed." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Behandlungsoptionen sind entzündungshemmende Cremes (Kortikosteroide oder Calcineurin-Hemmer), UV-Therapie und neuere zielgerichtete Wirkstoffe; der Erfolg ist individuell verschieden und braucht Geduld. Wichtig sind Sonnenschutz der pigmentfreien Areale und, bei Bedarf, psychologische Unterstützung sowie kosmetische Abdeckung.",
          en: "Treatment options are anti-inflammatory creams (corticosteroids or calcineurin inhibitors), UV therapy and newer targeted agents; success varies individually and takes patience. Sun protection of the pigment-free areas and, when needed, psychological support and cosmetic camouflage are important." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Schutz & Umgang", en: "Protection & coping" } },
        { t: "ul", items: {
          de: ["Die pigmentfreien Stellen sind sehr sonnenempfindlich und brauchen konsequenten Sonnenschutz.","Kosmetische Abdeckprodukte können den Alltag erleichtern.","Stressbewältigung und Austausch, etwa in Selbsthilfegruppen, unterstützen den Umgang mit der Erkrankung.","Ergänzende Mittel sind ärztlich zu prüfen."],
          en: ["The pigment-free areas are very sun-sensitive and need consistent sun protection.","Cosmetic camouflage products can make everyday life easier.","Stress management and exchange, for instance in support groups, help with coping.","Complementary products should be medically reviewed."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird die Pigmentstörung Mustern wie Qi- und Blut-Mangel oder Stagnation zugeordnet. Akupunktur und begleitende Maßnahmen können das Wohlbefinden unterstützen, ersetzen aber die dermatologische Behandlung nicht.",
          en: "Traditionally, the pigment disorder is assigned to patterns such as Qi and blood deficiency or stagnation. Acupuncture and complementary measures may support wellbeing but do not replace dermatological treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Ansätze nutzen traditionell bestimmte Pflanzen, die die Lichtempfindlichkeit erhöhen können; solche Präparate sind wegen möglicher Nebenwirkungen und Wechselwirkungen unbedingt ärztlich zu prüfen. Ausgewogene Ernährung und Stressreduktion wirken begleitend unterstützend.",
          en: "Ayurvedic approaches traditionally use certain plants that can increase light sensitivity; such preparations must be medically reviewed because of possible side effects and interactions. A balanced diet and stress reduction provide complementary support." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Im Vordergrund steht der konsequente physische UV-Schutz der pigmentfreien Areale durch Kleidung, Kopfbedeckung und Sonnenschutzmittel, da diese Haut sehr leicht verbrennt. Entspannungsverfahren können helfen, die psychische Belastung zu mindern.",
          en: "The focus is on consistent physical UV protection of the pigment-free areas through clothing, headwear and sunscreen, as this skin burns very easily. Relaxation techniques can help reduce the psychological burden." } },
      ],
    },
  },

  {
    slug: "androgenetic-alopecia",
    icd10: "L64.9",
    illustration: "generic",
    title: { de: "Androgenetische Alopezie (erblicher Haarausfall)", en: "Androgenetic Alopecia" },
    summary: {
      de: "Erblich bedingte, langsam fortschreitende Haarlichtung nach typischem Muster.",
      en: "Hereditary, slowly progressive hair thinning in a typical pattern.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die androgenetische Alopezie ist die häufigste Form des Haarausfalls und erblich bedingt. Bei Männern zeigt sich meist eine Lichtung an Geheimratsecken und Hinterkopf, bei Frauen eine diffuse Ausdünnung im Scheitelbereich. Die Haarfollikel reagieren empfindlicher auf körpereigene Androgene, wodurch die Haare feiner werden und die Wachstumsphase verkürzt ist.",
          en: "Androgenetic alopecia is the most common form of hair loss and is hereditary. In men it usually appears as thinning at the temples and crown, in women as a diffuse thinning in the parting area. The hair follicles react more sensitively to the body's own androgens, so the hairs become finer and the growth phase is shortened." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose ergibt sich meist aus dem typischen Muster und Verlauf. Bei Frauen und untypischen Fällen werden andere Ursachen (z. B. Eisenmangel, Schilddrüse, hormonelle Störungen) abgeklärt. Eine Kopfhautuntersuchung (Trichoskopie) kann ergänzend helfen.",
          en: "Diagnosis usually follows from the typical pattern and course. In women and atypical cases, other causes (e.g. iron deficiency, thyroid, hormonal disorders) are investigated. A scalp examination (trichoscopy) can provide additional help." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Bewährt sind äußerliches Minoxidil und, bei Männern, Finasterid als Tablette; bei Frauen werden individuell angepasste Optionen gewählt. Die Behandlung bremst den Verlauf und kann verdichten, wirkt aber nur bei fortgesetzter Anwendung. Eine Haartransplantation ist eine weitere Option. Realistische Erwartungen sind wichtig.",
          en: "Topical minoxidil and, in men, oral finasteride are established; in women, individually adapted options are chosen. Treatment slows the course and can add density but works only with continued use. A hair transplant is a further option. Realistic expectations are important." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Pflege & Realismus", en: "Care & realism" } },
        { t: "ul", items: {
          de: ["Eine ausgewogene, eiweiß- und eisenreiche Ernährung unterstützt gesundes Haar; ein nachgewiesener Mangel wird gezielt behandelt.","Sanfte Haarpflege und das Vermeiden von starkem Zug (enge Frisuren) schonen die Haare.","Nahrungsergänzungen sind nur bei nachgewiesenem Mangel sinnvoll und ärztlich abzustimmen.","Von unbelegten Wundermitteln wird abgeraten."],
          en: ["A balanced diet rich in protein and iron supports healthy hair; a proven deficiency is treated specifically.","Gentle hair care and avoiding strong traction (tight hairstyles) spare the hair.","Supplements are only useful with a proven deficiency and should be medically coordinated.","Unproven miracle products are not advisable."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird Haarausfall Mustern wie Nieren- und Blut-Mangel zugeordnet. Akupunktur und Ernährungsberatung können begleitend das allgemeine Wohlbefinden unterstützen, haben bei erblichem Haarausfall aber keinen belegten ursächlichen Effekt.",
          en: "Traditionally, hair loss is assigned to patterns such as Kidney and blood deficiency. Acupuncture and dietary advice may support general wellbeing as complementary care but have no proven causal effect in hereditary hair loss." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine ausgewogene Ernährung, Stressreduktion und sanfte Kopfhautpflege, etwa mit geeigneten Ölen. Innerlich eingenommene Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen; ein ursächlicher Effekt auf erblichen Haarausfall ist nicht belegt.",
          en: "Ayurvedic support emphasises a balanced diet, stress reduction and gentle scalp care, for instance with suitable oils. Orally taken herbal preparations should be medically reviewed for interactions; a causal effect on hereditary hair loss is not proven." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Unterstützend wirken eine schonende Kopfhautpflege, das Vermeiden von Hitze- und Zugbelastung der Haare sowie Entspannungsverfahren, da Stress Haarausfall zusätzlich begünstigen kann. Eine sanfte Kopfhautmassage fördert das Wohlbefinden, ersetzt aber keine wirksame Behandlung.",
          en: "Supportive measures include gentle scalp care, avoiding heat and traction on the hair and relaxation techniques, since stress can additionally promote hair loss. A gentle scalp massage supports wellbeing but does not replace effective treatment." } },
      ],
    },
  },

  {
    slug: "alopecia-areata",
    icd10: "L63.9",
    illustration: "generic",
    title: { de: "Kreisrunder Haarausfall (Alopecia areata)", en: "Alopecia Areata" },
    summary: {
      de: "Plötzlicher, kreisrunder Haarverlust durch eine Fehlreaktion des Immunsystems.",
      en: "Sudden, circular hair loss caused by a misdirected immune reaction.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Der kreisrunde Haarausfall (Alopecia areata) ist eine autoimmun bedingte Erkrankung, bei der das Immunsystem die Haarwurzeln angreift. Typisch sind ein oder mehrere scharf begrenzte, kahle runde Stellen, meist an der Kopfhaut, seltener am Bart oder anderen Körperstellen. Der Verlauf ist unvorhersehbar; die Haare können von selbst nachwachsen, aber auch erneut ausfallen.",
          en: "Alopecia areata is an autoimmune disease in which the immune system attacks the hair roots. Typical are one or several sharply demarcated, bald round patches, usually on the scalp, less often in the beard or other body areas. The course is unpredictable; the hair can regrow on its own but can also fall out again." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose ist meist klinisch, unterstützt durch eine Kopfhautuntersuchung (Trichoskopie). Je nach Situation werden begleitende Autoimmunerkrankungen berücksichtigt. Nagelveränderungen können begleitend auftreten.",
          en: "Diagnosis is usually clinical, supported by a scalp examination (trichoscopy). Depending on the situation, associated autoimmune conditions are considered. Nail changes can occur alongside." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Bei begrenztem Befall kommen entzündungshemmende Cremes oder örtliche Maßnahmen infrage; oft wird auch abgewartet, da eine spontane Erholung möglich ist. Bei ausgedehntem oder belastendem Verlauf stehen weitere Optionen bis hin zu modernen zielgerichteten Wirkstoffen zur Verfügung. Psychologische Unterstützung ist wichtig.",
          en: "For limited involvement, anti-inflammatory creams or local measures are options; often watchful waiting is chosen, as spontaneous recovery is possible. For extensive or distressing disease, further options up to modern targeted agents are available. Psychological support is important." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Umgang & Unterstützung", en: "Coping & support" } },
        { t: "ul", items: {
          de: ["Stressbewältigung kann sinnvoll sein, da Stress Schübe begünstigen kann.","Sanfte Kopfhaut- und Haarpflege schont die betroffenen Bereiche.","Der Austausch in Selbsthilfegruppen und, bei Bedarf, psychologische Begleitung helfen im Umgang.","Von unbelegten Wundermitteln wird abgeraten; ergänzende Mittel sind ärztlich zu prüfen."],
          en: ["Stress management can be useful, as stress may promote flares.","Gentle scalp and hair care spares the affected areas.","Exchange in support groups and, when needed, psychological support help with coping.","Unproven miracle products are not advisable; complementary products should be medically reviewed."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird der plötzliche Haarverlust Mustern wie Blut-Mangel, Nieren-Schwäche oder Stagnation zugeordnet. Akupunktur und begleitende Maßnahmen können das Wohlbefinden unterstützen, ersetzen aber die dermatologische Beurteilung und Behandlung nicht.",
          en: "Traditionally, the sudden hair loss is assigned to patterns such as blood deficiency, Kidney weakness or stagnation. Acupuncture and complementary measures may support wellbeing but do not replace dermatological assessment and treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Stressreduktion, eine ausgewogene Ernährung und sanfte Kopfhautpflege. Innerlich eingenommene Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "Ayurvedic support emphasises stress reduction, a balanced diet and gentle scalp care. Orally taken herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Unterstützend wirken Entspannungs- und Stressbewältigungsverfahren sowie eine sanfte Kopfhautpflege. Bei fehlendem Haar an der Kopfhaut ist zudem ein angemessener Sonnenschutz der kahlen Stellen im Freien sinnvoll.",
          en: "Supportive measures include relaxation and stress-management techniques and gentle scalp care. Where scalp hair is missing, appropriate sun protection of the bald areas outdoors is also advisable." } },
      ],
    },
  },

  {
    slug: "onychomycosis-nail-fungus",
    icd10: "B35.1",
    illustration: "generic",
    title: { de: "Nagelpilz (Onychomykose)", en: "Nail Fungus (Onychomycosis)" },
    summary: {
      de: "Pilzinfektion der Nägel mit Verfärbung, Verdickung und Brüchigkeit, meist an den Zehen.",
      en: "A fungal nail infection with discolouration, thickening and brittleness, mostly on the toes.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Der Nagelpilz (Onychomykose) ist eine Pilzinfektion der Finger- oder häufiger der Fußnägel. Typisch sind eine gelblich-weißliche Verfärbung, Verdickung, Brüchigkeit und ein Ablösen des Nagels vom Nagelbett. Begünstigend wirken Fußpilz, enges Schuhwerk, feucht-warmes Milieu, Durchblutungsstörungen und Diabetes.",
          en: "Onychomycosis is a fungal infection of the finger or, more often, the toenails. Typical are a yellowish-white discolouration, thickening, brittleness and a lifting of the nail from the nail bed. Athlete's foot, tight footwear, a warm, moist environment, circulatory problems and diabetes are contributing factors." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Vor einer oft langwierigen Behandlung ist ein Erregernachweis aus Nagelmaterial sinnvoll (Mikroskopie, Kultur oder molekulare Verfahren), um andere Nagelveränderungen abzugrenzen. Begleitender Fußpilz wird mitbehandelt.",
          en: "Before an often lengthy treatment, pathogen confirmation from nail material is advisable (microscopy, culture or molecular methods) to distinguish other nail changes. Accompanying athlete's foot is treated as well." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Bei begrenztem Befall werden Antipilz-Nagellacke und das Abtragen des befallenen Nagels eingesetzt; bei ausgeprägtem Befall sind Antipilz-Tabletten über Wochen bis Monate nötig. Geduld ist wichtig, da der Nagel erst mit dem Herauswachsen gesund erscheint. Wiederansteckung wird durch Fußhygiene vermieden.",
          en: "For limited involvement, antifungal nail lacquers and filing down the affected nail are used; for pronounced involvement, antifungal tablets over weeks to months are needed. Patience is important, as the nail only looks healthy as it grows out. Reinfection is avoided through foot hygiene." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Fußhygiene & Vorbeugung", en: "Foot hygiene & prevention" } },
        { t: "ul", items: {
          de: ["Füße trocken halten, besonders zwischen den Zehen, und atmungsaktives Schuhwerk tragen.","Socken und Handtücher häufig wechseln und heiß waschen.","In Bädern und Duschen Badeschuhe tragen und Fußpilz konsequent mitbehandeln.","Ergänzende Hausmittel sind ärztlich zu prüfen, besonders bei Diabetes oder Durchblutungsstörungen."],
          en: ["Keep feet dry, especially between the toes, and wear breathable footwear.","Change socks and towels frequently and wash them hot.","Wear bathing shoes in pools and showers and consistently treat athlete's foot as well.","Complementary home remedies should be medically reviewed, especially with diabetes or circulatory problems."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird der Nagelpilz Mustern wie Feuchtigkeit und Hitze zugeordnet. Begleitende Maßnahmen können das Hautmilieu unterstützen, ersetzen aber die gezielte Antipilzbehandlung nicht.",
          en: "Traditionally, nail fungus is assigned to patterns such as dampness and heat. Complementary measures may support the skin environment but do not replace targeted antifungal treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Trockenhalten der Füße, Hygiene und eine ausgewogene Ernährung. Äußerliche Präparate sind ärztlich zu prüfen und ersetzen die Antipilzbehandlung nicht.",
          en: "Ayurvedic support emphasises keeping the feet dry, hygiene and a balanced diet. External preparations should be medically reviewed and do not replace antifungal treatment." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Unterstützend wirken das gründliche Abtrocknen der Füße nach Sport und Duschen, gut sitzendes, atmungsaktives Schuhwerk und Hygiene in Gemeinschaftsbädern. Bei verdickten Nägeln kann eine fachgerechte podologische Nagelpflege den Druck im Schuh verringern.",
          en: "Supportive measures include thorough drying of the feet after exercise and showering, well-fitting, breathable footwear and hygiene in communal pools. For thickened nails, professional podiatric nail care can reduce pressure inside the shoe." } },
      ],
    },
  },

  {
    slug: "ingrown-toenail",
    icd10: "L60.0",
    illustration: "generic",
    title: { de: "Eingewachsener Zehennagel", en: "Ingrown Toenail" },
    summary: {
      de: "Schmerzhaftes Einwachsen des Nagelrands in die Haut, meist an der großen Zehe.",
      en: "Painful growing of the nail edge into the skin, usually on the big toe.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Beim eingewachsenen Zehennagel (Unguis incarnatus) dringt der seitliche Nagelrand in das umgebende Gewebe ein, meist an der großen Zehe. Es entstehen Schmerzen, Rötung, Schwellung und mitunter eine Entzündung mit übermäßigem Gewebewachstum oder Eiterung. Begünstigend wirken falsches Nägelschneiden, zu enge Schuhe, Verletzungen und eine ungünstige Nagelform.",
          en: "In an ingrown toenail (unguis incarnatus), the lateral nail edge penetrates the surrounding tissue, usually on the big toe. Pain, redness, swelling and sometimes inflammation with excessive tissue growth or pus develop. Incorrect nail cutting, overly tight shoes, injuries and an unfavourable nail shape are contributing factors." } },
      ],
      medical: [
        { t: "sub", text: { de: "Beurteilung & konservative Behandlung", en: "Assessment & conservative treatment" } },
        { t: "p", text: {
          de: "Leichte Fälle werden konservativ behandelt: warme Fußbäder, entlastendes Einlegen von Material unter den Nagelrand, geeignete Nagelpflege und weites Schuhwerk. Bei einer Entzündung können antiseptische Maßnahmen und ärztliche Betreuung nötig sein.",
          en: "Mild cases are treated conservatively: warm foot baths, relieving placement of material under the nail edge, appropriate nail care and roomy footwear. With inflammation, antiseptic measures and medical care may be needed." } },
        { t: "sub", text: { de: "Weitergehende Behandlung", en: "Further treatment" } },
        { t: "p", text: {
          de: "Bei wiederkehrenden oder ausgeprägten Fällen kann eine Nagelspangenbehandlung oder ein kleiner operativer Eingriff (z. B. eine teilweise Nagelentfernung mit Verödung des Randes) erfolgen. Bei Diabetes oder Durchblutungsstörungen ist besondere Vorsicht und frühzeitige ärztliche Betreuung geboten.",
          en: "For recurrent or pronounced cases, a nail brace or a small surgical procedure (e.g. partial nail removal with treatment of the edge) can be performed. With diabetes or circulatory problems, particular caution and early medical care are advised." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Fußpflege & Vorbeugung", en: "Foot care & prevention" } },
        { t: "ul", items: {
          de: ["Nägel gerade und nicht zu kurz schneiden, die Ecken nicht rund abrunden.","Bequemes, ausreichend weites Schuhwerk trägt zur Entlastung bei.","Warme Fußbäder können die Haut weich machen und Beschwerden lindern.","Bei Diabetes oder Durchblutungsstörungen frühzeitig fachliche Fußpflege (Podologie) und ärztliche Hilfe suchen."],
          en: ["Cut nails straight and not too short, and do not round off the corners.","Comfortable, sufficiently roomy footwear helps relieve pressure.","Warm foot baths can soften the skin and ease symptoms.","With diabetes or circulatory problems, seek professional foot care (podiatry) and medical help early."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird die entzündliche Schwellung Mustern wie Feuchtigkeit und Hitze zugeordnet. Begleitende Maßnahmen können das Wohlbefinden unterstützen; die mechanische Ursache und eine Entzündung erfordern jedoch die entsprechende Behandlung.",
          en: "Traditionally, the inflammatory swelling is assigned to patterns such as dampness and heat. Complementary measures may support wellbeing; the mechanical cause and any inflammation, however, require appropriate treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Fußhygiene, sanfte Pflege und geeignetes Schuhwerk. Äußerliche Präparate sind ärztlich zu prüfen; bei Entzündung oder Grunderkrankungen wie Diabetes ist ärztliche Betreuung erforderlich.",
          en: "Ayurvedic support emphasises foot hygiene, gentle care and suitable footwear. External preparations should be medically reviewed; with inflammation or underlying conditions such as diabetes, medical care is required." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Im Vordergrund stehen mechanische Entlastung und Fußpflege: gut sitzende, weite Schuhe, korrektes Nägelschneiden und das Vermeiden von Druck auf die betroffene Zehe. Eine fachgerechte podologische Betreuung kann Nagelform und Schuhdruck gezielt verbessern.",
          en: "The focus is on mechanical relief and foot care: well-fitting, roomy shoes, correct nail cutting and avoiding pressure on the affected toe. Professional podiatric care can specifically improve nail shape and shoe pressure." } },
      ],
    },
  },

  {
    slug: "hyperhidrosis",
    icd10: "R61",
    illustration: "generic",
    title: { de: "Übermäßiges Schwitzen (Hyperhidrose)", en: "Excessive Sweating (Hyperhidrosis)" },
    summary: {
      de: "Über das normale Maß hinausgehendes Schwitzen, oft an Händen, Füßen und Achseln.",
      en: "Sweating beyond the normal level, often on the hands, feet and armpits.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Hyperhidrose bezeichnet ein übermäßiges, über den Bedarf der Temperaturregulation hinausgehendes Schwitzen. Bei der häufigen primären Form sind vor allem Achseln, Handflächen, Fußsohlen und Stirn betroffen, oft schon in jungen Jahren und unabhängig von der Außentemperatur. Die sekundäre Form hat eine zugrunde liegende Ursache. Das Schwitzen kann den Alltag und das Selbstbewusstsein stark belasten.",
          en: "Hyperhidrosis refers to excessive sweating beyond the needs of temperature regulation. In the common primary form, mainly the armpits, palms, soles and forehead are affected, often from a young age and independent of the outside temperature. The secondary form has an underlying cause. The sweating can strongly burden everyday life and self-confidence." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Diagnose stützt sich auf die Beschwerdeschilderung und die betroffenen Regionen. Bei nächtlichem, generalisiertem oder neu aufgetretenem starkem Schwitzen wird nach einer zugrunde liegenden Ursache gesucht (z. B. Schilddrüse, Infektionen, Medikamente, hormonelle Veränderungen).",
          en: "Diagnosis rests on the symptom description and the affected regions. With night-time, generalised or new-onset heavy sweating, an underlying cause is sought (e.g. thyroid, infections, medicines, hormonal changes)." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Stufenweise kommen aluminiumchloridhaltige Antitranspirantien, die Leitungswasser-Iontophorese (vor allem an Händen und Füßen), Botulinumtoxin-Injektionen und in ausgewählten Fällen Tabletten oder operative Verfahren zum Einsatz. Die Auswahl richtet sich nach Lokalisation und Leidensdruck.",
          en: "In steps, aluminium-chloride antiperspirants, tap-water iontophoresis (especially for hands and feet), botulinum toxin injections and, in selected cases, tablets or surgical procedures are used. The choice depends on location and level of distress." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Alltag & Pflege", en: "Everyday life & care" } },
        { t: "ul", items: {
          de: ["Atmungsaktive Kleidung und Schuhe aus natürlichen Materialien reduzieren den Schweißstau.","Aluminiumchloridhaltige Antitranspirantien abends auf trockene Haut auftragen.","Auslöser wie scharfe Speisen, Koffein und Stress nach Möglichkeit reduzieren.","Ergänzende pflanzliche Mittel (z. B. Salbei) sind ärztlich zu prüfen."],
          en: ["Breathable clothing and shoes from natural materials reduce sweat build-up.","Apply aluminium-chloride antiperspirants to dry skin in the evening.","Reduce triggers such as spicy food, caffeine and stress where possible.","Complementary herbal products (e.g. sage) should be medically reviewed."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird übermäßiges Schwitzen Mustern wie einem Qi-Mangel mit Schwäche der Abwehr oder innerer Hitze zugeordnet. Akupunktur und Ernährungsberatung können begleitend eingesetzt werden und ersetzen bei Bedarf die spezifische Behandlung nicht.",
          en: "Traditionally, excessive sweating is assigned to patterns such as a Qi deficiency with weak defences or internal heat. Acupuncture and dietary advice may be used as complementary care and, when needed, do not replace specific treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine kühlende, ausgewogene Ernährung, Stressreduktion und geregelte Routinen. Innerlich eingenommene Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "Ayurvedic support emphasises a cooling, balanced diet, stress reduction and regular routines. Orally taken herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Unterstützend wirken Entspannungs- und Stressbewältigungsverfahren, da Anspannung das Schwitzen verstärkt, sowie ein durchdachtes Kleidungs- und Schuhmanagement. Die Leitungswasser-Iontophorese, eine physikalische Behandlung, ist besonders an Händen und Füßen wirksam und kann nach Anleitung zu Hause fortgeführt werden.",
          en: "Supportive measures include relaxation and stress-management techniques, as tension increases sweating, and thoughtful clothing and shoe management. Tap-water iontophoresis, a physical treatment, is especially effective for hands and feet and can be continued at home after instruction." } },
      ],
    },
  },

  {
    slug: "pruritus",
    icd10: "L29.9",
    illustration: "generic",
    title: { de: "Juckreiz (Pruritus)", en: "Pruritus (Itching)" },
    summary: {
      de: "Quälender Juckreiz als Symptom, das viele Haut- und innere Ursachen haben kann.",
      en: "Distressing itching as a symptom that can have many skin and internal causes.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Pruritus ist der medizinische Begriff für Juckreiz, der als Symptom zahlreicher Ursachen auftreten kann. Dazu zählen trockene Haut, Ekzeme und andere Hauterkrankungen, Allergien, aber auch innere Ursachen wie Leber-, Nieren- oder Schilddrüsenerkrankungen, Blutbildveränderungen, Medikamente oder psychische Belastung. Anhaltender Juckreiz kann den Schlaf und die Lebensqualität erheblich beeinträchtigen.",
          en: "Pruritus is the medical term for itching, which can occur as a symptom of numerous causes. These include dry skin, eczema and other skin diseases, allergies, but also internal causes such as liver, kidney or thyroid disease, blood disorders, medicines or psychological strain. Persistent itching can considerably impair sleep and quality of life." } },
      ],
      medical: [
        { t: "sub", text: { de: "Ursachensuche", en: "Identifying the cause" } },
        { t: "p", text: {
          de: "Zentral ist das Finden der Ursache. Bei sichtbarer Hauterkrankung wird diese behandelt. Bei Juckreiz ohne Hautbefund, anhaltendem oder generalisiertem Juckreiz erfolgt eine gezielte Abklärung mit Anamnese, körperlicher Untersuchung und Laboruntersuchungen, um innere Ursachen zu erkennen.",
          en: "Central is finding the cause. When a visible skin disease is present, it is treated. For itching without skin findings, or persistent or generalised itching, a targeted work-up with history, physical examination and laboratory tests is done to detect internal causes." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die Behandlung richtet sich nach der Ursache. Allgemein helfen konsequente rückfettende Pflege, das Meiden von Austrocknung und Reizstoffen sowie je nach Situation entzündungshemmende Cremes, Antihistaminika oder spezielle Medikamente. Wichtig ist, den Kratz-Juck-Kreislauf zu durchbrechen.",
          en: "Treatment depends on the cause. Generally, consistent emollient care, avoiding drying and irritants and, depending on the situation, anti-inflammatory creams, antihistamines or special medicines help. Breaking the scratch-itch cycle is important." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Linderung & Hautpflege", en: "Relief & skin care" } },
        { t: "ul", items: {
          de: ["Regelmäßige, rückfettende Pflege und lauwarmes, kurzes Duschen beugen Trockenheit vor.","Kühlung, weiche Baumwollkleidung und kurze Fingernägel lindern den Juckreiz.","Auslöser wie Überwärmung, raue Textilien und reizende Produkte meiden.","Anhaltender Juckreiz gehört ärztlich abgeklärt; ergänzende Mittel sind ärztlich zu prüfen."],
          en: ["Regular, emollient care and lukewarm, short showers prevent dryness.","Cooling, soft cotton clothing and short fingernails ease the itch.","Avoid triggers such as overheating, rough textiles and irritating products.","Persistent itching should be medically assessed; complementary products should be medically reviewed."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird Juckreiz Mustern wie Wind, Hitze, Feuchtigkeit oder – bei trockener Haut – Blut-Mangel zugeordnet. Akupunktur und Ernährungsberatung können begleitend eingesetzt werden; anhaltender Juckreiz sollte dennoch ärztlich auf innere Ursachen abgeklärt werden.",
          en: "Traditionally, itching is assigned to patterns such as wind, heat, dampness or – with dry skin – blood deficiency. Acupuncture and dietary advice may be used as complementary care; persistent itching should nevertheless be medically assessed for internal causes." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine kühlende, ausgewogene Ernährung, Stressreduktion und sanfte Hautpflege mit geeigneten Ölen bei trockener Haut. Innerlich eingenommene Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "Ayurvedic support emphasises a cooling, balanced diet, stress reduction and gentle skin care with suitable oils for dry skin. Orally taken herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Unterstützend wirken kühlende Maßnahmen, ein hautfreundliches Raumklima mit ausreichender Luftfeuchtigkeit und das Vermeiden von Überwärmung. Entspannungs- und Stressbewältigungsverfahren können den Kratz-Juck-Kreislauf durchbrechen und den Schlaf verbessern.",
          en: "Supportive measures include cooling, a skin-friendly indoor climate with adequate humidity and avoiding overheating. Relaxation and stress-management techniques can break the scratch-itch cycle and improve sleep." } },
      ],
    },
  },
]
