import React, { useContext } from 'react'
import Signin from '../auth/Signin'
import Signout from '../auth/Signout'
;
import { jwtDecode } from 'jwt-decode';
import { useAuth } from '../../contexts/auth/AuthContext';

function Navbar() {
 
  const authContext = useAuth();
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        
      </li>
     
    </ul>
   
  </div>
  { authContext.authInformation.isAuthenticated ? <Signout/>:<Signin/>}
  
  
</nav>
    </div>
  )
}

export default Navbar