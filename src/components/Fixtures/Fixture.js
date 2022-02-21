import styles from "./Fixture.module.css";
const Fixture = (props) => {
  const data = props.fixture;
  const date = data.fixture.date.slice(5,10);
  const time = data.fixture.date.slice(11,16);
  const homeTeam = data.teams.home.name;
  const homeTeamLogo = data.teams.home.logo;
  const awayTeam = data.teams.away.name;
  const awayTeamLogo = data.teams.away.logo;
  const stadium = data.fixture.venue.name;
  const fixtureClick = () => {
    props.setid(data.fixture.id);
  };
  return <div className={styles.fixture} onClick={fixtureClick}>
    <span className={styles.date}>{date}</span>
    <span className={styles.time}>{time}</span>
    <span className={styles.stadium}>{stadium}</span>
    <span className={styles.team}>{homeTeam}</span>
    <img src={homeTeamLogo} alt="homeLogo" className={styles.logo}/>
    <span className={styles.vs}>vs</span>
    <img src={awayTeamLogo} alt="awayLogo" className={styles.logo}/>
    <span className={styles.team}>{awayTeam}</span>
  </div>
};
export default Fixture;