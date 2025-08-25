import { SimpleI18nProvider } from "../../components/SimpleI18nProvider";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== 'en') {
    return null;
  }

  return (
    <SimpleI18nProvider locale="en">
      {children}
    </SimpleI18nProvider>
  );
}
