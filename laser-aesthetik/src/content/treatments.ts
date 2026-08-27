import type { LocalizedTreatment, Locale, Pillar, Treatment } from "./types"
import { resolveTreatment } from "./localize"
import oberlippeImg from "@/assets/laser/oberlippe.webp"
import wangenImg from "@/assets/laser/wangen.webp"
import kinnImg from "@/assets/laser/kinn.webp"
import gesichtUndKopfImg from "@/assets/laser/gesicht-und-kopf.webp"
import achselnImg from "@/assets/laser/achseln.webp"
import armeKomplettImg from "@/assets/laser/arme-komplett.webp"
import rueckenKomplettImg from "@/assets/laser/ruecken-komplett.webp"
import bikinizoneImg from "@/assets/laser/bikinizone.webp"
import intimKomplettImg from "@/assets/laser/intim-komplett.webp"
import oberschenkelImg from "@/assets/laser/oberschenkel.webp"
import unterschenkelImg from "@/assets/laser/unterschenkel.webp"
import beineKomplettImg from "@/assets/laser/beine-komplett.webp"
import achselnIntimImg from "@/assets/laser/achseln-intim.webp"
import achselnIntimUnterschenkelImg from "@/assets/laser/achseln-intim-unterschenkel.webp"
import achselnIntimBeineImg from "@/assets/laser/achseln-intim-beine.webp"
import ganzkoerperImg from "@/assets/laser/ganzkoerper.webp"
import gefaessbehandlungImg from "@/assets/laser/gefaessbehandlung.webp"
import pigmentfleckenImg from "@/assets/laser/pigmentflecken.webp"
import aknenarbenImg from "@/assets/laser/aknenarben.webp"
import schmerztherapieImg from "@/assets/physio/schmerztherapie.webp"
import manuelleTherapieImg from "@/assets/physio/manuelle-therapie.webp"
import sportmedizinImg from "@/assets/physio/sportmedizin.webp"
import akupunkturTcmImg from "@/assets/physio/akupunktur-tcm.webp"
import stosswellentherapieImg from "@/assets/physio/stosswellentherapie.webp"
import faltenbehandlungImg from "@/assets/aesthetik/faltenbehandlung.webp"
import hyaluronImg from "@/assets/aesthetik/hyaluron.webp"
import kryolipolyseImg from "@/assets/aesthetik/kryolipolyse.webp"
import farblichttherapieImg from "@/assets/aesthetik/farblichttherapie.webp"
import aesthetischeMedizinImg from "@/assets/aesthetik/aesthetische-medizin.webp"

// The 19 laser zones — bilingual. See `LocalizedTreatment` in types.ts.
// English slugs are deliberately keyword-bearing rather than transliterations
// (e.g. "achseln" -> "underarms", not "achseln-en") — that is the entire
// reason English gets its own URLs.
const LASER: LocalizedTreatment[] = [
  {
    slug: { de: "oberlippe", en: "upper-lip" },
    pillar: "laser",
    image: oberlippeImg,
    imageAlt: {
      de: "Kosmetisches Handgerät wird nah am Gesicht angewendet",
      en: "Cosmetic handheld device being used close to the face",
    },
    title: { de: "Oberlippe", en: "Upper Lip" },
    headline: {
      de: { lead: "Oberlippe", accent: "dauerhaft glatt" },
      en: { lead: "Upper lip", accent: "permanently smooth" },
    },
    excerpt: {
      de: "Die schnellste Zone überhaupt. Fünf Minuten pro Sitzung, kein Rasieren mehr.",
      en: "The fastest zone by far: five minutes per session, no more shaving.",
    },
    body: {
      de: [
        "Härchen an der Oberlippe reagieren besonders gut auf Laserlicht, weil sie meist dunkel und kräftig sind. Genau dieses Pigment nimmt die Energie auf und leitet sie an die Haarwurzel weiter.",
        "Die Behandlung dauert nur wenige Minuten. Die meisten Patientinnen beschreiben sie als kurzes, warmes Prickeln. Eine Betäubung ist nicht nötig.",
        "Wie viele Sitzungen nötig sind, hängt von Haar- und Hauttyp ab. Bei den meisten Patientinnen und Patienten bleibt ein kleiner Teil der Haare erhalten. Fachlich spricht man deshalb von dauerhafter Haarreduktion.",
      ],
      en: [
        "Hair on the upper lip responds particularly well to laser light, because it's usually dark and coarse. That pigment is exactly what absorbs the energy and carries it down to the hair root.",
        "The treatment takes only a few minutes. Most patients describe it as a brief, warm tingling sensation, and anaesthesia isn't necessary.",
        "How many sessions you need depends on your hair and skin type. In most patients, a small proportion of hair remains, which is why the medically correct term is permanent hair reduction.",
      ],
    },
    benefits: {
      de: [
        "Nur fünf Minuten pro Sitzung",
        "Kein Rasieren, kein Wachsen, keine gereizte Haut",
        "Ärztliche Voruntersuchung inklusive",
      ],
      en: [
        "Just five minutes per session",
        "No more shaving, waxing, or irritated skin",
        "Includes a medical assessment beforehand",
      ],
    },
    durationMin: 5,
    sessions: { de: "6 – 8 Sitzungen", en: "6 – 8 sessions" },
    pricing: { kind: "fixed", single: 39 },
    group: { de: "Gesicht & Kopf", en: "Face & Head" },
  },
  {
    slug: { de: "wangen", en: "cheeks" },
    pillar: "laser",
    image: wangenImg,
    imageAlt: {
      de: "Kosmetische Behandlung im seitlichen Gesichtsbereich mit Handschuhen",
      en: "Cosmetic treatment on the side of the face, gloved hands visible",
    },
    title: { de: "Wangen", en: "Cheeks" },
    headline: {
      de: { lead: "Wangen", accent: "sichtbar glatter" },
      en: { lead: "Cheeks", accent: "visibly smoother" },
    },
    excerpt: {
      de: "Feiner Flaum und kräftige Härchen an den Wangen sind in fünf Minuten behandelt.",
      en: "Fine down and coarser hairs on the cheeks, treated in five minutes.",
    },
    body: {
      de: [
        "Haarwuchs an den Wangen hat oft hormonelle Ursachen. Wir klären diese im Vorgespräch ab, denn eine Laserbehandlung ergänzt eine mögliche Therapie, ersetzt sie aber nicht.",
        "Weil die Gesichtshaut empfindlicher reagiert, arbeiten wir hier mit angepasster Energie und kühlen währenddessen kontinuierlich.",
      ],
      en: [
        "Hair growth on the cheeks often has hormonal causes. We assess this during the initial consultation, since laser treatment can complement a hormonal therapy but does not replace it.",
        "Because facial skin is more sensitive, we work with adjusted energy levels here and cool the skin continuously throughout.",
      ],
    },
    benefits: {
      de: [
        "Angepasste Energie für empfindliche Gesichtshaut",
        "Kontinuierliche Kühlung während der Behandlung",
        "Abklärung hormoneller Ursachen im Vorgespräch",
      ],
      en: [
        "Adjusted energy levels for sensitive facial skin",
        "Continuous cooling during treatment",
        "Hormonal causes assessed at the initial consultation",
      ],
    },
    durationMin: 5,
    sessions: { de: "6 – 10 Sitzungen", en: "6 – 10 sessions" },
    pricing: { kind: "fixed", single: 39 },
    group: { de: "Gesicht & Kopf", en: "Face & Head" },
  },
  {
    slug: { de: "kinn", en: "chin" },
    pillar: "laser",
    image: kinnImg,
    imageAlt: {
      de: "Laserbehandlung am unteren Gesichtsbereich mit Schutzbrille",
      en: "Laser treatment on the lower part of the face, protective eyewear worn",
    },
    title: { de: "Kinn", en: "Chin" },
    headline: {
      de: { lead: "Kinn", accent: "endlich ruhig" },
      en: { lead: "Chin", accent: "finally calm" },
    },
    excerpt: {
      de: "Einzelne kräftige Härchen am Kinn werden dauerhaft reduziert, statt täglich nachzuzupfen.",
      en: "Individual coarse hairs on the chin are permanently reduced, instead of being plucked out every day.",
    },
    body: {
      de: [
        "Am Kinn wachsen Härchen oft besonders kräftig und einzeln. Zupfen reizt die Haut und regt den Follikel zusätzlich an. Der Laser unterbricht diesen Kreislauf.",
        "Nach etwa acht bis zehn Sitzungen ist der Haarwuchs in der Regel deutlich reduziert. Wie viele Sitzungen Sie brauchen, hängt von Hauttyp und Hormonlage ab.",
      ],
      en: [
        "Hair on the chin often grows particularly coarse and in isolated spots. Plucking irritates the skin and stimulates the follicle further, and the laser breaks that cycle.",
        "After roughly eight to ten sessions, hair growth is usually noticeably reduced. How many sessions you'll need depends on your skin type and hormonal profile.",
      ],
    },
    benefits: {
      de: [
        "Schluss mit täglichem Zupfen und Rasieren",
        "Weniger eingewachsene Haare und Hautreizungen",
        "Zehn Minuten pro Sitzung",
      ],
      en: [
        "An end to daily plucking and shaving",
        "Fewer ingrown hairs and less skin irritation",
        "Ten minutes per session",
      ],
    },
    durationMin: 10,
    sessions: { de: "8 – 10 Sitzungen", en: "8 – 10 sessions" },
    pricing: { kind: "fixed", single: 49 },
    group: { de: "Gesicht & Kopf", en: "Face & Head" },
  },
  {
    slug: { de: "gesicht-und-kopf", en: "face-and-head" },
    pillar: "laser",
    image: gesichtUndKopfImg,
    imageAlt: {
      de: "Fachkraft behandelt die Gesichtspartie eines Patienten",
      en: "Practitioner treating a patient's facial area",
    },
    title: { de: "Gesicht & Kopf", en: "Face & Head" },
    headline: {
      de: { lead: "Gesicht & Kopf", accent: "komplett" },
      en: { lead: "Face & Head", accent: "all in one" },
    },
    excerpt: {
      de: "Alle Gesichtszonen in einer Sitzung: Oberlippe, Kinn, Wangen und Kieferlinie.",
      en: "Every facial zone in a single session, covering the upper lip, chin, cheeks and jawline.",
    },
    body: {
      de: [
        "Statt einzelne Zonen nacheinander zu buchen, behandeln wir in dieser Sitzung das gesamte Gesicht in einem Durchgang. Das ist günstiger als die Summe der Einzelzonen und sorgt für ein gleichmäßiges Ergebnis.",
        "Enthalten sind Oberlippe, Kinn, Wangen und Kieferlinie. Die Augenpartie bleibt aus Sicherheitsgründen ausgespart.",
      ],
      en: [
        "Instead of booking individual zones one after another, this session treats the entire face in one pass. It's more affordable than the individual zones combined and gives a more even result.",
        "Included are the upper lip, chin, cheeks and jawline. The eye area is left out for safety reasons.",
      ],
    },
    benefits: {
      de: [
        "Alle Gesichtszonen in einem Termin",
        "Gleichmäßiges Ergebnis statt Zonenübergängen",
        "Günstiger als die Einzelzonen zusammen",
      ],
      en: [
        "Every facial zone in one appointment",
        "An even result instead of visible transitions between zones",
        "More affordable than booking the zones individually",
      ],
    },
    durationMin: 20,
    sessions: { de: "8 – 10 Sitzungen", en: "8 – 10 sessions" },
    pricing: { kind: "fixed", single: 109 },
    group: { de: "Gesicht & Kopf", en: "Face & Head" },
  },
  {
    slug: { de: "achseln", en: "underarms" },
    pillar: "laser",
    image: achselnImg,
    imageAlt: {
      de: "Laserhandstück mit Zielstrahl auf der Haut",
      en: "Laser handpiece with a targeting beam on the skin",
    },
    title: { de: "Achseln", en: "Underarms" },
    headline: {
      de: { lead: "Achseln", accent: "dauerhaft glatt" },
      en: { lead: "Underarms", accent: "permanently smooth" },
    },
    excerpt: {
      de: "Die beliebteste Zone. Zehn Minuten pro Termin, ohne Pickel, Brand und dunkle Schatten.",
      en: "The most popular zone. Ten minutes per appointment, with no bumps, razor burn or dark shadowing.",
    },
    body: {
      de: [
        "Die Achseln sind der Klassiker der Laserhaarentfernung: kleine Fläche, kräftige Haare, schnelle Sichtbarkeit des Ergebnisses.",
        "Nach durchschnittlich acht bis zwölf Sitzungen ist das Thema Rasur für die meisten Patientinnen und Patienten erledigt, und zwar ohne Rasurbrand, eingewachsene Haare oder den dunklen Schatten unter der Haut.",
        "Vollständig haarfrei wird dabei kaum jemand: Bei den meisten Patientinnen und Patienten bleibt ein kleiner Teil der Haare erhalten. Fachlich spricht man deshalb von dauerhafter Haarreduktion. Wie ausgeprägt das Ergebnis ausfällt, hängt von Haar- und Hauttyp ab.",
      ],
      en: [
        "The underarms are the classic laser hair removal zone: a small area, coarse hair, and results that become visible quickly.",
        "After eight to twelve sessions on average, shaving is a thing of the past for most patients, with no more razor burn, ingrown hairs, or the dark shadow beneath the skin.",
        "Almost no one ends up completely hair-free: in most patients, a small proportion of hair remains. The medically correct term is therefore permanent hair reduction. How pronounced the result is depends on hair and skin type.",
      ],
    },
    benefits: {
      de: [
        "Kein Rasurbrand, keine eingewachsenen Haare",
        "Nur zehn Minuten pro Termin",
        "Auch für empfindliche Haut geeignet",
      ],
      en: [
        "No razor burn, no ingrown hairs",
        "Just ten minutes per appointment",
        "Suitable for sensitive skin too",
      ],
    },
    durationMin: 10,
    sessions: { de: "8 – 12 Sitzungen", en: "8 – 12 sessions" },
    pricing: { kind: "fixed", single: 69 },
    group: { de: "Oberkörper", en: "Upper Body" },
  },
  {
    slug: { de: "arme-komplett", en: "full-arms" },
    pillar: "laser",
    image: armeKomplettImg,
    imageAlt: {
      de: "Laserbehandlung am Unterarm in einem Behandlungsstudio",
      en: "Laser treatment on the forearm in a treatment studio",
    },
    title: { de: "Arme komplett", en: "Full Arms" },
    headline: {
      de: { lead: "Arme", accent: "komplett" },
      en: { lead: "Arms", accent: "complete" },
    },
    excerpt: {
      de: "Ober- und Unterarme in einer Sitzung: 25 Minuten für glatte Haut bis zur Schulter.",
      en: "Upper and lower arms in one session, giving you smooth skin all the way to the shoulder in 25 minutes.",
    },
    body: {
      de: [
        "Diese Zone umfasst Ober- und Unterarme einschließlich der Handrücken. Die Haardichte ist an den Armen meist geringer als an Beinen oder Achseln, das Ergebnis daher oft früher sichtbar.",
        "Nach der Behandlung sollten Sie die Arme etwa zwei Wochen konsequent vor direkter Sonne schützen.",
      ],
      en: [
        "This zone covers the upper and lower arms, including the backs of the hands. Hair density on the arms is usually lower than on the legs or underarms, so results are often visible sooner.",
        "After treatment, protect your arms consistently from direct sun for about two weeks.",
      ],
    },
    benefits: {
      de: [
        "Ober- und Unterarme in einem Termin",
        "Ergebnis meist früher sichtbar als an anderen Zonen",
        "Inklusive Handrücken",
      ],
      en: [
        "Upper and lower arms in one appointment",
        "Results often visible sooner than in other zones",
        "Includes the backs of the hands",
      ],
    },
    durationMin: 25,
    sessions: { de: "6 – 10 Sitzungen", en: "6 – 10 sessions" },
    pricing: { kind: "fixed", single: 209 },
    group: { de: "Oberkörper", en: "Upper Body" },
  },
  {
    slug: { de: "ruecken-komplett", en: "full-back" },
    pillar: "laser",
    image: rueckenKomplettImg,
    imageAlt: {
      de: "Nackenpartie und Schultern von hinten vor hellem Hintergrund",
      en: "Neck and shoulders viewed from behind against a light background",
    },
    title: { de: "Rücken komplett", en: "Full Back" },
    headline: {
      de: { lead: "Rücken", accent: "komplett" },
      en: { lead: "Back", accent: "complete" },
    },
    excerpt: {
      de: "Die größte Einzelzone am Oberkörper: Schultern, Rücken und Lendenbereich.",
      en: "The largest single zone on the upper body, covering shoulders, back and lower back.",
    },
    body: {
      de: [
        "Starker Haarwuchs am Rücken lässt sich allein kaum sinnvoll behandeln: Rasieren funktioniert nicht, Wachsen ist schmerzhaft und kurzlebig.",
        "Wir behandeln Schultern, Rücken und Lendenbereich in einem Durchgang. Wegen der Größe der Fläche planen wir dafür eine halbe Stunde ein.",
      ],
      en: [
        "Heavy hair growth on the back is hard to manage well on your own. Shaving doesn't work, and waxing is painful and short-lived.",
        "We treat the shoulders, back and lower back in one pass. Because of the size of the area, we allow half an hour for the session.",
      ],
    },
    benefits: {
      de: [
        "Schultern, Rücken und Lendenbereich in einem Termin",
        "Die Lösung für eine Zone, die man selbst nicht erreicht",
        "Dauerhafte Reduktion statt alle paar Wochen erneut",
      ],
      en: [
        "Shoulders, back and lower back in one appointment",
        "The solution for a zone you can't reach yourself",
        "Permanent reduction instead of redoing it every few weeks",
      ],
    },
    durationMin: 30,
    sessions: { de: "8 – 12 Sitzungen", en: "8 – 12 sessions" },
    pricing: { kind: "fixed", single: 259 },
    group: { de: "Oberkörper", en: "Upper Body" },
  },
  {
    slug: { de: "bikinizone", en: "bikini-line" },
    pillar: "laser",
    image: bikinizoneImg,
    imageAlt: {
      de: "Nahaufnahme glatter Hautstruktur",
      en: "Close-up of smooth skin texture",
    },
    title: { de: "Bikinizone", en: "Bikini Line" },
    headline: {
      de: { lead: "Bikinizone", accent: "schonend" },
      en: { lead: "Bikini line", accent: "gently treated" },
    },
    excerpt: {
      de: "Schonend lasern statt rasieren, für weniger Erdbeerhaut und weniger eingewachsene Haare.",
      en: "A gentler alternative to shaving or waxing, with less irritation and fewer ingrown hairs.",
    },
    body: {
      de: [
        "Die Bikinizone reagiert auf Rasur und Wachs besonders empfindlich: Rötungen, Pickelchen und eingewachsene Haare sind die Regel, nicht die Ausnahme.",
        "Der Laser arbeitet an der Haarwurzel und umgeht dieses Problem vollständig. Behandelt wird der seitlich sichtbare Bereich; für den gesamten Intimbereich gibt es eine eigene Zone.",
      ],
      en: [
        "The bikini line reacts especially sensitively to shaving and waxing: redness, small bumps and ingrown hairs are the rule rather than the exception.",
        "The laser works at the hair root and avoids this problem entirely. This zone covers the area visible at the edge of swimwear; the full intimate area is treated as a separate zone.",
      ],
    },
    benefits: {
      de: [
        "Weniger eingewachsene Haare, weniger Erdbeerhaut",
        "Diskrete, ruhige Behandlungsräume",
        "Ärztlich durchgeführt",
      ],
      en: [
        "Fewer ingrown hairs, less irritation",
        "Private, calm treatment rooms",
        "Physician-led",
      ],
    },
    durationMin: 15,
    sessions: { de: "8 – 12 Sitzungen", en: "8 – 12 sessions" },
    pricing: { kind: "fixed", single: 89 },
    group: { de: "Intimbereich", en: "Intimate Area" },
  },
  {
    slug: { de: "intim-komplett", en: "full-intimate-area" },
    pillar: "laser",
    image: intimKomplettImg,
    imageAlt: {
      de: "Gestapelte Handtücher in einem diskreten Behandlungsraum",
      en: "Stacked towels in a private treatment room",
    },
    title: { de: "Intim komplett", en: "Full Intimate Area" },
    headline: {
      de: { lead: "Intim", accent: "komplett" },
      en: { lead: "Intimate area", accent: "complete" },
    },
    excerpt: {
      de: "Der gesamte Intimbereich in einer Sitzung, für Damen und Herren.",
      en: "The entire intimate area treated in a single session, for women and men alike.",
    },
    body: {
      de: [
        "Diese Zone umfasst den gesamten Intimbereich einschließlich Bikinizone, Schambereich und Pofalte. Sie wird für Damen und Herren zum gleichen Preis angeboten.",
        "Diskretion ist hier selbstverständlich: Sie werden ausschließlich von medizinisch geschultem Personal behandelt, in einem geschlossenen Behandlungsraum.",
      ],
      en: [
        "This zone covers the entire intimate area, including the bikini line, pubic area and gluteal cleft. It's offered to women and men at the same price.",
        "Discretion goes without saying here: you're treated exclusively by medically trained staff, in a private treatment room.",
      ],
    },
    benefits: {
      de: [
        "Gesamter Intimbereich in einem Termin",
        "Für Damen und Herren zum gleichen Preis",
        "Diskret, ärztlich geführt",
      ],
      en: [
        "The entire intimate area in one appointment",
        "Same price for women and men",
        "Private, physician-led",
      ],
    },
    durationMin: 20,
    sessions: { de: "8 – 12 Sitzungen", en: "8 – 12 sessions" },
    pricing: { kind: "fixed", single: 139 },
    group: { de: "Intimbereich", en: "Intimate Area" },
  },
  {
    slug: { de: "oberschenkel", en: "thighs" },
    pillar: "laser",
    image: oberschenkelImg,
    imageAlt: {
      de: "Laserbehandlung am Bein, mit Handtuch abgedeckt",
      en: "Laser treatment on the leg, covered with a towel",
    },
    title: { de: "Oberschenkel", en: "Thighs" },
    headline: {
      de: { lead: "Oberschenkel", accent: "glatt" },
      en: { lead: "Thighs", accent: "smooth" },
    },
    excerpt: {
      de: "Oberschenkel einzeln behandeln: 20 Minuten, wenn die kompletten Beine zu viel sind.",
      en: "Treat the thighs on their own in 20 minutes, when the full legs are more than you need.",
    },
    body: {
      de: [
        "Wer nur die Oberschenkel behandeln lassen möchte, bucht diese Zone einzeln. Sie lässt sich später jederzeit mit den Unterschenkeln zur Komplettbehandlung zusammenlegen.",
        "Die Haardichte ist an den Oberschenkeln meist geringer als an den Unterschenkeln, das Ergebnis daher oft nach weniger Sitzungen zufriedenstellend.",
      ],
      en: [
        "If you'd like to treat only the thighs, you can book this zone on its own. It can always be combined with the lower legs later for a full-leg treatment.",
        "Hair density on the thighs is usually lower than on the lower legs, so a satisfying result is often reached after fewer sessions.",
      ],
    },
    benefits: {
      de: [
        "Einzeln buchbar, jederzeit erweiterbar",
        "20 Minuten pro Sitzung",
        "Oft weniger Sitzungen nötig als an den Unterschenkeln",
      ],
      en: [
        "Bookable on its own, expandable at any time",
        "20 minutes per session",
        "Often needs fewer sessions than the lower legs",
      ],
    },
    durationMin: 20,
    sessions: { de: "6 – 10 Sitzungen", en: "6 – 10 sessions" },
    pricing: { kind: "fixed", single: 169 },
    group: { de: "Unterkörper", en: "Lower Body" },
  },
  {
    slug: { de: "unterschenkel", en: "lower-legs" },
    pillar: "laser",
    image: unterschenkelImg,
    imageAlt: {
      de: "Behandlungsgerät wird an der Wade angesetzt",
      en: "Treatment device applied to the calf",
    },
    title: { de: "Unterschenkel", en: "Lower Legs" },
    headline: {
      de: { lead: "Unterschenkel", accent: "glatt" },
      en: { lead: "Lower legs", accent: "smooth" },
    },
    excerpt: {
      de: "Die Zone, die man am häufigsten rasiert. Dauerhaft reduziert in 20 Minuten pro Sitzung.",
      en: "The zone most people shave most often, permanently reduced in 20 minutes per session.",
    },
    body: {
      de: [
        "Unterschenkel sind die Zone, die die meisten Menschen am häufigsten rasieren. Entsprechend deutlich ist der Unterschied im Alltag, sobald die Behandlung greift.",
        "Behandelt werden Unterschenkel und Knie. Die Füße können auf Wunsch einbezogen werden. Sprechen Sie uns im Termin darauf an.",
      ],
      en: [
        "The lower legs are the zone most people shave most frequently. The everyday difference is correspondingly noticeable once the treatment takes effect.",
        "Treatment covers the lower legs and knees. Feet can be included on request, so just mention it at your appointment.",
      ],
    },
    benefits: {
      de: [
        "Die Zone mit dem größten Alltagsunterschied",
        "Inklusive Knie, Füße auf Wunsch",
        "20 Minuten pro Sitzung",
      ],
      en: [
        "The zone with the biggest everyday difference",
        "Includes the knees, feet on request",
        "20 minutes per session",
      ],
    },
    durationMin: 20,
    sessions: { de: "8 – 12 Sitzungen", en: "8 – 12 sessions" },
    pricing: { kind: "fixed", single: 169 },
    group: { de: "Unterkörper", en: "Lower Body" },
  },
  {
    slug: { de: "beine-komplett", en: "full-legs" },
    pillar: "laser",
    image: beineKomplettImg,
    imageAlt: {
      de: "Glatte, schlanke Beine vor hellem Hintergrund",
      en: "Smooth, slender legs against a light background",
    },
    title: { de: "Beine komplett", en: "Full Legs" },
    headline: {
      de: { lead: "Beine", accent: "komplett" },
      en: { lead: "Legs", accent: "complete" },
    },
    excerpt: {
      de: "Die Premiumzone: 35 Minuten, Ober- und Unterschenkel in einer Sitzung.",
      en: "The premium zone, covering both thighs and lower legs in one 35-minute session.",
    },
    body: {
      de: [
        "Ober- und Unterschenkel in einem Durchgang, einschließlich Knie. Das ist deutlich günstiger als beide Zonen einzeln und ergibt ein gleichmäßiges Ergebnis ohne Übergänge.",
        "Wegen der großen Fläche planen wir 35 Minuten ein. Bringen Sie bequeme Kleidung mit, die Sie danach nicht auf der Haut scheuert.",
      ],
      en: [
        "Thighs and lower legs in one pass, including the knees. This is significantly more affordable than booking both zones separately, and gives an even result with no visible transitions.",
        "Because of the large area, we allow 35 minutes. Bring comfortable clothing that won't rub against your skin afterwards.",
      ],
    },
    benefits: {
      de: [
        "Ober- und Unterschenkel in einem Termin",
        "Günstiger als beide Zonen einzeln",
        "Gleichmäßiges Ergebnis ohne sichtbare Übergänge",
      ],
      en: [
        "Thighs and lower legs in one appointment",
        "More affordable than booking both zones separately",
        "Even result with no visible transitions",
      ],
    },
    durationMin: 35,
    sessions: { de: "8 – 12 Sitzungen", en: "8 – 12 sessions" },
    pricing: { kind: "fixed", single: 309 },
    group: { de: "Unterkörper", en: "Lower Body" },
  },
  {
    slug: { de: "achseln-intim", en: "underarms-and-intimate-area" },
    pillar: "laser",
    image: achselnIntimImg,
    imageAlt: {
      de: "Ruhiger Wartebereich",
      en: "A calm waiting area",
    },
    title: { de: "Achseln + Intim komplett", en: "Underarms + Full Intimate Area" },
    headline: {
      de: { lead: "Achseln + Intim", accent: "komplett" },
      en: { lead: "Underarms + intimate area", accent: "complete" },
    },
    excerpt: {
      de: "Die beiden meistgebuchten Zonen im Paket, 30 Minuten pro Sitzung.",
      en: "The two most-booked zones in one package, treated in 30 minutes per session.",
    },
    body: {
      de: [
        "Achseln und Intimbereich werden am häufigsten zusammen gebucht. Im Kombipaket sparen Sie gegenüber den Einzelzonen und brauchen nur einen Termin.",
        "Die Sitzungsanzahl entspricht der der Einzelzonen, denn beide Bereiche reagieren ähnlich auf die Behandlung.",
      ],
      en: [
        "Underarms and the intimate area are most often booked together. This combination package saves you money compared to the individual zones and needs only one appointment.",
        "The number of sessions matches that of the individual zones, since both areas respond similarly to treatment.",
      ],
    },
    benefits: {
      de: ["Zwei Zonen, ein Termin", "Günstiger als beide Zonen einzeln", "30 Minuten pro Sitzung"],
      en: [
        "Two zones, one appointment",
        "More affordable than booking both zones separately",
        "30 minutes per session",
      ],
    },
    durationMin: 30,
    sessions: { de: "8 – 12 Sitzungen", en: "8 – 12 sessions" },
    pricing: {
      kind: "fixed",
      single: 139,
      overrides: [
        { sessions: 3, perSession: 129 },
        { sessions: 5, perSession: 119 },
        { sessions: 10, perSession: 109 },
      ],
    },
    group: { de: "Kombipakete", en: "Combination Packages" },
  },
  {
    slug: { de: "achseln-intim-unterschenkel", en: "underarms-intimate-lower-legs" },
    pillar: "laser",
    image: achselnIntimUnterschenkelImg,
    imageAlt: {
      de: "Loungebereich mit Blick in einen Behandlungsraum",
      en: "Lounge area with a view into a treatment room",
    },
    title: { de: "Achseln + Intim + Unterschenkel", en: "Underarms + Intimate Area + Lower Legs" },
    headline: {
      de: { lead: "Drei Zonen", accent: "ein Termin" },
      en: { lead: "Three zones", accent: "one appointment" },
    },
    excerpt: {
      de: "Achseln, Intimbereich und Unterschenkel im Paket, 40 Minuten pro Sitzung.",
      en: "Underarms, intimate area and lower legs in one package, at 40 minutes per session.",
    },
    body: {
      de: [
        "Dieses Paket deckt die drei Zonen ab, die im Alltag am häufigsten rasiert werden. Alles in einem Termin, zu einem deutlich günstigeren Preis als einzeln gebucht.",
        "Planen Sie 40 Minuten ein. Wir arbeiten die Zonen nacheinander ab, mit kurzen Pausen dazwischen.",
      ],
      en: [
        "This package covers the three zones people shave most often in everyday life. Everything in one appointment, at a significantly lower price than booking separately.",
        "Allow 40 minutes. We work through the zones one after another, with short breaks in between.",
      ],
    },
    benefits: {
      de: [
        "Drei Zonen in einem Termin",
        "Deutlich günstiger als einzeln gebucht",
        "Die drei meistrasierten Bereiche abgedeckt",
      ],
      en: [
        "Three zones in one appointment",
        "Significantly more affordable than booking separately",
        "Covers the three most-shaved areas",
      ],
    },
    durationMin: 40,
    sessions: { de: "8 – 12 Sitzungen", en: "8 – 12 sessions" },
    pricing: {
      kind: "fixed",
      single: 249,
      overrides: [
        { sessions: 3, perSession: 239 },
        { sessions: 5, perSession: 219 },
        { sessions: 10, perSession: 199 },
      ],
    },
    group: { de: "Kombipakete", en: "Combination Packages" },
  },
  {
    slug: { de: "achseln-intim-beine", en: "underarms-intimate-full-legs" },
    pillar: "laser",
    image: achselnIntimBeineImg,
    imageAlt: {
      de: "Eingerichteter Behandlungsraum mit Liege",
      en: "A furnished treatment room with a treatment bed",
    },
    title: { de: "Achseln + Intim + Beine", en: "Underarms + Intimate Area + Full Legs" },
    headline: {
      de: { lead: "Achseln, Intim", accent: "und Beine" },
      en: { lead: "Underarms, intimate area", accent: "and full legs" },
    },
    excerpt: {
      de: "Achseln, Intimbereich und komplette Beine in 45 Minuten pro Sitzung.",
      en: "Underarms, intimate area and full legs, 45 minutes per session.",
    },
    body: {
      de: [
        "Die Erweiterung des Drei-Zonen-Pakets auf die kompletten Beine, also Ober- und Unterschenkel. Das größte Paket unterhalb der Ganzkörperbehandlung.",
        "Wegen des Umfangs planen wir 45 Minuten ein und legen die Termine so, dass Sie nicht unter Zeitdruck stehen.",
      ],
      en: [
        "The three-zone package extended to the full legs, meaning both thighs and lower legs. The largest package short of the full-body treatment.",
        "Because of the scope, we allow 45 minutes and schedule appointments so you're never rushed.",
      ],
    },
    benefits: {
      de: ["Achseln, Intimbereich und komplette Beine", "Ein Termin statt drei", "45 Minuten pro Sitzung"],
      en: ["Underarms, intimate area and full legs", "One appointment instead of three", "45 minutes per session"],
    },
    durationMin: 45,
    sessions: { de: "8 – 12 Sitzungen", en: "8 – 12 sessions" },
    pricing: {
      kind: "fixed",
      single: 289,
      overrides: [
        { sessions: 3, perSession: 269 },
        { sessions: 5, perSession: 249 },
        { sessions: 10, perSession: 229 },
      ],
    },
    group: { de: "Kombipakete", en: "Combination Packages" },
  },
  {
    slug: { de: "ganzkoerper", en: "full-body" },
    pillar: "laser",
    image: ganzkoerperImg,
    imageAlt: {
      de: "Patientin sitzt in einem schlichten Behandlungsraum neben einem Gerät",
      en: "A patient sitting in a plain treatment room beside a device",
    },
    title: { de: "Ganzkörper", en: "Full Body" },
    headline: {
      de: { lead: "Ganzkörper", accent: "in einer Stunde" },
      en: { lead: "Full body", accent: "in one hour" },
    },
    excerpt: {
      de: "Bikinizone, große Schamlippen, Schambereich, Pofalte und Achseln. Fünf Premiumzonen, 60 Minuten.",
      en: "Bikini line, labia majora, pubic area, gluteal cleft and underarms: five premium zones, 60 minutes.",
    },
    body: {
      de: [
        "Das umfassendste Paket: Bikinizone, große Schamlippen, Schambereich, Pofalte und Achseln in einer einzigen Sitzung.",
        "Eine Stunde pro Termin. Alle enthaltenen Zonen werden in einer Sitzung behandelt, sodass nur ein Termin nötig ist.",
      ],
      en: [
        "The most comprehensive package: bikini line, labia majora, pubic area, gluteal cleft and underarms in a single session.",
        "One hour per appointment. All included zones are treated in one session, so only a single appointment is needed.",
      ],
    },
    benefits: {
      de: [
        "Fünf Premiumzonen in einer Sitzung",
        "Alle enthaltenen Zonen in einem Termin",
        "Ein Termin statt fünf",
      ],
      en: [
        "Five premium zones in one session",
        "All included zones in one appointment",
        "One appointment instead of five",
      ],
    },
    durationMin: 60,
    sessions: { de: "8 – 12 Sitzungen", en: "8 – 12 sessions" },
    pricing: {
      kind: "fixed",
      single: 649,
      overrides: [
        { sessions: 3, perSession: 599 },
        { sessions: 5, perSession: 549 },
        { sessions: 10, perSession: 509 },
      ],
    },
    group: { de: "Kombipakete", en: "Combination Packages" },
  },
  {
    slug: { de: "gefaessbehandlung", en: "vascular-treatment" },
    pillar: "laser",
    image: gefaessbehandlungImg,
    imageAlt: {
      de: "Nahaufnahme der Hautoberfläche",
      en: "Close-up of the skin's surface",
    },
    title: { de: "Gefäßbehandlung & Couperose", en: "Vascular Treatment & Rosacea" },
    headline: {
      de: { lead: "Rötungen", accent: "gezielt behandelt" },
      en: { lead: "Redness", accent: "treated with precision" },
    },
    excerpt: {
      de: "Erweiterte Äderchen und dauerhafte Rötungen im Gesicht werden gezielt verschlossen statt überschminkt.",
      en: "Dilated capillaries and persistent facial redness, closed off with precision rather than covered up with make-up.",
    },
    body: {
      de: [
        "Bei Couperose und Teleangiektasien sind kleine Gefäße dauerhaft erweitert und schimmern durch die Haut. Der Laser erhitzt gezielt das Blut in diesen Gefäßen, sodass sie sich verschließen und vom Körper abgebaut werden.",
        "Wie viele Sitzungen nötig sind, hängt stark vom Befund ab. Wir schätzen das im Erstgespräch realistisch ein und sagen Ihnen auch, wenn eine Behandlung wenig verspricht.",
      ],
      en: [
        "In rosacea and telangiectasia, small vessels are permanently dilated and show through the skin. The laser precisely heats the blood inside these vessels, causing them to close and be broken down by the body.",
        "How many sessions you need depends heavily on your individual findings. We give you a realistic estimate at your initial consultation, and we'll also tell you if a treatment isn't likely to help much.",
      ],
    },
    benefits: {
      de: [
        "Gezielt gegen erweiterte Äderchen und Rötungen",
        "Ärztliche Befundung vor der ersten Sitzung",
        "Ehrliche Einschätzung, auch gegen eine Behandlung",
      ],
      en: [
        "Targets dilated capillaries and redness directly",
        "Medical assessment before the first session",
        "An honest opinion, even if that means advising against treatment",
      ],
    },
    durationMin: 20,
    sessions: { de: "1 – 3 Sitzungen", en: "1 – 3 sessions" },
    pricing: { kind: "onRequest" },
  },
  {
    slug: { de: "pigmentflecken", en: "pigmentation" },
    pillar: "laser",
    image: pigmentfleckenImg,
    imageAlt: {
      de: "Nahaufnahme einer Schulter mit vereinzelten dunklen Hautstellen",
      en: "Close-up of a shoulder with a few scattered dark patches of skin",
    },
    title: { de: "Pigmentflecken", en: "Pigmentation" },
    headline: {
      de: { lead: "Pigmentflecken", accent: "aufgehellt" },
      en: { lead: "Pigmentation", accent: "visibly lightened" },
    },
    excerpt: {
      de: "Altersflecken und Sonnenschäden gezielt aufhellen, nach ärztlicher Abklärung des Befunds.",
      en: "Age spots and sun damage lightened with precision, once the finding has been medically assessed.",
    },
    body: {
      de: [
        "Der Laser zerlegt das Pigment in kleinste Partikel, die der Körper anschließend selbst abtransportiert. Der Fleck hellt über einige Wochen sichtbar auf.",
        "Vor jeder Behandlung steht die ärztliche Abklärung: Nicht jede dunkle Stelle ist ein harmloser Altersfleck. Auffällige Befunde untersuchen wir zuerst, statt sie zu lasern.",
      ],
      en: [
        "The laser breaks the pigment down into tiny particles, which the body then removes on its own. The spot visibly lightens over several weeks.",
        "Every treatment begins with a medical assessment: not every dark spot is a harmless age spot. We examine any unusual finding first, rather than treating it with the laser.",
      ],
    },
    benefits: {
      de: [
        "Ärztliche Abklärung vor jeder Behandlung",
        "Gezielt gegen Alters- und Sonnenflecken",
        "Ergebnis entwickelt sich über einige Wochen",
      ],
      en: [
        "Medical assessment before every treatment",
        "Targets age spots and sun damage specifically",
        "Result develops gradually over several weeks",
      ],
    },
    durationMin: 15,
    sessions: { de: "1 – 3 Sitzungen", en: "1 – 3 sessions" },
    pricing: { kind: "onRequest" },
  },
  {
    slug: { de: "aknenarben", en: "acne-scars" },
    pillar: "laser",
    image: aknenarbenImg,
    imageAlt: {
      de: "Nahaufnahme der Halspartie mit unebener Hautstruktur",
      en: "Close-up of the neck area with uneven skin texture",
    },
    title: { de: "Aknenarben", en: "Acne Scars" },
    headline: {
      de: { lead: "Aknenarben", accent: "geglättet" },
      en: { lead: "Acne scars", accent: "visibly smoothed" },
    },
    excerpt: {
      de: "Eingesunkene Narben und unebenes Hautbild werden über mehrere Sitzungen schrittweise geglättet.",
      en: "Sunken scars and uneven skin texture, gradually smoothed over several sessions.",
    },
    body: {
      de: [
        "Die Laserbehandlung regt die Haut an, neues Kollagen zu bilden. Eingesunkene Narben füllen sich dadurch von innen auf und das Hautbild wird gleichmäßiger.",
        "Das ist ein Prozess über Monate, kein einmaliger Eingriff. Wir besprechen vorab offen, welche Verbesserung realistisch ist und welche nicht.",
      ],
      en: [
        "The laser treatment stimulates the skin to produce new collagen. Sunken scars fill in from within as a result, and the skin's texture becomes more even.",
        "This is a process that takes months, not a one-off procedure. We discuss openly beforehand what improvement is realistic and what isn't.",
      ],
    },
    benefits: {
      de: [
        "Regt die körpereigene Kollagenbildung an",
        "Realistische Einschätzung vor Behandlungsbeginn",
        "Schrittweise Verbesserung über mehrere Sitzungen",
      ],
      en: [
        "Stimulates the skin's own collagen production",
        "A realistic assessment before treatment begins",
        "Gradual improvement over several sessions",
      ],
    },
    durationMin: 30,
    sessions: { de: "3 – 6 Sitzungen", en: "3 – 6 sessions" },
    pricing: { kind: "onRequest" },
  },
]

// Physio — bilingual.
const PHYSIO: LocalizedTreatment[] = [
  {
    slug: { de: "schmerztherapie", en: "pain-management" },
    pillar: "physio",
    image: schmerztherapieImg,
    imageAlt: {
      de: "Manuelle Unterstützung bei einer Rückenübung im Freien",
      en: "Hands providing support during an outdoor back exercise",
    },
    title: { de: "Schmerztherapie", en: "Pain Management" },
    headline: {
      de: { lead: "Schmerz", accent: "an der Ursache" },
      en: { lead: "Pain", accent: "treated at the source" },
    },
    excerpt: {
      de: "Akute Schmerzen haben eine Warnfunktion und sind deshalb eine wichtige Reaktion für den Körper.",
      en: "Acute pain has a warning function and is therefore an important response for the body.",
    },
    body: {
      de: [
        "Man unterscheidet zwischen akuten Schmerzen und chronischen Schmerzen.",
        "Bei länger anhaltenden Schmerzen verlieren sie diese Warnfunktion und es entsteht eine eigene Erkrankung: der chronische Schmerz.",
        "Bitte wenden Sie sich vertrauensvoll an unsere Schmerztherapie in der Praxis Dr. med. univ. Dost Mohammad.",
      ],
      en: [
        "A distinction is made between acute pain and chronic pain.",
        "When pain persists for a long time, it loses this warning function and becomes a condition in its own right: chronic pain.",
        "Please feel free to get in touch with our pain therapy service at Praxis Dr. med. univ. Dost Mohammad.",
      ],
    },
    benefits: {
      de: [
        "Ursachensuche statt reiner Symptomdämpfung",
        "Schulmedizin und Naturheilverfahren kombiniert",
        "Individueller Behandlungsplan nach gründlicher Untersuchung",
      ],
      en: [
        "Looking for the cause, not just dulling the symptom",
        "Conventional medicine combined with naturopathic methods",
        "An individual treatment plan after a thorough examination",
      ],
    },
    sessions: { de: "Nach Befund", en: "Based on assessment" },
    pricing: { kind: "onRequest" },
  },
  {
    slug: { de: "manuelle-therapie", en: "manual-therapy" },
    pillar: "physio",
    image: manuelleTherapieImg,
    imageAlt: {
      de: "Therapeut behandelt Schulter und Arm einer Patientin auf der Liege",
      en: "Therapist treating a patient's shoulder and arm on a treatment table",
    },
    title: { de: "Manuelle Therapie", en: "Manual Therapy" },
    headline: {
      de: { lead: "Blockaden", accent: "gelöst" },
      en: { lead: "Blockages", accent: "released" },
    },
    excerpt: {
      de: "Gezielte Handgriffe an Gelenken, Muskeln und Faszien, für Beweglichkeit ohne Schmerz.",
      en: "Targeted hands-on techniques for joints, muscles and fascia, for movement without pain.",
    },
    body: {
      de: [
        "In der manuellen Therapie arbeiten wir ausschließlich mit den Händen: Wir ertasten Blockaden in Gelenken, verspannte Muskulatur und verklebte Faszien und lösen sie gezielt.",
        "Der Vorteil gegenüber apparativen Verfahren ist die unmittelbare Rückmeldung: Wir spüren, wie das Gewebe reagiert, und passen die Behandlung im selben Moment an.",
        "Nach der Sitzung erhalten Sie Übungen für zu Hause. Ohne diese hält das Ergebnis meist nicht lange an.",
      ],
      en: [
        "In manual therapy, we work exclusively with our hands: we feel for restrictions in joints, tense muscles and adhered fascia, and release them in a targeted way.",
        "The advantage over equipment-based methods is immediate feedback. We feel how the tissue responds and adjust the treatment in the same moment.",
        "After the session, you'll receive exercises to do at home. Without them, the result usually doesn't last long.",
      ],
    },
    benefits: {
      de: [
        "Unmittelbare Anpassung während der Behandlung",
        "Übungen für zu Hause inklusive",
        "Ohne Medikamente und ohne Geräte",
      ],
      en: [
        "Immediate adjustments during treatment",
        "Take-home exercises included",
        "No medication, no equipment",
      ],
    },
    sessions: { de: "Nach Befund", en: "Based on assessment" },
    pricing: { kind: "onRequest" },
  },
  {
    slug: { de: "sportmedizin", en: "sports-medicine" },
    pillar: "physio",
    image: sportmedizinImg,
    imageAlt: {
      de: "Trainer und Athletin beim Training mit einem Medizinball",
      en: "Coach and athlete training together with a medicine ball",
    },
    title: { de: "Sportmedizin", en: "Sports Medicine" },
    headline: {
      de: { lead: "Zurück", accent: "in Bewegung" },
      en: { lead: "Back", accent: "in motion" },
    },
    excerpt: {
      de: "Auch bei Sportverletzungen oder Problemen mit dem Bewegungsapparat stehen wir Ihnen stets zur Seite.",
      en: "We're also here for you with sports injuries or issues affecting the musculoskeletal system.",
    },
    body: {
      de: [
        "Bei der Therapie und Diagnostik von Sportverletzungen arbeitet unser Arzt in Kröning mit den umliegenden radiologischen Praxen (Röntgen, Kernspinuntersuchungen), mit Orthopäden, Sportmediziner und den Krankenhäusern zusammen, um Ihnen den bestmöglichen Service zu bieten.",
        "Unsere Praxis gibt allen Sportlern, vom Freizeitsportler bis hin zum Leistungssportler, die Möglichkeit, sich beraten, untersuchen und behandeln zu lassen.",
        "Die häufigsten Sportverletzungen sind Akutverletzungen und das sogenannte Überlastungssyndrom. Je nach Sportart treten typische Erkrankungen und Verletzungen auf. Klassische Überlastungen sind z.B. der Tennisarm, oder der Golferellenbogen sowie Überlastungsbrüche von Knochen. Bei Sportverletzungen jeglicher Art, wenden Sie sich bitte umgehend an unsere Praxis.",
      ],
      en: [
        "For the diagnosis and treatment of sports injuries, our physician in Kröning works together with nearby radiology practices (X-ray, MRI), orthopaedists, sports physicians and hospitals, to offer you the best possible service.",
        "Our practice gives every athlete, from recreational to competitive, the opportunity to be advised, examined and treated.",
        "The most common sports injuries are acute injuries and so-called overuse syndrome. Typical conditions and injuries vary by sport. Classic overuse injuries include, for example, tennis elbow or golfer's elbow, as well as stress fractures. For sports injuries of any kind, please contact our practice promptly.",
      ],
    },
    benefits: {
      de: [
        "Betreuung bei Sportverletzungen und Beschwerden des Bewegungsapparats",
        "Wiederaufbau statt Schonhaltung",
        "Ärztlich begleiteter Wiedereinstieg ins Training",
      ],
      en: [
        "Support for sports injuries and musculoskeletal complaints",
        "Rebuilding strength, not just resting the injury",
        "Medically supervised return to training",
      ],
    },
    sessions: { de: "Nach Befund", en: "Based on assessment" },
    pricing: { kind: "onRequest" },
  },
  {
    slug: { de: "akupunktur-tcm", en: "acupuncture-and-tcm" },
    pillar: "physio",
    image: akupunkturTcmImg,
    imageAlt: {
      de: "Nahaufnahme von Akupunkturnadeln auf der Haut",
      en: "Close-up of acupuncture needles on the skin",
    },
    title: { de: "Akupunktur & TCM", en: "Acupuncture & TCM" },
    headline: {
      de: { lead: "Akupunktur", accent: "und TCM" },
      en: { lead: "Acupuncture", accent: "and TCM" },
    },
    excerpt: {
      de: "Akupunktur und TCM, ärztlich durchgeführt. Eine Ergänzung zur Schulmedizin, kein Ersatz.",
      en: "Acupuncture and TCM, physician-led. A complement to conventional medicine, not a replacement.",
    },
    // Two paragraphs below reuse copy verbatim from the practice's own
    // existing website, including an efficacy claim ("vielfach
    // wissenschaftlich nachgewiesener Wirksamkeit" / "scientifically proven
    // in many cases") stronger than the Heilmittelwerbegesetz comfortably
    // allows. Translated faithfully, not softened — see the go-live guard in
    // content.test.ts, which blocks both the German and English wording
    // until a lawyer clears it.
    body: {
      de: [
        "Mit den variablen Methoden der Akupunktur und der TCM kommen unsere Patienten in den Genuss fernöstlicher Behandlungsmethoden der TCM mit sehr langer Tradition und vielfach wissenschaftlich nachgewiesener Wirksamkeit.",
        "Viele akute und chronische Beschwerden sprechen gut auf die Akupunktur und Maßnahmen der TCM an. Im Vergleich zur Schulmedizin verfolgen Akupunktur und TCM stets ein ganzheitliches Behandlungsziel. Der Mensch wird bei den Therapieansätzen der TCM in seiner Gesamtheit erfasst, physisch wie psychisch.",
        "Die TCM ergänzt die schulmedizinische Behandlung vieler Beschwerden. Unser Privatarzt in Kröning bietet viele Methoden der TCM an wie Schädelakupunktur, Körperakupunktur, Schröpfen, Neuraltherapie, Tui Na Massage und Qigong Gymnastik an.",
      ],
      en: [
        "With the varied methods of acupuncture and TCM, our patients benefit from Far Eastern treatment methods with a very long tradition and effectiveness that has been scientifically proven in many cases.",
        "Many acute and chronic complaints respond well to acupuncture and TCM measures. Compared with conventional medicine, acupuncture and TCM always pursue a holistic treatment goal. In TCM's therapeutic approach, the person is understood as a whole, physically and mentally.",
        "TCM complements the conventional medical treatment of many complaints. Our private physician in Kröning offers many TCM methods, including scalp acupuncture, body acupuncture, cupping, neural therapy, Tui Na massage and Qigong exercises.",
      ],
    },
    benefits: {
      de: [
        "Ärztlich durchgeführte Akupunktur",
        "Ergänzend zur schulmedizinischen Behandlung",
        "Zusatzqualifikation Naturheilverfahren und Akupunktur",
      ],
      en: [
        "Acupuncture carried out by a physician",
        "Complementary to conventional medical treatment",
        "Additional qualification in naturopathy and acupuncture",
      ],
    },
    sessions: { de: "Nach Befund", en: "Based on assessment" },
    pricing: { kind: "onRequest" },
  },
  {
    slug: { de: "stosswellentherapie", en: "shockwave-therapy" },
    pillar: "physio",
    image: stosswellentherapieImg,
    imageAlt: {
      de: "Behandlungsgerät wird an der Ferse angesetzt",
      en: "Treatment device applied to the heel",
    },
    title: { de: "Stoßwellentherapie", en: "Shockwave Therapy" },
    headline: {
      de: { lead: "Stoßwellen", accent: "gegen Verkalkung" },
      en: { lead: "Shockwaves", accent: "against calcification" },
    },
    excerpt: {
      de: "Bei Fersensporn, Tennisellenbogen und Kalkschulter: energiereiche Druckwellen statt Operation.",
      en: "High-energy pressure waves instead of surgery, for heel spurs, tennis elbow and calcific shoulder.",
    },
    body: {
      de: [
        "Energiereiche Druckwellen werden von außen gezielt auf das schmerzende Gewebe gerichtet. Sie regen den Stoffwechsel an und können Verkalkungen lösen.",
        "Typische Anwendungsgebiete sind Fersensporn, Tennis- und Golferellenbogen sowie die Kalkschulter, also Beschwerden, bei denen konservative Behandlung oft lange dauert.",
        "Eine Sitzung dauert wenige Minuten. Meist sind drei bis fünf Sitzungen im Abstand von einer Woche nötig.",
      ],
      en: [
        "High-energy pressure waves are directed from outside precisely onto the painful tissue. They stimulate metabolism and can help break down calcification.",
        "Typical areas of use are heel spurs, tennis and golfer's elbow, and calcific shoulder, all conditions where conservative treatment often takes a long time.",
        "A session takes just a few minutes. Usually three to five sessions, spaced a week apart, are needed.",
      ],
    },
    benefits: {
      de: [
        "Ohne Operation und ohne Narkose",
        "Wenige Minuten pro Sitzung",
        "Meist drei bis fünf Sitzungen",
      ],
      en: [
        "No surgery, no anaesthesia",
        "Just a few minutes per session",
        "Usually three to five sessions",
      ],
    },
    sessions: { de: "3 – 5 Sitzungen", en: "3 – 5 sessions" },
    pricing: { kind: "onRequest" },
  },
]

// Ästhetik — bilingual.
const AESTHETIK: LocalizedTreatment[] = [
  {
    slug: { de: "faltenbehandlung", en: "wrinkle-treatment" },
    pillar: "aesthetik",
    image: faltenbehandlungImg,
    imageAlt: {
      de: "Fachkraft setzt eine Injektion im Stirnbereich",
      en: "Practitioner administering an injection to the forehead area",
    },
    title: { de: "Faltenbehandlung", en: "Wrinkle Treatment" },
    headline: {
      de: { lead: "Falten", accent: "zurückhaltend behandelt" },
      en: { lead: "Wrinkles", accent: "treated conservatively" },
    },
    excerpt: {
      de: "Zurückhaltend dosiertes Botulinumtoxin gegen Zornes-, Stirn- und Lachfalten. Die Mimik bleibt erhalten.",
      en: "Conservatively dosed botulinum toxin for frown lines, forehead lines and crow's feet, so your natural expression is preserved.",
    },
    body: {
      de: [
        "Botulinumtoxin entspannt gezielt die Muskeln, die eine Falte erzeugen. Behandelt werden vor allem Zornesfalte, Stirnfalten und die Fältchen um die Augen.",
        "Unser Anspruch ist ein ausgeruhtes, nicht ein behandeltes Gesicht. Wir dosieren deshalb bewusst zurückhaltend: Sie sollen weiterhin lachen und die Stirn runzeln können.",
        "Die Wirkung setzt nach einigen Tagen ein und hält je nach Areal und Stoffwechsel etwa drei bis sechs Monate an. Die Behandlung führt Dr. med. univ. Dost Mohammad persönlich durch.",
      ],
      en: [
        "Botulinum toxin selectively relaxes the muscles that create a wrinkle. We mainly treat the frown line, forehead lines and the fine lines around the eyes.",
        "Our aim is a rested face, not a treated one. That's why we deliberately dose conservatively. You should still be able to laugh and furrow your brow.",
        "The effect sets in after a few days and lasts around three to six months, depending on the area and your metabolism. The treatment is carried out personally by Dr. med. univ. Dost Mohammad.",
      ],
    },
    benefits: {
      de: [
        "Bewusst zurückhaltende Dosierung",
        "Mimik bleibt erhalten",
        "Persönlich durchgeführt von Dr. med. univ. Dost Mohammad",
      ],
      en: [
        "Deliberately conservative dosing",
        "Natural expression is preserved",
        "Carried out personally by Dr. med. univ. Dost Mohammad",
      ],
    },
    durationMin: 20,
    sessions: { de: "Wiederholung nach 3 – 6 Monaten", en: "Repeated every 3 – 6 months" },
    pricing: { kind: "onRequest" },
  },
  {
    slug: { de: "hyaluron", en: "dermal-fillers" },
    pillar: "aesthetik",
    image: hyaluronImg,
    imageAlt: {
      de: "Nahaufnahme einer Lippenbehandlung mit feiner Nadel",
      en: "Close-up of a lip treatment with a fine needle",
    },
    title: { de: "Hyaluron & Filler", en: "Dermal Fillers" },
    headline: {
      de: { lead: "Volumen", accent: "wo es fehlt" },
      en: { lead: "Volume", accent: "where it's missing" },
    },
    excerpt: {
      de: "Hyaluronsäure für Lippen, Wangen und Nasolabialfalten, aufbauend statt auffallend.",
      en: "Hyaluronic acid for lips, cheeks and nasolabial folds: restorative rather than noticeable.",
    },
    body: {
      de: [
        "Hyaluronsäure ist ein körpereigener Stoff, der Wasser bindet und dem Gewebe Volumen gibt. Mit den Jahren nimmt sie ab, das Gesicht wirkt eingefallener.",
        "Wir setzen Filler dort ein, wo tatsächlich Volumen fehlt: an Wangen, Nasolabialfalten oder Lippen. Das Ziel ist ein natürliches Ergebnis, das niemandem als Behandlung auffällt.",
        "Vor jeder Behandlung besprechen wir offen, was medizinisch sinnvoll ist und wovon wir abraten. Nicht jeder Wunsch lässt sich verantwortungsvoll umsetzen.",
      ],
      en: [
        "Hyaluronic acid is a substance the body produces naturally that binds water and gives tissue volume. It decreases over the years, which is why the face can look more sunken.",
        "We use fillers only where volume is genuinely missing, whether in the cheeks, nasolabial folds or lips. The aim is a natural result that no one recognises as a treatment.",
        "Before every treatment, we discuss openly what makes medical sense and what we'd advise against. Not every wish can be responsibly fulfilled.",
      ],
    },
    benefits: {
      de: [
        "Körpereigener Stoff, gut verträglich",
        "Ergebnis unmittelbar sichtbar",
        "Offene Beratung, auch gegen eine Behandlung",
      ],
      en: [
        "A substance the body produces naturally, well tolerated",
        "Result visible immediately",
        "Open advice, even if that means advising against treatment",
      ],
    },
    durationMin: 30,
    sessions: { de: "Nach Befund", en: "Based on assessment" },
    pricing: { kind: "onRequest" },
  },
  {
    slug: { de: "kryolipolyse", en: "cryolipolysis" },
    pillar: "aesthetik",
    image: kryolipolyseImg,
    imageAlt: {
      de: "Behandlungsgerät wird auf dem Bauch angewendet",
      en: "Treatment device applied to the abdomen",
    },
    title: { de: "Kryolipolyse", en: "Cryolipolysis" },
    headline: {
      de: { lead: "Fettpolster", accent: "ohne Operation" },
      en: { lead: "Fat pockets", accent: "without surgery" },
    },
    excerpt: {
      de: "Gezielte Behandlung hartnäckiger Fettpolster, die auf Diät und Training nicht ansprechen.",
      en: "A targeted treatment for stubborn fat pockets that do not respond to diet or exercise.",
    },
    // Dense clinical German with a Greek etymology aside — translated
    // plainly rather than elegantly, per the source material.
    body: {
      de: [
        "Da wundert es nicht, dass es eine ausgesprochene Vielfalt an Techniken und Methoden zur chirurgischen Fettreduktion gibt: Liposuktion in Tumeszenz-Lokalanästhesie, Ultraschall, Radiowellen, Fett-weg-Spritze, … – um nur ein paar zu nennen.",
        "Auch auf diesem Gebiet fokussiert man sich mehr und mehr auf minimalinvasive Methoden mit möglichst geringer Ausfallzeit der Patienten. Eine derartige minimalinvasive Methode ist auch die Kryolipolyse.",
        "Die Kryolipolyse (von Altgriechisch κρύος [kryos] „Frost“, „Eis“, λίπα [lipa] „Fett“ und λύσις [lysis] „Lösung“, „Auflösung“) ist eine relativ neue Methode der Fettreduktion. Sie zielt vor allem auf Fettpölsterchen ab, die schwer mit Diäten oder körperlichem Training effektiv reduziert werden können.",
      ],
      en: [
        "It's therefore no surprise that there is a wide variety of techniques and methods for surgical fat reduction: liposuction under tumescent local anaesthesia, ultrasound, radio waves, fat-dissolving injections and more, to name just a few.",
        "In this field too, the focus is increasingly shifting toward minimally invasive methods with as little downtime for patients as possible. Cryolipolysis is one such minimally invasive method.",
        "Cryolipolysis (from Ancient Greek κρύος [kryos], \"frost\", \"ice\", λίπα [lipa], \"fat\", and λύσις [lysis], \"dissolution\", \"breakdown\") is a relatively new method of fat reduction. It targets mainly small fat pockets that are difficult to reduce effectively through diet or physical exercise.",
      ],
    },
    benefits: {
      de: [
        "Minimalinvasiv, ohne Operation",
        "Geringe Ausfallzeit",
        "Gezielt gegen hartnäckige Fettpölsterchen",
      ],
      en: [
        "Minimally invasive, no surgery",
        "Little downtime",
        "Targets stubborn fat pockets",
      ],
    },
    durationMin: 60,
    sessions: { de: "Nach Befund", en: "Based on assessment" },
    pricing: { kind: "onRequest" },
  },
  {
    slug: { de: "farblichttherapie", en: "light-therapy" },
    pillar: "aesthetik",
    image: farblichttherapieImg,
    imageAlt: {
      de: "Violett leuchtende LED-Lichtquellen im Nahbereich",
      en: "Violet LED light sources glowing at close range",
    },
    title: { de: "Farblichttherapie", en: "Light Therapy" },
    headline: {
      de: { lead: "Licht", accent: "als Therapie" },
      en: { lead: "Light", accent: "as therapy" },
    },
    excerpt: {
      de: "Farbiges Licht, von Arzt und Patient gemeinsam gewählt, für Stoffwechsel und Wohlbefinden.",
      en: "Coloured light, chosen by physician and patient together, for metabolism and wellbeing.",
    },
    // Reuses copy verbatim from the practice's own existing website,
    // including an explicit cure claim naming depression ("zu heilen" /
    // "to cure", "heilsam" / "healing") stronger than the
    // Heilmittelwerbegesetz comfortably allows. Translated faithfully, not
    // softened — see the go-live guard in content.test.ts, which blocks
    // both the German and English wording until a lawyer clears it.
    body: {
      de: [
        "Die Lichttherapie ist ein anerkanntes medizinisches Verfahren, um verschiedene Erkrankungen, die Körper und Seele betreffen, zu heilen. In der Privatarztpraxis Dr. med. univ. Dost Mohammad in Kröning bieten wir Ihnen Lichttherapie an.",
        "Auch in Zusammenhang mit Depressionen, die keinem saisonalen Muster folgen, kann eine Farblichttherapie heilsam sein.",
        "In Verbindung mit Depressionen werden auch oft Schlafstörungen beklagt, die wiederum Stress beim Betroffenen auslösen. Auch bei diesen Störungen ist eine Lichttherapie sinnvoll.",
      ],
      en: [
        "Light therapy is a recognised medical procedure used to cure various illnesses affecting body and mind. At the private practice of Dr. med. univ. Dost Mohammad in Kröning, we offer light therapy.",
        "In connection with depression that does not follow a seasonal pattern, colour light therapy can be healing.",
        "Depression is also often accompanied by sleep disturbances, which in turn cause stress for those affected. Light therapy can also be helpful for these disturbances.",
      ],
    },
    benefits: {
      de: [
        "Farbe wird gemeinsam von Arzt und Patient ausgewählt",
        "Sanftes, nicht-invasives Verfahren",
        "Ergänzend zu anderen Behandlungen einsetzbar",
      ],
      en: [
        "Colour is chosen together by physician and patient",
        "A gentle, non-invasive procedure",
        "Can be used alongside other treatments",
      ],
    },
    durationMin: 30,
    sessions: { de: "Nach Befund", en: "Based on assessment" },
    pricing: { kind: "onRequest" },
  },
  {
    slug: { de: "aesthetische-medizin", en: "aesthetic-medicine" },
    pillar: "aesthetik",
    image: aesthetischeMedizinImg,
    imageAlt: {
      de: "Beratungsgespräch in einem ruhigen Behandlungszimmer",
      en: "Consultation taking place in a calm treatment room",
    },
    title: { de: "Ästhetische Medizin", en: "Aesthetic Medicine" },
    headline: {
      de: { lead: "Ästhetische", accent: "Medizin" },
      en: { lead: "Aesthetic", accent: "Medicine" },
    },
    excerpt: {
      de: "Behandlungen für das äußere Erscheinungsbild, ärztlich und zurückhaltend dosiert.",
      en: "Physician-led treatments for your outward appearance, conservatively dosed.",
    },
    body: {
      de: [
        "Schönheit ist für die meisten Menschen wichtig, um sich selbstsicher und attraktiv zu fühlen. Wer sich selbst schön findet, hat eine positivere Ausstrahlung.",
        "Mit der Zeit verändert sich jedoch die Haut und somit auch das Aussehen. Falten um Mund, Augen und Nase oder auf der Stirn lassen ein Gesicht älter wirken.",
        "Immer mehr Frauen und Männer entscheiden sich für kleine Schönheitskorrekturen, sie sind heutzutage keine Seltenheit mehr. Worauf Sie achten sollten und was wirklich hilft, erfahren Sie durch die Praxis für Ästhetische Medizin, Dr. med. univ. Dost Mohammad in Kröning.",
      ],
      en: [
        "For most people, beauty matters because it helps them feel confident and attractive. People who see themselves as attractive tend to come across more positively.",
        "Over time, however, the skin changes, and so does one's appearance. Lines around the mouth, eyes and nose, or on the forehead, can make a face look older.",
        "More and more women and men are opting for minor cosmetic corrections; they are no longer unusual today. To find out what to look out for and what really helps, contact the practice for Aesthetic Medicine, Dr. med. univ. Dost Mohammad, in Kröning.",
      ],
    },
    benefits: {
      de: [
        "Ärztlich durchgeführt, nicht kosmetisch",
        "Ausführliche Beratung vor jeder Behandlung",
        "Zurückhaltender, natürlicher Ansatz",
      ],
      en: [
        "Carried out by a physician, not a beautician",
        "Detailed consultation before every treatment",
        "A conservative, natural approach",
      ],
    },
    sessions: { de: "Nach Befund", en: "Based on assessment" },
    pricing: { kind: "onRequest" },
  },
]

export function treatments(locale: Locale): Treatment[] {
  return [...LASER, ...PHYSIO, ...AESTHETIK].map((t) => resolveTreatment(t, locale))
}

export function treatmentsByPillar(pillar: Pillar, locale: Locale): Treatment[] {
  return treatments(locale).filter((t) => t.pillar === pillar)
}

export function treatmentBySlug(slug: string, locale: Locale): Treatment | undefined {
  return treatments(locale).find((t) => t.slug === slug)
}
