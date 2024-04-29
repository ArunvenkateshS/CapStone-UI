import React from 'react'
import logo from '../../src/Component/Logo.png'
import { useNavigate } from 'react-router-dom';

const EmployeeHeader = () => {
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("role");
    navigate("/login");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'black' }}>
        <a className="navbar-brand text-white" href="#">
          <img src={logo} width="125" height="75" alt=""></img>
        </a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link text-white" href="/expensetable">Expense History</a>
            <button className='btn btn-secondary btn-sm text-white' onClick={logout}>Logout</button>
          </div>
        </div>
      </nav>
    </div>
  );
  
}

export default EmployeeHeader