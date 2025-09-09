import React from "react";
import { NavLink } from "react-router-dom"; // 🔹 important !
import "../style/stylenavbar.css";

export default function Header({ onShowLogin }) {
  return (
    <header className="header">
      <nav className="navbar">

        {/* LOGO */}
        <div className="logo-container">
          <img 
            src="/image/Gemini_Generated_Image_2jpj8x2jpj8x2jpj.png" 
            alt="Logo EduGuinée" 
            className="logo"
          />
        </div>

        {/* MENU */}
        <div className="menu">
          <NavLink to="/home">Accueil</NavLink>
          <NavLink to="/Apropros">Apropos</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        

        {/* BOUTON CONNEXION */}
       <button className="btn-login" onClick={onShowLogin}>
        Connexion
      </button>
      </nav>
    </header>
  );
}

