import { Fragment, useRef } from "react";
import styles from "./Home.module.css";
const Home = () => {
  const homeref = useRef();
  const scrollButton = () => {
    homeref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return <Fragment>
  <div className={styles.mainpage}>
    <p className={styles.title}>Check the Statistics of Various</p>
    <p className={styles.title}>Football Leagues around the World</p>
    <p className={styles.description}>Premier League, Laliga, Bundesliga and +900 leagues & cups.</p>
    <button className={styles.start} onClick={scrollButton}>START</button>
  </div>
  <div ref={homeref}></div>
  </Fragment>
};
export default Home;