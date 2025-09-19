import React, { useState, useEffect, useCallback } from "react";

// Configuration des couleurs pour chaque matière
const matiereColors = {
  "Mathématiques": { 
    primary: "#3b82f6", 
    secondary: "#dbeafe", 
    gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    icon: "🔢"
  },
  "Chimie": { 
    primary: "#06b6d4", 
    secondary: "#cffafe", 
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
    icon: "🧪"
  },
  "Français": { 
    primary: "#ef4444", 
    secondary: "#fee2e2", 
    gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    icon: "📚"
  },
  "Philosophie": { 
    primary: "#8b5cf6", 
    secondary: "#f3e8ff", 
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
    icon: "🤔"
  },
  "Histoire": { 
    primary: "#f59e0b", 
    secondary: "#fef3c7", 
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    icon: "🏛️"
  },
  "Anglais": { 
    primary: "#10b981", 
    secondary: "#d1fae5", 
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    icon: "🇬🇧"
  }
};

// Données Quiz TSM - Toutes les matières
const quizTSM = [
  { 
    matiere: "Mathématiques", 
    difficulty: "Avancé",
    description: "Testez vos connaissances en analyse et algèbre",
    questions: [
      { 
        id: 1, 
        question: "Quelle est la limite de (x²-1)/(x-1) quand x tend vers 1 ?", 
        options: ["0","1","2","∞"], 
        answer: "2",
        explanation: "En factorisant: (x-1)(x+1)/(x-1) = x+1, donc lim = 2"
      },
      { 
        id: 2, 
        question: "La dérivée de ln(x²) est :", 
        options: ["1/x²","2/x","2x","1/x"], 
        answer: "2/x",
        explanation: "Dérivée de ln(u) = u'/u, donc dérivée de ln(x²) = 2x/x² = 2/x"
      },
      { 
        id: 3, 
        question: "L'intégrale de 1/x dx est :", 
        options: ["ln|x| + C","x²/2 + C","1/x² + C","-1/x + C"], 
        answer: "ln|x| + C",
        explanation: "L'intégrale de 1/x est ln|x| + C (fonction logarithme naturel)"
      },
      { 
        id: 4, 
        question: "Une fonction est continue en a si :", 
        options: ["f(a) existe","lim f(x) = f(a)","f'(a) existe","f est dérivable en a"], 
        answer: "lim f(x) = f(a)",
        explanation: "La continuité en a nécessite que la limite en a égale la valeur de la fonction en a"
      },
      { 
        id: 5, 
        question: "Le discriminant de ax² + bx + c est :", 
        options: ["b² - 4ac","b² + 4ac","4ac - b²","a² - 4bc"], 
        answer: "b² - 4ac",
        explanation: "Le discriminant Δ = b² - 4ac détermine la nature des racines"
      }
    ]
  },
  { 
    matiere: "Chimie", 
    difficulty: "Avancé",
    description: "Chimie organique et réactions",
    questions: [
      { 
        id: 1, 
        question: "La formule générale des alcanes est :", 
        options: ["CnH2n","CnH2n+2","CnH2n-2","CnHn"], 
        answer: "CnH2n+2",
        explanation: "Les alcanes sont des hydrocarbures saturés de formule CnH2n+2"
      },
      { 
        id: 2, 
        question: "Le pH d'une solution acide est :", 
        options: ["< 7","= 7","> 7","≥ 14"], 
        answer: "< 7",
        explanation: "Une solution acide a un pH inférieur à 7"
      },
      { 
        id: 3, 
        question: "La réaction de combustion du méthane produit :", 
        options: ["CO + H2O","CO2 + H2O","C + H2O","CH4 + O2"], 
        answer: "CO2 + H2O",
        explanation: "CH4 + 2O2 → CO2 + 2H2O (combustion complète)"
      },
      { 
        id: 4, 
        question: "Un alcool primaire a le groupe -OH sur un carbone lié à :", 
        options: ["0 carbone","1 carbone","2 carbones","3 carbones"], 
        answer: "1 carbone",
        explanation: "Dans un alcool primaire, le carbone portant -OH est lié à un seul autre carbone"
      }
    ]
  },
  { 
    matiere: "Français", 
    difficulty: "Moyen",
    description: "Analyse littéraire et figures de style",
    questions: [
      { 
        id: 1, 
        question: "Une métaphore est :", 
        options: ["Une comparaison avec 'comme'","Une figure sans outil de comparaison","Une répétition","Une opposition"], 
        answer: "Une figure sans outil de comparaison",
        explanation: "La métaphore est une comparaison implicite sans outil de comparaison"
      },
      { 
        id: 2, 
        question: "L'alexandrin est un vers de :", 
        options: ["10 syllabes","12 syllabes","14 syllabes","8 syllabes"], 
        answer: "12 syllabes",
        explanation: "L'alexandrin est le vers français classique de 12 syllabes"
      },
      { 
        id: 3, 
        question: "Une ellipse est :", 
        options: ["Une répétition","Une omission","Une exagération","Une opposition"], 
        answer: "Une omission",
        explanation: "L'ellipse consiste à omettre des mots pour créer un effet de style"
      },
      { 
        id: 4, 
        question: "Le registre épique se caractérise par :", 
        options: ["L'émotion","L'héroïsme","La tristesse","L'ironie"], 
        answer: "L'héroïsme",
        explanation: "Le registre épique met en scène des héros et des actions extraordinaires"
      }
    ]
  },
  { 
    matiere: "Philosophie", 
    difficulty: "Avancé",
    description: "Concepts philosophiques fondamentaux",
    questions: [
      { 
        id: 1, 
        question: "Pour Descartes, la première vérité indubitable est :", 
        options: ["Dieu existe","Je pense donc je suis","Le monde existe","La raison est fiable"], 
        answer: "Je pense donc je suis",
        explanation: "Le cogito cartésien : 'Je pense donc je suis' est la première certitude"
      },
      { 
        id: 2, 
        question: "L'allégorie de la caverne est de :", 
        options: ["Aristote","Platon","Socrate","Kant"], 
        answer: "Platon",
        explanation: "L'allégorie de la caverne illustre la théorie platonicienne de la connaissance"
      },
      { 
        id: 3, 
        question: "L'impératif catégorique de Kant signifie :", 
        options: ["Agir par intérêt","Agir par devoir","Agir par plaisir","Agir par habitude"], 
        answer: "Agir par devoir",
        explanation: "L'impératif catégorique commande d'agir par devoir moral universel"
      },
      { 
        id: 4, 
        question: "L'existentialisme affirme que :", 
        options: ["L'essence précède l'existence","L'existence précède l'essence","Essence et existence sont identiques","Ni essence ni existence n'existent"], 
        answer: "L'existence précède l'essence",
        explanation: "Pour Sartre, l'homme existe d'abord, puis se définit par ses actes"
      }
    ]
  },
  { 
    matiere: "Histoire", 
    difficulty: "Moyen",
    description: "Histoire contemporaine et événements majeurs",
    questions: [
      { 
        id: 1, 
        question: "La Première Guerre mondiale a eu lieu de :", 
        options: ["1912-1918","1914-1918","1916-1920","1913-1919"], 
        answer: "1914-1918",
        explanation: "La Première Guerre mondiale s'est déroulée de 1914 à 1918"
      },
      { 
        id: 2, 
        question: "La révolution russe a eu lieu en :", 
        options: ["1905","1917","1920","1922"], 
        answer: "1917",
        explanation: "La révolution d'Octobre 1917 a mené les bolcheviks au pouvoir"
      },
      { 
        id: 3, 
        question: "La décolonisation de l'Afrique s'est principalement déroulée :", 
        options: ["1940-1950","1950-1960","1960-1970","1970-1980"], 
        answer: "1960-1970",
        explanation: "Les années 1960 marquent l'indépendance de la plupart des pays africains"
      },
      { 
        id: 4, 
        question: "Le mur de Berlin est tombé en :", 
        options: ["1987","1989","1991","1993"], 
        answer: "1989",
        explanation: "Le mur de Berlin est tombé le 9 novembre 1989"
      }
    ]
  },
  { 
    matiere: "Anglais", 
    difficulty: "Avancé",
    description: "Grammaire avancée et vocabulaire",
    questions: [
      { 
        id: 1, 
        question: "Which sentence uses the subjunctive mood correctly?", 
        options: ["If I was rich...","If I were rich...","If I am rich...","If I will be rich..."], 
        answer: "If I were rich...",
        explanation: "The subjunctive mood uses 'were' for all persons in hypothetical situations"
      },
      { 
        id: 2, 
        question: "The past perfect tense is formed with :", 
        options: ["had + past participle","have + past participle","was + -ing","did + infinitive"], 
        answer: "had + past participle",
        explanation: "Past perfect: had + past participle (e.g., 'had finished')"
      },
      { 
        id: 3, 
        question: "'Neither...nor' requires :", 
        options: ["Plural verb","Singular verb","No verb","Any verb"], 
        answer: "Singular verb",
        explanation: "Neither...nor takes a singular verb when both subjects are singular"
      },
      { 
        id: 4, 
        question: "A gerund functions as :", 
        options: ["A verb","A noun","An adjective","An adverb"], 
        answer: "A noun",
        explanation: "A gerund (-ing form) functions as a noun in sentences"
      }
    ]
  }
];

export default function QuizTSM() {
  const [selectedMatiere, setSelectedMatiere] = useState(null);
  const [quizState, setQuizState] = useState('selection');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [questionsAnswered, setQuestionsAnswered] = useState(new Set());
  const [completedMatieres, setCompletedMatieres] = useState(new Set());
  const [globalScore, setGlobalScore] = useState(0);
  const [totalGlobalQuestions, setTotalGlobalQuestions] = useState(0);

  const currentMatiere = quizTSM.find(q => q.matiere === selectedMatiere);
  const questions = currentMatiere?.questions || [];
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  
  // Obtenir la prochaine matière disponible
  const getNextMatiere = () => {
    const availableMatieres = quizTSM.filter(q => !completedMatieres.has(q.matiere));
    return availableMatieres.length > 0 ? availableMatieres[0].matiere : null;
  };
  
  const allMatieresCompleted = completedMatieres.size === quizTSM.length;

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
      setGlobalScore(prev => prev + 1);
    }
    setTotalGlobalQuestions(prev => prev + 1);

    setUserAnswers(prev => [...prev, { answer, isCorrect }]);
    setQuestionsAnswered(prev => new Set([...prev, currentQuestionIndex]));

    setTimeout(() => {
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        // Marquer cette matière comme terminée
        setCompletedMatieres(prev => new Set([...prev, selectedMatiere]));
        setQuizState('results');
      }
    }, 2000);
  }, [currentQuestion, currentQuestionIndex, totalQuestions, questionsAnswered, selectedMatiere]);

  const nextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setQuizState('results');
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  const continueToNextMatiere = () => {
    const nextMatiere = getNextMatiere();
    if (nextMatiere) {
      setSelectedMatiere(nextMatiere);
      setQuizState('ready');
      setCurrentQuestionIndex(0);
      setUserAnswers([]);
      setScore(0);
      setQuestionsAnswered(new Set());
      // Ne pas remettre le timer à zéro pour garder le temps global
    }
  };

  const resetQuiz = () => {
    setSelectedMatiere(null);
    setQuizState('selection');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
    setTimer(0);
    setQuestionsAnswered(new Set());
    setCompletedMatieres(new Set());
    setGlobalScore(0);
    setTotalGlobalQuestions(0);
  };

  // État: Sélection
  if (quizState === 'selection') {
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)", padding: "40px 20px", fontFamily: "'Inter', sans-serif" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "800", background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "60px" }}>
            Quiz Terminale TSM
          </h1>

          {/* Statistiques globales si des matières ont été complétées */}
          {completedMatieres.size > 0 && (
            <div style={{ background: "#ffffff", borderRadius: "20px", padding: "30px", marginBottom: "40px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#1e293b", marginBottom: "20px", textAlign: "center" }}>
                📊 Progression Globale
              </h2>
              <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "2rem", fontWeight: "800", color: "#3b82f6" }}>
                    {completedMatieres.size}/{quizTSM.length}
                  </div>
                  <div style={{ fontSize: "0.9rem", color: "#64748b" }}>Matières terminées</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "2rem", fontWeight: "800", color: "#10b981" }}>
                    {Math.round((globalScore / totalGlobalQuestions) * 100) || 0}%
                  </div>
                  <div style={{ fontSize: "0.9rem", color: "#64748b" }}>Score global</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "2rem", fontWeight: "800", color: "#f59e0b" }}>
                    {formatTime(timer)}
                  </div>
                  <div style={{ fontSize: "0.9rem", color: "#64748b" }}>Temps total</div>
                </div>
              </div>
            </div>
          )}

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            {quizTSM.map(subject => {
              const colors = matiereColors[subject.matiere];
              const isCompleted = completedMatieres.has(subject.matiere);
              return (
                <div 
                  key={subject.matiere} 
                  onClick={() => handleMatiereSelect(subject.matiere)} 
                  style={{ 
                    cursor: "pointer", 
                    padding: "40px 30px", 
                    borderRadius: "24px", 
                    background: isCompleted ? colors.secondary : "#ffffff", 
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)", 
                    transition: "all 0.4s ease",
                    border: isCompleted ? `2px solid ${colors.primary}` : "2px solid transparent",
                    opacity: isCompleted ? 0.8 : 1,
                    position: "relative"
                  }}
                >
                  {isCompleted && (
                    <div style={{ 
                      position: "absolute", 
                      top: "15px", 
                      right: "15px", 
                      background: colors.primary, 
                      color: "#ffffff", 
                      borderRadius: "50%", 
                      width: "30px", 
                      height: "30px", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      fontSize: "1rem",
                      fontWeight: "700"
                    }}>
                      ✓
                    </div>
                  )}
                  <div style={{ fontSize: "3.5rem", marginBottom: "20px" }}>{colors.icon}</div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "12px", color: "#1e293b" }}>
                    {subject.matiere} {isCompleted && "✅"}
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "#64748b", marginBottom: "20px" }}>{subject.description}</p>
                  <span style={{ background: colors.secondary, color: colors.primary, padding: "6px 12px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: "600" }}>
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

  // État: Prêt
  if (quizState === 'ready') {
    const colors = matiereColors[selectedMatiere];
    return (
      <div style={{ minHeight: "100vh", background: `linear-gradient(135deg, ${colors.primary}15 0%, ${colors.primary}05 100%)`, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
        <div style={{ background: "#ffffff", borderRadius: "24px", padding: "50px", maxWidth: "500px", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}>
          <div style={{ fontSize: "4rem", marginBottom: "20px" }}>{colors.icon}</div>
          <h2 style={{ fontSize: "2rem", fontWeight: "700", color: colors.primary, marginBottom: "30px" }}>Quiz {selectedMatiere}</h2>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            <button onClick={startQuiz} style={{ padding: "16px 32px", borderRadius: "12px", border: "none", background: colors.gradient, color: "#ffffff", fontWeight: "600", cursor: "pointer" }}>🚀 Commencer</button>
            <button onClick={resetQuiz} style={{ padding: "16px 32px", borderRadius: "12px", border: `2px solid ${colors.primary}`, background: "#ffffff", color: colors.primary, fontWeight: "600", cursor: "pointer" }}>← Retour</button>
          </div>
        </div>
      </div>
    );
  }

  // État: Actif
  if (quizState === 'active') {
    const colors = matiereColors[selectedMatiere];
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)", padding: "20px", fontFamily: "'Inter', sans-serif" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* Header avec progression */}
          <div style={{ background: "#ffffff", borderRadius: "20px", padding: "30px", marginBottom: "30px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: colors.primary, margin: 0 }}>
                {colors.icon} {selectedMatiere}
              </h2>
              <div style={{ background: colors.secondary, color: colors.primary, padding: "8px 16px", borderRadius: "20px", fontWeight: "600", fontSize: "0.9rem" }}>
                ⏱️ {formatTime(timer)}
              </div>
            </div>
            
            {/* Barre de progression */}
            <div style={{ background: "#f1f5f9", borderRadius: "10px", height: "8px", overflow: "hidden" }}>
              <div style={{ 
                background: colors.gradient, 
                height: "100%", 
                width: `${progress}%`, 
                transition: "width 0.3s ease",
                borderRadius: "10px"
              }}></div>
            </div>
            <div style={{ textAlign: "center", marginTop: "10px", fontSize: "0.9rem", color: "#64748b", fontWeight: "600" }}>
              Question {currentQuestionIndex + 1} sur {totalQuestions}
            </div>
          </div>

          {/* Question */}
          <div style={{ background: "#ffffff", borderRadius: "20px", padding: "40px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", marginBottom: "20px" }}>
            <h3 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "30px", color: "#1e293b", lineHeight: "1.6" }}>
              {currentQuestion.question}
            </h3>
            
            <div style={{ display: "grid", gap: "15px" }}>
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === option;
                const isCorrect = option === currentQuestion.answer;
                const showCorrect = showFeedback && isCorrect;
                const showIncorrect = showFeedback && isSelected && !isCorrect;
                
                return (
                  <button 
                    key={option} 
                    onClick={() => handleAnswer(option)}
                    disabled={questionsAnswered.has(currentQuestionIndex)}
                    style={{ 
                      padding: "20px", 
                      borderRadius: "16px", 
                      border: showCorrect ? "2px solid #10b981" : showIncorrect ? "2px solid #ef4444" : isSelected ? `2px solid ${colors.primary}` : "2px solid #e2e8f0",
                      background: showCorrect ? "#dcfce7" : showIncorrect ? "#fef2f2" : isSelected ? colors.secondary : "#ffffff",
                      cursor: questionsAnswered.has(currentQuestionIndex) ? "default" : "pointer",
                      fontSize: "1.1rem", 
                      textAlign: "left",
                      transition: "all 0.3s ease",
                      transform: isSelected && !showFeedback ? "translateY(-2px)" : "translateY(0)",
                      boxShadow: isSelected && !showFeedback ? "0 4px 12px rgba(0,0,0,0.1)" : "none"
                    }}
                  >
                    <span style={{ 
                      marginRight: "12px", 
                      fontWeight: "700", 
                      color: showCorrect ? "#10b981" : showIncorrect ? "#ef4444" : colors.primary,
                      fontSize: "1rem"
                    }}>
                      {String.fromCharCode(65 + index)}.
                    </span>
                    {option}
                    {showCorrect && <span style={{ float: "right", fontSize: "1.2rem" }}>✅</span>}
                    {showIncorrect && <span style={{ float: "right", fontSize: "1.2rem" }}>❌</span>}
                  </button>
                );
              })}
            </div>

            {/* Navigation */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "30px" }}>
              <button 
                onClick={prevQuestion}
                disabled={currentQuestionIndex === 0}
                style={{
                  padding: "12px 20px",
                  borderRadius: "12px",
                  border: `2px solid ${colors.primary}`,
                  background: "#ffffff",
                  color: colors.primary,
                  fontWeight: "600",
                  cursor: currentQuestionIndex === 0 ? "not-allowed" : "pointer",
                  opacity: currentQuestionIndex === 0 ? 0.5 : 1,
                  transition: "all 0.3s ease"
                }}
              >
                ← Précédent
              </button>
              
              <button 
                onClick={nextQuestion}
                style={{
                  padding: "12px 20px",
                  borderRadius: "12px",
                  border: "none",
                  background: colors.gradient,
                  color: "#ffffff",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              >
                {currentQuestionIndex === totalQuestions - 1 ? "Terminer" : "Suivant"} →
              </button>
            </div>

            {/* Explication */}
            {showFeedback && (
              <div style={{ 
                marginTop: "30px", 
                padding: "20px", 
                borderRadius: "16px", 
                background: selectedAnswer === currentQuestion.answer ? "#f0fdf4" : "#fef2f2", 
                border: `2px solid ${selectedAnswer === currentQuestion.answer ? "#10b981" : "#ef4444"}`,
                animation: "fadeIn 0.5s ease"
              }}>
                <div style={{ 
                  fontWeight: "700", 
                  marginBottom: "8px", 
                  color: selectedAnswer === currentQuestion.answer ? "#065f46" : "#991b1b",
                  fontSize: "1.1rem"
                }}>
                  {selectedAnswer === currentQuestion.answer ? "✅ Excellente réponse !" : "❌ Réponse incorrecte"}
                </div>
                <p style={{ 
                  color: "#374151", 
                  margin: 0, 
                  lineHeight: "1.6",
                  fontSize: "1rem"
                }}>
                  {currentQuestion.explanation}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // État: Résultats
  if (quizState === 'results') {
    const colors = matiereColors[selectedMatiere];
    const percentage = Math.round((score / totalQuestions) * 100);
    
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", fontFamily: "'Inter', sans-serif" }}>
        <div style={{ background: "#ffffff", borderRadius: "24px", padding: "50px", maxWidth: "600px", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
          <div style={{ fontSize: "5rem", marginBottom: "20px" }}>
            {percentage >= 80 ? "🎉" : percentage >= 60 ? "👏" : "📚"}
          </div>
          
          <h2 style={{ 
            fontSize: "2.5rem", 
            fontWeight: "800", 
            background: colors.gradient,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "20px" 
          }}>
            Quiz terminé !
          </h2>
          
          <div style={{ 
            fontSize: "3rem", 
            fontWeight: "800", 
            color: colors.primary, 
            marginBottom: "15px" 
          }}>
            {score} / {totalQuestions}
          </div>
          
          <div style={{ 
            fontSize: "1.2rem", 
            color: "#64748b", 
            marginBottom: "10px",
            fontWeight: "600"
          }}>
            {percentage}% de réussite
          </div>
          
          <div style={{ 
            fontSize: "1rem", 
            color: "#64748b", 
            marginBottom: "40px"
          }}>
            Temps total : {formatTime(timer)}
          </div>

          {/* Message personnalisé selon le score */}
          <div style={{
            padding: "20px",
            borderRadius: "16px",
            background: percentage >= 80 ? "#f0fdf4" : percentage >= 60 ? "#fef3c7" : "#fef2f2",
            border: `2px solid ${percentage >= 80 ? "#10b981" : percentage >= 60 ? "#f59e0b" : "#ef4444"}`,
            marginBottom: "30px"
          }}>
            <p style={{ 
              margin: 0, 
              fontSize: "1.1rem", 
              fontWeight: "600",
              color: percentage >= 80 ? "#065f46" : percentage >= 60 ? "#92400e" : "#991b1b"
            }}>
              {percentage >= 80 ? "🌟 Excellent travail ! Vous maîtrisez parfaitement cette matière." : 
               percentage >= 60 ? "👍 Bon travail ! Quelques révisions vous permettront d'atteindre l'excellence." : 
               "📖 Continuez vos efforts ! La révision est la clé du succès."}
            </p>
          </div>
          
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            {!allMatieresCompleted && getNextMatiere() && (
              <button 
                onClick={continueToNextMatiere} 
                style={{ 
                  padding: "16px 32px", 
                  borderRadius: "12px", 
                  border: "none", 
                  background: "linear-gradient(135deg, #10b981 0%, #059669 100%)", 
                  color: "#ffffff", 
                  fontWeight: "600", 
                  cursor: "pointer",
                  fontSize: "1rem",
                  transition: "transform 0.2s ease",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                }}
                onMouseOver={(e) => e.target.style.transform = "translateY(-2px)"}
                onMouseOut={(e) => e.target.style.transform = "translateY(0)"}
              >
                ➡️ Matière suivante
              </button>
            )}
            
            <button 
              onClick={startQuiz} 
              style={{ 
                padding: "16px 32px", 
                borderRadius: "12px", 
                border: "none", 
                background: colors.gradient, 
                color: "#ffffff", 
                fontWeight: "600", 
                cursor: "pointer",
                fontSize: "1rem",
                transition: "transform 0.2s ease",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
              }}
              onMouseOver={(e) => e.target.style.transform = "translateY(-2px)"}
              onMouseOut={(e) => e.target.style.transform = "translateY(0)"}
            >
              🔄 Refaire le quiz
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
                cursor: "pointer",
                fontSize: "1rem",
                transition: "all 0.2s ease"
              }}
              onMouseOver={(e) => {
                e.target.style.background = colors.secondary;
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "#ffffff";
                e.target.style.transform = "translateY(0)";
              }}
            >
              📚 Changer de matière
            </button>
            
            {allMatieresCompleted && (
              <div style={{ 
                padding: "20px", 
                borderRadius: "12px", 
                background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)", 
                color: "#ffffff", 
                textAlign: "center",
                fontSize: "1.1rem",
                fontWeight: "600"
              }}>
                🎉 Félicitations ! Vous avez terminé toutes les matières !
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

