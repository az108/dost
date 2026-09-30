import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"

export type Lang = "de" | "en"

/** A value that exists in both site languages. */
export type Loc<T = string> = { de: T; en: T }

const STORAGE_KEY = "dost-lang"

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
}

const LanguageContext = createContext<LangCtx | null>(null)

function initialLang(): Lang {
  if (typeof window === "undefined") return "de"
  const saved = window.localStorage.getItem(STORAGE_KEY)
  return saved === "en" ? "en" : "de" // German is the default
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const value = useMemo(() => ({ lang, setLang }), [lang])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang(): LangCtx {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider")
  return ctx
}

/**
 * Returns a resolver `t` that picks the current language out of a `Loc` value.
 * `t({ de: "Hallo", en: "Hello" })` → "Hallo" or "Hello".
 */
export function useT() {
  const { lang } = useLang()
  return function t<T>(loc: Loc<T>): T {
    return loc[lang]
  }
}
