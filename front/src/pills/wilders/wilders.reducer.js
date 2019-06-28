import { UPDATE_WILDERS } from "./wilders.actions";

const initialState = {
  wilders: []
};

export default function wilders(state = initialState, action) {
  switch (action.type) {
    case UPDATE_WILDERS:
      return { ...state, wilders: action.wilders };
    default:
      return state;
  }
}
