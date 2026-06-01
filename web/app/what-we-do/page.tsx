// Next.js 16.2.6 | Tailwind CSS v4 | React 19
// What We Do page — four-point program cards and photo gallery
import type { Metadata } from "next";
import Image from "next/image";
import HeroBanner from "@/components/HeroBanner";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "What We Do | Rendez-vous: Haiti",
};

const programs = [
  {
    icon: "🌟",
    title: "Making a Better Day",
    description:
      "Special meals, treats for all, beach outings, competitions, and rewards that bring joy and a sense of community to children and families at the Foyer.",
  },
  {
    icon: "📚",
    title: "Education & Creativity",
    description:
      "Reinforcing French, teaching English and computer literacy, providing teacher training, and facilitating arts and crafts programs that expand opportunity.",
  },
  {
    icon: "💼",
    title: "Entrepreneurship & Jobs",
    description:
      "Micro-loans, mentoring, study grants, tool kits, micro-business seminars, and start-up funding — including a printing press and wholesale mini-market.",
  },
  {
    icon: "🏠",
    title: "Sustainable Childcare",
    description:
      "Infrastructure repairs and construction, staff salaries, Sponsor a Child, Family Reunification, chicken coop, vegetable garden, fruit trees, crafts, mamba production, and volunteer coordination.",
  },
];

const galleryImages = [
  { src: "/img/kidhandheart.jpg",    alt: "Child holding a heart" },
  { src: "/img/kidsdrawing4.jpg",    alt: "Kids drawing" },
  { src: "/img/kidscolor.jpg",       alt: "Children coloring" },
  { src: "/img/housecleaning.jpeg",  alt: "Community house cleaning" },
  { src: "/img/arts_crafts2.jpg",    alt: "Arts and crafts session" },
  { src: "/img/rdvh-nutela.jpeg",    alt: "Food distribution" },
  { src: "/img/house.jpeg",          alt: "Foyer building" },
  { src: "/img/housegrouppicw.jpeg", alt: "Group photo at the Foyer" },
  { src: "/img/kidsdrawing2.jpg",    alt: "Children drawing" },
  { src: "/img/school.jpg",          alt: "School program" },
  { src: "/img/computerkids.jpg",    alt: "Computer literacy class" },
  { src: "/img/arts_crafts.jpg",     alt: "Arts and crafts" },
];

export default function WhatWeDoPage() {
  return (
    <>
      <HeroBanner
        title="What We Do"
        subtitle="Rallying towards social justice — a four-point program"
        backgroundImage="/img/school.jpg"
      />

      {/* Program cards */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <FadeIn>
            <p className="text-[#D21034] text-sm font-semibold uppercase tracking-widest text-center mb-2">
              Our Programs
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#00209F] text-center mb-4">
              Four-Point Program
            </h2>
            <p className="text-center text-stone-500 mb-14 max-w-xl mx-auto">
              Each pillar addresses a critical dimension of community empowerment — from daily
              wellbeing to long-term economic independence.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-8">
            {programs.map((prog, i) => (
              <FadeIn
                key={prog.title}
                direction={i % 2 === 0 ? "right" : "left"}
                delay={i * 0.1}
              >
                <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-[#D21034] flex gap-6 h-full">
                  <div className="text-5xl shrink-0">{prog.icon}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-100 text-[#D21034] text-xs font-bold px-2 py-0.5 rounded-full">
                        {i + 1}
                      </span>
                      <h3 className="font-heading font-bold text-[#00209F] text-xl">
                        {prog.title}
                      </h3>
                    </div>
                    <p className="text-stone-600 leading-relaxed">{prog.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Quote divider */}
      <section className="bg-[#D21034] py-12 text-center text-white px-4">
        <FadeIn direction="none">
          <p className="text-xl md:text-2xl font-heading italic max-w-3xl mx-auto leading-relaxed">
            "Rendez-vous, rallying towards social justice. Solidarity in action."
          </p>
        </FadeIn>
      </section>

      {/* Photo gallery */}
      <section className="py-16 bg-[#00209F]">
        <div className="max-w-6xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white text-center mb-10">
              Our Work in Action
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {galleryImages.map((img, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.05} duration={0.5}>
                <div className="relative aspect-square overflow-hidden rounded-xl shadow-md">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#001A80] py-10 text-center">
        <p className="text-blue-100 text-xl font-heading italic tracking-wide">
          "Solidarity in Action. Solidarity that works."
        </p>
      </section>
    </>
  );
}
