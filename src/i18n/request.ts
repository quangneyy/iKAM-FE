import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './config';

export { locales, defaultLocale };

export default getRequestConfig(async ({ locale }) => {
    console.log('=== REQUEST CONFIG DEBUG ===');
    console.log('Received locale:', locale);
    console.log('Available locales:', locales);
    console.log('Default locale:', defaultLocale);
    console.log('===========================');

    // If no locale provided, use default
    const validLocale = locale && locales.includes(locale as any) ? locale : defaultLocale;
    console.log('Using locale:', validLocale);

    try {
        const messages = (await import(`../translations/${validLocale}.json`)).default;
        console.log('✅ Messages loaded successfully for locale:', validLocale);
        return {
            locale: validLocale,
            messages
        };
    } catch (error) {
        console.log('❌ Error loading messages:', error);
        // Return empty messages instead of notFound to allow useTranslations to work
        return {
            locale: validLocale,
            messages: {}
        };
    }
});