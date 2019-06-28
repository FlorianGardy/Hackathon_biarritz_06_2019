import getCampusesFromAPI from "../../API/getCampusesFromAPI";

// ACTIONS
export const UPDATE_CAMPUSES = "@campuses/UPDATE_CAMPUSES";

// ACTION CREATORS
export const updateCampuses = campuses => {
  return { type: UPDATE_CAMPUSES, campuses };
};

export function getCampuses() {
  return async dispatch => {
    const campuses = await getCampusesFromAPI();
    dispatch(updateCampuses(campuses));
  };
}
