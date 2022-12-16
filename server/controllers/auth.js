import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register
export const register = (req, res) => {
  //CHECK USER IF EXISTS
  const q = "SELECT * FROM user WHERE username = ?";
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(400).json("User already exists!");
    //CREATE A NEW USER
    //Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashpassword = bcrypt.hashSync(req.body.password, salt);

    const q =
      "INSERT INTO user (`username`,`email`,`password`,`name`) VALUE (?)";

    const values = [
      req.body.username,
      req.body.email,
      hashpassword,
      req.body.name,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

// Login
export const login = (req, res) => {
  const q = "SELECT * FROM user WHERE username = ?";
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User Not Found");

    const chackPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!chackPassword) return res.status(400).json("Wrong Password");
    // provide jsonwebtoken
    const token = jwt.sign({ id: data[0].id }, "ldlre8939dodik");

    const { password, ...others } = data[0];
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

// Log Out
export const logOut = (req, res) => {
  res
    .clearCookie("access_token", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User Log Out");
};
