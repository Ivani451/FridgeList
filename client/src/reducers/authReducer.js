import { FETCH_USER } from "../actions/types";

// State is either null, false, or the user model for use in
// verifying that the user is logged in
export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
