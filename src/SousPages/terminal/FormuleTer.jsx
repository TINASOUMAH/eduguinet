import React, { useState } from "react";
import { FaCalculator, FaAtom, FaBrain, FaBook, FaGlobeAfrica, FaLanguage, FaSearch, FaCopy, FaBookmark, FaFormula } from "react-icons/fa";

// Formules par matière pour Terminale
const formulesData = [
  {
    id: 1,
    matiere: "Mathématiques",
    icon: FaCalculator,
    color: "#2563eb",
    gradient: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
    bgColor: "#eff6ff",
    categories: [
      {
        id: 1,
        nom: "Analyse",
        formules: [
          {
            id: 1,
            titre: "Dérivée de e^x",
            formule: "(e^x)' = e^x",
            description: "La dérivée de l'exponentielle est elle-même"
          },
          {
            id: 2,
            titre: "Dérivée de ln(x)",
            formule: "(ln(x))' = 1/x",
            description: "Dérivée du logarithme népérien"
          },
          {
            id: 3,
            titre: "Intégrale de e^x",
            formule: "∫e^x dx = e^x + C",
            description: "Primitive de l'exponentielle"
          }
        ]
      },
      {
        id: 2,
        nom: "Probabilités",
        formules: [
          {
            id: 1,
            titre: "Probabilité conditionnelle",
            formule: "P(A|B) = P(A∩B) / P(B)",
            description: "Probabilité de A sachant B"
          },
          {
            id: 2,
            titre: "Formule de Bayes",
            formule: "P(A|B) = P(B|A) × P(A) / P(B)",
            description: "Théorème de Bayes"
          }
        ]
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
    categories: [
      {
        id: 1,
        nom: "Mécanique",
        formules: [
          {
            id: 1,
            titre: "Force de Newton",
            formule: "F = ma",
            description: "Deuxième loi de Newton"
          },
          {
            id: 2,
            titre: "Énergie cinétique",
            formule: "Ec = ½mv²",
            description: "Énergie cinétique d'un objet en mouvement"
          },
          {
            id: 3,
            titre: "Énergie potentielle",
            formule: "Ep = mgh",
            description: "Énergie potentielle gravitationnelle"
          }
        ]
      },
      {
        id: 2,
        nom: "Thermodynamique",
        formules: [
          {
            id: 1,
            titre: "Premier principe",
            formule: "ΔU = Q - W",
            description: "Conservation de l'énergie"
          },
          {
            id: 2,
            titre: "Gaz parfait",
            formule: "PV = nRT",
            description: "Équation d'état des gaz parfaits"
          }
        ]
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
    categories: [
      {
        id: 1,
        nom: "Méthodologie",
        formules: [
          {
            id: 1,
            titre: "Plan de dissertation",
            formule: "Thèse → Antithèse → Synthèse",
            description: "Structure dialectique classique"
          },
          {
            id: 2,
            titre: "Commentaire de texte",
            formule: "Introduction → Explication → Discussion",
            description: "Structure du commentaire philosophique"
          }
        ]
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
    categories: [
      {
        id: 1,
        nom: "Figures de style",
        formules: [
          {
            id: 1,
            titre: "Métaphore",
            formule: "Comparaison implicite",
            description: "Figure d'analogie sans outil de comparaison"
          },
          {
            id: 2,
            titre: "Métonymie",
            formule: "Substitution par relation logique",
            description: "Remplacer un terme par un autre lié logiquement"
          }
        ]
      }
    ]
  }
];

export default function FormuleTer() {
  const [selectedMatiere, setSelectedMatiere] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [savedFormules, setSavedFormules] = useState([]);

  // Filtrer les matières selon le terme de recherche
  const filteredMatieres = formulesData.filter(matiere =>
    matiere.matiere.toLowerCase().includes(searchTerm.toLowerCase()) ||
    matiere.categories.some(cat => 
      cat.formules.some(f => 
        f.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.formule.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  );

  const copyFormule = (formule) => {
    navigator.clipboard.writeText(formule.formule);
    console.log(`Formule copiée: ${formule.formule}`);
  };

  const saveFormule = (formule) => {
    if (!savedFormules.find(f => f.id === formule.id)) {
      setSavedFormules([...savedFormules, formule]);
      console.log(`Formule sauvegardée: ${formule.titre}`);
    }
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
          <FaFormula style={{ color: "#059669" }} />
          Formules & Méthodes - Terminale
        </h1>
        
        <p style={{ 
          color: "#64748b",
          fontSize: "1.1rem",
          marginBottom: "25px"
        }}>
          Formulaires et aide-mémoires pour réussir vos examens
        </p>

        {/* Barre de recherche */}
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
          <div style={{ position: "relative" }}>
            <FaSearch style={{
              position: "absolute",
              left: "15px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#64748b"
            }} />
            <input
              type="text"
              placeholder="Rechercher une formule..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 20px 12px 45px",
                borderRadius: "25px",
                border: "2px solid #e2e8f0",
                fontSize: "1rem",
                outline: "none",
                transition: "border-color 0.3s ease"
              }}
              onFocus={(e) => e.target.style.borderColor = "#3b82f6"}
              onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
            />
          </div>
        </div>
      </div>

      {/* Grille des matières */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        gap: "25px"
      }}>
        {filteredMatieres.map((matiere) => {
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
                    {matiere.categories.length} catégories disponibles
                  </p>
                </div>
              </div>

              {/* Catégories et formules */}
              {selectedMatiere === matiere.id && (
                <div style={{ marginTop: "20px" }}>
                  {matiere.categories.map((category) => (
                    <div key={category.id} style={{ marginBottom: "20px" }}>
                      {/* Nom de la catégorie */}
                      <h4 
                        onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: "600",
                          color: matiere.color,
                          margin: "0 0 15px 0",
                          cursor: "pointer",
                          padding: "10px",
                          background: "white",
                          borderRadius: "8px",
                          border: "1px solid #e2e8f0"
                        }}
                      >
                        📁 {category.nom} ({category.formules.length} formules)
                      </h4>

                      {/* Formules de la catégorie */}
                      {(selectedCategory === category.id || searchTerm) && (
                        <div style={{ marginLeft: "10px" }}>
                          {category.formules.map((formule) => (
                            <div
                              key={formule.id}
                              style={{
                                background: "white",
                                padding: "15px",
                                borderRadius: "10px",
                                marginBottom: "10px",
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
                                marginBottom: "10px"
                              }}>
                                <div style={{ flex: 1 }}>
                                  <h5 style={{
                                    fontSize: "1rem",
                                    fontWeight: "600",
                                    color: "#1e293b",
                                    margin: "0 0 8px 0"
                                  }}>
                                    {formule.titre}
                                  </h5>
                                  
                                  {/* Formule avec style mathématique */}
                                  <div style={{
                                    background: "#f8fafc",
                                    padding: "12px",
                                    borderRadius: "8px",
                                    border: "1px solid #e2e8f0",
                                    fontFamily: "monospace",
                                    fontSize: "1.1rem",
                                    color: matiere.color,
                                    fontWeight: "600",
                                    textAlign: "center",
                                    marginBottom: "8px"
                                  }}>
                                    {formule.formule}
                                  </div>
                                  
                                  <p style={{
                                    color: "#64748b",
                                    fontSize: "0.9rem",
                                    margin: "0",
                                    fontStyle: "italic"
                                  }}>
                                    {formule.description}
                                  </p>
                                </div>
                                
                                {/* Actions */}
                                <div style={{ display: "flex", gap: "8px", marginLeft: "15px" }}>
                                  <button
                                    onClick={() => copyFormule(formule)}
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
                                    title="Copier la formule"
                                  >
                                    <FaCopy style={{ color: "#64748b" }} />
                                  </button>
                                  <button
                                    onClick={() => saveFormule(formule)}
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
                                    title="Sauvegarder"
                                  >
                                    <FaBookmark style={{ color: "white" }} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Message si aucun résultat */}
      {filteredMatieres.length === 0 && (
        <div style={{
          textAlign: "center",
          padding: "40px",
          color: "#64748b"
        }}>
          <FaFormula style={{ fontSize: "3rem", marginBottom: "15px", opacity: 0.5 }} />
          <p style={{ fontSize: "1.1rem" }}>Aucune formule trouvée pour "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
}
