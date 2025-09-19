import React, { useState, useEffect, useCallback } from 'react';

// Configuration des couleurs par matière
const colors = {
  "Économie": { primary: "#f59e0b", secondary: "#fef3c7", icon: "💰" },
  "Sociologie": { primary: "#8b5cf6", secondary: "#e9d5ff", icon: "👥" },
  "Psychologie": { primary: "#06b6d4", secondary: "#cffafe", icon: "🧠" },
  "Histoire": { primary: "#ef4444", secondary: "#fee2e2", icon: "📜" },
  "Géographie": { primary: "#10b981", secondary: "#d1fae5", icon: "🌍" }
};

// Données Quiz TSS
const quizTSS = [
  { 
    matiere: "Économie", 
    difficulty: "Avancé",
    description: "Microéconomie, macroéconomie et économie du développement",
    questions: [
      {
        question: "Qu'est-ce que l'élasticité-prix de la demande ?",
        options: ["La variation du prix", "La sensibilité de la demande aux variations de prix", "Le prix d'équilibre", "La quantité demandée"],
        correct: 1,
        explanation: "L'élasticité-prix mesure la sensibilité de la quantité demandée aux variations du prix."
      },
      {
        question: "Le PIB nominal diffère du PIB réel par :",
        options: ["L'inflation", "La population", "Les exportations", "Les impôts"],
        correct: 0,
        explanation: "Le PIB réel est ajusté pour tenir compte de l'inflation, contrairement au PIB nominal."
      }
    ]
  },
  { 
    matiere: "Sociologie", 
    difficulty: "Avancé",
    description: "Sociologie urbaine, stratification sociale et institutions",
    questions: [
      {
        question: "Selon Durkheim, qu'est-ce qui caractérise la solidarité organique ?",
        options: ["La similitude", "La complémentarité", "L'autorité", "La tradition"],
        correct: 1,
        explanation: "La solidarité organique repose sur la complémentarité et la division du travail social."
      },
      {
        question: "Le concept d'habitus a été développé par :",
        options: ["Durkheim", "Weber", "Bourdieu", "Marx"],
        correct: 2,
        explanation: "Pierre Bourdieu a développé le concept d'habitus pour expliquer les pratiques sociales."
      }
    ]
  },
  { 
    matiere: "Psychologie", 
    difficulty: "Avancé",
    description: "Psychologie cognitive, développementale et sociale",
    questions: [
      {
        question: "Selon Piaget, à quel stade l'enfant développe-t-il la pensée abstraite ?",
        options: ["Sensori-moteur", "Préopératoire", "Opérations concrètes", "Opérations formelles"],
        correct: 3,
        explanation: "Le stade des opérations formelles (11-16 ans) permet le développement de la pensée abstraite."
      },
      {
        question: "La dissonance cognitive est un concept de :",
        options: ["Freud", "Festinger", "Skinner", "Pavlov"],
        correct: 1,
        explanation: "Leon Festinger a développé la théorie de la dissonance cognitive en 1957."
      }
    ]
  },
  { 
    matiere: "Histoire", 
    difficulty: "Avancé",
    description: "Histoire contemporaine, décolonisation et relations internationales",
    questions: [
      {
        question: "La conférence de Bandung (1955) a marqué :",
        options: ["La fin de la guerre froide", "L'émergence du tiers-monde", "La création de l'ONU", "La décolonisation de l'Afrique"],
        correct: 1,
        explanation: "La conférence de Bandung a marqué l'émergence du mouvement des non-alignés et du tiers-monde."
      },
      {
        question: "Les accords de Bretton Woods (1944) ont établi :",
        options: ["L'ONU", "Le système monétaire international", "L'OTAN", "Le plan Marshall"],
        correct: 1,
        explanation: "Bretton Woods a établi le nouveau système monétaire international avec le dollar comme référence."
      }
    ]
  },
  { 
    matiere: "Géographie", 
    difficulty: "Avancé",
    description: "Géographie urbaine, démographie et développement durable",
    questions: [
      {
        question: "Qu'est-ce qu'une mégalopole ?",
        options: ["Une grande ville", "Un ensemble de métropoles", "Une ville de plus de 10 millions d'habitants", "Une région urbaine"],
        correct: 1,
        explanation: "Une mégalopole est un ensemble de métropoles et d'agglomérations qui forment une région urbaine continue."
      },
      {
        question: "La transition démographique se caractérise par :",
        options: ["Une forte natalité", "Une baisse de la mortalité puis de la natalité", "Une forte mortalité", "Une migration importante"],
        correct: 1,
        explanation: "La transition démographique est le passage d'un régime démographique à forte mortalité et natalité vers un régime à faible mortalité et natalité."
      }
    ]
  }
];

export default function QuizTSS() {
  const [selectedMatiere, setSelectedMatiere] = useState(null);
  const [quizState, setQuizState] = useState('selection');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentMatiere = quizTSS.find(q => q.matiere === selectedMatiere);
  const questions = currentMatiere?.questions || [];
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  // Timer pour le quiz
  useEffect(() => {
    if (quizState === 'active' && timeLeft > 0 && !showExplanation) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showExplanation) {
      handleAnswer(null);
    }
  }, [timeLeft, quizState, showExplanation]);

  const handleMatiereSelect = useCallback((matiere) => {
    setSelectedMatiere(matiere);
    setQuizState('ready');
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
  }, []);

  const startQuiz = useCallback(() => {
    setQuizState('active');
    setTimeLeft(30);
  }, []);

  const handleAnswer = useCallback((answerIndex) => {
    if (showExplanation) return;
    
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    if (answerIndex === currentQuestion.correct) {
      setScore(prev => prev + 1);
    }
  }, [showExplanation, currentQuestion]);

  const nextQuestion = useCallback(() => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setTimeLeft(30);
    } else {
      setQuizState('results');
    }
  }, [currentQuestionIndex, totalQuestions]);

  const resetQuiz = useCallback(() => {
    setQuizState('ready');
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
  }, []);

  if (quizState === 'selection') {
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)", padding: "40px 20px", fontFamily: "'Inter', sans-serif" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "800", background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "60px" }}>
            Quiz Terminale TSS
          </h1>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            {quizTSS.map(subject => {
              const colors_subject = colors[subject.matiere];
              
              return (
                <div 
                  key={subject.matiere} 
                  onClick={() => handleMatiereSelect(subject.matiere)} 
                  style={{ 
                    cursor: "pointer", 
                    padding: "40px 30px", 
                    borderRadius: "24px", 
                    background: "#ffffff", 
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)", 
                    transition: "all 0.4s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
                  }}
                >
                  <div style={{ fontSize: "3.5rem", marginBottom: "20px" }}>
                    {colors_subject.icon}
                  </div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "12px", color: "#1e293b" }}>
                    {subject.matiere}
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "#64748b", marginBottom: "20px" }}>
                    {subject.description}
                  </p>
                  <span style={{ background: colors_subject.secondary, color: colors_subject.primary, padding: "6px 12px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: "600" }}>
                    {subject.difficulty}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (quizState === 'ready') {
    const colors_subject = colors[selectedMatiere];
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)", padding: "40px 20px", fontFamily: "'Inter', sans-serif" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ background: "white", borderRadius: "24px", padding: "60px 40px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
            <div style={{ fontSize: "4rem", marginBottom: "30px" }}>{colors_subject.icon}</div>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#1e293b", marginBottom: "20px" }}>
              Quiz {selectedMatiere}
            </h1>
            <p style={{ fontSize: "1.2rem", color: "#64748b", marginBottom: "40px" }}>
              {currentMatiere.description}
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginBottom: "40px" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: colors_subject.primary }}>{totalQuestions}</div>
                <div style={{ color: "#64748b" }}>Questions</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: colors_subject.primary }}>30s</div>
                <div style={{ color: "#64748b" }}>Par question</div>
              </div>
            </div>
            <button
              onClick={startQuiz}
              style={{
                padding: "18px 36px",
                borderRadius: "16px",
                border: "none",
                background: `linear-gradient(135deg, ${colors_subject.primary} 0%, ${colors_subject.primary}dd 100%)`,
                color: "white",
                fontSize: "1.2rem",
                fontWeight: "700",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            >
              🚀 Commencer le Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (quizState === 'active') {
    const colors_subject = colors[selectedMatiere];
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)", padding: "40px 20px", fontFamily: "'Inter', sans-serif" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {/* Header avec progression */}
          <div style={{ background: "white", borderRadius: "20px", padding: "30px", marginBottom: "30px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#1e293b", margin: 0 }}>
                {colors_subject.icon} {selectedMatiere}
              </h2>
              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <span style={{ fontSize: "1.1rem", fontWeight: "600", color: "#64748b" }}>
                  {currentQuestionIndex + 1}/{totalQuestions}
                </span>
                <div style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: `conic-gradient(${colors_subject.primary} ${(30-timeLeft)/30*360}deg, #e2e8f0 0deg)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  color: timeLeft <= 5 ? "#ef4444" : "#1e293b"
                }}>
                  {timeLeft}
                </div>
              </div>
            </div>
            
            <div style={{ width: "100%", height: "8px", background: "#e2e8f0", borderRadius: "4px", overflow: "hidden" }}>
              <div style={{ 
                width: `${progress}%`, 
                height: "100%", 
                background: `linear-gradient(90deg, ${colors_subject.primary} 0%, ${colors_subject.primary}dd 100%)`,
                transition: "width 0.3s ease"
              }}></div>
            </div>
          </div>

          {/* Question */}
          <div style={{ background: "white", borderRadius: "20px", padding: "40px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
            <h3 style={{ fontSize: "1.8rem", fontWeight: "700", color: "#1e293b", marginBottom: "40px", lineHeight: "1.4" }}>
              {currentQuestion.question}
            </h3>
            
            <div style={{ display: "grid", gap: "16px" }}>
              {currentQuestion.options.map((option, index) => {
                let buttonStyle = {
                  padding: "20px 24px",
                  borderRadius: "16px",
                  border: "2px solid #e2e8f0",
                  background: "white",
                  color: "#374151",
                  fontSize: "1.1rem",
                  fontWeight: "500",
                  cursor: showExplanation ? "default" : "pointer",
                  transition: "all 0.3s ease",
                  textAlign: "left"
                };

                if (showExplanation) {
                  if (index === currentQuestion.correct) {
                    buttonStyle.background = "#dcfce7";
                    buttonStyle.borderColor = "#16a34a";
                    buttonStyle.color = "#15803d";
                  } else if (index === selectedAnswer && selectedAnswer !== currentQuestion.correct) {
                    buttonStyle.background = "#fee2e2";
                    buttonStyle.borderColor = "#dc2626";
                    buttonStyle.color = "#dc2626";
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    style={buttonStyle}
                    disabled={showExplanation}
                  >
                    <span style={{ fontWeight: "700", marginRight: "12px" }}>
                      {String.fromCharCode(65 + index)}.
                    </span>
                    {option}
                    {showExplanation && index === currentQuestion.correct && (
                      <span style={{ float: "right", fontSize: "1.2rem" }}>✓</span>
                    )}
                  </button>
                );
              })}
            </div>

            {showExplanation && (
              <div style={{ 
                marginTop: "30px", 
                padding: "20px", 
                background: "#f8fafc", 
                borderRadius: "12px",
                borderLeft: `4px solid ${colors_subject.primary}`
              }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: colors_subject.primary, marginBottom: "10px" }}>
                  💡 Explication
                </h4>
                <p style={{ color: "#374151", lineHeight: "1.6", margin: 0 }}>
                  {currentQuestion.explanation}
                </p>
              </div>
            )}

            {showExplanation && (
              <div style={{ marginTop: "30px", textAlign: "center" }}>
                <button
                  onClick={nextQuestion}
                  style={{
                    padding: "16px 32px",
                    borderRadius: "12px",
                    border: "none",
                    background: `linear-gradient(135deg, ${colors_subject.primary} 0%, ${colors_subject.primary}dd 100%)`,
                    color: "white",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    cursor: "pointer"
                  }}
                >
                  {currentQuestionIndex < totalQuestions - 1 ? "Question suivante →" : "Voir les résultats 🎯"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (quizState === 'results') {
    const colors_subject = colors[selectedMatiere];
    const percentage = Math.round((score / totalQuestions) * 100);
    
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)", padding: "40px 20px", fontFamily: "'Inter', sans-serif" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ background: "white", borderRadius: "24px", padding: "60px 40px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
            <div style={{ fontSize: "4rem", marginBottom: "30px" }}>
              {percentage >= 80 ? "🎉" : percentage >= 60 ? "👏" : "💪"}
            </div>
            
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#1e293b", marginBottom: "20px" }}>
              Quiz {selectedMatiere} terminé !
            </h1>
            
            <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginBottom: "40px" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "3rem", fontWeight: "800", color: colors_subject.primary }}>{score}</div>
                <div style={{ color: "#64748b" }}>Bonnes réponses</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "3rem", fontWeight: "800", color: colors_subject.primary }}>{percentage}%</div>
                <div style={{ color: "#64748b" }}>Score</div>
              </div>
            </div>

            <p style={{ fontSize: "1.2rem", color: "#64748b", marginBottom: "40px" }}>
              {percentage >= 80 ? "Excellent travail ! 🌟" : 
               percentage >= 60 ? "Bon travail ! 👍" : 
               "Continuez vos efforts ! 💪"}
            </p>

            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <button
                onClick={resetQuiz}
                style={{
                  padding: "16px 24px",
                  borderRadius: "12px",
                  border: `2px solid ${colors_subject.primary}`,
                  background: "transparent",
                  color: colors_subject.primary,
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  cursor: "pointer"
                }}
              >
                🔄 Refaire ce quiz
              </button>
              
              <button
                onClick={() => setQuizState('selection')}
                style={{
                  padding: "16px 24px",
                  borderRadius: "12px",
                  border: "none",
                  background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                  color: "white",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  cursor: "pointer"
                }}
              >
                📚 Autres matières
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
