import { motion } from "framer-motion";
import { Banknote, Users, AlertOctagon } from "lucide-react";
import { SlideShell, Stat } from "../SlideShell";

const pains = [
  {
    icon: Banknote,
    title: "Payout Liability",
    desc: "Banks refund millions lost to fraud, eating directly into operating margins.",
  },
  {
    icon: Users,
    title: "Manual Fraud Teams",
    desc: "Thousands of analyst hours spent flagging fraud one transaction at a time.",
  },
  {
    icon: AlertOctagon,
    title: "False Positives",
    desc: "Legitimate transactions blocked, frustrating SMBs and high-value customers.",
  },
];

export function Slide02Problem() {
  return (
    <SlideShell
      eyebrow="The Problem"
      title="Fraud is bleeding Nigerian banks dry."
      subtitle="Three compounding failures across every tier-1 bank in Nigeria — and they all show up on the P&L."
    >
      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {pains.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.12 }}
            className="glass-strong rounded-2xl p-6 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/15 text-[oklch(0.75_0.22_25)]">
                <p.icon className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-mono text-muted-foreground">0{i + 1}</span>
            </div>
            <h3 className="text-lg font-semibold mb-1.5">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-3">
        <Stat value="₦2.3B" label="Annual refund losses" accent="danger" delay={0.5} />
        <Stat value="₦800M" label="Operational fraud-team cost" accent="danger" delay={0.6} />
        <Stat value="₦1.5B" label="Customer churn risk" accent="danger" delay={0.7} />
      </div>
    </SlideShell>
  );
}
