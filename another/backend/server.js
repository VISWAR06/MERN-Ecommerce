import express from 'express';
import 'dotenv/config.js';
const app=express()
const port=process.env.PORT
app.listen(port,()=>{
    console.log(`running in ${port} `)
})