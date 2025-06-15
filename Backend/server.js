require('dotenv').config()
const express =require('express')
const app=express()

const connection = require('./config/db')
const port=process.env.PORT||5000


connection()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('hello world')
})
app.listen(port,()=>{
    console.log(`listending in ${port}`)
})
