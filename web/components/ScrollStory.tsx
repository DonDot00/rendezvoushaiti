// Next.js 16.2.6 | Tailwind CSS v4 | React 19
// Sticky scroll storytelling — each chapter fades in/out as the user scrolls through the section
"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const chapters = [
  {
    year: "2010",
    heading: "A Country in Crisis",
    body: "A devastating earthquake struck Haiti, killing over 200,000 people and displacing millions. The world watched — and a French instructor at Loyola University Maryland decided to act.",
    image: "/img/7522098-orig.jpeg",
    accent: "from-[#00209F]",
  },
  {
    year: "2011",
    heading: "Solidarity Takes Shape",
    body: "Catherine Savell founded Rendez-vous: Haiti, focusing efforts in Santo, a suburb of Port-au-Prince. As a volunteer and project manager, she helped initiate construction of the New Foyer Notre Dame de Lourdes.",
    image: "/img/savellwithKids.jpeg",
    accent: "from-[#D21034]",
  },
  {
    year: "Then",
    heading: "Programs That Change Lives",
    body: "Education, micro-entrepreneurship, infrastructure, and daily care — four pillars built to give children and families not just relief, but a path forward.",
    image: "/img/school.jpg",
    accent: "from-[#D21034]",
  },
  {
    year: "Now",
    heading: "Still Showing Up",
    body: "Today, Rendez-vous: Haiti continues fundraising, coordinating volunteers, and running sustainable programs. The mission is unchanged: solidarity that actually works.",
    image: "/img/housegrouppicw.jpeg",
    accent: "from-[#D21034]",
  },
];

export default function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative" style={{ height: `${chapters.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {chapters.map((chapter, i) => {
          const start = i / chapters.length;
          const end = (i + 1) / chapters.length;
          const midIn = start + 0.05;
          const midOut = end - 0.05;

          // eslint-disable-next-line react-hooks/rules-of-hooks
          const opacity = useTransform(
            scrollYProgress,
            [start, midIn, midOut, end],
            [0, 1, 1, 0]
          );
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const y = useTransform(
            scrollYProgress,
            [start, midIn],
            [40, 0]
          );
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const imageScale = useTransform(
            scrollYProgress,
            [start, end],
            [1.08, 1.0]
          );

          return (
            <motion.div
              key={i}
              style={{ opacity }}
              className="absolute inset-0"
            >
              {/* Background image */}
              <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
                <Image
                  src={chapter.image}
                  alt={chapter.heading}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
              </motion.div>

              {/* Dark overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${chapter.accent}/85 via-[#00209F]/60 to-transparent`} />

              {/* Text content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
                  <motion.div style={{ y }} className="max-w-xl">
                    <span className="inline-block text-amber-400 font-heading font-bold text-6xl md:text-8xl leading-none mb-4 drop-shadow-lg">
                      {chapter.year}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-md">
                      {chapter.heading}
                    </h2>
                    <p className="text-sky-100 text-lg md:text-xl leading-relaxed drop-shadow">
                      {chapter.body}
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Chapter counter dots */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {chapters.map((_, j) => (
                  <div
                    key={j}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      j === i ? "bg-amber-400 w-6" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
