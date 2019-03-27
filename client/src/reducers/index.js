import { combineReducers } from "redux";
import FoodReducer from "./reducer_food";
import InfoReducer from "./reducer_info";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  food: FoodReducer,
  info: InfoReducer,
  form: formReducer
});

export default rootReducer;
