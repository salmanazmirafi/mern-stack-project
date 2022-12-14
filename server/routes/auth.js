import express from "express";
import { login, logOut, register } from "../controllers/auth.js";

const route = express.Router();

route.post("/register", register);
route.post("/login", login);
route.post("/logout", logOut);

export default route;
