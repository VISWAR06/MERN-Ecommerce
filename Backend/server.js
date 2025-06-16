import express from 'express'
import cors from 'express'
import 'dotenv/config.js'
import connectdb from './config/db.js'
import connectcloud from './config/cloudinary.js'
import userroutes from './routes/userroutes.js'
const app=express()
const port =process.env.PORT||5000

app.use(express.json())
app.use(cors())
connectdb()
connectcloud()

app.use('/api/ user',userroutes)

app.listen(port,()=>{
    console.log('lisitn in port' + port)
})