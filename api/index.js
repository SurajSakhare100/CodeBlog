import dotenv from 'dotenv';
dotenv.config()
import express from "express";
import cookieParser from "cookie-parser";
import {connectDb }  from "./DB/index.js";
import cors  from "cors";
import authRoute  from "./routes/Auth.routes.js";
import userRoute  from "./routes/user.routes.js";
import { ApiError, errorHandler } from './utils/ApiErrorHandler.js';
import { ApiResponse } from './utils/ApiResponse.js';


const port = process.env.PORT;
const app = express();

connectDb();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

app.use(errorHandler)
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/user',userRoute)

app.get('/error', (req, res, next) => {
  next(new ApiError(500, 'This is not a custom error!'));
});
app.get('/success', (req, res) => {
  ApiResponse.success(res, { data: 'This is a success response!' });
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
