import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "salmanAzImrafi0394?dMD",
  database: "social_media_database",
});
