import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react'

const Login = () => {
  return (
     <GoogleOAuthProvider clientId="809128346511-t04v2cv3v7cfd8lo85afvos8s1d6bhgk.apps.googleusercontent.com">

    <div className='container mx-auto'>
        <h2>Login</h2>
        <GoogleLogin
    onSuccess={credentialResponse => {
    console.log(credentialResponse)
    localStorage.setItem("credential",credentialResponse.credential || "")
  }}
  onError={() => {
    console.log('Login Failed')
  }}
/>
    </div>
     </GoogleOAuthProvider>
  )
}

export default React.memo(Login)