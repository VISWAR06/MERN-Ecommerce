require('dotenv').config()
const express =require('express')
const app=express()
const userRoute=require('./routes/userRoute')
const connection = require('./config/db')
const port=process.env.PORT||5000


connection()
app.use(express.json())

app.use('/api/user',userRoute)
app.listen(port,()=>{
    console.log(`listending in ${port}`)
})
