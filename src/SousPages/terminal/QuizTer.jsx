import React, { useState } from "react";
import { FaBrain, FaCalculator, FaAtom, FaBook, FaGlobeAfrica, FaLanguage, FaPlay, FaCheck, FaClock, FaStar, FaQuestion, FaTrophy } from "react-icons/fa";

// Quiz par matière pour Terminale
const quizData = [
  {
    id: 1,
    matiere: "Mathématiques",
    icon: FaCalculator,
    color: "#2563eb",
    gradient: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
    bgColor: "#eff6ff",
    quiz: [
      {
        id: 1,
        titre: "Fonctions exponentielles",
        questions: 15,
        duree: "20min",
        difficulte: "Moyen",
        note: 4.8,
        completed: false,
        score: null
      },
      {
        id: 2,
        titre: "Probabilités conditionnelles",
        questions: 12,
        duree: "15min",
        difficulte: "Difficile",
        note: 4.6,
        completed: true,
        score: 85
      },
      {
        id: 3,
        titre: "Géométrie dans l'espace",
        questions: 10,
        duree: "12min",
        difficulte: "Facile",
        note: 4.9,
        completed: false,
        score: null
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
    quiz: [
      {
        id: 1,
        titre: "Mécanique newtonienne",
        questions: 18,
        duree: "25min",
        difficulte: "Moyen",
        note: 4.7,
        completed: true,
        score: 92
      },
      {
        id: 2,
        titre: "Thermodynamique",
        questions: 14,
        duree: "20min",
        difficulte: "Difficile",
        note: 4.5,
        completed: false,
        score: null
      },
      {
        id: 3,
        titre: "Chimie organique",
        questions: 16,
        duree: "22min",
        difficulte: "Moyen",
        note: 4.8,
        completed: false,
        score: null
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
    quiz: [
      {
        id: 1,
        titre: "La conscience",
        questions: 8,
        duree: "15min",
        difficulte: "Difficile",
        note: 4.6,
        completed: false,
        score: null
      },
      {
        id: 2,
        titre: "La liberté",
        questions: 10,
        duree: "18min",
        difficulte: "Moyen",
        note: 4.7,
        completed: true,
        score: 78
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
    quiz: [
      {
        id: 1,
        titre: "Analyse littéraire",
        questions: 12,
        duree: "20min",
        difficulte: "Difficile",
        note: 4.5,
        completed: false,
        score: null
      },
      {
        id: 2,
        titre: "Grammaire avancée",
        questions: 15,
        duree: "18min",
        difficulte: "Moyen",
        note: 4.8,
        completed: true,
        score: 88
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

const getScoreColor = (score) => {
  if (score >= 90) return "#10b981";
  if (score >= 70) return "#f59e0b";
  return "#ef4444";
};

export default function QuizTer() {
  const [selectedMatiere, setSelectedMatiere] = useState(null);
  const [quizState, setQuizState] = useState(quizData);

  const startQuiz = (quiz) => {
    console.log(`Démarrage du quiz: ${quiz.titre}`);
    // Logique pour démarrer le quiz
  };

  const retakeQuiz = (matiereId, quizId) => {
    setQuizState(prev => 
      prev.map(matiere => 
        matiere.id === matiereId 
          ? {
              ...matiere,
              quiz: matiere.quiz.map(q => 
                q.id === quizId 
                  ? { ...q, completed: false, score: null }
                  : q
              )
            }
          : matiere
      )
    );
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
          <FaBrain style={{ color: "#7c3aed" }} />
          Quiz - Terminale
        </h1>
        
        <p style={{ 
          color: "#64748b",
          fontSize: "1.1rem",
          marginBottom: "25px"
        }}>
          Testez vos connaissances avec des quiz interactifs
        </p>
      </div>

      {/* Statistiques globales */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "15px",
        marginBottom: "30px"
      }}>
        {quizState.map(matiere => {
          const totalQuiz = matiere.quiz.length;
          const completedQuiz = matiere.quiz.filter(q => q.completed).length;
          const averageScore = matiere.quiz
            .filter(q => q.score !== null)
            .reduce((acc, q, _, arr) => acc + q.score / arr.length, 0);
          
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
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#1e293b",
                marginBottom: "5px"
              }}>
                {completedQuiz}/{totalQuiz}
              </div>
              {averageScore > 0 && (
                <div style={{
                  fontSize: "1rem",
                  color: getScoreColor(averageScore),
                  fontWeight: "600"
                }}>
                  Moyenne: {Math.round(averageScore)}%
                </div>
              )}
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
        {quizState.map((matiere) => {
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
                    {matiere.quiz.length} quiz disponibles
                  </p>
                </div>
              </div>

              {/* Liste des quiz */}
              {selectedMatiere === matiere.id && (
                <div style={{ marginTop: "20px" }}>
                  {matiere.quiz.map((quiz) => (
                    <div
                      key={quiz.id}
                      style={{
                        background: "white",
                        padding: "20px",
                        borderRadius: "12px",
                        marginBottom: "15px",
                        border: "1px solid #e2e8f0",
                        transition: "all 0.2s ease",
                        opacity: quiz.completed ? 0.95 : 1
                      }}
                    >
                      <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "15px"
                      }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                            <h4 style={{
                              fontSize: "1.1rem",
                              fontWeight: "600",
                              color: "#1e293b",
                              margin: "0"
                            }}>
                              {quiz.titre}
                            </h4>
                            {quiz.completed && (
                              <div style={{
                                background: getScoreColor(quiz.score),
                                color: "white",
                                padding: "2px 8px",
                                borderRadius: "12px",
                                fontSize: "0.8rem",
                                fontWeight: "600",
                                display: "flex",
                                alignItems: "center",
                                gap: "4px"
                              }}>
                                <FaTrophy style={{ fontSize: "0.7rem" }} />
                                {quiz.score}%
                              </div>
                            )}
                          </div>
                          
                          {/* Métadonnées */}
                          <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "15px",
                            fontSize: "0.85rem",
                            marginBottom: "10px"
                          }}>
                            <span style={{ 
                              display: "flex", 
                              alignItems: "center", 
                              gap: "5px",
                              color: "#64748b"
                            }}>
                              <FaQuestion /> {quiz.questions} questions
                            </span>
                            <span style={{ 
                              display: "flex", 
                              alignItems: "center", 
                              gap: "5px",
                              color: "#64748b"
                            }}>
                              <FaClock /> {quiz.duree}
                            </span>
                            <span style={{ 
                              display: "flex", 
                              alignItems: "center", 
                              gap: "5px",
                              color: getDifficultyColor(quiz.difficulte)
                            }}>
                              ● {quiz.difficulte}
                            </span>
                          </div>

                          <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            fontSize: "0.85rem",
                            color: "#64748b"
                          }}>
                            <FaStar style={{ color: "#fbbf24" }} /> 
                            {quiz.note} • Note moyenne
                          </div>
                        </div>
                        
                        {/* Actions */}
                        <div style={{ display: "flex", gap: "8px", marginLeft: "15px" }}>
                          {quiz.completed ? (
                            <div style={{ display: "flex", gap: "8px" }}>
                              <button
                                onClick={() => retakeQuiz(matiere.id, quiz.id)}
                                style={{
                                  background: "#f1f5f9",
                                  border: "none",
                                  padding: "8px 12px",
                                  borderRadius: "6px",
                                  cursor: "pointer",
                                  transition: "all 0.2s ease",
                                  fontSize: "0.9rem",
                                  color: "#64748b"
                                }}
                                onMouseEnter={(e) => e.target.style.background = "#e2e8f0"}
                                onMouseLeave={(e) => e.target.style.background = "#f1f5f9"}
                              >
                                Refaire
                              </button>
                              <div style={{
                                background: "#10b981",
                                padding: "8px",
                                borderRadius: "6px",
                                display: "flex",
                                alignItems: "center"
                              }}>
                                <FaCheck style={{ color: "white" }} />
                              </div>
                            </div>
                          ) : (
                            <button
                              onClick={() => startQuiz(quiz)}
                              style={{
                                background: matiere.color,
                                border: "none",
                                padding: "8px 16px",
                                borderRadius: "6px",
                                cursor: "pointer",
                                transition: "opacity 0.2s ease",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px"
                              }}
                              onMouseEnter={(e) => e.target.style.opacity = "0.8"}
                              onMouseLeave={(e) => e.target.style.opacity = "1"}
                            >
                              <FaPlay style={{ color: "white", fontSize: "0.8rem" }} />
                              <span style={{ color: "white", fontSize: "0.9rem", fontWeight: "600" }}>
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
