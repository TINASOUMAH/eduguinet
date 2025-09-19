import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../../style/styleNiveaux.css"; // Assure-toi que le chemin est correct

export default function CoursDixieme() {
  const [page, setPage] = useState(true);

  const resetPage = () => {
    setPage(true);
  };

  const items = [
    { slug: "Mathematique", icon: "➕", label: "Mathématique", description: "Science des nombres, des formes et des structures, utilisée pour résoudre des problèmes." },
    { slug: "francais", icon: "📖", label: "Français", description: "Grammaire, orthographe, conjugaison et lecture." },
    { slug: "geographie", icon: "🌍", label: "Géographie", description: "Découverte des pays, continents et paysages." },
    { slug: "histoire", icon: "📜", label: "Histoire", description: "Étude des événements passés et de leur impact sur le présent." },
    { slug: "Physique", icon: "🧪", label: "Physique", description: "Science qui étudie les lois fondamentales de la nature, comme le mouvement et l'énergie." },
    { slug: "Chimie", icon: "⚖️", label: "Chimie", description: "Étude de la composition, structure, propriétés et transformations de la matière." },
    { slug: "Biologie", icon: "🧬", label: "Biologie", description: "Étude des êtres vivants et de leur environnement." },
    { slug: "ECM", icon: "👥", label: "ECM", description: "Éducation civique et morale." },
  ];

  return (
    <div className="cours-wrapper">
      {page ? (
        <>
          <header className="cours-header">
            <h1>Bienvenue en 10ème</h1>
            <p>👉 Choisis la matière que tu veux réviser.</p>
          </header>

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
