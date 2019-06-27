import { wilders } from "../../data";

// ACTIONS
export const UPDATE_WILDERS = "@wilders/UPDATE_WILDERS";

// ACTION CREATORS
export const updateWilders = () => {
  return { type: UPDATE_WILDERS, wilders: wilders };
};
