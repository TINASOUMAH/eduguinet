import React, { useState, useEffect } from "react";
import { 
  Globe, 
  Target, 
  Heart, 
  CheckCircle, 
  Users, 
  BookOpen, 
  Award, 
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import "../style/styleapropros.css";

const AboutSimple = () => {
  const [stats, setStats] = useState({
    students: 0,
    courses: 0,
    success: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  // Animation des statistiques
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Animation des compteurs
      const animateStats = () => {
        let studentsCount = 0;
        let coursesCount = 0;
        let successCount = 0;

        const interval = setInterval(() => {
          if (studentsCount < 15000) {
            studentsCount += 300;
            setStats(prev => ({ ...prev, students: Math.min(studentsCount, 15000) }));
          }
          if (coursesCount < 250) {
            coursesCount += 5;
            setStats(prev => ({ ...prev, courses: Math.min(coursesCount, 250) }));
          }
          if (successCount < 92) {
            successCount += 2;
            setStats(prev => ({ ...prev, success: Math.min(successCount, 92) }));
          }

          if (studentsCount >= 15000 && coursesCount >= 250 && successCount >= 92) {
            clearInterval(interval);
          }
        }, 50);
      };

      setTimeout(animateStats, 500);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const values = [
    {
      icon: CheckCircle,
      title: "Excellence",
      description: "Offrir une éducation de qualité et adaptée aux réalités locales guinéennes."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Utiliser la technologie pour rendre l'apprentissage plus efficace et accessible."
    },
    {
      icon: Heart,
      title: "Accessibilité",
      description: "Démocratiser l'accès à l'éducation pour tous les élèves guinéens."
    },
    {
      icon: Globe,
      title: "Engagement",
      description: "S'engager pour l'avenir éducatif de la Guinée avec passion et détermination."
    }
  ];

  const testimonials = [
    {
      name: "Aminata Diallo",
      role: "Élève de 1ère",
      content: "EduGuinée m'a vraiment aidée à mieux comprendre les mathématiques. Les explications sont claires!",
      rating: 5
    },
    {
      name: "Ibrahim Camara",
      role: "Parent d'élève",
      content: "Une excellente plateforme pour accompagner nos enfants dans leur scolarité.",
      rating: 5
    }
  ];

  return (
    <div className="about-page">
      {/* Section Hero améliorée */}
      <section
        className="hero-section"
        style={{
          background: "linear-gradient(135deg, #10b98120 0%, #f0fdf4 100%)",
          padding: "4rem 1rem",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Éléments décoratifs */}
        <div style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "100px",
          height: "100px",
          background: "rgba(16, 185, 129, 0.1)",
          borderRadius: "50%",
          animation: "float 6s ease-in-out infinite"
        }} />
        <div style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: "60px",
          height: "60px",
          background: "rgba(16, 185, 129, 0.08)",
          borderRadius: "50%",
          animation: "float 4s ease-in-out infinite reverse"
        }} />

        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            gap: "3rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Contenu texte amélioré */}
          <div style={{ 
            transform: isVisible ? "translateX(0)" : "translateX(-50px)",
            opacity: isVisible ? 1 : 0,
            transition: "all 0.8s ease"
          }}>
            <div style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              background: "rgba(16, 185, 129, 0.1)",
              padding: "0.5rem 1rem",
              borderRadius: "25px",
              marginBottom: "1rem"
            }}>
              <Globe size={20} style={{ color: "#10b981", marginRight: "0.5rem" }} />
              <span style={{ color: "#10b981", fontSize: "0.9rem", fontWeight: "500" }}>
                Plateforme éducative N°1 en Guinée
              </span>
            </div>

            <h1 style={{ 
              color: "#10b981", 
              marginBottom: "1.5rem",
              fontSize: "2.5rem",
              fontWeight: "700",
              lineHeight: "1.2"
            }}>
              À propos d'<span style={{ color: "#059669" }}>EduGuinée</span>
            </h1>

            <p style={{ 
              color: "#475569", 
              lineHeight: "1.8",
              fontSize: "1.1rem",
              marginBottom: "2rem"
            }}>
              EduGuinée est une plateforme éducative innovante qui transforme 
              l'apprentissage en Guinée. Nous offrons aux élèves des cours de qualité 
              supérieure, adaptés aux programmes scolaires nationaux, pour les 
              accompagner vers la réussite scolaire et professionnelle.
            </p>

            {/* Avantages clés */}
            <div style={{ marginBottom: "2rem" }}>
              {[
                "Cours adaptés au programme guinéen",
                "Professeurs qualifiés et expérimentés", 
                "Suivi personnalisé des élèves",
                "Accès 24h/24 et 7j/7"
              ].map((advantage, index) => (
                <div key={index} style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  marginBottom: "0.5rem" 
                }}>
                  <CheckCircle size={16} style={{ color: "#10b981", marginRight: "0.5rem" }} />
                  <span style={{ color: "#475569" }}>{advantage}</span>
                </div>
              ))}
            </div>

            <button
              style={{
                background: "#10b981",
                color: "white",
                padding: "0.8rem 2rem",
                border: "none",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(16, 185, 129, 0.3)"
              }}
              onMouseEnter={e => {
                e.target.style.background = "#059669";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 6px 20px rgba(16, 185, 129, 0.4)";
              }}
              onMouseLeave={e => {
                e.target.style.background = "#10b981";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 15px rgba(16, 185, 129, 0.3)";
              }}
            >
              Découvrir nos cours
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Image avec effets */}
          <div style={{ 
            textAlign: "center",
            position: "relative",
            transform: isVisible ? "translateX(0)" : "translateX(50px)",
            opacity: isVisible ? 1 : 0,
            transition: "all 0.8s ease 0.2s"
          }}>
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                src="/image/imageenfant.png"
                alt="Élèves guinéens utilisant EduGuinée"
                style={{ 
                  maxWidth: "100%", 
                  borderRadius: "16px",
                  boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)"
                }}
              />
              {/* Carte flottante */}
              <div style={{
                position: "absolute",
                bottom: "20px",
                right: "-20px",
                background: "white",
                padding: "1rem",
                borderRadius: "12px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                border: "2px solid #10b981"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Star style={{ color: "#10b981" }} size={20} />
                  <div>
                    <div style={{ fontWeight: "600", color: "#10b981" }}>4.9/5</div>
                    <div style={{ fontSize: "0.8rem", color: "#64748b" }}>Note moyenne</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Statistiques */}
      <section style={{ 
        padding: "3rem 1rem", 
        background: "white",
        borderTop: "1px solid #e2e8f0"
      }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
            gap: "2rem",
            textAlign: "center"
          }}>
            {[
              { icon: Users, label: "Élèves actifs", value: stats.students, suffix: "+" },
              { icon: BookOpen, label: "Cours disponibles", value: stats.courses, suffix: "+" },
              { icon: Award, label: "Taux de réussite", value: stats.success, suffix: "%" }
            ].map((stat, index) => (
              <div key={index} style={{
                padding: "1.5rem",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "#10b981";
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(16, 185, 129, 0.1)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "#e2e8f0";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}>
                <div style={{
                  background: "rgba(16, 185, 129, 0.1)",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem auto"
                }}>
                  <stat.icon style={{ color: "#10b981" }} size={24} />
                </div>
                <div style={{ fontSize: "2rem", fontWeight: "700", color: "#10b981", marginBottom: "0.5rem" }}>
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                <div style={{ color: "#64748b", fontWeight: "500" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Mission et Vision améliorée */}
      <section
        className="mission-section"
        style={{ padding: "4rem 1rem", backgroundColor: "#f8fafc" }}
      >
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2
            style={{ 
              color: "#10b981", 
              textAlign: "center", 
              marginBottom: "3rem",
              fontSize: "2.5rem",
              fontWeight: "700"
            }}
          >
            Notre Mission & Vision
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
            <div style={{ 
              background: "white",
              padding: "2rem",
              borderRadius: "16px",
              borderLeft: "6px solid #10b981",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(16, 185, 129, 0.1)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.05)";
            }}>
              <div style={{
                background: "rgba(16, 185, 129, 0.1)",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem"
              }}>
                <Target style={{ color: "#10b981" }} size={24} />
              </div>
              <h3 style={{ color: "#10b981", fontSize: "1.5rem", marginBottom: "1rem" }}>Notre Mission</h3>
              <p style={{ color: "#475569", lineHeight: "1.7" }}>
                Rendre l'éducation accessible à tous en Guinée, grâce à des contenus
                pédagogiques innovants, interactifs et parfaitement adaptés aux besoins 
                et réalités des élèves guinéens.
              </p>
            </div>

            <div style={{ 
              background: "white",
              padding: "2rem",
              borderRadius: "16px",
              borderLeft: "6px solid #10b981",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(16, 185, 129, 0.1)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.05)";
            }}>
              <div style={{
                background: "rgba(16, 185, 129, 0.1)",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem"
              }}>
                <Heart style={{ color: "#10b981" }} size={24} />
              </div>
              <h3 style={{ color: "#10b981", fontSize: "1.5rem", marginBottom: "1rem" }}>Notre Vision</h3>
              <p style={{ color: "#475569", lineHeight: "1.7" }}>
                Devenir la référence en matière d'éducation numérique en Afrique de
                l'Ouest, en accompagnant chaque apprenant vers l'excellence et la 
                réussite dans un monde en constante évolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Valeurs améliorée */}
      <section
        className="values-section"
        style={{ padding: "4rem 1rem", backgroundColor: "#fff" }}
      >
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2
            style={{ 
              color: "#10b981", 
              textAlign: "center", 
              marginBottom: "3rem",
              fontSize: "2.5rem",
              fontWeight: "700"
            }}
          >
            Nos Valeurs
          </h2>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
            gap: "2rem" 
          }}>
            {values.map((value, index) => (
              <div
                key={index}
                style={{
                  background: "#f8fafc",
                  padding: "2rem",
                  border: "1px solid #e2e8f0",
                  borderRadius: "16px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "#10b981";
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(16, 185, 129, 0.1)";
                  e.currentTarget.style.background = "white";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.background = "#f8fafc";
                }}
              >
                <div style={{
                  background: "rgba(16, 185, 129, 0.1)",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem auto"
                }}>
                  <value.icon style={{ color: "#10b981" }} size={24} />
                </div>
                <h3 style={{ 
                  color: "#10b981", 
                  fontSize: "1.3rem", 
                  marginBottom: "1rem",
                  fontWeight: "600"
                }}>
                  {value.title}
                </h3>
                <p style={{ color: "#475569", lineHeight: "1.6" }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section style={{ 
        padding: "4rem 1rem", 
        background: "linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)"
      }}>
        <div className="container" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ 
            color: "#10b981", 
            textAlign: "center", 
            marginBottom: "3rem",
            fontSize: "2.5rem",
            fontWeight: "700"
          }}>
            Témoignages
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} style={{
                background: "white",
                padding: "2rem",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)"
              }}>
                <div style={{ display: "flex", marginBottom: "1rem" }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} style={{ color: "#10b981" }} fill="#10b981" />
                  ))}
                </div>
                <p style={{ color: "#475569", marginBottom: "1.5rem", fontStyle: "italic" }}>
                  "{testimonial.content}"
                </p>
                <div>
                  <div style={{ fontWeight: "600", color: "#10b981" }}>{testimonial.name}</div>
                  <div style={{ color: "#64748b", fontSize: "0.9rem" }}>{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact/CTA */}
      <section style={{ 
        padding: "4rem 1rem", 
        background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        color: "white",
        textAlign: "center"
      }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ 
            marginBottom: "1rem",
            fontSize: "2.5rem",
            fontWeight: "700"
          }}>
            Rejoignez EduGuinée dès aujourd'hui
          </h2>
          <p style={{ 
            marginBottom: "2rem", 
            fontSize: "1.1rem",
            opacity: 0.9,
            lineHeight: "1.7"
          }}>
            Commencez votre parcours d'apprentissage et découvrez tout votre potentiel 
            avec notre plateforme éducative innovante.
          </p>
          
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "3rem" }}>
            <button
              style={{
                background: "white",
                color: "#10b981",
                padding: "1rem 2rem",
                border: "none",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={e => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 25px rgba(255, 255, 255, 0.3)";
              }}
              onMouseLeave={e => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              Commencer maintenant
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Informations de contact */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
            gap: "1.5rem",
            opacity: 0.9
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
              <Phone size={18} />
              <span>+224 625 87 54 01</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
              <Mail size={18} />
              <span>contact@eduguinee.gn</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
              <MapPin size={18} />
              <span>Conakry, Guinée</span>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default AboutSimple;