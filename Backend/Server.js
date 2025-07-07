const express = require('express')
const app=express();
const cors=require('cors')
require('dotenv').config()

app.use(express.json())
app.use(cors())

const port=process.env.PORT||4000;


app.get('/',(req,res)=>{
    res.send('working in express')
})

app.listen(port,()=>{
    console.log(`running in ${port}`)
})