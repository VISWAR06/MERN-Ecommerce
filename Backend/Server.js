const express = require('express')
const app=express();
const cors=require('cors')
const upload = require('./middlewares/Uploadimage.js')
require('dotenv').config()
const db=require('./config/db.js');
app.use(express.json())
app.use(cors())

const port=process.env.PORT||4000;

db();
app.get('/',(req,res)=>{
    res.send('working in express')
})
app.post('/upload', upload.single('image'), (req, res) => {
  res.send("uploaded");
});



app.listen(port,()=>{
    console.log(`running in ${port}`)
})