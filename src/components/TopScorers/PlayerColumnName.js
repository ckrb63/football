import { Fragment } from 'react';
import style from './PlayerColumnName.module.css';
const PlayerColumnName = (props) => {
  return <Fragment><div className={style.column}>
    <p className={style.team}></p>
    <p className={props.tab === 'scorers' ? style['active']:style['none']}>골</p>
    <p className={props.tab === 'assists' ? style['active']:style['none']}>어시</p>
    <p>경기</p>
    <p>분</p>
    <p>슈팅</p>
    <p>유효</p>
    <p className={style.three}>키패스</p>
    <p className={style.three}>드리블</p>
    <p className={style.four}>평균평점</p>
  </div>
  <hr/></Fragment>
};
export default PlayerColumnName;
