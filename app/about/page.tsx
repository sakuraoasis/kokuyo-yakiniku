"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";
import { aboutPage } from "@/lib/i18n";

export default function AboutPage() {
  const { tr } = useLanguage();

  return (
    <div className="pt-32 pb-28 bg-coal-900">

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-20 text-center">
        <ScrollReveal>
          <p className="text-[10px] tracking-[0.3em] uppercase text-ember-500 mb-4">{tr(aboutPage.tag)}</p>
          <h1 className="font-serif text-5xl md:text-6xl text-cream-100 mb-5">{tr(aboutPage.heading)}</h1>
          <div className="ember-rule mx-auto" />
        </ScrollReveal>
      </div>

      {/* Story */}
      <section className="max-w-6xl mx-auto px-6 mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80"
                alt="Kokuyō Yakiniku dining interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-coal-900/20" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-ember-500 mb-5">{tr(aboutPage.storyTag)}</p>
              <h2 className="font-serif text-4xl text-cream-100 mb-6 leading-snug">{tr(aboutPage.storyHead)}</h2>
              <div className="space-y-4 text-ash-600 text-sm leading-relaxed">
                <p>{tr(aboutPage.storyP1)}</p>
                <p>{tr(aboutPage.storyP2)}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Halal sourcing — dark panel */}
      <section className="bg-coal-950 py-24 px-6 mb-28 border-y border-coal-700/40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-ember-500 mb-5">{tr(aboutPage.halalTag)}</p>
              <h2 className="font-serif text-4xl text-cream-100 mb-6 leading-snug">{tr(aboutPage.halalHead)}</h2>
              <div className="space-y-4 text-ash-600 text-sm leading-relaxed">
                <p>{tr(aboutPage.halalP1)}</p>
                <p>{tr(aboutPage.halalP2)}</p>
              </div>
              <div className="mt-8">
                <span className="halal-mark">Halal Certified · Independent Body</span>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80"
                alt="Fresh premium ingredients"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-coal-900/30" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl text-cream-100">
              {tr(aboutPage.val1t)} · {tr(aboutPage.val2t)} · {tr(aboutPage.val3t)}
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: tr(aboutPage.val1t), body: tr(aboutPage.val1b) },
            { title: tr(aboutPage.val2t), body: tr(aboutPage.val2b) },
            { title: tr(aboutPage.val3t), body: tr(aboutPage.val3b) },
          ].map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 110}>
              <div className="border-t-2 border-ember-600 pt-7">
                <h3 className="font-serif text-2xl text-cream-100 mb-4">{v.title}</h3>
                <p className="text-xs text-ash-600 leading-relaxed">{v.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
