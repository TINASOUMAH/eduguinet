import React, { useState } from "react";

// Chapitres officiels de Mathématiques TSE
const chapitresMathTSE = [
  {
    id: 1,
    title: "Analyse avancée",
    contenu:
      "Fonctions de plusieurs variables, dérivées partielles et applications.",
    color: "#fef3c7",
  },
  {
    id: 2,
    title: "Probabilités et statistiques",
    contenu:
      "Lois de probabilité continues, estimation et tests d'hypothèses.",
    color: "#fde2e2",
  },
  {
    id: 3,
    title: "Géométrie analytique",
    contenu:
      "Géométrie dans l'espace, surfaces et courbes paramétriques.",
    color: "#d1fae5",
  },
  {
    id: 4,
    title: "Équations différentielles",
    contenu:
      "Résolution d'équations différentielles du premier et second ordre.",
    color: "#dbeafe",
  },
  {
    id: 5,
    title: "Algèbre linéaire",
    contenu:
      "Matrices, espaces vectoriels et transformations linéaires.",
    color: "#fbcfe8",
  },
  {
    id: 6,
    title: "Analyse numérique",
    contenu:
      "Méthodes numériques et approximations pour la résolution de problèmes.",
    color: "#c7d2fe",
  },
];

export default function MathTSE() {
  const [activeChapitre, setActiveChapitre] = useState(null);
  const imageMatiere = "/image/math_tse.jpg";

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      {/* Image principale */}
      <div style={{ marginBottom: "20px" }}>
        <img
          src={imageMatiere}
          alt="Mathématiques TSE"
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
        {chapitresMathTSE.map((chap) => (
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
