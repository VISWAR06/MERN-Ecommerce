import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
 
  
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-80 bg-white p-6 rounded-md shadow-md flex flex-col justify-center items-center space-y-4">
        
        <h2 className="text-2xl font-bold">Signin</h2>

        <div className="w-full flex flex-col space-y-3">
          <input
            type="email"
            placeholder="Email"
            className="px-3 py-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        <div className="text-sm text-center">
          Forgotten Password?
          <span className="ml-2 font-bold text-purple-400">
            <Link to="/register">Register</Link>
          </span>
        </div>

        <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
          SIGNIN
        </button>
      </div>
    </div>
  );
};

export default Login;
