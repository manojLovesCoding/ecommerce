import Layout from "./common/Layout";
import { Breadcrumb } from "react-bootstrap";
import { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// ✅ React Bootstrap Icons
import {
    StarFill,
    StarHalf,
    ChevronLeft,
    ChevronRight,
} from "react-bootstrap-icons";

const Product = () => {
    const images = ["/p1.jpg", "/p2.jpg", "/p3.jpg", "/p4.jpg"];
    const [mainImage, setMainImage] = useState(images[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(index);
        setMainImage(images[index]);
    };

    const handleNext = () => {
        const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(index);
        setMainImage(images[index]);
    };

    return (
        <Layout>
            <div className="container">
                {/* Breadcrumb */}
                <div className="row">
                    <nav aria-label="breadcrumb" className="py-4">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/shop">Shop</Breadcrumb.Item>
                            <Breadcrumb.Item active>Product</Breadcrumb.Item>
                        </Breadcrumb>
                    </nav>
                </div>

                <div className="row align-items-start">
                    {/* LEFT SIDE */}
                    <div className="col-12 col-md-6 mb-5">
                        <div className="d-flex">
                            {/* Thumbnails */}
                            <div className="me-3 d-flex flex-column">
                                {images.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        alt=""
                                        onClick={() => {
                                            setMainImage(img);
                                            setCurrentIndex(i);
                                        }}
                                        style={{
                                            width: "70px",
                                            height: "90px",
                                            objectFit: "cover",
                                            cursor: "pointer",
                                            marginBottom: "10px",
                                            border:
                                                mainImage === img ? "2px solid black" : "1px solid #ddd",
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Main Image */}
                            <div className="position-relative flex-grow-1 text-center">
                                <img
                                    src={mainImage}
                                    alt="product"
                                    style={{
                                        width: "100%",
                                        maxHeight: "900px",
                                        objectFit: "cover",
                                    }}
                                />

                                <ChevronLeft
                                    size={30}
                                    onClick={handlePrev}
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "10px",
                                        cursor: "pointer",
                                        transform: "translateY(-50%)",
                                    }}
                                />

                                <ChevronRight
                                    size={30}
                                    onClick={handleNext}
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        right: "10px",
                                        cursor: "pointer",
                                        transform: "translateY(-50%)",
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-12 col-md-6">
                        <h3>Formal Dress for Lady</h3>

                        <div className="d-flex align-items-center mb-2">
                            <StarFill color="#ffc107" />
                            <StarFill color="#ffc107" />
                            <StarFill color="#ffc107" />
                            <StarFill color="#ffc107" />
                            <StarHalf color="#ffc107" />
                            <span className="ms-2 text-muted">10 Reviews</span>
                        </div>

                        <h4>
                            $70{" "}
                            <span className="text-muted text-decoration-line-through">$80</span>
                        </h4>

                        <p className="mb-1">100% Original Products</p>
                        <p className="mb-1">Pay on delivery might be available</p>
                        <p className="mb-3">Easy 15 days returns and exchanges</p>

                        <strong>Select Size</strong>
                        <div className="mb-3">
                            {["S", "M", "L", "XL"].map((size) => (
                                <button key={size} className="btn btn-outline-dark me-2">
                                    {size}
                                </button>
                            ))}
                        </div>

                        <button className="btn btn-primary px-4 py-2">ADD TO CART</button>

                        <p className="mt-3 text-muted">SKU: FFGG2</p>
                    </div>
                </div>

                {/* ✅ TABS SECTION ADDED HERE */}
                <div className="row mt-5 pb-5">
                    <div className="col-12">
                        <Tabs
                            defaultActiveKey="profile"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="home" title="Description">
                                Tab content for Description
                            </Tab>
                            <Tab eventKey="profile" title="reviews (10)">
                                Reviews Area
                            </Tab>
                        </Tabs>
                    </div>
                </div>

            </div>
        </Layout>
    );
};

export default Product;