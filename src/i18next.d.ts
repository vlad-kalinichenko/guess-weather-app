import 'i18next';
import commonEN from '@/assets/i18n/en/common';
import { NAMESPACE } from '@/constants';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
    resources: {
      [NAMESPACE.COMMON]: typeof commonEN;
    };
  }
}
