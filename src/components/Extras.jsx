import { motion } from "framer-motion";
import { Layers, Terminal, Monitor, Database, Code2, Target, FileDown, Github } from "lucide-react";
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
          {/* GitHub Stats */}
          <Reveal>
            <div className="glass h-full rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5" style={{ color: "var(--brand)" }} />
                <h3 className="font-semibold">GitHub Stats</h3>
              </div>
              <div className="mt-6 flex justify-center py-2">
                <a href="https://github.com/msangeeth28" target="_blank" rel="noreferrer" className="w-full">
                  <img
                    src="https://github-readme-stats.vercel.app/api?username=msangeeth28&theme=dark&hide_border=true&bg_color=transparent&show_icons=true"
                    alt="GitHub Stats"
                    className="w-full rounded-xl transition-transform duration-300 hover:scale-105 sm:scale-110"
                  />
                </a>
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
                href="https://pdflink.to/sangeeth-cv/"
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
