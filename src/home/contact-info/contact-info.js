import { Component } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import contimg from './images/contactimg.png';
import contimg1 from './images/envelp.png';
import contimg2 from './images/mark.png';
import contimg3 from './images/phone.png';
import boder from './images/boder.png';
import './contact-info.css';
import AOS from 'aos';
import "aos/dist/aos.css";

export class ContactInfo extends Component {
    
  componentDidMount() {
    AOS.init({
      duration: 1000
    });
  }

    render() {
        return (
            <>
                <div className='contcactinfowrp'>
                    <Container className='contcactinfo'>
                        <Row>
                            <Col xl={8} className='infosec-left' data-aos={"fade-right"}>
                                <img src={contimg} />
                            </Col>
                            <Col xl={4} className='infosec' data-aos={"fade-left"}>
                                <div>
                                    <h3>Solicitar um retorno<br /> de chamada</h3>
                                    <img src={boder} />
                                    <p>Entre em contato através do formulário ou pelo Whatsapp</p>

                                    <ul>
                                        <li><img src={contimg3} /> <a href='tel:+31 020 244 2324'>Reception: +31 020 244 2324</a> </li>
                                        <li><img src={contimg1} /> <a href='mailto:info@basecamp-ijmuiden.nl'>info@basecamp-ijmuiden.nl</a> </li>
                                        <li><img src={contimg2} /> basecamp ijmuiden kennemermeer 27
                                            1976 gk ijmuiden
                                            the netherlands</li>

                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                </div>

            </>
        )
    }
}

export default ContactInfo