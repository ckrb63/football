import style from './ColumnName.module.css';
const ColumnName = () => {
  return <div className={style.column}>
    <p className={style.team}>Team</p>
    <p>경기</p>
    <p>승</p>
    <p>무</p>
    <p>패</p>
    <p>득점</p>
    <p>실점</p>
    <p>GD</p>
    <p>승점</p>
    <p className={style.recent}>최근 5경기</p>
  </div>
};
export default ColumnName;
