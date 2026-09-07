import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/*
Counter Component
Purpose:
Animates numbers counting up when they scroll into view.
Great for statistics and data display.
*/
export function Counter({ to, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400; // Animation duration in ms
    let raf;

    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1);
      // Easing function for smooth counting
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref}>{val.toFixed(decimals)}{suffix}</span>;
}
