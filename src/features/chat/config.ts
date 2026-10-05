// src/features/chat/config.ts
// Public URL of the deployed Cloudflare Worker chat proxy (NOT a secret).
// Overridable per environment via VITE_CHAT_ENDPOINT; the production value is
// filled in by the deploy task once the Worker is live.
export const CHAT_ENDPOINT =
  (import.meta.env.VITE_CHAT_ENDPOINT as string | undefined) ?? ""
