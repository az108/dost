import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { FaqItem } from "@/content/types"

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  if (items.length === 0) return null
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem key={item.question} value={`item-${i}`}>
          <AccordionTrigger className="text-left font-display text-lg font-bold text-brand">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-base leading-relaxed text-brand-800">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
