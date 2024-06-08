import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { logo } from "../assets";
import { navbar } from "./constants";
import LanguageSelector from "./utils/LanguageSelector";
import { useTranslation } from "react-i18next";
import MenuSvg from "../assets/svg/MenuSvg";
import Button from "./utils/Button";

const Navbar: React.FC = () => {
  const pathname = useLocation();
  const { t } = useTranslation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const handleOpenNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90  backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 py-2 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="flex w-[12rem] mr-6 xl:mr-8" href="/">
          <img src={logo} alt="Logo" width={60} height={60} />
          <span
            className={`px-3 relative z-2 flex flex-col text-xl items-center justify-center lg:flex-row lg:text-4xl font-code lg:text-n-1/80`}
          >
            QAPSEC
          </span>
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navbar.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-lg uppercase text-n-1 transition-colors duration-300  hover:text-color-7  ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/60"
                } lg:leading-5 xl:px-12 `}
              >
                {t(item.title)}
              </a>
            ))}
          </div>
        </nav>
        <div className="flex items-center ml-auto lg:ml-0">
          <LanguageSelector />
        </div>
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={handleOpenNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
