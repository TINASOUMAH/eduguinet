import React, { useState, useEffect } from 'react';

// Chapitres Activité Numérique TSS
const chapitresNumerique = [
  { id: 1, title: "Suites numériques", txtFile: "/uploads/text/terminal/tss/1.txt", color: "#fef3c7" },
  { id: 2, title: "Limites de fonctions", txtFile: "/uploads/text/terminal/tss/2.txt", color: "#dbeafe" },
  { id: 3, title: "Dérivation", txtFile: "/uploads/text/terminal/tss/3.txt", color: "#f3e8ff" },
  { id: 4, title: "Fonction exponentielle", txtFile: "/uploads/text/terminal/tss/4.txt", color: "#ecfdf5" },
  { id: 5, title: "Fonction logarithme", txtFile: "/uploads/text/terminal/tss/5.txt", color: "#fef2f2" },
  { id: 6, title: "Intégration", txtFile: "/uploads/text/terminal/tss/6.txt", color: "#f0f9ff" },
];

// Chapitres Activité Géométrique TSS
const chapitresGeometrie = [
  { id: 1, title: "Géométrie analytique", txtFile: "/uploads/text/terminal/tss/7.txt", color: "#d1fae5" },
  { id: 2, title: "Géométrie dans le plan", txtFile: "/uploads/text/terminal/tss/8.txt", color: "#fef9c3" },
  { id: 3, title: "Transformations", txtFile: "/uploads/text/terminal/tss/9.txt", color: "#bbf7d0" },
  { id: 4, title: "Probabilités géométriques", txtFile: "/uploads/text/terminal/tss/10.txt", color: "#fde68a" },
  { id: 5, title: "Statistiques descriptives", txtFile: "/uploads/text/terminal/tss/11.txt", color: "#fcd5ce" },
  { id: 6, title: "Graphiques et représentations", txtFile: "/uploads/text/terminal/tss/12.txt", color: "#ede9fe" },
];

export default function MathTSS() {
  const [activeTab, setActiveTab] = useState("numerique");
  const [activeChapitre, setActiveChapitre] = useState(null);
  const [chapContent, setChapContent] = useState("");

  const images = {
    numerique: "/image/terminal_numerique.jpg",
    geometrie: "/image/terminal_geometrie.jpg",
  };

  const currentChapitres =
    activeTab === "numerique" ? chapitresNumerique : activeTab === "geometrie" ? chapitresGeometrie : [];

  useEffect(() => {
    if (activeChapitre) {
      fetch(activeChapitre.txtFile)
        .then((res) => res.text())
        .then((text) => setChapContent(text))
        .catch(() => setChapContent("❌ Impossible de charger le contenu."));
    }
  }, [activeChapitre]);

  const renderContent = (text) => text.split("\n").map((line, i) => <p key={i}>{line}</p>);

  return (
    <div style={{ width: "95%", maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
      
      {/* Affichage conditionnel : soit l'interface complète, soit seulement le contenu */}
      {!activeChapitre ? (
        <>
          {/* Boutons Activités */}
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px" }}>
            <button
              onClick={() => { setActiveTab("numerique"); setActiveChapitre(null); }}
              style={{
                padding: "12px 20px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                background: activeTab === "numerique" ? "#2563eb" : "#e5e7eb",
                color: activeTab === "numerique" ? "#fff" : "#1f2937",
                fontWeight: "600",
              }}
            >
              Activité Numérique
            </button>
            <button
              onClick={() => { setActiveTab("geometrie"); setActiveChapitre(null); }}
              style={{
                padding: "12px 20px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                background: activeTab === "geometrie" ? "#2563eb" : "#e5e7eb",
                color: activeTab === "geometrie" ? "#fff" : "#1f2937",
                fontWeight: "600",
              }}
            >
              Activité Géométrique
            </button>
          </div>

          {/* Image en dessous des boutons */}
          <div style={{ marginBottom: "30px" }}>
            <img
              src={images[activeTab]}
              alt={activeTab === "numerique" ? "Activité Numérique" : "Activité Géométrique"}
              style={{
                width: "100%",
                height: "570px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </div>

          {/* Liste chapitres */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {currentChapitres.map((chap) => (
              <div
                key={chap.id}
                onClick={() => setActiveChapitre(chap)}
                style={{
                  cursor: "pointer",
                  padding: "20px",
                  minHeight: "150px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  borderRadius: "12px",
                  backgroundColor: chap.color,
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
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
        </>
      ) : (
        /* Contenu du chapitre sélectionné - SEULEMENT le contenu, pas d'image ni boutons */
        <div style={{ padding: "30px", background: "#f9fafb", borderRadius: "12px", border: "1px solid #e2e8f0", minHeight: "80vh" }}>
          <h1 style={{ marginBottom: "25px", color: "#2563eb", fontSize: "28px", fontWeight: "700" }}>
            {activeChapitre.title}
          </h1>
          <div style={{ textAlign: "justify", lineHeight: "1.9", fontSize: "16px", color: "#475569" }}>
            {renderContent(chapContent)}
          </div>
          <button
            onClick={() => setActiveChapitre(null)}
            style={{
              marginTop: "25px",
              padding: "12px 20px",
              borderRadius: "8px",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            ← Retour aux chapitres
          </button>
        </div>
      )}
    </div>
  );
}
