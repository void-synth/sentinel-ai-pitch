import { motion } from "framer-motion";
import { Webhook, Shield, Zap } from "lucide-react";
import { SlideShell } from "../SlideShell";

const points = [
  {
    icon: Webhook,
    title: "Webhook-first integrations",
    bullets: [
      "Squad and peers expect async, POST-driven payment notifications — same pattern as `POST /api/v1/webhook/squad`.",
      "Production-style verification: `x-squad-encrypted-body` (HMAC-SHA512 over raw body); local simulator can use `x-squad-signature` (HMAC-SHA256) in legacy mode.",
    ],
  },
  {
    icon: Shield,
    title: "Honest security framing",
    bullets: [
      "Demo UI uses a lightweight client-side login — a hackathon gate, not enterprise IdP.",
      "We do not claim Squad endorses the project; we integrate with Squad patterns / sandbox APIs per their docs.",
    ],
  },
  {
    icon: Zap,
    title: "Built to be opened in the room",
    bullets: [
      "`simulate.py` fires many signed webhooks in parallel (`-n`, `-c`, `--fraud-rate`) so judges see the same path under load.",
      "Optional payout paths in code are gated / off by default — not the hero unless you ask.",
    ],
  },
];

export function Slide03Solution() {
  return (
    <SlideShell
      eyebrow="Why now"
      title="Instant rails demand instant ops — and proof you did the work."
      subtitle="Judges reward systems they can trace. Titan is wired for traceability from the first byte of the webhook to the pixel in the analyst UI."
    >
      <div className="grid lg:grid-cols-3 gap-4">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1 }}
            className="glass-strong rounded-2xl p-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-neon mb-4">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold mb-3">{p.title}</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground leading-relaxed">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-neon shrink-0">▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
}
