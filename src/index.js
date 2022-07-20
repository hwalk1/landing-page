import React from "react"
import ReactDOM from "react-dom/client"

function Header() {
  return (
      <header>
        <nav>
          <img src="./logo192.png" alt="React Logo" width='40px' />
        </nav>
      </header>
  );
}

function Footer() {
  return (

      <footer>
        <p>2022 Walker Development. All rights reserverd</p>
      </footer>
  )
}

function Body() {
  return (
    <>
      <h1>Reasons I love React! </h1>
      <ol>
        <li>It's easy to use</li>
        <li>It's declarative</li>
        <li>It's a highly in demand skill</li>
      </ol>
    </>
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
