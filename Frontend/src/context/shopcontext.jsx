// shopcontext.jsx
import React, { createContext } from 'react'
import { products } from '../assets/frontend_assets/assets'

export const shopcontext = createContext()

const ShopProvider = (props) => {
  const curr = '$'
  const delfee = 10

  const value = {
    products,
    curr,
    delfee
  }

  return (
    <shopcontext.Provider value={value}>
      {props.children}
    </shopcontext.Provider>
  )
}

export default ShopProvider
