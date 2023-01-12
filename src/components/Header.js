import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none", color: "teal" }}>
            CRUD App
          </Link>
        </Navbar.Brand>

        <Nav>
          <Nav.Item>
            <Link className="btn btn-primary" to="/add">
              Add User
            </Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};
