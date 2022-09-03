import { Component } from 'react'
import insta from './images/insta.png';
import AOS from 'aos';
import "aos/dist/aos.css";
import './instafeed.css';



export class InstaFeed extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000
    });
  }
  render() {
    return (

      <div data-aos={"fade-up"} className='instafedddiv'> 
      <a href='https://www.instagram.com/futureimmo/' target='_blank'> 
          <h3>Follow on @futureimmo</h3>
          <img src={insta} alt='instafed' />
      </a>
      </div>
    )
  }
}

export default InstaFeed