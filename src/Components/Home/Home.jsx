import React from 'react'
import { Carousel, Button } from 'react-bootstrap'

const Home = () => {
  return (
    <main className="begin-site">
        <Carousel id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-aos="fade-up" data-aos-duration="200" data-aos-easing="ease-in-out">
        <Carousel.Item interval={2000}>
        <img src="/images/cahiers-tendances-urban-is-natural_0.jpg" className="d-block w-100" 
                alt="Focal aria bookshelf magic natural sound for your music" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img src="/images/cahiers-tendancesrock_0.jpg" className="d-block w-100" 
                alt="Studio motoring speakers for professional mastering and mixing" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img src="/images/ct-music_in_organic.jpg" className="d-block w-100" 
                  alt="Powerful and delightful sound with Focal Sopra floorstanding" />
</Carousel.Item>
        <Carousel.Item interval={2000}>
        <img src="/images/ct-pop.jpg" className="d-block w-100" 
                  alt="Color and magic of pop combined with this Stella utopia" />
      </Carousel.Item>
        </Carousel>        
      </main>
  )
}

export default Home