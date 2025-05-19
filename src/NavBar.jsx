import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const NavBar = () => {

    return (
        <Navbar collapseOnSelect expand="lg" fixed="top" className="bg-body-secondary">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img className="logo-small" src="/Dr_Whateva_LOGO-01.png" alt="Dr. Whateva Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/calendar">Calendar</Nav.Link>
                        <Nav.Link as={Link} to="/dates">Upcoming Shows</Nav.Link>
                        <Nav.Link as={Link} to="/request">Make A Request</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

};
export default NavBar;