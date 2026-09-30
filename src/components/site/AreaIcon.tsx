import type { AreaIcon as AreaIconKey } from "@/content/treatments"

/** Simple inline icons for the treatment-area cards. Stroke follows currentColor. */
export function AreaIcon({ name, className }: { name: AreaIconKey; className?: string }) {
  const p = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  }
  switch (name) {
    case "lungs":
      return (
        <svg {...p}>
          <path d="M12 4v8" />
          <path d="M12 8c0 3-1 3-1 6a4 4 0 0 1-8 0c0-4 2-7 4-8" />
          <path d="M12 8c0 3 1 3 1 6a4 4 0 0 0 8 0c0-4-2-7-4-8" />
        </svg>
      )
    case "heart":
      return (
        <svg {...p}>
          <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />
          <path d="M7 11h2l1-2 2 4 1-2h4" />
        </svg>
      )
    case "stomach":
      return (
        <svg {...p}>
          <path d="M9 4v4a4 4 0 0 0 4 4h1a3 3 0 0 1 3 3v1a4 4 0 0 1-8 0" />
          <path d="M9 4H7" />
        </svg>
      )
    case "skin":
      return (
        <svg {...p}>
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <path d="M8 9h.01M12 12h.01M16 8h.01M9 15h.01M15 16h.01" />
        </svg>
      )
    case "brain":
      return (
        <svg {...p}>
          <path d="M12 5a3 3 0 0 0-5 2 3 3 0 0 0-1 5 3 3 0 0 0 3 4 3 3 0 0 0 3-1V5Z" />
          <path d="M12 5a3 3 0 0 1 5 2 3 3 0 0 1 1 5 3 3 0 0 1-3 4 3 3 0 0 1-3-1" />
        </svg>
      )
    case "bone":
      return (
        <svg {...p}>
          <path d="M8 8a2 2 0 1 0-1.8-3A2 2 0 1 0 5 8l3 3-3 3a2 2 0 1 0 1.2 3A2 2 0 1 0 8 16l8-8a2 2 0 1 0 1.8-3A2 2 0 1 0 19 8l-3 3" />
        </svg>
      )
    case "eye":
      return (
        <svg {...p}>
          <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      )
    case "shield":
      return (
        <svg {...p}>
          <path d="M12 3l7 3v5c0 4.2-2.8 7.6-7 9-4.2-1.4-7-4.8-7-9V6l7-3Z" />
          <path d="M12 8v6M9 11h6" />
        </svg>
      )
    case "virus":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="5" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2 2M16.4 16.4l2 2M18.4 5.6l-2 2M7.6 16.4l-2 2" />
        </svg>
      )
    case "bandage":
      return (
        <svg {...p}>
          <rect x="3" y="8" width="18" height="8" rx="4" transform="rotate(-45 12 12)" />
          <path d="M11 11h.01M13 13h.01M13 11h.01M11 13h.01" />
        </svg>
      )
    case "kidney":
      return (
        <svg {...p}>
          <path d="M9 4c-3 0-5 3-5 7s2 7 5 7c2 0 2-2 3-3s3-1 3-4-2-3-3-4-1-3-3-3Z" />
        </svg>
      )
    case "metabolism":
      return (
        <svg {...p}>
          <path d="M4 13h4l2-6 4 12 2-6h4" />
        </svg>
      )
    default:
      return null
  }
}
