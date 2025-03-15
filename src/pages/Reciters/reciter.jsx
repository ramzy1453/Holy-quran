import React from "react";
import "./Reciter.css";
import { useEffect, useState } from "react";
export default function Reciter() {
  const [reciter, setreciter] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/edition?format=audio")
      .then((response) => response.json())
      .then((data) => {
        setreciter(data.data);
        setloading(false);
      });
  }, []);
  if (loading) return <div className="loader">loading...</div>;
  return (
    <div className="reciter-container">
      <h1> Quran Reciters</h1>
      <div className="reciter-cards-container">
        {reciter.map((reciters) => (
          <div className="reciter-card">
            <h2>{reciters.englishName}</h2>
            <p>{reciters.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
