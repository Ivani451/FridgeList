import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <ul className="top-nav">
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  );
}
