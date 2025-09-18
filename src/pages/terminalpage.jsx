import React, { useState } from 'react';
import "../style/styleNiveaux.css";
import { Link, Outlet } from 'react-router-dom';
import { BookOpen, FileText, Ruler, Pencil, Archive, HelpCircle, Video } from "lucide-react";

export default function Terminalpage() {
  const [activeTab, setActiveTab] = useState("cours");

  const tabs = [
    { key: "cours", label: "Mes cours", path: "", icon: BookOpen, color: "#2563eb" },       // bleu
    { key: "pdf", label: "PDF", path: "pdf", icon: FileText, color: "#dc2626" },                 // rouge
    { key: "formules", label: "Formules & Méthodes", path: "formules", icon: Ruler, color: "#16a34a" }, // vert
    { key: "exercices", label: "Exercices", path: "exercices", icon: Pencil, color: "#f59e0b" },  // orange
    { key: "anciens", label: "Anciens Sujets", path: "anciens", icon: Archive, color: "#7c3aed" }, // violet
    { key: "quiz", label: "Quiz", path: "quiz", icon: HelpCircle, color: "#e11d48" },           // rose
    { key: "video", label: "Vidéo", path: "video", icon: Video, color: "#0ea5e9" },             // cyan
  ];

  return (
    <div className="contenairTerminale" style={{ display: "flex", minHeight: "100vh" }}>
      {/* Side Navigation */}
      <nav className="nvx-side-nav" style={{ width: "220px", background: "#f8fafc", padding: "20px", boxShadow: "2px 0 5px rgba(0,0,0,0.05)" }}>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;

          return (
            <Link
              to={tab.path}
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`nvx-side-item ${isActive ? "active" : ""}`}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 16px",
                marginBottom: "10px",
                borderRadius: "10px",
                textDecoration: "none",
                color: isActive ? "#fff" : "#334155",
                background: isActive ? tab.color : "transparent",
                transition: "all 0.3s",
              }}
            >
              <Icon
                strokeWidth={2.2}
                color={isActive ? "#fff" : tab.color}
                style={{ marginRight: "12px" }}
              />
              <span style={{ fontWeight: 500 }}>{tab.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "30px", background: "#f1f5f9" }}>
        <Outlet />
      </main>
    </div>
  );
}




