import { UPDATE_CAMPUSES } from "./campuses.action";

const initialState = {
  campuses: []
};

export default function campuses(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CAMPUSES:
      return { ...state, campuses: action.campuses };
    default:
      return state;
  }
}
