import { motion } from "framer-motion";
import { ArrowRight, Activity, Lock, Zap } from "lucide-react";
import { Stat } from "../SlideShell";

export function Slide01Cover() {
  return (
    <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-neon mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-neon-red animate-ping" />
            <span className="relative h-2 w-2 rounded-full bg-neon-red" />
          </span>
          Live · Fraud Immune System
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl font-bold tracking-tighter leading-[0.95]"
        >
          Squad-<span className="text-gradient">Sentinel</span>
          <br /> AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground"
        >
          Nigeria's <span className="text-foreground font-medium">real-time fraud immune system</span> for banks. We detect, explain, and recover stolen funds — before they disappear.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 flex items-center gap-3"
        >
          <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-neon px-5 py-3 text-sm font-semibold text-primary-foreground neon-border">
            Detect. Explain. Recover.
            <ArrowRight className="h-4 w-4" />
          </div>
          <div className="text-xs text-muted-foreground font-mono">v1.0 · Lagos · 2026</div>
        </motion.div>

        <div className="mt-10 grid grid-cols-3 gap-3">
          <Stat value="₦17B+" label="Lost yearly to fraud" accent="danger" delay={0.6} />
          <Stat value="9.7B" label="NIP transactions / yr" delay={0.75} />
          <Stat value="+40%" label="Social engineering rise" accent="danger" delay={0.9} />
        </div>
      </div>

      {/* Right: dashboard mock */}
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
              <span className="font-mono text-muted-foreground">SENTINEL // LIVE</span>
            </div>
            <span className="font-mono text-muted-foreground">02:41:08 WAT</span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              { i: Activity, l: "TXN/s", v: "11,204" },
              { i: Lock, l: "Blocked", v: "342" },
              { i: Zap, l: "Recovered", v: "₦184M" },
            ].map((m, i) => (
              <div key={i} className="rounded-lg bg-white/5 p-3">
                <m.i className="h-3.5 w-3.5 text-neon mb-1.5" />
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.l}</div>
                <div className="text-base font-mono font-semibold">{m.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-lg bg-black/40 p-3 font-mono text-[11px] space-y-1.5">
            {[
              { t: "TXN-7f3a", a: "₦5,000", s: "ok" },
              { t: "TXN-7f3b", a: "₦120,000", s: "ok" },
              { t: "TXN-7f3c", a: "₦450,000", s: "review" },
              { t: "TXN-7f3d", a: "₦900,000", s: "fraud" },
            ].map((r, i) => (
              <motion.div
                key={r.t}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.15 }}
                className="flex items-center justify-between"
              >
                <span className="text-muted-foreground">{r.t}</span>
                <span>{r.a}</span>
                <span
                  className={
                    r.s === "fraud"
                      ? "text-[oklch(0.75_0.22_25)]"
                      : r.s === "review"
                      ? "text-[oklch(0.85_0.18_80)]"
                      : "text-[oklch(0.78_0.2_155)]"
                  }
                >
                  ●&nbsp;{r.s.toUpperCase()}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between text-[10px] text-muted-foreground font-mono">
            <span>RISK ENGINE: TRIPLE THREAT v2</span>
            <span className="text-neon-green">● ALL SYSTEMS NOMINAL</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
