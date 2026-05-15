import { motion } from "framer-motion";
import { Radio, ShieldQuestion, Workflow } from "lucide-react";
import { SlideShell, Stat } from "../SlideShell";

const pains = [
  {
    icon: Radio,
    title: "Events move faster than operators",
    desc: "Instant-style payment rails generate a firehose of webhooks. Without a verified ingest path, durable queue, and live surface, teams only learn about fraud after balances and trust are already damaged.",
  },
  {
    icon: ShieldQuestion,
    title: "Scores without evidence do not clear review",
    desc: "A number on a row is not enough for a hold or release decision. Analysts need beneficiary context, a visible hop graph, and an audit-friendly trail from raw event to outcome.",
  },
  {
    icon: Workflow,
    title: "Dashboards that do not close the loop",
    desc: "Charts alone do not run cases. The gap is operations: triage, escalate, resolve — with the same system updating everyone in the room in real time.",
  },
];

const answers = [
  {
    title: "Signed webhook → durable store → queue",
    body: "Squad-style HMAC verification on the raw body, persistence in PostgreSQL, and Redis-backed work so scoring never blocks ingest.",
  },
  {
    title: "Transparent composite risk",
    body: "Worker scores using velocity, graph / money-hop, and metadata-style signals — designed so a judge can trace inputs, not a black box.",
  },
  {
    title: "Next.js ops UI on Socket.IO",
    body: "Live KPIs, Chart.js throughput, filtered feed, alerts inbox, and REST actions (release / escalate) that push updates to every connected client.",
  },
];

export function Slide02Problem() {
  return (
    <SlideShell
      eyebrow="Problem → approach"
      title="Payment fraud is an operations problem, not only a model problem."
      subtitle="Squad Sentinel (Titan) is a hackathon-grade demo that shows the full path: verify payment events like Squad’s docs describe, score them honestly, and give analysts a real console — not slide-ware."
    >
      <div className="grid lg:grid-cols-2 gap-4 lg:gap-5 mb-4 sm:mb-5">
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
            What breaks today
          </h3>
          <div className="space-y-3">
            {pains.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + i * 0.08 }}
                className="glass-strong rounded-xl p-4 border border-border/80"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-[oklch(0.75_0.22_25)]">
                    <p.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{p.title}</h4>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-neon mb-4">
            How Titan addresses it
          </h3>
          <div className="space-y-3">
            {answers.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="glass-strong rounded-xl p-4 border border-primary/25 bg-primary/5"
              >
                <h4 className="text-sm font-semibold text-foreground">{a.title}</h4>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{a.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-2 sm:gap-3">
        <Stat value="HMAC" label="Webhook verification (Squad patterns)" delay={0.35} />
        <Stat value="Redis" label="Queue → background worker" delay={0.42} />
        <Stat value="Live" label="Socket.IO to the analyst UI" accent="green" delay={0.5} />
      </div>
    </SlideShell>
  );
}
