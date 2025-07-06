import React from 'react'
import {Link} from 'react-router-dom'
const Register = () => {
  return (
    <div>
        <div>Signup</div>
        <div>
            <input type='text' placeholder='Name'/>
            <input type='email' placeholder='Email'/>
            <input type='text' placeholder='Password'/>

        </div>
        <div>
          <p> Already have an account? <span><Link to='/login'>Sigin</Link></span></p>
        </div>
        <div className='flex gap-2'>
          <input type='checkbox'/> <p> I agree to the terms of use & Privacy policy</p>
        </div>
        <div>
          <button>SIGNUP</button>
        </div>
     
    </div>
  )
}

export default Register
