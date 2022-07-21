import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Header"
import Footer from "./Footer"
import Body from "./Body"


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
