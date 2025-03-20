import React from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import { useStore } from "../../lib/store";
import Slidebar from "../Sidebar/Sidebar";
import i18n from "../../i18n"; // Import du fichier i18n

export default function Navbar({ setLang }) {
  const { t } = useTranslation();
  const setDarkMode = useStore((state) => state.setDarkMode);
  const darkMode = useStore((state) => state.darkMode);

  // Fonction pour changer de langue
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    setLang(event.target.value);
  };

  return (
    <nav>
      <div className="left">
        <Slidebar />
        <img
          src="https://holy-quran-website.netlify.app/static/media/quran.2b985d1ab2b68d0a547d.png"
          width={48}
          height={48}
          alt={t("nobleQuranImage")}
        />
        <h2>{t("nobleQuran")}</h2>
      </div>

      <select
        onChange={changeLanguage}
        defaultValue={i18n.language}
        className="language-select"
      >
        <option value="fr">🇫🇷 Français</option>
        <option value="en">🇬🇧 English</option>
        <option value="ar">🇸🇦 العربية</option>
      </select>

      <div onClick={() => setDarkMode(!darkMode)} className="right">
        {darkMode ? (
          <svg
            width={48}
            height={48}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="white"
            width={48}
            height={48}
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
        )}
      </div>
    </nav>
  );
}
