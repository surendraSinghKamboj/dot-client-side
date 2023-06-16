'use client'
import Carousel from 'react-bootstrap/Carousel';
// import Image from 'next/image';


function TopImgSlider() {
  return (
    <>
    <Carousel className=' mt-20' interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://overlays.co/cdn/shop/files/desktop_banner4_new.jpg?v=1683311796&width=2000"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://overlays.co/cdn/shop/files/Overlays_web_Banner_summer_1.jpg?v=1680191666&width=2000"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default TopImgSlider;