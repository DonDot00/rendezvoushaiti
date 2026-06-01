// Next.js 16.2.6 | Tailwind CSS v4 | React 19
// Full-screen homepage hero — cross-fades between 4 keyword/image slides every 4 seconds
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const slides = [
  { word: "Solidarity",   image: "/img/7522098-orig.jpeg" },
  { word: "Education",    image: "/img/school.jpg" },
  { word: "Community",    image: "/img/housegrouppicw.jpeg" },
  { word: "Hope",         image: "/img/savellwithKids.jpeg" },
];

export default function HeroCycling() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="relative h-screen flex flex-col justify-end overflow-hidden">
      {/* Background images — cross-fade */}
      {slides.map((s, i) => (
        <motion.div
          key={s.image}
          className="absolute inset-0"
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Image
            src={s.image}
            alt=""
            fill
            className="object-cover object-center"
            priority={i === 0}
          />
        </motion.div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00209F]/50 via-[#00209F]/40 to-black/80" />

      {/* Content — anchored to bottom like Obama Foundation */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto">

          {/* Large cycling heading */}
          <div className="mb-3 flex flex-col lg:flex-row lg:items-end lg:gap-8">
            {/* Changing word */}
            <div className="overflow-hidden min-h-[5rem] md:min-h-[7rem] lg:min-h-[9rem] flex items-end">
              <AnimatePresence mode="wait">
                <motion.span
                  key={slides[index].word}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -60, opacity: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="block text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] font-heading font-bold leading-none text-white"
                >
                  {slides[index].word}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Static suffix */}
            <div className="lg:pb-3">
              <span className="block text-2xl md:text-4xl lg:text-5xl font-heading font-light text-blue-100 leading-tight">
                in Action.
              </span>
              <span className="block text-base md:text-xl text-[#FFD100] font-heading italic mt-1">
                Solidarity that works.
              </span>
            </div>
          </div>

          {/* Controls row */}
          <div className="flex items-center justify-between mt-8">
            {/* Slide indicators */}
            <div className="flex items-center gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setIndex(i); setPaused(true); }}
                  aria-label={`Show slide ${i + 1}`}
                  className={`h-[3px] rounded-full transition-all duration-500 ${
                    i === index ? "bg-[#FFD100] w-8" : "bg-white/40 w-4"
                  }`}
                />
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/who-we-are"
                className="bg-[#D21034] hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all shadow-lg"
              >
                Learn More
              </Link>
              <Link
                href="/what-we-need"
                className="border border-white/70 hover:bg-white/15 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all"
              >
                Volunteer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
