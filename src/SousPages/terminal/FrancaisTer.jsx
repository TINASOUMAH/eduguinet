import React, { useState } from "react";

// Chapitres de Français Terminale
const chapitresFrancaisTerminale = [
  {
    id: 1,
    title: "La littérature d'idées du XVIe au XVIIIe siècle",
    contenu:
      "Étude des œuvres et mouvements littéraires de la Renaissance aux Lumières, analyse des textes argumentatifs et de l'évolution des idées.",
    color: "#fef3c7",
  },
  {
    id: 2,
    title: "Le roman et le récit du Moyen Âge au XXIe siècle",
    contenu:
      "Analyse de l'évolution du genre romanesque, étude des techniques narratives et des thèmes majeurs à travers les siècles.",
    color: "#fde2e2",
  },
  {
    id: 3,
    title: "Le théâtre du XVIIe siècle au XXIe siècle",
    contenu:
      "Étude des grandes œuvres théâtrales, analyse des genres dramatiques et de l'évolution de la mise en scène.",
    color: "#d1fae5",
  },
  {
    id: 4,
    title: "La poésie du XIXe siècle au XXIe siècle",
    contenu:
      "Analyse des mouvements poétiques modernes, étude des formes et des thèmes de la poésie contemporaine.",
    color: "#dbeafe",
  },
  {
    id: 5,
    title: "Dissertation littéraire",
    contenu:
      "Méthodologie de la dissertation, construction d'une argumentation littéraire et analyse critique des œuvres.",
    color: "#fbcfe8",
  },
  {
    id: 6,
    title: "Commentaire composé",
    contenu:
      "Techniques d'analyse textuelle, construction d'un commentaire littéraire et interprétation des procédés stylistiques.",
    color: "#c7d2fe",
  },
];

export default function ChapitresFrancaisTerminale() {
  const [activeChapitre, setActiveChapitre] = useState(null);
  const imageMatiere = "/image/qsdfg.jpg";

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      {/* Image principale */}
      <div style={{ marginBottom: "20px" }}>
        <img
          src={imageMatiere}
          alt="Français Terminale"
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
          gridTemplateColumns: "repeat(3, 1fr)", // 3 colonnes fixes
          gap: "20px",
        }}
      >
        {chapitresFrancaisTerminale.map((chap) => (
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
