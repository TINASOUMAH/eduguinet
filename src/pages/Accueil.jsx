
import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../style/style_accueil.css"; 

export default function Accueil() {
  const navigate = useNavigate(); // 👉 pour changer de page

  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Bienvenue sur <span className="highlight">EduGuinée</span>
          </h1>
          <p className="hero-subtitle">Apprenez, progressez, réussissez.</p>
          <button
            className="hero-button"
            onClick={() =>
              document
                .getElementById("level-selection-section")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Commencer à apprendre
          </button>
        </div>
      </section>

      {/* SECTION Niveaux */}
      <section id="level-selection-section">
        <div className="container">
          <h2 className="section-title">Choisis ton Niveau</h2>
          <div className="levels">

            {/* 6ème */}
            <div className="level-card" onClick={() => navigate("/sixieme")}>
              <div className="emoji">📚</div>
              <h3>6ème</h3>
            </div>

            {/* 10ème */}
            <div className="level-card" onClick={() => navigate("/dixiemepage")}>
              <div className="emoji">🎓</div>
              <h3>10ème</h3>
            </div>

            {/* Terminale */}
            <div className="level-card" onClick={() => navigate("/niveaux/Terminale")}>
              <div className="emoji">🚀</div>
              <h3>Terminale</h3>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
