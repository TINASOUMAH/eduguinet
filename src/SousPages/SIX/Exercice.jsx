import React, { useState, useEffect } from "react";
import { 
  FaSearch, 
  FaFilter, 
  FaClock, 
  FaStar, 
  FaPlay, 
  FaCheckCircle, 
  FaBook,
  FaCalculator,
  FaGraduationCap,
  FaChartLine,
  FaSpinner,
  FaEye,
  FaTrophy,
  FaUserGraduate
} from "react-icons/fa";

// Matières 6ème avec plus de détails
const matieres = [
  { 
    id: 1, 
    name: "Français", 
    icon: FaBook,
    color: "#6C63FF", 
    gradient: "linear-gradient(135deg, #6C63FF 0%, #5A52D5 100%)",
    bgColor: "#F0F0FF",
    description: "Grammaire, orthographe, lecture"
  },
  { 
    id: 2, 
    name: "Mathématiques", 
    icon: FaCalculator,
    color: "#2563EB", 
    gradient: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
    bgColor: "#EFF6FF",
    description: "Calcul, géométrie, problèmes"
  },
];

// Types d'exercices
const typeExercices = [
  { id: "all", name: "Tous", color: "#64748B" },
  { id: "qcm", name: "QCM", color: "#10B981" },
  { id: "text", name: "Texte à trous", color: "#F59E0B" },
  { id: "calculation", name: "Calcul", color: "#EF4444" },
  { id: "reading", name: "Lecture", color: "#8B5CF6" }
];

export default function Exercice6eme() {
  const [activeMatiere, setActiveMatiere] = useState(matieres[0]);
  const [exercices, setExercices] = useState([]);
  const [filteredExercices, setFilteredExercices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  // Simulation d'exercices avec structure complète
  const sampleExercices = {
    Français: [
      {
        id: 1,
        title: "Les déterminants",
        description: "Identifier et classer les déterminants dans les phrases",
        type: "qcm",
        difficulty: "facile",
        duration: "15 min",
        points: 20,
        completed: false,
        rating: 4.5,
        questions: 8,
        category: "Grammaire",
        createdBy: "Mme Diallo",
        createdAt: "2024-01-15",
        content: {
          instruction: "Choisissez le bon déterminant pour chaque phrase.",
          questions: [
            {
              question: "__ école est très grande.",
              options: ["Cette", "Ce", "Ces", "Cet"],
              correct: "Cette"
            }
          ]
        }
      },
      {
        id: 2,
        title: "Conjugaison - Présent",
        description: "Conjuguer les verbes du 1er groupe au présent",
        type: "text",
        difficulty: "moyen",
        duration: "20 min",
        points: 25,
        completed: true,
        rating: 4.8,
        questions: 10,
        category: "Conjugaison",
        createdBy: "M. Camara",
        createdAt: "2024-01-10"
      },
      {
        id: 3,
        title: "Compréhension de texte",
        description: "Lire et répondre aux questions sur un texte narratif",
        type: "reading",
        difficulty: "difficile",
        duration: "30 min",
        points: 35,
        completed: false,
        rating: 4.3,
        questions: 12,
        category: "Lecture",
        createdBy: "Mme Keita",
        createdAt: "2024-01-20"
      }
    ],
    Mathématiques: [
      {
        id: 4,
        title: "Addition et soustraction",
        description: "Résoudre des opérations avec des nombres entiers",
        type: "calculation",
        difficulty: "facile",
        duration: "10 min",
        points: 15,
        completed: true,
        rating: 4.7,
        questions: 6,
        category: "Calcul",
        createdBy: "M. Barry",
        createdAt: "2024-01-18"
      },
      {
        id: 5,
        title: "Les fractions",
        description: "Comprendre et calculer avec les fractions simples",
        type: "qcm",
        difficulty: "moyen",
        duration: "25 min",
        points: 30,
        completed: false,
        rating: 4.2,
        questions: 15,
        category: "Fractions",
        createdBy: "Mme Touré",
        createdAt: "2024-01-12"
      },
      {
        id: 6,
        title: "Géométrie - Les formes",
        description: "Identifier et dessiner les formes géométriques de base",
        type: "qcm",
        difficulty: "facile",
        duration: "20 min",
        points: 20,
        completed: false,
        rating: 4.6,
        questions: 10,
        category: "Géométrie",
        createdBy: "M. Soumah",
        createdAt: "2024-01-25"
      }
    ]
  };

  // Charger les exercices (simulation API)
  useEffect(() => {
    setLoading(true);
    // Simulation d'un appel API
    setTimeout(() => {
      const exercicesData = sampleExercices[activeMatiere.name] || [];
      setExercices(exercicesData);
      setFilteredExercices(exercicesData);
      setLoading(false);
    }, 800);
  }, [activeMatiere]);

  // Filtrer les exercices
  useEffect(() => {
    let filtered = exercices;

    // Filtrer par recherche
    if (searchTerm) {
      filtered = filtered.filter(ex => 
        ex.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ex.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ex.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtrer par type
    if (selectedType !== "all") {
      filtered = filtered.filter(ex => ex.type === selectedType);
    }

    // Filtrer par difficulté
    if (selectedDifficulty !== "all") {
      filtered = filtered.filter(ex => ex.difficulty === selectedDifficulty);
    }

    setFilteredExercices(filtered);
  }, [searchTerm, selectedType, selectedDifficulty, exercices]);

  const getDifficultyColor = (difficulty) => {
    const colors = {
      facile: "#10B981",
      moyen: "#F59E0B", 
      difficile: "#EF4444"
    };
    return colors[difficulty] || "#64748B";
  };

  const getDifficultyBg = (difficulty) => {
    const colors = {
      facile: "#D1FAE5",
      moyen: "#FEF3C7", 
      difficile: "#FEE2E2"
    };
    return colors[difficulty] || "#F1F5F9";
  };

  const stats = {
    total: exercices.length,
    completed: exercices.filter(ex => ex.completed).length,
    avgRating: exercices.length > 0 ? (exercices.reduce((acc, ex) => acc + ex.rating, 0) / exercices.length).toFixed(1) : 0,
    totalPoints: exercices.reduce((acc, ex) => acc + (ex.completed ? ex.points : 0), 0)
  };

  return (
    <div style={{
      background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      minHeight: "100vh",
      padding: "40px 0"
    }}>
      <div style={{ 
        width: "95%", 
        maxWidth: "1400px",
        margin: "0 auto", 
        fontFamily: "'Inter', sans-serif",
        padding: "0 20px"
      }}>
        {/* Header */}
        <div style={{
          textAlign: "center",
          marginBottom: "50px",
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(20px)",
          borderRadius: "24px",
          padding: "40px 20px",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
        }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 20px",
            background: "linear-gradient(90deg, #3b82f6, #10b981)",
            borderRadius: "25px",
            color: "white",
            fontSize: "14px",
            fontWeight: "600",
            marginBottom: "20px"
          }}>
            <FaGraduationCap />
            EXERCICES 6ÈME
          </div>

          <h2 style={{
            fontSize: "42px",
            fontWeight: "800",
            color: "#1e293b",
            marginBottom: "15px",
            lineHeight: "1.2"
          }}>
            Entraînez-vous et <span style={{
              background: "linear-gradient(90deg, #6C63FF, #2563EB)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>progressez</span>
          </h2>

          <p style={{
            fontSize: "18px",
            color: "#64748b",
            maxWidth: "600px",
            margin: "0 auto"
          }}>
            Exercices interactifs adaptés au programme guinéen de 6ème
          </p>
        </div>

        {/* Sélection des matières */}
        <div style={{
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(20px)",
          borderRadius: "20px",
          padding: "30px",
          marginBottom: "40px",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
        }}>
          <h3 style={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#1e293b",
            marginBottom: "25px",
            textAlign: "center"
          }}>
            Choisissez votre matière
          </h3>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px"
          }}>
            {matieres.map((matiere) => {
              const IconComponent = matiere.icon;
              const isActive = activeMatiere.id === matiere.id;
              
              return (
                <button
                  key={matiere.id}
                  onClick={() => setActiveMatiere(matiere)}
                  style={{
                    padding: "25px",
                    cursor: "pointer",
                    border: `2px solid ${isActive ? matiere.color : '#e2e8f0'}`,
                    borderRadius: "16px",
                    background: isActive ? matiere.gradient : "#ffffff",
                    color: isActive ? "#ffffff" : "#1e293b",
                    fontWeight: "600",
                    fontSize: "16px",
                    boxShadow: isActive ? `0 8px 25px ${matiere.color}30` : "0 2px 8px rgba(0,0,0,0.04)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    textAlign: "left",
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    transform: isActive ? "translateY(-2px)" : "none"
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = matiere.color;
                      e.currentTarget.style.boxShadow = `0 4px 12px ${matiere.color}20`;
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = "#e2e8f0";
                      e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
                      e.currentTarget.style.transform = "none";
                    }
                  }}
                >
                  <div style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    background: isActive ? "rgba(255, 255, 255, 0.2)" : matiere.bgColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <IconComponent style={{ 
                      fontSize: "24px", 
                      color: isActive ? "#ffffff" : matiere.color 
                    }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "18px", fontWeight: "700", marginBottom: "4px" }}>
                      {matiere.name}
                    </div>
                    <div style={{ 
                      fontSize: "14px", 
                      opacity: "0.8",
                      fontWeight: "400"
                    }}>
                      {matiere.description}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Statistiques */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginBottom: "40px"
        }}>
          {[
            { icon: FaBook, label: "Total", value: stats.total, color: "#3b82f6" },
            { icon: FaCheckCircle, label: "Terminés", value: stats.completed, color: "#10b981" },
            { icon: FaStar, label: "Note moy.", value: stats.avgRating, color: "#f59e0b" },
            { icon: FaTrophy, label: "Points", value: stats.totalPoints, color: "#ef4444" }
          ].map((stat, index) => (
            <div key={index} style={{
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)",
              borderRadius: "16px",
              padding: "20px",
              textAlign: "center",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)"
            }}>
              <div style={{
                width: "50px",
                height: "50px",
                background: `${stat.color}15`,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 10px"
              }}>
                <stat.icon style={{ fontSize: "20px", color: stat.color }} />
              </div>
              <div style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#1e293b",
                marginBottom: "5px"
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: "12px",
                color: "#64748b",
                fontWeight: "500"
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Filtres et recherche */}
        <div style={{
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(20px)",
          borderRadius: "20px",
          padding: "25px",
          marginBottom: "30px",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)"
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "20px",
            alignItems: "center"
          }}>
            {/* Recherche */}
            <div style={{ position: "relative" }}>
              <FaSearch style={{
                position: "absolute",
                left: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#94a3b8",
                fontSize: "16px"
              }} />
              <input
                type="text"
                placeholder="Rechercher un exercice..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 20px 12px 45px",
                  border: "2px solid #e2e8f0",
                  borderRadius: "12px",
                  fontSize: "16px",
                  backgroundColor: "#f8fafc",
                  transition: "all 0.3s ease",
                  boxSizing: "border-box",
                  outline: "none"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = activeMatiere.color;
                  e.target.style.backgroundColor = "#ffffff";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e2e8f0";
                  e.target.style.backgroundColor = "#f8fafc";
                }}
              />
            </div>

            {/* Filtre par type */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              style={{
                padding: "12px 15px",
                border: "2px solid #e2e8f0",
                borderRadius: "12px",
                fontSize: "16px",
                backgroundColor: "#f8fafc",
                cursor: "pointer",
                outline: "none"
              }}
            >
              {typeExercices.map(type => (
                <option key={type.id} value={type.id}>{type.name}</option>
              ))}
            </select>

            {/* Filtre par difficulté */}
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              style={{
                padding: "12px 15px",
                border: "2px solid #e2e8f0",
                borderRadius: "12px",
                fontSize: "16px",
                backgroundColor: "#f8fafc",
                cursor: "pointer",
                outline: "none"
              }}
            >
              <option value="all">Toutes difficultés</option>
              <option value="facile">Facile</option>
              <option value="moyen">Moyen</option>
              <option value="difficile">Difficile</option>
            </select>
          </div>
        </div>

        {/* Liste des exercices */}
        <div style={{
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(20px)",
          borderRadius: "20px",
          padding: "30px",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            marginBottom: "30px",
            paddingBottom: "20px",
            borderBottom: "2px solid #f1f5f9"
          }}>
            <div style={{
              width: "50px",
              height: "50px",
              borderRadius: "12px",
              background: activeMatiere.gradient,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <activeMatiere.icon style={{ fontSize: "24px", color: "#ffffff" }} />
            </div>
            <div>
              <h3 style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#1e293b",
                margin: "0 0 5px 0"
              }}>
                Exercices de {activeMatiere.name}
              </h3>
              <p style={{
                fontSize: "14px",
                color: "#64748b",
                margin: 0
              }}>
                {filteredExercices.length} exercice{filteredExercices.length > 1 ? 's' : ''} disponible{filteredExercices.length > 1 ? 's' : ''}
              </p>
            </div>
          </div>

          {loading ? (
            <div style={{
              textAlign: "center",
              padding: "60px 20px",
              color: "#64748b"
            }}>
              <FaSpinner style={{
                fontSize: "32px",
                animation: "spin 1s linear infinite",
                marginBottom: "15px"
              }} />
              <p style={{ fontSize: "16px", margin: 0 }}>Chargement des exercices...</p>
            </div>
          ) : filteredExercices.length === 0 ? (
            <div style={{
              textAlign: "center",
              padding: "60px 20px",
              color: "#64748b"
            }}>
              <FaBook style={{ fontSize: "48px", marginBottom: "20px", opacity: 0.5 }} />
              <h4 style={{ fontSize: "20px", marginBottom: "10px" }}>Aucun exercice trouvé</h4>
              <p style={{ fontSize: "16px", margin: 0 }}>
                {searchTerm || selectedType !== "all" || selectedDifficulty !== "all" 
                  ? "Essayez de modifier vos filtres de recherche"
                  : "Les exercices seront bientôt disponibles"
                }
              </p>
            </div>
          ) : (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
              gap: "25px"
            }}>
              {filteredExercices.map((exercice, index) => (
                <div
                  key={exercice.id}
                  style={{
                    background: "#ffffff",
                    borderRadius: "16px",
                    padding: "25px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    border: "1px solid #f1f5f9",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = `0 12px 25px ${activeMatiere.color}15`;
                    e.currentTarget.style.borderColor = activeMatiere.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
                    e.currentTarget.style.borderColor = "#f1f5f9";
                  }}
                >
                  {/* Badge de statut */}
                  {exercice.completed && (
                    <div style={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      background: "#10b981",
                      color: "white",
                      padding: "4px 8px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px"
                    }}>
                      <FaCheckCircle style={{ fontSize: "10px" }} />
                      Terminé
                    </div>
                  )}

                  {/* Header de l'exercice */}
                  <div style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "15px",
                    marginBottom: "20px"
                  }}>
                    <div style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      background: `${activeMatiere.color}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      fontWeight: "700",
                      color: activeMatiere.color,
                      flexShrink: 0
                    }}>
                      {index + 1}
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h4 style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#1e293b",
                        marginBottom: "8px",
                        lineHeight: "1.3"
                      }}>
                        {exercice.title}
                      </h4>

                      <p style={{
                        fontSize: "14px",
                        color: "#64748b",
                        lineHeight: "1.5",
                        margin: "0 0 10px 0"
                      }}>
                        {exercice.description}
                      </p>

                      <div style={{
                        display: "inline-block",
                        padding: "4px 10px",
                        background: getDifficultyBg(exercice.difficulty),
                        color: getDifficultyColor(exercice.difficulty),
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "600",
                        textTransform: "capitalize"
                      }}>
                        {exercice.difficulty}
                      </div>
                    </div>
                  </div>

                  {/* Informations de l'exercice */}
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "15px",
                    marginBottom: "20px",
                    padding: "15px",
                    background: "#f8fafc",
                    borderRadius: "12px"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <FaClock style={{ fontSize: "14px", color: "#64748b" }} />
                      <span style={{ fontSize: "13px", color: "#64748b" }}>{exercice.duration}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <FaUserGraduate style={{ fontSize: "14px", color: "#64748b" }} />
                      <span style={{ fontSize: "13px", color: "#64748b" }}>{exercice.questions} questions</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <FaStar style={{ fontSize: "14px", color: "#f59e0b" }} />
                      <span style={{ fontSize: "13px", color: "#64748b" }}>{exercice.rating}/5</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <FaTrophy style={{ fontSize: "14px", color: "#ef4444" }} />
                      <span style={{ fontSize: "13px", color: "#64748b" }}>{exercice.points} pts</span>
                    </div>
                  </div>

                  {/* Métadonnées */}
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                    padding: "10px 0",
                    borderTop: "1px solid #f1f5f9",
                    fontSize: "12px",
                    color: "#94a3b8"
                  }}>
                    <span>Par {exercice.createdBy}</span>
                    <span>{exercice.category}</span>
                  </div>

                  {/* Actions */}
                  <div style={{
                    display: "flex",
                    gap: "10px"
                  }}>
                    <button
                      style={{
                        flex: 1,
                        padding: "12px 20px",
                        background: activeMatiere.gradient,
                        color: "white",
                        border: "none",
                        borderRadius: "10px",
                        fontSize: "14px",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-1px)";
                        e.currentTarget.style.boxShadow = `0 4px 12px ${activeMatiere.color}30`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <FaPlay style={{ fontSize: "12px" }} />
                      {exercice.completed ? "Refaire" : "Commencer"}
                    </button>

                    <button
                      style={{
                        padding: "12px 16px",
                        background: "#ffffff",
                        color: "#64748b",
                        border: `1px solid ${activeMatiere.color}30`,
                        borderRadius: "10px",
                        fontSize: "14px",
                        cursor: "pointer",
                        transition: "all 0.2s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${activeMatiere.color}10`;
                        e.currentTarget.style.color = activeMatiere.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#ffffff";
                        e.currentTarget.style.color = "#64748b";
                      }}
                    >
                      <FaEye />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Section admin (optionnelle - pour information) */}
      
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: 2fr 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          
          div[style*="gridTemplateColumns: repeat(auto-fill, minmax(380px, 1fr))"] {
            grid-template-columns: 1fr !important;
          }
          
          h2[style*="fontSize: 42px"] {
            font-size: 32px !important;
          }
        }
      `}</style>
    </div>
  );
}