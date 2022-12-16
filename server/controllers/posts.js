import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from 'moment';

// Get ALl Posts
export const getPosts = (req,res)=>{
    // const userId = req.query.userId;
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not logged in!");
  
    jwt.verify(token, "ldlre8939dodik", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
  
      const q =
       `SELECT p.*, u.id AS userId, name, profile FROM post AS p JOIN user AS u ON (u.id = p.userId)
      LEFT JOIN relationship AS r ON (p.userId = r.followedUser) WHERE r.followinUser= ? OR p.userId =?  ORDER BY p.createdAt DESC`;
  
     
    db.query(q,[userInfo.id,userInfo.id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
      });
    });
}
// Get Single Post
// Crate Post
export const addPost = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not logged in!");
  
    jwt.verify(token, "ldlre8939dodik", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const q =
        "INSERT INTO post(`desc`, `image`, `createdAt`, `userId`) VALUES (?)";
      const values = [
        req.body.desc,
        req.body.image,
        moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        userInfo.id,
      ];
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Post has been created.");
      });
    });
  };
// Update post
// Delete Post

