// Next.js 16.2.6 | Tailwind CSS v4 | React 19
// Home page — hero, mission, impact stats, timeline, program cards, donate CTA
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import CountUp from "@/components/CountUp";
import HeroCycling from "@/components/HeroCycling";

export default function HomePage() {
  return (
    <>
      {/* ── Cycling hero ── */}
      <HeroCycling />

      {/* ── Mission section ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Obama-style section header */}
          <FadeIn>
            <span className="block bg-[#00209F] h-[6px] mb-5 w-16" />
            <p className="text-[#D21034] text-xs font-bold uppercase tracking-[0.2em] mb-8">
              Our Mission
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <FadeIn direction="right" duration={0.75}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/img/savellwithKids.jpeg"
                  alt="Catherine Savell with children at the Foyer"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.15} duration={0.75}>
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#00209F] mb-6 leading-tight">
                  What is Rendez-Vous: Haiti?
                </h2>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Rendez-Vous: Haiti is a sustainability initiative founded by Loyola French
                  instructor <strong>Catherine Savell</strong> in the wake of the 2010 earthquake
                  in Haiti.
                </p>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Our mission is solidarity in action: to empower change-makers in Haiti who can
                  have a positive and sustainable impact on their community. We support education,
                  professional training, infrastructure, and micro-entrepreneurship.
                </p>
                <p className="text-stone-600 leading-relaxed mb-8">
                  Since March 2011, Madame Savell has focused her efforts in Santo, a suburb of
                  Port-au-Prince, coordinating volunteers, fundraising, and developing sustainable
                  programs for the Foyer Notre Dame de Lourdes.
                </p>
                <Link
                  href="/what-we-do"
                  className="inline-block bg-[#00209F] hover:bg-blue-800 text-white px-7 py-3 rounded-lg font-semibold transition-colors shadow-md"
                >
                  See What We Do →
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Impact stats ── */}
      <section className="bg-[#00209F] py-20 text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { value: 2011, suffix: "", label: "Founded after the 2010 earthquake" },
            { value: 14,   suffix: "+", label: "Years of continuous service in Haiti" },
            { value: 4,    suffix: "",  label: "Core program pillars driving change" },
          ].map((stat, i) => (
            <FadeIn key={stat.label} direction="up" delay={i * 0.15}>
              <p className="text-5xl font-heading font-bold text-[#FFD100]">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-blue-200 mt-2">{stat.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Our Story timeline ── */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <span className="block bg-[#D21034] h-[6px] mb-5 w-16" />
            <p className="text-[#D21034] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#00209F] mb-16">
              From crisis to community.
            </h2>
          </FadeIn>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00209F] via-[#D21034] to-[#FFD100] hidden md:block" />

            <div className="space-y-12">
              {[
                {
                  year: "2010",
                  title: "A Country in Crisis",
                  body: "A devastating earthquake struck Haiti, killing over 200,000 people and displacing millions. The world watched — and a French instructor at Loyola University Maryland decided to act.",
                  image: "/img/7522098-orig.jpeg",
                  color: "#00209F",
                },
                {
                  year: "2011",
                  title: "Solidarity Takes Shape",
                  body: "Catherine Savell founded Rendez-vous: Haiti, focusing efforts in Santo, a suburb of Port-au-Prince. As volunteer and project manager, she helped initiate construction of the Foyer Notre Dame de Lourdes.",
                  image: "/img/savellwithKids.jpeg",
                  color: "#D21034",
                },
                {
                  year: "Then",
                  title: "Programs That Change Lives",
                  body: "Education, micro-entrepreneurship, infrastructure, and daily care — four pillars built to give children and families not just relief, but a sustainable path forward.",
                  image: "/img/school.jpg",
                  color: "#00209F",
                },
                {
                  year: "Now",
                  title: "Still Showing Up",
                  body: "Today, Rendez-vous: Haiti continues fundraising, coordinating volunteers, and running sustainable programs. The mission is unchanged: solidarity that actually works.",
                  image: "/img/housegrouppicw.jpeg",
                  color: "#FFD100",
                },
              ].map((chapter, i) => (
                <FadeIn key={chapter.year} direction="right" delay={i * 0.1}>
                  <div className="flex gap-8 md:gap-12 items-start">
                    {/* Year marker */}
                    <div className="shrink-0 w-12 text-center relative">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-heading font-bold text-sm shadow-md z-10 relative"
                        style={{ backgroundColor: chapter.color }}
                      >
                        {chapter.year}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 grid md:grid-cols-2 gap-8 pb-4 border-b border-stone-200 last:border-0">
                      <div>
                        <h3 className="text-xl md:text-2xl font-heading font-bold text-[#00209F] mb-3">
                          {chapter.title}
                        </h3>
                        <p className="text-stone-600 leading-relaxed">{chapter.body}</p>
                      </div>
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                        <Image
                          src={chapter.image}
                          alt={chapter.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Program highlights ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <span className="block bg-[#FFD100] h-[6px] mb-5 w-16" />
            <p className="text-[#D21034] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#00209F] mb-14">
              Four pillars of change.
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🌟", title: "Better Days",       desc: "Special meals, beach outings, and celebrations that lift spirits." },
              { icon: "📚", title: "Education",         desc: "Language, computer literacy, and teacher training programs." },
              { icon: "💼", title: "Entrepreneurship",  desc: "Micro-loans, mentoring, and start-up funding for small businesses." },
              { icon: "🏠", title: "Sustainability",    desc: "Infrastructure, child sponsorship, and food security programs." },
            ].map((item, i) => (
              <FadeIn key={item.title} direction="up" delay={i * 0.1}>
                <div className="bg-stone-50 rounded-2xl p-7 hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-[#D21034] text-center h-full">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-heading font-bold text-[#00209F] text-lg mb-2">{item.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <Link
                href="/what-we-do"
                className="inline-block bg-[#00209F] hover:bg-blue-800 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors shadow-md"
              >
                Explore Our Programs →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Full-bleed photo strip ── */}
      <section className="grid grid-cols-3 md:grid-cols-5 h-48 md:h-64 overflow-hidden">
        {[
          "/img/kidsdrawing2.jpg",
          "/img/computerkids.jpg",
          "/img/kidscolor.jpg",
          "/img/arts_crafts.jpg",
          "/img/drawing.jpg",
        ].map((src, i) => (
          <div key={i} className="relative overflow-hidden">
            <Image
              src={src}
              alt=""
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
        ))}
      </section>

      {/* ── Donate CTA ── */}
      <section className="py-24 bg-[#D21034] text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-5 leading-tight">
              Make a Difference Today
            </h2>
            <p className="text-red-100 text-lg mb-10">
              Your donation funds education, professional training, and sustainable development
              for children and families in Haiti.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#footer-donate"
                className="bg-[#FFD100] hover:bg-yellow-300 text-[#00209F] px-10 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
              >
                Donate Now
              </a>
              <Link
                href="/what-we-need"
                className="border-2 border-white/70 hover:bg-white/10 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Volunteer
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Tagline ── */}
      <section className="bg-[#00209F] py-10 text-center">
        <FadeIn direction="none">
          <p className="text-blue-100 text-xl font-heading italic tracking-wide">
            &quot;Solidarity in Action. Solidarity that works.&quot;
          </p>
        </FadeIn>
      </section>
    </>
  );
}
