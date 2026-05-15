import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";

const DOCS = "https://docs.squadco.com/";
const REPO = "https://github.com/void-synth/squad";

const story = [
  {
    lead: "What’s useful",
    text: "The webhook. Squad calls our server when something payment-related happens. We get a normal HTTP POST with JSON — not a custom protocol, not endless polling.",
  },
  {
    lead: "So we expose one route",
    text: "We implement POST /api/v1/webhook/squad. You paste that URL in the Squad dashboard. In local dev, a tunnel (ngrok, Cloudflare, etc.) makes your machine reachable so Squad can hit it.",
  },
  {
    lead: "So we know it’s really them",
    text: "They sign the raw body. We hash it with the same secret we put in SQUAD_SECRET_KEY and compare to their header. If it matches, we trust the event. If not, we return 401 — same flow you’d debug in production.",
  },
  {
    lead: "So the rest is ours",
    text: "After that check, we save it, queue it, score it, and push updates to the UI. We didn’t need a pile of Squad RPC calls for the demo story — verify the webhook, then everything else is our app.",
  },
];

export function SlideSquadIntegration() {
  return (
    <SlideShell
      eyebrow="How the API is used"
      title="The webhook is the useful part."
      subtitle="Squad pushes signed events to us. We verify once, then run our own pipeline."
    >
      <div className="space-y-4 sm:space-y-5 max-w-3xl">
        {story.map((block, i) => (
          <motion.div
            key={block.lead}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 + i * 0.07 }}
            className="border-l-2 border-neon/50 pl-4 sm:pl-5"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-neon mb-1">
              {block.lead}
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {block.text}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="mt-5 sm:mt-6 rounded-lg bg-muted/30 border border-border/60 px-3 py-2.5 font-mono text-[11px] sm:text-xs text-muted-foreground break-all"
      >
        <span className="text-neon">POST</span> /api/v1/webhook/squad ·{" "}
        <span className="text-neon">verify</span> signed raw body (see README for header names)
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.42 }}
        className="mt-3 flex flex-wrap gap-2 text-[11px] font-mono"
      >
        <a
          href={DOCS}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-primary/40 px-3 py-1.5 text-neon hover:bg-primary/10 transition"
        >
          Squad docs →
        </a>
        <a
          href={REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border px-3 py-1.5 text-muted-foreground hover:text-foreground hover:border-primary/40 transition"
        >
          void-synth/squad
        </a>
      </motion.div>
    </SlideShell>
  );
}
