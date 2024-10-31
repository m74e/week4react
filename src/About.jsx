import React from 'react'
import "./About.css"
import {Link} from "react-router-dom";
import logo from "./assets/react.svg";
import body from "./assets/body.svg";
function about() {
  return (
    <>
    <header>
      <div class="contanir">
        <div class="contant">
          <div class="logo">
         <img src={logo} alt="" />
          </div>
          <div class="links">
            <Link to="/" class="firstlink">Home</Link>
            <Link to="/about" class="seclink">About</Link>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="contanir">
        <div class="text">
          <h2>Welcome.</h2>
          <p>This is my first challenge with Html&CSS.</p>
        </div>
       <img className='bodyImg' src={body} alt="" />
      </div>
    </main>
    <footer>
      <div class="contanir">
        <p>This app cteated by <span>Aon2023</span></p>
      </div>
    </footer>

    </>
  )
}

export default about