import { useEffect, useState } from "react";
import StandTeam from "./StandTeam";
import APIKEY from "../secret/key";
import style from "./RankingTab.module.css";
import Spinner from "../UI/Spinner";
import ColumnName from "./ColumnName";
import { teamActions } from "../store/team-slice";
import { useDispatch } from "react-redux";
import Statics from "./InfoModal/Statics";
const RankingTab = (props) => {
  const [standings, setStandings] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    getTable();
  }, [props]);
  async function getTable() {
    setIsLoading(true);
    const response = await fetch(
      `https://api-football-v1.p.rapidapi.com/v3/standings?season=${props.year}&league=${props.selected}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": APIKEY,
        },
      }
    );
    const data = await response.json();
    dispatch(
      teamActions.setSeasonLeague({
        season: data.response[0].league.season,
        league: data.response[0].league.id,
      })
    );
    setStandings(data.response[0].league.standings[0]);
    setIsLoading(false);
  }
  const modalOpenHandler = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const modalCloseHandler = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset";
  };
  const context = isLoading ? (
    <Spinner className={style.spinner} />
  ) : (
    standings.map((stand) => {
      return (
        <StandTeam
          onClick={modalOpenHandler}
          key={stand.rank}
          rank={stand.rank}
          name={stand.team.name}
          id={stand.team.id}
          games={stand.all.played}
          win={stand.all.win}
          draw={stand.all.draw}
          lose={stand.all.lose}
          scored={stand.all.goals.for}
          against={stand.all.goals.against}
          gd={stand.all.goals.for - stand.all.goals.against}
          points={stand.points}
          form={stand.form}
          logo={stand.team.logo}
        />
      );
    })
  );

  return (
    <div className={style.table}>
      {modalOpen && <Statics onClose={modalCloseHandler}></Statics>}
      <ColumnName />
      <ol className={style.list}>{context}</ol>
    </div>
  );
};

export default RankingTab;
