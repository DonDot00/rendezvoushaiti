// Next.js 16.2.6 | Tailwind CSS v4 | React 19
// Scroll-triggered fade and slide wrapper — configurable direction, delay, and duration
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const offsets: Record<Direction, { x: number; y: number }> = {
  up:    { x: 0,   y: 48  },
  down:  { x: 0,   y: -48 },
  left:  { x: 48,  y: 0   },
  right: { x: -48, y: 0   },
  none:  { x: 0,   y: 0   },
};

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.65,
  className,
  once = true,
}: FadeInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px 0px" });
  const { x, y } = offsets[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
