import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Collection from './pages/collections'
import Testmonials from './pages/testmonials'
import Contact from './pages/contact'
import Products from './pages/products'
import Header from './Components/Header'
import Home from './pages/Home'
const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Routes>
<Route path='/' element ={<Home/>}/>
<Route path='/collection' element ={<Collection/>}/>
<Route path='/testmonials' element ={<Testmonials/>}/>
<Route path='/contact' element ={<Contact/>}/>
<Route path='/product /:productId' element ={<Products/>}/>


        </Routes>
      </main>
    </div>
  )
}

export default App
