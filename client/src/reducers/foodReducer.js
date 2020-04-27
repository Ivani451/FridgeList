import { FETCH_FOOD, FETCH_RECIPES } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_FOOD:
      console.log(action.payload);
      return [action.payload.data];
    case FETCH_RECIPES:
      return action.payload;
    default:
      return state;
  }
}
