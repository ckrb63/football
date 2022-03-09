import { useState } from "react";
import Button from "@mui/material/Button";
import style from "./Switch.module.css";
const Switch = (props) => {
  const [teamIsSelected, setTeamIsSelected] = useState(true);
  const setTeamTab = () => {
    props.setTab("TEAM");
    setTeamIsSelected(true);
  };
  const setPlayerTab = () => {
    props.setTab("PLAYER");
    setTeamIsSelected(false);
  };
  const context = teamIsSelected ? (
    <Button variant="outlined" onClick={setPlayerTab} size="large">
      Team Standing
    </Button>
  ) : (
    <Button variant="outlined" onClick={setTeamTab} size="large">
      Players
    </Button>
  );
  return (
    <div className={style.wrapper}>
      {context}
    </div>
  );
};
export default Switch;
