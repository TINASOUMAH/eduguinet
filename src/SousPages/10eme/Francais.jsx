import React, { useState, useEffect } from "react";

const chapitres = [
  { id: 1, title: "Conjugaison", txtFile: "/uploads/text/francais/conjugaison.txt", color: "#fef3c7", desc: "Apprends les temps, modes et accords des verbes." },
  { id: 2, title: "Grammaire", txtFile: "/uploads/text/francais/grammaire.txt", color: "#fde2e2", desc: "Comprends les fonctions des mots et les règles de syntaxe." },
  { id: 3, title: "Vocabulaire", txtFile: "/uploads/text/francais/vocabulaire.txt", color: "#d1fae5", desc: "Enrichis ton lexique et découvre de nouveaux mots." },
  
  { id: 5, title: "Expression écrite", txtFile: "/uploads/text/francais/expression.txt", color: "#fcd5ce", desc: "Apprends à structurer tes idées et rédiger correctement." },
  { id: 6, title: "Orthographe", txtFile: "/uploads/text/francais/orthographe.txt", color: "#e0f2fe", desc: "Maîtrise les règles et exceptions orthographiques." },
  { id: 7, title: "Techniques d'expression", txtFile: "/uploads/text/francais/techniques.txt", color: "#fde68a", desc: "Développe tes compétences d’expression orale et écrite." },
];

export default function Francais() {
  const [activeChapitre, setActiveChapitre] = useState(null);
  const [chapContent, setChapContent] = useState("");
  const imageMatiere = "/image/françaidix (2).jpg";

  useEffect(() => {
    if (activeChapitre) {
      fetch(activeChapitre.txtFile)
        .then((res) => res.text())
        .then((text) => setChapContent(text))
        .catch(() => setChapContent("❌ Impossible de charger le contenu."));
    }
  }, [activeChapitre]);

  const renderContent = (text) => {
    const lines = text.split("\n");
    return lines.map((line, index) => (
      <p key={index} style={{ marginBottom: "12px", lineHeight: "1.8", textAlign: "justify" }}>
        {line}
      </p>
    ));
  };

  return (
    <div style={{ width: "95%", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Image matière */}
      <div style={{ marginBottom: "20px" }}>
        <img
          src={imageMatiere}
          alt="Français"
          style={{ width: "100%", height: "700px", objectFit: "cover", borderRadius: "12px" }}
        />
      </div>

      {/* Cartes des chapitres */}
      {!activeChapitre && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // 3 cartes par ligne
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          {chapitres.map((chap) => (
            <div
              key={chap.id}
              onClick={() => setActiveChapitre(chap)}
              style={{
                cursor: "pointer",
                padding: "20px",
                borderRadius: "12px",
                backgroundColor: chap.color,
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                minHeight: "150px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px) scale(1.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0) scale(1)")}
            >
              <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#0f172a" }}>{chap.title}</h3>
              <p style={{ fontSize: "14px", color: "#334155", marginTop: "8px", flexGrow: 1 }}>{chap.desc}</p>
              <span style={{ color: "#1e40af", fontWeight: "600", marginTop: "10px" }}>→ Voir le contenu</span>
            </div>
          ))}
        </div>
      )}

      {/* Contenu du chapitre actif */}
      {activeChapitre && (
        <div
          style={{
            marginTop: "30px",
            padding: "30px",
            background: "#ffffff",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
          }}
        >
          <h1
            style={{
              marginBottom: "25px",
              color: "#2563eb",
              fontSize: "26px",
              fontWeight: "700",
              textDecoration: "underline",
              textAlign: "center",
            }}
          >
            {activeChapitre.title}
          </h1>
          <div style={{ fontSize: "17px", color: "#374151", textAlign: "justify", lineHeight: "1.9" }}>
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
