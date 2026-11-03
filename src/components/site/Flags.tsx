import type { ReactNode } from "react"
import type { Lang } from "@/lib/i18n"
import { cn } from "@/lib/utils"

/**
 * Small, dependency-free SVG flags for the language switcher. Drawn as inline
 * SVG (not emoji) so they render identically on every OS — Windows, in
 * particular, has no flag emoji. Each flag is a recognisable, simplified
 * rendition at a 3:2 ratio (viewBox 24×16); the wrapper clips any overshoot.
 * Languages are mapped to a representative country flag.
 */

function Frame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block shrink-0 overflow-hidden rounded-[3px] ring-1 ring-black/10",
        className,
      )}
    >
      <svg viewBox="0 0 24 16" width="100%" height="100%" style={{ display: "block" }}>
        {children}
      </svg>
    </span>
  )
}

const flags: Record<Lang, ReactNode> = {
  // Germany — black / red / gold
  de: (
    <>
      <rect width="24" height="5.333" y="0" fill="#000000" />
      <rect width="24" height="5.333" y="5.333" fill="#DD0000" />
      <rect width="24" height="5.334" y="10.666" fill="#FFCE00" />
    </>
  ),
  // United Kingdom — Union Jack (simplified)
  en: (
    <>
      <rect width="24" height="16" fill="#012169" />
      <path d="M0,0 L24,16 M24,0 L0,16" stroke="#FFFFFF" strokeWidth="3.4" />
      <path d="M0,0 L24,16 M24,0 L0,16" stroke="#C8102E" strokeWidth="2" />
      <path d="M12,0 V16 M0,8 H24" stroke="#FFFFFF" strokeWidth="4" />
      <path d="M12,0 V16 M0,8 H24" stroke="#C8102E" strokeWidth="2.4" />
    </>
  ),
  // Spain — red / yellow (double) / red
  es: (
    <>
      <rect width="24" height="16" fill="#AA151B" />
      <rect width="24" height="8" y="4" fill="#F1BF00" />
    </>
  ),
  // France — blue / white / red
  fr: (
    <>
      <rect width="8" height="16" x="0" fill="#0055A4" />
      <rect width="8" height="16" x="8" fill="#FFFFFF" />
      <rect width="8" height="16" x="16" fill="#EF4135" />
    </>
  ),
  // Italy — green / white / red
  it: (
    <>
      <rect width="8" height="16" x="0" fill="#009246" />
      <rect width="8" height="16" x="8" fill="#FFFFFF" />
      <rect width="8" height="16" x="16" fill="#CE2B37" />
    </>
  ),
  // Türkiye — red field, white crescent and star
  tr: (
    <>
      <rect width="24" height="16" fill="#E30A17" />
      <circle cx="9" cy="8" r="4.2" fill="#FFFFFF" />
      <circle cx="10.4" cy="8" r="3.4" fill="#E30A17" />
      <path
        d="M14.3,6.0 L14.80,7.31 L16.20,7.38 L15.11,8.26 L15.48,9.62 L14.3,8.85 L13.12,9.62 L13.49,8.26 L12.40,7.38 L13.80,7.31 Z"
        fill="#FFFFFF"
      />
    </>
  ),
  // Russia — white / blue / red
  ru: (
    <>
      <rect width="24" height="5.333" y="0" fill="#FFFFFF" />
      <rect width="24" height="5.333" y="5.333" fill="#0039A6" />
      <rect width="24" height="5.334" y="10.666" fill="#D52B1E" />
    </>
  ),
  // Arabic — Saudi Arabia (simplified): green field with a white sword
  ar: (
    <>
      <rect width="24" height="16" fill="#006C35" />
      <rect x="4" y="5.2" width="0.9" height="1.2" fill="#FFFFFF" />
      <rect x="6" y="5.2" width="0.9" height="1.2" fill="#FFFFFF" />
      <rect x="8" y="5.2" width="0.9" height="1.2" fill="#FFFFFF" />
      <rect x="10" y="5.2" width="0.9" height="1.2" fill="#FFFFFF" />
      <rect x="12" y="5.2" width="0.9" height="1.2" fill="#FFFFFF" />
      <rect x="4" y="10.1" width="13" height="1" rx="0.5" fill="#FFFFFF" />
      <rect x="16.3" y="9.3" width="1.7" height="2.6" rx="0.4" fill="#FFFFFF" />
    </>
  ),
}

export function Flag({ code, className }: { code: Lang; className?: string }) {
  return <Frame className={className}>{flags[code]}</Frame>
}
