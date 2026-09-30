import type { Disease } from "@/content/treatments"

/**
 * Conditions for "General Complaints, Respiratory & ENT". Migrated from the
 * practice's own drdosthealth.com pages into a bilingual, block-structured
 * form (definition + 5 treatment modalities), with the real inline images.
 * Wording is written freshly; every page is reviewed by Dr. Dost before use.
 */
export const respiratoryDiseases: Disease[] = [
  {
    slug: "acute-bronchitis",
    icd10: "J20.9",
    illustration: "lungs",
    title: { de: "Akute Bronchitis", en: "Acute Bronchitis" },
    summary: {
      de: "Meist virusbedingte Entzündung der Bronchien, die in zwei bis drei Wochen ausheilt.",
      en: "A usually viral inflammation of the bronchi that clears within two to three weeks.",
    },
    rich: {
      definition: [
        {
          t: "p",
          text: {
            de: "Die akute Bronchitis ist eine akute Entzündung der Bronchialschleimhaut, die meist durch eine virale Atemwegsinfektion verursacht wird. Typisch beginnt sie mit einem anfangs trockenen Husten, der später produktiv wird; hinzu kommen können Druck hinter dem Brustbein, pfeifende Atemgeräusche, Müdigkeit, leichtes Fieber und vermehrter Schleim. Bei ansonsten gesunden Erwachsenen heilt sie in der Regel von selbst aus.",
            en: "Acute bronchitis is an acute inflammation of the bronchial mucosa, most often caused by a viral respiratory infection. It typically begins with an initially dry cough that later becomes productive, and may bring retrosternal pressure, wheezing, fatigue, mild fever and increased mucus. In otherwise healthy adults it usually resolves on its own.",
          },
        },
        { t: "img", src: "diseases/acute-bronchitis/definition.jpg", alt: { de: "Röntgenaufnahme des Brustkorbs", en: "Chest X-ray" } },
      ],
      medical: [
        { t: "sub", text: { de: "Symptomatische Behandlung", en: "Symptomatic treatment" } },
        { t: "p", text: {
          de: "Im Vordergrund stehen Schonung und ausreichende Flüssigkeitszufuhr. Gegen Fieber, Kopf- und Gliederschmerzen können Paracetamol oder Ibuprofen eingesetzt werden.",
          en: "The focus is on rest and adequate fluid intake. Paracetamol or ibuprofen can be used for fever, headache and body aches." } },
        { t: "sub", text: { de: "Husten und Sekret", en: "Cough and secretions" } },
        { t: "p", text: {
          de: "Bei quälendem Reizhusten kann kurzzeitig ein Hustenstiller (z. B. Dextromethorphan) sinnvoll sein; bei zähem Schleim helfen Schleimlöser wie Ambroxol oder N-Acetylcystein. Die Inhalation mit isotoner Kochsalzlösung befeuchtet die Atemwege, ein Bronchodilatator wie Salbutamol wird nur bei Giemen oder Bronchospasmus erwogen.",
          en: "A short course of a cough suppressant (e.g. dextromethorphan) can help a distressing dry cough; mucolytics such as ambroxol or N-acetylcysteine loosen thick secretions. Inhaling isotonic saline moistens the airways, and a bronchodilator such as salbutamol is only considered for wheeze or bronchospasm." } },
        { t: "img", src: "diseases/acute-bronchitis/medical.jpg", alt: { de: "Inhalationstherapie", en: "Inhalation therapy" } },
        { t: "sub", text: { de: "Antibiotika", en: "Antibiotics" } },
        { t: "p", text: {
          de: "Da die meisten Fälle viral sind, sind Antibiotika in der Regel nicht angezeigt. Sie kommen nur bei begründetem Verdacht auf eine bakterielle Beteiligung oder relevanten Risikofaktoren infrage.",
          en: "Because most cases are viral, antibiotics are generally not indicated. They are used only when there is a well-founded suspicion of bacterial involvement or relevant risk factors." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Phytotherapie", en: "Phytotherapy" } },
        { t: "ul", items: {
          de: ["Kapland-Pelargonie (Pelargonium sidoides) zur symptomatischen Unterstützung bei unkomplizierten Atemwegsinfekten.","Thymian, oft mit Primelwurzel oder Efeublättern, fördert den Auswurf und lindert produktiven Husten.","Standardisierte Cineol- oder Myrtolpräparate können den Schleim verflüssigen.","Honig kann die Hustenhäufigkeit verringern."],
          en: ["Pelargonium sidoides for symptomatic support in uncomplicated respiratory infections.","Thyme, often with primrose root or ivy leaf, promotes expectoration and eases a productive cough.","Standardized cineole or myrtol preparations can help liquefy mucus.","Honey may reduce cough frequency."] } },
        { t: "sub", text: { de: "Physikalische Maßnahmen", en: "Physical measures" } },
        { t: "p", text: {
          de: "Warme Getränke, ausreichende Flüssigkeit und feuchte Raumluft unterstützen den Sekretabtransport; warme Brustauflagen können das Wohlbefinden steigern. Ätherische Öle sind bei Asthma, Allergien sowie bei Säuglingen und Kleinkindern nur mit Vorsicht anzuwenden.",
          en: "Warm drinks, adequate fluids and humid air support clearance of secretions; warm chest compresses can add comfort. Essential oils should be used cautiously in asthma, allergies, infants and young children." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM wird nach dem individuellen Muster behandelt, nicht nach der schulmedizinischen Diagnose.",
          en: "In TCM, treatment follows the individual pattern rather than the biomedical diagnosis." } },
        { t: "sub", text: { de: "Wind-Kälte in der Lunge", en: "Wind-Cold in the Lung" } },
        { t: "p", text: {
          de: "Husten mit dünnem, weißem Auswurf, Frösteln und verstopfter Nase. Ziel ist es, Wind-Kälte zu lösen und das Lungen-Qi zu regulieren (z. B. Zhi Sou San).",
          en: "Cough with thin white sputum, chills and nasal congestion. The aim is to release Wind-Cold and regulate Lung Qi (e.g. Zhi Sou San)." } },
        { t: "sub", text: { de: "Wind-Hitze in der Lunge", en: "Wind-Heat in the Lung" } },
        { t: "p", text: {
          de: "Husten mit Fieber, Halsschmerzen und gelblichem Auswurf. Wind-Hitze klären (z. B. Sang Ju Yin oder Yin Qiao San).",
          en: "Cough with fever, sore throat and yellowish sputum. Clear Wind-Heat (e.g. Sang Ju Yin or Yin Qiao San)." } },
        { t: "sub", text: { de: "Trockenheit der Lunge", en: "Lung Dryness" } },
        { t: "p", text: {
          de: "Trockener Reizhusten mit spärlichem Auswurf. Trockenheit lösen und die Lunge befeuchten (z. B. Sang Xing Tang).",
          en: "Dry, irritating cough with scanty sputum. Clear Dryness and moisten the Lung (e.g. Sang Xing Tang)." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Pathogenese", en: "Pathogenesis" } },
        { t: "p", text: {
          de: "Produktive Bronchialbeschwerden werden traditionell als erhöhtes Kapha in den Atemwegskanälen verstanden, häufig mit einer Störung von Vata (Prana Vayu).",
          en: "Productive bronchial symptoms are traditionally understood as increased Kapha in the respiratory channels, often with a disturbance of Vata (Prana Vayu)." } },
        { t: "sub", text: { de: "Klassische Ansätze", en: "Classical approaches" } },
        { t: "ul", items: {
          de: ["Sitopaladi Churna bei Husten und übermäßigem Kapha.","Talisadi Churna bei Husten und Atemwegsbeschwerden.","Vasaka (Adhatoda vasica) als traditionelles Expektorans.","Pippali (Piper longum) zur Unterstützung von Kapha-Regulation und Verdauung."],
          en: ["Sitopaladi Churna for cough and excess Kapha.","Talisadi Churna for cough and respiratory congestion.","Vasaka (Adhatoda vasica) as a traditional expectorant.","Pippali (Piper longum) to support Kapha regulation and digestion."] } },
        { t: "sub", text: { de: "Ernährung", en: "Nutrition" } },
        { t: "p", text: {
          de: "Warme, leicht verdauliche Speisen und warme Flüssigkeiten sind vorteilhaft; sehr kalte, schwere oder fettige Speisen werden bei starker Verschleimung reduziert.",
          en: "Warm, easily digestible foods and warm fluids are helpful; very cold, heavy or oily foods are reduced during heavy congestion." } },
        { t: "img", src: "diseases/acute-bronchitis/ayurvedic.jpg", alt: { de: "Ayurvedisches Kräuterpulver", en: "Ayurvedic herbal powder" } },
      ],
      physio: [
        { t: "sub", text: { de: "TCM-orientiert", en: "TCM-oriented" } },
        { t: "p", text: {
          de: "Schröpfen bzw. Gua Sha an paravertebralen Bereichen und Punkten wie BL13 sowie Tuina/Akupressur (LU7, LU5) können durch geschulte Behandler einbezogen werden; sanftes Qigong unterstützt die Atemmechanik.",
          en: "Cupping or Gua Sha over paravertebral areas and points such as BL13, plus Tuina/acupressure (LU7, LU5), can be applied by trained practitioners; gentle Qigong supports respiratory mechanics." } },
        { t: "sub", text: { de: "Ayurveda-orientiert", en: "Ayurvedic-oriented" } },
        { t: "p", text: {
          de: "Warme äußere Anwendungen und eine sanfte Brustmassage können nach Untersuchung eingesetzt werden; kräftige Massage und forcierte Atemübungen (z. B. Kapalabhati) sind während einer akuten Infektion zu meiden.",
          en: "Warm external applications and gentle chest massage may be used after assessment; vigorous massage and forceful breathing exercises (e.g. Kapalabhati) should be avoided during acute infection." } },
      ],
    },
  },

  {
    slug: "acute-laryngitis",
    icd10: "J04.0",
    illustration: "generic",
    title: { de: "Akute Laryngitis", en: "Acute Laryngitis" },
    summary: {
      de: "Entzündung von Kehlkopf und Stimmlippen mit Heiserkeit – meist selbstheilend.",
      en: "Inflammation of the larynx and vocal folds with hoarseness – usually self-healing.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die akute Laryngitis ist eine Entzündung von Kehlkopf und Stimmlippen, meist im Rahmen eines viralen Atemwegsinfekts oder durch Überlastung der Stimme. Typisch sind Heiserkeit bis Stimmverlust, Reizhusten und Missempfinden beim Sprechen. Die meisten Fälle heilen von selbst.",
          en: "Acute laryngitis is an inflammation of the larynx and vocal folds, usually from a viral respiratory infection or vocal overuse. Typical signs are hoarseness up to voice loss, a dry cough and discomfort when speaking. Most cases resolve on their own." } },
        { t: "img", src: "diseases/acute-laryngitis/definition.jpg", alt: { de: "Kehlkopf und Stimme", en: "Larynx and voice" } },
      ],
      medical: [
        { t: "sub", text: { de: "Stimmschonung", en: "Voice rest" } },
        { t: "p", text: {
          de: "Die wichtigste Maßnahme ist relative Stimmschonung: lautes Sprechen, Rufen und Singen meiden. Auch Flüstern belastet die Stimme und wird nicht empfohlen.",
          en: "The key measure is relative voice rest: avoid loud speaking, shouting and singing. Whispering also strains the voice and is not recommended." } },
        { t: "sub", text: { de: "Symptomatische Behandlung", en: "Symptomatic treatment" } },
        { t: "p", text: {
          de: "Ausreichend trinken, feuchte Raumluft und bei Bedarf Paracetamol oder Ibuprofen. Rauch und Reizstoffe meiden; bei wiederkehrender Heiserkeit an Reflux oder Allergie denken. Antibiotika sind bei der viralen Form nicht angezeigt; anhaltende Heiserkeit oder Atemnot gehören in ärztliche/HNO-Abklärung.",
          en: "Adequate fluids, humid air and paracetamol or ibuprofen if needed. Avoid smoke and irritants; consider reflux or allergy in recurrent hoarseness. Antibiotics are not indicated for the viral form; persistent hoarseness or breathing difficulty needs medical/ENT review." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Phytotherapie", en: "Phytotherapy" } },
        { t: "ul", items: {
          de: ["Isländisch Moos und Eibischwurzel als reizlindernde Schleimstoffe.","Salbei bei begleitender Rachenreizung.","Honig kann Reizhusten und Halskratzen lindern."],
          en: ["Iceland moss and marshmallow root as soothing demulcents.","Sage for accompanying throat irritation.","Honey can ease dry cough and throat irritation."] } },
        { t: "sub", text: { de: "Physikalische Maßnahmen", en: "Physical measures" } },
        { t: "p", text: {
          de: "Viel trinken, feuchte Luft und warme Getränke tun gut; Tabakrauch und Reizstoffe sind zu meiden.",
          en: "Plenty of fluids, humid air and warm drinks help; tobacco smoke and irritants should be avoided." } },
        { t: "img", src: "diseases/acute-laryngitis/naturopathic.jpg", alt: { de: "Natürliche Halspflege", en: "Natural throat care" } },
      ],
      tcm: [
        { t: "sub", text: { de: "Wind-Hitze", en: "Wind-Heat" } },
        { t: "p", text: {
          de: "Akute Heiserkeit mit Halsschmerz und leichtem Fieber: Wind-Hitze lösen, die Lunge klären und die Stimme wiederherstellen.",
          en: "Acute hoarseness with sore throat and mild fever: release Wind-Heat, clear the Lung and restore the voice." } },
        { t: "sub", text: { de: "Wind-Kälte", en: "Wind-Cold" } },
        { t: "p", text: {
          de: "Heiserkeit mit Frösteln und klarem Sekret: Wind-Kälte lösen und das Lungen-Qi bewegen.",
          en: "Hoarseness with chills and clear secretions: release Wind-Cold and move Lung Qi." } },
        { t: "sub", text: { de: "Lungen-Yin-Mangel", en: "Lung Yin deficiency" } },
        { t: "p", text: {
          de: "Bei anhaltender Heiserkeit mit trockenem Hals: Lungen-Yin nähren und den Hals befeuchten.",
          en: "For persistent hoarseness with a dry throat: nourish Lung Yin and moisten the throat." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Pathogenese", en: "Pathogenesis" } },
        { t: "p", text: {
          de: "Stimmstörungen werden traditionell vor allem Vata (Udana Vayu) zugeordnet, mit Beteiligung von Pitta (Entzündung) und Kapha (Schleim).",
          en: "Voice disturbances are traditionally attributed mainly to Vata (Udana Vayu), with involvement of Pitta (inflammation) and Kapha (mucus)." } },
        { t: "sub", text: { de: "Traditionelle Ansätze & Ernährung", en: "Traditional approaches & nutrition" } },
        { t: "p", text: {
          de: "Süßholz (Yashtimadhu) und Tulsi als warmer Aufguss sowie warmes Wasser halten den Hals feucht. Bevorzugt werden warme, weiche Speisen; sehr kalte, scharfe, saure oder trockene Speisen werden gemieden.",
          en: "Licorice (Yashtimadhu) and tulsi as a warm infusion, plus warm water, keep the throat moist. Warm, soft foods are preferred; very cold, spicy, acidic or dry foods are avoided." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Sanfte Zwerchfellatmung ohne Forcieren der Stimme; bei wiederkehrenden Problemen ist eine Stimmtherapie sinnvoll. TCM-Akupressur an Lungen- und halsbezogenen Punkten kann nach fachlicher Einschätzung ergänzt werden.",
          en: "Gentle diaphragmatic breathing without forcing the voice; voice therapy helps in recurrent problems. TCM acupressure at Lung- and throat-related points may be added per professional assessment." } },
        { t: "p", text: {
          de: "Forcierte Pranayama, langes Singen und anstrengende Stimmübungen sind in der akuten Phase zu vermeiden.",
          en: "Forceful pranayama, prolonged singing and strenuous voice exercises should be avoided in the acute phase." } },
      ],
    },
  },

  {
    slug: "acute-pharyngitis",
    icd10: "J02.9",
    illustration: "generic",
    title: { de: "Akute Pharyngitis", en: "Acute Pharyngitis" },
    summary: {
      de: "Entzündung der Rachenschleimhaut mit Halsschmerzen – meist viral.",
      en: "Inflammation of the pharyngeal mucosa with a sore throat – usually viral.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die akute Pharyngitis ist eine Entzündung der Rachenschleimhaut mit Halsschmerzen, Schluckbeschwerden und Rötung. Meist sind Viren die Ursache; eine bakterielle Infektion – insbesondere durch A-Streptokokken – ist die wichtigste Differenzialdiagnose.",
          en: "Acute pharyngitis is an inflammation of the pharyngeal mucosa with sore throat, painful swallowing and redness. Most cases are viral; a bacterial infection – especially group A streptococcus – is the key differential diagnosis." } },
      ],
      medical: [
        { t: "sub", text: { de: "Symptomatische & lokale Behandlung", en: "Symptomatic & local treatment" } },
        { t: "p", text: {
          de: "Ausreichend trinken und Ruhe; Paracetamol oder Ibuprofen gegen Schmerzen und Fieber. Lutschtabletten, warme Getränke, Salzwasser-Gurgeln oder geeignete Rachenpräparate lindern lokal.",
          en: "Adequate fluids and rest; paracetamol or ibuprofen for pain and fever. Lozenges, warm drinks, saline gargles or suitable throat preparations provide local relief." } },
        { t: "img", src: "diseases/acute-pharyngitis/medical.jpg", alt: { de: "Halsuntersuchung", en: "Throat examination" } },
        { t: "sub", text: { de: "Streptokokken & Antibiotika", en: "Streptococcus & antibiotics" } },
        { t: "p", text: {
          de: "Bei Verdacht auf Streptokokken hilft die klinische Beurteilung, ggf. mit Schnelltest. Antibiotika sind bei viraler Pharyngitis nicht angezeigt und bleiben bestätigten oder stark vermuteten Streptokokken-Infektionen vorbehalten.",
          en: "If streptococcus is suspected, clinical assessment and, where indicated, a rapid test help. Antibiotics are not indicated for viral pharyngitis and are reserved for confirmed or strongly suspected streptococcal infection." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Phytotherapie", en: "Phytotherapy" } },
        { t: "ul", items: {
          de: ["Salbei als Gurgellösung bei entzündlichen Halsbeschwerden.","Eibischwurzel und Isländisch Moos als reizlindernde Schleimstoffe.","Honig zur Linderung von Halskratzen und begleitendem Husten."],
          en: ["Sage as a gargle for inflammatory throat symptoms.","Marshmallow root and Iceland moss as soothing demulcents.","Honey to ease throat irritation and any accompanying cough."] } },
        { t: "sub", text: { de: "Physikalische Maßnahmen", en: "Physical measures" } },
        { t: "p", text: {
          de: "Warme Getränke, ausreichend Flüssigkeit, Salzwasser-Gurgeln und angenehme Raumluftfeuchte lindern die Beschwerden.",
          en: "Warm drinks, adequate fluids, saline gargling and comfortable indoor humidity relieve symptoms." } },
        { t: "img", src: "diseases/acute-pharyngitis/naturopathic.jpg", alt: { de: "Kräuter für den Hals", en: "Herbs for the throat" } },
      ],
      tcm: [
        { t: "sub", text: { de: "Wind-Hitze", en: "Wind-Heat" } },
        { t: "p", text: {
          de: "Roter, schmerzender Hals mit Fieber und Durst: im frühen Stadium z. B. Yin Qiao San.",
          en: "Red, painful throat with fever and thirst: e.g. Yin Qiao San in the early stage." } },
        { t: "sub", text: { de: "Toxische Hitze im Hals", en: "Toxic Heat in the throat" } },
        { t: "p", text: {
          de: "Starke Rötung und Schwellung, ausgeprägte Schmerzen und Fieber: Hitze klären und Toxine lösen; schwere Verläufe ärztlich abklären.",
          en: "Marked redness and swelling, severe pain and fever: clear Heat and resolve toxicity; assess severe cases medically." } },
        { t: "sub", text: { de: "Yin-Mangel mit Trockenheit", en: "Yin deficiency with dryness" } },
        { t: "p", text: {
          de: "Wiederkehrend trockener, gereizter Hals: Yin nähren und den Hals befeuchten.",
          en: "Recurrent dry, irritated throat: nourish Yin and moisten the throat." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Pathogenese", en: "Pathogenesis" } },
        { t: "p", text: {
          de: "Die Rachenentzündung wird traditionell mit erhöhtem Kapha und Pitta in Verbindung gebracht (Schleim und Schwellung durch Kapha, Entzündung und Brennen durch Pitta).",
          en: "Throat inflammation is traditionally linked to raised Kapha and Pitta (mucus and swelling from Kapha, inflammation and burning from Pitta)." } },
        { t: "sub", text: { de: "Traditionelle Ansätze & Ernährung", en: "Traditional approaches & nutrition" } },
        { t: "p", text: {
          de: "Süßholz (Yashtimadhu), Tulsi-Aufguss und Kurkuma sowie warmes Salzwasser-Gurgeln. Bevorzugt werden warme, weiche, reizarme Speisen; sehr scharfe, saure oder heiße Speisen werden gemieden.",
          en: "Licorice (Yashtimadhu), tulsi infusion and turmeric, plus warm salt-water gargling. Warm, soft, non-irritating foods are preferred; very spicy, acidic or hot foods are avoided." } },
      ],
      physio: [
        { t: "p", text: {
          de: "TCM-Akupressur an Punkten wie LU7, LI4 und LU11 kann nach fachlicher Einschätzung ergänzt werden; sanfte äußere Halsauflagen und beruhigendes Gurgeln wirken unterstützend.",
          en: "TCM acupressure at points such as LU7, LI4 and LU11 may be added per professional assessment; gentle external neck applications and soothing gargles provide support." } },
        { t: "p", text: {
          de: "Forcierte Atemübungen sind bei ausgeprägter Halsentzündung oder Fieber zu meiden.",
          en: "Forceful breathing exercises should be avoided with marked throat inflammation or fever." } },
      ],
    },
  },

  {
    slug: "acute-sinusitis",
    icd10: "J01.9",
    illustration: "sinus",
    title: { de: "Akute Sinusitis", en: "Acute Sinusitis" },
    summary: {
      de: "Entzündung der Nasennebenhöhlen, meist nach einem viralen Infekt.",
      en: "Inflammation of the paranasal sinuses, usually after a viral infection.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die akute Sinusitis (Rhinosinusitis) ist eine Entzündung von Nasenhaupt- und Nebenhöhlen, meist während oder nach einem viralen Atemwegsinfekt. Typisch sind Nasenverstopfung, Sekretfluss, Druck oder Schmerz im Gesicht, eingeschränkter Geruchssinn, Kopfschmerz und manchmal Fieber. Bakterielle Verläufe sind deutlich seltener.",
          en: "Acute sinusitis (rhinosinusitis) is an inflammation of the nasal cavity and paranasal sinuses, usually during or after a viral respiratory infection. Typical signs are nasal obstruction, discharge, facial pressure or pain, reduced smell, headache and sometimes fever. Bacterial cases are considerably rarer." } },
        { t: "img", src: "diseases/acute-sinusitis/definition.jpg", alt: { de: "Nasennebenhöhlen", en: "Paranasal sinuses" } },
      ],
      medical: [
        { t: "sub", text: { de: "Symptomatische & nasale Behandlung", en: "Symptomatic & nasal treatment" } },
        { t: "p", text: {
          de: "Paracetamol oder Ibuprofen bei Gesichts- und Kopfschmerz sowie Fieber; ausreichend trinken. Nasenspülungen mit Kochsalz lösen Sekret, intranasale Kortikosteroide dämpfen die Entzündung – besonders bei längerem Verlauf oder Allergie. Abschwellende Nasensprays (z. B. Xylometazolin) nur kurzzeitig verwenden.",
          en: "Paracetamol or ibuprofen for facial and head pain and fever; keep well hydrated. Saline nasal irrigation clears secretions, intranasal corticosteroids reduce inflammation – especially in prolonged cases or allergy. Use decongestant nasal sprays (e.g. xylometazoline) only short-term." } },
        { t: "sub", text: { de: "Antibiotika", en: "Antibiotics" } },
        { t: "p", text: {
          de: "Bei unkomplizierter viraler Sinusitis sind Antibiotika nicht nötig. Sie werden nur bei klinischem Verdacht auf eine bakterielle Sinusitis oder bei Komplikationen erwogen.",
          en: "Antibiotics are not needed for uncomplicated viral sinusitis. They are considered only when bacterial sinusitis is clinically suspected or complications arise." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Phytotherapie", en: "Phytotherapy" } },
        { t: "ul", items: {
          de: ["Standardisiertes Cineol oder Myrtol zur Unterstützung von Sekretabtransport und Belüftung.","Kombinationen aus Enzianwurzel, Primelblüte, Sauerampfer, Holunderblüte und Eisenkraut bei Rhinosinusitis."],
          en: ["Standardized cineole or myrtol to support secretion clearance and sinus ventilation.","Combinations of gentian root, primrose flower, sorrel, elderflower and verbena for rhinosinusitis."] } },
        { t: "sub", text: { de: "Physikalische Maßnahmen", en: "Physical measures" } },
        { t: "p", text: {
          de: "Regelmäßige Nasenspülung mit Salzlösung, ausreichend trinken und warme Gesichtsauflagen lindern den Druck. Dampf vorsichtig anwenden (Verbrühungsgefahr, besonders bei Kindern).",
          en: "Regular saline nasal irrigation, adequate fluids and warm facial applications ease pressure. Use steam carefully (scald risk, especially in children)." } },
        { t: "img", src: "diseases/acute-sinusitis/naturopathic.jpg", alt: { de: "Natürliche Nasenpflege", en: "Natural sinus care" } },
      ],
      tcm: [
        { t: "sub", text: { de: "Wind-Hitze", en: "Wind-Heat" } },
        { t: "p", text: {
          de: "Gelbes Sekret, Gesichtsdruck und Fieber: Wind-Hitze lösen und die Nase öffnen.",
          en: "Yellow discharge, facial pressure and fever: release Wind-Heat and open the nose." } },
        { t: "sub", text: { de: "Wind-Kälte", en: "Wind-Cold" } },
        { t: "p", text: {
          de: "Klares Sekret, starke Verstopfung und Frösteln: die Oberfläche lösen und die Nase befreien.",
          en: "Clear discharge, marked obstruction and chills: release the exterior and clear the nose." } },
        { t: "sub", text: { de: "Feuchte-Hitze / Schleim", en: "Damp-Heat / Phlegm" } },
        { t: "p", text: {
          de: "Zähes, gelbes Sekret mit Kopfschwere: z. B. Cang Er Zi San, individuell angepasst.",
          en: "Thick yellow discharge with a heavy head: e.g. Cang Er Zi San, individually adapted." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Pathogenese", en: "Pathogenesis" } },
        { t: "p", text: {
          de: "Die Sinuskongestion wird traditionell als erhöhtes Kapha in den oberen Atemwegskanälen verstanden, teils mit Vata-Störung.",
          en: "Sinus congestion is traditionally understood as raised Kapha in the upper airway channels, sometimes with a Vata disturbance." } },
        { t: "sub", text: { de: "Traditionelle Ansätze & Ernährung", en: "Traditional approaches & nutrition" } },
        { t: "p", text: {
          de: "Ingwer und Tulsi in warmen Zubereitungen sowie Kurkuma; Kapha-reduzierende, warme und leichte Kost. Nasya (Nasentherapie) nur individuell durch fachkundige Behandler, nicht bei schwerer akuter Infektion.",
          en: "Ginger and tulsi in warm preparations, plus turmeric; a Kapha-reducing, warm and light diet. Nasya (nasal therapy) only individually by qualified practitioners, not during severe acute infection." } },
      ],
      physio: [
        { t: "p", text: {
          de: "TCM-Akupressur/-Akupunktur an Punkten wie LI20, Bitong, LI4 und Yintang sowie sanftes Gesichts-Tuina können den Bereich entlasten.",
          en: "TCM acupressure/acupuncture at points such as LI20, Bitong, LI4 and Yintang, plus gentle facial Tuina, can relieve the area." } },
        { t: "p", text: {
          de: "Sanfte Nasenatmung, sobald die Nase durchgängig ist; starke Atemübungen bei akuter Infektion meiden.",
          en: "Gentle nasal breathing once the nose is patent; avoid strong breathing exercises during acute infection." } },
      ],
    },
  },

  {
    slug: "acute-tonsillitis",
    icd10: "J03.9",
    illustration: "generic",
    title: { de: "Akute Tonsillitis", en: "Acute Tonsillitis" },
    summary: {
      de: "Entzündung der Gaumenmandeln mit starken Halsschmerzen – viral oder bakteriell.",
      en: "Inflammation of the palatine tonsils with severe sore throat – viral or bacterial.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die akute Tonsillitis ist eine Entzündung der Gaumenmandeln, meist viral, manchmal bakteriell (vor allem A-Streptokokken). Typisch sind starke Halsschmerzen, Schluckbeschwerden, gerötete geschwollene Mandeln, Fieber, druckschmerzhafte Halslymphknoten und teils Belag auf den Mandeln.",
          en: "Acute tonsillitis is an inflammation of the palatine tonsils, usually viral and sometimes bacterial (especially group A streptococci). Typical signs are severe sore throat, painful swallowing, enlarged reddened tonsils, fever, tender neck lymph nodes and sometimes tonsillar exudate." } },
      ],
      medical: [
        { t: "sub", text: { de: "Symptomatische & lokale Behandlung", en: "Symptomatic & local treatment" } },
        { t: "p", text: {
          de: "Ruhe, ausreichend Flüssigkeit und Paracetamol oder Ibuprofen gegen Schmerzen und Fieber; lokal Lutschtabletten, Salzwasser-Gurgeln und geeignete Rachenpräparate.",
          en: "Rest, adequate fluids and paracetamol or ibuprofen for pain and fever; locally lozenges, saline gargles and suitable throat preparations." } },
        { t: "img", src: "diseases/acute-tonsillitis/medical.jpg", alt: { de: "Ärztliche Untersuchung des Halses", en: "Medical throat examination" } },
        { t: "sub", text: { de: "Bakterielle Abklärung & Antibiotika", en: "Bacterial assessment & antibiotics" } },
        { t: "p", text: {
          de: "Bei Verdacht auf Streptokokken klinische Beurteilung und ggf. Test. Antibiotika bleiben der bakteriellen Tonsillitis vorbehalten. Starke einseitige Schwellung, Schluck- oder Atemnot bzw. Speichelfluss erfordern eine dringende Abklärung (Abszess?).",
          en: "If streptococcus is suspected, clinical assessment and testing where indicated. Antibiotics are reserved for bacterial tonsillitis. Marked one-sided swelling, difficulty swallowing or breathing, or drooling require urgent assessment (abscess?)." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Phytotherapie", en: "Phytotherapy" } },
        { t: "ul", items: {
          de: ["Salbei zum Gurgeln bei entzündlichen Halsbeschwerden.","Eibischwurzel und Isländisch Moos als reizlindernde Schleimstoffe.","Honig zur vorübergehenden Beruhigung des Halses."],
          en: ["Sage as a gargle for inflammatory throat symptoms.","Marshmallow root and Iceland moss as soothing demulcents.","Honey for temporary soothing of the throat."] } },
        { t: "sub", text: { de: "Physikalische Maßnahmen", en: "Physical measures" } },
        { t: "p", text: {
          de: "Warme oder angenehm kühle Getränke nach Wunsch und Salzwasser-Gurgeln. Bei bestätigter bakterieller Erkrankung ersetzen sie eine notwendige Antibiotikatherapie nicht.",
          en: "Warm or comfortably cool drinks as preferred, and saline gargling. In confirmed bacterial disease they do not replace necessary antibiotic therapy." } },
        { t: "img", src: "diseases/acute-tonsillitis/naturopathic.jpg", alt: { de: "Natürliche Halsberuhigung", en: "Natural throat soothing" } },
      ],
      tcm: [
        { t: "sub", text: { de: "Wind-Hitze", en: "Wind-Heat" } },
        { t: "p", text: {
          de: "Früher Halsschmerz mit Fieber und geröteten Mandeln: z. B. Yin Qiao San je nach Muster.",
          en: "Early sore throat with fever and reddened tonsils: e.g. Yin Qiao San depending on the pattern." } },
        { t: "sub", text: { de: "Exzess-Hitze / Feuer-Toxin", en: "Excess Heat / Fire-Toxin" } },
        { t: "p", text: {
          de: "Starke Schmerzen, geschwollene Mandeln und hohes Fieber: Hitze klären und Toxine lösen. Schwere bakterielle Infektionen oder ein Abszess sind zuerst schulmedizinisch abzuklären.",
          en: "Severe pain, swollen tonsils and high fever: clear Heat and resolve toxicity. Severe bacterial infection or abscess must first be assessed conventionally." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Pathogenese", en: "Pathogenesis" } },
        { t: "p", text: {
          de: "Die Mandelentzündung wird traditionell mit erhöhtem Kapha und Pitta verbunden (Schwellung und Schleim durch Kapha, Hitze und Reizung durch Pitta).",
          en: "Tonsillitis is traditionally linked to raised Kapha and Pitta (swelling and mucus from Kapha, heat and irritation from Pitta)." } },
        { t: "sub", text: { de: "Traditionelle Ansätze & Ernährung", en: "Traditional approaches & nutrition" } },
        { t: "p", text: {
          de: "Süßholz (Yashtimadhu), Kurkuma und Tulsi sowie warmes Salzwasser-Gurgeln. Bevorzugt werden weiche, gut schluckbare Speisen; scharfe, saure oder sehr trockene Speisen werden gemieden.",
          en: "Licorice (Yashtimadhu), turmeric and tulsi, plus warm salt-water gargling. Soft, easy-to-swallow foods are preferred; spicy, acidic or very dry foods are avoided." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Bei Fieber und akuter Entzündung nur sanfte Anwendungen. TCM-Akupressur an halsbezogenen Punkten wie LI4, LU7 und LU11 kann nach Muster einbezogen werden.",
          en: "During fever and acute inflammation keep applications gentle. TCM acupressure at throat-related points such as LI4, LU7 and LU11 may be included per pattern." } },
        { t: "p", text: {
          de: "Kräftige Massage und starke Reinigungsverfahren sind während der akuten Erkrankung zu vermeiden.",
          en: "Vigorous massage and strong cleansing procedures should be avoided during acute illness." } },
      ],
    },
  },

  {
    slug: "acute-upper-respiratory-infection-unspecified",
    icd10: "J06.9",
    illustration: "sinus",
    title: { de: "Akuter Infekt der oberen Atemwege", en: "Acute Upper Respiratory Infection" },
    summary: {
      de: "Unspezifischer viraler Infekt von Nase, Rachen oder Kehlkopf.",
      en: "An unspecified viral infection of the nose, throat or larynx.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Ein akuter Infekt der oberen Atemwege betrifft Nase, Rachen, Nebenhöhlen oder Kehlkopf, wenn keine genauere Lokalisation feststeht. Meist viral, mit Kombinationen aus Nasenverstopfung, Schnupfen, Halsschmerz, Husten, Niesen, Kopfschmerz, leichtem Fieber und Müdigkeit.",
          en: "An acute upper respiratory infection affects the nose, throat, sinuses or larynx when no more specific site is established. Usually viral, with combinations of nasal congestion, runny nose, sore throat, cough, sneezing, headache, mild fever and fatigue." } },
        { t: "img", src: "diseases/acute-upper-respiratory-infection-unspecified/definition.jpg", alt: { de: "Erkältungsbeschwerden", en: "Cold-like symptoms" } },
      ],
      medical: [
        { t: "sub", text: { de: "Allgemeine Behandlung", en: "General treatment" } },
        { t: "p", text: {
          de: "Ruhe und ausreichend trinken; meist genügt eine symptomatische Behandlung. Paracetamol oder Ibuprofen bei Fieber, Kopf- und Halsschmerz. Kochsalz-Nasenspray oder -spülung bei verstopfter Nase, kurzfristig abschwellende Sprays bei starker Verstopfung.",
          en: "Rest and adequate fluids; symptomatic treatment usually suffices. Paracetamol or ibuprofen for fever, head and throat pain. Saline nasal spray or irrigation for congestion, short-term decongestant sprays for marked obstruction." } },
        { t: "sub", text: { de: "Antibiotika", en: "Antibiotics" } },
        { t: "p", text: {
          de: "Beim unkomplizierten viralen Infekt sind Antibiotika nicht angezeigt.",
          en: "Antibiotics are not indicated for an uncomplicated viral infection." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Phytotherapie", en: "Phytotherapy" } },
        { t: "ul", items: {
          de: ["Kapland-Pelargonie zur symptomatischen Unterstützung.","Thymian oder Efeu bei Husten, Salbei bei Halsreizung.","Honig lindert Husten und Halskratzen."],
          en: ["Pelargonium sidoides for symptomatic support.","Thyme or ivy for cough, sage for throat irritation.","Honey eases cough and throat irritation."] } },
        { t: "sub", text: { de: "Physikalische Maßnahmen", en: "Physical measures" } },
        { t: "p", text: {
          de: "Nasenspülung, warme Getränke, angenehme Luftfeuchte und Ruhe unterstützen die Genesung.",
          en: "Nasal irrigation, warm drinks, comfortable humidity and rest support recovery." } },
      ],
      tcm: [
        { t: "sub", text: { de: "Wind-Kälte", en: "Wind-Cold" } },
        { t: "p", text: {
          de: "Frösteln, klares Sekret und Gliederschmerzen: die Oberfläche lösen und Wind-Kälte zerstreuen.",
          en: "Chills, clear discharge and body aches: release the exterior and disperse Wind-Cold." } },
        { t: "sub", text: { de: "Wind-Hitze", en: "Wind-Heat" } },
        { t: "p", text: {
          de: "Fieber, Halsschmerz und gelbliches Sekret: z. B. Yin Qiao San je nach Muster.",
          en: "Fever, sore throat and yellowish discharge: e.g. Yin Qiao San depending on the pattern." } },
        { t: "sub", text: { de: "Feuchtigkeit / Schleim", en: "Dampness / Phlegm" } },
        { t: "p", text: {
          de: "Schweregefühl, viel Schleim und Müdigkeit: Schleim umwandeln und Feuchtigkeit lösen.",
          en: "Heaviness, marked mucus and fatigue: transform Phlegm and resolve Dampness." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Pathogenese", en: "Pathogenesis" } },
        { t: "p", text: {
          de: "Traditionell meist als Kapha-Ansammlung verstanden, teils mit Vata-Störung und geschwächtem Agni (Ama).",
          en: "Traditionally seen mostly as Kapha accumulation, sometimes with Vata disturbance and weakened Agni (Ama)." } },
        { t: "sub", text: { de: "Traditionelle Ansätze & Ernährung", en: "Traditional approaches & nutrition" } },
        { t: "p", text: {
          de: "Tulsi, Ingwer (Shunti), Pippali und Sitopaladi Churna je nach Beschwerdebild; warme, leichte, gut verdauliche Mahlzeiten und warme Flüssigkeiten.",
          en: "Tulsi, ginger (Shunti), Pippali and Sitopaladi Churna depending on the picture; warm, light, easily digestible meals and warm fluids." } },
        { t: "img", src: "diseases/acute-upper-respiratory-infection-unspecified/ayurved.jpg", alt: { de: "Ayurvedische Atemwegskräuter", en: "Ayurvedic respiratory herbs" } },
      ],
      physio: [
        { t: "p", text: {
          de: "Sanfte Akupressur an LI4, LU7, LI20 und Yintang je nach Beschwerden; sanfte Wärmeanwendungen und passende Nasenpflege je nach Zustand.",
          en: "Gentle acupressure at LI4, LU7, LI20 and Yintang depending on symptoms; gentle warming applications and appropriate nasal care per condition." } },
        { t: "p", text: {
          de: "Leichte Atemübungen nach Verträglichkeit; forcierte Übungen bei Fieber meiden.",
          en: "Light breathing exercises as tolerated; avoid forceful exercises during fever." } },
      ],
    },
  },

  {
    slug: "bronchitis-unspecified",
    icd10: "J40",
    illustration: "lungs",
    title: { de: "Bronchitis, nicht näher bezeichnet", en: "Bronchitis, Unspecified" },
    summary: {
      de: "Entzündung der Bronchien mit Husten und Schleim, ohne genaue Einordnung.",
      en: "Inflammation of the bronchi with cough and mucus, without precise classification.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Als Bronchitis wird eine Entzündung der Bronchien bezeichnet, vor allem mit Husten, Schleimbildung, Brustbeschwerden und teils Giemen oder Atemnot. Die Kodierung J40 wird verwendet, wenn die Bronchitis nicht eindeutig als akut oder chronisch eingeordnet ist. Ursachen sind u. a. Infekte, Rauchen oder Reizstoffe.",
          en: "Bronchitis is an inflammation of the bronchi, mainly with cough, mucus, chest discomfort and sometimes wheeze or breathlessness. The code J40 is used when bronchitis is not clearly classified as acute or chronic. Causes include infections, smoking or irritants." } },
        { t: "img", src: "diseases/bronchitis-unspecified/definition.jpg", alt: { de: "Bronchien und Atemwege", en: "Bronchi and airways" } },
      ],
      medical: [
        { t: "sub", text: { de: "Allgemeine & symptomatische Behandlung", en: "General & symptomatic treatment" } },
        { t: "p", text: {
          de: "Ausreichend trinken, Ruhe sowie das Meiden von Rauch und Reizstoffen. Bei Reizhusten kurzfristig ein Hustenstiller, bei zähem Sekret Schleimlöser; Inhalation mit isotoner Kochsalzlösung befeuchtet die Atemwege. Ein Bronchodilatator (z. B. Salbutamol) nur bei relevantem Bronchospasmus oder Giemen.",
          en: "Adequate fluids, rest and avoiding smoke and irritants. A short course of a cough suppressant for an irritating cough, a mucolytic for thick secretions; inhaling isotonic saline moistens the airways. A bronchodilator (e.g. salbutamol) only for significant bronchospasm or wheeze." } },
        { t: "sub", text: { de: "Antibiotika", en: "Antibiotics" } },
        { t: "p", text: {
          de: "Antibiotika sind nur bei Hinweisen auf eine bakterielle Infektion angezeigt.",
          en: "Antibiotics are indicated only when there is evidence of a bacterial infection." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Phytotherapie", en: "Phytotherapy" } },
        { t: "ul", items: {
          de: ["Thymian bei produktivem Husten und Bronchialsekret.","Efeublätter-Extrakt zur Unterstützung des Auswurfs.","Primelwurzel in schleimlösenden Kombinationen.","Standardisiertes Cineol oder Myrtol zur Schleimlösung."],
          en: ["Thyme for productive cough and bronchial secretions.","Ivy-leaf extract to support expectoration.","Primrose root in expectorant combinations.","Standardized cineole or myrtol to loosen mucus."] } },
        { t: "sub", text: { de: "Physikalische Maßnahmen", en: "Physical measures" } },
        { t: "p", text: {
          de: "Warme Getränke, ausreichend Flüssigkeit, feuchte Luft und sanfte Brustwärme lösen das Sekret. Dampf- oder Ölinhalation bei Asthma oder Überempfindlichkeit nur vorsichtig.",
          en: "Warm drinks, adequate fluids, humid air and gentle chest warmth loosen secretions. Use steam or oil inhalation cautiously in asthma or hyperreactivity." } },
      ],
      tcm: [
        { t: "sub", text: { de: "Wind-Kälte in der Lunge", en: "Wind-Cold in the Lung" } },
        { t: "p", text: {
          de: "Klarer oder weißer Auswurf mit Frösteln: Wind-Kälte lösen und das Lungen-Qi regulieren.",
          en: "Clear or white sputum with chills: release Wind-Cold and regulate Lung Qi." } },
        { t: "sub", text: { de: "Wind-Hitze in der Lunge", en: "Wind-Heat in the Lung" } },
        { t: "p", text: {
          de: "Gelber Auswurf mit Fieber und Halsschmerz: z. B. Sang Ju Yin je nach Diagnose.",
          en: "Yellow sputum with fever and sore throat: e.g. Sang Ju Yin per diagnosis." } },
        { t: "sub", text: { de: "Schleim-Feuchtigkeit", en: "Phlegm-Dampness" } },
        { t: "p", text: {
          de: "Produktiver Husten mit viel Schleim und Schweregefühl: Schleim umwandeln und Feuchtigkeit lösen.",
          en: "Productive cough with much mucus and heaviness: transform Phlegm and resolve Dampness." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Pathogenese", en: "Pathogenesis" } },
        { t: "p", text: {
          de: "Die bronchiale Kongestion wird traditionell vor allem mit erhöhtem Kapha und einer Störung von Vata/Prana Vayu verbunden.",
          en: "Bronchial congestion is traditionally linked mainly to raised Kapha and a disturbance of Vata/Prana Vayu." } },
        { t: "sub", text: { de: "Traditionelle Ansätze & Ernährung", en: "Traditional approaches & nutrition" } },
        { t: "p", text: {
          de: "Sitopaladi Churna, Vasaka, Tulsi sowie Ingwer und Pippali; warme, leichte Kost und warme Flüssigkeiten, schwere und sehr kalte Speisen reduzieren.",
          en: "Sitopaladi Churna, Vasaka, tulsi, plus ginger and Pippali; warm, light food and warm fluids, reducing heavy and very cold foods." } },
        { t: "img", src: "diseases/bronchitis-unspecified/ayurved.jpg", alt: { de: "Ayurvedische Atemwegskräuter", en: "Ayurvedic respiratory herbs" } },
      ],
      physio: [
        { t: "p", text: {
          de: "TCM-Akupressur/-Akupunktur an LU7, LU5, ST40 und BL13 sowie Schröpfen und sanftes Tuina unterstützen die Atmung.",
          en: "TCM acupressure/acupuncture at LU7, LU5, ST40 and BL13, plus cupping and gentle Tuina, support breathing." } },
        { t: "img", src: "diseases/bronchitis-unspecified/physio.jpg", alt: { de: "Atemtherapie", en: "Breathing therapy" } },
        { t: "p", text: {
          de: "Sanfte Zwerchfellatmung nach Abklingen der akuten Symptome; kräftige Massage bei Fieber vermeiden.",
          en: "Gentle diaphragmatic breathing once acute symptoms ease; avoid vigorous massage during fever." } },
      ],
    },
  },

  {
    slug: "chronic-sinusitis",
    icd10: "J32.9",
    illustration: "sinus",
    title: { de: "Chronische Sinusitis", en: "Chronic Sinusitis" },
    summary: {
      de: "Anhaltende Nebenhöhlenentzündung über zwölf Wochen oder länger.",
      en: "Persistent sinus inflammation lasting twelve weeks or longer.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die chronische Sinusitis ist eine anhaltende Entzündung von Nase und Nebenhöhlen mit Beschwerden über zwölf Wochen oder länger. Typisch sind Nasenverstopfung, anhaltender Sekretfluss, Gesichtsdruck, eingeschränkter Geruchssinn und wiederkehrende Schübe. Allergien, Polypen, anatomische Enge und Asthma können beitragen.",
          en: "Chronic sinusitis is a persistent inflammation of the nose and sinuses with symptoms lasting twelve weeks or longer. Typical signs are nasal obstruction, persistent discharge, facial pressure, reduced smell and recurrent flare-ups. Allergies, polyps, anatomical narrowing and asthma may contribute." } },
      ],
      medical: [
        { t: "sub", text: { de: "Nasale Therapie & Ursachen", en: "Nasal therapy & causes" } },
        { t: "p", text: {
          de: "Regelmäßige Nasenspülung mit Kochsalz und intranasale Kortikosteroide dämpfen die Entzündung, besonders bei Polypen. Beitragende Faktoren wie allergische Rhinitis, Asthma, Rauchen oder Zahnerkrankungen werden mitbehandelt.",
          en: "Regular saline nasal irrigation and intranasal corticosteroids reduce inflammation, especially with polyps. Contributing factors such as allergic rhinitis, asthma, smoking or dental disease are addressed." } },
        { t: "sub", text: { de: "Antibiotika & Fachbehandlung", en: "Antibiotics & specialist care" } },
        { t: "p", text: {
          de: "Antibiotika sind nicht routinemäßig nötig, nur bei akutem bakteriellem Schub. Bei anhaltend schwerem Verlauf sind HNO-Abklärung, Endoskopie/Bildgebung und ggf. eine endoskopische Nebenhöhlen-Operation zu erwägen.",
          en: "Antibiotics are not routinely needed, only for an acute bacterial exacerbation. In persistent severe disease, ENT assessment, endoscopy/imaging and possibly endoscopic sinus surgery are considered." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Phytotherapie", en: "Phytotherapy" } },
        { t: "ul", items: {
          de: ["Standardisiertes Cineol oder Myrtol zur Unterstützung des Sekretabtransports.","Kombinationen mit Enzianwurzel, Primelblüte, Sauerampfer, Holunderblüte und Eisenkraut bei Rhinosinusitis."],
          en: ["Standardized cineole or myrtol to support secretion clearance.","Combinations with gentian root, primrose flower, sorrel, elderflower and verbena for rhinosinusitis."] } },
        { t: "sub", text: { de: "Physikalische Maßnahmen", en: "Physical measures" } },
        { t: "p", text: {
          de: "Regelmäßige Salz-Nasenspülung entfernt zähes Sekret und Allergene; ausreichend trinken und warme Gesichtsauflagen lindern den Druck.",
          en: "Regular saline nasal irrigation removes thick secretions and allergens; adequate fluids and warm facial applications ease pressure." } },
        { t: "img", src: "diseases/chronic-sinusitis/naturopathic.jpg", alt: { de: "Natürliche Nasenpflege", en: "Natural sinus care" } },
      ],
      tcm: [
        { t: "sub", text: { de: "Schleim-Feuchtigkeit", en: "Phlegm-Dampness" } },
        { t: "p", text: {
          de: "Anhaltende Verstopfung mit zähem Sekret und Kopfschwere: Schleim umwandeln und Feuchtigkeit ableiten.",
          en: "Persistent obstruction with thick discharge and a heavy head: transform Phlegm and drain Dampness." } },
        { t: "sub", text: { de: "Feuchte-Hitze", en: "Damp-Heat" } },
        { t: "p", text: {
          de: "Dickes gelbes Sekret mit Druck und Geruch: Hitze klären und Feuchtigkeit lösen.",
          en: "Thick yellow discharge with pressure and odour: clear Heat and resolve Dampness." } },
        { t: "sub", text: { de: "Lungen-/Milz-Qi-Mangel", en: "Lung/Spleen Qi deficiency" } },
        { t: "p", text: {
          de: "Wiederkehrende Beschwerden mit Müdigkeit und Infektanfälligkeit: individuell; Cang Er Zi San wird traditionell bei Nasenverstopfung eingesetzt.",
          en: "Recurrent symptoms with fatigue and infection-proneness: individual; Cang Er Zi San is traditionally used for nasal obstruction." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Pathogenese", en: "Pathogenesis" } },
        { t: "p", text: {
          de: "Die chronische Kongestion wird traditionell als überschüssiges Kapha in den oberen Atemwegen verstanden, oft mit schwachem Agni und Ama.",
          en: "Chronic congestion is traditionally understood as excess Kapha in the upper airways, often with weak Agni and Ama." } },
        { t: "sub", text: { de: "Traditionelle Ansätze & Ernährung", en: "Traditional approaches & nutrition" } },
        { t: "p", text: {
          de: "Tulsi und Ingwer in warmen Zubereitungen, Kurkuma sowie Trikatu bei Kapha und schwacher Verdauung; warme, frisch zubereitete, leicht verdauliche Kost, sehr kalte und schleimbildende Speisen reduzieren.",
          en: "Tulsi and ginger in warm preparations, turmeric, and Trikatu for Kapha and weak digestion; warm, freshly prepared, easily digestible food, reducing very cold and mucus-forming foods." } },
      ],
      physio: [
        { t: "p", text: {
          de: "TCM-Akupressur/-Akupunktur an LI20, Bitong, Yintang, LI4 und ST36 sowie sanftes Gesichts-Tuina; Nasya nach individueller Einschätzung.",
          en: "TCM acupressure/acupuncture at LI20, Bitong, Yintang, LI4 and ST36, plus gentle facial Tuina; Nasya after individual assessment." } },
        { t: "p", text: {
          de: "Sanfte Nasen- und Zwerchfellatmung bei durchgängiger Nase.",
          en: "Gentle nasal and diaphragmatic breathing when the nose is patent." } },
      ],
    },
  },

  {
    slug: "common-cold",
    icd10: "J00",
    illustration: "sinus",
    title: { de: "Erkältung (grippaler Infekt)", en: "Common Cold" },
    summary: {
      de: "Harmlose Virusinfektion der oberen Atemwege, die meist in einer Woche abklingt.",
      en: "A harmless viral infection of the upper airways that usually clears within a week.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Erkältung (akute Nasopharyngitis) ist eine akute Virusinfektion vor allem von Nase, Nasenrachen und oberen Atemwegen. Typisch sind Nasenverstopfung, wässriges Sekret, Niesen, Halsschmerz, leichter Husten, Kopfschmerz und Müdigkeit. Fieber ist bei Erwachsenen meist gering; unkomplizierte Infekte heilen von selbst.",
          en: "The common cold (acute nasopharyngitis) is an acute viral infection mainly of the nose, nasopharynx and upper airways. Typical signs are nasal congestion, watery discharge, sneezing, sore throat, mild cough, headache and fatigue. Fever is usually mild in adults; uncomplicated infections resolve on their own." } },
        { t: "img", src: "diseases/common-cold/definition.jpg", alt: { de: "Erkältungssymptome", en: "Common cold symptoms" } },
      ],
      medical: [
        { t: "sub", text: { de: "Symptomatische Behandlung", en: "Symptomatic treatment" } },
        { t: "p", text: {
          de: "Ruhe, ausreichend trinken und Paracetamol oder Ibuprofen bei Kopf- und Halsschmerz sowie Fieber. Kochsalz-Nasenspray oder -spülung lindert Trockenheit; abschwellende Sprays (z. B. Xylometazolin) nur kurzzeitig. Lutschtabletten, warme Getränke und Honig helfen gegen Halsreiz und Husten.",
          en: "Rest, adequate fluids and paracetamol or ibuprofen for head and throat pain and fever. Saline nasal spray or irrigation eases dryness; decongestant sprays (e.g. xylometazoline) only short-term. Lozenges, warm drinks and honey help throat irritation and cough." } },
        { t: "sub", text: { de: "Antibiotika", en: "Antibiotics" } },
        { t: "p", text: {
          de: "Bei der unkomplizierten Erkältung spielen Antibiotika keine Rolle.",
          en: "Antibiotics have no role in an uncomplicated cold." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Phytotherapie", en: "Phytotherapy" } },
        { t: "ul", items: {
          de: ["Holunderblüte bei unkomplizierten Atemwegsinfekten.","Thymian bei begleitendem Husten.","Kapland-Pelargonie zur symptomatischen Unterstützung.","Honig beruhigt den gereizten Hals."],
          en: ["Elderflower for uncomplicated respiratory infections.","Thyme for an accompanying cough.","Pelargonium sidoides for symptomatic support.","Honey soothes an irritated throat."] } },
        { t: "sub", text: { de: "Physikalische Maßnahmen", en: "Physical measures" } },
        { t: "p", text: {
          de: "Nasenspülung, warme Getränke und angenehme Luftfeuchte lindern die Beschwerden.",
          en: "Nasal irrigation, warm drinks and comfortable humidity relieve symptoms." } },
        { t: "img", src: "diseases/common-cold/naturopathic.jpg", alt: { de: "Kräuter bei Erkältung", en: "Herbs for a cold" } },
      ],
      tcm: [
        { t: "sub", text: { de: "Wind-Kälte", en: "Wind-Cold" } },
        { t: "p", text: {
          de: "Frösteln überwiegt, klares Sekret und Gliederschmerzen: z. B. Gui Zhi Tang je nach Muster.",
          en: "Chills predominate, clear discharge and body aches: e.g. Gui Zhi Tang depending on the pattern." } },
        { t: "sub", text: { de: "Wind-Hitze", en: "Wind-Heat" } },
        { t: "p", text: {
          de: "Fieber, Halsschmerz und gelbes Sekret: z. B. Yin Qiao San im frühen Stadium. Die Behandlung erfolgt stets individuell nach dem Gesamtbild.",
          en: "Fever, sore throat and yellow discharge: e.g. Yin Qiao San in the early stage. Treatment is always individualized to the whole picture." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Pathogenese", en: "Pathogenesis" } },
        { t: "p", text: {
          de: "Traditionell als erhöhtes Kapha mit geschwächtem Agni und Ama verstanden, teils mit Vata-Störung.",
          en: "Traditionally understood as raised Kapha with weakened Agni and Ama, sometimes with Vata disturbance." } },
        { t: "sub", text: { de: "Traditionelle Ansätze & Ernährung", en: "Traditional approaches & nutrition" } },
        { t: "p", text: {
          de: "Tulsi-Aufguss, Ingwer (Shunti), Pippali und Trikatu bei Kapha und schwacher Verdauung; warme, leichte Mahlzeiten, Suppen und warme Flüssigkeiten.",
          en: "Tulsi infusion, ginger (Shunti), Pippali and Trikatu for Kapha and weak digestion; warm, light meals, soups and warm fluids." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Sanfte Akupressur an LI20, LI4 und LU7 durch geschulte Behandler; sanfte Wärme und passende Nasenpflege, starke Reinigungsverfahren in der akuten Phase meiden.",
          en: "Gentle acupressure at LI20, LI4 and LU7 by trained practitioners; gentle warmth and appropriate nasal care, avoiding strong cleansing during the acute phase." } },
        { t: "p", text: {
          de: "Sanfte Nasen- und Zwerchfellatmung nach Verträglichkeit; forcierte Übungen bei Fieber meiden.",
          en: "Gentle nasal and diaphragmatic breathing as tolerated; avoid forceful exercises during fever." } },
      ],
    },
  },

  {
    slug: "influenza",
    icd10: "J10.1",
    illustration: "generic",
    title: { de: "Grippe (Influenza)", en: "Influenza (Flu)" },
    summary: {
      de: "Akute Virusinfektion mit plötzlichem Fieber und ausgeprägtem Krankheitsgefühl.",
      en: "An acute viral infection with sudden fever and marked malaise.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Influenza ist eine akute Atemwegsinfektion durch Influenzaviren. Anders als die Erkältung beginnt sie oft plötzlich mit Fieber, Schüttelfrost, Kopf-, Muskel- und Gliederschmerzen, Reizhusten und Halsschmerz. Meist folgt eine folgenlose Ausheilung; bei älteren Menschen, Schwangeren, Kleinkindern und Vorerkrankten sind schwere Verläufe (z. B. Lungenentzündung) möglich.",
          en: "Influenza is an acute respiratory infection caused by influenza viruses. Unlike a cold it often starts abruptly with fever, chills, head, muscle and body aches, a dry cough and sore throat. Most people recover fully; severe courses (e.g. pneumonia) are possible in older adults, pregnant patients, young children and those with chronic illness." } },
        { t: "img", src: "diseases/influenza/definition.jpg", alt: { de: "Grippaler Infekt", en: "Influenza illness" } },
      ],
      medical: [
        { t: "sub", text: { de: "Symptomatische & antivirale Behandlung", en: "Symptomatic & antiviral treatment" } },
        { t: "p", text: {
          de: "Ruhe und ausreichend trinken; Paracetamol oder Ibuprofen bei Fieber und Schmerzen. Antivirale Mittel (z. B. Oseltamivir) kommen vor allem bei Risikopatienten oder schwerem Verlauf infrage und wirken am besten früh.",
          en: "Rest and adequate fluids; paracetamol or ibuprofen for fever and pain. Antivirals (e.g. oseltamivir) are used mainly for at-risk patients or severe disease and work best early." } },
        { t: "sub", text: { de: "Warnzeichen & Antibiotika", en: "Warning signs & antibiotics" } },
        { t: "p", text: {
          de: "Auf zunehmende Atemnot, Brustschmerz, Verwirrtheit, anhaltend hohes Fieber oder eine erneute Verschlechterung achten. Antibiotika helfen nur bei bakteriellen Komplikationen wie einer sekundären Lungenentzündung.",
          en: "Watch for increasing breathlessness, chest pain, confusion, persistent high fever or renewed deterioration. Antibiotics help only for bacterial complications such as secondary pneumonia." } },
      ],
      naturopathic: [
        { t: "sub", text: { de: "Ergänzende Maßnahmen", en: "Complementary measures" } },
        { t: "p", text: {
          de: "Im Vordergrund stehen Symptomlinderung und Erholung: ausreichend Flüssigkeit, Honig bei Husten und Halsreiz sowie warme Kräutertees und Brühen. Bei Risikopatienten darf die Naturheilkunde die antivirale Therapie nicht verzögern.",
          en: "The focus is symptom relief and recovery: adequate fluids, honey for cough and throat irritation, and warm herbal teas and broths. In at-risk patients, naturopathy must not delay antiviral therapy." } },
        { t: "img", src: "diseases/influenza/naturopathic.jpg", alt: { de: "Wärmende Tees und Hausmittel", en: "Warming teas and home remedies" } },
      ],
      tcm: [
        { t: "sub", text: { de: "Wind-Hitze", en: "Wind-Heat" } },
        { t: "p", text: {
          de: "Fieber, Kopf- und Halsschmerz, Husten und Durst: z. B. Yin Qiao San im frühen Stadium.",
          en: "Fever, head and throat pain, cough and thirst: e.g. Yin Qiao San in the early stage." } },
        { t: "sub", text: { de: "Wind-Kälte", en: "Wind-Cold" } },
        { t: "p", text: {
          de: "Starkes Frösteln, Gliederschmerz und klares Sekret: individuell mit oberflächenlösenden Rezepturen. Ausgeprägte Hitze oder Systemsymptome erfordern eine schulmedizinische Abklärung – die TCM wirkt nur begleitend.",
          en: "Marked chills, body aches and clear secretions: individualized exterior-releasing formulas. Marked Heat or systemic symptoms need conventional assessment – TCM is only complementary." } },
      ],
      ayurvedic: [
        { t: "sub", text: { de: "Pathogenese", en: "Pathogenesis" } },
        { t: "p", text: {
          de: "Grippeähnliche Erkrankungen werden traditionell dem Konzept „Jvara“ (Fieber) zugeordnet, mit je nach Symptomatik unterschiedlicher Dosha-Beteiligung.",
          en: "Flu-like illness is traditionally placed within the concept of \"Jvara\" (fever), with varying dosha involvement depending on symptoms." } },
        { t: "sub", text: { de: "Traditionelle Ansätze & Ernährung", en: "Traditional approaches & nutrition" } },
        { t: "p", text: {
          de: "Tulsi, Ingwer in warmen Getränken und Guduchi bei fieberhaften Zuständen; leicht verdauliche, warme Kost und ausreichend Flüssigkeit.",
          en: "Tulsi, ginger in warm drinks and Guduchi for febrile states; easily digestible, warm food and adequate fluids." } },
      ],
      physio: [
        { t: "p", text: {
          de: "In der akuten Fieberphase hat Ruhe Vorrang. Nach Abklingen von Fieber und Systemsymptomen unterstützen sanfte Atemübungen, schrittweise Mobilisation und leichtes Dehnen die Genesung.",
          en: "During the acute febrile phase rest takes priority. Once fever and systemic symptoms settle, gentle breathing exercises, gradual mobilization and light stretching support recovery." } },
        { t: "p", text: {
          de: "Starkes Schröpfen, kräftige Massage, intensiver Sport und forcierte Pranayama sind in der akuten Phase zu meiden.",
          en: "Strong cupping, vigorous massage, intense exercise and forceful pranayama should be avoided in the acute phase." } },
      ],
    },
  },
]
