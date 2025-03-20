import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import spTranslation from "./locales/sp.json";
import frTranslation from "./locales/fr.json";
import arTranslation from "./locales/ar.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
    en: { translation: enTranslation },
    sp: { translation: spTranslation },
    fr: { translation: frTranslation },
    ar: { translation: arTranslation }
    },
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;