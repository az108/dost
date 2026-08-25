import { useId, useState, type ChangeEvent, type FormEvent } from "react"
import { Link } from "react-router-dom"
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react"
import { practice } from "@/content/practice"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const TOPIC_OPTIONS = ["Terminanfrage", "Rückruf erbeten", "Allgemeine Frage"] as const

// Mirrors the server-side caps in public/contact.php — keeping them in step
// means a visitor sees the limit before submitting, not after.
const LIMITS = { name: 100, email: 200, phone: 50, topic: 60, message: 3000 } as const

interface FormValues {
  name: string
  email: string
  phone: string
  topic: string
  message: string
  consent: boolean
  website: string
}

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  topic: "",
  message: "",
  consent: false,
  website: "",
}

type FieldErrors = Partial<Record<"name" | "email" | "message" | "consent", string>>

type Status = "idle" | "submitting" | "success" | "error"

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values: FormValues): FieldErrors {
  const errors: FieldErrors = {}
  if (!values.name.trim()) {
    errors.name = "Bitte geben Sie Ihren Namen an."
  }
  if (!values.email.trim()) {
    errors.email = "Bitte geben Sie Ihre E-Mail-Adresse an."
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse an."
  }
  if (!values.message.trim()) {
    errors.message = "Bitte geben Sie eine Nachricht ein."
  }
  if (!values.consent) {
    errors.consent = "Bitte stimmen Sie der Datenverarbeitung zu."
  }
  return errors
}

const inputClass =
  "w-full rounded-lg border border-brand-200 bg-white px-4 py-2.5 text-brand-950 placeholder:text-brand-400 transition-colors"
const errorInputClass = "border-red-400"

/**
 * Same-origin contact form. Posts to /contact.php (public/contact.php),
 * a small PHP mail script — see that file for the server side.
 *
 * Deliberately narrow by design: no symptom or diagnosis field, and the
 * message field steers people away from health details (Art. 9 DSGVO
 * special-category data). Do not add fields beyond those already here.
 */
export function ContactForm() {
  const uid = useId()
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<Status>("idle")

  const ids = {
    name: `${uid}-name`,
    email: `${uid}-email`,
    phone: `${uid}-phone`,
    topic: `${uid}-topic`,
    message: `${uid}-message`,
    consent: `${uid}-consent`,
    website: `${uid}-website`,
  }

  function updateField(field: keyof FormValues) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value
      setValues((prev) => ({ ...prev, [field]: value }))
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) {
      return
    }

    setStatus("submitting")

    const formData = new FormData()
    formData.append("name", values.name.trim())
    formData.append("email", values.email.trim())
    formData.append("phone", values.phone.trim())
    formData.append("topic", values.topic)
    formData.append("message", values.message.trim())
    formData.append("consent", "true")
    // Honeypot: forwarded as-is. A real visitor never touches it, so it is
    // always empty; a bot filling it in silently gets a fake success from
    // contact.php instead of ever reaching the practice.
    formData.append("website", values.website)

    try {
      const res = await fetch("/contact.php", { method: "POST", body: formData })
      const data = await res.json().catch(() => null)
      if (!res.ok || !data?.ok) {
        throw new Error("submission_failed")
      }
      setStatus("success")
      setValues(initialValues)
    } catch {
      setStatus("error")
    }
  }

  const describedBy = (field: keyof FieldErrors, helperId?: string) => {
    const parts = [errors[field] ? `${ids[field]}-error` : null, helperId ?? null].filter(Boolean)
    return parts.length > 0 ? parts.join(" ") : undefined
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor={ids.name} className="text-sm font-semibold text-brand-900">
          Name
        </label>
        <input
          id={ids.name}
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={LIMITS.name}
          value={values.name}
          onChange={updateField("name")}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={describedBy("name")}
          className={cn(inputClass, errors.name && errorInputClass)}
        />
        {errors.name ? (
          <p id={`${ids.name}-error`} className="text-sm text-red-600">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={ids.email} className="text-sm font-semibold text-brand-900">
          E-Mail
        </label>
        <input
          id={ids.email}
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={LIMITS.email}
          value={values.email}
          onChange={updateField("email")}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={describedBy("email")}
          className={cn(inputClass, errors.email && errorInputClass)}
        />
        {errors.email ? (
          <p id={`${ids.email}-error`} className="text-sm text-red-600">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={ids.phone} className="text-sm font-semibold text-brand-900">
          Telefon (optional)
        </label>
        <input
          id={ids.phone}
          name="phone"
          type="tel"
          autoComplete="tel"
          maxLength={LIMITS.phone}
          value={values.phone}
          onChange={updateField("phone")}
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={ids.topic} className="text-sm font-semibold text-brand-900">
          Anliegen
        </label>
        <select
          id={ids.topic}
          name="topic"
          value={values.topic}
          onChange={updateField("topic")}
          className={inputClass}
        >
          <option value="">Bitte wählen</option>
          {TOPIC_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={ids.message} className="text-sm font-semibold text-brand-900">
          Nachricht
        </label>
        <textarea
          id={ids.message}
          name="message"
          rows={5}
          required
          maxLength={LIMITS.message}
          value={values.message}
          onChange={updateField("message")}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describedBy("message", `${ids.message}-helper`)}
          className={cn(inputClass, errors.message && errorInputClass)}
        />
        <p id={`${ids.message}-helper`} className="text-sm text-brand-600">
          Bitte senden Sie uns keine Angaben zu Beschwerden oder Diagnosen. Für alles Medizinische
          vereinbaren Sie bitte einen Termin.
        </p>
        {errors.message ? (
          <p id={`${ids.message}-error`} className="text-sm text-red-600">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-start gap-3">
          <input
            id={ids.consent}
            name="consent"
            type="checkbox"
            required
            checked={values.consent}
            onChange={updateField("consent")}
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={describedBy("consent")}
            className="mt-1 size-4 shrink-0 accent-action-ink"
          />
          <label htmlFor={ids.consent} className="text-sm leading-relaxed text-brand-700">
            Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage
            gespeichert werden. Weitere Informationen finden Sie in der{" "}
            <Link to="/datenschutz" className="font-semibold text-brand underline">
              Datenschutzerklärung
            </Link>
            .
          </label>
        </div>
        {errors.consent ? (
          <p id={`${ids.consent}-error`} className="text-sm text-red-600">
            {errors.consent}
          </p>
        ) : null}
      </div>

      {/* Honeypot: visually hidden and skipped by assistive tech. A real
          visitor never sees or reaches it; a script that fills every field
          in the DOM will fill this one too, and contact.php treats a
          non-empty value here as a bot submission. */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor={ids.website}>Webseite</label>
        <input
          id={ids.website}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={values.website}
          onChange={updateField("website")}
        />
      </div>

      <Button
        type="submit"
        variant="action"
        size="lg"
        disabled={status === "submitting"}
        className="self-start gap-2"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-5 shrink-0 animate-spin" aria-hidden="true" />
            Wird gesendet…
          </>
        ) : (
          "Nachricht senden"
        )}
      </Button>

      <div aria-live="polite" role="status">
        {status === "success" ? (
          <p className="flex items-center gap-2 text-success">
            <CheckCircle2 className="size-5 shrink-0" aria-hidden="true" />
            Vielen Dank für Ihre Nachricht. Wir melden uns so bald wie möglich bei Ihnen.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="flex flex-col gap-2 text-red-600">
            <span className="flex items-center gap-2">
              <AlertCircle className="size-5 shrink-0" aria-hidden="true" />
              Ihre Nachricht konnte leider nicht gesendet werden.
            </span>
            <span className="text-brand-700">
              Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an{" "}
              <a href={`mailto:${practice.email}`} className="font-semibold text-brand underline">
                {practice.email}
              </a>
              .
            </span>
          </p>
        ) : null}
      </div>
    </form>
  )
}
