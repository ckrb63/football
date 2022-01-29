import style from './RecentForm.module.css';
import React from 'react';
const RecentForm = (props) => {
  
  const fiveGames = props.form.split('');
  const context = fiveGames.map((game,idx)=>{
    return <div key={idx} className={`${style[`${game}`]}`}>{game}</div>   
  });
  return <div className={style.wrapper}>{context}</div>;
};
export default RecentForm;
