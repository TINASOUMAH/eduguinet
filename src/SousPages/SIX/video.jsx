import React, { useState, useEffect } from "react";

const videoData = [
  { id: 1, matiere: "Français", videos: [
      { id: 1, title: "Lecture et compréhension", file: "/videos/francais_lecture.mp4" },
      { id: 2, title: "Grammaire", file: "/videos/francais_grammaire.mp4" },
    ]},
  { id: 2, matiere: "Calcul", videos: [
      { id: 1, title: "Nombres entiers", file: "/videos/math_nombres.mp4" },
      { id: 2, title: "Fractions", file: "/videos/math_fractions.mp4" },
    ]},
  { id: 3, matiere: "Science d'observation", videos: [
      { id: 1, title: "Physique", file: "/videos/sciences_physique.mp4" },
      { id: 2, title: "Chimie", file: "/videos/sciences_chimie.mp4" },
    ]},
  { id: 4, matiere: "Histoire", videos: [
      { id: 1, title: "Histoire ancienne", file: "/videos/histoire_ancienne.mp4" },
      { id: 2, title: "Histoire moderne", file: "/videos/histoire_moderne.mp4" },
    ]},
  { id: 5, matiere: "Géographie", videos: [
      { id: 1, title: "Relief et climat", file: "/videos/geographie_relief.mp4" },
      { id: 2, title: "Pays et continents", file: "/videos/geographie_pays.mp4" },
    ]},
];

export default function VideoPage() {
  const [selectedMatiere, setSelectedMatiere] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    if (selectedMatiere) {
      const videos = videoData.find(v => v.matiere === selectedMatiere)?.videos || [];
      setCurrentVideo(videos[0] || null);
    }
  }, [selectedMatiere]);

  const filteredVideos = selectedMatiere
    ? videoData.find(v => v.matiere === selectedMatiere)?.videos || []
    : [];

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: "#f0f2f5", minHeight: "100vh" }}>
      
      {/* Barre de sélection horizontale */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        gap: "15px",
        flexWrap: "wrap",
        backgroundColor: "#1f1f2e",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}>
        {videoData.map(m => (
          <button
            key={m.id}
            onClick={() => setSelectedMatiere(m.matiere)}
            style={{
              padding: "10px 20px",
              borderRadius: "30px",
              border: "none",
              fontWeight: "600",
              cursor: "pointer",
              color: selectedMatiere === m.matiere ? "#fff" : "#ccc",
              background: selectedMatiere === m.matiere ? "linear-gradient(135deg,#6C63FF,#574bde)" : "#2c2c3f",
              boxShadow: selectedMatiere === m.matiere ? "0 4px 12px rgba(108,99,255,0.4)" : "none",
              transition: "all 0.3s"
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px) scale(1.05)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0) scale(1)"}
          >
            {m.matiere}
          </button>
        ))}
      </div>

      {/* Contenu principal */}
      <div style={{ padding: "30px", maxWidth: "1000px", margin: "0 auto" }}>
        {!selectedMatiere ? (
          <h2 style={{ textAlign: "center", color: "#333", marginTop: "100px" }}>Sélectionnez une matière pour voir les vidéos</h2>
        ) : (
          <>
            {/* Vidéo principale */}
            {currentVideo && (
              <div style={{
                borderRadius: "15px",
                padding: "20px",
                backgroundColor: "#fff",
                marginBottom: "30px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                textAlign: "center"
              }}>
                <h3 style={{ color: "#6C63FF", marginBottom: "15px", fontWeight: "600" }}>{currentVideo.title}</h3>
                <video
                  controls
                  autoPlay
                  style={{ width: "100%", borderRadius: "12px", boxShadow: "0 6px 20px rgba(0,0,0,0.05)" }}
                >
                  <source src={currentVideo.file} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture vidéo.
                </video>
                <button style={{
                  marginTop: "15px",
                  padding: "10px 25px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: "#6C63FF",
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "all 0.3s"
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "#574bde"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "#6C63FF"}
                >
                  Regarder
                </button>
              </div>
            )}

            {/* Miniatures des autres vidéos */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
              {filteredVideos.map(video => (
                <div
                  key={video.id}
                  onClick={() => setCurrentVideo(video)}
                  style={{
                    borderRadius: "15px",
                    overflow: "hidden",
                    cursor: "pointer",
                    boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
                    transition: "all 0.3s"
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px) scale(1.05)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0) scale(1)"}
                >
                  <video
                    style={{ width: "100%", borderRadius: "12px" }}
                    muted
                  >
                    <source src={video.file} type="video/mp4" />
                  </video>
                  <h4 style={{ margin: "8px 0", padding: "5px 0", backgroundColor: "#f4f6f8", textAlign: "center", fontWeight: "600", color: "#6C63FF" }}>
                    {video.title}
                  </h4>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
