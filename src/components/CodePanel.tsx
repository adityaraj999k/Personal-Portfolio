import { motion } from "framer-motion";
import { Circle } from "lucide-react";

const codeLines = [
  { n: 1, content: <span className="text-slate-500">// role.ts</span> },
  {
    n: 2,
    content: (
      <>
        <span className="text-indigo-400">const</span>{" "}
        <span className="text-slate-100">developer</span>{" "}
        <span className="text-slate-500">=</span> <span className="text-slate-500">{"{"}</span>
      </>
    ),
  },
  {
    n: 3,
    content: (
      <>
        <span className="pl-4 text-teal-400">role</span>
        <span className="text-slate-500">:</span>{" "}
        <span className="text-amber-300">"Full Stack Developer"</span>
        <span className="text-slate-500">,</span>
      </>
    ),
  },
  {
    n: 4,
    content: (
      <>
        <span className="pl-4 text-teal-400">stack</span>
        <span className="text-slate-500">:</span>{" "}
        <span className="text-slate-500">[</span>
        <span className="text-amber-300">"React"</span>
        <span className="text-slate-500">, </span>
        <span className="text-amber-300">"Node.js"</span>
        <span className="text-slate-500">, </span>
        <span className="text-amber-300">"MongoDB"</span>
        <span className="text-slate-500">],</span>
      </>
    ),
  },
  {
    n: 5,
    content: (
      <>
        <span className="pl-4 text-teal-400">focus</span>
        <span className="text-slate-500">:</span>{" "}
        <span className="text-amber-300">"Building scalable products"</span>
        <span className="text-slate-500">,</span>
      </>
    ),
  },
  {
    n: 6,
    content: (
      <>
        <span className="pl-4 text-teal-400">approach</span>
        <span className="text-slate-500">:</span>{" "}
        <span className="text-amber-300">"DSA-driven problem solving"</span>
      </>
    ),
  },
  { n: 7, content: <span className="text-slate-500">{"}"}</span> },
];

const floatingChips = [
  { label: "React", top: "-6%", left: "-8%", delay: 0 },
  { label: "Node.js", top: "62%", left: "-12%", delay: 0.6 },
  { label: "MongoDB", top: "82%", left: "58%", delay: 1.1 },
];

export default function CodePanel() {
  return (
    <div className="relative">
      {/* ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-[3rem] bg-accent/20 blur-[90px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 24, rotate: -1 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="relative mx-auto w-full max-w-[440px] animate-float"
      >
        <div className="overflow-hidden rounded-2xl border border-base-border bg-[#0D1017] dark:bg-[#0D1017]/90 shadow-panel backdrop-blur-xl">
          {/* title bar */}
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-1.5">
              <Circle size={9} className="fill-[#FF5F57] text-[#FF5F57]" />
              <Circle size={9} className="fill-[#FEBC2E] text-[#FEBC2E]" />
              <Circle size={9} className="fill-[#28C840] text-[#28C840]" />
            </div>
            <span className="font-mono text-[11.5px] text-slate-400">developer.ts</span>
            <span className="w-[46px]" />
          </div>

          {/* code body */}
          <div className="px-5 py-5 font-mono text-[13px] leading-[1.9]">
            {codeLines.map((line) => (
              <div key={line.n} className="flex gap-4">
                <span className="w-4 select-none text-right text-slate-600">{line.n}</span>
                <span className="whitespace-pre">{line.content}</span>
              </div>
            ))}
          </div>

          {/* status bar */}
          <div className="flex items-center justify-between border-t border-white/10 px-4 py-2.5 font-mono text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              no errors
            </span>
            <span>UTF-8 · TS</span>
          </div>
        </div>

        {/* floating stack chips */}
        {floatingChips.map((chip) => (
          <motion.div
            key={chip.label}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 + chip.delay }}
            style={{ top: chip.top, left: chip.left }}
            className="absolute hidden rounded-lg border border-base-border bg-base-soft/95 px-3 py-2 font-mono text-[11.5px] text-ink font-medium shadow-panel backdrop-blur-md sm:block"
          >
            {chip.label}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
