import express from "express";
import { addPost, getPosts } from "../controllers/posts.js";

const postRoute = express.Router();

postRoute.get("/post", getPosts);
postRoute.post("/post", addPost);

export default postRoute;
