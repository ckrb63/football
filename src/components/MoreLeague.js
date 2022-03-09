import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import style from "./MoreLeague.module.css";
import { useEffect, useState } from "react";

const MoreLeague = (props) => {
  const [selectedLeague, setSelectedLeague] = useState(props.initLeague);
  const [leagueList, setLeagueList] = useState([]);
  const filterChangeHandler = (event) => {
    props.selectLeague(event.target.value);
    setSelectedLeague(event.target.value);
  };

  const getMoreLeague = async () => {
    const response = await fetch("https://api-football-v1.p.rapidapi.com/v3/leagues?type=league", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "2a2bb8b759msh33b0d06dea6a14fp1750fdjsn919ef2a0eb69",
      },
    });
    const data = await response.json();
    setLeagueList(data.response);
  };
  useEffect(()=>{
    getMoreLeague();
  },[]);
  console.log(leagueList);
  const selectLeagueItem = leagueList.map(league => {
    return <MenuItem value={league.league.id}><img src={league.country.flag} alt="flag" className={style.flag}/>{league.league.name}</MenuItem>
  })
  return (
    <Box sx={{ minWidth: 120 }} className={style.moreleague}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">
          League
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedLeague}
          label="League"
          onChange={filterChangeHandler}
        >
          {selectLeagueItem}
        </Select>
      </FormControl>
    </Box>
  );
};
export default MoreLeague;
