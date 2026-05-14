import { motion } from "framer-motion";
import { ArrowRight, Activity, Lock, Radio } from "lucide-react";
import { Stat } from "../SlideShell";

const REPO = "https://github.com/void-synth/squad";
const LIVE = "https://titan-squad.vercel.app/";

export function Slide01Cover() {
  return (
    <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-neon font-mono"
        >
          Team Synth
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-bold tracking-tighter leading-[0.95]"
        >
          <span className="text-gradient">Titan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 text-sm font-mono text-muted-foreground"
        >
          Squad Sentinel
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground"
        >
          <span className="text-foreground font-medium">Fraud monitoring and operations</span> for
          instant-payment style flows: signed Squad-pattern webhooks, queue-backed scoring, and a{" "}
          <span className="text-foreground font-medium">live analyst UI</span> — built to demo under
          load, not as slide-ware.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-neon px-5 py-3 text-sm font-semibold text-primary-foreground neon-border">
            Ingest · Score · Operate
            <ArrowRight className="h-4 w-4" />
          </div>
          <a
            href={LIVE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground font-mono hover:text-neon transition underline-offset-4 hover:underline"
          >
            {LIVE.replace(/^https:\/\//, "")}
          </a>
        </motion.div>

        <div className="mt-10 grid grid-cols-3 gap-3">
          <Stat value="FastAPI" label="Webhook + ASGI API" delay={0.6} />
          <Stat value="Redis" label="Queue → worker" delay={0.75} />
          <Stat value="Socket.IO" label="Live dashboard" accent="green" delay={0.9} />
        </div>
        <p className="mt-3 text-[10px] text-muted-foreground font-mono leading-relaxed max-w-xl">
          Open source:{" "}
          <a
            className="text-neon hover:underline"
            href={REPO}
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/void-synth/squad
          </a>
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="relative hidden lg:block"
      >
        <div className="absolute -inset-6 bg-gradient-to-tr from-primary/30 to-neon-red/20 blur-3xl opacity-60" />
        <div className="relative glass-strong rounded-2xl p-5 neon-border">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-neon-green animate-pulse" />
              <span className="font-mono text-muted-foreground">
                TITAN // TRANSACTION MONITORING
              </span>
            </div>
            <span className="font-mono text-neon-green">LIVE</span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              { i: Activity, l: "Txn", v: "20" },
              { i: Lock, l: "Threats", v: "0" },
              { i: Radio, l: "Reserve*", v: "₦119K" },
            ].map((m, i) => (
              <div key={i} className="rounded-lg bg-primary/10 p-3">
                <m.i className="h-3.5 w-3.5 text-neon mb-1.5" />
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {m.l}
                </div>
                <div className="text-base font-mono font-semibold">{m.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-3 text-[9px] font-mono text-muted-foreground">
            *Simulated 5% platform fee — display only.
          </div>

          <div className="mt-4 rounded-lg bg-muted/80 p-3 font-mono text-[11px] space-y-1.5">
            {[
              { t: "TXN-8a21", a: "₦10,799", s: "pending" },
              { t: "TXN-8a20", a: "₦4,200", s: "safe" },
              { t: "TXN-8a19", a: "₦120,000", s: "safe" },
              { t: "TXN-8a18", a: "₦900,000", s: "flagged" },
            ].map((r, i) => (
              <motion.div
                key={r.t}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.12 }}
                className="flex items-center justify-between"
              >
                <span className="text-muted-foreground">{r.t}</span>
                <span>{r.a}</span>
                <span
                  className={
                    r.s === "flagged"
                      ? "text-[oklch(0.75_0.22_25)]"
                      : r.s === "pending"
                        ? "text-[oklch(0.85_0.18_80)]"
                        : "text-[oklch(0.78_0.2_155)]"
                  }
                >
                  ● {r.s.toUpperCase()}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between text-[10px] text-muted-foreground font-mono">
            <span>WEBHOOK → PG → REDIS → WORKER</span>
            <span className="text-neon-green">● SOCKET.IO</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
