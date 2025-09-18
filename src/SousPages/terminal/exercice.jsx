import React, { useState } from "react";
import { FaDumbbell, FaCalculator, FaAtom, FaBrain, FaBook, FaGlobeAfrica, FaLanguage, FaPlay, FaCheck, FaClock, FaStar, FaLightbulb } from "react-icons/fa";

// Exercices par matière pour Terminale
const exercicesData = [
  {
    id: 1,
    matiere: "Mathématiques",
    icon: FaCalculator,
    color: "#2563eb",
    gradient: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
    bgColor: "#eff6ff",
    exercices: [
      {
        id: 1,
        titre: "Fonctions exponentielles",
        difficulte: "Moyen",
        duree: "45min",
        note: 4.8,
        description: "Étude complète des fonctions exponentielles et logarithmiques",
        completed: false
      },
      {
        id: 2,
        titre: "Probabilités conditionnelles",
        difficulte: "Difficile",
        duree: "60min",
        note: 4.6,
        description: "Calculs de probabilités avec conditions",
        completed: true
      },
      {
        id: 3,
        titre: "Géométrie dans l'espace",
        difficulte: "Facile",
        duree: "30min",
        note: 4.9,
        description: "Volumes et aires dans l'espace",
        completed: false
      }
    ]
  },
  {
    id: 2,
    matiere: "Physique-Chimie",
    icon: FaAtom,
    color: "#7c3aed",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
    bgColor: "#f3f4f6",
    exercices: [
      {
        id: 1,
        titre: "Mécanique newtonienne",
        difficulte: "Moyen",
        duree: "50min",
        note: 4.7,
        description: "Lois de Newton et applications",
        completed: false
      },
      {
        id: 2,
        titre: "Thermodynamique",
        difficulte: "Difficile",
        duree: "55min",
        note: 4.5,
        description: "Premier et second principe",
        completed: false
      },
      {
        id: 3,
        titre: "Chimie organique",
        difficulte: "Moyen",
        duree: "40min",
        note: 4.8,
        description: "Réactions et mécanismes",
        completed: true
      }
    ]
  },
  {
    id: 3,
    matiere: "Philosophie",
    icon: FaBrain,
    color: "#dc2626",
    gradient: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
    bgColor: "#fef2f2",
    exercices: [
      {
        id: 1,
        titre: "Dissertation sur la conscience",
        difficulte: "Difficile",
        duree: "120min",
        note: 4.6,
        description: "Analyse philosophique de la conscience",
        completed: false
      },
      {
        id: 2,
        titre: "Commentaire de texte - Descartes",
        difficulte: "Moyen",
        duree: "90min",
        note: 4.7,
        description: "Explication d'un texte de Descartes",
        completed: false
      }
    ]
  },
  {
    id: 4,
    matiere: "Français",
    icon: FaBook,
    color: "#059669",
    gradient: "linear-gradient(135deg, #059669 0%, #047857 100%)",
    bgColor: "#ecfdf5",
    exercices: [
      {
        id: 1,
        titre: "Dissertation littéraire",
        difficulte: "Difficile",
        duree: "240min",
        note: 4.5,
        description: "Analyse d'œuvre littéraire",
        completed: false
      },
      {
        id: 2,
        titre: "Commentaire composé",
        difficulte: "Moyen",
        duree: "180min",
        note: 4.8,
        description: "Analyse stylistique et thématique",
        completed: true
      }
    ]
  }
];

const getDifficultyColor = (difficulte) => {
  switch(difficulte) {
    case "Facile": return "#10b981";
    case "Moyen": return "#f59e0b";
    case "Difficile": return "#ef4444";
    default: return "#6b7280";
  }
};

export default function ExerciceTer() {
  const [selectedMatiere, setSelectedMatiere] = useState(null);
  const [exercicesState, setExercicesState] = useState(exercicesData);

  const toggleExerciceCompletion = (matiereId, exerciceId) => {
    setExercicesState(prev => 
      prev.map(matiere => 
        matiere.id === matiereId 
          ? {
              ...matiere,
              exercices: matiere.exercices.map(ex => 
                ex.id === exerciceId 
                  ? { ...ex, completed: !ex.completed }
                  : ex
              )
            }
          : matiere
      )
    );
  };

  const startExercice = (exercice) => {
    console.log(`Démarrage de l'exercice: ${exercice.titre}`);
    // Logique pour démarrer l'exercice
  };

  return (
    <div style={{ 
      padding: "20px", 
      backgroundColor: "#f8fafc",
      minHeight: "100vh"
    }}>
      {/* Header */}
      <div style={{ 
        marginBottom: "30px",
        textAlign: "center"
      }}>
        <h1 style={{ 
          fontSize: "2.5rem",
          fontWeight: "700",
          color: "#1e293b",
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px"
        }}>
          <FaDumbbell style={{ color: "#059669" }} />
          Exercices - Terminale
        </h1>
        
        <p style={{ 
          color: "#64748b",
          fontSize: "1.1rem",
          marginBottom: "25px"
        }}>
          Entraînez-vous avec des exercices adaptés à votre niveau
        </p>
      </div>

      {/* Statistiques rapides */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "15px",
        marginBottom: "30px"
      }}>
        {exercicesState.map(matiere => {
          const totalExercices = matiere.exercices.length;
          const completedExercices = matiere.exercices.filter(ex => ex.completed).length;
          const progression = (completedExercices / totalExercices) * 100;
          
          return (
            <div key={matiere.id} style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              textAlign: "center"
            }}>
              <h3 style={{ color: matiere.color, marginBottom: "10px", fontSize: "1rem" }}>
                {matiere.matiere}
              </h3>
              <div style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#1e293b",
                marginBottom: "5px"
              }}>
                {completedExercices}/{totalExercices}
              </div>
              <div style={{
                width: "100%",
                height: "6px",
                backgroundColor: "#e2e8f0",
                borderRadius: "3px",
                overflow: "hidden"
              }}>
                <div style={{
                  width: `${progression}%`,
                  height: "100%",
                  backgroundColor: matiere.color,
                  transition: "width 0.3s ease"
                }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Grille des matières */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gap: "25px"
      }}>
        {exercicesState.map((matiere) => {
          const IconComponent = matiere.icon;
          return (
            <div
              key={matiere.id}
              style={{
                background: matiere.bgColor,
                border: `2px solid ${selectedMatiere === matiere.id ? matiere.color : 'transparent'}`,
                borderRadius: "16px",
                padding: "25px",
                transition: "all 0.3s ease",
                boxShadow: selectedMatiere === matiere.id 
                  ? `0 8px 25px ${matiere.color}30`
                  : "0 4px 15px rgba(0,0,0,0.08)"
              }}
            >
              {/* Header de la matière */}
              <div 
                onClick={() => setSelectedMatiere(selectedMatiere === matiere.id ? null : matiere.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                  cursor: "pointer"
                }}
              >
                <div style={{
                  background: matiere.gradient,
                  padding: "12px",
                  borderRadius: "12px",
                  marginRight: "15px"
                }}>
                  <IconComponent style={{ 
                    fontSize: "1.5rem", 
                    color: "white" 
                  }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    color: "#1e293b",
                    margin: "0"
                  }}>
                    {matiere.matiere}
                  </h3>
                  <p style={{
                    color: "#64748b",
                    fontSize: "0.9rem",
                    margin: "5px 0 0 0"
                  }}>
                    {matiere.exercices.length} exercices disponibles
                  </p>
                </div>
              </div>

              {/* Liste des exercices */}
              {selectedMatiere === matiere.id && (
                <div style={{ marginTop: "20px" }}>
                  {matiere.exercices.map((exercice) => (
                    <div
                      key={exercice.id}
                      style={{
                        background: "white",
                        padding: "20px",
                        borderRadius: "12px",
                        marginBottom: "15px",
                        border: "1px solid #e2e8f0",
                        transition: "all 0.2s ease",
                        opacity: exercice.completed ? 0.8 : 1
                      }}
                    >
                      <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "15px"
                      }}>
                        <div style={{ flex: 1 }}>
                          <h4 style={{
                            fontSize: "1.1rem",
                            fontWeight: "600",
                            color: "#1e293b",
                            margin: "0 0 8px 0",
                            textDecoration: exercice.completed ? "line-through" : "none"
                          }}>
                            {exercice.titre}
                          </h4>
                          <p style={{
                            color: "#64748b",
                            fontSize: "0.9rem",
                            margin: "0 0 10px 0"
                          }}>
                            {exercice.description}
                          </p>
                          
                          {/* Métadonnées */}
                          <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "15px",
                            fontSize: "0.85rem"
                          }}>
                            <span style={{ 
                              display: "flex", 
                              alignItems: "center", 
                              gap: "5px",
                              color: getDifficultyColor(exercice.difficulte)
                            }}>
                              <FaLightbulb /> {exercice.difficulte}
                            </span>
                            <span style={{ 
                              display: "flex", 
                              alignItems: "center", 
                              gap: "5px",
                              color: "#64748b"
                            }}>
                              <FaClock /> {exercice.duree}
                            </span>
                            <span style={{ 
                              display: "flex", 
                              alignItems: "center", 
                              gap: "5px",
                              color: "#64748b"
                            }}>
                              <FaStar style={{ color: "#fbbf24" }} /> {exercice.note}
                            </span>
                          </div>
                        </div>
                        
                        {/* Actions */}
                        <div style={{ display: "flex", gap: "8px", marginLeft: "15px" }}>
                          <button
                            onClick={() => toggleExerciceCompletion(matiere.id, exercice.id)}
                            style={{
                              background: exercice.completed ? "#10b981" : "#f1f5f9",
                              border: "none",
                              padding: "8px",
                              borderRadius: "6px",
                              cursor: "pointer",
                              transition: "all 0.2s ease"
                            }}
                          >
                            <FaCheck style={{ 
                              color: exercice.completed ? "white" : "#64748b" 
                            }} />
                          </button>
                          
                          {!exercice.completed && (
                            <button
                              onClick={() => startExercice(exercice)}
                              style={{
                                background: matiere.color,
                                border: "none",
                                padding: "8px 12px",
                                borderRadius: "6px",
                                cursor: "pointer",
                                transition: "opacity 0.2s ease",
                                display: "flex",
                                alignItems: "center",
                                gap: "5px"
                              }}
                              onMouseEnter={(e) => e.target.style.opacity = "0.8"}
                              onMouseLeave={(e) => e.target.style.opacity = "1"}
                            >
                              <FaPlay style={{ color: "white", fontSize: "0.8rem" }} />
                              <span style={{ color: "white", fontSize: "0.9rem" }}>
                                Commencer
                              </span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
