import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './config';

export { locales, defaultLocale };

export default getRequestConfig(async ({ locale }) => {
    console.log('=== REQUEST CONFIG DEBUG ===');
    console.log('🌍 Received locale from middleware:', locale);
    console.log('📋 Available locales:', locales);
    console.log('🏠 Default locale:', defaultLocale);
    console.log('===========================');

    // Since middleware isn't passing locale correctly, we need to extract it
    let finalLocale = locale;

    if (!finalLocale || !locales.includes(finalLocale as any)) {
        // Try to get locale from request headers
        // This is a workaround for the middleware issue
        console.log('🔍 Middleware didn\'t provide locale, trying to extract...');

        // For now, let's use a simple approach - check if we can get it from the request
        // Since this is server-side, we'll need to handle it differently
        finalLocale = defaultLocale;
        console.log('🔄 Using default locale as fallback:', finalLocale);
    }

    console.log('✅ Final locale to use:', finalLocale);

    try {
        const messages = (await import(`../translations/${finalLocale}.json`)).default;
        console.log('📚 Messages loaded successfully for locale:', finalLocale);
        return {
            locale: finalLocale,
            messages
        };
    } catch (error) {
        console.log('❌ Error loading messages:', error);
        notFound();
    }
});
