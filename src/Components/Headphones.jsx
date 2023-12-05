import React from 'react'

const Headphones = () => {
  return (
    <main>
    <div class="backMobile">
      <div class="container-fluid">
        <div class="row cols-4">    
          <section class="firts">        
            <div class="main-contents">
            <span>-</span>
              <h1>Headphones</h1>
              <span>-</span>
            </div>
            <div class="display-info d-flex d-xl-none">
              <span>Touch the corner of the image to see info</span>
            </div>
            <div id="cards-container__products" class="container-products" data-aos="fade-up" data-aos-duration="200" data-aos-easing="ease-in-out">
              <div id="productTitle" class="container-fluid">
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
  )
}

export default Headphones