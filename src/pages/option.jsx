import React from "react";
import { useParams, Link } from "react-router-dom";
import "../style/styleNiveaux.css";

export default function OptionView() {
  const { level, option } = useParams();

  // 📘 Exemple des matières par option
  const optionsData = {
    TSM: {
      titre: "Option TSM",
      matieres: ["Mathématiques", "Physique", "Informatique", "Anglais"],
    },
    TSE: {
      titre: "Option TSE",
      matieres: ["Biologie", "Chimie", "SVT", "Mathématiques"],
    },
    TSS: {
      titre: "Option TSS",
      matieres: ["Philosophie", "Sociologie", "Histoire-Géo", "Français"],
    },
  };

  const data = optionsData[option];

  if (!data) {
    return (
      <div className="option-container">
        <Link to={`/niveaux/${level}`}>← Retour</Link>
        <h2>Option introuvable</h2>
      </div>
    );
  }

  return (
    <div className="option-container">
      <div className="back">
        <Link to={`/niveaux/${level}`}>← Retour au niveau {level}</Link>
      </div>
      <h2>{data.titre}</h2>

      <ul className="matiere-list">
        {data.matieres.map((m, index) => (
          <li key={index}>
            {/* ⚡ On fait un lien vers MatiereView */}
            <Link to={`/niveaux/${level}/${m.toLowerCase()}`}>
              {m}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
