import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Sparkles, Brain, Rocket, Wrench, Users } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { skillsData } from "@/data/skills";

const iconMap = { Code2, Database, Sparkles, Brain, Rocket, Wrench, Users };

function SkillChip({ label, delay }) {
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      onMouseMove={(e) => {
        const r = ref.current.getBoundingClientRect();
        ry.set(((e.clientX - r.left) / r.width - 0.5) * 20);
        rx.set(-((e.clientY - r.top) / r.height - 0.5) * 20);
      }}
      onMouseLeave={() => { rx.set(0); ry.set(0); }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className="glass group relative cursor-default rounded-full px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50"
    >
      <span className="relative">{label}</span>
      <span className="absolute inset-0 rounded-full opacity-0 transition-opacity group-hover:opacity-100" style={{ background: "var(--gradient-brand-soft)" }} />
    </motion.div>
  );
}

/*
Skills Component
Purpose:
Displays technical skills logically grouped by category, with hover animations 
for each individual skill chip.
*/
export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader 
          eyebrow="Skills" 
          title="Tools of the trade" 
          sub="A curated stack for building intelligent, shippable products." 
        />
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((group, groupIndex) => {
            const Icon = iconMap[group.iconName];
            return (
              <Reveal key={group.title} delay={groupIndex * 0.05}>
                <div className="glass h-full rounded-2xl p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: "var(--gradient-brand-soft)" }}>
                      <Icon className="h-5 w-5" style={{ color: "var(--brand)" }} />
                    </div>
                    <h3 className="text-base font-semibold">{group.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, i) => (
                      <SkillChip key={item} label={item} delay={groupIndex * 0.05 + i * 0.04} />
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
