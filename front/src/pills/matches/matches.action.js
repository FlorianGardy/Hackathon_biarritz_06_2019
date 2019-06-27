import getMatchesFromAPI from "../../API/getMatchesFromAPI";

// ACTIONS
export const UPDATE_MATCHES = "@matches/UPDATE_MATCHES";

// ACTION CREATORS
export const updateMatches = matches => {
  return { type: UPDATE_MATCHES, matches };
};

export function getMatches() {
  return async dispatch => {
    const matches = await getMatchesFromAPI();
    dispatch(updateMatches(matches));
  };
}
