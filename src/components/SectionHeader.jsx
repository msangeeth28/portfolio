import { Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

/*
SectionHeader Component
Purpose:
Reusable heading for every section. Displays an eyebrow badge, a main title, and an optional subtitle with scroll reveal animations.
*/
export function SectionHeader({ eyebrow, title, sub }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium tracking-widest text-muted-foreground uppercase">
          <Sparkles className="h-3 w-3" /> {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          <span className="gradient-text">{title}</span>
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.2}>
          <p className="mt-3 text-base text-muted-foreground">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
