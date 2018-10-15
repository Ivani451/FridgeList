import { FETCH_FOOD } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_FOOD:
      console.log(action.payload.data.products[0]);
      return [action.payload.data.products[0]];
    default:
      return state;
  }
}
