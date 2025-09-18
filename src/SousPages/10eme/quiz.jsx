import React, { useState, useEffect, useCallback } from "react";

// Configuration des couleurs pour chaque matière
const matiereColors = {
  "Mathématiques": { 
    primary: "#3b82f6", 
    secondary: "#dbeafe", 
    gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    icon: "🔢"
  },
  "Français": { 
    primary: "#ef4444", 
    secondary: "#fee2e2", 
    gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    icon: "📚"
  },
  "Physique": { 
    primary: "#8b5cf6", 
    secondary: "#f3e8ff", 
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
    icon: "⚡"
  },
  "Chimie": { 
    primary: "#06b6d4", 
    secondary: "#cffafe", 
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
    icon: "🧪"
  },
  "Biologie": { 
    primary: "#10b981", 
    secondary: "#d1fae5", 
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    icon: "🌱"
  },
  "Géographie": { 
    primary: "#f59e0b", 
    secondary: "#fef3c7", 
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    icon: "🌍"
  },
  "ECM": { 
    primary: "#84cc16", 
    secondary: "#ecfccb", 
    gradient: "linear-gradient(135deg, #84cc16 0%, #65a30d 100%)",
    icon: "⚖️"
  }
};

// Données Quiz enrichies
const quiz6 = [
  { 
    matiere: "Mathématiques", 
    difficulty: "Facile",
    description: "Testez vos connaissances en calcul et géométrie",
    questions: [
      { 
        id: 1, 
        question: "Quel est le résultat de 2 + 3 ?", 
        options: ["4","5","6","7"], 
        answer: "5",
        explanation: "2 + 3 = 5. C'est une addition simple."
      },
      { 
        id: 2, 
        question: "Combien fait 5 × 2 ?", 
        options: ["10","12","8","15"], 
        answer: "10",
        explanation: "5 × 2 = 10. La multiplication par 2 revient à doubler le nombre."
      },
      { 
        id: 3, 
        question: "Quelle est la forme d'un carré ?", 
        options: ["4 côtés égaux","3 côtés","6 côtés","Rond"], 
        answer: "4 côtés égaux",
        explanation: "Un carré a 4 côtés de même longueur et 4 angles droits."
      }
    ]
  },
  { 
    matiere: "Français", 
    difficulty: "Moyen",
    description: "Vocabulaire, grammaire et compréhension",
    questions: [
      { 
        id: 1, 
        question: "Quel est le synonyme de 'rapide' ?", 
        options: ["lent","vite","fort","grand"], 
        answer: "vite",
        explanation: "'Vite' et 'rapide' ont le même sens : qui se déplace à grande vitesse."
      },
      { 
        id: 2, 
        question: "Quel est l'antonyme de 'heureux' ?", 
        options: ["joyeux","triste","content","souriant"], 
        answer: "triste",
        explanation: "'Triste' est le contraire d'heureux. Un antonyme exprime le sens opposé."
      }
    ]
  },
  { 
    matiere: "Physique", 
    difficulty: "Moyen",
    description: "Découvrez les lois de la nature",
    questions: [
      { 
        id: 1, 
        question: "Quelle est l'unité de mesure de la masse ?", 
        options: ["kg","m","s","L"], 
        answer: "kg",
        explanation: "Le kilogramme (kg) est l'unité de base pour mesurer la masse."
      },
      { 
        id: 2, 
        question: "Combien y a-t-il de phases de la lune ?", 
        options: ["4","6","8","12"], 
        answer: "8",
        explanation: "La lune a 8 phases principales dans son cycle complet."
      }
    ]
  },
  { 
    matiere: "Chimie", 
    difficulty: "Facile",
    description: "Les bases de la chimie et des éléments",
    questions: [
      { 
        id: 1, 
        question: "Quelle est la formule chimique de l'eau ?", 
        options: ["O2","H2O","CO2","NaCl"], 
        answer: "H2O",
        explanation: "L'eau est composée de 2 atomes d'hydrogène (H) et 1 atome d'oxygène (O)."
      }
    ]
  },
  { 
    matiere: "Biologie", 
    difficulty: "Facile",
    description: "Le corps humain et le monde vivant",
    questions: [
      { 
        id: 1, 
        question: "Quel organe pompe le sang dans le corps ?", 
        options: ["Cœur","Poumon","Foie","Cerveau"], 
        answer: "Cœur",
        explanation: "Le cœur est un muscle qui pompe le sang dans tout l'organisme."
      }
    ]
  },
  { 
    matiere: "Géographie", 
    difficulty: "Facile",
    description: "Les pays, capitales et continents",
    questions: [
      { 
        id: 1, 
        question: "Quelle est la capitale de la France ?", 
        options: ["Paris","Lyon","Marseille","Bordeaux"], 
        answer: "Paris",
        explanation: "Paris est la capitale et la plus grande ville de France."
      }
    ]
  },
  { 
    matiere: "ECM", 
    difficulty: "Moyen",
    description: "Éducation civique et valeurs morales",
    questions: [
      { 
        id: 1, 
        question: "Que signifie ECM ?", 
        options: ["Éducation Civique et Morale","École Centrale Moderne","Éthique et Civilisation","Étude Culturelle Moderne"], 
        answer: "Éducation Civique et Morale",
        explanation: "ECM signifie Éducation Civique et Morale, matière enseignant les valeurs citoyennes."
      }
    ]
  },
];

export default function Quiz6() {
  const [selectedMatiere, setSelectedMatiere] = useState(null);
  const [quizState, setQuizState] = useState('selection'); // selection, ready, active, results
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [questionsAnswered, setQuestionsAnswered] = useState(new Set());

  const currentMatiere = quiz6.find(q => q.matiere === selectedMatiere);
  const questions = currentMatiere?.questions || [];
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  // Timer pour le quiz
  useEffect(() => {
    let interval;
    if (quizState === 'active') {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [quizState]);

  // Format du timer
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleMatiereSelect = (matiere) => {
    setSelectedMatiere(matiere);
    setQuizState('ready');
  };

  const startQuiz = () => {
    setQuizState('active');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
    setTimer(0);
    setQuestionsAnswered(new Set());
  };

  const handleAnswer = useCallback((answer) => {
    if (questionsAnswered.has(currentQuestionIndex)) return;

    setSelectedAnswer(answer);
    setShowFeedback(true);
    
    const isCorrect = answer === currentQuestion.answer;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setUserAnswers(prev => [...prev, { 
      questionId: currentQuestion.id, 
      answer, 
      isCorrect,
      question: currentQuestion.question
    }]);

    setQuestionsAnswered(prev => new Set([...prev, currentQuestionIndex]));

    // Passer à la question suivante après 2 secondes
    setTimeout(() => {
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        setQuizState('results');
        setShowFeedback(false);
      }
    }, 2000);
  }, [currentQuestion, currentQuestionIndex, totalQuestions, questionsAnswered]);

  const resetQuiz = () => {
    setSelectedMatiere(null);
    setQuizState('selection');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
    setTimer(0);
    setShowFeedback(false);
    setSelectedAnswer(null);
    setQuestionsAnswered(new Set());
  };

  const getScoreMessage = () => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 80) return { message: "Excellent ! 🎉", color: "#10b981", emoji: "🏆" };
    if (percentage >= 60) return { message: "Bien joué ! 👏", color: "#f59e0b", emoji: "⭐" };
    if (percentage >= 40) return { message: "Pas mal ! 👍", color: "#3b82f6", emoji: "💪" };
    return { message: "Continue tes efforts ! 📚", color: "#ef4444", emoji: "💡" };
  };

  // État: Sélection de matière
  if (quizState === 'selection') {
    return (
      <div style={{ 
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        padding: "40px 20px",
        fontFamily: "'Inter', sans-serif"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ marginBottom: "60px" }}>
            <h1 style={{ 
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)", 
              fontWeight: "800", 
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "16px"
            }}>
              Quiz 10ème Année
            </h1>
            <p style={{ 
              fontSize: "1.2rem", 
              color: "#64748b", 
              maxWidth: "600px", 
              margin: "0 auto",
              lineHeight: "1.6"
            }}>
              Testez vos connaissances dans différentes matières avec nos quiz interactifs
            </p>
          </div>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
            gap: "30px" 
          }}>
            {quiz6.map(subject => {
              const colors = matiereColors[subject.matiere];
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
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
                  }}
                >
                  {/* Gradient top bar */}
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "5px",
                    background: colors.gradient
                  }} />

                  <div style={{ fontSize: "3.5rem", marginBottom: "20px" }}>
                    {colors.icon}
                  </div>

                  <h3 style={{ 
                    fontSize: "1.5rem", 
                    fontWeight: "700", 
                    marginBottom: "12px",
                    color: "#1e293b"
                  }}>
                    {subject.matiere}
                  </h3>

                  <p style={{
                    fontSize: "0.95rem",
                    color: "#64748b",
                    marginBottom: "20px",
                    lineHeight: "1.5"
                  }}>
                    {subject.description}
                  </p>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{
                      background: colors.secondary,
                      color: colors.primary,
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontSize: "0.85rem",
                      fontWeight: "600"
                    }}>
                      {subject.difficulty}
                    </span>
                    <span style={{
                      color: "#94a3b8",
                      fontSize: "0.9rem",
                      fontWeight: "500"
                    }}>
                      {subject.questions.length} questions
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // État: Prêt à commencer
  if (quizState === 'ready') {
    const colors = matiereColors[selectedMatiere];
    return (
      <div style={{ 
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${colors.primary}15 0%, ${colors.primary}05 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px"
      }}>
        <div style={{
          background: "#ffffff",
          borderRadius: "24px",
          padding: "50px",
          maxWidth: "500px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 20px 60px rgba(0,0,0,0.1)"
        }}>
          <div style={{ fontSize: "4rem", marginBottom: "20px" }}>
            {colors.icon}
          </div>

          <h2 style={{ 
            fontSize: "2rem", 
            fontWeight: "700", 
            color: colors.primary, 
            marginBottom: "16px" 
          }}>
            Quiz {selectedMatiere}
          </h2>

          <p style={{ 
            fontSize: "1.1rem", 
            color: "#64748b", 
            marginBottom: "30px",
            lineHeight: "1.6"
          }}>
            Vous allez répondre à <strong>{totalQuestions} questions</strong> sur {selectedMatiere.toLowerCase()}.
            Prenez votre temps et bonne chance ! 🍀
          </p>

          <div style={{
            background: colors.secondary,
            borderRadius: "16px",
            padding: "20px",
            marginBottom: "30px"
          }}>
            <h4 style={{ color: colors.primary, marginBottom: "12px", fontWeight: "600" }}>
              Règles du Quiz
            </h4>
            <ul style={{ 
              textAlign: "left", 
              color: "#64748b", 
              fontSize: "0.95rem",
              lineHeight: "1.6",
              paddingLeft: "20px"
            }}>
              <li>Une seule réponse par question</li>
              <li>Pas de limite de temps</li>
              <li>Feedback immédiat après chaque réponse</li>
              <li>Score final à la fin du quiz</li>
            </ul>
          </div>

          <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            <button
              onClick={startQuiz}
              style={{
                padding: "16px 32px",
                borderRadius: "12px",
                border: "none",
                background: colors.gradient,
                color: "#ffffff",
                fontWeight: "600",
                fontSize: "1.1rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
              }}
              onMouseEnter={(e) => e.target.style.transform = "translateY(-2px)"}
              onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}
            >
              🚀 Commencer le Quiz
            </button>

            <button
              onClick={resetQuiz}
              style={{
                padding: "16px 32px",
                borderRadius: "12px",
                border: `2px solid ${colors.primary}`,
                background: "#ffffff",
                color: colors.primary,
                fontWeight: "600",
                fontSize: "1.1rem",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = colors.primary;
                e.target.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#ffffff";
                e.target.style.color = colors.primary;
              }}
            >
              ← Retour
            </button>
          </div>
        </div>
      </div>
    );
  }

  // État: Quiz actif
  if (quizState === 'active') {
    const colors = matiereColors[selectedMatiere];
    return (
      <div style={{ 
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${colors.primary}10 0%, #f8fafc 100%)`,
        padding: "20px"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* Header du quiz */}
          <div style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "30px",
            marginBottom: "30px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: colors.primary }}>
                {colors.icon} {selectedMatiere}
              </h2>
              <div style={{ 
                background: colors.secondary,
                color: colors.primary,
                padding: "8px 16px",
                borderRadius: "20px",
                fontWeight: "600",
                fontSize: "0.9rem"
              }}>
                ⏱️ {formatTime(timer)}
              </div>
            </div>

            {/* Barre de progression */}
            <div style={{ marginBottom: "16px" }}>
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                marginBottom: "8px",
                fontSize: "0.9rem",
                fontWeight: "500",
                color: "#64748b"
              }}>
                <span>Question {currentQuestionIndex + 1} sur {totalQuestions}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div style={{
                width: "100%",
                height: "8px",
                background: "#e2e8f0",
                borderRadius: "4px",
                overflow: "hidden"
              }}>
                <div style={{
                  width: `${progress}%`,
                  height: "100%",
                  background: colors.gradient,
                  transition: "width 0.5s ease",
                  borderRadius: "4px"
                }} />
              </div>
            </div>
          </div>

          {/* Question */}
          <div style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "40px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            marginBottom: "30px"
          }}>
            <h3 style={{ 
              fontSize: "1.4rem", 
              fontWeight: "600", 
              marginBottom: "30px",
              color: "#1e293b",
              lineHeight: "1.5"
            }}>
              {currentQuestion.question}
            </h3>

            <div style={{ display: "grid", gap: "15px" }}>
              {currentQuestion.options.map((option, index) => {
                let buttonStyle = {
                  padding: "20px",
                  borderRadius: "16px",
                  border: "2px solid #e2e8f0",
                  background: "#ffffff",
                  cursor: questionsAnswered.has(currentQuestionIndex) ? "default" : "pointer",
                  transition: "all 0.3s ease",
                  fontSize: "1.1rem",
                  fontWeight: "500",
                  textAlign: "left",
                  width: "100%",
                  color: "#374151"
                };

                if (showFeedback) {
                  if (option === currentQuestion.answer) {
                    buttonStyle = {
                      ...buttonStyle,
                      background: "#dcfce7",
                      borderColor: "#10b981",
                      color: "#065f46"
                    };
                  } else if (option === selectedAnswer && option !== currentQuestion.answer) {
                    buttonStyle = {
                      ...buttonStyle,
                      background: "#fef2f2",
                      borderColor: "#ef4444",
                      color: "#991b1b"
                    };
                  }
                } else if (!questionsAnswered.has(currentQuestionIndex)) {
                  buttonStyle.onMouseEnter = (e) => {
                    e.target.style.borderColor = colors.primary;
                    e.target.style.background = colors.secondary;
                    e.target.style.transform = "translateY(-2px)";
                  };
                  buttonStyle.onMouseLeave = (e) => {
                    e.target.style.borderColor = "#e2e8f0";
                    e.target.style.background = "#ffffff";
                    e.target.style.transform = "translateY(0)";
                  };
                }

                return (
                  <button
                    key={option}
                    onClick={() => !questionsAnswered.has(currentQuestionIndex) && handleAnswer(option)}
                    style={buttonStyle}
                  >
                    <span style={{ marginRight: "12px", fontWeight: "600", color: colors.primary }}>
                      {String.fromCharCode(65 + index)}.
                    </span>
                    {option}
                    {showFeedback && option === currentQuestion.answer && (
                      <span style={{ float: "right", fontSize: "1.2rem" }}>✅</span>
                    )}
                    {showFeedback && option === selectedAnswer && option !== currentQuestion.answer && (
                      <span style={{ float: "right", fontSize: "1.2rem" }}>❌</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div style={{
                marginTop: "30px",
                padding: "20px",
                borderRadius: "16px",
                background: selectedAnswer === currentQuestion.answer ? "#f0fdf4" : "#fef2f2",
                border: `1px solid ${selectedAnswer === currentQuestion.answer ? "#10b981" : "#ef4444"}`,
                animation: "fadeIn 0.5s ease"
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "12px"
                }}>
                  <span style={{ fontSize: "1.5rem", marginRight: "12px" }}>
                    {selectedAnswer === currentQuestion.answer ? "🎉" : "💡"}
                  </span>
                  <h4 style={{
                    fontWeight: "600",
                    color: selectedAnswer === currentQuestion.answer ? "#065f46" : "#991b1b"
                  }}>
                    {selectedAnswer === currentQuestion.answer ? "Correct !" : "Incorrect"}
                  </h4>
                </div>
                <p style={{
                  color: selectedAnswer === currentQuestion.answer ? "#065f46" : "#991b1b",
                  lineHeight: "1.5"
                }}>
                  {currentQuestion.explanation}
                </p>
              </div>
            )}
          </div>

          {/* Score actuel */}
          <div style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <div>
              <span style={{ fontSize: "1.1rem", color: "#64748b" }}>Score actuel : </span>
              <span style={{ fontSize: "1.3rem", fontWeight: "700", color: colors.primary }}>
                {score} / {totalQuestions}
              </span>
            </div>
            <button
              onClick={resetQuiz}
              style={{
                padding: "10px 20px",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
                background: "#ffffff",
                color: "#64748b",
                cursor: "pointer",
                fontSize: "0.9rem"
              }}
            >
              Abandonner
            </button>
          </div>
        </div>
      </div>
    );
  }

  // État: Résultats
  if (quizState === 'results') {
    const colors = matiereColors[selectedMatiere];
    const { message, color, emoji } = getScoreMessage();
    const percentage = Math.round((score / totalQuestions) * 100);

    return (
      <div style={{ 
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${color}15 0%, #f8fafc 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px"
      }}>
        <div style={{
          background: "#ffffff",
          borderRadius: "24px",
          padding: "50px",
          maxWidth: "600px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)"
        }}>
          {/* Célébration */}
          <div style={{ fontSize: "5rem", marginBottom: "20px", animation: "bounce 1s ease-in-out" }}>
            {emoji}
          </div>

          <h2 style={{ 
            fontSize: "2.5rem", 
            fontWeight: "800", 
            color: color, 
            marginBottom: "16px" 
          }}>
            {message}
          </h2>

          <p style={{ fontSize: "1.2rem", color: "#64748b", marginBottom: "40px" }}>
            Quiz terminé en {formatTime(timer)}
          </p>

          {/* Score principal */}
          <div style={{
            background: `${color}10`,
            borderRadius: "20px",
            padding: "30px",
            marginBottom: "30px"
          }}>
            <div style={{ fontSize: "3rem", fontWeight: "800", color: color, marginBottom: "10px" }}>
              {score} / {totalQuestions}
            </div>
            <div style={{ fontSize: "1.5rem", color: color, fontWeight: "600" }}>
              {percentage}% de réussite
            </div>
          </div>

          {/* Détail des réponses */}
          <div style={{
            background: "#f8fafc",
            borderRadius: "16px",
            padding: "20px",
            marginBottom: "30px",
            maxHeight: "200px",
            overflowY: "auto"
          }}>
            <h4 style={{ marginBottom: "16px", color: "#374151", fontWeight: "600" }}>
              Détail de vos réponses
            </h4>
            {userAnswers.map((answer, index) => (
              <div key={index} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 0",
                borderBottom: index < userAnswers.length - 1 ? "1px solid #e2e8f0" : "none"
              }}>
                <span style={{ fontSize: "0.9rem", color: "#64748b", flex: 1, textAlign: "left" }}>
                  Question {index + 1}
                </span>
                <span style={{ fontSize: "1.2rem" }}>
                  {answer.isCorrect ? "✅" : "❌"}
                </span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={startQuiz}
              style={{
                padding: "16px 32px",
                borderRadius: "12px",
                border: "none",
                background: colors.gradient,
                color: "#ffffff",
                fontWeight: "600",
                fontSize: "1.1rem",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            >
              🔄 Refaire le Quiz
            </button>
            <button
              onClick={resetQuiz}
              style={{
                padding: "16px 32px",
                borderRadius: "12px",
                border: `2px solid ${colors.primary}`,
                background: "#ffffff",
                color: colors.primary,
                fontWeight: "600",
                fontSize: "1.1rem",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            >
              📚 Choisir une autre matière
            </button>
          </div>
        </div>
      </div>
    );
  }
}