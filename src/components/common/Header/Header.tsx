"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useI18n } from "../../i18n/SimpleI18nProvider";
import styles from './Header.module.scss';

export default function Header() {
  const { t, locale, changeLanguage } = useI18n();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.header_main}>
        <div className={styles.header__container}>
          <div className="logo">
            <Link href="/" className="logo">
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
                    <a href="/global/support/myhioki/login"><span>{t('login')}</span></a>
                  </li>
                  <li className={styles.contact}>
                    <a href="/global/support/myhioki/login"><span>{t('contactUs')}</span></a>
                  </li>
                </ul>
              </div>
            </div>

            <nav className={styles.nav}>
              <ul>
                <li><a href="/products">{t('products')}</a></li>
                <li>
                  <a href="/industries-solutions">{t('industriesSolutions')}</a>
                </li>
                <li><a href="/learning">{t('knowledgeCenter')}</a></li>
                <li><a href="#">{t('serviceSupport')}</a></li>
                <li><a href="/about">{t('aboutUs')}</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header >
  );
}
