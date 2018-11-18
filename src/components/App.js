import React, { Component } from "react";
import Home from "./Home";
import FoodInfo from "../containers/FoodInfo";
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
          <div>
            <header id="main-header">
              <h1>ReciFridge</h1>
              <Header />
            </header>

            <Route exact strict path="/" component={withRouter(Home)} />
            <Route exact strict path="/cool" component={withRouter(FoodInfo)} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
