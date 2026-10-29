import type { IllustrationKey } from "@/content/treatments"

/**
 * Original, brand-styled placeholder illustrations for disease heroes. These
 * are our own vector artwork (no third-party images) and stand in until a real
 * AI-generated image replaces them. When a real AI image is used, the page adds
 * the small "AI generated" caption instead.
 */
export function DiseaseIllustration({
  kind = "generic",
  className,
}: {
  kind?: IllustrationKey
  className?: string
}) {
  return (
    <div
      className={
        "flex items-center justify-center rounded-3xl border border-brand/10 bg-gradient-to-br from-brand-soft to-mint-soft/40 p-6 " +
        (className ?? "")
      }
    >
      {kind === "lungs" ? <Lungs /> : kind === "sinus" ? <Sinus /> : <Generic />}
    </div>
  )
}

function Lungs() {
  return (
    <svg width="240" height="200" viewBox="0 0 300 230" role="img" aria-label="Lunge und Bronchien">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e94aa0" />
          <stop offset="1" stopColor="#c2117a" />
        </linearGradient>
      </defs>
      <rect x="142" y="18" width="16" height="60" rx="8" fill="url(#lg)" />
      <path d="M150 74 C120 92 108 108 104 128" stroke="#13c39c" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M150 74 C180 92 192 108 196 128" stroke="#13c39c" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M104 92 C70 96 44 128 46 172 C47 200 66 214 92 208 C112 203 118 186 118 160 L118 108 C118 98 114 91 104 92 Z" fill="url(#lg)" />
      <path d="M196 92 C230 96 256 128 254 172 C253 200 234 214 208 208 C188 203 182 186 182 160 L182 108 C182 98 186 91 196 92 Z" fill="url(#lg)" />
      <path d="M96 108 C80 116 68 138 70 166" stroke="#ffd6ec" strokeWidth="5" fill="none" opacity=".6" strokeLinecap="round" />
      <path d="M204 108 C220 116 232 138 230 166" stroke="#ffd6ec" strokeWidth="5" fill="none" opacity=".6" strokeLinecap="round" />
      <circle cx="104" cy="128" r="6" fill="#13c39c" />
      <circle cx="196" cy="128" r="6" fill="#13c39c" />
    </svg>
  )
}

function Sinus() {
  return (
    <svg width="240" height="200" viewBox="0 0 300 230" role="img" aria-label="Kopf mit Nasennebenhöhlen">
      <defs>
        <linearGradient id="hg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e94aa0" />
          <stop offset="1" stopColor="#c2117a" />
        </linearGradient>
      </defs>
      <path d="M108 40 C150 32 196 52 202 100 C204 122 214 126 212 138 C210 148 198 148 196 150 C194 168 190 186 160 190 L138 190 L138 206 L96 206 L96 150 C74 140 66 112 72 86 C78 60 90 44 108 40 Z" fill="url(#hg)" />
      <path d="M196 128 C206 132 210 138 202 142 L192 142" fill="#a50f66" />
      <circle cx="150" cy="96" r="15" fill="#13c39c" opacity=".92" />
      <circle cx="176" cy="112" r="10" fill="#13c39c" opacity=".92" />
      <g stroke="#ffd6ec" strokeWidth="4" strokeLinecap="round" opacity=".65">
        <path d="M120 70 q8 -10 16 0" />
        <path d="M120 60 q8 -10 16 0" />
      </g>
    </svg>
  )
}

function Generic() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" role="img" aria-label="Medizinisches Symbol">
      <defs>
        <linearGradient id="gg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e94aa0" />
          <stop offset="1" stopColor="#c2117a" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="72" fill="none" stroke="#13c39c" strokeWidth="6" opacity=".5" />
      <rect x="84" y="52" width="32" height="96" rx="10" fill="url(#gg)" />
      <rect x="52" y="84" width="96" height="32" rx="10" fill="url(#gg)" />
    </svg>
  )
}
