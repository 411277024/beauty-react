import type { Recommendation } from "../types";
import HairColorCard from "./HairColorCard";

export default function ResultView({ result }: { result: Recommendation }) {
  return (
    <section className="result">
      <h2>推薦髮色</h2>
      <div className="cards">
        {result.hair_colors.map((c) => (
          <HairColorCard key={c.name} color={c} />
        ))}
      </div>

      <h2>妝容步驟</h2>
      <ol className="steps">
        {result.makeup_steps.map((s) => (
          <li key={s.title}>
            <strong>{s.title}</strong>
            <p>{s.desc}</p>
          </li>
        ))}
      </ol>

      <h2>總結建議</h2>
      <p>{result.summary}</p>
    </section>
  );
}