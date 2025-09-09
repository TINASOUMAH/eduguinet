// data.js
const Data = {
  "10eme": {
    maths: {
      title: "Mathématiques",
      themes: [
        {
          id: "algebre",
          title: "Algèbre",
          chapitres: [
            {
              id: "equations",
              title: "Équations",
              contenu: {
                texte: "Résolution des équations du 1er et du 2ème degré...",
                pdf: "/pdf/10eme/maths/algebre/equations.pdf",
                video: "https://www.youtube.com/watch?v=EXAMPLE1",
                quiz: [
                  {
                    question: "Résoudre 2x + 3 = 7",
                    options: ["x=1", "x=2", "x=3"],
                    answer: "x=2",
                  },
                ],
              },
            },
            {
              id: "inequations",
              title: "Inéquations",
              contenu: {
                texte: "Résolution des inéquations linéaires...",
              },
            },
          ],
        },
        {
          id: "geometrie",
          title: "Géométrie",
          chapitres: [
            {
              id: "triangles",
              title: "Triangles",
              contenu: {
                texte: "Propriétés des triangles (équilatéral, isocèle, rectangle)...",
              },
            },
            {
              id: "trigonometrie",
              title: "Trigonométrie",
              contenu: {
                texte: "Relations trigonométriques dans un triangle rectangle...",
              },
            },
          ],
        },
      ],
    },

    physique: {
      title: "Physique-Chimie",
      themes: [
        {
          id: "mecanique",
          title: "Mécanique",
          chapitres: [
            {
              id: "mouvement",
              title: "Mouvement et vitesse",
              contenu: {
                texte: "Étude des mouvements rectilignes et circulaires...",
              },
            },
          ],
        },
        {
          id: "electricite",
          title: "Électricité",
          chapitres: [
            {
              id: "lois",
              title: "Lois de l’électricité",
              contenu: {
                texte: "Loi d’Ohm, puissance électrique, circuits en série et parallèle...",
              },
            },
          ],
        },
      ],
    },

    svt: {
      title: "SVT",
      themes: [
        {
          id: "biologie",
          title: "Biologie",
          chapitres: [
            {
              id: "cellule",
              title: "La cellule",
              contenu: {
                texte: "Structure et fonctions de la cellule vivante...",
              },
            },
          ],
        },
        {
          id: "geologie",
          title: "Géologie",
          chapitres: [
            {
              id: "volcans",
              title: "Volcans et séismes",
              contenu: {
                texte: "Étude des phénomènes géologiques...",
              },
            },
          ],
        },
      ],
    },

    francais: {
      title: "Français",
      themes: [
        {
          id: "grammaire",
          title: "Grammaire",
          chapitres: [
            {
              id: "phrase",
              title: "Phrase simple et complexe",
              contenu: {
                texte: "Analyse de la phrase, propositions, subordonnées...",
              },
            },
          ],
        },
        {
          id: "litterature",
          title: "Littérature",
          chapitres: [
            {
              id: "analyse",
              title: "Analyse de texte",
              contenu: {
                texte: "Techniques de lecture et d’interprétation...",
              },
            },
          ],
        },
      ],
    },
  },
};

export default Data;
