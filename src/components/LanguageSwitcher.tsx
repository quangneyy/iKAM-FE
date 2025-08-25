'use client';

import { useI18n } from './SimpleI18nProvider';
import { useRouter, usePathname } from 'next/navigation';

export const LanguageSwitcher = () => {
    const { t, changeLanguage, locale } = useI18n();
    const router = useRouter();
    const pathname = usePathname();

    const handleLanguageChange = (newLocale: 'vi' | 'en') => {
        if (newLocale === 'vi') {
            // Switch to Vietnamese - go to root
            router.push('/vi');
        } else {
            // Switch to English - go to /en
            router.push('/en');
        }

        // Update the language in context
        changeLanguage(newLocale);
    };

    return (
        <div style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 1000,
            display: 'flex',
            gap: '10px',
            alignItems: 'center'
        }}>
            <span style={{ fontSize: '14px', color: '#666' }}>
                {t('language')}:
            </span>
            <button
                onClick={() => handleLanguageChange('vi')}
                style={{
                    padding: '8px 12px',
                    border: locale === 'vi' ? '2px solid #0070f3' : '1px solid #ccc',
                    borderRadius: '4px',
                    background: locale === 'vi' ? '#0070f3' : 'white',
                    color: locale === 'vi' ? 'white' : '#333',
                    cursor: 'pointer',
                    fontSize: '12px'
                }}
            >
                VI
            </button>
            <button
                onClick={() => handleLanguageChange('en')}
                style={{
                    padding: '8px 12px',
                    border: locale === 'en' ? '2px solid #0070f3' : '1px solid #ccc',
                    borderRadius: '4px',
                    background: locale === 'en' ? '#0070f3' : 'white',
                    color: locale === 'en' ? 'white' : '#333',
                    cursor: 'pointer',
                    fontSize: '12px'
                }}
            >
                EN
            </button>
        </div>
    );
};
