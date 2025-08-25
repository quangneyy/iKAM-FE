'use client';

import { I18nextProvider } from 'react-i18next';
import { useEffect, useState } from 'react';
import initI18next from '../../i18n';
import type { i18n } from 'i18next';

interface I18nProviderProps {
  children: React.ReactNode;
  locale?: string;
}

export const I18nProvider = ({ children, locale = 'vi' }: I18nProviderProps) => {
  const [instance, setInstance] = useState<i18n | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const i18nInstance = await initI18next(locale);
        setInstance(i18nInstance);
      } catch (error) {
        console.error('Failed to initialize i18n:', error);
      }
    };

    init();
  }, [locale]);

  if (!instance) {
    return <div>Loading i18n...</div>;
  }

  return <I18nextProvider i18n={instance}>{children}</I18nextProvider>;
};