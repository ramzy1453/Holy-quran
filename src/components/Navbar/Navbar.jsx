import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav>
      <div className="left">
        <svg
          stroke="white"
          fill="none"
          stroke-width="0"
          viewBox="0 0 24 24"
          class="mx-2 cursor-pointer bg-transparent hover:text-gray-400"
          height="28"
          width="28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          ></path>
        </svg>
        <img
          src="https://holy-quran-website.netlify.app/static/media/quran.2b985d1ab2b68d0a547d.png"
          width={48}
          height={48}
        />
        <h2>Noble Quran</h2>
      </div>
      <div className="right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
          width={48}
          height={48}
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
      </div>
    </nav>
  );
}
