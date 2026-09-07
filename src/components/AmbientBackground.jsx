import { useEffect, useRef, useState } from "react";

/*
AmbientBackground Component
Purpose:
Creates a complex, animated background with glowing blobs, a moving beam, and a grid overlay.
It also tracks the mouse position to create a subtle spotlight effect.
*/
export function AmbientBackground() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const raf = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        setMouse({ 
          x: (e.clientX / window.innerWidth) * 100, 
          y: (e.clientY / window.innerHeight) * 100 
        });
      });
    };
    
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Grid pattern overlay */}
      <div className="grid-bg absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      
      {/* Animated glowing blobs */}
      <div
        className="animate-float-slow absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--brand), transparent 70%)" }}
      />
      <div
        className="animate-float-slower absolute top-1/2 -right-40 h-[600px] w-[600px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--brand-2), transparent 70%)" }}
      />
      <div
        className="animate-float-slow absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--brand-3), transparent 70%)" }}
      />
      
      {/* Moving vertical beam */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="animate-beam absolute -top-1/2 h-[200%] w-40 opacity-10"
          style={{ background: "linear-gradient(90deg, transparent, var(--brand-2), transparent)" }}
        />
      </div>
      
      {/* Dynamic mouse spotlight effect */}
      <div
        className="absolute inset-0 opacity-40 transition-opacity"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x}% ${mouse.y}%, color-mix(in oklab, var(--brand) 20%, transparent), transparent 40%)`,
        }}
      />
      
      {/* Static noise texture */}
      <div className="noise-overlay" />
    </div>
  );
}
