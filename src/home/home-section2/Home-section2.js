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
                <h3>WELCOME TO THE FUTURE OF LIVING</h3>
                <p>
                Come and stay by the sea at Future Immo. Stay overnight in one
                   of the Tiny Lofts, Spaceship Tiny Homes or A-Frame Cabins!</p>

                <p>Minimum stay of two nights.</p>

                <p>
                 Knowing more? Read all about the Basecamp concept here.
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
