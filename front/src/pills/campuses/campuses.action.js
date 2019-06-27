import { campuses } from "../../data";

// ACTIONS
export const UPDATE_CAMPUSES = "@campuses/UPDATE_CAMPUSES";

// ACTION CREATORS
export const updateCampuses = () => {
  return { type: UPDATE_CAMPUSES, campuses: campuses };
};
