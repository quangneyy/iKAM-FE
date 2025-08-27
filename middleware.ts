import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './src/i18n/config';

export default createMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'always'
});

export const config = {
    matcher: ['/__disable_mw__']
};
