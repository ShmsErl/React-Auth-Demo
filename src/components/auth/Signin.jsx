import React, { useContext } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth/AuthContext'

function Signin() {
  
    return (
        <div className=' mx-5'>

            <Link to={"/login"} type='button' className="btn btn-primary m-2" >Login</Link>
						
            <Link to={"/register"} className="btn btn-primary m-2"  >SignUp</Link>

        </div>
    )




}
    export default Signin

    
