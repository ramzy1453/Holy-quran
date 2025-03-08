import { useState, useEffect } from "react";
import "./Sourates.css";
import { useParams } from "react-router";
export default function Sourates() {
  const [surah, setsurah] = useState([]);
  const [Edition, setEdition] = useState([]);
  const [LoadingEdition, setLoadingEdition] = useState(true);
  const [LoadingSurah, setLoadingsurah] = useState(true);
  const [CurrentEdition, setCurrentEdition] = useState("ar.alafasy");
  const params = useParams();
  useEffect(() => {
    fetch(
      `https://api.alquran.cloud/v1/surah/${params.numberSourat}/${CurrentEdition}`
    )
      .then((response) => response.json())
      .then((data) => {
        setsurah(data.data);
        setLoadingsurah(false);
      });
    fetch("https://api.alquran.cloud/v1/edition")
      .then((response) => response.json())
      .then((data) => {
        setEdition(data.data);
        setLoadingEdition(false);
      });
  }, [CurrentEdition]);

  if (LoadingSurah || LoadingEdition) return <div>loading...</div>;

  return (
    <div className="sourate" dir="rtl">
      <h1>- {surah.name} - </h1>
      <select
        onChange={(event) => {
          setCurrentEdition(event.target.value);
        }}
      >
        {Edition.map((edition) => (
          <option value={edition.identifier}> {edition.name}</option>
        ))}
      </select>
      <div className="ayat-container">
        {surah.ayahs.map((aya) => (
          <div className="aya">
            <img
              className="ayat-png"
              src={`https://cdn.islamic.network/quran/images/${surah.number}_${aya.numberInSurah}.png`}
              alt="ayat"
            />
            <p>{aya.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
