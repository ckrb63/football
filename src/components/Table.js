import react, { useState } from 'react';
import LeagueTab from './LeagueTab';
import RankingTab from './RankingTab';
import Switch from './Switch';
import TopScorers from './TopScorers/TopScorers';
import YearSelectBox from './YearSelectBox';
import style from './Table.module.css';
/*
france : 61
german : 78
spain : 140
italy : 135
england : 39
*/


const Table = () => {
  const [selectedYear, setSelectedYear] = useState('2021');
  const [attackPoint, setAttackPoint] = useState('Goal');
  const [selectedTab, setSelectedTab] = useState('TEAM');
  const [selectedLeague, setSelectedLeague] = useState(39);
  const getLeagueName = (selected) => {
    setSelectedLeague(selected);
    console.log(selected);
  };
  const goalTabHandler = () => {
    setAttackPoint('scorers');
  };
  const assistTabHandler = () => {
    setAttackPoint('assists');
  };
  // const filterChangeHandler = (event) =>{
  //   setSelectedYear(event.target.value);
  // }
  const attackPointTab = <div className={style.attackPoint}>
    <span onClick={goalTabHandler} className={attackPoint==='scorers' ? style['goal-active'] : style['goal']}>Goal</span>
    <span onClick={assistTabHandler} className={attackPoint==='assists' ? style['assist-active'] : style['assist']}>Assist</span>
  </div>
  let context;
  switch(selectedTab){
    case 'TEAM':
      context = <RankingTab selected={selectedLeague} year={selectedYear}/>;
      break;
    case 'PLAYER':
      context = <TopScorers season={selectedYear} league={selectedLeague} switch={attackPoint}/>;
      break;
    default:
      context = <RankingTab selected={selectedLeague} year={selectedYear}/>;
  }
  return <react.Fragment>
    <LeagueTab selected={getLeagueName}/>
    <div>
      <Switch setTab={setSelectedTab}/>
      {selectedTab==='PLAYER' && attackPointTab}
      <YearSelectBox year={selectedYear} onChange={setSelectedYear}/>
    </div>
    {context}
  </react.Fragment>;
};

export default Table;
