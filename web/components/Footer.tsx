// Next.js 16.2.6 | Tailwind CSS v4 | React 19
// Footer — PayPal and Venmo donate buttons, Fr. Brown Scholarship logo, partner logos
import Image from "next/image";

const partners = [
  {
    name: "Terre des Montagnes",
    img: "/img/7702855_orig.jpg",
    href: "http://www.terredesmontagnes.org/index.html",
  },
  {
    name: "Agence Microprojets",
    img: "/img/1318751.gif",
    href: "http://www.agencemicroprojets.org/",
  },
  {
    name: "FENDLI",
    img: "/img/logo-fendli_orig.jpg",
    href: "http://fendli.tripod.com/historique.html",
  },
];

export default function Footer() {
  return (
    <footer id="footer-donate" className="bg-[#00209F] text-white">
      {/* Donate section */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h3 className="text-2xl font-heading font-bold mb-8">Support Our Mission</h3>

        {/* Venmo — bigger display */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 rounded-2xl px-8 py-5">
            <Image
              src="/img/venmo2_orig.png"
              alt="Donate via Venmo"
              width={260}
              height={100}
              className="object-contain"
            />
          </div>
        </div>

        {/* PayPal donate — logo as the button face */}
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top"
          className="flex justify-center"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="5R2S292LPWH48" />
          <button
            type="submit"
            className="bg-white hover:bg-blue-50 rounded-2xl px-8 py-5 shadow-lg transition-all hover:scale-105 cursor-pointer"
            aria-label="Donate via PayPal"
          >
            <Image
              src="/img/paypal_orig.png"
              alt="Donate via PayPal"
              width={200}
              height={80}
              className="object-contain"
            />
          </button>
        </form>
      </div>

      <div className="border-t border-blue-700">
        <div className="max-w-4xl mx-auto px-4 py-10 text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/img/frtbrownscholarshiptextonly_orig.jpg"
              alt="Fr. Brown Scholarship"
              width={280}
              height={70}
              className="object-contain opacity-90"
            />
          </div>

          <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-6">
            Our Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            {partners.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
                title={p.name}
              >
                <Image
                  src={p.img}
                  alt={p.name}
                  width={90}
                  height={55}
                  className="object-contain filter brightness-110"
                />
              </a>
            ))}
            <a
              href="http://www.grandirenhaiti.org/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 text-sm hover:text-white underline transition-colors"
            >
              Grandir en Haïti
            </a>
          </div>

          <p className="text-blue-300 text-xs">
            <em>Rendez-vous: Haiti</em> is a volunteer-based, non-profit 501(c)(3) organization supporting sustainable development.
          </p>
          <p className="text-blue-500 text-xs mt-2">
            &copy; {new Date().getFullYear()} Rendez-vous: Haiti
          </p>
        </div>
      </div>
    </footer>
  );
}
