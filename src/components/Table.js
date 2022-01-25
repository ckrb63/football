import react, { useState } from 'react';
import LeagueTab from './LeagueTab';
import RankingTab from './RankingTab';
/*
france : 61
german : 78
spain : 140
italy : 135
england : 39
*/
const Table = () => {
  const [selectedLeague, setSelectedLeague] = useState(39);
  const getLeagueName = (selected) => {
    setSelectedLeague(selected);
    console.log(selected);
  };
  return <react.Fragment>
    <LeagueTab selected={getLeagueName}/>
    <RankingTab selected={selectedLeague}/>
  </react.Fragment>;
};

export default Table;
