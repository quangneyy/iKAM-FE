import { SimpleI18nProvider } from "../../components/i18n/SimpleI18nProvider";
import Header from "../../components/common/Header/Header";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const validLocale = locale === 'en' ? 'en' : 'vi';

  return (
    <SimpleI18nProvider locale={validLocale}>
      <Header />
      {children}
    </SimpleI18nProvider>
  );
}