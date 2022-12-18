import express from "express";
import { addLike, deleteLike, getLikes } from "../controllers/like.js";


const likeRoute = express.Router();

likeRoute.get("/like", getLikes);
likeRoute.post("/like", addLike);
likeRoute.delete("/like", deleteLike);

export default likeRoute;
