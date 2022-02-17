import style from "./StandTeam.module.css";
import RecentForm from "./RecentForm";
import { teamActions } from "../store/team-slice";
import { useDispatch } from "react-redux";
const StandTeam = (props) => {
  const dispatch = useDispatch();
  const teamSelect = () => {
    dispatch(teamActions.setTeam({ team: props.id, rank: props.rank }));
    props.onClick();
  };
  return (
    <div className={style.card} onClick={teamSelect}>
      <span className={style.rankname}>
        <p>{props.rank}</p>
        <img src={props.logo} alt={props.name} />
        <p className={style.teamname}>{props.name}</p>
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
        <div className={style.form}>
          <RecentForm form={props.form} />
        </div>
      </div>
    </div>
  );
};
export default StandTeam;
