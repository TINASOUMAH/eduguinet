import { useParams } from "react-router-dom";
import data from "../data";

export default function Resources() {
  const { level } = useParams();
  const bloc = data[level];

  if (!bloc) return <p className="text-red-600">Niveau introuvable.</p>;

  // Récupération naïve de quelques PDF/exos à partir des leçons
  const pdfs = [];
  const exos = [];
  Object.values(bloc.matieres).forEach((m) =>
    m.chapitres.forEach((c) =>
      c.lecons.forEach((l) => {
        if (l.ressources.pdf) pdfs.push({ titre: `${m.nom} — ${l.titre}`, url: l.ressources.pdf });
        if (l.ressources.exercices) exos.push({ titre: `${m.nom} — ${l.titre}`, url: l.ressources.exercices });
      })
    )
  );

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <section>
        <h2 className="text-xl font-bold mb-3">📄 PDF disponibles</h2>
        <ul className="space-y-2">
          {pdfs.map((p, i) => (
            <li key={i} className="flex items-center justify-between rounded-xl border bg-white px-3 py-2">
              <span>{p.titre}</span>
              <a className="rounded-lg border px-3 py-1 hover:bg-gray-50" href={p.url} target="_blank" rel="noreferrer">
                Télécharger
              </a>
            </li>
          ))}
          {pdfs.length === 0 && <li>Aucun PDF.</li>}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">✏️ Exercices</h2>
        <ul className="space-y-2">
          {exos.map((e, i) => (
            <li key={i} className="flex items-center justify-between rounded-xl border bg-white px-3 py-2">
              <span>{e.titre}</span>
              <a className="rounded-lg border px-3 py-1 hover:bg-gray-50" href={e.url}>
                Ouvrir
              </a>
            </li>
          ))}
          {exos.length === 0 && <li>Aucun exercice.</li>}
        </ul>
      </section>
    </div>
  );
}
