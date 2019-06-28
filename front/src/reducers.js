import { combineReducers } from "redux";

import campusesReducer from "./pills/campuses/campuses.reducer.js";
import wildersReducer from "./pills/wilders/wilders.reducer.js";
import matchesReducer from "./pills/matches/matches.reducer.js";

export default combineReducers({
  campusesReducer,
  wildersReducer,
  matchesReducer
});
