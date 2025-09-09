import React, { useState, useEffect } from "react";

// Matières 6ème
const matieres = [
  { id: 1, name: "Français", color: "#6C63FF" },
  { id: 2, name: "Mathématiques", color: "#2563EB" },
];

export default function Exercice6eme() {
  const [activeMatiere, setActiveMatiere] = useState(matieres[0]);
  const [exercices, setExercices] = useState({ Français: [], Mathématiques: [] });

  // Simuler la récupération des exercices depuis un backend
  useEffect(() => {
    // Ici tu appellerais ton API backend, exemple :
    // fetch(`/api/exercices?matiere=francais`)
    //   .then(res => res.json())
    //   .then(data => setExercices(prev => ({ ...prev, Français: data })))

    // Pour l'instant, on met des exercices d'exemple
    setExercices({
      Français: Array.from({ length: 9 }, (_, i) => `Exo ${i + 1} : Exercice de français à compléter.`),
      Mathématiques: Array.from({ length: 9 }, (_, i) => `Exo ${i + 1} : Exercice de mathématiques à résoudre.`),
    });
  }, []);

  return (
    <div style={{ width: "90%", margin: "40px auto", fontFamily: "'Inter', sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "35px", fontSize: "32px", fontWeight: "700", color: "#1F2937" }}>
        📚 Exercices 6ème
      </h2>

      {/* Choix de la matière */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginBottom: "40px" }}>
        {matieres.map((matiere) => (
          <button
            key={matiere.id}
            onClick={() => setActiveMatiere(matiere)}
            style={{
              padding: "12px 30px",
              cursor: "pointer",
              border: "2px solid transparent",
              borderRadius: "50px",
              background: activeMatiere.id === matiere.id ? matiere.color : "#f0f0f0",
              color: activeMatiere.id === matiere.id ? "#fff" : "#1F2937",
              fontWeight: "600",
              fontSize: "16px",
              boxShadow: activeMatiere.id === matiere.id ? `0 6px 15px ${matiere.color}55` : "none",
              transition: "all 0.3s",
            }}
          >
            {matiere.name}
          </button>
        ))}
      </div>

      {/* Exercices */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", maxWidth: "1000px", margin: "0 auto" }}>
        {exercices[activeMatiere.name]?.map((exercice, index) => (
          <div
            key={index}
            style={{
              padding: "20px",
              borderRadius: "12px",
              backgroundColor: activeMatiere.color + "20", // couleur douce
              boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
              transition: "all 0.3s",
              cursor: "default",
              display: "flex",
              alignItems: "center",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.08)";
            }}
          >
            <span style={{
              display: "inline-block",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: activeMatiere.color,
              color: "#fff",
              fontWeight: "700",
              textAlign: "center",
              lineHeight: "30px",
              marginRight: "15px",
            }}>{index + 1}</span>
            <p style={{ margin: 0, fontSize: "16px", color: "#1F2937" }}>{exercice}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
