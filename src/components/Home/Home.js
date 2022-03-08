import { Fragment, useRef } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const homeref = useRef();
  const navigate = useNavigate();
  const scrollButton = () => {
    homeref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const fixtureButton = () => {
    navigate("/fixtures");
  };
  return (
    <Fragment>
      <div className={styles.mainpage}>
        <p className={styles.title}>Check the Statistics of Various</p>
        <p className={styles.title}>Football Leagues around the World</p>
        <p className={styles.description}>
          Premier League, Laliga, Bundesliga and +900 leagues & cups.
        </p>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            onClick={scrollButton}
            size="large"
            disableElevation
          >
            START
          </Button>
          <Button variant="outlined" onClick={fixtureButton} size="large">
            FIXTURES
          </Button>
        </Stack>
      </div>
      <div ref={homeref}></div>
    </Fragment>
  );
};
export default Home;
