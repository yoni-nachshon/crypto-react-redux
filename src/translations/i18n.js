import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import TRANSLATIONS_EN from "./en/translation.json";
import TRANSLATIONS_HE from "./he/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    returnEmptyString: false,
    resources: {
      en: {
        translation: TRANSLATIONS_EN
      },
      he: {
        translation: TRANSLATIONS_HE
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

  export { i18n };