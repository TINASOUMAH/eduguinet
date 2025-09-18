import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { AuthProvider } from "./context/AuthContext";

// Components
import Navbar from "./composants/Navbar";
import Footer from "./composants/footer";
import ProtectedRoute from "./composants/ProtectedRoute";

// Main Pages
import Accueil from "./pages/Accueil";
import Apropros from "./pages/Apropros";
import Contact from "./pages/contact";
import Niveaux from "./pages/Niveaux";
import Matiere from "./pages/matiere";
import Connexion from "./pages/connexion";
import Admin from "./pages/admin";
import AdminDashboard from "./pages/admin";

// Terminale Pages
import Terminalpage from "./pages/terminalpage";
import TerminaleTSM from "./pages/Tsmpage";
import TerminaleTSE from "./pages/Tsepage";
import TerminaleTSS from "./pages/Tsspage";
import Terminales from "./SousPages/terminal/Terminales";
import TerminalPdf from "./pages/TerminalPdf";
import TerminalFormules from "./pages/TerminalFormules";
import TerminalExercices from "./pages/TerminalExercices";
import TerminalAnciens from "./pages/TerminalAnciens";
import TerminalQuiz from "./pages/TerminalQuiz";
import TerminalVideo from "./pages/TerminalVideo";

// Terminale TSM Components
import PdfTSM from "./SousPages/terminal/tsm/pdftsm";
import VideoTSM from "./SousPages/terminal/tsm/video";
import AnciensujetTSM from "./SousPages/terminal/tsm/ancienstsm";
import FormuleTSM from "./SousPages/terminal/tsm/formulestsm";
import QuizTSM from "./SousPages/terminal/tsm/quiztsm";
import ExerciceTSM from "./SousPages/terminal/tsm/exotsm";
import MathTSM from "./SousPages/terminal/tsm/mathtsm";
import ChimieTSM from "./SousPages/terminal/tsm/chimietsm";

// Terminale TSE Components
import MathTSE from "./SousPages/terminal/tes/MathTSE";
import PhysiqueTSE from "./SousPages/terminal/tes/PhysiqueTSE";
import BiologieTSE from "./SousPages/terminal/tes/BiologieTSE";

// Terminale TSS Components
import EconomiqueTSS from "./SousPages/terminal/tss/EconomiqueTSS";
import SociologieTSS from "./SousPages/terminal/tss/SociologieTSS";
import PsychologieTSS from "./SousPages/terminal/tss/PsychologieTSS";

// Matières communes Terminale
import FrancaisTer from "./SousPages/terminal/FrancaisTer";
import PhilosophieTer from "./SousPages/terminal/PhilosophieTer";
import HistoireTer from "./SousPages/terminal/HistoireTer";
import AnglaisTer from "./SousPages/terminal/AnglaisTer";

// Pages SIX
import SixPage from "./pages/SixPage";
import CoursSix from "./SousPages/SIX/CoursSix";
import PdfSix from "./SousPages/SIX/PdfSix";
import Video from "./SousPages/SIX/Video";
import Quiz from "./SousPages/SIX/Quiz";
import Anciensujet from "./SousPages/SIX/anciensujet";
import Formule from "./SousPages/SIX/formule";
import Exercice from "./SousPages/SIX/exercice";

// Matières SIX
import Calcul from "./SousPages/SIX/Calcul";
import Histoire from "./SousPages/SIX/Histoire";
import Geographie from "./SousPages/SIX/Geographie";
import ECM from "./SousPages/SIX/ECM";
import Science from "./SousPages/SIX/Science";
import Francais from "./SousPages/SIX/francais";

// Pages 10ème
import DixiemePage from "./pages/dixiemepage";
import Coursdixieme from "./SousPages/10eme/coursdixieme";
import Francaisdix from "./SousPages/10eme/Francais";
import Mathematiquedix from "./SousPages/10eme/Mathematique";
import Histoiredix from "./SousPages/10eme/Histoire";
import Geographiedix from "./SousPages/10eme/Géographie";
import ECMdix from "./SousPages/10eme/ECM";
import Biologiedix from "./SousPages/10eme/Biologie";
import Physiquedix from "./SousPages/10eme/Physique";
import Chimiedix from "./SousPages/10eme/Chimie";
import Pdfdix from "./SousPages/10eme/pdfdix";
import Exercicedix from "./SousPages/10eme/exercice";
import Quizdix from "./SousPages/10eme/quiz";
import Anciensujetdix from "./SousPages/10eme/anciensujet";
import Formuledix from "./SousPages/10eme/formule";
import Videodix from "./SousPages/10eme/video";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  return (
     <AuthProvider>
    <Router>
      <div className="App">
        <Navbar onShowLogin={handleShowLogin} />

        {showLogin && (
          <Connexion
            onClose={handleCloseLogin}
            onLoginSuccess={handleLoginSuccess}
          />
        )}

        <main className="p-6">
          <Routes>
            {/* Pages publiques */}
            <Route path="/" element={<Accueil />} />
            <Route path="/home" element={<Accueil />} />
            <Route path="/apropos" element={<Apropros />} />
            
            <Route path="/contact" element={<Contact />} />

            {/* Pages SIX */}
            <Route path="/sixieme" element={<SixPage />}>

              <Route path="cours" element={<CoursSix />}>
                <Route path="calcul" element={<Calcul/>} />
                <Route path="histoire" element={<Histoire/>} />
                <Route path="geographie" element={<Geographie/>} />
                <Route path="ecm" element={<ECM />} />
                <Route path="science-observation" element={<Science />} />
                <Route path="francais" element={<Francais/>} />
              </Route>

              <Route index element={<Navigate to="/sixieme/cours" replace />} />
              <Route path="pdf" element={<PdfSix />} />
              <Route path="video" element={<Video />} />
              <Route path="anciens" element={<Anciensujet />} />
              <Route path="formules" element={<Formule />} />
              <Route path="quiz" element={<Quiz />} />

              <Route path="exercice" element={<Exercice/>} />



              
            </Route>

            {/* Pages 10ème */}
            <Route path="/dixiemepage" element={<DixiemePage />}>
              <Route path="cours" element={<Coursdixieme />}>
                <Route path="Mathematique" element={<Mathematiquedix />} />
                <Route path="geographie" element={<Geographiedix />} />
                <Route path="francais" element={<Francaisdix />} />
                <Route path="histoire" element={<Histoiredix />} />
                <Route path="ECM" element={<ECMdix />} />
                <Route path="Biologie" element={<Biologiedix />} />
                <Route path="Physique" element={<Physiquedix />} />
                <Route path="Chimie" element={<Chimiedix />} />
              </Route>
              <Route index element={<Navigate to="/dixiemepage/cours" replace />} />
              <Route path="pdf" element={<Pdfdix />} />
                 <Route path="video" element={<Videodix/>} />
                 <Route path="anciens" element={<Anciensujetdix />} />
                 <Route path="formules" element={<Formuledix />} />
                 <Route path="quiz" element={<Quizdix/>} />
                 <Route path="exercices" element={<Exercicedix/>} />
            </Route>
            {/* Terminale */}
            <Route path="/niveaux/Terminale" element={<Terminalpage />}>
              <Route index element={<Terminales />} />
              
              {/* Routes TSM */}
              <Route path="tsm" element={<TerminaleTSM />}>
                <Route path="mathtsm" element={<MathTSM />} />
                <Route path="chimietsm" element={<ChimieTSM />} />
                <Route path="francaistsm" element={<FrancaisTer />} />
                <Route path="philosophietsm" element={<PhilosophieTer />} />
                <Route path="histoiretsm" element={<HistoireTer />} />
                <Route path="anglaistsm" element={<AnglaisTer />} />
                <Route path="pdftsm" element={<PdfTSM />} />
                <Route path="ancienstsm" element={<AnciensujetTSM />} />
                <Route path="formulestsm" element={<FormuleTSM />} />
                <Route path="quiztsm" element={<QuizTSM />} />
                <Route path="exotsm" element={<ExerciceTSM />} />
              </Route>
              
              {/* Routes TSE */}
              <Route path="tse" element={<TerminaleTSE />}>
                <Route path="mathtse" element={<MathTSE />} />
                <Route path="physiquetse" element={<PhysiqueTSE />} />
                <Route path="biologietse" element={<BiologieTSE />} />
                <Route path="francaistse" element={<FrancaisTer />} />
                <Route path="philosophietse" element={<PhilosophieTer />} />
                <Route path="histoiretse" element={<HistoireTer />} />
                <Route path="anglaistse" element={<AnglaisTer />} />
                <Route path="pdftse" element={<PdfTSM />} />
                <Route path="ancienstse" element={<AnciensujetTSM />} />
                <Route path="formulestse" element={<FormuleTSM />} />
                <Route path="quiztse" element={<QuizTSM />} />
                <Route path="exotse" element={<ExerciceTSM />} />
              </Route>
              
              {/* Routes TSS */}
              <Route path="tss" element={<TerminaleTSS />}>
                <Route path="economiquetss" element={<EconomiqueTSS />} />
                <Route path="sociologietss" element={<SociologieTSS />} />
                <Route path="psychologietss" element={<PsychologieTSS />} />
                <Route path="francaistss" element={<FrancaisTer />} />
                <Route path="philosophietss" element={<PhilosophieTer />} />
                <Route path="histoiretss" element={<HistoireTer />} />
                <Route path="anglaistss" element={<AnglaisTer />} />
                <Route path="pdftss" element={<PdfTSM />} />
                <Route path="ancienstss" element={<AnciensujetTSM />} />
                <Route path="formulestss" element={<FormuleTSM />} />
                <Route path="quiztss" element={<QuizTSM />} />
                <Route path="exotss" element={<ExerciceTSM />} />
              </Route>
              
              <Route path="pdf" element={<TerminalPdf />} />
              <Route path="formules" element={<TerminalFormules />} />
              <Route path="exercices" element={<TerminalExercices />} />
              <Route path="anciens" element={<TerminalAnciens />} />
              <Route path="quiz" element={<TerminalQuiz />} />
              <Route path="video" element={<TerminalVideo />} />
            </Route>

           



          <Route
        path="/admin"
        element={
          <ProtectedRoute roles="admin">
           <AdminDashboard />
          </ProtectedRoute>
        }
      />
            
                
            
          
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
    </AuthProvider>
  );
}

// Wrapper pour protéger l’accès aux niveaux
function NiveauxWrapper({ isLoggedIn, onShowLogin }) {
  if (!isLoggedIn) {
    onShowLogin();
    return <div className="p-6 text-center">Vous devez vous connecter pour accéder à ce contenu.</div>;
  }
  return <Niveaux />;
}  