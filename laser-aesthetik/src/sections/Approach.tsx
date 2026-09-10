import { Container } from "@/components/layout/Container"
import { Section, type SectionTone } from "@/components/layout/Section"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { FeatureList } from "@/components/content/FeatureList"
import { useT } from "@/content/ui"

/**
 * Replaces DoctorIntro, which carried a portrait of Dr. Dost, his name and
 * his qualifications on both the home page and Praxis.
 *
 * The center is a separate business from his practice and has no staff to
 * name yet, so this slot carries the method rather than a person. When the
 * client supplies a team, this is where it goes — a named practitioner is
 * a stronger trust signal than a list of principles, and the layout already
 * has the two-column shape for it.
 *
 * Prop signature deliberately identical to DoctorIntro's, so the call sites
 * changed by name alone.
 */
export function Approach({
  tone = "light",
}: {
  tone?: SectionTone
} = {}) {
  const t = useT()

  return (
    <Section tone={tone}>
      <Container>
        <div className="flex max-w-3xl flex-col gap-6">
          <SectionHeader
            eyebrow={t("approachEyebrow")}
            title={t("approachTitle")}
            accent={t("approachAccent")}
          />
          <p className="text-lg leading-relaxed text-brand-800">{t("approachBody")}</p>
          <FeatureList
            items={[t("approachPoint1"), t("approachPoint2"), t("approachPoint3")]}
          />
        </div>
      </Container>
    </Section>
  )
}
