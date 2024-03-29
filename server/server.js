import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import blogPosts from './routes/blogPosts.routes.js'

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

// Add routes for Blogposts 
app.use('/api/blogs', blogPosts)

const DB_CONNECTION = process.env.MONGODB_URL;
const PORT = process.env.PORT || 6000;

mongoose
  .connect(DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
  console.log('App Connected to Database');
    app.listen(PORT, () =>
      console.log(`Server is running @ : http://localhost:${PORT}`)
  )}
  )
  .catch((error) => console.error(error));