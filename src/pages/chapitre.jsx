import { Link, useParams } from "react-router-dom";
import data from "./data";

export default function Chapitre() {
  const { level, matiere, chapitre } = useParams();
  const meta = data[level]?.matieres?.[matiere];
  const chap = meta?.chapitres.find((c) => c.slug === chapitre);

  if (!chap) return <p className="text-red-600">Chapitre introuvable.</p>;

  return (
    <div>
      <div className="text-sm text-gray-500 mb-2">
        Niveaux / {level} / {meta?.nom}
      </div>
      <h1 className="text-2xl font-bold mb-4">{chap.titre} — Leçons</h1>

      <div className="grid gap-4 sm:grid-cols-2">
        {chap.lecons.map((l) => (
          <Link
            key={l.slug}
            to={`/niveaux/${level}/${matiere}/${chapitre}/${l.slug}`}
            className="rounded-2xl border bg-white p-4 hover:shadow"
          >
            <div className="font-semibold">{l.titre}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
