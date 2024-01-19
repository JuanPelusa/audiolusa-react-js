import React from 'react'
import Focal from '/images/brand focal.gif'
import Klipsch from '/images/klipsch.png'
import Polk from '/images/polkaudio.png'
import Bw from '/images/bw-logo-4017.png'
import Yamaha from '/images/yamaha-logo.png'
import Hifiman from '/images/hifiman.webp'
import Dali from '/images/dali-red.png'
import Mcintosh from '/images/mcintosh.webp'
import Marantz from '/images/marantz-logo.gif'
import Cambridge from '/images/logo cambridge audio.png'
import Onkyo from '/images/onkyo.gif'

const Home = () => {
  return (
    <div className="begin-site">
      <div className="b-divider"></div>
        <div className="container-fluid text-center" data-aos="fade-up" data-aos-duration="300" data-aos-easing="ease-in-out">
          <h1>- Brands we proudly sell -</h1>
          <div className="row">
            <div className="col logo" data-aos="fade-up">
              <img src={Focal} alt="Focal Logo" />
            </div>
              <div className="col logo" data-aos="fade-up">
                <img src={Klipsch} alt="Klipsch logo" />
              </div>
                <div className="col logo" data-aos="fade-up">
                  <img src={Polk} alt="Polk logo" />
                </div>
                  <div className="col logo" data-aos="fade-up">
                    <img src={Bw} alt="Bowers & Wilkins logo" />
                  </div>
                    <div className="col logo" data-aos="fade-up">
                      <img src={Yamaha} alt="Yamaha logo" />
                    </div>
                  <div className="col logo" data-aos="fade-up">
                    <img src={Hifiman} alt="Hifiman logo" />
                  </div>
                    <div className="col logo" data-aos="fade-up">
                      <img src={Dali} alt="Dali speakers logo" />
                    </div>
                  <div className="col logo" data-aos="fade-up">
                    <img src={Mcintosh} alt="Mcintosh logo" />
                  </div>
                <div className="col logo" data-aos="fade-up">
                  <img src={Marantz} alt="Marantz logo" />
                </div>
              <div className="col logo" data-aos="fade-up">
                <img src={Cambridge} alt="Cambridge audio logo" />
              </div>
            <div className="col logo" data-aos="fade-up">
              <img src={Onkyo} alt="Onkyo logo" />
            </div>
          </div>
        </div>       
    </div>
  )
}

export default Home