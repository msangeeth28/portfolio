import { motion } from "framer-motion";
import { Layers, Terminal, Monitor, Database, Code2, Target, FileDown } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
/*
Extras Component
Purpose:
Displays additional information like GitHub stats, LeetCode profile link, future goals, and a resume download button.
*/
export function Extras() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="More" title="Beyond the resume" />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* My Go-To Stack */}
          <Reveal>
            <div className="glass h-full rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <Layers className="h-5 w-5" style={{ color: "var(--brand)" }} />
                <h3 className="font-semibold">My Go-To Stack</h3>
              </div>
              <div className="mt-6 flex flex-col gap-4">
                {[
                  {
                    name: "Python",
                    desc: "Machine Learning & Data",
                    Icon: Terminal,
                    color: "var(--brand)",
                  },
                  {
                    name: "Agentic AI",
                    desc: "AI Agents & Autonomous Workflows",
                    Icon: Monitor,
                    color: "var(--brand-2)",
                  },
                  {
                    name: "AI Engineering",
                    desc: "ML Pipelines & Intelligent Apps",
                    Icon: Database,
                    color: "var(--brand-3)",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 rounded-xl border border-border bg-secondary/20 p-3 transition-colors hover:bg-secondary/40"
                  >
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary/50">
                      <item.Icon className="h-5 w-5" style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{item.name}</div>
                      <div className="text-xs text-muted-foreground">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* LeetCode */}
          <Reveal delay={0.1}>
            <div className="glass h-full rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <Code2 className="h-5 w-5" style={{ color: "var(--brand-3)" }} />
                <h3 className="font-semibold">LeetCode Stats</h3>
              </div>
              <div className="mt-6 flex justify-center py-2">
                <img
                  src="https://leetcard.jacoblin.cool/msangeeth28?theme=dark&font=Karma"
                  alt="LeetCode Stats"
                  className="w-full rounded-xl transition-transform duration-300 hover:scale-105 sm:scale-110"
                />
              </div>
            </div>
          </Reveal>

          {/* Future goals */}
          <Reveal delay={0.2}>
            <div className="glass h-full rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <Target className="h-5 w-5" style={{ color: "var(--brand-2)" }} />
                <h3 className="font-semibold">Future Goals</h3>
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                {[
                  "Land an ML engineering internship at a product company",
                  "Ship two production LLM-powered projects",
                  "Contribute to an open-source ML library",
                  "Publish a paper or technical writeup on applied ML",
                ].map((g, i) => (
                  <motion.li
                    key={g}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full"
                      style={{ background: "var(--gradient-brand)" }}
                    />
                    <span className="text-muted-foreground">{g}</span>
                  </motion.li>
                ))}
              </ul>
              <a
                href="/Sangeeth_CV.pdf"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)]"
                style={{ background: "var(--gradient-brand)" }}
                target="_blank"
                rel="noreferrer"
              >
                <FileDown className="h-4 w-4" /> Download Resume
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
