import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import axios from'axios'


const Register = () => {
  const navigate=useNavigate()
  const[formData,setFormData]=useState({
    name:"",email:"",password:""
  })
   const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    console.log(formData)
  };
  const sub=async (e)=>{
    e.preventDefault()
    e.preventDefault();

    if (formData.password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/user/signup', formData);
      alert(res.data.message);
      console.log('Token:', res.data.token);
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Signup Failed');
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-80 bg-white p-6 rounded-md shadow-md flex flex-col justify-center items-center space-y-4">

        <h2 className="text-2xl font-bold">Signup</h2>

        <div className="w-full flex flex-col space-y-3">
          <input
           name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Name"
            className="px-3 py-2 border border-gray-300 rounded"
          />
          <input
           name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="px-3 py-2 border border-gray-300 rounded"
          />
          <input
           name="password"
            value={formData.password}
            onChange={handleChange}
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

        <button onClick={(e)=>sub(e)} className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
          SIGNUP
        </button>

      </div>
    </div>
  );
};

export default Register;