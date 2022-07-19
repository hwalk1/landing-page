import React from 'react';
import ReactDOM from 'react-dom/client';


const page = (
  <div>
    <img src='./logo192.png' alt='React Logo' width='40px'></img>
    <h1>Fun Facts About React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was origionally created by Jordan Walke</li>
      <li>Has well over 100k starts on Github</li>
      <li>Is maintined by Meta</li>
      <li>Powers 1000's of apps</li>
    </ul>
  </div>
)

ReactDOM.createRoot(document.getElementById("root")).render(page)
