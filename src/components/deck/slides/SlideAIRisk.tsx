import { motion } from "framer-motion";
import { Brain, FlaskConical, Scale, Target } from "lucide-react";
import { SlideShell } from "../SlideShell";

const pillars = [
  {
    icon: Brain,
    title: "What “AI” means here",
    body: "A composite risk engine in the worker — velocity windows, money-hop graph features, and metadata / NLP-style signals. It scores each transaction after ingest; nothing is a single opaque model output.",
  },
  {
    icon: FlaskConical,
    title: "What we train / tune on (today → next)",
    body: "Today: configs and thresholds over structured features; stress data from simulate.py with controlled fraud rates so the path is repeatable. Next: replay labeled webhooks (hold / release outcomes) to tune weights and measure precision on holds — only where we invest in a real eval loop.",
  },
  {
    icon: Target,
    title: "What makes a decision defensible",
    body: "Every score ties back to named inputs you can show in the room: counts in a time window, graph hops, field-level metadata — not “the model said so.” Analysts see context before release or escalate.",
  },
  {
    icon: Scale,
    title: "What makes anomaly-style detection credible",
    body: "We flag deviations from baselines we actually compute: sudden velocity vs history, unusual beneficiary paths, inconsistent metadata. Alerts line up with those signals so false positives are debuggable.",
  },
];

export function SlideAIRisk() {
  return (
    <SlideShell
      eyebrow="Risk engine"
      title="How verification and scoring work — without hand-waving."
      subtitle="Honest hackathon framing: signed webhooks prove the event; the worker proves the story you tell about risk is inspectable."
    >
      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 + i * 0.06 }}
            className="glass-strong rounded-xl border border-border/70 p-4 min-w-0"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-neon mb-3">
              <p.icon className="h-4 w-4" />
            </div>
            <h3 className="text-sm font-semibold leading-snug">{p.title}</h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {p.body}
            </p>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
