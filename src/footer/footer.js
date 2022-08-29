import  { Component } from 'react'

import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './footer.css';
import footerlogo from './images/footer.png';
import payment from './images/payment.png';

export class Footer extends Component {
  render() {
    return (
     <>
        <footer className='footer-man' id='footerMain'>
            <Container>
                <Row className='footerrow1'>
                    <Col>
                        <h3>Basecamp</h3>
                        <ul className='footmenu'>
                            <li><a href='#'>Tiny Loft</a> </li>
                            <li><a href='#'>Beach House</a> </li>
                            <li><a href='#'>Mill house</a> </li>
                        </ul>
                    </Col>
                    <Col>
                      <h3>Social Media</h3>
                       <ul className='footmenu'>
                            <li><a href='#'>Facebook</a> </li>
                            <li><a href='#'>Instagram</a> </li>
                        </ul>
                    </Col>
                    <Col xl={5}>
                      <h3>Join our Newsletter</h3>
                      <p>Sign up for our newsletters and receive the latest news and tiny house deals in your email inbox</p>

                      <Form className='newsform'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          
                          <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                         Subscribe Now
                        </Button>
                      </Form>

                    </Col>
                </Row>
                <Row className='footerrow2'>
                    <Col className='footinfo'>
                      <h3>Contact information</h3>
                        <ul>
                            <li><i className="fa fa-phone" aria-hidden="true"></i><a href='tel:+31 020 244 2324'>Phone: +31 020 244 2324 </a> </li>
                            <li><i className="fa fa-envelope" aria-hidden="true"></i> <a href='mailto:info@basecamp-ijmuiden.nl'>Email: info@basecamp-ijmuiden.nl</a> </li>
                            <li><i className="fa fa-map-marker" aria-hidden="true"></i>basecamp ijmuiden
                                kennemermeer 27
                                1976 gk ijmuiden
                                the netherlands</li>
                        </ul>
                    </Col>
                    <Col xl={5}>
                      <img src={footerlogo} className="footlogo"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                     
                    </Col>
                    <Col xl={5}>
                      <img src={payment}/>
                    </Col>
                </Row>
              
            </Container>
            <Container fluid className='footcopyright'>
                   <Row>
                      <Col>
                      <p>©2022 Basecamp.All rights reserved.</p>
                      </Col>
                      <Col>
                        <ul>
                          <li>Terms of Use</li>
                          <li>|</li>
                          <li>Privacy Policy</li>
                        </ul>
                      </Col>
                  </Row>
            </Container>
        </footer>
     </>
    )
  }
}

export default Footer