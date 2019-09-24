import {
  FETCH_RECIPES,
  DELETE_RECIPE,
  FETCH_MY_RECIPE
} from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_RECIPES:
      return action.payload.recipes;
    case FETCH_MY_RECIPE:
      return action.payload.result;
    case DELETE_RECIPE:
      console.log("recipes reducer before payload");
      return action.payload;
    default:
      return state;
  }
}
