import React from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import "./Home.css";
export default function Home() {
  const [DarkMode, setDarkMode] = useState(false);
  return (
    <div className={DarkMode === true ? "dark-mode" : "light-mode"}>
      <Navbar DarkMode={DarkMode} setDarkMode={setDarkMode} />
      <Hero DarkMode={DarkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
