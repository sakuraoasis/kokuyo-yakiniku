"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { nav, footer } from "@/lib/i18n";
import { LANGS } from "@/lib/i18n";

const links = [
  { href: "/menu",   label: nav.menu },
  { href: "/about",  label: nav.about },
  { href: "/access", label: nav.access },
];

export default function Navbar() {
  const { lang, setLang, tr } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const currentLang = LANGS.find((l) => l.code === lang);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-coal-900/95 backdrop-blur-sm border-b border-coal-700/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-xl text-cream-100 tracking-wide hover:text-ember-300 transition-colors duration-300"
        >
          黒耀 <span className="text-ember-400">Kokuyō</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[11px] tracking-[0.18em] uppercase text-ash-600 hover:text-cream-200 transition-colors duration-300"
            >
              {tr(l.label)}
            </Link>
          ))}

          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="text-[11px] tracking-[0.18em] uppercase text-ember-400 hover:text-ember-300 transition-colors duration-300 flex items-center gap-1.5"
            >
              {currentLang?.label}
              <span className="text-[8px] text-ash-600">{langOpen ? "▲" : "▼"}</span>
            </button>
            {langOpen && (
              <div className="absolute end-0 top-full mt-2 w-44 bg-coal-800 border border-coal-600 shadow-xl shadow-black/50 py-1">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setLangOpen(false); }}
                    className={`w-full text-start px-4 py-2.5 text-[11px] tracking-wide transition-colors duration-200 ${
                      l.code === lang
                        ? "text-ember-300 bg-coal-700"
                        : "text-ash-600 hover:text-cream-200 hover:bg-coal-700"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Halal mark */}
          <span className="text-[9px] tracking-[0.18em] uppercase text-sage-400 hidden lg:block">
            {tr(nav.halal)}
          </span>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-cream-200 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-cream-200 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-cream-200 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-coal-800 border-t border-coal-700 px-6 py-6 space-y-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block text-[11px] tracking-[0.2em] uppercase text-ash-600 hover:text-cream-200 transition-colors py-2"
            >
              {tr(l.label)}
            </Link>
          ))}

          <div className="border-t border-coal-700 pt-4">
            <p className="text-[9px] tracking-[0.18em] uppercase text-ash-400 mb-3">Language</p>
            <div className="flex flex-wrap gap-2">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setMenuOpen(false); }}
                  className={`px-3 py-1.5 text-[10px] tracking-wide border transition-colors duration-200 ${
                    l.code === lang
                      ? "border-ember-500 text-ember-300 bg-ember-900/30"
                      : "border-coal-600 text-ash-600 hover:text-cream-200 hover:border-ash-500"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-coal-700 pt-4">
            <p className="text-[9px] tracking-[0.18em] uppercase text-sage-400">{tr(nav.halal)}</p>
          </div>
        </div>
      )}
    </header>
  );
}
