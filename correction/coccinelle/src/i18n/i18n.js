import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import fr from './translations/fr.json';
import en from './translations/en.json';

const resources = { en, fr }

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: resources,
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });

export default i18n;