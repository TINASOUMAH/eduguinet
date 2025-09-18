import React, { useState } from "react";

// Chapitres Science 6ème avec couleurs
const chapitresScience6 = [
  {
    id: 1,
    title: "Les êtres vivants",
    contenu: "Classification des animaux et plantes, caractéristiques et besoins des êtres vivants.",
    color: "#fef3c7",
  },
  {
    id: 2,
    title: "Le corps humain",
    contenu: "Fonctions des principaux organes, systèmes et notions d’hygiène et santé.",
    color: "#fde2e2",
  },
  {
    id: 3,
    title: "L’énergie",
    contenu: "Sources d’énergie, transformation et utilisation dans la vie quotidienne.",
    color: "#d1fae5",
  },
  {
    id: 4,
    title: "Le développement et la reproduction des êtres vivants",
    contenu: "Étude des cycles de vie, reproduction sexuée et asexuée, et croissance des êtres vivants.",
    color: "#fde9a6",
  },
  {
    id: 5,
    title: "La matière",
    contenu: "États de la matière, changements d’état et propriétés des matériaux.",
    color: "#dbeafe",
  },
  {
    id: 6,
    title: "La Terre et l’environnement",
    contenu: "Phénomènes naturels, protection de l’environnement et ressources naturelles.",
    color: "#fcd5ce",
  },
];

export default function Science() {
  const [activeChapitre, setActiveChapitre] = useState(null);
  const imageMatiere = "/image/sciences.jpg"; // image principale

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      {/* Image principale */}
      <div style={{ marginBottom: "20px" }}>
        <img
          src={imageMatiere}
          alt="Science 6ème"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      </div>

      {/* Liste des chapitres en cartes colorées */}
      <h3
        style={{
          marginBottom: "15px",
          color: "#334155",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Choisis le chapitre que tu veux réviser...
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {chapitresScience6.map((chap) => (
          <div
            key={chap.id}
            onClick={() => setActiveChapitre(chap)}
            style={{
              cursor: "pointer",
              padding: "20px",
              borderRadius: "12px",
              backgroundColor: chap.color,
              border:
                chap.id === activeChapitre?.id
                  ? "2px solid #3b82f6"
                  : "1px solid #e5e7eb",
              boxShadow:
                chap.id === activeChapitre?.id
                  ? "0 6px 15px rgba(59,130,246,0.3)"
                  : "0 4px 10px rgba(0,0,0,0.05)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-4px) scale(1.02)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0) scale(1)")
            }
          >
            <h4
              style={{
                fontSize: "13px",
                color: "#64748b",
                marginBottom: "6px",
              }}
            >
              CHAPITRE {chap.id}
            </h4>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#0f172a",
              }}
            >
              {chap.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Contenu du chapitre sélectionné */}
      {activeChapitre && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            background: "#f9fafb",
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h2 style={{ marginBottom: "10px", color: "#2563eb" }}>
            {activeChapitre.title}
          </h2>
          <p style={{ color: "#475569" }}>{activeChapitre.contenu}</p>
        </div>
      )}
    </div>
  );
}
