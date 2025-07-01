import express from 'express';
import 'dotenv/config.js';
import productsroute from './routes/productsroute.js'
const app=express()
const port=process.env.PORT

app.use('/api',productsroute)
app.listen(port,()=>{
    console.log(`running in ${port} `)
})