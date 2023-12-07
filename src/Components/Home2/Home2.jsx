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
import Room2 from '/images/audio room 2.jpg'
import Nautilus from '/images/Loudspeakers_Nautilus_desktop.jpg'
import Cx5050 from '/images/Highres_CX_5050.jpg.webp'
import FocalPlain from '/images/focal_home_avion.jpg'
import DenonAvr from '/images/Denon_EU_AVR_CategoryBanner_20.jpg'
import Series600 from '/images/Loudspeakers_600SeriesSBS_Desktop.jpg'

const Home2 = () => {
  return (
    <main>
    <div className="b-divider"></div>
        <div className="container-fluid text-center" data-aos="fade-up" data-aos-duration="300" data-aos-easing="ease-in-out">
          <h4>- Brands we proudly sell -</h4>
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
    <div className="worksGallery" data-aos="fade-up">
          <div className="itemGallery">
            <img src={Room2} className="imgGallery" alt="Music listening with a minimal touch" />
            <div>
              <h3 className="pBottom">Armony of light</h3>
            </div>
          </div>
          <div className="itemGallery">
            <img src={Nautilus} className="imgGallery" alt="The Bowers and Wilkins nautilus are from another world" />
            <div>
              <h3 className="pBottom">Power of the seas</h3>
            </div>
          </div>
          <div className="itemGallery">
            <img src={Cx5050} className="imgGallery" alt="Exquisite British sound" />
            <div>
              <h3 className="pBottom">Pure enjoy</h3>
            </div>
          </div>
          <div className="itemGallery" data-aos="fade-up">
            <img src={FocalPlain} className="imgGallery" alt="The best companion for an audiophile traveller" />
            <div>
              <h3 className="pBottom">Joy of travel</h3>
            </div>
          </div>
          <div className="itemGallery" data-aos="fade-up">
            <img src={DenonAvr} className="imgGallery" alt="Pure Denon sound" />
            <div>
              <h3 className="pBottom">Call to action</h3>
            </div>
          </div>
          <div className="itemGallery" data-aos="fade-up">
            <img src={Series600} className="imgGallery" alt="Finest and unique 600 series from B&W" />
            <div>
              <h3 className="pBottom">The warmth of home</h3>
            </div>
          </div>
        </div>
        </main>
  )
}

export default Home2