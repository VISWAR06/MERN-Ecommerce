 import {createSlice} from '@reduxjs/toolkit'

const inital={
    isAuth:false,
    isLoading:false,
    user:null
}




 const authslice=createSlice({
    name:"auth",
    inital,
    reducers:{
        setUser:(state, action)=>{}
    }
 })
 
 export const {setUser}=authslice.actions
 export default authslice.reducer
