import React, { useState } from 'react';
import "../style/styleNiveaux.css";
import { Link, Outlet } from 'react-router-dom';
import { BookOpen, FileText, Ruler, Pencil, Archive, HelpCircle, Video } from "lucide-react";

function SixPage() {
  const [activeTab, setActiveTab] = useState("cours");

  const tabs = [
    { key: "cours", label: "Mes cours", path: "cours", icon: BookOpen },
    { key: "pdf", label: "PDF", path: "pdf", icon: FileText },
    { key: "formules", label: "Formules & Méthodes", path: "formules", icon: Ruler },
    { key: "exercice", label: "Exercices", path: "exercice", icon: Pencil },
    { key: "anciens", label: "Anciens Sujets", path: "anciens", icon: Archive },
    { key: "quiz", label: "Quiz", path: "quiz", icon: HelpCircle },
    { key: "video", label: "Vidéo", path: "video", icon: Video },
  ];

  return (
    <div className='contenairSix'>
      <nav className="nvx-side-nav">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.key}
              data-key={tab.key}
              className={`nvx-side-item ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              <Link to={tab.path} className="nvx-link">
                <Icon className="nvx-icon" strokeWidth={2.2} />
                <span>{tab.label}</span>
              </Link>
            </button>
          );
        })}
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default SixPage;
