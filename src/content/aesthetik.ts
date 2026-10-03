import type { Loc } from "@/lib/i18n"
import type { Block } from "@/content/treatments"

/**
 * Aesthetic-medicine treatments (Botox, laser, cosmetic). Mirrors the
 * drdosthealth.com aesthetic pages' structure (Definition → Effect → Treatment
 * with procedure steps → FAQs) in bilingual, block-structured form. Wording is
 * original; reviewed by Dr. Dost before use.
 */
export interface AestheticFaq {
  q: Loc
  a: Loc
}

export interface AestheticTreatment {
  slug: string
  title: Loc
  summary: Loc
  definition: Block[]
  effect: Block[]
  treatment: Block[]
  faq: AestheticFaq[]
}

export const aestheticTreatments: AestheticTreatment[] = [
  {
    slug: "botox",
    title: { de: "Botox / Faltenbehandlung", en: "Botox / Wrinkle Treatment" },
    summary: {
      de: "Sanfte Glättung von Mimikfalten mit präzise dosiertem Botulinumtoxin – für ein frisches, natürliches Aussehen.",
      en: "Gentle smoothing of expression lines with precisely dosed botulinum toxin – for a fresh, natural look.",
    },
    definition: [
      { t: "img", src: "aesthetik/botox/definition.jpg", alt: { de: "Botox-Behandlung – vorher und nachher", en: "Botox treatment – before and after" } },
      { t: "p", text: {
        de: "Botox ist der gebräuchliche Name für Botulinumtoxin, einen gereinigten Eiweißstoff, der die Signalübertragung zwischen Nerv und Muskel vorübergehend abschwächt. In sehr geringen, genau dosierten Mengen in bestimmte Mimikmuskeln gespritzt, entspannt es diese gezielt – die darüberliegende Haut glättet sich.",
        en: "Botox is the common name for botulinum toxin, a purified protein that temporarily reduces signal transmission between nerve and muscle. Injected in very small, precisely dosed amounts into specific facial muscles, it relaxes them selectively – and the skin above smooths out." } },
      { t: "p", text: {
        de: "Es handelt sich um eine minimalinvasive, seit Jahrzehnten etablierte Behandlung in der ästhetischen Medizin.",
        en: "It is a minimally invasive treatment that has been well established in aesthetic medicine for decades." } },
    ],
    effect: [
      { t: "p", text: {
        de: "Durch die gezielte Entspannung der behandelten Muskeln werden sogenannte mimische Falten – etwa Stirnfalten, die Zornesfalte zwischen den Augenbrauen und Lachfältchen um die Augen (Krähenfüße) – sichtbar gemildert. Das Ergebnis wirkt bei korrekter Dosierung natürlich; die Mimik bleibt erhalten.",
        en: "By selectively relaxing the treated muscles, so-called expression lines – such as forehead lines, the frown line between the eyebrows and smile lines around the eyes (crow's feet) – are visibly softened. With correct dosing the result looks natural and facial expression is preserved." } },
    ],
    treatment: [
      { t: "sub", text: { de: "Welche Falten lassen sich behandeln?", en: "Which wrinkles can be treated?" } },
      { t: "p", text: {
        de: "Besonders gut ansprechbar sind Falten, die durch Muskelbewegung entstehen: Stirnfalten, Zornesfalten und Krähenfüße. Tiefe, ruhende Falten lassen sich oft mit Botox mildern und ergänzend mit Hyaluron behandeln.",
        en: "Lines caused by muscle movement respond particularly well: forehead lines, frown lines and crow's feet. Deeper static lines can often be softened with Botox and complemented with hyaluronic acid." } },
      { t: "img", src: "aesthetik/botox/treatment.jpg", alt: { de: "Planung einer Botox-Behandlung in der Praxis", en: "Planning a Botox treatment in the practice" } },
      { t: "sub", text: { de: "Vor der Behandlung", en: "Before the treatment" } },
      { t: "p", text: {
        de: "In einem persönlichen Beratungsgespräch werden Wünsche, Krankengeschichte und Eignung besprochen. Blutverdünnende Mittel und Alkohol sollten nach Absprache gemieden werden, um blaue Flecken zu verringern.",
        en: "In a personal consultation, your wishes, medical history and suitability are discussed. Blood-thinning agents and alcohol should be avoided as advised to reduce bruising." } },
      { t: "sub", text: { de: "Ablauf", en: "Procedure" } },
      { t: "p", text: {
        de: "Mit einer sehr feinen Nadel wird das Präparat an definierten Punkten in die Zielmuskeln gespritzt. Die Behandlung dauert in der Regel nur wenige Minuten und ist gut verträglich.",
        en: "Using a very fine needle, the preparation is injected at defined points into the target muscles. The treatment usually takes only a few minutes and is well tolerated." } },
      { t: "sub", text: { de: "Nach der Behandlung", en: "After the treatment" } },
      { t: "p", text: {
        de: "Direkt im Anschluss können Sie meist Ihren Alltag wieder aufnehmen. Für einige Stunden sollten starke Hitze, intensiver Sport und das Reiben der behandelten Stellen vermieden werden.",
        en: "You can usually resume your day right afterwards. For a few hours, strong heat, intense exercise and rubbing the treated areas should be avoided." } },
      { t: "sub", text: { de: "Ergebnis & Haltbarkeit", en: "Results & duration" } },
      { t: "p", text: {
        de: "Die Wirkung setzt nach einigen Tagen ein und ist nach etwa zwei Wochen voll sichtbar. Je nach Person hält sie in der Regel rund drei bis sechs Monate an und kann anschließend aufgefrischt werden.",
        en: "The effect sets in after a few days and is fully visible after about two weeks. Depending on the individual it usually lasts around three to six months and can then be refreshed." } },
    ],
    faq: [
      { q: { de: "Ist die Behandlung schmerzhaft?", en: "Is the treatment painful?" },
        a: { de: "Dank sehr feiner Nadeln empfinden die meisten Menschen nur einen kurzen, leichten Piks. Auf Wunsch kann eine betäubende Creme verwendet werden.", en: "Thanks to very fine needles, most people feel only a brief, slight prick. A numbing cream can be used on request." } },
      { q: { de: "Sieht das Ergebnis künstlich aus?", en: "Does the result look artificial?" },
        a: { de: "Bei sorgfältiger, zurückhaltender Dosierung bleibt die natürliche Mimik erhalten – das Gesicht wirkt erholt, nicht „gemacht“.", en: "With careful, restrained dosing, natural expression is preserved – the face looks rested, not 'done'." } },
      { q: { de: "Gibt es Nebenwirkungen?", en: "Are there side effects?" },
        a: { de: "Möglich sind vorübergehend kleine Rötungen oder blaue Flecken an den Einstichstellen. Seltene Nebenwirkungen werden im Beratungsgespräch erläutert.", en: "Temporary small redness or bruising at the injection sites is possible. Rare side effects are explained in the consultation." } },
    ],
  },

  {
    slug: "laser-therapie",
    title: { de: "Laserbehandlung", en: "Laser Treatment" },
    summary: {
      de: "Moderne Laserverfahren für ein verfeinertes, gleichmäßiges und frisches Hautbild.",
      en: "Modern laser procedures for a refined, even and fresh complexion.",
    },
    definition: [
      { t: "img", src: "aesthetik/laser-therapie/definition.jpg", alt: { de: "Laserbehandlung der Haut", en: "Laser skin treatment" } },
      { t: "p", text: {
        de: "Bei der Laserbehandlung wird gebündeltes Licht einer bestimmten Wellenlänge gezielt auf die Haut gerichtet. Je nach Verfahren wird dabei entweder die Hauterneuerung angeregt oder es werden unerwünschte Strukturen wie Pigmentflecken oder erweiterte Äderchen behandelt.",
        en: "In laser treatment, focused light of a specific wavelength is aimed precisely at the skin. Depending on the procedure, this either stimulates skin renewal or treats unwanted structures such as pigment spots or dilated vessels." } },
    ],
    effect: [
      { t: "p", text: {
        de: "Die Haut wirkt feiner, ebenmäßiger und frischer. Je nach Anliegen können die Kollagenbildung angeregt, der Hautton ausgeglichen und kleine Unregelmäßigkeiten gemildert werden.",
        en: "The skin looks finer, more even and fresher. Depending on the concern, collagen formation can be stimulated, skin tone evened out and small irregularities softened." } },
    ],
    treatment: [
      { t: "sub", text: { de: "Welche Anliegen lassen sich behandeln?", en: "Which concerns can be treated?" } },
      { t: "p", text: {
        de: "Je nach eingesetztem Gerät eignen sich Laserverfahren unter anderem für ein ungleichmäßiges Hautbild, Pigmentflecken, sonnenbedingte Hautveränderungen, erweiterte Äderchen und zur allgemeinen Hautverjüngung.",
        en: "Depending on the device used, laser procedures are suitable for an uneven complexion, pigment spots, sun-related skin changes, dilated vessels and general skin rejuvenation, among others." } },
      { t: "img", src: "aesthetik/laser-therapie/treatment.jpg", alt: { de: "Laserbehandlung für ein ebenmäßiges Hautbild", en: "Laser treatment for an even complexion" } },
      { t: "sub", text: { de: "Vor der Behandlung", en: "Before the treatment" } },
      { t: "p", text: {
        de: "Vor einer Laserbehandlung sollte die Haut nicht frisch gebräunt sein. Intensive Sonne und Selbstbräuner werden vorab gemieden; die Eignung wird individuell geprüft.",
        en: "Before a laser treatment the skin should not be freshly tanned. Intense sun and self-tanner are avoided beforehand; suitability is assessed individually." } },
      { t: "sub", text: { de: "Ablauf", en: "Procedure" } },
      { t: "p", text: {
        de: "Die Augen werden geschützt, anschließend wird der Laser gleichmäßig über das Behandlungsareal geführt. Je nach Verfahren wird ein leichtes Wärme- oder Kribbelgefühl beschrieben; eine Kühlung sorgt für Komfort.",
        en: "The eyes are protected, then the laser is guided evenly over the treatment area. Depending on the procedure, a slight warmth or tingling is described; cooling ensures comfort." } },
      { t: "sub", text: { de: "Nach der Behandlung", en: "After the treatment" } },
      { t: "p", text: {
        de: "Die Haut kann vorübergehend gerötet und empfindlich sein. Konsequenter Sonnenschutz und eine milde Pflege sind in den Tagen danach besonders wichtig.",
        en: "The skin may be temporarily reddened and sensitive. Consistent sun protection and gentle care are especially important in the days afterwards." } },
      { t: "sub", text: { de: "Ergebnis & Haltbarkeit", en: "Results & duration" } },
      { t: "p", text: {
        de: "Oft sind mehrere Sitzungen sinnvoll. Erste Ergebnisse zeigen sich je nach Verfahren nach der Abheilung; die Haut verbessert sich über die folgenden Wochen weiter.",
        en: "Several sessions are often sensible. First results appear after healing depending on the procedure; the skin continues to improve over the following weeks." } },
    ],
    faq: [
      { q: { de: "Wie viele Sitzungen sind nötig?", en: "How many sessions are needed?" },
        a: { de: "Das hängt vom Anliegen und Verfahren ab. Im Beratungsgespräch wird ein realistischer Plan mit der voraussichtlichen Sitzungszahl besprochen.", en: "This depends on the concern and procedure. In the consultation a realistic plan with the likely number of sessions is discussed." } },
      { q: { de: "Ist die Behandlung schmerzhaft?", en: "Is the treatment painful?" },
        a: { de: "Die meisten Verfahren sind gut verträglich; eine Kühlung und auf Wunsch eine betäubende Creme erhöhen den Komfort.", en: "Most procedures are well tolerated; cooling and, on request, a numbing cream increase comfort." } },
      { q: { de: "Wann kann ich wieder in die Sonne?", en: "When can I go back in the sun?" },
        a: { de: "Nach einer Laserbehandlung ist konsequenter Sonnenschutz wichtig; intensive Sonne sollte für die vereinbarte Zeit gemieden werden.", en: "After a laser treatment, consistent sun protection is important; intense sun should be avoided for the agreed period." } },
    ],
  },

  {
    slug: "kosmetische-aesthetische-therapie",
    title: { de: "Kosmetische & ästhetische Therapie", en: "Cosmetic & Aesthetic Therapy" },
    summary: {
      de: "Individuelle ästhetische Behandlungen wie Hyaluron, PRP und Fädenlifting für ein natürlich gepflegtes Aussehen.",
      en: "Individual aesthetic treatments such as hyaluronic acid, PRP and thread lifting for a naturally well-groomed look.",
    },
    definition: [
      { t: "img", src: "aesthetik/kosmetische-aesthetische-therapie/definition.jpg", alt: { de: "Ästhetische Behandlung in der Praxis", en: "Aesthetic treatment in the practice" } },
      { t: "p", text: {
        de: "Die kosmetische und ästhetische Therapie umfasst verschiedene schonende Verfahren, die das Erscheinungsbild der Haut verbessern und harmonisieren – darunter Faltenunterspritzung mit Hyaluronsäure, die Eigenbluttherapie (PRP) und das Fädenlifting.",
        en: "Cosmetic and aesthetic therapy comprises various gentle procedures that improve and harmonise the appearance of the skin – including wrinkle filling with hyaluronic acid, platelet-rich plasma therapy (PRP) and thread lifting." } },
    ],
    effect: [
      { t: "p", text: {
        de: "Je nach Verfahren werden Falten aufgepolstert, Volumen schonend wiederhergestellt, die Hautqualität verbessert und Konturen sanft betont – stets mit dem Ziel eines natürlichen, frischen Ergebnisses.",
        en: "Depending on the procedure, wrinkles are plumped, volume gently restored, skin quality improved and contours softly enhanced – always aiming for a natural, fresh result." } },
    ],
    treatment: [
      { t: "sub", text: { de: "Hyaluron / Filler", en: "Hyaluronic acid / fillers" } },
      { t: "p", text: {
        de: "Hyaluronsäure ist ein natürlicher Bestandteil der Haut. Als Filler polstert sie Falten auf, gibt Lippen und Wangen Volumen und glättet Konturen. Das Ergebnis ist sofort sichtbar.",
        en: "Hyaluronic acid is a natural component of the skin. As a filler it plumps wrinkles, gives volume to lips and cheeks and smooths contours. The result is visible immediately." } },
      { t: "img", src: "aesthetik/kosmetische-aesthetische-therapie/treatment.jpg", alt: { de: "Hautberatung vor der Behandlung", en: "Skin consultation before the treatment" } },
      { t: "sub", text: { de: "PRP / Eigenblut (Vampir-Lifting)", en: "PRP / platelet-rich plasma (vampire lifting)" } },
      { t: "p", text: {
        de: "Aus einer kleinen Menge Eigenblut werden körpereigene Wachstumsfaktoren gewonnen und in die Haut eingebracht. Sie regen die Regeneration an und verbessern Spannkraft und Hautbild auf natürliche Weise.",
        en: "From a small amount of your own blood, the body's own growth factors are obtained and introduced into the skin. They stimulate regeneration and improve firmness and complexion naturally." } },
      { t: "sub", text: { de: "Fädenlifting", en: "Thread lifting" } },
      { t: "p", text: {
        de: "Mit feinen, resorbierbaren Fäden wird die Haut sanft gestrafft und angehoben – eine Alternative zum chirurgischen Lifting ohne größeren Eingriff.",
        en: "With fine, absorbable threads the skin is gently tightened and lifted – an alternative to surgical lifting without a major procedure." } },
      { t: "sub", text: { de: "Ablauf & Nachsorge", en: "Procedure & aftercare" } },
      { t: "p", text: {
        de: "Nach einer individuellen Beratung wird das passende Verfahren schonend durchgeführt. Leichte Rötungen oder Schwellungen können kurzzeitig auftreten; die meisten Menschen sind rasch wieder gesellschaftsfähig.",
        en: "After an individual consultation, the suitable procedure is carried out gently. Mild redness or swelling can occur briefly; most people are quickly presentable again." } },
    ],
    faq: [
      { q: { de: "Welches Verfahren ist das richtige für mich?", en: "Which procedure is right for me?" },
        a: { de: "Das hängt von Ihrem Anliegen ab. In einem persönlichen Gespräch wird gemeinsam das passende Verfahren – oder eine Kombination – ausgewählt.", en: "This depends on your concern. In a personal conversation the suitable procedure – or a combination – is chosen together." } },
      { q: { de: "Wie lange halten die Ergebnisse?", en: "How long do the results last?" },
        a: { de: "Das variiert je nach Verfahren: Hyaluron hält meist mehrere Monate bis über ein Jahr, PRP und Fädenlifting wirken über einen individuell unterschiedlichen Zeitraum.", en: "This varies by procedure: hyaluronic acid usually lasts several months to over a year, while PRP and thread lifting work over an individually varying period." } },
      { q: { de: "Sind die Behandlungen natürlich im Ergebnis?", en: "Are the results natural?" },
        a: { de: "Ziel ist stets ein dezentes, natürliches Ergebnis, das Ihre Züge unterstreicht, statt sie zu verändern.", en: "The aim is always a subtle, natural result that underlines your features rather than changing them." } },
    ],
  },
]

export function aestheticBySlug(slug: string | undefined) {
  return aestheticTreatments.find((t) => t.slug === slug)
}
