import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";
import { useLocation } from 'react-router-dom'

const Update = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [pic, setPic] = useState("");

  const location = useLocation()
  const id =location.pathname.split('/')[2];

  const handaleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.put("http://localhost:5000/update/"+id, {
        title,
        desc,
        pic,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container p-5">
      {" "}
      <Form onSubmit={handaleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Add Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Add Description"
            onChange={(e) => setDesc(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Add Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add Image URL"
            onChange={(e) => setPic(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default Update;
