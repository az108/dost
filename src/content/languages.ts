/**
 * The "long tail" of languages offered in the switcher beyond the five reviewed
 * ones (de/en/es/fr/it). These are NOT hand- or Gemini-translated: when a
 * visitor picks one we translate the page on their own device via the browser's
 * built-in Translator API (free, no server, no key), and where that is not
 * available we nudge them to their browser's own "translate this page" feature.
 *
 * Each entry only needs display metadata: a BCP-47 `code`, the `name` written in
 * that language (so a speaker recognises it), an `english` name (for the search
 * filter), an ISO-3166 alpha-2 `country` for the flag, and `rtl` for
 * right-to-left scripts. Whether on-device auto-translation actually works for a
 * given code is decided at runtime by `src/lib/translator.ts`, not hard-coded
 * here — so this list can be generous.
 */
export interface AutoLang {
  /** BCP-47 language code, e.g. "hi". */
  code: string
  /** Endonym — the language's own name, e.g. "हिन्दी". */
  name: string
  /** English name, used only to make the search filter forgiving. */
  english: string
  /** ISO-3166 alpha-2 country whose flag represents the language. */
  country: string
  /** Right-to-left script. */
  rtl?: boolean
}

export const AUTO_LANGS: AutoLang[] = [
  { code: "ar", name: "العربية", english: "Arabic", country: "SA", rtl: true },
  { code: "tr", name: "Türkçe", english: "Turkish", country: "TR" },
  { code: "ru", name: "Русский", english: "Russian", country: "RU" },
  { code: "uk", name: "Українська", english: "Ukrainian", country: "UA" },
  { code: "pl", name: "Polski", english: "Polish", country: "PL" },
  { code: "nl", name: "Nederlands", english: "Dutch", country: "NL" },
  { code: "pt", name: "Português", english: "Portuguese", country: "PT" },
  { code: "ro", name: "Română", english: "Romanian", country: "RO" },
  { code: "el", name: "Ελληνικά", english: "Greek", country: "GR" },
  { code: "cs", name: "Čeština", english: "Czech", country: "CZ" },
  { code: "sk", name: "Slovenčina", english: "Slovak", country: "SK" },
  { code: "hu", name: "Magyar", english: "Hungarian", country: "HU" },
  { code: "sv", name: "Svenska", english: "Swedish", country: "SE" },
  { code: "da", name: "Dansk", english: "Danish", country: "DK" },
  { code: "fi", name: "Suomi", english: "Finnish", country: "FI" },
  { code: "no", name: "Norsk", english: "Norwegian", country: "NO" },
  { code: "bg", name: "Български", english: "Bulgarian", country: "BG" },
  { code: "hr", name: "Hrvatski", english: "Croatian", country: "HR" },
  { code: "sr", name: "Српски", english: "Serbian", country: "RS" },
  { code: "sl", name: "Slovenščina", english: "Slovenian", country: "SI" },
  { code: "lt", name: "Lietuvių", english: "Lithuanian", country: "LT" },
  { code: "lv", name: "Latviešu", english: "Latvian", country: "LV" },
  { code: "et", name: "Eesti", english: "Estonian", country: "EE" },
  { code: "sq", name: "Shqip", english: "Albanian", country: "AL" },
  { code: "bs", name: "Bosanski", english: "Bosnian", country: "BA" },
  { code: "mk", name: "Македонски", english: "Macedonian", country: "MK" },
  { code: "ca", name: "Català", english: "Catalan", country: "ES" },
  { code: "is", name: "Íslenska", english: "Icelandic", country: "IS" },
  { code: "ga", name: "Gaeilge", english: "Irish", country: "IE" },
  { code: "mt", name: "Malti", english: "Maltese", country: "MT" },
  { code: "zh", name: "中文", english: "Chinese (Simplified)", country: "CN" },
  { code: "zh-Hant", name: "繁體中文", english: "Chinese (Traditional)", country: "TW" },
  { code: "ja", name: "日本語", english: "Japanese", country: "JP" },
  { code: "ko", name: "한국어", english: "Korean", country: "KR" },
  { code: "hi", name: "हिन्दी", english: "Hindi", country: "IN" },
  { code: "bn", name: "বাংলা", english: "Bengali", country: "BD" },
  { code: "pa", name: "ਪੰਜਾਬੀ", english: "Punjabi", country: "IN" },
  { code: "ta", name: "தமிழ்", english: "Tamil", country: "IN" },
  { code: "te", name: "తెలుగు", english: "Telugu", country: "IN" },
  { code: "mr", name: "मराठी", english: "Marathi", country: "IN" },
  { code: "gu", name: "ગુજરાતી", english: "Gujarati", country: "IN" },
  { code: "kn", name: "ಕನ್ನಡ", english: "Kannada", country: "IN" },
  { code: "ml", name: "മലയാളം", english: "Malayalam", country: "IN" },
  { code: "ur", name: "اردو", english: "Urdu", country: "PK", rtl: true },
  { code: "fa", name: "فارسی", english: "Persian", country: "IR", rtl: true },
  { code: "he", name: "עברית", english: "Hebrew", country: "IL", rtl: true },
  { code: "th", name: "ไทย", english: "Thai", country: "TH" },
  { code: "vi", name: "Tiếng Việt", english: "Vietnamese", country: "VN" },
  { code: "id", name: "Bahasa Indonesia", english: "Indonesian", country: "ID" },
  { code: "ms", name: "Bahasa Melayu", english: "Malay", country: "MY" },
  { code: "tl", name: "Filipino", english: "Filipino", country: "PH" },
  { code: "km", name: "ខ្មែរ", english: "Khmer", country: "KH" },
  { code: "my", name: "မြန်မာ", english: "Burmese", country: "MM" },
  { code: "ne", name: "नेपाली", english: "Nepali", country: "NP" },
  { code: "si", name: "සිංහල", english: "Sinhala", country: "LK" },
  { code: "ka", name: "ქართული", english: "Georgian", country: "GE" },
  { code: "hy", name: "Հայերեն", english: "Armenian", country: "AM" },
  { code: "az", name: "Azərbaycan", english: "Azerbaijani", country: "AZ" },
  { code: "kk", name: "Қазақша", english: "Kazakh", country: "KZ" },
  { code: "uz", name: "Oʻzbekcha", english: "Uzbek", country: "UZ" },
  { code: "mn", name: "Монгол", english: "Mongolian", country: "MN" },
  { code: "sw", name: "Kiswahili", english: "Swahili", country: "KE" },
  { code: "am", name: "አማርኛ", english: "Amharic", country: "ET" },
  { code: "af", name: "Afrikaans", english: "Afrikaans", country: "ZA" },
  { code: "zu", name: "isiZulu", english: "Zulu", country: "ZA" },
  { code: "ha", name: "Hausa", english: "Hausa", country: "NG" },
  { code: "yo", name: "Yorùbá", english: "Yoruba", country: "NG" },
]

/** Fast lookup by code. */
export const autoLangByCode: ReadonlyMap<string, AutoLang> = new Map(
  AUTO_LANGS.map((l) => [l.code, l]),
)
