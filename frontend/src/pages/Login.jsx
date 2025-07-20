
import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
const Login = () => {
  const navigate=useNavigate()
  const[data,setData]=useState({
    email:"",password:""
  })
  const change=(e)=>{
    setData({...data,[e.target.name]:e.target.value})

  }
  const login= async(e)=>{
    e.preventDefault()
    if (data.password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }
    try{
      const res=await axios.post('http://localhost:5000/user/login',data)
      alert(res.data.message)
      console.log(res.data.token)
      navigate('/')

    }catch(err){
alert(err.response?.data?.message || 'Signup Failed');
    }

  }
 
  
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-80 bg-white p-6 rounded-md shadow-md flex flex-col justify-center items-center space-y-4">
        
        <h2 className="text-2xl font-bold">Signin</h2>

        <div className="w-full flex flex-col space-y-3">
          <input
          onChange={change}
          name='email'
          value={data.email}
            type="email"
            placeholder="Email"
            className="px-3 py-2 border border-gray-300 rounded"
          />
          <input
          onChange={change}
          name='password'
          value={data.password}
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

        <button onClick={(e)=>login(e)}className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
          SIGNIN
        </button>
      </div>
    </div>
  );
};

export default Login;
