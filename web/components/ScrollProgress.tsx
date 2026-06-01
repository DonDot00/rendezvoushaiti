// Next.js 16.2.6 | Tailwind CSS v4 | React 19
// Thin fixed bar at the top of the page that fills left-to-right as the user scrolls
"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00209F] via-[#D21034] to-[#FFD100] z-[60]"
    />
  );
}
