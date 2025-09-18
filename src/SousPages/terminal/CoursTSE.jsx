import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import "../../style/styleNiveaux.css";

function CoursTSE() {
  const [page, setPage] = useState(true);

  const resetPage = () => {
    setPage(true);
  };

  const items = [
    { slug: "mathtse", icon: "➕", label: "Mathématiques", description: "Analyse avancée et méthodes numériques." },
    { slug: "physiquetse", icon: "🧪", label: "Physique-Chimie", description: "Physique expérimentale et chimie analytique." },
    { slug: "biologietse", icon: "🧬", label: "Biologie", description: "Biologie cellulaire et biotechnologies." },
    { slug: "pdftse", icon: "📄", label: "Documents PDF", description: "Ressources et supports de cours en PDF." },
    { slug: "ancienstse", icon: "📚", label: "Anciens Sujets", description: "Examens et épreuves des années précédentes." },
    { slug: "formulestse", icon: "📐", label: "Formules", description: "Formulaires et aide-mémoires." },
    { slug: "quiztse", icon: "🧠", label: "Quiz", description: "Tests et évaluations interactives." },
    { slug: "exotse", icon: "✏️", label: "Exercices", description: "Exercices pratiques et corrigés." },
  ];

  return (
    <div className="cours-wrapper">
      {page ? (
        <>
          {/* Message de bienvenue */}
          <header className="cours-header">
            <h1>Bienvenue en TSE</h1>
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

export default CoursTSE;
