import express from "express";
const app = express();
import mysql from "mysql2";
import morgan from "morgan";
import cors from "cors";

app.use(cors());
app.use(morgan("common"));
app.use(express.json());
//============database==================
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "salmanAzImrafi0394?dMD",
  database: "text",
});

//=============all routes===============
// All Books
app.get("/", (req, res) => {
  res.send("hi");
});
// All Books
app.get("/find/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Create Books
app.post("/add", (req, res) => {
  const q = "INSERT INTO books (`title`,`desc`,`pic`) VALUES (?)";
  const values = [req.body.title, req.body.desc, req.body.pic];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Books Has Been Created");
  });
});

app.delete("/delete/:id", (req, res) => {
  const booksId = req.params.id;
  const q = "DELETE FROM books WHERE id = ?";

  db.query(q, [booksId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Books has been Deleted");
  });
});


app.put("/update/:id", (req, res) => {
  const bookId = req.params.id
  const q = "UPDATE books SET `title` = ?, `desc`=?, `pic`=? WHERE id =?"

  const values = [req.body.title, req.body.desc, req.body.pic];

  db.query(q, [...values,bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Books Has Been Updated");
  });
});

//=============server run===============
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
