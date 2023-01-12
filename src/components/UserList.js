import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export const UserList = () => {
  const { users, deleteUser } = useUser();

  return (
    <ListGroup className="mt-4">
      {users.length > 0 ? (
        <>
          {users.map((user) => {
            return (
              <ListGroup.Item className="d-flex" key={user.id}>
                <strong> {user.name} </strong>
                <div className="ml-auto">
                  <Link
                    to={`/edit/${user.id}`}
                    variant="warning"
                    className="btn btn-warning mr-1"
                  >
                    Edit
                  </Link>
                  <Button onClick={()=>deleteUser(user.id)} variant="danger">
                    Delete
                  </Button>
                </div>
              </ListGroup.Item>
            );
          })}
        </>
      ) : (
        <h5 className="text-center">No Users</h5>
      )}
    </ListGroup>
  );
};
