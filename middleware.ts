import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './src/i18n/config';

console.log('🔧 Next-intl middleware config - locales:', locales, 'defaultLocale:', defaultLocale);

export default createMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'always'
});

export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
