import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

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
    const messages = await getMessages();

    return (
      <NextIntlClientProvider messages={messages}>
        <div>
          <h2>Locale: {locale}</h2>
          {children}
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