import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/*
LoadingScreen Component
Purpose:
Displays an animated initialization screen when the website first loads.
Fades out smoothly after a short delay.
*/
export function LoadingScreen() {
  const [done, setDone] = useState(false);
  
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="relative">
            <svg width="140" height="140" viewBox="0 0 140 140" className="drop-shadow-[0_0_40px_var(--brand)]">
              {[...Array(3)].map((_, col) => (
                [...Array(3)].map((_, row) => {
                  const cx = 25 + col * 45;
                  const cy = 25 + row * 45;
                  return (
                    <g key={`${col}-${row}`}>
                      {col < 2 &&
                        [...Array(3)].map((_, r2) => (
                          <motion.line
                            key={r2}
                            x1={cx} y1={cy}
                            x2={cx + 45} y2={25 + r2 * 45}
                            stroke="url(#lg)"
                            strokeWidth="1"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.6 }}
                            transition={{ duration: 0.8, delay: col * 0.2 + row * 0.05 }}
                          />
                        ))}
                      <motion.circle
                        cx={cx} cy={cy} r="5"
                        fill="url(#lg)"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ duration: 0.5, delay: col * 0.15 + row * 0.05 }}
                      />
                    </g>
                  );
                })
              ))}
              <defs>
                <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="oklch(0.72 0.25 290)" />
                  <stop offset="50%" stopColor="oklch(0.78 0.18 195)" />
                  <stop offset="100%" stopColor="oklch(0.78 0.22 340)" />
                </linearGradient>
              </defs>
            </svg>
            <motion.p
              className="mt-6 text-center text-sm font-medium tracking-widest text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              INITIALIZING
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
