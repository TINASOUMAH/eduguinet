import React, { useState, useEffect } from "react";

const chapitresPhysique = [
  { 
    id: 1, 
    title: "Optique", 
    txtFile: "/uploads/text/dix/physique1.txt", 
    color: "#fef3c7",
    desc: "Découvre comment la lumière se propage et interagit avec les objets.",
    image: "/image/physique1.jpg"
  },
  { 
    id: 2, 
    title: "Électricité", 
    txtFile: "/uploads/text/dix/physique2.txt", 
    color: "#fde2e2",
    desc: "Apprends le fonctionnement des circuits électriques et des charges.",
    image: "/image/physique2.jpg"
  },
  { 
    id: 3, 
    title: "Mécanique et Technologie", 
    txtFile: "/uploads/text/dix/physique3.txt", 
    color: "#d1fae5",
    desc: "Explore les forces, mouvements et machines simples.",
    image: "/image/physique3.jpg"
  },
];

export default function Physique() {
  const [activeChapitre, setActiveChapitre] = useState(null);
  const [chapContent, setChapContent] = useState("");
  const defaultImage = "/image/physique.jpg"; // image par défaut matière

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
          alt={activeChapitre ? activeChapitre.title : "Physique"} 
          style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "12px" }} 
        />
      </div>

      {/* Cartes des chapitres : affichées seulement si aucun chapitre actif */}
      {!activeChapitre && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "40px" }}>
          {chapitresPhysique.map((chap) => (
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
