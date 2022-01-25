import style from './LeagueTab.module.css'
const LeagueTab = (props) => {
  const onClickHandler = (event) => {
    console.log(event.target.innerHTML);
    props.selected(event.target.innerHTML);
  }
  return <div className={style.leaguetab}>
    <div onClick={onClickHandler} className={style.league}>
      <h2>Premeir League</h2>
    </div>
    <div onClick={onClickHandler} className={style.league}>
      <h2>LaLiga</h2>
    </div>
    <div onClick={onClickHandler} className={style.league}>
      <h2>BundesLiga</h2>
    </div>
    <div onClick={onClickHandler} className={style.league}>
      <h2>Serie A</h2>
    </div>
    <div onClick={onClickHandler} className={style.league}>
      <h2>LIGUE 1</h2>
    </div>
  </div>
};

export default LeagueTab;
