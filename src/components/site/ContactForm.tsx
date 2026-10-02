import { useState } from "react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useUi } from "@/content/ui"
import { praxis } from "@/content/praxis"

/**
 * Contact form that composes an email to the practice. On a static host there
 * is no backend, so submitting opens the visitor's mail client with the fields
 * pre-filled (mailto). Swap for a Supabase edge function / form service later.
 */
export function ContactForm() {
  const ui = useUi()
  const f = ui.contact.form
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(name ? `${f.subject} – ${name}` : f.subject)
    const body = encodeURIComponent(`${f.name}: ${name}\n${f.email}: ${email}\n\n${message}`)
    window.location.href = `mailto:${praxis.email}?subject=${subject}&body=${body}`
  }

  const field =
    "mt-1 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-ink shadow-sm focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20"

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          {f.name}
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className={field} />
        </label>
        <label className="block text-sm font-medium text-ink">
          {f.email}
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className={field} />
        </label>
      </div>
      <label className="block text-sm font-medium text-ink">
        {f.message}
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} className={field} />
      </label>
      <button type="submit" className={cn(buttonVariants({ size: "lg" }), "rounded-full bg-brand px-8 text-white hover:bg-brand/90")}>
        {f.send}
      </button>
      <p className="text-xs text-neutral-500">{f.note}</p>
    </form>
  )
}
