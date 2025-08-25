"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { i18n } from "../../../../i18n-config";
import styles from './Header.module.scss';

export default function Header() {
  const { locales, defaultLocale } = i18n;
  const router = useRouter();
  const pathname = usePathname();
  const pathLocale = pathname.split("/")[1];


  // Map Language Show
  const localeLabels: Record<string, string> = {
    vi: "🇻🇳 Vietnamese",
    en: "🇬🇧 English",
    fr: "🇫🇷 French",
  };

  const currentLocale = i18n.locales.includes(pathLocale) ? pathLocale : defaultLocale;

  const handleChange = (locale: string) => {
    if (locale === defaultLocale) {
      router.push("/");
    } else {
      router.push(`/${locale}`);
    }
  };

  return (
    <header className={styles.header}>
      {/* <div dir="ltr" className="languages">
        {[...locales].sort().map((locale) => (
          <Link
            key={locale}
            href={locale === defaultLocale ? "/" : `/${locale}`}
          >
            {locale}
          </Link>
        ))}
      </div> */}

      <div className={styles.header_main}>
        <div className={styles.header__container}>
          <div className="logo">
            <Link href="/" className="logo">
              <img
                src="https://www.hioki.com/themes/hioki/common/images/logo-01.png"
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
                  <li className={styles.lang}>
                    <div className={styles.language_select}>
                      <select
                        onChange={(e) => handleChange(e.target.value)}
                        value={currentLocale}
                      >
                        {[...locales].sort().map((locale) => (
                          <option key={locale} value={locale}>
                            {localeLabels[locale] || locale}
                          </option>
                        ))}
                      </select>
                    </div>
                  </li>
                  <li className={styles.my}>
                    <a href="/global/support/myhioki/login"><span>Login</span></a>
                  </li>
                  <li className={styles.contact}>
                    <a href="/global/support/myhioki/login"><span>Contact Us</span></a>
                  </li>
                </ul>
              </div>
            </div>

            <nav className={styles.nav}>
              <ul>
                <li><a href="/products">Products</a></li>

                <li>
                  <a href="/industries-solutions">Industries & Solutions</a>
                </li>
                <li><a href="/learning">Knowledge Center</a></li>
                <li><a href="#">Service & Support</a></li>
                <li><a href="/about">About Us</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header >
  );
}
