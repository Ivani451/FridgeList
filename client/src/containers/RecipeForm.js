import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import RecipeField from "./RecipeField";
import InstructionsField from "./InstructionsField";

const FIELDS = [
  { label: "Author", name: "author", component: RecipeField },
  { label: "Recipe Title", name: "title", component: RecipeField },
  { label: "Prep Time", name: "prep", component: RecipeField },
  { label: "Servings", name: "servings", component: RecipeField },
  { label: "Ingredients", name: "ingredients", component: RecipeField },
  {
    label: "Instructions",
    name: "instructions",
    component: InstructionsField
  }
];

// Setting up forms using redux-form
class RecipeForm extends Component {
  renderFields() {
    return FIELDS.map(field => {
      return (
        <Field
          type="text"
          label={field.label}
          name={field.name}
          component={field.component}
        />
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
