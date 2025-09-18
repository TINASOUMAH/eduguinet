import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";


export default function Terminal() {
  const { level, option } = useParams();
  const normalizedLevel = level ? level.toLowerCase() : "";

  const [activeTab, setActiveTab] = useState(null);

  const subjectsByLevel = {
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

  // 🔥 Récupération des items selon niveau et option
  let items;
  if (normalizedLevel === "terminale") {
    if (option) {
      items = subjectsByLevel[`terminale-${option.toLowerCase()}`];
    } else {
      items = terminaleOptions;
    }
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
      <main className="nvx-content">
        {items.map((it) => (
          <Link
            key={it.slug}
            className="nvx-card"
            to={
              normalizedLevel === "terminale" && option
                ? `/niveaux/terminale/${option}/${it.slug}`
                : `/niveaux/terminale/${it.slug}`
            }
          >
            <div className="nvx-card-icon">{it.icon}</div>
            <div className="nvx-card-text">
              <h3>{it.label}</h3>
              <p>{it.description}</p>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}
