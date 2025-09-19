import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import "../../style/styleNiveaux.css";

function CoursTSM() {
  const [page, setPage] = useState(true);

  const resetPage = () => {
    setPage(true);
  };

  const items = [
    { slug: "tsm/mathtsm", icon: "➕", label: "Mathématiques", description: "Analyse, algèbre linéaire, probabilités et statistiques." },
    { slug: "tsm/chimietsm", icon: "🧪", label: "Chimie", description: "Chimie organique, inorganique et analytique avancée." },
    { slug: "tsm/francaistsm", icon: "📚", label: "Français", description: "Littérature, dissertation et commentaire composé." },
    { slug: "tsm/philosophietsm", icon: "🤔", label: "Philosophie", description: "Métaphysique, épistémologie et philosophie morale." },
    { slug: "tsm/anglaistsm", icon: "🇬🇧", label: "Anglais", description:  "Compréhension écrite et orale, expression, vocabulaire et grammaire." },
    { slug: "tsm/physiquetsm", icon: "⚛️", label: "Physique", description: "Mécanique, thermodynamique et électromagnétisme." },
    { slug: "tsm/economie", icon: "💰", label: "Économie", description: "Microéconomie, macroéconomie et économie du développement." },
  ];

  return (
    <div className="cours-wrapper">
      {page ? (
        <>
          {/* Message de bienvenue */}
          <header className="cours-header">
            <h1>Bienvenue en TSM</h1>
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

export default CoursTSM;
