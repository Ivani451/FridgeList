import {
  FETCH_RECIPES,
  DELETE_RECIPE,
  FETCH_MY_RECIPE
} from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_RECIPES:
      console.log(action.payload.recipes);
      return action.payload.recipes;
    case FETCH_MY_RECIPE:
      console.log(action.payload.result);
      return action.payload.result;
    case DELETE_RECIPE:
      return action.payload;
    default:
      return state;
  }
}
