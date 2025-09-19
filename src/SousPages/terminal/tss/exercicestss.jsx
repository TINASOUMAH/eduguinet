import React, { useState } from 'react';

// Configuration des couleurs par matière
const colors = {
  "Économie": { primary: "#f59e0b", secondary: "#fef3c7", icon: "💰" },
  "Sociologie": { primary: "#8b5cf6", secondary: "#e9d5ff", icon: "👥" },
  "Psychologie": { primary: "#06b6d4", secondary: "#cffafe", icon: "🧠" },
  "Histoire": { primary: "#ef4444", secondary: "#fee2e2", icon: "📜" },
  "Géographie": { primary: "#10b981", secondary: "#d1fae5", icon: "🌍" }
};

// Données des exercices TSS
const exercicesTSS = [
  {
    matiere: "Économie",
    exercices: [
      {
        id: 1,
        titre: "Analyse microéconomique",
        description: "Étude des marchés, élasticités et comportement du consommateur",
        difficulte: "Moyen",
        duree: "50 min",
        type: "Analyse",
        chapitres: ["Microéconomie", "Marchés"],
        pdfFile: "/pdfs/economie_microeconomie_exercices.pdf"
      },
      {
        id: 2,
        titre: "Macroéconomie appliquée",
        description: "PIB, inflation, chômage et politiques économiques",
        difficulte: "Difficile",
        duree: "60 min",
        type: "Problème",
        chapitres: ["Macroéconomie", "Politiques"],
        pdfFile: "/pdfs/economie_macroeconomie_exercices.pdf"
      },
      {
        id: 3,
        titre: "Commerce international",
        description: "Théories du commerce et balance des paiements",
        difficulte: "Moyen",
        duree: "45 min",
        type: "Étude de cas",
        chapitres: ["Commerce", "International"],
        pdfFile: "/pdfs/economie_commerce_exercices.pdf"
      }
    ]
  },
  {
    matiere: "Sociologie",
    exercices: [
      {
        id: 4,
        titre: "Stratification sociale",
        description: "Classes sociales, mobilité et inégalités",
        difficulte: "Moyen",
        duree: "45 min",
        type: "Analyse",
        chapitres: ["Classes", "Inégalités"],
        pdfFile: "/pdfs/sociologie_stratification_exercices.pdf"
      },
      {
        id: 5,
        titre: "Sociologie urbaine",
        description: "Ville, urbanisation et ségrégation spatiale",
        difficulte: "Difficile",
        duree: "55 min",
        type: "Étude de cas",
        chapitres: ["Urbain", "Espace"],
        pdfFile: "/pdfs/sociologie_urbaine_exercices.pdf"
      },
      {
        id: 6,
        titre: "Institutions sociales",
        description: "Famille, école et socialisation",
        difficulte: "Facile",
        duree: "40 min",
        type: "Synthèse",
        chapitres: ["Institutions", "Socialisation"],
        pdfFile: "/pdfs/sociologie_institutions_exercices.pdf"
      }
    ]
  },
  {
    matiere: "Psychologie",
    exercices: [
      {
        id: 7,
        titre: "Psychologie cognitive",
        description: "Mémoire, attention et processus cognitifs",
        difficulte: "Moyen",
        duree: "50 min",
        type: "Expérimentation",
        chapitres: ["Cognition", "Mémoire"],
        pdfFile: "/pdfs/psychologie_cognitive_exercices.pdf"
      },
      {
        id: 8,
        titre: "Psychologie sociale",
        description: "Attitudes, stéréotypes et influence sociale",
        difficulte: "Difficile",
        duree: "55 min",
        type: "Analyse",
        chapitres: ["Social", "Attitudes"],
        pdfFile: "/pdfs/psychologie_sociale_exercices.pdf"
      }
    ]
  },
  {
    matiere: "Histoire",
    exercices: [
      {
        id: 9,
        titre: "Décolonisation",
        description: "Processus de décolonisation en Afrique et en Asie",
        difficulte: "Moyen",
        duree: "50 min",
        type: "Dissertation",
        chapitres: ["Décolonisation", "XXe siècle"],
        pdfFile: "/pdfs/histoire_decolonisation_exercices.pdf"
      },
      {
        id: 10,
        titre: "Guerre froide",
        description: "Bipolarisation du monde et conflits périphériques",
        difficulte: "Difficile",
        duree: "60 min",
        type: "Analyse de documents",
        chapitres: ["Guerre froide", "Relations internationales"],
        pdfFile: "/pdfs/histoire_guerre_froide_exercices.pdf"
      }
    ]
  },
  {
    matiere: "Géographie",
    exercices: [
      {
        id: 11,
        titre: "Géographie urbaine",
        description: "Métropolisation et hiérarchie urbaine",
        difficulte: "Moyen",
        duree: "45 min",
        type: "Croquis",
        chapitres: ["Urbain", "Métropolisation"],
        pdfFile: "/pdfs/geographie_urbaine_exercices.pdf"
      },
      {
        id: 12,
        titre: "Développement durable",
        description: "Enjeux environnementaux et développement",
        difficulte: "Difficile",
        duree: "55 min",
        type: "Étude de cas",
        chapitres: ["Environnement", "Développement"],
        pdfFile: "/pdfs/geographie_developpement_exercices.pdf"
      }
    ]
  }
];

export default function ExercicesTSS() {
  const [selectedMatiere, setSelectedMatiere] = useState("Économie");
  const [selectedExercice, setSelectedExercice] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDifficulte, setFilterDifficulte] = useState("Tous");

  const currentExercices = exercicesTSS.find(m => m.matiere === selectedMatiere)?.exercices || [];
  
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
      case "Analyse": return "🔍";
      case "Problème": return "🧩";
      case "Étude de cas": return "📋";
      case "Synthèse": return "📝";
      case "Expérimentation": return "🔬";
      case "Dissertation": return "✍️";
      case "Analyse de documents": return "📄";
      case "Croquis": return "🗺️";
      default: return "📚";
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)", fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div style={{ background: "white", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", padding: "30px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "800", background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "10px" }}>
            Exercices TSS
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#64748b" }}>
            Exercices pratiques pour Terminale Sciences Sociales
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
              {exercicesTSS.map(matiere => {
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
