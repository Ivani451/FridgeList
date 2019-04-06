import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import RecipeField from "./RecipeField";
import InstructionsField from "./InstructionsField";

// Array of objects, each with properties corresponding to a specific
// field. Just "DRY'ing" the code for less bloat.
const FIELDS = [
  { label: "Author", name: "author", component: RecipeField },
  { label: "Recipe Title", name: "title", component: RecipeField },
  { label: "Prep Time (minutes)", name: "prep", component: RecipeField },
  { label: "Servings", name: "servings", component: RecipeField },
  {
    label: "Ingredients (seperate by commas)",
    name: "ingredients",
    component: RecipeField
  },
  { label: "Instructions", name: "instructions", component: InstructionsField }
];

// Setting up forms using redux-form
class RecipeForm extends Component {
  renderFields() {
    // label, name, and component properties are destructured from each object in our FIELDS array
    return FIELDS.map(({ label, name, component }) => {
      return (
        <Field type="text" label={label} name={name} component={component} />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit" id="formSubmit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "recipeForm"
})(RecipeForm);
