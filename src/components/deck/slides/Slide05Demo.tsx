import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Snowflake, RotateCcw, Users } from "lucide-react";
import { SlideShell } from "../SlideShell";

type Tx = { id: string; amt: string; to: string; risk: "ok" | "review" | "fraud" };

const baseFeed: Tx[] = [
  { id: "TXN-A21", amt: "₦5,000", to: "Acct ··· 4421", risk: "ok" },
  { id: "TXN-A22", amt: "₦120,000", to: "Acct ··· 9087", risk: "ok" },
  { id: "TXN-A23", amt: "₦450,000", to: "Acct ··· 2210", risk: "review" },
  { id: "TXN-A24", amt: "₦900,000", to: "Acct ··· 7715", risk: "fraud" },
];

export function Slide05Demo() {
  const [feed, setFeed] = useState<Tx[]>([baseFeed[0]]);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFeed(f => [...f, baseFeed[1]]), 700);
    const t2 = setTimeout(() => setFeed(f => [...f, baseFeed[2]]), 1500);
    const t3 = setTimeout(() => setFeed(f => [...f, baseFeed[3]]), 2400);
    const t4 = setTimeout(() => setAlert(true), 3000);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, []);

  return (
    <SlideShell eyebrow="Live Demo" title="A fraud event, in real time.">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6">
        {/* Feed */}
        <div className="glass-strong rounded-2xl p-5">
          <div className="flex items-center justify-between text-xs mb-3">
            <div className="flex items-center gap-2 font-mono">
              <span className="h-2 w-2 rounded-full bg-neon-green animate-pulse" />
              <span className="text-muted-foreground">LIVE TRANSACTION FEED</span>
            </div>
            <span className="font-mono text-muted-foreground">NIP · LAGOS-EAST</span>
          </div>
          <div className="space-y-2 font-mono text-xs min-h-[260px]">
            <AnimatePresence>
              {feed.map((t) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 ${
                    t.risk === "fraud"
                      ? "bg-destructive/15 danger-glow"
                      : t.risk === "review"
                      ? "bg-yellow-500/10"
                      : "bg-white/5"
                  }`}
                >
                  <span className="text-muted-foreground">{t.id}</span>
                  <span className="text-foreground font-semibold">{t.amt}</span>
                  <span className="text-muted-foreground hidden sm:inline">{t.to}</span>
                  <span
                    className={
                      t.risk === "fraud"
                        ? "text-[oklch(0.75_0.22_25)]"
                        : t.risk === "review"
                        ? "text-[oklch(0.85_0.18_80)]"
                        : "text-[oklch(0.78_0.2_155)]"
                    }
                  >
                    ● {t.risk.toUpperCase()}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Alert */}
        <AnimatePresence>
          {alert && (
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-strong rounded-2xl p-6 danger-glow relative"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative h-11 w-11 rounded-full bg-destructive/20 flex items-center justify-center">
                  <ShieldAlert className="h-5 w-5 text-[oklch(0.75_0.22_25)]" />
                  <span className="absolute inset-0 rounded-full pulse-ring" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[oklch(0.75_0.22_25)] font-mono">FRAUD ALERT</div>
                  <div className="text-sm font-semibold">TXN-A24 · ₦900,000</div>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-3xl font-bold font-mono text-gradient-danger">94%</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Risk Score</div>
                </div>
              </div>

              <div className="rounded-lg bg-black/40 p-3 text-xs text-foreground/90 leading-relaxed">
                <span className="text-[oklch(0.75_0.22_25)] font-mono">REASON:</span>{" "}
                Rapid fund dispersal to <span className="text-foreground font-semibold">5 new accounts</span> tied to a <span className="text-foreground font-semibold">blacklisted device</span> (DEV-X7F2A).
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  { i: Snowflake, l: "Freeze Funds" },
                  { i: RotateCcw, l: "Reverse Transfer" },
                  { i: Users, l: "Alert Compliance" },
                ].map((a, i) => (
                  <motion.div
                    key={a.l}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.15 }}
                    className="rounded-lg bg-gradient-to-br from-primary/20 to-transparent border border-primary/40 p-3 text-center"
                  >
                    <a.i className="h-4 w-4 mx-auto mb-1.5 text-neon" />
                    <div className="text-[10px] uppercase tracking-wider">{a.l}</div>
                    <div className="text-[10px] text-neon-green mt-1 font-mono">✓ AUTO</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-3 text-[10px] font-mono text-muted-foreground text-right">
                Time to action: <span className="text-neon-green">87ms</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SlideShell>
  );
}
