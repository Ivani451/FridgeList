import {
  FETCH_RECIPES,
  DELETE_RECIPE,
  FETCH_MY_RECIPE,
  SUBMIT_RECIPE
} from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_RECIPES:
      return action.payload.recipes;
    case FETCH_MY_RECIPE:
      return action.payload.result;
    case DELETE_RECIPE:
      return action.payload;
    case SUBMIT_RECIPE:
      return action.payload;
    default:
      return state;
  }
}
