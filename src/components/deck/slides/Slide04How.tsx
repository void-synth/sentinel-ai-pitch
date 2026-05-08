import { motion } from "framer-motion";
import { Layers, MessageSquareWarning, Network } from "lucide-react";
import { SlideShell } from "../SlideShell";

const layers = [
  {
    n: "L1",
    icon: Layers,
    title: "Velocity & Pattern Detection",
    tech: "Isolation Forest",
    desc: "Catches anomalies in transaction velocity, amount, and device fingerprint within milliseconds.",
  },
  {
    n: "L2",
    icon: MessageSquareWarning,
    title: "Social Engineering Detection",
    tech: "BERT / RoBERTa NLP",
    desc: "Reads transaction memos, chat metadata, and call-center transcripts for coercion patterns.",
  },
  {
    n: "L3",
    icon: Network,
    title: "Identity Graph Intelligence",
    tech: "Squad Virtual Account API",
    desc: "Maps every beneficiary across BVN, device, and wallet — exposing mule rings before they disperse.",
  },
];

export function Slide04How() {
  return (
    <SlideShell
      eyebrow="How It Works"
      title="The Triple Threat Engine."
      subtitle="Three independent models vote on every transaction. A unanimous flag freezes the funds before settlement clears."
    >
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 items-center">
        <div className="space-y-3">
          {layers.map((l, i) => (
            <motion.div
              key={l.n}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.15 }}
              className="glass-strong rounded-xl p-5 flex items-start gap-4 relative overflow-hidden group"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-neon" />
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-neon">
                <l.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  Layer {l.n} · <span className="text-neon">{l.tech}</span>
                </div>
                <div className="mt-1 text-base font-semibold">{l.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{l.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Network diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square max-w-[460px] mx-auto w-full"
        >
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <radialGradient id="core" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="oklch(0.78 0.2 230)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="oklch(0.4 0.15 250)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="200" cy="200" r="160" fill="url(#core)" />
            {/* nodes */}
            {[
              [80, 80], [320, 80], [80, 320], [320, 320],
              [200, 40], [40, 200], [360, 200], [200, 360],
            ].map(([x, y], i) => (
              <g key={i}>
                <line
                  x1="200" y1="200" x2={x} y2={y}
                  stroke={i === 3 ? "oklch(0.75 0.22 25)" : "oklch(0.72 0.18 240)"}
                  strokeWidth="1.2"
                  className="flow-line"
                  strokeOpacity="0.6"
                />
                <circle cx={x} cy={y} r="6" fill={i === 3 ? "oklch(0.75 0.22 25)" : "oklch(0.78 0.2 230)"} />
                <circle cx={x} cy={y} r="10" fill="none" stroke={i === 3 ? "oklch(0.75 0.22 25)" : "oklch(0.78 0.2 230)"} strokeOpacity="0.3" />
              </g>
            ))}
            <circle cx="200" cy="200" r="22" fill="oklch(0.13 0.025 260)" stroke="oklch(0.78 0.2 230)" strokeWidth="1.5" />
            <text x="200" y="205" textAnchor="middle" fill="oklch(0.78 0.2 230)" fontSize="10" fontFamily="monospace">CORE</text>
          </svg>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            Suspicious flow → mule ring
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
