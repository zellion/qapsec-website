import React from "react";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{t("welcome")}</h1>
      <p className="mb-6">{t("description")}</p>
      <div className="flex space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => changeLanguage("en")}
        >
          English
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => changeLanguage("fr")}
        >
          Français
        </button>
      </div>
    </div>
  );
};

export default Home;
