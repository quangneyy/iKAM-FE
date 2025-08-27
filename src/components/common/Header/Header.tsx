"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations, useLocale } from 'next-intl';
import styles from './Header.module.scss';

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.header_main}>
        <div className={styles.header__container}>
          <div className="logo">
            <Link href={`/${locale}`} className="logo">
              <img
                src="/assets/img/logo/logo.jpg"
                alt="Hioki Logo"
                width={150}
                height={50}
              />
            </Link>
          </div>

          <div className={styles.header_content_right}>
            <div className={styles.header_top}>
              <div className={styles.header_top__container}>
                <ul className={styles.header_utility}>
                  <li className={styles.my}>
                    <Link href={`/${locale}/login`}><span>{t('login')}</span></Link>
                  </li>
                  <li className={styles.contact}>
                    <Link href={`/${locale}/contact`}><span>{t('contactUs')}</span></Link>
                  </li>
                </ul>
              </div>
            </div>

            <nav className={styles.nav}>
              <ul>
                <li><Link href={`/${locale}/products`}>{t('products')}</Link></li>
                <li>
                  <Link href={`/${locale}/industries-solutions`}>{t('industriesSolutions')}</Link>
                </li>
                <li><Link href={`/${locale}/learning`}>{t('knowledgeCenter')}</Link></li>
                <li><Link href={`/${locale}/service-support`}>{t('serviceSupport')}</Link></li>
                <li><Link href={`/${locale}/about`}>{t('aboutUs')}</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header >
  );
}
