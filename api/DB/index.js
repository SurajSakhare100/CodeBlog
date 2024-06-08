import dotenv from 'dotenv';
dotenv.config()
import express from "express";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
const MONGODB_URL = process.env.MONGODB_URL;
const connectDb = async () => {
  try {
    const db=await mongoose.connect(MONGODB_URL);
  } catch (error) {
    console.log(error)
  }
};
export  {connectDb}
