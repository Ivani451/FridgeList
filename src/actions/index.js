import axios from "axios";
import { FETCH_FOOD } from "./types";

export const fetchFood = () => async dispatch => {
  const config = {
    headers: {
      "X-Mashape-Key": "uyQXZtNhmjmshd8C2cUfXQnqoYuRp1b2kgKjsnK6k86LQg22rs",
      "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com"
    }
  };
  const res = await axios.get(
    "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/products/search?query=snickers&offset=0&number=10&maxCalories=5000&minProtein=0&maxProtein=100&minFat=0&maxFat=100&minCarbs=0&maxCarbs=100&minCalories=0",
    config
  );

  dispatch({ type: FETCH_FOOD, payload: res });
};
