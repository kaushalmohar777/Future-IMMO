import React, { Component } from 'react';
import Slider from './slider/Slider';
import Homesection2 from './home-section2/Home-section2';
import Homeproductsection from './home-product-section/home-product-section';
import ImageAndText from './image-and-text/image-and-text';
import ImageAndText2 from './image-and-text2/image-and-text2';
import ImageAndText3 from './image-and-text3/image-and-text3';
import Testimonials from './testimonials/testimonials';
import ContactInfo from './contact-info/contact-info';
import InstaFeed from './instafeed/instafeed';


export class Home extends Component {
  render() {
    return (
      <>
        <Slider/>
        <Homesection2/>
        <Homeproductsection/>
        <ImageAndText/>
        <ImageAndText2/>
        <ImageAndText3/>
        <Testimonials/>
        <ContactInfo/>
        <InstaFeed/>
      </>
    )
  }
}

export default Home