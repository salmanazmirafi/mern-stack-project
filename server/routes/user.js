import express from "express";
import { getUser } from "../controllers/user.js";



const userRoute = express.Router();

userRoute.get("/user/find/:userId", getUser);
// likeRoute.post("/like", addLike);
// likeRoute.delete("/like", deleteLike);

export default userRoute;