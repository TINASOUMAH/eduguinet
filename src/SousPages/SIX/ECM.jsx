import React, { useState } from "react";

// Chapitres officiels de ECM 6ème (4 chapitres)
const chapitresECM6 = [
  {
    id: 1,
    title: "Citoyenneté et droits",
    contenu: "Comprendre les droits et devoirs des citoyens, règles de vie collective et respect d'autrui.",
    color: "#fef3c7",
  },
  {
    id: 2,
    title: "Environnement et responsabilité",
    contenu: "Apprendre à protéger l'environnement, tri des déchets, préservation des ressources naturelles.",
    color: "#fde2e2",
  },
  {
    id: 3,
    title: "Solidarité et coopération",
    contenu: "Travail en groupe, entraide, coopération dans la vie scolaire et sociale.",
    color: "#d1fae5",
  },
  {
    id: 4,
    title: "Éducation civique",
    contenu: "Étude des institutions, respect des règles et participation à la vie de la communauté.",
    color: "#dbeafe",
  },
];

export default function ChapitresECM6() {
  const [activeChapitre, setActiveChapitre] = useState(null);
  const imageMatiere = "/image/ecm.jpg"; // Image illustrative ECM

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      {/* Image principale */}
      <div style={{ marginBottom: "20px" }}>
        <img
          src={imageMatiere}
          alt="ECM 6ème"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      </div>

      {/* Liste des chapitres */}
      <h3 style={{ marginBottom: "15px", color: "#334155", fontWeight: "600", textAlign: "center" }}>
        Choisis le chapitre que tu veux réviser...
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // 4 cartes sur une ligne
          gap: "20px",
        }}
      >
        {chapitresECM6.map((chap) => (
          <div
            key={chap.id}
            onClick={() => setActiveChapitre(chap)}
            style={{
              cursor: "pointer",
              padding: "20px",
              borderRadius: "12px",
              backgroundColor: chap.color,
              border: chap.id === activeChapitre?.id ? "2px solid #3b82f6" : "1px solid #e5e7eb",
              boxShadow:
                chap.id === activeChapitre?.id
                  ? "0 6px 15px rgba(59,130,246,0.3)"
                  : "0 4px 10px rgba(0,0,0,0.05)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px) scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0) scale(1)")}
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
          <h2 style={{ marginBottom: "10px", color: "#2563eb" }}>{activeChapitre.title}</h2>
          <p style={{ color: "#475569" }}>{activeChapitre.contenu}</p>
        </div>
      )}
    </div>
  );
}

