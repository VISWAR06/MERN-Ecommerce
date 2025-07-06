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
      <div className='gap-2'>
        <p>Forgetten Password
        <spam className='ml-2 font-bold text-orange-700'><Link to ='/register'>Register</Link></spam></p>
      </div>
      <div>
        <button>SIGNIN</button>
      </div>
    </div>
  )
}

export default Login
