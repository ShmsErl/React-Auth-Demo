import React from 'react'
import AuthItem from '../components/auth/AuthItem'
import RegisterForm from '../components/auth/RegisterForm'



function RegisterPage() {
  return (
    <div className='bg-black vh-100'>
    <AuthItem >
    

      <RegisterForm/>
    

      
    </AuthItem>
    </div>
  )
}

export default RegisterPage