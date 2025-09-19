import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configuration du worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString();

// Chapitres Activité Numérique TSM
const chapitresNumerique = [
  {
    id: 1,
    title: "Analyse - Fonctions",
    contenu:
      "Étude des fonctions, limites, dérivées et primitives. Applications aux fonctions exponentielles et logarithmiques.",
    pdfFile: "/upload/pdfs/tsm/math1.pdf",
    color: "#fef3c7",
  },
  {
    id: 2,
    title: "Algèbre linéaire",
    contenu:
      "Matrices, déterminants, systèmes d'équations linéaires et espaces vectoriels.",
    pdfFile: "/upload/pdfs/tsm/math2.pdf",
    color: "#fde2e2",
  },
  {
    id: 3,
    title: "Probabilités et statistiques",
    contenu:
      "Calcul des probabilités, variables aléatoires, lois de probabilité et statistiques descriptives.",
    pdfFile: "/upload/pdfs/tsm/math4.pdf",
    color: "#dbeafe",
  },
  {
    id: 4,
    title: "Suites et séries",
    contenu:
      "Suites arithmétiques et géométriques, convergence, séries numériques et applications.",
    pdfFile: "/upload/pdfs/tsm/math5.pdf",
    color: "#fbcfe8",
  },
  {
    id: 5,
    title: "Équations différentielles",
    contenu:
      "Résolution d'équations différentielles du premier et second ordre, applications physiques.",
    pdfFile: "/upload/pdfs/tsm/math6.pdf",
    color: "#c7d2fe",
  },
  {
    id: 6,
    title: "Analyse numérique",
    contenu:
      "Méthodes numériques, approximations et résolution numérique d'équations.",
    pdfFile: "/upload/pdfs/tsm/math7.pdf",
    color: "#e0f2fe",
  },
];

// Chapitres Activité Géométrique TSM
const chapitresGeometrie = [
  {
    id: 1,
    title: "Géométrie analytique",
    contenu:
      "Géométrie dans l'espace, équations de droites et de plans, produit scalaire et vectoriel.",
    pdfFile: "/upload/pdfs/tsm/math3.pdf",
    color: "#d1fae5",
  },
  {
    id: 2,
    title: "Géométrie vectorielle",
    contenu:
      "Vecteurs dans l'espace, bases orthonormées et transformations vectorielles.",
    pdfFile: "/upload/pdfs/tsm/geo1.pdf",
    color: "#fef9c3",
  },
  {
    id: 3,
    title: "Transformations géométriques",
    contenu:
      "Rotations, translations, homothéties et leurs applications.",
    pdfFile: "/upload/pdfs/tsm/geo2.pdf",
    color: "#bbf7d0",
  },
  {
    id: 4,
    title: "Géométrie des courbes",
    contenu:
      "Courbes paramétriques, coniques et leurs propriétés géométriques.",
    pdfFile: "/upload/pdfs/tsm/geo3.pdf",
    color: "#fde68a",
  },
  {
    id: 5,
    title: "Géométrie des surfaces",
    contenu:
      "Surfaces dans l'espace, calculs de volumes et d'aires.",
    pdfFile: "/upload/pdfs/tsm/geo4.pdf",
    color: "#fcd5ce",
  },
  {
    id: 6,
    title: "Géométrie projective",
    contenu:
      "Projections, perspectives et applications en géométrie descriptive.",
    pdfFile: "/upload/pdfs/tsm/geo5.pdf",
    color: "#ede9fe",
  },
];

export default function MathTSM() {
  const [activeTab, setActiveTab] = useState("numerique");
  const [activeChapitre, setActiveChapitre] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [page, setPage] = useState(1);
  const [pageWidth, setPageWidth] = useState(800);

  const images = {
    numerique: "/image/terminal_numerique.jpg",
    geometrie: "/image/terminal_geometrie.jpg",
  };

  const currentChapitres =
    activeTab === "numerique" ? chapitresNumerique : activeTab === "geometrie" ? chapitresGeometrie : [];

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
    <div style={{ width: "95%", maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
      
      {/* Affichage conditionnel : soit l'interface complète, soit seulement le contenu */}
      {!activeChapitre ? (
        <>
          {/* Boutons Activités */}
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px" }}>
            <button
              onClick={() => { setActiveTab("numerique"); setActiveChapitre(null); }}
              style={{
                padding: "12px 20px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                background: activeTab === "numerique" ? "#2563eb" : "#e5e7eb",
                color: activeTab === "numerique" ? "#fff" : "#1f2937",
                fontWeight: "600",
              }}
            >
              Activité Numérique
            </button>
            <button
              onClick={() => { setActiveTab("geometrie"); setActiveChapitre(null); }}
              style={{
                padding: "12px 20px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                background: activeTab === "geometrie" ? "#2563eb" : "#e5e7eb",
                color: activeTab === "geometrie" ? "#fff" : "#1f2937",
                fontWeight: "600",
              }}
            >
              Activité Géométrique
            </button>
          </div>

          {/* Image en dessous des boutons */}
          <div style={{ marginBottom: "30px" }}>
            <img
              src={images[activeTab]}
              alt={activeTab === "numerique" ? "Activité Numérique" : "Activité Géométrique"}
              style={{
                width: "100%",
                height: "570px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </div>

          {/* Liste chapitres */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {currentChapitres.map((chap) => (
              <div
                key={chap.id}
                onClick={() => setActiveChapitre(chap)}
                style={{
                  cursor: "pointer",
                  padding: "20px",
                  minHeight: "150px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  borderRadius: "12px",
                  backgroundColor: chap.color,
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-4px) scale(1.02)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0) scale(1)")
                }
              >
                <h4 style={{ fontSize: "13px", color: "#64748b", marginBottom: "6px" }}>
                  CHAPITRE {chap.id}
                </h4>
                <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#0f172a" }}>
                  {chap.title}
                </h3>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Contenu du chapitre sélectionné - SEULEMENT le contenu, pas d'image ni boutons */
        <div
          style={{
            padding: "30px",
            background: "#f9fafb",
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
            minHeight: "80vh",
          }}
        >
          <h1 style={{ marginBottom: "25px", color: "#2563eb", fontSize: "28px", fontWeight: "700" }}>
            {activeChapitre.title}
          </h1>
          
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
