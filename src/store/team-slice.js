import { createSlice } from "@reduxjs/toolkit";

const teamSlice = createSlice({
  name: "team",
  initialState: {
    season: null,
    league: null,
    team: null,
  },
  reducers:{
    setTeam(state,action){
      state.team = action.payload;
    },
    setSeasonLeague(state,action){
      state.season = action.payload.season;
      state.league = action.payload.league;
    }
  }
});

export const teamActions = teamSlice.actions;

export default teamSlice.reducer;