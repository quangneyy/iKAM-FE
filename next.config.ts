import createNextIntlPlugin from 'next-intl/plugin';
const path = require("path");

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")], // thư mục chứa variables.scss
    prependData: `
             @import "@/styles/variables"; 
         @import "@/styles/mixins";
        `,
  },
};
export default withNextIntl(nextConfig);
