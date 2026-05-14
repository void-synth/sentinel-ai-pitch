import { motion } from "framer-motion";
import { Inbox, Cpu, LayoutDashboard, LineChart } from "lucide-react";
import { SlideShell } from "../SlideShell";

const blocks = [
  {
    icon: Inbox,
    title: "Ingest",
    items: [
      "Receive Squad-style webhooks; verify signatures per README (encrypted-body vs legacy signature).",
      "Normalize payload → persist `Transaction` → push work to Redis.",
    ],
  },
  {
    icon: Cpu,
    title: "Processing",
    items: [
      "Worker dequeues each transaction and runs a composite risk engine.",
      "Three signal families: velocity, graph / money-hop, metadata / NLP-style — transparent inputs, not a mystery model.",
      "Outputs risk score and status (e.g. safe / flagged / held); higher severity can create `FraudAlert` rows.",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Real-time UI",
    items: [
      "Vite + React dashboard; Socket.IO for new transactions, alerts, stats.",
      "KPI strip, throughput chart (Chart.js), live feed with filters, alert / case panel, transaction detail with money-hop graph.",
      "Optional Squad verify payload when `SQUAD_SECRET_KEY` is set — can fail gracefully.",
    ],
  },
  {
    icon: LineChart,
    title: "Simulated economics",
    items: [
      "Configurable Titan “platform fee” (default 5%): gross vs fee vs net in the UI.",
      "Display / ledger simulation only — not real Squad money movement.",
    ],
  },
];

export function Slide04How() {
  return (
    <SlideShell
      eyebrow="Product"
      title="What Titan actually ships."
      subtitle="Stack matches the open repo: FastAPI + PostgreSQL + Redis + python-socketio ASGI app; Vite + React operations UI (HeroUI). See README in void-synth/squad."
    >
      <div className="grid md:grid-cols-2 gap-4">
        {blocks.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 + i * 0.08 }}
            className="glass-strong rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-neon">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{b.title}</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              {b.items.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="text-neon shrink-0">•</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
