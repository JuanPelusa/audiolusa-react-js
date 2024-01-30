import React, { useState} from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form } from 'react-bootstrap';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../Firebase/config'


function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

const contactUs = async (e) =>{
  e.preventDefault();
    if(!name || !email || !message ){
      setError('Please complete all fields');
    return;
  }
  try {
    const contactsCollection = collection(db, 'contactMessages');
    const docRef = await addDoc(contactsCollection, {
      name: name,
      email: email,
      message: message,
      timestamp: new Date(),
    });

    console.log('Document written with ID: ', docRef.id);

    setName('');
    setEmail('');
    setMessage('');
    setError('');
  } catch (error) {
    console.error('Error adding contact message to Firestore:', error);
    setError('Failed to submit the contact message. Please try again.');
  }
};


    return (
        <>
        <Container>
        <div className="row contact">
          <div className="main-contents">
            <span>-</span>
            <h1>Contact Us</h1>
            <span>-</span>
          </div>
            <div className="form-area">
              <Container className="form-area">
                <div id="contactBlock" className="row single-form g-0" data-aos="zoom-in-up">
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
                      <div id="form-items">
                        <Form onSubmit={contactUs} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <div className="mb-2">
                          <Form.Label className="form-label">Name</Form.Label>
                          <Form.Control type="text" id="form-control" placeholder="Type your Name" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="mb-2">
                          <Form.Label className="form-label">Email address</Form.Label>
                          <Form.Control type="email" id="form-control" placeholder="Now tell us your Email address" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-2">
                          <Form.Label className="form-label">Your message</Form.Label>
                          <Form.Control type="message" id="form-control" placeholder="What do you want to now" value={message} onChange={(e) => setMessage(e.target.value)} />
                        </div>
                        {error && <p>{error}</p>}
                        <Button type="submit">Submit</Button>
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </div>
          <Container>
            <div className="col map-container">
              <div className="row" >
                <iframe width="300" height="260" src="https://maps.google.com/maps?width=300&amp;height=260&amp;hl=en&amp;q=712%20red%20barl%20lane+(Audiolusa%20Store)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                <Link to={"https://www.maps.ie/population/"}></Link></iframe>
              </div>
            </div>
          </Container>
        <Container className="location">
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
        </Container>
      </Container>
    </>
  )
}

export default Contact