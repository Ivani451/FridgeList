import { combineReducers } from "redux";
import FoodReducer from "./reducer_food";

const rootReducer = combineReducers({
  food: FoodReducer
});

export default rootReducer;
