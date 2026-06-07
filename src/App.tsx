import {
  Bar,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const data = [
  { month: '1月', sales: 120, target: 100 },
  { month: '2月', sales: 200, target: 180 },
  { month: '3月', sales: 150, target: 160 },
  { month: '4月', sales: 280, target: 220 },
  { month: '5月', sales: 190, target: 200 },
  { month: '6月', sales: 200, target: 210 },
]

function App() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Recharts 柱狀圖 + 折線圖</h1>
      <div style={{ width: '100%', height: 400, minWidth: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" name="銷售量" />
            <Line
              type="monotone"
              dataKey="target"
              stroke="#ff7300"
              strokeWidth={2}
              name="目標"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </main>
  )
}

export default App
