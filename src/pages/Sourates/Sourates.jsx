import { useState, useEffect } from "react";
import "./Sourates.css";
export default function Sourates() {
  const [surah, setsurah] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/surah/5/ar.alafasy")
      .then((response) => response.json())
      .then((data) => {
        setsurah(data.data);
        setloading(false);
      });
  }, []);

  console.log(surah);
  if (loading) return <div>loading...</div>;

  return (
    <div className="sourate" dir="rtl">
      <h1>- {surah.name} - </h1>
      <div className="ayat-container">
        {surah.ayahs.map((aya) => (
          <div className="aya">
            <img
              className="ayat-png"
              src={`https://cdn.islamic.network/quran/images/${surah.number}_${aya.numberInSurah}.png`}
              alt="ayat"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
