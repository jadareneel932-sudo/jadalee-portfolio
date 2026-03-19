import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const x = useSpring(rawX, { stiffness: 500, damping: 40 });
  const y = useSpring(rawY, { stiffness: 500, damping: 40 });

  const trailX = useSpring(rawX, { stiffness: 120, damping: 28 });
  const trailY = useSpring(rawY, { stiffness: 120, damping: 28 });

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setVisible(true);
    };

    const down = () => setClicking(true);
    const up = () => setClicking(false);

    const checkHover = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setHovering(
        !!el.closest("a, button, [role='button'], input, textarea, select, label")
      );
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousemove", checkHover);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.documentElement.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", checkHover);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.style.cursor = "";
    };
  }, [rawX, rawY]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      {/* Trail ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-primary/50"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
          width: hovering ? 44 : 32,
          height: hovering ? 44 : 32,
          transition: "width 0.2s ease, height 0.2s ease, opacity 0.3s ease",
        }}
      />
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-primary"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
          width: clicking ? 6 : 5,
          height: clicking ? 6 : 5,
          transition: "width 0.1s ease, height 0.1s ease, opacity 0.3s ease",
        }}
      />
    </>
  );
}
