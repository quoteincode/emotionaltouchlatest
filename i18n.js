import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'react-native-localize';  // Detect user's device locale
import en from './src/locales/en';  // English translations
import hi from './src/locales/hi';  // French translations
import fr from './src/locales/fr';  // French translations

const deviceLocale = Localization.getLocales()[0].languageTag;  // Get the device's locale

i18n
  .use(initReactI18next)  // Initializes i18next with react-i18next
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      hi: { translation: hi },
    },
    lng: deviceLocale,  // Set default language based on device locale
    fallbackLng: 'en',  // Fallback language if the user's language is not available
    interpolation: {
      escapeValue: false,  // React already escapes variables
    },
  });

export default i18n;
