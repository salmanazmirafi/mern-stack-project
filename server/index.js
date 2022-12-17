import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
const app = express();
import cors from "cors";
import multer from "multer";

// Route Middleware Impost
import authRoute from "./routes/auth.js";
import postRoute from "./routes/posts.js";
import commentRoute from "./routes/comment.js";
import likeRoute from "./routes/like.js";


//Security Middleware Import
app.use(morgan("common"));
app.use(cookieParser());
app.use((req, res, next) => {
  req.connection.setNoDelay(true)
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", true);
      res.header("Access-Control-Allow-Origin", "https://xxx"); 

  res.header('Access-Control-Expose-Headers', 'agreementrequired');

  next()
});
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true
  })
);


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


// Routes
app.use("/api/v1/users", authRoute);
app.use("/api/v1", postRoute);
app.use("/api/v1", commentRoute);
app.use("/api/v1", likeRoute);

// Server Connection 🔂
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
