import React from 'react'
import logo from '../../src/Component/Logo.png'

const LoginHeader = () => {
  return (
    <div style={{ backgroundColor: 'black' }}> {/* Set the outer div to have a black background */}
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'black', color: 'white' }}> {/* Override styles for the navbar */}
        <a className="navbar-brand" href="" style={{ color: 'white' }}> {/* Set the brand link to have white text */}
          <img src={logo} width="125" height="75" alt=""></img>
        </a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="/signup" style={{ color: 'white' }}>SignUp</a> {/* Set the nav link to have white text */}
          </div>
        </div>
      </nav>
    </div>
  );
  
}

export default LoginHeader