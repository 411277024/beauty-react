import type { UserInput, Recommendation } from "./types";

const API_BASE = "https://ai-beauty-api-w6ua.onrender.com";

// 呼叫後端，90 秒沒回應就放棄（Render 免費主機第一次會比較慢）
export async function getRecommendation(input: UserInput): Promise<Recommendation> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 90000);

  try {
    const res = await fetch(API_BASE + "/api/recommend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
      signal: controller.signal,
    });
    if (!res.ok) throw new Error("伺服器錯誤：" + res.status);

    const data = await res.json();
    if (data.status === "error") throw new Error(data.message ?? "後端回傳錯誤");
    return data as Recommendation;
  } finally {
    clearTimeout(timer);
  }
}