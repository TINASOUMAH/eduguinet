import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa";

// ✅ Liste des matières et chapitres
const matieres = [
  {
    id: 1,
    name: "Calcul",
    pdfs: [
      { id: 1, title: "Nombres entiers", file: "/pdfs/math_nombres.pdf" },
      { id: 2, title: "Fractions", file: "/pdfs/math_fractions.pdf" },
      { id: 3, title: "Pourcentages", file: "/pdfs/math_pourcentages.pdf" },
    ],
  },
  {
    id: 2,
    name: "Français",
    pdfs: [
      { id: 1, title: "Lecture et compréhension", file: "/pdfs/francais_lecture.pdf" },
      { id: 2, title: "Grammaire", file: "/pdfs/francais_grammaire.pdf" },
      { id: 3, title: "Conjugaison", file: "/pdfs/francais_conjugaison.pdf" },
    ],
  },
  {
    id: 3,
    name: "Histoire",
    pdfs: [
      { id: 1, title: "Les grandes civilisations", file: "/pdfs/histoire_civilisations.pdf" },
      { id: 2, title: "L’Afrique ancienne", file: "/pdfs/histoire_afrique.pdf" },
    ],
  },
  {
    id: 4,
    name: "ECM",
    pdfs: [
      { id: 1, title: "Les droits et devoirs", file: "/pdfs/ecm_droits.pdf" },
      { id: 2, title: "La citoyenneté", file: "/pdfs/ecm_citoyennete.pdf" },
    ],
  },
  {
    id: 5,
    name: "Géographie",
    pdfs: [
      { id: 1, title: "Les continents", file: "/pdfs/geographie_continents.pdf" },
      { id: 2, title: "La Guinée", file: "/pdfs/geographie_guinee.pdf" },
    ],
  },
  {
    id: 6,
    name: "Science d’observation",
    pdfs: [
      { id: 1, title: "Les plantes", file: "/pdfs/science_plantes.pdf" },
      { id: 2, title: "Le corps humain", file: "/pdfs/science_corps.pdf" },
    ],
  },
];

export default function PdfCards() {
  // ✅ Par défaut : afficher la première matière (Calcul)
  const [activeMatiere, setActiveMatiere] = useState(matieres[0]);

  return (
    <div style={{ width: "92%", margin: "40px auto", fontFamily: "Inter, sans-serif" }}>
      {/* Titre */}
      <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "28px", fontWeight: "700", color: "#1e293b" }}>
        📘 Ressources PDF – 6ème Guinée
      </h2>

      {/* Liste des matières */}
      <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "35px", flexWrap: "wrap" }}>
        {matieres.map((m) => (
          <button
            key={m.id}
            onClick={() => setActiveMatiere(m)}
            style={{
              padding: "10px 24px",
              borderRadius: "25px",
              border: "1.5px solid #2563eb",
              background: activeMatiere?.id === m.id ? "linear-gradient(90deg,#2563eb,#1d4ed8)" : "#fff",
              color: activeMatiere?.id === m.id ? "#fff" : "#1e293b",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "15px",
              transition: "0.3s",
              boxShadow: activeMatiere?.id === m.id ? "0 4px 12px rgba(37,99,235,0.3)" : "0 2px 5px rgba(0,0,0,0.05)",
            }}
          >
            {m.name}
          </button>
        ))}
      </div>

      {/* Affichage des chapitres */}
      <div>
        <h3 style={{ marginBottom: "20px", fontSize: "22px", fontWeight: "700", color: "#334155", textAlign: "center" }}>
          📂 {activeMatiere.name} – Chapitres disponibles
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {activeMatiere.pdfs.map((pdf) => (
            <div
              key={pdf.id}
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                textAlign: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(37,99,235,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
              }}
            >
              <div
                style={{
                  width: "65px",
                  height: "65px",
                  borderRadius: "50%",
                  background: "#fef2f2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 15px",
                }}
              >
                <FaFilePdf style={{ fontSize: "30px", color: "#dc2626" }} />
              </div>
              <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#1e293b", marginBottom: "15px" }}>
                {pdf.title}
              </h4>
              <a
                href={pdf.file}
                download
                style={{
                  display: "inline-block",
                  padding: "8px 20px",
                  borderRadius: "8px",
                  background: "linear-gradient(90deg,#16a34a,#15803d)",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "600",
                  boxShadow: "0 3px 8px rgba(22,163,74,0.3)",
                  transition: "0.25s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "linear-gradient(90deg,#22c55e,#16a34a)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "linear-gradient(90deg,#16a34a,#15803d)")
                }
              >
                Télécharger
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
