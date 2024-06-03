import React from "react";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <nav className="bg-gray-800 p-4 w-full fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <div className="text-white text-lg font-bold">{t("site")}</div>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-gray-300 hover:text-white">
              {t("home")}
            </a>
          </li>
          <li>
            <a href="/about" className="text-gray-300 hover:text-white">
              {t("about")}
            </a>
          </li>
          <li>
            <a href="/contact" className="text-gray-300 hover:text-white">
              {t("contact")}
            </a>
          </li>

          <li>
            <select
              onChange={changeLanguage}
              defaultValue={i18n.language}
              className="bg-gray-700 text-white py-2 px-4 rounded"
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
