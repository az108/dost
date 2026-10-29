// src/features/chat/config.ts
// Public URL of the deployed Cloudflare Worker chat proxy (NOT a secret).
// Overridable per environment via VITE_CHAT_ENDPOINT; the production fallback
// below is what ships from the GitHub Pages build (which has no env override).
export const CHAT_ENDPOINT =
  (import.meta.env.VITE_CHAT_ENDPOINT as string | undefined) ??
  "https://dost-chat.drdosthealth.workers.dev"
