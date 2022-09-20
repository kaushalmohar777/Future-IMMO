import { Component } from 'react'
import image1 from './images/TINY-OFFICES.jpg';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./image-and-text2.css";
import AOS from 'aos';
import "aos/dist/aos.css";

export class ImageAndText2 extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000
    });
  }
  render() {
    return (
      <Container className='right-image-section'>
        <Row>

          <Col xl={6} data-aos={"fade-right"}>
            <div className='textwrp'>
              <div>
                <h3>SPACESHIP TINY HOME</h3>
                <p>Ready to work from home? Need a different environment? Then we have exactly what you need! Come and work in one of our Tiny Offices. The abundance of
                   daylight, organic coffee, tea and delicacies ensure that you can work focused all day long. Get out of the bubble and go outside to meet your
                   daily worries too
                   escape and take a walk along the beach or the Kennemermeer. We guarantee you will return home refreshed and ready for that big project.</p>
              </div>
            </div>
          </Col>
          <Col xl={6} data-aos={"fade-left"}>
            <img src={image1} alt="" />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ImageAndText2