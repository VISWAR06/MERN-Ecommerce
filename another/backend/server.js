import express from 'express';
import 'dotenv/config.js';
import productsroute from './routes/productsroute.js'
import connect from './config/db.js'
const app=express()
const port=process.env.PORT
connect();
app.use('/api',productsroute)
app.listen(port,()=>{
    console.log(`running in ${port} `)
})