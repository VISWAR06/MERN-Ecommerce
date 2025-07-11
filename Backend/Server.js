const express = require('express');
const cors = require('cors');
const imageroute = require('./Routes/imageroute.js');
require('dotenv').config();
const db = require('./config/db.js');
const path=require('path')
const app = express();
const port = process.env.PORT || 5000;

// Connect to DB
db();

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('working in express');
});
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))) 
app.use('/api', imageroute);

// Serve uploaded images statically (optional)
app.use('/uploadimage', express.static('uploadimage'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
