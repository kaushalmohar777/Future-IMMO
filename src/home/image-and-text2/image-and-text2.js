import { Component } from 'react'
import image1 from './images/TINY-OFFICES.png';
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
                <h3>TINY OFFICES</h3>
                <p>Klaar met thuiswerken? Behoefte aan een andere omgeving? Dan hebben wij precies wat jij nodig hebt! Kom werken in een van onze Tiny Offices. De overvloed aan
                  daglicht, biologische koffie, thee en lekkernijen zorgen ervoor dat je de hele dag gefocust te werk kan gaan. Stap uit de bubbel en ga naar buiten om aan jouw
                  dagelijkse beslommeringen te
                  ontsnappen en maak een wandeling langs het strand of het Kennemermeer. We garanderen dat je verfrist en klaar voor dat grote project terugkeert naar huis.</p>
              </div>
            </div>
          </Col>
          <Col xl={6} data-aos={"fade-left"}>
            <img src={image1} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ImageAndText2