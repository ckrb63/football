import styles from "./GoalStatics.module.css";
import GoalMinuteGraph from "./GoalMinuteGraph";
import { useState } from "react";
const GoalStatics = (props) => {
  const goals = props.data.goals;
  const penalty = props.data.penalty;
  const failed = props.data["failed_to_score"].total;
  const cleanSheet = props.data["clean_sheet"].total;
  const [foragainst, setForagainst] = useState(true);
  console.log(goals);
  const forButtonClick = () => {
    setForagainst(true);
  };
  const againstButtonClick = () => {
    setForagainst(false);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.average}>
        <div
          className={
            foragainst ? styles.averageWrapperSelected : styles.averageWrapper
          }
          onClick={forButtonClick}
        >
          <p className={styles.title}>Average PF</p>
          <div>
            <p>{`Home - ${goals.for.average.home}`}</p>
            <p>{`Away - ${goals.for.average.away}`}</p>
            <p>{`Total - ${goals.for.average.total}`}</p>
          </div>
        </div>
        <div
          className={
            foragainst ? styles.averageWrapper : styles.averageWrapperSelected
          }
          onClick={againstButtonClick}
        >
          <p className={styles.title}>Average PA</p>
          <div>
            <p>{`Home - ${goals.against.average.home}`}</p>
            <p>{`Away - ${goals.against.average.away}`}</p>
            <p>{`Total - ${goals.against.average.total}`}</p>
          </div>
        </div>
        <div className={styles.totalInfo}>
          <p className={styles.totalTitle}>{foragainst ? "⚽PF" : "❌PA"}</p>
          <div>
            <p>{`Home - ${
              foragainst ? goals.for.total.home : goals.against.total.home
            }`}</p>
            <p>{`Away - ${
              foragainst ? goals.for.total.away : goals.against.total.away
            }`}</p>
            <p>{`Total - ${
              foragainst ? goals.for.total.total : goals.against.total.total
            }`}</p>
          </div>
          {foragainst && (
            <div>
              <p className={styles.penalty}>{`failed to score ${failed}`}</p>
              <p
                className={styles.penalty}
              >{`penalty goals ${penalty.total}`}</p>
            </div>
          )}
          {!foragainst && (
            <p className={styles.penalty}>{`clean sheet ${cleanSheet}`}</p>
          )}
        </div>
      </div>
      <GoalMinuteGraph
        against={goals.against}
        for={goals.for}
        type={foragainst}
      />
      <div className={styles.totalGoalInfo}>
        <div className={styles.totalGoalInfoFocus}>
          <p>PF</p>
          <p>{goals.for.total.total}</p>
        </div>
        <div className={styles.totalGoalInfoFocus}>
          <p>PA</p>
          <p>{goals.against.total.total}</p>
        </div>
        <div className={styles.totalGoalInfoFocus}>
          <p>GD</p>
          <p>{goals.for.total.total - goals.against.total.total}</p>
        </div>
      </div>
    </div>
  );
};
export default GoalStatics;
