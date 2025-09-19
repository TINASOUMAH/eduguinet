import React, { useState } from 'react';

// Configuration des couleurs par matière
const colors = {
  "Mathématiques": { primary: "#3b82f6", secondary: "#dbeafe", icon: "📊" },
  "Physique": { primary: "#8b5cf6", secondary: "#e9d5ff", icon: "⚛️" },
  "Chimie": { primary: "#06b6d4", secondary: "#cffafe", icon: "🧪" },
  "Biologie": { primary: "#10b981", secondary: "#d1fae5", icon: "🧬" }
};

// Données des exercices TSE
const exercicesTSE = [
  {
    matiere: "Mathématiques",
    exercices: [
      {
        id: 1,
        titre: "Dérivées et primitives",
        description: "Calcul de dérivées de fonctions composées et recherche de primitives",
        difficulte: "Moyen",
        duree: "45 min",
        type: "Calcul",
        chapitres: ["Analyse", "Fonctions"],
        pdfFile: "/pdfs/math_derivees_exercices.pdf"
      },
      {
        id: 2,
        titre: "Probabilités conditionnelles",
        description: "Exercices sur les probabilités conditionnelles et l'indépendance",
        difficulte: "Difficile",
        duree: "60 min",
        type: "Problème",
        chapitres: ["Probabilités", "Statistiques"],
        pdfFile: "/pdfs/math_probabilites_exercices.pdf"
      },
      {
        id: 3,
        titre: "Géométrie dans l'espace",
        description: "Vecteurs, plans et droites dans l'espace tridimensionnel",
        difficulte: "Moyen",
        duree: "50 min",
        type: "Géométrie",
        chapitres: ["Géométrie", "Vecteurs"],
        pdfFile: "/pdfs/math_geometrie_exercices.pdf"
      }
    ]
  },
  {
    matiere: "Physique",
    exercices: [
      {
        id: 4,
        titre: "Mécanique du point",
        description: "Cinématique et dynamique du point matériel",
        difficulte: "Moyen",
        duree: "40 min",
        type: "Calcul",
        chapitres: ["Mécanique", "Forces"],
        pdfFile: "/pdfs/physique_mecanique_exercices.pdf"
      },
      {
        id: 5,
        titre: "Électrostatique",
        description: "Champ électrique, potentiel et condensateurs",
        difficulte: "Difficile",
        duree: "55 min",
        type: "Problème",
        chapitres: ["Électricité", "Champs"],
        pdfFile: "/pdfs/physique_electrostatique_exercices.pdf"
      },
      {
        id: 6,
        titre: "Optique géométrique",
        description: "Lentilles, miroirs et formation d'images",
        difficulte: "Facile",
        duree: "35 min",
        type: "Application",
        chapitres: ["Optique", "Images"],
        pdfFile: "/pdfs/physique_optique_exercices.pdf"
      }
    ]
  },
  {
    matiere: "Chimie",
    exercices: [
      {
        id: 7,
        titre: "Équilibres chimiques",
        description: "Constantes d'équilibre et déplacement d'équilibres",
        difficulte: "Moyen",
        duree: "45 min",
        type: "Calcul",
        chapitres: ["Équilibres", "Cinétique"],
        pdfFile: "/pdfs/chimie_equilibres_exercices.pdf"
      },
      {
        id: 8,
        titre: "Chimie organique",
        description: "Nomenclature, réactions et mécanismes",
        difficulte: "Difficile",
        duree: "60 min",
        type: "Synthèse",
        chapitres: ["Organique", "Réactions"],
        pdfFile: "/pdfs/chimie_organique_exercices.pdf"
      }
    ]
  },
  {
    matiere: "Biologie",
    exercices: [
      {
        id: 9,
        titre: "Génétique moléculaire",
        description: "Réplication, transcription et traduction",
        difficulte: "Moyen",
        duree: "50 min",
        type: "Analyse",
        chapitres: ["Génétique", "ADN"],
        pdfFile: "/pdfs/biologie_genetique_exercices.pdf"
      },
      {
        id: 10,
        titre: "Métabolisme cellulaire",
        description: "Respiration cellulaire et photosynthèse",
        difficulte: "Difficile",
        duree: "55 min",
        type: "Problème",
        chapitres: ["Métabolisme", "Cellule"],
        pdfFile: "/pdfs/biologie_metabolisme_exercices.pdf"
      }
    ]
  }
];

export default function ExercicesTSE() {
  const [selectedMatiere, setSelectedMatiere] = useState("Mathématiques");
  const [selectedExercice, setSelectedExercice] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDifficulte, setFilterDifficulte] = useState("Tous");

  const currentExercices = exercicesTSE.find(m => m.matiere === selectedMatiere)?.exercices || [];
  
  const filteredExercices = currentExercices.filter(exercice => {
    const matchSearch = exercice.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       exercice.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchDifficulte = filterDifficulte === "Tous" || exercice.difficulte === filterDifficulte;
    return matchSearch && matchDifficulte;
  });

  const getDifficultyColor = (difficulte) => {
    switch(difficulte) {
      case "Facile": return "#10b981";
      case "Moyen": return "#f59e0b";
      case "Difficile": return "#ef4444";
      default: return "#64748b";
    }
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case "Calcul": return "🧮";
      case "Problème": return "🧩";
      case "Géométrie": return "📐";
      case "Application": return "🔬";
      case "Synthèse": return "⚗️";
      case "Analyse": return "🔍";
      default: return "📝";
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)", fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div style={{ background: "white", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", padding: "30px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "800", background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "10px" }}>
            Exercices TSE
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#64748b" }}>
            Exercices pratiques pour Terminale Sciences Expérimentales
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px", display: "flex", gap: "30px" }}>
        {/* Sidebar */}
        <div style={{ width: "300px", flexShrink: 0 }}>
          {/* Sélection matière */}
          <div style={{ background: "white", borderRadius: "16px", padding: "25px", marginBottom: "20px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#1e293b", marginBottom: "20px" }}>📚 Matières</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {exercicesTSE.map(matiere => {
                const isSelected = matiere.matiere === selectedMatiere;
                const colorConfig = colors[matiere.matiere];
                
                return (
                  <button
                    key={matiere.matiere}
                    onClick={() => setSelectedMatiere(matiere.matiere)}
                    style={{
                      padding: "12px 16px",
                      borderRadius: "12px",
                      border: "none",
                      background: isSelected ? colorConfig.secondary : "transparent",
                      color: isSelected ? colorConfig.primary : "#64748b",
                      fontSize: "0.95rem",
                      fontWeight: isSelected ? "600" : "500",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px"
                    }}
                  >
                    <span>{colorConfig.icon}</span>
                    {matiere.matiere}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filtres */}
          <div style={{ background: "white", borderRadius: "16px", padding: "25px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#1e293b", marginBottom: "20px" }}>🔍 Filtres</h3>
            
            {/* Recherche */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "600", color: "#374151", marginBottom: "8px" }}>
                Rechercher
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Titre ou description..."
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  border: "2px solid #e2e8f0",
                  fontSize: "0.9rem",
                  outline: "none"
                }}
              />
            </div>

            {/* Difficulté */}
            <div>
              <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "600", color: "#374151", marginBottom: "8px" }}>
                Difficulté
              </label>
              <select
                value={filterDifficulte}
                onChange={(e) => setFilterDifficulte(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  border: "2px solid #e2e8f0",
                  fontSize: "0.9rem",
                  outline: "none"
                }}
              >
                <option value="Tous">Tous niveaux</option>
                <option value="Facile">Facile</option>
                <option value="Moyen">Moyen</option>
                <option value="Difficile">Difficile</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div style={{ flex: 1 }}>
          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "30px" }}>
            <div style={{ background: "white", borderRadius: "16px", padding: "25px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: "800", color: colors[selectedMatiere].primary }}>{currentExercices.length}</div>
              <div style={{ fontSize: "0.9rem", color: "#64748b" }}>Exercices disponibles</div>
            </div>
            <div style={{ background: "white", borderRadius: "16px", padding: "25px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: "800", color: colors[selectedMatiere].primary }}>{filteredExercices.length}</div>
              <div style={{ fontSize: "0.9rem", color: "#64748b" }}>Exercices filtrés</div>
            </div>
          </div>

          {/* Liste des exercices */}
          <div style={{ display: "grid", gap: "20px" }}>
            {filteredExercices.map(exercice => (
              <div
                key={exercice.id}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "30px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  border: "2px solid transparent"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
                  e.currentTarget.style.borderColor = colors[selectedMatiere].primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.05)";
                  e.currentTarget.style.borderColor = "transparent";
                }}
                onClick={() => setSelectedExercice(exercice)}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                      <span style={{ fontSize: "1.5rem" }}>{getTypeIcon(exercice.type)}</span>
                      <h3 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#1e293b", margin: 0 }}>
                        {exercice.titre}
                      </h3>
                    </div>
                    <p style={{ fontSize: "1rem", color: "#64748b", lineHeight: "1.6", margin: 0 }}>
                      {exercice.description}
                    </p>
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
                    <span style={{
                      background: getDifficultyColor(exercice.difficulte),
                      color: "white",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      fontWeight: "600"
                    }}>
                      {exercice.difficulte}
                    </span>
                    <span style={{
                      background: colors[selectedMatiere].secondary,
                      color: colors[selectedMatiere].primary,
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      fontWeight: "600"
                    }}>
                      {exercice.type}
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ fontSize: "1rem" }}>⏱️</span>
                      <span style={{ fontSize: "0.9rem", color: "#64748b" }}>{exercice.duree}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ fontSize: "1rem" }}>📖</span>
                      <span style={{ fontSize: "0.9rem", color: "#64748b" }}>
                        {exercice.chapitres.join(", ")}
                      </span>
                    </div>
                  </div>
                  
                  <button
                    style={{
                      padding: "10px 20px",
                      borderRadius: "8px",
                      border: "none",
                      background: colors[selectedMatiere].primary,
                      color: "white",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.2s ease"
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      // Logique pour ouvrir le PDF
                      window.open(exercice.pdfFile, '_blank');
                    }}
                  >
                    📄 Ouvrir PDF
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredExercices.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 20px" }}>
              <div style={{ fontSize: "4rem", marginBottom: "20px" }}>🔍</div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#1e293b", marginBottom: "10px" }}>
                Aucun exercice trouvé
              </h3>
              <p style={{ fontSize: "1rem", color: "#64748b" }}>
                Essayez de modifier vos critères de recherche ou de filtrage.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
