import React from "react";
import { useTranslation } from "react-i18next";
import { flag_fr, flag_en } from "../../assets";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex items-center space-x-4">
      <img
        src={flag_fr}
        alt="Français"
        className="w-8 h-8 cursor-pointer"
        onClick={() => changeLanguage("fr")}
      />
      <img
        src={flag_en}
        alt="English"
        className="w-8 h-8 cursor-pointer"
        onClick={() => changeLanguage("en")}
      />
    </div>
  );
};
export default LanguageSelector;
