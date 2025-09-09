import React, { useState } from "react";

// Données des quiz par matière
const quizData = [
  {
    id: 1,
    matiere: "Français",
    title: "Lecture et compréhension",
    questions: [
      { id: 1, question: "Quel est le synonyme de 'rapide' ?", options: ["lent", "vite", "fort", "doux"], answer: "vite" },
      { id: 2, question: "Complétez : Il ___ parti hier.", options: ["est", "a", "sont", "sera"], answer: "est" },
    ],
  },
  {
    id: 2,
    matiere: "Calcul",
    title: "Nombres entiers",
    questions: [
      { id: 1, question: "Combien font 7 + 5 ?", options: ["10", "12", "14", "11"], answer: "12" },
      { id: 2, question: "Combien font 9 x 3 ?", options: ["27", "21", "24", "30"], answer: "27" },
    ],
  },
  {
    id: 3,
    matiere: "Science d'observation",
    title: "Physique",
    questions: [
      { id: 1, question: "La matière est constituée de ?", options: ["Particules", "Eau", "Air", "Chaleur"], answer: "Particules" },
    ],
  },
  {
    id: 4,
    matiere: "Histoire",
    title: "Histoire ancienne",
    questions: [
      { id: 1, question: "Qui a fondé Rome ?", options: ["Romulus", "Jules César", "Hannibal", "Néron"], answer: "Romulus" },
    ],
  },
  {
    id: 5,
    matiere: "Géographie",
    title: "Relief et climat",
    questions: [
      { id: 1, question: "Quel est le plus haut sommet du monde ?", options: ["Everest", "Kilimandjaro", "Mont Blanc", "Elbrouz"], answer: "Everest" },
    ],
  },
  {
    id: 6,
    matiere: "ECM",
    title: "Éducation Civique et Morale",
    questions: [
      { id: 1, question: "Qu'est-ce que la citoyenneté ?", options: ["Être gentil", "Participer à la vie de la société", "Aller à l'école", "Jouer au foot"], answer: "Participer à la vie de la société" },
      { id: 2, question: "Quel est un droit fondamental ?", options: ["Le droit de voter", "Le droit de dormir", "Le droit de manger", "Le droit de téléphoner"], answer: "Le droit de voter" },
    ],
  },
];

// Couleurs par matière
const matiereColors = {
  "Français": "#6C63FF",
  "Calcul": "#2563EB",
  "Science d'observation": "#F59E0B",
  "Histoire": "#EF4444",
  "Géographie": "#10B981",
  "ECM": "#8B5CF6",
};

export default function QuizPlatform() {
  const [selectedMatiere, setSelectedMatiere] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const startQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  const filteredQuizzes = selectedMatiere
    ? quizData.filter((q) => q.matiere === selectedMatiere)
    : quizData;

  return (
    <div style={{ maxWidth: "1000px", margin: "50px auto", fontFamily: "'Inter', sans-serif", textAlign: "center" }}>
      <h1 style={{ fontSize: "36px", fontWeight: "700", color: "#1F2937", marginBottom: "40px" }}>📚 Quiz 6ème</h1>

      {/* Page matières */}
      {!selectedMatiere && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
          {Object.keys(matiereColors).map((matiere, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedMatiere(matiere)}
              style={{
                cursor: "pointer",
                padding: "60px 30px",
                borderRadius: "25px",
                background: matiereColors[matiere] + "20",
                boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-8px) scale(1.05)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0) scale(1)"}
            >
              <h2 style={{ color: matiereColors[matiere], fontSize: "26px", fontWeight: "700" }}>{matiere}</h2>
            </div>
          ))}
        </div>
      )}

      {/* Liste des quiz d’une matière */}
      {selectedMatiere && !selectedQuiz && (
        <div>
          <button
            onClick={() => setSelectedMatiere(null)}
            style={{ marginBottom: "30px", padding: "12px 28px", borderRadius: "50px", border: "none", backgroundColor: "#f0f0f0", cursor: "pointer" }}
          >
            ← Retour aux matières
          </button>
          <h2 style={{ color: matiereColors[selectedMatiere], marginBottom: "30px" }}>Quiz de {selectedMatiere}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "35px" }}>
            {filteredQuizzes.map((quiz) => (
              <div
                key={quiz.id}
                style={{
                  padding: "35px 25px",
                  borderRadius: "25px",
                  background: "#fff",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "250px"
                }}
              >
                <div>
                  <h3 style={{ color: "#1F2937", fontSize: "22px", marginBottom: "20px" }}>{quiz.title}</h3>
                </div>
                <button
                  onClick={() => { setSelectedQuiz(quiz); startQuiz(); }}
                  style={{
                    padding: "12px 28px",
                    borderRadius: "12px",
                    border: "none",
                    backgroundColor: matiereColors[selectedMatiere],
                    color: "#fff",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = 0.8}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = 1}
                >
                  Lancer
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quiz en cours */}
      {selectedQuiz && (
        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <button
            onClick={() => setSelectedQuiz(null)}
            style={{ marginBottom: "30px", padding: "12px 28px", borderRadius: "50px", border: "none", backgroundColor: "#f0f0f0", cursor: "pointer" }}
          >
            ← Retour aux quiz
          </button>

          {!showScore ? (
            <div>
              <h2 style={{ color: matiereColors[selectedQuiz.matiere], fontSize: "28px", marginBottom: "20px" }}>{selectedQuiz.title}</h2>
              <p style={{ fontSize: "18px", marginBottom: "20px" }}>
                Question {currentQuestion + 1} / {selectedQuiz.questions.length}
              </p>
              <div style={{ margin: "20px auto", maxWidth: "600px", padding: "30px", background: "#f7f7f7", borderRadius: "20px", boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}>
                <p style={{ fontSize: "20px", marginBottom: "25px" }}>{selectedQuiz.questions[currentQuestion].question}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  {selectedQuiz.questions[currentQuestion].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        if (option === selectedQuiz.questions[currentQuestion].answer) setScore(score + 1);
                        const next = currentQuestion + 1;
                        if (next < selectedQuiz.questions.length) setCurrentQuestion(next);
                        else setShowScore(true);
                      }}
                      style={{
                        padding: "14px 28px",
                        borderRadius: "14px",
                        border: "2px solid " + matiereColors[selectedQuiz.matiere],
                        backgroundColor: "#fff",
                        cursor: "pointer",
                        fontWeight: "600",
                        fontSize: "16px",
                        transition: "all 0.2s",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = matiereColors[selectedQuiz.matiere]; e.currentTarget.style.color = "#fff"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#fff"; e.currentTarget.style.color = "#000"; }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h2 style={{ color: matiereColors[selectedQuiz.matiere], fontSize: "28px", marginBottom: "20px" }}>Résultat du quiz</h2>
              <p style={{ fontSize: "20px", margin: "20px 0" }}>Vous avez obtenu <strong>{score}</strong> / {selectedQuiz.questions.length} points.</p>
              <button
                onClick={() => setSelectedQuiz(null)}
                style={{
                  marginTop: "25px",
                  padding: "14px 30px",
                  borderRadius: "14px",
                  border: "none",
                  backgroundColor: matiereColors[selectedQuiz.matiere],
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "16px",
                  boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
                }}
              >
                Retour à la liste de quiz
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
