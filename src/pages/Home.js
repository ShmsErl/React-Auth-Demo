import { parseJwt } from '@sineverba/jwt-decoder'
import { jwtDecode } from 'jwt-decode'
import React from 'react'

function HomePage() {
  const userToken = jwtDecode(localStorage.getItem('token'))



  return (
    <div>{userToken.sub}</div>
  )
}

export default HomePage