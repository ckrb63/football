import Modal from "./Modal";
import { useSelector } from "react-redux";
import APIKEYS from "../../secret/key";
import { useEffect, useState } from "react";
import PieChartFootball from "./PieChartFootball";

const data02 = [
  {
    "name": "Group A",
    "value": 2400
  },
  {
    "name": "Group B",
    "value": 4567
  },
  {
    "name": "Group C",
    "value": 1398
  },
  {
    "name": "Group D",
    "value": 9800
  },
  {
    "name": "Group E",
    "value": 3908
  },
  {
    "name": "Group F",
    "value": 4800
  }
];
const Statics = (props) => {
  const team = useSelector((state) => state.team);
  const season = useSelector((state) => state.season);
  const league = useSelector((state) => state.league);
  const [fixtures, setFixtures] = useState({});
  const [isLoaded, setIsLoaded] =  useState(false);
  const getTeamStatics = async () => {
    const response = await fetch(
      `https://api-football-v1.p.rapidapi.com/v3/teams/statistics?league=${league}&season=${season}&team=${team}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": APIKEYS,
        },
      }
    );
    let data = await response.json();
    data = data.response;
    const fixturesTotal = {
      played : data.fixtures.played,
      wins : data.fixtures.wins,
      draws : data.fixtures.draws,
      loses : data.fixtures.loses
    };
    console.log(fixturesTotal);
    setFixtures(fixturesTotal);
    setIsLoaded(true);
  };
  useEffect(() => {
    getTeamStatics();
  }, []);
  return (
    <Modal onClick={props.onClose}>
      {isLoaded && <PieChartFootball data={fixtures}/>}
    </Modal>
  );
};
export default Statics;
