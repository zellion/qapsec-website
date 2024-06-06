import React from "react";
import FlagSelect from "react-flags-select";
import { useTranslation } from "react-i18next";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (countryCode: string) => {
    const language = countryCode === "FR" ? "fr" : "en";
    i18n.changeLanguage(language);
  };

  return (
    <FlagSelect
      countries={["FR", "GB"]}
      customLabels={{ FR: "Français", GB: "English" }}
      showSelectedLabel={true}
      showOptionLabel={true}
      onSelect={changeLanguage}
      selected={i18n.language === "fr" ? "FR" : "GB"}
      className="text-black"
      selectButtonClassName="text-neutral-300"
    />
  );
};
export default LanguageSelector;
