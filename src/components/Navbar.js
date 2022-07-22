import React from "react";
import logo from "../logo192.png"

function Navbar() {
  return (
    <div className='nav'>
      <div className='logo-title'>
        <img src={logo} alt="React Logo"></img>
        <h1>ReactFacts</h1>
      </div>
      <h2>React Course - Project 1</h2>
    </div>
  )
}

export default Navbar
