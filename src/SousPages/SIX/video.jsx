import React, { useState, useEffect, useMemo } from "react";

// Configuration des matières
const matieres = [
  { 
    id: 1, 
    name: "Mathématiques", 
    color: "#2563eb", 
    gradient: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
    icon: "📊"
  },
  { 
    id: 2, 
    name: "Français", 
    color: "#dc2626", 
    gradient: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
    icon: "📚"
  },
  { 
    id: 3, 
    name: "Sciences", 
    color: "#059669", 
    gradient: "linear-gradient(135deg, #059669 0%, #047857 100%)",
    icon: "🔬"
  },
  { 
    id: 4, 
    name: "Histoire", 
    color: "#7c2d12", 
    gradient: "linear-gradient(135deg, #7c2d12 0%, #92400e 100%)",
    icon: "🏛️"
  }
];

// Base de données des vidéos (remplacez les VIDEO_ID par de vraies IDs YouTube)
const videos = [
  // Mathématiques
  {
    id: 1,
    title: "Les nombres décimaux - Cours complet",
    matiereId: 1,
    duration: "12:45",
    difficulty: "Débutant",
    description: "Apprenez tout sur les nombres décimaux : définition, lecture, écriture et comparaisons.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["nombres", "décimaux", "bases"]
  },
  {
    id: 2,
    title: "Addition et soustraction des décimaux",
    matiereId: 1,
    duration: "8:30",
    difficulty: "Intermédiaire",
    description: "Maîtrisez les opérations d'addition et de soustraction avec les nombres décimaux.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["addition", "soustraction", "opérations"]
  },
  {
    id: 3,
    title: "Multiplication des nombres décimaux",
    matiereId: 1,
    duration: "10:15",
    difficulty: "Intermédiaire",
    description: "Techniques et astuces pour multiplier efficacement les nombres décimaux.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["multiplication", "calculs", "techniques"]
  },
  
  // Français
  {
    id: 4,
    title: "La conjugaison du présent",
    matiereId: 2,
    duration: "15:20",
    difficulty: "Débutant",
    description: "Apprenez à conjuguer tous les verbes au présent de l'indicatif.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["conjugaison", "présent", "verbes"]
  },
  {
    id: 5,
    title: "Les règles d'orthographe essentielles",
    matiereId: 2,
    duration: "18:45",
    difficulty: "Intermédiaire",
    description: "Maîtrisez les principales règles d'orthographe française.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["orthographe", "règles", "écriture"]
  }
];

const VideoPage = () => {
  const [activeMatiere, setActiveMatiere] = useState(matieres[0]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Tous");
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // grid ou list

  // Filtrage des vidéos
  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      const matchesMatiere = video.matiereId === activeMatiere.id;
      const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesDifficulty = selectedDifficulty === "Tous" || video.difficulty === selectedDifficulty;
      
      return matchesMatiere && matchesSearch && matchesDifficulty;
    });
  }, [activeMatiere.id, searchTerm, selectedDifficulty]);

  // Simuler un chargement lors du changement de matière
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [activeMatiere]);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Débutant": return "#10b981";
      case "Intermédiaire": return "#f59e0b";
      case "Avancé": return "#ef4444";
      default: return "#6b7280";
    }
  };

  const VideoCard = ({ video, isListMode = false }) => (
    <div
      onClick={() => setActiveVideo(video)}
      style={{
        cursor: "pointer",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        background: "#ffffff",
        position: "relative",
        display: isListMode ? "flex" : "block",
        alignItems: isListMode ? "center" : "stretch"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.12)";
      }}
    >
      {/* Thumbnail */}
      <div style={{ 
        position: "relative", 
        width: isListMode ? "200px" : "100%",
        height: isListMode ? "120px" : "220px",
        flexShrink: 0
      }}>
        <img
          src={video.thumbnail}
          alt={video.title}
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover",
            filter: "brightness(0.95)"
          }}
        />
        
        {/* Play button overlay */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.95)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          opacity: 0,
          transition: "opacity 0.3s ease"
        }}
        className="play-button"
        >
          <span style={{ fontSize: "24px", color: activeMatiere.color, marginLeft: "3px" }}>▶</span>
        </div>

        {/* Duration badge */}
        <div style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          background: "rgba(0,0,0,0.8)",
          color: "#fff",
          padding: "4px 8px",
          borderRadius: "6px",
          fontSize: "12px",
          fontWeight: "500"
        }}>
          {video.duration}
        </div>

        {/* Difficulty badge */}
        <div style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          background: getDifficultyColor(video.difficulty),
          color: "#fff",
          padding: "4px 10px",
          borderRadius: "12px",
          fontSize: "11px",
          fontWeight: "600",
          textTransform: "uppercase"
        }}>
          {video.difficulty}
        </div>
      </div>

      {/* Content */}
      <div style={{ 
        padding: isListMode ? "20px" : "24px",
        flex: isListMode ? 1 : "none"
      }}>
        <h3 style={{
          fontSize: isListMode ? "18px" : "20px",
          fontWeight: "700",
          marginBottom: "12px",
          color: "#1e293b",
          lineHeight: "1.3",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden"
        }}>
          {video.title}
        </h3>

        <p style={{
          fontSize: "14px",
          color: "#64748b",
          lineHeight: "1.5",
          marginBottom: "16px",
          display: "-webkit-box",
          WebkitLineClamp: isListMode ? 2 : 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden"
        }}>
          {video.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {video.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              style={{
                background: `${activeMatiere.color}15`,
                color: activeMatiere.color,
                padding: "4px 10px",
                borderRadius: "15px",
                fontSize: "12px",
                fontWeight: "500"
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      {/* Header avec gradient */}
      <div style={{
        background: activeMatiere.gradient,
        padding: "60px 40px 80px",
        textAlign: "center",
        color: "#ffffff",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Décoration de fond */}
        <div style={{
          position: "absolute",
          top: "-50%",
          right: "-20%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.1)",
          filter: "blur(50px)"
        }} />
        
        <h1 style={{
          fontSize: "42px",
          fontWeight: "800",
          marginBottom: "16px",
          textShadow: "0 4px 20px rgba(0,0,0,0.3)"
        }}>
          {activeMatiere.icon} Vidéos Éducatives
        </h1>
        
        <p style={{
          fontSize: "20px",
          fontWeight: "400",
          opacity: 0.9,
          maxWidth: "600px",
          margin: "0 auto"
        }}>
          Découvrez nos cours vidéo de qualité en {activeMatiere.name.toLowerCase()}
        </p>
      </div>

      <div style={{ padding: "0 40px", marginTop: "-40px", position: "relative", zIndex: 2 }}>
        
        {/* Sélection des matières */}
        <div style={{
          display: "flex",
          gap: "16px",
          marginBottom: "40px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          {matieres.map((matiere) => (
            <button
              key={matiere.id}
              onClick={() => setActiveMatiere(matiere)}
              style={{
                padding: "16px 32px",
                borderRadius: "50px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "16px",
                color: activeMatiere.id === matiere.id ? "#fff" : matiere.color,
                background: activeMatiere.id === matiere.id 
                  ? matiere.gradient 
                  : "#ffffff",
                boxShadow: activeMatiere.id === matiere.id
                  ? "0 12px 30px rgba(0,0,0,0.2)"
                  : "0 8px 20px rgba(0,0,0,0.08)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: activeMatiere.id === matiere.id ? "translateY(-4px)" : "translateY(0)",
                border: activeMatiere.id !== matiere.id ? `2px solid ${matiere.color}20` : "none"
              }}
            >
              <span style={{ marginRight: "8px" }}>{matiere.icon}</span>
              {matiere.name}
            </button>
          ))}
        </div>

        {/* Barre de contrôles */}
        <div style={{
          background: "#ffffff",
          padding: "24px",
          borderRadius: "20px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
          marginBottom: "40px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          {/* Recherche */}
          <div style={{ flex: 1, minWidth: "300px", position: "relative" }}>
            <input
              type="text"
              placeholder="Rechercher une vidéo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 50px 12px 20px",
                borderRadius: "15px",
                border: "2px solid #e2e8f0",
                fontSize: "16px",
                transition: "all 0.3s ease",
                outline: "none"
              }}
              onFocus={(e) => e.target.style.borderColor = activeMatiere.color}
              onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
            />
            <span style={{
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#94a3b8",
              fontSize: "18px"
            }}>🔍</span>
          </div>

          {/* Filtres */}
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              style={{
                padding: "12px 16px",
                borderRadius: "12px",
                border: "2px solid #e2e8f0",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
                background: "#ffffff"
              }}
            >
              <option value="Tous">Tous niveaux</option>
              <option value="Débutant">Débutant</option>
              <option value="Intermédiaire">Intermédiaire</option>
              <option value="Avancé">Avancé</option>
            </select>

            {/* Toggle view mode */}
            <div style={{ display: "flex", background: "#f1f5f9", borderRadius: "12px", padding: "4px" }}>
              <button
                onClick={() => setViewMode("grid")}
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  background: viewMode === "grid" ? "#ffffff" : "transparent",
                  color: viewMode === "grid" ? activeMatiere.color : "#64748b",
                  fontWeight: "500",
                  fontSize: "14px",
                  boxShadow: viewMode === "grid" ? "0 2px 8px rgba(0,0,0,0.1)" : "none"
                }}
              >
                📊 Grille
              </button>
              <button
                onClick={() => setViewMode("list")}
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  background: viewMode === "list" ? "#ffffff" : "transparent",
                  color: viewMode === "list" ? activeMatiere.color : "#64748b",
                  fontWeight: "500",
                  fontSize: "14px",
                  boxShadow: viewMode === "list" ? "0 2px 8px rgba(0,0,0,0.1)" : "none"
                }}
              >
                📋 Liste
              </button>
            </div>
          </div>
        </div>

        {/* Statistiques */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "40px",
          gap: "30px",
          flexWrap: "wrap"
        }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "32px", fontWeight: "800", color: activeMatiere.color }}>
              {filteredVideos.length}
            </div>
            <div style={{ fontSize: "14px", color: "#64748b", fontWeight: "500" }}>
              Vidéo{filteredVideos.length > 1 ? 's' : ''} trouvée{filteredVideos.length > 1 ? 's' : ''}
            </div>
          </div>
        </div>

        {/* Loading state */}
        {isLoading ? (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <div style={{
              width: "50px",
              height: "50px",
              border: `4px solid ${activeMatiere.color}30`,
              borderTop: `4px solid ${activeMatiere.color}`,
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              margin: "0 auto 20px"
            }} />
            <p style={{ color: "#64748b", fontSize: "16px" }}>Chargement des vidéos...</p>
          </div>
        ) : (
          /* Grille/Liste des vidéos */
          <div style={{
            display: viewMode === "grid" ? "grid" : "flex",
            flexDirection: viewMode === "list" ? "column" : "row",
            gridTemplateColumns: viewMode === "grid" ? "repeat(auto-fit, minmax(350px, 1fr))" : "none",
            gap: "30px",
            marginBottom: "60px"
          }}>
            {filteredVideos.length > 0 ? (
              filteredVideos.map((video) => (
                <VideoCard 
                  key={video.id} 
                  video={video} 
                  isListMode={viewMode === "list"}
                />
              ))
            ) : (
              <div style={{
                textAlign: "center",
                padding: "80px 40px",
                gridColumn: "1 / -1",
                background: "#ffffff",
                borderRadius: "20px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.08)"
              }}>
                <div style={{ fontSize: "64px", marginBottom: "20px" }}>🔍</div>
                <h3 style={{ fontSize: "24px", fontWeight: "600", color: "#1e293b", marginBottom: "12px" }}>
                  Aucune vidéo trouvée
                </h3>
                <p style={{ color: "#64748b", fontSize: "16px", maxWidth: "400px", margin: "0 auto" }}>
                  Essayez de modifier vos critères de recherche ou sélectionnez une autre matière.
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modal vidéo améliorée */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px",
            backdropFilter: "blur(10px)"
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "1000px",
              borderRadius: "20px",
              overflow: "hidden",
              background: "#000",
              boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
              position: "relative"
            }}
          >
            {/* Bouton fermer */}
            <button
              onClick={() => setActiveVideo(null)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "none",
                background: "rgba(255,255,255,0.2)",
                color: "#ffffff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                zIndex: 10,
                backdropFilter: "blur(10px)"
              }}
            >
              ×
            </button>

            <iframe
              width="100%"
              height="550px"
              src={`${activeVideo.url}?autoplay=1`}
              title={activeVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* Info vidéo */}
            <div style={{
              background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
              padding: "25px",
              color: "#ffffff"
            }}>
              <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "12px" }}>
                {activeVideo.title}
              </h2>
              <p style={{ color: "#cbd5e1", fontSize: "16px", lineHeight: "1.6" }}>
                {activeVideo.description}
              </p>
              
              <div style={{ display: "flex", gap: "20px", marginTop: "16px", alignItems: "center" }}>
                <span style={{ 
                  background: getDifficultyColor(activeVideo.difficulty),
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "600"
                }}>
                  {activeVideo.difficulty}
                </span>
                <span style={{ color: "#94a3b8" }}>⏱️ {activeVideo.duration}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Styles CSS pour les animations */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          .video-card:hover .play-button {
            opacity: 1 !important;
          }
        `}
      </style>
    </div>
  );
};

export default VideoPage;