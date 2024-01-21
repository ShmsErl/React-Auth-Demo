import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Dropdown, Image, Menu } from 'semantic-ui-react'

import { jwtDecode } from 'jwt-decode';
import { useAuth } from '../../contexts/auth/AuthContext';

function Signout(props) {
    const userToken = localStorage.getItem('token');
   
    const authContext = useAuth();
    return (




        <div>
            <div className="dropdown mx-5">
                <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </button>
                <ul className="dropdown-menu">
                    <li><button className="dropdown-item" type="button">{authContext.authInformation.user.firstname}</button></li>
                    <li><button className="dropdown-item" type="button" onClick={console.log(authContext.hasPermission('ADMIN'))}>Sepetim</button></li>
                    <li> <Link className="dropdown-item" to={"/login"} type='button' onClick={() => {
                        localStorage.removeItem('token')
                        
                       
                    }}
                    >Çıkış Yap</Link></li>
                </ul>
            </div>
        </div>

    )
}

export default Signout