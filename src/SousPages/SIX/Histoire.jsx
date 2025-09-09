import React, { useState } from "react";

// Chapitres officiels Histoire 6ème avec couleurs
const chapitresHistoire6 = [
  {
    id: 1,
    title: "Les premières civilisations",
    contenu: "Découverte des premières sociétés organisées, l’agriculture et les villages.",
    color: "#fef3c7",
  },
  {
    id: 2,
    title: "L’Égypte antique",
    contenu: "Histoire de l’Égypte ancienne, pharaons, pyramides et vie quotidienne.",
    color: "#fde2e2",
  },
  {
    id: 3,
    title: "La Grèce antique",
    contenu: "Organisation de la cité, démocratie à Athènes, mythologie et culture grecque.",
    color: "#d1fae5",
  },
  {
    id: 4,
    title: "Rome et l’Empire romain",
    contenu: "Fondation de Rome, expansion de l’empire, vie des Romains et héritage culturel.",
    color: "#dbeafe",
  },
  {
    id: 5,
    title: "Le Moyen Âge",
    contenu: "Châteaux, chevaliers, féodalité et société médiévale en Europe.",
    color: "#fbcfe8",
  },
];

export default function Histoire() {
  const [activeChapitre, setActiveChapitre] = useState(chapitresHistoire6[0]);
  const imageMatiere = "/image/histoire.jpg"; // image principale

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      {/* Image principale */}
      <div style={{ marginBottom: "20px", borderRadius: "12px", overflow: "hidden" }}>
        <img
          src={imageMatiere}
          alt="Histoire 6ème"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      </div>

      {/* Liste des chapitres en cartes colorées */}
      <h3 style={{ marginBottom: "15px", color: "#334155", fontWeight: "600", textAlign: "center" }}>
        Choisis le chapitre que tu veux réviser...
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {chapitresHistoire6.map((chap) => (
          <div
            key={chap.id}
            onClick={() => setActiveChapitre(chap)}
            style={{
              cursor: "pointer",
              padding: "20px",
              borderRadius: "12px",
              backgroundColor: chap.color,
              border: chap.id === activeChapitre.id ? "2px solid #3b82f6" : "1px solid #e5e7eb",
              boxShadow: chap.id === activeChapitre.id
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
            <h4 style={{ fontSize: "13px", color: "#64748b", marginBottom: "6px" }}>
              CHAPITRE {chap.id}
            </h4>
            <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#0f172a" }}>
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
