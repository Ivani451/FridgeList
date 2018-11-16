import React, { Component } from "react";
import Home from "./Home";
import "../App.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
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
        </div>
      </Router>
    );
  }
}

export default App;
