import express from 'express'
const app = express()
import mysql from 'mysql2'

//============database==================
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"salmanAzImrafi0394?dMD",
    database:"text"
})

//=============all routes===============
app.get('/', (req,res)=>{
    res.send("hi")
})
app.get('/books', (req,res)=>{
   const q = "SELECT * FROM books"
   db.query(q,(err,data)=>{
    if (err) return res.json(err)
    return res.json(data)
   })
})


//=============server run===============
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});