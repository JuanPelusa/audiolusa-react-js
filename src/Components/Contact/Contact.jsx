import React from "react";
import { Link } from "react-router-dom";

function Contact() {
    return (
        <>
        <div className="container">
        <div className="row contact">
          <div className="main-contents">
            <span>-</span>
            <h1>Contact Us</h1>
            <span>-</span>
          </div>
            <div className="form-area">
              <div className="container form-area">
                <div id="contact-block" className="row single-form g-0" data-aos="zoom-in-up">
                  <div className="col-sm-12 col-lg-6">
                    <div className="img-form">
                      <img className="img-fluid contactImgForm" src="../images/store.webp" alt="store space 2" />
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-6">
                    <div className="contact-form">
                      <div className="form-title">
                        <h3>Tell us how can we help you</h3>
                      </div>
                      <div className="form-items">

                          <div className="form-text mb-2 p-2">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control sign" id="exampleInputEmail1" placeholder="Type your Name" required  />
                          </div>
                          <div className="form-text mb-2 p-2">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Now tell us your Email address" required />
                          </div>
                          <div className="form-text mb-2 p-2">
                            <label className="form-label">Your message</label>
                            <input type="message" className="form-control" id="exampleInputPassword1" placeholder="What do you want to now" required  />
                          </div>
                          <button type="submit" className="button">Submit</button>
                          </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="col map-container">
                <div className="row" >
                <iframe width="300" height="260" src="https://maps.google.com/maps?width=300&amp;height=260&amp;hl=en&amp;q=712%20red%20barl%20lane+(Audiolusa%20Store)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <Link to={"https://www.maps.ie/population/"}>Population calculator map</Link></iframe>
                </div>
              </div>
            </div>
            <div className="container location">
              <div className="row location">
                  <div className="col card-title-a">
                    <h4 className="card-title">Where we are?</h4>
                    <p className="card-text">Red Bark Lane 742</p>
                    <p className="card-text">Henderson, Nevada</p>
                    <p className="card-text">Simpson's house</p>
                  </div>
                  <div className="col logo-audiolusa">
                  <Link to={'/'}><img src="../images/fluff-std.png" alt="" /></Link>
                  </div>
                <div className="col card-title-b">
                  <p className="card-text">Call Us</p>
                  <p className="card-text">(543) 4321-5678</p>
                  <p className="card-text">Send us a Whatsapp</p>
                  <p className="card-text">(543) 11 4567-9876</p>
                </div>
              </div>
            </div>
        </div>
      </>
    )
}

export default Contact