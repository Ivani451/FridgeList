import React, { Component } from "react";
import Home from "./Home";
import FoodInfo from "containers/FoodInfo";
import RecipeForm from "containers/RecipeForm";
import Header from "./Header";
import "../App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="container">
            <header id="main-header">
              <Header />
            </header>

            <Route exact path="/" component={withRouter(Home)} />
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

export default App;
