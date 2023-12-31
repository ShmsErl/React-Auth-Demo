import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function AuthItem({children}) {
  return (
    <div className='container d-flex align-items-center justify-content-center vh-100'>{children}</div>
  )
}

export default AuthItem;