import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import "../../style/styleNiveaux.css";

function CoursTSS() {
  const [page, setPage] = useState(true);

  const resetPage = () => {
    setPage(true);
  };

  const items = [
    { slug: "tss/economiquetss", icon: "💰", label: "Économie", description: "Microéconomie, macroéconomie et commerce international." },
    { slug: "tss/sociologietss", icon: "👥", label: "Philosophie", description: "Stratification sociale et institutions." },
    { slug: "tss/anglais", icon: "🧠", label: "Anglais", description: "Psychologie cognitive et sociale." },
    { slug: "tss/français", icon: "📄", label: "Français", description: "Ressources et supports de cours en PDF." },
    { slug: "tss/histoire", icon: "📚", label: "Histoire", description: "Examens et épreuves des années précédentes." },
    { slug: "tss/geographie", icon: "📐", label: "Geographie", description: "Formulaires et aide-mémoires." },
    { slug: "tss/math", icon: "🧠", label: "Math", description: "Tests et évaluations interactives." },
    
  ];

  return (
    <div className="cours-wrapper">
      {page ? (
        <>
          {/* Message de bienvenue */}
          <header className="cours-header">
            <h1>Bienvenue en TSS</h1>
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

export default CoursTSS;
