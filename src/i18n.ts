import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

const isDebugMode = import.meta.env.REACT_APP_DEBUG === "true";
const loadPath = import.meta.env.BASE_URL + "locales/{{lng}}/{{ns}}.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: isDebugMode,
    interpolation: {
      escapeValue: false,
    },
    ns: ["navbar", "home", "about", "services", "case-study", "contact"],
    backend: {
      loadPath: loadPath,
    },
  });

export default i18n;
