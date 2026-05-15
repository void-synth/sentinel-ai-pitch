import { motion } from "framer-motion";
import { Building2, Gauge, Users } from "lucide-react";
import { SlideShell } from "../SlideShell";

const streams = [
  {
    icon: Users,
    title: "SaaS seats for the ops console",
    body: "Per-analyst or per-team pricing on Titan itself: live feed, alerts inbox, case actions, audit views. Banks and fintech fraud teams pay for seats, not for slide decks.",
  },
  {
    icon: Gauge,
    title: "Usage on monitored volume",
    body: "Tiered bundles of scored transactions per month, with overage for spikes. Aligns cost with webhook throughput — the same meter we already stress with simulate.py.",
  },
  {
    icon: Building2,
    title: "Enterprise add-ons",
    body: "SSO / RBAC, SLA, dedicated support, custom integrations (extra rails, data residency), and optional model-evaluation retainers once labeled replay is in production.",
  },
];

export function SlideMonetization() {
  return (
    <SlideShell
      eyebrow="Business model"
      title="How we plan to make money."
      subtitle="The demo UI already hints at a platform-fee story for education; real revenue is B2B software and usage on top of the same pipeline judges saw."
    >
      <div className="space-y-3 sm:space-y-4 max-w-3xl">
        {streams.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.07 + i * 0.07 }}
            className="flex gap-4 rounded-xl border border-border/70 bg-card/20 p-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-neon">
              <s.icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {s.body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.32 }}
        className="mt-4 text-[11px] sm:text-xs text-muted-foreground font-mono border-l-2 border-neon/40 pl-3"
      >
        Phase 1: land teams on webhook → console value. Phase 2: expand seats + volume + enterprise
        contracts — same core product.
      </motion.p>
    </SlideShell>
  );
}
