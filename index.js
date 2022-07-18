import React from "react";
import ReactDOM from "react-dom";

const navbar = (
  <nav>
    <h1>Hayden's Project Page</h1>
    <ul>
      <li>Projects</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
)

ReactDOM.render(navbar, document.getElementById("root"))
