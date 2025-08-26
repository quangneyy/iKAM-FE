'use client';

import { useI18n } from "../../components/i18n/SimpleI18nProvider";
import { LanguageSwitcher } from "../../components/i18n/LanguageSwitcher";
import styles from "./page.module.scss";

export default function HomePage() {
  const { t } = useI18n();

  return (
    <div className={styles.container}>
      {/* <LanguageSwitcher /> */}
      <main className={styles.main}>
        <ol>
          <li>
            <a href="https://nextjs.org/docs">{t('language')}</a> {t('getStarted')}
          </li>
          <li>
            <a href="https://nextjs.org/learn">{t('learn')}</a> - {t('examples')}
          </li>
          <li>
            <a href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app">
              Templates
            </a> - {t('examples')}
          </li>
          <li>
            <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app">
              {t('deployNow')}
            </a> - {t('saveAndSee')}
          </li>
        </ol>
      </main>
    </div>
  );
}
