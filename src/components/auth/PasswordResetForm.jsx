import React, { useState } from 'react'
import { useAuth } from '../../contexts/auth/AuthContext';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function PasswordResetForm() {
    const{token} = useParams()
    const authContext = useAuth();
    const [email, setEmail] = useState('')
    const [firstname, setFirstName] = useState('')
    const navigation = useNavigate()
    const payload = {
        email: email,
        firstname: firstname
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await axios.post("http://localhost:8080/api/users/resetpassword", payload)
            .then((res) => {



            })
            // .catch(error => document.getElementById("alert").innerHTML=`Hatalı Giris : ${error.response.data.message}`)
            .catch(error =>
                toast.error(`Hatalı Giris : ${error} `));
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className='w-100'>
            <h1 className='h3 text-center text-warning'>Login Page</h1>
            <div className="row my-3">
                <label className='text-warning my-2' htmlFor="email">E-mail</label>
                <input type="email" className="form-control" name='email' onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
            </div>
            <div className="row my-3">
                <label className='text-warning my-2' htmlFor="firstname">FirstName</label>
                <input type="text" className="form-control" name='firstname' onChange={(e) => setFirstName(e.target.value)} placeholder="FirstName" />
            </div>



            <div className='d-flex flex-column'>
                
            <button type="submit" className="btn btn-warning my-2 px-5 align-self-center" >Submit</button>

            </div>
            <span id="alert" className='text-danger'></span>
            <ToastContainer
                position="top-center"
                autoClose={10000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
                theme="colored"
            />



        </form>
    )
}

export default PasswordResetForm