// shopcontext.jsx
import React, { createContext,useState } from 'react'
import { products } from '../assets/frontend_assets/assets'

export const shopcontext = createContext()

const ShopProvider = (props) => {
  const curr = '$'
  const delfee = 10
  const[search,setSearch]=useState('')
  const[showSearch,setShowsearch]=useState(true)
  

  const value = {
    products,
    curr,
    delfee,search,setSearch,showSearch,setShowsearch
  }

  return (
    <shopcontext.Provider value={value}>
      {props.children}
    </shopcontext.Provider>
  )
}

export default ShopProvider
