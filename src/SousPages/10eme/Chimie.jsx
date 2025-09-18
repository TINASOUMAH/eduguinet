import React, { useState, useEffect } from "react";

const chapitresChimie = [
  { 
    id: 1, 
    title: "Réaction sur l'oxydation", 
    txtFile: "/uploads/text/dix/chimie1.txt", 
    color: "#fef3c7",
    desc: "Découvre comment les substances se transforment par oxydation.",
    image: "/image/43.oxy3.jpg"
  },
  { 
    id: 2, 
    title: "Les solutions aqueuses", 
    txtFile: "/uploads/text/dix/chimie2.txt", 
    color: "#fde2e2",
    desc: "Étudie les propriétés et comportements des solutions dans l'eau.",
    image: "/image/chimie2.jpg"
  },
  { 
    id: 3, 
    title: "Chimie organique", 
    txtFile: "/uploads/text/dix/chimie3.txt", 
    color: "#d1fae5",
    desc: "Apprends les bases des composés carbonés et leurs réactions.",
    image: "/image/chimie3.jpg"
  },
];

export default function Chimie() {
  const [activeChapitre, setActiveChapitre] = useState(null); // aucun chapitre actif au départ
  const [chapContent, setChapContent] = useState("");
  const defaultImage = "/image/chimie.jpg"; // image par défaut

  useEffect(() => {
    if (activeChapitre) {
      fetch(activeChapitre.txtFile)
        .then(res => res.text())
        .then(text => setChapContent(text))
        .catch(() => setChapContent("❌ Impossible de charger le contenu."));
    }
  }, [activeChapitre]);

  const renderContent = (text) => {
    return text.split("\n").map((line, index) => {
      const trimmed = line.trim();
      if (!trimmed) return <div key={index} style={{ marginBottom: "12px" }} />;
      return <p key={index} style={{ marginBottom: "14px", lineHeight: "1.8", textAlign: "justify", fontSize: "16px" }}>{trimmed}</p>;
    });
  };

  return (
    <div style={{ width: "95%", maxWidth: "1000px", margin: "0 auto" }}>
      
      {/* Image : par défaut ou du chapitre actif */}
      <div style={{ marginBottom: "20px" }}>
        <img 
          src={activeChapitre ? activeChapitre.image : defaultImage} 
          alt={activeChapitre ? activeChapitre.title : "Chimie"} 
          style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "12px" }} 
        />
      </div>

      {/* Cartes des chapitres : affichées seulement si aucun chapitre actif */}
      {!activeChapitre && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "40px" }}>
          {chapitresChimie.map((chap) => (
            <div
              key={chap.id}
              onClick={() => setActiveChapitre(chap)}
              style={{
                cursor: "pointer",
                padding: "25px",
                minHeight: "160px",
                borderRadius: "12px",
                backgroundColor: chap.color,
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-4px) scale(1.02)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0) scale(1)"}
            >
              <h4 style={{ fontSize: "13px", color: "#64748b", marginBottom: "6px" }}>CHAPITRE {chap.id}</h4>
              <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#0f172a", marginBottom: "6px" }}>{chap.title}</h3>
              <p style={{ fontSize: "14px", color: "#334155", lineHeight: "1.5" }}>{chap.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* Contenu du chapitre actif */}
      {activeChapitre && (
        <div style={{ marginTop: "30px", padding: "30px", background: "#ffffff", borderRadius: "12px", border: "1px solid #e5e7eb", boxShadow: "0 4px 10px rgba(0,0,0,0.05)", width: "100%" }}>
          <h1 style={{ marginBottom: "25px", color: "#2563eb", fontSize: "26px", fontWeight: "700", textDecoration: "underline", textAlign: "center" }}>
            {activeChapitre.title}
          </h1>
          <div style={{ fontSize: "17px", color: "#374151", lineHeight: "1.9", textAlign: "justify" }}>
            {renderContent(chapContent)}
          </div>
          <button onClick={() => setActiveChapitre(null)} style={{ marginTop: "25px", padding: "12px 20px", borderRadius: "8px", background: "#2563eb", color: "#fff", border: "none", cursor: "pointer", display: "block", marginLeft: "auto", marginRight: "auto" }}>
            ← Retour aux chapitres
          </button>
        </div>
      )}
    </div>
  );
}
