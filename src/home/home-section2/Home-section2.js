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
                <h3>HOLIDAY PARK "NEW STYLE"</h3>
                <p>
                Come and stay by the sea at Future Immo. Stay overnight in one
                   of the 32 Tiny Houses, book a meeting room or touch
                   inspired.</p>

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
