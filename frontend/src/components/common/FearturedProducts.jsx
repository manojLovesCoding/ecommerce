import product1 from '../../assets/images/Mens/two.jpg';
import product2 from '../../assets/images/Mens/three.jpg';
import product3 from '../../assets/images/Mens/four.jpg';
import product4 from '../../assets/images/Mens/five.jpg';
import product5 from '../../assets/images/Mens/six.jpg';
import product6 from '../../assets/images/Mens/seven.jpg';
import { Col, Container, Row } from 'react-bootstrap';

const products = [
    {
        id: 1,
        img: product1,
        title: "Formal Dress for Lady",
        price: "$70",
        oldPrice: "$80",
    },
    {
        id: 2,
        img: product2,
        title: "Nice White & Dress Combination",
        price: "$45",
        oldPrice: "$50",
    },
    {
        id: 3,
        img: product3,
        title: "Yellow & White Dress for Kids",
        price: "$10",
        oldPrice: "$10",
    },
    {
        id: 4,
        img: product4,
        title: "Rounded Neck T-Shirt for Kids",
        price: "$10",
        oldPrice: "$10",
    },
    {
        id: 5,
        img: product5,
        title: "Casual Wear for Boys",
        price: "$25",
        oldPrice: "$30",
    },
    {
        id: 6,
        img: product6,
        title: "Denim Jacket for Girls",
        price: "$35",
        oldPrice: "$40",
    },
];

const FearturedProducts = () => {
    return (
        <>
            {/* 🔥 NEW ARRIVALS SECTION */}
            <section className="py-5 bg-light">
                <Container>
                    <h2 className="mb-4">Featured Products</h2>

                    <Row>
                        {products.map((product) => (
                            <Col key={product.id} lg={3} md={4} sm={6} className="mb-4">
                                <div className="product-card p-2 bg-white rounded shadow-sm h-100">

                                    <img
                                        src={product.img}
                                        alt={product.title}
                                        className="img-fluid rounded"
                                    />

                                    <div className="mt-3">
                                        <h6 className="mb-1">{product.title}</h6>

                                        <div className="d-flex gap-2 align-items-center">
                                            <span className="fw-bold">{product.price}</span>
                                            <small className="text-muted text-decoration-line-through">
                                                {product.oldPrice}
                                            </small>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default FearturedProducts