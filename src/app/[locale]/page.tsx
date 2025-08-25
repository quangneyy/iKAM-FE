'use client';

import { useI18n } from "../../components/SimpleI18nProvider";
import { LanguageSwitcher } from "../../components/LanguageSwitcher";
import styles from "./page.module.css";

export default function HomePage() {
  const { t } = useI18n();

  return (
    <div className={styles.container}>
      <LanguageSwitcher />
      <main className={styles.main}>
        <ol>
          <li>
            <a href="https://nextjs.org/docs">{t('language')}</a> - Learn about Next.js features and API.
          </li>
          <li>
            <a href="https://nextjs.org/learn">Learn</a> - An interactive Next.js tutorial.
          </li>
          <li>
            <a href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app">
              Templates
            </a> - Explore the Next.js 13 playground.
          </li>
          <li>
            <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app">
              Deploy
            </a> - Instantly deploy your Next.js site to a shareable URL with Vercel.
          </li>
        </ol>
      </main>
    </div>
  );
}
