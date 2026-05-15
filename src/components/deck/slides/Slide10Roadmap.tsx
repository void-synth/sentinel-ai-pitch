import { motion } from "framer-motion";
import { Github, ExternalLink, MessageCircle } from "lucide-react";
import { SlideShell } from "../SlideShell";

const REPO = "https://github.com/void-synth/squad";
const LIVE = "https://squad-titan.vercel.app/";

export function Slide10Roadmap() {
  return (
    <SlideShell eyebrow="Team & ask" title="Team Synth">
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-strong rounded-2xl p-8 text-center lg:text-left"
        >
          <div className="text-4xl font-bold text-gradient mb-2">Team Synth</div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Hackathon squad shipping Titan (Squad Sentinel) — fraud monitoring demo with realistic
            ingest, composite scoring, and a live operator UI you can open in the judging room.
          </p>
          <p className="mt-4 text-xs font-mono text-muted-foreground">
            Add member names / roles in your speaker notes if you want them on-screen later.
          </p>
        </motion.div>

        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="glass-strong rounded-xl p-4 border border-border/60"
          >
            <div className="text-[10px] font-mono uppercase tracking-widest text-neon mb-2">
              Next on the product
            </div>
            <ul className="text-xs sm:text-sm text-muted-foreground space-y-1.5 leading-relaxed">
              <li>RBAC + real IdP · audit export · labeled replay for scorer eval</li>
              <li>Richer case management (assignments, SLAs, notes, escalation paths)</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-strong rounded-2xl p-6"
          >
            <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3">
              What we want
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <MessageCircle className="h-4 w-4 text-neon shrink-0 mt-0.5" />
                <span>
                  <span className="text-foreground font-medium">Feedback</span> on pipeline design
                  and hackathon story — sharp questions welcome.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-neon shrink-0">▸</span>
                <span>
                  <span className="text-foreground font-medium">Category fit</span> — Squad /
                  fintech / security tracks where a verifiable webhook-to-UI demo scores.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-neon shrink-0">▸</span>
                <span>
                  <span className="text-foreground font-medium">Intros</span> to teams who live in
                  alert queues — no fabricated pilots or logos.
                </span>
              </li>
            </ul>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-3">
            <motion.a
              href={REPO}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-xl p-5 flex items-center gap-3 border border-border hover:border-primary/50 hover:bg-primary/5 transition group"
            >
              <Github className="h-6 w-6 text-neon" />
              <div>
                <div className="text-[10px] font-mono uppercase text-muted-foreground">Source</div>
                <div className="text-sm font-semibold group-hover:text-neon transition">
                  void-synth/squad
                </div>
              </div>
            </motion.a>
            <motion.a
              href={LIVE}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              className="glass rounded-xl p-5 flex items-center gap-3 border border-border hover:border-primary/50 hover:bg-primary/5 transition group"
            >
              <ExternalLink className="h-6 w-6 text-neon" />
              <div>
                <div className="text-[10px] font-mono uppercase text-muted-foreground">
                  Live product
                </div>
                <div className="text-sm font-semibold group-hover:text-neon transition">
                  squad-titan.vercel.app
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
