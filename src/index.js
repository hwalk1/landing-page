import React from "react"
import ReactDOM from "react-dom/client"

function Header() {
  return (
      <header>
        <nav className="nav">
          <img src="./logo192.png" alt="React Logo" className="img" />
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
  );
}

function Footer() {
  return (

      <footer className="footer">
        <p>2022 Walker Development. All rights reserverd</p>
      </footer>
  )
}

function Body() {
  return (
    <div className="content">
      <h1>Reasons I love React! </h1>
      <ol>
        <li>It's easy to use</li>
        <li>It's declarative</li>
        <li>It's a highly in demand skill</li>
      </ol>
    </div>
  )

}

function Page() {

  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Page />)
