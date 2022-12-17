import express from "express";
import { addComment, getComment } from "../controllers/comment.js";


const commentRoute = express.Router();

commentRoute.get('/comment', getComment)
commentRoute.post('/comment', addComment)

export default commentRoute;
