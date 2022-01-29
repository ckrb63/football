import { useState, useEffect } from "react";
import APIKEY from '../../secret/key';
import style from './TopScorers.module.css';
import Spinner from "../../UI/Spinner";
import Players from "./Players";
import PlayerColumnName from "./PlayerColumnName";
const TopScorers = (props) => {
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getTable();
  }, [props]);
  async function getTable() {
    setIsLoading(true);
    const response = await fetch(
      `https://api-football-v1.p.rapidapi.com/v3/players/top${props.switch}?league=${props.league}&season=${props.season}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": APIKEY,
        },
      }
    );
    const data = await response.json();
    setPlayers(data.response);

    setIsLoading(false);
  }
  const context = isLoading ? <Spinner className={style.spinner}/> : players.map((player, idx) => {
    return (
      <Players 
      key={idx+1}
      rank={idx+1}
      name={player.player.name}
      id={player.player.id}
      goals={player.statistics[0].goals.total}
      assist={player.statistics[0].goals.assists}
      games={player.statistics[0].games.appearences}
      minutes={player.statistics[0].games.minutes}
      shots={player.statistics[0].shots.total}
      onshots={player.statistics[0].shots.on}
      keypass={player.statistics[0].passes.key}
      dribbles={player.statistics[0].dribbles.success}
      rate={player.statistics[0].games.rating}
      logo={player.statistics[0].team.logo}
      tab={props.switch}
      />
    );
  });


  return (
    <div className={style.table}>
      <PlayerColumnName tab={props.switch}/>
      <ol className={style.list}>
        {context}
      </ol>
    </div>
  );
};
export default TopScorers;
