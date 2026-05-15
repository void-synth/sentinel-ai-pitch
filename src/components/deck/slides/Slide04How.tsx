import { motion } from "framer-motion";
import { Inbox, Cpu, LayoutDashboard, LineChart } from "lucide-react";
import { SlideShell } from "../SlideShell";

const blocks = [
  {
    icon: Inbox,
    title: "Ingest",
    items: [
      "Receive Squad-style webhooks on POST /api/v1/webhook/squad; verify HMAC per Squad patterns (encrypted-body SHA-512 or legacy simulator header).",
      "Normalize payload → persist Transaction in PostgreSQL → enqueue work in Redis.",
    ],
  },
  {
    icon: Cpu,
    title: "Processing",
    items: [
      "Background worker dequeues each transaction and runs a composite risk engine.",
      "Signals: velocity, graph / money-hop, metadata / NLP-style — transparent inputs, not an opaque “AI score”.",
      "Outputs risk score and status (safe / flagged / held); severe cases create FraudAlert rows.",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Real-time UI",
    items: [
      "Next.js (App Router) operations UI; python-socketio / Socket.IO for new transactions, alerts, and stats.",
      "KPI strip, Chart.js throughput, live feed with filters, alerts inbox, transaction detail with money-hop graph.",
      "REST actions for release / escalate update the DB and broadcast on Socket.IO so every analyst sees the same state.",
      "Demo login is browser-local by design — swap for IdP in a production story.",
    ],
  },
  {
    icon: LineChart,
    title: "Simulated economics (UI)",
    items: [
      "Configurable Titan “platform fee” (default 5%): gross vs fee vs net in the UI for pitch clarity.",
      "Ledger display only — not a claim of moving money on Squad rails without explicit API use.",
    ],
  },
];

export function Slide04How() {
  return (
    <SlideShell
      eyebrow="Product"
      title="What Squad Sentinel (Titan) actually ships."
      subtitle="Matches the public repo: FastAPI + PostgreSQL + Redis + Socket.IO ASGI backend; Next.js + HeroUI + Chart.js frontend. Built to be opened, stressed with simulate.py, and questioned in Q&A."
    >
      <div className="grid md:grid-cols-2 gap-3">
        {blocks.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 + i * 0.08 }}
            className="glass-strong rounded-xl p-4 sm:p-5 border border-border/60"
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
