import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/all.js';
import bodyParser from 'body-parser';
 import connection from "./database/mongo.js" ;

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json()); 

app.use(express.json()); // This is crucial for body parsing
app.use(express.urlencoded({ extended: true }));

connection();
app.use('/api/v1', userRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// isha (connection) index.js mai execute nhi karenga toh connection form nhi hoga ,
// kkyuki terminal (index.js) seh start hota hai. 

//import use->package.json ("type" :"module") =>its called ES MODULE
// /api → tells the client this is part of your API (not a frontend page).
// /v1 → stands for version 1 of your API.
// "type": "module" in package.json, so __dirname isn’t available by default
