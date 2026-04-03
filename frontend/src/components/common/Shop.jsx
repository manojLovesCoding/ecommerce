import Layout from './Layout';
import { Card, Form, Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import product1 from '../../assets/images/Mens/two.jpg';
import product2 from '../../assets/images/Mens/three.jpg';
import product3 from '../../assets/images/Mens/four.jpg';
import product4 from '../../assets/images/Mens/five.jpg';
import product5 from '../../assets/images/Mens/six.jpg';
import product6 from '../../assets/images/Mens/seven.jpg';

const Shop = () => {
  const categories = ['Kids', 'Mens', 'Kids'];
  const brands = ['Puma', 'Killer', 'Levis', 'Flying Machine'];

  const products = [
    { id: 1, img: product1, title: "Formal Dress for Lady", price: "$70", oldPrice: "$80" },
    { id: 2, img: product2, title: "Nice White & Dress Combination", price: "$45", oldPrice: "$50" },
    { id: 3, img: product3, title: "Yellow & White Dress for Kids", price: "$10", oldPrice: "$10" },
    { id: 4, img: product4, title: "Rounded Neck T-Shirt for Kids", price: "$10", oldPrice: "$10" },
    { id: 5, img: product5, title: "Casual Wear for Boys", price: "$25", oldPrice: "$30" },
    { id: 6, img: product6, title: "Denim Jacket for Girls", price: "$35", oldPrice: "$40" },
  ];

  return (
    <Layout>
      <Container>
        <nav aria-label="breadcrumb" className="py-4">
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Shop</Breadcrumb.Item>
          </Breadcrumb>
        </nav>

        <Row>
          <Col md={3} className="pb-4">
            {/* Categories Card */}
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>Categories</Card.Title>
                {categories.map((category, idx) => (
                  <Form.Check
                    type="checkbox"
                    key={idx}
                    id={`category-${idx}`}
                    label={category}
                    className="mb-2"
                  />
                ))}
              </Card.Body>
            </Card>

            {/* Brands Card */}
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Brands</Card.Title>
                {brands.map((brand, idx) => (
                  <Form.Check
                    type="checkbox"
                    key={idx}
                    id={`brand-${idx}`}
                    label={brand}
                    className="mb-2"
                  />
                ))}
              </Card.Body>
            </Card>
          </Col>

          <Col md={9}>
            {/* Latest Products Section */}
            <section className="py-4">
              <h4 className="mb-4">Latest Products</h4>
              <Row>
                {products.map((product) => (
                  <Col key={product.id} lg={4} md={6} sm={12} className="mb-4">
                    <Card className="shadow-sm h-100">
                      <Card.Img variant="top" src={product.img} />
                      <Card.Body>
                        <Card.Title className="h6">{product.title}</Card.Title>
                        <div className="d-flex gap-2 align-items-center">
                          <span className="fw-bold">{product.price}</span>
                          <small className="text-muted text-decoration-line-through">
                            {product.oldPrice}
                          </small>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </section>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Shop;