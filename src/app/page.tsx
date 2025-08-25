'use client';

import { SimpleI18nProvider } from "../components/i18n/SimpleI18nProvider";
import HomePage from "./[locale]/page";

export default function RootPage() {
  return (
    <SimpleI18nProvider locale="vi">
      <HomePage />
    </SimpleI18nProvider>
  );
}
