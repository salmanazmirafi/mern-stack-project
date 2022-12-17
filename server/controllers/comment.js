import { db } from "../connect.js";
import moment from 'moment';
import jwt from "jsonwebtoken";

// Get Comment
export const getComment = (req,res)=>{
      const q =
       `SELECT c.*, u.id AS userId, name, profile FROM comment AS c JOIN user AS u ON (u.id = c.userId)
       WHERE c.postId = ? ORDER BY c.createdAt DESC`;
  
     
    db.query(q,[req.query.postId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
      });
   
}

// Add Comment
export const addComment = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not logged in!");
  
    jwt.verify(token, "ldlre8939dodik", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const q = "INSERT INTO comment(`desc`, `createdAt`, `userId`, `postId`) VALUES (?)";
      const values = [
        req.body.desc,
        moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        userInfo.id,
        req.body.postId
      ];
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Comment has been created.");
      });
    });
  };