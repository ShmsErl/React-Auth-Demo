import axios from 'axios';
import { Form, Formik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';

function LoginForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigate()
    const payload = {
     
      email: email,
      password: password
  
  
    }

    const handleSubmit = async (e)=> {
        e.preventDefault()
       try {
       const res = await axios.post("http://localhost:8080/api/v1/signin", payload)
       localStorage.setItem('token',res?.data?.token)
        navigation('/')
       } catch (error) {
        console.log(error)
        alert(error)
        
        
        

        
       }

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


 
                <form onSubmit={(e)=>handleSubmit(e)} className='w-100'>
                    <h1 className='h3 text-center text-warning'>Login Page</h1>
                    <div class="row my-3">
                        <label className='text-warning my-2' htmlFor="email">E-mail</label>
                        <input type="email" class="form-control" name='email' onChange={(e)=> setEmail(e.target.value)} placeholder="E-mail" />
                    </div>
                    <div class="row my-3">
                        <label className='text-warning my-2' htmlFor="password">Password</label>
                        <input type="password" class="form-control" name='password' onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
                    </div>



                    <div className='d-flex flex-column'>
                        <button type="submit" class="btn btn-warning my-2 px-5 align-self-center">Login</button>
                    </div>



                </form>



          



        </React.Fragment>
    )
}

export default LoginForm