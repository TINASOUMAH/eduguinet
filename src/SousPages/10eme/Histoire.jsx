import React, { useState, useEffect } from "react";

const chapitresHistoire = [
  { 
    id: 1, 
    title: "Conquêtes et résistances en Guinée", 
    txtFile: "/uploads/text/dix/histoire1.txt", 
    color: "#fef3c7",
    desc: "Découvre l’histoire de la Guinée, les premières conquêtes et les mouvements de résistance locaux.",
    image: "/image/histoire1.jpg"
  },
  { 
    id: 2, 
    title: "Les transformations économiques de l’Europe au XIXᵉ siècle", 
    txtFile: "/uploads/text/dix/histoire2.txt", 
    color: "#fde2e2",
    desc: "Étudie la révolution industrielle, l’urbanisation et l’apparition des nouvelles classes sociales en Europe.",
    image: "/image/histoire2.jpg"
  },
  { 
    id: 3, 
    title: "Les rivalités coloniales", 
    txtFile: "/uploads/text/dix/histoire3.txt", 
    color: "#d1fae5",
    desc: "Analyse la compétition entre les puissances européennes pour le contrôle des territoires en Afrique et en Asie.",
    image: "/image/histoire3.jpg"
  },
  { 
    id: 4, 
    title: "L’impérialisme en Afrique", 
    txtFile: "/uploads/text/dix/histoire4.txt", 
    color: "#dbeafe",
    desc: "Découvre les politiques impérialistes et leurs impacts sur les populations africaines.",
    image: "/image/histoire4.jpg"
  },
  { 
    id: 5, 
    title: "Les conflits et révolutions au début du XXᵉ siècle", 
    txtFile: "/uploads/text/dix/histoire5.txt", 
    color: "#fef9c3",
    desc: "Apprends sur la Première Guerre mondiale, les révolutions et les bouleversements politiques à travers le monde.",
    image: "/image/histoire5.jpg"
  },
  { 
    id: 6, 
    title: "La décolonisation en Asie et en Afrique", 
    txtFile: "/uploads/text/dix/histoire6.txt", 
    color: "#ffe4e6",
    desc: "Étudie les luttes pour l’indépendance et la fin de la domination coloniale en Asie et en Afrique.",
    image: "/image/histoire6.jpg"
  },
];

export default function Histoire() {
  const [activeChapitre, setActiveChapitre] = useState(null);
  const [chapContent, setChapContent] = useState("");
  const defaultImage = "/image/histoire.jpg"; // image par défaut histoire

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
          alt={activeChapitre ? activeChapitre.title : "Histoire"} 
          style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "12px" }} 
        />
      </div>

      {/* Cartes des chapitres */}
      {!activeChapitre && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "40px" }}>
          {chapitresHistoire.map((chap) => (
            <div
              key={chap.id}
              onClick={() => setActiveChapitre(chap)}
              style={{
                cursor: "pointer",
                padding: "20px",
                minHeight: "140px",
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
          <h1 style={{ marginBottom: "15px", color: "#2563eb", fontSize: "26px", fontWeight: "700", textAlign: "center" }}>
            {activeChapitre.title}
          </h1>
          <p style={{ marginBottom: "25px", fontSize: "17px", color: "#475569", lineHeight: "1.7", textAlign: "center", fontStyle: "italic" }}>
            {activeChapitre.desc}
          </p>
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
