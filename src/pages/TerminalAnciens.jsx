import React from 'react';

export default function TerminalAnciens() {
  return (
    <div style={{ padding: '20px' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2rem', color: '#1e293b', marginBottom: '10px' }}>
          📚 Anciens Sujets - Terminale
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
          Examens et épreuves des années précédentes
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
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📋</div>
          <h3 style={{ color: '#1e293b', marginBottom: '10px' }}>Baccalauréat 2023</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
            Sujets et corrigés du Bac 2023
          </p>
        </div>

        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📄</div>
          <h3 style={{ color: '#1e293b', marginBottom: '10px' }}>Baccalauréat 2022</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
            Sujets et corrigés du Bac 2022
          </p>
        </div>

        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📝</div>
          <h3 style={{ color: '#1e293b', marginBottom: '10px' }}>Examens Blancs</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
            Sujets d'entraînement et simulations
          </p>
        </div>
      </div>
    </div>
  );
}
