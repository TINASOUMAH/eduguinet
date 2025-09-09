import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "./composants/Navbar";
import Accueil from "./pages/Accueil";
import Footer from "./composants/footer";
import Apropros from "./pages/Apropros";
import Contact from "./pages/contact";
import Niveaux from "./pages/Niveaux";
import Matiere from "./pages/matiere";
import Connexion from "./pages/connexion";

// Pages SIX
import SixPage from "./pages/SixPage";
import CoursSix from "./SousPages/SIX/CoursSix";
import PdfSix from "./SousPages/SIX/PdfSix";
import Video from "./SousPages/SIX/Video";
import Quiz from "./SousPages/SIX/quiz";
import Anciensujet from "./SousPages/SIX/anciensujet";
import Formule from "./SousPages/SIX/formule";



// Matières SIX
import Calcul from "./SousPages/SIX/Calcul";
import Histoire from "./SousPages/SIX/Histoire.jsx";
import Geographie from "./SousPages/SIX/Geographie.jsx";
import ECM from "./SousPages/SIX/ECM.jsx";
import Science from "./SousPages/SIX/Science.jsx";

// Pages 10ème
import DixiemePage from "./pages/dixiemepage.jsx";
import Coursdixieme from "./SousPages/10eme/coursdixieme.jsx";
import Francais from "./SousPages/SIX/français.Jsx";
import Exercice from "./SousPages/SIX/exercice.Jsx";


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
            <Route path="/apropros" element={<Apropros />} />
            <Route path="/contact" element={<Contact />} />

            {/* Pages SIX */}
            <Route path="/sixieme" element={<SixPage />}>
              <Route path="cours" element={<CoursSix />}>
                <Route path="calcul" element={<Calcul />} />
                <Route path="histoire" element={<Histoire />} />
                <Route path="geographie" element={<Geographie />} />
                <Route path="ecm" element={<ECM />} />
                <Route path="science-observation" element={<Science />} />
                <Route path="francais" element={<Francais />} />
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
                <Route path="calcul" element={<Calcul />} />
              </Route>
              <Route index element={<Navigate to="/dixiemepage/cours" replace />} />
            </Route>

            {/* Niveaux protégés */}
            <Route
              path="/niveaux"
              element={<NiveauxWrapper isLoggedIn={isLoggedIn} onShowLogin={handleShowLogin} />}
            />
            <Route
              path="/niveaux/:level"
              element={<NiveauxWrapper isLoggedIn={isLoggedIn} onShowLogin={handleShowLogin} />}
            />

            {/* Redirection spéciale Chimie 10ème (optionnel) */}
            <Route path="/niveaux/10eme/chimie" element={<Matiere />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
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
