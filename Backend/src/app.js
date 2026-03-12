import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import authRouter from './routes/auth.routes.js';


dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

/* all authentication related routes are used from here */
app.use("/api/auth", authRouter)

app.get("/", (req, res) => {
    res.send("Default Route");
});

app.listen(process.env.PORT, () => {
    console.log("Server is running on port: https://localhost:8000")
});

export default app;