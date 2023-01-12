import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export const EditUser = () => {
  const { users, editUser } = useUser();
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });
  const navigate = useNavigate();
  const { id: currentUserId } = useParams();

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find((user) => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users]);

  const onChange = (e) => {
    setSelectedUser({
      ...selectedUser,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    navigate("/");
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formBasicText">
        <Form.Label>User Name </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          value={selectedUser.name}
          onChange={onChange}
          name="name"
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="m-1">
        Updated
      </Button>
      <Link to="/" className="btn btn-danger m-2">
        Cancel
      </Link>
    </Form>
  );
};
