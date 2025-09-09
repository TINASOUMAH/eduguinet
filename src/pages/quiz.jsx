import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

const bank = {
  // clé: `${level}/${matiere}/${chapitre}/${lesson}`
  "6eme/mathematiques/les-fractions/definir-simplifier-une-fraction": [
    {
      q: "Quelle est la fraction équivalente à 2/4 ?",
      choices: ["1/2", "3/2", "2/3"],
      answer: 0,
      explain: "2/4 = 1/2 après simplification par 2."
    },
    {
      q: "La forme irréductible de 6/9 est…",
      choices: ["2/3", "3/5", "4/6"],
      answer: 0,
      explain: "PGCD(6,9)=3 → 6/9 = 2/3."
    }
  ],
};

export default function Quiz() {
  const { level, matiere, chapitre, lesson } = useParams();
  const key = `${level}/${matiere}/${chapitre}/${lesson}`;
  const questions = bank[key] ?? [];

  const [i, setI] = useState(0);
  const [picked, setPicked] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const current = questions[i];
  const progress = useMemo(
    () => `${Math.min(i + 1, questions.length)}/${questions.length}`,
    [i, questions.length]
  );

  const submit = () => {
    if (picked == null) return;
    if (picked === current.answer) setScore((s) => s + 1);

    if (i + 1 < questions.length) {
      setI(i + 1);
      setPicked(null);
    } else {
      setDone(true);
    }
  };

  if (questions.length === 0) {
    return <p>Aucun quiz défini pour cette leçon.</p>;
  }

  if (done) {
    return (
      <div className="max-w-xl">
        <h1 className="text-2xl font-bold mb-2">Résultat 🎉</h1>
        <p className="mb-4">
          Score : <b>{score}</b> / {questions.length}
        </p>
        <ol className="list-decimal ml-6 space-y-2">
          {questions.map((q, idx) => (
            <li key={idx}>
              <div className="font-medium">{q.q}</div>
              <div>Bonne réponse : {q.choices[q.answer]}</div>
              <div className="text-sm text-gray-600">Explication : {q.explain}</div>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <div className="max-w-xl">
      <div className="text-sm text-gray-500 mb-2">
        Quiz — progression : {progress} 📊
      </div>
      <h1 className="text-xl font-semibold mb-4">{current.q}</h1>

      <div className="space-y-2 mb-4">
        {current.choices.map((c, idx) => (
          <button
            key={idx}
            onClick={() => setPicked(idx)}
            className={`block w-full text-left rounded-xl border bg-white px-4 py-2 hover:shadow ${
              picked === idx ? "border-blue-500" : ""
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setI(Math.max(0, i - 1))}
          className="rounded-xl border px-4 py-2"
          disabled={i === 0}
        >
          ⬅️ Précédent
        </button>
        <button onClick={submit} className="rounded-xl border px-4 py-2">
          ➡️ Suivant
        </button>
      </div>
    </div>
  );
}
