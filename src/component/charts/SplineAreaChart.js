// import "./styles.css";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "01/04",
    uv: 4200,
    pv: 2400,
    amt: 2400
  },
  {
    name: "01/05",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "01/06",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "01/07",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "01/08",
    uv: 890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "01/09",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "01/10",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  
];

export default function SplineAreaChart() {
  return (
     <ResponsiveContainer width="100%" aspect={3 / 1}>
    <AreaChart
      // width={500}
      // height={700}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
   <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#fbbe36" stopOpacity={0.9}/>
      <stop offset="85%" stopColor="#fbbe36" stopOpacity={0}/>
    </linearGradient>
  
  </defs>
      <CartesianGrid  horizontal={false} />
      <XAxis dataKey="name" tickLine={false} />
      <YAxis axisLine={false} tickLine={false} tickCount={8} />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#fbbe36" fillOpacity={1} fill="url(#colorUv)" strokeWidth={2}  activeDot={{ r: 6 }} dot={{ stroke: '#fbbe36', fill:'#ffff',strokeWidth: 3 }} />
    </AreaChart>
    </ResponsiveContainer>
  );
}