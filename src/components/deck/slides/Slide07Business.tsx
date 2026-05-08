import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { SlideShell } from "../SlideShell";

const tiers = [
  {
    name: "Enterprise SaaS",
    price: "₦50M",
    cycle: "/year per bank",
    perks: ["Unlimited transactions", "Dedicated CSM", "On-prem deployment", "SLA 99.99%"],
  },
  {
    name: "Per Transaction",
    price: "₦5",
    cycle: "/screened transfer",
    perks: ["Pay-as-you-go", "API + dashboard", "No volume commit", "Ideal for fintechs"],
  },
  {
    name: "Recovery Revenue Share",
    price: "5%",
    cycle: "of recovered funds",
    perks: ["Zero upfront cost", "Aligned incentives", "Scales with success", "Bank's favorite"],
    highlight: true,
  },
];

export function Slide07Business() {
  return (
    <SlideShell
      eyebrow="Business Model"
      title="Three revenue streams. One unfair flywheel."
      subtitle="Recovery share is the wedge — banks pay nothing unless we save them money."
    >
      <div className="grid md:grid-cols-3 gap-4">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.12 }}
            className={`relative rounded-2xl p-6 ${
              t.highlight ? "glass-strong neon-border" : "glass-strong"
            }`}
          >
            {t.highlight && (
              <div className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-neon px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                <Sparkles className="h-3 w-3" /> Most attractive
              </div>
            )}
            <div className="text-xs uppercase tracking-widest text-muted-foreground">{t.name}</div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className={`text-5xl font-bold font-mono ${t.highlight ? "text-gradient" : ""}`}>{t.price}</span>
              <span className="text-xs text-muted-foreground">{t.cycle}</span>
            </div>
            <div className="mt-5 h-px bg-white/10" />
            <ul className="mt-4 space-y-2.5 text-sm">
              {t.perks.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-neon" />
                  <span className="text-foreground/90">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 grid sm:grid-cols-3 gap-3 text-center"
      >
        {[
          { l: "Year 1 ARR target", v: "₦240M" },
          { l: "Avg contract value", v: "₦70M" },
          { l: "Gross margin", v: "84%" },
        ].map((s) => (
          <div key={s.l} className="glass rounded-xl p-3">
            <div className="text-xl font-mono font-bold text-neon">{s.v}</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">{s.l}</div>
          </div>
        ))}
      </motion.div>
    </SlideShell>
  );
}
