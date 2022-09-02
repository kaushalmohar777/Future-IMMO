import { Component } from 'react'
import insta from './images/insta.png';
import AOS from 'aos';
import "aos/dist/aos.css";
import InstagramFeed from "react-ig-feed";



export class InstaFeed extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000
    });
  }
  render() {
    return (
      <>
      <div data-aos={"fade-up"}><img src={insta}/> </div>
      <InstagramFeed
        token="IGQVJWSEtmbTlhYXdaaGNaRUNPbmotLXpfOGlaU0x4ZAHJMb094MEZApU1h4dF85RDZADejhhaDJ2TnpIV29idWhyTEoyMjRjWk5FbXI5OUx5V19qcWJRdjMzcDl1SkNZAUnVVR3NCOEVGN0JoeHVGSkc3bgZDZD"
        counter="6"
      />
      </>
    )
  }
}

export default InstaFeed