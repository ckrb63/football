import style from './RecentForm.module.css';
import React from 'react';
const RecentForm = (props) => {
  
  const fiveGames = props.form.split('');
  const context = fiveGames.map((game)=>{
    return <div className={`${style[`${game}`]}`}>{game}</div>   
  });
  return <divt className={style.wrapper}>{context}</divt>;
};
export default RecentForm;
