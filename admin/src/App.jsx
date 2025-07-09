import React from 'react'
import Navbar from './components/nabar/Navbar'
import Sidebar from './components/sidebar/sidebar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Addproduct from './pages/Addproduct'
import Allproducts from './pages/Allproducts'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/addproduct' element={<Addproduct/>} />
        <Route path='/allproduct' element={<Allproducts/>} />
      </Routes>
    </div>
  )
}

export default App
