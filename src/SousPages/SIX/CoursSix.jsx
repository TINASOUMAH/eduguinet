import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import "../../style/styleNiveaux.css";

function CoursSix() {
  const [page, setPage] = useState(true);

  const resetPage = () => {
    setPage(true);
  };

  const items = [
    { slug: "calcul", icon: "➕", label: "Calcul", description: "Apprends les bases des opérations et du calcul mental." },
    { slug: "francais", icon: "📖", label: "Français", description: "Grammaire, conjugaison et lecture." },
    { slug: "geographie", icon: "🌍", label: "Géographie", description: "Découverte des pays, continents et paysages." },
    { slug: "histoire", icon: "📜", label: "Histoire", description: "Événements historiques et civilisations." },
    { slug: "science-observation", icon: "🧪", label: "Science d'observation", description: "Expériences pour comprendre la nature." },
    { slug: "ecm", icon: "⚖️", label: "ECM", description: "Éducation civique et morale." },
  ];

  return (
    <div className="cours-wrapper">
      {page ? (
        <>
          {/* Message de bienvenue */}
          <header className="cours-header">
            <h1>Bienvenue en 6ème</h1>
            <p>👉 Choisis la matière que tu veux réviser.</p>
          </header>

          {/* Grille de matières */}
          <div className="cours-grid">
            {items.map((item) => (
              <div key={item.slug} className="cours-card">
                <h1 className="cours-icon">{item.icon}</h1>
                <h2>{item.label}</h2>
                <p>{item.description}</p>

                {/* Bouton en bas de la carte */}
                <Link to={item.slug}>
                  <button className="cours-btn" onClick={() => setPage(false)}>
                    Acceder
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </>
      ) : (
        <main>
          <Outlet />
          <button className="reset-btn" onClick={resetPage}>⬅ Retour</button>
        </main>
      )}
    </div>
  );
}

export default CoursSix;
