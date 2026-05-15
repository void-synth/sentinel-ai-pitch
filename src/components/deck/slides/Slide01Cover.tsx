import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const LIVE = "https://squad-titan.vercel.app/";
const REPO = "https://github.com/void-synth/squad";

export function Slide01Cover() {
  return (
    <div className="grid lg:grid-cols-[1.15fr_1fr] gap-6 lg:gap-12 xl:gap-14 items-center">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-5 flex flex-wrap items-center gap-2"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-neon font-mono">
            Squad Sentinel
          </span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            Team Synth · 2026
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="text-sm sm:text-base font-medium text-neon/90 tracking-wide"
        >
          When the rail is instant, fraud does not wait for Monday’s spreadsheet.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12 }}
          className="mt-3 text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.98]"
        >
          <span className="text-gradient">Titan</span>
          <span className="block mt-1 text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/90">
            Real-time fraud operations on Squad-style events.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.28 }}
          className="mt-6 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed"
        >
          A working stack, not a concept video:{" "}
          <span className="text-foreground font-medium">signed webhooks</span>, a{" "}
          <span className="text-foreground font-medium">queue-backed risk worker</span>, and a{" "}
          <span className="text-foreground font-medium">Next.js analyst console</span> with live
          charts, feed, alerts, and money-hop context — open source and deployable for judges to
          click.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3"
        >
          <a
            href={LIVE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-neon px-6 py-3.5 text-sm font-semibold text-primary-foreground neon-border hover:opacity-95 transition"
          >
            Open live demo
            <ExternalLink className="h-4 w-4 opacity-90" />
          </a>
          <a
            href={REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full glass-strong px-6 py-3.5 text-sm font-semibold border border-border hover:border-primary/45 hover:bg-primary/5 transition"
          >
            <Github className="h-4 w-4 text-neon" />
            void-synth/squad
          </a>
          <div className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-xs font-mono text-muted-foreground">
            Ingest <ArrowRight className="h-3.5 w-3.5 text-neon shrink-0" /> Score{" "}
            <ArrowRight className="h-3.5 w-3.5 text-neon shrink-0" /> Operate
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.85, delay: 0.18 }}
        className="relative hidden lg:block"
      >
        <div className="absolute -inset-8 bg-gradient-to-tr from-primary/35 to-neon-red/25 blur-3xl opacity-55" />
        <div className="relative glass-strong rounded-2xl overflow-hidden neon-border shadow-2xl shadow-primary/10">
          <img
            src="/dashboard.png"
            alt="Titan operations dashboard"
            className="w-full h-auto object-cover"
          />
        </div>
        <p className="mt-3 text-center text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          HeroUI · Chart.js · Socket.IO — live under load
        </p>
      </motion.div>
    </div>
  );
}
