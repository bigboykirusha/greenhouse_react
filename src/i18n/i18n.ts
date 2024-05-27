import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../locales/en.json';
import translationRU from '../locales/ru.json';

const resources = {
   en: {
      translation: translationEN,
   },
   ru: {
      translation: translationRU,
   },
};

i18n
   .use(initReactI18next)
   .init({
      resources,
      fallbackLng: 'en',
      debug: true,
      interpolation: {
      },
   });

export default i18n;
