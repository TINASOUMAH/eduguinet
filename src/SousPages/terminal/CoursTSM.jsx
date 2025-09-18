import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import "../../style/styleNiveaux.css";

function CoursTSM() {
  const [page, setPage] = useState(true);

  const resetPage = () => {
    setPage(true);
  };

  const items = [
    { slug: "mathtsm", icon: "➕", label: "Mathématiques", description: "Analyse, algèbre et fonctions avancées." },
    { slug: "chimietsm", icon: "🧪", label: "Chimie", description: "Chimie organique et inorganique." },
    { slug: "francaistsm", icon: "📚", label: "Français", description: "Littérature, dissertation et commentaire composé." },
    { slug: "philosophietsm", icon: "🤔", label: "Philosophie", description: "Conscience, morale et réflexion critique." },
    
    { slug: "anglaistsm", icon: "🇬🇧", label: "Anglais", description: "Expression écrite et orale, civilisation anglophone." },
    
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
        <main style={{ width: "100%", minHeight: "100vh" }}>
          <button className="reset-btn" onClick={resetPage} style={{ marginBottom: "20px" }}>⬅ Retour</button>
          <Outlet />
        </main>
      )}
    </div>
  );
}

export default CoursTSM;
