import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Mc from '/images/mcintosh.png';

function Services() {
  return (
    <>
      <Container fluid>
        <Row className="services">
          <Col className="main-contents">
            <span>-</span>
            <h1>Know our services</h1>
            <span>-</span>
          </Col>  
        </Row> 
      </Container>
    <Container>
      <Row className="service-one">
        <Col className="upper-container">
          <img src={Mc} alt="service example" />
        </Col>
        <Col className="services-text__container">
          <p><i>A</i>t Audiolusa we have a team of specialized advisors for every need.
            <br /><i>W</i>e know about the pleasure of listening to music or enjoying those crucial moments in our favorite film content.
            <br /><i>C</i>ome visit us and discover everything we have to offer.
          </p>
        </Col>
      </Row>
        <Row className="service-two">
          <Col className="bottom-container">
          <iframe
            width="630"
            height="544"
            src="https://www.youtube.com/embed/mWXASDbymuE?si=XMienJ8oRG14v-H2"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen  // Add allowfullscreen attribute
          />
          </Col>
          <Col className="services-text__container">
            <p><i>W</i>e know that enjoying a movie or your favorite series as if you were watching it in one of the big movie theaters from your home
              it's something amazing.
              <br /><i>F</i>or this, we have a team of construction professionals specialized in dedicated home theaters and music listening rooms.
              <br /><i>I</i>t's time to <span className="bk-third"><u>enjoy it!</u></span> 
            </p>
          </Col>
        </Row>
      </Container>
    </>
  ) 
}

export default Services