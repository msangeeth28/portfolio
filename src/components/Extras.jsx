import { useState, useEffect } from "react";
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
  const [ghStats, setGhStats] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/msangeeth28")
      .then(res => res.json())
      .then(data => setGhStats(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="More" title="Beyond the resume" />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* GitHub Stats */}
          <Reveal>
            <div className="glass h-full rounded-2xl p-6 flex flex-col">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5" style={{ color: "var(--brand)" }} />
                  <h3 className="font-semibold">GitHub</h3>
                </div>
                <a href="https://github.com/msangeeth28" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  @msangeeth28
                </a>
              </div>
              
              <div className="mt-6 flex flex-1 flex-col justify-center gap-4">
                {ghStats ? (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col items-center justify-center rounded-xl bg-secondary/30 p-4 border border-white/5">
                        <span className="text-3xl font-black gradient-text">{ghStats.public_repos}</span>
                        <span className="text-[10px] text-muted-foreground mt-1 uppercase tracking-widest font-semibold">Repositories</span>
                      </div>
                      <div className="flex flex-col items-center justify-center rounded-xl bg-secondary/30 p-4 border border-white/5">
                        <span className="text-3xl font-black gradient-text">{ghStats.followers}</span>
                        <span className="text-[10px] text-muted-foreground mt-1 uppercase tracking-widest font-semibold">Followers</span>
                      </div>
                    </div>
                    <a href="https://github.com/msangeeth28" target="_blank" rel="noreferrer" className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-white/5 bg-secondary/40 py-3 text-sm font-semibold hover:bg-secondary transition-colors">
                      View Profile
                    </a>
                  </>
                ) : (
                  <div className="flex items-center justify-center py-10">
                    <div className="h-6 w-6 animate-spin-slow rounded-full border-2 border-t-transparent border-muted-foreground" />
                  </div>
                )}
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
