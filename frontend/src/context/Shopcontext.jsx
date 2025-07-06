import React, { createContext } from 'react'
import all from '../Assets/Frontend_Assets/all_product'
export const shopcontext=createContext(null)

const shopcontextprovider=(props)=>{
    const contextvalue={all}
    return(
        <shopcontext.Provider value={contextvalue}>
            {props.children}
        </shopcontext.Provider>
    )
}
export default shopcontextprovider
