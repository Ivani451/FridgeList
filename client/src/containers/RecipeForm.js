import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import RecipeField from "./RecipeField";

class RecipeForm extends Component {
  renderFields() {
    return (
      <div>
        <Field type="text" name="title" component={RecipeField} />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "recipeForm"
})(RecipeForm);
