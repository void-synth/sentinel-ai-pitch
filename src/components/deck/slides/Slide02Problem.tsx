import { motion } from "framer-motion";
import { Gauge, EyeOff, GitBranch } from "lucide-react";
import { SlideShell, Stat } from "../SlideShell";

const pains = [
  {
    icon: Gauge,
    title: "Volume beats humans",
    desc: "Instant rails push transactions faster than analysts can tab through logs — without a live feed and queue, you only see fraud after the story is over.",
  },
  {
    icon: EyeOff,
    title: "Black-box “AI” fails Q&A",
    desc: "Judges (and banks) ask: where did the score come from? Slides without a visible path from event → model inputs → action lose trust in minutes.",
  },
  {
    icon: GitBranch,
    title: "No money path, no decision",
    desc: "Velocity alone is not enough. Operators need beneficiary context and a money-hop view to hold, release, or escalate with confidence.",
  },
];

export function Slide02Problem() {
  return (
    <SlideShell
      eyebrow="The problem"
      title="Fraud ops needs a believable pipeline — not a buzzword."
      subtitle="We built Titan for hackathon clarity: the same path from signed webhook to database to worker to sockets to UI — stressable with a simulator, honest about what moves on Squad vs what stays in our case model."
    >
      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {pains.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.12 }}
            className="glass-strong rounded-2xl p-6 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-neon">
                <p.icon className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-mono text-muted-foreground">0{i + 1}</span>
            </div>
            <h3 className="text-lg font-semibold mb-1.5">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-3">
        <Stat value="Signed" label="Webhook verification (HMAC)" delay={0.5} />
        <Stat value="Queued" label="Redis → background worker" delay={0.6} />
        <Stat value="Live" label="Socket.IO to all clients" accent="green" delay={0.7} />
      </div>
    </SlideShell>
  );
}
