import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import "../../style/styleNiveaux.css";

function CoursTer() {
  const [page, setPage] = useState(true);

  const resetPage = () => {
    setPage(true);
  };

  const items = [
    { slug: "mathter", icon: "➕", label: "Mathématiques", description: "Analyse, algèbre et fonctions avancées." },
    { slug: "physiqueter", icon: "🧪", label: "Physique-Chimie", description: "Mécanique, thermodynamique et chimie organique." },
    { slug: "philosophieter", icon: "🤔", label: "Philosophie", description: "Réflexion critique et analyse des concepts." },
    { slug: "francaister", icon: "📖", label: "Français", description: "Littérature, dissertation et commentaire de texte." },
    { slug: "histoireter", icon: "📜", label: "Histoire-Géographie", description: "Monde contemporain et géopolitique." },
    { slug: "anglais", icon: "🇬🇧", label: "Anglais", description: "Expression écrite et orale avancée." },
  ];

  return (
    <div className="cours-wrapper">
      {page ? (
        <>
          {/* Message de bienvenue */}
          <header className="cours-header">
            <h1>Bienvenue en Terminale</h1>
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

export default CoursTer;
