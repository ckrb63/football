import { Fragment, useRef } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
const Home = () => {
  const homeref = useRef();
  const scrollButton = () => {
    homeref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const fixtureButton = () => {

  };
  return <Fragment>
  <div className={styles.mainpage}>
    <p className={styles.title}>Check the Statistics of Various</p>
    <p className={styles.title}>Football Leagues around the World</p>
    <p className={styles.description}>Premier League, Laliga, Bundesliga and +900 leagues & cups.</p>
    <div>
      <button className={styles.start} onClick={scrollButton}>START</button>
      <Link to='/fixtures'>
      <button className={styles.fixture}>FIXTURES</button>
      </Link>
    </div>
  </div>
  <div ref={homeref}></div>
  </Fragment>
};
export default Home;