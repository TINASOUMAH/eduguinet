import React, { useState, useEffect } from "react";

const chapitresGeo = [
  { 
    id: 1, 
    title: "Relief et paysages", 
    txtFile: "/uploads/text/dix/1.txt", 
    color: "#fef3c7",
    image: "/image/geo/relief.jpg"
  },
  { 
    id: 2, 
    title: "Climats et zones climatiques", 
    txtFile: "/uploads/text/dix/2.txt", 
    color: "#fde2e2",
    image: "/image/geo/climat.jpg"
  },
  { 
    id: 3, 
    title: "Hydrographie", 
    txtFile: "/uploads/text/dix/3.txt", 
    color: "#d1fae5",
    image: "/image/geo/hydro.jpg"
  },
  { 
    id: 4, 
    title: "Population et urbanisation", 
    txtFile: "/uploads/text/dix/4.txt", 
    color: "#dbeafe",
    image: "/image/geo/population.jpg"
  },
  { 
    id: 5, 
    title: "Économie et ressources", 
    txtFile: "/uploads/text/dix/5.txt", 
    color: "#fcd5ce",
    image: "/image/geo/economie.jpg"
  },
  { 
    id: 6, 
    title: "Géographie régionale", 
    txtFile: "/uploads/text/dix/6.txt", 
    color: "#e0f2fe",
    image: "/image/geo/regionale.jpg"
  },
];

export default function Geographie() {
  const [activeChapitre, setActiveChapitre] = useState(null);
  const [chapContent, setChapContent] = useState("");
  const defaultImage = "/image/geographie.jpg"; // image par défaut de la matière

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
    return lines.map((line, index) => {
      const trimmed = line.trim();
      if (!trimmed) return <div key={index} style={{ marginBottom: "12px" }} />;

      if (/^(I+|V+|X+)\s/.test(trimmed) || /^[A-ZÉÈÊÎÔÛÄÖÜÏ\s]{5,}$/.test(trimmed)) {
        return (
          <h2 key={index} style={{ color: "#1e40af", fontSize: "22px", marginTop: "25px", marginBottom: "12px", borderBottom: "2px solid #2563eb", paddingBottom: "3px" }}>
            {trimmed}
          </h2>
        );
      }

      if (/^[0-9]+[-.)]\s/.test(trimmed) || /^[A-Z]-\s/.test(trimmed)) {
        return (
          <h3 key={index} style={{ color: "#1e3a8a", fontSize: "18px", marginTop: "18px", marginBottom: "10px", borderBottom: "1px solid #93c5fd", paddingBottom: "2px" }}>
            {trimmed}
          </h3>
        );
      }

      if (trimmed.startsWith("-") || trimmed.startsWith("*")) {
        return <li key={index} style={{ marginLeft: "25px", color: "#374151", lineHeight: "1.8" }}>{trimmed.replace(/^[-*]\s*/, "")}</li>;
      }

      if (/=/.test(trimmed) || /×/.test(trimmed) || /,/.test(trimmed)) {
        return (
          <pre key={index} style={{ marginBottom: "12px", lineHeight: "1.8", fontFamily: "monospace", fontSize: "16px", color: "#111827", whiteSpace: "pre-wrap" }}>
            {trimmed}
          </pre>
        );
      }

      return (
        <p key={index} style={{ marginBottom: "14px", textAlign: "justify", lineHeight: "1.9", fontSize: "16px", color: "#374151" }}>
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div style={{ width: "95%", maxWidth: "1000px", margin: "0 auto" }}>
      {/* Image dynamique */}
      <div style={{ marginBottom: "20px" }}>
        <img
          src={activeChapitre ? activeChapitre.image : defaultImage}
          alt="Illustration Géographie"
          style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "12px" }}
        />
      </div>

      {/* Liste des chapitres */}
      {!activeChapitre && (
        <>
          <h3 style={{ marginBottom: "15px", color: "#334155", fontWeight: "600" }}>
            Choisis le chapitre que tu veux réviser...
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
            {chapitresGeo.map((chap) => (
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
        </>
      )}

      {/* Contenu du chapitre */}
      {activeChapitre && (
        <div style={{ marginTop: "30px", padding: "30px", background: "#ffffff", borderRadius: "12px", border: "1px solid #e5e7eb", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
          <h1 style={{ marginBottom: "25px", color: "#2563eb", fontSize: "26px", fontWeight: "700", textDecoration: "underline", textAlign: "center" }}>
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
