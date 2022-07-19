import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const navbar = (
  <nav>
    <h1>Hayden's Project Page!</h1>
    <ul>
      <li>Projects</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
)


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(navbar)
