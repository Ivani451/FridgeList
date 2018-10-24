import { FETCH_FOOD } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_FOOD:
      return [action.payload.data];
    default:
      return state;
  }
}
