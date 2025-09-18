import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function TerminaleTSM() {
  // Tableau des matières TSM
  const matieres = [
    { slug: "mathtsm", icon: "➕", label: "Mathématiques", description: "Analyse, algèbre et fonctions avancées." },
    { slug: "pdftsm", icon: "📄", label: "Documents PDF", description: "Ressources et supports de cours en PDF." },
    { slug: "chimietsm", icon: "🧪", label: "Chimie", description: "Chimie organique et inorganique." },
    { slug: "ancienstsm", icon: "📚", label: "Anciens Sujets", description: "Examens et épreuves des années précédentes." },
    { slug: "formulestsm", icon: "📐", label: "Formules", description: "Formulaires et aide-mémoires." },
    { slug: "quiztsm", icon: "🧠", label: "Quiz", description: "Tests et évaluations interactives." },
    { slug: "exotsm", icon: "✏️", label: "Exercices", description: "Exercices pratiques et corrigés." },
  ];

  return (
    <div className="nvx-content">
      <div className="matieres-grid">
        {matieres.map((matiere) => (
          <div key={matiere.slug} className="nvx-card">
            <NavLink to={matiere.slug} className="card-link">
              <div className="card-icon">{matiere.icon}</div>
              <div className="card-info">
                <h3>{matiere.label}</h3>
                <p>{matiere.description}</p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

