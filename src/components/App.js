import React, { Component } from "react";
import Home from "./Home";
import FoodInfo from "../containers/FoodInfo";
import "../App.scss";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div>
            <header id="main-header">
              <h1>ReciFridge</h1>
            </header>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
            <hr />
            <Route exact strict path="/" component={Home} />
            <Route exact strict path="/cool" component={FoodInfo} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
