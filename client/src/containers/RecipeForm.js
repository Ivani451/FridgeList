import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import RecipeField from "./RecipeField";
import InstructionsField from "./InstructionsField";

// Setting up forms using redux-form
class RecipeForm extends Component {
  renderFields() {
    return (
      <div id="recipeForm">
        <Field
          label="Recipe Title"
          type="text"
          name="title"
          component={RecipeField}
        />
        <Field
          label="Prep Time"
          type="text"
          name="prep"
          component={RecipeField}
        />
        <Field
          label="Servings"
          type="text"
          name="servings"
          component={RecipeField}
        />
        <Field
          label="Ingredients"
          type="text"
          name="ingredients"
          component={RecipeField}
        />
        <Field
          label="Instructions"
          type="text"
          name="instructions"
          component={InstructionsField}
        />
        <Field
          label="Author"
          type="text"
          name="author"
          component={RecipeField}
        />
      </div>
    );
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
