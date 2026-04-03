"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { nav, footer, accessPage } from "@/lib/i18n";

const navLinks = [
  { href: "/menu",   label: nav.menu },
  { href: "/about",  label: nav.about },
  { href: "/access", label: nav.access },
];

export default function Footer() {
  const { tr } = useLanguage();

  return (
    <footer className="bg-coal-950 border-t border-coal-700/40">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <p className="font-serif text-2xl text-cream-100 mb-3">
              黒耀 <span className="text-ember-400">Kokuyō</span>
            </p>
            <p className="text-xs text-ash-500 leading-relaxed mb-4 max-w-xs">
              {tr(footer.tagline)}
            </p>
            <span className="halal-mark">{tr(footer.halalLine)}</span>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[9px] tracking-[0.25em] uppercase text-ash-400 mb-5">
              {tr(footer.navLabel)}
            </p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-xs text-ash-500 hover:text-cream-200 transition-colors duration-300 tracking-wide"
                  >
                    {tr(l.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <p className="text-[9px] tracking-[0.25em] uppercase text-ash-400 mb-5">
              {tr(footer.infoLabel)}
            </p>
            <address className="not-italic space-y-2 text-xs text-ash-500 leading-relaxed">
              <p className="text-ash-400">{tr(accessPage.addr1)}</p>
              <p className="text-ash-400">{tr(accessPage.addr2)}</p>
              <p className="mt-3 text-ash-600 text-[11px]">17:00 – 23:00</p>
              <p className="text-ash-600 text-[11px]">{tr(accessPage.closedLabel)}: {tr(accessPage.closedVal)}</p>
              <a
                href="tel:0364275580"
                className="block mt-2 text-ash-500 hover:text-ember-300 transition-colors duration-300"
              >
                03-6427-5580
              </a>
            </address>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-coal-700/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[10px] text-ash-600">
            &copy; {new Date().getFullYear()} 黒耀 Kokuyō Yakiniku. {tr(footer.rights)}
          </p>
        </div>
      </div>
    </footer>
  );
}
