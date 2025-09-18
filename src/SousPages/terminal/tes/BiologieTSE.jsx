import React, { useState } from "react";

// Chapitres officiels de Biologie TSE
const chapitresBiologieTSE = [
  {
    id: 1,
    title: "Biologie cellulaire",
    contenu:
      "Structure et fonction des cellules, organites et métabolisme cellulaire.",
    color: "#fef3c7",
  },
  {
    id: 2,
    title: "Génétique moléculaire",
    contenu:
      "ADN, ARN, expression génique et techniques de biologie moléculaire.",
    color: "#fde2e2",
  },
  {
    id: 3,
    title: "Écologie et environnement",
    contenu:
      "Écosystèmes, biodiversité et impact environnemental des activités humaines.",
    color: "#d1fae5",
  },
  {
    id: 4,
    title: "Physiologie humaine",
    contenu:
      "Systèmes nerveux, cardiovasculaire, respiratoire et endocrinien.",
    color: "#dbeafe",
  },
  {
    id: 5,
    title: "Évolution et phylogénie",
    contenu:
      "Théories de l'évolution, sélection naturelle et classification du vivant.",
    color: "#fbcfe8",
  },
  {
    id: 6,
    title: "Biotechnologies",
    contenu:
      "Applications biotechnologiques, génie génétique et bioéthique.",
    color: "#c7d2fe",
  },
];

export default function BiologieTSE() {
  const [activeChapitre, setActiveChapitre] = useState(null);
  const imageMatiere = "/image/biologie_tse.jpg";

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      {/* Image principale */}
      <div style={{ marginBottom: "20px" }}>
        <img
          src={imageMatiere}
          alt="Biologie TSE"
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
        {chapitresBiologieTSE.map((chap) => (
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
