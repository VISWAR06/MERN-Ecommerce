import mongoose from "mongoose";
export const connection = async()=>{
    try{
        mongoose.connect(process.env.DB_URL)
        console.log('connected to db')

    }catch(e){
        console.log(e.message)
    }
}