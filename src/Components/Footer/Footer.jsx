import { Link } from 'react-router-dom'
import Facebook from '/images/black_fb_social media_facebook_facebook logo_social network_icon.png'
import X from '/images/x-social-media-black-icon.png'
import Insta from  '/images/black_instagram_icon.png'
import YouTube from '/images/black_youtube_icon.png'
import FluffBig from '/images/fluff-std-logo-big.png'

function Footer() {
  return (
    <footer>
      <div className="container-fluid foot">
        <div className="social">    
          <Link to="https://es-la.facebook.com/" target="_blank"><img src={Facebook} 
            alt="facebook" className="facelogo" /></Link>
              <Link to="https://twitter.com/?lang=es" target="_blank"><img src={X} alt="twitter" className="twlogo" /></Link>
            <Link to="https://www.instagram.com/" target="_blank"><img src={Insta} alt="instagram" className="instalogo" /></Link>
          <Link to="https://www.youtube.com/" target="_blank"><img src={YouTube} alt="youtube" className="ytlogo" /></Link>
        </div>
        <div className="fluffy">
        <img src={FluffBig} alt="logo" width={60} />
        </div>
          <div className="center-foot d-flex d-xl-none">
            <Link to="/pages/contact.html">Contact</Link>
              <span>-</span>
            <Link to="/pages/about-us.html">About Us</Link>
          </div>
        <div className="copy">
          <p>©️JP'S 2023</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer