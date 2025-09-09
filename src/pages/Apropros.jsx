import React from "react";
import "../style/styleapropros.css";

const AboutView = () => {
  return (
    <section className="about-section">
      <h2 className="about-title">À propos d'EduGuinée</h2>
      <div className="about-container">
        <div>
          <p className="about-text">
            EduGuinée est une plateforme éducative en ligne dédiée aux élèves
            guinéens. Notre mission est de démocratiser l'accès à une éducation
            de qualité en fournissant des ressources d'apprentissage complètes et
            interactives, adaptées aux programmes scolaires du pays.
          </p>
          <p className="about-text">
            Nous croyons fermement que l'éducation est la clé de l'avenir.
            C'est pourquoi nous mettons à votre disposition des cours clairs,
            des exercices pratiques, des quiz pour tester vos connaissances et
            des annales pour vous préparer au mieux à vos examens.
          </p>
        </div>
        <div className="about-image">
        
           <img 
        src="/image/imageenfant.png" 
         alt="Élèves guinéens en tenue scolaire" 
       
  />
        </div>
      </div>
    </section>
  );
};

export default AboutView;
