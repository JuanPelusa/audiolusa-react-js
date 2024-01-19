import React from 'react'
import Room2 from '/images/audio room 2.jpg'
import Nautilus from '/images/Loudspeakers_Nautilus_desktop.jpg'
import Cx5050 from '/images/Highres_CX_5050.jpg.webp'
import FocalPlain from '/images/focal_home_avion.jpg'
import DenonAvr from '/images/Denon_EU_AVR_CategoryBanner_20.jpg'
import Series600 from '/images/Loudspeakers_600SeriesSBS_Desktop.jpg'

const Home2 = () => {
  return (
    <>
      <div className="worksGallery" data-aos="fade-up">
        <div className="itemGallery">
          <img src={Room2} className="imgGallery" alt="Music listening with a minimal touch" />
          <div>
            <h3 className="pBottom">Harmony of light</h3>
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
    </>
  )
}

export default Home2