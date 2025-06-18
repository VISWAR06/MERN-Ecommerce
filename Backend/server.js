import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import connectdb from './config/db.js';
import connectcloud from './config/cloudinary.js';
import route from './routes/userroutes.js'
import productroute from './routes/productsroute.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

connectdb();
connectcloud();

app.use('/api/user',route)
app.use('/api/product',productroute)

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
