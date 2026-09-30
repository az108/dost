import type { Disease } from "@/content/treatments"

/**
 * Conditions for "Injuries, Poisoning & Consequences of Accidents". This area
 * is empty on drdosthealth.com, so the content here is generated: original
 * bilingual prose (definition + the five treatment modalities) based on common
 * ICD-10 injuries, environmental emergencies and poisonings seen in a
 * general/private practice. The medical sections give responsible first aid and
 * clear red-flag warnings, including the German emergency number 112 and the
 * Poison Control Centre (Giftnotruf) where relevant. Every page is reviewed by
 * Dr. Dost before use; images are added later via the Gemini web workflow and
 * will carry the "KI-generiert" caption.
 */
export const injuriesDiseases: Disease[] = [
  {
    slug: "ankle-sprain",
    icd10: "S93.4",
    illustration: "generic",
    title: { de: "Sprunggelenksverstauchung", en: "Ankle Sprain" },
    summary: {
      de: "Überdehnung oder Teilriss der Außenbänder des Sprunggelenks, meist durch Umknicken.",
      en: "Overstretch or partial tear of the ankle ligaments, usually from twisting the foot.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei einer Sprunggelenksverstauchung werden die Bänder des Sprunggelenks überdehnt oder teilweise eingerissen – meist durch Umknicken nach außen. Typisch sind sofortiger Schmerz, Schwellung, Bluterguss und eine eingeschränkte Belastbarkeit. Die Verletzung ist häufig und heilt bei guter Behandlung meist folgenlos aus.",
          en: "In an ankle sprain the ligaments of the ankle are overstretched or partially torn – usually from the foot rolling outward. Typical features are immediate pain, swelling, bruising and reduced ability to bear weight. The injury is common and, with good care, usually heals without lasting problems." } },
      ],
      medical: [
        { t: "sub", text: { de: "Erstversorgung & Abklärung", en: "First aid & assessment" } },
        { t: "p", text: {
          de: "Bewährt ist die PECH-Regel: Pause, Eis (gekühlt, nie direkt auf die Haut), Compression (Druckverband) und Hochlagern. Kann das Bein gar nicht belastet werden oder besteht ein deutlicher Druckschmerz über dem Knochen, sollte zum Ausschluss eines Bruchs eine Röntgenaufnahme erfolgen.",
          en: "The PECH/PRICE principle is established: rest, ice (chilled, never directly on the skin), compression (pressure bandage) and elevation. If the leg cannot bear any weight or there is marked tenderness over the bone, an X-ray should be taken to rule out a fracture." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Im Vordergrund steht die funktionelle Behandlung: früh angepasste Belastung, eine stützende Schiene oder Bandage und schmerzlindernde Maßnahmen. Operationen sind selten nötig. Eine wiederholt umgeknickte, instabile Fessel wird gezielt weiter abgeklärt.",
          en: "Functional treatment is the priority: early adapted loading, a supportive brace or bandage and pain-relieving measures. Surgery is rarely needed. A repeatedly twisted, unstable ankle is investigated further in a targeted way." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Kühlende Umschläge, Quarkwickel und Hochlagern lindern Schwellung und Schmerz in den ersten Tagen. Äußerlich werden gelegentlich Arnika- oder Beinwellzubereitungen genutzt; Eignung und Verträglichkeit sind ärztlich zu prüfen.",
          en: "Cooling compresses, quark wraps and elevation ease swelling and pain in the first days. Arnica or comfrey preparations are sometimes used externally; suitability and tolerability should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Die akute Verletzung wird traditionell dem Muster von Qi- und Blut-Stagnation zugeordnet. Akupunktur und begleitende Verfahren können in der Erholungsphase ergänzend zur Schmerz- und Schwellungslinderung eingesetzt werden, ersetzen aber Schonung und Abklärung nicht.",
          en: "The acute injury is traditionally assigned to a pattern of Qi and blood stagnation. Acupuncture and accompanying methods may be used as complementary care during recovery to ease pain and swelling, but do not replace rest and assessment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitmaßnahmen betonen Ruhe, eine leicht verdauliche, entzündungsfreundliche Ernährung und nach der akuten Phase sanfte, wärmende Anwendungen. Kräuterpräparate sind ärztlich auf Wechselwirkungen zu prüfen.",
          en: "Ayurvedic supportive measures emphasise rest, an easily digestible, anti-inflammatory diet and, after the acute phase, gentle warming applications. Herbal preparations should be medically reviewed for interactions." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Die Physiotherapie ist zentral: Nach der akuten Phase werden Beweglichkeit, Kraft und vor allem das Gleichgewichts- und Koordinationsgefühl (Propriozeption) auf dem Balancebrett trainiert. Ein stufenweiser Aufbau bis zur Rückkehr in Sport und Alltag beugt erneutem Umknicken vor.",
          en: "Physiotherapy is central: after the acute phase, mobility, strength and above all balance and coordination (proprioception) are trained on a balance board. A stepwise build-up towards returning to sport and daily life helps prevent re-spraining." } },
      ],
    },
  },

  {
    slug: "knee-ligament-sprain",
    icd10: "S83.6",
    illustration: "generic",
    title: { de: "Knieband-Verstauchung", en: "Knee Ligament Sprain" },
    summary: {
      de: "Überdehnung oder Teilriss der Kniebänder mit Schmerz, Schwellung und manchmal Instabilität.",
      en: "Overstretch or partial tear of the knee ligaments with pain, swelling and sometimes instability.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei einer Knieband-Verstauchung werden die Bänder des Kniegelenks (z. B. Innen-, Außen- oder Kreuzband) überdehnt oder teilweise eingerissen – oft durch Verdrehen, Sturz oder Sportunfall. Typisch sind Schmerz, Schwellung und mitunter ein Gefühl der Instabilität oder des Nachgebens.",
          en: "In a knee ligament sprain the ligaments of the knee (e.g. medial, lateral or cruciate) are overstretched or partially torn – often from twisting, a fall or a sports injury. Typical features are pain, swelling and sometimes a feeling of instability or giving way." } },
      ],
      medical: [
        { t: "sub", text: { de: "Erstversorgung & Abklärung", en: "First aid & assessment" } },
        { t: "p", text: {
          de: "Sinnvoll ist die PECH-Regel (Pause, Eis, Compression, Hochlagern). Eine ärztliche Untersuchung prüft die Stabilität der Bänder. Bei Verdacht auf einen Kreuzbandriss, deutliche Instabilität oder einen begleitenden Gelenkerguss folgt eine weiterführende Bildgebung, häufig eine Kernspintomografie (MRT).",
          en: "The PECH/PRICE principle (rest, ice, compression, elevation) is sensible. A medical examination checks ligament stability. If a cruciate tear, marked instability or an accompanying joint effusion is suspected, further imaging follows, often an MRI scan." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Viele Verstauchungen und Teilrisse heilen konservativ mit Schiene, angepasster Belastung und gezieltem Aufbau. Vollständige Kreuzbandrisse werden je nach Anspruch, Alter und Instabilität konservativ oder operativ versorgt.",
          en: "Many sprains and partial tears heal conservatively with a brace, adapted loading and targeted rebuilding. Complete cruciate tears are treated conservatively or surgically depending on demands, age and instability." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Kühlung, Hochlagern und schonende Entlastung stehen in den ersten Tagen im Vordergrund. Äußere Anwendungen und entzündungsfreundliche Ernährung können begleiten; pflanzliche Mittel sind ärztlich zu prüfen.",
          en: "Cooling, elevation and gentle offloading are the priority in the first days. External applications and an anti-inflammatory diet can accompany care; herbal products should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird die Verletzung als lokale Qi- und Blut-Stagnation gedeutet. Akupunktur kann in der Rehabilitation begleitend zur Schmerzlinderung genutzt werden und ersetzt die orthopädische Behandlung nicht.",
          en: "Traditionally the injury is interpreted as local Qi and blood stagnation. Acupuncture may be used as complementary pain relief during rehabilitation and does not replace orthopaedic treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf Schonung, eine ausgewogene Ernährung und nach der akuten Phase sanfte, wärmende Anwendungen zur Unterstützung der Beweglichkeit. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support relies on rest, a balanced diet and, after the acute phase, gentle warming applications to support mobility. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Die Physiotherapie ist der Kern der Behandlung: schrittweiser Aufbau von Beweglichkeit, gezielte Kräftigung von Oberschenkel- und Beugemuskulatur, Gleichgewichtstraining und Stabilisierung. Der Wiederaufbau bis zur Sportrückkehr erfolgt kontrolliert und belastungsabhängig, oft mit stützender Bandage.",
          en: "Physiotherapy is the core of treatment: stepwise rebuilding of mobility, targeted strengthening of the thigh and hamstring muscles, balance training and stabilisation. The build-up to returning to sport is controlled and load-dependent, often with a supportive brace." } },
      ],
    },
  },

  {
    slug: "muscle-strain",
    icd10: "T14.3",
    illustration: "generic",
    title: { de: "Muskelzerrung", en: "Muscle Strain" },
    summary: {
      de: "Überdehnung oder kleiner Faserriss eines Muskels mit plötzlichem Schmerz und Verhärtung.",
      en: "Overstretch or small fibre tear of a muscle with sudden pain and tightening.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Eine Muskelzerrung entsteht, wenn ein Muskel über seine Dehnbarkeit hinaus beansprucht wird – häufig bei Sport ohne Aufwärmen, abrupten Bewegungen oder Überlastung. Typisch sind ein plötzlich einschießender Schmerz, eine Verhärtung und eine eingeschränkte Bewegung. Bei stärkeren Faser- oder Muskelrissen kommt ein Bluterguss hinzu.",
          en: "A muscle strain occurs when a muscle is loaded beyond its stretch capacity – often during sport without warming up, abrupt movements or overuse. Typical features are a sudden shooting pain, tightening and restricted movement. Larger fibre or muscle tears add bruising." } },
      ],
      medical: [
        { t: "sub", text: { de: "Erstversorgung & Abklärung", en: "First aid & assessment" } },
        { t: "p", text: {
          de: "In den ersten Stunden hilft die PECH-Regel (Pause, Eis, Compression, Hochlagern). Bei tastbarer Delle, ausgeprägtem Bluterguss oder deutlichem Kraftverlust sollte ein größerer Muskelriss ärztlich, ggf. per Ultraschall, abgeklärt werden.",
          en: "In the first hours the PECH/PRICE principle (rest, ice, compression, elevation) helps. If there is a palpable dent, pronounced bruising or marked loss of strength, a larger muscle tear should be assessed medically, if needed by ultrasound." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die meisten Zerrungen heilen mit Schonung, Kühlung und schrittweiser Wiederbelastung. Zu frühe oder zu starke Belastung verzögert die Heilung; entzündungshemmende Mittel werden nur gezielt und ärztlich abgestimmt eingesetzt.",
          en: "Most strains heal with rest, cooling and gradual reloading. Loading too early or too hard delays healing; anti-inflammatory medicines are used only in a targeted, medically agreed way." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Kühlende Umschläge in der akuten Phase und später sanfte Wärme können Beschwerden lindern. Äußerliche Arnika- oder Beinwellzubereitungen werden gelegentlich genutzt; Eignung ist ärztlich zu prüfen.",
          en: "Cooling compresses in the acute phase and gentle warmth later can ease symptoms. Arnica or comfrey preparations are sometimes used externally; suitability should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Die Zerrung wird traditionell als lokale Stagnation von Qi und Blut verstanden. Akupunktur und sanfte manuelle Techniken können in der Erholungsphase begleitend Schmerz und Verspannung lindern.",
          en: "The strain is traditionally understood as local stagnation of Qi and blood. Acupuncture and gentle manual techniques may ease pain and tension during recovery as complementary care." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitmaßnahmen umfassen Ruhe, eine nährende Ernährung und nach der akuten Phase sanfte, wärmende Ölanwendungen zur Lockerung. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic supportive measures include rest, nourishing nutrition and, after the acute phase, gentle warming oil applications to loosen the muscle. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Die Physiotherapie führt den Muskel schrittweise an Belastung heran: sanfte Dehnung, dosierter Kraftaufbau und funktionelles Training bis zur sport- und alltagsspezifischen Belastung. Ein geführter Wiederaufbau senkt das Risiko eines erneuten Risses.",
          en: "Physiotherapy gradually returns the muscle to load: gentle stretching, dosed strengthening and functional training up to sport- and daily-life-specific loading. A guided build-up lowers the risk of re-tearing." } },
      ],
    },
  },

  {
    slug: "whiplash-injury",
    icd10: "S13.4",
    illustration: "generic",
    title: { de: "Schleudertrauma (HWS-Distorsion)", en: "Whiplash Injury" },
    summary: {
      de: "Überdehnung der Halswirbelsäule durch plötzliche Beschleunigung, oft mit verzögertem Nackenschmerz.",
      en: "Overstretch of the cervical spine from sudden acceleration, often with delayed neck pain.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Beim Schleudertrauma wird die Halswirbelsäule durch eine plötzliche Beschleunigung und Abbremsung – typisch beim Auffahrunfall – ruckartig überdehnt. Beschwerden wie Nackenschmerz, Steifigkeit, Kopfschmerz und Verspannung treten oft erst Stunden später auf. Meist bleiben keine Strukturschäden zurück.",
          en: "In whiplash the cervical spine is jerked and overstretched by a sudden acceleration and deceleration – typically in a rear-end collision. Symptoms such as neck pain, stiffness, headache and tension often appear only hours later. Usually no structural damage remains." } },
      ],
      medical: [
        { t: "sub", text: { de: "Warnzeichen & Abklärung", en: "Warning signs & assessment" } },
        { t: "p", text: {
          de: "Wichtig: Taubheit, Lähmung oder Schwäche in Armen oder Beinen, starke oder zunehmende Schmerzen, Bewusstseinsstörung oder ein Hochenergie-Unfall erfordern eine rasche ärztliche Abklärung, im Notfall den Notruf 112. Nach schwerem Unfall kann eine Bildgebung nötig sein, um ernste Verletzungen auszuschließen.",
          en: "Important: numbness, paralysis or weakness in the arms or legs, severe or increasing pain, impaired consciousness or a high-energy accident require prompt medical assessment, and an emergency call (112) in an emergency. After a serious accident, imaging may be needed to exclude serious injury." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Bei unkompliziertem Verlauf sind frühe, sanfte Bewegung, Aufklärung und bei Bedarf Schmerzmittel wirksamer als langes Ruhigstellen. Eine Halskrause wird nur kurz und gezielt eingesetzt, da dauerhafte Ruhigstellung die Erholung verzögert.",
          en: "In an uncomplicated course, early gentle movement, reassurance and pain relief when needed are more effective than prolonged immobilisation. A collar is used only briefly and selectively, as prolonged immobilisation delays recovery." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Wärmeanwendungen, entspannende Maßnahmen und Stressabbau können Verspannungen lindern. Äußere pflanzliche Zubereitungen sind ärztlich zu prüfen; wichtig ist, in Bewegung zu bleiben.",
          en: "Warmth applications, relaxation measures and stress reduction can ease tension. External herbal preparations should be medically reviewed; staying in motion is important." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Nacken- und Schulterverspannungen werden traditionell mit Qi- und Blut-Stagnation in Verbindung gebracht. Akupunktur und Tuina können in der Erholungsphase begleitend Verspannung und Schmerz lindern.",
          en: "Neck and shoulder tension is traditionally associated with Qi and blood stagnation. Acupuncture and Tuina may ease tension and pain during recovery as complementary care." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont beruhigende Routinen, sanfte wärmende Nacken- und Schulteranwendungen und Entspannungsübungen. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises calming routines, gentle warming neck and shoulder applications and relaxation exercises. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Die Physiotherapie ist zentral: frühe aktive Bewegung der Halswirbelsäule, Haltungsschulung, sanfte Dehn- und Kräftigungsübungen und Entspannungstechniken. Ein aktiver Ansatz fördert die Erholung und beugt chronischen Beschwerden vor.",
          en: "Physiotherapy is central: early active movement of the cervical spine, posture training, gentle stretching and strengthening exercises and relaxation techniques. An active approach aids recovery and helps prevent chronic symptoms." } },
      ],
    },
  },

  {
    slug: "contusion-bruise",
    icd10: "T14.0",
    illustration: "generic",
    title: { de: "Prellung (Kontusion)", en: "Contusion (Bruise)" },
    summary: {
      de: "Stumpfe Gewalteinwirkung ohne offene Wunde, mit Schmerz, Schwellung und Bluterguss.",
      en: "Blunt impact without an open wound, with pain, swelling and bruising.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Eine Prellung entsteht durch stumpfe Gewalt, etwa Stoß, Schlag oder Sturz, ohne dass die Haut aufreißt. Kleine Gefäße im Gewebe reißen, es kommt zu Schmerz, Schwellung und einem Bluterguss (Hämatom). Prellungen sind meist harmlos, können aber je nach Ort und Wucht schmerzhaft sein.",
          en: "A contusion results from blunt force such as a knock, blow or fall, without the skin breaking. Small vessels in the tissue rupture, causing pain, swelling and a bruise (haematoma). Contusions are usually harmless but can be painful depending on site and force." } },
      ],
      medical: [
        { t: "sub", text: { de: "Erstversorgung & Warnzeichen", en: "First aid & warning signs" } },
        { t: "p", text: {
          de: "Bewährt ist die PECH-Regel (Pause, Eis, Compression, Hochlagern). Ein großer, praller oder rasch wachsender Bluterguss sollte ärztlich beurteilt werden. Wichtig: Stark zunehmender Schmerz, Spannungsgefühl, Taubheit oder Blässe an einer Gliedmaße können auf ein gefährliches Kompartmentsyndrom hindeuten und erfordern sofort ärztliche Hilfe.",
          en: "The PECH/PRICE principle (rest, ice, compression, elevation) is established. A large, tense or rapidly growing bruise should be assessed medically. Important: strongly increasing pain, a feeling of tightness, numbness or pallor in a limb can indicate a dangerous compartment syndrome and require immediate medical help." } },
        { t: "p", text: {
          de: "Prellungen an Kopf, Brustkorb oder Bauch werden aufmerksam beobachtet, da darunter ernstere Verletzungen liegen können.",
          en: "Contusions to the head, chest or abdomen are observed carefully, as more serious injuries can lie beneath them." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Kühlung in den ersten Stunden, später schonende Bewegung und äußere Anwendungen (z. B. Arnika- oder Beinwellzubereitungen) können Beschwerden lindern; Eignung ist ärztlich zu prüfen.",
          en: "Cooling in the first hours, later gentle movement and external applications (e.g. arnica or comfrey preparations) can ease symptoms; suitability should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Die Prellung wird traditionell als lokale Blut-Stase verstanden. Akupunktur und sanfte Techniken können begleitend zur Schmerz- und Schwellungslinderung eingesetzt werden.",
          en: "The contusion is traditionally understood as local blood stasis. Acupuncture and gentle techniques may be used as complementary care to ease pain and swelling." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitmaßnahmen setzen auf Schonung, kühlende bzw. später wärmende äußere Anwendungen und eine ausgewogene Ernährung. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic supportive measures rely on rest, cooling and later warming external applications and a balanced diet. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Nach der akuten Phase unterstützt die Physiotherapie mit sanfter Beweglichkeit und schrittweisem Belastungsaufbau, um Steifigkeit vorzubeugen. Manuelle Lymphdrainage kann bei ausgeprägter Schwellung helfen.",
          en: "After the acute phase, physiotherapy supports recovery with gentle mobility and a gradual build-up of loading to prevent stiffness. Manual lymphatic drainage can help with marked swelling." } },
      ],
    },
  },

  {
    slug: "minor-wounds-lacerations",
    icd10: "T14.1",
    illustration: "generic",
    title: { de: "Kleinere Wunden und Schnittverletzungen", en: "Minor Wounds and Lacerations" },
    summary: {
      de: "Oberflächliche Schnitt-, Schürf- und Platzwunden, die meist gut selbst zu versorgen sind.",
      en: "Superficial cuts, grazes and lacerations that can usually be well cared for at home.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Kleinere Wunden umfassen oberflächliche Schnitt-, Schürf- und Platzwunden. Sie betreffen meist nur die oberen Hautschichten, bluten begrenzt und heilen bei sauberer Versorgung in der Regel gut ab. Entscheidend sind Reinigung, Blutstillung und Schutz vor Infektion.",
          en: "Minor wounds include superficial cuts, grazes and small lacerations. They usually affect only the upper skin layers, bleed in a limited way and heal well with clean care. Cleaning, stopping bleeding and protecting against infection are key." } },
      ],
      medical: [
        { t: "sub", text: { de: "Erstversorgung", en: "First aid" } },
        { t: "p", text: {
          de: "Die Wunde wird mit sauberem Wasser gespült, die Blutung mit sanftem Druck gestillt und die Wunde mit einem sauberen, möglichst nicht verklebenden Verband abgedeckt. Der Tetanusschutz sollte aktuell sein.",
          en: "The wound is rinsed with clean water, bleeding is stopped with gentle pressure, and the wound is covered with a clean, ideally non-stick dressing. Tetanus protection should be up to date." } },
        { t: "sub", text: { de: "Wann ärztliche Hilfe", en: "When to seek medical care" } },
        { t: "p", text: {
          de: "Ärztlich versorgt werden sollten tiefe oder klaffende Wunden, Wunden im Gesicht, stark oder nicht stillbare Blutungen, Verschmutzung mit Fremdmaterial sowie Zeichen einer Infektion (Rötung, Überwärmung, Eiter, Fieber). Genähte oder geklebte Wunden werden idealerweise innerhalb weniger Stunden versorgt.",
          en: "Deep or gaping wounds, facial wounds, heavy or unstoppable bleeding, contamination with foreign material and signs of infection (redness, warmth, pus, fever) should be treated medically. Wounds that need stitches or glue are ideally treated within a few hours." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Saubere Wundverhältnisse und Ruhe fördern die Heilung. Ergänzende Pflege (z. B. Wundauflagen, feuchte Wundheilung) sollte fachlich begleitet werden; desinfizierende Hausmittel ohne Nachweis werden gemieden.",
          en: "Clean wound conditions and rest aid healing. Complementary care (e.g. wound dressings, moist wound healing) should be professionally supervised; unproven disinfecting home remedies are avoided." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "In der TCM steht bei Wunden die ungestörte Heilung im Vordergrund. Innere Verfahren spielen hier kaum eine Rolle; begleitende Maßnahmen dienen allenfalls dem allgemeinen Wohlbefinden.",
          en: "In TCM, undisturbed healing is the priority for wounds. Internal methods play little role here; accompanying measures serve at most general wellbeing." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine nährende Ernährung und Ruhe zur Unterstützung der Heilung. Pflanzliche Wundauflagen sollten nur nach fachlicher Prüfung und bei sauberer Wunde genutzt werden.",
          en: "Ayurvedic support emphasises nourishing nutrition and rest to support healing. Herbal wound applications should be used only after professional review and on a clean wound." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Die Physiotherapie spielt bei kleinen Wunden nur eine begrenzte Rolle. Nach größeren Wunden an Hand oder über Gelenken hilft sie, Beweglichkeit und Kraft wiederzugewinnen und einer narbenbedingten Steifigkeit vorzubeugen.",
          en: "Physiotherapy plays only a limited role with minor wounds. After larger wounds on the hand or over joints, it helps to regain mobility and strength and to prevent scar-related stiffness." } },
      ],
    },
  },

  {
    slug: "animal-and-human-bites",
    icd10: "T14.1",
    illustration: "generic",
    title: { de: "Tier- und Menschenbisse", en: "Animal and Human Bites" },
    summary: {
      de: "Biss- und Kratzwunden mit hohem Infektionsrisiko, die fast immer ärztlich versorgt werden sollten.",
      en: "Bite and scratch wounds with a high infection risk that should almost always be treated medically.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Tier- und Menschenbisse erzeugen oft tiefe Stich- oder Quetschwunden und bringen viele Keime ins Gewebe. Dadurch besteht ein hohes Infektionsrisiko – besonders an Händen, Gelenken und im Gesicht. Auch kleine Bisswunden werden deshalb ärztlich beurteilt.",
          en: "Animal and human bites often create deep puncture or crush wounds and drive many germs into the tissue. This gives a high risk of infection – especially on the hands, joints and face. Even small bite wounds are therefore assessed medically." } },
      ],
      medical: [
        { t: "sub", text: { de: "Erstversorgung", en: "First aid" } },
        { t: "p", text: {
          de: "Die Wunde wird gründlich mit Wasser gespült und locker abgedeckt. Anschließend ist eine zeitnahe ärztliche Vorstellung wichtig: Bisswunden werden häufig nicht sofort vernäht, oft ist eine vorbeugende Antibiotikagabe sinnvoll, und der Tetanusschutz wird überprüft.",
          en: "The wound is rinsed thoroughly with water and loosely covered. Prompt medical review is then important: bite wounds are often not closed immediately, preventive antibiotics are frequently sensible, and tetanus protection is checked." } },
        { t: "sub", text: { de: "Besondere Risiken", en: "Special risks" } },
        { t: "p", text: {
          de: "Bei Bissen durch unbekannte oder wild lebende Tiere, insbesondere im Ausland, ist an Tollwut zu denken – hier ist umgehend ärztlicher Rat einzuholen. Warnzeichen einer Infektion (zunehmende Rötung, Schwellung, Eiter, Fieber, rote Streifen) erfordern eine rasche Wiedervorstellung.",
          en: "For bites from unknown or wild animals, particularly abroad, rabies must be considered – seek medical advice immediately. Warning signs of infection (increasing redness, swelling, pus, fever, red streaks) require prompt re-evaluation." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Naturheilkundliche Selbstbehandlung ist bei Bisswunden nicht angebracht; im Vordergrund stehen Reinigung und ärztliche Versorgung. In der Heilungsphase unterstützen Ruhe und eine nährende Ernährung.",
          en: "Naturopathic self-treatment is not appropriate for bite wounds; cleaning and medical care come first. During healing, rest and nourishing nutrition provide support." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "TCM-Verfahren sind hier allenfalls in der späteren Erholungsphase begleitend sinnvoll und ersetzen die notwendige Wundversorgung, Antibiose und den Tetanus- bzw. Tollwutschutz nicht.",
          en: "TCM approaches are at most useful as complementary care in the later recovery phase and do not replace the necessary wound care, antibiotics and tetanus or rabies protection." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung beschränkt sich auf allgemeine Erholung, Ruhe und eine ausgewogene Ernährung nach der ärztlichen Versorgung. Pflanzliche Auflagen auf frische Bisswunden werden gemieden.",
          en: "Ayurvedic support is limited to general recovery, rest and a balanced diet after medical care. Herbal applications on fresh bite wounds are avoided." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Nach abgeschlossener Wundheilung – vor allem bei Bissen an Hand oder über Gelenken – hilft die Physiotherapie, Beweglichkeit und Kraft wiederherzustellen und einer narbenbedingten Einsteifung vorzubeugen.",
          en: "After wound healing is complete – especially for bites on the hand or over joints – physiotherapy helps to restore mobility and strength and to prevent scar-related stiffening." } },
      ],
    },
  },

  {
    slug: "wrist-fracture",
    icd10: "S52.5",
    illustration: "generic",
    title: { de: "Handgelenksbruch (distale Radiusfraktur)", en: "Wrist Fracture" },
    summary: {
      de: "Bruch der Speiche nahe dem Handgelenk, meist durch Sturz auf die ausgestreckte Hand.",
      en: "A break of the radius near the wrist, usually from a fall on the outstretched hand.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Der Handgelenksbruch betrifft meist die Speiche nahe dem Handgelenk (distale Radiusfraktur) und entsteht häufig beim Sturz auf die ausgestreckte Hand. Typisch sind Schmerz, Schwellung, eingeschränkte Beweglichkeit und mitunter eine sichtbare Fehlstellung. Es ist einer der häufigsten Knochenbrüche.",
          en: "A wrist fracture usually involves the radius near the wrist (distal radius fracture) and often occurs when falling on the outstretched hand. Typical features are pain, swelling, restricted movement and sometimes a visible deformity. It is one of the most common fractures." } },
      ],
      medical: [
        { t: "sub", text: { de: "Erstversorgung & Diagnose", en: "First aid & diagnosis" } },
        { t: "p", text: {
          de: "Das Handgelenk wird ruhiggestellt, gekühlt und hochgelagert; enge Ringe und Armbänder werden früh entfernt. Wichtig: Eine deutliche Fehlstellung, Taubheit, kalte oder blasse Finger sind ein Warnzeichen für eine gestörte Durchblutung oder Nervenschädigung und erfordern sofort ärztliche Hilfe, im Notfall den Notruf 112. Die Diagnose sichert eine Röntgenaufnahme.",
          en: "The wrist is immobilised, cooled and elevated; tight rings and bracelets are removed early. Important: a marked deformity, numbness or cold, pale fingers are warning signs of impaired circulation or nerve damage and require immediate medical help, and an emergency call (112) in an emergency. An X-ray confirms the diagnosis." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Nicht verschobene Brüche werden im Gips ruhiggestellt. Verschobene Brüche werden eingerichtet (reponiert) und im Gips oder – bei Instabilität – operativ mit Platte oder Drähten versorgt. Nach der Ruhigstellung folgt der gezielte Wiederaufbau.",
          en: "Undisplaced fractures are immobilised in a cast. Displaced fractures are set (reduced) and treated in a cast or – if unstable – surgically with a plate or wires. Targeted rebuilding follows the period of immobilisation." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend fördern eine ausgewogene, kalzium- und eiweißreiche Ernährung, ausreichend Vitamin D und Rauchverzicht die Knochenheilung. Pflanzliche Mittel sind ärztlich zu prüfen und ersetzen die orthopädische Versorgung nicht.",
          en: "A balanced diet rich in calcium and protein, sufficient vitamin D and stopping smoking support bone healing. Herbal products should be medically reviewed and do not replace orthopaedic care." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden Heilungsstörungen über Muster wie Nieren- und Blut-Schwäche gedeutet. Akupunktur kann in der Rehabilitation begleitend zur Schmerzlinderung eingesetzt werden.",
          en: "Traditionally, healing disturbances are interpreted through patterns such as Kidney and blood weakness. Acupuncture may be used as complementary pain relief during rehabilitation." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf eine nährende, knochenfreundliche Ernährung und nach der Gipsphase sanfte Anwendungen zur Unterstützung der Beweglichkeit. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support relies on a nourishing, bone-friendly diet and, after the cast phase, gentle applications to support mobility. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Die Physiotherapie ist nach der Ruhigstellung zentral: schrittweiser Aufbau von Beweglichkeit und Griffkraft, Abschwellung, Narbenbehandlung und Wiedererlangen der Alltagsfunktion. Der Belastungsaufbau erfolgt dosiert und schmerzorientiert.",
          en: "Physiotherapy is central after immobilisation: stepwise rebuilding of mobility and grip strength, reducing swelling, scar treatment and regaining everyday function. Loading is built up in a dosed, pain-guided way." } },
      ],
    },
  },

  {
    slug: "rib-fracture",
    icd10: "S22.3",
    illustration: "generic",
    title: { de: "Rippenbruch", en: "Rib Fracture" },
    summary: {
      de: "Bruch einer oder mehrerer Rippen mit atemabhängigem Schmerz nach stumpfer Gewalt.",
      en: "A break of one or more ribs with breathing-dependent pain after blunt force.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Ein Rippenbruch entsteht durch stumpfe Gewalt auf den Brustkorb, etwa bei Sturz, Schlag oder Unfall. Typisch ist ein Schmerz, der sich beim Atmen, Husten, Niesen und bei Bewegung deutlich verstärkt. Die meisten einfachen Rippenbrüche heilen von selbst.",
          en: "A rib fracture results from blunt force to the chest, for example a fall, blow or accident. Typical is pain that clearly worsens with breathing, coughing, sneezing and movement. Most simple rib fractures heal on their own." } },
      ],
      medical: [
        { t: "sub", text: { de: "Behandlung & Warnzeichen", en: "Treatment & warning signs" } },
        { t: "p", text: {
          de: "Im Mittelpunkt steht eine gute Schmerzlinderung, damit weiterhin tief geatmet und abgehustet werden kann – das beugt einer Lungenentzündung vor. Ein festes Einwickeln des Brustkorbs wird vermieden, da es die Atmung behindert.",
          en: "The focus is good pain relief so that deep breathing and coughing can continue – this prevents pneumonia. Tight strapping of the chest is avoided, as it hampers breathing." } },
        { t: "p", text: {
          de: "Wichtig: Zunehmende Luftnot, ausgeprägte Atemnot, Bluthusten oder ein Kreislaufeinbruch können auf einen Lungen- oder Organschaden (z. B. Pneumothorax) hindeuten und erfordern sofort den Notruf 112.",
          en: "Important: increasing breathlessness, severe difficulty breathing, coughing up blood or circulatory collapse can indicate lung or organ damage (e.g. pneumothorax) and require an immediate emergency call (112)." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Ruhe, angenehme Lagerung und sanfte Atemübungen unterstützen die Heilung. Kühlung kann in den ersten Tagen den Schmerz lindern; pflanzliche Mittel sind ärztlich zu prüfen.",
          en: "Rest, a comfortable position and gentle breathing exercises support healing. Cooling can ease pain in the first days; herbal products should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird der Rippenbruch als lokale Blut-Stase mit Qi-Stagnation verstanden. Akupunktur kann in der Erholungsphase begleitend zur Schmerzlinderung genutzt werden.",
          en: "Traditionally the rib fracture is understood as local blood stasis with Qi stagnation. Acupuncture may be used as complementary pain relief during recovery." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Ruhe, eine nährende, knochenfreundliche Ernährung und sanfte Atemübungen. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises rest, a nourishing, bone-friendly diet and gentle breathing exercises. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Die Physiotherapie begleitet mit Atemübungen, um flache Schonatmung, Sekretstau und Lungenentzündung vorzubeugen. Nach der Heilung folgen ein sanfter Aufbau der Rumpfbeweglichkeit und die schrittweise Rückkehr zu Belastung und Sport.",
          en: "Physiotherapy supports recovery with breathing exercises to prevent shallow guarding, retained secretions and pneumonia. After healing, a gentle build-up of trunk mobility and a gradual return to loading and sport follow." } },
      ],
    },
  },

  {
    slug: "toe-fracture",
    icd10: "S92.5",
    illustration: "generic",
    title: { de: "Zehenbruch", en: "Toe Fracture" },
    summary: {
      de: "Bruch eines Zehenknochens, meist durch Anstoßen oder herabfallende Gegenstände.",
      en: "A break of a toe bone, usually from stubbing or a dropped object.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Ein Zehenbruch entsteht häufig durch heftiges Anstoßen oder einen auf den Fuß fallenden Gegenstand. Typisch sind Schmerz, Schwellung, Bluterguss und Schmerzen beim Gehen. Die meisten Brüche der kleinen Zehen heilen unkompliziert aus.",
          en: "A toe fracture often results from forceful stubbing or an object falling on the foot. Typical features are pain, swelling, bruising and pain when walking. Most fractures of the smaller toes heal without complications." } },
      ],
      medical: [
        { t: "sub", text: { de: "Erstversorgung & Behandlung", en: "First aid & treatment" } },
        { t: "p", text: {
          de: "Kühlen und Hochlagern lindern die Schwellung. Kleinere Zehenbrüche werden häufig durch Zusammenkleben mit dem Nachbarzeh (Buddy-Taping) und einen festen, steifen Schuh behandelt. Eine Röntgenaufnahme ist bei deutlicher Fehlstellung, offenem Bruch oder Verletzung der großen Zehe sinnvoll.",
          en: "Cooling and elevation ease swelling. Smaller toe fractures are often treated by taping to the neighbouring toe (buddy taping) and a firm, stiff-soled shoe. An X-ray is sensible for marked deformity, an open fracture or an injury to the big toe." } },
        { t: "p", text: {
          de: "Verschobene Brüche, offene Wunden oder eine betroffene große Zehe werden ärztlich versorgt, da hier gelegentlich eine Einrichtung oder weitergehende Behandlung nötig ist.",
          en: "Displaced fractures, open wounds or an affected big toe are treated medically, as setting the bone or further treatment is occasionally needed here." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Kühlung, Schonung und eine ausgewogene, knochenfreundliche Ernährung unterstützen die Heilung. Bequemes, druckentlastendes Schuhwerk hilft in der Alltagsbewältigung.",
          en: "Cooling, rest and a balanced, bone-friendly diet support healing. Comfortable, pressure-relieving footwear helps with everyday activities." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird der Bruch als lokale Blut-Stase gedeutet. Akupunktur kann in der Erholungsphase begleitend zur Schmerzlinderung eingesetzt werden.",
          en: "Traditionally the fracture is interpreted as local blood stasis. Acupuncture may be used as complementary pain relief during recovery." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Schonung, eine nährende Ernährung und sanfte Anwendungen nach der akuten Phase. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises rest, nourishing nutrition and gentle applications after the acute phase. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Nach der Heilung hilft die Physiotherapie, Beweglichkeit und ein normales Gangbild wiederzugewinnen. Fuß- und Zehengymnastik sowie ein dosierter Belastungsaufbau erleichtern die Rückkehr zu Alltag und Sport.",
          en: "After healing, physiotherapy helps to regain mobility and a normal gait. Foot and toe exercises and a dosed build-up of loading ease the return to daily life and sport." } },
      ],
    },
  },

  {
    slug: "shoulder-dislocation",
    icd10: "S43.0",
    illustration: "generic",
    title: { de: "Schulterluxation", en: "Shoulder Dislocation" },
    summary: {
      de: "Auskugeln des Schultergelenks mit starken Schmerzen und blockierter Bewegung.",
      en: "The shoulder joint slipping out of place, with severe pain and blocked movement.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der Schulterluxation springt der Oberarmkopf aus der Gelenkpfanne, meist nach vorne. Typisch sind sehr starke Schmerzen, eine sichtbare Fehlstellung und eine fast aufgehobene Beweglichkeit. Die Verletzung entsteht durch Sturz, Sport oder eine heftige Verrenkung.",
          en: "In a shoulder dislocation the head of the upper arm slips out of the socket, usually forward. Typical features are very severe pain, a visible deformity and almost abolished movement. The injury results from a fall, sport or a forceful twisting." } },
      ],
      medical: [
        { t: "sub", text: { de: "Erstversorgung", en: "First aid" } },
        { t: "p", text: {
          de: "Der Arm wird in der für die betroffene Person angenehmsten Haltung ruhiggestellt und gestützt. Wichtig: Nicht selbst gewaltsam einrenken. Taubheit, Kribbeln oder kalte, blasse Finger können auf eine Nerven- oder Gefäßschädigung hindeuten und erfordern sofort ärztliche Hilfe, im Notfall den Notruf 112.",
          en: "The arm is immobilised and supported in the position most comfortable for the person. Important: do not attempt a forceful reduction yourself. Numbness, tingling or cold, pale fingers can indicate nerve or vessel damage and require immediate medical help, and an emergency call (112) in an emergency." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Die Schulter wird ärztlich zeitnah und schonend eingerenkt (reponiert), anschließend wird zum Ausschluss von Begleitverletzungen geröntgt. Es folgt eine kurze Ruhigstellung und ein gezielter Wiederaufbau; bei wiederholten Luxationen kann eine Operation sinnvoll sein.",
          en: "The shoulder is reduced medically, promptly and gently, then X-rayed to exclude accompanying injuries. A short period of immobilisation and targeted rebuilding follow; for recurrent dislocations, surgery may be sensible." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Naturheilkundliche Selbstbehandlung ist im akuten Fall nicht angebracht. In der Erholungsphase unterstützen schonende Anwendungen und eine ausgewogene Ernährung; pflanzliche Mittel sind ärztlich zu prüfen.",
          en: "Naturopathic self-treatment is not appropriate in the acute situation. During recovery, gentle applications and a balanced diet provide support; herbal products should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird die Verletzung als lokale Qi- und Blut-Stagnation verstanden. Akupunktur kann in der Rehabilitation begleitend zur Schmerzlinderung genutzt werden und ersetzt die Einrichtung nicht.",
          en: "Traditionally the injury is understood as local Qi and blood stagnation. Acupuncture may be used as complementary pain relief during rehabilitation and does not replace reduction of the joint." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt in der Erholungsphase auf sanfte, wärmende Anwendungen und eine nährende Ernährung. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support relies during recovery on gentle warming applications and nourishing nutrition. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Die Physiotherapie ist entscheidend, um die Schulter wieder zu stabilisieren: gezielte Kräftigung der Rotatorenmanschette und der schulterblattführenden Muskeln, Wiederaufbau der Beweglichkeit und Verbesserung der Gelenkkontrolle. Das senkt das Risiko erneuter Luxationen.",
          en: "Physiotherapy is decisive for re-stabilising the shoulder: targeted strengthening of the rotator cuff and the muscles guiding the shoulder blade, rebuilding mobility and improving joint control. This lowers the risk of repeat dislocations." } },
      ],
    },
  },

  {
    slug: "finger-dislocation",
    icd10: "S63.1",
    illustration: "generic",
    title: { de: "Fingerluxation", en: "Finger Dislocation" },
    summary: {
      de: "Auskugeln eines Fingergelenks mit Fehlstellung, Schmerz und blockierter Bewegung.",
      en: "A finger joint slipping out of place, with deformity, pain and blocked movement.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der Fingerluxation springt ein Fingergelenk aus seiner normalen Stellung – häufig durch Ballsport, Sturz oder Verdrehen. Typisch sind eine sichtbare Fehlstellung, Schmerz, Schwellung und eine blockierte Bewegung.",
          en: "In a finger dislocation a finger joint slips out of its normal position – often through ball sports, a fall or twisting. Typical features are a visible deformity, pain, swelling and blocked movement." } },
      ],
      medical: [
        { t: "sub", text: { de: "Erstversorgung & Behandlung", en: "First aid & treatment" } },
        { t: "p", text: {
          de: "Der Finger wird ruhiggestellt und gekühlt; Ringe werden früh entfernt. Wichtig: Nicht selbst gewaltsam einrenken. Die ärztliche Einrichtung erfolgt zeitnah und schonend, meist mit anschließender Röntgenaufnahme, um einen begleitenden Knochenbruch auszuschließen.",
          en: "The finger is immobilised and cooled; rings are removed early. Important: do not attempt a forceful reduction yourself. Medical reduction is carried out promptly and gently, usually with a follow-up X-ray to exclude an accompanying fracture." } },
        { t: "p", text: {
          de: "Nach der Einrichtung wird der Finger eine Zeit lang geschient oder mit dem Nachbarfinger gekoppelt. Kalte, taube Finger oder eine anhaltende Fehlstellung erfordern rasche ärztliche Hilfe.",
          en: "After reduction, the finger is splinted for a time or buddy-taped to the neighbouring finger. Cold, numb fingers or a persistent deformity require prompt medical help." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "In der Erholungsphase lindern Kühlung, Hochlagern und schonende Bewegung die Beschwerden. Pflanzliche Mittel sind ärztlich zu prüfen.",
          en: "During recovery, cooling, elevation and gentle movement ease symptoms. Herbal products should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird die Verletzung als lokale Blut-Stase verstanden. Akupunktur kann in der Rehabilitation begleitend zur Schmerzlinderung eingesetzt werden.",
          en: "Traditionally the injury is understood as local blood stasis. Acupuncture may be used as complementary pain relief during rehabilitation." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont in der Erholungsphase sanfte Anwendungen und eine ausgewogene Ernährung. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises gentle applications and a balanced diet during recovery. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Die Physiotherapie hilft, Beweglichkeit und Kraft des Fingers wiederzugewinnen und einer bleibenden Steifigkeit vorzubeugen. Dosierte Bewegungsübungen und ein schrittweiser Belastungsaufbau unterstützen die Rückkehr zu Alltag und Sport.",
          en: "Physiotherapy helps to regain the finger's mobility and strength and to prevent lasting stiffness. Dosed movement exercises and a gradual build-up of loading support the return to daily life and sport." } },
      ],
    },
  },

  {
    slug: "acromioclavicular-joint-injury",
    icd10: "S43.1",
    illustration: "generic",
    title: { de: "Schultereckgelenksprengung", en: "Acromioclavicular Joint Injury" },
    summary: {
      de: "Verletzung des Gelenks zwischen Schlüsselbein und Schulterdach, meist durch Sturz auf die Schulter.",
      en: "Injury of the joint between collarbone and shoulder roof, usually from a fall onto the shoulder.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der Schultereckgelenksprengung werden die Bänder zwischen Schlüsselbein und Schulterdach (Akromioklavikulargelenk) überdehnt oder gerissen – typisch beim Sturz direkt auf die Schulter. Je nach Schweregrad zeigt sich eine schmerzhafte Schwellung oder ein tastbarer Hochstand des Schlüsselbeins (Klaviertastenphänomen).",
          en: "In an acromioclavicular joint injury the ligaments between the collarbone and the shoulder roof (AC joint) are overstretched or torn – typically from a fall directly onto the shoulder. Depending on severity, there is painful swelling or a palpable step-up of the collarbone (piano-key sign)." } },
      ],
      medical: [
        { t: "sub", text: { de: "Diagnose & Behandlung", en: "Diagnosis & treatment" } },
        { t: "p", text: {
          de: "Die Schwere wird klinisch und per Röntgen beurteilt. Leichtere Verletzungen werden konservativ mit Schlinge, Kühlung, Schmerzlinderung und Physiotherapie behandelt. Ausgeprägte Sprengungen mit deutlichem Hochstand können, besonders bei hohem funktionellem Anspruch, operativ versorgt werden.",
          en: "Severity is assessed clinically and by X-ray. Milder injuries are treated conservatively with a sling, cooling, pain relief and physiotherapy. Pronounced separations with a marked step-up may be treated surgically, especially with high functional demands." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Kühlung in den ersten Tagen, Entlastung durch die Schlinge und später schonende Bewegung unterstützen die Heilung. Pflanzliche Mittel sind ärztlich zu prüfen.",
          en: "Cooling in the first days, offloading with the sling and later gentle movement support healing. Herbal products should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird die Verletzung als lokale Qi- und Blut-Stagnation verstanden. Akupunktur kann in der Rehabilitation begleitend zur Schmerzlinderung genutzt werden.",
          en: "Traditionally the injury is understood as local Qi and blood stagnation. Acupuncture may be used as complementary pain relief during rehabilitation." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt in der Erholungsphase auf sanfte, wärmende Anwendungen und eine ausgewogene Ernährung. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support relies during recovery on gentle warming applications and a balanced diet. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Die Physiotherapie ist zentral: schrittweiser Aufbau von Beweglichkeit und Kraft, gezielte Stabilisierung der schulterblattführenden Muskulatur und ein geführter Belastungsaufbau bis zur Rückkehr in Alltag und Sport.",
          en: "Physiotherapy is central: stepwise rebuilding of mobility and strength, targeted stabilisation of the muscles guiding the shoulder blade and a guided build-up of loading up to the return to daily life and sport." } },
      ],
    },
  },

  {
    slug: "achilles-tendon-rupture",
    icd10: "S86.0",
    illustration: "generic",
    title: { de: "Achillessehnenriss", en: "Achilles Tendon Rupture" },
    summary: {
      de: "Riss der Achillessehne mit plötzlichem Schmerz und Kraftverlust beim Abstoßen.",
      en: "A tear of the Achilles tendon with sudden pain and loss of push-off power.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Beim Achillessehnenriss reißt die kräftige Sehne zwischen Wade und Ferse, häufig bei einer abrupten Abstoßbewegung im Sport. Typisch sind ein peitschenartiger Schlag oder Knall, plötzlicher Schmerz und die Unfähigkeit, sich auf die Zehenspitzen zu stellen oder kraftvoll abzustoßen.",
          en: "In an Achilles tendon rupture the strong tendon between the calf and heel tears, often during an abrupt push-off in sport. Typical features are a whip-like blow or snap, sudden pain and an inability to stand on tiptoes or push off powerfully." } },
      ],
      medical: [
        { t: "sub", text: { de: "Erstversorgung & Diagnose", en: "First aid & diagnosis" } },
        { t: "p", text: {
          de: "Der Fuß wird in Spitzfußstellung ruhiggestellt, gekühlt und hochgelagert; die Belastung wird vermieden. Es folgt eine zeitnahe ärztliche Vorstellung. Die Diagnose stützt sich auf die klinische Untersuchung (z. B. Wadenkompressionstest) und den Ultraschall.",
          en: "The foot is immobilised in a toes-pointed position, cooled and elevated; weight-bearing is avoided. Prompt medical review follows. Diagnosis rests on clinical examination (e.g. the calf-squeeze test) and ultrasound." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Behandelt wird konservativ mit einem funktionellen Spezialschuh oder -stiefel in Spitzfußstellung oder operativ durch Sehnennaht. Die Wahl richtet sich nach Rissform, Aktivität und individuellen Faktoren; in beiden Fällen ist die anschließende Rehabilitation entscheidend.",
          en: "Treatment is either conservative with a functional special shoe or boot in a toes-pointed position, or surgical via tendon suture. The choice depends on the tear pattern, activity level and individual factors; in both cases the subsequent rehabilitation is decisive." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Begleitend unterstützen eine ausgewogene, eiweißreiche Ernährung, Rauchverzicht und Geduld die Sehnenheilung. Pflanzliche Mittel sind ärztlich zu prüfen und ersetzen die fachgerechte Versorgung nicht.",
          en: "A balanced, protein-rich diet, stopping smoking and patience support tendon healing. Herbal products should be medically reviewed and do not replace proper treatment." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell werden Sehnenverletzungen über Muster wie Leber- und Blut-Schwäche gedeutet. Akupunktur kann in der Rehabilitation begleitend zur Schmerzlinderung genutzt werden.",
          en: "Traditionally, tendon injuries are interpreted through patterns such as Liver and blood weakness. Acupuncture may be used as complementary pain relief during rehabilitation." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont eine nährende Ernährung und nach ärztlicher Freigabe sanfte, wärmende Anwendungen zur Unterstützung der Beweglichkeit. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises nourishing nutrition and, after medical clearance, gentle warming applications to support mobility. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Die Physiotherapie ist der Kern der Genesung und dauert mehrere Monate: schrittweise Belastungssteigerung, gezielter Aufbau der Wadenmuskulatur, Gang- und Gleichgewichtsschulung sowie ein kontrollierter, belastungsabhängiger Aufbau bis zur Sportrückkehr.",
          en: "Physiotherapy is the core of recovery and lasts several months: stepwise increases in loading, targeted strengthening of the calf muscles, gait and balance training and a controlled, load-dependent build-up up to the return to sport." } },
      ],
    },
  },

  {
    slug: "concussion",
    icd10: "S06.0",
    illustration: "generic",
    title: { de: "Gehirnerschütterung", en: "Concussion" },
    summary: {
      de: "Leichte Hirnverletzung nach Kopfstoß mit Kopfschmerz, Schwindel und Benommenheit.",
      en: "A mild brain injury after a head impact, with headache, dizziness and dazedness.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Gehirnerschütterung ist eine leichte Form der Schädel-Hirn-Verletzung nach einem Stoß oder Schlag gegen den Kopf. Typisch sind Kopfschmerz, Schwindel, Benommenheit, Übelkeit, Licht- und Lärmempfindlichkeit sowie Konzentrationsstörungen; eine kurze Bewusstlosigkeit ist möglich, aber nicht zwingend.",
          en: "Concussion is a mild form of traumatic brain injury after a knock or blow to the head. Typical features are headache, dizziness, dazedness, nausea, sensitivity to light and noise and difficulty concentrating; a brief loss of consciousness is possible but not necessary." } },
      ],
      medical: [
        { t: "sub", text: { de: "Warnzeichen", en: "Warning signs" } },
        { t: "p", text: {
          de: "Wichtig: Zunehmende oder sehr starke Kopfschmerzen, wiederholtes Erbrechen, Krampfanfälle, ungleiche Pupillen, zunehmende Schläfrigkeit, Verwirrtheit, Schwäche oder Gefühlsstörungen können auf eine ernste Hirnverletzung hindeuten und erfordern sofort den Notruf 112. In den ersten 24 bis 48 Stunden sollte die betroffene Person beobachtet werden.",
          en: "Important: increasing or very severe headache, repeated vomiting, seizures, unequal pupils, increasing drowsiness, confusion, weakness or sensory disturbance can indicate a serious brain injury and require an immediate emergency call (112). The person should be observed in the first 24 to 48 hours." } },
        { t: "sub", text: { de: "Behandlung", en: "Treatment" } },
        { t: "p", text: {
          de: "Im Vordergrund stehen körperliche und geistige Schonung in den ersten Tagen, danach ein gestufter, beschwerdeorientierter Wiederaufbau von Alltag, Schule oder Arbeit und Sport. Zu frühe volle Belastung verzögert die Erholung.",
          en: "The priority is physical and mental rest in the first days, then a graded, symptom-guided return to daily life, school or work and sport. Returning to full activity too early delays recovery." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Ruhe, ausreichender Schlaf, Flüssigkeitszufuhr und eine reizarme Umgebung unterstützen die Erholung. Anregende Substanzen und Alkohol werden gemieden; ergänzende Mittel sind ärztlich zu prüfen.",
          en: "Rest, adequate sleep, hydration and a low-stimulus environment support recovery. Stimulant substances and alcohol are avoided; complementary products should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Anhaltende Kopfschmerzen und Benommenheit werden traditionell Mustern wie Qi- und Blut-Stagnation zugeordnet. Akupunktur kann in der Erholungsphase begleitend eingesetzt werden und ersetzt die ärztliche Beobachtung nicht.",
          en: "Persistent headache and dazedness are traditionally assigned to patterns such as Qi and blood stagnation. Acupuncture may be used as complementary care during recovery and does not replace medical observation." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Ruhe, geregelte Routinen, eine leicht verdauliche Ernährung und Reizreduktion. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises rest, regular routines, an easily digestible diet and reduced stimulation. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Die Physiotherapie begleitet den gestuften Wiedereinstieg in Belastung und Sport. Bei anhaltendem Schwindel oder Gleichgewichtsstörungen helfen ein vestibuläres Training und gezielte Übungen; die Intensität wird beschwerdeorientiert gesteigert.",
          en: "Physiotherapy guides the graded return to activity and sport. For persistent dizziness or balance problems, vestibular training and targeted exercises help; intensity is increased in a symptom-guided way." } },
      ],
    },
  },

  {
    slug: "eye-foreign-body",
    icd10: "T15.0",
    illustration: "generic",
    title: { de: "Fremdkörper im Auge", en: "Foreign Body in the Eye" },
    summary: {
      de: "Partikel auf oder in der Augenoberfläche mit Fremdkörpergefühl, Tränen und Rötung.",
      en: "A particle on or in the eye surface, with a gritty feeling, watering and redness.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Ein Fremdkörper im Auge – etwa Staub, Sandkorn, Splitter oder Insekt – haftet meist auf der Bindehaut oder Hornhaut. Typisch sind ein Fremdkörper- oder Kratzgefühl, starkes Tränen, Rötung, Lichtempfindlichkeit und Blinzelzwang.",
          en: "A foreign body in the eye – such as dust, a grain of sand, a splinter or an insect – usually sits on the conjunctiva or cornea. Typical features are a gritty or scratching sensation, heavy watering, redness, light sensitivity and forced blinking." } },
      ],
      medical: [
        { t: "sub", text: { de: "Erstversorgung", en: "First aid" } },
        { t: "p", text: {
          de: "Nicht reiben. Lose Partikel lassen sich durch Blinzeln oder vorsichtiges Spülen mit sauberem Wasser oder Kochsalzlösung entfernen. Wichtig: Fest sitzende oder eingedrungene (penetrierende) Fremdkörper werden nicht selbst entfernt – das Auge wird locker abgedeckt und sofort augenärztlich oder notfallmäßig versorgt.",
          en: "Do not rub. Loose particles can be removed by blinking or by carefully rinsing with clean water or saline. Important: firmly lodged or penetrating foreign bodies are not removed yourself – the eye is loosely covered and treated immediately by an eye specialist or emergency care." } },
        { t: "p", text: {
          de: "Bei Verätzung durch Chemikalien wird das Auge sofort und ausgiebig mit Wasser gespült und umgehend ärztliche Hilfe gesucht. Eine penetrierende Augenverletzung ist ein Notfall (Notruf 112); der Giftnotruf kann bei Chemikalien zusätzlich beraten.",
          en: "For a chemical burn, the eye is rinsed immediately and copiously with water and medical help is sought at once. A penetrating eye injury is an emergency (call 112); the Poison Control Centre (Giftnotruf) can additionally advise for chemicals." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Naturheilkundliche Selbstbehandlung ist am Auge nicht angebracht. Nach fachgerechter Entfernung können befeuchtende Augentropfen (ärztlich abgestimmt) und Schonung das Reizgefühl lindern.",
          en: "Naturopathic self-treatment is not appropriate for the eye. After professional removal, lubricating eye drops (medically agreed) and rest can ease the irritation." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "TCM-Verfahren haben bei einem akuten Fremdkörper keinen Platz. Allenfalls dienen begleitende Maßnahmen später dem allgemeinen Wohlbefinden und ersetzen keine augenärztliche Versorgung.",
          en: "TCM approaches have no place with an acute foreign body. At most, accompanying measures later serve general wellbeing and do not replace ophthalmological care." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Augenspülungen oder -öle werden bei einem akuten Fremdkörper oder einer Verletzung nicht angewendet. Im Vordergrund steht die fachgerechte Versorgung; allgemeine Erholung unterstützt danach.",
          en: "Ayurvedic eye rinses or oils are not used with an acute foreign body or injury. Proper treatment comes first; general recovery provides support afterwards." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Die Physiotherapie spielt hier keine direkte Rolle. Sinnvoll sind ein guter Augenschutz bei Arbeiten mit Splitter- oder Staubgefahr und eine augenfreundliche Bildschirmergonomie nach Abklingen der Reizung.",
          en: "Physiotherapy plays no direct role here. Good eye protection during work with a risk of splinters or dust and eye-friendly screen ergonomics after the irritation settles are sensible." } },
      ],
    },
  },

  {
    slug: "foreign-body-in-ear",
    icd10: "T16",
    illustration: "generic",
    title: { de: "Fremdkörper im Ohr", en: "Foreign Body in the Ear" },
    summary: {
      de: "Gegenstand oder Insekt im Gehörgang, das fachgerecht entfernt werden sollte.",
      en: "An object or insect in the ear canal that should be removed professionally.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Ein Fremdkörper im Ohr betrifft den äußeren Gehörgang – etwa eine Perle, ein Wattestückchen, ein Samenkorn oder ein Insekt. Typisch sind Druck- oder Völlegefühl, vermindertes Hören, Geräusche oder – bei einem lebenden Insekt – ein unangenehmes Krabbeln oder Summen.",
          en: "A foreign body in the ear affects the outer ear canal – for example a bead, a piece of cotton wool, a seed or an insect. Typical features are a feeling of pressure or fullness, reduced hearing, noise or – with a live insect – an unpleasant crawling or buzzing." } },
      ],
      medical: [
        { t: "sub", text: { de: "Erstversorgung", en: "First aid" } },
        { t: "p", text: {
          de: "Wichtig: Nicht mit Wattestäbchen, Pinzette oder spitzen Gegenständen im Ohr stochern – das schiebt den Fremdkörper tiefer und kann Gehörgang oder Trommelfell verletzen. Ein loser Gegenstand kann sich manchmal durch Neigen des Kopfes lösen.",
          en: "Important: do not poke in the ear with cotton buds, tweezers or pointed objects – this pushes the foreign body deeper and can injure the ear canal or eardrum. A loose object can sometimes dislodge by tilting the head." } },
        { t: "p", text: {
          de: "Ein lebendes Insekt lässt sich beruhigen, indem lauwarmes Öl oder Wasser in den Gehörgang gegeben wird (nur bei intaktem Trommelfell). Die eigentliche Entfernung erfolgt fachgerecht, meist durch HNO. Schmerzen, Blutung oder Hörverlust erfordern eine rasche ärztliche Vorstellung.",
          en: "A live insect can be calmed by putting lukewarm oil or water into the ear canal (only with an intact eardrum). The actual removal is done professionally, usually by an ENT specialist. Pain, bleeding or hearing loss require prompt medical review." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Naturheilkundliche Selbstbehandlung ist nicht angebracht. Nach fachgerechter Entfernung unterstützen Ruhe und, bei Reizung, ärztlich abgestimmte Maßnahmen die Erholung des Gehörgangs.",
          en: "Naturopathic self-treatment is not appropriate. After professional removal, rest and, if there is irritation, medically agreed measures support recovery of the ear canal." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "TCM-Verfahren spielen bei einem akuten Fremdkörper im Ohr keine Rolle und ersetzen die fachgerechte Entfernung nicht.",
          en: "TCM approaches play no role with an acute foreign body in the ear and do not replace professional removal." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Ohranwendungen sind bei einem akuten Fremdkörper nicht geeignet. Im Vordergrund steht die fachgerechte Entfernung; allgemeine Erholung unterstützt danach.",
          en: "Ayurvedic ear applications are not suitable with an acute foreign body. Professional removal comes first; general recovery provides support afterwards." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Die Physiotherapie hat hier keine direkte Rolle. Allgemeine Maßnahmen für Wohlbefinden und – bei begleitendem Schwindel nach Ohrproblemen – ein Gleichgewichtstraining können in Einzelfällen sinnvoll sein.",
          en: "Physiotherapy has no direct role here. General measures for wellbeing and – with accompanying dizziness after ear problems – balance training can be sensible in individual cases." } },
      ],
    },
  },

  {
    slug: "first-and-second-degree-burns",
    icd10: "T30.0",
    illustration: "generic",
    title: { de: "Verbrennungen ersten und zweiten Grades", en: "First- and Second-Degree Burns" },
    summary: {
      de: "Oberflächliche Verbrennungen mit Rötung, Schmerz und Blasenbildung, richtig zu kühlen.",
      en: "Superficial burns with redness, pain and blistering that need correct cooling.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Verbrennungen ersten Grades betreffen nur die oberste Hautschicht (Rötung, Schmerz, keine Blasen). Beim zweiten Grad ist die Haut tiefer geschädigt, es bilden sich Blasen, und die Wunde ist sehr schmerzhaft. Ursachen sind Hitze, heiße Flüssigkeiten, Dampf, Reibung oder Strom.",
          en: "First-degree burns affect only the top skin layer (redness, pain, no blisters). In second-degree burns the skin is damaged more deeply, blisters form and the wound is very painful. Causes are heat, hot liquids, steam, friction or electricity." } },
      ],
      medical: [
        { t: "sub", text: { de: "Erstversorgung", en: "First aid" } },
        { t: "p", text: {
          de: "Die Verbrennung wird für etwa 10 bis 20 Minuten mit lauwarmem, fließendem Wasser gekühlt (nicht eiskalt, nicht bei großflächigen Verbrennungen wegen Unterkühlungsgefahr). Schmuck und nicht festklebende Kleidung werden entfernt, die Wunde locker und keimarm abgedeckt. Wichtig: Kein Eis, keine Butter, kein Öl, keine Hausmittel; Brandblasen werden nicht geöffnet.",
          en: "The burn is cooled for about 10 to 20 minutes with lukewarm running water (not ice-cold, and not for large-area burns because of the risk of hypothermia). Jewellery and non-stuck clothing are removed, and the wound is covered loosely and cleanly. Important: no ice, no butter, no oil, no home remedies; blisters are not opened." } },
        { t: "sub", text: { de: "Warnzeichen", en: "Warning signs" } },
        { t: "p", text: {
          de: "Wichtig: Großflächige (größer als die Handfläche), tiefe, zirkuläre oder chemische bzw. elektrische Verbrennungen sowie Verbrennungen im Gesicht, an Händen, Füßen, Genitalien oder mit Verdacht auf ein Inhalationstrauma erfordern sofort den Notruf 112. Der Tetanusschutz wird überprüft.",
          en: "Important: large-area (bigger than the palm), deep, circumferential, chemical or electrical burns, and burns to the face, hands, feet, genitals or with suspected airway involvement require an immediate emergency call (112). Tetanus protection is checked." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Bei leichten, kleinflächigen Verbrennungen können nach der Kühlung feuchtigkeitsspendende Pflege und Schonung helfen. Auf Hausmittel wie Zahnpasta, Mehl oder Öl wird verzichtet; pflanzliche Auflagen auf offene Wunden sind ärztlich zu prüfen.",
          en: "For mild, small-area burns, moisturising care and rest can help after cooling. Home remedies such as toothpaste, flour or oil are avoided; herbal applications on open wounds should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird die Verbrennung als Hitze-Schädigung verstanden. TCM-Verfahren kommen allenfalls in der Abheilungsphase begleitend und unter fachlicher Aufsicht infrage und ersetzen die richtige Erstversorgung nicht.",
          en: "Traditionally the burn is understood as heat damage. TCM approaches may at most be used during healing as complementary care under professional supervision and do not replace correct first aid." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont in der Abheilungsphase Kühlung, eine ausgewogene Ernährung und Hautpflege. Pflanzliche Auflagen auf frische oder offene Wunden werden gemieden; Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises cooling, a balanced diet and skin care during healing. Herbal applications on fresh or open wounds are avoided; herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Bei größeren oder über Gelenken gelegenen Verbrennungen ist die Physiotherapie wichtig, um Beweglichkeit zu erhalten und narbenbedingten Bewegungseinschränkungen (Kontrakturen) vorzubeugen. Narbenbehandlung, Dehnung und ein dosierter Aufbau begleiten die Heilung.",
          en: "For larger burns or burns over joints, physiotherapy is important to maintain mobility and prevent scar-related movement restrictions (contractures). Scar treatment, stretching and a dosed build-up accompany healing." } },
      ],
    },
  },

  {
    slug: "sunburn",
    icd10: "L55.9",
    illustration: "generic",
    title: { de: "Sonnenbrand", en: "Sunburn" },
    summary: {
      de: "UV-bedingte Hautverbrennung mit Rötung, Schmerz und manchmal Blasen.",
      en: "A UV-caused skin burn with redness, pain and sometimes blisters.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Sonnenbrand ist eine Verbrennung der Haut durch UV-Strahlung. Die Haut ist gerötet, heiß, gespannt und schmerzhaft; bei stärkerem Sonnenbrand bilden sich Blasen. Die Beschwerden treten oft erst Stunden nach dem Aufenthalt in der Sonne auf. Wiederholte Sonnenbrände erhöhen das Hautkrebsrisiko.",
          en: "Sunburn is a burn of the skin from UV radiation. The skin is reddened, hot, tight and painful; with more severe sunburn, blisters form. Symptoms often appear only hours after being in the sun. Repeated sunburn raises the risk of skin cancer." } },
      ],
      medical: [
        { t: "sub", text: { de: "Erstversorgung", en: "First aid" } },
        { t: "p", text: {
          de: "Hilfreich sind Schatten, kühlende Umschläge, reichliches Trinken, feuchtigkeitsspendende Pflege (z. B. mit Aloe vera) und bei Bedarf schmerzlindernde Mittel. Weitere Sonne wird gemieden; Blasen werden nicht geöffnet.",
          en: "Shade, cooling compresses, drinking plenty, moisturising care (e.g. with aloe vera) and pain relief when needed help. Further sun is avoided; blisters are not opened." } },
        { t: "p", text: {
          de: "Wichtig: Ausgedehnte Blasenbildung, Fieber, Schüttelfrost, Übelkeit oder Kreislaufbeschwerden – Zeichen einer Hitzeerkrankung – erfordern ärztliche Hilfe. Zur Vorbeugung dienen Sonnenschutzmittel, Kleidung und das Meiden der Mittagssonne.",
          en: "Important: extensive blistering, fever, chills, nausea or circulatory symptoms – signs of heat illness – require medical help. Prevention relies on sunscreen, clothing and avoiding the midday sun." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Kühlende, beruhigende Auflagen (z. B. kühle Umschläge, Aloe vera) und reichliches Trinken lindern die Beschwerden. Reizende Zusätze werden gemieden; pflanzliche Mittel auf der gereizten Haut sind ärztlich zu prüfen.",
          en: "Cooling, soothing applications (e.g. cool compresses, aloe vera) and drinking plenty ease symptoms. Irritating additives are avoided; herbal products on irritated skin should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird Sonnenbrand als Hitze in der Haut verstanden. Kühlende Ernährung und begleitende Maßnahmen können unterstützen; im Vordergrund stehen Kühlung, Flüssigkeit und Sonnenschutz.",
          en: "Traditionally sunburn is understood as heat in the skin. A cooling diet and accompanying measures can support recovery; cooling, fluids and sun protection come first." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont kühlende Anwendungen, reichliches Trinken und eine leichte, kühlende Ernährung. Pflanzliche Auflagen sind bei gereizter oder blasiger Haut ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises cooling applications, drinking plenty and a light, cooling diet. Herbal applications should be medically reviewed on irritated or blistered skin." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Die Physiotherapie hat beim Sonnenbrand nur eine unterstützende Rolle: schonende Bewegung nach Abklingen der Beschwerden und das Meiden von Überhitzung und direkter Sonne während des Trainings.",
          en: "Physiotherapy has only a supportive role in sunburn: gentle movement once symptoms have settled and avoiding overheating and direct sun during exercise." } },
      ],
    },
  },

  {
    slug: "frostbite",
    icd10: "T33.9",
    illustration: "generic",
    title: { de: "Erfrierung", en: "Frostbite" },
    summary: {
      de: "Kälteschädigung der Haut und tieferen Gewebe, meist an Fingern, Zehen, Ohren und Nase.",
      en: "Cold damage to the skin and deeper tissue, usually on fingers, toes, ears and nose.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei einer Erfrierung schädigt Kälte Haut und tiefer liegendes Gewebe, vor allem an Fingern, Zehen, Ohren, Nase und Wangen. Die Haut wird zunächst blass, kalt und taub; beim Wiedererwärmen treten Schmerzen, Rötung, Schwellung und bei tieferen Erfrierungen Blasen auf.",
          en: "In frostbite, cold damages the skin and deeper tissue, especially on fingers, toes, ears, nose and cheeks. The skin first becomes pale, cold and numb; on rewarming, pain, redness, swelling and, in deeper frostbite, blisters appear." } },
      ],
      medical: [
        { t: "sub", text: { de: "Erstversorgung", en: "First aid" } },
        { t: "p", text: {
          de: "Die betroffene Person kommt an einen warmen Ort; nasse und einengende Kleidung wird entfernt. Erfrorene Stellen werden vorsichtig in körperwarmem Wasser (etwa 37 bis 39 Grad) aufgewärmt. Wichtig: Nicht mit Schnee reiben, nicht mit direkter, starker Hitze auftauen und nicht wieder gefrieren lassen – auf erfrorenen Füßen sollte nicht gegangen werden, wenn ein erneutes Einfrieren droht.",
          en: "The person is brought to a warm place; wet and constricting clothing is removed. Frostbitten areas are gently rewarmed in body-temperature water (about 37 to 39 degrees). Important: do not rub with snow, do not thaw with direct, strong heat and do not allow refreezing – frostbitten feet should not be walked on if refreezing is likely." } },
        { t: "p", text: {
          de: "Tiefe oder großflächige Erfrierungen, Blasen und anhaltende Taubheit werden ärztlich versorgt; bei schwerer Kälteschädigung mit Allgemeinsymptomen oder begleitender Unterkühlung ist der Notruf 112 zu wählen.",
          en: "Deep or large-area frostbite, blisters and persistent numbness are treated medically; for severe cold injury with general symptoms or accompanying hypothermia, call the emergency number (112)." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Sanftes Wiedererwärmen, warme (nicht heiße) Getränke und Schutz vor erneuter Kälte unterstützen die Erholung. Reiben, Alkohol und Nikotin verschlechtern die Durchblutung und werden gemieden.",
          en: "Gentle rewarming, warm (not hot) drinks and protection from further cold support recovery. Rubbing, alcohol and nicotine worsen circulation and are avoided." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird die Erfrierung als Kälte mit Blut-Stagnation verstanden. Wärmende Ernährung und begleitende Verfahren können in der Erholungsphase unterstützen und ersetzen die richtige Erstversorgung nicht.",
          en: "Traditionally frostbite is understood as cold with blood stagnation. A warming diet and accompanying methods can support recovery and do not replace correct first aid." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont in der Erholungsphase wärmende Anwendungen, eine nährende Ernährung und Schutz vor Kälte. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises warming applications, nourishing nutrition and protection from cold during recovery. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Nach der Abheilung hilft die Physiotherapie, Beweglichkeit und Funktion der betroffenen Finger oder Zehen wiederzugewinnen. Sanfte Bewegungsübungen und Maßnahmen zur Durchblutungsförderung begleiten die Erholung; die Empfindlichkeit für Kälte kann länger bestehen bleiben.",
          en: "After healing, physiotherapy helps to regain the mobility and function of the affected fingers or toes. Gentle movement exercises and measures to promote circulation accompany recovery; cold sensitivity can persist for longer." } },
      ],
    },
  },

  {
    slug: "insect-bites-and-stings",
    icd10: "T14.0",
    illustration: "generic",
    title: { de: "Insektenstiche und -bisse", en: "Insect Bites and Stings" },
    summary: {
      de: "Meist harmlose lokale Reaktionen – aber Wachsamkeit bei allergischen Notfällen.",
      en: "Usually harmless local reactions – but vigilance for allergic emergencies.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Insektenstiche und -bisse (z. B. durch Mücken, Bienen, Wespen, Bremsen oder Zecken) lösen meist eine örtliche Reaktion aus: Rötung, Quaddel, Schwellung, Juckreiz und Schmerz. Bei den meisten Menschen bleibt es harmlos; entscheidend ist, allergische Notfälle rechtzeitig zu erkennen.",
          en: "Insect bites and stings (e.g. from mosquitoes, bees, wasps, horseflies or ticks) usually cause a local reaction: redness, a weal, swelling, itching and pain. In most people it stays harmless; recognising allergic emergencies in time is key." } },
      ],
      medical: [
        { t: "sub", text: { de: "Erstversorgung", en: "First aid" } },
        { t: "p", text: {
          de: "Ein Bienenstachel wird vorsichtig herausgeschabt (nicht gequetscht). Kühlen lindert Schwellung und Juckreiz; bei Bedarf helfen juckreizstillende oder antiallergische Mittel. Zecken werden möglichst rasch und vollständig mit einer Pinzette oder Zeckenkarte entfernt.",
          en: "A bee sting is scraped out carefully (not squeezed). Cooling eases swelling and itching; antihistamine or anti-itch products help when needed. Ticks are removed as quickly and completely as possible with tweezers or a tick card." } },
        { t: "sub", text: { de: "Warnzeichen", en: "Warning signs" } },
        { t: "p", text: {
          de: "Wichtig: Schwellung von Lippen, Zunge oder Rachen, Atemnot, Hautausschlag am ganzen Körper, Schwindel oder Kreislaufschwäche können auf eine lebensbedrohliche allergische Reaktion (Anaphylaxie) hindeuten und erfordern sofort den Notruf 112 – ein vorhandener Adrenalin-Autoinjektor wird angewendet. Auch Stiche im Mund- oder Rachenraum sind gefährlich.",
          en: "Important: swelling of the lips, tongue or throat, difficulty breathing, a whole-body rash, dizziness or circulatory weakness can indicate a life-threatening allergic reaction (anaphylaxis) and require an immediate emergency call (112) – an available adrenaline auto-injector is used. Stings in the mouth or throat are also dangerous." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Kühlen und beruhigende äußere Anwendungen lindern die örtliche Reaktion. Kratzen wird vermieden, um eine Infektion zu verhindern; pflanzliche Mittel sind ärztlich zu prüfen.",
          en: "Cooling and soothing external applications ease the local reaction. Scratching is avoided to prevent infection; herbal products should be medically reviewed." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Die örtliche Reaktion wird traditionell als Hitze und Wind in der Haut verstanden. Begleitende Maßnahmen zielen auf Juckreiz und Schwellung und ersetzen bei einer allergischen Reaktion die Notfallversorgung nicht.",
          en: "The local reaction is traditionally understood as heat and wind in the skin. Accompanying measures aim at itching and swelling and do not replace emergency care in an allergic reaction." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung setzt auf kühlende Auflagen und eine beruhigende Hautpflege. Bei allergischer Reaktion steht die Notfallversorgung im Vordergrund; Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support relies on cooling applications and soothing skin care. In an allergic reaction, emergency care comes first; herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Die Physiotherapie spielt hier keine direkte Rolle. Nach abgeklungener Reaktion sind normale Bewegung und Alltag ohne Einschränkung möglich.",
          en: "Physiotherapy plays no direct role here. Once the reaction has settled, normal movement and daily life are possible without restriction." } },
      ],
    },
  },

  {
    slug: "heat-exhaustion",
    icd10: "T67.5",
    illustration: "generic",
    title: { de: "Hitzeerschöpfung", en: "Heat Exhaustion" },
    summary: {
      de: "Schwäche, Schwindel und Übelkeit durch Hitze und Flüssigkeitsmangel – Vorstufe des Hitzschlags.",
      en: "Weakness, dizziness and nausea from heat and fluid loss – a precursor to heat stroke.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Hitzeerschöpfung entsteht bei Hitze durch starken Flüssigkeits- und Salzverlust, etwa beim Schwitzen. Typisch sind Schwäche, Schwindel, Kopfschmerz, Übelkeit, blasse, feuchte Haut, schneller Puls und Durst. Die Körpertemperatur ist nur mäßig erhöht; ohne Gegenmaßnahmen kann sie in einen gefährlichen Hitzschlag übergehen.",
          en: "Heat exhaustion arises in the heat from heavy loss of fluid and salt, for example through sweating. Typical features are weakness, dizziness, headache, nausea, pale, moist skin, a fast pulse and thirst. Body temperature is only moderately raised; without countermeasures it can progress to a dangerous heat stroke." } },
      ],
      medical: [
        { t: "sub", text: { de: "Erstversorgung", en: "First aid" } },
        { t: "p", text: {
          de: "Die betroffene Person kommt an einen kühlen, schattigen Ort und ruht, am besten mit leicht erhöhten Beinen. Überflüssige Kleidung wird gelockert, die Haut gekühlt, und in kleinen Schlucken werden Flüssigkeit und Elektrolyte zugeführt (sofern die Person wach ist und schlucken kann).",
          en: "The person is moved to a cool, shaded place and rests, ideally with the legs slightly raised. Excess clothing is loosened, the skin is cooled, and fluid and electrolytes are given in small sips (provided the person is awake and able to swallow)." } },
        { t: "p", text: {
          de: "Wichtig: Bessern sich die Beschwerden nicht rasch oder kommen Verwirrtheit, hohes Fieber oder Bewusstseinsstörungen hinzu, droht ein Hitzschlag – dann sofort den Notruf 112 wählen.",
          en: "Important: if symptoms do not improve quickly or confusion, high fever or impaired consciousness develops, heat stroke is imminent – then call the emergency number (112) at once." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Kühlung, Ruhe im Schatten und ein Ausgleich von Flüssigkeit und Mineralstoffen stehen im Vordergrund. Zur Vorbeugung helfen ausreichendes Trinken, leichte Kleidung und das Meiden der stärksten Hitze.",
          en: "Cooling, rest in the shade and replacing fluids and minerals come first. Prevention relies on drinking enough, light clothing and avoiding the strongest heat." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird die Hitzeerschöpfung als Schädigung von Qi und Körperflüssigkeiten durch Sommerhitze verstanden. Begleitende Maßnahmen zielen auf Kühlung und Erholung und ersetzen die Erstversorgung nicht.",
          en: "Traditionally heat exhaustion is understood as damage to Qi and body fluids by summer heat. Accompanying measures aim at cooling and recovery and do not replace first aid." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont kühlende Getränke, eine leichte Ernährung und Ruhe an einem kühlen Ort. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises cooling drinks, a light diet and rest in a cool place. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Nach der Erholung unterstützt die Physiotherapie mit einem behutsamen Wiedereinstieg in Belastung, angepasster Trinkstrategie und schrittweiser Hitzeanpassung (Akklimatisierung), um erneuten Episoden vorzubeugen.",
          en: "After recovery, physiotherapy supports a careful return to activity, an adapted drinking strategy and a gradual heat adaptation (acclimatisation) to prevent further episodes." } },
      ],
    },
  },

  {
    slug: "heat-stroke",
    icd10: "T67.0",
    illustration: "generic",
    title: { de: "Hitzschlag", en: "Heat Stroke" },
    summary: {
      de: "Lebensbedrohlicher Notfall mit stark erhöhter Körpertemperatur und Bewusstseinsstörung.",
      en: "A life-threatening emergency with a strongly raised body temperature and impaired consciousness.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Der Hitzschlag ist ein lebensbedrohlicher Notfall: Der Körper kann seine Temperatur nicht mehr regulieren, die Kerntemperatur steigt stark an (häufig über 40 Grad). Typisch sind heiße, oft trockene Haut, Verwirrtheit, Unruhe, Krampfanfälle oder Bewusstlosigkeit.",
          en: "Heat stroke is a life-threatening emergency: the body can no longer regulate its temperature, and the core temperature rises sharply (often above 40 degrees). Typical features are hot, often dry skin, confusion, restlessness, seizures or loss of consciousness." } },
      ],
      medical: [
        { t: "sub", text: { de: "Notfallmaßnahmen", en: "Emergency measures" } },
        { t: "p", text: {
          de: "Wichtig: Sofort den Notruf 112 wählen. Bis zum Eintreffen der Rettung wird die betroffene Person in den Schatten oder einen kühlen Raum gebracht, Kleidung geöffnet und der Körper aktiv gekühlt (kühles Wasser, feuchte Tücher, Fächeln, Kühlpacks an Hals, Achseln und Leisten).",
          en: "Important: call the emergency number (112) immediately. Until help arrives, the person is moved into shade or a cool room, clothing is opened and the body is actively cooled (cool water, wet cloths, fanning, cold packs to the neck, armpits and groin)." } },
        { t: "p", text: {
          de: "Einer bewusstlosen Person wird nichts eingeflößt; sie wird in die stabile Seitenlage gebracht und die Atmung überwacht. Der Hitzschlag muss immer im Krankenhaus behandelt werden.",
          en: "Nothing is given by mouth to an unconscious person; they are placed in the recovery position and breathing is monitored. Heat stroke must always be treated in hospital." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Naturheilkundliche Verfahren haben im akuten Hitzschlag keinen Platz – es zählt ausschließlich die rasche Kühlung und der Notruf. Vorbeugend helfen ausreichendes Trinken, Hitzeschutz und das Meiden von Anstrengung in großer Hitze.",
          en: "Naturopathic methods have no place in acute heat stroke – only rapid cooling and the emergency call count. For prevention, drinking enough, heat protection and avoiding exertion in great heat help." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird der Hitzschlag als schwere Sommerhitze-Schädigung verstanden. TCM-Verfahren kommen allenfalls in der Erholungsphase begleitend infrage und ersetzen die Notfallbehandlung nicht.",
          en: "Traditionally heat stroke is understood as severe summer-heat damage. TCM approaches may at most be used as complementary care during recovery and do not replace emergency treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung beschränkt sich auf die Erholungsphase mit kühlenden Getränken, leichter Ernährung und Ruhe. Im Akutfall zählt allein die Notfallversorgung.",
          en: "Ayurvedic support is limited to the recovery phase with cooling drinks, a light diet and rest. In the acute situation only emergency care counts." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Nach der ärztlichen Behandlung unterstützt die Physiotherapie die Erholung mit einem sehr behutsamen, schrittweisen Wiederaufbau der Belastbarkeit und einer angepassten Hitzeanpassung, um Rückfälle zu vermeiden.",
          en: "After medical treatment, physiotherapy supports recovery with a very careful, stepwise rebuilding of capacity and an adapted heat acclimatisation to avoid recurrence." } },
      ],
    },
  },

  {
    slug: "hypothermia",
    icd10: "T68",
    illustration: "generic",
    title: { de: "Unterkühlung (Hypothermie)", en: "Hypothermia" },
    summary: {
      de: "Absinken der Körperkerntemperatur mit Zittern, Verwirrtheit und Schläfrigkeit.",
      en: "A drop in core body temperature with shivering, confusion and drowsiness.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der Unterkühlung sinkt die Körperkerntemperatur unter den Normalbereich, etwa durch Kälte, Nässe, Wind oder langes Verweilen im kalten Wasser. Zunächst treten Zittern, kalte, blasse Haut und Frösteln auf; bei stärkerer Unterkühlung folgen Verwirrtheit, Schläfrigkeit, verlangsamte Bewegungen und schließlich Bewusstlosigkeit.",
          en: "In hypothermia the core body temperature falls below the normal range, for example through cold, wet, wind or prolonged time in cold water. At first there is shivering, cold, pale skin and feeling chilled; with more severe hypothermia, confusion, drowsiness, slowed movements and finally loss of consciousness follow." } },
      ],
      medical: [
        { t: "sub", text: { de: "Erstversorgung", en: "First aid" } },
        { t: "p", text: {
          de: "Die betroffene Person kommt an einen warmen, windgeschützten Ort; nasse Kleidung wird entfernt und der Körper mit Decken und trockener Kleidung isoliert. Eine wache, schluckfähige Person kann warme, gesüßte (alkoholfreie) Getränke erhalten. Wichtig: Nicht reiben, ruckartige Bewegungen vermeiden.",
          en: "The person is brought to a warm, wind-protected place; wet clothing is removed and the body is insulated with blankets and dry clothing. An awake person able to swallow can be given warm, sweetened (non-alcoholic) drinks. Important: do not rub, and avoid jerky movements." } },
        { t: "p", text: {
          de: "Wichtig: Bei schwerer Unterkühlung (kein Zittern mehr, Verwirrtheit, Bewusstseinsstörung) sofort den Notruf 112 wählen. Die Person wird sehr behutsam bewegt, da das kalte Herz empfindlich auf Erschütterungen reagiert; bei fehlender Atmung wird mit der Wiederbelebung begonnen.",
          en: "Important: for severe hypothermia (no more shivering, confusion, impaired consciousness) call the emergency number (112) at once. The person is moved very gently, as the cold heart is sensitive to jolts; if breathing is absent, resuscitation is started." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Im Vordergrund stehen schonendes, allmähliches Wärmen und der Schutz vor weiterer Auskühlung. Warme Getränke helfen nur bei wacher Person; Alkohol wird gemieden, da er die Auskühlung verstärkt.",
          en: "Gentle, gradual warming and protection from further cooling come first. Warm drinks help only for an awake person; alcohol is avoided, as it worsens heat loss." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird die Unterkühlung als Eindringen von Kälte mit Yang-Schwäche verstanden. Wärmende Verfahren können in der Erholungsphase begleitend unterstützen und ersetzen die Erstversorgung nicht.",
          en: "Traditionally hypothermia is understood as invasion of cold with Yang weakness. Warming methods can support recovery as complementary care and do not replace first aid." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont in der Erholungsphase wärmende Anwendungen, eine nährende, warme Ernährung und Schutz vor Kälte. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises warming applications, nourishing warm nutrition and protection from cold during recovery. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Nach der Erholung hilft die Physiotherapie mit einem behutsamen, schrittweisen Wiederaufbau von Kraft und Ausdauer. Der Schutz vor Kälte und eine angepasste Belastung stehen dabei im Vordergrund.",
          en: "After recovery, physiotherapy helps with a careful, stepwise rebuilding of strength and endurance. Protection from cold and adapted loading are the priority here." } },
      ],
    },
  },

  {
    slug: "dehydration",
    icd10: "E86.0",
    illustration: "generic",
    title: { de: "Austrocknung (Dehydratation)", en: "Dehydration" },
    summary: {
      de: "Flüssigkeitsmangel mit Durst, dunklem Urin, Schwäche und Schwindel.",
      en: "Fluid deficit with thirst, dark urine, weakness and dizziness.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der Dehydratation verliert der Körper mehr Flüssigkeit, als er aufnimmt – etwa durch Hitze, starkes Schwitzen, Fieber, Erbrechen oder Durchfall. Typisch sind Durst, trockener Mund, dunkler und wenig Urin, Müdigkeit, Kopfschmerz und Schwindel. Besonders gefährdet sind Kinder und ältere Menschen.",
          en: "In dehydration the body loses more fluid than it takes in – for example through heat, heavy sweating, fever, vomiting or diarrhoea. Typical features are thirst, a dry mouth, dark and scant urine, fatigue, headache and dizziness. Children and older people are especially at risk." } },
      ],
      medical: [
        { t: "sub", text: { de: "Erstversorgung", en: "First aid" } },
        { t: "p", text: {
          de: "Leichte Austrocknung wird durch schluckweises Trinken ausgeglichen, am besten mit einer Elektrolytlösung (orale Rehydratationslösung), um auch Salze zu ersetzen. Bei Hitze helfen Ruhe im Kühlen und leichte Kost.",
          en: "Mild dehydration is corrected by drinking in sips, ideally with an electrolyte solution (oral rehydration solution) to replace salts as well. In the heat, rest in a cool place and light food help." } },
        { t: "p", text: {
          de: "Wichtig: Zeichen einer schweren Austrocknung – anhaltendes Erbrechen, fehlende Urinausscheidung, Verwirrtheit, sehr schneller Puls, eingesunkene Augen oder Teilnahmslosigkeit (besonders bei Kindern und älteren Menschen) – erfordern rasche ärztliche Hilfe, ggf. eine Infusion.",
          en: "Important: signs of severe dehydration – persistent vomiting, absent urine output, confusion, a very fast pulse, sunken eyes or apathy (especially in children and older people) – require prompt medical help, possibly an intravenous infusion." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Regelmäßiges Trinken über den Tag, mineralstoffreiche Getränke und wasserreiche Lebensmittel unterstützen den Flüssigkeitshaushalt. Bei Durchfall oder Erbrechen wird gezielt Flüssigkeit mit Elektrolyten ersetzt.",
          en: "Regular drinking through the day, mineral-rich drinks and water-rich foods support fluid balance. With diarrhoea or vomiting, fluid with electrolytes is specifically replaced." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird die Austrocknung als Mangel an Körperflüssigkeiten (Yin) verstanden. Befeuchtende Ernährung und begleitende Maßnahmen können unterstützen; im Vordergrund steht der Flüssigkeitsausgleich.",
          en: "Traditionally dehydration is understood as a deficit of body fluids (Yin). A moistening diet and accompanying measures can help; replacing fluids comes first." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont regelmäßiges Trinken, kühlende bzw. mineralstoffhaltige Getränke und eine leichte Ernährung. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises regular drinking, cooling or mineral-containing drinks and a light diet. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Nach der Erholung unterstützt die Physiotherapie mit einem behutsamen Wiedereinstieg in Belastung und einer sinnvollen Trinkstrategie bei Sport und Hitze, um erneutem Flüssigkeitsmangel vorzubeugen.",
          en: "After recovery, physiotherapy supports a careful return to activity and a sensible drinking strategy during sport and heat to prevent renewed fluid loss." } },
      ],
    },
  },

  {
    slug: "food-poisoning",
    icd10: "T62.2",
    illustration: "generic",
    title: { de: "Lebensmittelvergiftung", en: "Food Poisoning" },
    summary: {
      de: "Magen-Darm-Beschwerden durch verdorbene oder giftige Lebensmittel, meist selbstlimitierend.",
      en: "Gastrointestinal illness from spoiled or toxic food, usually self-limiting.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Die Lebensmittelvergiftung entsteht durch den Verzehr von Speisen, die mit Keimen, deren Giftstoffen oder natürlichen Giften (z. B. giftigen Pilzen) belastet sind. Typisch sind Übelkeit, Erbrechen, Durchfall und Bauchkrämpfe, oft wenige Stunden nach dem Essen. Die meisten Fälle klingen von selbst ab.",
          en: "Food poisoning arises from eating food contaminated with germs, their toxins or natural poisons (e.g. toxic mushrooms). Typical features are nausea, vomiting, diarrhoea and abdominal cramps, often a few hours after eating. Most cases settle on their own." } },
      ],
      medical: [
        { t: "sub", text: { de: "Erstversorgung", en: "First aid" } },
        { t: "p", text: {
          de: "Im Vordergrund steht der Ausgleich von Flüssigkeit und Salzen (orale Rehydratationslösung, schluckweises Trinken) sowie Ruhe und leichte Kost nach Verträglichkeit. Wichtig: Kein Erbrechen künstlich auslösen.",
          en: "The priority is replacing fluid and salts (oral rehydration solution, drinking in sips), plus rest and light food as tolerated. Important: do not induce vomiting artificially." } },
        { t: "sub", text: { de: "Warnzeichen", en: "Warning signs" } },
        { t: "p", text: {
          de: "Wichtig: Hohes Fieber, blutiger Durchfall, anhaltendes Erbrechen, Zeichen schwerer Austrocknung, neurologische Symptome (z. B. Doppeltsehen, Sprech- oder Schluckstörung – Verdacht auf Botulismus) oder ein Verdacht auf Pilzvergiftung erfordern rasche ärztliche Hilfe. Bei bekannter oder vermuteter Giftaufnahme berät der Giftnotruf rund um die Uhr; im Notfall gilt der Notruf 112.",
          en: "Important: high fever, bloody diarrhoea, persistent vomiting, signs of severe dehydration, neurological symptoms (e.g. double vision, difficulty speaking or swallowing – suspected botulism) or suspected mushroom poisoning require prompt medical help. For known or suspected ingestion of a poison, the Poison Control Centre (Giftnotruf) advises around the clock; in an emergency the emergency number (112) applies." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Ruhe, reichlich Flüssigkeit mit Elektrolyten und ein langsamer Kostaufbau (z. B. Zwieback, Reis, klare Brühe) unterstützen die Erholung. Stopfende Mittel werden bei Durchfall zurückhaltend und nur ärztlich abgestimmt eingesetzt.",
          en: "Rest, plenty of fluid with electrolytes and a slow reintroduction of food (e.g. rusks, rice, clear broth) support recovery. Anti-diarrhoeal medicines are used sparingly and only in a medically agreed way." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird die Lebensmittelvergiftung als Störung von Milz und Magen durch Nahrungsgifte oder Feuchtigkeit-Hitze verstanden. Begleitende Ernährungsempfehlungen können in der Erholung unterstützen und ersetzen bei schwerem Verlauf die ärztliche Hilfe nicht.",
          en: "Traditionally food poisoning is understood as a disturbance of Spleen and Stomach by food toxins or damp-heat. Accompanying dietary advice can help during recovery and does not replace medical help in a severe course." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung betont Ruhe für die Verdauung, warme, leicht verdauliche Kost und ausreichend Flüssigkeit. Kräuterpräparate sind ärztlich zu prüfen.",
          en: "Ayurvedic support emphasises rest for digestion, warm, easily digestible food and adequate fluids. Herbal preparations should be medically reviewed." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Die Physiotherapie hat hier nur eine unterstützende Rolle: nach einer länger anhaltenden oder schweren Erkrankung ein behutsamer Wiederaufbau von Kraft und Ausdauer, um die Erschöpfung zu überwinden.",
          en: "Physiotherapy has only a supportive role here: after a prolonged or severe illness, a careful rebuilding of strength and endurance to overcome the fatigue." } },
      ],
    },
  },

  {
    slug: "alcohol-intoxication",
    icd10: "T51.0",
    illustration: "generic",
    title: { de: "Alkoholvergiftung", en: "Alcohol Intoxication" },
    summary: {
      de: "Akute Alkoholvergiftung mit Koordinationsverlust, Erbrechen und drohender Bewusstlosigkeit.",
      en: "Acute alcohol poisoning with loss of coordination, vomiting and threatened unconsciousness.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Bei der akuten Alkoholvergiftung führt eine zu große Alkoholmenge zu einer Vergiftung des Körpers. Typisch sind gestörte Koordination, verwaschene Sprache, Erbrechen, Schläfrigkeit und, bei schwerem Verlauf, Bewusstlosigkeit, Unterkühlung und eine gefährlich verlangsamte Atmung.",
          en: "In acute alcohol intoxication, too large an amount of alcohol poisons the body. Typical features are impaired coordination, slurred speech, vomiting, drowsiness and, in a severe course, loss of consciousness, hypothermia and a dangerously slowed breathing." } },
      ],
      medical: [
        { t: "sub", text: { de: "Erstversorgung", en: "First aid" } },
        { t: "p", text: {
          de: "Die betroffene Person wird nicht allein gelassen, warm gehalten und ihre Atmung überwacht. Eine schläfrige oder erbrechende Person wird in die stabile Seitenlage gebracht, um ein Ersticken am Erbrochenen zu verhindern. Wichtig: Kein Erbrechen erzwingen, keinen Kaffee oder weiteren Alkohol geben.",
          en: "The person is not left alone, is kept warm and their breathing is monitored. A drowsy or vomiting person is placed in the recovery position to prevent choking on vomit. Important: do not force vomiting, and do not give coffee or more alcohol." } },
        { t: "p", text: {
          de: "Wichtig: Bewusstlosigkeit oder schwere Weckbarkeit, langsame oder unregelmäßige Atmung, Krampfanfälle, Unterkühlung oder blaue Lippen erfordern sofort den Notruf 112. Bei Mischkonsum oder Vergiftungsverdacht berät zusätzlich der Giftnotruf.",
          en: "Important: loss of consciousness or being hard to rouse, slow or irregular breathing, seizures, hypothermia or blue lips require an immediate emergency call (112). With mixed substance use or suspected poisoning, the Poison Control Centre (Giftnotruf) also advises." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "In der Erholungsphase helfen Ruhe, Wärme und schluckweises Trinken von Wasser. Hausmittel gegen den Rausch sind wirkungslos; bei wiederholten Ereignissen ist eine ärztliche Beratung zum Alkoholkonsum sinnvoll.",
          en: "During recovery, rest, warmth and drinking water in sips help. Home remedies against intoxication are ineffective; for repeated events, medical advice on alcohol use is sensible." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "Traditionell wird der Rausch als Feuchtigkeit-Hitze mit Belastung von Leber und Magen verstanden. TCM-Verfahren kommen allenfalls begleitend zur Erholung oder bei der Suchtbehandlung infrage und ersetzen im Notfall die Notfallversorgung nicht.",
          en: "Traditionally intoxication is understood as damp-heat with a burden on the Liver and Stomach. TCM approaches may at most be used as complementary care during recovery or in addiction treatment and do not replace emergency care in an emergency." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung beschränkt sich auf die Erholungsphase mit Ruhe, leichter Kost und ausreichend Flüssigkeit. Im Akutfall zählt allein die Notfallversorgung.",
          en: "Ayurvedic support is limited to the recovery phase with rest, light food and adequate fluids. In the acute situation only emergency care counts." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Die Physiotherapie hat hier keine direkte Rolle im Akutfall. Bei wiederholtem, schädlichem Konsum kann ein aktives Bewegungsprogramm Teil eines umfassenden Unterstützungskonzepts sein.",
          en: "Physiotherapy has no direct role in the acute situation here. With repeated, harmful use, an active exercise programme can be part of a comprehensive support concept." } },
      ],
    },
  },

  {
    slug: "carbon-monoxide-poisoning",
    icd10: "T58",
    illustration: "generic",
    title: { de: "Kohlenmonoxidvergiftung", en: "Carbon Monoxide Poisoning" },
    summary: {
      de: "Vergiftung durch das geruchlose Gas Kohlenmonoxid – ein lebensbedrohlicher Notfall.",
      en: "Poisoning by the odourless gas carbon monoxide – a life-threatening emergency.",
    },
    rich: {
      definition: [
        { t: "p", text: {
          de: "Kohlenmonoxid (CO) ist ein farb- und geruchloses Gas, das bei unvollständiger Verbrennung entsteht – etwa an defekten Heizungen, Öfen, Grills oder Motoren. Es bindet an den roten Blutfarbstoff und verhindert den Sauerstofftransport. Typisch sind Kopfschmerz, Schwindel, Übelkeit, Verwirrtheit und Schläfrigkeit; die Gefahr wird oft zu spät bemerkt.",
          en: "Carbon monoxide (CO) is a colourless, odourless gas produced by incomplete combustion – for example from faulty heaters, stoves, grills or engines. It binds to the red blood pigment and prevents oxygen transport. Typical features are headache, dizziness, nausea, confusion and drowsiness; the danger is often noticed too late." } },
      ],
      medical: [
        { t: "sub", text: { de: "Notfallmaßnahmen", en: "Emergency measures" } },
        { t: "p", text: {
          de: "Wichtig: Sofort an die frische Luft gehen oder die betroffene Person ins Freie bringen und umgehend den Notruf 112 wählen. Eigenschutz beachten – belastete Räume nicht ohne Gefahr betreten. Die Behandlung erfolgt mit Sauerstoff, in schweren Fällen in einer Überdruckkammer.",
          en: "Important: get into fresh air immediately or bring the person outside, and call the emergency number (112) at once. Mind your own safety – do not enter contaminated rooms if it is dangerous. Treatment is with oxygen, and in severe cases in a pressure chamber." } },
        { t: "p", text: {
          de: "Bei Bewusstlosigkeit wird die Atmung überwacht und die Person in die stabile Seitenlage gebracht; bei Atemstillstand wird mit der Wiederbelebung begonnen. Zur Beratung steht zusätzlich der Giftnotruf zur Verfügung. Vorbeugend helfen gewartete Geräte und CO-Melder.",
          en: "If the person is unconscious, breathing is monitored and they are placed in the recovery position; if breathing stops, resuscitation is started. The Poison Control Centre (Giftnotruf) is additionally available for advice. Maintained appliances and CO detectors help with prevention." } },
      ],
      naturopathic: [
        { t: "p", text: {
          de: "Naturheilkundliche Verfahren haben in der akuten Vergiftung keinen Platz – es zählen ausschließlich frische Luft, Sauerstoff und der Notruf. Vorbeugung durch sichere Geräte und Melder ist entscheidend.",
          en: "Naturopathic methods have no place in acute poisoning – only fresh air, oxygen and the emergency call count. Prevention through safe appliances and detectors is decisive." } },
      ],
      tcm: [
        { t: "p", text: {
          de: "TCM-Verfahren sind im Akutfall nicht geeignet. Allenfalls können sie in der Erholungsphase begleitend das allgemeine Wohlbefinden unterstützen und ersetzen die Notfallbehandlung nicht.",
          en: "TCM approaches are not suitable in the acute situation. At most they may support general wellbeing as complementary care during recovery and do not replace emergency treatment." } },
      ],
      ayurvedic: [
        { t: "p", text: {
          de: "Ayurvedische Begleitung beschränkt sich auf die Erholungsphase mit Ruhe, nährender Ernährung und geregelten Routinen. Im Akutfall zählt allein die Notfallversorgung.",
          en: "Ayurvedic support is limited to the recovery phase with rest, nourishing nutrition and regular routines. In the acute situation only emergency care counts." } },
      ],
      physio: [
        { t: "p", text: {
          de: "Nach der Behandlung unterstützt die Physiotherapie die Erholung: Bei anhaltender Erschöpfung oder Konzentrations- und Belastungsproblemen helfen ein schrittweiser Wiederaufbau von Ausdauer und Kraft sowie ein angepasstes Aktivitätsmanagement.",
          en: "After treatment, physiotherapy supports recovery: for persistent fatigue or problems with concentration and exertion, a stepwise rebuilding of endurance and strength and adapted activity management help." } },
      ],
    },
  },
]
