import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
const app = express();
import cors from 'cors'

// Route Middleware Impost
import authRoute from "./routes/auth.js";



//Security Middleware Import
app.use(morgan("common"))
app.use(cookieParser())
app.use(cors())


// config
app.use(express.json());

// Routes
app.use("/api/v1/users", authRoute);


// Server Connection 🔂
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
