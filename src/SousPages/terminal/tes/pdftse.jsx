import React, { useState } from "react";
import {
  FaDownload,
  FaEye,
  FaSearch,
  FaFilter,
  FaThLarge,
  FaList,
  FaStar
} from "react-icons/fa";

// ✅ Liste des matières TSE avec icônes et couleurs thématiques
const matieres = [
  {
    id: 1,
    name: "Mathématiques",
    icon: "📊",
    color: "#3b82f6",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    pdfs: [
      { id: 1, title: "Analyse - Fonctions avancées", type: "Cours", pages: 45, size: "2.1 MB", difficulty: "Avancé", rating: 4.8 },
      { id: 2, title: "Probabilités et statistiques", type: "Exercices", pages: 32, size: "1.8 MB", difficulty: "Intermédiaire", rating: 4.6 },
      { id: 3, title: "Géométrie analytique", type: "Méthodes", pages: 28, size: "1.5 MB", difficulty: "Avancé", rating: 4.7 }
    ]
  },
  {
    id: 2,
    name: "Physique",
    icon: "⚛️",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
    pdfs: [
      { id: 4, title: "Mécanique expérimentale", type: "Cours", pages: 52, size: "2.8 MB", difficulty: "Avancé", rating: 4.9 },
      { id: 5, title: "Électromagnétisme appliqué", type: "Exercices", pages: 38, size: "2.2 MB", difficulty: "Avancé", rating: 4.5 },
      { id: 6, title: "Optique et ondes", type: "TP", pages: 25, size: "1.7 MB", difficulty: "Intermédiaire", rating: 4.4 }
    ]
  },
  {
    id: 3,
    name: "Chimie",
    icon: "🧪",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
    pdfs: [
      { id: 7, title: "Chimie organique avancée", type: "Cours", pages: 48, size: "2.5 MB", difficulty: "Avancé", rating: 4.7 },
      { id: 8, title: "Cinétique et thermodynamique", type: "Exercices", pages: 35, size: "2.0 MB", difficulty: "Avancé", rating: 4.6 },
      { id: 9, title: "Analyses spectroscopiques", type: "TP", pages: 30, size: "1.9 MB", difficulty: "Avancé", rating: 4.8 }
    ]
  },
  {
    id: 4,
    name: "Biologie",
    icon: "🧬",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    pdfs: [
      { id: 10, title: "Biologie moléculaire", type: "Cours", pages: 55, size: "3.1 MB", difficulty: "Avancé", rating: 4.9 },
      { id: 11, title: "Génétique et biotechnologies", type: "Exercices", pages: 42, size: "2.4 MB", difficulty: "Avancé", rating: 4.7 },
      { id: 12, title: "Écologie et environnement", type: "Projet", pages: 38, size: "2.2 MB", difficulty: "Intermédiaire", rating: 4.5 }
    ]
  }
];

export default function PdfCardsTSE() {
  const [activeMatiere, setActiveMatiere] = useState(matieres[0]);
  const [viewMode, setViewMode] = useState('grid'); // grid ou list

  const handleDownload = (pdf) => {
    console.log(`Téléchargement de: ${pdf.title}`);
    // Ici vous pouvez ajouter la logique de téléchargement
  };

  const handlePreview = (pdf) => {
    console.log(`Aperçu de: ${pdf.title}`);
    // Ici vous pouvez ajouter la logique d'aperçu
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", padding: "20px" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "50px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: "24px", padding: "40px 20px", color: "white", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-50%", right: "-10%", width: "200px", height: "200px", background: "rgba(255, 255, 255, 0.1)", borderRadius: "50%", filter: "blur(40px)" }}></div>
        <h1 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "15px", textShadow: "2px 2px 4px rgba(0,0,0,0.3)", position: "relative", zIndex: 2 }}>
          📚 Bibliothèque Numérique TSE
        </h1>
        <p style={{ fontSize: "18px", opacity: "0.9", marginBottom: "25px", position: "relative", zIndex: 2 }}>
          Programme Terminale Sciences Expérimentales • Ressources pédagogiques complètes
        </p>
        
        {/* Barre de recherche */}
        <div style={{ position: "relative", maxWidth: "500px", margin: "0 auto", zIndex: 2 }}>
          <FaSearch style={{ position: "absolute", left: "15px", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }} />
          <input
            type="text"
            placeholder="Rechercher un document..."
            style={{
              width: "100%",
              padding: "12px 45px",
              borderRadius: "25px",
              border: "none",
              fontSize: "16px",
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)"
            }}
          />
        </div>
      </div>

      <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", gap: "30px" }}>
        {/* Sidebar des matières */}
        <div style={{ width: "300px", background: "#fff", borderRadius: "20px", padding: "25px", height: "fit-content", boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "25px" }}>
            <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#1f2937", margin: 0 }}>Matières</h3>
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={() => setViewMode('grid')}
                style={{
                  padding: "8px",
                  borderRadius: "8px",
                  border: "none",
                  background: viewMode === 'grid' ? "#3b82f6" : "#f3f4f6",
                  color: viewMode === 'grid' ? "white" : "#6b7280",
                  cursor: "pointer"
                }}
              >
                <FaThLarge />
              </button>
              <button
                onClick={() => setViewMode('list')}
                style={{
                  padding: "8px",
                  borderRadius: "8px",
                  border: "none",
                  background: viewMode === 'list' ? "#3b82f6" : "#f3f4f6",
                  color: viewMode === 'list' ? "white" : "#6b7280",
                  cursor: "pointer"
                }}
              >
                <FaList />
              </button>
            </div>
          </div>
          
          {matieres.map(matiere => (
            <div
              key={matiere.id}
              onClick={() => setActiveMatiere(matiere)}
              style={{
                padding: "15px",
                borderRadius: "12px",
                marginBottom: "10px",
                cursor: "pointer",
                background: activeMatiere.id === matiere.id ? matiere.gradient : "#f9fafb",
                color: activeMatiere.id === matiere.id ? "white" : "#374151",
                transition: "all 0.3s ease",
                border: activeMatiere.id === matiere.id ? "none" : "1px solid #e5e7eb"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "24px" }}>{matiere.icon}</span>
                <div>
                  <div style={{ fontWeight: "600", fontSize: "16px" }}>{matiere.name}</div>
                  <div style={{ fontSize: "12px", opacity: "0.8" }}>
                    {matiere.pdfs.length} documents
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Zone principale des PDFs */}
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "25px" }}>
            <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#1f2937", margin: 0 }}>
              {activeMatiere.icon} {activeMatiere.name}
            </h2>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <button style={{ padding: "10px 20px", borderRadius: "10px", border: "1px solid #d1d5db", background: "white", color: "#374151", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
                <FaFilter /> Filtrer
              </button>
            </div>
          </div>

          {/* Grille des PDFs */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: viewMode === 'grid' ? "repeat(auto-fill, minmax(350px, 1fr))" : "1fr",
            gap: "25px" 
          }}>
            {activeMatiere.pdfs.map(pdf => (
              <div
                key={pdf.id}
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "25px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  border: "1px solid #f1f5f9"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 20px 35px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.08)";
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "15px" }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#1f2937", marginBottom: "8px", lineHeight: "1.3" }}>
                      {pdf.title}
                    </h3>
                    <div style={{ display: "flex", gap: "12px", marginBottom: "12px" }}>
                      <span style={{ 
                        padding: "4px 12px", 
                        borderRadius: "20px", 
                        fontSize: "12px", 
                        fontWeight: "600",
                        background: activeMatiere.color + "20",
                        color: activeMatiere.color
                      }}>
                        {pdf.type}
                      </span>
                      <span style={{ 
                        padding: "4px 12px", 
                        borderRadius: "20px", 
                        fontSize: "12px", 
                        fontWeight: "600",
                        background: pdf.difficulty === "Avancé" ? "#fef3c7" : "#dbeafe",
                        color: pdf.difficulty === "Avancé" ? "#d97706" : "#2563eb"
                      }}>
                        {pdf.difficulty}
                      </span>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "#fbbf24" }}>
                    <FaStar />
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#374151" }}>{pdf.rating}</span>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", color: "#6b7280", fontSize: "14px" }}>
                  <span>{pdf.pages} pages</span>
                  <span>{pdf.size}</span>
                </div>

                <div style={{ display: "flex", gap: "12px" }}>
                  <button
                    onClick={() => handlePreview(pdf)}
                    style={{
                      flex: 1,
                      padding: "12px",
                      borderRadius: "10px",
                      border: `2px solid ${activeMatiere.color}`,
                      background: "transparent",
                      color: activeMatiere.color,
                      fontWeight: "600",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      transition: "all 0.2s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = activeMatiere.color;
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = activeMatiere.color;
                    }}
                  >
                    <FaEye /> Aperçu
                  </button>
                  <button
                    onClick={() => handleDownload(pdf)}
                    style={{
                      flex: 1,
                      padding: "12px",
                      borderRadius: "10px",
                      border: "none",
                      background: activeMatiere.gradient,
                      color: "white",
                      fontWeight: "600",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      transition: "all 0.2s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.02)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <FaDownload /> Télécharger
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
