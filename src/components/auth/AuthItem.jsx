import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function AuthItem({children}) {
  return (
    <div className='container d-flex align-items-center justify-content-center h-100 px-5 border border-warning rounded'>{children}</div>
  )
}

export default AuthItem;