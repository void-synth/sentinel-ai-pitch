import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";

const nodes = [
  { id: "WH", label: "Squad-style\nwebhook", x: 40, y: 180 },
  { id: "API", label: "FastAPI\nverify + persist", x: 160, y: 180 },
  { id: "PG", label: "PostgreSQL\nTransaction", x: 280, y: 100 },
  { id: "RD", label: "Redis\nqueue", x: 280, y: 260 },
  { id: "WK", label: "Worker\nrisk engine", x: 420, y: 180 },
  { id: "SO", label: "Socket.IO\nemit", x: 560, y: 180 },
  { id: "UI", label: "Vite + React\nops UI", x: 700, y: 180 },
];

const edges = [
  ["WH", "API"],
  ["API", "PG"],
  ["API", "RD"],
  ["RD", "WK"],
  ["PG", "WK"],
  ["WK", "SO"],
  ["SO", "UI"],
];

const pos = Object.fromEntries(nodes.map((n) => [n.id, n]));

export function Slide05Demo() {
  return (
    <SlideShell
      eyebrow="Architecture"
      title="One pipeline — demo, load test, and Q&A use the same path."
      subtitle="Webhook → Postgres → Redis queue → background worker → composite scorer → Socket.IO → analyst dashboard. Optional Squad proxy / gated payout exists for completeness — not the hero story."
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-strong rounded-2xl p-6 md:p-8 overflow-x-auto"
      >
        <svg viewBox="0 0 820 340" className="w-full min-w-[640px] h-[280px] md:h-[320px]">
          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="oklch(0.55 0.12 250)" />
            </marker>
          </defs>
          {edges.map(([from, to]) => {
            const a = pos[from];
            const b = pos[to];
            if (!a || !b) return null;
            const x1 = a.x + 55;
            const y1 = a.y + 22;
            const x2 = b.x;
            const y2 = b.y + 22;
            return (
              <line
                key={`${from}-${to}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="oklch(0.55 0.12 250 / 0.7)"
                strokeWidth="1.5"
                markerEnd="url(#arrow)"
              />
            );
          })}
          {nodes.map((n, i) => (
            <motion.g
              key={n.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.06 }}
            >
              <rect
                x={n.x}
                y={n.y}
                width={110}
                height={56}
                rx="10"
                fill="oklch(0.16 0.03 260)"
                stroke="oklch(0.72 0.18 240)"
                strokeWidth="1.2"
              />
              <text
                x={n.x + 55}
                y={n.y + 24}
                textAnchor="middle"
                fill="oklch(0.78 0.2 230)"
                fontSize="10"
                fontFamily="ui-monospace, monospace"
              >
                {n.label.split("\n").map((line, li) => (
                  <tspan key={li} x={n.x + 55} dy={li === 0 ? 0 : 14}>
                    {line}
                  </tspan>
                ))}
              </text>
            </motion.g>
          ))}
        </svg>
      </motion.div>
      <p className="mt-4 text-xs text-muted-foreground font-mono text-center">
        ASGI combines FastAPI + python-socketio — single process story for the hackathon demo.
      </p>
    </SlideShell>
  );
}
