import { useContext, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from 'react-router-dom'
import "./home-product-section.css";
import { ShopContext } from "../../context/shopContext";
import AOS from 'aos';
import "aos/dist/aos.css";

const Homeproductsection = () => {

  const { fetchAllProducts, products } = useContext(ShopContext)

  useEffect(() => {
    fetchAllProducts()
    return () => {
      // cleanup
    };
  }, [fetchAllProducts])

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  if (!products) return <div>Loding...</div>
  return (
    <>

      <Container fluid className="productgrid">
        <Row>
          {products.slice(0, 3).map(product => (
            <Col lg={4} key={product.id} data-aos={"fade-right"} className="product-details-p">
              <Link to={`/product/${product.handle}`} style={{ textDecoration: 'none' }}>
                <img src={product.images[0].src} />
                <div className="prod-bottom">
                  <h3> {product.title} </h3>
                </div>
              </Link>
            </Col>
          ))}
        </Row>

      </Container>
    </>
  );

}

export default Homeproductsection;
