import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function TerminaleTSS() {
  // Tableau des matières TSS
  const matieres = [
    { slug: "economiquetss", icon: "💰", label: "Économie", description: "Microéconomie, macroéconomie et commerce international." },
    { slug: "sociologietss", icon: "👥", label: "Sociologie", description: "Stratification sociale et institutions." },
    { slug: "psychologietss", icon: "🧠", label: "Psychologie", description: "Psychologie cognitive et sociale." },
    { slug: "pdftss", icon: "📄", label: "Documents PDF", description: "Ressources et supports de cours en PDF." },
    { slug: "ancienstss", icon: "📚", label: "Anciens Sujets", description: "Examens et épreuves des années précédentes." },
    { slug: "formulestss", icon: "📐", label: "Formules", description: "Formulaires et aide-mémoires." },
    { slug: "quiztss", icon: "🧠", label: "Quiz", description: "Tests et évaluations interactives." },
    { slug: "exotss", icon: "✏️", label: "Exercices", description: "Exercices pratiques et corrigés." },
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
