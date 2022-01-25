import style from './LeagueTab.module.css'
const LeagueTab = (props) => {
  const onClickHandlerPremeir = () => {
    props.selected(39);
  };
  const onClickHandlerLaliga = () => {
    props.selected(140);
  };
  const onClickHandlerBund = () => {
    props.selected(78);
  };
  const onClickHandlerSerie = () => {
    props.selected(135);
  };
  const onClickHandlerLigue = () => {
    props.selected(61);
  };
  return <div className={style.leaguetab}>
    <div id={39} onClick={onClickHandlerPremeir} className={style.league}>
      <h2>Premeir League</h2>
    </div>
    <div id={140} onClick={onClickHandlerLaliga} className={style.league}>
      <h2>LaLiga</h2>
    </div>
    <div id={78} onClick={onClickHandlerBund} className={style.league}>
      <h2>BundesLiga</h2>
    </div>
    <div id={135} onClick={onClickHandlerSerie} className={style.league}>
      <h2>Serie A</h2>
    </div>
    <div id={61} onClick={onClickHandlerLigue} className={style.league}>
      <h2>LIGUE 1</h2>
    </div>
  </div>
};

export default LeagueTab;
