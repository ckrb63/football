import { useState } from "react";
import style from "./Players.module.css";
const Players = (props) => {
  
  return (
    <div className={style.card}>
      <span className={style.rankname}>
        <p>{props.rank}</p>
        <img src={props.logo} alt={props.name}/>
        <p className={style.teamname}>{props.name}</p>
      </span>
      <div className={style.wrapper}>
        <p className={props.tab === 'scorers' ? style['active']:style['none']}>{props.goals}</p>
        <p className={props.tab === 'assists' ? style['active']:style['none']}>{props.assist}</p>
        <p>{props.games}</p>
        <p>{props.minutes}</p>
        <p>{props.shots}</p>
        <p>{props.onshots}</p>
        <p className={style.three}>{props.keypass}</p>
        <p className={style.three}>{props.dribbles}</p>
        <p className={style.four}>{Number(props.rate).toFixed(2)}</p>
      </div>
    </div>
  );
};
export default Players;
