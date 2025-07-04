import React from 'react'
import {Routes,Route} from 'react-router-dom'
import About from './pages/about'
import Cart from './pages/cart'
import Contact from './pages/contact'
import Home from './pages/home'
import Login from './pages/login'
import Orders from './pages/orderss'
import Placeorder from './pages/placeorder'
import Product from './pages/product'
import Collections from './pages/collections'
import Navbar from './componetns/Navbar'
import Footer from './componetns/Footer'
import Policy from './componetns/Policy'

const App = () => {
  return (
   <div>
    <Navbar/>
   
<Routes>
  <Route path ='/' element={<Home/>}/>
  <Route path ='/about' element={<About/>}/>
  <Route path ='/contact' element={<Contact/>}/>
  <Route path ='/others' element={<Orders/>}/>
  <Route path ='/product/:productId' element={<Product/>}/>
  <Route path ='/placeorder' element={<Placeorder/>}/>
  <Route path ='/login' element={<Login/>}/>
  <Route path ='/cart' element={<Cart/>}/>
  <Route path ='/collection' element={<Collections/>}/>
  <Route path='/policy' element={<Policy/>}/>
</Routes>
<Footer/>
   </div>
  )
}

export default App
