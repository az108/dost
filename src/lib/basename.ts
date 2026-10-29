// import.meta.env.BASE_URL is "/dost/" in the GitHub Pages project-site build
// and "/" in dev (and after the custom-domain cutover). React Router wants it
// without the trailing slash, or "/" at the root. Shared by App (client
// BrowserRouter) and entry-server (StaticRouter) so both agree.
export const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/"
