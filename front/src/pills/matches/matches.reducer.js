import { UPDATE_MATCHES } from "./matches.action";

const initialState = {
  matches: []
};

export default function matches(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MATCHES:
      return { ...state, matches: action.matches };
    default:
      return state;
  }
}
