'use client';

import { SimpleI18nProvider } from "../components/i18n/SimpleI18nProvider";
import HomePage from "./[locale]/page";

export default function RootPage() {
  // Mặc định locale là 'vi' khi ở root
  return (
    <SimpleI18nProvider locale="vi">
      <HomePage />
    </SimpleI18nProvider>
  );
}
