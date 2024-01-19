import React from "react";

const Services = () => {

  return (
    <>
      <div className="container-fluid">
        <div className="row services">
          <div className="col main-contents">
            <span>-</span>
            <h1>Know our services</h1>
            <span>-</span>
          </div>  
        </div> 
      </div>
    <div className="container">
      <div className="row service-one">
        <div className="col upper-container">
          <img src="../images/mcintosh.png" alt="service example" / >
        </div>
        <div className="col services-text__container">
          <p><i>A</i>t Audiolusa we have a team of specialized advisors for every need.
            <br /><i>W</i>e know about the pleasure of listening to music or enjoying those crucial moments in our favorite film content.
            <br /><i>C</i>ome visit us and discover everything we have to offer.
          </p>
        </div>
      </div>
        <div className="row service-two">
          <div className="col bottom-container">
            <iframe width="630" height="544" src="https://www.youtube.com/embed/pNtY6BZOk7M" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
          </div>
          <div className="col services-text__container">
            <p><i>W</i>e know that enjoying a movie or your favorite series as if you were watching it in one of the big movie theaters from your home
              it's something amazing.
              <br /><i>F</i>or this, we have a team of construction professionals specialized in dedicated home theaters and music listening rooms.
              <br /><i>I</i>t's time to <span className="bk-third"><u>enjoy it!</u></span> 
            </p>
          </div>
        </div>
      </div>
    </>
  ) 
}

export default Services