import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './componetns/Header'
import Footer from './componetns/Footer'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Contact from './pages/contact'
const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/men'element={<Men/>}/>
<Route path='/women'element={<Women/>}/>
<Route path='/kids'element={<Kids/>}/>
<Route path='contact' element={<Contact/>}/>


        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
