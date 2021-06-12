import axios from "axios";
import {
  FETCH_FOOD,
  FETCH_INFO,
  FETCH_RECIPES,
  DELETE_RECIPE,
  FETCH_USER,
  FETCH_MY_RECIPE,
  FETCH_MY_INFO,
  SUBMIT_RECIPE,
} from "./types";

// fetchUser action creator used to check if user is logged in or not
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchFood = (...food) => async (dispatch) => {
  // The call to our Food API is set up and triggered

  console.log(food);

  const config = {
    method: "GET",
    url:
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": "KhV20lncoSmshTs0jbXgjj2SOXoxp1YQnjpjsnUz0hrHV56mQI",
    },
    params: {
      number: "10",
      ranking: "1",
      ignorePantry: "false",
      ingredients: food[0],
    },
  };

  const res = await axios(config);
  dispatch({ type: FETCH_FOOD, payload: res });
};

// We use this action to call our API again, but this time with the food.id that we obtained
// from the action above in order to render the ingredients for the recipe

export const fetchInfo = (foodId) => async (dispatch) => {
  // The call to our Food API is set up and triggered

  const config = {
    method: "GET",
    url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${foodId}/information`,
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "x-rapidapi-key": "KhV20lncoSmshTs0jbXgjj2SOXoxp1YQnjpjsnUz0hrHV56mQI",
    },
  };

  const res = await axios(config);
  dispatch({ type: FETCH_INFO, payload: res });
};

export const fetchMyInfo = (foodId) => async (dispatch) => {
  const res = await axios.get(`/api/recipes/${foodId}`);
  dispatch({ type: FETCH_MY_INFO, payload: res });
};

// Fetch all the user's saved recipes
export const fetchMyRecipes = () => async (dispatch) => {
  const res = await axios.get("/api/recipes");
  dispatch({ type: FETCH_RECIPES, payload: res.data });
};

// Fetch a specific user-saved recipe
export const fetchMyRecipeInfo = (id) => async (dispatch) => {
  const res = await axios.get(`/api/recipe/${id}`, id);
  dispatch({ type: FETCH_MY_RECIPE, payload: res.data });
};

// Delete a recipe with the given id
export const deleteRecipe = (id, history) => async (dispatch) => {
  const res = await axios.delete(`/api/recipe/${id}`, id);
  dispatch({ type: DELETE_RECIPE, payload: res.data });
};

// Take the values from the form that the user completed and post these values to our back-end API
export const submitRecipe = (values) => async (dispatch) => {
  const res = await axios.post("/api/recipe", values);

  dispatch({ type: SUBMIT_RECIPE, payload: res.data });
};
