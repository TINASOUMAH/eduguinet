import React from 'react';

export default function FormulesCalcul() {
  const formules = [
    {
      id: 1,
      title: "Nombres entiers et décimaux",
      definition: "Les nombres entiers et décimaux permettent les opérations de base comme l’addition, la soustraction, la multiplication et la division.",
      properties: [
        { name: "Commutativité", example: "a + b = b + a, a × b = b × a" },
        { name: "Associativité", example: "(a + b) + c = a + (b + c)" },
        { name: "Élément neutre", example: "a + 0 = a, a × 1 = a" },
        { name: "Distributivité", example: "a × (b + c) = a × b + a × c" }
      ],
      color: "#2563eb"
    },
    {
      id: 2,
      title: "Fractions",
      definition: "Une fraction représente une partie d’un tout et se manipule avec des opérations spécifiques.",
      properties: [
        { name: "Addition/soustraction", example: "a/b + c/d = (ad + bc)/bd" },
        { name: "Multiplication", example: "a/b × c/d = (a×c)/(b×d)" },
        { name: "Division", example: "(a/b) ÷ (c/d) = (a×d)/(b×c)" },
        { name: "Simplification", example: "2/4 = 1/2" }
      ],
      color: "#16a34a"
    },
    {
      id: 3,
      title: "Pourcentages",
      definition: "Le pourcentage exprime une proportion sur 100 et sert à calculer des augmentations ou réductions.",
      properties: [
        { name: "Pourcentage", example: "P% de N = N × P/100" },
        { name: "Augmentation", example: "Augmentation = N + N × P/100" },
        { name: "Réduction", example: "Réduction = N - N × P/100" }
      ],
      color: "#f59e0b"
    },
    {
      id: 4,
      title: "Puissances",
      definition: "Une puissance exprime la multiplication répétée d’un même nombre.",
      properties: [
        { name: "Multiplication", example: "aⁿ × aᵐ = aⁿ⁺ᵐ" },
        { name: "Division", example: "aⁿ ÷ aᵐ = aⁿ⁻ᵐ" },
        { name: "Puissance d’une puissance", example: "(aᵐ)ⁿ = aᵐⁿ" },
        { name: "Exposants spéciaux", example: "a⁰ = 1, a¹ = a" }
      ],
      color: "#ef4444"
    },
    {
      id: 5,
      title: "Géométrie",
      definition: "La géométrie permet de calculer les longueurs, surfaces et volumes de différentes figures.",
      properties: [
        { name: "Périmètre du rectangle", example: "P = 2 × (L + l)" },
        { name: "Aire du rectangle", example: "A = L × l" },
        { name: "Aire du triangle", example: "A = (base × hauteur) / 2" },
        { name: "Aire du cercle", example: "A = π × r²" },
        { name: "Périmètre du cercle", example: "P = 2 × π × r" },
        { name: "Volume du cube", example: "V = côté³" },
        { name: "Volume du pavé droit", example: "V = L × l × h" }
      ],
      color: "#8b5cf6"
    }
  ];

  return (
    <div style={{ width: '95%', margin: '0 auto', fontFamily: "'Inter', sans-serif", marginTop: '50px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '36px', color: '#1e293b', marginBottom: '50px', fontWeight: '700', letterSpacing: '1px' }}>
        Formules de Calcul
      </h2>

      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px' }}>
        {formules.map((formule) => (
          <div
            key={formule.id}
            style={{
              flex: '1 1 48%', // <- 2 cartes par ligne
              minWidth: '300px',
              background: '#fff',
              borderRadius: '25px',
              padding: '30px',
              boxShadow: `0 10px 25px rgba(0,0,0,0.08)`,
              borderTop: `6px solid ${formule.color}`,
              transition: 'all 0.4s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => { 
              e.currentTarget.style.transform = 'translateY(-10px)'; 
              e.currentTarget.style.boxShadow = '0 20px 35px rgba(0,0,0,0.15)'; 
            }}
            onMouseLeave={(e) => { 
              e.currentTarget.style.transform = 'translateY(0)'; 
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.08)'; 
            }}
          >
            <h3 style={{ marginBottom: '15px', fontSize: '22px', fontWeight: '700', color: formule.color }}>
              {formule.title}
            </h3>

            <p style={{ fontSize: '14px', color: '#334155', marginBottom: '15px' }}>
              {formule.definition}
            </p>

            <ul style={{ paddingLeft: '20px', color: formule.color, fontSize: '14px', lineHeight: '1.6' }}>
              {formule.properties.map((prop, i) => (
                <li key={i}>
                  <strong>{prop.name} :</strong> {prop.example}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </div>
  );
}
