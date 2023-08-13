import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonEN from '@/assets/i18n/en/common';
import { NAMESPACE } from '@/constants';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      [NAMESPACE.COMMON]: commonEN,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  defaultNS: NAMESPACE.COMMON,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
