import style from "./StandTeam.module.css";
const StandTeam = (props) => {
  return (
    <div className={style.card}>
      <span className={style.rankname}>
        <p>{props.rank}</p>
        <p>{props.name}</p>
      </span>
      <div className={style.wrapper}>
      <p>{props.games}</p>
      <p>{props.win}</p>
      <p>{props.draw}</p>
      <p>{props.lose}</p>
      <p>{props.scored}</p>
      <p>{props.against}</p>
      <p>{props.gd}</p>
      <p>{props.points}</p>
      </div>
    </div>
  );
};
export default StandTeam;
