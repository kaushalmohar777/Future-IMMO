import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import './Home-section2.css';
import AOS from 'aos';
import "aos/dist/aos.css";

export class Homesection2 extends Component {


  componentDidMount() {
    AOS.init({
      duration : 1000
    });
  }

  render() {
    return (
      <>
        <div className="homesection2">
          <Container >
            <Row>
              <Col data-aos={"fade-up"}>
                <h3>VAKANTIEPARK ‘NIEUWE STIJL’</h3>
                <p>
                  Kom verblijven aan zee bij Basecamp IJmuiden. Overnacht in één
                  van de 32 Tiny Houses, boek een meeting room of raak
                  geïnspireerd. </p>

                <p>Minimaal verblijf van twee nachten.</p>

                <p>
                  Meer weten? Lees dan hier alles over het Basecamp concept.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Homesection2;
