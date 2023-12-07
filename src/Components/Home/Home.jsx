import React from 'react'
import { Carousel } from 'react-bootstrap'
import Urban from '/images/cahiers-tendances-urban-is-natural_0.jpg'
import Rock from '/images/cahiers-tendancesrock_0.jpg'
import Organic from '/images/ct-music_in_organic.jpg'
import Pop from '/images/ct-pop.jpg'

const Home = () => {
  return (
    <main className="begin-site">
        <Carousel id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-aos="fade-up" data-aos-duration="200" data-aos-easing="ease-in-out">
        <Carousel.Item interval={2000}>
        <img src={Urban} className="carousel-img d-block w-100" 
                alt="Focal aria bookshelf magic natural sound for your music" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img src={Rock} className="carousel-img d-block w-100" 
                alt="Studio motoring speakers for professional mastering and mixing" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img src={Organic} className="carousel-img d-block w-100" 
                  alt="Powerful and delightful sound with Focal Sopra floorstanding" />
</Carousel.Item>
        <Carousel.Item interval={2000}>
        <img src={Pop} className="carousel-img d-block w-100" 
                  alt="Color and magic of pop combined with this Stella utopia" />
      </Carousel.Item>
        </Carousel>        
      </main>
  )
}

export default Home