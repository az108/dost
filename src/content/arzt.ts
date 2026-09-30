import type { Loc } from "@/lib/i18n"

export const arzt: {
  name: string
  qualifications: Loc
  intro: Loc<string[]>
  bio: Loc<string[]>
} = {
  name: "Dr. med. univ. Dost Mohammad",
  qualifications: {
    de: "Praktischer Arzt, Notfallmedizin, Naturheilverfahren und Akupunktur",
    en: "General practitioner, emergency medicine, naturopathy and acupuncture",
  },
  intro: {
    de: [
      "Hand in Hand für Ihre Gesundheit ist die Devise unseres Arztes in Magersdorf. Durch die verschiedensten Spezialisierungen in jeweiligen Fachbereichen kann er Ihnen medizinische Versorgung auf höchstem Niveau anbieten.",
      "Durch die langjährigen und vielfältigen Erfahrungen, die unser Arzt vorweisen kann, sind Sie in unserer Praxis in Magersdorf in besten interdisziplinären Händen.",
    ],
    en: [
      "Hand in hand for your health is the guiding principle of our doctor in Magersdorf. Through a wide range of specialisations in their respective fields, he offers you medical care at the highest level.",
      "Thanks to the many years of varied experience our doctor brings, you are in the best interdisciplinary hands at our practice in Magersdorf.",
    ],
  },
  bio: {
    de: [
      "Dr. Mohammad ist bekannt für sein vernetztes Denken. Ob klassische Schulmedizin oder Naturheilverfahren, für ihn steht der Patient mit seinen individuellen Anliegen im Vordergrund.",
      "TCM, Homöopathie und Akupunktur sind seine Spezialgebiete in der Naturheilkunde. Aber auch Verfahren der ästhetischen Medizin, wie Hautverjüngungsmaßnahmen mit Botox, Hyaluron, PRP oder Fädentechnologie weiß er zu beherrschen.",
    ],
    en: [
      "Dr. Mohammad is known for his joined-up thinking. Whether classical conventional medicine or natural healing, the patient and their individual concerns always come first for him.",
      "TCM, homeopathy and acupuncture are his specialities in naturopathy. He is equally skilled in aesthetic-medicine procedures such as skin rejuvenation with Botox, hyaluronic acid, PRP or thread lifting.",
    ],
  },
}
