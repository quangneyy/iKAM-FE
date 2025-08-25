'use client';

import { useTranslation } from 'react-i18next';
import { useRouter, usePathname } from 'next/navigation';
import { useParams } from 'next/navigation';

export const useI18n = () => {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const changeLanguage = (locale: string) => {
    // Get current locale from params
    const currentLocale = params.locale as string;

    // Replace the locale in the pathname
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPath);

    // Change the language in i18n instance
    i18n.changeLanguage(locale);
  };

  return {
    t,
    i18n,
    changeLanguage,
    currentLocale: (params.locale as string) || i18n.language,
  };
};
