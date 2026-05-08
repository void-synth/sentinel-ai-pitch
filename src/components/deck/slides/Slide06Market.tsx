import { motion } from "framer-motion";
import { ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { SlideShell } from "../SlideShell";

const tamData = [
  { name: "TAM", value: 2500, fill: "oklch(0.72 0.18 240)" },
  { name: "SAM", value: 400, fill: "oklch(0.78 0.2 230)" },
  { name: "SOM", value: 240, fill: "oklch(0.78 0.2 155)" },
];

const growth = [
  { y: "Y1", v: 240 },
  { y: "Y2", v: 720 },
  { y: "Y3", v: 1600 },
  { y: "Y4", v: 3200 },
];

export function Slide06Market() {
  return (
    <SlideShell
      eyebrow="Market Opportunity"
      title="A ₦2.5T African market — and CBN is the growth catalyst."
    >
      <div className="grid lg:grid-cols-[1fr_1fr] gap-6">
        <div className="space-y-3">
          {[
            { l: "TAM", v: "₦2.5 Trillion", s: "African fraud prevention market", c: "text-foreground" },
            { l: "SAM", v: "₦400 Billion", s: "Nigerian banking fraud market", c: "text-neon" },
            { l: "SOM", v: "₦240 Million", s: "First-year achievable target", c: "text-[oklch(0.78_0.2_155)]" },
          ].map((m, i) => (
            <motion.div
              key={m.l}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.12 }}
              className="glass-strong rounded-xl p-5 flex items-center gap-5"
            >
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground w-10">{m.l}</div>
              <div className="flex-1">
                <div className={`text-2xl font-bold font-mono ${m.c}`}>{m.v}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{m.s}</div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="glass rounded-xl p-4 mt-4 text-xs text-muted-foreground"
          >
            <span className="text-neon font-semibold">CBN Mandate:</span> 2025 PSB compliance rules require real-time fraud monitoring on every NIP transaction — a regulatory tailwind worth billions.
          </motion.div>
        </div>

        <div className="grid grid-rows-2 gap-4">
          <div className="glass-strong rounded-xl p-4">
            <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">Market layers (₦B)</div>
            <ResponsiveContainer width="100%" height={140}>
              <PieChart>
                <Pie data={tamData} dataKey="value" innerRadius={32} outerRadius={60} paddingAngle={3}>
                  {tamData.map((d, i) => <Cell key={i} fill={d.fill} />)}
                </Pie>
                <Tooltip contentStyle={{ background: "oklch(0.18 0.03 260)", border: "1px solid oklch(1 0 0 / 14%)", borderRadius: 8, fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="glass-strong rounded-xl p-4">
            <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">Projected ARR (₦M)</div>
            <ResponsiveContainer width="100%" height={140}>
              <BarChart data={growth}>
                <XAxis dataKey="y" tick={{ fill: "oklch(0.65 0.03 250)", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "oklch(0.65 0.03 250)", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "oklch(0.18 0.03 260)", border: "1px solid oklch(1 0 0 / 14%)", borderRadius: 8, fontSize: 12 }} />
                <Bar dataKey="v" fill="oklch(0.72 0.18 240)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
