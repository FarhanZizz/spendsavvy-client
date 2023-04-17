import React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const Chart = () => {
  const data = [
    { day: "Mon", spent: 150 },
    { day: "Tue", spent: 220 },
    { day: "Wed", spent: 300 },
    { day: "Thu", spent: 180 },
    { day: "Fri", spent: 270 },
    { day: "Sat", spent: 120 },
    { day: "Sun", spent: 200 },
  ]
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-10">Money Spent This Week</h1>
      <ResponsiveContainer className="-ml-5" width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="spent" fill="#141414" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
