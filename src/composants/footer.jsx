import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "../style/stylefooter.css"; // ton fichier de style

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo ou titre */}
        <div className="footer-brand">
          <h2>EduGuinée</h2>
          <p>Apprenez, progressez, réussissez.</p>
        </div>

        {/* Navigation rapide */}
        <div className="footer-links">
          <h3>Navigation</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/Apropos">À propos</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div className="footer-socials">
          <h3>Suivez-nous</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://wa.me/0000000000" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EduGuinée. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
