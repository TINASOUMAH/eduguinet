import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configuration du worker (à faire une seule fois, par exemple dans votre App.js)
pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString();

const chapitres = [
  { id: 1, title: "Nombres entiers et décimaux", pdfFile: "/upload/pdfs/1.pdf", color: "#fef3c7" },
  { id: 2, title: "Comparaison des nombres décimaux", pdfFile: "/upload/pdfs/2.pdf", color: "#fde2e2" },
  { id: 3, title: "Addition et soustraction", pdfFile: "/upload/pdfs/3.pdf", color: "#d1fae5" },
  { id: 4, title: "Multiplication et division", pdfFile: "/upload/pdfs/4.pdf", color: "#dbeafe" },
  { id: 5, title: "Fractions", pdfFile: "/upload/pdfs/5.pdf", color: "#fcd5ce" },
  { id: 6, title: "Proportionnalité", pdfFile: "/upload/pdfs/6.pdf", color: "#e0f2fe" },
  { id: 7, title: "Espace et géométrie", pdfFile: "/upload/pdfs/7.pdf", color: "#fde68a" },
  { id: 8, title: "Grandeurs et mesures", pdfFile: "/upload/pdfs/8.pdf", color: "#c7d2fe" },
  { id: 9, title: "Nombres décimaux relatifs", pdfFile: "/upload/pdfs/9.pdf", color: "#fbcfe8" },
];

export default function ChapitresPDF() {
  const [activeChapitre, setActiveChapitre] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [page, setPage] = useState(1);
  const [pageWidth, setPageWidth] = useState(800); // largeur du PDF
  const imageMatiere = "/image/sdfgh.jpg";

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

  // Résout correctement une ressource du dossier public, en tenant compte de BASE_URL
  const resolvePublicUrl = (path) => {
    const base = import.meta.env.BASE_URL || '/';
    const normalized = path.startsWith('/') ? path.slice(1) : path;
    return `${base}${normalized}`;
  };

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      {/* Affichage conditionnel : soit l'image + chapitres, soit seulement le contenu */}
      {!activeChapitre ? (
        <>
          {/* Image principale */}
          <div style={{ marginBottom: "20px" }}>
            <img
              src={imageMatiere}
              alt="Calcul 6ème"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </div>

          {/* Liste des chapitres en cartes */}
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
            {chapitres.map((chap) => (
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
      ) : (
        /* Contenu du chapitre sélectionné - SEULEMENT le contenu, pas d'image */
        <div
          style={{
            padding: "20px",
            background: "#f9fafb",
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
            minHeight: "80vh",
          }}
        >
          <h2 style={{ marginBottom: "10px", color: "#2563eb", fontSize: "28px" }}>
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
              <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
                ← Page précédente
              </button>
              <span>
                Page {page} / {numPages}
              </span>
              <button onClick={() => setPage((p) => Math.min(numPages, p + 1))} disabled={page === numPages}>
                Page suivante →
              </button>
            </div>
          )}

          {/* Bouton retour */}
          <button
            onClick={() => setActiveChapitre(null)}
            style={{
              marginTop: "25px",
              padding: "12px 20px",
              borderRadius: "8px",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            ← Retour aux chapitres
          </button>
        </div>
      )}
    </div>
  );
}
