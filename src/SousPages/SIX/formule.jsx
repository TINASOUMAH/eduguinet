import React, { useState } from 'react';

export default function FormulesCalcul() {
  const [activeTab, setActiveTab] = useState({}); // Track active tab for each subject

  const formules = [
    {
      id: 1,
      title: "Nombres entiers et décimaux",
      definition: "Les nombres entiers et décimaux permettent les opérations de base comme l'addition, la soustraction, la multiplication et la division.",
      properties: [
        { name: "Commutativité", example: "a + b = b + a, a × b = b × a" },
        { name: "Associativité", example: "(a + b) + c = a + (b + c)" },
        { name: "Élément neutre", example: "a + 0 = a, a × 1 = a" },
        { name: "Distributivité", example: "a × (b + c) = a × b + a × c" }
      ],
      methods: [
        "Identifier les nombres concernés par l'opération.",
        "Appliquer la propriété choisie (commutativité, distributivité...) pour simplifier le calcul.",
        "Effectuer le calcul final."
      ],
      color: "#2563eb"
    },
    {
      id: 2,
      title: "Fractions",
      definition: "Une fraction représente une partie d'un tout et se manipule avec des opérations spécifiques.",
      properties: [
        { name: "Addition/soustraction", example: "a/b + c/d = (ad + bc)/bd" },
        { name: "Multiplication", example: "a/b × c/d = (a×c)/(b×d)" },
        { name: "Division", example: "(a/b) ÷ (c/d) = (a×d)/(b×c)" },
        { name: "Simplification", example: "2/4 = 1/2" }
      ],
      methods: [
        "Mettre les fractions au même dénominateur pour addition/soustraction.",
        "Multiplier numérateur et dénominateur pour multiplication.",
        "Inverser la fraction du diviseur pour la division.",
        "Simplifier le résultat final si possible."
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
      methods: [
        "Identifier le nombre total N et le pourcentage P.",
        "Appliquer la formule N × P / 100 pour calculer le pourcentage.",
        "Ajouter ou soustraire le résultat à N pour obtenir augmentation ou réduction."
      ],
      color: "#f59e0b"
    },
    {
      id: 4,
      title: "Puissances",
      definition: "Une puissance exprime la multiplication répétée d'un même nombre.",
      properties: [
        { name: "Multiplication", example: "aⁿ × aᵐ = aⁿ⁺ᵐ" },
        { name: "Division", example: "aⁿ ÷ aᵐ = aⁿ⁻ᵐ" },
        { name: "Puissance d'une puissance", example: "(aᵐ)ⁿ = aᵐⁿ" },
        { name: "Exposants spéciaux", example: "a⁰ = 1, a¹ = a" }
      ],
      methods: [
        "Pour multiplier des puissances de même base, additionner les exposants.",
        "Pour diviser des puissances de même base, soustraire les exposants.",
        "Pour une puissance d'une puissance, multiplier les exposants.",
        "Se souvenir que tout nombre élevé à 0 vaut 1."
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
      methods: [
        "Identifier la figure et les dimensions données (longueur, largeur, rayon...).",
        "Choisir la formule correspondant à ce que vous voulez calculer (aire, périmètre, volume).",
        "Remplacer les valeurs dans la formule et effectuer le calcul."
      ],
      color: "#8b5cf6"
    }
  ];

  const handleTabChange = (formuleId, tab) => {
    setActiveTab(prev => ({
      ...prev,
      [formuleId]: tab
    }));
  };

  const getActiveTab = (formuleId) => {
    return activeTab[formuleId] || 'formules';
  };

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
              flex: '1 1 48%',
              minWidth: '350px',
              background: '#fff',
              borderRadius: '25px',
              padding: '0',
              boxShadow: `0 10px 25px rgba(0,0,0,0.08)`,
              borderTop: `6px solid ${formule.color}`,
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
            {/* Header avec titre */}
            <div style={{ padding: '30px 30px 20px 30px' }}>
              <h3 style={{ marginBottom: '15px', fontSize: '22px', fontWeight: '700', color: formule.color }}>
                {formule.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#334155', marginBottom: '0', lineHeight: '1.5' }}>
                {formule.definition}
              </p>
            </div>

            {/* Boutons de navigation */}
            <div style={{ 
              display: 'flex', 
              borderBottom: '1px solid #e2e8f0',
              backgroundColor: '#f8fafc'
            }}>
              <button
                onClick={() => handleTabChange(formule.id, 'formules')}
                style={{
                  flex: 1,
                  padding: '15px 20px',
                  border: 'none',
                  background: getActiveTab(formule.id) === 'formules' ? '#fff' : 'transparent',
                  color: getActiveTab(formule.id) === 'formules' ? formule.color : '#64748b',
                  fontWeight: getActiveTab(formule.id) === 'formules' ? '600' : '500',
                  fontSize: '14px',
                  cursor: 'pointer',
                  borderBottom: getActiveTab(formule.id) === 'formules' ? `3px solid ${formule.color}` : '3px solid transparent',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                📊 Formules
              </button>
              <button
                onClick={() => handleTabChange(formule.id, 'methodes')}
                style={{
                  flex: 1,
                  padding: '15px 20px',
                  border: 'none',
                  background: getActiveTab(formule.id) === 'methodes' ? '#fff' : 'transparent',
                  color: getActiveTab(formule.id) === 'methodes' ? formule.color : '#64748b',
                  fontWeight: getActiveTab(formule.id) === 'methodes' ? '600' : '500',
                  fontSize: '14px',
                  cursor: 'pointer',
                  borderBottom: getActiveTab(formule.id) === 'methodes' ? `3px solid ${formule.color}` : '3px solid transparent',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                🔧 Méthodes
              </button>
            </div>

            {/* Contenu selon l'onglet actif */}
            <div style={{ padding: '25px 30px 30px 30px', minHeight: '250px' }}>
              {getActiveTab(formule.id) === 'formules' ? (
                <div>
                  <h4 style={{ 
                    fontSize: '16px', 
                    fontWeight: '600', 
                    color: formule.color, 
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    📐 Propriétés et Formules
                  </h4>
                  <ul style={{ 
                    paddingLeft: '0', 
                    listStyle: 'none',
                    fontSize: '14px', 
                    lineHeight: '1.8'
                  }}>
                    {formule.properties.map((prop, i) => (
                      <li key={i} style={{ 
                        marginBottom: '12px',
                        padding: '12px 15px',
                        backgroundColor: '#f8fafc',
                        borderRadius: '10px',
                        borderLeft: `4px solid ${formule.color}`
                      }}>
                        <strong style={{ color: formule.color }}>{prop.name} :</strong>
                        <br />
                        <code style={{ 
                          backgroundColor: '#fff', 
                          padding: '4px 8px', 
                          borderRadius: '5px',
                          fontSize: '13px',
                          color: '#334155',
                          marginTop: '5px',
                          display: 'inline-block'
                        }}>
                          {prop.example}
                        </code>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div>
                  <h4 style={{ 
                    fontSize: '16px', 
                    fontWeight: '600', 
                    color: formule.color, 
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    📝 Méthode et Étapes
                  </h4>
                  <ol style={{ 
                    paddingLeft: '0', 
                    listStyle: 'none',
                    color: '#475569', 
                    fontSize: '14px', 
                    lineHeight: '1.7',
                    counterReset: 'step-counter'
                  }}>
                    {formule.methods.map((method, i) => (
                      <li key={i} style={{ 
                        marginBottom: '15px',
                        padding: '15px 20px',
                        backgroundColor: '#f8fafc',
                        borderRadius: '12px',
                        position: 'relative',
                        paddingLeft: '60px',
                        counterIncrement: 'step-counter'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '15px',
                          top: '15px',
                          width: '30px',
                          height: '30px',
                          backgroundColor: formule.color,
                          color: 'white',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px',
                          fontWeight: '700'
                        }}>
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