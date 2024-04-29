import React from 'react'
import logo from '../../src/Component/Logo.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("role");
    navigate("/login");
  }
  return (
    <div className='ManagerHeader'>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: 'black', color: 'white'}}>
        <a className="navbar-brand" href="#">
          <img src={logo} width="125" height="75" alt=""></img>
        </a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="/employees" style={{color: 'white'}}>All Employee Details</a>
            <a className="nav-item nav-link" href="/expensetable" style={{color: 'white'}}>Expense History</a>
            <a className="nav-item nav-link " href="/pendinglist" style={{color: 'white'}}>Pending Request History</a>
            <button className='btn btn-secondary btn-sm' onClick={logout} style={{color: 'white'}}>Logout</button>
          </div>
        </div>
      </nav>
    </div>
  )
  
}

export default Header