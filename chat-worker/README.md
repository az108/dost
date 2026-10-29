# dost-chat-worker

Cloudflare Worker that proxies the site chatbot. It validates each request,
applies per-IP rate limiting, calls the Google Gemini API (`generateContent`)
with a grounded system prompt, and returns the model's reply to the browser
as plain text.

Get an API key from Google AI Studio (https://aistudio.google.com/apikey).
A key with **billing enabled (paid tier)** keeps the traffic out of Google's
model training; the free tier does not — prefer the paid tier for a medical
site. The model is set in `src/index.ts` (`MODEL`, default
`gemini-3.5-flash-lite` — the cheapest tier). To change it, confirm the name
with ListModels (`GET /v1beta/models`) first; a retired model 404s naming its
replacement (and some listed models are unavailable to new accounts), and the
model must support `generateContent`. The reply is not
streamed — the generativelanguage API no longer exposes `streamGenerateContent`
for these models, so the Worker returns the full answer as one response.

## Local development

```
npm install
cp .dev.vars.example .dev.vars   # fill in a real GEMINI_API_KEY
npm run dev
```

`.dev.vars` is read by `wrangler dev` and is git-ignored — never commit a
real key.

## Tests

```
npm run test
```

## Deploy

```
wrangler login
wrangler secret put GEMINI_API_KEY
wrangler deploy
```

`wrangler deploy` prints the Worker's URL. Set it as `VITE_CHAT_ENDPOINT`
(or directly in `src/features/chat/config.ts` for production) in the main
app so the chat widget knows where to send requests.

## Bindings and CORS

- `RATE_LIMITER` — a native Cloudflare rate-limiting binding (see
  `wrangler.toml`), 15 requests per 60s per IP. If the binding itself fails,
  the worker returns a clean `503 { error: "rate_limiter_unavailable" }`
  instead of a bare 500.
- CORS — only origins in `ALLOWED_ORIGINS` in `src/index.ts`
  (`https://az108.github.io`, and `localhost:5173`/`localhost:4173` for
  local dev) receive a matching `Access-Control-Allow-Origin`. Add a new
  origin there before deploying to a different host.
