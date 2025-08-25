import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { viCommon, enCommon } from './translations';

const initI18next = async (locale: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .init({
      lng: locale,
      fallbackLng: 'vi',
      ns: ['common'],
      defaultNS: 'common',
      resources: {
        vi: {
          common: viCommon,
        },
        en: {
          common: enCommon,
        },
      },
      interpolation: {
        escapeValue: false,
      },
    });
  return i18nInstance;
};

export default initI18next;
