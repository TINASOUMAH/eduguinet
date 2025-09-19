import React, { useState, useEffect, useMemo } from "react";

// Configuration des matières TSM
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
    name: "Chimie", 
    color: "#16a34a", 
    gradient: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
    icon: "🧪"
  },
  { 
    id: 3, 
    name: "Français", 
    color: "#7c3aed", 
    gradient: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
    icon: "📚"
  },
  { 
    id: 4, 
    name: "Philosophie", 
    color: "#dc2626", 
    gradient: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
    icon: "🤔"
  },
  { 
    id: 5, 
    name: "Histoire", 
    color: "#ea580c", 
    gradient: "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    icon: "🏛️"
  },
  { 
    id: 6, 
    name: "Anglais", 
    color: "#059669", 
    gradient: "linear-gradient(135deg, #059669 0%, #047857 100%)",
    icon: "🇬🇧"
  }
];

// Base de données des vidéos TSM
const videos = [
  // Mathématiques
  {
    id: 1,
    title: "Analyse - Fonctions et limites",
    matiereId: 1,
    duration: "25:30",
    difficulty: "Avancé",
    description: "Étude complète des fonctions, calcul de limites et applications aux fonctions exponentielles et logarithmiques.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["analyse", "fonctions", "limites"]
  },
  {
    id: 2,
    title: "Algèbre linéaire - Matrices",
    matiereId: 1,
    duration: "18:45",
    difficulty: "Intermédiaire",
    description: "Introduction aux matrices, opérations matricielles et résolution de systèmes d'équations linéaires.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["algèbre", "matrices", "systèmes"]
  },
  {
    id: 3,
    title: "Probabilités et statistiques",
    matiereId: 1,
    duration: "22:15",
    difficulty: "Intermédiaire",
    description: "Calcul des probabilités, variables aléatoires et statistiques descriptives pour le niveau TSM.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["probabilités", "statistiques", "variables"]
  },
  // Chimie
  {
    id: 4,
    title: "Chimie organique - Hydrocarbures",
    matiereId: 2,
    duration: "20:30",
    difficulty: "Avancé",
    description: "Étude des hydrocarbures saturés et insaturés, nomenclature et propriétés chimiques.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["organique", "hydrocarbures", "nomenclature"]
  },
  {
    id: 5,
    title: "Thermochimie et énergétique",
    matiereId: 2,
    duration: "24:00",
    difficulty: "Avancé",
    description: "Étude des échanges d'énergie lors des réactions chimiques, enthalpie et entropie.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["thermochimie", "énergie", "enthalpie"]
  },
  // Français
  {
    id: 6,
    title: "Analyse littéraire - Roman moderne",
    matiereId: 3,
    duration: "28:20",
    difficulty: "Avancé",
    description: "Techniques d'analyse des œuvres romanesques contemporaines et méthodes de dissertation.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["littérature", "roman", "analyse"]
  },
  // Philosophie
  {
    id: 7,
    title: "Métaphysique et ontologie",
    matiereId: 4,
    duration: "32:15",
    difficulty: "Avancé",
    description: "Introduction aux questions fondamentales de l'être et de la réalité en philosophie.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["métaphysique", "ontologie", "être"]
  },
  // Histoire
  {
    id: 8,
    title: "Histoire contemporaine - 20ème siècle",
    matiereId: 5,
    duration: "26:45",
    difficulty: "Intermédiaire",
    description: "Analyse des grands événements du 20ème siècle et leurs impacts sur le monde moderne.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["contemporaine", "20ème", "événements"]
  },
  // Anglais
  {
    id: 9,
    title: "Advanced Grammar & Essay Writing",
    matiereId: 6,
    duration: "19:30",
    difficulty: "Avancé",
    description: "Grammaire avancée et techniques de rédaction d'essais académiques en anglais.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["grammar", "essay", "writing"]
  }
];

const VideoPageTSM = () => {
  const [activeMatiere, setActiveMatiere] = useState(matieres[0]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Tous");
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState("grid");

  const filteredVideos = useMemo(() => {
    return videos.filter(video => {
      const matchesMatiere = video.matiereId === activeMatiere.id;
      const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesDifficulty = selectedDifficulty === "Tous" || video.difficulty === selectedDifficulty;
      return matchesMatiere && matchesSearch && matchesDifficulty;
    });
  }, [activeMatiere.id, searchTerm, selectedDifficulty]);

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
    >
      <div style={{ 
        position: "relative", 
        width: isListMode ? "200px" : "100%",
        height: isListMode ? "120px" : "220px",
        flexShrink: 0
      }}>
        <img
          src={video.thumbnail}
          alt={video.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.95)" }}
        />
        <div style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: getDifficultyColor(video.difficulty),
          color: "white",
          padding: "4px 8px",
          borderRadius: "12px",
          fontSize: "12px",
          fontWeight: "600"
        }}>
          {video.difficulty}
        </div>
        <div style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          background: "rgba(0,0,0,0.8)",
          color: "white",
          padding: "4px 8px",
          borderRadius: "8px",
          fontSize: "12px",
          fontWeight: "600"
        }}>
          {video.duration}
        </div>
      </div>
      <div style={{ padding: isListMode ? "20px" : "24px", flex: isListMode ? 1 : "none" }}>
        <h3 style={{ fontSize: isListMode ? "18px" : "20px", fontWeight: "700", marginBottom: "12px", color: "#1e293b" }}>
          {video.title}
        </h3>
        <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "16px", lineHeight: "1.5" }}>{video.description}</p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {video.tags.map((tag, index) => (
            <span key={index} style={{
              background: `${activeMatiere.color}15`,
              color: activeMatiere.color,
              padding: "4px 8px",
              borderRadius: "8px",
              fontSize: "12px",
              fontWeight: "500"
            }}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'Inter', sans-serif", padding: "40px 20px" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "50px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: "24px", padding: "40px 20px", color: "white", position: "relative", overflow: "hidden", maxWidth: "1200px", margin: "0 auto 50px auto" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "15px", textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}>
          Vidéothèque TSM
        </h1>
        <p style={{ fontSize: "18px", opacity: "0.9" }}>
          Cours vidéo Terminale Sciences Mathématiques • Contenu pédagogique de qualité
        </p>
      </div>
      
      {/* Sélection des matières */}
      <div style={{ display: "flex", gap: "16px", margin: "40px 0", justifyContent: "center", flexWrap: "wrap", maxWidth: "1200px", marginLeft: "auto", marginRight: "auto" }}>
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
              background: activeMatiere.id === matiere.id ? matiere.gradient : "#ffffff",
              boxShadow: activeMatiere.id === matiere.id ? "0 12px 30px rgba(0,0,0,0.2)" : "0 8px 20px rgba(0,0,0,0.08)",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: activeMatiere.id === matiere.id ? "translateY(-4px)" : "translateY(0)",
              border: activeMatiere.id === matiere.id ? "none" : `2px solid ${matiere.color}20`
            }}
          >
            <span style={{ marginRight: "8px" }}>{matiere.icon}</span>
            {matiere.name}
          </button>
        ))}
      </div>

      {/* Filtres */}
      <div style={{ maxWidth: "1200px", margin: "0 auto 40px auto", background: "#ffffff", borderRadius: "16px", padding: "20px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
        <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
          <input
            type="text"
            placeholder="Rechercher une vidéo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              flex: 1,
              minWidth: "200px",
              padding: "12px 16px",
              borderRadius: "12px",
              border: "2px solid #e2e8f0",
              fontSize: "14px",
              outline: "none"
            }}
          />
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            style={{
              padding: "12px 16px",
              borderRadius: "12px",
              border: "2px solid #e2e8f0",
              fontSize: "14px",
              outline: "none",
              cursor: "pointer"
            }}
          >
            <option value="Tous">Tous niveaux</option>
            <option value="Débutant">Débutant</option>
            <option value="Intermédiaire">Intermédiaire</option>
            <option value="Avancé">Avancé</option>
          </select>
        </div>
      </div>

      {/* Liste des vidéos */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px" }}>
        {filteredVideos.length > 0 ? (
          filteredVideos.map(video => <VideoCard key={video.id} video={video} />)
        ) : (
          <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "40px", background: "#fff", borderRadius: "20px", boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}>
            <h3 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "10px" }}>Aucune vidéo trouvée</h3>
            <p style={{ color: "#64748b", fontSize: "16px" }}>Essayez de modifier vos critères ou sélectionnez une autre matière.</p>
          </div>
        )}
      </div>

      {/* Modal vidéo */}
      {activeVideo && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.9)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          padding: "20px"
        }} onClick={() => setActiveVideo(null)}>
          <div style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "20px",
            maxWidth: "800px",
            width: "100%",
            maxHeight: "90vh",
            overflow: "auto"
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#1e293b" }}>{activeVideo.title}</h3>
              <button
                onClick={() => setActiveVideo(null)}
                style={{
                  background: "#ef4444",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  cursor: "pointer",
                  fontSize: "20px"
                }}
              >
                ×
              </button>
            </div>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "12px" }}>
              <iframe
                src={activeVideo.url}
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
            <p style={{ marginTop: "20px", color: "#64748b", lineHeight: "1.6" }}>{activeVideo.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPageTSM;
