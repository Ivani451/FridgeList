import React, { Component } from "react";
import Home from "./Home";
import FoodInfo from "containers/FoodInfo";
import RecipeNew from "containers/RecipeNew";
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
              <h1>ReciFridge</h1>
              <Header />
            </header>

            <Route exact strict path="/" component={withRouter(Home)} />
            <Route
              exact
              strict
              path="/recipe"
              component={withRouter(FoodInfo)}
            />
            <Route exact path="/recipe/new" component={withRouter(RecipeNew)} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
