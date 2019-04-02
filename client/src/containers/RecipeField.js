import React from "react";

// "input" is destructured from the props passed in by the redux-form "Field" component
export default ({ input, label }) => {
  return (
    <div id="recipeField">
      <label>{label}</label> <br />
      <input {...input} />
    </div>
  );
};
