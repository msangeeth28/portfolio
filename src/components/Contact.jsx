import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle, Mail } from "lucide-react";
import { Reveal } from "./Reveal";

/*
Contact Component
Purpose:
Displays a tabbed contact form allowing users to send messages directly via WhatsApp or Email.
*/
export function Contact() {
  const [activeTab, setActiveTab] = useState("whatsapp"); // 'whatsapp' | 'email'
  
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [focused, setFocused] = useState(null);

  const inputCls = (field) =>
    `peer w-full rounded-xl border bg-secondary/30 px-4 pt-5 pb-2 text-sm outline-none transition-all ${
      focused === field ? "border-primary shadow-[0_0_0_4px_color-mix(in_oklab,var(--primary)_15%,transparent)]" : "border-border"
    }`;

  const labelCls = "pointer-events-none absolute left-4 top-2 text-[10px] font-medium tracking-widest text-muted-foreground uppercase";
  const mailSubject = encodeURIComponent(subject.trim() || ``);
  const mailBody = encodeURIComponent(`\n${message.trim()}\n\nBest regards,\n${name.trim()}`);
  // Using Gmail web compose URL as it works 100% of the time in the browser
  const mailToUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=msangeeth28@gmail.com&su=${mailSubject}&body=${mailBody}`;

  const waText = encodeURIComponent(`Hello Sangeeth, I am ${name.trim()}.\n\n${message.trim()}`);
  const waUrl = `https://wa.me/918247053005?text=${waText}`;

  const isValid = name.trim().length > 0 && message.trim().length > 0;

  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-14 text-center shadow-[var(--shadow-elegant)]">
            <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-brand-soft)" }} />
            <div className="relative">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Let's <span className="gradient-text">Connect</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
                Choose your preferred way to reach out. I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glass mt-8 rounded-3xl p-6 sm:p-8">
            
            {/* Tabs */}
            <div className="mx-auto mb-8 flex max-w-sm rounded-full bg-secondary/50 p-1">
              <button
                onClick={() => setActiveTab("whatsapp")}
                className={`flex-1 rounded-full py-2.5 text-sm font-semibold transition-all ${activeTab === 'whatsapp' ? 'bg-background text-foreground shadow' : 'text-muted-foreground hover:text-foreground'}`}
              >
                <div className="flex items-center justify-center gap-2">
                  <MessageCircle className="h-4 w-4" style={{ color: activeTab === 'whatsapp' ? '#25D366' : 'currentColor' }} /> WhatsApp
                </div>
              </button>
              <button
                onClick={() => setActiveTab("email")}
                className={`flex-1 rounded-full py-2.5 text-sm font-semibold transition-all ${activeTab === 'email' ? 'bg-background text-foreground shadow' : 'text-muted-foreground hover:text-foreground'}`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4" style={{ color: activeTab === 'email' ? 'var(--brand)' : 'currentColor' }} /> Email
                </div>
              </button>
            </div>

            <div className="grid gap-4">
              <div className="relative">
                <input 
                  name="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setFocused("name")} 
                  onBlur={() => setFocused(null)} 
                  placeholder=" " 
                  className={inputCls("name")} 
                />
                <label className={labelCls}>Your Name</label>
              </div>
              
              <AnimatePresence mode="popLayout">
                {activeTab === 'email' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0, scale: 0.95 }}
                    animate={{ opacity: 1, height: "auto", scale: 1 }}
                    exit={{ opacity: 0, height: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="relative"
                  >
                    <input 
                      name="subject" 
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      onFocus={() => setFocused("subject")} 
                      onBlur={() => setFocused(null)} 
                      placeholder=" " 
                      className={inputCls("subject")} 
                    />
                    <label className={labelCls}>Subject (Optional)</label>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative">
                <textarea 
                  rows={5} 
                  name="message" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onFocus={() => setFocused("message")} 
                  onBlur={() => setFocused(null)} 
                  placeholder=" " 
                  className={inputCls("message") + " resize-none"} 
                />
                <label className={labelCls}>Message</label>
              </div>
              
              <div className="mt-4 flex justify-end">
                {activeTab === 'whatsapp' ? (
                  <a
                    href={isValid ? waUrl : undefined}
                    target={isValid ? "_blank" : undefined}
                    rel="noreferrer"
                    className={`group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 sm:w-auto ${!isValid ? "pointer-events-none opacity-50" : ""}`}
                    style={{ background: "#25D366" }}
                  >
                    <MessageCircle className="h-5 w-5" /> Contact through WhatsApp
                  </a>
                ) : (
                  <a
                    href={isValid ? mailToUrl : undefined}
                    className={`group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 sm:w-auto ${!isValid ? "pointer-events-none opacity-50" : ""}`}
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    <Mail className="h-5 w-5" /> Contact through Mail
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
