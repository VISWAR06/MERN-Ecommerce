import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div>
      <div>Signin</div>
      <div>
        
        <input type='email' placeholder='Email'/>
        <input type='text' placeholder='Password'/>
      </div>
      <div>
        <p>Forgetten Password</p>
        <p><Link to ='/register'>Register</Link></p>
      </div>
      <div>
        <button>Sigin</button>
      </div>
    </div>
  )
}

export default Login
