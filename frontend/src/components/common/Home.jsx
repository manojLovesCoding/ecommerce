import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Person, Cart } from 'react-bootstrap-icons';
import logo from '../../assets/images/logo.png';

const Home = () => {
    return (
        <>
            <header className="shadow">

                {/* Top Bar */}
                <div className="bg-dark text-center py-2">
                    <span className="text-white">Your Fashion Partner</span>
                </div>

                {/* Main Navbar */}
                <Navbar bg="light" expand="lg" className="py-3">
                    <Container>

                        {/* Logo */}
                        <Navbar.Brand href="#" className="d-flex align-items-center">
                            <img
                                src={logo}
                                alt="Pure Wear"
                                style={{ height: "40px", objectFit: "contain" }}
                            />
                        </Navbar.Brand>

                        {/* Toggle (Mobile) */}
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

                            {/* Menu Links */}
                            <Nav className="align-items-center gap-3">
                                <Nav.Link href="#" className="nav-link-custom">Kids</Nav.Link>
                                <Nav.Link href="#" className="nav-link-custom">Mens</Nav.Link>
                                <Nav.Link href="#" className="nav-link-custom">Women</Nav.Link>

                                <Nav.Link href="#" className="icon-hover">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="currentColor"
                                        className="bi bi-person"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                    </svg>
                                </Nav.Link>

                                <Nav.Link href="#" className="icon-hover position-relative">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="24"
                                        fill="currentColor"
                                        className="bi bi-bag"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                    </svg>

                                    {/* Badge */}
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                                        1
                                    </span>
                                </Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </header>
        </>
    );
};

export default Home;