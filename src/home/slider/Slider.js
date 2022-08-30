import Carousel from 'react-bootstrap/Carousel';
import { useEffect } from "react";
import slideimg from './images/slide1.png';
import './Slider.css';
import AOS from 'aos';
import "aos/dist/aos.css";

function Slider() {

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <Carousel className='sliderman' data-aos={"fade"}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slideimg}
          alt="First slide"
        />
        <Carousel.Caption data-aos={"fade-up"} data-aos-delay="500">
          <h3>Welcome to<br/> Future Immo</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slideimg}
          alt="Second slide"
        />
        <Carousel.Caption data-aos={"fade-up"}>
          <h3>Welcome to<br/> Future Immo</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;