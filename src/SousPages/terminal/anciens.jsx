import React, { useState } from "react";
import { FaFileAlt, FaCalculator, FaAtom, FaBrain, FaBook, FaGlobeAfrica, FaLanguage, FaDownload, FaEye, FaClock, FaStar, FaCalendarAlt } from "react-icons/fa";

// Anciens sujets par matière pour Terminale
const anciensData = [
  {
    id: 1,
    matiere: "Mathématiques",
    icon: FaCalculator,
    color: "#2563eb",
    gradient: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
    bgColor: "#eff6ff",
    sujets: [
      {
        id: 1,
        titre: "Baccalauréat 2023 - Série S",
        annee: "2023",
        type: "Baccalauréat",
        duree: "4h",
        note: 4.8,
        difficulte: "Difficile",
        file: "/sujets/math_bac_2023.pdf"
      },
      {
        id: 2,
        titre: "Baccalauréat 2022 - Série S",
        annee: "2022",
        type: "Baccalauréat",
        duree: "4h",
        note: 4.7,
        difficulte: "Difficile",
        file: "/sujets/math_bac_2022.pdf"
      },
      {
        id: 3,
        titre: "Examen Blanc 2023",
        annee: "2023",
        type: "Examen Blanc",
        duree: "3h",
        note: 4.6,
        difficulte: "Moyen",
        file: "/sujets/math_blanc_2023.pdf"
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
    sujets: [
      {
        id: 1,
        titre: "Baccalauréat 2023 - Série S",
        annee: "2023",
        type: "Baccalauréat",
        duree: "3h30",
        note: 4.5,
        difficulte: "Difficile",
        file: "/sujets/physique_bac_2023.pdf"
      },
      {
        id: 2,
        titre: "Baccalauréat 2022 - Série S",
        annee: "2022",
        type: "Baccalauréat",
        duree: "3h30",
        note: 4.6,
        difficulte: "Difficile",
        file: "/sujets/physique_bac_2022.pdf"
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
    sujets: [
      {
        id: 1,
        titre: "Baccalauréat 2023 - Toutes séries",
        annee: "2023",
        type: "Baccalauréat",
        duree: "4h",
        note: 4.7,
        difficulte: "Difficile",
        file: "/sujets/philo_bac_2023.pdf"
      },
      {
        id: 2,
        titre: "Baccalauréat 2022 - Toutes séries",
        annee: "2022",
        type: "Baccalauréat",
        duree: "4h",
        note: 4.8,
        difficulte: "Difficile",
        file: "/sujets/philo_bac_2022.pdf"
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
    sujets: [
      {
        id: 1,
        titre: "Baccalauréat 2023 - Écrit",
        annee: "2023",
        type: "Baccalauréat",
        duree: "4h",
        note: 4.6,
        difficulte: "Difficile",
        file: "/sujets/francais_bac_2023.pdf"
      },
      {
        id: 2,
        titre: "Baccalauréat 2022 - Écrit",
        annee: "2022",
        type: "Baccalauréat",
        duree: "4h",
        note: 4.7,
        difficulte: "Difficile",
        file: "/sujets/francais_bac_2022.pdf"
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

const getTypeColor = (type) => {
  switch(type) {
    case "Baccalauréat": return "#dc2626";
    case "Examen Blanc": return "#f59e0b";
    case "Contrôle": return "#059669";
    default: return "#6b7280";
  }
};

export default function AnciensujetTer() {
  const [selectedMatiere, setSelectedMatiere] = useState(null);
  const [filterYear, setFilterYear] = useState("all");
  const [filterType, setFilterType] = useState("all");

  const handleDownload = (sujet) => {
    console.log(`Téléchargement de: ${sujet.titre}`);
    // Logique de téléchargement
  };

  const handlePreview = (sujet) => {
    console.log(`Aperçu de: ${sujet.titre}`);
    // Logique d'aperçu
  };

  // Obtenir les années disponibles
  const availableYears = [...new Set(
    anciensData.flatMap(matiere => matiere.sujets.map(s => s.annee))
  )].sort((a, b) => b - a);

  // Obtenir les types disponibles
  const availableTypes = [...new Set(
    anciensData.flatMap(matiere => matiere.sujets.map(s => s.type))
  )];

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
          <FaFileAlt style={{ color: "#dc2626" }} />
          Anciens Sujets - Terminale
        </h1>
        
        <p style={{ 
          color: "#64748b",
          fontSize: "1.1rem",
          marginBottom: "25px"
        }}>
          Examens et épreuves des années précédentes pour vous entraîner
        </p>

        {/* Filtres */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "20px",
          flexWrap: "wrap"
        }}>
          <select
            value={filterYear}
            onChange={(e) => setFilterYear(e.target.value)}
            style={{
              padding: "8px 12px",
              borderRadius: "8px",
              border: "2px solid #e2e8f0",
              fontSize: "0.9rem",
              outline: "none"
            }}
          >
            <option value="all">Toutes les années</option>
            {availableYears.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>

          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            style={{
              padding: "8px 12px",
              borderRadius: "8px",
              border: "2px solid #e2e8f0",
              fontSize: "0.9rem",
              outline: "none"
            }}
          >
            <option value="all">Tous les types</option>
            {availableTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Grille des matières */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gap: "25px"
      }}>
        {anciensData.map((matiere) => {
          const IconComponent = matiere.icon;
          
          // Filtrer les sujets selon les critères
          const filteredSujets = matiere.sujets.filter(sujet => {
            const yearMatch = filterYear === "all" || sujet.annee === filterYear;
            const typeMatch = filterType === "all" || sujet.type === filterType;
            return yearMatch && typeMatch;
          });

          if (filteredSujets.length === 0) return null;

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
                    {filteredSujets.length} sujets disponibles
                  </p>
                </div>
              </div>

              {/* Liste des sujets */}
              {selectedMatiere === matiere.id && (
                <div style={{ marginTop: "20px" }}>
                  {filteredSujets.map((sujet) => (
                    <div
                      key={sujet.id}
                      style={{
                        background: "white",
                        padding: "20px",
                        borderRadius: "12px",
                        marginBottom: "15px",
                        border: "1px solid #e2e8f0",
                        transition: "all 0.2s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                        e.currentTarget.style.transform = "translateY(-1px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.transform = "translateY(0)";
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
                              {sujet.titre}
                            </h4>
                            <span style={{
                              background: getTypeColor(sujet.type),
                              color: "white",
                              padding: "2px 8px",
                              borderRadius: "12px",
                              fontSize: "0.75rem",
                              fontWeight: "600"
                            }}>
                              {sujet.type}
                            </span>
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
                              <FaCalendarAlt /> {sujet.annee}
                            </span>
                            <span style={{ 
                              display: "flex", 
                              alignItems: "center", 
                              gap: "5px",
                              color: "#64748b"
                            }}>
                              <FaClock /> {sujet.duree}
                            </span>
                            <span style={{ 
                              display: "flex", 
                              alignItems: "center", 
                              gap: "5px",
                              color: getDifficultyColor(sujet.difficulte)
                            }}>
                              ● {sujet.difficulte}
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
                            {sujet.note} • Note moyenne
                          </div>
                        </div>
                        
                        {/* Actions */}
                        <div style={{ display: "flex", gap: "8px", marginLeft: "15px" }}>
                          <button
                            onClick={() => handlePreview(sujet)}
                            style={{
                              background: "#f1f5f9",
                              border: "none",
                              padding: "8px",
                              borderRadius: "6px",
                              cursor: "pointer",
                              transition: "background 0.2s ease"
                            }}
                            onMouseEnter={(e) => e.target.style.background = "#e2e8f0"}
                            onMouseLeave={(e) => e.target.style.background = "#f1f5f9"}
                            title="Aperçu"
                          >
                            <FaEye style={{ color: "#64748b" }} />
                          </button>
                          <button
                            onClick={() => handleDownload(sujet)}
                            style={{
                              background: matiere.color,
                              border: "none",
                              padding: "8px",
                              borderRadius: "6px",
                              cursor: "pointer",
                              transition: "opacity 0.2s ease"
                            }}
                            onMouseEnter={(e) => e.target.style.opacity = "0.8"}
                            onMouseLeave={(e) => e.target.style.opacity = "1"}
                            title="Télécharger"
                          >
                            <FaDownload style={{ color: "white" }} />
                          </button>
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

      {/* Message si aucun résultat après filtrage */}
      {anciensData.every(matiere => 
        matiere.sujets.filter(sujet => {
          const yearMatch = filterYear === "all" || sujet.annee === filterYear;
          const typeMatch = filterType === "all" || sujet.type === filterType;
          return yearMatch && typeMatch;
        }).length === 0
      ) && (
        <div style={{
          textAlign: "center",
          padding: "40px",
          color: "#64748b"
        }}>
          <FaFileAlt style={{ fontSize: "3rem", marginBottom: "15px", opacity: 0.5 }} />
          <p style={{ fontSize: "1.1rem" }}>Aucun sujet trouvé avec les filtres sélectionnés</p>
        </div>
      )}
    </div>
  );
}
