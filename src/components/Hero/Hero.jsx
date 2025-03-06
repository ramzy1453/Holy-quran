import React from "react";
import { useEffect, useState } from "react";
import "./Hero.css";
import quran from "./quran.png";
import icon from "./icon.png";
export default function Hero() {
  const [surah, setsurah] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch("http://api.alquran.cloud/v1/surah")
      .then((response) => response.json())
      .then((data) => {
        setsurah(data.data);
        setloading(false);
      });
  }, []);
  if (loading) {
    return <h1>LOADING</h1>;
  } else {
    return (
      <div className="hero">
        <img src={quran} alt="icon" width={320} height={320} />
        <input type="search" placeholder="What do you want read ?" />

        <div className="surah-container">
          {surah.map((surates) => (
            <div className="surah">
              <div className="left">
                <div className="number-of-surah">
                  <h1>{surates.number}</h1>
                  <img src={icon} width={62} height={62} />
                </div>
                <h2>{surates.name}</h2>
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
}
