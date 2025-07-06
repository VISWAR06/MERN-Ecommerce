 
import Navbar from "./components/Navbar"
import {Route,Routes}from 'react-router-dom'
import Shop from './pages/Shop'
import Product from './pages/Product'
import ShopCategory from './pages/Shopcategory'
import Login from './pages/Login'
import Cart from './pages/Cart'
function App() {


  return (
   <div>
      <Navbar/>
      <Routes>
       <Route path='/' element={Shop} />
       <Route path='/product' element={Product} />
    
       <Route path='/login' element={Login} />
       <Route path='/cart' element={Cart}/>
      </Routes>

   </div>
     
  
    
 
  
  

  )
}

export default App
