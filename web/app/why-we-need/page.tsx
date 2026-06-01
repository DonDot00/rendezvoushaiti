// Next.js 16.2.6 | Tailwind CSS v4 | React 19
// Why We Need page — context card and embedded news article iframes
import type { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Why We Need | Rendez-vous: Haiti",
};

const articles = [
  {
    title: "Haiti Crisis — Miami Herald Op-Ed",
    src: "https://www.miamiherald.com/news/nation-world/world/americas/haiti/",
    description: "An in-depth opinion piece examining the ongoing humanitarian situation in Haiti.",
  },
  {
    title: "Haiti Crisis Explained — Concern USA",
    src: "https://concernusa.org/news/haiti-crisis-explained/",
    description: "A comprehensive overview of the political and social crises affecting Haiti today.",
  },
];

export default function WhyWeNeedPage() {
  return (
    <>
      <HeroBanner
        title="Why We Need"
        subtitle="Understanding the ongoing situation in Haiti"
        backgroundImage="/img/7522098-orig.jpeg"
      />

      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4">

          {/* Context card */}
          <FadeIn direction="up">
            <div className="bg-white rounded-2xl shadow-md p-8 md:p-10 mb-14">
              <p className="text-[#D21034] text-sm font-semibold uppercase tracking-widest mb-3">
                Context
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#00209F] mb-5">
                What&apos;s Going On in Haiti Today
              </h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Haiti continues to face extraordinary challenges — political instability, gang
                violence, natural disasters, and a deepening humanitarian crisis. Understanding
                what is happening is the first step toward meaningful solidarity.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Below are resources that provide context for why organizations like Rendez-vous:
                Haiti remain critical to the people we serve in Santo and throughout Port-au-Prince.
              </p>
            </div>
          </FadeIn>

          {/* Article embeds */}
          <div className="space-y-12">
            {articles.map((article, i) => (
              <FadeIn key={article.src} direction="up" delay={i * 0.15}>
                <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                  <div className="bg-[#00209F] px-6 py-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-white font-heading font-semibold text-lg">
                        {article.title}
                      </h3>
                      <p className="text-blue-200 text-sm mt-1">{article.description}</p>
                    </div>
                    <a
                      href={article.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 bg-[#D21034] hover:bg-[#D21034] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors mt-1"
                    >
                      Open ↗
                    </a>
                  </div>
                  <div className="p-2 bg-stone-100">
                    <iframe
                      src={article.src}
                      title={article.title}
                      className="w-full rounded-lg"
                      style={{ height: "500px", border: "none" }}
                      loading="lazy"
                    />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      <section className="bg-[#001A80] py-10 text-center">
        <FadeIn direction="none">
          <p className="text-blue-100 text-xl font-heading italic tracking-wide">
            &quot;Solidarity in Action. Solidarity that works.&quot;
          </p>
        </FadeIn>
      </section>
    </>
  );
}
