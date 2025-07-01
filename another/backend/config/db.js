import mongoose from "mongoose";
const connection = ()=>{
    try{
        mongoose.connect(process.env.DB_URL)
        console.log('connected to db')

    }catch(e){
        console.log(e.message)
    }
}
export default connection;