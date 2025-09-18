import React from 'react';

export default function TerminalPdf() {
  return (
    <div style={{ padding: '20px' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2rem', color: '#1e293b', marginBottom: '10px' }}>
          📄 Documents PDF - Terminale
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
          Accédez à tous vos documents PDF pour la Terminale
        </p>
      </header>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px'
      }}>
        {/* Placeholder pour les documents PDF */}
        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📚</div>
          <h3 style={{ color: '#1e293b', marginBottom: '10px' }}>Cours Terminale</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
            Documents de cours en format PDF
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
          <h3 style={{ color: '#1e293b', marginBottom: '10px' }}>Exercices</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
            Exercices et corrigés en PDF
          </p>
        </div>

        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📋</div>
          <h3 style={{ color: '#1e293b', marginBottom: '10px' }}>Examens</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
            Sujets d'examens et corrections
          </p>
        </div>
      </div>
    </div>
  );
}
