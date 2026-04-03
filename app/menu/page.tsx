"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";
import { menuPage, menuItems } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";

type MenuItem = {
  name: Record<Lang, string>;
  desc: Record<Lang, string>;
  price: string;
  course: boolean;
};

function ItemRow({ item, lang, perPerson }: { item: MenuItem; lang: Lang; perPerson: string }) {
  const primary = item.name[lang];
  const secondary = lang !== "en" ? item.name.en : item.name.ja;
  const description = item.desc[lang];

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-1 md:gap-10 group py-5 border-b border-coal-700/50 last:border-0">
      <div>
        <div className="flex items-baseline flex-wrap gap-x-3 gap-y-0.5 mb-1.5">
          <h3 className="font-serif text-xl text-cream-100 group-hover:text-ember-300 transition-colors duration-300">
            {primary}
          </h3>
          <span className="text-[10px] text-ash-500 tracking-wide">{secondary}</span>
        </div>
        {description && (
          <p className="text-xs text-ash-500 leading-relaxed">{description}</p>
        )}
      </div>
      <div className="md:text-end pt-0.5">
        <span className="text-sm text-ember-400 font-medium whitespace-nowrap">
          {item.price}
          {item.course && <span className="text-[10px] text-ash-500 ms-1">/ {perPerson}</span>}
        </span>
      </div>
    </div>
  );
}

export default function MenuPage() {
  const { lang, tr } = useLanguage();

  const sections = [
    { label: tr(menuPage.secCourses), items: menuItems.courses },
    { label: tr(menuPage.secCuts),    items: menuItems.cuts },
    { label: tr(menuPage.secSides),   items: menuItems.sides },
    { label: tr(menuPage.secDrinks),  items: menuItems.drinks },
  ];

  return (
    <div className="pt-32 pb-28 bg-coal-900">

      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 mb-16 text-center">
        <ScrollReveal>
          <p className="text-[10px] tracking-[0.3em] uppercase text-ember-500 mb-4">{tr(menuPage.tag)}</p>
          <h1 className="font-serif text-5xl md:text-6xl text-cream-100 mb-5">{tr(menuPage.heading)}</h1>
          <div className="ember-rule mx-auto mb-7" />
          <p className="text-xs text-ash-600 max-w-md mx-auto leading-relaxed mb-8">
            {tr(menuPage.intro)}
          </p>
          <div className="flex justify-center">
            <span className="halal-mark">{tr(menuPage.halalMark)}</span>
          </div>
        </ScrollReveal>
      </div>

      {/* Sections */}
      <div className="max-w-4xl mx-auto px-6 space-y-20">
        {sections.map((sec) => (
          <ScrollReveal key={sec.label}>
            <section>
              <div className="mb-2 pb-4 border-b border-coal-600/60">
                <h2 className="font-serif text-3xl text-cream-100">{sec.label}</h2>
              </div>
              <div>
                {sec.items.map((item) => (
                  <ItemRow
                    key={item.name.en}
                    item={item as MenuItem}
                    lang={lang}
                    perPerson={tr(menuPage.perPerson)}
                  />
                ))}
              </div>
            </section>
          </ScrollReveal>
        ))}
      </div>

      {/* Footer note */}
      <ScrollReveal>
        <div className="max-w-4xl mx-auto px-6 mt-20 pt-10 border-t border-coal-700/40 text-center">
          <p className="text-[11px] text-ash-500 leading-loose">{tr(menuPage.footnote)}</p>
        </div>
      </ScrollReveal>
    </div>
  );
}
