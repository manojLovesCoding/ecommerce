import heroImg1 from '../../assets/images/banner-1.jpg'; // first hero image
import heroImg2 from '../../assets/images/banner-2.jpg'; // second hero image
import {Container, Row, Col, Button, Carousel } from 'react-bootstrap';

const Hero = () => {
  return (
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
  )
}

export default Hero