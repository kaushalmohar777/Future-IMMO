import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ShopContext } from '../context/shopContext';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';

import './SideBar.css'


function SideBar() {

  const { isCartOpen, closeCart, checkout, removItemToCart } = useContext(ShopContext)

  const [show, setShow] = useState(false);

 // const handleClose = () => setShow(false);
 // const handleShow = () => setShow(true);
 if (checkout.lineItems) {

    console.log("length",checkout.lineItems.length);
     return (
       <>
         <Navbar/>
         <Offcanvas placement="end" show={isCartOpen} onHide={closeCart}>
           <Offcanvas.Header closeButton>
             <Offcanvas.Title>My Cart</Offcanvas.Title>
           </Offcanvas.Header>
           <Offcanvas.Body>
                <Container>

                    {checkout.lineItems.length < 1 ?
                                <Row>
                                    <Col>Cart Is Empty </Col>
                                </Row>
                                :
                                <>
                                    {checkout.lineItems && checkout.lineItems.map(item => (
                                        <Row key={item.id} className='cartitem'>
                                           
                                            <Col>
                                                <img src={item.variant.image.src}/>
                                            </Col>
                                            <Col>
                                              <h4>{item.title}</h4>
                                               
                                              Qty {item.quantity}
                                            </Col>
                                            <Col>
                                              {checkout.currencyCode}  {item.variant.price*item.quantity}
                                             
                                              {/* Remove btn */}
                                              <Button onClick={() => removItemToCart(item.id)} className='removeitme'>Remove</Button>
                                            </Col>
                                        </Row>
                                    ))}
                                </>
                            }
                    <div className='cartbottom'>
                        <Row className='cartamount'>
                                <Col sm={6}>Subtotal: </Col>
                                <Col sm={6}>{checkout.currencyCode} {checkout.subtotalPrice} </Col>
                        </Row>
                        <Row className='cartamount'>
                                <Col sm={6}>Total: </Col>
                                <Col sm={6}> Calculated at Checkout</Col>
                        </Row>
                        <Row>
                            <a href={checkout.webUrl} target="_blank" rel="noopener noreferrer">
                                <Button>
                                    Checkout
                                </Button>
                            </a>
                        </Row>

                    </div>

                    
                </Container>

           </Offcanvas.Body>
         </Offcanvas>
       </>
     )
 }
 return null

}

export default SideBar;