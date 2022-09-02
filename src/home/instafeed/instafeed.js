import { Component } from 'react'
import insta from './images/insta.png';
import AOS from 'aos';
import "aos/dist/aos.css";


export class InstaFeed extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000
    });
  }
  render() {
    return (
      <div data-aos={"fade-up"}><img src={insta}/> </div>
    )
  }
}

export default InstaFeed