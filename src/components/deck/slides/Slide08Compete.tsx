import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { SlideShell } from "../SlideShell";

const cols = ["Squad-Sentinel", "Traditional Banks", "FICO", "Manual Teams"];
const rows = [
  { f: "Real-time recovery", v: [true, false, false, false] },
  { f: "Nigeria-focused", v: [true, true, false, true] },
  { f: "API enforcement", v: [true, false, true, false] },
  { f: "Social fraud detection", v: [true, false, false, false] },
  { f: "Graph intelligence", v: [true, false, true, false] },
];

export function Slide08Compete() {
  return (
    <SlideShell
      eyebrow="Competitive Advantage"
      title="No one else does all five."
      subtitle="Legacy fraud vendors built for Visa rails. Manual teams don't scale. Squad-Sentinel was built native to Nigerian payments."
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-strong rounded-2xl overflow-hidden"
      >
        <div className="grid grid-cols-5 text-xs font-mono uppercase tracking-widest text-muted-foreground border-b border-white/10">
          <div className="p-4">Capability</div>
          {cols.map((c, i) => (
            <div
              key={c}
              className={`p-4 text-center ${i === 0 ? "text-neon bg-primary/10 border-x border-primary/30" : ""}`}
            >
              {c}
            </div>
          ))}
        </div>
        {rows.map((r, ri) => (
          <motion.div
            key={r.f}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 + ri * 0.08 }}
            className="grid grid-cols-5 items-center text-sm border-b border-white/5 last:border-b-0"
          >
            <div className="p-4 font-medium">{r.f}</div>
            {r.v.map((val, ci) => (
              <div
                key={ci}
                className={`p-4 flex justify-center ${ci === 0 ? "bg-primary/10 border-x border-primary/30" : ""}`}
              >
                {val ? (
                  <span className={`flex h-7 w-7 items-center justify-center rounded-full ${ci === 0 ? "bg-neon text-primary-foreground" : "bg-white/10"}`}>
                    <Check className="h-4 w-4" />
                  </span>
                ) : (
                  <X className="h-4 w-4 text-muted-foreground/50" />
                )}
              </div>
            ))}
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-6 text-center text-xs text-muted-foreground">
        Squad-Sentinel is the only platform that closes the loop — from detection to <span className="text-neon">automated recovery</span>.
      </div>
    </SlideShell>
  );
}
