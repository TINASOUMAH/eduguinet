import React from "react";
import { 
  FaFacebook, FaTwitter, FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube,
  FaGraduationCap, FaBook, FaUsers, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaHeart, FaStar
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Tableau de bord", href: "/dashboard" },
    { name: "Mes cours", href: "/cours" },
    { name: "Exercices", href: "/exercices" },
    { name: "Contact", href: "/contact" },
    { name: "Aide", href: "/aide" }
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "https://facebook.com/eduguinee", color: "#1877F2" },
    { icon: FaInstagram, href: "https://instagram.com/eduguinee", color: "#E4405F" },
    { icon: FaWhatsapp, href: "https://wa.me/224625875401", color: "#25D366" },
    { icon: FaYoutube, href: "https://youtube.com/eduguinee", color: "#FF0000" }
  ];

  return (
    <footer style={{
      background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
      color: "#fff",
      position: "relative",
      fontSize: "14px"
    }}>
      {/* Décorations compactes */}
      <div style={{
        position: "absolute", top: 0, right: 0, width: "100px", height: "100px",
        background: "linear-gradient(135deg, #3b82f620, #10b98120)",
        borderRadius: "50%", filter: "blur(40px)", transform: "translate(30%, -30%)"
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "25px 15px", position: "relative", zIndex: 2 }}>
        
        {/* Contenu principal compact */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "2fr 1fr 1fr 1.5fr", 
          gap: "25px", 
          marginBottom: "20px",
          alignItems: "start" 
        }}>
          
          {/* Logo et description */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <div style={{
                width: "35px", height: "35px", 
                background: "linear-gradient(135deg, #3b82f6, #10b981)",
                borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <FaGraduationCap style={{ fontSize: "18px", color: "#fff" }} />
              </div>
              <h2 style={{
                fontSize: "20px", fontWeight: "800",
                background: "linear-gradient(90deg, #3b82f6, #10b981)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", 
                margin: 0
              }}>EduGuinée</h2>
            </div>
            <p style={{ color: "#94a3b8", margin: 0, fontSize: "13px" }}>
              Votre partenaire pour une éducation de qualité en Guinée.
            </p>
            
            {/* Stats compacts */}
            <div style={{ display: "flex", gap: "15px", marginTop: "12px" }}>
              {[
                { icon: FaUsers, text: "25k+ élèves" },
                { icon: FaBook, text: "500+ ressources" },
                { icon: FaStar, text: "4.9/5" }
              ].map((stat, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "4px", color: "#cbd5e1", fontSize: "12px" }}>
                  <stat.icon style={{ color: "#10b981" }} />
                  <span>{stat.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 style={{ fontWeight: "600", marginBottom: "10px", fontSize: "15px" }}>Liens rapides</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {quickLinks.slice(0, 4).map((link, i) => (
                <li key={i} style={{ marginBottom: "6px" }}>
                  <a href={link.href} style={{ 
                    color: "#cbd5e1", textDecoration: "none", fontSize: "13px",
                    transition: "color 0.2s"
                  }}
                    onMouseEnter={e => e.target.style.color = "#10b981"}
                    onMouseLeave={e => e.target.style.color = "#cbd5e1"}
                  >{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Matières */}
          <div>
            <h3 style={{ fontWeight: "600", marginBottom: "10px", fontSize: "15px" }}>Matières</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Mathématiques", "Français", "Sciences", "Histoire"].map((matiere, i) => (
                <li key={i} style={{ marginBottom: "6px" }}>
                  <a href={`/matieres/${matiere.toLowerCase()}`} style={{ 
                    color: "#cbd5e1", textDecoration: "none", fontSize: "13px",
                    transition: "color 0.2s"
                  }}
                    onMouseEnter={e => e.target.style.color = "#3b82f6"}
                    onMouseLeave={e => e.target.style.color = "#cbd5e1"}
                  >{matiere}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact et réseaux sociaux */}
          <div>
            <h3 style={{ fontWeight: "600", marginBottom: "10px", fontSize: "15px" }}>Contact</h3>
            <div style={{ color: "#cbd5e1", fontSize: "12px", marginBottom: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                <FaEnvelope style={{ fontSize: "11px", color: "#10b981" }} />
                <span>Eduguinée@gmail.com</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                <FaPhone style={{ fontSize: "11px", color: "#10b981" }} />
                <span>+224 625 875 401</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <FaMapMarkerAlt style={{ fontSize: "11px", color: "#10b981" }} />
                <span>Conakry, Guinée</span>
              </div>
            </div>
            
            {/* Réseaux sociaux */}
            <div style={{ display: "flex", gap: "6px" }}>
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    width: "28px", height: "28px", borderRadius: "6px", 
                    background: `${social.color}15`, color: social.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "12px", transition: "all 0.2s"
                  }}
                  onMouseEnter={e => { 
                    e.currentTarget.style.background = social.color; 
                    e.currentTarget.style.color = "#fff"; 
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => { 
                    e.currentTarget.style.background = `${social.color}15`; 
                    e.currentTarget.style.color = social.color;
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Séparateur et copyright */}
        <div style={{ 
          borderTop: "1px solid #334155", 
          paddingTop: "15px",
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
          fontSize: "12px"
        }}>
          <span style={{ color: "#94a3b8" }}>
            © {currentYear} EduGuinée. Fait avec <FaHeart style={{ color: "#ef4444" }} /> pour l'éducation
          </span>
          <div style={{ display: "flex", gap: "12px" }}>
            {["Confidentialité", "Mentions légales", "CGU"].map((link, i) => (
              <a key={i} href={`/${link.toLowerCase()}`} style={{ 
                color: "#94a3b8", textDecoration: "none",
                transition: "color 0.2s"
              }}
                onMouseEnter={e => e.target.style.color = "#10b981"} 
                onMouseLeave={e => e.target.style.color = "#94a3b8"}
              >{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}