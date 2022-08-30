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
                <h3>DURABILITY</h3>
                <p>For many Basecamp guests, sustainability is an important condition for a pleasant stay. Comfort and convenience remain self-evident
                   the most important pillars, but for many it is just that little bit nicer to spend the night if you know that the environment is being considered.</p>
                <p>With the Kennemermeer nature reserve a stone's throw from Basecamp, it is immediately clear why we strive for a positive impact on the climate, the
                   improving biodiversity and ecological restoration of the immediate environment. Sustainability is therefore inextricable
                   connected to Basecamp and as a core value is both visibly and invisibly woven into every house and the entire site.</p>

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ImageAndText