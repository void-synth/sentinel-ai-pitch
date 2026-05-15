import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { M as Maximize2, C as ChevronLeft, a as ChevronRight, A as ArrowRight, b as Activity, L as Lock, R as Radio, G as Gauge, E as EyeOff, c as GitBranch, W as Webhook, S as Shield, Z as Zap, I as Inbox, d as Cpu, e as LayoutDashboard, f as ChartLine, B as Bell, g as MousePointer2, h as RefreshCw, T as Terminal, i as ShieldAlert, j as CircleCheckBig, k as Check, X, K as KeyRound, F as FileDown, l as FlaskConical, m as SquareKanban, n as MessageCircle, o as Github, p as ExternalLink, q as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function SlideShell({
  eyebrow,
  title,
  subtitle,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
    (eyebrow || title || subtitle) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        className: "mb-8",
        children: [
          eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-neon", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_10px_var(--neon)]" }),
            eyebrow
          ] }),
          title && /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-5xl font-bold tracking-tight text-gradient", children: title }),
          subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground", children: subtitle })
        ]
      }
    ),
    children
  ] });
}
function Stat({
  value,
  label,
  accent = "neon",
  delay = 0
}) {
  const colorMap = {
    neon: "text-neon",
    danger: "text-[oklch(0.75_0.22_25)]",
    green: "text-[oklch(0.78_0.2_155)]"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 18 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.7, delay },
      className: "glass-strong rounded-2xl p-6 relative overflow-hidden group",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-3xl sm:text-4xl font-bold font-mono tracking-tight ${colorMap[accent]}`, children: value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs uppercase tracking-widest text-muted-foreground", children: label })
      ]
    }
  );
}
const REPO$2 = "https://github.com/void-synth/squad";
const LIVE$2 = "https://titan-squad.vercel.app/";
function Slide01Cover() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-neon font-mono",
          children: "Team Synth"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.h1,
        {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.1 },
          className: "text-5xl sm:text-7xl font-bold tracking-tighter leading-[0.95]",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Titan" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.7, delay: 0.3 },
          className: "mt-4 text-sm font-mono text-muted-foreground",
          children: "Squad Sentinel"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.p,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.7, delay: 0.35 },
          className: "mt-6 max-w-xl text-base sm:text-lg text-muted-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "Fraud monitoring and operations" }),
            " for instant-payment style flows: signed Squad-pattern webhooks, queue-backed scoring, and a",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "live analyst UI" }),
            " — built to demo under load, not as slide-ware."
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.5 },
          className: "mt-8 flex flex-wrap items-center gap-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-neon px-5 py-3 text-sm font-semibold text-primary-foreground neon-border", children: [
              "Ingest · Score · Operate",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: LIVE$2,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-xs text-muted-foreground font-mono hover:text-neon transition underline-offset-4 hover:underline",
                children: LIVE$2.replace(/^https:\/\//, "")
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid grid-cols-3 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: "FastAPI", label: "Webhook + ASGI API", delay: 0.6 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: "Redis", label: "Queue → worker", delay: 0.75 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: "Socket.IO", label: "Live dashboard", accent: "green", delay: 0.9 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-[10px] text-muted-foreground font-mono leading-relaxed max-w-xl", children: [
        "Open source:",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            className: "text-neon hover:underline",
            href: REPO$2,
            target: "_blank",
            rel: "noopener noreferrer",
            children: "github.com/void-synth/squad"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.96 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.9, delay: 0.2 },
        className: "relative hidden lg:block",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 bg-gradient-to-tr from-primary/30 to-neon-red/20 blur-3xl opacity-60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative glass-strong rounded-2xl p-5 neon-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-neon-green animate-pulse" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-muted-foreground", children: "TITAN // TRANSACTION MONITORING" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-neon-green", children: "LIVE" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-3 gap-2", children: [
              { i: Activity, l: "Txn", v: "20" },
              { i: Lock, l: "Threats", v: "0" },
              { i: Radio, l: "Reserve*", v: "₦119K" }
            ].map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-primary/10 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(m.i, { className: "h-3.5 w-3.5 text-neon mb-1.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: m.l }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-mono font-semibold", children: m.v })
            ] }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-[9px] font-mono text-muted-foreground", children: "*Simulated 5% platform fee — display only." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 rounded-lg bg-muted/80 p-3 font-mono text-[11px] space-y-1.5", children: [
              { t: "TXN-8a21", a: "₦10,799", s: "pending" },
              { t: "TXN-8a20", a: "₦4,200", s: "safe" },
              { t: "TXN-8a19", a: "₦120,000", s: "safe" },
              { t: "TXN-8a18", a: "₦900,000", s: "flagged" }
            ].map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -10 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.8 + i * 0.12 },
                className: "flex items-center justify-between",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: r.t }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: r.a }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: r.s === "flagged" ? "text-[oklch(0.75_0.22_25)]" : r.s === "pending" ? "text-[oklch(0.85_0.18_80)]" : "text-[oklch(0.78_0.2_155)]",
                      children: [
                        "● ",
                        r.s.toUpperCase()
                      ]
                    }
                  )
                ]
              },
              r.t
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between text-[10px] text-muted-foreground font-mono", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "WEBHOOK → PG → REDIS → WORKER" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon-green", children: "● SOCKET.IO" })
            ] })
          ] })
        ]
      }
    )
  ] });
}
const pains = [
  {
    icon: Gauge,
    title: "Volume beats humans",
    desc: "Instant rails push transactions faster than analysts can tab through logs — without a live feed and queue, you only see fraud after the story is over."
  },
  {
    icon: EyeOff,
    title: "Black-box “AI” fails Q&A",
    desc: "Judges (and banks) ask: where did the score come from? Slides without a visible path from event → model inputs → action lose trust in minutes."
  },
  {
    icon: GitBranch,
    title: "No money path, no decision",
    desc: "Velocity alone is not enough. Operators need beneficiary context and a money-hop view to hold, release, or escalate with confidence."
  }
];
function Slide02Problem() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SlideShell,
    {
      eyebrow: "The problem",
      title: "Fraud ops needs a believable pipeline — not a buzzword.",
      subtitle: "We built Titan for hackathon clarity: the same path from signed webhook to database to worker to sockets to UI — stressable with a simulator, honest about what moves on Squad vs what stays in our case model.",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-4 mb-10", children: pains.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 18 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.1 + i * 0.12 },
            className: "glass-strong rounded-2xl p-6 relative overflow-hidden",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-neon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-mono text-muted-foreground", children: [
                  "0",
                  i + 1
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-1.5", children: p.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: p.desc })
            ]
          },
          p.title
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: "Signed", label: "Webhook verification (HMAC)", delay: 0.5 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: "Queued", label: "Redis → background worker", delay: 0.6 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: "Live", label: "Socket.IO to all clients", accent: "green", delay: 0.7 })
        ] })
      ]
    }
  );
}
const points = [
  {
    icon: Webhook,
    title: "Webhook-first integrations",
    bullets: [
      "Squad and peers expect async, POST-driven payment notifications — same pattern as `POST /api/v1/webhook/squad`.",
      "Production-style verification: `x-squad-encrypted-body` (HMAC-SHA512 over raw body); local simulator can use `x-squad-signature` (HMAC-SHA256) in legacy mode."
    ]
  },
  {
    icon: Shield,
    title: "Honest security framing",
    bullets: [
      "Demo UI uses a lightweight client-side login — a hackathon gate, not enterprise IdP.",
      "We do not claim Squad endorses the project; we integrate with Squad patterns / sandbox APIs per their docs."
    ]
  },
  {
    icon: Zap,
    title: "Built to be opened in the room",
    bullets: [
      "`simulate.py` fires many signed webhooks in parallel (`-n`, `-c`, `--fraud-rate`) so judges see the same path under load.",
      "Optional payout paths in code are gated / off by default — not the hero unless you ask."
    ]
  }
];
function Slide03Solution() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SlideShell,
    {
      eyebrow: "Why now",
      title: "Instant rails demand instant ops — and proof you did the work.",
      subtitle: "Judges reward systems they can trace. Titan is wired for traceability from the first byte of the webhook to the pixel in the analyst UI.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-3 gap-4", children: points.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 + i * 0.1 },
          className: "glass-strong rounded-2xl p-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-neon mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-3", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5 text-sm text-muted-foreground leading-relaxed", children: p.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon shrink-0", children: "▸" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b })
            ] }, b)) })
          ]
        },
        p.title
      )) })
    }
  );
}
const blocks = [
  {
    icon: Inbox,
    title: "Ingest",
    items: [
      "Receive Squad-style webhooks; verify signatures per README (encrypted-body vs legacy signature).",
      "Normalize payload → persist `Transaction` → push work to Redis."
    ]
  },
  {
    icon: Cpu,
    title: "Processing",
    items: [
      "Worker dequeues each transaction and runs a composite risk engine.",
      "Three signal families: velocity, graph / money-hop, metadata / NLP-style — transparent inputs, not a mystery model.",
      "Outputs risk score and status (e.g. safe / flagged / held); higher severity can create `FraudAlert` rows."
    ]
  },
  {
    icon: LayoutDashboard,
    title: "Real-time UI",
    items: [
      "Vite + React dashboard; Socket.IO for new transactions, alerts, stats.",
      "KPI strip, throughput chart (Chart.js), live feed with filters, alert / case panel, transaction detail with money-hop graph.",
      "Optional Squad verify payload when `SQUAD_SECRET_KEY` is set — can fail gracefully."
    ]
  },
  {
    icon: ChartLine,
    title: "Simulated economics",
    items: [
      "Configurable Titan “platform fee” (default 5%): gross vs fee vs net in the UI.",
      "Display / ledger simulation only — not real Squad money movement."
    ]
  }
];
function Slide04How() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SlideShell,
    {
      eyebrow: "Product",
      title: "What Titan actually ships.",
      subtitle: "Stack matches the open repo: FastAPI + PostgreSQL + Redis + python-socketio ASGI app; Vite + React operations UI (HeroUI). See README in void-synth/squad.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-4", children: blocks.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.08 + i * 0.08 },
          className: "glass-strong rounded-2xl p-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-neon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: b.title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm text-muted-foreground leading-relaxed", children: b.items.map((line) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon shrink-0", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: line })
            ] }, line)) })
          ]
        },
        b.title
      )) })
    }
  );
}
const nodes = [
  { id: "WH", label: "Squad-style\nwebhook", x: 40, y: 180 },
  { id: "API", label: "FastAPI\nverify + persist", x: 160, y: 180 },
  { id: "PG", label: "PostgreSQL\nTransaction", x: 280, y: 100 },
  { id: "RD", label: "Redis\nqueue", x: 280, y: 260 },
  { id: "WK", label: "Worker\nrisk engine", x: 420, y: 180 },
  { id: "SO", label: "Socket.IO\nemit", x: 560, y: 180 },
  { id: "UI", label: "Vite + React\nops UI", x: 700, y: 180 }
];
const edges = [
  ["WH", "API"],
  ["API", "PG"],
  ["API", "RD"],
  ["RD", "WK"],
  ["PG", "WK"],
  ["WK", "SO"],
  ["SO", "UI"]
];
const pos = Object.fromEntries(nodes.map((n) => [n.id, n]));
function Slide05Demo() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SlideShell,
    {
      eyebrow: "Architecture",
      title: "One pipeline — demo, load test, and Q&A use the same path.",
      subtitle: "Webhook → Postgres → Redis queue → background worker → composite scorer → Socket.IO → analyst dashboard. Optional Squad proxy / gated payout exists for completeness — not the hero story.",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            className: "glass-strong rounded-2xl p-6 md:p-8 overflow-x-auto",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 820 340", className: "w-full min-w-[640px] h-[280px] md:h-[320px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("marker", { id: "arrow", markerWidth: "8", markerHeight: "8", refX: "7", refY: "4", orient: "auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,0 L8,4 L0,8 Z", fill: "oklch(0.55 0.12 250)" }) }) }),
              edges.map(([from, to]) => {
                const a = pos[from];
                const b = pos[to];
                if (!a || !b) return null;
                const x1 = a.x + 55;
                const y1 = a.y + 22;
                const x2 = b.x;
                const y2 = b.y + 22;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1,
                    y1,
                    x2,
                    y2,
                    stroke: "oklch(0.55 0.12 250 / 0.7)",
                    strokeWidth: "1.5",
                    markerEnd: "url(#arrow)"
                  },
                  `${from}-${to}`
                );
              }),
              nodes.map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.g,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.1 + i * 0.06 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "rect",
                      {
                        x: n.x,
                        y: n.y,
                        width: 110,
                        height: 56,
                        rx: "10",
                        fill: "oklch(0.16 0.03 260)",
                        stroke: "oklch(0.72 0.18 240)",
                        strokeWidth: "1.2"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "text",
                      {
                        x: n.x + 55,
                        y: n.y + 24,
                        textAnchor: "middle",
                        fill: "oklch(0.78 0.2 230)",
                        fontSize: "10",
                        fontFamily: "ui-monospace, monospace",
                        children: n.label.split("\n").map((line, li) => /* @__PURE__ */ jsxRuntimeExports.jsx("tspan", { x: n.x + 55, dy: li === 0 ? 0 : 14, children: line }, li))
                      }
                    )
                  ]
                },
                n.id
              ))
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground font-mono text-center", children: "ASGI combines FastAPI + python-socketio — single process story for the hackathon demo." })
      ]
    }
  );
}
const steps = [
  {
    icon: Bell,
    title: "Alerts inbox",
    desc: "Full case list beyond the dashboard strip — triage flagged and held items in one place."
  },
  {
    icon: MousePointer2,
    title: "Analyst actions",
    desc: "REST APIs for release and escalate on alerts; updates DB and pushes Socket.IO so connected UIs refresh where implemented."
  },
  {
    icon: RefreshCw,
    title: "Holds vs Squad",
    desc: "Honest framing: operational hold / case management inside Titan. We do not claim a Squad “freeze funds” API — payouts stay gated / off by default in code."
  }
];
function Slide06Market() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SlideShell,
    {
      eyebrow: "Operations",
      title: "Operator-first: cases, not just scores.",
      subtitle: "Transaction detail shows reference, risk, parties, and money-hop graph so a human can act with evidence — then the room sees stats move after release or escalate.",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-4", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.1 + i * 0.1 },
            className: "glass-strong rounded-2xl p-6 border border-border/80",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-neon mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-2", children: s.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.desc })
            ]
          },
          s.title
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.45 },
            className: "mt-8 rounded-xl border border-dashed border-primary/40 bg-primary/5 p-5 text-center text-sm text-muted-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon font-semibold", children: "Live UI reference:" }),
              " Transaction Monitoring workspace — KPIs, throughput chart, live feed with filters (All / Pending / Safe / Flagged / Held / Released / Escalated), detail panel on row select."
            ]
          }
        )
      ]
    }
  );
}
function Slide07Business() {
  const [step, setStep] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 500);
    const t2 = setTimeout(() => setStep(2), 1800);
    const t3 = setTimeout(() => setStep(3), 3200);
    const t4 = setTimeout(() => setStep(4), 4800);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, []);
  const lines = [
    step >= 1 && "> python simulate.py -n 50 -c 8 --fraud-rate 0.1",
    step >= 2 && "> POST /api/v1/webhook/squad … verify ✓ enqueue ✓",
    step >= 3 && "> worker: score → FraudAlert created (held)",
    step >= 4 && "> analyst: POST …/release → Socket.IO stats refresh ✓"
  ].filter(Boolean);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SlideShell, { eyebrow: "Live demo", title: "30–45 seconds: prove the path.", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.1fr_1fr] gap-6 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          className: "glass-strong rounded-2xl p-5 font-mono text-xs min-h-[240px]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "TERMINAL · backend/" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-neon-green/90", children: [
              lines.map((line, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, x: -8 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: i * 0.05 },
                  children: line
                },
                line
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-2 h-4 bg-neon-green/80 animate-pulse align-middle ml-0.5" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
        {
          s: 1,
          icon: Radio,
          t: "Load",
          d: "Simulator fires signed webhooks in parallel — same production-like path."
        },
        {
          s: 2,
          icon: Radio,
          t: "Feed",
          d: "Dashboard live feed shows new rows; filters match analyst workflow."
        },
        {
          s: 3,
          icon: ShieldAlert,
          t: "Alert",
          d: "High severity creates FraudAlert; case appears in Alerts inbox."
        },
        {
          s: 4,
          icon: CircleCheckBig,
          t: "Resolve",
          d: "Release or escalate via REST; stats refresh over Socket.IO."
        }
      ].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 12 },
          animate: { opacity: step >= row.s ? 1 : 0.35, x: 0 },
          className: `flex gap-3 rounded-xl border p-4 transition ${step >= row.s ? "border-primary/50 bg-primary/10" : "border-border/60 bg-muted/20"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              row.icon,
              {
                className: `h-5 w-5 shrink-0 mt-0.5 ${step >= row.s ? "text-neon" : "text-muted-foreground"}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: row.t }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: row.d })
            ] })
          ]
        },
        row.t
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: step >= 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.p,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        className: "mt-6 text-center text-xs text-muted-foreground font-mono",
        children: [
          "Open the deployed UI at",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              className: "text-neon hover:underline",
              href: "https://titan-squad.vercel.app/",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "titan-squad.vercel.app"
            }
          ),
          " ",
          "— demo login is intentional scope; production would use IdP + RBAC."
        ]
      }
    ) })
  ] });
}
const cols = ["Titan", "Slide-ware “fraud AI”", "Logs only"];
const rows = [
  { f: "Signed webhook ingest", v: [true, false, false] },
  { f: "Queue-backed worker", v: [true, false, true] },
  { f: "Live Socket.IO UI", v: [true, false, false] },
  { f: "Money-hop + case actions", v: [true, false, false] },
  { f: "Load-demoable (simulate.py)", v: [true, false, false] },
  { f: "Honest Squad / payout claims", v: [true, false, true] }
];
function Slide08Compete() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SlideShell,
    {
      eyebrow: "Advantage",
      title: "Differentiation judges can verify in five minutes.",
      subtitle: "Operator-first, signed ingest, queue-backed processing, and a UI that updates when analysts act — not a static architecture PNG with a hidden script.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "glass-strong rounded-2xl overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 text-xs font-mono uppercase tracking-widest text-muted-foreground border-b border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", children: "Capability" }),
              cols.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `p-4 text-center ${i === 0 ? "text-neon bg-primary/10 border-x border-primary/30" : ""}`,
                  children: c
                },
                c
              ))
            ] }),
            rows.map((r, ri) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.15 + ri * 0.06 },
                className: "grid grid-cols-4 items-center text-sm border-b border-border/70 last:border-b-0",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 font-medium", children: r.f }),
                  r.v.map((val, ci) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `p-4 flex justify-center ${ci === 0 ? "bg-primary/10 border-x border-primary/30" : ""}`,
                      children: val ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: `flex h-7 w-7 items-center justify-center rounded-full ${ci === 0 ? "bg-neon text-primary-foreground" : "bg-muted"}`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" })
                        }
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4 text-muted-foreground/50" })
                    },
                    ci
                  ))
                ]
              },
              r.f
            ))
          ]
        }
      )
    }
  );
}
const items = [
  {
    icon: KeyRound,
    title: "RBAC + real IdP",
    desc: "Replace demo login with proper auth, roles for analyst vs admin, and session hardening."
  },
  {
    icon: FileDown,
    title: "Audit export",
    desc: "Downloadable case trails — timestamps, actions, and payload hashes for compliance conversations."
  },
  {
    icon: FlaskConical,
    title: "Model evaluation loop",
    desc: "Replay labeled webhooks, track precision/recall on holds, version scorer configs — only where the team invests next."
  },
  {
    icon: SquareKanban,
    title: "Richer case management",
    desc: "Assignments, SLAs, internal notes, and escalation paths to match enterprise SOC workflows."
  }
];
function Slide09Stack() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SlideShell,
    {
      eyebrow: "Roadmap",
      title: "If we had eight more weeks…",
      subtitle: "Everything here extends the same pipeline — no rewrite of the core webhook → worker → socket story.",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 14 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.08 + i * 0.08 },
            className: "glass-strong rounded-2xl p-6 flex gap-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-neon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(it.icon, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold", children: it.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground leading-relaxed", children: it.desc })
              ] })
            ]
          },
          it.title
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.5 },
            className: "mt-8 glass rounded-xl p-4 text-xs text-muted-foreground text-center font-mono",
            children: "Current stack (reference): FastAPI · PostgreSQL · Redis · python-socketio · Vite · React · HeroUI · Chart.js — see repo README."
          }
        )
      ]
    }
  );
}
const REPO$1 = "https://github.com/void-synth/squad";
const LIVE$1 = "https://titan-squad.vercel.app/";
function Slide10Roadmap() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SlideShell, { eyebrow: "Team & ask", title: "Team Synth", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_1.1fr] gap-8 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -12 },
        animate: { opacity: 1, x: 0 },
        className: "glass-strong rounded-2xl p-8 text-center lg:text-left",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-gradient mb-2", children: "Team Synth" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Hackathon squad shipping Titan (Squad Sentinel) — fraud monitoring demo with realistic ingest, composite scoring, and a live operator UI you can open in the judging room." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs font-mono text-muted-foreground", children: "Add member names / roles in your speaker notes if you want them on-screen later." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          className: "glass-strong rounded-2xl p-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3", children: "What we want" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4 text-neon shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "Feedback" }),
                  " on pipeline design and hackathon story — sharp questions welcome."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon shrink-0", children: "▸" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "Category fit" }),
                  " — Squad / fintech / security tracks where a verifiable webhook-to-UI demo scores."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon shrink-0", children: "▸" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "Intros" }),
                  " to teams who live in alert queues — no fabricated pilots or logos."
                ] })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.a,
          {
            href: REPO$1,
            target: "_blank",
            rel: "noopener noreferrer",
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.2 },
            className: "glass rounded-xl p-5 flex items-center gap-3 border border-border hover:border-primary/50 hover:bg-primary/5 transition group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-6 w-6 text-neon" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-mono uppercase text-muted-foreground", children: "Source" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold group-hover:text-neon transition", children: "void-synth/squad" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.a,
          {
            href: LIVE$1,
            target: "_blank",
            rel: "noopener noreferrer",
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.28 },
            className: "glass rounded-xl p-5 flex items-center gap-3 border border-border hover:border-primary/50 hover:bg-primary/5 transition group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-6 w-6 text-neon" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-mono uppercase text-muted-foreground", children: "Live product" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold group-hover:text-neon transition", children: "titan-squad.vercel.app" })
              ] })
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
const REPO = "https://github.com/void-synth/squad";
const LIVE = "https://titan-squad.vercel.app/";
function Slide11Closing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { scale: 0.7, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
        className: "absolute -inset-20 rounded-full bg-gradient-to-tr from-primary/30 via-neon-red/20 to-transparent blur-3xl pointer-events-none"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7 },
        className: "relative inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-neon mb-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_10px_var(--neon)]" }),
          "Team Synth · Titan"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.h1,
      {
        initial: { opacity: 0, y: 30, filter: "blur(10px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
        transition: { duration: 1, delay: 0.15 },
        className: "relative text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.08] max-w-4xl mx-auto",
        children: [
          "From ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "signed webhook" }),
          " to",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-danger", children: "live ops" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "— thank you."
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.p,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.8, delay: 0.45 },
        className: "relative mt-8 max-w-xl mx-auto text-sm text-muted-foreground",
        children: "Titan is a hackathon-grade fraud monitoring demo: honest about auth, payouts, and what lives in our case model vs on Squad rails."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, delay: 0.65 },
        className: "relative mt-10 flex flex-col items-center gap-4",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: LIVE,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-neon px-8 py-4 text-base font-semibold text-primary-foreground neon-border hover:scale-105 transition",
              children: [
                "Open live product",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-5 w-5 group-hover:rotate-45 transition" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: REPO,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "group inline-flex items-center gap-2 rounded-full glass-strong px-7 py-3.5 text-sm font-semibold text-foreground border border-primary/30 hover:bg-primary/10 transition",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }),
                "void-synth/squad",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3.5 w-3.5 text-muted-foreground group-hover:text-neon transition" })
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 1, delay: 1.1 },
        className: "relative mt-14 flex flex-wrap items-center justify-center gap-6 text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Squad Sentinel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "2026" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon", children: "Ingest · Score · Operate" })
        ]
      }
    )
  ] });
}
const slides = [
  { title: "Cover", component: Slide01Cover },
  { title: "Problem", component: Slide02Problem },
  { title: "Why now", component: Slide03Solution },
  { title: "Product", component: Slide04How },
  { title: "Architecture", component: Slide05Demo },
  { title: "Operations", component: Slide06Market },
  { title: "Live demo", component: Slide07Business },
  { title: "Advantage", component: Slide08Compete },
  { title: "Roadmap", component: Slide09Stack },
  { title: "Team & ask", component: Slide10Roadmap },
  { title: "Closing", component: Slide11Closing }
];
function Deck() {
  const [index, setIndex] = reactExports.useState(0);
  const [dir, setDir] = reactExports.useState(1);
  const go = reactExports.useCallback((next) => {
    setDir(next > index ? 1 : -1);
    setIndex(Math.max(0, Math.min(slides.length - 1, next)));
  }, [index]);
  reactExports.useEffect(() => {
    const onKey = (e) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-screen w-screen overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 grid-bg opacity-60" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[140px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-destructive/15 blur-[140px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "absolute top-0 left-0 right-0 z-40 flex items-center justify-between px-4 sm:px-8 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-2 text-xs text-muted-foreground font-mono", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: String(index + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/30", children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: String(slides.length).padStart(2, "0") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3 uppercase tracking-widest", children: slides[index].title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => document.documentElement.requestFullscreen?.(),
            className: "rounded-md glass p-2 hover:bg-primary/10 transition",
            "aria-label": "Fullscreen",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize2, { className: "h-3.5 w-3.5" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-full w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", custom: dir, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        custom: dir,
        initial: { opacity: 0, x: dir * 60, filter: "blur(8px)" },
        animate: { opacity: 1, x: 0, filter: "blur(0px)" },
        exit: { opacity: 0, x: -dir * 60, filter: "blur(8px)" },
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        className: "absolute inset-0 flex items-center justify-center px-4 sm:px-12 pt-20 pb-24 overflow-y-auto scrollbar-hide",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Slide, {}) })
      },
      index
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "absolute bottom-0 left-0 right-0 z-40 flex items-center justify-between px-4 sm:px-8 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => go(index - 1),
          disabled: index === 0,
          className: "rounded-full glass-strong p-3 hover:bg-primary/10 disabled:opacity-30 transition",
          "aria-label": "Previous",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 mx-4 sm:mx-8 flex items-center gap-1.5", children: slides.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => go(i),
          className: "group relative flex-1 h-1 rounded-full bg-muted/70 overflow-hidden",
          "aria-label": s.title,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.span,
              {
                className: "absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-neon",
                initial: false,
                animate: { width: i < index ? "100%" : i === index ? "100%" : "0%" },
                transition: { duration: 0.6 }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-foreground px-2 py-0.5 text-[10px] text-background opacity-0 group-hover:opacity-100 transition", children: s.title })
          ]
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => go(index + 1),
          disabled: index === slides.length - 1,
          className: "rounded-full glass-strong p-3 hover:bg-primary/10 disabled:opacity-30 transition neon-border",
          "aria-label": "Next",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
        }
      )
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Deck, {});
}
export {
  Index as component
};
