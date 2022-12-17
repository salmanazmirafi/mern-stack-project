import express from "express";
import { getLikes } from "../controllers/like.js";


const likeRoute = express.Router();

likeRoute.get("/like", getLikes);
// postRoute.post("/like", addPost);

export default likeRoute;
