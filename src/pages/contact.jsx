import React, { useState } from "react";
import { 
  FaEnvelope, 
  FaWhatsapp, 
  FaFacebook,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaUser,
  FaComments,
  FaHeart,
  FaShieldAlt,
  FaBolt
} from "react-icons/fa";

const ContactView = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Informations de contact
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "Eduguinée@gmail.com",
      description: "Réponse sous 24h",
      action: "mailto:Eduguinée@gmail.com",
      actionText: "Envoyer un email",
      color: "#3b82f6",
      bgColor: "#eff6ff"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "+224 625 875 401",
      description: "Réponse immédiate",
      action: "https://wa.me/224625875401",
      actionText: "Envoyer un message",
      color: "#10b981",
      bgColor: "#f0fdf4"
    },
    {
      icon: FaFacebook,
      title: "Facebook",
      value: "EduGuinée",
      description: "Suivez nos actualités",
      action: "https://facebook.com/eduguinee",
      actionText: "Suivez-nous",
      color: "#6366f1",
      bgColor: "#f0f9ff"
    }
  ];

  // Informations supplémentaires
  const additionalInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Adresse",
      value: "Conakry, Guinée",
      color: "#f59e0b"
    },
    {
      icon: FaClock,
      title: "Horaires",
      value: "24h/24 - 7j/7",
      color: "#ef4444"
    },
    {
      icon: FaPhone,
      title: "Support",
      value: "Assistance dédiée",
      color: "#8b5cf6"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Formulaire envoyé:", formData);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section style={{
      background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      padding: "80px 0",
      position: "relative",
      overflow: "hidden",
      minHeight: "100vh"
    }}>
      {/* Éléments décoratifs */}
      <div style={{
        position: "absolute",
        top: "0",
        right: "0",
        width: "400px",
        height: "400px",
        background: "linear-gradient(135deg, #3b82f620, #10b98120)",
        borderRadius: "50%",
        filter: "blur(100px)",
        transform: "translate(50%, -50%)"
      }}></div>
      <div style={{
        position: "absolute",
        bottom: "0",
        left: "0",
        width: "350px",
        height: "350px",
        background: "linear-gradient(135deg, #f59e0b20, #ef444420)",
        borderRadius: "50%",
        filter: "blur(80px)",
        transform: "translate(-50%, 50%)"
      }}></div>

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px",
        position: "relative",
        zIndex: 2
      }}>
        {/* Header */}
        <div style={{
          textAlign: "center",
          marginBottom: "80px"
        }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 20px",
            background: "linear-gradient(90deg, #3b82f6, #10b981)",
            borderRadius: "25px",
            color: "white",
            fontSize: "14px",
            fontWeight: "600",
            marginBottom: "20px",
            boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)"
          }}>
            <FaComments />
            CONTACTEZ-NOUS
          </div>
          
          <h2 style={{
            fontSize: "48px",
            fontWeight: "800",
            color: "#1e293b",
            marginBottom: "20px",
            lineHeight: "1.2",
            fontFamily: "'Inter', sans-serif"
          }}>
            Parlons de votre <span style={{
              background: "linear-gradient(90deg, #3b82f6, #10b981)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>réussite</span>
          </h2>
          
          <p style={{
            fontSize: "20px",
            color: "#64748b",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}>
            Notre équipe pédagogique est à votre écoute pour vous accompagner 
            dans votre parcours éducatif
          </p>
        </div>

        {/* Cards de contact */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "30px",
          marginBottom: "80px"
        }}>
          {contactInfo.map((contact, index) => (
            <div key={index} style={{
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "40px 30px",
              textAlign: "center",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              position: "relative",
              overflow: "hidden"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-15px) scale(1.02)";
              e.currentTarget.style.boxShadow = `0 25px 50px ${contact.color}25`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.1)";
            }}
            >
              {/* Effet de fond animé */}
              <div style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                height: "4px",
                background: `linear-gradient(90deg, ${contact.color}, ${contact.color}80)`,
                borderRadius: "24px 24px 0 0"
              }}></div>

              <div style={{
                width: "80px",
                height: "80px",
                background: contact.bgColor,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 25px",
                border: `3px solid ${contact.color}30`,
                transition: "all 0.3s ease"
              }}>
                <contact.icon style={{ 
                  fontSize: "32px", 
                  color: contact.color,
                  transition: "all 0.3s ease"
                }} />
              </div>

              <h3 style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#1e293b",
                marginBottom: "10px"
              }}>
                {contact.title}
              </h3>

              <p style={{
                fontSize: "18px",
                fontWeight: "600",
                color: contact.color,
                marginBottom: "8px"
              }}>
                {contact.value}
              </p>

              <p style={{
                fontSize: "14px",
                color: "#64748b",
                marginBottom: "25px"
              }}>
                {contact.description}
              </p>

              <a
                href={contact.action}
                target={contact.action.startsWith('http') ? "_blank" : "_self"}
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "14px 28px",
                  background: `linear-gradient(135deg, ${contact.color}, ${contact.color}dd)`,
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "12px",
                  fontSize: "16px",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  boxShadow: `0 4px 15px ${contact.color}30`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = `0 8px 25px ${contact.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = `0 4px 15px ${contact.color}30`;
                }}
              >
                <contact.icon />
                {contact.actionText}
              </a>
            </div>
          ))}
        </div>

        {/* Section informations supplémentaires */}
        <div style={{
          background: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(20px)",
          borderRadius: "24px",
          padding: "40px 30px",
          marginBottom: "80px",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "40px"
          }}>
            {additionalInfo.map((info, index) => (
              <div key={index} style={{
                textAlign: "center"
              }}>
                <div style={{
                  width: "60px",
                  height: "60px",
                  background: `${info.color}15`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 15px",
                  border: `2px solid ${info.color}30`
                }}>
                  <info.icon style={{ fontSize: "24px", color: info.color }} />
                </div>
                <h4 style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#1e293b",
                  marginBottom: "8px"
                }}>
                  {info.title}
                </h4>
                <p style={{
                  fontSize: "16px",
                  color: "#64748b"
                }}>
                  {info.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Formulaire de contact */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "start"
        }}>
          {/* Colonne gauche - Formulaire */}
          <div style={{
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(20px)",
            borderRadius: "24px",
            padding: "40px",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
          }}>
            <h3 style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "#1e293b",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}>
              <FaPaperPlane style={{ color: "#3b82f6" }} />
              Envoyez-nous un message
            </h3>
            <p style={{
              fontSize: "16px",
              color: "#64748b",
              marginBottom: "30px"
            }}>
              Décrivez-nous votre situation et nous vous répondrons rapidement
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <div style={{ position: "relative" }}>
                  <FaUser style={{
                    position: "absolute",
                    left: "15px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#94a3b8",
                    fontSize: "16px"
                  }} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      padding: "16px 20px 16px 45px",
                      border: "2px solid #e2e8f0",
                      borderRadius: "12px",
                      fontSize: "16px",
                      backgroundColor: "#f8fafc",
                      transition: "all 0.3s ease",
                      fontFamily: "'Inter', sans-serif",
                      boxSizing: "border-box",
                      outline: "none"
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#3b82f6";
                      e.target.style.backgroundColor = "#ffffff";
                      e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e2e8f0";
                      e.target.style.backgroundColor = "#f8fafc";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                <div style={{ position: "relative" }}>
                  <FaEnvelope style={{
                    position: "absolute",
                    left: "15px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#94a3b8",
                    fontSize: "16px"
                  }} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      padding: "16px 20px 16px 45px",
                      border: "2px solid #e2e8f0",
                      borderRadius: "12px",
                      fontSize: "16px",
                      backgroundColor: "#f8fafc",
                      transition: "all 0.3s ease",
                      fontFamily: "'Inter', sans-serif",
                      boxSizing: "border-box",
                      outline: "none"
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#3b82f6";
                      e.target.style.backgroundColor = "#ffffff";
                      e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e2e8f0";
                      e.target.style.backgroundColor = "#f8fafc";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Sujet de votre message"
                value={formData.subject}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "16px 20px",
                  border: "2px solid #e2e8f0",
                  borderRadius: "12px",
                  fontSize: "16px",
                  backgroundColor: "#f8fafc",
                  transition: "all 0.3s ease",
                  fontFamily: "'Inter', sans-serif",
                  boxSizing: "border-box",
                  outline: "none"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#3b82f6";
                  e.target.style.backgroundColor = "#ffffff";
                  e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e2e8f0";
                  e.target.style.backgroundColor = "#f8fafc";
                  e.target.style.boxShadow = "none";
                }}
              />

              <textarea
                name="message"
                placeholder="Votre message..."
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                style={{
                  width: "100%",
                  padding: "16px 20px",
                  border: "2px solid #e2e8f0",
                  borderRadius: "12px",
                  fontSize: "16px",
                  backgroundColor: "#f8fafc",
                  transition: "all 0.3s ease",
                  fontFamily: "'Inter', sans-serif",
                  boxSizing: "border-box",
                  outline: "none",
                  resize: "vertical"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#3b82f6";
                  e.target.style.backgroundColor = "#ffffff";
                  e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e2e8f0";
                  e.target.style.backgroundColor = "#f8fafc";
                  e.target.style.boxShadow = "none";
                }}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: "100%",
                  padding: "18px",
                  background: "linear-gradient(90deg, #3b82f6, #10b981)",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  transition: "all 0.3s ease",
                  fontFamily: "'Inter', sans-serif",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  opacity: isSubmitting ? 0.7 : 1,
                  boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)"
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(59, 130, 246, 0.4)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(59, 130, 246, 0.3)";
                  }
                }}
              >
                {isSubmitting ? (
                  <>
                    <div style={{
                      width: "20px",
                      height: "20px",
                      border: "2px solid #ffffff",
                      borderTop: "2px solid transparent",
                      borderRadius: "50%",
                      animation: "spin 1s linear infinite"
                    }}></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Colonne droite - Informations et garanties */}
          <div>
            <div style={{
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(20px)",
              borderRadius: "24px",
              padding: "40px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              marginBottom: "30px"
            }}>
              <h3 style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#1e293b",
                marginBottom: "20px"
              }}>
                Pourquoi nous choisir ?
              </h3>

              {[
                { icon: FaBolt, title: "Réponse rapide", desc: "Moins de 24h en moyenne" },
                { icon: FaShieldAlt, title: "Support dédié", desc: "Équipe pédagogique experte" },
                { icon: FaHeart, title: "Écoute active", desc: "Solutions personnalisées" }
              ].map((item, index) => (
                <div key={index} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginBottom: "20px"
                }}>
                  <div style={{
                    width: "50px",
                    height: "50px",
                    background: "linear-gradient(135deg, #3b82f6, #10b981)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <item.icon style={{ fontSize: "20px", color: "white" }} />
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "#1e293b",
                      marginBottom: "4px"
                    }}>
                      {item.title}
                    </h4>
                    <p style={{
                      fontSize: "14px",
                      color: "#64748b",
                      margin: 0
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Citation inspirante */}
            <div style={{
              background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
              borderRadius: "20px",
              padding: "30px",
              color: "white",
              textAlign: "center"
            }}>
              <blockquote style={{
                fontSize: "18px",
                fontStyle: "italic",
                marginBottom: "15px",
                lineHeight: "1.6"
              }}>
                "L'éducation est l'arme la plus puissante que vous pouvez utiliser pour changer le monde."
              </blockquote>
              <cite style={{
                fontSize: "14px",
                opacity: "0.8"
              }}>
                - Nelson Mandela
              </cite>
            </div>
          </div>
        </div>

        {/* Footer de contact */}
        <div style={{
          textAlign: "center",
          marginTop: "80px",
          padding: "40px",
          background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
          borderRadius: "20px",
          color: "white"
        }}>
          <h3 style={{
            fontSize: "24px",
            fontWeight: "700",
            marginBottom: "15px"
          }}>
            🤝 Ensemble vers la réussite
          </h3>
          <p style={{
            fontSize: "16px",
            opacity: "0.9",
            maxWidth: "600px",
            margin: "0 auto"
          }}>
            Votre succès est notre priorité. Contactez-nous dès maintenant et rejoignez 
            les milliers d'élèves qui nous font confiance pour réussir leurs études.
          </p>
        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @media (max-width: 768px) {
          section h2 {
            fontSize: 36px !important;
          }
          
          section > div > div:nth-child(3) {
            gridTemplateColumns: repeat(auto-fit, minmax(250px, 1fr)) !important;
          }
          
          section > div > div:nth-child(5) {
            gridTemplateColumns: 1fr !important;
            gap: 40px !important;
          }
          
          section > div > div:nth-child(5) > div:first-child form > div:first-child {
            gridTemplateColumns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactView;