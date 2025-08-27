'use client';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();

  return (
    <div>
      <h1>{t('home')}</h1>
      <p>{t('getStarted')}</p>
      <p>{t('language')}: {t('examples')}</p>
    </div>
  );
}