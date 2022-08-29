import { Component } from 'react'
import image1 from './images/TINY-BAR.png';
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
            <img src={image1} />
          </Col>
          <Col xl={6} data-aos={"fade-left"}>
            <div className='textwrp'>
              <div>
                <h3>TINY BAR</h3>
                <p>Kom langs voor een kopje koffie of thee met wat lekkers! Toch meer zin in een verfrissend drankje of een kleine
                  versnapering? Kies uit de selectie van zorgvuldig geselecteerde lokale bieren of biologische wijnen en voeg een borrelplankje toe. Bij de Tiny Bar kan je heerlijk ontspannen op een van de sundecks of om het kampvuur.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ImageAndText3