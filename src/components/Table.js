import react, { useState } from "react";
import LeagueTab from "./LeagueTab";
import Button from "@mui/material/Button";
import RankingTab from "./RankingTab";
import Switch from "./Switch";
import TopScorers from "./TopScorers/TopScorers";
import YearSelectBox from "./YearSelectBox";
import style from "./Table.module.css";
import MoreLeague from "./MoreLeague";
/*
france : 61
german : 78
spain : 140
italy : 135
england : 39
*/

const Table = () => {
  const [selectedYear, setSelectedYear] = useState("2021");
  const [attackPoint, setAttackPoint] = useState("scorers");
  const [selectedTab, setSelectedTab] = useState("TEAM");
  const [selectedLeague, setSelectedLeague] = useState(39);
  const getLeagueName = (selected) => {
    setSelectedLeague(selected);
    console.log(selected);
  };
  const goalTabHandler = () => {
    setAttackPoint("scorers");
  };
  const assistTabHandler = () => {
    setAttackPoint("assists");
  };
  // const filterChangeHandler = (event) =>{
  //   setSelectedYear(event.target.value);
  // }
  const attackPointTab = (
    <div className={style.switch}>
      {attackPoint === "scorers" ? (
        <Button variant="outlined" onClick={assistTabHandler} size="large">
          Goals
        </Button>
      ) : (
        <Button variant="outlined" onClick={goalTabHandler} size="large">
          Assists
        </Button>
      )}
    </div>
  );
  let context;
  switch (selectedTab) {
    case "TEAM":
      context = <RankingTab selected={selectedLeague} year={selectedYear} />;
      break;
    case "PLAYER":
      context = (
        <TopScorers
          season={selectedYear}
          league={selectedLeague}
          switch={attackPoint}
        />
      );
      break;
    default:
      context = <RankingTab selected={selectedLeague} year={selectedYear} />;
  }
  return (
    <react.Fragment>
      <LeagueTab selected={getLeagueName} />
      <div className={style.maincontent}>
        <div className={style.wrapper}>
          <div className={style.info}>
            <Switch setTab={setSelectedTab} tab={selectedTab} />
            {selectedTab === "PLAYER" && attackPointTab}
          </div>
          <div className={style.info}>
            <MoreLeague
              initLeague={selectedLeague}
              selectLeague={getLeagueName}
            />
            <YearSelectBox year={selectedYear} onChange={setSelectedYear} />
          </div>
        </div>
        {context}
      </div>
    </react.Fragment>
  );
};

export default Table;
