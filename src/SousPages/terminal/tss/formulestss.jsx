import React, { useState } from 'react';

export default function FormulesMethodesTSS() {
  const [activeTab, setActiveTab] = useState({}); // Track active tab for each subject

  const formules = [
    {
      id: 1,
      title: "Économie - Microéconomie",
      definition: "Les mécanismes de base du comportement des agents économiques individuels et des marchés.",
      properties: [
        { name: "Élasticité-prix", example: "ε = (ΔQ/Q) / (ΔP/P)" },
        { name: "Utilité marginale", example: "Um = ΔU/ΔQ" },
        { name: "Coût marginal", example: "Cm = ΔCT/ΔQ" },
        { name: "Recette marginale", example: "Rm = ΔRT/ΔQ" },
        { name: "Profit", example: "π = RT - CT" },
        { name: "Équilibre du marché", example: "Qd = Qo" }
      ],
      methods: [
        "Identifier les variables économiques pertinentes (prix, quantité, coût).",
        "Analyser les relations de cause à effet entre les variables.",
        "Calculer les élasticités pour mesurer la sensibilité.",
        "Déterminer l'équilibre en égalisant l'offre et la demande.",
        "Interpréter les résultats dans le contexte économique."
      ],
      color: "#f59e0b"
    },
    {
      id: 2,
      title: "Économie - Macroéconomie",
      definition: "L'analyse des agrégats économiques et des politiques économiques nationales.",
      properties: [
        { name: "PIB", example: "PIB = C + I + G + (X - M)" },
        { name: "Multiplicateur", example: "k = 1/(1-c)" },
        { name: "Taux de croissance", example: "g = (PIBt - PIBt-1)/PIBt-1 × 100" },
        { name: "Taux de chômage", example: "u = (Chômeurs/Population active) × 100" },
        { name: "Inflation", example: "π = (Pt - Pt-1)/Pt-1 × 100" },
        { name: "Balance commerciale", example: "BC = Exportations - Importations" }
      ],
      methods: [
        "Identifier les composantes du PIB selon l'approche choisie.",
        "Calculer les taux de variation pour mesurer l'évolution.",
        "Analyser les relations entre les agrégats macroéconomiques.",
        "Évaluer l'impact des politiques économiques.",
        "Interpréter les indicateurs dans le contexte conjoncturel."
      ],
      color: "#d97706"
    },
    {
      id: 3,
      title: "Sociologie - Statistiques sociales",
      definition: "Les méthodes quantitatives pour analyser les phénomènes sociaux et démographiques.",
      properties: [
        { name: "Taux de natalité", example: "TN = (Naissances/Population) × 1000" },
        { name: "Taux de mortalité", example: "TM = (Décès/Population) × 1000" },
        { name: "Indice de fécondité", example: "ISF = Σ(Taux par âge × 5)" },
        { name: "Coefficient de corrélation", example: "r = Cov(X,Y)/(σx × σy)" },
        { name: "Indice de Gini", example: "G = (A/(A+B)) où A = aire sous courbe" },
        { name: "Mobilité sociale", example: "Taux = (Mobiles/Total) × 100" }
      ],
      methods: [
        "Collecter et organiser les données sociodémographiques.",
        "Calculer les taux et indices selon les définitions standardisées.",
        "Analyser les corrélations entre variables sociales.",
        "Interpréter les résultats en termes de tendances sociales.",
        "Contextualiser les données dans leur environnement historique."
      ],
      color: "#8b5cf6"
    },
    {
      id: 4,
      title: "Psychologie - Statistiques",
      definition: "Les méthodes statistiques appliquées à l'analyse des comportements et processus mentaux.",
      properties: [
        { name: "Moyenne", example: "x̄ = Σxi/n" },
        { name: "Écart-type", example: "σ = √(Σ(xi-x̄)²/n)" },
        { name: "Test t de Student", example: "t = (x̄-μ)/(s/√n)" },
        { name: "Coefficient de corrélation", example: "r = Σ(xi-x̄)(yi-ȳ)/√(Σ(xi-x̄)²Σ(yi-ȳ)²)" },
        { name: "Chi-deux", example: "χ² = Σ(Oi-Ei)²/Ei" },
        { name: "ANOVA", example: "F = Variance inter/Variance intra" }
      ],
      methods: [
        "Définir clairement les variables et hypothèses de recherche.",
        "Choisir le test statistique approprié selon le type de données.",
        "Calculer les statistiques descriptives (moyenne, écart-type).",
        "Appliquer les tests d'inférence pour valider les hypothèses.",
        "Interpréter les résultats en termes psychologiques."
      ],
      color: "#06b6d4"
    },
    {
      id: 5,
      title: "Géographie - Démographie",
      definition: "L'analyse quantitative des populations et de leur répartition spatiale.",
      properties: [
        { name: "Densité de population", example: "D = Population/Superficie" },
        { name: "Taux d'urbanisation", example: "TU = (Pop. urbaine/Pop. totale) × 100" },
        { name: "Solde migratoire", example: "SM = Immigrations - Émigrations" },
        { name: "Indice de vieillissement", example: "IV = (Pop. >65 ans/Pop. <20 ans) × 100" },
        { name: "Taux d'accroissement", example: "TA = (Solde naturel + Solde migratoire)/Pop. × 100" },
        { name: "Espérance de vie", example: "Calculée par tables de mortalité" }
      ],
      methods: [
        "Collecter les données démographiques par sources officielles.",
        "Calculer les indicateurs selon les définitions internationales.",
        "Analyser la répartition spatiale des phénomènes.",
        "Comparer les évolutions temporelles et spatiales.",
        "Interpréter les résultats en termes géographiques et sociaux."
      ],
      color: "#10b981"
    },
    {
      id: 6,
      title: "Histoire - Analyse quantitative",
      definition: "Les méthodes quantitatives pour analyser les phénomènes historiques et leurs évolutions.",
      properties: [
        { name: "Taux de variation", example: "TV = ((Vf - Vi)/Vi) × 100" },
        { name: "Indice base 100", example: "Indice = (Valeur/Valeur de base) × 100" },
        { name: "Moyenne mobile", example: "MM = (Σ valeurs sur n périodes)/n" },
        { name: "Coefficient multiplicateur", example: "CM = Valeur finale/Valeur initiale" },
        { name: "Taux annuel moyen", example: "TAM = (Vf/Vi)^(1/n) - 1" },
        { name: "Part relative", example: "PR = (Partie/Total) × 100" }
      ],
      methods: [
        "Identifier les sources historiques fiables et quantifiables.",
        "Organiser les données chronologiquement.",
        "Calculer les évolutions et tendances sur les périodes étudiées.",
        "Comparer les phénomènes dans le temps et l'espace.",
        "Contextualiser les résultats dans leur environnement historique."
      ],
      color: "#ef4444"
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
        Formules et Méthodes - Terminale TSS
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
