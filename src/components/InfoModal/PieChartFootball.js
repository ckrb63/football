import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import React, { useCallback, useState } from "react";
import styles from "./PieChartFootball.module.css";
const COLORS = ["#00C49F", "#ACACAC", "#F6A9A2"];
// const PieChartFootball = (props) => {
//   const fixtures = [
//     {
//       name : 'win',
//       total : props.data.wins.total
//     },
//     {
//       name : 'draw',
//       total : props.data.draws.total
//     },
//     {
//       name : 'lose',
//       total : props.data.loses.total
//     },
//   ]
//   return (
//     <PieChart width={730} height={250}>
//         <Pie
//           data={fixtures}
//           dataKey="total"
//           nameKey="name"
//           cx="50%"
//           cy="50%"
//           fill="#82ca9d"
//           label
//         >
//           {fixtures.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//       </PieChart>
//   );
// };
// export default PieChartFootball;

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
    name,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`${name} ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  );
};

export default function PieChartFootball(props) {
  const fixtures = [
    {
      name: "win",
      total: props.data.wins.total,
    },
    {
      name: "draw",
      total: props.data.draws.total,
    },
    {
      name: "lose",
      total: props.data.loses.total,
    },
  ];
  const totalPoint = fixtures[0].total*3 + fixtures[1].total;
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  let homeAndaway = {};
  if (activeIndex === 0) {
    homeAndaway = {
      type : "wins",
      home: props.data.wins.home,
      away: props.data.wins.away,
    };
  } else if (activeIndex === 1) {
    homeAndaway = {
      type : "draws",
      home: props.data.draws.home,
      away: props.data.draws.away,
    };
  } else {
    homeAndaway = {
      type : "loses",
      home: props.data.loses.home,
      away: props.data.loses.away,
    };
  }
  return (
    <div className={styles.wrapper}>
      <PieChart width={400} height={300}>
        <Pie
          isAnimationActive={false}
          className={styles.Pie}
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={fixtures}
          cx={200}
          cy={150}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="total"
          onMouseEnter={onPieEnter}
        >
          {fixtures.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className={styles.calc}>
        <p className={styles.type}>{homeAndaway.type}</p>
        <p>{`home : ${homeAndaway.home}`}</p>
        <p>{`away : ${homeAndaway.away}`}</p>
      </div>
      <div className={styles.point}>
        <p>{`${totalPoint} P`}</p>
      </div>
    </div>
  );
}
