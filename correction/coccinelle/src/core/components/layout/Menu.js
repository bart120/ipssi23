//import { useContext } from "react";
import { useState } from "react";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../redux/userSlice";



const Menu = () => {
    const { t, i18n } = useTranslation();
    const user = useSelector((state) => state.user.value);
    const dispatch = useDispatch();


    const signout = () => {
        dispatch(logout());
    }
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">{t('header.title')}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'} className="nav-link">{t('header.home')}</Link>
                        <Link to={'/cars'} className="nav-link">{t('header.cars')}</Link>
                        <Link to={'/cars/edit'} className="nav-link">{t('header.add')}</Link>
                        {user ?
                            <span style={{ color: 'white' }}>Bonjour {user?.firstname} {user?.lastname} <Button className="btn btn-secondary" onClick={signout}>Se déconnecter</Button></span> :
                            <Link to={'/auth/login'} className="nav-link">{t('header.login')}</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;