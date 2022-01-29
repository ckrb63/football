import style from './Switch.module.css';
const Switch = (props) => {
  const setTeamTab = () => {
    props.setTab('TEAM');
  }
  const setPlayerTab = () => {
    props.setTab('PLAYER');
  }
  return <div className={style.wrapper}>
    <div className={style.team} onClick={setTeamTab}>팀 순위</div>
    <div className={style.player} onClick={setPlayerTab}>개인 순위</div>
  </div>
};
export default Switch;
