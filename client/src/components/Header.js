import React from "react";
import { Link } from "react-router-dom";

// Header/Navigation bar on top of web page
export default function Header() {
  return (
    <ul className="top-nav">
      <li>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li>
        <Link to="/recipe/new" activeClassName="active">
          Add Recipe
        </Link>
      </li>
    </ul>
  );
}
