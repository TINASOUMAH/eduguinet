import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function TerminaleTSE() {
  // Tableau des matières TSE
  const matieres = [
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
