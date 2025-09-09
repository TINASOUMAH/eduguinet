import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../style/styleNiveaux.css";
import chimie from "../data/10eme/chimie.Js";

export default function Niveaux() {
  const { level, option } = useParams();
  const normalizedLevel = level ? level.toLowerCase() : "";

  const [activeTab, setActiveTab] = useState("cours");
  const [selectedSubject, setSelectedSubject] = useState(null);

  // 🔥 Fonction pour créer un slug propre
  const slugify = (s) =>
    s
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-");

  const subjectsByLevel = {
    "6eme": [
      { slug: "calcul", icon: "➕", label: "Calcul", description: "Apprends les bases des opérations et du calcul mental." },
      { slug: "francais", icon: "FR", label: "Français", description: "Grammaire, conjugaison et lecture." },
      { slug: "geographie", icon: "🧪", label: "Géographie", description: "Découverte des pays, continents et paysages." },
      { slug: "histoire", icon: "🌍", label: "Histoire", description: "Événements historiques et civilisations." },
      { slug: "science-observation", icon: "🧬", label: "Science d'observation", description: "Expériences pour comprendre la nature." },
      { slug: "ecm", icon: "🇬🇧", label: "ECM", description: "Éducation civique et morale." },
    ],
    "10eme": [
      { slug: "maths", icon: "➕", label: "Mathématiques", description: "Science des nombres, des formes et des structures." },
      { slug: "physique", icon: "🧪", label: "Physique", description: "Forces, électricité, énergie et mécanique." },
      { slug: "chimie", icon: "🧬", label: "Chimie", description: "Composition, structure et propriétés de la matière." },
      { slug: "francais", icon: "FR", label: "Français", description: "Rédaction, littérature et grammaire approfondie." },
      { slug: "geographie", icon: "🌍", label: "Géographie", description: "Territoires, climat et ressources." },
      { slug: "histoire", icon: "📖", label: "Histoire", description: "Étude des événements passés et leur impact." },
      { slug: "biologie", icon: "🌿", label: "Biologie", description: "Science des êtres vivants et de leur environnement." },
      { slug: "ecm", icon: "🇬🇧", label: "ECM", description: "Valeurs civiques et éthiques." },
    ],
    "terminale-tsm": [
      { slug: "maths", icon: "➕", label: "Mathématiques", description: "Analyse, algèbre et fonctions avancées." },
      { slug: "histoire", icon: "🌍", label: "Histoire", description: "Histoire contemporaine et générale." },
      { slug: "physique", icon: "🧪", label: "Physique", description: "Mécanique, électricité, optique et thermodynamique." },
      { slug: "francais", icon: "FR", label: "Français", description: "Littérature, rédaction et expression écrite." },
      { slug: "eco", icon: "💰", label: "Économie", description: "Principes économiques de base, marchés et gestion." },
      { slug: "anglais", icon: "🇬🇧", label: "Anglais", description: "Grammaire avancée et expression écrite." },
    ],
    "terminale-tse": [
      { slug: "chimie", icon: "🧬", label: "Chimie", description: "Structure de la matière et réactions chimiques." },
      { slug: "biologie", icon: "🧪", label: "Biologie", description: "Cellules, génétique, écologie et biologie humaine." },
      { slug: "maths", icon: "➕", label: "Mathématiques", description: "Algèbre et analyse pour les sciences expérimentales." },
      { slug: "physique", icon: "⚡", label: "Physique", description: "Électricité, mécanique et énergie." },
      { slug: "anglais", icon: "🇬🇧", label: "Anglais", description: "Grammaire et compréhension scientifique." },
      { slug: "geologie", icon: "🪨", label: "Géologie", description: "Étude de la Terre et phénomènes géologiques." },
    ],
    "terminale-tss": [
      { slug: "eco", icon: "⚖️", label: "Économie", description: "Microéconomie, macroéconomie et marchés." },
      { slug: "francais", icon: "FR", label: "Français", description: "Littérature et expression écrite." },
      { slug: "histoire", icon: "🌍", label: "Histoire", description: "Histoire politique et sociale." },
      { slug: "geographie", icon: "🌿", label: "Géographie", description: "Territoires et ressources naturelles." },
      { slug: "maths", icon: "📊", label: "Mathématiques", description: "Statistiques et probabilités appliquées." },
      { slug: "anglais", icon: "🇬🇧", label: "Anglais", description: "Expression et compréhension en contexte social." },
    ],
  };

  const terminaleOptions = [
    { icon: "📐", label: "TSM", slug: "tsm" },
    { icon: "🔬", label: "TSE", slug: "tse" },
    { icon: "⚖️", label: "TSS", slug: "tss" },
  ];

  // 🔥 Récupération des items selon niveau
  let items;
  if (normalizedLevel === "terminale") {
    if (option) {
      items = subjectsByLevel[`terminale-${option.toLowerCase()}`];
    } else {
      items = terminaleOptions;
    }
  } else {
    items = subjectsByLevel[normalizedLevel];
  }

  if (!items) {
    return (
      <div className="nvx-wrapper">
        <main className="nvx-content">
          <h1 className="nvx-title">Niveau introuvable</h1>
        </main>
      </div>
    );
  }

  return (
    <div className="nvx-wrapper">
      {/* Sidebar gauche */}
      <aside className="nvx-sidebar">
        <div className="nvx-classname">
          Classe de{" "}
          {normalizedLevel === "6eme"
            ? "6ème"
            : normalizedLevel === "10eme"
            ? "10ème"
            : option
            ? `Terminale ${option.toUpperCase()}`
            : "Terminale"}
        </div>

        <nav className="nvx-side-nav">
          {[
            { key: "cours", label: "📘 Mes cours" },
            { key: "pdf", label: "📄 PDF" },
            { key: "formules", label: "📐 Formules & Méthodes" },
            { key: "exercices", label: "✍️ Exercices" },
            { key: "anciens", label: "📚 Anciens Sujets" },
            { key: "quiz", label: "❓ Quiz" },
            { key: "video", label: "🎥 Vidéo" },
          ].map((tab) => (
            <button
              key={tab.key}
              className={`nvx-side-item ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Contenu principal */}
      <main className="nvx-content">
        <h1 className="nvx-title">
          {normalizedLevel === "terminale"
            ? option
              ? "Choisis une matière"
              : "Choisis ton option"
            : `Matières pour la ${normalizedLevel === "6eme" ? "6ème" : "10ème"}`}
        </h1>

        <div className="nvx-grid">
          {items.map((it) => {
            // 🔹 Cas Terminale sans option
            if (normalizedLevel === "terminale" && !option) {
              return (
                <Link
                  key={it.slug}
                  className="nvx-card"
                  to={`/niveaux/terminale/${it.slug}`}
                >
                  <div className="nvx-card-icon">{it.icon}</div>
                  <div className="nvx-card-text">
                    <h3>{it.label}</h3>
                  </div>
                </Link>
              );
            }

            // 🔹 Cas Terminale avec option
            if (normalizedLevel === "terminale" && option) {
              return (
                <Link
                  key={it.slug}
                  className="nvx-card"
                  to={`/niveaux/terminale/${option}/${it.slug}`}
                >
                  <div className="nvx-card-icon">{it.icon}</div>
                  <div className="nvx-card-text">
                    <h3>{it.label}</h3>
                    <p>{it.description}</p>
                  </div>
                </Link>
              );
            }

            // 🔹 Cas 6ème et 10ème
            return (
              <Link
                key={it.slug}
                className="nvx-card"
                to={`/niveaux/${normalizedLevel}/${it.slug}`}
              >
                <div className="nvx-card-icon">{it.icon}</div>
                <div className="nvx-card-text">
                  <h3>{it.label}</h3>
                  {it.description && <p>{it.description}</p>}
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
