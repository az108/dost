import {
  createContext,
  useContext,
  useId,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

type AccordionMode = "single" | "multiple"

interface AccordionContextValue {
  isOpen: (value: string) => boolean
  toggle: (value: string) => void
}

const AccordionContext = createContext<AccordionContextValue | null>(null)

function useAccordionContext() {
  const ctx = useContext(AccordionContext)
  if (!ctx) throw new Error("Accordion parts must be rendered inside <Accordion>")
  return ctx
}

interface AccordionItemContextValue {
  value: string
  baseId: string
}

const AccordionItemContext = createContext<AccordionItemContextValue | null>(null)

function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext)
  if (!ctx) throw new Error("AccordionTrigger/AccordionContent must be rendered inside <AccordionItem>")
  return ctx
}

export function Accordion({
  type = "single",
  collapsible = false,
  className,
  children,
  ...rest
}: {
  type?: AccordionMode
  collapsible?: boolean
  className?: string
  children: ReactNode
} & Omit<HTMLAttributes<HTMLDivElement>, "children">) {
  const [openValues, setOpenValues] = useState<string[]>([])

  function toggle(value: string) {
    setOpenValues((current) => {
      const open = current.includes(value)
      if (type === "single") {
        if (open) return collapsible ? [] : current
        return [value]
      }
      return open ? current.filter((v) => v !== value) : [...current, value]
    })
  }

  return (
    <AccordionContext.Provider value={{ isOpen: (value) => openValues.includes(value), toggle }}>
      <div className={cn("flex w-full flex-col", className)} {...rest}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

export function AccordionItem({
  value,
  className,
  children,
  ...rest
}: {
  value: string
  className?: string
  children: ReactNode
} & Omit<HTMLAttributes<HTMLDivElement>, "children">) {
  const baseId = useId()

  return (
    <AccordionItemContext.Provider value={{ value, baseId }}>
      <div className={cn("border-b border-brand-100 last:border-b-0", className)} {...rest}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

export function AccordionTrigger({
  className,
  children,
  ...rest
}: {
  className?: string
  children: ReactNode
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "type" | "onClick">) {
  const { isOpen, toggle } = useAccordionContext()
  const { value, baseId } = useAccordionItemContext()
  // Always emit aria-expanded — including the "false" case — so assistive
  // tech can announce the collapsed state, not just the expanded one.
  const open = isOpen(value)

  return (
    <h3 className="flex">
      <button
        type="button"
        id={`${baseId}-trigger`}
        aria-controls={`${baseId}-content`}
        aria-expanded={open}
        onClick={() => toggle(value)}
        className={cn(
          "flex flex-1 items-center justify-between gap-4 py-4 text-left font-semibold text-brand-950 transition-colors hover:text-brand",
          className,
        )}
        {...rest}
      >
        {children}
        <ChevronDown
          className={cn("size-5 shrink-0 text-brand-600 transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>
    </h3>
  )
}

export function AccordionContent({
  className,
  children,
  ...rest
}: {
  className?: string
  children: ReactNode
} & Omit<HTMLAttributes<HTMLDivElement>, "children">) {
  const { isOpen } = useAccordionContext()
  const { value, baseId } = useAccordionItemContext()

  if (!isOpen(value)) return null

  return (
    <div
      id={`${baseId}-content`}
      role="region"
      aria-labelledby={`${baseId}-trigger`}
      className={cn("pb-4", className)}
      {...rest}
    >
      {children}
    </div>
  )
}
