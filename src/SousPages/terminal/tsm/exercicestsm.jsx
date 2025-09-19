import React, { useState } from "react";

const matiereColors = {
  "Mathématiques": { primary: "#2563eb", gradient: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)", icon: "📊" },
  "Chimie": { primary: "#16a34a", gradient: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)", icon: "🧪" },
  "Français": { primary: "#7c3aed", gradient: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)", icon: "📚" },
  "Philosophie": { primary: "#dc2626", gradient: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)", icon: "🤔" },
  "Histoire": { primary: "#ea580c", gradient: "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)", icon: "🏛️" },
  "Anglais": { primary: "#059669", gradient: "linear-gradient(135deg, #059669 0%, #047857 100%)", icon: "🇬🇧" }
};

const exercicesTSM = [
  {
    id: 1, matiere: "Mathématiques", titre: "Analyse - Étude de fonctions", niveau: "Avancé", duree: "45 min",
    description: "Exercices d'analyse sur l'étude complète de fonctions.",
    enonce: "Soit f(x) = (x² - 4)/(x - 2). Étudier la fonction f.",
    points: 20
  },
  {
    id: 2, matiere: "Chimie", titre: "Chimie organique", niveau: "Avancé", duree: "40 min",
    description: "Nomenclature IUPAC des composés organiques.",
    enonce: "Nommer CH₃-CH(CH₃)-CH₂-CH(OH)-CH₃ selon IUPAC.",
    points: 18
  },
  {
    id: 3, matiere: "Français", titre: "Dissertation littéraire", niveau: "Avancé", duree: "4h",
    description: "Analyse sur un thème littéraire majeur.",
    enonce: "Discutez : « Le roman est un miroir qui se promène sur une grande route »",
    points: 20
  }
];

const ExercicesPageTSM = () => {
  const [selectedMatiere, setSelectedMatiere] = useState("Tous");
  const [selectedNiveau, setSelectedNiveau] = useState("Tous");
  const [exerciceActif, setExerciceActif] = useState(null);

  const exercicesFiltres = exercicesTSM.filter(ex => {
    const matchMatiere = selectedMatiere === "Tous" || ex.matiere === selectedMatiere;
    const matchNiveau = selectedNiveau === "Tous" || ex.niveau === selectedNiveau;
    return matchMatiere && matchNiveau;
  });

  if (exerciceActif) {
    const colors = matiereColors[exerciceActif.matiere];
    return (
      <div style={{ minHeight: "100vh", background: "#f8fafc", padding: "20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ background: colors.gradient, borderRadius: "20px", padding: "30px", color: "white", marginBottom: "30px" }}>
            <button onClick={() => setExerciceActif(null)} style={{ background: "rgba(255,255,255,0.2)", border: "none", color: "white", padding: "8px 16px", borderRadius: "8px", marginBottom: "20px", cursor: "pointer" }}>
              ← Retour aux exercices
            </button>
            <h1 style={{ fontSize: "28px", fontWeight: "700" }}>{colors.icon} {exerciceActif.titre}</h1>
            <div style={{ display: "flex", gap: "20px", marginTop: "15px", fontSize: "14px" }}>
              <span>⏱️ {exerciceActif.duree}</span>
              <span>📊 {exerciceActif.points} points</span>
            </div>
          </div>
          
          <div style={{ background: "white", borderRadius: "16px", padding: "30px", boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "20px", color: "#1e293b" }}>Énoncé</h2>
            <div style={{ background: "#f8fafc", padding: "20px", borderRadius: "12px", marginBottom: "30px", lineHeight: "1.6" }}>
              {exerciceActif.enonce}
            </div>
            
            <div style={{ display: "flex", gap: "15px" }}>
              <button style={{ padding: "12px 24px", background: colors.gradient, color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "600" }}>
                Commencer l'exercice
              </button>
              <button style={{ padding: "12px 24px", border: `1px solid ${colors.primary}`, color: colors.primary, background: "white", borderRadius: "8px", cursor: "pointer", fontWeight: "600" }}>
                Voir la solution
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", padding: "20px" }}>
      <div style={{ textAlign: "center", marginBottom: "50px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: "24px", padding: "40px 20px", color: "white", maxWidth: "1200px", margin: "0 auto 50px auto" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "15px" }}>📝 Exercices TSM</h1>
        <p style={{ fontSize: "18px", opacity: "0.9" }}>Entraînez-vous • Terminale Sciences Mathématiques</p>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto 40px auto", background: "white", borderRadius: "16px", padding: "25px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
        <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
          <div>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#374151" }}>Matière</label>
            <select value={selectedMatiere} onChange={(e) => setSelectedMatiere(e.target.value)} style={{ padding: "10px 15px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px" }}>
              <option value="Tous">Toutes les matières</option>
              {Object.keys(matiereColors).map(matiere => <option key={matiere} value={matiere}>{matiere}</option>)}
            </select>
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", color: "#374151" }}>Niveau</label>
            <select value={selectedNiveau} onChange={(e) => setSelectedNiveau(e.target.value)} style={{ padding: "10px 15px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "14px" }}>
              <option value="Tous">Tous niveaux</option>
              <option value="Débutant">Débutant</option>
              <option value="Intermédiaire">Intermédiaire</option>
              <option value="Avancé">Avancé</option>
            </select>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "25px" }}>
        {exercicesFiltres.map((exercice) => {
          const colors = matiereColors[exercice.matiere];
          return (
            <div key={exercice.id} style={{ background: "white", borderRadius: "16px", padding: "25px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", transition: "transform 0.3s ease" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "15px" }}>
                <div style={{ fontSize: "24px" }}>{colors.icon}</div>
                <div>
                  <div style={{ fontSize: "14px", color: colors.primary, fontWeight: "600" }}>{exercice.matiere}</div>
                  <div style={{ fontSize: "12px", color: "#64748b" }}>{exercice.niveau}</div>
                </div>
              </div>
              
              <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "12px", color: "#1e293b" }}>{exercice.titre}</h3>
              <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "20px", lineHeight: "1.5" }}>{exercice.description}</p>
              
              <div style={{ display: "flex", gap: "20px", marginBottom: "20px", fontSize: "13px", color: "#64748b" }}>
                <div>⏱️ {exercice.duree}</div>
                <div>📊 {exercice.points} pts</div>
              </div>
              
              <button onClick={() => setExerciceActif(exercice)} style={{ width: "100%", padding: "12px", borderRadius: "8px", background: colors.gradient, color: "white", border: "none", cursor: "pointer", fontSize: "16px", fontWeight: "600" }}>
                Voir l'exercice
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExercicesPageTSM;
