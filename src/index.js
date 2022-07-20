import React from "react"
import ReactDOM from "react-dom/client"

function Page() {

  return (
    <div>
      <header>
        <nav>
          <img src="./logo192.png" alt="React Logo" width='40px' />
        </nav>
      </header>
      <h1>Reasons I love React! </h1>
      <ol>
        <li>It's easy to use</li>
        <li>It's declarative</li>
        <li>It's a highly in demand skill</li>
      </ol>
      <footer>
        <p>2022 Walker Development. All rights reserverd</p>
      </footer>
    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Page />)
