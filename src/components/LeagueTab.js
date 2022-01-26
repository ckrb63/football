import style from './LeagueTab.module.css'
const PREMIER_LEAGUE_LOGO = 'https://upload.wikimedia.org/wikipedia/ko/7/73/%ED%94%84%EB%A6%AC%EB%AF%B8%EC%96%B4%EB%A6%AC%EA%B7%B8_%EB%A1%9C%EA%B3%A0.png';
const LALIGA_LOGO = 'https://w.namu.la/s/35a83b662469269e18c2a36d5a599c0b7143528946adbe4023524bc21c4f138e6fc5ab6cf8babc8a2246a3f8f12895444495e8b7faab51b385fc67b76291b80fb11e3cf33a6f031f9076f8f0aba36866';
const BUNDESLIGA_LOGO = 'https://upload.wikimedia.org/wikipedia/ko/thumb/d/df/Bundesliga_logo_%282017%29.svg/1200px-Bundesliga_logo_%282017%29.svg.png';
const SERIE_A_LOGO = 'https://w.namu.la/s/6b5f65aeaf171d67b818eca42e0a6cd30c46af4db3288213dfec636562a38b0585ee4fbd95baca1a386727886802cb19072e9ed91a921a7333b8d9973850a2cddba54e5f9d647c934661a8f1bceff4ab';
const LIGUE_1_LOGO = 'https://w.namu.la/s/a316f704d9fcefc9d200310866baaed1a33a7a4c172d688d37f75c7c7ab7dabb27ff13ed2f13bb8ac778da43e6f08936d46d5f0e329c4e96757446f744da2a4bf5123b4fe9712260a95088254782e2d5';
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
      <img src={PREMIER_LEAGUE_LOGO} alt='PREMIER_LEAGUE'></img>
    </div>
    <div id={140} onClick={onClickHandlerLaliga} className={`${style.league} ${style.laliga}`}>
      <img src={LALIGA_LOGO} alt='LALIGA'></img>
    </div>
    <div id={78} onClick={onClickHandlerBund} className={style.league}>
      <img src={BUNDESLIGA_LOGO} alt='BUNDESLIGA'></img>
    </div>
    <div id={135} onClick={onClickHandlerSerie} className={style.league}>
      <img src={SERIE_A_LOGO} alt='SERIE_A'></img>
    </div>
    <div id={61} onClick={onClickHandlerLigue} className={`${style.league} ${style.league1}`}>
      <img src={LIGUE_1_LOGO} alt='LIGUE_1'></img>
    </div>
  </div>
};

export default LeagueTab;
