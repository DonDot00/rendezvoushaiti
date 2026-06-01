// Next.js 16.2.6 | Tailwind CSS v4 | React 19
// Who We Are page — board member cards with hover-reveal bio and Loyola partnership list
import type { Metadata } from "next";
import Image from "next/image";
import HeroBanner from "@/components/HeroBanner";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Who We Are | Rendez-vous: Haiti",
};

const boardMembers = [
  {
    name: "Fr. Timothy Brown, S.J.",
    subtitle: null,
    bio: "Associate Professor, Law and Social Responsibility\nSpecial Assistant to the President for Mission Integration\nLoyola University Maryland",
    image: "/img/brown.png",
  },
  {
    name: "Dr. Andrea Thomas",
    subtitle: null,
    bio: "Associate Professor of French\nChair, Department of Modern Languages and Literatures",
    image: "/img/andrea.png",
  },
  {
    name: "Dr. John H. Hebb, PhD, MBA",
    subtitle: "Treasurer",
    bio: "Health Insurance Specialist, Retired\nProgram for All-Inclusive Care for the Elderly\nCenters for Medicare & Medicaid Services, Baltimore, MD",
    image: "/img/johnhebb.jpg",
  },
  {
    name: "Mr. Salvatore A. Lenzo, MBA, PMP",
    subtitle: null,
    bio: "Director, Information Systems\nSellinger School of Business and Management\nLoyola University Maryland",
    image: "/img/lenzo.jpg",
  },
  {
    name: "Mr. Andrew Robinson, PMP",
    subtitle: null,
    bio: "President, Retired\nRG (formerly Robbins Gioia, LLC)",
    image: "/img/Robinson.jpg",
  },
  {
    name: "Ms. Catherine Savell",
    subtitle: "RVH Founder-President & Director",
    bio: "French Instructor\nLoyola University Maryland",
    image: "/img/madamesevell.jpg",
  },
  {
    name: "Ms. Renee Jones",
    subtitle: "RVH Club President",
    bio: "Senior, Loyola University Maryland",
    image: "/img/Jones.png",
  },
];

const loyolaGroups = [
  "Rendez-vous: Haiti Club",
  "The Office of Mission Integration",
  "Dr. Peter Lorenzi's social entrepreneurship class",
  "Ms. Jennifer Gunner's Graduate Marketing Strategies class",
  "The Business French class and the French club",
  "International Programs",
  "Center for Community Service and Justice",
  "The Women's Center",
  "Ms. Veronica Gunnerson, Senior PR Capstone [w/ Francesca Galbato, Halle Golden, Lauren Keyes, Sarah Mazza]",
  "Academic and administrative departments including Instructional Technology, Campus Ministry and Modern Languages and Literatures",
];

export default function WhoWeArePage() {
  return (
    <>
      <HeroBanner
        title="Who We Are"
        subtitle="The people behind Rendez-vous: Haiti's mission of solidarity"
        backgroundImage="/img/7522098-orig.jpeg"
      />

      {/* Board members */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <FadeIn>
            <p className="text-[#D21034] text-sm font-semibold uppercase tracking-widest text-center mb-2">
              Leadership
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#00209F] text-center mb-4">
              Board of Members
            </h2>
            <p className="text-center text-stone-500 mb-14 max-w-xl mx-auto">
              Meet the dedicated individuals who guide Rendez-vous: Haiti&apos;s mission of solidarity in action.
              <span className="block text-xs mt-1 text-stone-400">Hover a card to learn more.</span>
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, i) => (
              <FadeIn key={member.name} direction="up" delay={i * 0.08} duration={0.6}>
              <div
                className="relative h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
              >
                {/* Full-card photo */}
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
                />

                {/* Permanent bottom gradient + name */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1e3a5f] to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 px-5 pb-4 group-hover:opacity-0 transition-opacity duration-200">
                  <h3 className="font-heading font-bold text-white text-base leading-tight drop-shadow">
                    {member.name}
                  </h3>
                  {member.subtitle && (
                    <p className="text-[#FFD100] text-xs font-semibold mt-0.5">
                      {member.subtitle}
                    </p>
                  )}
                </div>

                {/* Hover overlay — slides up with bio */}
                <div className="absolute inset-0 bg-[#00209F]/88 flex flex-col justify-end p-6 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-350 ease-out">
                  <h3 className="font-heading font-bold text-white text-xl mb-1 leading-tight">
                    {member.name}
                  </h3>
                  {member.subtitle && (
                    <p className="text-[#FFD100] text-sm font-semibold mb-3">
                      {member.subtitle}
                    </p>
                  )}
                  <p className="text-blue-100 text-sm leading-relaxed whitespace-pre-line">
                    {member.bio}
                  </p>
                </div>
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Loyola connection */}
      <section className="py-16 bg-[#00209F] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn>
            <p className="text-[#FFD100] text-sm font-semibold uppercase tracking-widest text-center mb-2">
              Academic Partnership
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-4">
              Loyola University Maryland Connection
            </h2>
            <p className="text-blue-200 text-center mb-10 max-w-2xl mx-auto">
              Students, classes, and group projects have been linked to the development of the
              Village of Notre Dame complex in Haiti. Notable contributors include:
            </p>
          </FadeIn>
          <ul className="grid sm:grid-cols-2 gap-3">
            {loyolaGroups.map((group, i) => (
              <FadeIn key={group} direction="up" delay={i * 0.04} duration={0.5}>
                <li className="flex items-start gap-3 text-blue-100 text-sm leading-relaxed">
                  <span className="text-[#FFD100] mt-1 shrink-0">◆</span>
                  {group}
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#00209F] py-10 text-center">
        <FadeIn direction="none">
          <p className="text-blue-100 text-xl font-heading italic tracking-wide">
            "Solidarity in Action. Solidarity that works."
          </p>
        </FadeIn>
      </section>
    </>
  );
}
