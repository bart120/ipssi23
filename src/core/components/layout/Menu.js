import { useContext } from "react";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/AuthContext";

const Menu = () => {
    const [user, setUser] = useContext(UserContext);

    const logout = () => {
        setUser(undefined);
        sessionStorage.removeItem('USER');
    }
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
                            <span style={{ color: 'white' }}>Bonjour {user?.firstname} {user?.lastname} <Button className="btn btn-secondary" onClick={logout}>Se déconnecter</Button></span> :
                            <Link to={'/auth/login'} className="nav-link">Se connecter</Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;