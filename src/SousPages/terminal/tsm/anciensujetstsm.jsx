import React, { useState } from 'react';

export default function AnciensSujetsTSM() {
  // Exemple de données, tu pourras remplacer par un fetch depuis une API
  const sujets = [
    { id: 1, titre: "Mathématiques BAC TSM 2023", matiere: "Mathématiques", annee: 2023, lien: "/pdfs/math_bac_tsm_2023.pdf" },
    { id: 2, titre: "Chimie BAC TSM 2023", matiere: "Chimie", annee: 2023, lien: "/pdfs/chimie_bac_tsm_2023.pdf" },
    { id: 3, titre: "Français BAC TSM 2023", matiere: "Français", annee: 2023, lien: "/pdfs/francais_bac_tsm_2023.pdf" },
    { id: 4, titre: "Philosophie BAC TSM 2023", matiere: "Philosophie", annee: 2023, lien: "/pdfs/philo_bac_tsm_2023.pdf" },
    { id: 5, titre: "Mathématiques BAC TSM 2022", matiere: "Mathématiques", annee: 2022, lien: "/pdfs/math_bac_tsm_2022.pdf" },
    { id: 6, titre: "Chimie BAC TSM 2022", matiere: "Chimie", annee: 2022, lien: "/pdfs/chimie_bac_tsm_2022.pdf" }
  ];

  const [filtre, setFiltre] = useState("Tous");

  const matieres = ["Tous", ...new Set(sujets.map(s => s.matiere))];

  const sujetsFiltres = filtre === "Tous" ? sujets : sujets.filter(s => s.matiere === filtre);

  return (
    <div style={{ width: '95%', margin: '0 auto', fontFamily: "'Inter', sans-serif", marginTop: '50px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '36px', color: '#1e293b', marginBottom: '30px', fontWeight: '700' }}>
        Anciens Sujets
      </h2>

      {/* Filtre par matière */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        {matieres.map((matiere, i) => (
          <button
            key={i}
            onClick={() => setFiltre(matiere)}
            style={{
              margin: '0 10px',
              padding: '10px 20px',
              borderRadius: '25px',
              border: filtre === matiere ? '2px solid #2563eb' : '1px solid #ccc',
              background: filtre === matiere ? '#2563eb' : '#fff',
              color: filtre === matiere ? '#fff' : '#1e293b',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s'
            }}
          >
            {matiere}
          </button>
        ))}
      </div>

      {/* Liste des sujets */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
        {sujetsFiltres.map(sujet => (
          <div
            key={sujet.id}
            style={{
              flex: '1 1 300px',
              background: '#fff',
              borderRadius: '20px',
              padding: '25px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <h3 style={{ fontSize: '20px', color: '#2563eb', fontWeight: '700', marginBottom: '10px' }}>
              {sujet.titre}
            </h3>
            <p style={{ fontSize: '14px', color: '#475569', marginBottom: '15px' }}>
              Matière : <strong>{sujet.matiere}</strong> | Année : <strong>{sujet.annee}</strong>
            </p>
            <a
              href={sujet.lien}
              download
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                background: '#16a34a',
                color: '#fff',
                borderRadius: '20px',
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              Télécharger
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
