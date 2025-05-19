import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa"; // Import the Facebook icon
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className="bg-body-secondary"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            className="logo-small"
            src="/Dr_Whateva_LOGO-01.png"
            alt="Dr. Whateva Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/calendar">
              Calendar
            </Nav.Link>
            <Nav.Link as={Link} to="/dates">
              Upcoming Shows
            </Nav.Link>
            <Nav.Link as={Link} to="/request">
              Make A Request
            </Nav.Link>
            <Nav.Link as={Link} to="/admin">
              Admin Login
            </Nav.Link>
          </Nav>
          {/* Social media icon on the right side */}
          <Nav>
            <Nav.Link
              href="https://www.facebook.com/Dr.Whateva"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} color="#1877F2" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
