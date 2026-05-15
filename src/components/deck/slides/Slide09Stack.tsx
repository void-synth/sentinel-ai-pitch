import { motion } from "framer-motion";
import { KeyRound, FileDown, FlaskConical, KanbanSquare } from "lucide-react";
import { SlideShell } from "../SlideShell";

const items = [
  {
    icon: KeyRound,
    title: "RBAC + real IdP",
    desc: "Replace demo login with proper auth, roles for analyst vs admin, and session hardening.",
  },
  {
    icon: FileDown,
    title: "Audit export",
    desc: "Downloadable case trails — timestamps, actions, and payload hashes for compliance conversations.",
  },
  {
    icon: FlaskConical,
    title: "Model evaluation loop",
    desc: "Replay labeled webhooks, track precision/recall on holds, version scorer configs — only where the team invests next.",
  },
  {
    icon: KanbanSquare,
    title: "Richer case management",
    desc: "Assignments, SLAs, internal notes, and escalation paths to match enterprise SOC workflows.",
  },
];

export function Slide09Stack() {
  return (
    <SlideShell
      eyebrow="Roadmap"
      title="If we had eight more weeks…"
      subtitle="Everything here extends the same pipeline — no rewrite of the core webhook → worker → socket story."
    >
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 + i * 0.08 }}
            className="glass-strong rounded-2xl p-6 flex gap-4"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-neon">
              <it.icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold">{it.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 glass-strong rounded-2xl p-6"
      >
        <h3 className="text-sm font-semibold mb-4 text-foreground">Tech Stack</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
          <div className="rounded-lg bg-primary/10 p-3 text-center">
            <div className="text-neon font-semibold mb-1">FastAPI</div>
            <div className="text-muted-foreground">Webhook + ASGI API</div>
          </div>
          <div className="rounded-lg bg-primary/10 p-3 text-center">
            <div className="text-neon font-semibold mb-1">PostgreSQL</div>
            <div className="text-muted-foreground">Data persistence</div>
          </div>
          <div className="rounded-lg bg-primary/10 p-3 text-center">
            <div className="text-neon font-semibold mb-1">Redis</div>
            <div className="text-muted-foreground">Queue → worker</div>
          </div>
          <div className="rounded-lg bg-primary/10 p-3 text-center">
            <div className="text-neon font-semibold mb-1">Socket.IO</div>
            <div className="text-muted-foreground">Live dashboard</div>
          </div>
          <div className="rounded-lg bg-primary/10 p-3 text-center">
            <div className="text-neon font-semibold mb-1">Vite + React</div>
            <div className="text-muted-foreground">Frontend framework</div>
          </div>
          <div className="rounded-lg bg-primary/10 p-3 text-center">
            <div className="text-neon font-semibold mb-1">HeroUI</div>
            <div className="text-muted-foreground">UI components</div>
          </div>
          <div className="rounded-lg bg-primary/10 p-3 text-center">
            <div className="text-neon font-semibold mb-1">Chart.js</div>
            <div className="text-muted-foreground">Data visualization</div>
          </div>
          <div className="rounded-lg bg-primary/10 p-3 text-center">
            <div className="text-neon font-semibold mb-1">python-socketio</div>
            <div className="text-muted-foreground">Real-time events</div>
          </div>
        </div>
        <div className="mt-4 text-center text-[10px] text-muted-foreground font-mono">
          <a
            href="https://github.com/void-synth/squad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon hover:underline"
          >
            github.com/void-synth/squad
          </a>
        </div>
      </motion.div>
    </SlideShell>
  );
}
