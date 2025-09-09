import React, { useState, useEffect } from "react";

export default function ChapitreText({ file }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error("Erreur chargement fichier :", err));
  }, [file]);

  return (
    <div style={{ padding: "20px", background: "#f9fafb", borderRadius: "12px", whiteSpace: "pre-wrap", lineHeight: "1.6" }}>
      {content}
    </div>
  );
}
