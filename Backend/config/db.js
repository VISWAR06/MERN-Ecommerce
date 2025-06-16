import mongoose from 'mongoose'
const connectdb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('connected')
    }catch(e){
        console.log(e.message)
    }
}
export default connectdb