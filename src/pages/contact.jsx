import React from "react";
import { FaEnvelope, FaWhatsapp, FaFacebook } from "react-icons/fa";
import "../style/stylecontact.css";

const ContactView = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contactez-nous</h2>
      <p className="contact-subtitle">
        Si vous avez des questions ou des suggestions, n’hésitez pas à nous contacter.
      </p>

      <div className="contact-cards">
        {/* Email */}
        <div className="contact-card">
          <FaEnvelope className="icon email-icon" />
          <h3>Email</h3>
          <p>Eduguinée@gmail.com</p>
          <a href="mailto:velionxtech@gmail.com" className="btn-contact">
            Envoyer un email
          </a>
        </div>

        {/* WhatsApp */}
        <div className="contact-card">
          <FaWhatsapp className="icon whatsapp-icon" />
          <h3>WhatsApp</h3>
          <p>+224625875401</p>
          <a 
            href="https://wa.me/224625875401"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-contact"
          >
            Envoyer un message
          </a>
        </div>

        {/* Facebook */}
        <div className="contact-card">
          <FaFacebook className="icon facebook-icon" />
          <h3>Facebook</h3>
          <p>EduGuinée</p>
          <a 
            href="https://facebook.com/taPageFacebook"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-contact"
          >
            Suivez-nous
          </a>
        </div>
      </div>

      <p className="contact-footer">
        Nous sommes là pour vous accompagner vers la réussite.
      </p>
    </section>
  );
};

export default ContactView;

