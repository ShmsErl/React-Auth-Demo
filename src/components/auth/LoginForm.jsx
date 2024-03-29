import axios from 'axios';
import { Form, Formik } from 'formik';
import React, { useContext, useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom';
import { object, string } from 'yup';
import {  useAuth } from '../../contexts/auth/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginForm() {


    const authContext = useAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigate()
    const payload = {

        email: email,
        password: password


    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await axios.post("http://localhost:8080/api/signin", payload)
            .then((res) => {
                localStorage.setItem('token', res?.data?.token)
                authContext.refreshUser()
             navigation('/')

            })
            // .catch(error => document.getElementById("alert").innerHTML=`Hatalı Giris : ${error.response.data.message}`)
            .catch(error =>
                toast.error(`Hatalı Giris : ${error} `));













    }

    const initialValues = {



        email: "example@gmail.com",
        password: ""


    }
    const validationSchema = object({

        firstName: string().required("Bu alan Zorunludur"),
        lastName: string().required(),
        phoneNumber: string().min(9).required("Telefon numarası zorunludur."),
        email: string().email().required("Email alanı zorunludur."),
        password: string().required()


    });

    return (
        <React.Fragment>



            <form onSubmit={(e) => handleSubmit(e)} className='w-100'>
                <h1 className='h3 text-center text-warning'>Login Page</h1>
                <div className="row my-3">
                    <label className='text-warning my-2' htmlFor="email">E-mail</label>
                    <input type="email" className="form-control" name='email' onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
                </div>
                <div className="row my-3">
                    <label className='text-warning my-2' htmlFor="password">Password</label>
                    <input type="password" className="form-control" name='password' onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </div>



                <div className='d-flex flex-column'>
                    <Link to={'/reset '} className="align-self-end"> Forgot your password? </Link>
                    <button type="submit" className="btn btn-warning my-2 px-5 align-self-center" >Login</button>

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







        </React.Fragment>
    )
}

export default LoginForm