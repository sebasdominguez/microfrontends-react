import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './src/locales/en.json';
import translationES from './src/locales/es.json';

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

const hotsAppAInstance = i18n.createInstance();

hotsAppAInstance
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: 'en',
  });

export default hotsAppAInstance;
