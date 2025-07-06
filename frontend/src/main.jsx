import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Shopcontextprovider from './context/Shopcontext.jsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(


  <BrowserRouter>
  <Shopcontextprovider> <App /></Shopcontextprovider>
   
    </BrowserRouter>

  

)
