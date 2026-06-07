# 📈 React (TS) + Recharts + FinMind 股價可視化小應用：MVP 開發計畫書

這是一份將 React、TypeScript 與 Recharts 結合，並串接 FinMind API 的專案規格與開發指南。本文件包含前期的基礎建設（MVP）與動態互動功能，方便開發時作為依據。

---

## 📅 開發藍圖 (Roadmap)

```
[ 階段 1：MVP 核心 ] ──> [ 階段 2：動態互動 ]
(最簡股價折線圖)           (個股與區間切換)
```

---

## 🛠️ 階段 1：基礎建設與最簡折線圖 (MVP)

**目標**：建立專案結構，安全定義 API 型別，並在網頁上成功畫出第一條台積電（2330）的歷史收盤價折線。

### 1.1 建立專案與安裝套件

```bash
npm create vite@latest finmind-recharts-app -- --template react-ts
cd finmind-recharts-app
npm install recharts
```

### 1.2 建立型別定義 (`src/types.ts`)

```typescript
export interface StockDataItem {
  date: string;
  open: number;
  max: number;
  min: number;
  close: number;
  turnoverM: number;
  volume: number;
  Stock_id: string;
}

export interface FinMindResponse {
  msg: string;
  status: number;
  data: StockDataItem[];
}
```

---

## 🔄 階段 2：動態互動功能 (操作層)

**目標**：讓使用者能自主「輸入股號查詢」以及「動態切換時間範圍」。

### 2.1 實作規劃

- **控制狀態 (States)**：`searchId`（輸入框）、`currentId`（鎖定股號）、`rangeMonths`（時間範圍）
- **動態計算日期**：編寫 Helper Function 產出 API 需要的 `start_date`

### 2.2 核心邏輯 (`src/App.tsx`)

負責生命週期、狀態管理與非同步 Fetch 撈取資料。

```typescript
// 詳細程式碼請參考以下開發說明...
```

---

## 🛑 避坑與防錯核對清單

- **ResponsiveContainer 消失**：外層 `div` 必須給予固定高度
- **X 軸日期擁擠**：加上 `minTickGap={40}`
- **折線無起伏**：加上 `domain={['auto', 'auto']}`
- **數值型別轉化**：確保 API 回傳的字串有轉為 `Number`
