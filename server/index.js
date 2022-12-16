import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
const app = express();
import cors from "cors";
import multer from "multer";

// Route Middleware Impost
import authRoute from "./routes/auth.js";
import postRoute from "./routes/posts.js";

// File Upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/v1/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

//Security Middleware Import
app.use(morgan("common"));
app.use(cookieParser());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Routes
app.use("/api/v1/users", authRoute);
app.use("/api/v1", postRoute);

// Server Connection 🔂
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
