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

// Base de données des vidéos (exemple)
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
  }
];

const VideoPage = () => {
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
      </div>
      <div style={{ padding: isListMode ? "20px" : "24px", flex: isListMode ? 1 : "none" }}>
        <h3 style={{ fontSize: isListMode ? "18px" : "20px", fontWeight: "700", marginBottom: "12px", color: "#1e293b" }}>
          {video.title}
        </h3>
        <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "16px" }}>{video.description}</p>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'Inter', sans-serif" }}>
      
      {/* Sélection des matières */}
      <div style={{ display: "flex", gap: "16px", margin: "40px 0", justifyContent: "center", flexWrap: "wrap" }}>
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
              border: activeMatiere.id === matiere.id ? "none" : `2px solid ${matiere.color}20` // ← corrigé ici
            }}
          >
            <span style={{ marginRight: "8px" }}>{matiere.icon}</span>
            {matiere.name}
          </button>
        ))}
      </div>

      {/* Liste des vidéos */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px", padding: "0 40px" }}>
        {filteredVideos.length > 0 ? (
          filteredVideos.map(video => <VideoCard key={video.id} video={video} />)
        ) : (
          <div style={{ textAlign: "center", padding: "40px", background: "#fff", borderRadius: "20px", boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}>
            <h3 style={{ fontSize: "24px", fontWeight: "600" }}>Aucune vidéo trouvée</h3>
            <p style={{ color: "#64748b", fontSize: "16px" }}>Essayez de modifier vos critères ou sélectionnez une autre matière.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPage;
