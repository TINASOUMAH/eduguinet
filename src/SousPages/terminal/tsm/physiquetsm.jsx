import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configuration du worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString();

// Chapitres de Physique TSM
const chapitresPhysiqueTSM = [
  {
    id: 1,
    title: "Mécanique classique",
    contenu:
      "Cinématique, dynamique, lois de Newton et applications aux mouvements.",
    pdfFile: "/upload/pdfs/tsm/physique1.pdf",
    color: "#fef3c7",
  },
  {
    id: 2,
    title: "Thermodynamique",
    contenu:
      "Principes de thermodynamique, machines thermiques et transferts de chaleur.",
    pdfFile: "/upload/pdfs/tsm/physique2.pdf",
    color: "#fde2e2",
  },
  {
    id: 3,
    title: "Électromagnétisme",
    contenu:
      "Champs électriques et magnétiques, lois de Maxwell et ondes électromagnétiques.",
    pdfFile: "/upload/pdfs/tsm/physique3.pdf",
    color: "#d1fae5",
  },
  {
    id: 4,
    title: "Optique",
    contenu:
      "Optique géométrique et ondulatoire, interférences et diffraction.",
    pdfFile: "/upload/pdfs/tsm/physique4.pdf",
    color: "#dbeafe",
  },
  {
    id: 5,
    title: "Physique moderne",
    contenu:
      "Relativité restreinte, physique quantique et structure de l'atome.",
    pdfFile: "/upload/pdfs/tsm/physique5.pdf",
    color: "#fbcfe8",
  },
  {
    id: 6,
    title: "Oscillations et ondes",
    contenu:
      "Oscillateurs harmoniques, ondes mécaniques et acoustique.",
    pdfFile: "/upload/pdfs/tsm/physique6.pdf",
    color: "#c7d2fe",
  },
];

export default function PhysiqueTSM() {
  const [activeChapitre, setActiveChapitre] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [page, setPage] = useState(1);
  const [pageWidth, setPageWidth] = useState(800);
  const imageMatiere = "/image/physique_tsm.jpg";

  // Mettre à jour la largeur du PDF quand la fenêtre change
  useEffect(() => {
    const handleResize = () => setPageWidth(Math.min(800, window.innerWidth * 0.9));
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPage(1);
  };

  const onDocumentLoadError = (error) => {
    console.error("Erreur de chargement du PDF:", error);
  };

  // Résout correctement une ressource du dossier public
  const resolvePublicUrl = (path) => {
    const base = import.meta.env.BASE_URL || '/';
    const normalized = path.startsWith('/') ? path.slice(1) : path;
    return `${base}${normalized}`;
  };

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      {/* Image principale */}
      <div style={{ marginBottom: "20px" }}>
        <img
          src={imageMatiere}
          alt="Physique TSM"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      </div>

      {/* Liste des chapitres en cartes - seulement si aucun chapitre sélectionné */}
      {!activeChapitre && (
        <>
          <h3
            style={{
              marginBottom: "15px",
              color: "#334155",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Choisis le chapitre que tu veux réviser...
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {chapitresPhysiqueTSM.map((chap) => (
              <div
                key={chap.id}
                onClick={() => setActiveChapitre(chap)}
                style={{
                  cursor: "pointer",
                  padding: "20px",
                  borderRadius: "12px",
                  backgroundColor: chap.color,
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform =
                    "translateY(-4px) scale(1.02)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0) scale(1)")
                }
              >
                <h4
                  style={{
                    fontSize: "13px",
                    color: "#64748b",
                    marginBottom: "6px",
                  }}
                >
                  CHAPITRE {chap.id}
                </h4>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#0f172a",
                  }}
                >
                  {chap.title}
                </h3>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Contenu du chapitre sélectionné */}
      {activeChapitre && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            background: "#f9fafb",
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
            minHeight: "80vh",
          }}
        >
          <h2 style={{ marginBottom: "20px", color: "#2563eb", fontSize: "28px" }}>
            {activeChapitre.title}
          </h2>
          
          {/* Affichage du PDF */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Document
              key={activeChapitre?.id}
              file={activeChapitre ? resolvePublicUrl(activeChapitre.pdfFile) : null}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading="Chargement du PDF..."
              error={<div>Impossible de charger le PDF. Assurez-vous que le fichier existe: {activeChapitre ? activeChapitre.pdfFile : ''}</div>}
            >
              <Page pageNumber={page} width={pageWidth} />
            </Document>
          </div>

          {/* Pagination */}
          {numPages && numPages > 1 && (
            <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "10px" }}>
              <button 
                onClick={() => setPage((p) => Math.max(1, p - 1))} 
                disabled={page === 1}
                style={{
                  padding: "8px 16px",
                  borderRadius: "6px",
                  background: page === 1 ? "#e5e7eb" : "#3b82f6",
                  color: page === 1 ? "#9ca3af" : "#fff",
                  border: "none",
                  cursor: page === 1 ? "not-allowed" : "pointer",
                }}
              >
                ← Page précédente
              </button>
              <span style={{ padding: "8px 16px", alignSelf: "center" }}>
                Page {page} / {numPages}
              </span>
              <button 
                onClick={() => setPage((p) => Math.min(numPages, p + 1))} 
                disabled={page === numPages}
                style={{
                  padding: "8px 16px",
                  borderRadius: "6px",
                  background: page === numPages ? "#e5e7eb" : "#3b82f6",
                  color: page === numPages ? "#9ca3af" : "#fff",
                  border: "none",
                  cursor: page === numPages ? "not-allowed" : "pointer",
                }}
              >
                Page suivante →
              </button>
            </div>
          )}

          {/* Boutons de navigation */}
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            <button
              onClick={() => setActiveChapitre(null)}
              style={{
                padding: "12px 24px",
                borderRadius: "8px",
                background: "#3b82f6",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              ← Retour aux chapitres
            </button>
            <button
              onClick={() => window.history.back()}
              style={{
                padding: "12px 24px",
                borderRadius: "8px",
                background: "#059669",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              ← Retour aux matières
            </button>
          </div>
        </div>
      )}
    </div>
  );
}