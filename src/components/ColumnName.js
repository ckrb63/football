import { useEffect, useState } from 'react';
import style from './ColumnName.module.css';
const ColumnName = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollHandler = () => {
    if(window.pageYOffset>1100){
      setIsScrolled(true);
    }else{
      setIsScrolled(false);
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll", scrollHandler)
  },[]);
  return <div><div className={isScrolled ? `${style.column} ${style.scrolled}` : style['column']}>
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
  <hr className={style.line}/>
  </div>
};
export default ColumnName;
