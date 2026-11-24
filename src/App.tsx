import { useState } from "react";
import type { UserInput, Recommendation } from "./types";
import { getRecommendation } from "./api";
import QuestionForm from "./components/QuestionForm";
import ResultView from "./components/ResultView";

export default function App() {
  const [result, setResult] = useState<Recommendation | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(input: UserInput) {
    setLoading(true);
    setError("");
    setResult(null);
    try {
      setResult(await getRecommendation(input));
    } catch (err) {
      console.error(err);
      setError("分析失敗，可能是伺服器忙碌中，請稍後再試一次。");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <h1>AI Beauty Advisor</h1>
      <p className="sub">選好你的條件，AI 會產生專屬的髮色與妝容建議</p>

      <QuestionForm onSubmit={handleSubmit} disabled={loading} />

      {loading && <p className="hint">分析中…第一次使用可能要等 30～60 秒</p>}
      {error && <p className="error">{error}</p>}
      {result && <ResultView result={result} />}
    </main>
  );
}
