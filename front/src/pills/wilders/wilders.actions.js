import getWildersByCampusFromAPI from "../../API/getWildersByCampusFromAPI";

// ACTIONS
export const UPDATE_WILDERS = "@wilders/UPDATE_WILDERS";

// ACTION CREATORS
export const updateWilders = wilders => {
  return { type: UPDATE_WILDERS, wilders };
};

export function getWilders(campusId) {
  return async dispatch => {
    const wilders = await getWildersByCampusFromAPI(campusId);
    dispatch(updateWilders(wilders));
  };
}
