import {Container, Row, Col } from 'react-bootstrap';

import logowhite from '../../assets/images/logo-white.png';

const Footer = () => {
  return (
  
            <footer className="footer-section text-white pt-5">
                <Container>

                    {/* Top Footer */}
                    <Row className="pb-4">

                        {/* Brand */}
                        <Col lg={3} md={6} className="mb-4">
                            <div className="d-flex align-items-center mb-2">
                                <img
                                    src={logowhite}
                                    alt="Pure Wear"
                                    style={{ height: "35px", objectFit: "contain" }}
                                />
                            </div>

                            <p className="small">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit
                            </p>
                        </Col>

                        {/* Categories */}
                        <Col lg={3} md={6} className="mb-4">
                            <h6 className="fw-bold">Categories</h6>
                            <ul className="list-unstyled">
                                <li>Kids</li>
                                <li>Mens</li>
                                <li>Women</li>
                            </ul>
                        </Col>

                        {/* Quick Links */}
                        <Col lg={3} md={6} className="mb-4">
                            <h6 className="fw-bold">Quick Links</h6>
                            <ul className="list-unstyled">
                                <li>Login</li>
                                <li>Register</li>
                            </ul>
                        </Col>

                        {/* Contact */}
                        <Col lg={3} md={6} className="mb-4">
                            <h6 className="fw-bold">Get in Touch</h6>
                            <p className="mb-1">+91-95XXXXXXX</p>
                            <p>info@example.com</p>
                        </Col>

                    </Row>

                    <hr className="border-light" />

                    {/* Features Row */}
                    <Row className="text-center py-3">
                        <Col md={4} className="mb-2">
                            <i className="bi bi-truck me-2"></i> Free Delivery
                        </Col>
                        <Col md={4} className="mb-2">
                            <i className="bi bi-cash me-2"></i> Money Back Guarantee
                        </Col>
                        <Col md={4} className="mb-2">
                            <i className="bi bi-credit-card me-2"></i> Secure Payments
                        </Col>
                    </Row>

                    <hr className="border-light" />

                    {/* Bottom */}
                    <div className="text-center pb-3 small">
                        © 2024 All Rights Reserved
                    </div>

                </Container>
            </footer>
  )
}

export default Footer