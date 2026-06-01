// Next.js 16.2.6 | Tailwind CSS v4 | React 19
// Reusable page hero — optional parallax background image with Haitian flag gradient overlay
interface HeroBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
}

export default function HeroBanner({
  title,
  subtitle,
  backgroundImage,
  children,
}: HeroBannerProps) {
  return (
    <section
      className="relative flex items-center justify-center py-32 md:py-44 text-white overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }
          : {}
      }
    >
      {/* Gradient overlay — Haiti blue left, red right */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00209F]/85 via-[#00209F]/60 to-[#D21034]/70" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight drop-shadow-lg mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-blue-100 font-light mt-2 drop-shadow max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
