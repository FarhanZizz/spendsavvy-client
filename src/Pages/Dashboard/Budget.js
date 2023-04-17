import React from "react"
import { Link } from "react-router-dom"
import { Cell, Pie, PieChart, Tooltip } from "recharts"

const Budget = () => {
  const COLORS = [
    "#F94144",
    "#F3722C",
    "#F9C74F",
    "#90BE6D",
    "#43AA8B",
    "#577590",
  ]

  const data = [
    { name: "Food", value: 2000 },
    { name: "Housing", value: 3000 },
    { name: "Transportation", value: 3000 },
    { name: "Entertainment", value: 1500 },
    { name: "Other", value: 500 },
  ]
  return (
    <div className="bg-white card-body rounded-xl ">
      <h1 className="text-2xl font-semibold ">Budget</h1>
      <div className="flex flex-col md:flex-row justify-around items-center">
        <PieChart width={300} height={250}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        <div className="flex flex-col  gap-5">
          <div className="flex gap-2 justify-center items-center">
            <div className="w-4 bg-primary p-2 rounded-sm"></div>
            <h1 className="font-semibold">Budget</h1>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <div className="w-4 bg-primary p-2 rounded-sm"></div>
            <h1 className="font-semibold">Budget</h1>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <div className="w-4 bg-primary p-2 rounded-sm"></div>
            <h1 className="font-semibold">Budget</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Budget
