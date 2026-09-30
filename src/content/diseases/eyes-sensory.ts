import type { Disease } from "@/content/treatments"

/**
 * Conditions for "Eyes, Ears & Sensory Organs" (eyes, ears, balance and the
 * nose/ENT). This area is empty on drdosthealth.com, so the content here is
 * generated: original bilingual prose (definition + the five treatment
 * modalities) based on common ICD-10 conditions for a general/private
 * practice. Every page is reviewed by Dr. Dost before use; images are added
 * later via the Gemini web workflow and will carry the "KI-generiert" caption.
 */
export const eyesSensoryDiseases: Disease[] = [
  {
    slug: "conjunctivitis-unspecified",
    icd10: "H10.9",
    illustration: "generic",
    title: { de: "Bindehautentzündung (Konjunktivitis)", en: "Conjunctivitis" },
    summary: {
      de: "Entzündung der Augenbindehaut mit Rötung, Tränen und Fremdkörpergefühl – meist harmlos.",
      en: "Inflammation of the eye's conjunctiva with redness, tearing and grittiness – usually harmless.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Bindehautentzündung ist eine Reizung oder Entzündung der Bindehaut, der dünnen Schleimhaut über dem weißen Teil des Auges und der Lidinnenseite. Ursachen sind Viren, Bakterien, Allergien oder Reize wie Zugluft, Rauch und trockene Luft. Typisch sind Rötung, Tränen, Fremdkörpergefühl, Brennen und morgendlich verklebte Lider. Meist verläuft sie harmlos und heilt von selbst.",
          en: "Conjunctivitis is irritation or inflammation of the conjunctiva, the thin membrane over the white of the eye and the inner eyelid. Causes include viruses, bacteria, allergies or irritants such as draught, smoke and dry air. Typical features are redness, tearing, a gritty sensation, burning and lids stuck together in the morning. It is usually harmless and settles on its own." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Die Diagnose erfolgt klinisch; Art und Farbe der Absonderung, Juckreiz und Begleitumstände geben Hinweise auf die Ursache. Bei starken Schmerzen, Lichtscheu, Sehverschlechterung, Hornhautbeteiligung oder bei Kontaktlinsenträgern ist eine augenärztliche Untersuchung angezeigt.",
          en: "Diagnosis is clinical; the type and colour of discharge, itch and circumstances point to the cause. Marked pain, light sensitivity, reduced vision, corneal involvement or contact-lens wear warrant an ophthalmological examination." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Virale und leichte Formen werden mit Hygiene, künstlichen Tränen und kühlenden Umschlägen gelindert; sie heilen meist von selbst. Bei bakteriellem Verdacht können antibiotische Augentropfen verordnet werden. Handtücher und Kosmetik werden nicht geteilt, um Ansteckung zu vermeiden.",
          en: "Viral and mild forms are eased with hygiene, artificial tears and cool compresses and usually resolve on their own. When a bacterial cause is suspected, antibiotic eye drops may be prescribed. Towels and cosmetics are not shared, to avoid transmission." } },
        { t: "p", text: {
          de: "Wichtig: Starke Schmerzen, deutliche Sehverschlechterung, ausgeprägte Lichtscheu oder Beschwerden bei Kontaktlinsenträgern erfordern eine rasche augenärztliche Abklärung.",
          en: "Important: severe pain, clearly reduced vision, marked light sensitivity or symptoms in contact-lens wearers require prompt ophthalmological assessment." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Selbsthilfe & Hygiene", en: "Self-care & hygiene" } },
        { t: "ul", items: {
          de: ["Kühle, saubere Umschläge lindern Brennen und Schwellung.","Sorgfältige Handhygiene und der Verzicht auf Augenreiben verringern die Ausbreitung.","Künstliche Tränen ohne Konservierungsmittel können die Reizung mildern.","Von Augenspülungen mit Kräutertees wird abgeraten, da sie zusätzlich reizen oder verkeimen können."],
          en: ["Cool, clean compresses ease burning and swelling.","Careful hand hygiene and not rubbing the eyes reduce spread.","Preservative-free artificial tears can soften the irritation.","Eye rinses with herbal teas are discouraged, as they may irritate further or introduce germs."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden rote, tränende Augen häufig Mustern wie Wind-Hitze oder aufsteigender Leber-Hitze zugeordnet. Akupunktur und individuelle Kräuter können begleitend erwogen werden, ersetzen jedoch nicht die augenärztliche Beurteilung bei anhaltenden oder starken Beschwerden.",
          en: "In TCM, red, watering eyes are often assigned to patterns such as Wind-Heat or ascending Liver-Heat. Acupuncture and individual herbs may be considered as complementary care but do not replace ophthalmological assessment for persistent or severe symptoms." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Kühlung, Schonung der Augen, ausreichenden Schlaf und eine leichte, reizarme Ernährung. Von Augenanwendungen mit Ölen oder Pulvern ist bei akuter Entzündung abzuraten; Präparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises cooling, resting the eyes, adequate sleep and a light, non-irritating diet. Eye applications with oils or powders are discouraged during acute inflammation; preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt eine Bindehautentzündung nicht. Unterstützend helfen Augenpausen, ausreichend Schlaf und ein reizarmes Umfeld (weniger Rauch, Zugluft und Bildschirmzeit), damit sich das Auge erholen kann.",
          en: "Physiotherapy does not treat conjunctivitis. As supportive measures, eye breaks, adequate sleep and a low-irritation environment (less smoke, draught and screen time) help the eye recover." } },
      ],
    },
  },

  {
    slug: "allergic-conjunctivitis",
    icd10: "H10.1",
    illustration: "generic",
    title: { de: "Allergische Bindehautentzündung", en: "Allergic Conjunctivitis" },
    summary: {
      de: "Allergische Augenreaktion mit Juckreiz, Rötung und Tränen, oft bei Heuschnupfen.",
      en: "Allergic eye reaction with itching, redness and tearing, often with hay fever.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die allergische Bindehautentzündung ist eine Überempfindlichkeitsreaktion der Bindehaut auf Allergene wie Pollen, Hausstaubmilben oder Tierhaare. Leitsymptom ist starker Juckreiz, begleitet von Rötung, Tränen, Schwellung und einem Fremdkörpergefühl – häufig an beiden Augen und oft zusammen mit einer allergischen Nasenschleimhautentzündung (Heuschnupfen).",
          en: "Allergic conjunctivitis is a hypersensitivity reaction of the conjunctiva to allergens such as pollen, house-dust mites or animal dander. The leading symptom is intense itching, with redness, tearing, swelling and grittiness – usually in both eyes and often together with allergic rhinitis (hay fever)." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Die Diagnose stützt sich auf typische Beschwerden und den zeitlichen Zusammenhang mit Allergenkontakt. Allergietests (z. B. Hauttest oder Bluttest) können das auslösende Allergen eingrenzen.",
          en: "Diagnosis rests on typical symptoms and their timing with allergen exposure. Allergy tests (e.g. skin or blood testing) can narrow down the triggering allergen." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Im Vordergrund steht die Allergenvermeidung. Eingesetzt werden antiallergische Augentropfen (Antihistaminika, Mastzellstabilisatoren), bei Bedarf systemische Antihistaminika. Künstliche Tränen spülen Allergene aus. Bei ausgeprägter Allergie kann eine spezifische Immuntherapie (Hyposensibilisierung) sinnvoll sein.",
          en: "Allergen avoidance is central. Anti-allergic eye drops (antihistamines, mast-cell stabilisers) are used, with systemic antihistamines when needed. Artificial tears rinse out allergens. For marked allergy, specific immunotherapy (desensitisation) may be worthwhile." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Alltagsmaßnahmen", en: "Everyday measures" } },
        { t: "ul", items: {
          de: ["Pollenschutzgitter, Lüften zu pollenarmen Zeiten und Haarewaschen am Abend verringern den Allergenkontakt.","Kühle Umschläge lindern Juckreiz und Schwellung.","Künstliche Tränen spülen Allergene aus und beruhigen das Auge.","Das Reiben der Augen sollte vermieden werden, da es die Reaktion verstärkt."],
          en: ["Pollen screens, airing at low-pollen times and washing hair in the evening reduce allergen contact.","Cool compresses ease itching and swelling.","Artificial tears rinse out allergens and calm the eye.","Rubbing the eyes should be avoided, as it worsens the reaction."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden juckende, tränende Augen oft Mustern wie Wind und Wei-Qi-Schwäche zugeordnet. Akupunktur und individuelle Kräuter können begleitend zur Linderung erwogen werden und ersetzen die allergologische Behandlung nicht.",
          en: "In TCM, itchy, watering eyes are often assigned to patterns such as Wind and weakness of the defensive Wei-Qi. Acupuncture and individual herbs may be considered as complementary relief and do not replace allergy treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine kühlende, leicht verdauliche Ernährung, Nasenpflege und geregelte Routinen zur Stärkung der Widerstandskraft. Kräuterpräparate sind wegen möglicher Wechselwirkungen ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises a cooling, easily digestible diet, nasal care and regular routines to strengthen resilience. Herbal preparations should be medically reviewed because of possible interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt die Allergie nicht. Unterstützend wirken Augenpausen, ausreichender Schlaf und ein möglichst allergenarmes Umfeld; kühle Umschläge und regelmäßiges Ausspülen mit künstlichen Tränen können den Reiz mildern.",
          en: "Physiotherapy does not treat the allergy. Supportive measures are eye breaks, adequate sleep and an environment kept as low in allergens as possible; cool compresses and regular rinsing with artificial tears can soften the irritation." } },
      ],
    },
  },

  {
    slug: "subconjunctival-hemorrhage",
    icd10: "H11.3",
    illustration: "generic",
    title: { de: "Bindehautunterblutung", en: "Subconjunctival Haemorrhage" },
    summary: {
      de: "Scharf begrenzter roter Fleck im Auge durch ein geplatztes kleines Gefäß – meist harmlos.",
      en: "A sharply defined red patch in the eye from a burst small vessel – usually harmless.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der Bindehautunterblutung platzt ein kleines Gefäß unter der Bindehaut, sodass ein scharf begrenzter, leuchtend roter Fleck auf dem Augenweiß entsteht. Auslöser sind oft Husten, Pressen, Reiben, ein kleiner Stoß oder Blutdruckspitzen; häufig bleibt die Ursache offen. Die Sehkraft ist nicht beeinträchtigt, Schmerzen bestehen in der Regel nicht.",
          en: "In a subconjunctival haemorrhage a small vessel bursts beneath the conjunctiva, creating a sharply defined, bright red patch on the white of the eye. Triggers are often coughing, straining, rubbing, a minor knock or blood-pressure surges; frequently no cause is found. Vision is not affected and there is usually no pain." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung & Verlauf", en: "Assessment & course" } },
        { t: "p", text: {
          de: "Die Diagnose ist eine Blickdiagnose. Meist ist keine Behandlung nötig; die Blutung wird vom Körper innerhalb von ein bis drei Wochen abgebaut, ähnlich einem Bluterguss. Bei wiederholtem Auftreten werden Blutdruck und Gerinnung geprüft, insbesondere unter blutverdünnenden Medikamenten.",
          en: "Diagnosis is by inspection. Usually no treatment is needed; the blood is reabsorbed within one to three weeks, like a bruise. With repeated episodes, blood pressure and clotting are checked, especially in people on blood-thinning medication." } },
        { t: "p", text: {
          de: "Wichtig: Treten Schmerzen, Sehverschlechterung, Lichtscheu oder eine Verletzung des Auges hinzu, ist eine augenärztliche Untersuchung erforderlich.",
          en: "Important: if pain, reduced vision, light sensitivity or an eye injury are present, an ophthalmological examination is required." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Eine ursächliche naturheilkundliche Behandlung ist nicht erforderlich, da die Unterblutung von selbst verschwindet. Künstliche Tränen können ein begleitendes Trockenheits- oder Fremdkörpergefühl lindern; auf Augenreiben sollte verzichtet werden.",
          en: "Causal naturopathic treatment is not required, as the haemorrhage clears on its own. Artificial tears can ease any accompanying dryness or gritty feeling; rubbing the eye should be avoided." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Aus TCM-Sicht können wiederkehrende kleine Blutungen mit Hitze im Blut oder Gefäßschwäche in Verbindung gebracht werden. Etwaige begleitende Maßnahmen dienen dem allgemeinen Wohlbefinden und ersetzen die Abklärung der Ursache nicht.",
          en: "From a TCM perspective, recurring small bleeds may be associated with heat in the blood or vessel weakness. Any complementary measures serve general wellbeing and do not replace clarifying the cause." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Kühlung, Ruhe und eine ausgewogene Ernährung. Ein plötzlich sichtbarer roter Fleck ist meist harmlos; bei wiederholtem Auftreten steht die ärztliche Abklärung im Vordergrund.",
          en: "Ayurvedic support emphasises cooling, rest and a balanced diet. A suddenly visible red patch is usually harmless; with repeated episodes, medical assessment takes priority." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie hat hier keine behandelnde Rolle. Allgemein sinnvoll sind schonende Techniken bei starkem Husten oder Pressen sowie die Kontrolle eines erhöhten Blutdrucks im Rahmen der ärztlichen Betreuung.",
          en: "Physiotherapy has no treating role here. Generally sensible are gentle techniques during heavy coughing or straining and control of raised blood pressure within medical care." } },
      ],
    },
  },

  {
    slug: "pterygium",
    icd10: "H11.0",
    illustration: "generic",
    title: { de: "Flügelfell (Pterygium)", en: "Pterygium" },
    summary: {
      de: "Gutartige, flügelförmige Bindehautwucherung, die auf die Hornhaut vorwachsen kann.",
      en: "A benign, wing-shaped growth of conjunctiva that can advance onto the cornea.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Das Flügelfell ist eine gutartige, keilförmige Wucherung der Bindehaut, die vom inneren Augenwinkel her auf die Hornhaut vorwachsen kann. Begünstigt wird es durch jahrelange UV-Belastung, Wind, Staub und Trockenheit. Oft bleibt es beschwerdearm; es kann jedoch reizen, röten und – wenn es die Sehachse erreicht – die Hornhaut verformen und das Sehen beeinträchtigen.",
          en: "A pterygium is a benign, wedge-shaped growth of the conjunctiva that can advance from the inner corner of the eye onto the cornea. It is favoured by years of UV exposure, wind, dust and dryness. It is often low in symptoms but can cause irritation and redness and – if it reaches the visual axis – distort the cornea and impair vision." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Die Diagnose erfolgt augenärztlich mit der Spaltlampe; Größe und Wachstum werden beobachtet und die Hornhautverkrümmung gemessen.",
          en: "Diagnosis is made by an ophthalmologist with the slit lamp; size and growth are monitored and any corneal astigmatism is measured." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Bei geringen Beschwerden genügen künstliche Tränen, UV-Schutz und Beobachtung. Wächst das Flügelfell in Richtung Sehachse, stört es kosmetisch stark oder verschlechtert es das Sehen, kann es operativ entfernt werden, meist mit einer Bindehauttransplantation, um Rückfälle zu verringern.",
          en: "For minor symptoms, artificial tears, UV protection and observation suffice. If the pterygium grows towards the visual axis, is cosmetically troubling or worsens vision, it can be removed surgically, usually with a conjunctival graft to reduce recurrence." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Schutz & Pflege", en: "Protection & care" } },
        { t: "ul", items: {
          de: ["Konsequenter UV-Schutz durch eine Sonnenbrille mit Seitenschutz bremst das Wachstum.","Künstliche Tränen lindern Trockenheit und Reizung.","Staub, Wind und Zugluft werden nach Möglichkeit gemieden.","Eine naturheilkundliche Rückbildung des Flügelfells ist nicht möglich; Pflege dient der Beschwerdelinderung."],
          en: ["Consistent UV protection with sunglasses with side shields slows growth.","Artificial tears ease dryness and irritation.","Dust, wind and draught are avoided where possible.","Naturopathic shrinking of the pterygium is not possible; care serves symptom relief."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Aus TCM-Sicht können reizbedingte Rötungen mit Wind-Hitze in Verbindung gebracht werden. Begleitende Maßnahmen zielen auf Beruhigung und Wohlbefinden; die Größenzunahme selbst wird dadurch nicht beeinflusst.",
          en: "From a TCM perspective, irritation-related redness may be associated with Wind-Heat. Complementary measures aim at soothing and wellbeing; the growth itself is not influenced by them." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Kühlung, Augenschonung und UV-Schutz. Kräuter- oder Ölanwendungen am Auge sind ärztlich zu prüfen und ersetzen bei fortschreitendem Befund die augenärztliche Behandlung nicht.",
          en: "Ayurvedic support emphasises cooling, resting the eyes and UV protection. Herbal or oil applications to the eye should be medically reviewed and, for progressive findings, do not replace ophthalmological treatment." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt ein Flügelfell nicht. Sinnvoll sind allgemeine Augenschutz- und Komfortmaßnahmen: UV-Schutz, Bildschirmpausen und die Pflege des Tränenfilms zur Linderung von Reizsymptomen.",
          en: "Physiotherapy does not treat a pterygium. Sensible are general eye-protection and comfort measures: UV protection, screen breaks and tear-film care to ease irritation symptoms." } },
      ],
    },
  },

  {
    slug: "dry-eye-syndrome",
    icd10: "H04.123",
    illustration: "generic",
    title: { de: "Trockenes-Auge-Syndrom", en: "Dry Eye Syndrome" },
    summary: {
      de: "Gestörter Tränenfilm mit Brennen, Fremdkörpergefühl und schwankendem Sehen.",
      en: "A disturbed tear film with burning, grittiness and fluctuating vision.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Beim Trockenen-Auge-Syndrom ist der Tränenfilm gestört – entweder durch zu wenig Tränenflüssigkeit oder durch zu rasche Verdunstung, häufig bei Funktionsstörung der Liddrüsen. Typisch sind Brennen, Fremdkörpergefühl, Rötung, müde Augen, zeitweises Verschwommensehen und – paradox – auch Tränenträufeln. Bildschirmarbeit, trockene Luft, Kontaktlinsen, Hormonumstellungen und manche Medikamente können die Beschwerden verstärken.",
          en: "In dry eye syndrome the tear film is disturbed – either through too little tear fluid or through overly rapid evaporation, often with dysfunction of the eyelid glands. Typical features are burning, grittiness, redness, tired eyes, intermittent blurring and – paradoxically – also watering. Screen work, dry air, contact lenses, hormonal changes and some medicines can intensify symptoms." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Die Untersuchung umfasst Spaltlampe, Beurteilung von Tränenmenge und -qualität sowie der Lidränder und Liddrüsen. Begleiterkrankungen (z. B. rheumatische Erkrankungen) werden bei Bedarf berücksichtigt.",
          en: "Assessment includes the slit lamp, evaluation of tear quantity and quality and of the lid margins and glands. Associated conditions (e.g. rheumatic diseases) are considered when relevant." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Grundlage sind Tränenersatzmittel (bei Dauergebrauch vorzugsweise konservierungsmittelfrei), Lidrandpflege mit warmen Kompressen und Lidmassage sowie die Optimierung von Umgebung und Bildschirmgewohnheiten. Je nach Befund kommen entzündungshemmende Tropfen oder ein Verschluss der Tränenpünktchen hinzu.",
          en: "The basis is tear substitutes (preferably preservative-free for long-term use), lid-margin care with warm compresses and lid massage, and optimising the environment and screen habits. Depending on findings, anti-inflammatory drops or punctal plugs are added." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Lebensstil & Pflege", en: "Lifestyle & care" } },
        { t: "ul", items: {
          de: ["Warme Lidkompressen und sanfte Lidmassage verbessern die Funktion der Liddrüsen.","Ausreichend trinken, Raumluft befeuchten und Zugluft (Klimaanlage, Gebläse) meiden.","Regelmäßige Bildschirmpausen mit bewusstem Blinzeln stabilisieren den Tränenfilm.","Omega-3-reiche Ernährung wird häufig empfohlen; Nutzen und Eignung sind individuell zu prüfen."],
          en: ["Warm lid compresses and gentle lid massage improve the function of the eyelid glands.","Drink enough, humidify room air and avoid draught (air conditioning, fans).","Regular screen breaks with conscious blinking stabilise the tear film.","An omega-3-rich diet is often recommended; benefit and suitability should be assessed individually."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird Augentrockenheit häufig einem Yin- oder Blut-Mangel, oft mit Leber- und Nierenbezug, zugeordnet. Akupunktur, Ernährungsberatung und individuelle Kräuter können begleitend zur Linderung eingesetzt werden.",
          en: "In TCM, eye dryness is often assigned to a Yin or Blood deficiency, frequently with a Liver and Kidney reference. Acupuncture, dietary advice and individual herbs may be used as complementary relief." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Ansätze betonen Befeuchtung, ausreichenden Schlaf, Bildschirmpausen und eine ausgewogene, nicht zu trockene Ernährung. Sanfte, ärztlich abgestimmte Augen- und Lidpflege kann das Wohlbefinden fördern; Präparate sind zu prüfen.",
          en: "Ayurvedic approaches emphasise hydration, adequate sleep, screen breaks and a balanced, not overly drying diet. Gentle, medically reviewed eye and lid care can support wellbeing; preparations should be checked." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Auch wenn Physiotherapie das trockene Auge nicht heilt, helfen verhaltensbezogene Maßnahmen: die 20-20-20-Regel (alle 20 Minuten für 20 Sekunden in die Ferne blicken), bewusstes vollständiges Blinzeln, entspannte Nacken- und Schulterhaltung am Arbeitsplatz sowie regelmäßige warme Lidkompressen.",
          en: "Although physiotherapy does not cure dry eye, behavioural measures help: the 20-20-20 rule (every 20 minutes look into the distance for 20 seconds), conscious full blinking, a relaxed neck and shoulder posture at the workplace and regular warm lid compresses." } },
      ],
    },
  },

  {
    slug: "blepharitis",
    icd10: "H01.0",
    illustration: "generic",
    title: { de: "Lidrandentzündung (Blepharitis)", en: "Blepharitis" },
    summary: {
      de: "Chronische Entzündung der Lidränder mit Brennen, Krusten und verklebten Wimpern.",
      en: "Chronic inflammation of the lid margins with burning, crusting and stuck lashes.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Blepharitis ist eine meist chronische Entzündung der Lidränder. Ursachen sind eine gestörte Funktion der Liddrüsen, Bakterien, Schuppen oder Hautkrankheiten wie die Rosazea. Typisch sind gerötete, verdickte Lidränder, Brennen, Jucken, Fremdkörpergefühl, Krusten und morgens verklebte Wimpern. Häufig besteht gleichzeitig ein trockenes Auge.",
          en: "Blepharitis is a usually chronic inflammation of the eyelid margins. Causes include dysfunction of the eyelid glands, bacteria, flakes or skin conditions such as rosacea. Typical features are reddened, thickened lid margins, burning, itching, grittiness, crusting and lashes stuck together in the morning. Dry eye frequently coexists." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung & Basisbehandlung", en: "Assessment & basic treatment" } },
        { t: "p", text: {
          de: "Die Diagnose erfolgt an der Spaltlampe. Grundlage ist eine konsequente, dauerhafte Lidrandhygiene: warme Kompressen, sanfte Lidmassage und Reinigung der Lidränder. Tränenersatzmittel lindern die begleitende Trockenheit.",
          en: "Diagnosis is made at the slit lamp. The basis is consistent, ongoing lid-margin hygiene: warm compresses, gentle lid massage and cleaning of the lid margins. Tear substitutes ease the accompanying dryness." } },
        { t: "sub", text: { de: "Weitere Maßnahmen", en: "Further measures" } },
        { t: "p", text: {
          de: "Bei stärkerer Entzündung können vorübergehend antibiotische oder entzündungshemmende Salben oder Tropfen verordnet werden; bei Rosazea-Beteiligung kommt manchmal eine längere, ärztlich begleitete antibiotische Behandlung infrage.",
          en: "For more marked inflammation, antibiotic or anti-inflammatory ointments or drops may be prescribed temporarily; with rosacea involvement a longer, medically supervised antibiotic course is sometimes considered." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Tägliche Lidpflege", en: "Daily lid care" } },
        { t: "ul", items: {
          de: ["Warme Kompressen für einige Minuten, gefolgt von sanfter Lidmassage, lösen verstopfte Drüsen.","Behutsame Reinigung der Lidränder mit dafür vorgesehenen Produkten oder mildem Mittel nach ärztlicher Empfehlung.","Regelmäßigkeit ist entscheidend – die Pflege wird dauerhaft fortgeführt, auch in beschwerdearmen Phasen.","Augen-Make-up am Lidrand sollte in akuten Phasen reduziert werden."],
          en: ["Warm compresses for a few minutes followed by gentle lid massage loosen blocked glands.","Careful cleaning of the lid margins with dedicated products or a mild agent on medical advice.","Consistency is decisive – care is continued long-term, including during symptom-free phases.","Eye make-up on the lid margin should be reduced during acute phases."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden gereizte, entzündete Lidränder häufig Mustern wie Feuchtigkeit-Hitze oder Milz-Schwäche zugeordnet. Akupunktur und Ernährungsberatung können begleitend erwogen werden; die Lidhygiene bleibt die Grundlage.",
          en: "In TCM, irritated, inflamed lid margins are often assigned to patterns such as Damp-Heat or Spleen weakness. Acupuncture and dietary advice may be considered as complementary care; lid hygiene remains the foundation." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Wärme, sanfte Reinigung, ausgewogene Ernährung und Hautpflege, insbesondere bei begleitender Rosazea. Augenanwendungen sind ärztlich abzustimmen.",
          en: "Ayurvedic support emphasises warmth, gentle cleansing, a balanced diet and skin care, especially with accompanying rosacea. Eye applications should be medically agreed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt die Blepharitis nicht. Unterstützend wirken die tägliche Routine aus warmen Lidkompressen und Lidmassage sowie allgemeine Augenpausen und ein reizarmes Umfeld.",
          en: "Physiotherapy does not treat blepharitis. Supportive are the daily routine of warm lid compresses and lid massage, along with general eye breaks and a low-irritation environment." } },
      ],
    },
  },

  {
    slug: "hordeolum-stye",
    icd10: "H00.0",
    illustration: "generic",
    title: { de: "Gerstenkorn (Hordeolum)", en: "Stye (Hordeolum)" },
    summary: {
      de: "Akute, schmerzhafte bakterielle Entzündung einer Liddrüse mit Schwellung und Rötung.",
      en: "An acute, painful bacterial infection of an eyelid gland with swelling and redness.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Das Gerstenkorn ist eine akute, meist bakterielle Entzündung einer Liddrüse. Es entsteht ein druckschmerzhaftes, gerötetes Knötchen am Lidrand (äußeres Gerstenkorn) oder auf der Lidinnenseite (inneres Gerstenkorn). Häufig eitert es nach einigen Tagen von selbst aus und heilt ab. Es ist unangenehm, aber in der Regel harmlos.",
          en: "A stye is an acute, usually bacterial infection of an eyelid gland. A tender, reddened nodule forms at the lid margin (external stye) or on the inner eyelid (internal stye). It often drains spontaneously after a few days and heals. It is uncomfortable but usually harmless." } },
      ],
      medical: [
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Mehrmals täglich angewandte warme Kompressen fördern die Reifung und Entleerung. Am Knötchen sollte nicht gedrückt oder gequetscht werden. Bei ausgeprägter Entzündung können antibiotische Augentropfen oder -salben verordnet werden; ein hartnäckiges inneres Gerstenkorn wird selten augenärztlich eröffnet.",
          en: "Warm compresses applied several times a day promote ripening and drainage. The nodule should not be squeezed or pressed. For marked inflammation, antibiotic eye drops or ointments may be prescribed; a stubborn internal stye is rarely opened by an ophthalmologist." } },
        { t: "p", text: {
          de: "Wichtig: Breitet sich die Rötung und Schwellung auf das ganze Lid oder die Wange aus, treten Fieber, Sehstörungen oder Schmerzen bei Augenbewegung auf, ist eine rasche ärztliche Abklärung nötig (Verdacht auf eine tiefe Lid- oder Augenhöhlenentzündung).",
          en: "Important: if the redness and swelling spread across the whole lid or cheek, or fever, visual disturbance or pain on eye movement occur, prompt medical assessment is needed (suspected deep lid or orbital infection)." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Selbsthilfe", en: "Self-care" } },
        { t: "ul", items: {
          de: ["Warme, saubere Kompressen mehrmals täglich unterstützen die Ausheilung.","Hände waschen und das Auge nicht reiben; auf Kontaktlinsen und Augen-Make-up vorübergehend verzichten.","Nicht am Gerstenkorn drücken, um eine Ausbreitung zu vermeiden.","Von Kräuterauflagen direkt auf das Auge ist wegen Reiz- und Keimgefahr abzuraten."],
          en: ["Warm, clean compresses several times a day support healing.","Wash hands and do not rub the eye; temporarily avoid contact lenses and eye make-up.","Do not squeeze the stye, to avoid spreading the infection.","Herbal poultices directly on the eye are discouraged because of irritation and germ risk."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird ein Gerstenkorn häufig Wind-Hitze oder Feuchtigkeit-Hitze zugeordnet. Begleitende Maßnahmen können das Wohlbefinden unterstützen; warme Kompressen und Hygiene bleiben die praktische Grundlage.",
          en: "In TCM a stye is often assigned to Wind-Heat or Damp-Heat. Complementary measures may support wellbeing; warm compresses and hygiene remain the practical basis." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Wärme, leichte Ernährung und Hygiene. Von Anwendungen direkt am Auge ist bei akuter Eiterung abzuraten; Präparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises warmth, a light diet and hygiene. Applications directly on the eye are discouraged during acute suppuration; preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie spielt beim Gerstenkorn keine Rolle. Die wirksamste einfache Maßnahme ist die regelmäßige warme Kompresse; ansonsten gelten allgemeine Augenhygiene und Schonung.",
          en: "Physiotherapy plays no role in a stye. The most effective simple measure is the regular warm compress; otherwise general eye hygiene and rest apply." } },
      ],
    },
  },

  {
    slug: "chalazion",
    icd10: "H00.1",
    illustration: "generic",
    title: { de: "Hagelkorn (Chalazion)", en: "Chalazion" },
    summary: {
      de: "Schmerzloses, festes Lidknötchen durch eine verstopfte, gestaute Liddrüse.",
      en: "A painless, firm eyelid lump from a blocked, backed-up eyelid gland.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Das Hagelkorn ist ein meist schmerzloses, festes Knötchen im Lid, das durch eine verstopfte und gestaute Liddrüse (Meibom-Drüse) entsteht. Anders als das akute Gerstenkorn ist es eine chronische, nicht eitrige Stauung. Es kann über Wochen bestehen bleiben und bei entsprechender Größe auf die Hornhaut drücken und das Sehen leicht verzerren.",
          en: "A chalazion is a usually painless, firm lump in the eyelid caused by a blocked and backed-up eyelid gland (meibomian gland). Unlike the acute stye, it is a chronic, non-purulent blockage. It can persist for weeks and, if large enough, press on the cornea and slightly distort vision." } },
      ],
      medical: [
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die Basis sind regelmäßige warme Kompressen und sanfte Lidmassage, um die gestaute Drüse zu entleeren; viele Hagelkörner bilden sich damit über Wochen zurück. Bleibt es bestehen oder stört es, kommen eine kleine Einspritzung oder ein kurzer augenärztlicher Eingriff zur Entfernung infrage.",
          en: "The basis is regular warm compresses and gentle lid massage to empty the blocked gland; many chalazia resolve this way over weeks. If it persists or is troublesome, a small injection or a brief ophthalmological procedure for removal is considered." } },
        { t: "p", text: {
          de: "Wichtig: Wiederkehrende oder untypische Knötchen am selben Ort sollten augenärztlich beurteilt werden, um andere Ursachen sicher auszuschließen.",
          en: "Important: recurring or atypical lumps at the same site should be assessed by an ophthalmologist to reliably exclude other causes." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Selbsthilfe", en: "Self-care" } },
        { t: "ul", items: {
          de: ["Warme Kompressen mehrmals täglich, gefolgt von sanfter Lidmassage, fördern den Abfluss.","Konsequente Lidrandhygiene beugt neuen Hagelkörnern vor.","Nicht drücken oder quetschen; Geduld ist nötig, da die Rückbildung Wochen dauern kann.","Bei gehäuftem Auftreten hilft die Behandlung einer zugrunde liegenden Lidranderkrankung."],
          en: ["Warm compresses several times a day, followed by gentle lid massage, promote drainage.","Consistent lid-margin hygiene prevents new chalazia.","Do not squeeze or press; patience is needed, as resolution can take weeks.","With frequent recurrence, treating an underlying lid-margin condition helps."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird ein Hagelkorn häufig mit Feuchtigkeit und Schleim-Stagnation in Verbindung gebracht. Begleitende Maßnahmen und Ernährungsberatung können unterstützen; warme Kompressen und Lidpflege bleiben zentral.",
          en: "In TCM a chalazion is often associated with dampness and phlegm stagnation. Complementary measures and dietary advice may support; warm compresses and lid care remain central." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Wärme, sanfte Pflege und eine ausgewogene, leicht verdauliche Ernährung. Anwendungen am Auge sind ärztlich abzustimmen.",
          en: "Ayurvedic support emphasises warmth, gentle care and a balanced, easily digestible diet. Eye applications should be medically agreed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt ein Hagelkorn nicht. Praktisch hilfreich ist die konsequente Routine aus warmen Kompressen und Lidmassage zur Drüsenpflege sowie allgemeine Augenhygiene.",
          en: "Physiotherapy does not treat a chalazion. Practically helpful is the consistent routine of warm compresses and lid massage for gland care, along with general eye hygiene." } },
      ],
    },
  },

  {
    slug: "keratitis",
    icd10: "H16.9",
    illustration: "generic",
    title: { de: "Hornhautentzündung (Keratitis)", en: "Keratitis" },
    summary: {
      de: "Entzündung der Hornhaut mit Schmerz, Rötung und Sehstörung – potenziell sehbedrohlich.",
      en: "Inflammation of the cornea with pain, redness and visual disturbance – potentially sight-threatening.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Keratitis ist eine Entzündung der Hornhaut, der klaren Vorderfläche des Auges. Ursachen sind Infektionen (Bakterien, Viren, seltener Pilze oder Amöben), Verletzungen, Trockenheit oder unsachgemäßes Tragen von Kontaktlinsen. Typisch sind starke Schmerzen, Rötung, Lichtscheu, Tränen, Fremdkörpergefühl und Sehverschlechterung. Unbehandelt kann eine Narbe oder ein Hornhautgeschwür die Sehkraft dauerhaft beeinträchtigen.",
          en: "Keratitis is inflammation of the cornea, the clear front surface of the eye. Causes include infections (bacteria, viruses, more rarely fungi or amoebae), injuries, dryness or improper contact-lens wear. Typical features are severe pain, redness, light sensitivity, tearing, grittiness and reduced vision. Untreated, a scar or corneal ulcer can permanently impair sight." } },
      ],
      medical: [
        { t: "sub", text: { de: "Dringende Abklärung", en: "Urgent assessment" } },
        { t: "p", text: {
          de: "Die Keratitis gehört rasch augenärztlich untersucht. An der Spaltlampe wird die Hornhaut beurteilt; bei Verdacht auf eine Infektion können Abstriche zur gezielten Behandlung entnommen werden. Die Ursache bestimmt die Therapie.",
          en: "Keratitis warrants prompt ophthalmological examination. The cornea is assessed at the slit lamp; when infection is suspected, swabs may be taken to target treatment. The cause determines therapy." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Je nach Ursache kommen antibiotische, antivirale oder seltener antimykotische Augentropfen zum Einsatz, oft in engmaschiger Kontrolle. Kontaktlinsen werden pausiert. Eine gute Ausheilung hängt vom raschen Behandlungsbeginn ab.",
          en: "Depending on the cause, antibiotic, antiviral or more rarely antifungal eye drops are used, often with close monitoring. Contact lenses are paused. A good outcome depends on starting treatment quickly." } },
        { t: "p", text: {
          de: "Wichtig: Ein rotes, schmerzhaftes Auge mit Lichtscheu und Sehverschlechterung – besonders bei Kontaktlinsenträgern – ist ein augenärztlicher Notfall und erfordert sofortige Vorstellung.",
          en: "Important: a red, painful eye with light sensitivity and reduced vision – especially in contact-lens wearers – is an ophthalmological emergency requiring immediate attention." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Eine naturheilkundliche Selbstbehandlung ist bei der Keratitis nicht angezeigt, da die Sehkraft gefährdet sein kann. Unterstützend gelten nach ärztlicher Freigabe Schonung, Lichtschutz und sorgfältige Hygiene; die augenärztliche Therapie darf nicht verzögert werden.",
          en: "Naturopathic self-treatment is not appropriate in keratitis, as sight may be at risk. As supportive measures, once medically cleared, rest, light protection and careful hygiene apply; ophthalmological therapy must not be delayed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM würde ein rotes, schmerzhaftes Auge Mustern wie Wind-Hitze oder toxischer Hitze zugeordnet. TCM-Verfahren sind hier allenfalls in der Erholungsphase begleitend vertretbar und ersetzen die dringende augenärztliche Behandlung keinesfalls.",
          en: "In TCM a red, painful eye would be assigned to patterns such as Wind-Heat or toxic heat. TCM approaches are at most defensible as complementary care during recovery and never replace urgent ophthalmological treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Augenanwendungen sind bei akuter Hornhautentzündung nicht angezeigt und können schaden. Begleitend kommen erst nach Ausheilung allgemeine, ärztlich abgestimmte Maßnahmen zur Augenpflege infrage.",
          en: "Ayurvedic eye applications are not indicated in acute keratitis and may cause harm. Only after healing are general, medically agreed eye-care measures considered as complementary support." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt eine Keratitis nicht und darf die augenärztliche Versorgung nicht ersetzen. Nach der Ausheilung gelten allgemeine Augenkomfortmaßnahmen und, bei Trockenheitsneigung, Blinzel- und Bildschirmpausen.",
          en: "Physiotherapy does not treat keratitis and must not replace ophthalmological care. After healing, general eye-comfort measures apply and, with a tendency to dryness, blinking and screen breaks." } },
      ],
    },
  },

  {
    slug: "uveitis",
    icd10: "H20.9",
    illustration: "generic",
    title: { de: "Regenbogenhautentzündung (Uveitis)", en: "Uveitis" },
    summary: {
      de: "Entzündung der mittleren Augenhaut mit Schmerz, Rötung und Lichtscheu – sehbedrohlich.",
      en: "Inflammation of the eye's middle layer with pain, redness and light sensitivity – sight-threatening.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Uveitis ist eine Entzündung der mittleren Augenhaut (Uvea), zu der Regenbogenhaut, Ziliarkörper und Aderhaut gehören. Sie kann durch das Immunsystem, Infektionen oder im Rahmen rheumatischer Erkrankungen entstehen; oft bleibt die Ursache unklar. Je nach Lage treten Schmerzen, Rötung, Lichtscheu, verschwommenes Sehen oder Schwebeteilchen auf. Unbehandelt drohen Komplikationen bis hin zur Sehverschlechterung.",
          en: "Uveitis is inflammation of the middle layer of the eye (uvea), which includes the iris, ciliary body and choroid. It can arise from the immune system, infections or in the context of rheumatic diseases; often the cause remains unclear. Depending on location, pain, redness, light sensitivity, blurred vision or floaters occur. Untreated, complications up to loss of vision may follow." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Die Uveitis gehört rasch augenärztlich untersucht (Spaltlampe, Augeninnendruck, Netzhautbeurteilung). Je nach Verlauf werden Ursachen wie Infektionen oder Systemerkrankungen gezielt abgeklärt, teils gemeinsam mit anderen Fachbereichen.",
          en: "Uveitis warrants prompt ophthalmological examination (slit lamp, intraocular pressure, retinal assessment). Depending on course, causes such as infections or systemic disease are specifically investigated, sometimes together with other specialties." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Behandelt wird meist entzündungshemmend, häufig mit kortisonhaltigen Augentropfen, pupillenerweiternden Tropfen gegen Verklebungen und – bei schweren oder wiederkehrenden Formen – mit systemischen oder immunmodulierenden Medikamenten. Infektionsbedingte Formen erhalten eine gezielte Therapie.",
          en: "Treatment is usually anti-inflammatory, often with corticosteroid eye drops, pupil-dilating drops to prevent adhesions and – for severe or recurrent forms – systemic or immunomodulating medicines. Infection-related forms receive targeted therapy." } },
        { t: "p", text: {
          de: "Wichtig: Ein rotes, schmerzhaftes, lichtempfindliches Auge mit Sehverschlechterung erfordert umgehend eine augenärztliche Vorstellung.",
          en: "Important: a red, painful, light-sensitive eye with reduced vision requires immediate ophthalmological attention." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Eine naturheilkundliche Behandlung kann die entzündungshemmende Therapie nicht ersetzen. Unterstützend – nach ärztlicher Freigabe – können antientzündlich orientierte Ernährung, Stressreduktion und Lichtschutz das Wohlbefinden fördern; entscheidend bleibt die konsequente augenärztliche Behandlung.",
          en: "Naturopathic treatment cannot replace anti-inflammatory therapy. As supportive measures – once medically cleared – an anti-inflammatory diet, stress reduction and light protection can aid wellbeing; consistent ophthalmological treatment remains decisive." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM würden entzündliche Augenbeschwerden Mustern wie Hitze oder aufsteigendem Leber-Feuer zugeordnet. TCM-Verfahren sind allenfalls begleitend unter qualifizierter Aufsicht vertretbar und ersetzen die augenärztliche Therapie nicht.",
          en: "In TCM, inflammatory eye complaints would be assigned to patterns such as heat or ascending Liver-Fire. TCM approaches are at most defensible as complementary care under qualified supervision and do not replace ophthalmological therapy." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Kühlung, Ruhe, Stressreduktion und eine ausgewogene Ernährung. Kräuterpräparate sind wegen möglicher Wechselwirkungen mit Kortison oder Immunmedikamenten ärztlich zu prüfen; Augenanwendungen sind bei akuter Entzündung zu unterlassen.",
          en: "Ayurvedic support emphasises cooling, rest, stress reduction and a balanced diet. Herbal preparations should be medically reviewed because of possible interactions with steroids or immune medicines; eye applications should be avoided during acute inflammation." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt die Uveitis nicht. Bei Formen im Rahmen rheumatischer Erkrankungen kann eine begleitende Bewegungstherapie für die Gelenke sinnvoll sein; für das Auge selbst gelten Lichtschutz und Schonung.",
          en: "Physiotherapy does not treat uveitis. In forms linked to rheumatic disease, accompanying exercise therapy for the joints can be sensible; for the eye itself, light protection and rest apply." } },
      ],
    },
  },

  {
    slug: "age-related-cataract",
    icd10: "H25.9",
    illustration: "generic",
    title: { de: "Grauer Star (Katarakt)", en: "Age-Related Cataract" },
    summary: {
      de: "Altersbedingte Trübung der Augenlinse mit langsam nachlassender, verschwommener Sicht.",
      en: "Age-related clouding of the eye's lens with slowly declining, blurred vision.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Beim Grauen Star trübt sich die natürliche Augenlinse mit zunehmendem Alter ein. Das Sehen wird langsam unscharf und wie durch einen Schleier; typisch sind erhöhte Blendempfindlichkeit, blassere Farben und häufigere Änderungen der Brillenstärke. Der Verlauf ist schleichend und schmerzlos. Der Graue Star ist eine der häufigsten und gut behandelbaren Ursachen einer Sehverschlechterung im Alter.",
          en: "In cataract the eye's natural lens clouds over with increasing age. Vision slowly becomes blurred, as if through a veil; typical features are increased glare sensitivity, paler colours and more frequent changes in spectacle strength. The course is gradual and painless. Cataract is one of the most common and readily treatable causes of visual decline in later life." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Die Diagnose stellt die Augenärztin oder der Augenarzt an der Spaltlampe, ergänzt durch Sehtests und Vermessung des Auges zur Planung einer möglichen Operation.",
          en: "Diagnosis is made by the ophthalmologist at the slit lamp, supplemented by vision tests and measurement of the eye to plan any operation." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die einzige ursächliche Behandlung ist die Operation: Die getrübte Linse wird entfernt und durch eine klare Kunstlinse ersetzt. Der Eingriff ist einer der häufigsten überhaupt und verbessert die Sehkraft in der Regel deutlich. Der Zeitpunkt richtet sich nach der Beeinträchtigung im Alltag.",
          en: "The only causal treatment is surgery: the clouded lens is removed and replaced by a clear artificial lens. The procedure is one of the most common of all and usually improves vision markedly. The timing depends on how much daily life is affected." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Unterstützung", en: "Support" } },
        { t: "ul", items: {
          de: ["Konsequenter UV-Schutz und Rauchverzicht können das Fortschreiten günstig beeinflussen.","Eine ausgewogene, an Obst und Gemüse reiche Ernährung unterstützt die allgemeine Augengesundheit.","Gute Beleuchtung und blendfreie Lichtquellen erleichtern den Alltag.","Eine bestehende Linsentrübung lässt sich durch Naturheilkunde nicht aufhellen; die Operation bleibt die einzige Abhilfe."],
          en: ["Consistent UV protection and stopping smoking can favourably influence progression.","A balanced diet rich in fruit and vegetables supports general eye health.","Good lighting and glare-free light sources ease daily life.","An existing lens opacity cannot be cleared by naturopathy; surgery remains the only remedy."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird altersbedingtes Nachlassen des Sehens häufig einem Nieren- und Leber-Essenz-Mangel zugeordnet. Begleitende Maßnahmen zielen auf das allgemeine Wohlbefinden; die Linsentrübung selbst wird dadurch nicht beeinflusst.",
          en: "In TCM, age-related decline of vision is often assigned to a Kidney and Liver essence deficiency. Complementary measures aim at general wellbeing; the lens opacity itself is not influenced by them." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine augenfreundliche Ernährung, Schutz vor Überanstrengung und geregelte Routinen. Augenanwendungen sind ärztlich zu prüfen und können die notwendige Operation nicht ersetzen.",
          en: "Ayurvedic support emphasises an eye-friendly diet, protection from strain and regular routines. Eye applications should be medically reviewed and cannot replace the necessary operation." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt den Grauen Star nicht und Augenübungen können die Linse nicht aufklaren. Unterstützend helfen im Alltag gute Beleuchtung, Blendschutz und – bei eingeschränkter Sicht – Maßnahmen zur Sturzvorbeugung und zur sicheren Bewegung.",
          en: "Physiotherapy does not treat cataract and eye exercises cannot clear the lens. As supportive measures for daily life, good lighting, glare protection and – with reduced vision – fall prevention and safe mobility help." } },
      ],
    },
  },

  {
    slug: "primary-open-angle-glaucoma",
    icd10: "H40.11",
    illustration: "generic",
    title: { de: "Grüner Star (Offenwinkelglaukom)", en: "Open-Angle Glaucoma" },
    summary: {
      de: "Fortschreitende Schädigung des Sehnervs, meist durch erhöhten Augeninnendruck – lange unbemerkt.",
      en: "Progressive optic-nerve damage, usually from raised eye pressure – long unnoticed.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Das primäre Offenwinkelglaukom ist eine langsam fortschreitende Schädigung des Sehnervs, häufig begünstigt durch einen erhöhten Augeninnendruck. Es verläuft über lange Zeit schmerzlos und unbemerkt, da zunächst das äußere Gesichtsfeld leidet. Unbehandelt kann es zu bleibenden Gesichtsfeldausfällen bis zur Erblindung führen. Früherkennung ist daher entscheidend.",
          en: "Primary open-angle glaucoma is a slowly progressive damage to the optic nerve, often favoured by raised intraocular pressure. It is painless and unnoticed for a long time, because the outer field of vision is affected first. Untreated, it can lead to permanent visual-field loss up to blindness. Early detection is therefore crucial." } },
      ],
      medical: [
        { t: "sub", text: { de: "Früherkennung & Diagnose", en: "Screening & diagnosis" } },
        { t: "p", text: {
          de: "Die Abklärung umfasst Messung des Augeninnendrucks, Beurteilung des Sehnervenkopfs, Gesichtsfelduntersuchung und moderne Bildgebung der Nervenfasern. Regelmäßige Vorsorge ist wichtig, besonders ab mittlerem Lebensalter und bei familiärer Vorbelastung.",
          en: "Assessment includes measuring intraocular pressure, evaluating the optic-nerve head, visual-field testing and modern imaging of the nerve fibres. Regular screening is important, especially from middle age and with a family history." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Ziel ist die dauerhafte Senkung des Augeninnendrucks, meist mit drucksenkenden Augentropfen, die regelmäßig und lebenslang angewendet werden. Alternativ oder ergänzend stehen Laserbehandlung und Operationen zur Verfügung. Bereits eingetretene Schäden lassen sich nicht rückgängig machen, aber ein Fortschreiten kann aufgehalten werden.",
          en: "The goal is lasting reduction of intraocular pressure, usually with pressure-lowering eye drops used regularly and lifelong. Laser treatment and surgery are available as alternatives or additions. Damage that has already occurred cannot be reversed, but progression can be halted." } },
        { t: "p", text: {
          de: "Wichtig: Ein akut rotes, sehr schmerzhaftes Auge mit Sehverschlechterung, Farbringen um Lichtquellen (Halos), Kopfschmerz und Übelkeit kann auf einen akuten Glaukomanfall (Winkelblock) hindeuten – das ist ein augenärztlicher Notfall und erfordert sofortige Hilfe.",
          en: "Important: an acutely red, very painful eye with reduced vision, coloured halos around lights, headache and nausea can indicate an acute glaucoma attack (angle closure) – this is an ophthalmological emergency and requires immediate help." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Naturheilkundliche Maßnahmen können die drucksenkende Therapie nicht ersetzen. Ein gesunder Lebensstil, Rauchverzicht, moderate Bewegung und Stressreduktion unterstützen die allgemeine Augengesundheit. Präparate sind ärztlich zu prüfen, da manche den Augeninnendruck oder die Medikamentenwirkung beeinflussen können.",
          en: "Naturopathic measures cannot replace pressure-lowering therapy. A healthy lifestyle, stopping smoking, moderate activity and stress reduction support general eye health. Products should be medically reviewed, as some can affect eye pressure or drug effects." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden Sehprobleme häufig mit Leber und Nieren in Verbindung gebracht. Akupunktur und Kräuter kommen allenfalls begleitend zur Beschwerdelinderung unter qualifizierter Aufsicht infrage und ersetzen die augenärztliche Kontrolle und Drucksenkung nicht.",
          en: "In TCM, vision problems are often associated with the Liver and Kidneys. Acupuncture and herbs are at most considered as complementary symptom relief under qualified supervision and do not replace ophthalmological monitoring and pressure lowering." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Stressreduktion, geregelte Routinen und eine ausgewogene Ernährung. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen; die regelmäßige augenärztliche Betreuung bleibt unverzichtbar.",
          en: "Ayurvedic support emphasises stress reduction, regular routines and a balanced diet. Herbal preparations should be medically reviewed for interactions; regular ophthalmological care remains indispensable." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt das Glaukom nicht. Regelmäßige moderate Bewegung ist allgemein gesund; von starkem Pressen, kopftiefen Positionen und sehr intensiven Belastungen mit Luftanhalten wird eher abgeraten. Bei fortgeschrittenem Gesichtsfeldverlust unterstützen Orientierungs- und Sturzprävention.",
          en: "Physiotherapy does not treat glaucoma. Regular moderate activity is generally healthy; heavy straining, head-down positions and very intense breath-holding exertion are rather discouraged. With advanced visual-field loss, orientation and fall prevention help." } },
      ],
    },
  },

  {
    slug: "age-related-macular-degeneration",
    icd10: "H35.3",
    illustration: "generic",
    title: { de: "Altersbedingte Makuladegeneration (AMD)", en: "Age-Related Macular Degeneration" },
    summary: {
      de: "Altersbedingter Verlust des zentralen Sehens am Punkt des schärfsten Sehens.",
      en: "Age-related loss of central vision at the point of sharpest sight.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der altersbedingten Makuladegeneration verschlechtert sich die Stelle des schärfsten Sehens (Makula) in der Netzhautmitte. Betroffen ist das zentrale Sehen: Lesen, Gesichter erkennen und Details werden schwierig, während das Sehen am Rand meist erhalten bleibt. Man unterscheidet eine langsam verlaufende trockene Form und eine seltenere feuchte Form mit krankhaften Gefäßen, die rasch fortschreiten kann.",
          en: "In age-related macular degeneration the point of sharpest sight (macula) in the centre of the retina deteriorates. Central vision is affected: reading, recognising faces and seeing detail become difficult, while peripheral vision is usually preserved. A slowly progressing dry form is distinguished from a rarer wet form with abnormal vessels that can progress quickly." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose", en: "Diagnosis" } },
        { t: "p", text: {
          de: "Die Abklärung umfasst Sehtests, Netzhautuntersuchung und moderne Bildgebung (z. B. OCT), oft ergänzt durch einen einfachen Gittertest (Amsler-Gitter) zur Selbstkontrolle. Die Unterscheidung von trockener und feuchter Form ist für die Behandlung entscheidend.",
          en: "Assessment includes vision tests, retinal examination and modern imaging (e.g. OCT), often supplemented by a simple grid test (Amsler grid) for self-monitoring. Distinguishing the dry from the wet form is decisive for treatment." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Für die feuchte Form stehen Medikamente zur Verfügung, die als Einspritzung in das Auge (Anti-VEGF) das Fortschreiten bremsen und die Sehkraft oft stabilisieren. Die trockene Form wird beobachtet; Rauchverzicht und – je nach Befund – bestimmte Nährstoffpräparate können das Risiko des Fortschreitens senken.",
          en: "For the wet form, medicines are available that, given as injections into the eye (anti-VEGF), slow progression and often stabilise vision. The dry form is monitored; stopping smoking and – depending on findings – certain nutrient supplements can lower the risk of progression." } },
        { t: "p", text: {
          de: "Wichtig: Eine plötzliche Sehverschlechterung, verzerrtes Sehen oder ein zentraler dunkler Fleck können auf eine feuchte AMD hindeuten und erfordern eine rasche augenärztliche Abklärung.",
          en: "Important: sudden visual decline, distorted vision or a central dark spot can indicate wet AMD and require prompt ophthalmological assessment." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Risikoreduktion", en: "Risk reduction" } },
        { t: "ul", items: {
          de: ["Rauchverzicht ist die wichtigste beeinflussbare Maßnahme.","Eine an grünem Gemüse, Obst und Fisch reiche Ernährung unterstützt die Netzhautgesundheit.","Konsequenter UV-Schutz und Blutdruckkontrolle sind sinnvoll.","Bestimmte Nährstoffkombinationen können bei passendem Befund helfen; die Eignung wird augenärztlich geprüft."],
          en: ["Stopping smoking is the most important modifiable measure.","A diet rich in green vegetables, fruit and fish supports retinal health.","Consistent UV protection and blood-pressure control are sensible.","Certain nutrient combinations can help with a suitable profile; suitability is checked by the ophthalmologist."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird nachlassendes Sehen im Alter häufig einem Leber- und Nieren-Mangel zugeordnet. Begleitende Maßnahmen zielen auf das allgemeine Wohlbefinden und ersetzen die augenärztliche Behandlung, insbesondere die Therapie der feuchten AMD, nicht.",
          en: "In TCM, declining vision in later life is often assigned to a Liver and Kidney deficiency. Complementary measures aim at general wellbeing and do not replace ophthalmological treatment, especially therapy of wet AMD." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine augenfreundliche, antioxidantienreiche Ernährung, Schonung und geregelte Routinen. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "Ayurvedic support emphasises an eye-friendly, antioxidant-rich diet, rest and regular routines. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt die AMD nicht und Augenübungen können die Makula nicht wiederherstellen. Bei zentralem Sehverlust unterstützen jedoch Training im Umgang mit Sehhilfen, gute Beleuchtung sowie Maßnahmen zur Sturzvorbeugung und sicheren Mobilität.",
          en: "Physiotherapy does not treat AMD and eye exercises cannot restore the macula. With central vision loss, however, training in using visual aids, good lighting and measures for fall prevention and safe mobility help." } },
      ],
    },
  },

  {
    slug: "vitreous-floaters",
    icd10: "H43.3",
    illustration: "generic",
    title: { de: "Glaskörpertrübungen (Mouches volantes)", en: "Vitreous Floaters" },
    summary: {
      de: "Bewegliche Punkte oder Fäden im Blickfeld durch Trübungen im Glaskörper – meist harmlos.",
      en: "Moving dots or threads in the field of view from opacities in the vitreous – usually harmless.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Glaskörpertrübungen sind kleine Verdichtungen im gelartigen Glaskörper des Auges, die als bewegliche Punkte, Fäden oder Spinnweben vor allem vor hellem Hintergrund wahrgenommen werden. Sie nehmen mit dem Alter zu, wenn der Glaskörper schrumpft, und sind meist harmlos. Oft gewöhnt sich das Gehirn daran, sodass sie weniger auffallen.",
          en: "Vitreous floaters are small condensations in the gel-like vitreous of the eye, perceived as moving dots, threads or cobwebs, especially against a bright background. They increase with age as the vitreous shrinks and are usually harmless. Often the brain adapts, so they become less noticeable." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Neu oder verstärkt auftretende Trübungen sollten augenärztlich mit erweiterter Pupille untersucht werden, um die Netzhaut zu beurteilen. Harmlose Floater bedürfen in der Regel keiner Behandlung.",
          en: "New or increased floaters should be examined by an ophthalmologist with a dilated pupil to assess the retina. Harmless floaters usually need no treatment." } },
        { t: "p", text: {
          de: "Wichtig: Ein plötzlicher Schwarm neuer Punkte, Lichtblitze oder ein wandernder Schatten bzw. Vorhang im Gesichtsfeld können auf einen Netzhauteinriss oder eine Netzhautablösung hindeuten – das ist ein augenärztlicher Notfall und erfordert sofortige Vorstellung.",
          en: "Important: a sudden shower of new dots, flashes of light or a moving shadow or curtain in the visual field can indicate a retinal tear or detachment – this is an ophthalmological emergency and requires immediate attention." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Harmlose Floater lassen sich naturheilkundlich nicht beseitigen. Ausreichende Flüssigkeitszufuhr, ausgewogene Ernährung und Augenpausen fördern das allgemeine Wohlbefinden. Wichtiger als jede Selbstbehandlung ist, Warnzeichen (Lichtblitze, Schatten) ernst zu nehmen.",
          en: "Harmless floaters cannot be removed by naturopathy. Adequate hydration, a balanced diet and eye breaks support general wellbeing. More important than any self-treatment is taking warning signs (flashes, shadows) seriously." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden Mouches volantes häufig einem Leber-Blut- oder Nieren-Mangel zugeordnet. Begleitende Maßnahmen zielen auf das allgemeine Wohlbefinden; die Trübungen selbst werden dadurch nicht aufgelöst.",
          en: "In TCM, floaters are often assigned to a Liver-Blood or Kidney deficiency. Complementary measures aim at general wellbeing; the opacities themselves are not dissolved by them." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Augenschonung, ausreichenden Schlaf und eine ausgewogene Ernährung. Kräuterpräparate sind ärztlich zu prüfen und können harmlose Trübungen nicht entfernen.",
          en: "Ayurvedic support emphasises resting the eyes, adequate sleep and a balanced diet. Herbal preparations should be medically reviewed and cannot remove harmless floaters." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie hat bei Glaskörpertrübungen keine behandelnde Rolle. Allgemein helfen Augenpausen und Entspannung; entscheidend ist, bei plötzlichen Lichtblitzen oder einem Schatten sofort augenärztliche Hilfe zu suchen.",
          en: "Physiotherapy has no treating role in floaters. Generally, eye breaks and relaxation help; what matters is seeking immediate ophthalmological help for sudden flashes or a shadow." } },
      ],
    },
  },

  {
    slug: "presbyopia",
    icd10: "H52.4",
    illustration: "generic",
    title: { de: "Alterssichtigkeit (Presbyopie)", en: "Presbyopia" },
    summary: {
      de: "Altersbedingt nachlassendes Nahsehen, weil die Linse an Elastizität verliert.",
      en: "Age-related decline of near vision as the lens loses elasticity.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Alterssichtigkeit ist eine normale Alterserscheinung: Ab etwa dem 40. bis 45. Lebensjahr verliert die Augenlinse an Elastizität, sodass das Scharfstellen in der Nähe erschwert wird. Kleingedrucktes wird in gewohntem Abstand unscharf, man hält es weiter weg, und beim Lesen ermüden die Augen schneller. Es handelt sich nicht um eine Krankheit, sondern um einen natürlichen Vorgang.",
          en: "Presbyopia is a normal part of ageing: from around the age of 40 to 45 the eye's lens loses elasticity, making it harder to focus up close. Small print blurs at the usual distance, one holds it further away, and the eyes tire more quickly when reading. It is not a disease but a natural process." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung & Korrektur", en: "Assessment & correction" } },
        { t: "p", text: {
          de: "Ein Sehtest bestimmt den Nahzusatz. Korrigiert wird mit Lesebrille, Gleitsicht- oder Mehrstärkenbrille bzw. entsprechenden Kontaktlinsen. In ausgewählten Fällen kommen operative Verfahren infrage. Die Korrektur wird im Verlauf angepasst, da sich die Alterssichtigkeit weiterentwickelt.",
          en: "A vision test determines the near addition. Correction is with reading glasses, varifocal or multifocal spectacles or corresponding contact lenses. In selected cases surgical options are considered. Correction is adjusted over time, as presbyopia continues to develop." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Alltagshilfen", en: "Everyday aids" } },
        { t: "ul", items: {
          de: ["Gute, blendfreie Beleuchtung erleichtert das Lesen und Naharbeit.","Regelmäßige Sehpausen verringern Augenmüdigkeit.","Eine ausgewogene Ernährung unterstützt die allgemeine Augengesundheit.","Augenübungen können die nachlassende Linsenelastizität nicht rückgängig machen; eine passende Korrektur bleibt entscheidend."],
          en: ["Good, glare-free lighting makes reading and near work easier.","Regular visual breaks reduce eye fatigue.","A balanced diet supports general eye health.","Eye exercises cannot reverse the declining lens elasticity; a suitable correction remains decisive."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird das altersbedingte Nachlassen des Sehens häufig einem Leber- und Nieren-Mangel zugeordnet. Begleitende Maßnahmen können das Wohlbefinden fördern, ersetzen aber die optische Korrektur nicht.",
          en: "In TCM, age-related decline of vision is often assigned to a Liver and Kidney deficiency. Complementary measures can support wellbeing but do not replace optical correction." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Augenschonung, geregelte Routinen und eine ausgewogene Ernährung. Kräuter- und Ölanwendungen sind ärztlich zu prüfen und ersetzen die Brille nicht.",
          en: "Ayurvedic support emphasises resting the eyes, regular routines and a balanced diet. Herbal and oil applications should be medically reviewed and do not replace glasses." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie und Augenübungen korrigieren die Alterssichtigkeit nicht. Sinnvoll sind Maßnahmen gegen Augenbelastung bei Naharbeit: die 20-20-20-Regel, ausreichend Pausen, gute Beleuchtung sowie eine entspannte Nacken- und Schulterhaltung am Arbeitsplatz.",
          en: "Physiotherapy and eye exercises do not correct presbyopia. Sensible are measures against eye strain during near work: the 20-20-20 rule, adequate breaks, good lighting and a relaxed neck and shoulder posture at the workplace." } },
      ],
    },
  },

  {
    slug: "myopia",
    icd10: "H52.1",
    illustration: "generic",
    title: { de: "Kurzsichtigkeit (Myopie)", en: "Myopia" },
    summary: {
      de: "Fehlsichtigkeit mit unscharfem Fernsehen bei klarem Nahsehen.",
      en: "A refractive error with blurred distance vision and clear near vision.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der Kurzsichtigkeit wird das einfallende Licht vor statt genau auf der Netzhaut gebündelt, meist weil der Augapfel zu lang ist. Entfernte Objekte erscheinen unscharf, während in der Nähe klar gesehen wird. Die Myopie beginnt häufig im Schul- oder Jugendalter und kann bis ins junge Erwachsenenalter zunehmen. Sehr starke Kurzsichtigkeit erhöht das Risiko für bestimmte Augenerkrankungen.",
          en: "In myopia the incoming light is focused in front of the retina instead of exactly on it, usually because the eyeball is too long. Distant objects appear blurred, while near vision is clear. Myopia often begins in school or adolescence and can increase into young adulthood. Very high myopia raises the risk of certain eye conditions." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung & Korrektur", en: "Assessment & correction" } },
        { t: "p", text: {
          de: "Ein Sehtest bestimmt die Stärke. Korrigiert wird mit Brille oder Kontaktlinsen; im Erwachsenenalter sind bei stabiler Fehlsichtigkeit auch refraktive Verfahren (z. B. Laser) möglich. Regelmäßige augenärztliche Kontrollen sind besonders bei hoher Myopie wichtig, um die Netzhaut zu überwachen.",
          en: "A vision test determines the strength. Correction is with glasses or contact lenses; in adulthood, with a stable error, refractive procedures (e.g. laser) are also possible. Regular ophthalmological checks are important especially in high myopia to monitor the retina." } },
        { t: "sub", text: { de: "Fortschreiten bei Kindern", en: "Progression in children" } },
        { t: "p", text: {
          de: "Bei Kindern kann das Fortschreiten durch viel Tageslicht und Aufenthalt im Freien sowie spezielle Maßnahmen (z. B. bestimmte Tropfen oder Speziallinsen nach augenärztlicher Empfehlung) verlangsamt werden.",
          en: "In children, progression can be slowed by plenty of daylight and time outdoors and by specific measures (e.g. certain drops or special lenses on ophthalmological advice)." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Augenfreundlicher Alltag", en: "Eye-friendly daily life" } },
        { t: "ul", items: {
          de: ["Regelmäßiger Aufenthalt im Freien und Tageslicht sind vor allem bei Kindern günstig.","Ausreichende Sehpausen bei Naharbeit entlasten die Augen.","Gute Beleuchtung und angemessener Leseabstand unterstützen den Alltag.","Augenübungen können eine Kurzsichtigkeit nicht heilen; eine passende Korrektur bleibt notwendig."],
          en: ["Regular time outdoors and daylight are beneficial, especially in children.","Adequate visual breaks during near work relieve the eyes.","Good lighting and an appropriate reading distance support daily life.","Eye exercises cannot cure myopia; a suitable correction remains necessary."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird Kurzsichtigkeit häufig mit einer Schwäche von Leber-Blut und Nieren-Essenz in Verbindung gebracht. Begleitende Maßnahmen zielen auf das Wohlbefinden und ersetzen die optische Korrektur nicht.",
          en: "In TCM, myopia is often associated with a weakness of Liver-Blood and Kidney essence. Complementary measures aim at wellbeing and do not replace optical correction." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Augenschonung, Pausen bei Naharbeit und eine ausgewogene Ernährung. Kräuter- und Ölanwendungen sind ärztlich zu prüfen und ersetzen Brille oder Kontaktlinsen nicht.",
          en: "Ayurvedic support emphasises resting the eyes, breaks during near work and a balanced diet. Herbal and oil applications should be medically reviewed and do not replace glasses or contact lenses." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie und Augenübungen korrigieren die Kurzsichtigkeit nicht. Unterstützend gegen Augenbelastung wirken die 20-20-20-Regel, ausreichende Pausen, Aufenthalt im Freien, gute Beleuchtung und eine entspannte Nacken- und Schulterhaltung am Arbeitsplatz.",
          en: "Physiotherapy and eye exercises do not correct myopia. Against eye strain, the 20-20-20 rule, adequate breaks, time outdoors, good lighting and a relaxed neck and shoulder posture at the workplace help." } },
      ],
    },
  },

  {
    slug: "hyperopia",
    icd10: "H52.0",
    illustration: "generic",
    title: { de: "Weitsichtigkeit (Hyperopie)", en: "Hyperopia" },
    summary: {
      de: "Fehlsichtigkeit, bei der besonders das Nahsehen anstrengt und ermüdet.",
      en: "A refractive error in which near vision in particular is strenuous and tiring.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der Weitsichtigkeit wird das Licht hinter statt auf der Netzhaut gebündelt, meist weil der Augapfel zu kurz ist. Jüngere Menschen können den Fehler oft durch die Anspannung der Linse ausgleichen, sodass sie zunächst scharf sehen; typisch sind jedoch Anstrengung, Kopfschmerzen und rasche Ermüdung, besonders bei Naharbeit. Mit dem Alter lässt diese Ausgleichsfähigkeit nach, und die Unschärfe wird deutlicher.",
          en: "In hyperopia the light is focused behind rather than on the retina, usually because the eyeball is too short. Younger people can often compensate through the lens's effort, so at first they see clearly; typical, however, are strain, headaches and rapid fatigue, especially during near work. With age this ability to compensate declines and the blur becomes more apparent." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung & Korrektur", en: "Assessment & correction" } },
        { t: "p", text: {
          de: "Ein Sehtest bestimmt die Stärke, bei Kindern gegebenenfalls mit weitgestellter Pupille. Korrigiert wird mit Brille oder Kontaktlinsen; im Erwachsenenalter sind bei geeigneter Ausgangslage refraktive Verfahren möglich. Bei Kindern ist die Korrektur wichtig, um Schielen und Schwachsichtigkeit vorzubeugen.",
          en: "A vision test determines the strength, in children if needed with a dilated pupil. Correction is with glasses or contact lenses; in adulthood, with a suitable starting point, refractive procedures are possible. In children, correction is important to prevent squint and lazy eye." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Alltagshilfen", en: "Everyday aids" } },
        { t: "ul", items: {
          de: ["Gute Beleuchtung und ausreichende Pausen entlasten bei Naharbeit.","Ein angemessener Arbeitsabstand und ergonomischer Bildschirmplatz verringern Ermüdung.","Eine ausgewogene Ernährung unterstützt die allgemeine Augengesundheit.","Augenübungen können eine Weitsichtigkeit nicht beheben; die optische Korrektur bleibt notwendig."],
          en: ["Good lighting and adequate breaks relieve near work.","An appropriate working distance and an ergonomic screen setup reduce fatigue.","A balanced diet supports general eye health.","Eye exercises cannot resolve hyperopia; optical correction remains necessary."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden Sehschwäche und Augenmüdigkeit häufig mit Leber-Blut- und Nieren-Schwäche in Verbindung gebracht. Begleitende Maßnahmen zielen auf das Wohlbefinden und ersetzen die optische Korrektur nicht.",
          en: "In TCM, weak sight and eye fatigue are often associated with Liver-Blood and Kidney weakness. Complementary measures aim at wellbeing and do not replace optical correction." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Augenschonung, Pausen und eine ausgewogene Ernährung. Kräuter- und Ölanwendungen sind ärztlich zu prüfen und ersetzen Brille oder Kontaktlinsen nicht.",
          en: "Ayurvedic support emphasises resting the eyes, breaks and a balanced diet. Herbal and oil applications should be medically reviewed and do not replace glasses or contact lenses." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie und Augenübungen korrigieren die Weitsichtigkeit nicht. Gegen die begleitende Anstrengung helfen die 20-20-20-Regel, ausreichende Pausen, gute Beleuchtung und eine entspannte Nacken- und Schulterhaltung am Arbeitsplatz.",
          en: "Physiotherapy and eye exercises do not correct hyperopia. Against the accompanying strain, the 20-20-20 rule, adequate breaks, good lighting and a relaxed neck and shoulder posture at the workplace help." } },
      ],
    },
  },

  {
    slug: "astigmatism",
    icd10: "H52.2",
    illustration: "generic",
    title: { de: "Hornhautverkrümmung (Astigmatismus)", en: "Astigmatism" },
    summary: {
      de: "Verzerrtes Sehen in Nähe und Ferne durch eine ungleichmäßig gekrümmte Hornhaut.",
      en: "Distorted vision at all distances from an unevenly curved cornea.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Beim Astigmatismus ist die Hornhaut (seltener die Linse) nicht gleichmäßig rund, sondern in verschiedenen Richtungen unterschiedlich stark gekrümmt. Dadurch wird das Licht nicht in einem Punkt gebündelt, und das Bild erscheint in Nähe und Ferne verzerrt oder unscharf. Häufig besteht er zusammen mit Kurz- oder Weitsichtigkeit und kann zu Augenmüdigkeit und Kopfschmerzen führen.",
          en: "In astigmatism the cornea (more rarely the lens) is not evenly round but curved to differing degrees in different directions. As a result the light is not focused to a single point, and the image appears distorted or blurred at all distances. It frequently coexists with short- or far-sightedness and can cause eye fatigue and headaches." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung & Korrektur", en: "Assessment & correction" } },
        { t: "p", text: {
          de: "Ein Sehtest und die Vermessung der Hornhaut bestimmen Stärke und Achse. Korrigiert wird mit zylindrischen Brillengläsern oder speziellen (auch formstabilen) Kontaktlinsen; bei stabilem Befund sind im Erwachsenenalter refraktive Verfahren möglich.",
          en: "A vision test and measurement of the cornea determine strength and axis. Correction is with cylindrical spectacle lenses or special (including rigid) contact lenses; with a stable finding, refractive procedures are possible in adulthood." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Alltagshilfen", en: "Everyday aids" } },
        { t: "ul", items: {
          de: ["Gute, blendfreie Beleuchtung und ausreichende Sehpausen entlasten die Augen.","Ein ergonomischer Bildschirmarbeitsplatz verringert Ermüdung und Kopfschmerzen.","Eine ausgewogene Ernährung unterstützt die allgemeine Augengesundheit.","Augenübungen können eine Hornhautverkrümmung nicht ausgleichen; die optische Korrektur bleibt notwendig."],
          en: ["Good, glare-free lighting and adequate visual breaks relieve the eyes.","An ergonomic screen workstation reduces fatigue and headaches.","A balanced diet supports general eye health.","Eye exercises cannot compensate for astigmatism; optical correction remains necessary."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden Sehbeschwerden und Augenmüdigkeit häufig mit Leber-Blut- und Nieren-Schwäche in Verbindung gebracht. Begleitende Maßnahmen zielen auf das Wohlbefinden und ersetzen die optische Korrektur nicht.",
          en: "In TCM, visual complaints and eye fatigue are often associated with Liver-Blood and Kidney weakness. Complementary measures aim at wellbeing and do not replace optical correction." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Augenschonung, Pausen und eine ausgewogene Ernährung. Kräuter- und Ölanwendungen sind ärztlich zu prüfen und ersetzen Brille oder Kontaktlinsen nicht.",
          en: "Ayurvedic support emphasises resting the eyes, breaks and a balanced diet. Herbal and oil applications should be medically reviewed and do not replace glasses or contact lenses." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie und Augenübungen korrigieren die Hornhautverkrümmung nicht. Gegen die begleitende Augenbelastung helfen die 20-20-20-Regel, ausreichende Pausen, gute Beleuchtung und eine entspannte Nacken- und Schulterhaltung am Arbeitsplatz.",
          en: "Physiotherapy and eye exercises do not correct astigmatism. Against the accompanying eye strain, the 20-20-20 rule, adequate breaks, good lighting and a relaxed neck and shoulder posture at the workplace help." } },
      ],
    },
  },

  {
    slug: "acute-otitis-media",
    icd10: "H66.0",
    illustration: "generic",
    title: { de: "Akute Mittelohrentzündung", en: "Acute Otitis Media" },
    summary: {
      de: "Schmerzhafte Entzündung des Mittelohrs, häufig bei Kindern, oft nach einem Infekt.",
      en: "A painful infection of the middle ear, common in children, often after a cold.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die akute Mittelohrentzündung ist eine meist durch Viren oder Bakterien ausgelöste Entzündung des Mittelohrs, häufig im Gefolge eines Atemwegsinfekts. Typisch sind rasch einsetzende Ohrenschmerzen, Druckgefühl, vermindertes Hören und – vor allem bei Kindern – Fieber und Unruhe. Reißt das Trommelfell durch den Druck ein, kann Sekret abfließen und der Schmerz nachlassen.",
          en: "Acute otitis media is an infection of the middle ear, usually triggered by viruses or bacteria, often following a respiratory infection. Typical features are rapidly starting earache, a sense of pressure, reduced hearing and – especially in children – fever and restlessness. If the eardrum tears under the pressure, fluid can drain and the pain may ease." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung & Behandlung", en: "Assessment & treatment" } },
        { t: "p", text: {
          de: "Die Diagnose erfolgt durch Blick auf das Trommelfell (Otoskopie). Im Vordergrund stehen zunächst Schmerz- und Fiebermittel sowie abschwellende Maßnahmen; viele Fälle heilen von selbst. Antibiotika werden gezielt eingesetzt, etwa bei ausgeprägtem Verlauf, sehr jungen Kindern oder ausbleibender Besserung.",
          en: "Diagnosis is by inspecting the eardrum (otoscopy). Initially pain and fever relief and decongestant measures are central; many cases resolve on their own. Antibiotics are used selectively, for instance in a marked course, very young children or lack of improvement." } },
        { t: "p", text: {
          de: "Wichtig: Hohes Fieber, starke Verschlechterung, Nackensteife, eine schmerzhafte Schwellung oder Rötung hinter dem Ohr oder eine Gesichtslähmung erfordern eine rasche ärztliche Abklärung.",
          en: "Important: high fever, marked deterioration, neck stiffness, painful swelling or redness behind the ear, or facial weakness require prompt medical assessment." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Unterstützung", en: "Support" } },
        { t: "ul", items: {
          de: ["Ausreichend Ruhe, Flüssigkeit und eine abschwellende Nasenpflege unterstützen die Ausheilung.","Wärme am Ohr wird von vielen als angenehm empfunden.","Zwiebel- oder Kräuterauflagen werden traditionell genutzt; sie ersetzen die ärztliche Beurteilung nicht.","Nichts in den Gehörgang einträufeln, solange ein Trommelfelldefekt nicht ausgeschlossen ist."],
          en: ["Adequate rest, fluids and decongestant nasal care support healing.","Warmth on the ear is felt as soothing by many.","Onion or herbal poultices are traditionally used; they do not replace medical assessment.","Do not instil anything into the ear canal while an eardrum defect has not been excluded."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden Ohrenschmerzen mit Infekt häufig Wind-Hitze oder Feuchtigkeit-Hitze zugeordnet. Begleitende Maßnahmen können unterstützen; bei ausgeprägten Beschwerden oder Kindern bleibt die ärztliche Beurteilung vorrangig.",
          en: "In TCM, earache with infection is often assigned to Wind-Heat or Damp-Heat. Complementary measures may support; for marked symptoms or in children, medical assessment remains the priority." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Wärme, Ruhe und eine leichte Ernährung. Öl- oder Kräuteranwendungen am Ohr sind bei akuter Entzündung zurückhaltend und nur nach ärztlicher Abklärung einzusetzen.",
          en: "Ayurvedic support emphasises warmth, rest and a light diet. Oil or herbal applications to the ear should be used cautiously in acute inflammation and only after medical assessment." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt die Mittelohrentzündung nicht. Bei begleitender Tubenfunktionsstörung können nach der akuten Phase Maßnahmen zum Druckausgleich (z. B. sanftes Gähnen, Schlucken) helfen; im Vordergrund stehen Ruhe und Ausheilung.",
          en: "Physiotherapy does not treat otitis media. With accompanying eustachian-tube dysfunction, pressure-equalising measures (e.g. gentle yawning, swallowing) can help after the acute phase; rest and healing are central." } },
      ],
    },
  },

  {
    slug: "otitis-media-with-effusion",
    icd10: "H65.9",
    illustration: "generic",
    title: { de: "Paukenerguss", en: "Otitis Media with Effusion" },
    summary: {
      de: "Flüssigkeit im Mittelohr ohne akute Infektion, mit dumpfem Gehör und Druckgefühl.",
      en: "Fluid in the middle ear without acute infection, with muffled hearing and pressure.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Beim Paukenerguss sammelt sich Flüssigkeit im Mittelohr, ohne dass eine akute Infektion vorliegt. Ursache ist meist eine gestörte Belüftung über die Ohrtrompete, etwa nach einem Infekt oder bei vergrößerten Rachenmandeln. Typisch sind ein dumpfes, gemindertes Hören, Druck- oder Völlegefühl im Ohr und – vor allem bei Kindern – unbemerkte Hörprobleme, die die Sprachentwicklung beeinflussen können.",
          en: "In otitis media with effusion fluid collects in the middle ear without an acute infection. The cause is usually impaired ventilation through the eustachian tube, for example after a cold or with enlarged adenoids. Typical features are muffled, reduced hearing, a sense of pressure or fullness in the ear and – especially in children – unnoticed hearing problems that can affect speech development." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung & Verlauf", en: "Assessment & course" } },
        { t: "p", text: {
          de: "Die Diagnose stützt sich auf Otoskopie, Hörtests und eine Messung der Trommelfellbeweglichkeit (Tympanometrie). Viele Ergüsse bilden sich innerhalb einiger Wochen von selbst zurück, sodass zunächst beobachtet wird.",
          en: "Diagnosis rests on otoscopy, hearing tests and a measurement of eardrum mobility (tympanometry). Many effusions resolve on their own within a few weeks, so observation is the first step." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Bleibt der Erguss längere Zeit bestehen und beeinträchtigt das Hören, kommen bei Kindern die Entfernung vergrößerter Rachenmandeln und das Einsetzen von Paukenröhrchen infrage. Die Behandlung richtet sich nach Dauer, Hörbefund und Alter.",
          en: "If the effusion persists for a longer time and impairs hearing, removal of enlarged adenoids and insertion of ventilation tubes are options in children. Treatment depends on duration, hearing findings and age." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Unterstützung", en: "Support" } },
        { t: "ul", items: {
          de: ["Eine gute Nasenatmung durch abschwellende Nasenpflege und Befeuchtung unterstützt die Belüftung des Mittelohrs.","Übungen zum Druckausgleich (Schlucken, Gähnen, bei Kindern spielerisches Aufblasen) können helfen.","Ausreichend Flüssigkeit und der Verzicht auf Rauchbelastung sind günstig.","Eine bestehende Hörminderung sollte ärztlich kontrolliert werden, besonders bei Kindern."],
          en: ["Good nasal breathing through decongestant nasal care and humidification supports middle-ear ventilation.","Pressure-equalising exercises (swallowing, yawning, playful blowing in children) can help.","Adequate fluids and avoiding smoke exposure are beneficial.","Any hearing loss should be medically monitored, especially in children."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird ein Erguss häufig mit Feuchtigkeit und Milz-Schwäche in Verbindung gebracht. Begleitende Maßnahmen und Ernährungsberatung können unterstützen; bei anhaltender Hörminderung bleibt die ärztliche Abklärung vorrangig.",
          en: "In TCM, an effusion is often associated with dampness and Spleen weakness. Complementary measures and dietary advice may support; with persistent hearing loss, medical assessment remains the priority." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Nasenpflege, Wärme und eine schleimreduzierende, leichte Ernährung. Anwendungen am Ohr sind ärztlich abzustimmen.",
          en: "Ayurvedic support emphasises nasal care, warmth and a light, mucus-reducing diet. Ear applications should be medically agreed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Übungen zum Druckausgleich und zur Belüftung der Ohrtrompete können unterstützen, etwa bewusstes Schlucken und Gähnen oder – bei Kindern altersgerecht – das Aufblasen eines speziellen Nasenballons nach ärztlicher Anleitung. Eine strukturelle Ursache wird dadurch nicht ersetzt.",
          en: "Exercises for pressure equalisation and eustachian-tube ventilation can support, such as conscious swallowing and yawning or – in children, age-appropriately – inflating a special nasal balloon on medical advice. A structural cause is not replaced by this." } },
      ],
    },
  },

  {
    slug: "otitis-externa",
    icd10: "H60.9",
    illustration: "generic",
    title: { de: "Gehörgangsentzündung (Otitis externa)", en: "Otitis Externa" },
    summary: {
      de: "Entzündung des äußeren Gehörgangs mit Schmerz, Juckreiz und Druckempfindlichkeit.",
      en: "Inflammation of the outer ear canal with pain, itching and tenderness.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Otitis externa ist eine Entzündung der Haut des äußeren Gehörgangs, oft durch Bakterien, seltener durch Pilze. Begünstigt wird sie durch Feuchtigkeit (Schwimmen), Mikroverletzungen durch Wattestäbchen, Hautkrankheiten oder Ohrenschmalzmangel. Typisch sind Juckreiz, zunehmender Ohrschmerz, Druckempfindlichkeit beim Ziehen an der Ohrmuschel, Nässen und ein Völle- oder Hörminderungsgefühl.",
          en: "Otitis externa is an inflammation of the skin of the outer ear canal, often bacterial, more rarely fungal. It is favoured by moisture (swimming), microinjuries from cotton buds, skin conditions or a lack of earwax. Typical features are itching, increasing ear pain, tenderness when pulling on the auricle, weeping and a sense of fullness or reduced hearing." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung & Behandlung", en: "Assessment & treatment" } },
        { t: "p", text: {
          de: "Die Diagnose erfolgt durch Otoskopie; eine gründliche Reinigung des Gehörgangs ist oft der wichtigste Schritt. Behandelt wird meist mit medizinischen Ohrentropfen (antibiotisch, antimykotisch und/oder entzündungshemmend). Der Gehörgang sollte trocken gehalten werden; Wattestäbchen sind zu meiden.",
          en: "Diagnosis is by otoscopy; a thorough cleaning of the ear canal is often the most important step. Treatment is usually with medicated ear drops (antibiotic, antifungal and/or anti-inflammatory). The ear canal should be kept dry; cotton buds are to be avoided." } },
        { t: "p", text: {
          de: "Wichtig: Starke Schmerzen, Fieber, eine Schwellung um das Ohr oder Beschwerden bei Diabetes bzw. geschwächtem Immunsystem erfordern eine rasche HNO-ärztliche Abklärung.",
          en: "Important: severe pain, fever, swelling around the ear or symptoms in diabetes or a weakened immune system require prompt ENT assessment." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Schutz & Pflege", en: "Protection & care" } },
        { t: "ul", items: {
          de: ["Den Gehörgang trocken halten; nach dem Schwimmen oder Duschen vorsichtig trocknen lassen.","Keine Wattestäbchen und keine Objekte in den Gehörgang einführen.","Auf Ohrentropfen oder Spülungen in Eigenregie verzichten, solange ein Trommelfelldefekt nicht ausgeschlossen ist.","Bei Neigung zu Entzündungen helfen Ohrenschutz beim Baden und die Behandlung begleitender Hautkrankheiten."],
          en: ["Keep the ear canal dry; after swimming or showering let it dry carefully.","Do not insert cotton buds or objects into the ear canal.","Avoid self-administered ear drops or rinses while an eardrum defect has not been excluded.","With a tendency to inflammation, ear protection while bathing and treating accompanying skin conditions help."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird ein nässender, juckender Gehörgang häufig Feuchtigkeit-Hitze zugeordnet. Begleitende Maßnahmen können unterstützen; bei ausgeprägter Entzündung bleibt die ärztliche Reinigung und lokale Therapie vorrangig.",
          en: "In TCM, a weeping, itchy ear canal is often assigned to Damp-Heat. Complementary measures may support; for marked inflammation, medical cleaning and local therapy remain the priority." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Trockenheit des Gehörgangs, Schonung und eine ausgewogene Ernährung. Öl- oder Kräuteranwendungen im Ohr sind bei akuter Entzündung zu unterlassen und ärztlich abzustimmen.",
          en: "Ayurvedic support emphasises keeping the ear canal dry, rest and a balanced diet. Oil or herbal applications in the ear should be avoided during acute inflammation and medically agreed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt die Gehörgangsentzündung nicht. Sinnvoll sind allgemeine Schutzmaßnahmen: den Gehörgang trocken halten, keine Wattestäbchen verwenden und bei Bedarf Ohrenschutz beim Schwimmen tragen.",
          en: "Physiotherapy does not treat otitis externa. Sensible are general protective measures: keep the ear canal dry, do not use cotton buds and wear ear protection while swimming when needed." } },
      ],
    },
  },

  {
    slug: "eustachian-tube-dysfunction",
    icd10: "H69.9",
    illustration: "generic",
    title: { de: "Tubenfunktionsstörung", en: "Eustachian Tube Dysfunction" },
    summary: {
      de: "Gestörter Druckausgleich der Ohrtrompete mit Druckgefühl und dumpfem Hören.",
      en: "Impaired pressure equalisation of the eustachian tube with fullness and muffled hearing.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Ohrtrompete (Tube) verbindet das Mittelohr mit dem Rachen und sorgt für den Druckausgleich und die Belüftung. Ist ihre Funktion gestört – häufig bei Erkältungen, Allergien oder beim Fliegen und Tauchen –, entstehen ein Druck- oder Völlegefühl, dumpfes oder gemindertes Hören, Knacken beim Schlucken und mitunter leichte Schmerzen. Meist ist die Störung vorübergehend.",
          en: "The eustachian tube connects the middle ear to the throat and provides pressure equalisation and ventilation. If its function is impaired – often with colds, allergies or when flying and diving – a sense of pressure or fullness, muffled or reduced hearing, clicking on swallowing and sometimes mild pain arise. Usually the disturbance is temporary." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung & Behandlung", en: "Assessment & treatment" } },
        { t: "p", text: {
          de: "Die Diagnose stützt sich auf die Untersuchung von Ohr, Nase und Rachen sowie auf Hör- und Druckmessungen. Behandelt werden auslösende Faktoren (z. B. Schnupfen, Allergie) mit abschwellender Nasenpflege und gegebenenfalls antiallergischen Mitteln. Druckausgleichsübungen unterstützen die Belüftung. Bei hartnäckigen Fällen kommen HNO-ärztliche Verfahren infrage.",
          en: "Diagnosis rests on examination of the ear, nose and throat and on hearing and pressure measurements. Triggering factors (e.g. a cold, allergy) are treated with decongestant nasal care and, if needed, anti-allergic agents. Pressure-equalising exercises support ventilation. For stubborn cases, ENT procedures are options." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Selbsthilfe", en: "Self-care" } },
        { t: "ul", items: {
          de: ["Schlucken, Gähnen, Kaugummikauen und behutsames Druckausgleichen (Valsalva) öffnen die Tube.","Abschwellende Nasenpflege und Inhalationen verbessern die Belüftung bei Schnupfen.","Ausreichende Flüssigkeitszufuhr hält den Schleim dünnflüssig.","Beim Fliegen helfen rechtzeitiges Druckausgleichen und ggf. abschwellende Maßnahmen nach ärztlicher Empfehlung."],
          en: ["Swallowing, yawning, chewing gum and gentle pressure equalisation (Valsalva) open the tube.","Decongestant nasal care and inhalations improve ventilation during a cold.","Adequate fluid intake keeps mucus thin.","When flying, timely pressure equalisation and, if needed, decongestant measures on medical advice help."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM werden Druck und Völle im Ohr häufig mit Feuchtigkeit oder einer Schwäche der Milz und des Qi in Verbindung gebracht. Begleitende Maßnahmen können unterstützen; anhaltende Beschwerden gehören ärztlich abgeklärt.",
          en: "In TCM, pressure and fullness in the ear are often associated with dampness or a weakness of the Spleen and Qi. Complementary measures may support; persistent symptoms should be medically assessed." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Nasenpflege, Wärme und eine schleimreduzierende, leichte Ernährung. Anwendungen am Ohr sind ärztlich abzustimmen.",
          en: "Ayurvedic support emphasises nasal care, warmth and a light, mucus-reducing diet. Ear applications should be medically agreed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Gezielte Druckausgleichs- und Tubenübungen bilden hier den Kern der unterstützenden Maßnahmen: bewusstes Schlucken und Gähnen, das behutsame Valsalva-Manöver sowie – nach Anleitung – das Aufblasen eines Nasenballons. Bei begleitender Nasen- und Nebenhöhlenbeteiligung können atemtherapeutische Übungen ergänzen.",
          en: "Targeted pressure-equalisation and tube exercises form the core of supportive measures here: conscious swallowing and yawning, the gentle Valsalva manoeuvre and – with guidance – inflating a nasal balloon. With accompanying nasal and sinus involvement, breathing-therapy exercises can add to this." } },
      ],
    },
  },

  {
    slug: "cerumen-impaction",
    icd10: "H61.2",
    illustration: "generic",
    title: { de: "Ohrenschmalzpfropf (Zeruminalpfropf)", en: "Earwax Impaction" },
    summary: {
      de: "Verstopfung des Gehörgangs durch Ohrenschmalz mit Druckgefühl und Hörminderung.",
      en: "Blockage of the ear canal by earwax with a sense of pressure and reduced hearing.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Ein Ohrenschmalzpfropf entsteht, wenn sich Zerumen im Gehörgang ansammelt und verhärtet, sodass er den Gang verschließt. Ohrenschmalz ist an sich gesund und schützend; Probleme entstehen oft erst durch unsachgemäße Reinigung mit Wattestäbchen, die den Schmalz nach innen schieben. Typisch sind ein Druck- oder Völlegefühl, vermindertes Hören, mitunter Ohrgeräusche oder Schwindel.",
          en: "An earwax plug forms when cerumen accumulates and hardens in the ear canal so that it blocks the passage. Earwax is in itself healthy and protective; problems often arise only through improper cleaning with cotton buds that push the wax inward. Typical features are a sense of pressure or fullness, reduced hearing and sometimes ear noises or dizziness." } },
      ],
      medical: [
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Der Pfropf wird ärztlich sicher entfernt – durch Aufweichen mit geeigneten Tropfen, schonende Spülung oder instrumentelle bzw. abgesaugte Reinigung unter Sicht. Das ist unkompliziert und bessert das Hören meist sofort. Bei bekanntem Trommelfelldefekt oder Ohrenoperationen wird die Methode angepasst.",
          en: "The plug is removed safely by a clinician – by softening with suitable drops, gentle irrigation or instrumental or suction cleaning under direct view. This is straightforward and usually improves hearing at once. With a known eardrum defect or previous ear surgery, the method is adapted." } },
        { t: "p", text: {
          de: "Wichtig: Wattestäbchen und spitze Gegenstände gehören nicht in den Gehörgang, da sie den Pfropf verdichten und das Trommelfell verletzen können.",
          en: "Important: cotton buds and pointed objects do not belong in the ear canal, as they compact the plug and can injure the eardrum." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Pflege & Vorbeugung", en: "Care & prevention" } },
        { t: "ul", items: {
          de: ["Das Ohr reinigt sich normalerweise selbst; äußere Reinigung der Ohrmuschel genügt.","Aufweichende Tropfen (z. B. auf Öl- oder Salzwasserbasis) können vor einer Entfernung helfen – nur bei intaktem Trommelfell.","Von Ohrkerzen wird wegen Verletzungs- und Verbrennungsgefahr abgeraten.","Bei wiederkehrenden Pfropfen kann eine regelmäßige ärztliche Reinigung sinnvoll sein."],
          en: ["The ear normally cleans itself; cleaning the outer auricle is enough.","Softening drops (e.g. oil- or saline-based) can help before removal – only with an intact eardrum.","Ear candles are discouraged because of injury and burn risk.","With recurring plugs, regular professional cleaning can be sensible."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Die TCM bietet für einen Zeruminalpfropf keine ursächliche Behandlung; die Entfernung erfolgt mechanisch. Begleitende Maßnahmen dienen allenfalls dem allgemeinen Wohlbefinden.",
          en: "TCM offers no causal treatment for an earwax plug; removal is mechanical. Complementary measures serve at most general wellbeing." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "In der ayurvedischen Tradition wird gelegentlich eine sanfte Ohrölpflege genutzt; sie ist nur bei intaktem Trommelfell und nach ärztlicher Abklärung sinnvoll und ersetzt die fachgerechte Entfernung eines Pfropfs nicht.",
          en: "Ayurvedic tradition sometimes uses gentle ear-oil care; it is sensible only with an intact eardrum and after medical assessment and does not replace proper removal of a plug." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie spielt beim Ohrenschmalzpfropf keine Rolle. Wichtig ist, auf das Einführen von Wattestäbchen zu verzichten und die Reinigung dem ärztlichen Bereich zu überlassen.",
          en: "Physiotherapy plays no role in an earwax plug. What matters is avoiding the insertion of cotton buds and leaving cleaning to the clinical setting." } },
      ],
    },
  },

  {
    slug: "tinnitus",
    icd10: "H93.1",
    illustration: "generic",
    title: { de: "Ohrgeräusche (Tinnitus)", en: "Tinnitus" },
    summary: {
      de: "Wahrnehmung von Geräuschen wie Pfeifen oder Rauschen ohne äußere Schallquelle.",
      en: "Perception of sounds such as ringing or hissing without an external source.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Tinnitus ist die Wahrnehmung von Geräuschen – etwa Pfeifen, Rauschen, Summen oder Klingeln – ohne äußere Schallquelle. Er ist meist ein Symptom und kann viele Ursachen haben, etwa Lärm, Hörminderung, Stress, eine Ohrerkrankung oder Verspannungen im Kiefer- und Nackenbereich. Viele Menschen gewöhnen sich mit der Zeit daran; bei starkem Leidensdruck ist gezielte Hilfe möglich.",
          en: "Tinnitus is the perception of sounds – such as whistling, hissing, buzzing or ringing – without an external source. It is usually a symptom and can have many causes, for example noise, hearing loss, stress, an ear condition or tension in the jaw and neck. Many people habituate over time; where distress is high, targeted help is available." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Die Abklärung umfasst HNO-Untersuchung, Hörtest und die Suche nach behandelbaren Ursachen (z. B. Ohrenschmalz, Hörminderung, Kiefer- oder Halswirbelsäulenprobleme, Medikamente). Ein einseitiger, pulsierender oder mit weiteren Symptomen einhergehender Tinnitus wird besonders sorgfältig untersucht.",
          en: "Assessment includes an ENT examination, a hearing test and a search for treatable causes (e.g. earwax, hearing loss, jaw or cervical-spine problems, medicines). One-sided, pulsatile tinnitus or tinnitus with further symptoms is investigated with particular care." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Behandelt wird, wenn möglich, die Ursache. Bei chronischem Tinnitus stehen Aufklärung und Beratung, Hörgeräte bei begleitender Hörminderung, Klang- und Verhaltenstherapie (Tinnitus-Retraining) sowie Stressbewältigung im Vordergrund. Ziel ist, die Belastung zu senken und die Gewöhnung zu fördern.",
          en: "Where possible, the cause is treated. In chronic tinnitus, education and counselling, hearing aids for accompanying hearing loss, sound and behavioural therapy (tinnitus retraining) and stress management are central. The aim is to reduce distress and support habituation." } },
        { t: "p", text: {
          de: "Wichtig: Ein plötzlicher Tinnitus zusammen mit einer raschen Hörverschlechterung kann Zeichen eines Hörsturzes sein und sollte umgehend HNO-ärztlich abgeklärt werden.",
          en: "Important: sudden tinnitus together with a rapid decline in hearing can be a sign of sudden hearing loss and should be assessed by an ENT specialist without delay." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Lebensstil & Entlastung", en: "Lifestyle & relief" } },
        { t: "ul", items: {
          de: ["Stressbewältigung, ausreichender Schlaf und Entspannungsverfahren verringern häufig die Belastung.","Lärmschutz und der Verzicht auf völlige Stille (sanfte Hintergrundgeräusche) unterstützen die Gewöhnung.","Koffein, Nikotin und Alkohol können die Wahrnehmung beeinflussen und werden individuell geprüft.","Pflanzliche Präparate zeigen keinen gesicherten Nutzen; die Eignung ist ärztlich zu prüfen."],
          en: ["Stress management, adequate sleep and relaxation techniques often reduce distress.","Noise protection and avoiding complete silence (gentle background sound) support habituation.","Caffeine, nicotine and alcohol can influence perception and are reviewed individually.","Herbal preparations show no proven benefit; suitability should be medically reviewed."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird Tinnitus häufig einem Nieren-Mangel (eher leises, chronisches Geräusch) oder aufsteigendem Leber-Yang (eher lautes, plötzliches Geräusch) zugeordnet. Akupunktur und Kräuter können begleitend zur Entspannung und Beschwerdelinderung erwogen werden.",
          en: "In TCM, tinnitus is often assigned to a Kidney deficiency (rather quiet, chronic sound) or ascending Liver-Yang (rather loud, sudden sound). Acupuncture and herbs may be considered as complementary care for relaxation and symptom relief." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont beruhigende Routinen, Stressreduktion durch Yoga und Meditation sowie geregelten Schlaf. Kräuter- und Ölanwendungen sind ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises calming routines, stress reduction through yoga and meditation and regular sleep. Herbal and oil applications should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie kann helfen, wenn Verspannungen im Nacken oder Kiefergelenk zum Tinnitus beitragen (somatosensorischer Tinnitus): gezielte Behandlung der Halswirbelsäule und der Kaumuskulatur, Haltungsschulung und Entspannungstechniken. Zusätzlich unterstützen allgemeine Stressreduktion und ein guter Schlafrhythmus.",
          en: "Physiotherapy can help when tension in the neck or jaw joint contributes to tinnitus (somatosensory tinnitus): targeted treatment of the cervical spine and chewing muscles, posture training and relaxation techniques. General stress reduction and a good sleep rhythm support this in addition." } },
      ],
    },
  },

  {
    slug: "sudden-sensorineural-hearing-loss",
    icd10: "H91.2",
    illustration: "generic",
    title: { de: "Hörsturz", en: "Sudden Sensorineural Hearing Loss" },
    summary: {
      de: "Plötzliche, meist einseitige Hörminderung ohne erkennbare äußere Ursache – dringlich.",
      en: "Sudden, usually one-sided hearing loss without an apparent external cause – urgent.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Der Hörsturz ist eine plötzlich, meist innerhalb von Stunden und einseitig auftretende Schallempfindungsschwerhörigkeit ohne erkennbare äußere Ursache. Begleitend können ein Druck- oder Wattegefühl im Ohr, Tinnitus und selten Schwindel auftreten. Die genaue Ursache bleibt oft unklar; diskutiert werden Durchblutungs-, Entzündungs- oder virale Faktoren.",
          en: "Sudden sensorineural hearing loss is a suddenly occurring, usually within hours and one-sided, sensorineural hearing loss without an apparent external cause. Accompanying features can include a sense of pressure or cotton-wool feeling in the ear, tinnitus and rarely dizziness. The exact cause often remains unclear; circulatory, inflammatory or viral factors are discussed." } },
      ],
      medical: [
        { t: "sub", text: { de: "Dringende Abklärung", en: "Urgent assessment" } },
        { t: "p", text: {
          de: "Ein Hörsturz sollte rasch HNO-ärztlich abgeklärt werden. Die Untersuchung umfasst Ohrspiegelung, Hörtests und den Ausschluss anderer Ursachen. Eine zeitnahe Beurteilung verbessert die Behandlungsmöglichkeiten.",
          en: "Sudden hearing loss should be assessed by an ENT specialist quickly. Examination includes otoscopy, hearing tests and exclusion of other causes. A timely assessment improves treatment options." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Häufig werden entzündungshemmende Medikamente (Kortison) eingesetzt, als Tabletten oder direkt ins Mittelohr. Ein Teil der Hörstürze bildet sich zurück; die Aussichten sind unterschiedlich und hängen unter anderem vom Ausmaß und vom raschen Behandlungsbeginn ab.",
          en: "Anti-inflammatory medicines (corticosteroids) are often used, as tablets or directly into the middle ear. A proportion of sudden hearing losses recover; the outlook varies and depends among other things on the extent and on prompt treatment." } },
        { t: "p", text: {
          de: "Wichtig: Eine plötzliche, unerklärte Hörminderung ist ein dringlicher Fall und sollte zeitnah HNO-ärztlich abgeklärt werden; kommen starker Drehschwindel, Doppelbilder, Sprach- oder Lähmungszeichen hinzu, ist der Notruf 112 zu wählen.",
          en: "Important: sudden, unexplained hearing loss is an urgent matter and should be assessed by an ENT specialist promptly; if severe rotatory vertigo, double vision, speech or paralysis signs are present, call the emergency number (112)." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Eine naturheilkundliche Selbstbehandlung darf die dringliche HNO-ärztliche Abklärung nicht verzögern. Nach der akuten Phase unterstützen Stressreduktion, Ruhe, Lärmschutz und ein gesunder Lebensstil die Erholung. Pflanzliche Präparate sind ärztlich zu prüfen.",
          en: "Naturopathic self-treatment must not delay the urgent ENT assessment. After the acute phase, stress reduction, rest, noise protection and a healthy lifestyle support recovery. Herbal preparations should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM würde ein plötzlicher Hörverlust Mustern wie einer Blockade durch aufsteigendes Leber-Yang oder einem akuten Ereignis zugeordnet. TCM-Verfahren sind allenfalls begleitend in der Erholungsphase vertretbar und ersetzen die rasche schulmedizinische Behandlung nicht.",
          en: "In TCM a sudden hearing loss would be assigned to patterns such as a blockage from ascending Liver-Yang or an acute event. TCM approaches are at most defensible as complementary care in the recovery phase and do not replace prompt conventional treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung in der Erholungsphase betont Ruhe, Stressreduktion und geregelte Routinen. Anwendungen am Ohr sind ärztlich abzustimmen; die akute Behandlung erfolgt schulmedizinisch.",
          en: "Ayurvedic support during recovery emphasises rest, stress reduction and regular routines. Ear applications should be medically agreed; acute treatment is conventional." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt den Hörsturz nicht. Tritt begleitend Schwindel auf, kann nach der Akutphase ein Gleichgewichtstraining (vestibuläre Rehabilitation) helfen; allgemein unterstützen Entspannung und Stressabbau die Erholung.",
          en: "Physiotherapy does not treat sudden hearing loss. If accompanying dizziness occurs, balance training (vestibular rehabilitation) can help after the acute phase; generally, relaxation and stress reduction support recovery." } },
      ],
    },
  },

  {
    slug: "age-related-hearing-loss",
    icd10: "H91.1",
    illustration: "generic",
    title: { de: "Altersschwerhörigkeit (Presbyakusis)", en: "Age-Related Hearing Loss" },
    summary: {
      de: "Allmählicher, meist beidseitiger Hörverlust im Alter, vor allem für hohe Töne.",
      en: "Gradual, usually two-sided hearing loss in later life, especially for high tones.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Altersschwerhörigkeit ist ein allmählicher, meist beidseitiger und symmetrischer Verlust des Hörvermögens, besonders für hohe Töne. Typisch ist, dass das Verstehen von Sprache im Störgeräusch – etwa in geselliger Runde – schwerfällt, obwohl einzelne Laute noch gehört werden. Ursache sind altersbedingte Veränderungen im Innenohr und an der Hörbahn, oft verstärkt durch frühere Lärmbelastung.",
          en: "Age-related hearing loss is a gradual, usually two-sided and symmetrical loss of hearing, especially for high tones. Characteristically, understanding speech in background noise – for example in company – becomes difficult, although individual sounds are still heard. The cause is age-related changes in the inner ear and auditory pathway, often intensified by earlier noise exposure." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Die Abklärung umfasst HNO-Untersuchung und Hörtests, um Ausmaß und Art der Schwerhörigkeit zu bestimmen und andere Ursachen (z. B. Ohrenschmalz, Mittelohrprobleme) auszuschließen.",
          en: "Assessment includes an ENT examination and hearing tests to determine the extent and type of hearing loss and to exclude other causes (e.g. earwax, middle-ear problems)." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Im Vordergrund stehen Hörgeräte, die frühzeitig angepasst den größten Nutzen bringen; bei hochgradiger Schwerhörigkeit kann ein Cochlea-Implantat infrage kommen. Eine gute Versorgung unterstützt Kommunikation, soziale Teilhabe und geistige Aktivität.",
          en: "Hearing aids are central and, fitted early, bring the greatest benefit; in profound hearing loss a cochlear implant may be an option. Good provision supports communication, social participation and mental activity." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Schutz & Alltag", en: "Protection & daily life" } },
        { t: "ul", items: {
          de: ["Konsequenter Lärmschutz bewahrt das verbliebene Hörvermögen.","Eine augen- und ohrfreundliche, herzgesunde Lebensweise unterstützt die Durchblutung des Innenohrs.","Aktive Kommunikation und soziale Teilhabe beugen Rückzug und Vereinsamung vor.","Ein Hörverlust lässt sich nicht naturheilkundlich rückgängig machen; die frühzeitige Hörgeräteanpassung ist entscheidend."],
          en: ["Consistent noise protection preserves remaining hearing.","An eye- and ear-friendly, heart-healthy lifestyle supports inner-ear blood flow.","Active communication and social participation prevent withdrawal and isolation.","Hearing loss cannot be reversed by naturopathy; early hearing-aid fitting is decisive."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird nachlassendes Hören im Alter häufig einem Nieren-Essenz-Mangel zugeordnet. Begleitende Maßnahmen zielen auf das allgemeine Wohlbefinden und ersetzen die Hörgeräteversorgung nicht.",
          en: "In TCM, declining hearing in later life is often assigned to a Kidney-essence deficiency. Complementary measures aim at general wellbeing and do not replace hearing-aid provision." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont geregelte Routinen, eine ausgewogene Ernährung und Ruhe. Kräuter- und Ölanwendungen sind ärztlich zu prüfen und ersetzen die audiologische Versorgung nicht.",
          en: "Ayurvedic support emphasises regular routines, a balanced diet and rest. Herbal and oil applications should be medically reviewed and do not replace audiological care." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie behandelt die Altersschwerhörigkeit nicht. Allgemein tragen körperliche Aktivität und Herz-Kreislauf-Gesundheit zum Wohlbefinden bei; bei begleitender Unsicherheit oder Sturzneigung im Alter unterstützt ein Gleichgewichts- und Krafttraining.",
          en: "Physiotherapy does not treat age-related hearing loss. Generally, physical activity and cardiovascular health contribute to wellbeing; with accompanying unsteadiness or a tendency to fall in older age, balance and strength training help." } },
      ],
    },
  },

  {
    slug: "benign-paroxysmal-positional-vertigo",
    icd10: "H81.1",
    illustration: "generic",
    title: { de: "Gutartiger Lagerungsschwindel", en: "Benign Positional Vertigo" },
    summary: {
      de: "Kurze, heftige Drehschwindelattacken bei bestimmten Kopfbewegungen – gut behandelbar.",
      en: "Brief, intense rotatory vertigo with certain head movements – readily treatable.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Der gutartige Lagerungsschwindel ist die häufigste Ursache von Drehschwindel. Kleine Kristalle (Otokonien) lösen sich im Gleichgewichtsorgan und geraten in einen Bogengang, wo sie bei bestimmten Kopfbewegungen – etwa Hinlegen, Umdrehen im Bett oder Kopf in den Nacken legen – kurze, heftige Drehschwindelattacken von Sekunden bis wenigen Minuten auslösen. Er ist unangenehm, aber gutartig und meist sehr gut behandelbar.",
          en: "Benign positional vertigo is the most common cause of rotatory vertigo. Small crystals (otoconia) become dislodged in the balance organ and enter a semicircular canal, where certain head movements – such as lying down, turning over in bed or tilting the head back – trigger brief, intense attacks of rotatory vertigo lasting seconds to a few minutes. It is unpleasant but benign and usually very treatable." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose & Behandlung", en: "Diagnosis & treatment" } },
        { t: "p", text: {
          de: "Die Diagnose gelingt meist mit gezielten Lagerungsproben (z. B. Dix-Hallpike-Manöver), bei denen der typische Schwindel und Augenbewegungen (Nystagmus) ausgelöst werden. Behandelt wird mit Befreiungsmanövern (z. B. Epley- oder Sémont-Manöver), die die Kristalle aus dem Bogengang herausbefördern – oft mit rascher Besserung.",
          en: "Diagnosis is usually made with targeted positioning tests (e.g. the Dix-Hallpike manoeuvre) that provoke the typical vertigo and eye movements (nystagmus). Treatment uses repositioning manoeuvres (e.g. the Epley or Sémont manoeuvre) that move the crystals out of the canal – often with rapid improvement." } },
        { t: "p", text: {
          de: "Wichtig: Dauerhafter Schwindel, Schwindel mit Kopfschmerz, Doppelbildern, Taubheit, Lähmung oder Sprachstörung kann auf eine andere, ernste Ursache hindeuten und erfordert eine rasche ärztliche Abklärung, im Zweifel den Notruf 112.",
          en: "Important: persistent vertigo, or vertigo with headache, double vision, numbness, paralysis or speech disturbance, can indicate another, serious cause and requires prompt medical assessment, and an emergency call (112) if in doubt." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Eine ursächliche naturheilkundliche Behandlung gibt es nicht; die Befreiungsmanöver sind die wirksamste Maßnahme. Unterstützend helfen Ruhe, langsames Bewegen und das Vermeiden abrupter Kopflagewechsel in den ersten Stunden. Ausreichende Flüssigkeitszufuhr und guter Schlaf fördern das Wohlbefinden.",
          en: "There is no causal naturopathic treatment; the repositioning manoeuvres are the most effective measure. Supportively, rest, slow movements and avoiding abrupt changes of head position in the first hours help. Adequate fluids and good sleep support wellbeing." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird Schwindel häufig Mustern wie aufsteigendem Leber-Yang, Schleim oder einem Mangel an Qi und Blut zugeordnet. Begleitende Maßnahmen können das Wohlbefinden unterstützen; die Befreiungsmanöver bleiben die eigentliche Behandlung.",
          en: "In TCM, vertigo is often assigned to patterns such as ascending Liver-Yang, phlegm or a deficiency of Qi and Blood. Complementary measures may support wellbeing; the repositioning manoeuvres remain the actual treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont beruhigende Routinen, geregelten Schlaf und eine ausgewogene Ernährung. Kräuterpräparate sind ärztlich zu prüfen und ersetzen die gezielten Lagerungsmanöver nicht.",
          en: "Ayurvedic support emphasises calming routines, regular sleep and a balanced diet. Herbal preparations should be medically reviewed and do not replace the targeted positioning manoeuvres." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie ist hier zentral: gezielte Befreiungsmanöver (z. B. Epley- oder Sémont-Manöver) verlagern die Kristalle und beseitigen den Schwindel oft rasch. Ergänzend können angeleitete Eigenübungen und ein Gleichgewichtstraining die Sicherheit im Alltag verbessern und Rückfällen vorbeugen.",
          en: "Physiotherapy is central here: targeted repositioning manoeuvres (e.g. the Epley or Sémont manoeuvre) move the crystals and often resolve the vertigo quickly. In addition, guided home exercises and balance training can improve everyday confidence and help prevent recurrences." } },
      ],
    },
  },

  {
    slug: "vestibular-neuritis",
    icd10: "H81.2",
    illustration: "generic",
    title: { de: "Neuritis vestibularis", en: "Vestibular Neuritis" },
    summary: {
      de: "Anhaltender heftiger Drehschwindel durch eine Entzündung des Gleichgewichtsnervs.",
      en: "Persistent severe rotatory vertigo from inflammation of the balance nerve.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Neuritis vestibularis ist eine vermutlich entzündlich bedingte Störung des Gleichgewichtsnervs, oft im Anschluss an einen Infekt. Typisch ist ein plötzlicher, über Stunden bis Tage anhaltender heftiger Drehschwindel mit Übelkeit, Erbrechen, Gang- und Standunsicherheit – ohne Hörverlust oder Ohrgeräusche. Der Schwindel bessert sich in den folgenden Tagen bis Wochen allmählich.",
          en: "Vestibular neuritis is a presumed inflammatory disorder of the balance nerve, often following an infection. Typical is a sudden, severe rotatory vertigo lasting hours to days with nausea, vomiting and unsteadiness of gait and stance – without hearing loss or ear noises. The vertigo gradually improves over the following days to weeks." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Die Diagnose stützt sich auf die typische Beschwerdeschilderung und die neurologisch-otologische Untersuchung der Augenbewegungen und des Gleichgewichts. Wichtig ist der Ausschluss gefährlicher Ursachen wie eines Schlaganfalls, besonders bei zusätzlichen neurologischen Zeichen.",
          en: "Diagnosis rests on the typical symptom description and the neuro-otological examination of eye movements and balance. Excluding dangerous causes such as a stroke is important, especially with additional neurological signs." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "In den ersten Tagen lindern Medikamente Übelkeit und Schwindel; sie werden aber nur kurz eingesetzt, um die natürliche Erholung nicht zu bremsen. Entscheidend ist der frühzeitige Beginn eines Gleichgewichtstrainings, das die Anpassung des Gehirns (zentrale Kompensation) fördert.",
          en: "In the first days, medicines ease nausea and vertigo; they are used only briefly, however, so as not to slow the natural recovery. Early start of balance training is decisive, promoting the brain's adaptation (central compensation)." } },
        { t: "p", text: {
          de: "Wichtig: Kommen Doppelbilder, Sprach-, Gefühls- oder Lähmungsstörungen, starke Kopfschmerzen oder Bewusstseinsstörungen hinzu, ist umgehend der Notruf 112 zu wählen (Verdacht auf Schlaganfall).",
          en: "Important: if double vision, speech, sensory or paralysis disturbances, severe headache or reduced consciousness occur, call the emergency number (112) immediately (suspected stroke)." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Eine naturheilkundliche Behandlung ersetzt die Abklärung nicht. In der Erholungsphase unterstützen Ruhe mit früher, dosierter Aktivierung, ausreichende Flüssigkeit und Stressreduktion. Wichtig ist, sich trotz Unsicherheit schrittweise wieder zu bewegen, um die Kompensation zu fördern.",
          en: "Naturopathic treatment does not replace assessment. During recovery, rest with early, dosed activation, adequate fluids and stress reduction help. It is important to move again step by step despite unsteadiness, to promote compensation." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird heftiger Schwindel häufig Mustern wie Wind, Schleim oder aufsteigendem Leber-Yang zugeordnet. Akupunktur kann in der Erholungsphase begleitend erwogen werden; das Gleichgewichtstraining bleibt zentral.",
          en: "In TCM, severe vertigo is often assigned to patterns such as Wind, phlegm or ascending Liver-Yang. Acupuncture may be considered as complementary care during recovery; balance training remains central." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Ruhe, beruhigende Routinen und eine ausgewogene Ernährung in der Erholungsphase. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises rest, calming routines and a balanced diet during recovery. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Die vestibuläre Rehabilitation ist hier der Kern der Behandlung: gezielte Blick-, Kopf- und Gleichgewichtsübungen fördern die zentrale Kompensation, verbessern die Standsicherheit und verkürzen die Erholung. Das Programm wird individuell gesteigert und begleitet.",
          en: "Vestibular rehabilitation is the core of treatment here: targeted gaze, head and balance exercises promote central compensation, improve steadiness and shorten recovery. The programme is progressed and supervised individually." } },
      ],
    },
  },

  {
    slug: "meniere-disease",
    icd10: "H81.0",
    illustration: "generic",
    title: { de: "Morbus Menière", en: "Ménière's Disease" },
    summary: {
      de: "Anfälle von Drehschwindel, schwankendem Hörverlust und Ohrdruck mit Tinnitus.",
      en: "Attacks of rotatory vertigo, fluctuating hearing loss and ear pressure with tinnitus.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Der Morbus Menière ist eine Innenohrerkrankung mit wiederkehrenden Anfällen. Typisch ist die Kombination aus heftigem Drehschwindel (Minuten bis Stunden), schwankendem Hörverlust, Ohrgeräusch (Tinnitus) und einem Druck- oder Völlegefühl im Ohr. Als Ursache gilt ein Missverhältnis der Innenohrflüssigkeit (endolymphatischer Hydrops). Der Verlauf ist sehr unterschiedlich, mit beschwerdefreien Phasen zwischen den Anfällen.",
          en: "Ménière's disease is an inner-ear disorder with recurrent attacks. Typical is the combination of severe rotatory vertigo (minutes to hours), fluctuating hearing loss, ear noise (tinnitus) and a sense of pressure or fullness in the ear. The cause is thought to be an imbalance of inner-ear fluid (endolymphatic hydrops). The course varies greatly, with symptom-free phases between attacks." } },
      ],
      medical: [
        { t: "sub", text: { de: "Abklärung", en: "Assessment" } },
        { t: "p", text: {
          de: "Die Diagnose stützt sich auf den typischen Beschwerdeverlauf, Hörtests und HNO-ärztliche Untersuchungen; andere Ursachen werden ausgeschlossen. Ein Beschwerde- und Anfallstagebuch hilft, Muster und Auslöser zu erkennen.",
          en: "Diagnosis rests on the typical symptom course, hearing tests and ENT examinations; other causes are excluded. A symptom and attack diary helps identify patterns and triggers." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Im Anfall lindern Medikamente Schwindel und Übelkeit. Vorbeugend werden eine salzbewusste Ernährung, ausreichende Flüssigkeit, Stressreduktion und je nach Verlauf Medikamente eingesetzt; bei schweren Verläufen stehen weitere HNO-ärztliche Verfahren zur Verfügung. Ein begleitendes Gleichgewichtstraining unterstützt die Sicherheit im Alltag.",
          en: "During an attack, medicines ease vertigo and nausea. Preventively, a salt-aware diet, adequate fluids, stress reduction and, depending on course, medicines are used; for severe courses, further ENT procedures are available. Accompanying balance training supports everyday confidence." } },
        { t: "p", text: {
          de: "Wichtig: Treten erstmalig starker Schwindel mit neurologischen Zeichen (Doppelbilder, Lähmung, Sprachstörung) auf, ist der Notruf 112 zu wählen, um einen Schlaganfall auszuschließen.",
          en: "Important: if severe vertigo with neurological signs (double vision, paralysis, speech disturbance) occurs for the first time, call the emergency number (112) to exclude a stroke." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Lebensstil", en: "Lifestyle" } },
        { t: "ul", items: {
          de: ["Eine salzbewusste Ernährung und gleichmäßige Flüssigkeitszufuhr können Anfälle verringern.","Koffein, Alkohol und Nikotin werden individuell geprüft und oft reduziert.","Stressbewältigung, regelmäßiger Schlaf und Entspannungsverfahren unterstützen die Stabilität.","Ein Anfallstagebuch hilft, persönliche Auslöser zu erkennen."],
          en: ["A salt-aware diet and even fluid intake can reduce attacks.","Caffeine, alcohol and nicotine are reviewed individually and often reduced.","Stress management, regular sleep and relaxation techniques support stability.","An attack diary helps identify personal triggers."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird das Beschwerdebild häufig Mustern wie Schleim-Feuchtigkeit, aufsteigendem Leber-Yang oder Nieren-Schwäche zugeordnet. Akupunktur und Ernährungsberatung können begleitend zur Beschwerdelinderung erwogen werden.",
          en: "In TCM, the symptom picture is often assigned to patterns such as phlegm-dampness, ascending Liver-Yang or Kidney weakness. Acupuncture and dietary advice may be considered as complementary symptom relief." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont beruhigende Routinen, Stressreduktion und eine ausgewogene, salzbewusste Ernährung. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "Ayurvedic support emphasises calming routines, stress reduction and a balanced, salt-aware diet. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Zwischen den Anfällen kann eine vestibuläre Rehabilitation mit Gleichgewichts- und Blickstabilisationsübungen die Standsicherheit verbessern und die Sturzgefahr senken, besonders wenn ein bleibendes Gleichgewichtsdefizit besteht. Im akuten Anfall stehen Ruhe und Schutz vor Stürzen im Vordergrund.",
          en: "Between attacks, vestibular rehabilitation with balance and gaze-stabilisation exercises can improve steadiness and reduce fall risk, especially when a lasting balance deficit remains. During an acute attack, rest and protection from falls are central." } },
      ],
    },
  },

  {
    slug: "epistaxis-nosebleed",
    icd10: "R04.0",
    illustration: "generic",
    title: { de: "Nasenbluten (Epistaxis)", en: "Nosebleed (Epistaxis)" },
    summary: {
      de: "Blutung aus der Nase, meist aus dem vorderen Bereich und in der Regel harmlos.",
      en: "Bleeding from the nose, usually from the front area and generally harmless.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Nasenbluten entsteht meist aus einem gut durchbluteten Gefäßgeflecht im vorderen Bereich der Nasenscheidewand. Auslöser sind trockene Schleimhaut, Naseputzen oder -bohren, kleine Verletzungen, Infekte, Allergien oder ein erhöhter Blutdruck. Meist ist es harmlos und lässt sich mit einfachen Maßnahmen stoppen. Seltener stammt die Blutung aus dem hinteren Bereich und ist stärker.",
          en: "Nosebleeds usually arise from a well-supplied network of vessels in the front part of the nasal septum. Triggers include dry mucous membranes, blowing or picking the nose, minor injuries, infections, allergies or raised blood pressure. Usually it is harmless and can be stopped with simple measures. More rarely the bleeding comes from the back area and is heavier." } },
      ],
      medical: [
        { t: "sub", text: { de: "Erste Hilfe", en: "First aid" } },
        { t: "p", text: {
          de: "Aufrecht hinsetzen, den Kopf leicht nach vorn neigen (nicht in den Nacken) und die weichen Nasenflügel für etwa 10 bis 15 Minuten fest zusammendrücken; ein kühler Umschlag auf Nacken oder Nasenrücken kann helfen. Das Blut sollte ausgespuckt, nicht geschluckt werden.",
          en: "Sit upright, tilt the head slightly forward (not back) and firmly pinch the soft part of the nose for about 10 to 15 minutes; a cool compress on the neck or bridge of the nose can help. Blood should be spat out, not swallowed." } },
        { t: "sub", text: { de: "Ärztliche Behandlung", en: "Medical treatment" } },
        { t: "p", text: {
          de: "Lässt sich die Blutung so nicht stoppen, kommen Verödung der Blutungsquelle, eine Nasentamponade oder weitere HNO-ärztliche Maßnahmen infrage. Bei wiederholtem Nasenbluten werden Blutdruck, Gerinnung und blutverdünnende Medikamente berücksichtigt.",
          en: "If the bleeding cannot be stopped this way, cauterisation of the bleeding source, nasal packing or further ENT measures are options. With repeated nosebleeds, blood pressure, clotting and blood-thinning medicines are considered." } },
        { t: "p", text: {
          de: "Wichtig: Sehr starkes, nicht stillbares Nasenbluten, Blutung nach schwerer Verletzung, Kreislaufschwäche oder Nasenbluten unter Blutverdünnern erfordern eine rasche ärztliche Hilfe, im Notfall den Notruf 112.",
          en: "Important: very heavy, unstoppable nosebleeds, bleeding after a severe injury, faintness or nosebleeds while on blood thinners require prompt medical help, and an emergency call (112) in an emergency." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Vorbeugung & Pflege", en: "Prevention & care" } },
        { t: "ul", items: {
          de: ["Befeuchtende Nasenpflege (Salben, Sprays, Meersalz) beugt trockener, rissiger Schleimhaut vor.","Raumluft befeuchten, besonders im Winter und bei Heizungsluft.","Sanftes Naseputzen und der Verzicht auf Nasenbohren verringern Verletzungen.","Bei bekanntem Bluthochdruck ist eine gute Einstellung hilfreich."],
          en: ["Moisturising nasal care (ointments, sprays, sea salt) prevents dry, cracked mucous membranes.","Humidify room air, especially in winter and with heating.","Gentle nose-blowing and avoiding nose-picking reduce injury.","With known high blood pressure, good control is helpful."] } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird Nasenbluten häufig mit Hitze im Blut oder Lungen-Hitze in Verbindung gebracht. Begleitende Maßnahmen zielen auf Kühlung und Wohlbefinden; die Erste Hilfe und – bei starker Blutung – die ärztliche Versorgung bleiben vorrangig.",
          en: "In TCM, nosebleeds are often associated with heat in the blood or Lung-Heat. Complementary measures aim at cooling and wellbeing; first aid and – for heavy bleeding – medical care remain the priority." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Kühlung, Befeuchtung der Nasenschleimhaut und eine ausgewogene Ernährung. Sanfte Nasenölpflege kann bei trockener Schleimhaut erwogen werden; Präparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises cooling, moisturising the nasal mucosa and a balanced diet. Gentle nasal-oil care can be considered for dry mucous membranes; preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Physiotherapie hat beim Nasenbluten keine behandelnde Rolle. Allgemein sinnvoll sind ruhiges, nicht pressendes Atmen während der Blutstillung und, bei erhöhtem Blutdruck, dessen Kontrolle im Rahmen der ärztlichen Betreuung.",
          en: "Physiotherapy has no treating role in nosebleeds. Generally sensible are calm, non-straining breathing while the bleeding is controlled and, with raised blood pressure, its control within medical care." } },
      ],
    },
  },
]
