import axios from "axios";
import {
  FETCH_FOOD,
  FETCH_INFO,
  FETCH_RECIPES,
  DELETE_RECIPE,
  FETCH_USER,
  FETCH_MY_RECIPE,
  FETCH_MY_INFO
} from "./types";

// fetchUser action creator used to check if user is logged in or not
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchFood = (...food) => async dispatch => {
  // The call to our Food API is set up and triggered
  const config = {
    headers: {
      "X-Mashape-Key": "uyQXZtNhmjmshd8C2cUfXQnqoYuRp1b2kgKjsnK6k86LQg22rs",
      "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com"
    }
  };

  // Here we take the users inputs(ingredients) and encode them into a usable string for the URL

  let ingredients = encodeURIComponent(food);
  let URL = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=${ingredients}&number=10&ranking=1`;

  const res = await axios.get(URL, config);
  dispatch({ type: FETCH_FOOD, payload: res });
};

// We use this action to call our API again, but this time with the food.id that we obtained
// from the action above in order to render the ingredients for the recipe

export const fetchInfo = foodId => async dispatch => {
  // The call to our Food API is set up and triggered

  const config = {
    headers: {
      "X-Mashape-Key": "uyQXZtNhmjmshd8C2cUfXQnqoYuRp1b2kgKjsnK6k86LQg22rs",
      "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com"
    }
  };

  let URL = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${foodId}/information`;

  const res = await axios.get(URL, config);
  dispatch({ type: FETCH_INFO, payload: res });
};

export const fetchMyInfo = foodId => async dispatch => {
  const res = await axios.get(`/api/recipes/${foodId}`);
  dispatch({ type: FETCH_MY_INFO, payload: res });
};

// Fetch all the user's saved recipes
export const fetchMyRecipes = () => async dispatch => {
  const res = await axios.get("/api/recipes");
  dispatch({ type: FETCH_RECIPES, payload: res.data });
};

// Fetch a specific user-saved recipe
export const fetchMyRecipeInfo = id => async dispatch => {
  const res = await axios.get(`/api/recipe/${id}`, id);
  dispatch({ type: FETCH_MY_RECIPE, payload: res.data });
};

export const deleteRecipe = (id, history) => async dispatch => {
  const res = await axios.delete(`/api/submissions/delete/${id}`, id);
  history.push("/submissions");
  dispatch({ type: DELETE_RECIPE, payload: res.data });
};

export const submitRecipe = values => async dispatch => {
  const res = await axios.post("/api/recipe", values);

  dispatch({ type: FETCH_USER, payload: res.data });
};

// may need to change this - not sure if authReducer applies here.
// export const submitMyRecipe = values => async dispatch => {
//   const res = await axios.post("/api/recipes", values);

//   dispatch({ type: FETCH_USER, payload: res.data });
// };
