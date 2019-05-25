import { FETCH_RECIPES, DELETE_RECIPE } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_RECIPES:
      console.log(action.payload.recipes);
      return action.payload.recipes;
    case DELETE_RECIPE:
      return action.payload;
    default:
      return state;
  }
}
