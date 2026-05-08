import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";

const stack = [
  { layer: "Frontend", tech: "Next.js 15", desc: "Server-rendered analyst console" },
  { layer: "Backend", tech: "Python · FastAPI", desc: "Async risk-scoring API" },
  { layer: "AI/ML", tech: "TensorFlow · Scikit-learn", desc: "Triple Threat models" },
  { layer: "Fraud Graph", tech: "Neo4j", desc: "Identity & beneficiary network" },
  { layer: "Payments", tech: "Squad API", desc: "Native NIP enforcement" },
  { layer: "Cloud", tech: "AWS", desc: "Multi-AZ Lagos region" },
  { layer: "Database", tech: "PostgreSQL", desc: "Audit + analytics warehouse" },
];

export function Slide09Stack() {
  return (
    <SlideShell
      eyebrow="Tech Stack"
      title="Built for sub-100ms decisions at NIP scale."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {stack.map((s, i) => (
          <motion.div
            key={s.layer}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 + i * 0.07 }}
            className="glass-strong rounded-xl p-4 group hover:bg-white/8 transition relative overflow-hidden"
          >
            <div className="absolute right-3 top-3 text-[10px] font-mono text-muted-foreground">/0{i + 1}</div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-neon">{s.layer}</div>
            <div className="mt-2 text-base font-semibold">{s.tech}</div>
            <div className="mt-1 text-xs text-muted-foreground">{s.desc}</div>
            <div className="mt-3 h-0.5 w-8 bg-gradient-to-r from-primary to-neon group-hover:w-full transition-all duration-500" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-8 glass rounded-xl p-4 font-mono text-xs text-muted-foreground flex flex-wrap items-center gap-x-6 gap-y-2 justify-between"
      >
        <span>p50 latency: <span className="text-neon-green">42ms</span></span>
        <span>p99 latency: <span className="text-neon-green">98ms</span></span>
        <span>Throughput: <span className="text-neon">12K txn/sec</span></span>
        <span>Uptime SLA: <span className="text-neon">99.99%</span></span>
        <span>Compliance: <span className="text-neon">PCI-DSS · NDPR · CBN</span></span>
      </motion.div>
    </SlideShell>
  );
}
