 
import Navbar from "./components/Navbar"
import {Route,Routes}from 'react-router-dom'
import Shop from './pages/Shop'
import Product from './pages/Product'
import ShopCategory from './pages/Shopcategory'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Register from './pages/Register'
import Footer from "./components/Footer"
import menbanner from './Assets/Frontend_Assets/banner_mens.png'
import womenbanner from './Assets/Frontend_Assets/banner_women.png'
import kidbanner from './Assets/Frontend_Assets/banner_kids.png'
function App() {


  return (
   <div>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Shop/>} />
       <Route path='/product/:productId' element={<Product/>} />
      <Route path='/mens' element={<ShopCategory banner={menbanner} category="men"/>} />
      <Route path='/womens' element={<ShopCategory banner={womenbanner}category="women"/>} />
      <Route path='/kids' element={<ShopCategory banner={kidbanner} category="kid"/>} />
       <Route path='/login' element={<Login/>} />
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/register' element={<Register/>} />
      </Routes>
     

   </div>
     
  
    
 
  
  

  )
}

export default App
