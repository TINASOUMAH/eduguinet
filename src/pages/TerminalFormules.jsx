import React from 'react';

export default function TerminalFormules() {
  return (
    <div style={{ padding: '20px' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2rem', color: '#1e293b', marginBottom: '10px' }}>
          📐 Formules & Méthodes - Terminale
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
          Formulaires et aide-mémoires pour la Terminale
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
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>➕</div>
          <h3 style={{ color: '#1e293b', marginBottom: '10px' }}>Mathématiques</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
            Formules d'analyse et d'algèbre
          </p>
        </div>

        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🧪</div>
          <h3 style={{ color: '#1e293b', marginBottom: '10px' }}>Physique-Chimie</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
            Formules et constantes physiques
          </p>
        </div>

        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📊</div>
          <h3 style={{ color: '#1e293b', marginBottom: '10px' }}>Statistiques</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
            Formules de probabilités et statistiques
          </p>
        </div>
      </div>
    </div>
  );
}
