import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { logo } from "../assets";
import LanguageSelector from "./utils/LanguageSelector";

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const content = (
    <>
      <div className="absolute bg-slate-950 lg:hidden block top-16 w-full left-0 right-0 transition">
        <ul className="text-center text-xl p-20">
          <Link to="/">
            <li className="navbar-onglet-portable">{t("home")}</li>
          </Link>
          <Link to="/about">
            <li className="navbar-onglet-portable">{t("about")}</li>
          </Link>
          <Link to="/services">
            <li className="navbar-onglet-portable">{t("services")}</li>
          </Link>
          <Link to="/case-study">
            <li className="navbar-onglet-portable">{t("case-study")}</li>
          </Link>
          <Link to="/contact">
            <li className="navbar-onglet-portable">{t("contact")}</li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <nav>
      <div className="h-10vh flex justify-between z-50  lg:py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-3xl">{t("site")}</span>
        </div>
        <div className="lg:flex md:flex lg: flex-2 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link to="/">
                <li className="navbar-onglet">{t("home")}</li>
              </Link>
              <Link to="/about">
                <li className="navbar-onglet">{t("about")}</li>
              </Link>
              <Link to="/services">
                <li className="navbar-onglet">{t("services")}</li>
              </Link>
              <Link to="/case-study">
                <li className="navbar-onglet">{t("case-study")}</li>
              </Link>
              <Link to="/contact">
                <li className="navbar-onglet">{t("contact")}</li>
              </Link>
              <li>
                <LanguageSelector />
              </li>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
