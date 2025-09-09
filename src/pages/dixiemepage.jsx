import React, { useState } from 'react';
import "../style/styleNiveaux.css";
import { Link, Outlet } from 'react-router-dom';

export default function DixiemePage() {
  const [activeTab, setActiveTab] = useState("cours");

  const tabs = [
    { key: "cours", label: "📘 Mes cours", path: "cours" },
    { key: "pdf", label: "📄 PDF", path: "pdf" },
    { key: "formules", label: "📐 Formules & Méthodes", path: "cours" },
    { key: "exercices", label: "✍️ Exercices", path: "cours" },
    { key: "anciens", label: "📚 Anciens Sujets", path: "cours" },
    { key: "quiz", label: "❓ Quiz", path: "cours" },
    { key: "video", label: "🎥 Vidéo", path: "cours" },
  ];

  return (
    <div className='contenairSix'>
      <nav className="nvx-side-nav">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`nvx-side-item ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            <Link to={tab.path}>
              {tab.label}
            </Link>
          </button>
        ))}
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
