import { combineReducers } from "redux";
import foodReducer from "./foodReducer";
import infoReducer from "./infoReducer";
import authReducer from "./authReducer";
import myRecipesReducer from "./myRecipesReducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  food: foodReducer,
  info: infoReducer,
  auth: authReducer,
  recipes: myRecipesReducer,
  form: formReducer
});

export default rootReducer;
