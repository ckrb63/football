import Modal from "./Modal";
import { useSelector } from "react-redux";
import APIKEYS from "../../secret/key";
import { useEffect, useState } from "react";
import PieChartFootball from "./PieChartFootball";
import styles from "./Statics.module.css";
import GoalStatics from "./GoalStatics";
import NextFixtures from "../Fixtures/NextFixtures";

const Statics = (props) => {
  const team = useSelector((state) => state.team);
  const rank = useSelector((state) => state.rank);
  const season = useSelector((state) => state.season);
  const league = useSelector((state) => state.league);
  const [page, setPage] = useState(1);
  const [fixtures, setFixtures] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState();
  const getTeamStatics = async () => {
    const response = await fetch(
      `https://api-football-v1.p.rapidapi.com/v3/teams/statistics?league=${league}&season=${season}&team=${team}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": APIKEYS
        }
      }
    );
    let data = await response.json();
    data = data.response;
    console.log(data);
    setSelectedTeam(data);
    const fixturesTotal = {
      played: data.fixtures.played,
      wins: data.fixtures.wins,
      draws: data.fixtures.draws,
      loses: data.fixtures.loses
    };
    console.log(fixturesTotal);
    setFixtures(fixturesTotal);
    setIsLoaded(true);
  };
  const nextButtonHandler = () => {
    setPage(page + 1);
  };
  const prevButtonHandler = () => {
    setPage(page - 1);
  };
  useEffect(() => {
    getTeamStatics();
  }, []);
  let UEFAticket = null;
  if (rank <= 4 && rank >= 1) {
    UEFAticket = "Champions League";
  } else if (rank <= 6) {
    UEFAticket = "EUROPA League";
  } else if (rank === 7) {
    UEFAticket = "UEROPA Conference League";
  }
  let context;
  if (page === 1) {
    context = (
      <div className={styles.info}>
        {isLoaded && (
          <div className={styles.team}>
            <p>{selectedTeam.team.name}</p>
            {UEFAticket && <p className={styles.ticket}>{UEFAticket}</p>}
          </div>
        )}
        {isLoaded && <PieChartFootball data={fixtures} />}
        <button
          className={styles.next}
          onClick={nextButtonHandler}
        >{`>`}</button>
      </div>
    );
  } else if (page === 2) {
    context = (
      <div className={styles.info}>
        <button
          className={styles.prev}
          onClick={prevButtonHandler}
        >{`<`}</button>
        <GoalStatics data={selectedTeam} />
        <button
          className={styles.next}
          onClick={nextButtonHandler}
        >{`>`}</button>
      </div>
    );
  } else if (page === 3){
    context = <NextFixtures/>
  }
  return <Modal onClick={props.onClose}>{context}</Modal>;
};
export default Statics;
