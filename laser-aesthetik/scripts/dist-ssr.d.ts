// dist-ssr/entry-server.js is a build artefact (see build script in
// package.json): it does not exist until `vite build --ssr` has run, so
// there is nothing on disk for tsc to resolve when typechecking
// scripts/prerender.ts on its own. This ambient declaration gives it a
// type without requiring the file to be present, matching the real export
// of src/entry-server.tsx.
declare module "*dist-ssr/entry-server.js" {
  export function render(pathname: string): string
}
