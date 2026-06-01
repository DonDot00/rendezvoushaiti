// Next.js 16.2.6 | Tailwind CSS v4 | React 19
// Animates a number from 0 to the target value when the element scrolls into view
"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export default function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 2000,
}: CountUpProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * to));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}{value}{suffix}
    </span>
  );
}
