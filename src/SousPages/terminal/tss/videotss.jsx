import React, { useState } from 'react';

// Configuration des couleurs par matière
const colors = {
  "Économie": { primary: "#f59e0b", secondary: "#fef3c7", icon: "💰" },
  "Sociologie": { primary: "#8b5cf6", secondary: "#e9d5ff", icon: "👥" },
  "Psychologie": { primary: "#06b6d4", secondary: "#cffafe", icon: "🧠" },
  "Histoire": { primary: "#ef4444", secondary: "#fee2e2", icon: "📜" },
  "Géographie": { primary: "#10b981", secondary: "#d1fae5", icon: "🌍" }
};

// Données des vidéos TSS
const videosTSS = [
  {
    matiere: "Économie",
    videos: [
      {
        id: 1,
        titre: "Microéconomie fondamentale",
        description: "Offre, demande, élasticités et équilibre de marché",
        duree: "32:15",
        niveau: "Moyen",
        chapitre: "Microéconomie",
        thumbnail: "/image/economie_micro_thumb.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        vues: 1850,
        likes: 142
      },
      {
        id: 2,
        titre: "Macroéconomie appliquée",
        description: "PIB, inflation, chômage et politiques économiques",
        duree: "28:45",
        niveau: "Difficile",
        chapitre: "Macroéconomie",
        thumbnail: "/image/economie_macro_thumb.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        vues: 1420,
        likes: 118
      },
      {
        id: 3,
        titre: "Commerce international",
        description: "Théories du commerce et mondialisation",
        duree: "25:30",
        niveau: "Moyen",
        chapitre: "International",
        thumbnail: "/image/economie_commerce_thumb.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        vues: 1120,
        likes: 95
      }
    ]
  },
  {
    matiere: "Sociologie",
    videos: [
      {
        id: 4,
        titre: "Stratification sociale",
        description: "Classes sociales, mobilité et reproduction sociale",
        duree: "30:20",
        niveau: "Moyen",
        chapitre: "Stratification",
        thumbnail: "/image/sociologie_classes_thumb.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        vues: 980,
        likes: 87
      },
      {
        id: 5,
        titre: "Sociologie urbaine",
        description: "Ville, urbanisation et ségrégation spatiale",
        duree: "27:45",
        niveau: "Difficile",
        chapitre: "Urbain",
        thumbnail: "/image/sociologie_urbaine_thumb.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        vues: 750,
        likes: 68
      },
      {
        id: 6,
        titre: "Institutions et socialisation",
        description: "Famille, école et processus de socialisation",
        duree: "24:15",
        niveau: "Facile",
        chapitre: "Socialisation",
        thumbnail: "/image/sociologie_socialisation_thumb.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        vues: 1650,
        likes: 128
      }
    ]
  },
  {
    matiere: "Psychologie",
    videos: [
      {
        id: 7,
        titre: "Psychologie cognitive",
        description: "Mémoire, attention et processus cognitifs",
        duree: "26:40",
        niveau: "Moyen",
        chapitre: "Cognition",
        thumbnail: "/image/psychologie_cognitive_thumb.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        vues: 1290,
        likes: 105
      },
      {
        id: 8,
        titre: "Psychologie du développement",
        description: "Développement de l'enfant et de l'adolescent",
        duree: "33:25",
        niveau: "Difficile",
        chapitre: "Développement",
        thumbnail: "/image/psychologie_developpement_thumb.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        vues: 890,
        likes: 76
      }
    ]
  },
  {
    matiere: "Histoire",
    videos: [
      {
        id: 9,
        titre: "Décolonisation en Afrique",
        description: "Processus de décolonisation et indépendances africaines",
        duree: "35:50",
        niveau: "Moyen",
        chapitre: "Décolonisation",
        thumbnail: "/image/histoire_decolonisation_thumb.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        vues: 1560,
        likes: 132
      },
      {
        id: 10,
        titre: "Guerre froide",
        description: "Bipolarisation du monde et conflits",
        duree: "42:15",
        niveau: "Difficile",
        chapitre: "Guerre froide",
        thumbnail: "/image/histoire_guerre_froide_thumb.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        vues: 1820,
        likes: 156
      }
    ]
  },
  {
    matiere: "Géographie",
    videos: [
      {
        id: 11,
        titre: "Métropolisation mondiale",
        description: "Villes mondiales et hiérarchie urbaine",
        duree: "29:30",
        niveau: "Moyen",
        chapitre: "Urbain",
        thumbnail: "/image/geographie_metropoles_thumb.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        vues: 1340,
        likes: 112
      },
      {
        id: 12,
        titre: "Développement durable",
        description: "Enjeux environnementaux et développement",
        duree: "31:45",
        niveau: "Difficile",
        chapitre: "Développement",
        thumbnail: "/image/geographie_developpement_thumb.jpg",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        vues: 1150,
        likes: 98
      }
    ]
  }
];

export default function VideoTSS() {
  const [selectedMatiere, setSelectedMatiere] = useState("Économie");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterNiveau, setFilterNiveau] = useState("Tous");

  const currentVideos = videosTSS.find(m => m.matiere === selectedMatiere)?.videos || [];
  
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
            Vidéos TSS
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#64748b" }}>
            Cours vidéo pour Terminale Sciences Sociales
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
              {videosTSS.map(matiere => {
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
