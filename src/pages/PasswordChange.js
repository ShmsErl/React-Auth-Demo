import React from 'react'
import PasswordChangeForm from '../components/auth/PasswordChangeForm'
import AuthItem from '../components/auth/AuthItem'

function PasswordChange() {
  return (
    <div className='bg-black vh-100'>
    <AuthItem >
      <PasswordChangeForm/>
    </AuthItem>
    </div>
  )
}

export default PasswordChange