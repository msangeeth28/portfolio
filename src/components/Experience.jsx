import { motion } from "framer-motion";
import { Brain, Calendar, Github, ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { experienceDetails } from "@/data/experience";

const iconMap = { Github, ExternalLink };

/*
Experience Component
Purpose:
Displays the featured experience with a large project image integration, suitable for a single major role.
*/
export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Experience" title="Where I've worked" />
        
        <div className="space-y-8">
          {experienceDetails.map((exp, i) => (
            <Reveal key={i}>
              <motion.div whileHover={{ y: -4 }} className="glass relative overflow-hidden rounded-[2.5rem] p-6 sm:p-10 shadow-[var(--shadow-elegant)]">
                {/* Background ambient glow for the card */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
                
                <div className="relative flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                  {/* Image Column */}
                  {exp.image && (
                    <div className="w-full lg:w-1/2 shrink-0 overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                      <img 
                        src={exp.image} 
                        alt={exp.imageAlt || exp.role} 
                        className="w-full aspect-[1.44] object-cover" 
                      />
                    </div>
                  )}

                  {/* Content Column */}
                  <div className="flex-1 flex flex-col justify-center py-2">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 font-medium text-foreground">
                        <Brain className="h-4 w-4" style={{ color: "var(--brand)" }} /> {exp.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/50 px-3 py-1.5">
                        <Calendar className="h-4 w-4" /> {exp.period}
                      </span>
                    </div>
                    
                    <h3 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">{exp.role}</h3>
                    <p className="mt-2 text-xl font-medium" style={{ color: "var(--brand)" }}>{exp.company}</p>
                    
                    <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                      {exp.desc}
                    </p>
                    
                    {/* Stats */}
                    {exp.stats && exp.stats.length > 0 && (
                      <div className="mt-8 grid grid-cols-2 gap-4">
                        {exp.stats.map(stat => (
                          <div key={stat.label} className="rounded-2xl border border-white/5 bg-background/40 p-4 backdrop-blur-sm">
                            <div className="text-[11px] font-bold tracking-widest text-muted-foreground uppercase">{stat.label}</div>
                            <div className="mt-1 text-3xl font-black gradient-text">
                              <Counter to={stat.value} suffix={stat.suffix || ""} decimals={stat.decimals} />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Links */}
                    {exp.links && exp.links.length > 0 && (
                      <div className="mt-8 flex flex-wrap items-center gap-3">
                        {exp.links.map(link => {
                          const Icon = iconMap[link.iconName];
                          return (
                            <a 
                              key={link.name} 
                              href={link.url} 
                              target="_blank" 
                              rel="noreferrer" 
                              className={`inline-flex justify-center items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all hover:scale-105 ${link.name === 'Live Demo' ? 'text-white shadow-lg' : 'border border-border bg-secondary hover:bg-secondary/80'}`}
                              style={link.name === 'Live Demo' ? { background: "var(--gradient-brand)" } : {}}
                            >
                              {Icon && <Icon className="h-4 w-4" />} {link.name}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
