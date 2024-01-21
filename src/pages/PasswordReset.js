import React from 'react'
import PasswordResetForm from '../components/auth/PasswordResetForm'
import AuthItem from '../components/auth/AuthItem'

function PasswordReset() {
  return (
    <div className='bg-black vh-100'>
    <AuthItem >
      <PasswordResetForm/>
    </AuthItem>
    </div>
  )
}

export default PasswordReset