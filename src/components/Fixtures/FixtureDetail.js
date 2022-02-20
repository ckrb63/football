import styles from "./FixtureDetail.module.css";
const FixtureDetail = (props) => {
  const fixtures = props.fixtures;
  console.log(fixtures);
  console.log(props);
  return <div>
    <div>
      <img/>
      <span>vs</span>
      <img/>
    </div>
    <div></div>
  </div>
};
export default FixtureDetail;