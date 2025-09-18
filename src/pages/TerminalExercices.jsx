import React from 'react';

export default function TerminalExercices() {
  return (
    <div style={{ padding: '20px' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2rem', color: '#1e293b', marginBottom: '10px' }}>
          ✏️ Exercices - Terminale
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
          Exercices pratiques et corrigés pour la Terminale
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
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📝</div>
          <h3 style={{ color: '#1e293b', marginBottom: '10px' }}>Exercices Guidés</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
            Exercices avec méthodes et corrections détaillées
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
          <h3 style={{ color: '#1e293b', marginBottom: '10px' }}>Exercices d'Application</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
            Mise en pratique des concepts étudiés
          </p>
        </div>

        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🏆</div>
          <h3 style={{ color: '#1e293b', marginBottom: '10px' }}>Exercices Avancés</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
            Défis et exercices de niveau supérieur
          </p>
        </div>
      </div>
    </div>
  );
}
