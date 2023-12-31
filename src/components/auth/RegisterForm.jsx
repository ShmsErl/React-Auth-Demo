import axios from 'axios';
import { Formik } from 'formik';

import React, { useState } from 'react'
import { Form, useNavigate } from 'react-router-dom';
import { object, string } from 'yup'

function RegisterhtmlForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigate()
  const payload = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email,
    password: password


  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8080/api/v1/signup", payload)
      navigation("/login")
    } catch (error) {

    }


  }


  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
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


      
        <form onSubmit={(e)=> handleSubmit(e)} className='w-100'>
          <h1 className='h3 text-center text-warning'>Register Page</h1>
          <div className="row  my-3">
            <label className='text-warning my-2' htmlFor="firstname">First Name</label>
            <input type="text" className="form-control " name='firstname' aria-describedby="emailHelp" onChange={(e) => setFirstName(e.target.value)} placeholder="Enter First Name" />

          </div>
          <div className="row my-3">
            <label className='text-warning my-2' htmlFor="lastname">LastName</label>
            <input type="text" className="form-control" name="lastname" onChange={(e) => setLastName(e.target.value)} placeholder="Enter Last Name" />
          </div>


          <div className="row my-3">
            <label className='text-warning my-2' htmlFor="phoneNumber">Phone Number</label>
            <input type="number" className="form-control" name='phoneNumber' aria-describedby="emailHelp" onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter Phone Number" />

          </div>
          <div className="row my-3">
            <label className='text-warning my-2' htmlFor="email">E-mail</label>
            <input type="email" className="form-control" name='email' onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
          </div>
          <div className="row my-3">
            <label className='text-warning my-2' htmlFor="password">Password</label>
            <input type="password" className="form-control" name='password' onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          </div>
          <div className='d-flex flex-column'>
            <button type="submit" className="btn btn-warning my-2 px-5 align-self-center">Submit</button>
          </div>



        </form>



    



    </React.Fragment>
  )
}

export default RegisterhtmlForm