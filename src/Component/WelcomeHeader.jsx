import React from 'react'
import logo from '../../src/Component/Logo.png'

const WelcomeHeader = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
  <a className="navbar-brand" href="">
    <img src={logo} width="125" height="75" alt=""></img>
  </a>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link" href="/login">LogIn</a>
      <a className="nav-item nav-link" href="/signup">SignUp</a>
    </div>
  </div>
</nav>
   </div>
  )
}

export default WelcomeHeader