import styles from "./GoalStatics.module.css";

const GoalStatics = (props) => {
  const goals = props.data.goals;
  return (
    <div>
      <div className={styles.average}>
        <div className={styles.averageWrapper}>
          <p className={styles.title}>Average PF</p>
          <div>
            <p>{`Home - ${goals.for.average.home}`}</p>
            <p>{`Away - ${goals.for.average.away}`}</p>
            <p>{`Total - ${goals.for.average.total}`}</p>
          </div>
        </div>
        <div className={styles.averageWrapper}>
          <p className={styles.title}>Average PA</p>
          <div>
            <p>{`Home - ${goals.against.average.home}`}</p>
            <p>{`Away - ${goals.against.average.away}`}</p>
            <p>{`Total - ${goals.against.average.total}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GoalStatics;
