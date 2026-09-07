import { motion } from "framer-motion";
import { MapPin, Calendar, GraduationCap, Rocket, Trophy, Award } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { personalInfo } from "@/data/personalInfo";

// Map string icon names to Lucide components
const iconMap = {
  GraduationCap,
  Rocket,
  Trophy,
  Award,
};

/*
About Component
Purpose:
Shows a personal introduction with paragraphs about the developer's journey, 
along with animated statistics like CGPA and number of projects.
*/
export function About() {
  const { about, stats } = personalInfo;

  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="About" title="A little about me" />
        
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              {about.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              
              <div className="flex flex-wrap gap-4 pt-2 text-sm">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" style={{ color: "var(--brand)" }} /> India
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" style={{ color: "var(--brand-2)" }} /> Open to internships
                </span>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => {
              const Icon = iconMap[stat.iconName];
              return (
                <Reveal key={stat.label} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass group relative overflow-hidden rounded-2xl p-6"
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{ background: "var(--gradient-brand-soft)" }} />
                    <Icon className="relative h-6 w-6" style={{ color: "var(--brand-2)" }} />
                    
                    <div className="relative mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                      <Counter to={stat.to} suffix={stat.suffix} decimals={stat.decimals} />
                    </div>
                    
                    <div className="relative mt-1 text-xs font-medium tracking-widest text-muted-foreground uppercase">
                      {stat.label}
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
