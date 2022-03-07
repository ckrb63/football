import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import APIKEYS from "../../secret/key";
import Fixture from "./Fixture";
import FixtureDetail from "./FixtureDetail";
import styles from "./NextFixtures.module.css";
const NextFixtures = (props) => {
  const [context, setContext] = useState([]);
  const team = useSelector((state) => state.team);
  const league = useSelector((state) => state.league);
  const [selectedFixture, setSelectedFixture] = useState(false);
  let tmp = [];
  const [fixtures, setFixtures]= useState([]);
  const getFixtureNumber = (id) => {
    setSelectedFixture(id);
  };
  const getFixtures = async () => {
    const response = await fetch(
      `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${league}&team=${team}&next=5`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": APIKEYS,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setContext(
      data.response.map((fixture) => {
        return <Fixture fixture={fixture} setid={getFixtureNumber}/>;
      })
    );
    // await data.response.map(async(fixture)=>{
    //   const response = await fetch(`https://api-football-v1.p.rapidapi.com/v3/predictions?fixture=${fixture.fixture.id}`, {
    //     "method": "GET",
    //     "headers": {
    //       "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    //       "x-rapidapi-key": APIKEYS
    //     }
    //   });
    //   const data = await response.json();
    //   // fixtures.push(data);
    //   tmp.push(data);
    //   setFixtures(tmp);
    // });
  };
  useEffect(() => {
    getFixtures();
  }, []);
  console.log(fixtures);

  return (
    <div>
      <div>
      <div className={styles.header}>
        <p className={styles.title}>Next 5 Fixtures</p>
        <p className={styles.description}>현지시간 기준</p>
      </div>
      {context}
      </div>
      <FixtureDetail fixtures={fixtures} id={selectedFixture}/>
    </div>
  );
};
export default NextFixtures;
