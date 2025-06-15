const mongoose=require('mongoose')

const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
            console.log('connected')
    }

    catch (e){
        console.log(e.message)
    }
}
module.exports= connect