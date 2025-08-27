import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './config';

export { locales, defaultLocale };

export default getRequestConfig(async ({ locale }) => {
    if (!locale || !locales.includes(locale as any)) notFound();

    return {
        locale,
        messages: (await import(`../translations/${locale}.json`)).default
    };
});