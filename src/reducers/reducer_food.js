import { FETCH_FOOD } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_FOOD:
      return [...state, action.payload.data[0]];
    default:
      return state;
  }
}
