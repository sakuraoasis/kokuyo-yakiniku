"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";
import { home, menuItems, nav } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";

// Show 3 featured cuts on the homepage
const featuredCuts = menuItems.cuts.slice(0, 3);

export default function HomePage() {
  const { lang, tr } = useLanguage();

  return (
    <div className="bg-coal-900">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1800&q=80"
            alt="Meat grilling over binchōtan charcoal"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-coal-900 via-coal-900/60 to-coal-900/20" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 w-full">
          <div className="max-w-xl">
            <p className="text-[10px] tracking-[0.35em] uppercase text-ember-400 mb-5">
              {tr(home.heroTag)}
            </p>
            <h1 className="font-serif text-6xl md:text-8xl text-cream-50 leading-none mb-6">
              {tr(home.heroName)}
            </h1>
            <div className="ember-rule mb-6" />
            <p className="text-sm text-ash-700 leading-relaxed mb-10 max-w-sm">
              {tr(home.heroSub)}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="px-7 py-3 bg-ember-600 text-cream-50 text-[11px] tracking-[0.18em] uppercase hover:bg-ember-500 transition-colors duration-300"
              >
                {tr(home.heroCta1)}
              </Link>
              <Link
                href="/access"
                className="px-7 py-3 border border-cream-300/30 text-cream-300 text-[11px] tracking-[0.18em] uppercase hover:border-cream-200/60 hover:text-cream-100 transition-colors duration-300"
              >
                {tr(nav.access)}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Info strip ───────────────────────────────────── */}
      <div className="bg-coal-800 border-y border-coal-700/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-coal-700/60">
            {[
              { label: tr(home.strip1l), value: tr(home.strip1v) },
              { label: tr(home.strip2l), value: tr(home.strip2v) },
              { label: tr(home.strip3l), value: tr(home.strip3v) },
              { label: tr(home.strip4l), value: tr(home.strip4v) },
            ].map((item) => (
              <div key={item.label} className="px-6 py-5 first:ps-0 last:pe-0">
                <p className="text-[9px] tracking-[0.2em] uppercase text-ash-500 mb-1">{item.label}</p>
                <p className="text-xs text-cream-200">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Halal commitment ─────────────────────────────── */}
      <section className="py-28 px-6 bg-coal-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <p className="text-[10px] tracking-[0.28em] uppercase text-ember-500 mb-5">
                {tr(home.halalTag)}
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-cream-100 leading-tight mb-6">
                {tr(home.halalHead)}
              </h2>
              <p className="text-sm text-ash-600 leading-relaxed mb-8 max-w-md">
                {tr(home.halalBody)}
              </p>
              <span className="halal-mark">{tr(home.halalSub)}</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80"
                alt="Binchōtan charcoal grill"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-coal-900/30" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Featured cuts ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-coal-800">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-14">
              <p className="text-[10px] tracking-[0.28em] uppercase text-ember-500 mb-4">
                {tr(home.cutsTag)}
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-cream-100">{tr(home.cutsHead)}</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredCuts.map((cut, i) => (
              <ScrollReveal key={cut.name.en} delay={i * 110}>
                <div className="border-t border-coal-600/60 pt-6">
                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className="font-serif text-2xl text-cream-100">{cut.name[lang as Lang]}</h3>
                    <span className="text-sm text-ember-400 font-medium">{cut.price}</span>
                  </div>
                  <p className="text-[10px] tracking-wide text-ash-500 mb-2">{cut.name.en !== cut.name[lang as Lang] ? cut.name.en : cut.name.ja}</p>
                  <p className="text-xs text-ash-600 leading-relaxed">{cut.desc[lang as Lang]}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <Link
              href="/menu"
              className="inline-block text-[10px] tracking-[0.22em] uppercase text-ember-400 border-b border-ember-700 pb-0.5 hover:text-ember-300 hover:border-ember-500 transition-colors duration-300"
            >
              {tr(home.cutsCta)}
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Courses CTA ───────────────────────────────────── */}
      <section className="py-28 px-6 bg-coal-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=80"
                alt="Premium yakiniku cut on the grill"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-coal-900/20" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <div>
              <p className="text-[10px] tracking-[0.28em] uppercase text-ember-500 mb-5">
                {tr(home.courseTag)}
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-cream-100 leading-tight mb-6">
                {tr(home.courseHead)}
              </h2>
              <p className="text-sm text-ash-600 leading-relaxed mb-8 max-w-md">
                {tr(home.courseBody)}
              </p>
              <Link
                href="/menu"
                className="inline-block px-7 py-3 border border-ember-600/60 text-ember-300 text-[11px] tracking-[0.18em] uppercase hover:bg-ember-900/30 hover:border-ember-500 transition-colors duration-300"
              >
                {tr(home.courseCta)}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Access CTA ────────────────────────────────────── */}
      <section className="py-20 px-6 bg-coal-800 border-t border-coal-700/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <ScrollReveal>
            <div>
              <h2 className="font-serif text-3xl text-cream-100 mb-2">{tr(home.accessHead)}</h2>
              <p className="text-xs text-ash-600">{tr(home.accessAddr)}</p>
              <p className="text-xs text-ash-500 mt-1">{tr(home.accessWalk)}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Link
              href="/access"
              className="px-7 py-3 bg-coal-700 border border-coal-600 text-cream-200 text-[11px] tracking-[0.18em] uppercase hover:bg-coal-600 transition-colors duration-300 whitespace-nowrap"
            >
              {tr(home.accessCta)}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
