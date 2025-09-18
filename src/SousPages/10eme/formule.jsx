import React, { useState } from 'react';

export default function Formules10eme() {
  const [activeTab, setActiveTab] = useState({});

  // Données adaptées pour Math, Physique, Chimie
  const matieres = [
    {
      id: 1,
      title: "Mathématiques",
      definition: "Formules et méthodes pour les nombres, fractions, pourcentages, puissances et géométrie.",
      properties: [
        { name: "Nombres entiers et décimaux", example: "Addition, soustraction, multiplication, division" },
        { name: "Fractions", example: "a/b + c/d = (ad + bc)/bd\n a/b × c/d = (a×c)/(b×d)" },
        { name: "Pourcentages", example: "P% de N = N × P/100" },
        { name: "Puissances", example: "aⁿ × aᵐ = aⁿ⁺ᵐ" },
        { name: "Géométrie", example: "Aire rectangle: L×l, Volume cube: côté³" }
      ],
      methods: [
        "Identifier les nombres et les opérations.",
        "Appliquer la propriété adaptée (commutativité, distributivité...).",
        "Effectuer le calcul final."
      ],
      color: "#2563eb"
    },
    {
      id: 2,
      title: "Physique",
      definition: "Formules et méthodes pour vitesse, force, pression et énergie.",
      properties: [
        { name: "Vitesse", example: "v = d / t" },
        { name: "Force", example: "F = m × a" },
        { name: "Pression", example: "P = F / S" },
        { name: "Énergie cinétique", example: "Eₖ = 1/2 × m × v²" }
      ],
      methods: [
        "Identifier les données connues (distance, temps, masse, force, surface...).",
        "Appliquer la formule correspondante.",
        "Calculer le résultat en unités correctes."
      ],
      color: "#ef4444"
    },
    {
      id: 3,
      title: "Chimie",
      definition: "Formules et méthodes pour concentration, masse molaire et réactions chimiques.",
      properties: [
        { name: "Concentration", example: "C = n / V" },
        { name: "Masse molaire", example: "M = m / n" },
        { name: "Réaction chimique", example: "Respecter la stœchiométrie et équilibrer l’équation" }
      ],
      methods: [
        "Identifier les quantités et volumes.",
        "Appliquer la formule correspondante pour concentration ou masse molaire.",
        "Vérifier l’équilibre de la réaction et le résultat final."
      ],
      color: "#16a34a"
    }
  ];

  const handleTabChange = (matiereId, tab) => {
    setActiveTab(prev => ({
      ...prev,
      [matiereId]: tab
    }));
  };

  const getActiveTab = (matiereId) => activeTab[matiereId] || 'formules';

  return (
    <div style={{ width: '95%', margin: '0 auto', fontFamily: "'Inter', sans-serif", marginTop: '50px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '36px', color: '#1e293b', marginBottom: '50px', fontWeight: '700', letterSpacing: '1px' }}>
        Formules et Méthodes – Classe 10ᵉ
      </h2>

      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px' }}>
        {matieres.map((matiere) => (
          <div
            key={matiere.id}
            style={{
              flex: '1 1 48%',
              minWidth: '350px',
              background: '#fff',
              borderRadius: '25px',
              padding: '0',
              boxShadow: `0 10px 25px rgba(0,0,0,0.08)`,
              borderTop: `6px solid ${matiere.color}`,
              transition: 'all 0.4s ease',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => { 
              e.currentTarget.style.transform = 'translateY(-5px)'; 
              e.currentTarget.style.boxShadow = '0 20px 35px rgba(0,0,0,0.15)'; 
            }}
            onMouseLeave={(e) => { 
              e.currentTarget.style.transform = 'translateY(0)'; 
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.08)'; 
            }}
          >
            <div style={{ padding: '30px 30px 20px 30px' }}>
              <h3 style={{ marginBottom: '15px', fontSize: '22px', fontWeight: '700', color: matiere.color }}>
                {matiere.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#334155', marginBottom: '0', lineHeight: '1.5' }}>
                {matiere.definition}
              </p>
            </div>

            <div style={{ display: 'flex', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}>
              <button
                onClick={() => handleTabChange(matiere.id, 'formules')}
                style={{
                  flex: 1,
                  padding: '15px 20px',
                  border: 'none',
                  background: getActiveTab(matiere.id) === 'formules' ? '#fff' : 'transparent',
                  color: getActiveTab(matiere.id) === 'formules' ? matiere.color : '#64748b',
                  fontWeight: getActiveTab(matiere.id) === 'formules' ? '600' : '500',
                  fontSize: '14px',
                  cursor: 'pointer',
                  borderBottom: getActiveTab(matiere.id) === 'formules' ? `3px solid ${matiere.color}` : '3px solid transparent',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                📊 Formules
              </button>
              <button
                onClick={() => handleTabChange(matiere.id, 'methodes')}
                style={{
                  flex: 1,
                  padding: '15px 20px',
                  border: 'none',
                  background: getActiveTab(matiere.id) === 'methodes' ? '#fff' : 'transparent',
                  color: getActiveTab(matiere.id) === 'methodes' ? matiere.color : '#64748b',
                  fontWeight: getActiveTab(matiere.id) === 'methodes' ? '600' : '500',
                  fontSize: '14px',
                  cursor: 'pointer',
                  borderBottom: getActiveTab(matiere.id) === 'methodes' ? `3px solid ${matiere.color}` : '3px solid transparent',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                🔧 Méthodes
              </button>
            </div>

            <div style={{ padding: '25px 30px 30px 30px', minHeight: '250px' }}>
              {getActiveTab(matiere.id) === 'formules' ? (
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '600', color: matiere.color, marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    📐 Propriétés et Formules
                  </h4>
                  <ul style={{ paddingLeft: '0', listStyle: 'none', fontSize: '14px', lineHeight: '1.8' }}>
                    {matiere.properties.map((prop, i) => (
                      <li key={i} style={{ marginBottom: '12px', padding: '12px 15px', backgroundColor: '#f8fafc', borderRadius: '10px', borderLeft: `4px solid ${matiere.color}` }}>
                        <strong style={{ color: matiere.color }}>{prop.name} :</strong>
                        <br />
                        <code style={{ backgroundColor: '#fff', padding: '4px 8px', borderRadius: '5px', fontSize: '13px', color: '#334155', marginTop: '5px', display: 'inline-block', whiteSpace: 'pre-line' }}>
                          {prop.example}
                        </code>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '600', color: matiere.color, marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    📝 Méthode et Étapes
                  </h4>
                  <ol style={{ paddingLeft: '0', listStyle: 'none', color: '#475569', fontSize: '14px', lineHeight: '1.7', counterReset: 'step-counter' }}>
                    {matiere.methods.map((method, i) => (
                      <li key={i} style={{ marginBottom: '15px', padding: '15px 20px', backgroundColor: '#f8fafc', borderRadius: '12px', position: 'relative', paddingLeft: '60px', counterIncrement: 'step-counter' }}>
                        <span style={{ position: 'absolute', left: '15px', top: '15px', width: '30px', height: '30px', backgroundColor: matiere.color, color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '700' }}>
                          {i + 1}
                        </span>
                        {method}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
