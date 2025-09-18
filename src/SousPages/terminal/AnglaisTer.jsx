import React, { useState } from "react";

// Chapitres d'Anglais Terminale
const chapitresAnglaisTerminale = [
  {
    id: 1,
    title: "Identities and Exchanges",
    contenu:
      "Exploration of cultural identities and international exchanges, study of globalization and cultural diversity.",
    color: "#fef3c7",
  },
  {
    id: 2,
    title: "Private and Public Spaces",
    contenu:
      "Analysis of the relationship between private and public spheres, study of urban planning and social spaces.",
    color: "#fde2e2",
  },
  {
    id: 3,
    title: "Art and Power",
    contenu:
      "Study of the relationship between art and political power, analysis of artistic expression and censorship.",
    color: "#d1fae5",
  },
  {
    id: 4,
    title: "Citizenship and Virtual Worlds",
    contenu:
      "Exploration of digital citizenship and virtual communities, study of online behavior and digital rights.",
    color: "#dbeafe",
  },
  {
    id: 5,
    title: "Fiction and Realities",
    contenu:
      "Analysis of the relationship between fiction and reality, study of literature and its social impact.",
    color: "#fbcfe8",
  },
  {
    id: 6,
    title: "Innovation and Responsibility",
    contenu:
      "Study of technological innovation and ethical responsibility, analysis of scientific progress and its consequences.",
    color: "#c7d2fe",
  },
];

export default function ChapitresAnglaisTerminale() {
  const [activeChapitre, setActiveChapitre] = useState(null);
  const imageMatiere = "/image/qsdfg.jpg";

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      {/* Image principale */}
      <div style={{ marginBottom: "20px" }}>
        <img
          src={imageMatiere}
          alt="Anglais Terminale"
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
        {chapitresAnglaisTerminale.map((chap) => (
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
