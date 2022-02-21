import styles from "./FixtureDetail.module.css";
const FixtureDetail = (props) => {
  const fixtures = props.fixtures;
  let selectedFixture = false;
  let homeLogo, awayLogo;
  console.log(props.id);
  if(props.id){
  selectedFixture = fixtures.filter((fixture)=>{
    console.log(fixture.parameters.fixture);
    console.log(fixture);
    console.log(toString(props.id));
    console.log(props.id);
    return fixture.parameters.fixture == toString(props.id);
  });}
  if(selectedFixture){
  console.log(selectedFixture);
  homeLogo = selectedFixture.response[0].teams.home.logo;
  awayLogo = selectedFixture.response[0].teams.away.logo;
  }return <div>
    <div>
      <img src={homeLogo} alt="home"/>
      <span>vs</span>
      <img src={awayLogo} alt="away"/>
    </div>
    <div></div>
  </div>
};
export default FixtureDetail;