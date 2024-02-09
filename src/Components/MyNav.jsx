import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";

const MyNav = () => {
  const location = useLocation();

  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="https://www.arpa.piemonte.it/app/logo-app-meteo/image"
            width="40"
            height="40"
            className="d-inline-block align-top rounded-5"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav className="me-auto fw-bold ">
          <Link
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
            to="/"
          >
            Home
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default MyNav;
