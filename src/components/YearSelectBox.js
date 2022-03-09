import style from "./YearSelectBox.module.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const YearSelectBox = (props) => {
  const [season, setSeason] = useState(2021);
  const filterChangeHandler = (event) => {
    props.onChange(event.target.value);
    setSeason(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 120 }} className={style.yearbox}>
      <FormControl fullWidth size="small">
        <InputLabel className={style.input} id="demo-simple-select-label">Season</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={season}
          label="Age"
          onChange={filterChangeHandler}
        >
          <MenuItem value="2021">2021</MenuItem>
          <MenuItem value="2020">2020</MenuItem>
          <MenuItem value="2019">2019</MenuItem>
          <MenuItem value="2018">2018</MenuItem>
          <MenuItem value="2017">2017</MenuItem>
          <MenuItem value="2016">2016</MenuItem>
          <MenuItem value="2015">2015</MenuItem>
          <MenuItem value="2014">2014</MenuItem>
          <MenuItem value="2013">2013</MenuItem>
          <MenuItem value="2012">2012</MenuItem>
          <MenuItem value="2011">2011</MenuItem>
          <MenuItem value="2010">2010</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
export default YearSelectBox;
