import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Nav: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20">
          <Link to="Home">
            <li className="navbar-onglet-portable">{t("home")}</li>
          </Link>
          <Link spy={true} smooth={true} to="Projects">
            <li className="navbar-onglet-portable">{t("projects")}</li>
          </Link>
          <Link spy={true} smooth={true} to="Services">
            <li className="navbar-onglet-portable">{t("services")}</li>
          </Link>
          <Link spy={true} smooth={true} to="About">
            <li className="navbar-onglet-portable">{t("about")}</li>
          </Link>
          <Link spy={true} smooth={true} to="Contact">
            <li className="navbar-onglet-portable">{t("contact")}</li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-3xl font-bold">{t("site")}</span>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="Home">
                <li className="navbar-onglet">{t("home")}</li>
              </Link>
              <Link spy={true} smooth={true} to="Projects">
                <li className="navbar-onglet">{t("projects")}</li>
              </Link>
              <Link spy={true} smooth={true} to="Services">
                <li className="navbar-onglet">{t("services")}</li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className="navbar-onglet">{t("about")}</li>
              </Link>
              <Link spy={true} smooth={true} to="Contact">
                <li className="navbar-onglet">{t("contact")}</li>
              </Link>
              <Link spy={true} smooth={true} to="/">
                <li>
                  <select
                    onChange={changeLanguage}
                    defaultValue={i18n.language}
                    className="bg-transparent navbar-onglet"
                  >
                    <option className="bg-slate-950 text-white" value="en">
                      English
                    </option>
                    <option className="bg-slate-950 text-white" value="fr">
                      Français
                    </option>
                  </select>
                </li>
              </Link>
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

export default Nav;
