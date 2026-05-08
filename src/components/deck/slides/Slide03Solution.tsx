import { motion } from "framer-motion";
import { Eye, Brain, RotateCcw, Plus } from "lucide-react";
import { useState } from "react";
import { SlideShell } from "../SlideShell";

const steps = [
  {
    icon: Eye,
    label: "Detect",
    summary: "Spot suspicious behavior the instant it happens.",
    detail:
      "Sub-100ms scoring on every NIP, card, and wallet transfer. Velocity, device, and graph signals fused into a single risk score.",
  },
  {
    icon: Brain,
    label: "Explain",
    summary: "Tell the analyst exactly why fraud was flagged.",
    detail:
      "Each alert ships with a plain-English narrative — beneficiary network, social-engineering cues, and confidence breakdown.",
  },
  {
    icon: RotateCcw,
    label: "Recover",
    summary: "Claw back stolen funds — automatically.",
    detail:
      "Auto-trigger NIP reversal, wallet freeze, and Squad API enforcement before the money is dispersed across mules.",
  },
];

export function Slide03Solution() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <SlideShell
      eyebrow="Our Solution"
      title="An immune system, not a firewall."
      subtitle="Squad-Sentinel AI sits between Nigerian banks and the NIP rail — running every transaction through a three-stage flow."
    >
      <div className="grid md:grid-cols-3 gap-4">
        {steps.map((s, i) => {
          const isOpen = open === i;
          return (
            <motion.button
              key={s.label}
              onClick={() => setOpen(isOpen ? null : i)}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.12 }}
              className={`text-left glass-strong rounded-2xl p-6 relative overflow-hidden transition ${
                isOpen ? "neon-border" : "hover:bg-white/5"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-neon">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="text-[10px] font-mono text-muted-foreground">STEP 0{i + 1}</div>
              </div>
              <div className="mt-5 text-xl font-semibold">{s.label}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.summary}</div>

              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="mt-4 rounded-lg bg-black/30 p-3 text-xs text-foreground/80 leading-relaxed">
                  {s.detail}
                </div>
              </motion.div>

              <div className="mt-4 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-neon">
                <Plus className={`h-3 w-3 transition ${isOpen ? "rotate-45" : ""}`} />
                {isOpen ? "Collapse" : "Expand"}
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="mt-10 flex items-center justify-center gap-3 text-xs font-mono text-muted-foreground">
        <span className="text-neon">●</span> Detect
        <span className="text-foreground/30">→</span>
        <span className="text-neon">●</span> Explain
        <span className="text-foreground/30">→</span>
        <span className="text-neon-green">●</span> Recover
      </div>
    </SlideShell>
  );
}
