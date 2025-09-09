import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data";

const TABS = [
  { key: "cours", label: "Mes cours", icon: "📘" },
  { key: "pdf", label: "PDF", icon: "📄" },
  { key: "exercices", label: "Exercices", icon: "✏️" },
  { key: "quiz", label: "Quiz", icon: "❓" },
];

export default function Lesson() {
  const { level, matiere, chapitre, lesson } = useParams();
  const meta = data[level]?.matieres?.[matiere];
  const chap = meta?.chapitres.find((c) => c.slug === chapitre);
  const lecon = chap?.lecons.find((l) => l.slug === lesson);

  const available = useMemo(
    () => TABS.filter((t) => lecon?.ressources?.[t.key]),
    [lecon]
  );
  const [active, setActive] = useState(available[0]?.key ?? "cours");

  if (!lecon) return <p className="text-red-600">Leçon introuvable.</p>;

  const r = lecon.ressources;

  return (
    <div className="flex gap-6">
      {/* Sidebar gauche */}
      <aside className="w-64 hidden md:block">
        <div className="sticky top-4 rounded-2xl border bg-white p-3">
          <div className="font-semibold mb-2">Classe de {level}</div>
          <ul className="space-y-2">
            {TABS.map((t) => (
              <li key={t.key}>
                <button
                  onClick={() => setActive(t.key)}
                  className={`w-full text-left rounded-xl px-3 py-2 ${
                    active === t.key
                      ? "bg-blue-50 border border-blue-200"
                      : "hover:bg-gray-50"
                  } ${!r[t.key] ? "opacity-40 cursor-not-allowed" : ""}`}
                  disabled={!r[t.key]}
                >
                  <span className="mr-2">{t.icon}</span>
                  {t.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Contenu droite */}
      <section className="flex-1">
        <div className="text-sm text-gray-500 mb-2">
          Niveaux / {level} / {meta?.nom} / {chap?.titre}
        </div>
        <h1 className="text-2xl font-bold mb-4">{lecon.titre}</h1>

        {/* Onglets du haut (miroir sidebar) */}
        <div className="flex gap-2 mb-4">
          {available.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`rounded-2xl border px-4 py-2 bg-white ${
                active === t.key ? "bg-black text-white" : "hover:bg-gray-50"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Zone de rendu */}
        <div className="rounded-2xl border bg-white p-4 min-h-[240px]">
          {active === "cours" && (
            <article className="prose max-w-none">
              {/* Exemple de vidéo YouTube intégrée */}
              <div className="aspect-video mb-4">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Cours vidéo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p>{r.cours}</p>
            </article>
          )}

          {active === "pdf" && (
            <div>
              <p className="mb-3 text-gray-600">
                Ouvre le PDF de la leçon :
              </p>
              <a
                className="inline-block rounded-xl border px-4 py-2 hover:shadow"
                href={r.pdf}
                target="_blank"
                rel="noreferrer"
              >
                📄 Ouvrir le PDF
              </a>
            </div>
          )}

          {active === "exercices" && (
            <div>
              <p className="mb-3 text-gray-600">Série d’exercices :</p>
              <a
                className="inline-block rounded-xl border px-4 py-2 hover:shadow"
                href={r.exercices}
              >
                ✏️ Voir les exercices
              </a>
            </div>
          )}

          {active === "quiz" && (
            <div>
              <p className="mb-3 text-gray-600">Teste-toi :</p>
              <Link
                className="inline-block rounded-xl border px-4 py-2 hover:shadow"
                to={`/quiz/${level}/${matiere}/${chapitre}/${lesson}`}
              >
                ❓ Lancer le quiz
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
