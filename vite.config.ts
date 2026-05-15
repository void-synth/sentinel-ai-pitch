// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

// Vercel runs `vite build` with VERCEL=1. TanStack Start on Vercel expects Nitro output, not
// Cloudflare Workers (see https://vercel.com/docs/frameworks/full-stack/tanstack-start ).
// Default local `npm run build` to the same Nitro path so we do not require `src/server.ts`.
// Opt into Cloudflare Workers only when that entry exists and you set CLOUDFLARE_WORKER=1.
const forVercel =
  process.env.VERCEL === "1" ||
  (process.env.CLOUDFLARE_WORKER !== "1" && process.env.CF_PAGES !== "1");

// Configure TanStack Start for Vercel deployment
export default defineConfig({
  tanstackStart: {
    // Use Vercel adapter instead of Cloudflare
    adapter: "vercel",
  },
  cloudflare: !forVercel,
  plugins: forVercel ? [nitro()] : [],
});
