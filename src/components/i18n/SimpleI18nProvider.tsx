'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { viCommon, enCommon } from '../../translations';

type Locale = 'vi' | 'en';
type Translations = typeof viCommon;

interface I18nContextType {
  locale: Locale;
  t: (key: keyof Translations) => string;
  changeLanguage: (newLocale: Locale) => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

const translations = {
  vi: viCommon,
  en: enCommon,
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

interface SimpleI18nProviderProps {
  children: ReactNode;
  locale?: Locale;
}

export const SimpleI18nProvider = ({ children, locale: initialLocale = 'vi' }: SimpleI18nProviderProps) => {
  const pathname = usePathname();
  const [locale, setLocale] = useState<Locale>('vi'); // Always start with 'vi' to avoid hydration mismatchquangquagquangneuquangnwqquagq
  const [mounted, setMounted] = useState(false);

  // Detect locale from URL pathname
  useEffect(() => {
    setMounted(true);

    // Check if pathname starts with /en
    if (pathname?.startsWith('/en')) {
      setLocale('en');
    } else {
      setLocale('vi');
    }
  }, [pathname, initialLocale]);

  const t = (key: keyof Translations): string => {
    return translations[locale][key] || key;
  };

  const changeLanguage = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <I18nContext.Provider value={{ locale, t, changeLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};
