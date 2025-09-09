// Francais6eme.jsx
import React, { useState } from "react";
import "./Francais6eme.css";

export default function Francais6eme() {
  const [selectedChapter, setSelectedChapter] = useState(null);

  const chapters = [
    "Chapitre 1 : Grammaire",
    "Chapitre 2 : Conjugaison",
    "Chapitre 3 : Lecture",
    "Chapitre 4 : Expression écrite",
  ];

  return (
    <div className="container">
      {/* Sidebar fixe */}
      <div className="sidebar">
        <h2>Français - 6ème</h2>
        {chapters.map((chapter) => (
          <button
            key={chapter}
            className="chapter-btn"
            onClick={() => setSelectedChapter(chapter)}
          >
            {chapter}
          </button>
        ))}
      </div>

      {/* Contenu dynamique */}
      <div className="content">
        {selectedChapter ? (
          <div>
            <h2>{selectedChapter}</h2>
            <img
              src={`https://via.placeholder.com/600x400?text=${encodeURIComponent(
                selectedChapter
              )}`}
              alt={selectedChapter}
            />
            <p>Voici le contenu détaillé pour {selectedChapter}.</p>
          </div>
        ) : (
          <p>Cliquez sur un chapitre pour voir son contenu.</p>
        )}
      </div>
    </div>
  );
}
