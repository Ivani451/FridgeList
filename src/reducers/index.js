import { combineReducers } from "redux";
import FoodReducer from "./reducer_food";
import InfoReducer from "./reducer_info";

const rootReducer = combineReducers({
  food: FoodReducer,
  info: InfoReducer
});

export default rootReducer;
