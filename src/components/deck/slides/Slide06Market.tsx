import { motion } from "framer-motion";
import { Bell, MousePointer2, RefreshCw } from "lucide-react";
import { SlideShell } from "../SlideShell";

const steps = [
  {
    icon: Bell,
    title: "Alerts inbox",
    desc: "Full case list beyond the dashboard strip — triage flagged and held items in one place.",
  },
  {
    icon: MousePointer2,
    title: "Analyst actions",
    desc: "REST APIs for release and escalate on alerts; updates DB and pushes Socket.IO so connected UIs refresh where implemented.",
  },
  {
    icon: RefreshCw,
    title: "Holds vs Squad",
    desc: "Honest framing: operational hold / case management inside Titan. We do not claim a Squad “freeze funds” API — payouts stay gated / off by default in code.",
  },
];

export function Slide06Market() {
  return (
    <SlideShell
      eyebrow="Operations"
      title="Operator-first: cases, not just scores."
      subtitle="Transaction detail shows reference, risk, parties, and money-hop graph so a human can act with evidence — then the room sees stats move after release or escalate."
    >
      <div className="grid md:grid-cols-3 gap-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1 }}
            className="glass-strong rounded-2xl p-6 border border-border/80"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-neon mb-4">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="mt-8 rounded-xl border border-dashed border-primary/40 bg-primary/5 p-5 text-center text-sm text-muted-foreground"
      >
        <span className="text-neon font-semibold">Live UI reference:</span> Transaction Monitoring
        workspace — KPIs, throughput chart, live feed with filters (All / Pending / Safe / Flagged /
        Held / Released / Escalated), detail panel on row select.
      </motion.div>
    </SlideShell>
  );
}
