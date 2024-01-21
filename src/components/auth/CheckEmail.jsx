import axios from 'axios';
import { Form, Formik } from 'formik';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { object, string } from 'yup';
import { AuthContext } from '../../contexts/auth/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginForm() {


    const authContext = useContext(AuthContext);
    const [email, setEmail] = useState('')
    
 
    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await axios.post("http://localhost:8080/api/    ", payload)
            .then((res) => {
                navigation('/')
                localStorage.setItem('token', res?.data?.token)
                console.log(res)

            })
            // .catch(error => document.getElementById("alert").innerHTML=`Hatalı Giris : ${error.response.data.message}`)
            .catch(error =>
                toast.error(`Hatalı Giris : ${error.response.data.message} `), {
                position: "top-right",
                autoClose: 20000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });













    }

    const initialValues = {



        email: "example@gmail.com",
   


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
                <div className='d-flex flex-column'>
                    <button type="submit" className="btn btn-warning my-2 px-5 align-self-center" onClick={() => {
                        authContext.setIsAuthenticated(true)
                        // navigation("/");

                    }}>Login</button>

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