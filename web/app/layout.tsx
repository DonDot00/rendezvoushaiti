// Next.js 16.2.6 | Tailwind CSS v4 | React 19
// Root layout — registers fonts, sets metadata, wraps all pages in Navbar/Footer/ScrollProgress
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rendez-vous: Haiti",
  description:
    "Rendez-Vous: Haiti is a sustainability initiative founded in the wake of the 2010 earthquake. Solidarity in Action. Solidarity that works.",
  keywords: "haiti, rendezvous haiti, non-profit, solidarity, orphanage, foyer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-stone-50 text-stone-800 antialiased">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
