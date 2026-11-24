# AI Beauty Advisor（React + TypeScript 版）

選擇臉型、膚色、風格與場合，AI 會產生個人化的髮色與妝容建議。

**🔗 Live Demo：<https://beauty-react-sooty.vercel.app>**

> ⏱ 後端使用免費主機，閒置後會休眠，第一次按「產生推薦結果」可能要等 30～60 秒。

這是我把原本以 HTML／JavaScript 寫成的 [AI Beauty Advisor](https://github.com/411277024/AI_beauty_project) 前端，自學 React 與 TypeScript 後重構的版本。後端沿用原本的 [FastAPI API](https://github.com/411277024/AI_beauty_api)。

## 技術

React、TypeScript、Vite ｜ 部署於 Vercel ｜ 後端：FastAPI（Render）＋ Gemini 2.5

## 元件設計

```
App.tsx              管理狀態：結果、載入中、錯誤
├─ QuestionForm      問卷表單，記錄使用者的選擇
│  └─ SelectField    可重用的下拉選單，9 個欄位共用同一個元件
└─ ResultView        結果區
   └─ HairColorCard  單張髮色卡片
```

## 重構重點

- **元件化**：原本 9 個下拉選單各寫一次，現在由一個 `SelectField` 元件搭配選項資料產生。
- **狀態管理**：用 `useState` 管理結果、載入中與錯誤三種狀態，畫面依狀態自動切換，不必再用 `getElementById` 逐一更新。
- **型別定義**：用 TypeScript 定義送出與回傳的資料格式，欄位寫錯時編輯器會直接提示。
- **載入與錯誤處理**：送出時按鈕停用並顯示等待提示；逾時 90 秒或後端錯誤時顯示錯誤訊息，不會讓畫面卡住。

## 開發時遇到的問題

- **CORS 阻擋**：後端只允許原本網站的網域，新前端在本機與 Vercel 上都被擋下。我在後端的白名單加入新網域解決，並發現網址結尾多一個 `/` 就會比對失敗。

## 在本機執行

```bash
npm install
npm run dev
```

## 之後想做的

- 加入照片上傳與自動辨識
- 用 Lighthouse 分析並優化載入效能
