const mongoose = require('mongoose')
const connect = ()=>{
    try{
        const connection = mongoose.connect(process.env.MONGOURL)
        console.log("connected successfully")
    }catch(e){
        console.log(e.messaage)
    }
}
module.exports=connect
