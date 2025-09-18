import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Accueil = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  const statsData = [
    { label: "Leçons", value: 269, gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)", icon: "📚", description: "Cours détaillés" },
    { label: "Exercices", value: 338, gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)", icon: "✏️", description: "Pratiques guidées" },
    { label: "Vidéos", value: 126, gradient: "linear-gradient(135deg, #eab308 0%, #ca8a04 100%)", icon: "🎥", description: "Contenus visuels" },
    { label: "Quiz", value: 89, gradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)", icon: "🧠", description: "Tests interactifs" },
  ];

  const levelsData = [
    { title: "6ème Année", subtitle: "Fondamentaux", description: "Construisez des bases solides avec nos ressources adaptées au niveau débutant", emoji: "🌱", route: "/sixieme", gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)", color: "#10b981" },
    { title: "10ème Année", subtitle: "Intermédiaire", description: "Approfondissez vos connaissances avec un contenu plus avancé", emoji: "🎯", route: "/dixiemepage", gradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)", color: "#3b82f6" },
    { title: "Terminale", subtitle: "Excellence", description: "Préparez-vous aux examens avec nos ressources de niveau expert", emoji: "🚀", route: "/niveaux/Terminale", gradient: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)", color: "#dc2626" }
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [isVisible, setIsVisible] = useState({ hero: false, stats: false });

  // Animation compteurs
  useEffect(() => {
    if (!isVisible.stats) return;
    const duration = 2500;
    const frameRate = 60;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      setCounts(statsData.map((stat) => {
        const progress = Math.min(frame / totalFrames, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        return Math.round(stat.value * easeOutQuart);
      }));
      if (frame >= totalFrames) clearInterval(interval);
    }, 1000 / frameRate);

    return () => clearInterval(interval);
  }, [isVisible.stats]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === heroRef.current) setIsVisible(prev => ({ ...prev, hero: entry.isIntersecting }));
          if (entry.target === statsRef.current) setIsVisible(prev => ({ ...prev, stats: entry.isIntersecting }));
        });
      },
      { threshold: 0.3 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToLevels = () => {
    document.getElementById("level-selection-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ overflow: "hidden" }}>
      {/* Hero Section */}
      <section
        ref={heroRef}
        style={{
          minHeight: "80vh",
          backgroundImage: "url('/image/imageaccuiel.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Overlay sombre */}
        <div style={{ position: "absolute", top:0,left:0,right:0,bottom:0, backgroundColor: "rgba(0,0,0,0.4)", zIndex:1 }} />

        {/* Contenu Hero */}
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          textAlign: "center",
          color: "#fff",
          position: "relative",
          zIndex: 2,
          transform: isVisible.hero ? "translateY(0)" : "translateY(50px)",
          opacity: isVisible.hero ? 1 : 0,
          transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)"
        }}>
          <h1 style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: "800",
            marginBottom: "24px",
            lineHeight: "1.1",
            textShadow: "0 4px 20px rgba(0,0,0,0.3)"
          }}>
            Bienvenue sur <span style={{
              background: "linear-gradient(45deg, #1e40af, #3b82f6)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>EduGuinée</span>
          </h1>

          <p style={{
            fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
            marginBottom: "40px",
            opacity: 0.9,
            maxWidth: "600px",
            margin: "0 auto 40px",
            lineHeight: "1.6",
            fontWeight: "300"
          }}>
            Votre plateforme d'apprentissage moderne pour exceller dans vos études.
            <br /><strong>Apprenez, progressez, réussissez.</strong>
          </p>

          <button
            onClick={scrollToLevels}
            style={{
              padding: "18px 40px",
              fontSize: "18px",
              fontWeight: "600",
              background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
              color: "#1e293b",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              minWidth: "200px"
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "linear-gradient(135deg, #10b981 0%, #11e09fff 100%)";
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 15px 40px rgba(0,0,0,0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
            }}
          >
            🚀 Commencer maintenant
          </button>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={statsRef} style={{ padding:"100px 20px", position:"relative" }}>
        <div style={{ maxWidth:"1200px", margin:"0 auto", textAlign:"center", position:"relative", zIndex:2 }}>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight:"700",
            marginBottom:"20px",
            transform: isVisible.stats ? "translateY(0)":"translateY(30px)",
            opacity: isVisible.stats ? 1:0,
            transition:"all 0.8s ease 0.2s",
            color:"#1e293b"
          }}>Nos Ressources Pédagogiques</h2>

          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",
            gap:"30px",
            marginTop:"60px"
          }}>
            {statsData.map((stat,index)=>(
              <div key={index} style={{
                background:"rgba(255,255,255,0.9)",
                borderRadius:"24px",
                padding:"40px 30px",
                boxShadow:"0 10px 40px rgba(0,0,0,0.1)",
                position:"relative",
                overflow:"hidden",
                transform: isVisible.stats ? "translateY(0)":"translateY(50px)",
                opacity: isVisible.stats ? 1:0,
                transition:`all 0.8s ease ${0.6+index*0.1}s`,
                cursor:"pointer",
                zIndex:2
              }}>
                <div style={{position:"absolute",top:0,left:0,right:0,height:"4px",background:stat.gradient}} />
                <div style={{ fontSize:"3rem", marginBottom:"20px"}}>{stat.icon}</div>
                <h3 style={{
                  fontSize:"3rem",
                  fontWeight:"800",
                  marginBottom:"10px",
                  background:stat.gradient,
                  backgroundClip:"text",
                  WebkitBackgroundClip:"text",
                  WebkitTextFillColor:"transparent"
                }}>{counts[index]}</h3>
                <p style={{ fontSize:"1.3rem", fontWeight:"600", color:"#475569", marginBottom:"8px" }}>{stat.label}</p>
                <p style={{ fontSize:"0.9rem", color:"#94a3b8", fontWeight:"500" }}>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Levels Section */}
      <section id="level-selection-section" style={{ padding:"100px 20px", background:"linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)", color:"#fff", position:"relative" }}>
        <div style={{ maxWidth:"1200px", margin:"0 auto", textAlign:"center" }}>
          <h2 style={{
            fontSize:"clamp(2rem,4vw,3rem)",
            fontWeight:"700",
            marginBottom:"20px",
            background:"linear-gradient(45deg, #ffffff, #cbd5e1)",
            backgroundClip:"text",
            WebkitBackgroundClip:"text",
            WebkitTextFillColor:"transparent"
          }}>Choisissez Votre Niveau</h2>

          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",
            gap:"40px",
            marginTop:"60px"
          }}>
            {levelsData.map((level,index)=>(
              <div key={index} onClick={()=>navigate(level.route)} style={{
                background: level.gradient,
                borderRadius:"24px",
                padding:"40px",
                cursor:"pointer",
                color:"#fff",
                textAlign:"center",
                boxShadow:"0 10px 30px rgba(0,0,0,0.3)",
                transition:"all 0.3s ease"
              }}>
                <div style={{ fontSize:"4rem", marginBottom:"24px"}}>{level.emoji}</div>
                <h3 style={{ fontSize:"2rem", fontWeight:"700", marginBottom:"8px"}}>{level.title}</h3>
                <h4 style={{ fontSize:"1.1rem", fontWeight:"600", marginBottom:"20px", textTransform:"uppercase"}}>{level.subtitle}</h4>
                <p style={{ fontSize:"1rem", lineHeight:"1.6"}}>{level.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;
