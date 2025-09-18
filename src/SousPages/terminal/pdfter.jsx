import React, { useState } from "react";
import { 
  FaFilePdf, 
  FaCalculator, 
  FaBook, 
  FaAtom, 
  FaBrain, 
  FaGlobeAfrica, 
  FaLanguage,
  FaDownload,
  FaEye,
  FaClock,
  FaStar
} from "react-icons/fa";

// ✅ Liste des matières avec icônes et couleurs thématiques
const matieres = [
  {
    id: 1,
    name: "Mathématiques",
    icon: FaCalculator,
    color: "#2563eb",
    gradient: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
    bgColor: "#eff6ff",
    pdfs: [
      { id: 1, title: "Analyse - Fonctions", file: "/pdfs/math_analyse.pdf", duration: "60min", rating: 4.8 },
      { id: 2, title: "Probabilités", file: "/pdfs/math_proba.pdf", duration: "45min", rating: 4.7 },
      { id: 3, title: "Géométrie dans l'espace", file: "/pdfs/math_geo.pdf", duration: "50min", rating: 4.9 },
    ],
  },
  {
    id: 2,
    name: "Physique-Chimie",
    icon: FaAtom,
    color: "#7c3aed",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
    bgColor: "#f3f4f6",
    pdfs: [
      { id: 1, title: "Mécanique", file: "/pdfs/physique_mecanique.pdf", duration: "55min", rating: 4.6 },
      { id: 2, title: "Thermodynamique", file: "/pdfs/physique_thermo.pdf", duration: "40min", rating: 4.8 },
      { id: 3, title: "Chimie organique", file: "/pdfs/chimie_organique.pdf", duration: "45min", rating: 4.5 },
    ],
  },
  {
    id: 3,
    name: "Philosophie",
    icon: FaBrain,
    color: "#dc2626",
    gradient: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
    bgColor: "#fef2f2",
    pdfs: [
      { id: 1, title: "La conscience", file: "/pdfs/philo_conscience.pdf", duration: "50min", rating: 4.7 },
      { id: 2, title: "La liberté", file: "/pdfs/philo_liberte.pdf", duration: "45min", rating: 4.6 },
      { id: 3, title: "Le bonheur", file: "/pdfs/philo_bonheur.pdf", duration: "40min", rating: 4.8 },
    ],
  },
  {
    id: 4,
    name: "Français",
    icon: FaBook,
    color: "#059669",
    gradient: "linear-gradient(135deg, #059669 0%, #047857 100%)",
    bgColor: "#ecfdf5",
    pdfs: [
      { id: 1, title: "Dissertation", file: "/pdfs/francais_dissertation.pdf", duration: "60min", rating: 4.5 },
      { id: 2, title: "Commentaire de texte", file: "/pdfs/francais_commentaire.pdf", duration: "55min", rating: 4.7 },
      { id: 3, title: "Littérature", file: "/pdfs/francais_litterature.pdf", duration: "50min", rating: 4.6 },
    ],
  },
  {
    id: 5,
    name: "Histoire-Géographie",
    icon: FaGlobeAfrica,
    color: "#d97706",
    gradient: "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
    bgColor: "#fffbeb",
    pdfs: [
      { id: 1, title: "Monde contemporain", file: "/pdfs/histoire_contemporain.pdf", duration: "50min", rating: 4.6 },
      { id: 2, title: "Géopolitique", file: "/pdfs/geo_geopolitique.pdf", duration: "45min", rating: 4.7 },
      { id: 3, title: "Mondialisation", file: "/pdfs/geo_mondialisation.pdf", duration: "40min", rating: 4.8 },
    ],
  },
  {
    id: 6,
    name: "Anglais",
    icon: FaLanguage,
    color: "#7c2d12",
    gradient: "linear-gradient(135deg, #7c2d12 0%, #581c0c 100%)",
    bgColor: "#fef7f0",
    pdfs: [
      { id: 1, title: "Expression écrite", file: "/pdfs/anglais_ecrit.pdf", duration: "40min", rating: 4.5 },
      { id: 2, title: "Compréhension", file: "/pdfs/anglais_comprehension.pdf", duration: "35min", rating: 4.6 },
      { id: 3, title: "Grammaire avancée", file: "/pdfs/anglais_grammaire.pdf", duration: "30min", rating: 4.7 },
    ],
  },
];

export default function PdfTer() {
  const [selectedMatiere, setSelectedMatiere] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrer les matières selon le terme de recherche
  const filteredMatieres = matieres.filter(matiere =>
    matiere.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownload = (pdf) => {
    console.log(`Téléchargement de: ${pdf.title}`);
    // Ici vous pouvez ajouter la logique de téléchargement
  };

  const handlePreview = (pdf) => {
    console.log(`Aperçu de: ${pdf.title}`);
    // Ici vous pouvez ajouter la logique d'aperçu
  };

  return (
    <div style={{ 
      padding: "20px", 
      backgroundColor: "#f8fafc",
      minHeight: "100vh"
    }}>
      {/* Header avec titre et barre de recherche */}
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
          <FaFilePdf style={{ color: "#dc2626" }} />
          Documents PDF - Terminale
        </h1>
        
        <p style={{ 
          color: "#64748b",
          fontSize: "1.1rem",
          marginBottom: "25px"
        }}>
          Accédez à tous vos documents PDF organisés par matière
        </p>

        {/* Barre de recherche */}
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
          <input
            type="text"
            placeholder="🔍 Rechercher une matière..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 20px",
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

      {/* Grille des matières */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "25px",
        marginBottom: "30px"
      }}>
        {filteredMatieres.map((matiere) => {
          const IconComponent = matiere.icon;
          return (
            <div
              key={matiere.id}
              onClick={() => setSelectedMatiere(selectedMatiere === matiere.id ? null : matiere.id)}
              style={{
                background: matiere.bgColor,
                border: `2px solid ${selectedMatiere === matiere.id ? matiere.color : 'transparent'}`,
                borderRadius: "16px",
                padding: "25px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: selectedMatiere === matiere.id 
                  ? `0 8px 25px ${matiere.color}30`
                  : "0 4px 15px rgba(0,0,0,0.08)",
                transform: selectedMatiere === matiere.id ? "translateY(-2px)" : "translateY(0)"
              }}
            >
              {/* Header de la carte */}
              <div style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px"
              }}>
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
                <div>
                  <h3 style={{
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    color: "#1e293b",
                    margin: "0"
                  }}>
                    {matiere.name}
                  </h3>
                  <p style={{
                    color: "#64748b",
                    fontSize: "0.9rem",
                    margin: "5px 0 0 0"
                  }}>
                    {matiere.pdfs.length} documents disponibles
                  </p>
                </div>
              </div>

              {/* Liste des PDFs (visible si sélectionné) */}
              {selectedMatiere === matiere.id && (
                <div style={{ marginTop: "20px" }}>
                  {matiere.pdfs.map((pdf) => (
                    <div
                      key={pdf.id}
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
                        alignItems: "center"
                      }}>
                        <div style={{ flex: 1 }}>
                          <h4 style={{
                            fontSize: "1rem",
                            fontWeight: "600",
                            color: "#1e293b",
                            margin: "0 0 5px 0"
                          }}>
                            {pdf.title}
                          </h4>
                          <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "15px",
                            fontSize: "0.85rem",
                            color: "#64748b"
                          }}>
                            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                              <FaClock /> {pdf.duration}
                            </span>
                            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                              <FaStar style={{ color: "#fbbf24" }} /> {pdf.rating}
                            </span>
                          </div>
                        </div>
                        
                        <div style={{ display: "flex", gap: "8px" }}>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePreview(pdf);
                            }}
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
                          >
                            <FaEye style={{ color: "#64748b" }} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDownload(pdf);
                            }}
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

      {/* Message si aucun résultat */}
      {filteredMatieres.length === 0 && (
        <div style={{
          textAlign: "center",
          padding: "40px",
          color: "#64748b"
        }}>
          <FaFilePdf style={{ fontSize: "3rem", marginBottom: "15px", opacity: 0.5 }} />
          <p style={{ fontSize: "1.1rem" }}>Aucune matière trouvée pour "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
}
