import { Component } from 'react'
import image1 from './images/DUURZAAMHEID.png';
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
            <img src={image1} />
          </Col>
          <Col xl={6} data-aos={"fade-left"}>
            <div className='textwrp'>
              <div>
                <h3>DUURZAAMHEID</h3>
                <p>Voor veel gasten van Basecamp is duurzaamheid een belangrijke voorwaarde voor een prettig verblijf. Comfort en gemak blijven vanzelfsprekend
                  de belangrijkste peilers, maar voor velen is het net even iets fijner overnachten als je weet dat er gedacht wordt aan het milieu.</p>
                <p>Met het Kennemermeer natuurgebied op een steenworp afstand van Basecamp is ook direct duidelijk waarom we streven naar een positieve impact op het klimaat, de
                  verbetering van de biodiversiteit en ecologisch herstel van de directe omgeving. Duurzaamheid is daarmee onlosmakelijk
                  verbonden aan Basecamp en is als kernwaarde zowel zichtbaar als onzichtbaar verweven in ieder huisje en het hele terrein.</p>

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ImageAndText