import { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fatchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/find/books");
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fatchData();
  }, []);

  const HandleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:5000/delete/" + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container py-5 d-flex flex-wrap">
      {books.map((item) => (
        <Card style={{ width: "18rem" }} className="p-3 m-3 ">
          <Card.Img variant="top" className="images_custom" src={item.pic} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.desc}</Card.Text>
            <Link to={`/update/${item.id}`}>
              <Button variant="primary" className="bgUpdate">
                Update
              </Button>
            </Link>

            <Button
              variant="primary"
              className="deleteUpdate bgDelte"
              onClick={() => HandleDelete(item.id)}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Books;
