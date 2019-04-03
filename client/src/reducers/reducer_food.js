import { FETCH_FOOD, FETCH_RECIPES, DELETE_RECIPE } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_FOOD:
      return [action.payload.data];
    case FETCH_RECIPES:
      return action.payload;
    case DELETE_RECIPE:
      return action.payload;
    default:
      return state;
  }
}
