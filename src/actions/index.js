import axios from "axios";
import { FETCH_FOOD } from "./types";

export const fetchFood = (...food) => async dispatch => {
  // The call to our Food API is set up and triggered
  const config = {
    headers: {
      "X-Mashape-Key": "uyQXZtNhmjmshd8C2cUfXQnqoYuRp1b2kgKjsnK6k86LQg22rs",
      "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com"
    }
  };

  // Here we take the users inputs(ingredients) and transform them to a usable string for our URL.
  let joined = food.join(",");
  let ingredients = joined.replace(/,\s*/g, "%2C");

  let URL = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=${ingredients}&number=5&ranking=1`;

  const res = await axios.get(URL, config);
  dispatch({ type: FETCH_FOOD, payload: res });
};

// We use this action to call our API again, but this time with the food.id that we obtained
// from the action above in order to render the ingredients for the recipe

/*
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

*/

// Here we take the users inputs(ingredients) and transform them to a usable string for our URL.

// let joined = food.join(",");
// let ingredients = joined.replace(/,\s*/g, "%2C");
