import { Component } from 'react'
import image1 from './images/DURABILITY.jpg';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./image-and-text.css";
import AOS from 'aos';
import "aos/dist/aos.css";

export class ImageAndText extends Component {

  componentDidMount() {
    AOS.init({
      duration: 1000
    });
  }
  render() {
    return (
      <Container className='left-image-section'>
        <Row>
          <Col xl={6} data-aos={"fade-right"}>
            <img src={image1} alt="" />
          </Col>
          <Col xl={6} data-aos={"fade-left"}>
            <div className='textwrp'>
              <div>
                <h3>SUSTAINABILITY</h3>
                <p>For many Future Immo guests, sustainability is an important condition for a pleasant stay. Comfort and convenience remain self-evident
                   the most important pillars, but for many it is just that little bit nicer to spend the night if you know that the environment is being considered.</p>
              

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ImageAndText