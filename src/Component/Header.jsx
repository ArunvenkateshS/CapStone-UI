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
   <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
  <a className="navbar-brand" href="#">
    <img src={logo} width="125" height="75" alt=""></img>
  </a>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link" href={path}>Home</a>
      <button className='btn btn-secondary btn-sm' onClick={logout}>Logout</button>
    </div>
  </div>
</nav>
   </div>

  )
}

export default Header