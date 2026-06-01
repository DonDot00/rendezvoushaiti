// Next.js 16.2.6 | Tailwind CSS v4 | React 19
// What We Need page — volunteer call-to-action and application form
import type { Metadata } from "next";
import Image from "next/image";
import HeroBanner from "@/components/HeroBanner";
import VolunteerForm from "@/components/VolunteerForm";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "What We Need | Rendez-vous: Haiti",
};

const galleryImages = [
  { src: "/img/savellwithKids.jpeg",  alt: "Catherine Savell with children" },
  { src: "/img/housegrouppicw.jpeg",  alt: "Group photo at the Foyer" },
  { src: "/img/house.jpeg",           alt: "Foyer building" },
];

export default function WhatWeNeedPage() {
  return (
    <>
      <HeroBanner
        title="What We Need"
        subtitle="Volunteers and supporters make the difference"
        backgroundImage="/img/housegrouppicw.jpeg"
      />

      <section className="py-20 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4">
          {/* Call to action */}
          <FadeIn direction="up">
            <div className="bg-white rounded-2xl shadow-md p-8 md:p-10 mb-10">
              <p className="text-[#D21034] text-sm font-semibold uppercase tracking-widest mb-3">
                Get Involved
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#00209F] mb-5">
                Volunteers Make the Difference
              </h2>
              <p className="text-stone-700 leading-relaxed mb-3 font-medium">
                Volunteers are needed in the US to promote and support Rendez-vous: Haiti.
                Volunteers are the key to making a difference in Haiti.
              </p>
              <div className="bg-yellow-50 border-l-4 border-[#FFD100] rounded-lg px-5 py-3.5 text-sm text-amber-800 mb-5">
                <strong>Notice:</strong> Due to the political unrest, onsite volunteer trips have been temporarily paused.
              </div>
              <p className="text-stone-600 leading-relaxed">
                Take your skills to Haiti and explore opportunities to teach what you know best —
                passing those skills to a Haitian so that he or she can earn a living. Fill out the
                form below and Director Catherine Savell will contact you.
              </p>
            </div>
          </FadeIn>

          {/* Photo gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {galleryImages.map((img, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.12}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Volunteer form */}
          <FadeIn direction="up" delay={0.1}>
            <VolunteerForm />
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#001A80] py-10 text-center">
        <FadeIn direction="none">
          <p className="text-blue-100 text-xl font-heading italic tracking-wide">
            "Solidarity in Action. Solidarity that works."
          </p>
        </FadeIn>
      </section>
    </>
  );
}
