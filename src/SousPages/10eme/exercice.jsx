import React, { useState, useEffect } from "react";

// ✅ Exemple de données initiales (remplacer par fetch depuis la BDD)
const matieres = [
  {
    id: 1,
    name: "Mathématiques",
    exercices: [
      { id: 1, title: "Exercice sur les fractions", content: "Calcule 2/3 + 4/5" },
      { id: 2, title: "Exercice sur les équations", content: "Résoudre 2x + 5 = 11" },
    ],
  },
  {
    id: 2,
    name: "Physique",
    exercices: [
      { id: 1, title: "Exercice sur la vitesse", content: "Calcule la vitesse si d=100m et t=20s" },
    ],
  },
  {
    id: 3,
    name: "Chimie",
    exercices: [
      { id: 1, title: "Exercice sur les réactions chimiques", content: "Équilibrer H2 + O2 → H2O" },
    ],
  },
];

export default function Exercice() {
  const [activeMatiere, setActiveMatiere] = useState(matieres[0]);
  const [data, setData] = useState([]);

  // ✅ Charge les exercices selon la matière sélectionnée
  useEffect(() => {
    setData(activeMatiere.exercices);
  }, [activeMatiere]);

  return (
    <div style={{ width: "95%", maxWidth: "1000px", margin: "50px auto", fontFamily: "'Inter', sans-serif" }}>
      <h2 style={{ textAlign: "center", fontSize: "28px", fontWeight: "700", color: "#1e40af", marginBottom: "30px" }}>
        📝 Exercices – 10ᵉ Guinée
      </h2>

      {/* Sélecteur de matière */}
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "15px", marginBottom: "30px" }}>
        {matieres.map((m) => (
          <button
            key={m.id}
            onClick={() => setActiveMatiere(m)}
            style={{
              padding: "10px 22px",
              borderRadius: "25px",
              border: "none",
              background: activeMatiere.id === m.id ? "#1e40af" : "#e0e7ff",
              color: activeMatiere.id === m.id ? "#fff" : "#1e40af",
              fontWeight: "600",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            {m.name}
          </button>
        ))}
      </div>

      {/* Affichage des exercices */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // Trois cartes par ligne
          gap: "25px",
        }}
      >
        {data.map((ex) => (
          <div
            key={ex.id}
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(30,64,175,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
            }}
          >
            <h4 style={{ fontSize: "17px", fontWeight: "700", color: "#1e293b", marginBottom: "15px" }}>
              {ex.title}
            </h4>
            <p style={{ fontSize: "15px", color: "#334155", lineHeight: "1.6" }}>
              {ex.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
