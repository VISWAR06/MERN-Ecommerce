 
import Navbar from "./components/Navbar"
import {Route,Routes}from 'react-router-dom'
import Shop from './pages/Shop'
import Product from './pages/Product'
import ShopCategory from './pages/Shopcategory'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Footer from "./components/Footer"
function App() {


  return (
   <div>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Shop/>} />
       <Route path='/product:productId' element={<Product/>} />
      <Route path='/mens' element={<ShopCategory category="men"/>} />
      <Route path='/womens' element={<ShopCategory category="women"/>} />
      <Route path='/kids' element={<ShopCategory category="kid"/>} />
       <Route path='/login' element={<Login/>} />
       <Route path='/cart' element={<Cart/>}/>
      </Routes>
     

   </div>
     
  
    
 
  
  

  )
}

export default App
