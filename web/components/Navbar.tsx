// Next.js 16.2.6 | Tailwind CSS v4 | React 19
// Sticky top nav — active-link highlighting via usePathname, mobile hamburger toggle
"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/what-we-need", label: "What We Need" },
  { href: "/why-we-need", label: "Why We Need" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const rawPathname = usePathname();
  const pathname = rawPathname ?? "";

  return (
    <nav className="bg-[#00209F] sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-white font-heading text-xl font-semibold tracking-wide hover:text-[#FFD100] transition-colors"
          >
            Rendez-vous: Haiti
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium tracking-wide rounded-md transition-colors ${
                  pathname === link.href
                    ? "text-[#FFD100] bg-[#D21034]/30 border-b-2 border-[#FFD100]"
                    : "text-blue-100 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 rounded hover:bg-white/10 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-blue-800 bg-[#001A80]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block px-5 py-3.5 text-sm font-medium transition-colors border-b border-blue-800/50 ${
                pathname === link.href
                  ? "text-[#FFD100] bg-[#D21034]/30"
                  : "text-blue-100 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
