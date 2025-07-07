const mongoose = require('mongoose')
const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGOURL)
        console.log("connected successfully")
    }catch(e){
        console.log(e.messaage)
    }
}
module.exports=connect
