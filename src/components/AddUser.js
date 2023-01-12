import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import { useUser } from "../hooks/useUser";

export const AddUser = () => {
  const [name, setName] = useState("");
  const { addUser } = useUser();
  const navigate = useNavigate();

  const onChange = (e) => {
    setName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name: name,
    };
    addUser(newUser);
    navigate("/");
  };
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formBasicText">
        <Form.Label>User Name </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={onChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="m-1">
        Submit
      </Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};
