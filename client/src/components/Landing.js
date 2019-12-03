import React from "react";

const Landing = () => {
  return (
    <div id="landing-page">
      <div id="banner">
        <h2 id="landing-info">
          Search for your Favorite Recipes <br /> &amp; Discover New Food
        </h2>
      </div>

      <ul>
        <div id="groceries-row">
          <div id="groceries">
            <p>hidden text</p>
          </div>
          <li>Find new recipes using the ingredients you have.</li>
        </div>

        <div id="groceries-row">
          <div id="steak">
            <p>hidden text</p>
          </div>
          <li>Filter recipes to see if they're keto friendly!</li>
        </div>

        <div id="groceries-row">
          <div id="stew">
            <p>hidden text</p>
          </div>
          <li>Submit your own recipes for others to find!</li>
        </div>
      </ul>

      <footer>
        Copyright © 2019 Ivani Aviles-Carbajal <br /> Icon made by Smashicons
        from www.flaticon.com
      </footer>
    </div>
  );
};

export default Landing;
