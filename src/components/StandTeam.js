import style from "./StandTeam.module.css";
import RecentForm from "./RecentForm";
import { teamActions } from "../store/team-slice";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Team = styled.div`
  background-color: white;
  

  ${({ champs }) => champs && `
    background-image: linear-gradient(
    to right,
    white,
    white,
    white,
    white,
    #0a0953
  );
  `}

  ${({ europa }) => europa && `
    background-image: linear-gradient(
    to right,
    white,
    white,
    white,
    white,
    #3d1255
  );
  `}

  
  border-radius: 10px;
  margin: 0 1rem 1rem 1rem;
  box-shadow: .1rem .1rem 1px rgba(0, 0, 0, 0.2);
  transition: .08s;
  cursor: pointer;
`;

const StandTeam = (props) => {
  let state = {
    champs : false,
    europa : false
  };
  const dispatch = useDispatch();
  const teamSelect = () => {
    dispatch(teamActions.setTeam({ team: props.id, rank: props.rank }));
    props.onClick();
  };
  if(props.rank<=4){
    state.champs = true;
  }else if(props.rank<=6){
    state.europa = true;
  }
  return (
    <Team champs={state.champs} europa={state.europa} className={style.card} onClick={teamSelect}>
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
    </Team>
  );
};
export default StandTeam;
