import { FETCH_INFO } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_INFO:
      return [action.payload.data];
    default:
      return state;
  }
}
