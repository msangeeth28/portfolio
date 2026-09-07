import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowDown, ExternalLink } from "lucide-react";
import { personalInfo } from "@/data/personalInfo";
import portrait from "@/assets/portfolio_image.jpeg";

/*
Hero Component
Purpose:
This section introduces the developer, shows a profile image with 3D interactions, 
cycles through career roles, and provides important links.
*/
export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = personalInfo.roles;

  // 3D rotation values for the portrait
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-50, 50], [8, -8]), { stiffness: 150, damping: 20 });
  const ry = useSpring(useTransform(mx, [-50, 50], [-8, 8]), { stiffness: 150, damping: 20 });

  // Cycles the role text every 2.4s
  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <section id="home" className="relative flex min-h-screen items-center px-6 pt-32 pb-16">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left Side: Text and Actions */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I'm{" "}
            <span className="gradient-text animate-gradient-shift bg-clip-text">
              {personalInfo.name}
            </span>
          </motion.h1>

          <div className="mt-4 flex h-10 items-center text-xl font-semibold sm:text-2xl">
            <span className="text-muted-foreground">I'm an Aspiring &nbsp;</span>
            <div className="relative overflow-hidden">
              {roles.map((role, index) => (
                <motion.span
                  key={role}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{
                    y: roleIndex === index ? 0 : roleIndex === (index + 1) % roles.length ? -40 : 40,
                    opacity: roleIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 whitespace-nowrap gradient-text"
                >
                  {role}
                </motion.span>
              ))}
              <span className="invisible whitespace-nowrap">{roles[roleIndex]}</span>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
              style={{ background: "var(--gradient-brand)" }}
            >
              View my work <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.contact.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
            <a
              href={personalInfo.contact.github}
              target="_blank" rel="noreferrer"
              aria-label="GitHub"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-secondary/40 transition-colors hover:bg-secondary"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={personalInfo.contact.linkedin}
              target="_blank" rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-secondary/40 transition-colors hover:bg-secondary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Interactive Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-md"
          style={{ perspective: 1000 }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 100);
            my.set(((e.clientY - rect.top) / rect.height - 0.5) * 100);
          }}
          onMouseLeave={() => { mx.set(0); my.set(0); }}
        >
          <div className="animate-spin-slow absolute -inset-4 rounded-[2rem] opacity-70 blur-2xl" style={{ background: "var(--gradient-brand)" }} />
          <div className="animate-ring-pulse absolute -inset-1 rounded-[2rem]" style={{ background: "var(--gradient-brand)" }} />
          
          <motion.div
            style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
            className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-[var(--shadow-elegant)]"
          >
            <img
              src={portrait}
              alt="Portrait of Thoran Mani Sangeeth Patapalla"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, color-mix(in oklab, var(--background) 60%, transparent))" }} />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full border border-border bg-secondary/40 text-muted-foreground"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-4 w-4" />
      </motion.a>
    </section>
  );
}
