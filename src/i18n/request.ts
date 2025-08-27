import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './config';

export { locales, defaultLocale };

export default getRequestConfig(async ({ locale }) => {
    // Since middleware isn't passing locale correctly, we need to extract it
    let finalLocale = locale;

    if (!finalLocale || !locales.includes(finalLocale as any)) {
        // Try to get locale from request headers
        // This is a workaround for the middleware issue

        // For now, let's use a simple approach - check if we can get it from the request
        // Since this is server-side, we'll need to handle it differently
        finalLocale = defaultLocale;
    }

    try {
        const messages = (await import(`../translations/${finalLocale}.json`)).default;
        return {
            locale: finalLocale,
            messages
        };
    } catch (error) {
        console.log('Error loading messages:', error);
        notFound();
    }
});