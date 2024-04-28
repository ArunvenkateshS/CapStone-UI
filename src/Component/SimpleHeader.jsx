import React from 'react'
import logo from '../../src/Component/Logo.png'

const SimpleHeader = () => {
    return (
        <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light" >
       <a className="navbar-brand" href="#">
         <img src={logo} width="125" height="75" alt="#"></img>
       </a>
     </nav>
        </div>
     
       )
}

export default SimpleHeader