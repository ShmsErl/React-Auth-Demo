import React from 'react'
import AuthItem from '../components/auth/AuthItem'
import LoginForm from '../components/auth/LoginForm'


function LoginPage() {
  return (
    <div className='vh-100 bg-black'>
    <AuthItem>

       <LoginForm/>

    </AuthItem>
    </div>
  )
}

export default LoginPage