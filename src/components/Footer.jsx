import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { personalInfo } from "@/data/personalInfo";

/*
Footer Component
Purpose:
Website footer displaying a simple logo, copyright info, and social links.
Includes a button to smoothly scroll back to the top of the page.
*/
export function Footer() {
  const { name, contact } = personalInfo;

  return (
    <footer className="relative border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-full text-sm font-bold text-white" style={{ background: "var(--gradient-brand)" }}>T</span>
          <div>
            <div className="text-sm font-semibold">{name}</div>
            <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} · Crafted with care.</div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {[
            { href: contact.github, label: "GitHub", Icon: Github },
            { href: contact.linkedin, label: "LinkedIn", Icon: Linkedin },
            { href: `https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`, label: "Email", Icon: Mail },
          ].map(({ href, label, Icon }) => (
            <a 
              key={label} 
              href={href} 
              target="_blank" 
              rel="noreferrer" 
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-secondary/40 transition-colors hover:bg-secondary"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="ml-2 grid h-9 w-9 place-items-center rounded-full text-white shadow-[var(--shadow-glow)]"
            style={{ background: "var(--gradient-brand)" }}
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
