import React from 'react';

export default function TerminalQuiz() {
  return (
    <div style={{ padding: '20px' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2rem', color: '#1e293b', marginBottom: '10px' }}>
          🧠 Quiz - Terminale
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
          Tests et évaluations interactives
        </p>
      </header>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px'
      }}>
        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>❓</div>
          <h3 style={{ color: '#1e293b', marginBottom: '10px' }}>Quiz Rapides</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
            Tests courts pour vérifier vos connaissances
          </p>
        </div>

        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>⏱️</div>
          <h3 style={{ color: '#1e293b', marginBottom: '10px' }}>Quiz Chronométrés</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
            Évaluations avec contrainte de temps
          </p>
        </div>

        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🎯</div>
          <h3 style={{ color: '#1e293b', marginBottom: '10px' }}>Quiz Thématiques</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
            Tests par matière et par chapitre
          </p>
        </div>
      </div>
    </div>
  );
}
