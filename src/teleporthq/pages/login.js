import React from 'react'
import LoginForm from '../../widgets/auth/LoginForm'
import ShowAuthState from '../../widgets/auth/ShowAuthState'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - LMS-V2</title>
        <meta property="og:title" content="Login - LMS-V2" />
      </Helmet>
      <LoginForm></LoginForm>
      <ShowAuthState></ShowAuthState>
    </div>
  )
}

export default Login
