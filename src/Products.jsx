import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Products.css';

const products = [
  {
    id: 1,
    name: "Floral Lawn Dress",
    price: "Rs. 3,200",
    image: "./images/floral dress.jpg"
  },
  {
    id: 2,
    name: "Embroidered Suit",
    price: "Rs. 4,500",
    image: "./images/embroidedsuit(1).jpeg"
  },
  {
    id: 3,
    name: "Luxury Pret",
    price: "Rs. 6,000",
    image: "./images/embroidedsuit(3).jpeg"
  }
];

const Products = () => {
  return (
    <div className="products-bg">
      <Container className="py-5">
        <h2 className="text-center mb-4 fancy-heading">Our Latest Collection</h2>
        <Row>
          {products.map(product => (
            <Col md={4} sm={6} xs={12} key={product.id} className="mb-4">
              <Card className="product-card">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.price}</Card.Text>
                  <Button variant="dark">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
