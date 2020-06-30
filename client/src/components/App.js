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
import SearchList from "./SearchList";
import MyFoodInfo from "containers/MyFoodInfo";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  // the React.Fragment element replaced a div. The div was replalced because you get an error
  // if you put a div inside a Switch element
  render() {
    return (
      <Router>
        <Switch>
          <React.Fragment>
            <Header />
            <Route exact path="/" component={withRouter(Landing)} />
            <Route exact path="/recipes" component={withRouter(Home)} />

            <Route
              exact
              strict
              path="/recipe/:id"
              component={withRouter(FoodInfo)}
            />

            <Route
              exact
              strict
              path="/my-recipe/:id"
              component={withRouter(MyFoodInfo)}
            />

            <Route
              exact
              path="/recipe/new"
              component={withRouter(RecipeForm)}
            />

            <Route
              exact
              path="/search-results"
              component={withRouter(SearchList)}
            />
          </React.Fragment>
        </Switch>
      </Router>
    );
  }
}

export default connect(
  null,
  actions
)(App);
