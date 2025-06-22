import React from 'react'
import { createContext } from 'react'
import { products } from '../assets/frontend_assets/assets';
export const shopcontext = createContext();
const shopprovider =(props)=>{
const curr ='$'
const delfee = 10
const value={
    products,curr,delfee
}
return(
    <shopcontext.Provider value={value}>
        {props.children}
    </shopcontext.Provider>
)

}
export default shopprovider
