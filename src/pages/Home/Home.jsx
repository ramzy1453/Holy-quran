import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import "./Home.css";
import { useStore } from "../../lib/store";
export default function Home() {
  const darkMode = useStore((state) => state.darkMode);
  return (
    <div className={darkMode === true ? "dark-mode" : "light-mode"}>
      <Navbar />
      <Hero />
    </div>
  );
}
