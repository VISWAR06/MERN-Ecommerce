import React, { createContext } from 'react'
import allproduct from '../Assets/Frontend_Assets/all_product'
export const shopcontext=createContext(null)

const shopcontextprovider=(props)=>{
    const contextvalue={allproduct}
    return(
        <shopcontext.Provider value={contextvalue}>
            {props.children}
        </shopcontext.Provider>
    )
}
export default shopcontextprovider
