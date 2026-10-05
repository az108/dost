# dost-chat-worker

Cloudflare Worker that proxies the site chatbot. It validates each request,
applies per-IP rate limiting, calls the Anthropic Messages API with a
grounded system prompt, and streams the assistant's reply back to the
browser as plain text.

## Local development

```
npm install
cp .dev.vars.example .dev.vars   # fill in a real ANTHROPIC_API_KEY
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
wrangler secret put ANTHROPIC_API_KEY
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
