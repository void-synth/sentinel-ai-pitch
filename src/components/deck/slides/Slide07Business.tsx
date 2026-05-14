import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Radio, ShieldAlert, CheckCircle } from "lucide-react";
import { SlideShell } from "../SlideShell";

type Step = 0 | 1 | 2 | 3 | 4;

export function Slide07Business() {
  const [step, setStep] = useState<Step>(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 500);
    const t2 = setTimeout(() => setStep(2), 1800);
    const t3 = setTimeout(() => setStep(3), 3200);
    const t4 = setTimeout(() => setStep(4), 4800);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, []);

  const lines = [
    step >= 1 && "> python simulate.py -n 50 -c 8 --fraud-rate 0.1",
    step >= 2 && "> POST /api/v1/webhook/squad … verify ✓ enqueue ✓",
    step >= 3 && "> worker: score → FraudAlert created (held)",
    step >= 4 && "> analyst: POST …/release → Socket.IO stats refresh ✓",
  ].filter(Boolean) as string[];

  return (
    <SlideShell eyebrow="Live demo" title="30–45 seconds: prove the path.">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6 items-start">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-strong rounded-2xl p-5 font-mono text-xs min-h-[240px]"
        >
          <div className="flex items-center gap-2 text-muted-foreground mb-3">
            <Terminal className="h-4 w-4" />
            <span>TERMINAL · backend/</span>
          </div>
          <div className="space-y-2 text-neon-green/90">
            {lines.map((line, i) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {line}
              </motion.div>
            ))}
            <span className="inline-block w-2 h-4 bg-neon-green/80 animate-pulse align-middle ml-0.5" />
          </div>
        </motion.div>

        <div className="space-y-3">
          {[
            {
              s: 1,
              icon: Radio,
              t: "Load",
              d: "Simulator fires signed webhooks in parallel — same production-like path.",
            },
            {
              s: 2,
              icon: Radio,
              t: "Feed",
              d: "Dashboard live feed shows new rows; filters match analyst workflow.",
            },
            {
              s: 3,
              icon: ShieldAlert,
              t: "Alert",
              d: "High severity creates FraudAlert; case appears in Alerts inbox.",
            },
            {
              s: 4,
              icon: CheckCircle,
              t: "Resolve",
              d: "Release or escalate via REST; stats refresh over Socket.IO.",
            },
          ].map((row) => (
            <motion.div
              key={row.t}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: step >= row.s ? 1 : 0.35, x: 0 }}
              className={`flex gap-3 rounded-xl border p-4 transition ${
                step >= row.s ? "border-primary/50 bg-primary/10" : "border-border/60 bg-muted/20"
              }`}
            >
              <row.icon
                className={`h-5 w-5 shrink-0 mt-0.5 ${step >= row.s ? "text-neon" : "text-muted-foreground"}`}
              />
              <div>
                <div className="text-sm font-semibold">{row.t}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{row.d}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {step >= 4 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-center text-xs text-muted-foreground font-mono"
          >
            Open the deployed UI at{" "}
            <a
              className="text-neon hover:underline"
              href="https://titan-squad.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              titan-squad.vercel.app
            </a>{" "}
            — demo login is intentional scope; production would use IdP + RBAC.
          </motion.p>
        )}
      </AnimatePresence>
    </SlideShell>
  );
}
