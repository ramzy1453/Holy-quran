import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from 'react-i18next';
import "./Hero.css";
import quranLight from "./quran.png";
import quranDark from "./quranb.png";
import icon from "./icon.png";
import loader from "./loader.gif";
import { useStore } from "../../lib/store";
export default function Hero() {
  const [surah, setsurah] = useState([]);
  const darkMode = useStore((state) => state.darkMode);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  const { t } = useTranslation();
  useEffect(() => {
    fetch("http://api.alquran.cloud/v1/surah")
      .then((response) => response.json())
      .then((data) => {
        setsurah(data.data);
        setloading(false);
      });
  }, []);
  if (loading)
    return (
      <div className="loader">
        <img src={loader} alt={t('loaderAlt')} width={186} height={186} />
      </div>
    );
  return (
    <div className="hero">
      {darkMode === false ? (
        <img src={quranLight} alt={t('quranLightAlt')} width={320} height={320} />
      ) : (
        <img
          className="img-dark"
          src={quranDark}
          alt={t('quranDarkAlt')}
          width={320}
          height={320}
        />
      )}
      <input type="search" placeholder={t('searchPlaceholder')} /> 
      <div className="surah-container">
        {surah.map((surates) => (
          <div
            className="surah"
            onClick={() => {
              navigate(`/Sourate/${surates.number}`);
            }}
          >
            <div className="left">
              <div className="number-of-surah">
                <h1>{surates.number}</h1>
                <img src={icon} width={62} height={62} />
              </div>
              <h2>{surates.englishName}</h2>
            </div>
            <div className="right">
              <p>{surates.numberOfAyahs}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}