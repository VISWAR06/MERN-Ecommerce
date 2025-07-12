const express = require('express');
const cors = require('cors');
const imageroute = require('./Routes/imageroute.js');
require('dotenv').config();
const db = require('./config/db.js');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

db(); // Connect to DB

app.use(cors());
app.use(express.json());

// Serve uploaded images correctly
app.use('/uploadimage', express.static(path.join(__dirname, 'uploadimage')));

// API Routes
app.use('/api', imageroute);

app.get('/', (req, res) => {
  res.send('working in express');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
