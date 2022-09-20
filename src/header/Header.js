import { Component, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'
import "./Header.css";

import logo from "./images/logo.png";
import phoneimg from "./images/phone.png";

import SideBar from "../Components/SideBar";


const Header = () => {
  const [show, setShow] = useState(false);
    return (
        <Container fluid sticky="top">
          <Row className="header">
          <Col>
          <Link className="navbar-brand" to='/'>
            {" "}<img src={logo} />{" "}
          </Link>
          </Col>
           <Col className="headtopright">
              <ul>
                <li><SideBar obj={{show:show,setShow:setShow}}></SideBar></li>
                <li><a href="tel:+1 420 6969 6969"><img src={phoneimg}/> +1 420 6969 6969</a></li>
                <li className="headbtn"><a href="#footerMain">Contact Us</a></li>
              </ul>
           </Col>
          </Row>
        </Container>

    );
  
}

export default Header;
