import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams, useNavigate } from 'react-router-dom';
import "../../style/terminal.css";
import CoursTSM from './CoursTSM';
import CoursTSE from './CoursTSE';
import CoursTSS from './CoursTSS';

export default function Terminales() {
  const { level } = useParams();
  const navigate = useNavigate();
  
  const normalizedLevel = level ? level.toLowerCase() : "terminale";

  const [activeOption, setActiveOption] = useState(null);
  const [showMenu, setShowMenu] = useState(true);
  
  useEffect(() => {
    setShowMenu(true);
  }, []);
  // Options Termiale
  const terminaleOptions = [
    { icon: "📐", label: "TSM", slug: "tsm" },
    { icon: "🔬", label: "TSE", slug: "tse" },
    { icon: "⚖️", label: "TSS", slug: "tss" },
  ];

  const isTerminale = normalizedLevel === "terminale";

  return (
    <div className="nvx-content" style={{ padding: '20px' }}>
      {/* Menu de sélection des options - affiché seulement si showMenu est true */}
      {isTerminale && showMenu && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '70vh',
          textAlign: 'center'
        }}>
          <div>
            <header style={{ marginBottom: '40px' }}>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '15px', color: '#1e293b' }}>🎓 Bienvenue en Terminale !</h1>
              <p style={{ fontSize: '1.2rem', color: '#64748b' }}>👉 Choisis ton option pour continuer.</p>
            </header>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center',
              gap: '30px',
              flexWrap: 'wrap'
            }}>
              {terminaleOptions.map(opt => (
                <button 
                  key={opt.slug}
                  className={`btn ${activeOption === opt.slug ? "active-option" : ""}`}
                  onClick={() => {
                    setActiveOption(opt.slug);
                    setShowMenu(false);
                  }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '50px 40px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    borderRadius: '20px',
                    color: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                    minWidth: '200px',
                    minHeight: '180px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-5px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                  }}
                >
                  <span style={{ fontSize: '4rem', marginBottom: '20px' }}>{opt.icon}</span>
                  <span style={{ fontSize: '1.4rem' }}>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Affichage conditionnel du contenu */}
      {!showMenu && (
        <div className="content-area">
          {activeOption === 'tsm' && <CoursTSM />}
          {activeOption === 'tse' && <CoursTSE />}
          {activeOption === 'tss' && <CoursTSS />}
          
          {/* Bouton retour vers le menu des options - en bas */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            marginTop: '40px',
            paddingBottom: '20px'
          }}>
            <button 
              onClick={() => {
                setShowMenu(true);
                setActiveOption(null);
              }}
              style={{
                padding: '15px 30px',
                background: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: '600',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#5a67d8';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#667eea';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              ⬅ Retour aux options
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
