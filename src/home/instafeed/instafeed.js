import { Component } from 'react'
import insta from './images/insta.png';
import AOS from 'aos';
import "aos/dist/aos.css";
import './instafeed.css';
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";



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
      </a>
      <InstagramFeed
        token="IGQVJXZAWdqMjZAOeks4U2NfcFBIUDJRNlBmZAFJnNWV5OHM3WmlGMjlNX3RaSmZAjRGl6dV9wVWdCWTBJV1FDQ3dHREtQS1UyVEJHa1VVbEJSclJLUXRwUE5nNmRTMDRMVTRMNm9JYzhIcHJidVhsVGExVwZDZD"
        counter="5"
      />
       </div>
    )
  }
}

export default InstaFeed