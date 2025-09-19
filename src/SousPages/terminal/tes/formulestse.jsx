import React, { useState } from 'react';

export default function FormulesMethodesTSE() {
  const [activeTab, setActiveTab] = useState({}); // Track active tab for each subject

  const formules = [
    {
      id: 1,
      title: "Mathématiques - Analyse",
      definition: "Les fonctions, limites, dérivées et intégrales adaptées au programme Sciences Expérimentales.",
      properties: [
        { name: "Limite d'une fonction", example: "lim(x→a) f(x) = L" },
        { name: "Dérivée d'une fonction", example: "f'(x) = lim(h→0) [f(x+h) - f(x)]/h" },
        { name: "Dérivée d'un produit", example: "(uv)' = u'v + uv'" },
        { name: "Primitive de base", example: "∫ xⁿ dx = xⁿ⁺¹/(n+1) + C" },
        { name: "Intégrale définie", example: "∫[a,b] f(x)dx = F(b) - F(a)" },
        { name: "Fonction exponentielle", example: "d/dx(eˣ) = eˣ" }
      ],
      methods: [
        "Identifier le type de fonction et la propriété à appliquer.",
        "Pour les limites : factoriser et simplifier les expressions.",
        "Pour les dérivées : appliquer les règles de base (somme, produit, quotient).",
        "Pour les primitives : reconnaître les formes usuelles.",
        "Vérifier le résultat par dérivation."
      ],
      color: "#3b82f6"
    },
    {
      id: 2,
      title: "Physique - Mécanique",
      definition: "Les lois fondamentales du mouvement et de l'énergie en physique expérimentale.",
      properties: [
        { name: "Deuxième loi de Newton", example: "F⃗ = ma⃗" },
        { name: "Énergie cinétique", example: "Ec = ½mv²" },
        { name: "Énergie potentielle", example: "Ep = mgh" },
        { name: "Conservation de l'énergie", example: "Em = Ec + Ep = constante" },
        { name: "Quantité de mouvement", example: "p⃗ = mv⃗" },
        { name: "Travail d'une force", example: "W = F⃗ · d⃗ = Fd cos(θ)" }
      ],
      methods: [
        "Identifier toutes les forces appliquées au système.",
        "Choisir un référentiel et définir les axes.",
        "Appliquer la deuxième loi de Newton selon chaque axe.",
        "Utiliser les théorèmes énergétiques pour les problèmes de conservation.",
        "Vérifier la cohérence des unités et des résultats."
      ],
      color: "#8b5cf6"
    },
    {
      id: 3,
      title: "Physique - Électricité",
      definition: "Les lois fondamentales des circuits électriques et de l'électromagnétisme.",
      properties: [
        { name: "Loi d'Ohm", example: "U = RI" },
        { name: "Puissance électrique", example: "P = UI = RI² = U²/R" },
        { name: "Loi des mailles", example: "∑U = 0" },
        { name: "Loi des nœuds", example: "∑I = 0" },
        { name: "Énergie électrique", example: "W = UIt = Pt" },
        { name: "Capacité", example: "Q = CU" }
      ],
      methods: [
        "Analyser le circuit et identifier tous les éléments.",
        "Appliquer les lois de Kirchhoff (nœuds et mailles).",
        "Utiliser la loi d'Ohm pour chaque résistance.",
        "Calculer les puissances et énergies selon le contexte.",
        "Vérifier que la somme des puissances est cohérente."
      ],
      color: "#f59e0b"
    },
    {
      id: 4,
      title: "Chimie - Réactions",
      definition: "Les réactions chimiques, équilibres et calculs de concentrations.",
      properties: [
        { name: "Équilibrage", example: "aA + bB ⇌ cC + dD" },
        { name: "Constante d'équilibre", example: "K = [C]ᶜ[D]ᵈ/[A]ᵃ[B]ᵇ" },
        { name: "pH", example: "pH = -log[H₃O⁺]" },
        { name: "Concentration molaire", example: "C = n/V" },
        { name: "Loi des gaz parfaits", example: "PV = nRT" },
        { name: "Vitesse de réaction", example: "v = k[A]ᵅ[B]ᵝ" }
      ],
      methods: [
        "Équilibrer l'équation chimique en respectant la conservation des éléments.",
        "Identifier les espèces présentes à l'équilibre.",
        "Calculer les concentrations à partir des quantités de matière.",
        "Utiliser la constante d'équilibre pour déterminer l'évolution.",
        "Vérifier la cohérence avec les conditions expérimentales."
      ],
      color: "#06b6d4"
    },
    {
      id: 5,
      title: "Biologie - Génétique",
      definition: "Les lois de l'hérédité et les mécanismes de transmission des caractères.",
      properties: [
        { name: "Lois de Mendel", example: "Ségrégation et assortiment indépendant" },
        { name: "Fréquence allélique", example: "p + q = 1 (pour 2 allèles)" },
        { name: "Hardy-Weinberg", example: "p² + 2pq + q² = 1" },
        { name: "Probabilité génétique", example: "P(AB) = P(A) × P(B)" },
        { name: "Coefficient de consanguinité", example: "F = ∑(1/2)ⁿ⁺¹" },
        { name: "Linkage", example: "Fréquence de recombinaison < 50%" }
      ],
      methods: [
        "Identifier les allèles et leur mode de transmission.",
        "Établir l'échiquier de Punnett pour les croisements simples.",
        "Calculer les probabilités selon les lois de Mendel.",
        "Analyser les écarts à l'équilibre de Hardy-Weinberg.",
        "Interpréter les résultats en termes de sélection ou dérive."
      ],
      color: "#10b981"
    },
    {
      id: 6,
      title: "Biologie - Physiologie",
      definition: "Les mécanismes physiologiques et les régulations biologiques.",
      properties: [
        { name: "Loi de Fick", example: "J = -D(dC/dx)" },
        { name: "Équation de Nernst", example: "E = E° + (RT/nF)ln(Cox/Cred)" },
        { name: "Débit cardiaque", example: "Qc = VES × FC" },
        { name: "Filtration glomérulaire", example: "DFG = Kf × PNet" },
        { name: "Transport actif", example: "Consommation d'ATP" },
        { name: "Loi d'Ohm biologique", example: "I = ΔV/R" }
      ],
      methods: [
        "Identifier le processus physiologique étudié.",
        "Appliquer les lois physiques aux systèmes biologiques.",
        "Calculer les flux et gradients selon les conditions.",
        "Analyser les mécanismes de régulation (feedback).",
        "Interpréter les résultats dans le contexte physiologique."
      ],
      color: "#059669"
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
        Formules et Méthodes - Terminale TSE
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
