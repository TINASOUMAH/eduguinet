import { useParams } from "react-router-dom";

// Exemple de données PDF
const pdfData = {
  maths: [
    { titre: "Cours - Nombres entiers", lien: "/pdf/maths_cours1.pdf" },
    { titre: "Cours - Fractions", lien: "/pdf/maths_cours2.pdf" },
    { titre: "Cours - Géométrie", lien: "/pdf/maths_cours3.pdf" },
  ],
  francais: [
    { titre: "Cours - Orthographe", lien: "/pdf/fr_cours1.pdf" },
    { titre: "Cours - Grammaire", lien: "/pdf/fr_cours2.pdf" },
  ],
  histoire: [
    { titre: "Cours - Antiquité", lien: "/pdf/hist_cours1.pdf" },
    { titre: "Cours - Révolution Française", lien: "/pdf/hist_cours2.pdf" },
  ],
};

export default function Pdf() {
  const { level, matiere } = useParams(); // /niveaux/6eme/pdf/maths

  const documents = pdfData[matiere] || [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        📘 PDF - {matiere.toUpperCase()} ({level})
      </h1>

      {documents.length === 0 ? (
        <p className="text-gray-500">Aucun PDF disponible pour cette matière.</p>
      ) : (
        <ul className="space-y-4">
          {documents.map((doc, index) => (
            <li
              key={index}
              className="border p-4 rounded-lg flex justify-between items-center hover:bg-gray-50"
            >
              <span>{doc.titre}</span>
              <a
                href={doc.lien}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-3 py-1 rounded-lg"
              >
                📄 Ouvrir
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
