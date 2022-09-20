import { Component } from 'react'
import image1 from './images/TINY-BAR.jpg';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./image-and-text3.css";
import AOS from 'aos';
import "aos/dist/aos.css";

export class ImageAndText3 extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000
    });
  }
  render() {
    return (
      <Container className='left-image-section last-sec'>
        <Row>
          <Col xl={6} data-aos={"fade-right"}>
            <img src={image1} alt="" />
          </Col>
          <Col xl={6} data-aos={"fade-left"}>
            <div className='textwrp'>
              <div>
                <h3>A-FRAME CABIN</h3>
                <p>Come by for a cup of coffee or tea with something delicious! Still more in the mood for a refreshing drink or a small one
                   snack? Choose from a selection of carefully selected local beers or organic wines and add a snack platter. At the Tiny Bar you can relax on one of the sundecks or around the campfire.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ImageAndText3