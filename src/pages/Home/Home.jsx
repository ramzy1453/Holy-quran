import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import "./Home.css";
import { useStore } from "../../lib/store";
import i18n from "../../i18n";
export default function Home() {
  const [lang, setLang] = useState(i18n.language);

  const darkMode = useStore((state) => state.darkMode);
  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={darkMode === true ? "dark-mode" : "light-mode"}
    >
      <Navbar setLang={setLang} />
      <Hero />
    </div>
  );
}
