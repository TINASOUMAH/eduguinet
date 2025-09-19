import React, { useState } from 'react';

const chapitresEcoTSS = [
  { id: 1, title: "Les agents économiques", color: "#fef3c7", content: "Contenu du chapitre sur les agents économiques..." },
  { id: 2, title: "Le marché et les prix", color: "#dbeafe", content: "Contenu du chapitre sur le marché et les prix..." },
  { id: 3, title: "La production", color: "#f3e8ff", content: "Contenu du chapitre sur la production..." },
  { id: 4, title: "La consommation", color: "#ecfdf5", content: "Contenu du chapitre sur la consommation..." },
  { id: 5, title: "L'épargne et l'investissement", color: "#fef2f2", content: "Contenu du chapitre sur l'épargne et l'investissement..." },
  { id: 6, title: "La monnaie et le crédit", color: "#f0f9ff", content: "Contenu du chapitre sur la monnaie et le crédit..." },
  { id: 7, title: "Les échanges internationaux", color: "#fffbeb", content: "Contenu du chapitre sur les échanges internationaux..." },
  { id: 8, title: "Le développement économique", color: "#f0fdf4", content: "Contenu du chapitre sur le développement économique..." },
  { id: 9, title: "Les politiques économiques", color: "#fdf4ff", content: "Contenu du chapitre sur les politiques économiques..." }
];

export default function EconomiqueTSS() {
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
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#1e293b",
              marginBottom: "20px",
            }}
          >
            Chapitre {activeChapitre.id}: {activeChapitre.title}
          </h2>
          <div
            style={{
              fontSize: "16px",
              lineHeight: "1.6",
              color: "#475569",
            }}
          >
            {activeChapitre.content}
          </div>

          {/* Boutons de navigation en bas */}
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            <button
              onClick={() => setActiveChapitre(null)}
              style={{
                padding: "12px 24px",
                borderRadius: "8px",
                background: "#3b82f6",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              ← Retour aux chapitres
            </button>
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
        </div>
      )}
    </div>
  );
}
