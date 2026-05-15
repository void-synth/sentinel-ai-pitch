import { motion } from "framer-motion";
import { Layers, Radio, Server, Database } from "lucide-react";
import { SlideShell } from "../SlideShell";

const scalePoints = [
  {
    icon: Server,
    title: "Stateless API tier",
    body: "Horizontally scale FastAPI behind a load balancer. Webhook verify + enqueue is cheap I/O; more replicas absorb burst POST volume from payment rails.",
  },
  {
    icon: Layers,
    title: "Worker pool on Redis",
    body: "Redis holds the work queue; add worker processes until scoring keeps up. Back-pressure is visible in queue depth — tune workers before touching Postgres hot paths.",
  },
  {
    icon: Database,
    title: "PostgreSQL for truth",
    body: "Transactions and alerts stay consistent in PG. Read replicas or CQRS-style read models can feed heavy dashboards if chart queries outgrow a single instance.",
  },
  {
    icon: Radio,
    title: "Socket.IO at scale",
    body: "Use a Redis-backed Socket.IO adapter and sticky sessions (or managed pub/sub) so every UI client gets updates as workers emit — same pattern as growing any live ops product.",
  },
];

const stackChips = [
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "python-socketio",
  "Next.js 15",
  "HeroUI",
  "Chart.js",
  "socket.io-client",
  "Uvicorn",
  "Vercel (UI)",
];

export function SlideScalability() {
  return (
    <SlideShell
      eyebrow="Scalability"
      title="Grow traffic without rewriting the spine."
      subtitle="Same story as the architecture slide: webhook → store → queue → worker → sockets. Scaling is mostly adding replicas and capacity in those layers."
    >
      <div className="grid sm:grid-cols-2 gap-3">
        {scalePoints.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 + i * 0.05 }}
            className="glass-strong rounded-xl border border-border/70 p-3.5 sm:p-4"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/15 text-neon mb-2">
              <p.icon className="h-4 w-4" />
            </div>
            <h3 className="text-xs sm:text-sm font-semibold leading-snug">{p.title}</h3>
            <p className="mt-1.5 text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
              {p.body}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.28 }}
        className="mt-4 rounded-xl border border-dashed border-primary/30 bg-primary/5 px-3 py-3"
      >
        <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
          Stack we ship today (same repo)
        </p>
        <div className="flex flex-wrap gap-1.5">
          {stackChips.map((c) => (
            <span
              key={c}
              className="rounded-md bg-background/60 px-2 py-1 text-[10px] sm:text-[11px] font-mono text-foreground/85 border border-border/60"
            >
              {c}
            </span>
          ))}
        </div>
      </motion.div>
    </SlideShell>
  );
}
