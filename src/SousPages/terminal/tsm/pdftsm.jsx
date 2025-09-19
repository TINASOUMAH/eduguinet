import React, { useState } from "react";
import { 
  FaFilePdf, 
  FaCalculator, 
  FaFlask, 
  FaBook, 
  FaGlobeAfrica, 
  FaUsers, 
  FaMapMarkedAlt, 
  FaMicroscope,
  FaDownload,
  FaEye,
  FaClock,
  FaStar
} from "react-icons/fa";

// ✅ Liste des matières TSM avec icônes et couleurs thématiques
const matieres = [
  {
    id: 1,
    name: "Mathématiques",
    icon: FaCalculator,
    color: "#2563eb",
    gradient: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
    bgColor: "#eff6ff",
    pdfs: [
      { id: 1, title: "Analyse - Fonctions", file: "/upload/pdfs/tsm/math_fonctions.pdf", duration: "60min", rating: 4.9 },
      { id: 2, title: "Algèbre linéaire", file: "/upload/pdfs/tsm/math_algebre.pdf", duration: "55min", rating: 4.8 },
      { id: 3, title: "Géométrie analytique", file: "/upload/pdfs/tsm/math_geometrie.pdf", duration: "50min", rating: 4.7 },
      { id: 4, title: "Probabilités et statistiques", file: "/upload/pdfs/tsm/math_proba.pdf", duration: "45min", rating: 4.8 },
      { id: 5, title: "Suites et séries", file: "/upload/pdfs/tsm/math_suites.pdf", duration: "40min", rating: 4.9 },
      { id: 6, title: "Équations différentielles", file: "/upload/pdfs/tsm/math_equations.pdf", duration: "65min", rating: 4.7 },
    ],
  },
  {
    id: 2,
    name: "Chimie",
    icon: FaFlask,
    color: "#16a34a",
    gradient: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
    bgColor: "#f0fdf4",
    pdfs: [
      { id: 1, title: "Chimie organique", file: "/upload/pdfs/tsm/chimie_organique.pdf", duration: "55min", rating: 4.8 },
      { id: 2, title: "Chimie inorganique", file: "/upload/pdfs/tsm/chimie_inorganique.pdf", duration: "50min", rating: 4.7 },
      { id: 3, title: "Thermochimie", file: "/upload/pdfs/tsm/chimie_thermo.pdf", duration: "45min", rating: 4.9 },
      { id: 4, title: "Cinétique chimique", file: "/upload/pdfs/tsm/chimie_cinetique.pdf", duration: "40min", rating: 4.6 },
      { id: 5, title: "Équilibres chimiques", file: "/upload/pdfs/tsm/chimie_equilibres.pdf", duration: "50min", rating: 4.8 },
      { id: 6, title: "Électrochimie", file: "/upload/pdfs/tsm/chimie_electro.pdf", duration: "55min", rating: 4.7 },
    ],
  },
  {
    id: 3,
    name: "Français",
    icon: FaBook,
    color: "#7c3aed",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
    bgColor: "#f3f4f6",
    pdfs: [
      { id: 1, title: "Analyse littéraire", file: "/upload/pdfs/tsm/francais_analyse.pdf", duration: "50min", rating: 4.6 },
      { id: 2, title: "Grammaire avancée", file: "/upload/pdfs/tsm/francais_grammaire.pdf", duration: "40min", rating: 4.8 },
      { id: 3, title: "Dissertation", file: "/upload/pdfs/tsm/francais_dissertation.pdf", duration: "60min", rating: 4.7 },
    ],
  },
  {
    id: 4,
    name: "Philosophie",
    icon: FaUsers,
    color: "#dc2626",
    gradient: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
    bgColor: "#fef2f2",
    pdfs: [
      { id: 1, title: "Métaphysique", file: "/upload/pdfs/tsm/philo_metaphysique.pdf", duration: "55min", rating: 4.7 },
      { id: 2, title: "Éthique et morale", file: "/upload/pdfs/tsm/philo_ethique.pdf", duration: "50min", rating: 4.8 },
    ],
  },
  {
    id: 5,
    name: "Histoire",
    icon: FaGlobeAfrica,
    color: "#ea580c",
    gradient: "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    bgColor: "#fff7ed",
    pdfs: [
      { id: 1, title: "Histoire contemporaine", file: "/upload/pdfs/tsm/histoire_contemporaine.pdf", duration: "55min", rating: 4.7 },
      { id: 2, title: "Révolutions et guerres", file: "/upload/pdfs/tsm/histoire_revolutions.pdf", duration: "50min", rating: 4.8 },
    ],
  },
  {
    id: 6,
    name: "Anglais",
    icon: FaBook,
    color: "#059669",
    gradient: "linear-gradient(135deg, #059669 0%, #047857 100%)",
    bgColor: "#f0fdf4",
    pdfs: [
      { id: 1, title: "Grammar & Syntax", file: "/upload/pdfs/tsm/anglais_grammar.pdf", duration: "40min", rating: 4.6 },
      { id: 2, title: "Essay Writing", file: "/upload/pdfs/tsm/anglais_essay.pdf", duration: "45min", rating: 4.8 },
    ],
  },
];

export default function PdfCardsTSM() {
  const [activeMatiere, setActiveMatiere] = useState(matieres[0]);
  const [viewMode, setViewMode] = useState('grid'); // grid ou list

  const totalPdfs = matieres.reduce((acc, matiere) => acc + matiere.pdfs.length, 0);
  const avgRating = (matieres.reduce((acc, matiere) => 
    acc + matiere.pdfs.reduce((sum, pdf) => sum + pdf.rating, 0), 0) / totalPdfs).toFixed(1);

  return (
    <div style={{ width: "95%", maxWidth: "1400px", margin: "40px auto", fontFamily: "'Inter', sans-serif", padding: "0 20px" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "50px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: "24px", padding: "40px 20px", color: "white", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-50%", right: "-10%", width: "200px", height: "200px", background: "rgba(255, 255, 255, 0.1)", borderRadius: "50%", filter: "blur(40px)" }}></div>
        <h1 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "15px", textShadow: "2px 2px 4px rgba(0,0,0,0.3)", position: "relative", zIndex: 2 }}>
          📚 Bibliothèque Numérique TSM
        </h1>
        <p style={{ fontSize: "18px", opacity: "0.9", marginBottom: "25px", position: "relative", zIndex: 2 }}>
          Programme Terminale Sciences Mathématiques • Ressources pédagogiques complètes
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "28px", fontWeight: "700" }}>{matieres.length}</div>
            <div style={{ fontSize: "14px", opacity: "0.8" }}>Matières</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "28px", fontWeight: "700" }}>{totalPdfs}</div>
            <div style={{ fontSize: "14px", opacity: "0.8" }}>Documents PDF</div>
          </div>
          <div style={{ textAlign: "center", display: "flex", alignItems: "center", gap: "5px" }}>
            <FaStar style={{ color: "#fbbf24", fontSize: "18px" }} />
            <div style={{ fontSize: "28px", fontWeight: "700" }}>{avgRating}</div>
            <div style={{ fontSize: "14px", opacity: "0.8", marginLeft: "5px" }}>Qualité</div>
          </div>
        </div>
      </div>

      {/* Navigation des matières */}
      <div style={{ marginBottom: "40px", background: "#ffffff", borderRadius: "20px", padding: "25px", boxShadow: "0 10px 25px rgba(0,0,0,0.05)", border: "1px solid #f1f5f9" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "15px" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#1e293b", margin: 0 }}>Choisissez une matière</h3>
          <div style={{ display: "flex", gap: "8px" }}>
            <button onClick={() => setViewMode('grid')} style={{ padding: "8px 12px", borderRadius: "8px", border: "1px solid #e2e8f0", background: viewMode === 'grid' ? "#3b82f6" : "#ffffff", color: viewMode === 'grid' ? "#ffffff" : "#64748b", cursor: "pointer", fontSize: "12px", fontWeight: "500", transition: "all 0.2s ease" }}>Grille</button>
            <button onClick={() => setViewMode('list')} style={{ padding: "8px 12px", borderRadius: "8px", border: "1px solid #e2e8f0", background: viewMode === 'list' ? "#3b82f6" : "#ffffff", color: viewMode === 'list' ? "#ffffff" : "#64748b", cursor: "pointer", fontSize: "12px", fontWeight: "500", transition: "all 0.2s ease" }}>Liste</button>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
          {matieres.map((matiere) => {
            const IconComponent = matiere.icon;
            const isActive = activeMatiere?.id === matiere.id;
            return (
              <button key={matiere.id} onClick={() => setActiveMatiere(matiere)} style={{ padding: "20px", borderRadius: "16px", border: `2px solid ${isActive ? matiere.color : '#e2e8f0'}`, background: isActive ? matiere.gradient : "#ffffff", color: isActive ? "#ffffff" : "#1e293b", cursor: "pointer", fontWeight: "600", fontSize: "16px", transition: "all 0.3s", boxShadow: isActive ? `0 8px 25px ${matiere.color}30` : "0 2px 8px rgba(0,0,0,0.04)", textAlign: "left", display: "flex", alignItems: "center", gap: "15px", transform: isActive ? "translateY(-2px)" : "none" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: isActive ? "rgba(255, 255, 255, 0.2)" : matiere.bgColor, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <IconComponent style={{ fontSize: "24px", color: isActive ? "#ffffff" : matiere.color }} />
                </div>
                <div>
                  <div style={{ fontSize: "16px", fontWeight: "700", marginBottom: "4px" }}>{matiere.name}</div>
                  <div style={{ fontSize: "13px", opacity: "0.8", fontWeight: "400" }}>{matiere.pdfs.length} document{matiere.pdfs.length > 1 ? 's' : ''}</div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Section PDFs */}
      <div style={{ background: "#ffffff", borderRadius: "20px", padding: "30px", boxShadow: "0 10px 25px rgba(0,0,0,0.05)", border: "1px solid #f1f5f9" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "30px", paddingBottom: "20px", borderBottom: "2px solid #f1f5f9" }}>
          <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: activeMatiere.gradient, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <activeMatiere.icon style={{ fontSize: "24px", color: "#ffffff" }} />
          </div>
          <div>
            <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#1e293b", margin: "0 0 5px 0" }}>{activeMatiere.name}</h3>
            <p style={{ fontSize: "14px", color: "#64748b", margin: 0 }}>{activeMatiere.pdfs.length} ressource{activeMatiere.pdfs.length > 1 ? 's' : ''} disponible{activeMatiere.pdfs.length > 1 ? 's' : ''}</p>
          </div>
        </div>

        <div style={{ display: viewMode === 'grid' ? "grid" : "flex", flexDirection: viewMode === 'list' ? "column" : "unset", gridTemplateColumns: viewMode === 'grid' ? "repeat(auto-fit, minmax(320px, 1fr))" : "unset", gap: "24px" }}>
          {activeMatiere.pdfs.map((pdf) => (
            <div key={pdf.id} style={{ background: "#ffffff", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", border: "1px solid #f1f5f9", transition: "all 0.3s", display: viewMode === 'list' ? "flex" : "block", alignItems: viewMode === 'list' ? "center" : "unset", gap: viewMode === 'list' ? "20px" : "unset" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "15px", marginBottom: viewMode === 'list' ? "0" : "20px", flex: viewMode === 'list' ? "1" : "unset" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "12px", background: `${activeMatiere.color}10`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <FaFilePdf style={{ fontSize: "28px", color: activeMatiere.color }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#1e293b", marginBottom: "8px", lineHeight: "1.3" }}>{pdf.title}</h4>
                  <div style={{ display: "flex", gap: "20px", marginBottom: viewMode === 'list' ? "0" : "15px", flexWrap: "wrap" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#64748b" }}>
                      <FaClock style={{ fontSize: "12px" }} />{pdf.duration}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#64748b" }}>
                      <FaStar style={{ fontSize: "12px", color: "#fbbf24" }} />{pdf.rating}/5
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", justifyContent: viewMode === 'list' ? "flex-end" : "stretch" }}>
                <button style={{ flex: viewMode === 'list' ? "0" : "1", padding: "12px 20px", borderRadius: "10px", border: `1px solid ${activeMatiere.color}`, background: "#ffffff", color: activeMatiere.color, fontSize: "14px", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                  <FaEye style={{ fontSize: "14px" }} />Aperçu
                </button>
                <a href={pdf.file} download style={{ flex: viewMode === 'list' ? "0" : "1", padding: "12px 20px", borderRadius: "10px", background: activeMatiere.gradient, color: "#ffffff", textDecoration: "none", fontSize: "14px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                  <FaDownload style={{ fontSize: "14px" }} />Télécharger
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}