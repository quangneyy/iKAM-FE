export function generateStaticParams() {
  return [{ locale: 'vi' }, { locale: 'en' }];
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <div>
      <h2>Locale: {params.locale}</h2>
      {children}
    </div>
  );
}