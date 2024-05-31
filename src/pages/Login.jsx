import React from 'react'
import Auth from '../components/Login/Auth'

const Login = ({email, setEmail}) => {
  return (
    <div >
      <Auth email={email} setEmail={setEmail}/>
    </div>
  )
}

export default Login