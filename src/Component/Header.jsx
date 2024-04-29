import React from 'react'
import logo from '../../src/Component/Logo.png'
import { useNavigate } from 'react-router-dom';

const homeDirection = ()=>{
  const currentROle = sessionStorage.getItem("role");
  console.log(currentROle);
  if (currentROle === "manager")
      return "/mhome";
  else
    return "/ehome";  
}
var path = homeDirection();

const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("role");
    navigate("/login");
  }
  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'black', color: 'white' }}>
        <a className="navbar-brand" href="#" style={{ color: 'white' }}>
          <img src={logo} width="125" height="75" alt=""></img>
        </a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ backgroundColor: 'black', color: 'white' }}>
          <div className="navbar-nav">
            <a className="nav-item nav-link" href={path} style={{ color: 'white' }}>Home</a>
            <button className='btn btn-secondary btn-sm' onClick={logout} style={{ color: 'white' }}>Logout</button>
          </div>
        </div>
      </nav>
    </div>
  );
  
}

export default Header