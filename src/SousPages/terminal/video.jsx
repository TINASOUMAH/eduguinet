import React, { useState } from "react";
import { FaPlay, FaVideo, FaCalculator, FaAtom, FaBrain, FaBook, FaGlobeAfrica, FaLanguage, FaClock, FaStar, FaEye } from "react-icons/fa";

// Vidéos par matière pour Terminale
const videosData = [
  {
    id: 1,
    matiere: "Mathématiques",
    icon: FaCalculator,
    color: "#2563eb",
    gradient: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
    bgColor: "#eff6ff",
    videos: [
      {
        id: 1,
        titre: "Fonctions exponentielles - Cours complet",
        duree: "45min",
        vues: "12.5k",
        note: 4.8,
        thumbnail: "/image/math_expo.jpg",
        description: "Étude complète des fonctions exponentielles et logarithmiques avec exemples"
      },
      {
        id: 2,
        titre: "Probabilités conditionnelles",
        duree: "35min",
        vues: "8.2k",
        note: 4.6,
        thumbnail: "/image/math_proba.jpg",
        description: "Calculs de probabilités avec conditions et arbres de probabilité"
      },
      {
        id: 3,
        titre: "Géométrie dans l'espace",
        duree: "50min",
        vues: "15.1k",
        note: 4.9,
        thumbnail: "/image/math_geo.jpg",
        description: "Volumes, aires et représentations dans l'espace"
      }
    ]
  },
  {
    id: 2,
    matiere: "Physique-Chimie",
    icon: FaAtom,
    color: "#7c3aed",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
    bgColor: "#f3f4f6",
    videos: [
      {
        id: 1,
        titre: "Mécanique newtonienne - Expériences",
        duree: "40min",
        vues: "9.8k",
        note: 4.7,
        thumbnail: "/image/physique_mecanique.jpg",
        description: "Démonstrations pratiques des lois de Newton"
      },
      {
        id: 2,
        titre: "Thermodynamique - Principes",
        duree: "55min",
        vues: "7.3k",
        note: 4.5,
        thumbnail: "/image/physique_thermo.jpg",
        description: "Premier et second principe avec applications"
      },
      {
        id: 3,
        titre: "Chimie organique - Réactions",
        duree: "38min",
        vues: "11.2k",
        note: 4.8,
        thumbnail: "/image/chimie_organique.jpg",
        description: "Mécanismes réactionnels et synthèses"
      }
    ]
  },
  {
    id: 3,
    matiere: "Philosophie",
    icon: FaBrain,
    color: "#dc2626",
    gradient: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
    bgColor: "#fef2f2",
    videos: [
      {
        id: 1,
        titre: "La conscience - Analyse philosophique",
        duree: "60min",
        vues: "6.5k",
        note: 4.6,
        thumbnail: "/image/philo_conscience.jpg",
        description: "Exploration du concept de conscience en philosophie"
      },
      {
        id: 2,
        titre: "Méthodologie de la dissertation",
        duree: "45min",
        vues: "14.7k",
        note: 4.9,
        thumbnail: "/image/philo_methode.jpg",
        description: "Techniques et structure de la dissertation philosophique"
      }
    ]
  },
  {
    id: 4,
    matiere: "Français",
    icon: FaBook,
    color: "#059669",
    gradient: "linear-gradient(135deg, #059669 0%, #047857 100%)",
    bgColor: "#ecfdf5",
    videos: [
      {
        id: 1,
        titre: "Commentaire de texte - Méthode",
        duree: "50min",
        vues: "18.3k",
        note: 4.8,
        thumbnail: "/image/francais_commentaire.jpg",
        description: "Méthodologie complète du commentaire littéraire"
      },
      {
        id: 2,
        titre: "Analyse littéraire - Baudelaire",
        duree: "42min",
        vues: "10.9k",
        note: 4.7,
        thumbnail: "/image/francais_baudelaire.jpg",
        description: "Étude des Fleurs du Mal et du symbolisme"
      }
    ]
  }
];

export default function VideoTer() {
  const [selectedMatiere, setSelectedMatiere] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrer les matières selon le terme de recherche
  const filteredMatieres = videosData.filter(matiere =>
    matiere.matiere.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const playVideo = (video) => {
    console.log(`Lecture de la vidéo: ${video.titre}`);
    // Logique pour lancer la vidéo
  };

  const formatViews = (views) => {
    if (views.includes('k')) return views + ' vues';
    return views + ' vues';
  };

  return (
    <div style={{ 
      padding: "20px", 
      backgroundColor: "#f8fafc",
      minHeight: "100vh"
    }}>
      {/* Header */}
      <div style={{ 
        marginBottom: "30px",
        textAlign: "center"
      }}>
        <h1 style={{ 
          fontSize: "2.5rem",
          fontWeight: "700",
          color: "#1e293b",
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px"
        }}>
          <FaVideo style={{ color: "#dc2626" }} />
          Vidéos - Terminale
        </h1>
        
        <p style={{ 
          color: "#64748b",
          fontSize: "1.1rem",
          marginBottom: "25px"
        }}>
          Contenus vidéo éducatifs pour approfondir vos connaissances
        </p>

        {/* Barre de recherche */}
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
          <input
            type="text"
            placeholder="🔍 Rechercher une matière..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 20px",
              borderRadius: "25px",
              border: "2px solid #e2e8f0",
              fontSize: "1rem",
              outline: "none",
              transition: "border-color 0.3s ease"
            }}
            onFocus={(e) => e.target.style.borderColor = "#3b82f6"}
            onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
          />
        </div>
      </div>

      {/* Grille des matières */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gap: "25px"
      }}>
        {filteredMatieres.map((matiere) => {
          const IconComponent = matiere.icon;
          return (
            <div
              key={matiere.id}
              style={{
                background: matiere.bgColor,
                border: `2px solid ${selectedMatiere === matiere.id ? matiere.color : 'transparent'}`,
                borderRadius: "16px",
                padding: "25px",
                transition: "all 0.3s ease",
                boxShadow: selectedMatiere === matiere.id 
                  ? `0 8px 25px ${matiere.color}30`
                  : "0 4px 15px rgba(0,0,0,0.08)"
              }}
            >
              {/* Header de la matière */}
              <div 
                onClick={() => setSelectedMatiere(selectedMatiere === matiere.id ? null : matiere.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                  cursor: "pointer"
                }}
              >
                <div style={{
                  background: matiere.gradient,
                  padding: "12px",
                  borderRadius: "12px",
                  marginRight: "15px"
                }}>
                  <IconComponent style={{ 
                    fontSize: "1.5rem", 
                    color: "white" 
                  }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    color: "#1e293b",
                    margin: "0"
                  }}>
                    {matiere.matiere}
                  </h3>
                  <p style={{
                    color: "#64748b",
                    fontSize: "0.9rem",
                    margin: "5px 0 0 0"
                  }}>
                    {matiere.videos.length} vidéos disponibles
                  </p>
                </div>
              </div>

              {/* Liste des vidéos */}
              {selectedMatiere === matiere.id && (
                <div style={{ marginTop: "20px" }}>
                  {matiere.videos.map((video) => (
                    <div
                      key={video.id}
                      style={{
                        background: "white",
                        borderRadius: "12px",
                        marginBottom: "15px",
                        border: "1px solid #e2e8f0",
                        overflow: "hidden",
                        transition: "all 0.2s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                        e.currentTarget.style.transform = "translateY(-1px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      {/* Thumbnail avec bouton play */}
                      <div style={{
                        position: "relative",
                        height: "180px",
                        background: `linear-gradient(45deg, ${matiere.color}20, ${matiere.color}40)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}>
                        <button
                          onClick={() => playVideo(video)}
                          style={{
                            background: "rgba(0,0,0,0.7)",
                            border: "none",
                            borderRadius: "50%",
                            width: "60px",
                            height: "60px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            transition: "all 0.3s ease"
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = "rgba(0,0,0,0.9)";
                            e.target.style.transform = "scale(1.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = "rgba(0,0,0,0.7)";
                            e.target.style.transform = "scale(1)";
                          }}
                        >
                          <FaPlay style={{ 
                            color: "white", 
                            fontSize: "1.5rem",
                            marginLeft: "3px"
                          }} />
                        </button>
                        
                        {/* Durée en overlay */}
                        <div style={{
                          position: "absolute",
                          bottom: "10px",
                          right: "10px",
                          background: "rgba(0,0,0,0.8)",
                          color: "white",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          fontSize: "0.8rem"
                        }}>
                          {video.duree}
                        </div>
                      </div>

                      {/* Informations de la vidéo */}
                      <div style={{ padding: "15px" }}>
                        <h4 style={{
                          fontSize: "1.1rem",
                          fontWeight: "600",
                          color: "#1e293b",
                          margin: "0 0 8px 0"
                        }}>
                          {video.titre}
                        </h4>
                        
                        <p style={{
                          color: "#64748b",
                          fontSize: "0.9rem",
                          margin: "0 0 12px 0",
                          lineHeight: "1.4"
                        }}>
                          {video.description}
                        </p>
                        
                        {/* Métadonnées */}
                        <div style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          fontSize: "0.85rem",
                          color: "#64748b"
                        }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                              <FaEye /> {formatViews(video.vues)}
                            </span>
                            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                              <FaStar style={{ color: "#fbbf24" }} /> {video.note}
                            </span>
                          </div>
                          
                          <button
                            onClick={() => playVideo(video)}
                            style={{
                              background: matiere.color,
                              border: "none",
                              padding: "6px 12px",
                              borderRadius: "6px",
                              cursor: "pointer",
                              transition: "opacity 0.2s ease",
                              display: "flex",
                              alignItems: "center",
                              gap: "5px"
                            }}
                            onMouseEnter={(e) => e.target.style.opacity = "0.8"}
                            onMouseLeave={(e) => e.target.style.opacity = "1"}
                          >
                            <FaPlay style={{ color: "white", fontSize: "0.8rem" }} />
                            <span style={{ color: "white", fontSize: "0.9rem" }}>
                              Regarder
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Message si aucun résultat */}
      {filteredMatieres.length === 0 && (
        <div style={{
          textAlign: "center",
          padding: "40px",
          color: "#64748b"
        }}>
          <FaVideo style={{ fontSize: "3rem", marginBottom: "15px", opacity: 0.5 }} />
          <p style={{ fontSize: "1.1rem" }}>Aucune matière trouvée pour "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
}
