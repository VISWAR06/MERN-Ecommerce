import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [signup,setSignup]=useState({
    name:"",email:"",password:""
  })

  const onch=(e)=>{
    setSignup({...signup,[e.target.name]:e.target.value})
  }
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-80 bg-white p-6 rounded-md shadow-md flex flex-col justify-center items-center space-y-4">

        <h2 className="text-2xl font-bold">Signup</h2>

        <div className="w-full flex flex-col space-y-3">
          <input
            name="name"
            value={signup.name}
            onChange={onch}
            type="text"
            placeholder="Name"
            className="px-3 py-2 border border-gray-300 rounded"
          />
          <input
           name="email"
            value={signup.email}
            onChange={onch}
            type="email"
            placeholder="Email"
            className="px-3 py-2 border border-gray-300 rounded"
          />
          <input
           name="password"
            value={signup.password}
            onChange={onch}
            type="password"
            placeholder="Password"
            className="px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        <div className="text-sm text-center">
          Already have an account?
          <span className="ml-2 font-bold text-purple-400">
            <Link to="/login">Signin</Link>
          </span>
        </div>

        <div className="flex items-center space-x-2 text-sm">
          <input type="checkbox" className="accent-purple-600" />
          <p>I agree to the Terms of Use & Privacy Policy</p>
        </div>

        <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
          SIGNUP
        </button>

      </div>
    </div>
  );
};

export default Register;
