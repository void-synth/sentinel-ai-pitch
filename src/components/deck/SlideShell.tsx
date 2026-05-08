import { ReactNode } from "react";
import { motion } from "framer-motion";

export function SlideShell({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="w-full">
      {(eyebrow || title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-neon">
              <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_10px_var(--neon)]" />
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gradient">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}
      {children}
    </div>
  );
}

export function Stat({
  value,
  label,
  accent = "neon",
  delay = 0,
}: {
  value: string;
  label: string;
  accent?: "neon" | "danger" | "green";
  delay?: number;
}) {
  const colorMap = {
    neon: "text-neon",
    danger: "text-[oklch(0.75_0.22_25)]",
    green: "text-[oklch(0.78_0.2_155)]",
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      className="glass-strong rounded-2xl p-6 relative overflow-hidden group"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
      <div className={`text-3xl sm:text-4xl font-bold font-mono tracking-tight ${colorMap[accent]}`}>
        {value}
      </div>
      <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </motion.div>
  );
}
