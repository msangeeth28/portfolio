import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { certificationsData } from "@/data/certifications";

/*
Certifications Component
Purpose:
Displays certifications and achievements in a grid format with subtle hover animations.
*/
export function Certifications() {
  return (
    <section id="certs" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Certifications" title="Continuously learning" />
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certificationsData.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass group relative overflow-hidden rounded-2xl p-5"
              >
                <div className="absolute inset-x-0 top-0 h-px opacity-60" style={{ background: "var(--gradient-brand)" }} />
                <Award className="h-6 w-6 transition-transform group-hover:scale-110" style={{ color: "var(--brand-2)" }} />
                
                <h3 className="mt-3 text-sm font-semibold">{cert.title}</h3>
                <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{cert.issuer}</span>
                  <span>{cert.year}</span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
