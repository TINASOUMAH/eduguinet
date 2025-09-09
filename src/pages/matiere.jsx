import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Data10eme from "../data/10eme";

export default function Matiere() {
  const { level, matiere } = useParams();
  const [activeChapitre, setActiveChapitre] = useState(null);

  // Récupère le contenu selon le niveau et la matière (force minuscules)
  const dataByLevel = { "10eme": Data10eme };
  const content = dataByLevel[level]?.[matiere.toLowerCase()];

  if (!content) return <div>Pas de contenu disponible pour cette matière.</div>;

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "250px",
          borderRight: "1px solid #ccc",
          padding: "20px",
          backgroundColor: "#f8f8f8",
        }}
      >
        <h3>Navigation</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>Mes cours</li>
          <li>PDF</li>
          <li>Formules & Méthodes</li>
          <li>Exercices</li>
          <li>Anciens Sujets</li>
          <li>Quiz</li>
        </ul>
      </aside>

      {/* Contenu principal */}
      <main style={{ flex: 1, padding: "20px" }}>
        <h1>{content.titre}</h1>
        <p>{content.description}</p>
        {content.image && (
          <img
            src={content.image}
            alt={content.titre}
            style={{ width: "300px", marginBottom: "20px" }}
          />
        )}

        <h2>Chapitres :</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {content.chapitres.map((chap) => (
            <button
              key={chap.id}
              style={{
                padding: "10px 15px",
                cursor: "pointer",
                backgroundColor: activeChapitre === chap.id ? "#007bff" : "#eee",
                color: activeChapitre === chap.id ? "#fff" : "#000",
                border: "none",
                borderRadius: "5px",
              }}
              onClick={() => setActiveChapitre(chap.id)}
            >
              {chap.titre}
            </button>
          ))}
        </div>

        {activeChapitre && (
          <div style={{ marginTop: "20px", whiteSpace: "pre-line" }}>
            {content.chapitres.find((c) => c.id === activeChapitre)?.contenu}
          </div>
        )}
      </main>
    </div>
  );
}
