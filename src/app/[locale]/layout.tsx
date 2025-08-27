import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer/Footer';
import { NextIntlClientProvider } from 'next-intl';

export function generateStaticParams() {
  return [{ locale: 'vi' }, { locale: 'en' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  try {
    const messages = (await import(`../../translations/${locale}.json`)).default;

    return (
      <NextIntlClientProvider messages={messages}>
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </NextIntlClientProvider>
    );
  } catch (error) {
    console.error('Error in LocaleLayout:', error);
    return (
      <div>
        <h2>Error loading locale: {locale}</h2>
        <p>Error: {error instanceof Error ? error.message : 'Unknown error'}</p>
        {children}
      </div>
    );
  }
}