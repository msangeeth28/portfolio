import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Activity, Sparkles, Database } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { projects } from "@/data/projects";

const iconMap = { Activity, Sparkles, Database };

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 20 });
  const sry = useSpring(ry, { stiffness: 200, damping: 20 });
  
  const Icon = iconMap[project.iconName];

  return (
    <Reveal delay={index * 0.1}>
      <motion.div
        ref={ref}
        style={{ perspective: 1200 }}
        onMouseMove={(e) => {
          const r = ref.current.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width;
          const y = (e.clientY - r.top) / r.height;
          setMouse({ x: x * 100, y: y * 100 });
          ry.set((x - 0.5) * 10);
          rx.set(-(y - 0.5) * 10);
        }}
        onMouseLeave={() => { rx.set(0); ry.set(0); }}
      >
        <motion.div
          style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
          className="glass group relative overflow-hidden rounded-3xl p-6 shadow-[var(--shadow-elegant)]"
        >
          {/* mouse light */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
            style={{ background: `radial-gradient(400px circle at ${mouse.x}% ${mouse.y}%, color-mix(in oklab, var(--brand) 25%, transparent), transparent 40%)` }}
          />
          
          {/* Mockup area */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black">
            <div className="absolute inset-0">
              <img 
                src={project.image} 
                alt={project.title} 
                className="h-full w-full object-cover opacity-80 transition-opacity hover:opacity-100" 
              />
            </div>
          </div>

          <div className="relative mt-6">
            <div className="text-xs font-medium tracking-widest text-muted-foreground uppercase">{project.tag}</div>
            <h3 className="mt-1 text-xl font-bold">{project.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{project.desc}</p>
            
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span key={t} className="rounded-full border border-border bg-secondary/40 px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
            
            <div className="mt-5 flex items-center gap-2">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium hover:bg-secondary">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-white" style={{ background: "var(--gradient-brand)" }}>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Reveal>
  );
}

/*
Projects Component
Purpose:
Displays featured projects using interactive cards that respond to mouse movement.
Lists the technologies used, description, and related links.
*/
export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Projects" title="Selected work" sub="end-to-end projects." />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
