import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { slides } from "@/components/deck/slides";

export function Deck() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback(
    (next: number) => {
      setDir(next > index ? 1 : -1);
      setIndex(Math.max(0, Math.min(slides.length - 1, next)));
    },
    [index],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") go(index + 1);
      else if (e.key === "ArrowLeft" || e.key === "PageUp") go(index - 1);
      else if (e.key === "Home") go(0);
      else if (e.key === "End") go(slides.length - 1);
      else if (e.key.toLowerCase() === "f") document.documentElement.requestFullscreen?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, go]);

  const Slide = slides[index].component;

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-destructive/15 blur-[140px]" />

      {/* Top bar */}
      <header className="absolute top-0 left-0 right-0 z-40 flex items-center justify-between px-4 sm:px-8 py-4">
        <div />
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span className="text-foreground/30">/</span>
            <span>{String(slides.length).padStart(2, "0")}</span>
            <span className="ml-3 uppercase tracking-widest">{slides[index].title}</span>
          </div>
          <button
            onClick={() => document.documentElement.requestFullscreen?.()}
            className="rounded-md glass p-2 hover:bg-primary/10 transition"
            aria-label="Fullscreen"
          >
            <Maximize2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </header>

      {/* Slide */}
      <div className="relative h-full w-full">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={index}
            custom={dir}
            initial={{ opacity: 0, x: dir * 60, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -dir * 60, filter: "blur(8px)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex min-h-0 items-start justify-center px-3 sm:px-8 lg:px-12 pt-14 sm:pt-20 pb-28 sm:pb-32 overflow-y-auto overflow-x-hidden scrollbar-hide"
          >
            <div className="w-full max-w-7xl shrink-0 py-3 sm:py-5">
              <Slide />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom controls */}
      <footer className="absolute bottom-0 left-0 right-0 z-40 flex items-center justify-between px-4 sm:px-8 py-4">
        <button
          onClick={() => go(index - 1)}
          disabled={index === 0}
          className="rounded-full glass-strong p-3 hover:bg-primary/10 disabled:opacity-30 transition"
          aria-label="Previous"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Progress bar */}
        <div className="flex-1 mx-4 sm:mx-8 flex items-center gap-1.5">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className="group relative flex-1 h-1 rounded-full bg-muted/70 overflow-hidden"
              aria-label={s.title}
            >
              <motion.span
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-neon"
                initial={false}
                animate={{ width: i < index ? "100%" : i === index ? "100%" : "0%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-foreground px-2 py-0.5 text-[10px] text-background opacity-0 group-hover:opacity-100 transition">
                {s.title}
              </span>
            </button>
          ))}
        </div>

        <button
          onClick={() => go(index + 1)}
          disabled={index === slides.length - 1}
          className="rounded-full glass-strong p-3 hover:bg-primary/10 disabled:opacity-30 transition neon-border"
          aria-label="Next"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </footer>
    </div>
  );
}
