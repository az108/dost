// src/features/chat/types.ts
import type { Lang } from "@/lib/i18n"

export type ChatRole = "user" | "assistant"
export interface ChatMessage { role: ChatRole; content: string }
export interface RetrievedDoc { title: string; url: string; text: string }
export type ChatStatus = "idle" | "thinking" | "streaming" | "error"
export interface ChatRequestBody {
  lang: Lang
  messages: ChatMessage[]
  context: RetrievedDoc[]
}
