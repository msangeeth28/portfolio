import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { educationData } from "@/data/education";

/*
Education Component
Purpose:
Displays academic background in a clean list format with a subtle vertical line indicator.
*/
export function Education() {
  return (
    <section id="education" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="Education" title="Academic journey" />
        
        <div className="relative pl-8 md:pl-0">
          <div className="absolute left-0 top-0 bottom-0 w-px md:left-1/2" style={{ background: "linear-gradient(180deg, var(--brand), var(--brand-2), transparent)" }} />
          
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <Reveal key={edu.title} delay={index * 0.1}>
                <div className="relative md:grid md:grid-cols-2 md:gap-8">
                  {/* Timeline Dot */}
                  <span className="absolute -left-8 top-4 z-10 grid h-4 w-4 place-items-center rounded-full ring-4 ring-background md:left-1/2 md:-translate-x-1/2" style={{ background: "var(--gradient-brand)" }} />
                  
                  {/* Desktop Connector Line */}
                  <div 
                    className={`hidden md:block absolute top-6 h-px w-8 lg:w-16 z-0 ${index % 2 === 0 ? "right-1/2" : "left-1/2"}`} 
                    style={{ background: index % 2 === 0 ? "linear-gradient(270deg, var(--brand), transparent)" : "linear-gradient(90deg, var(--brand), transparent)" }} 
                  />

                  {index % 2 !== 0 && <div className="hidden md:block" />}
                  
                  <motion.div whileHover={{ y: -3, scale: 1.01 }} className={`glass rounded-2xl p-5 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="text-xs text-muted-foreground">{edu.period}</div>
                    <h3 className="mt-1 font-semibold">{edu.title}</h3>
                    <p className="text-sm text-muted-foreground">{edu.place}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{edu.detail}</p>
                  </motion.div>
                  
                  {index % 2 === 0 && <div className="hidden md:block" />}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
