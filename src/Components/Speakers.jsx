import React from 'react'

const Speakers = () => {
  return (
    <main>
    <div class="container-fluid">
      <div class="row cols-4">      
        <section>
          <div class="main-contents">
            <span>-</span>
            <h3>Speakers</h3>
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
  </main>
  )
}

export default Speakers