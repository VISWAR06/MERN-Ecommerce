import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(e.password.length<6)alert(res.send("Short Password"))
    try {
      const res = await axios.post('http://localhost:5000/signup', formData);
      alert(res.data.message);
      console.log('Token:', res.data.token);
      navigate('/login');  
    } catch (err) {
      alert(err.response?.data?.message || 'Signup Failed');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-80 bg-white p-6 rounded-md shadow-md flex flex-col justify-center items-center space-y-4"
      >
        <h2 className="text-2xl font-bold">Signup</h2>

        <div className="w-full flex flex-col space-y-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="px-3 py-2 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="px-3 py-2 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          SIGNUP
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
