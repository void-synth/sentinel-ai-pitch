import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

const REPO = "https://github.com/void-synth/squad";
const LIVE = "https://squad-titan.vercel.app/";

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
        className="relative inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-neon mb-6"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_10px_var(--neon)]" />
        Team Synth · Titan
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.15 }}
        className="relative text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.08] max-w-4xl mx-auto"
      >
        From <span className="text-gradient">signed webhook</span> to{" "}
        <span className="text-gradient-danger">live ops</span>
        <br />— thank you.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="relative mt-8 max-w-xl mx-auto text-sm text-muted-foreground"
      >
        Titan is a hackathon-grade fraud monitoring demo: honest about auth, payouts, and what lives
        in our case model vs on Squad rails.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.65 }}
        className="relative mt-10 flex flex-col items-center gap-4"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={LIVE}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-neon px-8 py-4 text-base font-semibold text-primary-foreground neon-border hover:scale-105 transition"
          >
            Open live product
            <ArrowUpRight className="h-5 w-5 group-hover:rotate-45 transition" />
          </a>
          <a
            href={REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full glass-strong px-7 py-3.5 text-sm font-semibold text-foreground border border-primary/30 hover:bg-primary/10 transition"
          >
            <Github className="h-4 w-4" />
            void-synth/squad
            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-neon transition" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="relative mt-14 flex flex-wrap items-center justify-center gap-6 text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground"
      >
        <span>Squad Sentinel</span>
        <span className="h-px w-8 bg-border" />
        <span>2026</span>
        <span className="h-px w-8 bg-border" />
        <span className="text-neon">Ingest · Score · Operate</span>
      </motion.div>
    </div>
  );
}
