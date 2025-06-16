import express from 'express'
import cors from 'express'
import 'dotenv/config.js'
import connectdb from './config/db.js'

const app=express()
const port =process.env.PORT||5000

app.use(express.json())
app.use(cors())
connectdb()

app.get('/',(req,res)=>{
    res.send('api working')

})

app.listen(port,()=>{
    console.log('lisitn in port' + port)
})