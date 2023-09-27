import { useContext } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/AuthContext";

const Menu = () => {
    const [user, setUser] = useContext(UserContext);

    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'} className="nav-link">Home</Link>
                        <Link to={'/countries'} className="nav-link">Pays</Link>
                        {user ?
                            <span style={{ color: 'white' }}>Bonjour {user?.firstname} {user?.lastname}</span> :
                            <Link to={'/auth/login'} className="nav-link">Se connecter</Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;