import React from 'react';
import { Navbar, Nav, Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import heroImg1 from '../../assets/images/banner-1.jpg'; // first hero image
import heroImg2 from '../../assets/images/banner-2.jpg'; // second hero image

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

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav className="align-items-center gap-3">
                                <Nav.Link href="#" className="nav-link-custom">Kids</Nav.Link>
                                <Nav.Link href="#" className="nav-link-custom">Mens</Nav.Link>
                                <Nav.Link href="#" className="nav-link-custom">Women</Nav.Link>

                                <Nav.Link href="#" className="icon-hover">
                                    <i className="bi bi-person"></i>
                                </Nav.Link>

                                <Nav.Link href="#" className="icon-hover position-relative">
                                    <i className="bi bi-bag"></i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                                        1
                                    </span>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            {/* 🔥 HERO SECTION WITH CAROUSEL */}
            <section className="hero-section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="text-center text-lg-start">
                            <h1 className="hero-title">Discover Your Style</h1>
                            <p className="hero-subtitle">
                                Trendy collections for Men, Women & Kids. Elevate your fashion game with Pure Wear.
                            </p>
                            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                                <Button variant="dark" className="px-4">Shop Now</Button>
                                <Button variant="outline-dark" className="px-4">Explore</Button>
                            </div>
                        </Col>

                        {/* Carousel Images */}
                        <Col lg={6} className="mt-4 mt-lg-0">
                            <Carousel fade interval={3000} controls={false} indicators={false}>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 hero-image"
                                        src={heroImg1}
                                        alt="Hero Slide 1"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 hero-image"
                                        src={heroImg2}
                                        alt="Hero Slide 2"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Home;