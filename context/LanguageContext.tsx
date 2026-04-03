"use client";

import { createContext, useContext, useState } from "react";
import { type Lang, LANGS } from "@/lib/i18n";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: (key: Record<Lang, string>) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  tr: (key) => key.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  function setLang(l: Lang) {
    setLangState(l);
    const dir = LANGS.find((x) => x.code === l)?.dir ?? "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = l;
  }

  function tr(key: Record<Lang, string>): string {
    return key[lang] ?? key.en;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, tr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
