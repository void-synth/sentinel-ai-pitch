import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const LIVE = "https://squad-titan.vercel.app/";

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
          className="mt-8"
        >
          <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-neon px-5 py-3 text-sm font-semibold text-primary-foreground neon-border">
            Ingest · Score · Operate
            <ArrowRight className="h-4 w-4" />
          </div>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="relative hidden lg:block"
      >
        <div className="absolute -inset-6 bg-gradient-to-tr from-primary/30 to-neon-red/20 blur-3xl opacity-60" />
        <div className="relative glass-strong rounded-2xl overflow-hidden neon-border">
          <img
            src="/dashboard.png"
            alt="Titan Dashboard"
            className="w-full h-auto object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}
