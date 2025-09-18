import React, { useState } from "react";

// Chapitres officiels de Psychologie TSS
const chapitresPsychologieTSS = [
  {
    id: 1,
    title: "Psychologie générale",
    contenu:
      "Introduction à la psychologie, méthodes de recherche et domaines d'application.",
    color: "#fef3c7",
  },
  {
    id: 2,
    title: "Psychologie cognitive",
    contenu:
      "Perception, mémoire, apprentissage et processus de pensée.",
    color: "#fde2e2",
  },
  {
    id: 3,
    title: "Psychologie sociale",
    contenu:
      "Influence sociale, groupes, attitudes et comportements collectifs.",
    color: "#d1fae5",
  },
  {
    id: 4,
    title: "Psychologie du développement",
    contenu:
      "Développement de l'enfant, adolescence et psychologie de l'adulte.",
    color: "#dbeafe",
  },
  {
    id: 5,
    title: "Psychopathologie",
    contenu:
      "Troubles mentaux, diagnostic et approches thérapeutiques.",
    color: "#fbcfe8",
  },
  {
    id: 6,
    title: "Psychologie appliquée",
    contenu:
      "Psychologie du travail, orientation et intervention psychologique.",
    color: "#c7d2fe",
  },
];

export default function PsychologieTSS() {
  const [activeChapitre, setActiveChapitre] = useState(null);
  const imageMatiere = "/image/psychologie_tss.jpg";

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      {/* Image principale */}
      <div style={{ marginBottom: "20px" }}>
        <img
          src={imageMatiere}
          alt="Psychologie TSS"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      </div>

      {/* Liste des chapitres en cartes */}
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
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {chapitresPsychologieTSS.map((chap) => (
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
              (e.currentTarget.style.transform =
                "translateY(-4px) scale(1.02)")
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
