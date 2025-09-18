import React from "react";
import { NavLink } from "react-router-dom";
import "../style/stylenavbar.css";

export default function Navbar({ onShowLogin, className = "" }) {
  const navigationItems = [
    { path: "/home", label: "Accueil", key: "home" },
    { path: "/apropos", label: "À propos", key: "about" },
    { path: "/contact", label: "Contact", key: "contact" }
  ];

  const handleLoginClick = (e) => {
    e.preventDefault();
    onShowLogin?.();
  };

  return (
    <header className={`header ${className}`.trim()} role="banner">
      <nav className="navbar" role="navigation" aria-label="Navigation principale">
        
        {/* LOGO */}
        <div className="logo-container">
          <NavLink to="/home" className="logo-link" aria-label="Retour à l'accueil">
            <img 
              src="/image/logo.jpg" 
              alt="Logo EduGuinée - Retour à l'accueil" 
              className="logo"
              loading="lazy"
            />
          </NavLink>
        </div>

        {/* MENU DE NAVIGATION */}
        <div className="menu" role="menubar">
          {navigationItems.map(({ path, label, key }) => (
            <NavLink 
              key={key}
              to={path}
              className={({ isActive }) => 
                `nav-link ${isActive ? 'nav-link--active' : ''}`
              }
              role="menuitem"
              aria-current={({ isActive }) => isActive ? 'page' : undefined}
            >
              {label}
            </NavLink>
          ))}
        </div>
        
        {/* BOUTON CONNEXION */}
        <button 
          className="btn-login" 
          onClick={handleLoginClick}
          type="button"
          aria-label="Se connecter"
          disabled={!onShowLogin}
        >
          <span className="btn-login__text">Connexion</span>
        </button>
        
      </nav>
    </header>
  );
}