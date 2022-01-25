import react, { useState } from 'react';
import LeagueTab from './LeagueTab';
import RankingTab from './RankingTab';
const Table = () => {
  const [selectedLeague, setSelectedLeague] = useState('Premier League');
  const getLeagueName = (selected) => {
    setSelectedLeague(selected);
  };
  return <react.Fragment>
    <LeagueTab selected={getLeagueName}/>
    <RankingTab name={selectedLeague}/>
  </react.Fragment>;
};

export default Table;
