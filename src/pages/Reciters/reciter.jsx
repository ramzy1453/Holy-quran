import React from "react";
import "./Reciter.css";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useStore } from "../../lib/store";

export default function Reciter() {
  const [reciters, setreciter] = useState([]);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  const darkMode = useStore((state) => state.darkMode);
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
    <div
      className={`reciter-container ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      <h1> Quran Reciters</h1>
      <div className="reciter-cards-container">
        {reciters.map((reciter) => (
          <div
            className="reciter-card"
            onClick={() => {
              navigate(`/Reciters/${reciter.identifier}`);
            }}
          >
            <h2>{reciter.englishName}</h2>
            <p>{reciter.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
