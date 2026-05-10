'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Lang } from '@/translations';

type Translations = typeof translations.en | typeof translations.fr;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'fr',
  setLang: () => { },
  t: translations.en,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('fr');
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
