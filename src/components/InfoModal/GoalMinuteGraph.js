import React, { PureComponent, useState } from "react";
import styles from "./GoalMinuteGraph.module.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList
} from "recharts";

export default function GoalMinuteGraph(props) {
  let goalsForMinute = Object.entries(props.for.minute);
  let goalsAgainstMinute = Object.entries(props.against.minute);

  goalsForMinute = goalsForMinute.map((goal) => {
    goal = {
      minute: goal[0],
      goals: goal[1].total
    };
    return goal;
  });
  goalsForMinute[5].goals =
    goalsForMinute[5].goals + goalsForMinute[6].goals + goalsForMinute[7].goals;
  goalsForMinute = goalsForMinute.slice(0, 6);

  goalsAgainstMinute = goalsAgainstMinute.map((goal) => {
    goal = {
      minute: goal[0],
      goals: goal[1].total
    };
    return goal;
  });
  goalsAgainstMinute[5].goals =
    goalsAgainstMinute[5].goals +
    goalsAgainstMinute[6].goals +
    goalsAgainstMinute[7].goals;
  goalsAgainstMinute = goalsAgainstMinute.slice(0, 6);

  return (
    <BarChart
      className={styles.graph}
      width={450}
      height={250}
      data={props.type ? goalsForMinute : goalsAgainstMinute}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="minute" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="goals" fill={props.type ? "#82ca9d" : "#fe5b5b"}>
        <LabelList dataKey="goals" position="top" />
      </Bar>
    </BarChart>
  );
}
