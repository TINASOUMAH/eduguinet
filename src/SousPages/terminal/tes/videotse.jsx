import React, { useState } from 'react';

// Configuration des couleurs par matière
const colors = {
  "Mathématiques": { primary: "#3b82f6", secondary: "#dbeafe", icon: "📊" },
  "Physique": { primary: "#8b5cf6", secondary: "#e9d5ff", icon: "⚛️" },
  "Chimie": { primary: "#06b6d4", secondary: "#cffafe", icon: "🧪" },
  "Biologie": { primary: "#10b981", secondary: "#d1fae5", icon: "🧬" }
};

// Données des vidéos TSE
const videosTSE = [
  {
    matiere: "Mathématiques",
    videos: [
      {
        id: 1,
        titre: "Dérivées et applications",
        description: "Calcul de dérivées, règles de dérivation et applications géométriques",
        duree: "25:30",
        niveau: "Avancé",
        chapitre: "Analyse",
        thumbnail: "/image/math_derivees_thumb.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        vues: 1250,
        likes: 98
      },
      {
        id: 2,
        titre: "Probabilités conditionnelles",
        description: "Théorème de Bayes et applications pratiques",
        duree: "18:45",
        niveau: "Difficile",
        chapitre: "Probabilités",
        thumbnail: "/image/math_proba_thumb.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        vues: 890,
        likes: 76
      },
      {
        id: 3,
        titre: "Géométrie vectorielle",
        description: "Vecteurs dans l'espace, produit scalaire et applications",
        duree: "32:15",
        niveau: "Moyen",
        chapitre: "Géométrie",
        thumbnail: "/image/math_vecteurs_thumb.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        vues: 1450,
        likes: 112
      }
    ]
  },
  {
    matiere: "Physique",
    videos: [
      {
        id: 4,
        titre: "Mécanique du point matériel",
        description: "Cinématique, dynamique et applications",
        duree: "28:20",
        niveau: "Moyen",
        chapitre: "Mécanique",
        thumbnail: "/image/physique_mecanique_thumb.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        vues: 1100,
        likes: 89
      },
      {
        id: 5,
        titre: "Électrostatique",
        description: "Champ électrique, potentiel et condensateurs",
        duree: "35:10",
        niveau: "Difficile",
        chapitre: "Électricité",
        thumbnail: "/image/physique_electro_thumb.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        vues: 950,
        likes: 82
      },
      {
        id: 6,
        titre: "Ondes et oscillations",
        description: "Oscillations harmoniques et propagation d'ondes",
        duree: "22:45",
        niveau: "Moyen",
        chapitre: "Ondes",
        thumbnail: "/image/physique_ondes_thumb.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        vues: 1320,
        likes: 105
      }
    ]
  },
  {
    matiere: "Chimie",
    videos: [
      {
        id: 7,
        titre: "Équilibres chimiques",
        description: "Constantes d'équilibre et principe de Le Chatelier",
        duree: "26:30",
        niveau: "Moyen",
        chapitre: "Équilibres",
        thumbnail: "/image/chimie_equilibres_thumb.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        vues: 780,
        likes: 67
      },
      {
        id: 8,
        titre: "Chimie organique",
        description: "Nomenclature et réactions organiques",
        duree: "40:15",
        niveau: "Difficile",
        chapitre: "Organique",
        thumbnail: "/image/chimie_organique_thumb.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        vues: 1050,
        likes: 91
      }
    ]
  },
  {
    matiere: "Biologie",
    videos: [
      {
        id: 9,
        titre: "Génétique moléculaire",
        description: "ADN, ARN et synthèse des protéines",
        duree: "30:45",
        niveau: "Moyen",
        chapitre: "Génétique",
        thumbnail: "/image/biologie_genetique_thumb.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        vues: 1380,
        likes: 118
      },
      {
        id: 10,
        titre: "Métabolisme cellulaire",
        description: "Respiration cellulaire et photosynthèse",
        duree: "35:20",
        niveau: "Difficile",
        chapitre: "Métabolisme",
        thumbnail: "/image/biologie_metabolisme_thumb.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        vues: 920,
        likes: 85
      }
    ]
  }
];

export default function VideoTSE() {
  const [selectedMatiere, setSelectedMatiere] = useState("Mathématiques");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterNiveau, setFilterNiveau] = useState("Tous");

  const currentVideos = videosTSE.find(m => m.matiere === selectedMatiere)?.videos || [];
  
  const filteredVideos = currentVideos.filter(video => {
    const matchSearch = video.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       video.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchNiveau = filterNiveau === "Tous" || video.niveau === filterNiveau;
    return matchSearch && matchNiveau;
  });

  const getNiveauColor = (niveau) => {
    switch(niveau) {
      case "Facile": return "#10b981";
      case "Moyen": return "#f59e0b";
      case "Difficile": return "#ef4444";
      case "Avancé": return "#8b5cf6";
      default: return "#64748b";
    }
  };

  const formatDuration = (duration) => {
    return duration;
  };

  const formatViews = (views) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)", fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div style={{ background: "white", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", padding: "30px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "800", background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "10px" }}>
            Vidéos TSE
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#64748b" }}>
            Cours vidéo pour Terminale Sciences Expérimentales
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px", display: "flex", gap: "30px" }}>
        {/* Sidebar */}
        <div style={{ width: "300px", flexShrink: 0 }}>
          {/* Sélection matière */}
          <div style={{ background: "white", borderRadius: "16px", padding: "25px", marginBottom: "20px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#1e293b", marginBottom: "20px" }}>📚 Matières</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {videosTSE.map(matiere => {
                const isSelected = matiere.matiere === selectedMatiere;
                const colorConfig = colors[matiere.matiere];
                
                return (
                  <button
                    key={matiere.matiere}
                    onClick={() => setSelectedMatiere(matiere.matiere)}
                    style={{
                      padding: "12px 16px",
                      borderRadius: "12px",
                      border: "none",
                      background: isSelected ? colorConfig.secondary : "transparent",
                      color: isSelected ? colorConfig.primary : "#64748b",
                      fontSize: "0.95rem",
                      fontWeight: isSelected ? "600" : "500",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px"
                    }}
                  >
                    <span>{colorConfig.icon}</span>
                    {matiere.matiere}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filtres */}
          <div style={{ background: "white", borderRadius: "16px", padding: "25px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#1e293b", marginBottom: "20px" }}>🔍 Filtres</h3>
            
            {/* Recherche */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "600", color: "#374151", marginBottom: "8px" }}>
                Rechercher
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Titre ou description..."
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  border: "2px solid #e2e8f0",
                  fontSize: "0.9rem",
                  outline: "none"
                }}
              />
            </div>

            {/* Niveau */}
            <div>
              <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "600", color: "#374151", marginBottom: "8px" }}>
                Niveau
              </label>
              <select
                value={filterNiveau}
                onChange={(e) => setFilterNiveau(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  border: "2px solid #e2e8f0",
                  fontSize: "0.9rem",
                  outline: "none"
                }}
              >
                <option value="Tous">Tous niveaux</option>
                <option value="Facile">Facile</option>
                <option value="Moyen">Moyen</option>
                <option value="Difficile">Difficile</option>
                <option value="Avancé">Avancé</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div style={{ flex: 1 }}>
          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "30px" }}>
            <div style={{ background: "white", borderRadius: "16px", padding: "25px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: "800", color: colors[selectedMatiere].primary }}>{currentVideos.length}</div>
              <div style={{ fontSize: "0.9rem", color: "#64748b" }}>Vidéos disponibles</div>
            </div>
            <div style={{ background: "white", borderRadius: "16px", padding: "25px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: "800", color: colors[selectedMatiere].primary }}>{filteredVideos.length}</div>
              <div style={{ fontSize: "0.9rem", color: "#64748b" }}>Vidéos filtrées</div>
            </div>
          </div>

          {/* Grille des vidéos */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "25px" }}>
            {filteredVideos.map(video => (
              <div
                key={video.id}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.05)";
                }}
                onClick={() => setSelectedVideo(video)}
              >
                {/* Thumbnail */}
                <div style={{ position: "relative", paddingBottom: "56.25%", background: "#f1f5f9" }}>
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `linear-gradient(135deg, ${colors[selectedMatiere].primary}20 0%, ${colors[selectedMatiere].primary}40 100%)`
                  }}>
                    <div style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.9)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                      color: colors[selectedMatiere].primary
                    }}>
                      ▶️
                    </div>
                  </div>
                  
                  {/* Durée */}
                  <div style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    background: "rgba(0,0,0,0.8)",
                    color: "white",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    fontSize: "0.8rem",
                    fontWeight: "600"
                  }}>
                    {video.duree}
                  </div>
                </div>

                {/* Contenu */}
                <div style={{ padding: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#1e293b", margin: 0, lineHeight: "1.3" }}>
                      {video.titre}
                    </h3>
                    <span style={{
                      background: getNiveauColor(video.niveau),
                      color: "white",
                      padding: "4px 8px",
                      borderRadius: "12px",
                      fontSize: "0.7rem",
                      fontWeight: "600",
                      flexShrink: 0,
                      marginLeft: "10px"
                    }}>
                      {video.niveau}
                    </span>
                  </div>

                  <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: "1.5", marginBottom: "15px" }}>
                    {video.description}
                  </p>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
                    <span style={{
                      background: colors[selectedMatiere].secondary,
                      color: colors[selectedMatiere].primary,
                      padding: "4px 10px",
                      borderRadius: "12px",
                      fontSize: "0.8rem",
                      fontWeight: "600"
                    }}>
                      {video.chapitre}
                    </span>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.8rem", color: "#64748b" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                      <span>👁️ {formatViews(video.vues)} vues</span>
                      <span>👍 {video.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 20px" }}>
              <div style={{ fontSize: "4rem", marginBottom: "20px" }}>🎥</div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#1e293b", marginBottom: "10px" }}>
                Aucune vidéo trouvée
              </h3>
              <p style={{ fontSize: "1rem", color: "#64748b" }}>
                Essayez de modifier vos critères de recherche ou de filtrage.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal vidéo */}
      {selectedVideo && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          padding: "20px"
        }}>
          <div style={{
            background: "white",
            borderRadius: "16px",
            maxWidth: "900px",
            width: "100%",
            maxHeight: "90vh",
            overflow: "hidden"
          }}>
            <div style={{ padding: "20px", borderBottom: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#1e293b", margin: 0 }}>
                {selectedVideo.titre}
              </h2>
              <button
                onClick={() => setSelectedVideo(null)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: "#64748b"
                }}
              >
                ✕
              </button>
            </div>
            
            <div style={{ padding: "20px" }}>
              <div style={{ position: "relative", paddingBottom: "56.25%", marginBottom: "20px", background: "#f1f5f9", borderRadius: "12px", overflow: "hidden" }}>
                <iframe
                  src={selectedVideo.videoUrl}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none"
                  }}
                  allowFullScreen
                />
              </div>
              
              <div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
                <span style={{
                  background: colors[selectedMatiere].secondary,
                  color: colors[selectedMatiere].primary,
                  padding: "6px 12px",
                  borderRadius: "12px",
                  fontSize: "0.9rem",
                  fontWeight: "600"
                }}>
                  {selectedVideo.chapitre}
                </span>
                <span style={{
                  background: getNiveauColor(selectedVideo.niveau),
                  color: "white",
                  padding: "6px 12px",
                  borderRadius: "12px",
                  fontSize: "0.9rem",
                  fontWeight: "600"
                }}>
                  {selectedVideo.niveau}
                </span>
              </div>
              
              <p style={{ fontSize: "1rem", color: "#64748b", lineHeight: "1.6", marginBottom: "15px" }}>
                {selectedVideo.description}
              </p>
              
              <div style={{ display: "flex", gap: "20px", fontSize: "0.9rem", color: "#64748b" }}>
                <span>⏱️ {selectedVideo.duree}</span>
                <span>👁️ {formatViews(selectedVideo.vues)} vues</span>
                <span>👍 {selectedVideo.likes} likes</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
