import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Slide11Closing() {
  return (
    <div className="relative text-center">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -inset-20 rounded-full bg-gradient-to-tr from-primary/30 via-neon-red/20 to-transparent blur-3xl pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-neon mb-8"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_10px_var(--neon)]" />
        Squad-Sentinel AI
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] max-w-5xl mx-auto"
      >
        We don't just <span className="text-gradient-danger">detect fraud</span>.
        <br />
        We <span className="text-gradient">recover stolen money</span>
        <br />
        before it disappears.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="relative mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <button className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-neon px-8 py-4 text-base font-semibold text-primary-foreground neon-border hover:scale-105 transition">
          Partner With Us
          <ArrowUpRight className="h-5 w-5 group-hover:rotate-45 transition" />
        </button>
        <a className="text-sm text-muted-foreground font-mono hover:text-foreground transition">
          partners@squadsentinel.ai
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="relative mt-16 flex items-center justify-center gap-8 text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground"
      >
        <span>Lagos</span>
        <span className="h-px w-8 bg-white/20" />
        <span>2026</span>
        <span className="h-px w-8 bg-white/20" />
        <span className="text-neon">Detect · Explain · Recover</span>
      </motion.div>
    </div>
  );
}
