function Footer() {
    return (
        <footer>
      <div className="container-fluid foot">
        <div className="social">    
          <a href="https://es-la.facebook.com/" target="_blank"><img src="./images/black_fb_social media_facebook_facebook logo_social network_icon.png" 
          alt="facebook" className="facelogo" /></a>
          <a href="https://twitter.com/?lang=es" target="_blank"><img src="./images/x-social-media-black-icon.png" alt="twitter" className="twlogo" /></a>
          <a href="https://www.instagram.com/" target="_blank"><img src="./images/black_instagram_icon.png" alt="instagram" className="instalogo" /></a>
          <a href="https://www.youtube.com/" target="_blank"><img src="./images/black_youtube_icon.png" alt="youtube" className="ytlogo" /></a>
        </div>
        <div className="fluffy">
        <img src="./images/fluff-std-logo-big.png" alt="logo" width={60} />
        </div>
          <div className="center-foot d-flex d-xl-none">
            <a href="./pages/contact.html">Contact</a>
            <span>-</span>
            <a href="./pages/about-us.html">About Us</a>
            
          </div>
        <div className="copy">
          <p><img src="./images/icons8-copyright-48.png" alt="" width={30} />JP'S 2023</p>
        </div>
      </div>
    </footer>
    )
}

export default Footer