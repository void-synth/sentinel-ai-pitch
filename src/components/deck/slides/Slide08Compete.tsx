import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { SlideShell } from "../SlideShell";

const cols = ["Titan", "Slide-ware “fraud AI”", "Logs only"];
const rows = [
  { f: "Signed webhook ingest", v: [true, false, false] },
  { f: "Queue-backed worker", v: [true, false, true] },
  { f: "Live Socket.IO UI", v: [true, false, false] },
  { f: "Money-hop + case actions", v: [true, false, false] },
  { f: "Load-demoable (simulate.py)", v: [true, false, false] },
  { f: "Honest Squad / payout claims", v: [true, false, true] },
];

export function Slide08Compete() {
  return (
    <SlideShell
      eyebrow="Advantage"
      title="Differentiation judges can verify in five minutes."
      subtitle="Operator-first, signed ingest, queue-backed processing, and a UI that updates when analysts act — not a static architecture PNG with a hidden script."
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-strong rounded-2xl overflow-hidden"
      >
        <div className="grid grid-cols-4 text-xs font-mono uppercase tracking-widest text-muted-foreground border-b border-border">
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
            transition={{ delay: 0.15 + ri * 0.06 }}
            className="grid grid-cols-4 items-center text-sm border-b border-border/70 last:border-b-0"
          >
            <div className="p-4 font-medium">{r.f}</div>
            {r.v.map((val, ci) => (
              <div
                key={ci}
                className={`p-4 flex justify-center ${ci === 0 ? "bg-primary/10 border-x border-primary/30" : ""}`}
              >
                {val ? (
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full ${
                      ci === 0 ? "bg-neon text-primary-foreground" : "bg-muted"
                    }`}
                  >
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
    </SlideShell>
  );
}
