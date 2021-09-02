import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
function chart() {

  // npm install recharts

  const data = [
    {
      day: "1",
      population: 5,
      polution: 28,
      energy: 10
    },
    {
      day: "2",
      population: 8,
      polution: 43,
      energy: 25
    },
    {
      day: "3",
      population: 10,
      polution: 55,
      energy: 26
    },
    {
      day: "4",
      population: 15,
      polution: 55,
      energy: 26
    },
    {
      day: "5",
      population: 21,
      polution: 60,
      energy: 29
    },
    {
      day: "6",
      population: 37,
      polution: 68,
      energy: 35
    },
    {
      day: "7",
      population: 45,
      polution: 65,
      energy: 42
    }
  ];
  
  return (
    <div>
      <LineChart
      width={380}
      height={200}
      data={data}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis  />
      <YAxis  />
      {/* <Tooltip wrapperStyle={{ width: 120, height: 95, backgroundColor: '#00ffff4b' }}/> */}
      <Legend  />
      <Line
        type="monotone"
        dataKey="population"
        stroke="#01FF22"
        activeDot={{ r: 1 }}
      />
      <Line type="monotone" dataKey="polution" stroke="#FF0000" />
      <Line type="monotone" dataKey="energy" stroke="#FF9F00" />

    </LineChart>
    </div>
  )
}

export default chart
