import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { M as Maximize2, C as ChevronLeft, a as ChevronRight, E as ExternalLink, G as Github, A as ArrowRight, I as Inbox, b as Cpu, L as LayoutDashboard, c as ChartLine, R as Radio, S as ShieldQuestion, W as Workflow, B as BookOpen, d as Webhook, e as ShieldCheck, K as Key, f as Bell, g as MousePointer2, h as RefreshCw, T as Terminal, i as ShieldAlert, j as CircleCheckBig, k as KeyRound, F as FileDown, l as FlaskConical, m as SquareKanban, n as MessageCircle, o as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const LIVE$2 = "https://squad-titan.vercel.app/";
const REPO$3 = "https://github.com/void-synth/squad";
function Slide01Cover() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.45 },
          className: "mb-5 flex flex-wrap items-center gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-neon font-mono", children: "Squad Sentinel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground", children: "Team Synth · 2026" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay: 0.05 },
          className: "text-sm sm:text-base font-medium text-neon/90 tracking-wide",
          children: "When the rail is instant, fraud does not wait for Monday’s spreadsheet."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h1,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.75, delay: 0.12 },
          className: "mt-4 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.98]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Titan" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block mt-1 text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/90", children: "Real-time fraud operations on Squad-style events." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.p,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.65, delay: 0.28 },
          className: "mt-6 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed",
          children: [
            "A working stack, not a concept video:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "signed webhooks" }),
            ", a",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "queue-backed risk worker" }),
            ", and a",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "Next.js analyst console" }),
            " with live charts, feed, alerts, and money-hop context — open source and deployable for judges to click."
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.42 },
          className: "mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: LIVE$2,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-neon px-6 py-3.5 text-sm font-semibold text-primary-foreground neon-border hover:opacity-95 transition",
                children: [
                  "Open live demo",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-4 w-4 opacity-90" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: REPO$3,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center justify-center gap-2 rounded-full glass-strong px-6 py-3.5 text-sm font-semibold border border-border hover:border-primary/45 hover:bg-primary/5 transition",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4 text-neon" }),
                  "void-synth/squad"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-xs font-mono text-muted-foreground", children: [
              "Ingest ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 text-neon shrink-0" }),
              " Score",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 text-neon shrink-0" }),
              " Operate"
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.96 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.85, delay: 0.18 },
        className: "relative hidden lg:block",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-8 bg-gradient-to-tr from-primary/35 to-neon-red/25 blur-3xl opacity-55" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative glass-strong rounded-2xl overflow-hidden neon-border shadow-2xl shadow-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/dashboard.png",
              alt: "Titan operations dashboard",
              className: "w-full h-auto object-cover"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-center text-[10px] font-mono uppercase tracking-widest text-muted-foreground", children: "HeroUI · Chart.js · Socket.IO — live under load" })
        ]
      }
    )
  ] });
}
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
const pains = [
  {
    icon: Radio,
    title: "Events move faster than operators",
    desc: "Instant-style payment rails generate a firehose of webhooks. Without a verified ingest path, durable queue, and live surface, teams only learn about fraud after balances and trust are already damaged."
  },
  {
    icon: ShieldQuestion,
    title: "Scores without evidence do not clear review",
    desc: "A number on a row is not enough for a hold or release decision. Analysts need beneficiary context, a visible hop graph, and an audit-friendly trail from raw event to outcome."
  },
  {
    icon: Workflow,
    title: "Dashboards that do not close the loop",
    desc: "Charts alone do not run cases. The gap is operations: triage, escalate, resolve — with the same system updating everyone in the room in real time."
  }
];
const answers = [
  {
    title: "Signed webhook → durable store → queue",
    body: "Squad-style HMAC verification on the raw body, persistence in PostgreSQL, and Redis-backed work so scoring never blocks ingest."
  },
  {
    title: "Transparent composite risk",
    body: "Worker scores using velocity, graph / money-hop, and metadata-style signals — designed so a judge can trace inputs, not a black box."
  },
  {
    title: "Next.js ops UI on Socket.IO",
    body: "Live KPIs, Chart.js throughput, filtered feed, alerts inbox, and REST actions (release / escalate) that push updates to every connected client."
  }
];
function Slide02Problem() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SlideShell,
    {
      eyebrow: "Problem → approach",
      title: "Payment fraud is an operations problem, not only a model problem.",
      subtitle: "Squad Sentinel (Titan) is a hackathon-grade demo that shows the full path: verify payment events like Squad’s docs describe, score them honestly, and give analysts a real console — not slide-ware.",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-6 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4", children: "What breaks today" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: pains.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, x: -12 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.08 + i * 0.08 },
                className: "glass-strong rounded-2xl p-5 border border-border/80",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-[oklch(0.75_0.22_25)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "h-4 w-4" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: p.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground leading-relaxed", children: p.desc })
                  ] })
                ] })
              },
              p.title
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-mono uppercase tracking-widest text-neon mb-4", children: "How Titan addresses it" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: answers.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 12 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.1 + i * 0.08 },
                className: "glass-strong rounded-2xl p-5 border border-primary/25 bg-primary/5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: a.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-xs text-muted-foreground leading-relaxed", children: a.body })
                ]
              },
              a.title
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: "HMAC", label: "Webhook verification (Squad patterns)", delay: 0.35 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: "Redis", label: "Queue → background worker", delay: 0.42 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: "Live", label: "Socket.IO to the analyst UI", accent: "green", delay: 0.5 })
        ] })
      ]
    }
  );
}
const blocks = [
  {
    icon: Inbox,
    title: "Ingest",
    items: [
      "Receive Squad-style webhooks on POST /api/v1/webhook/squad; verify HMAC per Squad patterns (encrypted-body SHA-512 or legacy simulator header).",
      "Normalize payload → persist Transaction in PostgreSQL → enqueue work in Redis."
    ]
  },
  {
    icon: Cpu,
    title: "Processing",
    items: [
      "Background worker dequeues each transaction and runs a composite risk engine.",
      "Signals: velocity, graph / money-hop, metadata / NLP-style — transparent inputs, not an opaque “AI score”.",
      "Outputs risk score and status (safe / flagged / held); severe cases create FraudAlert rows."
    ]
  },
  {
    icon: LayoutDashboard,
    title: "Real-time UI",
    items: [
      "Next.js (App Router) operations UI; python-socketio / Socket.IO for new transactions, alerts, and stats.",
      "KPI strip, Chart.js throughput, live feed with filters, alerts inbox, transaction detail with money-hop graph.",
      "Demo login is browser-local by design — swap for IdP in a production story."
    ]
  },
  {
    icon: ChartLine,
    title: "Simulated economics (UI)",
    items: [
      "Configurable Titan “platform fee” (default 5%): gross vs fee vs net in the UI for pitch clarity.",
      "Ledger display only — not a claim of moving money on Squad rails without explicit API use."
    ]
  }
];
function Slide04How() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SlideShell,
    {
      eyebrow: "Product",
      title: "What Squad Sentinel (Titan) actually ships.",
      subtitle: "Matches the public repo: FastAPI + PostgreSQL + Redis + Socket.IO ASGI backend; Next.js + HeroUI + Chart.js frontend. Built to be opened, stressed with simulate.py, and questioned in Q&A.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-4", children: blocks.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.08 + i * 0.08 },
          className: "glass-strong rounded-2xl p-6 border border-border/60",
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
  { id: "UI", label: "Next.js\nops UI", x: 700, y: 180 }
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
      title: "One pipeline — judges, load tests, and the UI share the same spine.",
      subtitle: "Webhook → Postgres → Redis queue → background worker → composite scorer → Socket.IO → Next.js dashboard. Optional Squad client calls stay gated in .env — the hero is observability and honest scope.",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            className: "glass-strong rounded-2xl p-6 md:p-8 overflow-x-auto border border-border/70",
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground font-mono text-center", children: "ASGI mounts FastAPI and python-socketio together — one process narrative for demos and local dev (see backend/main.py in the repo)." })
      ]
    }
  );
}
const phases = [
  { id: 1, label: "1 · Event", sub: "Squad-style POST", x: 0 },
  { id: 2, label: "2 · Verify", sub: "HMAC + persist", x: 1 },
  { id: 3, label: "3 · Queue", sub: "Redis work item", x: 2 },
  { id: 4, label: "4 · Score", sub: "Worker + signals", x: 3 },
  { id: 5, label: "5 · Surface", sub: "Socket.IO + UI", x: 4 },
  { id: 6, label: "6 · Resolve", sub: "Analyst action", x: 5 }
];
function SlideHowItWorks() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SlideShell,
    {
      eyebrow: "How it works",
      title: "One story from webhook to analyst resolution.",
      subtitle: "Every demo step uses the same path as production-shaped code: no hidden scripts, no separate “pitch” pipeline. Load tests and the UI share one spine.",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            className: "glass-strong rounded-2xl p-6 md:p-10 overflow-x-auto border border-border/80",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "svg",
              {
                viewBox: "0 0 900 320",
                className: "w-full min-w-[720px] h-[260px] md:h-[300px]",
                "aria-label": "Flow from payment event to analyst resolution",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "hwGrad", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.55 0.15 250)", stopOpacity: "0.9" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.72 0.18 200)", stopOpacity: "0.85" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("marker", { id: "hwArrow", markerWidth: "9", markerHeight: "9", refX: "8", refY: "4.5", orient: "auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,0 L9,4.5 L0,9 Z", fill: "oklch(0.65 0.14 240)" }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "text",
                    {
                      x: "450",
                      y: "28",
                      textAnchor: "middle",
                      fill: "oklch(0.7 0.02 260)",
                      fontSize: "11",
                      fontFamily: "ui-monospace, monospace",
                      children: "Payment provider → Titan API → data layer → worker → real-time clients"
                    }
                  ),
                  phases.map((p, i) => {
                    const cx = 75 + p.x * 132;
                    const cy = 120;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.g,
                      {
                        initial: { opacity: 0, y: 16 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0.06 + i * 0.07 },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "rect",
                            {
                              x: cx - 58,
                              y: cy - 36,
                              width: 116,
                              height: 72,
                              rx: "14",
                              fill: "oklch(0.14 0.03 260)",
                              stroke: "url(#hwGrad)",
                              strokeWidth: "1.4"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "text",
                            {
                              x: cx,
                              y: cy - 6,
                              textAnchor: "middle",
                              fill: "oklch(0.92 0.02 260)",
                              fontSize: "12",
                              fontWeight: "600",
                              fontFamily: "system-ui, sans-serif",
                              children: p.label.split(" · ")[1]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "text",
                            {
                              x: cx,
                              y: cy + 14,
                              textAnchor: "middle",
                              fill: "oklch(0.62 0.03 260)",
                              fontSize: "9.5",
                              fontFamily: "ui-monospace, monospace",
                              children: p.sub
                            }
                          )
                        ]
                      },
                      p.id
                    );
                  }),
                  phases.slice(0, -1).map((p, i) => {
                    const x1 = 75 + p.x * 132 + 58;
                    const x2 = 75 + (p.x + 1) * 132 - 58;
                    const y = 120;
                    return /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.g,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: 0.35 + i * 0.08 },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "line",
                          {
                            x1: x1 + 4,
                            y1: y,
                            x2: x2 - 4,
                            y2: y,
                            stroke: "oklch(0.55 0.12 250 / 0.75)",
                            strokeWidth: "2",
                            markerEnd: "url(#hwArrow)"
                          }
                        )
                      },
                      `e-${i}`
                    );
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.g, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.75 }, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "rect",
                      {
                        x: "60",
                        y: "200",
                        width: "780",
                        height: "88",
                        rx: "16",
                        fill: "oklch(0.12 0.03 260)",
                        stroke: "oklch(0.45 0.1 250 / 0.5)",
                        strokeWidth: "1"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "text",
                      {
                        x: "80",
                        y: "232",
                        fill: "oklch(0.78 0.18 230)",
                        fontSize: "10",
                        fontFamily: "ui-monospace, monospace",
                        children: "Analyst UI (Next.js)"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "text",
                      {
                        x: "80",
                        y: "252",
                        fill: "oklch(0.62 0.03 260)",
                        fontSize: "9.5",
                        fontFamily: "ui-monospace, monospace",
                        children: "KPI strip · Chart.js throughput · feed filters · alerts inbox · transaction detail + money-hop graph"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "text",
                      {
                        x: "80",
                        y: "272",
                        fill: "oklch(0.55 0.12 250 / 0.9)",
                        fontSize: "9",
                        fontFamily: "ui-monospace, monospace",
                        children: "Optional: python simulate.py -n 800 -c 40 — same POST /api/v1/webhook/squad path under load"
                      }
                    )
                  ] })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-center text-xs text-muted-foreground max-w-3xl mx-auto leading-relaxed", children: [
          "High scores create ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "FraudAlert" }),
          " rows and move transactions to held or flagged states; release and escalate routes update the database and broadcast so stats and rows stay in sync for everyone watching."
        ] })
      ]
    }
  );
}
const DOCS = "https://docs.squadco.com/";
const REPO$2 = "https://github.com/void-synth/squad";
const integrationRows = [
  {
    icon: BookOpen,
    title: "Documentation-first",
    lines: [
      "We mirror Squad’s integration model: sandbox keys from squadco.com, environment-driven config, and webhook URLs registered in the Squad dashboard.",
      "Official flow posts JSON to our route; we verify using the same header semantics described in the open repo README (production-like vs local simulator)."
    ]
  },
  {
    icon: Webhook,
    title: "Webhook contract we implemented",
    lines: [
      "Public HTTPS endpoint: POST /api/v1/webhook/squad — matches the path teams configure when tunneling ngrok or Cloudflare to local :8000.",
      "Dashboard → Titan: raw JSON body is what we hash; mismatched secrets produce 401 — the same failure mode you would debug in a real integration."
    ]
  },
  {
    icon: ShieldCheck,
    title: "Signature verification (two modes, on purpose)",
    lines: [
      "Production-shaped: x-squad-encrypted-body — HMAC-SHA512 over the raw JSON body (hex, case-insensitive), per Squad’s current webhook guidance.",
      "Local simulate.py: x-squad-signature — HMAC-SHA256 legacy path; SQUAD_WEBHOOK_LEGACY_SHA256=true keeps the simulator and server aligned during demos."
    ]
  },
  {
    icon: Key,
    title: "Keys & client configuration",
    lines: [
      "backend/.env: SQUAD_SECRET_KEY, SQUAD_PUBLIC_KEY, DATABASE_URL, REDIS_URL, APP_SECRET — never committed; rotate if exposed.",
      "frontend/.env: NEXT_PUBLIC_API_URL and NEXT_PUBLIC_SOCKET_URL point the Next.js app at the FastAPI host (default http://localhost:8000 for local dev).",
      "Optional: ingest-time Squad verify and payout-related calls are gated in .env.example so the demo stays honest about what touches external APIs."
    ]
  }
];
function SlideSquadIntegration() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SlideShell,
    {
      eyebrow: "Squad integration",
      title: "We follow the same primitives Squad developers already use.",
      subtitle: "Titan is not a fork of Squad’s servers — it is a consumer: verify signed events, persist them, and operate on them. Below is exactly what we wired to their documentation patterns and keys.",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4", children: integrationRows.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.06 + i * 0.07 },
            className: "glass-strong rounded-2xl p-5 md:p-6 flex gap-4 border border-border/70",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-neon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(row.icon, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold", children: row.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 space-y-2 text-sm text-muted-foreground leading-relaxed", children: row.lines.map((line) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon shrink-0 mt-0.5", children: "▸" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: line })
                ] }, line)) })
              ] })
            ]
          },
          row.title
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.45 },
            className: "mt-6 flex flex-wrap items-center justify-center gap-3 text-[11px] font-mono",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: DOCS,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "rounded-full border border-primary/40 px-4 py-2 text-neon hover:bg-primary/10 transition",
                  children: "Squad developer docs →"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: REPO$2,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "rounded-full border border-border px-4 py-2 text-muted-foreground hover:text-foreground hover:border-primary/40 transition",
                  children: "README: void-synth/squad"
                }
              )
            ]
          }
        )
      ]
    }
  );
}
const layers = [
  {
    name: "Experience",
    tone: "text-neon",
    chips: [
      "Next.js (App Router)",
      "React 19",
      "HeroUI",
      "Chart.js",
      "Tailwind / design tokens",
      "Client → REST + WebSocket"
    ]
  },
  {
    name: "Real-time & API",
    tone: "text-[oklch(0.78_0.16_200)]",
    chips: ["FastAPI", "python-socketio", "Socket.IO protocol", "Pydantic models", "Uvicorn ASGI"]
  },
  {
    name: "Data & async work",
    tone: "text-[oklch(0.78_0.2_155)]",
    chips: [
      "PostgreSQL",
      "Transactional storage for events & cases",
      "Redis queue",
      "Background worker process"
    ]
  },
  {
    name: "Risk & integrations",
    tone: "text-muted-foreground",
    chips: [
      "Risk engine modules (velocity / graph / metadata)",
      "Squad sandbox keys & verify helpers",
      "simulate.py load harness",
      "Optional payout paths (env-gated)"
    ]
  },
  {
    name: "Delivery",
    tone: "text-muted-foreground",
    chips: [
      "Vercel (hosted UI)",
      "Python 3.11+",
      "Node 18+",
      "GitHub Actions-ready layout",
      ".env.example driven config"
    ]
  }
];
function Slide09Stack() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SlideShell,
    {
      eyebrow: "Tech stack",
      title: "Technologies we actually run in the repo.",
      subtitle: "No placeholder logos: every item below maps to a dependency, folder, or script in void-synth/squad — backend and frontend side by side at repo root, as the README describes.",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: layers.map((layer, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.06 + i * 0.06 },
            className: "glass-strong rounded-2xl p-5 md:p-6 border border-border/70",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-sm font-semibold uppercase tracking-widest ${layer.tone}`, children: layer.name }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: layer.chips.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-mono text-foreground/90 border border-primary/20",
                  children: c
                },
                c
              )) })
            ]
          },
          layer.name
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.p,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.45 },
            className: "mt-6 text-center text-[11px] text-muted-foreground font-mono",
            children: [
              "Source layout: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon", children: "backend/" }),
              " ·",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon", children: "frontend/" }),
              " at repository root —",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://github.com/void-synth/squad",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-neon hover:underline",
                  children: "github.com/void-synth/squad"
                }
              )
            ]
          }
        )
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
              href: "https://squad-titan.vercel.app/",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "squad-titan.vercel.app"
            }
          ),
          " ",
          "— demo login is intentional scope; production would use IdP + RBAC."
        ]
      }
    ) })
  ] });
}
const items = [
  {
    icon: KeyRound,
    title: "RBAC + real IdP",
    desc: "Replace demo login with hardened auth, analyst vs admin roles, and session policies suited to a SOC."
  },
  {
    icon: FileDown,
    title: "Audit export",
    desc: "Case trails with timestamps, actor, payload hashes, and outcomes for compliance conversations."
  },
  {
    icon: FlaskConical,
    title: "Model evaluation loop",
    desc: "Replay labeled webhooks, track precision / recall on holds, version scorer configs — invest where metrics justify it."
  },
  {
    icon: SquareKanban,
    title: "Richer case management",
    desc: "Assignments, SLAs, internal notes, and escalation paths aligned with enterprise fraud operations."
  }
];
function SlideRoadmap() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SlideShell,
    {
      eyebrow: "Roadmap",
      title: "Same pipeline — deeper enterprise fit.",
      subtitle: "Nothing here rewrites the webhook → worker → Socket.IO spine. It hardens the edges: identity, evidence, and workflow around the console you already saw.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.08 + i * 0.08 },
          className: "glass-strong rounded-2xl p-6 flex gap-4 border border-border/70",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-neon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(it.icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold", children: it.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground leading-relaxed", children: it.desc })
            ] })
          ]
        },
        it.title
      )) })
    }
  );
}
const REPO$1 = "https://github.com/void-synth/squad";
const LIVE$1 = "https://squad-titan.vercel.app/";
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold group-hover:text-neon transition", children: "squad-titan.vercel.app" })
              ] })
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
const REPO = "https://github.com/void-synth/squad";
const LIVE = "https://squad-titan.vercel.app/";
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
  { title: "Product", component: Slide04How },
  { title: "Problem & approach", component: Slide02Problem },
  { title: "Architecture", component: Slide05Demo },
  { title: "How it works", component: SlideHowItWorks },
  { title: "Squad API", component: SlideSquadIntegration },
  { title: "Tech stack", component: Slide09Stack },
  { title: "Operations", component: Slide06Market },
  { title: "Live demo", component: Slide07Business },
  { title: "Roadmap", component: SlideRoadmap },
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
