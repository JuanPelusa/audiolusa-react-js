import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import West from '/images/Westchester-II.png'

function AboutUs() {
  return (
    <Container>
      <Row className="about-us">
        <div className="main-contents">
          <span>-</span>
            <h1>About Us</h1>
          <span>-</span>
        </div>    
        <Col data-aos="zoom-in-down">
          <img id="about-img" className="img-fluid" src={West} alt="store space 3" />
        </Col>
        <section className="container-about__text">
          <Col className="about-about">
            <h3>Who we are</h3>
            <p><i>A</i>udiolusa is a company founded by friends who are passionate about high end audio and movie fans.
              <br />Starting in a small living room in Mark's house.
                <br />Dreaming of sharing our passion on the next level.
                <br />This is how through the years this was reflected in the dedication and care that we put every day towards our clients, who are more than clients, friends.
              <br />What started as a game has become a journey full of teachings, learnings and very happy moments.
            </p>
          </Col>
            <Col className="about-mision">
            <h3>Our mission</h3>
            <p><i>W</i>e are driven by what we like, what moves us and what we are a fan of.
              <br />Share what we know and help those who follow our passion or want to start in it.
                <br />That is our mission.
                <br />Transmit positive values, always good energy, provide warmth and professionalism in what we do.
              <br />Understanding and empathizing with the requirement of each person who visits us. 
            </p>
          </Col>
        </section>
      </Row>
    </Container>
  )
}

export default AboutUs