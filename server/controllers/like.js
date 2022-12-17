import { db } from "../connect.js";
import moment from "moment";
import jwt from "jsonwebtoken";

// Get Comment
export const getLikes = (req, res) => {
  const q = "SELECT userId FROM likes WHERE postId = ?";

  db.query(q, [req.query.postId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.map(like=>like.userId));
  });
};

// Add Like
export const addLike = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not logged in!");
  
    jwt.verify(token, "ldlre8939dodik", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const q = "INSERT INTO likes (`userId`,`postId`) VALUES (?)";
      const values = [
        userInfo.id,
        req.body.postId
      ];
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Post has been liked.");
      });
    });
  };