import { motion } from "framer-motion";
import { Rocket, Building2, Landmark, Globe2 } from "lucide-react";
import { SlideShell } from "../SlideShell";

const milestones = [
  { i: Rocket, t: "Month 1", h: "Hackathon MVP", d: "Triple Threat engine v1, Squad sandbox integration." },
  { i: Building2, t: "Month 3", h: "Pilot with fintech", d: "First production deployment, ₦5B txn/month screened." },
  { i: Landmark, t: "Month 6", h: "First bank partnership", d: "Tier-1 bank live, recovery share contract signed." },
  { i: Globe2, t: "Month 12", h: "Expand nationally", d: "5+ banks · ₦240M ARR · CBN sandbox graduation." },
];

export function Slide10Roadmap() {
  return (
    <SlideShell
      eyebrow="Roadmap"
      title="From hackathon to ₦240M ARR in 12 months."
    >
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary to-transparent md:-translate-x-1/2" />
        <div className="space-y-6">
          {milestones.map((m, i) => (
            <motion.div
              key={m.t}
              initial={{ opacity: 0, x: i % 2 ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.15 }}
              className={`relative grid md:grid-cols-2 gap-4 items-center ${
                i % 2 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                <div className="text-[10px] font-mono uppercase tracking-widest text-neon">{m.t}</div>
                <div className="text-xl font-semibold mt-1">{m.h}</div>
                <div className="text-sm text-muted-foreground mt-1 max-w-sm md:inline-block">{m.d}</div>
              </div>

              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-background border-2 border-primary neon-border">
                <m.i className="h-4 w-4 text-neon" />
              </div>

              <div />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-10 glass-strong rounded-2xl p-6 text-center neon-border"
        >
          <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Year-1 Target</div>
          <div className="mt-1 text-4xl font-bold text-gradient">₦240M ARR</div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
