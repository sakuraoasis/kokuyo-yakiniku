import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const noto = Noto_Sans_JP({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "黒耀 Kokuyō Yakiniku — Halal Certified, Shibuya Tokyo",
  description:
    "Premium halal yakiniku restaurant in Shibuya, Tokyo. A5 wagyu, binchōtan charcoal, independently certified halal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${noto.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1"><PageTransition>{children}</PageTransition></main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
