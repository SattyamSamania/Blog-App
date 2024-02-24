import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

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