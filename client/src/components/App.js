import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import "../App.scss";
import Home from "./Home";
import FoodInfo from "containers/FoodInfo";
import RecipeForm from "containers/RecipeForm";
import Header from "./Header";
import Landing from "./Landing";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Router>
        <Switch>
          <div className="container">
            <Header />

            <Route exact path="/" component={withRouter(Landing)} />
            <Route exact path="/recipes" component={withRouter(Home)} />

            <Route
              exact
              strict
              path="/recipe"
              component={withRouter(FoodInfo)}
            />
            <Route
              exact
              path="/recipe/new"
              component={withRouter(RecipeForm)}
            />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default connect(
  null,
  actions
)(App);
