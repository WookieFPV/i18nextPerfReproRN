import 'intl-pluralrules';
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {resources} from './resources';

i18next.use(initReactI18next).init({
  debug: false,
  resources,
  fallbackLng: 'en',
  lng: 'en',
  defaultNS: 'translation',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export {i18next};
