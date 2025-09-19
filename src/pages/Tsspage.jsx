import React, { useState } from "react";

// Chapitres d'Économie TSS
const chapitresEcoTSS = [
  {
    id: 1,
    title: "Microéconomie",
    contenu:
      "Théorie du consommateur, théorie de la firme et équilibre de marché.",
    color: "#fef3c7",
  },
  {
    id: 2,
    title: "Macroéconomie",
    contenu:
      "PIB, inflation, chômage et politiques économiques nationales.",
    color: "#fde2e2",
  },
  {
    id: 3,
    title: "Commerce international",
    contenu:
      "Théories du commerce, balance des paiements et intégration économique.",
    color: "#d1fae5",
  },
  {
    id: 4,
    title: "Économie du développement",
    contenu:
      "Croissance économique, développement durable et inégalités.",
    color: "#dbeafe",
  },
  {
    id: 5,
    title: "Économie monétaire",
    contenu:
      "Système monétaire, banques centrales et politique monétaire.",
    color: "#fbcfe8",
  },
  {
    id: 6,
    title: "Économétrie",
    contenu:
      "Méthodes statistiques appliquées à l'économie et modélisation.",
    color: "#c7d2fe",
  },
];

export default function TerminaleTSS() {
  const [activeChapitre, setActiveChapitre] = useState(null);
  const imageMatiere = "/image/dixmath.jpg";

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      {/* Affichage conditionnel : soit l'image + chapitres, soit seulement le contenu */}
      {!activeChapitre ? (
        <>
          {/* Image principale */}
          <div style={{ marginBottom: "20px" }}>
            <img
              src={imageMatiere}
              alt="Économie TSS"
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
            {chapitresEcoTSS.map((chap) => (
              <div
                key={chap.id}
                onClick={() => setActiveChapitre(chap)}
                style={{
                  cursor: "pointer",
                  padding: "20px",
                  borderRadius: "12px",
                  backgroundColor: chap.color,
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
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

          {/* Bouton retour aux matières en bas */}
          <div style={{ marginTop: "30px", textAlign: "center" }}>
            <button
              onClick={() => window.history.back()}
              style={{
                padding: "12px 24px",
                borderRadius: "8px",
                background: "#059669",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              ← Retour aux matières
            </button>
          </div>
        </>
      ) : (
        /* Contenu du chapitre sélectionné - SEULEMENT le contenu, pas d'image */
        <div
          style={{
            padding: "20px",
            background: "#f9fafb",
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
            minHeight: "80vh",
          }}
        >
          <h2 style={{ marginBottom: "10px", color: "#2563eb", fontSize: "28px" }}>
            {activeChapitre.title}
          </h2>
          <p style={{ color: "#475569", fontSize: "16px", lineHeight: "1.6" }}>
            {activeChapitre.contenu}
          </p>
          
          {/* Boutons de navigation */}
          <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "25px" }}>
            <button
              onClick={() => setActiveChapitre(null)}
              style={{
                padding: "12px 20px",
                borderRadius: "8px",
                background: "#2563eb",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              ← Retour aux chapitres
            </button>
            <button
              onClick={() => window.history.back()}
              style={{
                padding: "12px 20px",
                borderRadius: "8px",
                background: "#059669",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              ← Retour aux matières
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
