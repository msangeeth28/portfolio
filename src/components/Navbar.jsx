import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { Moon, Sun, Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeToggle";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certs", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

/*
Navbar Component
Purpose:
Main navigation displayed on every page. Includes scroll progress, active section detection, 
theme toggle, and a resume download link. Hides on scroll down and shows on scroll up.
*/
export function Navbar() {
  const { theme, toggle } = useTheme();
  const { scrollY, scrollYProgress } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 200);
  });

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    
    return () => io.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(96%,880px)]"
    >
      <div className="glass-strong relative flex items-center gap-1 rounded-full px-3 py-2 shadow-[var(--shadow-elegant)]">
        <a href="#home" className="flex items-center gap-2 pl-2 pr-3">
          <span className="grid h-8 w-8 place-items-center rounded-full text-sm font-bold text-white" style={{ background: "var(--gradient-brand)" }}>T</span>
          <span className="hidden text-sm font-semibold sm:block">Thoran</span>
        </a>
        
        <nav className="hidden flex-1 items-center justify-center gap-1 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`relative rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                active === s.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {active === s.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-primary/15"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{s.label}</span>
            </a>
          ))}
        </nav>
        
        <div className="ml-auto flex items-center gap-1.5">
          <a
            href="https://pdflink.to/sangeeth-cv/"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium hover:bg-secondary sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5" /> Resume
          </a>


          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden relative grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:bg-secondary"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
        
        {/* Scroll progress bar attached to navbar */}
        <motion.div
          className="absolute -bottom-px left-4 right-4 h-px origin-left rounded-full"
          style={{ scaleX: scrollYProgress, background: "var(--gradient-brand)" }}
        />

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-[calc(100%+0.5rem)] w-48 overflow-hidden rounded-2xl border border-border bg-card/95 p-2 shadow-[var(--shadow-elegant)] backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-1">
                {sections.map(s => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                      active === s.id ? "bg-primary/10 text-foreground" : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                    }`}
                  >
                    {s.label}
                  </a>
                ))}
                <div className="my-1 h-px bg-border/50" />
                <a
                  href="https://pdflink.to/sangeeth-cv/"
                  target="_blank"
            rel="noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground"
                >
                  <Download className="h-4 w-4" /> Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
