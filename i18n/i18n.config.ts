import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './translations/en.json';
import kr from './translations/kr.json';
import cn from './translations/cn.json';
import jp from './translations/jp.json';

const resources = {
  en: {
    translation: en,
  },
  kr: {
    translation: kr,
  },
  cn: {
    translation: cn,
  },
  jp: {
    translation: jp,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'kr', // 디폴트 언어
  resources,
  fallbackLng: 'en', // 대체 언어
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
