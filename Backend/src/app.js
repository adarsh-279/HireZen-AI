import dotenv from 'dotenv';
dotenv.config();

import express, { urlencoded } from 'express';
import cookieParser from "cookie-parser";
import cors from "cors"
import authRouter from './routes/auth.routes.js';
import interviewRouter from './routes/interview.routes.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

app.set("trust proxy", 1);

/* all authentication related routes are used from here */
app.use("/api/auth", authRouter)

/* all interview related routes are used from here */
app.use("/api/interview", interviewRouter)

app.get("/", (req, res) => {
    res.send("Default Route");
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: https://localhost:${process.env.PORT} || 8000`)
});

export default app;